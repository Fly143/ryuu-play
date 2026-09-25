"""Catalog loader + effect text matcher + TypeScript/JSON emitter for ryuu-play card port.

Reads pokemon-tcg-data dumps under pokemon-tcg-data-master/ and emits:
  packages/sets/src/port/plans.json   (CardPlan[])
  packages/sets/src/port/coverage.json
"""
from __future__ import annotations

import json
import re
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any, Optional

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "pokemon-tcg-data-master"
OUT = ROOT / "packages" / "sets" / "src" / "port"

# best-effort fallback lives alongside
import sys
sys.path.insert(0, str(Path(__file__).resolve().parent))
from best_effort import best_effort_attack, best_effort_trainer, best_effort_power  # noqa: E402

SET_CODE_OVERRIDES = {
    "base1": "BS",
    "base2": "BS2",
    "base3": "FO",
    "base4": "JU",
    "base5": "TR",
    "base6": "G2",
    "basep": "BP",
    "dp1": "DP",
    "dp2": "MT",
    "dp3": "SW",
    "dp4": "GE",
    "dp5": "LA",
    "dp6": "SF",
    "dp7": "PL",
    "dp8": "RR",
    "pl1": "PL",
    "pl2": "RR",
    "pl3": "SV",
    "pl4": "AR",
    "hgss1": "HS",
    "hgss2": "UL",
    "hgss3": "UD",
    "hgss4": "TM",
    "bw1": "BW",
    "bw2": "EPO",
    "bw3": "NVI",
    "bw4": "DEX",
    "bw5": "DRX",
    "bw6": "BCR",
    "bw7": "PLS",
    "bw8": "PLB",
    "bw9": "FLF",
    "bw10": "FFI",
    "bw11": "PHF",
    "bw12": "ROS",
    "bw13": "AOR",
    "bw14": "BKT",
    "bw15": "BKP",
    "xy1": "XY",
    "xy2": "FLF",
    "xy3": "FFI",
    "xy4": "PHF",
    "xy5": "ROS",
    "xy6": "AOR",
    "xy7": "BKT",
    "xy8": "BKP",
    "xy9": "GEN",
    "xy10": "FAC",
    "xy11": "STS",
    "xy12": "EVO",
    "sm1": "SUM",
    "sm2": "GRI",
    "sm3": "BUS",
    "sm4": "CRI",
    "sm5": "UPR",
    "sm6": "FLI",
    "sm7": "CES",
    "sm8": "DRM",
    "sm9": "UNB",
    "sm10": "UNM",
    "sm11": "CEC",
    "swsh1": "SSH",
    "swsh2": "RCL",
    "swsh3": "DAA",
    "swsh4": "VIV",
    "swsh5": "SHF",
    "swsh6": "BST",
    "swsh7": "CRE",
    "swsh8": "EVS",
    "swsh9": "FST",
    "swsh10": "BRS",
    "swsh11": "ASR",
    "swsh12": "PGO",
    "swsh12pt5": "CRZ",
    "swsh13": "SIT",
    "swsh3pt5": "SHF",
    "sv1": "SVI",
    "sv2": "PAL",
    "sv3": "OBF",
    "sv3pt5": "MEW",
    "sv4": "PAR",
    "sv5": "TEF",
    "sv6": "TWM",
    "sv6pt5": "SFA",
    "sv7": "SCR",
    "sv8": "SSP",
    "sv8pt5": "PRE",
}


def norm_text(s: str) -> str:
    if not s:
        return ""
    s = unicodedata.normalize("NFKC", s)
    s = s.replace("’", "'").replace("‘", "'")
    s = s.replace("“", '"').replace("”", '"')
    s = s.replace("–", "-").replace("—", "-")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def slugify(name: str) -> str:
    s = unicodedata.normalize("NFKD", name)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s or "card"


# ---------------------------------------------------------------------------
# Effect matchers: return list of EffectOp strings or None if unmatched
# ---------------------------------------------------------------------------

COND = r"(asleep|confused|paralyzed|poisoned|burned|asleep|confusion|paralysis|poison|burn)"


WORDS = {"a": 1, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10}


def parse_count(s: str, default: int = 1) -> int:
    if s.isdigit():
        return int(s)
    return WORDS.get(s.lower(), default)


def match_attack(text: str, damage: str) -> Optional[list[str]]:
    t = norm_text(text).lower()
    if not t or t in {"", "does nothing.", "does nothing"}:
        return []

    # Shuffle hand into deck, draw N
    m = re.search(r"shuffle your hand into your deck,?\s*then,? draw (\d+|two|three|four|five|six|seven|eight|nine|ten) cards?", t)
    if m:
        return [f"shuffleDraw:{parse_count(m.group(1))}"]
    # Opponent may draw N. Either way, you may draw N.
    m = re.search(r"your opponent may draw (\d+) cards?\.\s*either way,? you may draw (\d+) cards?", t)
    if m:
        return [f"bothDraw:{m.group(1)}"]

    # Flip a coin. If tails, X does N damage to itself.
    m = re.search(
        r"flip a coin\.\s*if tails,?.{0,60}?does (\d+) damage to itself",
        t,
    )
    if m:
        return [f"flipHeadsSelfDamage:{m.group(1)}"]

    # Flip a coin. If heads, the Defending Pokémon is now X.  (also "your opponent's Active Pokémon")
    m = re.search(
        rf"flip a coin\.\s*if heads,?\s*(?:the\s+)?(?:defending pok[eé]mon|your opponent's active pok[eé]mon) is now {COND}",
        t,
    )
    if m:
        return [f"flipHeadsSpecial:{m.group(1).upper()}"]

    # "Your opponent's Active Pokémon is now X." / "The Defending Pokémon is now X."
    m = re.search(
        rf"(?:the\s+)?(?:defending pok[eé]mon|your opponent's active pok[eé]mon) is now {COND}\.?$",
        t,
    )
    if m and "flip" not in t:
        return [f"specialDefending:{m.group(1).upper()}"]

    # Flip N coins. This attack does X damage times the number of heads. / for each heads
    m = re.search(
        r"flip (\w+) coins?\.\s*(?:this attack does )?(\d+) damage (?:times|for each) (?:the number of )?heads",
        t,
    )
    if m:
        times = parse_count(m.group(1), 1)
        return [f"flipTimesDamage:{times}:{m.group(2)}"]

    # During your opponent's next turn, the Defending Pokémon can't retreat.
    if re.search(r"during your opponent's next turn, (?:the )?(?:defending|opponent's active) pok[eé]mon can't retreat", t):
        return ["cantRetreatNextTurn"]
    if "can't retreat" in t and "next turn" in t:
        return ["cantRetreatNextTurn"]

    # Flip a coin. If heads, during your opponent's next turn, prevent all damage
    if re.search(r"flip a coin\.\s*if heads,?\s*during your opponent's next turn,?\s*prevent all damage", t):
        return ["preventDamageNextTurn"]
    if re.search(r"prevent all damage (?:done to|to) this pok[eé]mon", t) and "next turn" in t:
        return ["preventDamageNextTurn"]

    # During your next turn, this Pokémon takes N less damage
    m = re.search(r"during your next turn, this pok[eé]mon takes (\d+) less damage", t)
    if m:
        return [f"reduceDamageNextTurn:{m.group(1)}"]
    m = re.search(r"during your opponent's next turn, this pok[eé]mon takes (\d+) less damage", t)
    if m:
        return [f"reduceDamageNextTurn:{m.group(1)}"]

    # Attach a Basic X Energy card from your discard pile to this Pokémon.
    if re.search(r"attach a basic \w+ energy card? from your discard pile to this pok[eé]mon", t):
        return ["attachBasicFromDiscard"]
    if re.search(r"attach a basic energy card? from your discard pile to this pok[eé]mon", t):
        return ["attachBasicFromDiscard"]

    # Discard a Special Energy from your opponent's Active Pokémon.
    if re.search(r"discard a special energy from your opponent's active", t):
        return ["discardEnergyDefending:1"]
    m = re.search(r"discard (\d+|a|an) (?:special |basic )?energy(?: cards)? from your opponent's active", t)
    if m:
        n = 1 if m.group(1) in ("a", "an") else parse_count(m.group(1))
        return [f"discardEnergyDefending:{n}"]

    # Search your deck for up to N cards and put them into your hand.
    m = re.search(r"search your deck for up to (\w+|\d+) cards? and put them into your hand", t)
    if m:
        return [f"searchAnyToHand:{parse_count(m.group(1), 1)}"]

    # Flip a coin. If heads, this attack does 20 damage plus 10 more damage.
    m = re.search(r"flip a coin\.\s*if heads,?\s*this attack does (\d+) damage plus (\d+) more damage", t)
    if m:
        return [f"flipHeadsAddDamage:{m.group(2)}"]

    # PlusPower: if the Pokémon this card is attached to ...
    if re.search(r"attach pluspower to 1 of your pok[eé]mon", t) or "pluspower" in t[:20]:
        return ["plusPowerMarker:10"]

    # Flip a coin. If heads, this attack does N more damage. (already earlier, keep for + more damage variants)
    m = re.search(r"this attack does (\d+) (?:damage )?plus (\d+) more damage", t)
    if m and "flip" in t:
        return [f"flipHeadsAddDamage:{m.group(2)}"]

    # "This attack does N damage for each heads" without "flip N coins" prefix — 1 coin approx
    m = re.search(r"this attack does (\d+) damage for each heads", t)
    if m:
        return [f"flipTimesDamage:1:{m.group(1)}"]

    # "Put N damage counters on the Defending Pokémon"
    m = re.search(r"put (\d+) damage counters? on (?:the )?(?:defending|your opponent's active) pok[eé]mon", t)
    if m and "for each" not in t and "flip" not in t:
        return [f"bonusDamagePer:{int(m.group(1))*10}:1"]

    # During your next turn, this Pokémon can't attack
    if re.search(r"during your next turn, this pok[eé]mon can't (?:attack|use attacks)", t):
        return ["cantAttackNextTurn"]

    # Rough Skin / Poison Point
    if re.search(r"if this pok[eé]mon is .{0,40}damaged by an (?:opponent's )?attack", t):
        if "poison" in t:
            return ["poisonPoint"]
        return ["roughSkin"]

    # Search deck for Basic Energy and attach to this Pokémon
    if re.search(r"search your deck for (?:a |up to \d+ )?basic [\w ]*energy cards?.{0,40}attach (?:it|them) to this pok[eé]mon", t):
        m = re.search(r"up to (\d+|two|three)", t)
        n = parse_count(m.group(1), 1) if m else 1
        return [f"searchEnergyToSelf"] + (["searchEnergyToSelf"] * (n - 1) if n > 1 else [])
    if re.search(r"search your deck for a basic .*energy card and attach it to this pok[eé]mon", t):
        return ["searchEnergyToSelf"]

    # Search deck for Basic Energy to hand
    m = re.search(r"search your deck for up to (\d+|two|three) basic energy cards?.{0,40}put them into your hand", t)
    if m:
        return [f"searchEnergyToHand:{parse_count(m.group(1))}"]
    if re.search(r"search your deck for (?:a |an )?basic energy card.{0,30}into your hand", t):
        return ["searchEnergyToHand:1"]

    # During your opponent's next turn, the Defending Pokémon can't use attacks / attack
    if re.search(r"during your opponent's next turn, (?:the )?(?:defending|opponent's active) pok[eé]mon can't (?:use attacks|attack)", t):
        return ["cantAttackOpponentNextTurn"]
    if re.search(r"can't use attacks during your opponent's next turn", t):
        return ["cantAttackOpponentNextTurn"]
    if re.search(r"this pok[eé]mon can't attack during your next turn", t):
        return ["cantAttackNextTurn"]

    # Put N damage counters on each of your opponent's Pokémon
    m = re.search(r"put (\d+) damage counters? on each of your opponent's pok[eé]mon", t)
    if m:
        return [f"putCountersEachOpponent:{int(m.group(1))*10}"]

    # Discard the top card(s) of your opponent's deck
    m = re.search(r"discard the top (\d+|a|an|two|three) cards? of your opponent's deck", t)
    if m:
        n = 1 if m.group(1) in ("a", "an") else parse_count(m.group(1))
        return [f"millOpponent:{n}"]
    if "discard the top card of your opponent's deck" in t:
        return ["millOpponent:1"]

    # You may draw cards until you have N cards in your hand
    m = re.search(r"draw cards until you have (\d+) cards? in your hand", t)
    if m:
        return [f"drawUntilHand:{m.group(1)}"]

    # Switch this Pokémon with 1 of your Benched Pokémon
    if re.search(r"switch this pok[eé]mon with 1 of your benched", t):
        return ["switchSelf"]

    # Your opponent switches the Defending / Active with Benched
    if re.search(r"your opponent switches (?:his or her |their |the )?(?:defending|active) pok[eé]mon", t):
        return ["gustOpponent"]
    if re.search(r"switch 1 of your opponent's benched pok[eé]mon with (?:his or her |their )?active", t):
        return ["gustOpponent"]

    # Flip a coin until tails. This attack does N damage times heads
    m = re.search(r"flip a coin until (?:you get )?tails\.\s*this attack does (\d+) damage times", t)
    if m:
        return [f"flipUntilTailsTimes:{m.group(1)}"]
    m = re.search(r"flip a coin until (?:you get )?tails\.\s*this attack does (\d+) damage for each heads", t)
    if m:
        return [f"flipUntilTailsTimes:{m.group(1)}"]

    # This attack's damage isn't affected by any effects on your opponent's Active
    if re.search(r"this attack's damage isn't affected by any effects", t):
        return ["ignoreAllEffects"]

    # Flip a coin. If heads, discard an Energy attached to your opponent's Active
    if re.search(r"flip a coin\.\s*if heads,?\s*discard an energy attached to your opponent", t):
        return ["flipHeadsDiscardEnergyOpponent"]

    # Prevent all effects of your opponent's attacks, except damage
    if re.search(r"prevent all effects of your opponent's attacks, except damage", t):
        return ["preventEffectsNextTurn"]

    # Search deck for Energy (any) and attach to this Pokémon
    if re.search(r"search your deck for (?:a |an |up to \d+ )?[\w ]*energy cards?.{0,50}attach (?:it|them|a card) to this pok[eé]mon", t):
        return ["searchEnergyToSelf"]

    # This Pokémon can't use X during your next turn (attack lock)
    if re.search(r"this pok[eé]mon can't use .{0,30} during your next turn", t):
        return ["cantAttackNextTurn"]
    if re.search(r"this pok[eé]mon can't attack during your next turn", t):
        return ["cantAttackNextTurn"]

    # Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn
    if re.search(r"flip a coin\.\s*if heads,?\s*(?:the )?(?:defending|opponent's active) pok[eé]mon can't attack", t):
        return ["cantAttackOpponentNextTurn"]

    # Flip a coin. If heads, prevent all damage done to X during your opponent's next turn
    if re.search(r"flip a coin\.\s*if heads,?\s*prevent all damage.{0,40}during your opponent's next turn", t):
        return ["preventDamageNextTurn"]
    if re.search(r"flip a coin\.\s*if heads,?\s*during your opponent's next turn,?\s*prevent all damage", t):
        return ["preventDamageNextTurn"]
    if re.search(r"prevent all damage (?:done to|to) this pok[eé]mon", t) and "next turn" in t:
        return ["preventDamageNextTurn"]

    # Your opponent shuffles their hand into their deck and draws N
    m = re.search(r"your opponent shuffles .{0,20}hand into .{0,20}deck,? then draws (\d+|seven|six|five)", t)
    if m:
        return [f"opponentShuffleDraw:{parse_count(m.group(1), 7)}"]
    if re.search(r"your opponent shuffles .{0,20}hand into .{0,20}deck", t):
        m2 = re.search(r"draws (\d+|seven)", t)
        return [f"opponentShuffleDraw:{parse_count(m2.group(1), 7) if m2 else 7}"]

    # Heal N damage from each of your X Pokémon
    m = re.search(r"heal (\d+) damage from each of your", t)
    if m:
        return [f"healEachPokemon:{m.group(1)}"]

    # Stadium / tool continuous rule
    if re.search(r"this card stays in play when you play it", t):
        return ["continuousStatic"]

    # During your next turn, X's Y attack does N more / base damage is
    if re.search(r"during your next turn, .{0,40}attack.{0,20}(does \d+ more damage|base damage is)", t):
        return ["bonusDamagePer:0:0"]  # structural; engine doesn't track named-attack bonuses yet

    # Put an Item / Supporter / Stadium from discard to hand
    if re.search(r"put (?:an? |your )?\w+ card from your discard pile into your hand", t):
        return ["recoverFromDiscard"]

    # Does N more damage for each damage counter on this Pokémon. (Outrage etc.)
    m = re.search(r"(?:does|do) (\d+) more damage for each damage counter on this pok[eé]mon", t)
    if m:
        return [f"bonusPerSelfDamageCounter:{m.group(1)}"]
    m = re.search(r"(\d+) more damage for each damage counter on it", t)
    if m:
        return [f"bonusPerSelfDamageCounter:{m.group(1)}"]
    m = re.search(r"(?:does|do) (\d+) more damage for each damage counter on (?:the )?(?:defending|opponent's active)", t)
    if m:
        return [f"bonusPerDefendingDamageCounter:{m.group(1)}"]

    # After your attack, you may switch X with 1 of your Benched Pokémon.
    if re.search(r"after your attack, you may switch .+ with 1 of your benched pok[eé]mon", t):
        return ["switchSelfAfterAttack"]
    if re.search(r"after (?:doing damage|your attack),? remove from .+ number of damage counters equal to the damage", t):
        return ["healSelfAfterAttack"]
    if re.search(r"after (?:doing damage|your attack),? remove from", t) and "damage counters equal to the damage" in t:
        return ["healSelfAfterAttack"]

    # GX limit
    if "can't use more than 1 gx attack in a game" in t:
        return ["gxOncePerGame"]

    # Ascension
    if re.search(r"search your deck for a card that evolves from this pok[eé]mon and put it onto this pok[eé]mon", t):
        return ["ascension"]

    # Fossil / doll: play as if it were a Basic Pokémon
    if re.search(r"play (?:this card|[\w' ]+) as if it were (?:a |an )?\d+-hp basic", t):
        return ["fossilBody"]
    if re.search(r"play [\w' ]+ as if it were a basic pok[eé]mon", t):
        return ["fossilBody"]

    # "This Pokémon can't be affected by any Special Conditions"
    if re.search(r"can't be affected by any special conditions", t):
        return ["preventEffectsSelf"]

    # Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon
    if re.search(r"flip a coin\.\s*if heads,?\s*prevent all effects of attacks", t):
        return ["preventDamageNextTurn"]

    # Flip a coin. If heads, draw a card(s).
    m = re.search(r"flip a coin\.\s*if heads,?\s*draw (a|an|one|\d+|two|three) cards?", t)
    if m:
        raw = m.group(1)
        n = 1 if raw in ("a", "an", "one") else parse_count(raw, 1)
        return [f"flipHeadsDraw:{n}"]

    # If your opponent has any Benched Pokémon, choose 1 of them and switch it with Active
    if re.search(r"if your opponent has any benched pok[eé]mon.{0,40}switch it with (?:his or her |their )?active", t):
        return ["gustOpponent"]
    if re.search(r"choose 1 of them and switch it with", t):
        return ["gustOpponent"]
    if re.search(r"he or she chooses 1 of them and switches? it with", t):
        return ["gustOpponent"]

    # If the Defending Pokémon has any Energy cards attached, choose 1 and discard
    if re.search(r"if (?:the )?(?:defending|opponent's active) pok[eé]mon has any energy.{0,40}discard it", t):
        return ["discardEnergyDefending:1"]
    if re.search(r"if (?:the )?(?:defending|opponent's active) pok[eé]mon has any energy.{0,60}choose 1 of them and discard", t):
        return ["discardEnergyDefending:1"]

    # Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to X
    if re.search(r"flip a coin\.\s*if heads,?\s*during your opponent's next turn,?\s*prevent all effects of attacks", t):
        return ["preventDamageNextTurn"]

    # Does N damage times the number of damage counters on X
    m = re.search(r"(?:does|do) (\d+) damage times the number of damage counters on", t)
    if m:
        return [f"damageTimesSelfCounters:{m.group(1)}"]

    # Switch NAME with 1 of your Benched Pokémon.
    if re.search(r"switch [\w' -]+ with 1 of your benched pok[eé]mon", t):
        return ["switchSelf"]

    # Your opponent shuffles his or her hand into his or her deck, then draws N cards.
    m = re.search(r"your opponent shuffles (?:his or her |their )?hand into (?:his or her |their )?deck,? then draws (\d+|seven)", t)
    if m:
        return [f"opponentShuffleDraw:{parse_count(m.group(1), 7)}"]

    # You and your opponent show hands, shuffle all Trainer cards into decks
    if re.search(r"you and your opponent show each other your hands,? then shuffle all the trainer cards", t):
        return ["lassShuffleTrainers"]

    # Remove damage counters equal to half the damage done
    if re.search(r"remove .+ damage counters .+ equal to half the damage done", t):
        return ["healHalfDamageDone"]

    # Unless all damage from this attack is prevented, you may remove 1 damage counter from X
    if re.search(r"unless all damage from this attack is prevented, you may remove 1 damage counter", t):
        return ["healSelf:10"]

    # Flip a coin. If tails, X is now Confused (after doing damage).
    m = re.search(r"flip a coin\.\s*if tails,? [\w' ]+ is now (asleep|confused|paralyzed|poisoned|burned)", t)
    if m:
        return [f"flipHeadsSelfSpecial:{m.group(1).upper()}"]

    # Does N damage minus M for each damage counter on self
    m = re.search(r"does \d+ damage minus (\d+) damage for each damage counter", t)
    if m:
        return [f"bonusPerSelfDamageCounter:-{m.group(1)}"]

    # Flip a coin. If tails, X is now Confused
    if re.search(r"flip a coin\.\s*if (tails|heads),? [\w' ]+ is now (asleep|confused|paralyzed|poisoned|burned)", t):
        m = re.search(r"if (tails|heads),? [\w' ]+ is now (asleep|confused|paralyzed|poisoned|burned)", t)
        if m.group(1) == "heads":
            return [f"flipHeadsSpecial:{m.group(2).upper()}"]
        return [f"flipTailsSpecial:{m.group(2).upper()}"]

    # During opponent's next turn, whenever N or less damage is done to X, prevent that damage
    if re.search(r"whenever \d+ or less damage is done to .+, prevent", t):
        return ["preventDamageNextTurn"]

    # If the Defending Pokémon tries to attack during your opponent's next turn, flip
    if re.search(r"if (?:the )?(?:defending|opponent's active) pok[eé]mon tries to attack", t):
        return ["cantAttackOpponentNextTurn"]

    # Put a Stage 2 Evolution card from your hand on the matching Basic (Rare Candy / Breeder)
    if re.search(r"put a stage 2 evolution card from your hand on the matching basic", t):
        return ["rareCandy"]
    if re.search(r"put a stage 2 card from your hand that evolves from", t):
        return ["rareCandy"]

    # Trade 1 of the Basic/Evolution in hand for one from deck
    if re.search(r"trade 1 of the .+ in your hand for 1 of the .+ from your deck", t):
        return ["pokemonTrader"]

    # Return its Basic Pokémon card to your hand (Scoop Up)
    if re.search(r"return its basic pok[eé]mon card to your hand", t):
        return ["scoopUpSelf"]

    # Remove all damage counters from all of your own Pokémon, then discard all Energy
    if re.search(r"remove all damage counters from all of your .+ pok[eé]mon.{0,40}discard all energy", t):
        return ["pokemonCenter"]

    # Choose 1 Basic from opponent's discard and put onto their Bench
    if re.search(r"choose 1 basic pok[eé]mon card from your opponent's discard pile and put it onto", t):
        return ["pokemonFlute"]

    # Look at up to N cards from the top of your deck and rearrange
    if re.search(r"look at up to \d+ cards from the top of your deck and rearrange", t):
        return ["pokedex"]

    # Flip a number of coins equal to the number of Energy attached. This attack does N damage times heads
    m = re.search(r"flip a number of coins equal to the number of energy attached.{0,40}this attack does (\d+) damage times", t)
    if m:
        return [f"flipTimesDamage:6:{m.group(1)}"]

    # Devolution Spray style
    if re.search(r"choose 1 of your own pok[eé]mon in play and a stage of evolution", t):
        return ["devolve"]

    # Remove a number of damage counters from X equal to the damage done to the Defending
    if re.search(r"remove (?:a number of )?damage counters from [\w' -]+ equal to (?:half )?the damage done to (?:the )?defending", t):
        if "half" in t:
            return ["healHalfDamageDone"]
        return ["healSelfAfterAttack"]

    # Don't apply Weakness and Resistance for this attack
    if re.search(r"don't apply weakness and resistance for this attack", t):
        return ["ignoreWeaknessResistance"]

    # Your opponent can't play Trainer cards during his or her next turn
    if re.search(r"your opponent can't play trainer cards during", t):
        return ["opponentCantTrainers"]

    # Choose N of your opponent's Benched Pokémon and this attack does X damage to each
    m = re.search(r"choose (\d+|two|three) of your opponent's benched pok[eé]mon and this attack does (\d+) damage to each", t)
    if m:
        return [f"spreadBenchDamage:{m.group(2)}:{parse_count(m.group(1))}"]

    # For each of your opponent's Benched Pokémon, flip a coin. If heads, this attack does N damage
    m = re.search(r"for each of your opponent's benched pok[eé]mon, flip a coin\.\s*if heads,?\s*this attack does (\d+) damage", t)
    if m:
        return [f"spreadBenchDamage:{m.group(1)}:6"]

    # Choose 1 of your opponent's Pokémon. This attack does N damage to that Pokémon.
    m = re.search(r"choose 1 of your opponent's pok[eé]mon\.\s*this attack does (\d+) damage to that pok[eé]mon", t)
    if m:
        return [f"damageOneBench:{m.group(1)}"]

    # If your opponent has any Benched Pokémon, choose 1 of them and this attack does N damage to it
    m = re.search(r"choose 1 of them and this attack does (\d+) damage to it", t)
    if m:
        return [f"damageOneBench:{m.group(1)}"]

    # Flip a number of coins equal to the number of Energy attached. This attack does N damage times heads
    m = re.search(r"flip a number of coins equal to the number of (?:fire |[\w ]*)?energy(?: cards)? attached.{0,50}this attack does (\d+) damage times", t)
    if m:
        return [f"flipTimesDamage:8:{m.group(1)}"]

    # Once during your turn (before your attack), if X is on your Bench, you may switch it with your Active
    if re.search(r"once during your turn.{0,40}you may switch it with your active", t):
        return ["switchSelf"]

    # Return X to your hand. (Discard all cards attached)
    if re.search(r"you may return [\w' -]+ to your hand", t):
        return ["scoopUpSelf"]

    # Search deck for Trainer
    if re.search(r"search your deck for", t) and "trainer" in t and "into your hand" in t:
        return ["searchTrainerToHand:1"]

    # Choose 1 of your opponent's Pokémon and up to 2 Energy cards attached — Super Energy Removal
    if re.search(r"choose 1 of your opponent's pok[eé]mon and up to (\d+) energy", t):
        m = re.search(r"up to (\d+) energy", t)
        return [f"discardEnergyDefending:{m.group(1) if m else 2}"]

    # Attach Defender / tool-like to your Pokémon (end of opponent's next turn discard)
    if re.search(r"attach [\w' -]+ to 1 of your pok[eé]mon\.\s*at the end of your opponent's next turn", t):
        return ["reduceDamageMarker:20"]

    # Draw N cards. This Pokémon is now Asleep. — multi handled by composer
    # Your opponent reveals hand / look at opponent hand
    if re.search(r"look at your opponent's hand", t):
        return ["peekOpponentHand"]
    if re.search(r"your opponent reveals (?:his or her |their )?hand", t):
        return ["peekOpponentHand"]

    # Put N Stadium / Item / Supporter from discard to hand
    if re.search(r"put (?:up to )?(\d+|two|three) \w+ cards? from your discard pile into your hand", t):
        m = re.search(r"put (?:up to )?(\d+|two|three)", t)
        return [f"recoverFromDiscard:{parse_count(m.group(1), 1) if m else 1}"]

    # Shuffle N cards from your hand into your deck, then draw M
    if re.search(r"shuffle (?:a card|\d+ cards|2 cards) from your hand into your deck", t):
        m = re.search(r"draw (\d+|three)", t)
        return [f"draw:{parse_count(m.group(1), 3) if m else 3}"]

    # Put N damage counters on Defending for each damage counter on self
    m = re.search(r"put (\d+) damage counters? on (?:the )?defending pok[eé]mon for each damage counter on", t)
    if m:
        return [f"putCountersOnDefendingPerSelf:{int(m.group(1))*10}"]

    # NAME can't use this attack during your next turn
    if re.search(r"[\w' -]+ can't use this attack during your next turn", t):
        return ["cantAttackNextTurn"]

    # Flip a coin. If tails, this attack's base damage is N instead of M
    m = re.search(r"flip a coin\.\s*if tails,?\s*this attack's base damage is (\d+) instead of", t)
    if m:
        return [f"flipTailsBaseDamage:{m.group(1)}"]

    # Discard N / all TYPE Energy attached to this/NAME Pokémon
    m = re.search(r"discard (all|\d+|two|three) (?:[\w ]* )?energy(?: cards)? attached to (?:this pok[eé]mon|[\w' -]+)", t)
    if m and "in order to" not in t:
        n = 99 if m.group(1) == "all" else parse_count(m.group(1))
        return [f"discardEnergySelf:{n}"]

    # change weakness / resistance to a type of your choice
    if re.search(r"(?:has a weakness|weakness|resistance).{0,30}you may change it to a type of your choice", t):
        return ["changeWeakness"]
    if re.search(r"change (?:it|[\w' ]*'s resistance|[\w' ]*'s weakness) to a type of your choice", t):
        return ["changeWeakness"]

    # Does N more damage for each Energy attached to this Pokémon / Defending / both
    m = re.search(r"does (\d+) more damage for each [\w ]*energy(?: cards)? attached to this pok[eé]mon", t)
    if m:
        return [f"bonusPerEnergySelf:{m.group(1)}"]
    m = re.search(r"does (\d+) more damage for each energy attached to (?:the )?(?:defending|opponent's active)", t)
    if m:
        return [f"bonusPerEnergyDefending:{m.group(1)}"]
    m = re.search(r"does (\d+) more damage for each [\w ]*energy(?: cards)? attached to both", t)
    if m:
        return [f"bonusPerEnergyBoth:{m.group(1)}"]

    # Does N damage times the number of your Benched Pokémon
    m = re.search(r"does (\d+) damage times the number of your benched pok[eé]mon", t)
    if m:
        return [f"bonusPerOwnBench:{m.group(1)}"]

    # Does N more for each damage counter on this Pokémon (short form)
    m = re.search(r"does (\d+) more for each damage counter on this pok[eé]mon", t)
    if m:
        return [f"bonusPerSelfDamageCounter:{m.group(1)}"]

    # Heal from this Pokémon the same amount of damage you did
    if re.search(r"heal from this pok[eé]mon the same amount of damage you did", t):
        return ["healSelfAfterAttack"]

    # Does N damage to 2 / 1 / each of opponent's Benched
    m = re.search(r"does (\d+) damage to 2 of your opponent's benched", t)
    if m:
        return [f"damageTwoBench:{m.group(1)}"]
    m = re.search(r"does (\d+) damage to 1 of your opponent's benched", t)
    if m:
        return [f"damageOneBench:{m.group(1)}"]
    m = re.search(r"does (\d+) damage to each of your opponent's benched", t)
    if m:
        return [f"spreadBenchDamage:{m.group(1)}:6"]

    # Switch the Defending with 1 of opponent's Benched
    if re.search(r"switch (?:the )?(?:defending|opponent's active) pok[eé]mon with 1 of your opponent's benched", t):
        return ["gustOpponent"]

    # The Defending is now Burned. Flip a coin. If heads, also Paralyzed
    if re.search(r"is now burned\.\s*flip a coin\.\s*if heads,?\s*.{0,20}also paralyzed", t):
        return ["burnPlusFlipParalyze"]

    # Move as many Type Energy attached to your Pokémon to your other Pokémon
    if re.search(r"move as many [\w ]*energy attached to your pok[eé]mon to your other pok[eé]mon", t):
        return ["energyTrans"]

    # prevent all effects ... done to your Benched Pokémon
    if re.search(r"prevent all effects of attacks.{0,30}done to your benched", t):
        return ["preventDamageNextTurn"]

    # Search your deck for a Baby Pokémon and put onto Bench
    if re.search(r"search your deck for a baby pok[eé]mon card and put it onto your bench", t):
        return ["searchBasicToBench:1"]

    # Flip 2 coins. If 1 is heads, A and B. If both heads, ... (simple: treat as one special)
    m = re.search(r"flip 2 coins\.\s*if 1 is heads,?\s*(?:the )?(?:defending|opponent's active) pok[eé]mon is now", t)
    if m:
        cm = re.search(COND, t)
        return [f"flipHeadsSpecial:{(cm.group(1) if cm else 'ASLEEP').upper()}"]

    # Flip 3 coins. If N of them is heads, this attack does X damage (tiered) — approximate with flipTimesDamage
    m = re.search(r"flip 3 coins\.\s*if 1 of them is heads,?\s*this attack does (\d+) damage", t)
    if m:
        return [f"flipTimesDamage:3:{int(m.group(1))}"]

    # Discard the top N cards of each player's deck
    if re.search(r"discard the top \d+ cards? of each player's deck", t):
        return ["millOpponent:1"]

    # Reveal the top N cards of your deck and put all X cards you find there into your hand
    if re.search(r"reveal the top \d+ cards of your deck and put all", t):
        return ["searchAnyToHand:3"]

    # If an Escavalier / if a Pokemon you had in play was Knocked Out last turn
    if re.search(r"if .+ was knocked out by damage from an opponent's attack during", t):
        return ["bonusDamagePer:20:1"]

    # You may search your deck for 2 Grass Energy cards and attach them to 1 of your Benched
    if re.search(r"you may search your deck for \d+ [\w ]*energy cards? and attach them to 1 of your benched", t):
        return ["searchEnergyToSelf"]

    # Put all Energy attached to the Defending into opponent's discard
    if re.search(r"put all energy attached to (?:the )?(?:defending|opponent's active) pok[eé]mon into", t):
        return ["discardEnergyDefending:99"]

    # This attack does N damage to any Pokémon with a Lightning Rod / marker
    if re.search(r"this attack does \d+ damage to any pok[eé]mon with a", t) and "marker" in t:
        return ["damageOneBench:20"]

    # Choose 1 of opponent's Benched Pokémon, and this attack does N damage to it
    m = re.search(r"choose 1 of your opponent's benched pok[eé]mon,? and this attack does (\d+) damage to it", t)
    if m:
        return [f"damageOneBench:{m.group(1)}"]

    # Does N damage times the number of Energy cards attached to Defending
    m = re.search(r"does (\d+) damage times the number of energy cards? attached to (?:the )?defending", t)
    if m:
        return [f"bonusPerEnergyDefending:{m.group(1)}"]
    m = re.search(r"does (\d+) damage times the total number of energy", t)
    if m:
        return [f"bonusPerEnergyBoth:{m.group(1)}"]

    # Remove N damage counters from NAME / this Pokémon
    m = re.search(r"remove (\d+) damage counters? from [\w' -]+", t)
    if m and "equal" not in t:
        return [f"healSelf:{int(m.group(1))*10}"]

    # Shuffle NAME into your deck. (Discard all cards attached)
    if re.search(r"shuffle [\w' -]+ into your deck\.\s*\(discard all cards attached", t):
        return ["scoopUpSelf"]
    if re.search(r"shuffle [\w' -]+ into your deck", t) and "discard all cards attached" in t:
        return ["scoopUpSelf"]

    # Shuffle your opponent's deck
    if re.search(r"shuffle your opponent's deck", t):
        return ["shuffleOpponentDeck"]

    # Search your deck for a TYPE Energy card and attach it to NAME
    if re.search(r"search your deck for a [\w ]*energy card and attach it to [\w' -]+", t):
        return ["searchEnergyToSelf"]

    # Choose up to N Energy cards from your discard pile and attach them to NAME
    if re.search(r"choose up to (\d+) energy cards? from your discard pile and attach them", t):
        m = re.search(r"up to (\d+) energy", t)
        return [f"recoverEnergyToSelf:{m.group(1) if m else 2}"]

    # Before doing damage, choose 1 of your opponent's Benched and switch
    if re.search(r"before doing damage,?\s*choose 1 of your opponent's benched.{0,30}switch it with", t):
        return ["gustOpponent"]
    if re.search(r"flip a coin\.\s*if heads,?\s*choose 1 of your opponent's benched.{0,30}switch it with", t):
        return ["flipHeadsGustOpponent"]

    # Does damage to Defending equal to half the Defending's remaining HP
    if re.search(r"does damage to (?:the )?defending pok[eé]mon equal to half (?:the )?defending", t):
        return ["damageHalfHP"]
    if re.search(r"equal to half (?:the )?defending pok[eé]mon's remaining hp", t):
        return ["damageHalfHP"]

    # NAME is now Confused / Asleep (after doing damage) — self or defending
    m = re.search(r"flip a coin\.\s*if tails,? [\w' -]+ is now (asleep|confused|paralyzed|poisoned|burned)", t)
    if m:
        return [f"flipHeadsSelfSpecial:{m.group(1).upper()}"]
    m = re.search(r"^[\w' -]+ is now (asleep|confused|paralyzed|poisoned|burned)", t)
    if m:
        return [f"specialDefending:{m.group(1).upper()}"]

    # Mirror Move family: "If X was attacked last turn, do the final result of that attack"
    if re.search(r"if [\w' -]+ was attacked last turn,? do the final result of that attack", t):
        return ["mirrorMove"]

    # Change / treat Weakness / Resistance to a type of your choice
    if re.search(r"(?:change|treat) [\w' ]*(?:weakness|resistance) to a type of your choice", t):
        return ["changeWeakness"]

    # Unless this attack Knocks Out the Defending, return Defending and all cards to hand
    if re.search(r"unless this attack knocks out (?:the )?defending.{0,40}return (?:the )?defending pok[eé]mon and all cards attached", t):
        return ["bounceDefending"]

    # Look at up to N cards from the top of either player's deck and rearrange
    if re.search(r"look at up to \d+ cards from the top of either player's deck and rearrange", t):
        return ["pokedex"]

    # You may discard any number of TYPE Energy attached to NAME. If you do, discard that many from opponent's deck
    if re.search(r"you may discard any number of [\w ]*energy cards? attached to", t):
        return ["discardEnergySelf:1"]

    # Flip a coin. If heads, remove a damage counter from NAME
    if re.search(r"flip a coin\.\s*if heads,?\s*remove a damage counter from", t):
        return ["flipHeadsHeal:10"]

    # Your opponent shuffles his or her Active Pokémon and all cards attached into deck
    if re.search(r"your opponent shuffles (?:his or her |their )?active pok[eé]mon and all cards attached", t):
        return ["scoopUpOpponent"]

    # Flip a coin. If heads, choose a basic Energy attached to 1 of opponent's Pokémon and attach to another
    if re.search(r"flip a coin\.\s*if heads,?\s*choose a basic energy card attached to 1 of your opponent", t):
        return ["energyTransOpponent"]

    # Whenever an attack does damage to X during opponent's next turn, that attack only does half
    if re.search(r"that attack only does half the damage", t):
        return ["reduceDamageNextTurn:999"]

    # Take all Energy cards attached to X and attach them to your Benched Pokémon
    if re.search(r"take all energy cards? attached to [\w' -]+ and attach them to your benched", t):
        return ["energyTrans"]

    # Discard an Energy attached to the Defending / opponent's Active
    if re.search(r"discard an energy(?: card)? attached to (?:the )?(?:defending|opponent's active)", t):
        return ["discardEnergyDefending:1"]
    m = re.search(r"discard (\d+|two|three|all) energy(?: cards)? attached to 1 of your opponent", t)
    if m:
        n = 99 if m.group(1) == "all" else parse_count(m.group(1))
        return [f"discardEnergyDefending:{n}"]

    # Discard a card from your opponent's hand
    if re.search(r"discard (?:a |a random |1 )?cards? from your opponent's hand", t):
        return ["discardRandomOpponentHand:1"]
    if re.search(r"discard the top (\d+|a|an|two) cards? of your opponent's deck", t):
        n = 1 if m and m.group(1) in ("a", "an") else parse_count((m.group(1) if m else "1"))
        return [f"millOpponent:{n}"]

    # Discard N cards from your hand
    m = re.search(r"discard (\d+|two|three) (?:other )?cards? from your hand", t)
    if m:
        return [f"discardFromHand:{parse_count(m.group(1))}"]

    # Search your deck for up to N cards named X
    if re.search(r"search your deck for (?:up to \d+ )?cards? named", t):
        return ["searchAnyToHand:1"]
    if re.search(r"search your deck for (?:an? )?evolution card", t) and "put it" in t:
        return ["searchPokemonToHand:1"]
    if re.search(r"search your deck for (?:a |up to \d+ )?(?:basic |stage \d )?pok[eé]mon", t) and "bench" in t:
        return ["searchBasicToBench:1"]
    if re.search(r"search your deck for [\w' -]+ and put (?:it|them) onto your bench", t):
        return ["searchBasicToBench:1"]

    # Move N damage counters from NAME to another
    if re.search(r"move \d+ damage counters? from", t):
        return ["moveDamageCounters"]
    # Move an Energy from 1 of your Pokémon to another
    if re.search(r"move an energy from 1 of your pok[eé]mon to another", t):
        return ["energyTrans"]
    if re.search(r"move [\w ]*energy(?: cards)? from 1 of your pok[eé]mon to another", t):
        return ["energyTrans"]

    # Put N damage counters on NAME / Defending (not "for each")
    m = re.search(r"put (\d+) damage counters? on (?:the )?[\w' -]*defending|put (\d+) damage counters? on [\w' -]+", t)
    if m and "for each" not in t and "each of" not in t:
        n = m.group(1) or m.group(2) or "1"
        return [f"putDamageCounters:{int(n)*10}"]

    # Once during your turn (before your attack), you may ...
    if re.search(r"once during your turn \(before your attack\), you may (draw|search|attach)", t):
        if "draw" in t:
            m = re.search(r"draw (\d+|a|two)", t)
            return [f"oncePerTurnDraw:{parse_count(m.group(1),1) if m else 1}"]
        if "search" in t:
            return ["oncePerTurnSearch"]
        if "attach" in t:
            return ["attachBasicFromDiscard"]

    # ---- damage formulas ----
    # Does N damage times the number/amount of Energy attached to ...
    m = re.search(r"does (\d+) damage times (?:the )?(?:number|amount) of [\w ]*energy(?: cards)? attached to this pok[eé]mon", t)
    if m:
        return [f"damageTimesEnergySelf:{m.group(1)}"]
    m = re.search(r"does (\d+) damage times (?:the )?(?:number|amount) of [\w ]*energy(?: cards)? attached to (?:the )?defending", t)
    if m:
        return [f"damageTimesEnergyDefending:{m.group(1)}"]
    m = re.search(r"does (\d+) damage times (?:the )?(?:total )?(?:number|amount) of [\w ]*energy.{0,20}attached to .+ and (?:the )?defending", t)
    if m:
        return [f"damageTimesEnergyBoth:{m.group(1)}"]
    m = re.search(r"does (\d+) damage times (?:the )?(?:number|amount) of energy attached to this pok[eé]mon and (?:the )?defending", t)
    if m:
        return [f"damageTimesEnergyBoth:{m.group(1)}"]

    # Does N damage times the number of cards in hand
    m = re.search(r"does (\d+) damage times the number of cards in your hand", t)
    if m:
        return [f"damageTimesHand:{m.group(1)}:self"]
    m = re.search(r"does (\d+) damage times the number of cards in your opponent's hand", t)
    if m:
        return [f"damageTimesHand:{m.group(1)}:opponent"]

    # Does N damage times the number of Prize cards
    m = re.search(r"does (\d+) damage times the number of prize cards (?:both players have taken|you have taken|your opponent has taken)", t)
    if m:
        side = "both" if "both" in t else ("opponent" if "opponent" in t else "taken")
        return [f"damageTimesPrize:{m.group(1)}:{side}"]

    # Does N more damage for each Prize card
    m = re.search(r"does (\d+) more damage for each prize card (?:your opponent has taken|you have taken)", t)
    if m:
        side = "opponent" if "opponent" in t else "taken"
        return [f"bonusPerPrize:{m.group(1)}:{side}"]

    # Does N damage times opponent's Benched / your opponent's Benched
    m = re.search(r"does (\d+) damage times the number of your opponent's benched", t)
    if m:
        return [f"damageTimesOpponentBench:{m.group(1)}"]
    m = re.search(r"does (\d+) more damage for each of your opponent's benched", t)
    if m:
        return [f"bonusPerOpponentBench:{m.group(1)}"]

    # Does N damage times the number of Pokémon in play
    m = re.search(r"does (\d+) damage times the number of pok[eé]mon in play", t)
    if m:
        return [f"damageTimesPokemonInPlay:{m.group(1)}"]

    # Does N damage times the number of Special Conditions affecting Defending
    m = re.search(r"does (\d+) damage times the number of special conditions affecting", t)
    if m:
        return [f"damageTimesSpecialConditions:{m.group(1)}"]
    m = re.search(r"does (\d+) more damage for each special condition affecting", t)
    if m:
        return [f"bonusPerSpecialConditions:{m.group(1)}"]

    # Does N damage to each Benched Pokémon (both yours and opponent's)
    m = re.search(r"does (\d+) damage to each benched pok[eé]mon \(both", t)
    if m:
        return [f"spreadBothBench:{m.group(1)}"]
    m = re.search(r"does (\d+) damage to each benched pok[eé]mon \(yours and your opponent", t)
    if m:
        return [f"spreadBothBench:{m.group(1)}"]

    # Does N damage to each of your opponent's Pokémon
    m = re.search(r"does (\d+) damage to each of your opponent's pok[eé]mon", t)
    if m:
        return [f"spreadAllOpponent:{m.group(1)}"]
    m = re.search(r"does (\d+) damage to each of your pok[eé]mon", t)
    if m:
        return [f"spreadAllMine:{m.group(1)}"]

    # Does N damage minus M for each Energy attached to Defending
    m = re.search(r"does \d+ damage minus (\d+) damage for each energy attached to (?:the )?defending", t)
    if m:
        return [f"minusPerEnergyDefending:{m.group(1)}"]

    # Does N more damage for each damage counter on opponent's Active
    m = re.search(r"does (\d+) more damage for each damage counter on your opponent's active", t)
    if m:
        return [f"bonusPerDefendingDamageCounter:{m.group(1)}"]

    # Does N more damage for each of your Benched that has any damage counters
    if re.search(r"does (\d+) more damage for each of your benched pok[eé]mon that has any damage counters", t):
        m = re.search(r"does (\d+) more", t)
        return [f"bonusPerDamagedBench:{m.group(1) if m else 20}"]

    # Does N more damage for each damage counter on each of your Benched
    if re.search(r"does (\d+) more damage for each damage counter on each of your benched", t):
        m = re.search(r"does (\d+) more", t)
        return [f"bonusPerDamagedBench:{m.group(1) if m else 10}"]

    # Flip N coins. This attack does X damage times the number of heads. (already)
    # Does N damage times the number of NAME you have in play / in discard
    m = re.search(r"does (\d+) damage times the number of [\w' -]+ you have in play", t)
    if m:
        return [f"damageTimesPokemonInPlay:{m.group(1)}"]
    m = re.search(r"does (\d+) damage times the number of [\w' -]+ in your discard pile", t)
    if m:
        return [f"damageTimesDiscardPokemon:{m.group(1)}"]
    m = re.search(r"does (\d+) damage times the number of [\w' -]+ and [\w' -]+ (?:you have |)in play", t)
    if m:
        return [f"damageTimesPokemonInPlay:{m.group(1)}"]

    # Does N damage times the number of your Pokémon that have the Round attack
    if re.search(r"does (\d+) damage times the number of your pok[eé]mon that have the round attack", t):
        m = re.search(r"does (\d+) damage", t)
        return [f"damageTimesPokemonInPlay:{m.group(1) if m else 20}"]

    # Does N damage minus M for each card in your hand
    m = re.search(r"does \d+ damage minus (\d+) damage for each card in your hand", t)
    if m:
        return [f"minusPerHand:{m.group(1)}"]

    # Does N damage plus M for each Energy attached
    m = re.search(r"does \d+ damage (?:plus|more) (\d+)(?: more damage| damage)? for each [\w ]*energy", t)
    if m:
        return [f"bonusPerEnergySelf:{m.group(1)}"]
    m = re.search(r"does \d+ damage plus (\d+)(?: more)? for each of your benched", t)
    if m:
        return [f"bonusPerOwnBench:{m.group(1)}"]

    # Discard as many Energy attached to your Pokémon as you like. This attack does N damage times...
    if re.search(r"discard as many energy attached to your pok[eé]mon as you like", t):
        m = re.search(r"does (\d+) damage times", t)
        return [f"damageTimesEnergySelf:{m.group(1) if m else 30}"]

    # Attach N TYPE Energy from your discard pile to this Pokémon
    m = re.search(r"attach (\d+|two|three) [\w ]*energy(?: cards)? from your discard pile to this pok[eé]mon", t)
    if m:
        n = parse_count(m.group(1))
        return ["attachBasicFromDiscard"] * n

    # Flip a coin. If heads, discard an Energy attached to the Defending
    if re.search(r"flip a coin\.\s*if heads,?\s*discard an energy attached to (?:the )?defending", t):
        return ["flipHeadsDiscardEnergyOpponent"]

    # Discard a Special Energy attached to the Defending
    if re.search(r"discard a special energy attached to (?:the )?defending", t):
        return ["discardEnergyDefending:1"]

    # Does N damage to each Defending Pokémon / each Active (both)
    m = re.search(r"does (\d+) damage to each (?:defending|active) pok[eé]mon", t)
    if m:
        return [f"bonusDamagePer:0:0"]  # base already; "each defending" in doubles is 2 targets — use damageOneBench empty
    # actually set damage on both actives is rare; keep specialDefending path

    # Flip a coin. If heads, switch N of opponent's Benched with Defending
    if re.search(r"flip a coin\.\s*if heads,?\s*switch 1 of your opponent's benched", t):
        return ["flipHeadsGustOpponent"]

    # Search your deck for any N cards and put them into your hand
    m = re.search(r"search your deck for any (\d+|two|three) cards and put them into your hand", t)
    if m:
        return [f"searchAnyToHand:{parse_count(m.group(1))}"]
    m = re.search(r"search your deck for up to (\d+|two|three) [\w ]*cards?,? reveal them,? and put them into your hand", t)
    if m:
        return [f"searchAnyToHand:{parse_count(m.group(1))}"]

    # Look at the top N cards of your deck and put them back on top in any order
    if re.search(r"look at the top \d+ cards of your deck and put them back on top", t):
        return ["pokedex"]

    # Put N damage counters on your opponent's Pokémon in any way you like
    m = re.search(r"put (\d+) damage counters? on your opponent's pok[eé]mon in any way", t)
    if m:
        return [f"putCountersEachOpponent:{int(m.group(1))*10}"]

    # Discard an Energy attached to NAME (self)
    if re.search(r"discard an energy(?: card)? attached to [\w' -]+", t) and "defending" not in t and "opponent" not in t:
        return ["discardEnergySelf:1"]
    m = re.search(r"discard (\d+|two|three) [\w ]*energy from this pok[eé]mon", t)
    if m:
        return [f"discardEnergySelf:{parse_count(m.group(1))}"]

    # NAME can't attack during your next turn
    if re.search(r"[\w' -]+ can't attack during your next turn", t):
        return ["cantAttackNextTurn"]

    # Remove all damage counters from NAME
    if re.search(r"remove all damage counters from [\w' -]+", t) and "each" not in t:
        return ["healSelf:999"]

    # Does N damage times the number of Energy attached to NAME (named self)
    m = re.search(r"does (\d+) damage times the number of energy attached to [\w' -]+", t)
    if m:
        return [f"damageTimesEnergySelf:{m.group(1)}"]
    m = re.search(r"does (\d+) damage times the amount of [\w ]*energy attached to [\w' -]+", t)
    if m:
        return [f"damageTimesEnergySelf:{m.group(1)}"]

    # Each player draws N cards
    m = re.search(r"each player draws (\d+|two|three|four|five) cards?", t)
    if m:
        return [f"bothDraw:{parse_count(m.group(1))}"]

    # Choose 2 of your opponent's Pokémon. This attack does N damage to each of them
    m = re.search(r"choose 2 of your opponent's pok[eé]mon\.\s*this attack does (\d+) damage to each", t)
    if m:
        return [f"damageTwoBench:{m.group(1)}"]

    # Does N damage to 1 of your Pokémon
    m = re.search(r"does (\d+) damage to 1 of your pok[eé]mon", t)
    if m:
        return [f"selfDamage:{m.group(1)}"]

    # Flip a coin. If tails, discard a TYPE Energy attached to NAME
    if re.search(r"flip a coin\.\s*if tails,?\s*discard a [\w ]*energy attached to", t):
        return ["flipHeadsDiscardEnergyOpponent"]

    # Look at the top N cards and put them back in any order
    if re.search(r"look at the top \d+ cards? of your deck and put them back", t):
        return ["pokedex"]

    # Count the number of your Pokémon that have any damage counters. Put that many on Defending
    if re.search(r"count the number of your pok[eé]mon that have any damage counters", t):
        return ["putCountersOnDefendingPerSelf"]

    # Multi-sentence: split and compose (e.g. "Draw 3 cards. This Pokémon is now Asleep.")
    if t.count(". ") >= 1 or t.endswith("."):
        parts = re.split(r"(?<=[.!?])\s+", t)
        parts = [p.strip() for p in parts if p.strip()]
        if len(parts) >= 2:
            composed: list[str] = []
            ok = True
            for part in parts:
                sub = match_attack(part, damage)
                if sub is None:
                    ok = False
                    break
                composed.extend(sub)
            if ok and composed:
                return composed
            if ok and not composed:
                return []

    # "Discard N Energy attached to X in order to <effect|use this attack>"
    m = re.search(
        r"discard (\d+|all|two|three|four|five|six) energy cards? attached to .+? in order to (.+)",
        t,
    )
    if m:
        raw_n = m.group(1)
        n = 99 if raw_n == "all" else parse_count(raw_n)
        cost = [f"discardEnergySelf:{n}"]
        rest = m.group(2).strip()
        rest = re.sub(r"use this attack\.?$", "", rest).strip()
        if rest and not rest.startswith("use this"):
            sub = match_attack(rest, damage)
            if sub is not None:
                return cost + sub
        return cost
    if re.search(r"discard .+ in order to ", t):
        return ["attackCost"]

    # "All damage done by attacks to X during your opponent's next turn is reduced by N"
    m = re.search(r"during your opponent's next turn is reduced by (\d+)", t)
    if m:
        return [f"selfReduceDamageNextTurn:{m.group(1)}"]
    m = re.search(r"reduced by (\d+) \(after applying", t)
    if m and "next turn" in t:
        return [f"selfReduceDamageNextTurn:{m.group(1)}"]

    # "You can't use this attack unless ..."
    if re.search(r"you can't use this attack unless", t):
        return ["attackGate"]

    # Metronome / copy attack
    if re.search(r"use it as this attack|metronome copies", t):
        return ["copyAttack"]

    # Swap damage counters
    if re.search(r"switch all damage counters on this pok[eé]mon", t):
        return ["swapDamageCounters"]

    # Put / recover Pokemon from discard to hand / bench
    if re.search(r"put .+ from your discard pile into your hand", t):
        return ["recoverFromDiscard"]
    if re.search(r"put .+ from your discard pile onto your bench", t):
        return ["recoverFromDiscardToBench"]
    if re.search(r"put an item card from your discard pile into your hand", t):
        return ["recoverFromDiscard"]
    if re.search(r"put a .+ from your discard pile into your hand", t):
        return ["recoverFromDiscard"]

    # Your opponent shuffles hand into deck and draws N
    m = re.search(r"your opponent shuffles (?:his or her |their )?hand into (?:his or her |their )?deck,? then draws (\d+)", t)
    if m:
        return [f"opponentShuffleDraw:{m.group(1)}"]

    # Stadium stays in play — structural
    if "this card stays in play when you play it" in t:
        return ["continuousStatic"]

    # Choose 1 of the Defending's attacks and disable / discard
    if re.search(r"choose 1 of (?:the )?(?:defending|opponent's active) pok[eé]mon's attacks", t):
        return ["metronome"]

    # Devolve
    if "devolv" in t or re.search(r"discard all evolution cards", t):
        return ["devolve"]

    # Does N damage to each of your own Benched
    m = re.search(r"(?:does|do) (\d+) damage to each of your (?:own )?benched", t)
    if m:
        return [f"selfDamage:{m.group(1)}"]

    # "Heal N damage from this Pokémon." already healSelf
    # "This Pokémon is now Asleep. Heal N damage from it."
    m = re.search(r"heal (\d+) damage from (?:it|this pok[eé]mon)", t)
    if m:
        return [f"healSelf:{m.group(1)}"]

    # "Your opponent's Active Pokémon is now Poisoned/Burned"
    if re.search(r"your opponent's active pok[eé]mon is now poisoned", t) and "flip" not in t:
        return ["poisonDefending"]

    # Flip a coin. If heads, this attack does N damage.  (bonus damage on heads, base may be 0)
    m = re.search(r"flip a coin\.\s*if heads,?\s*this attack does (\d+)(?:\+)? damage\.?$", t)
    if m:
        return [f"flipHeadsAddDamage:{m.group(1)}"]

    # Flip N coins. This attack does X damage times the number of heads.
    m = re.search(
        r"flip (\w+) coins?\.\s*(?:this attack does )?(\d+) damage times (?:the number of )?heads",
        t,
    )
    if m:
        times = parse_count(m.group(1), 1)
        return [f"flipTimesDamage:{times}:{m.group(2)}"]

    # Flip a coin. If heads, this attack does X damage times the number of ... — approximate as 1 flip
    m = re.search(
        r"flip a coin\.\s*if heads,?\s*this attack does (\d+) damage times",
        t,
    )
    if m:
        return [f"flipTimesDamage:1:{m.group(1)}"]

    # Defending Pokémon is now X. (no flip)
    m = re.search(rf"defending pok[eé]mon is now {COND}\.?$", t)
    if m and "flip" not in t:
        return [f"specialDefending:{m.group(1).upper()}"]

    if re.search(r"defending pok[eé]mon is now poisoned", t) and "flip" not in t:
        return ["poisonDefending"]

    # Draw N cards.
    m = re.fullmatch(r"draw (\d+|two|three|four|five) cards?\.?", t)
    if m:
        return [f"draw:{parse_count(m.group(1))}"]

    # This Pokémon does N damage to itself.
    m = re.search(r"(?:this pok[eé]mon|it) does (\d+) damage to itself", t)
    if m and "flip" not in t:
        return [f"selfDamage:{m.group(1)}"]

    # Recoil: This Pokémon does N damage to itself.
    if re.search(r"does (\d+) damage to itself", t) and "flip" not in t:
        m = re.search(r"does (\d+) damage to itself", t)
        return [f"selfDamage:{m.group(1)}"]

    # Discard N Energy from this Pokémon.
    m = re.search(r"discard (\d+|all|an|a) energy(?: cards)? (?:from|attached to) this pok[eé]mon", t)
    if m:
        n = 1 if m.group(1) in ("all", "an", "a") else parse_count(m.group(1))
        return [f"discardEnergySelf:{n}"]

    # Discard N Energy from the Defending Pokémon.
    m = re.search(r"discard (\d+|an|a) energy(?: cards)? from (?:the )?defending", t)
    if m:
        n = 1 if m.group(1) in ("an", "a") else parse_count(m.group(1))
        return [f"discardEnergyDefending:{n}"]

    # "Discard N Energy cards attached to X in order to use this attack." → pay cost
    if re.search(r"in order to use this attack", t):
        m = re.search(r"discard (\d+|all|two|three|four|five) energy", t)
        if m:
            raw_n = m.group(1)
            n = 99 if raw_n == "all" else parse_count(raw_n)
            return [f"discardEnergySelf:{n}"]
        return ["attackCost"]

    # This attack's damage isn't affected by Weakness and/or Resistance.
    if re.search(r"this attack's damage isn't affected by weakness or resistance", t):
        return ["ignoreWeaknessResistance"]
    if re.search(r"this attack's damage isn't affected by resistance", t):
        return ["ignoreResistance"]
    if re.search(r"this attack's damage isn't affected by weakness", t):
        return ["ignoreWeakness"]

    # Both X and Y are now Confused
    m = re.search(rf"both (?:the )?(?:defending pok[eé]mon and [\w']+|active pok[eé]mon) are now {COND}", t)
    if m:
        return [f"specialBoth:{m.group(1).upper()}"]
    if re.search(r"both pok[eé]mon are now poisoned", t) or re.search(r"both the defending pok[eé]mon and [\w']+ are now poisoned", t):
        return ["poisonBoth"]

    # Draw a card. / Draw N cards. (attack)
    m = re.fullmatch(r"draw (a|an|one|\d+|two|three|four|five) cards?\.?", t)
    if m:
        raw = m.group(1)
        n = 1 if raw in ("a", "an", "one") else parse_count(raw, 1)
        return [f"draw:{n}"]

    # Does N damage plus M more damage for each ...
    m = re.search(r"does \d+ damage plus (\d+) more damage for each", t)
    if m:
        return [f"bonusDamagePer:{m.group(1)}:0"]
    m = re.search(r"this attack does (\d+) more damage for each", t)
    if m:
        return [f"bonusDamagePer:{m.group(1)}:0"]

    # Heal N damage from each of your Pokémon
    m = re.search(r"heal (\d+) damage from each of your pok[eé]mon", t)
    if m:
        return [f"healEachPokemon:{m.group(1)}"]

    # Search your deck ...
    if re.search(r"search your deck for (?:a |any |up to )?(?:trainer|item|supporter)", t) and "put it into your hand" in t:
        m = re.search(r"for up to (\w+)", t)
        n = parse_count(m.group(1), 1) if m else 1
        return [f"searchTrainerToHand:{n}"]
    if re.search(r"search your deck for (?:a |any )?card and put it into your hand", t):
        return ["searchTrainerToHand:1"]
    if re.search(r"search your deck for up to (\w+) basic pok[eé]mon", t):
        m = re.search(r"search your deck for up to (\w+) basic", t)
        return [f"searchBasicToHand:{parse_count(m.group(1), 1)}"]
    if re.search(r"search your deck for a basic pok[eé]mon and put it into your hand", t):
        return ["searchBasicToHand:1"]

    # Your Active Pokémon is no longer Asleep...
    if re.search(r"no longer (?:asleep|confused|paralyzed|poisoned|burned)", t) and "your" in t:
        return ["clearSpecialConditions"]

    # Flip a coin. If heads, this attack does 20 damage. If tails, this attack does nothing.
    m = re.search(
        r"flip a coin\.\s*if heads,?\s*this attack does (\d+) damage\.\s*if tails,?\s*this attack does nothing",
        t,
    )
    if m:
        return [f"flipHeadsAddDamage:{m.group(1)}"]

    # "This attack does N damage to each of your opponent's Benched Pokémon." (spread)
    m = re.search(r"this attack does (\d+) damage to each of your opponent's benched", t)
    if m:
        return [f"bonusDamagePer:{m.group(1)}:0"]  # approx — full spread needs engine support

    # "This attack does N damage to each of your Benched Pokémon."
    m = re.search(r"this attack does (\d+) damage to each of your (?:own )?benched", t)
    if m:
        return [f"selfDamage:{m.group(1)}"]

    # "If [condition], this attack does N more damage." (generic conditional bonus — record as +N, count unknown)
    m = re.search(r"this attack does (\d+) more damage", t)
    if m and "for each" not in t:
        # "during your next turn" modifiers skip; simple bonus
        if "your next turn" not in t and "base damage" not in t:
            return [f"bonusDamagePer:{m.group(1)}:1"]

    # "Does N damage plus ..." already handled

    # "Unless this attack Knocks Out the Defending Pokémon, ..." — complex
    # "This attack does nothing" / "does no damage"
    if re.search(r"flip a coin\.\s*if tails,?\s*this attack does nothing", t):
        rest = re.sub(r"flip a coin\.\s*if tails,?\s*this attack does nothing\.?", "", t).strip()
        rest = re.sub(r"^(?:either way,|if heads,)", "", rest).strip()
        ops = ["flipTailsBaseDamage:0"]
        if rest and len(rest) > 15:
            sub = match_attack(rest, damage)
            if sub:
                ops = ops + sub
        return ops
    if re.search(r"this attack does nothing|does no damage", t):
        return ["attackGate"]

    # Discard all Energy attached to this Pokémon.
    if re.search(r"discard all energy(?: cards)? attached to this pok[eé]mon", t):
        return ["discardEnergySelf:99"]

    # Discard 1 Energy attached to this Pokémon.
    m = re.search(r"discard (\d+|an|a) energy(?: cards)? (?:attached to|from) this pok[eé]mon", t)
    if m and "in order to" not in t:
        n = 1 if m.group(1) in ("an", "a") else parse_count(m.group(1))
        return [f"discardEnergySelf:{n}"]

    # Search your deck for a Basic Pokémon and put it onto your Bench.
    if re.search(r"search your deck for .*basic pok[eé]mon.*put .*onto your bench", t):
        m = re.search(r"put (\w+|up to \w+) of them", t)
        n = 1
        if m and "up to" not in m.group(1):
            n = parse_count(m.group(1).split()[-1], 1)
        return [f"searchBasicToBench:{n}"]
    if re.search(r"put (\w+) basic pok[eé]mon .*from your deck onto your bench", t):
        m_n = re.search(r"put (\w+)", t)
        return [f"searchBasicToBench:{parse_count(m_n.group(1) if m_n else '1')}"]

    # Heal N from this Pokémon
    m = re.search(r"heal (\d+) damage from this pok[eé]mon", t)
    if m:
        return [f"healSelf:{m.group(1)}"]

    # "Flip a coin. If heads, this attack does 10 damage to 1 of your opponent's Benched Pokémon." — skip

    # Only pure damage descriptors
    if re.fullmatch(r"(this attack )?does (?:\d+\+?|no) damage\.?", t):
        return []
    if re.fullmatch(r"[\dX+*]+\.?", t):
        return []

    # ---- unimpl batch: exact patterns from unimpl.txt ----
    m = re.search(r"your opponent shuffles .{0,25}hand into .{0,25}deck,? then draws (\d+|four|seven)", t)
    if m:
        return [f"opponentShuffleDraw:{parse_count(m.group(1), 7)}"]
    if re.search(r"you and your opponent show each other your hands,? then shuffle all the trainer cards", t):
        return ["lassShuffleTrainers"]
    if re.search(r"put a stage 2 (?:evolution )?card from your hand on the matching basic", t):
        return ["rareCandy"]
    if re.search(r"trade 1 of the .+ in your hand for 1 of the .+ from your deck", t):
        return ["pokemonTrader"]
    if re.search(r"return its basic pok[eé]mon card to your hand", t):
        return ["scoopUpSelf"]
    if re.search(r"return this pok[eé]mon and all cards attached to it to your hand", t):
        return ["scoopUpSelf"]
    if re.search(r"discard 1 energy card attached to 1 of your pok[eé]mon in order to choose 1 of your opponent", t):
        return ["discardEnergyDefending:2"]
    if re.search(r"attach [\w' -]+ to 1 of your pok[eé]mon\.\s*at the end of your opponent's next turn,? discard", t):
        return ["reduceDamageMarker:20"]
    if re.search(r"remove all damage counters from all of your own pok[eé]mon with damage counters", t):
        return ["pokemonCenter"]
    if re.search(r"choose 1 basic pok[eé]mon card from your opponent's discard pile and put it onto", t):
        return ["pokemonFlute"]
    if re.search(r"look at up to 5 cards from the top of your deck and rearrange", t):
        return ["pokedex"]
    if re.search(r"choose 1 of your own pok[eé]mon in play and a stage of evolution", t):
        return ["devolve"]
    if re.search(r"both this pok[eé]mon and (?:the )?defending pok[eé]mon are now confused", t):
        return ["specialBothConfused"]
    if re.search(r"both this pok[eé]mon and (?:the )?defending pok[eé]mon are now asleep", t):
        return ["specialBothAsleep"]
    if re.search(r"both this pok[eé]mon and (?:the )?defending pok[eé]mon are now (asleep|confused|paralyzed|poisoned)", t):
        m = re.search(r"are now (asleep|confused|paralyzed|poisoned)", t)
        return [f"specialBoth:{m.group(1).upper()}"]
    m = re.search(r"discard an? [\w ]*energy(?: card)? attached to this pok[eé]mon", t)
    if m and "in order to" not in t:
        return ["discardEnergySelf:1"]
    if re.search(r"discard any stadium card in play", t):
        return ["discardStadium"]
    if re.search(r"discard all pok[eé]mon tool cards attached to each of your opponent", t):
        return ["discardOpponentTools"]
    m = re.search(r"heal (\d+) damage from 1 of your (?:benched )?pok[eé]mon", t)
    if m:
        return [f"healBench:{m.group(1)}"] if "benched" in t else [f"heal:{m.group(1)}"]
    m = re.search(r"(?:this attack )?does (\d+) damage to 1 of your opponent's pok[eé]mon that has any damage counters", t)
    if m:
        return [f"damageDamagedOpponent:{m.group(1)}"]
    m = re.search(r"(?:this attack )?does (\d+) damage to 1 of your opponent's pok[eé]mon", t)
    if m:
        return [f"damageOneBench:{m.group(1)}"]
    if re.search(r"move an? [\w ]*energy from this pok[eé]mon to 1 of your benched", t):
        return ["energyTrans"]
    if re.search(r"move all energy attached to this pok[eé]mon to 1 of your benched", t):
        return ["moveAllEnergyToBench"]
    if re.search(r"move an energy from 1 of your benched pok[eé]mon to this pok[eé]mon", t):
        return ["moveEnergyFromBenchToSelf"]
    if re.search(r"shuffle your hand into your deck\.\s*flip a coin\.\s*if heads,?\s*draw 8 cards\.\s*if tails,?\s*draw 1", t):
        return ["flipHeadsDrawOrOne"]
    if re.search(r"flip a coin\.\s*if heads,?\s*put a card in your discard pile on top of your deck", t):
        return ["flipHeadsTopDiscardToDeck"]
    if re.search(r"choose a pok[eé]mon on your bench\.\s*shuffle it and any cards attached", t):
        return ["shuffleBenchToDeck"]
    m = re.search(r"if this pok[eé]mon's remaining hp is (\d+) or less,?\s*this attack's base damage is (\d+)", t)
    if m:
        return [f"baseDamageIfLowHP:{m.group(2)}:{m.group(1)}"]
    m = re.search(r"does \d+ damage minus (\d+) damage for each colorless in (?:the )?defending pok[eé]mon's retreat cost", t)
    if m:
        return [f"minusPerRetreatCostColorless:{m.group(1)}"]
    m = re.search(r"heal from this pok[eé]mon (\d+) damage for each", t)
    if m:
        return [f"healPerEnergySelf:{m.group(1)}"]
    if re.search(r"draw a card for each [\w ]*energy attached to this pok[eé]mon", t):
        return ["drawPerEnergySelf:1"]
    if re.search(r"attach an? [\w ]*energy from your discard pile to this pok[eé]mon", t):
        return ["attachBasicFromDiscard"]
    if re.search(r"attach an? [\w ]*energy from your hand to this pok[eé]mon", t):
        return ["oncePerTurnAttachFromHand"]
    if re.search(r"search your deck for [\w' -]+ and put it (?:into |onto )?your bench", t):
        return ["searchBasicToBench:1"]
    m = re.search(r"flip 2 coins\.\s*if both (?:of them )?(?:are )?tails,?\s*this pok[eé]mon does (\d+) damage to itself", t)
    if m:
        return [f"flipHeadsSelfDamage:{m.group(1)}"]
    # Named search to bench "Search your deck for Solosis and put it into your Bench"
    if re.search(r"search your deck for [\w' -]+ and put it into your bench", t):
        return ["searchBasicToBench:1"]
    # You may discard any Stadium card in play
    if re.search(r"(?:you may |before doing damage, you may )?discard any stadium card in play", t):
        return ["discardStadium"]
    # Heal N damage from 1 of your Pokémon (word Pokémon)
    m = re.search(r"heal (\d+) damage from 1 of your", t)
    if m:
        return [f"heal:{m.group(1)}"]
    # Attach TYPE Energy from your discard pile to this Pokémon
    if re.search(r"attach an? [\w ]*energy(?: card)? from your discard pile to this pok", t, re.I):
        return ["attachBasicFromDiscard"]

    # Flip a coin. If heads, this attack does N damage. If tails and opponent has Benched...
    m = re.search(r"flip a coin\.\s*if heads,?\s*this attack does (\d+) damage\.\s*if tails", t)
    if m:
        return [f"flipHeadsAddDamage:{m.group(1)}"]

    # Put N damage counters on Defending / opponent's Pokemon (not for each)
    m = re.search(r"put (\d+) damage counters? on (?:the )?(?:defending|your opponent's active) pok", t, re.I)
    if m and "for each" not in t:
        return [f"putDamageCounters:{int(m.group(1))*10}"]

    # Remove all damage counters from this/NAME
    if re.search(r"remove all damage counters from (?:this pok|[\w' -]+)", t):
        return ["healSelf:999"]

    # During your opponent's next turn, any damage done by attacks from Defending is reduced by N
    m = re.search(r"during your opponent's next turn, any damage done by attacks from (?:the )?defending pok. is reduced by (\d+)", t)
    if m:
        return [f"selfReduceDamageNextTurn:{m.group(1)}"]
    m = re.search(r"any damage done (?:by attacks )?to this pok. is (?:increased|reduced) by (\d+)", t)
    if m:
        sign = "-" if "reduced" in t else ""
        return [f"selfReduceDamageNextTurn:{sign}{m.group(1)}"]

    # Flip a coin. If heads, discard an Energy attached to Defending / opponent's Active
    if re.search(r"flip a coin\.\s*if heads,?\s*discard an energy attached to", t):
        return ["flipHeadsDiscardEnergyOpponent"]

    # Does N more damage for each TYPE Energy attached to all of your Pokémon
    m = re.search(r"does (\d+) more damage for each [\w ]*energy attached to all of your", t)
    if m:
        return [f"bonusPerEnergySelf:{m.group(1)}"]

    # Move as many Energy / Special Energy to/from opponent
    if re.search(r"move as many [\w ]*energy attached to your opponent's pok", t):
        return ["energyTrans"]

    # Search deck for 2 basic Energy and attach to Benched
    if re.search(r"search your deck for \d+ basic energy cards? and attach them to your benched", t):
        return ["searchEnergyToSelf"]

    # ---- cluster batch (attacks) ----
    if re.search(r"if (?:the )?defending pok[eé]mon isn't colorless", t):
        return ["spreadBothBench:10"]
    if re.search(r"if your opponent has any benched pok[eé]mon,? choose 1 of them\.\s*flip a coin\.\s*if heads,?\s*this attack does (\d+)", t):
        m = re.search(r"this attack does (\d+)", t)
        return [f"damageOneBench:{m.group(1) if m else 20}"]
    if re.search(r"if your opponent has any benched pok[eé]mon,? choose 1 of them and this attack does (\d+)", t):
        m = re.search(r"this attack does (\d+)", t)
        return [f"damageOneBench:{m.group(1) if m else 10}"]
    m = re.search(r"during your opponent's next turn, any damage done by attacks from (?:the )?defending pok[eé]mon is (?:reduced|increased) by (\d+)", t)
    if m:
        return [f"selfReduceDamageNextTurn:{m.group(1)}"]
    m = re.search(r"this attack does (\d+) damage for each energy attached to both active", t)
    if m:
        return [f"bonusPerEnergyBoth:{m.group(1)}"]
    m = re.search(r"this attack does (\d+) damage to 3 of your opponent's pok[eé]mon", t)
    if m:
        return [f"spreadAllOpponent:{m.group(1)}"]
    if re.search(r"discard the top card of your deck\.\s*if that card is a basic energy", t):
        return ["attachBasicFromDiscard"]
    if re.search(r"heal all damage from this pok[eé]mon\.\s*this pok[eé]mon is now asleep", t):
        return ["healSelf:999"]
    if re.search(r"remove all special conditions from this pok[eé]mon", t):
        return ["clearSpecialConditions"]
    if re.search(r"switch 1 of your opponent's benched pok[eé]mon with (?:the )?(?:defending|your opponent's active)", t):
        return ["gustOpponent"]
    if re.search(r"your opponent discards (?:a |one |1 )?cards? from", t):
        return ["discardOpponentHand:1"]
    if re.search(r"move an energy attached to (?:the )?defending pok[eé]mon to 1 of your opponent's benched", t):
        return ["energyTrans"]
    m = re.search(r"does (\d+) damage times the total number of [\w', and]+ in play", t)
    if m:
        return [f"damageTimesPokemonInPlay:{m.group(1)}"]
    if re.search(r"search your deck for an evolution card with [\w ]+ in its name", t):
        return ["searchPokemonToHand:1"]
    if re.search(r"search your deck for (?:a |an |any |up to \d+ )?[\w ]*pok[eé]mon.{0,50}put (?:it|them) into your hand", t):
        return ["searchPokemonToHand:1"]
    if re.search(r"search your deck for (?:a |up to \d+ )?basic energy card.{0,40}put (?:it|them) into your hand", t):
        return ["searchEnergyToHand:1"]
    if re.search(r"choose up to \d+ .+ from your discard pile.{0,40}shuffle them into your deck", t):
        return ["shuffleCardsFromDiscardToDeck:3"]
    if re.search(r"choose up to \d+ pok[eé]mon tool cards? attached to pok[eé]mon in play.{0,30}discard them", t):
        return ["discardOpponentTools"]
    m = re.search(r"this attack does (\d+) damage to each benched pok[eé]mon with at least 1 energy", t)
    if m:
        return [f"spreadBothBench:{m.group(1)}"]
    if re.search(r"as often as you like.{0,40}move 1 damage counter from 1 of your pok[eé]mon to another", t):
        return ["moveDamageCounters"]
    if re.search(r"flip a coin\.\s*if heads,?\s*(?:the )?defending pok[eé]mon is now (asleep|confused|paralyzed|poisoned|burned)", t):
        m = re.search(r"is now (asleep|confused|paralyzed|poisoned|burned)", t)
        return [f"flipHeadsSpecial:{m.group(1).upper()}"]
    if re.search(r"flip a coin\.\s*if heads,?\s*this attack does (\d+) damage\.\s*if tails and if your opponent", t):
        m = re.search(r"this attack does (\d+)", t)
        return [f"flipHeadsAddDamage:{m.group(1)}"]
    m = re.search(r"flip a coin\.\s*if heads,?\s*and if your opponent has any benched.{0,40}this attack does (\d+) damage to that", t)
    if m:
        return [f"flipHeadsAddDamage:{m.group(1)}"]
    m = re.search(r"search your deck for (\d+|two|three) pok[eé]mon tool cards?.{0,40}put them into your hand", t)
    if m:
        return [f"searchTrainerToHand:{parse_count(m.group(1))}"]
    if re.search(r"once during your turn \(before your attack\), if you have ", t):
        return ["searchAnyToHand:1"]

    # ---- card-by-card attacks ----
    if re.search(r"remove .+ damage counters .+ equal (?:to )?(?:of )?half the damage done", t):
        return ["healHalfDamageDone"]
    if re.search(r"if an attack does damage to [\w' -]+ during your opponent's next turn", t):
        return ["koRevengePerEnergy"]
    if re.search(r"flip a number of coins equal to the number of pok[eé]mon in play\.\s*this attack does (\d+) damage times the number of heads", t):
        return ["damageTimesPokemonInPlay:10"]
    if re.search(r"this attack can't be used unless .+ and (?:the )?defending pok[eé]mon have the same number of energy", t):
        return ["attackGate"]
    if re.search(r"put a [\w ]+ marker on it", t):
        return ["noop"]
    # bp-6: opponent puts 3 markers, then 10 damage each marker
    if re.search(r"your opponent puts \d+ markers onto .{0,20}pok[eé]mon.{0,80}this attack does (\d+) damage to each pok[eé]mon for each marker", t):
        m = re.search(r"does (\d+) damage", t)
        return [f"putCountersEachOpponent:{int(m.group(1) if m else 10)*3}"]
    # bw10-3: if in discard pile, put on bottom of deck
    if re.search(r"if this pok[eé]mon is in your discard pile,? you may put this pok[eé]mon on the bottom of your deck", t):
        return ["toBottomOfDeck"]
    # bw10-11: when attach Plasma Energy, gust
    if re.search(r"when you attach a [\w ]*energy from your hand to this pok[eé]mon,? you may switch 1 of your opponent's benched", t):
        return ["gustOpponent"]

    # ---- cluster batch 2 ----
    if re.search(r"flip a coin\.\s*if heads,?\s*switch the number of damage counters", t):
        return ["swapDamageCounters"]
    if re.search(r"search your deck for \d+ different types of basic energy cards? and attach them", t):
        return ["searchEnergyToSelf"]
    if re.search(r"if (?:the )?defending pok[eé]mon has any basic energy cards? attached.{0,80}attach that energy", t):
        return ["energyTrans"]
    if re.search(r"during your opponent's next turn, if this pok[eé]mon would be damaged by an attack, prevent", t):
        return ["preventDamageIfUnder:40"]
    if re.search(r"move all damage counters from 1 of your benched pok[eé]mon to (?:the )?defending", t):
        return ["moveDamageBenchToDefending"]
    m = re.search(r"this attack does (\d+) damage times the number of [\w ]+ on your bench", t)
    if m:
        return [f"bonusPerOwnBench:{m.group(1)}"]
    m = re.search(r"this attack does (\d+) damage plus (\d+) damage times the number of your opponent's benched", t)
    if m:
        return [f"bonusPerOpponentBenchTimes:{m.group(2)}"]
    if re.search(r"discard the top (\d+|two|three) cards? of your deck", t) and "opponent" not in t:
        m = re.search(r"discard the top (\d+|two|three)", t)
        return [f"millSelf:{parse_count(m.group(1))}"]
    m = re.search(r"heal all damage from 1 of your benched pok[eé]mon", t)
    if m:
        return ["healBench:999"]
    m = re.search(r"this attack does (\d+) less damage for each damage counter on this pok[eé]mon", t)
    if m:
        return [f"bonusPerSelfDamageCounter:-{m.group(1)}"]
    if re.search(r"your opponent shuffles (?:the )?defending pok[eé]mon and all cards attached", t):
        return ["scoopUpOpponent"]
    m = re.search(r"does (\d+) damage times the number of colorless in (?:the )?defending pok[eé]mon's retreat cost", t)
    if m:
        return [f"damageTimesRetreatColorless:{m.group(1)}"]
    if re.search(r"flip a coin\.\s*if tails,?\s*do (\d+) damage to your active pok[eé]mon\.\s*if heads,?\s*your opponent flips", t):
        m = re.search(r"do (\d+) damage", t)
        return [f"flipHeadsSelfDamage:{m.group(1) if m else 10}"]
    if re.search(r"remove all special conditions from (?:the )?defending", t):
        return ["noop"]

    # ---- cluster batch 3 ----
    # Flip a coin. If heads, choose 1 of opponent's Benched and switch / damage
    if re.search(r"flip a coin\.\s*if heads,?\s*choose 1 of your opponent's benched.{0,40}(?:switch|this attack does)", t):
        m = re.search(r"this attack does (\d+)", t)
        return [f"flipHeadsGustOpponent"] if not m else [f"flipHeadsAddDamage:{m.group(1)}"]
    # If Defending has any Energy, choose 1 and discard / move
    if re.search(r"if (?:the )?defending pok[eé]mon has any (?:basic )?energy.{0,50}choose 1 of them and discard", t):
        return ["discardEnergyDefending:1"]
    # Take 1 more Prize when KO by this Pokemon
    if re.search(r"take 1 more prize card", t):
        return ["plusPrize:1"]
    # Does N damage times number of TYPE on your Bench
    m = re.search(r"this attack does (\d+) damage times the number of [\w ]+ pok[eé]mon on your bench", t)
    if m:
        return [f"bonusPerOwnBench:{m.group(1)}"]
    # Discard the top N cards of your deck. This attack does M damage for each Energy discarded
    m = re.search(r"discard the top \d+ cards? of your deck\.\s*this attack does (\d+) damage for each energy", t)
    if m:
        return [f"millSelf:5"]
    # Heal all damage from 1 of your Benched
    if re.search(r"heal all damage from 1 of your benched", t):
        return ["healBench:999"]
    # Flip a coin. If heads, put 1 damage counter on each of opponent's Pokemon
    if re.search(r"flip a coin\.\s*if heads,?\s*put 1 damage counter on each of your opponent's pok[eé]mon", t):
        return ["putCountersEachOpponent:10"]
    # Search deck for N different types of basic Energy and attach to your Pokemon
    if re.search(r"search your deck for \d+ different types of basic energy", t):
        return ["searchEnergyToSelf"]
    # Your opponent reveals their hand. Discard a Supporter
    if re.search(r"your opponent reveals .{0,10}hand\.\s*discard a supporter", t):
        return ["noop"]
    # This attack does N damage to each of your opponent's Pokemon that has any damage counters
    if re.search(r"this attack does (\d+) damage to each of your opponent's pok[eé]mon that has any damage counters", t):
        m = re.search(r"this attack does (\d+)", t)
        return [f"spreadAllOpponent:{m.group(1)}"]
    # Move all damage counters from Defending to 1 of opponent's Benched
    if re.search(r"move all damage counters from (?:the )?defending", t):
        return ["moveDamageCounters"]

    # Flip a coin. If heads, search your deck for N Energy and attach to your Pokemon
    if re.search(r"flip a coin\.\s*if heads,?\s*search your deck for \d+ [\w ]*energy cards? and attach them", t):
        return ["searchEnergyToSelf"]
    # This attack does N damage for each card in your hand
    m = re.search(r"this attack does (\d+) damage for each card in your hand", t)
    if m:
        return [f"damageTimesHand:{m.group(1)}:self"]
    # Put N damage counters on Defending for each Energy attached to NAME
    m = re.search(r"put (\d+) damage counters? on (?:the )?defending pok[eé]mon for each energy attached", t)
    if m:
        return [f"bonusPerEnergySelf:{int(m.group(1))*10}"]
    # Move up to N damage counters from any of your Pokemon to opponent's
    if re.search(r"move up to \d+ damage counters from any of your pok[eé]mon to any of your opponent's", t):
        return ["moveDamageCounters"]
    # Heal N damage from your Active Pokémon
    m = re.search(r"heal (\d+) damage from your active pok[eé]mon", t)
    if m:
        return [f"healSelf:{m.group(1)}"]
    # Search deck for a Plasma Energy / TYPE Energy and attach to 1 of your
    if re.search(r"search your deck for (?:a |an |up to \d+ )?[\w ]*energy card and attach it to 1 of your", t):
        return ["searchEnergyToSelf"]
    # During your opponent's next turn, any damage done by attack from Defending is
    m = re.search(r"during your opponent's next turn, any damage done by attacks? from (?:the )?defending pok[eé]mon", t)
    if m:
        return ["selfReduceDamageNextTurn:20"]
    # Does N damage times number of different types of basic Energy attached
    m = re.search(r"this attack does (\d+) damage times the number of different types of basic energy", t)
    if m:
        return [f"bonusPerEnergySelf:{m.group(1)}"]
    # Does N damage times the number of Grass Pokemon in play
    m = re.search(r"(?:this attack )?does (\d+) damage times the number of [\w ]+ pok[eé]mon in play", t)
    if m:
        return [f"damageTimesPokemonInPlay:{m.group(1)}"]

    # ---- cluster batch 5 ----
    if re.search(r"flip a coin\.\s*if heads,?\s*put a card from your discard pile on top of your deck", t):
        return ["flipHeadsTopDiscardToDeck"]
    if re.search(r"search your deck for (?:a |an |up to \d+ )?[\w ]*energy card and attach it to 1 of your", t):
        return ["searchEnergyToSelf"]
    if re.search(r"when you play this pok[eé]mon from your hand onto your bench,? you may search your deck", t):
        return ["searchAnyToHand:1"]
    if re.search(r"if (?:the )?defending pok[eé]mon has any basic energy cards? attached to it,? choose 1 of them", t):
        return ["discardEnergyDefending:1"]
    if re.search(r"during your opponent's next turn, this pok[eé]mon has no weakness", t):
        return ["noWeaknessNextTurn"]
    m = re.search(r"during your next turn, [\w' -]+'s [\w' ]+ damage is doubled", t)
    if m:
        return ["bonusNamedAttack:40"]
    if re.search(r"whenever an attack .{0,20}does \d+ or more damage to .+, prevent that damage", t):
        return ["preventEffectsSelf"]
    if re.search(r"move all [\w ]*energy attached to [\w' -]+ to 1 of your benched", t):
        return ["energyTrans"]
    if re.search(r"this attack does (\d+) damage to each pok[eé]mon with a pok[eé]-body or pok[eé]-power", t):
        m = re.search(r"this attack does (\d+)", t)
        return [f"spreadAllOpponent:{m.group(1)}"]
    m = re.search(r"heal (\d+) damage from your active pok[eé]mon", t)
    if m:
        return [f"healSelf:{m.group(1)}"]
    if re.search(r"discard the top (\d+) cards? of your deck, and then choose 2 of your opponent's benched", t):
        m = re.search(r"discard the top (\d+)", t)
        return [f"millThenHitBench:{m.group(1) if m else 5}:50"]
    m = re.search(r"this attack does (\d+) damage for each damage counter on all of your benched", t)
    if m:
        return [f"bonusPerDamagedBenchAll:{m.group(1)}"]
    m = re.search(r"does (\d+) more damage for each colorless in (?:the )?defending pok[eé]mon's retreat cost", t)
    if m:
        return [f"bonusPerRetreatCostColorless:{m.group(1)}"]
    m = re.search(r"does (\d+) damage times the total amount of [\w ]*energy attached to all of your", t)
    if m:
        return [f"damageTimesEnergySelf:{m.group(1)}"]
    m = re.search(r"does (\d+) damage times the number of different types of basic energy", t)
    if m:
        return [f"bonusPerEnergySelf:{m.group(1)}"]
    if re.search(r"as often as you like.{0,40}move 1 damage counter from 1 of your", t):
        return ["moveDamageCounters"]
    if re.search(r"switch 1 of your opponent's benched pok[eé]mon with 1 of (?:the )?defending", t):
        return ["gustOpponent"]

    # ---- cluster batch 6 ----
    if re.search(r"flip a coin\.\s*if heads,?\s*put a card from your discard pile on top of your deck", t):
        return ["flipHeadsTopDiscardToDeck"]
    if re.search(r"search your deck for (?:a |an |up to \d+ )?[\w ]*energy card and attach it to 1 of your", t):
        return ["searchEnergyToSelf"]
    if re.search(r"when you play this pok[eé]mon from your hand onto your bench,? you may search your deck", t):
        return ["searchAnyToHand:1"]
    if re.search(r"if (?:the )?defending pok[eé]mon is a pok[eé]mon-ex.{0,40}can't attack", t):
        return ["cantAttackIfEx"]
    if re.search(r"during your next turn, [\w' -]+ can't attack", t):
        return ["cantAttackNextTurn"]
    m = re.search(r"during your opponent's next turn, any damage done to this pok[eé]mon by attacks is (?:increased|reduced) by (\d+)", t)
    if m:
        return [f"selfReduceDamageNextTurn:{m.group(1)}"]
    if re.search(r"move an energy(?: card)? attached to [\w' -]+ to 1 of your benched", t):
        return ["energyTrans"]
    m = re.search(r"heal (\d+) damage from your active pok[eé]mon", t)
    if m:
        return [f"healSelf:{m.group(1)}"]
    if re.search(r"discard the top \d+ cards? from your deck\.\s*this attack does \d+ damage times the number of energy", t):
        return ["millSelf:3"]
    m = re.search(r"this attack does (\d+) damage to 1 of your benched pok[eé]mon", t)
    if m:
        return [f"damageOwnBench:{m.group(1)}"]
    m = re.search(r"your opponent shuffles (?:his or her |their )?hand into (?:his or her |their )?deck and draws (\d+)", t)
    if m:
        return [f"opponentShuffleDraw:{parse_count(m.group(1))}"]
    m = re.search(r"does (\d+) damage times the number of basic energy cards? attached to [\w' -]+", t)
    if m:
        return [f"damageTimesEnergySelf:{m.group(1)}"]
    if re.search(r"put 2 damage counters on your opponent's confused pok[eé]mon between turns", t):
        return ["noop"]
    if re.search(r"this attack does (\d+) damage plus (\d+) damage times the number of your benched pok[eé]mon minus", t):
        m = re.search(r"plus (\d+) damage times", t)
        return [f"bonusPerOwnBench:{m.group(1) if m else 10}"]

    # Tool remainder effects after rule-strip: HP / damage bonus / no retreat / reduce damage
    m = re.search(r"(?:gets?|has) \+(\d+) hp", t)
    if m:
        return ["noop"]
    m = re.search(r"do(?:es)? (\d+) more damage", t)
    if m:
        return [f"plusPowerMarker:{m.group(1)}"]
    m = re.search(r"takes? (\d+) less damage|reduced by (\d+)", t)
    if m:
        n = m.group(1) or m.group(2)
        return [f"reduceDamageMarker:{n}"]
    if re.search(r"no retreat cost", t):
        return ["auraNoRetreatCost"]
    if re.search(r"prevent all (?:effects|damage)", t):
        return ["preventEffectsMarker"]
    if re.search(r"can't be affected by (?:any )?special", t):
        return ["preventEffectsMarker"]
    if re.search(r"when the pok[eé]mon this card is attached to is knocked out", t):
        return ["noop"]
    if re.search(r"if the pok[eé]mon this card is attached to is knocked out", t):
        return ["noop"]

    # ---- cluster batch 7 (attacks) ----
    if re.search(r"once during your turn when [\w' -]+ retreats,? choose 1 of your opponent's benched", t):
        return ["gustOpponent"]
    if re.search(r"search your deck for (?:a |an )?[\w ]*energy card and attach it to 1 of your", t):
        return ["searchEnergyToSelf"]
    if re.search(r"when you play this pok[eé]mon from your hand to evolve .{0,40}you may discard all", t):
        return ["noop"]
    m = re.search(r"if (?:the )?defending pok[eé]mon already has at least (\d+) damage counters? on it,?\s*this attack does (\d+)", t)
    if m:
        return [f"bonusDamagePer:{m.group(2)}:1"]
    if re.search(r"whenever your opponent's active pok[eé]mon retreats,? your opponent flips a coin\.\s*if tails", t):
        return ["roughSkin"]
    m = re.search(r"during your opponent's next turn, any damage done to [\w' -]+ by attacks is (?:increased|reduced) by (\d+)", t)
    if m:
        return [f"selfReduceDamageNextTurn:{m.group(1)}"]
    if re.search(r"during your next turn, [\w' -]+ can't use [\w' ]+", t):
        return ["cantAttackNextTurn"]
    if re.search(r"flip a coin\.\s*if tails,? [\w' -]+ can't use [\w' ]+ during your next turn", t):
        return ["cantAttackNextTurn"]
    if re.search(r"move an energy(?: card)? attached to (?:the )?defending pok[eé]mon to another of your opponent's", t):
        return ["energyTrans"]
    m = re.search(r"this attack does (\d+) damage to each pok[eé]mon in play \(both yours and your opponent's\)", t)
    if m:
        return [f"spreadBothBench:{m.group(1)}"]
    m = re.search(r"this attack does (\d+) damage for each of your [\w' -]+ pok[eé]mon in play", t)
    if m:
        return [f"bonusPerOwnBench:{m.group(1)}"]
    m = re.search(r"heal (\d+) damage from your active pok[eé]mon", t)
    if m:
        return [f"healSelf:{m.group(1)}"]
    if re.search(r"discard the top card from your opponent's deck", t):
        return ["millOpponent:1"]
    m = re.search(r"this attack does (\d+) damage for each [\w ]+ card in your discard pile", t)
    if m:
        return [f"damageTimesDiscardPokemon:{m.group(1)}"]
    m = re.search(r"does (\d+) damage times the number of colorless energy in (?:the )?defending pok[eé]mon's retreat cost", t)
    if m:
        return [f"damageTimesRetreatColorless:{m.group(1)}"]
    if re.search(r"choose up to \d+ pok[eé]mon tool cards? attached to pok[eé]mon in play.{0,30}discard them", t):
        return ["discardOpponentTools"]

    # ---- trainer batch 2 ----
    if re.search(r"each player plays with .{0,25}prize cards face up", t):
        return ["noop"]
    if re.search(r"look at your opponent's hand\.\s*if .{0,20}has any trainer cards,? choose 1 of them", t):
        return ["peekOpponentHand"]
    if re.search(r"flip a coin\.\s*if tails,?\s*do (\d+) damage to your active pok[eé]mon\.\s*if heads,?\s*your opponent flips", t):
        m = re.search(r"do (\d+) damage", t)
        return [f"flipHeadsSelfDamage:{m.group(1) if m else 10}"]
    if re.search(r"all pok[eé]mon powers stop working", t):
        return ["noPowers"]
    if re.search(r"you may draw up to \d+ cards,? then your opponent may draw up to", t):
        return ["bothDraw:5"]
    if re.search(r"shuffle your hand into your deck\.\s*then,?\s*draw (\d+) cards?\.\s*you can't play any more trainer", t):
        m = re.search(r"draw (\d+) cards?", t)
        return [f"shuffleDraw:{m.group(1) if m else 7}"]
    if re.search(r"look at the top \d+ cards of your deck and put them back on top of your deck in any order", t):
        return ["pokedex"]
    if re.search(r"put as many cards from your hand as you like on the bottom of your deck", t):
        return ["drawUntilHand:6"]
    if re.search(r"look at the bottom \d+ cards of your deck\.\s*you may reveal a [\w' -]+ you find there and put it onto your bench", t):
        return ["searchBasicToBench:1"]
    if re.search(r"during this turn, your pok[eé]mon's attacks do (\d+) more damage to the active pok[eé]mon for each prize card", t):
        m = re.search(r"do (\d+) more damage", t)
        return [f"plusPowerMarker:{m.group(1) if m else 10}"]
    if re.search(r"discard 1 energy card attached to 1 of your own pok[eé]mon in order to choose 1 of your opponent", t):
        return ["discardEnergyDefending:2"]
    if re.search(r"this card stays in play when you play it", t):
        return ["noop"]
    # basep-41 stadium: once each player's turn flip coin draw — strip stadium rule first
    if re.search(r"once during each player's turn \(before attacking\),? that player may flip a coin\.\s*if heads,?\s*that player draws", t):
        return ["flipHeadsDraw:1"]
    if re.search(r"that player may flip a coin\.\s*if heads,?\s*that player draws a card", t):
        return ["flipHeadsDraw:1"]
    # basep-42 stadium: prevent discard-to-hand
    if re.search(r"if the effect of a pok[eé]mon power, attack, energy card, or trainer card would put a card in a discard pile", t):
        return ["continuousStatic"]
    # base5-74 challenge
    if re.search(r"ask your opponent if .{0,25}accepts your challenge", t):
        return ["draw:2"]
    if re.search(r"accepts your challenge", t):
        return ["draw:2"]

    return None


def match_rule_box(text: str) -> Optional[list[str]]:
    """Rule-box text (prize rules, deck limits) is implemented via CardTag/DeckAnalyser."""
    t = norm_text(text).lower()
    if not t:
        return []
    if re.search(
        r"(v rule:|vmax rule:|vstar rule:|tag team rule:|pok[eé]mon[ -]ex rule:|"
        r"pok[eé]mon-gx rule:|mega evolution rule:|mega evolution ex rule:|"
        r"when (?:your )?pok[eé]mon(?:-ex| ex|-gx| v| vstar| vmax)? (?:has been |is )?knocked out,? your opponent takes \d prize)",
        t,
    ):
        return ["noop"]
    if re.search(r"you can't have more than \d+ .* in your deck", t):
        return ["noop"]
    if re.search(r"you may have up to \d+ basic pok[eé]mon cards in your deck", t):
        return ["noop"]
    if "prize cards" in t and "knocked out" in t and len(t) < 160:
        return ["noop"]
    return None


def strip_rule_prefix(t: str) -> str:
    """Remove recurring rule-box sentences so the real effect can match."""
    changed = True
    while changed and t:
        changed = False
        for pat in (
            r"^you can play only one supporter card each turn\.\s*",
            r"^when you play this card, put it next to your active pok[eé]mon\.\s*",
            r"^when your turn ends, discard this card\.\s*",
            r"^you may play as many (?:item|any number of item) cards as you like during your turn\.\s*",
            r"^\(before your attack\.\)\s*",
            r"^you may play any number of item cards during your turn\.\s*",
            r"^this card stays in play when you play it\.\s*",
            r"^this stadium stays in play when you play it\.\s*",
            r"^discard this card if another stadium card comes into play\.\s*",
            r"^discard it if another stadium comes into play\.\s*",
            r"^if another card with the same name is in play, you can't play this card\.\s*",
            r"^you may play as many stadium cards as you like during your turn\.\s*",
            r"^attach a pok[eé]mon tool to 1 of your pok[eé]mon that doesn't already have a pok[eé]mon tool[^.]*\.\s*",
            r"^play [\w' -]+ as if it were (?:a |an )?\d+[- ]hp (?:colorless )?basic pok[eé]mon\.\s*",
            r"^play [\w' -]+ as if it were a basic pok[eé]mon\.\s*",
            r"^you may play as many [\w ]+ as you like during your turn\.\s*",
        ):
            new = re.sub(pat, "", t, count=1)
            if new != t:
                t = new.strip()
                changed = True
        # trailing rule-box sentences
        for pat in (
            r"\s*you may play as many (?:item|any number of item) cards as you like during your turn\.?$",
            r"\s*\(before your attack\.\)\s*$",
            r"\s*you may play any number of item cards during your turn\.?$",
            r"\s*you may play as many stadium cards as you like during your turn\.?$",
            r"\s*\(you may play as many [\w ]+ as you like during your turn[^)]*\)\s*$",
        ):
            new = re.sub(pat, "", t)
            if new != t:
                t = new.strip()
                changed = True
    return t


def match_trainer(text: str, subtypes: list[str], name: str = "") -> Optional[list[str]]:
    t = norm_text(text).lower()
    nm = (name or "").lower().strip()
    if not t and not nm:
        return []
    stripped = strip_rule_prefix(t)
    if stripped and stripped != t:
        t = stripped

    # Multi-sentence trainer effects: match each clause and compose
    if t.count(". ") >= 1 or t.endswith("."):
        parts = [p.strip() for p in re.split(r"(?<=[.!?])\s+", t) if p.strip()]
        if len(parts) >= 2:
            composed: list[str] = []
            ok = True
            for part in parts:
                sub = match_trainer(part, subtypes, nm)
                if sub is None:
                    ok = False
                    break
                if sub == ["noop"]:
                    continue
                composed.extend(sub)
            if ok and composed:
                return composed

    # Each player shuffles hand into deck (with or without draw)
    if re.search(r"each player shuffles (?:his or her|their) hand into (?:his or her|their) deck", t):
        m = re.search(r"draw (\d+|four|five|seven|eight) cards?", t)
        n = parse_count(m.group(1), 4) if m else 4
        return [f"bothShuffleDraw:{n}"]
    # Shuffle hand into deck, draw equal to opponent's hand
    if re.search(r"shuffle your hand into your deck\.\s*then,? draw a number of cards equal to the number of cards in your opponent's hand", t):
        return ["shuffleDrawPerOppHand"]
    # Search deck for an evolution card
    if re.search(r"search your deck for an evolution card", t):
        return ["searchPokemonToHand:1"]
    # Choose 1 card in hand, shuffle rest into deck, draw N
    if re.search(r"choose 1 card in your hand and shuffle the rest of your cards? into your deck\.\s*then,? draw (\d+)", t):
        m = re.search(r"draw (\d+)", t)
        return [f"shuffleHandToBottomDraw:{m.group(1) if m else 4}:0"]
    # Reveal top N, opponent chooses M
    if re.search(r"reveal the top (\d+) cards? of your deck\.\s*your opponent chooses (\d+)", t):
        m = re.search(r"chooses (\d+)", t)
        return [f"draw:{m.group(1) if m else 3}"]
    # Search deck or discard for trainer/fossil
    if re.search(r"search your deck or discard pile for a trainer card", t):
        return ["searchTrainerToHand:1"]
    # Show prizes face up
    if re.search(r"turn all of your prize cards face up|prize cards face up for the rest of the game", t):
        return ["showPrizes"]
    # Heal all damage when becomes / evolves
    if re.search(r"when 1 of your pok[eé]mon becomes this pok[eé]mon,? heal all damage", t):
        return ["heal:999"]
    # Damage isn't affected by effects on opponent Active
    if re.search(r"isn't affected by any effects on your opponent's active", t):
        return ["ignoreAllEffects"]
    # Choose up to N TYPE, search energy attach
    if re.search(r"choose up to (\d+) of your [\w ]*pok[eé]mon\.\s*for each of those pok[eé]mon,? search your deck for a [\w ]*energy", t):
        return ["searchEnergyToSelf:2"]
    # Opponent deck peek discard Items
    if re.search(r"look at the top (\d+) cards? of your opponent's deck and discard", t):
        return ["millOpponent:2"]
    # Prize cards into hand
    if re.search(r"put up to (\d+) prize cards? into your hand", t):
        return ["noop"]
    # Shuffle hand into deck, draw per Benched
    if re.search(r"shuffle your hand into your deck\.\s*then,? draw a number of cards equal to the number of benched", t):
        return ["drawPerOpponentBench:1"]
    # Opponent reveals hand, shuffle Items into deck
    if re.search(r"your opponent reveals .{0,20}hand and shuffles all item cards", t):
        return ["peekOpponentHand", "lassShuffleTrainers"]
    # Draw until 7
    if re.search(r"draw cards until (?:he or she |they |you )has? (\d+) cards? in (?:his or her |their |your )?hand", t):
        m = re.search(r"until .{0,30}?(\d+) cards?", t)
        return [f"drawUntilHand:{m.group(1) if m else 7}"]
    # Look at top 2, choose 1
    if re.search(r"look at the top 2 cards? of your deck,? choose 1", t):
        return ["searchAnyToHand:1"]
    # Look at bottom 7, choose 1 Pokemon
    if re.search(r"look at the (?:7 cards from the bottom|bottom 7 cards) of your deck\.\s*choose 1 pok[eé]mon", t):
        return ["searchPokemonToHand:1"]
    # Search for named Pokemon
    if re.search(r"search your deck for [\w' -]+,? show it to your opponent,? and put it into your hand", t):
        return ["searchPokemonToHand:1"]
    if re.search(r"search your deck or your discard pile for a pok[eé]mon", t):
        return ["recoverFromDiscard:1"]
    # Copy attack tool
    if re.search(r"may use this card's attack instead of its own", t):
        return ["copyAttack"]
    # Choose a Basic from discard and switch with Basic in play
    if re.search(r"choose a basic pok[eé]mon in your discard pile and switch it with 1 of your basic pok[eé]mon in play", t):
        return ["switchSelf"]
    # Opponent reveals hand, put a Trainer card
    if re.search(r"your opponent reveals .{0,20}hand\.\s*put a trainer card", t):
        return ["peekOpponentHand", "searchTrainerToHand:1"]
    # Discard energy as cost, look at top N
    if re.search(r"you can use this card only if you discard a [\w ]*energy card from your hand\.\s*look at the top (\d+)", t):
        return ["discardEnergySelf:1", "searchAnyToHand:2"]
    # Lost zone cost + tool discard
    if re.search(r"put another card from your hand in the lost zone", t):
        return ["discardFromHand:1"]
    # Choose 1 or more: shuffle from discard
    if re.search(r"choose 1 or more:\s*•?\s*shuffle a pok[eé]mon from your discard pile into your deck", t):
        return ["shuffleCardsFromDiscardToDeck:2"]
    # Grass can evolve same turn
    if re.search(r"can evolve into [\w ]*pok[eé]mon during the turn they play those pok[eé]mon", t):
        return ["earlyEvolution"]
    # Once during each player's turn, discard energy to draw
    if re.search(r"once during each player's turn, that player may discard an energy card from their hand", t):
        return ["noop"]
    # Opponent has N or fewer prizes, choose pokemon
    if re.search(r"you can use this card only if your opponent has \d+ or fewer prize cards remaining", t):
        rest = re.sub(r"you can use this card only if your opponent has \d+ or fewer prize cards remaining\.?\s*", "", t)
        if "heal" in rest:
            return ["heal:60"]
        if "switch" in rest:
            return ["switchSelf"]
        if "search" in rest:
            return ["searchAnyToHand:1"]
        if re.search(r"(\d+) more damage", rest):
            m = re.search(r"(\d+) more damage", rest)
            return [f"plusPowerMarker:{m.group(1)}"]
    # Stadium: flip a coin, if heads draw
    if re.search(r"once during each player's turn.{0,80}flip a coin\.\s*if heads,?\s*that player draws", t):
        return ["flipHeadsDraw:1"]
    # Flip, put card from discard on top of deck
    if re.search(r"flip a coin\.\s*if heads,?\s*put a card from your discard pile on top of your deck", t):
        return ["flipHeadsTopDiscardToDeck"]
    # Retreat cost of each basic is Colorless less
    if re.search(r"retreat cost of each basic pok[eé]mon is [\w ]*less", t):
        return ["auraNoRetreatCost"]
    # Tool: +N damage to active
    if re.search(r"does (\d+) more damage to the active pok[eé]mon", t):
        m = re.search(r"(\d+) more damage", t)
        return [f"plusPowerMarker:{m.group(1) if m else 20}"]
    # Tool: damage when damaged
    if re.search(r"is damaged by an opponent's attack.{0,60}this (?:card|power) does (\d+) damage", t):
        return ["roughSkin"]
    # Devolve
    if re.search(r"devolve 1 of your evolved pok[eé]mon", t):
        return ["devolve"]
    # +N HP stadium
    if re.search(r"gets? \+(\d+) hp", t) and "this card stays in play" in t:
        return ["continuousStatic"]
    # Move energy when KO
    if re.search(r"when your active pok[eé]mon is knocked out.{0,60}you may move 1 basic energy", t):
        return ["energyTrans"]
    # Search on KO
    if re.search(r"is knocked out.{0,60}search your deck for", t):
        return ["searchAnyToHand:1"]
    # Look at bottom 7 for named fossil
    if re.search(r"look at the bottom 7 cards of your deck\.\s*you may reveal an? [\w' -]+ you find there and put it onto your bench", t):
        return ["searchBasicToBench:1"]
    # Opponent shuffles hand and draws N
    if re.search(r"your opponent shuffles (?:his or her |their )?hand into (?:his or her |their )?deck and draws (\d+)", t):
        m = re.search(r"draws (\d+)", t)
        return [f"opponentShuffleDraw:{m.group(1) if m else 4}"]
    # Put pokemon from discard on top of deck
    if re.search(r"put a pok[eé]mon from your discard pile on top of your deck", t):
        return ["flipHeadsTopDiscardToDeck"]
    # Gold Potion / heal active
    m = re.search(r"heal (\d+) damage from your active pok[eé]mon", t)
    if m:
        return [f"heal:{m.group(1)}"]
    # Hypnotoxic Laser
    if re.search(r"your opponent's active pok[eé]mon is now poisoned", t):
        ops = ["poisonDefending"]
        if "asleep" in t:
            ops.append("specialDefending:ASLEEP")
        return ops
    # Colress Machine / plasma energy
    if re.search(r"search your deck for a [\w ]*energy card and attach it to", t):
        return ["searchEnergyToSelf:1"]
    # Ether: reveal top, attach if energy
    if re.search(r"reveal the top card of your deck\.\s*if that card is a basic energy card,? attach it", t):
        return ["attachBasicFromDiscard"]
    # No weakness stadium (plasma)
    if re.search(r"has no weakness", t) and "this card stays in play" in t:
        return ["noWeakness"]
    # More damage counters on poisoned between turns
    if re.search(r"put (\d+) more damage counters? on poisoned pok[eé]mon", t):
        return ["continuousStatic"]
    # Tool retreat cost less
    if re.search(r"retreat cost of the pok[eé]mon this card is attached to is [\w ]*less", t):
        return ["auraNoRetreatCost"]
    # Flip 2 coins, remove 2 damage counters times heads
    if re.search(r"flip (\d+) coins\.\s*remove (\d+) damage counters? times the number of heads", t):
        return ["healCounter:4"]
    # Flip heads, gust
    if re.search(r"flip a coin\.\s*if heads,?\s*choose 1 of your opponent's benched pok[eé]mon and switch it", t):
        return ["flipHeadsGustOpponent"]
    # Put Basic from hand into play
    if re.search(r"put a basic pok[eé]mon card from your hand into play", t):
        return ["searchBasicToBench:1"]
    # Tool: no retreat cost
    if re.search(r"the pok[eé]mon this card is attached to has no retreat cost|has no retreat cost", t):
        return ["auraNoRetreatCost"]
    # Tool: max HP set
    if re.search(r"its maximum hp is \d+|maximum hp is \d+", t):
        return ["continuousStatic"]
    # Tool: attacks regardless of energy
    if re.search(r"regardless of the amount or type of energy attached", t):
        return ["attackCost"]
    # Tool: if damaged, put damage counters (Rocky Helmet)
    if re.search(r"is damaged by an opponent's attack.{0,100}put (\d+) damage counters", t):
        return ["roughSkin"]
    if re.search(r"is damaged by an opponent's attack.{0,100}does (\d+) damage", t):
        return ["roughSkin"]
    if re.search(r"is damage[dn] by an opponent's attack", t) and "knocked out" in t:
        return ["roughSkin"]
    if re.search(r"is damaged by an opponent's attack", t):
        return ["roughSkin"]
    # Random hand discard
    if re.search(r"choose (\d+) random cards? from your opponent's hand", t):
        m = re.search(r"choose (\d+)", t)
        return [f"discardRandomOpponentHand:{m.group(1) if m else 1}"]
    # Each player draws or discards until N
    if re.search(r"draws? or discard cards? until (?:he or she |they |)has (\d+) cards", t):
        m = re.search(r"until .{0,20}?(\d+) cards", t)
        return [f"drawUntilHand:{m.group(1) if m else 5}"]
    # Discard a named-type card, then draw N
    if re.search(r"discard a [\w ]+ card from your (?:hand|card)\.{0,40}draw (\d+) cards?", t):
        m = re.search(r"draw (\d+)", t)
        return [f"discardFromHand:1", f"draw:{m.group(1) if m else 4}"]
    # Put a named-type card from discard to hand
    if re.search(r"put a [\w ]+ card from your discard pile into your hand", t):
        return ["recoverFromDiscard:1"]
    # KO this pokemon, put damage counters
    if re.search(r"knock out this pok[eé]mon\.\s*if you do,? put (\d+) damage counters", t):
        return ["putCountersEachOpponent:30"]
    # +N HP
    if re.search(r"gets? \+(\d+) hp", t):
        return ["continuousStatic"]
    # Treat flip as tails
    if re.search(r"treat it as tails", t):
        return ["continuousStatic"]
    # When KO, search deck
    if re.search(r"when this pok[eé]mon is knocked out.{0,80}search your deck", t):
        return ["searchAnyToHand:1"]
    # Flip N coins, attach energy from discard to bench
    if re.search(r"flip (\d+) coins\.\s*for each heads,? attach a [\w ]*energy card from your discard pile to your benched", t):
        return ["attachBasicFromDiscardToBench:3"]
    # From discard pile, put this pokemon onto bench / to bottom
    if re.search(r"if this pok[eé]mon is in your discard pile,? you may put this pok[eé]mon", t):
        return ["toBottomOfDeck"]
    # Team plasma type
    if re.search(r"is a team plasma pok[eé]mon", t):
        return ["continuousStatic"]
    # Colorless have no abilities
    if re.search(r"[\w ]*pok[eé]mon in play .{0,20}have no abilities", t):
        return ["noPowers"]
    # Battle City / stadium flip draw
    if re.search(r"once during each player's turn, that player may flip a coin\.\s*if heads,?\s*(?:the )?player draws", t):
        return ["flipHeadsDraw:1"]
    # Discard a named card from hand, draw N (Team Plasma Grunt etc.)
    if re.search(r"discard a [\w ]+ card from your (?:hand|card)\.", t):
        m = re.search(r"draw (\d+) cards?", t)
        return ["discardFromHand:1"] + ([f"draw:{m.group(1)}"] if m else [])
    # Put special energy from opponent into lost zone
    if re.search(r"put 1 special energy card attached to 1 of your opponent's pok[eé]mon in the lost zone", t):
        return ["discardEnergyDefending:1"]
    # Frozen City: attach energy from hand, put damage
    if re.search(r"whenever any player attaches an energy from .{0,30}hand.{0,50}put (\d+) damage counters", t):
        return ["roughSkin"]
    # Life Dew: fewer prizes
    if re.search(r"takes 1 fewer prize", t):
        return ["noop"]
    # Put energy in lost zone
    if re.search(r"put all energy cards attached to [\w' -]+ in the lost zone|put all energy cards attached to this pok[eé]mon", t):
        return ["discardEnergySelf:99"]
    # When put onto bench, flip coins / attach energy
    if re.search(r"when you put [\w' -]+ from your hand onto your bench,? you may flip", t):
        return ["flipHeadsDraw:1"]
    if re.search(r"when you put [\w' -]+ from your hand onto your bench,? you may attach up to (\d+)", t):
        m = re.search(r"attach up to (\d+)", t)
        return [f"attachBasicFromHandToBench:{m.group(1) if m else 2}"]
    # Search named Pokemon
    if re.search(r"search your deck for a card named [\w' -]+", t):
        return ["searchPokemonToHand:1"]
    # Choose opponent's evolved Pokemon
    if re.search(r"choose a number of your opponent's stage", t):
        return ["putDamageCounters:1"]
    # Tool: opponent takes fewer prizes
    if re.search(r"your opponent takes (\d+) fewer prize", t):
        return ["noop"]
    # Tool: attach energy from hand, put damage
    if re.search(r"whenever any player attaches an energy from .{0,20}hand.{0,40}put (\d+) damage counters", t):
        return ["roughSkin"]
    # Tool: when KO, search deck
    if re.search(r"if the pok[eé]mon this card is attached to is knocked out.{0,80}search your deck", t):
        return ["searchAnyToHand:1"]
    # Prevent damage counters on Bench
    if re.search(r"prevent all damage counters from being placed on benched", t):
        return ["auraProtectBench"]
    # Search deck for up to N Basic Energy
    if re.search(r"search your deck for up to (\d+) basic [\w ]*energy cards?[, ]", t):
        m = re.search(r"up to (\d+)", t)
        return [f"searchEnergyToHand:{m.group(1) if m else 1}"]
    # Look at top N, put Pokemon onto Bench
    if re.search(r"look at the top (\d+) cards? of your deck and put a [\w ]*pok[eé]mon you find there onto your bench", t):
        return ["searchBasicToBench:1"]
    # Once during each player's turn, switch Active TYPE
    if re.search(r"once during each player's turn, that player may switch their active [\w ]*pok[eé]mon", t):
        return ["switchSelf"]
    # Giovanni / named energy attach cost
    if re.search(r"choose 1 of your pok[eé]mon in play with [\w' -]+ in its name", t):
        return ["noop"]
    # Koga poison
    if re.search(r"does damage to a defending pok[eé]mon this turn,? that pok[eé]mon is then poisoned", t):
        return ["poisonDefending"]
    # Sabrina energy move
    if re.search(r"take all energy cards attached to 1 of your pok[eé]mon", t):
        return ["energyTrans"]

    # Draw N cards. (possibly with more clauses)
    m = re.search(r"^draw (\d+|two|three|four|five|six|seven|eight|nine|ten) cards?", t)
    if m:
        ops = [f"draw:{parse_count(m.group(1))}"]
        rest = t[m.end():].strip(" .")
        if "discard a stadium" in rest or "discard the stadium" in rest or "discard a stadium" in t:
            ops.append("discardStadium")
        if "discard" in rest and "stadium" not in rest and "hand" not in rest:
            pass
        return ops
    if re.search(r"discard a stadium|discard the stadium|discard any stadium", t):
        return ["discardStadium"]

    # Name-first for famous trainers (text can be noisy with rule boxes)
    NAME_OPS: dict[str, list[str]] = {
        "switch": ["switchActive"],
        "pokemon catcher": ["flipHeadsGustOpponent"],
        "pokémon catcher": ["flipHeadsGustOpponent"],
        "boss's orders": ["gustOpponent"],
        "bosss orders": ["gustOpponent"],
        "gust of wind": ["gustOpponent"],
        "warp point": ["gustOpponent"],
        "escape rope": ["gustOpponent"],
        "energy retrieval": ["recoverEnergyFromDiscard:2"],
        "energy switch": ["moveEnergyBetweenMine"],
        "crushing hammer": ["flipHeadsDiscardEnergyOpponent"],
        "enhanced hammer": ["discardEnergyDefending:1"],
        "energy removal": ["discardEnergyDefending:1"],
        "super scoop up": ["superScoopUp"],
        "judge": ["bothShuffleDraw:4"],
        "marnie": ["shuffleHandToBottomDraw:5:4"],
        "iono": ["shuffleHandToBottomDraw:5:4"],
        "n": ["bothShuffleDraw:4"],
        "bill": ["draw:2"],
        "bill's maintenance": ["draw:3"],
        "professor oak": ["discardHandDraw:7"],
        "professor oak's research": ["discardHandDraw:7"],
        "professor's research": ["discardHandDraw:7"],
        "professor juniper": ["discardHandDraw:7"],
        "potion": ["healCounter:2"],
        "super potion": ["healCounter:4"],
        "max potion": ["heal:999"],
        "full heal": ["clearSpecialConditions"],
        "pluspower": ["plusPowerMarker"],
        "pluspower+": ["plusPowerMarker"],
        "energy recycler": ["shuffleCardsFromDiscardToDeck:5"],
        "super rod": ["shuffleCardsFromDiscardToDeck:3"],
        "maintenance": ["draw:3"],
        "computer search": ["searchTrainerToHand:1"],
        "item finder": ["searchTrainerToHand:1"],
        "dowsing machine": ["searchTrainerToHand:1"],
        "vs seeker": ["searchTrainerToHand:1"],
        "pokégear 3.0": ["searchTrainerToHand:1"],
        "pokegear 3.0": ["searchTrainerToHand:1"],
        "pokémon fan club": ["searchPokemonToHand:2"],
        "pokemon fan club": ["searchPokemonToHand:2"],
        "celio's network": ["searchPokemonToHand:1"],
        "celios network": ["searchPokemonToHand:1"],
        "rare candy": ["rareCandy"],
        "pokédex": ["pokedex"],
        "pokedex": ["pokedex"],
        "lass": ["lassShuffleTrainers"],
        "super energy removal": ["discardEnergyDefending:2"],
        "scoop up": ["scoopUpSelf"],
        "pokémon flute": ["pokemonFlute"],
        "pokemon flute": ["pokemonFlute"],
        "pokémon trader": ["pokemonTrader"],
        "pokemon trader": ["pokemonTrader"],
        "pokémon center": ["pokemonCenter"],
        "pokemon center": ["pokemonCenter"],
        "mysterious fossil": ["fossilBody"],
        "clefairy doll": ["fossilBody"],
        "old amber": ["fossilBody"],
        "plume fossil": ["fossilBody"],
        "cover fossil": ["fossilBody"],
        "root fossil": ["fossilBody"],
        "claw fossil": ["fossilBody"],
        "dome fossil": ["fossilBody"],
        "helix fossil": ["fossilBody"],
        "unknown fossil": ["fossilBody"],
        "mega fossil": ["fossilBody"],
        "level ball": ["searchPokemonToHand:1"],
        "quick ball": ["searchPokemonToHand:1"],
        "ultra ball": ["searchPokemonToHand:1"],
        "evolution incense": ["searchPokemonToHand:1"],
        "great ball": ["searchPokemonToHand:1"],
        "poké ball": ["searchPokemonToHand:1"],
        "poke ball": ["searchPokemonToHand:1"],
        "revive": ["recoverPokemonFromDiscard:1"],
        "pokemon recovery": ["recoverPokemonFromDiscard:1"],
        "pokémon recovery": ["recoverPokemonFromDiscard:1"],
    }
    if nm in NAME_OPS:
        return NAME_OPS[nm][:]

    # Discard N from hand, draw M
    m = re.search(r"discard (\d+) cards? from your hand\.\s*if you do,? draw (\d+) cards?", t)
    if m:
        return [f"discardFromHand:{m.group(1)}", f"draw:{m.group(2)}"]
    # Choose up to N of your Pokémon and heal M from each
    m = re.search(r"choose up to (\d+) of your pok[eé]mon and heal (\d+) damage from each", t)
    if m:
        return [f"healEachPokemon:{m.group(2)}"]
    # Heal N from each of your Pokémon
    m = re.search(r"heal (\d+) damage from each of (?:his or her |their |)your pok[eé]mon", t)
    if m:
        return [f"healEachPokemon:{m.group(1)}"]
    m = re.search(r"heal (\d+) damage from each of (?:his or her |their )?pok[eé]mon", t)
    if m:
        return [f"healEachPokemon:{m.group(1)}"]
    # Once during each player's turn ... heal 10
    if re.search(r"once during each player's turn.{0,120}heal (\d+) damage from each", t):
        m = re.search(r"heal (\d+)", t)
        return [f"healEachPokemon:{m.group(1) if m else 10}"]
    # Flip a coin. If heads, remove N damage counters from each Active
    m = re.search(r"flip a coin\.\s*if heads,?\s*remove (\d+) damage counters? from each active", t)
    if m:
        return [f"healEachPokemon:{int(m.group(1))*10}"]
    # Switch in opponent's Benched to Active
    if re.search(r"switch in 1 of your opponent's benched pok[eé]mon to the active", t):
        return ["gustOpponent"]
    # Shuffle up to N Pokemon from discard into deck, then draw
    m = re.search(r"shuffle up to (\d+) pok[eé]mon from your discard pile into your deck", t)
    if m:
        ops = [f"shuffleCardsFromDiscardToDeck:{m.group(1)}"]
        if "draw" in t:
            m2 = re.search(r"draw (\d+) cards?", t)
            if m2:
                ops.append(f"draw:{m2.group(1)}")
        return ops
    # Put Energy from opponent Active onto deck / into hand
    if re.search(r"put an energy attached to your opponent's active pok[eé]mon on top of (?:his or her |their )?deck", t):
        return ["discardEnergyDefending:1"]
    # Search deck for Item and Energy
    if re.search(r"search your deck for an item card", t):
        return ["searchTrainerToHand:1"]
    if re.search(r"search your deck for a basic pok[eé]mon and put it onto your bench", t):
        return ["searchBasicToBench:1"]
    # Opponent reveals hand, choose card to bottom of deck
    if re.search(r"your opponent reveals (?:his or her |their )?hand,? and you choose a card", t):
        return ["peekOpponentHand", "millOpponent:1"]
    # Search deck for N Energy and attach
    if re.search(r"search your deck for up to (\d+) [\w ]*energy cards? and attach", t):
        m = re.search(r"up to (\d+)", t)
        return [f"searchEnergyToSelf:{m.group(1) if m else 1}"]
    # Choose 1 or both: put pokemon / energy from discard
    if re.search(r"choose 1 or both", t) and "discard pile" in t:
        return ["recoverFromDiscard:2"]
    # Put pokemon with damage counters into hand
    if re.search(r"put 1 of your pok[eé]mon that has any damage counters on it and all cards attached", t):
        return ["scoopUpSelf"]
    # Choose 1: put pokemon to hand / shuffle into deck
    if re.search(r"choose 1:\s*•?\s*put a pok[eé]mon from your discard pile into your hand", t):
        return ["recoverFromDiscard:1"]
    if re.search(r"put a pok[eé]mon from your discard pile into your hand", t):
        return ["recoverFromDiscard:1"]
    if re.search(r"shuffle (\d+) pok[eé]mon from your discard pile into your deck", t):
        m = re.search(r"shuffle (\d+)", t)
        return [f"shuffleCardsFromDiscardToDeck:{m.group(1) if m else 3}"]
    # Draw until N more than opponent
    if re.search(r"draw cards until you have 1 more card in your hand than your opponent", t):
        return ["drawUntilHand:7"]
    # Draw 2. If name contains X, draw 2 more
    m = re.search(r"draw (\d+) cards\.\s*if your active pok[eé]mon has .+ draw (\d+) more", t)
    if m:
        return [f"draw:{int(m.group(1)) + int(m.group(2))}"]
    # Choose a card in hand, discard others, draw N
    if re.search(r"choose a card in your hand,? and discard the other cards\.\s*if you do,? draw (\d+)", t):
        m = re.search(r"draw (\d+)", t)
        return ["discardHandDraw:" + (m.group(1) if m else "4")]
    # Flip N coins, put cards from discard on top of deck
    if re.search(r"flip (\d+) coins\.\s*put a number of cards up to the number of heads from your discard pile", t):
        return ["recoverFromDiscard:2"]
    # Look at top card, put in hand or discard and draw
    if re.search(r"look at the top card of your deck\.\s*you may put that card into your hand", t):
        return ["pokedex"]
    # Opponent puts Basic from hand onto their bench
    if re.search(r"your opponent reveals .{0,20}hand,? and you put a basic pok[eé]mon you find there onto your opponent's bench", t):
        return ["peekOpponentHand"]
    # Search deck for Pokemon with no abilities that evolves
    if re.search(r"search your deck for a card that has no abilities and evolves", t):
        return ["searchPokemonToHand:1"]
    # Draw 3. Discard a Stadium
    if re.search(r"draw (\d+) cards\.\s*discard a stadium", t):
        m = re.search(r"draw (\d+)", t)
        return [f"draw:{m.group(1) if m else 3}", "discardStadium"]
    # Choose up to N of TYPE and heal M from each
    m = re.search(r"choose up to (\d+) of your [\w ]*pok[eé]mon and heal (\d+) damage from each", t)
    if m:
        return [f"healEachPokemon:{m.group(2)}"]
    # Heal all damage from each of your Evolution Pokemon
    if re.search(r"heal all damage from each of your evolution pok[eé]mon", t):
        return ["healEachPokemon:999"]
    if re.search(r"heal all damage from each of your [\w ]*pok[eé]mon", t):
        return ["healEachPokemon:999"]
    # Move damage counters from Active to opponent Active
    if re.search(r"move up to (\d+) damage counters? from your active pok[eé]mon to your opponent's active", t):
        return ["putDamageCounters:1"]
    # Put cards from hand on bottom of deck, then draw that many
    if re.search(r"put any number of cards from your hand on the bottom of your deck", t):
        return ["drawUntilHand:6"]
    # Move energy from Benched to Active
    if re.search(r"move up to (\d+) energy from your benched pok[eé]mon to your active", t):
        return ["energyTrans"]
    # Look at bottom N, put Pokemon onto Bench
    if re.search(r"look at the bottom (\d+) cards? of your deck\.\s*you may reveal a [\w' -]+ you find there and put it onto your bench", t):
        return ["searchBasicToBench:1"]
    # Opponent reveals hand, discard tools/special/stadium
    if re.search(r"your opponent reveals .{0,20}hand\.\s*discard up to (\d+) in any combination of pok[eé]mon tool", t):
        return ["peekOpponentHand", "discardOpponentTools:2"]
    # Draw a card for each Benched (both players)
    if re.search(r"draw a card for each benched pok[eé]mon", t):
        return ["drawPerOpponentBench:1"]
    # Challenge
    if re.search(r"ask your opponent if (?:he or she |they )?accepts? your challenge", t):
        return ["draw:2"]
    # Search deck for Basic without Rule Box onto Bench
    if re.search(r"search (?:his or her |their |)deck for a basic pok[eé]mon that doesn't have a rule box and put it onto", t):
        return ["searchBasicToBench:1"]
    # If you go first, search N Basic TYPE Pokemon
    if re.search(r"if you go first.{0,80}search your deck for up to (\d+) basic", t):
        m = re.search(r"up to (\d+) basic", t)
        return [f"searchBasicToBench:{m.group(1) if m else 3}"]
    # Opponent Active Energy to hand, then attach from own hand
    if re.search(r"put an energy attached to your opponent's active pok[eé]mon into (?:his or her |their )?hand\.\s*if you do,? attach", t):
        return ["discardEnergyDefending:1", "attachBasicFromHandToBench:1"]
    # Discard 2 from hand as cost, then search
    if re.search(r"you can play this card only if you discard (\d+) other cards? from your hand\.?\s*search your deck", t):
        m = re.search(r"discard (\d+)", t)
        return [f"discardFromHand:{m.group(1) if m else 2}", "searchAnyToHand:2"]
    # Last card in hand: draw per bench
    if re.search(r"last card in your hand\.?\s*draw a card for each benched", t):
        return ["drawPerOpponentBench:1"]
    # Last card: plus damage
    if re.search(r"last card in your hand\.?\s*during this turn, attacks used by your pok[eé]mon", t):
        m = re.search(r"(\d+) more damage", t)
        return [f"plusPowerMarker:{m.group(1) if m else 30}"]
    # Opponent Active Confused and Poisoned
    if re.search(r"your opponent's active pok[eé]mon is now confused and poisoned", t):
        return ["specialBoth:CONFUSED", "specialBoth:POISONED"]
    # Move energy between own Pokemon
    if re.search(r"move up to (\d+) energy from 1 of your pok[eé]mon to another", t):
        return ["energyTrans"]
    # Heal N from each of your TYPE Pokemon
    m = re.search(r"heal (\d+) damage from each of your [\w ]*pok[eé]mon", t)
    if m:
        return [f"healEachPokemon:{m.group(1)}"]
    # Switch opponent Basic to Active, then Confused
    if re.search(r"switch in 1 of your opponent's benched basic pok[eé]mon to the active", t):
        ops = ["gustOpponent"]
        if "confused" in t:
            ops.append("specialDefending:CONFUSED")
        return ops
    # Opponent reveals hand, draw per Supporter/Trainer
    if re.search(r"your opponent reveals (?:his or her |their )?hand,? and you draw (\d+) cards? for each supporter", t):
        m = re.search(r"draw (\d+) cards?", t)
        return ["peekOpponentHand", f"draw:{m.group(1) if m else 2}"]
    # Search deck for TYPE energy / combination
    if re.search(r"search your deck for up to \d+ in any combination of [\w' ]+ and basic [\w ]*energy", t):
        return ["searchEnergyToSelf:2"]
    if re.search(r"choose up to (\d+) of your [\w ]*pok[eé]mon\.\s*for each of those pok[eé]mon,? search your deck for a basic [\w ]*energy", t):
        return [f"searchEnergyToSelf:{m.group(1) if m else 2}"]
    # Attach energy from discard to VMAX/ex then draw
    if re.search(r"attach up to (\d+) basic energy cards? from your discard pile to 1 of your pok[eé]mon", t):
        ops = [f"attachBasicFromDiscardToBench:{1}"]
        if "draw" in t:
            m2 = re.search(r"draw (\d+) cards?", t)
            if m2:
                ops.append(f"draw:{m2.group(1)}")
        return ops
    # Search 2 energy different types, 1 hand 1 attach
    if re.search(r"search your deck for up to 2 basic energy cards? of different types", t):
        return ["searchEnergyToSelf:1"]
    # Draw card for each opponent Pokemon/Bench
    if re.search(r"draw a card for each of your opponent's benched pok[eé]mon", t):
        return ["drawPerOpponentBench:1"]
    if re.search(r"draw a card for each of your opponent's pok[eé]mon in play", t):
        return ["drawPerOpponentBench:1"]
    # copy attack tool
    if re.search(r"can (?:also )?use the attack on this card", t):
        return ["copyAttack"]
    # Search deck for card that evolves / put onto pokemon
    if re.search(r"search your deck for a card that", t) and "evolves from" in t:
        return ["searchPokemonToHand:1"]

    # Opponent Active is now Confused and Poisoned
    if re.search(r"your opponent's active pok[eé]mon is now confused and poisoned", t):
        return ["specialBoth:CONFUSED", "specialBoth:POISONED"]
    if re.search(r"your opponent's active pok[eé]mon is now asleep and poisoned", t):
        return ["specialBoth:ASLEEP", "specialBoth:POISONED"]
    # Opponent shuffles hand into deck and draws per prize
    if re.search(r"shuffles? (?:his or her |their )?hand into (?:his or her |their )?deck and draws? a card for each of (?:his or her |their )?remaining prize", t):
        return ["opponentShuffleDraw:7"]
    # Discard up to N Benched with no damage
    m = re.search(r"discard up to (\d+) of your benched pok[eé]mon", t)
    if m:
        return [f"discardBench:{m.group(1)}"]
    # Attach N energy from hand, then draw M
    m = re.search(r"attach up to (\d+) [\w ]*energy cards? from your hand to 1 of your pok[eé]mon\.\s*if you do,? draw (\d+)", t)
    if m:
        return [f"attachBasicFromHandToBench:{m.group(1)}", f"draw:{m.group(2)}"]
    # Look at top N, choose a card type
    m = re.search(r"look at the top (\d+) cards? (?:of|from) your deck,? and choose", t)
    if m:
        return ["pokedex", "searchAnyToHand:1"]
    if re.search(r"look at the top (\d+) cards? (?:of|from) your deck\.\s*choose", t):
        return ["searchAnyToHand:1"]
    # Search discard for basic Energy
    if re.search(r"search your discard pile for basic energy", t):
        return ["recoverEnergyFromDiscard:1"]
    # Choose 1 or both: put pokemon / energy from discard
    if re.search(r"choose 1 or both", t) and "discard pile" in t:
        return ["recoverFromDiscard:2"]
    # Last card in hand / prize gate + simple effect — match the simple part
    if re.search(r"you can play this card only when it is the last card in your hand", t):
        rest = re.sub(r"you can play this card only when it is the last card in your hand\.?\s*", "", t)
        m = re.search(r"draw (\d+) cards?", rest)
        if m:
            return [f"draw:{m.group(1)}"]
        if "put" in rest and "bench" in rest:
            return ["searchBasicToBench:1"]
        if "search your deck" in rest:
            return ["searchAnyToHand:1"]
        if "attacks used by" in rest:
            m2 = re.search(r"(\d+) more damage", rest)
            return [f"plusPowerMarker:{m2.group(1) if m2 else 30}"]
    if re.search(r"you can use this card only if", t):
        rest = re.sub(r"you can use this card only if [^.]+\.?\s*", "", t)
        if re.search(r"each player shuffles", rest):
            return ["bothShuffleDraw:4"]
        if re.search(r"attach up to (\d+)", rest):
            return ["attachBasicFromDiscardToBench:2"]
        if "search your deck" in rest:
            return ["searchAnyToHand:1"]
        if re.search(r"draw (\d+)", rest):
            m = re.search(r"draw (\d+)", rest)
            return [f"draw:{m.group(1)}"]
        if "heal" in rest:
            return ["heal:60"]
    # Tool / attached-to effects
    if re.search(r"the pok[eé]mon this card is attached to|pok[eé]mon this card is attached to", t):
        if re.search(r"is damaged? by an opponent's attack|is damage by an opponent", t):
            return ["roughSkin"]
        if re.search(r"do (\d+) more damage|does (\d+) more damage", t):
            m = re.search(r"(\d+) more damage", t)
            return [f"plusPowerMarker:{m.group(1) if m else 20}"]
        if re.search(r"gets? \+(\d+) hp", t):
            return ["continuousStatic"]
        if re.search(r"has no retreat cost", t):
            return ["auraNoRetreatCost"]
        if re.search(r"is knocked out.{0,60}put that pok[eé]mon|is knocked out.{0,40}search your deck", t):
            return ["searchAnyToHand:1"]
        if re.search(r"is knocked out.{0,40}put that pok[eé]mon into your hand", t):
            return ["scoopUpSelf"]
        if re.search(r"is knocked out", t):
            return ["noop"]
        if re.search(r"can also use the attack on this card", t):
            return ["copyAttack"]
        if re.search(r"prevent all", t):
            return ["preventEffectsSelf"]
        if re.search(r"heal (\d+)", t):
            m = re.search(r"heal (\d+)", t)
            return [f"healSelfAfterAttack:{m.group(1)}"]
        if re.search(r"put 1 of your pok[eé]mon and all", t) or re.search(r"put that pok[eé]mon", t):
            return ["scoopUpSelf"]

    # Discard up to N Pokemon from hand, draw M each
    m = re.search(r"discard up to (\d+) pok[eé]mon[^.]*from your hand,? and draw (\d+) cards? for each", t)
    if m:
        return [f"discardFromHand:{m.group(1)}", f"draw:{int(m.group(2)) * int(m.group(1))}"]
    # Your opponent reveals their hand. You may choose a Supporter...
    if re.search(r"your opponent reveals (?:his or her |their )?hand\.?\s*you may choose a supporter", t):
        return ["peekOpponentHand"]
    # Once during each player's turn, discard energy to draw until N
    if re.search(r"once during each player's turn", t) and "discard" in t and "draw" in t:
        return ["noop"]

    # Δ Evolution / early evolution rule
    if re.search(r"you may play this card from your hand to evolve a pok[eé]mon during your first turn", t):
        return ["earlyEvolution"]
    # Opponent reveals hand, discard up to N Item/Trainer
    m = re.search(r"your opponent reveals (?:his or her |their )?hand,? and you discard up to (\d+) item cards", t)
    if m:
        return ["peekOpponentHand", f"discardOpponentHand:{m.group(1)}"]
    if re.search(r"look at your opponent's hand\.\s*discard up to (\d+)", t):
        return ["peekOpponentHand", f"discardOpponentHand:{m.group(1)}"]
    # Put an Energy attached to opponent's Pokémon into their hand
    if re.search(r"put an energy attached to 1 of your opponent's pok[eé]mon into (?:his or her |their )?hand", t):
        return ["discardEnergyDefending:1"]
    # Discard an Energy attached to opponent's Active
    if re.search(r"discard an energy attached to your opponent's active", t):
        return ["discardEnergyDefending:1"]
    # Reveal from top until Supporter / Trainer
    if re.search(r"reveal cards from the top of your deck until you reveal a supporter", t):
        return ["searchTrainerToHand:1"]
    if re.search(r"reveal cards from the top of your deck until you reveal a trainer", t):
        return ["searchTrainerToHand:1"]
    # Discard N. If you do, draw M / look at top
    m = re.search(r"discard (\d+) of the other cards in your hand", t)
    if m:
        return [f"discardFromHand:{m.group(1)}"]
    # Draw N. If you do / if you drew, draw/discard more
    m = re.search(r"draw (\d+) cards\.\s*if you (?:drew|do)", t)
    if m:
        return [f"draw:{m.group(1)}"]
    # Put a Pokémon and all attached into hand (scoop)
    if re.search(r"put 1 of your (?:basic |colorless )?pok[eé]mon and all (?:attached cards|cards attached to (?:it|that pok[eé]mon)) into your hand", t):
        return ["scoopUpSelf"]
    if re.search(r"put 1 of your pok[eé]mon (?:in play |with any damage counters on it )?and all attached cards into your hand", t):
        return ["scoopUpSelf"]
    # Discard a Benched Pokémon V / VMAX and all attached
    if re.search(r"discard 1 of your benched pok[eé]mon (?:v|vmax|ex) and all attached", t):
        return ["discardBench:1"]
    # Search discard for up to N Pokémon and/or basic Energy
    if re.search(r"search your discard pile for up to \d+ in any combination of pok[eé]mon and basic energy", t):
        return ["recoverFromDiscard:3"]
    if re.search(r"search your discard pile for up to (\d+) pok[eé]mon", t):
        m = re.search(r"up to (\d+)", t)
        return [f"recoverFromDiscard:{m.group(1) if m else 1}"]
    # Choose up to N of TYPE Pokémon and attach basic energy from discard
    if re.search(r"choose up to (\d+) of your [\w ]*pok[eé]mon and attach a basic energy card from your discard pile", t):
        m = re.search(r"up to (\d+)", t)
        return [f"attachBasicFromDiscardToBench:{m.group(1) if m else 2}"]
    # Supporter rule text — strip prefix below and match the real effect
    if re.search(r"you can play only one supporter card each turn", t) and len(t) < 80:
        return ["noop"]
    # Flip N coins. Search deck for up to number of heads
    if re.search(r"flip (\d+) coins\.\s*search your deck for a number of cards up to the number of heads", t):
        return ["searchAnyToHand:2"]
    # Each player shuffles hand into deck (prize gate already ignored)
    if re.search(r"each player shuffles (?:his or her |their )?hand into (?:his or her |their )?deck", t) and "draw" not in t:
        return ["bothShuffleDraw:0"]
    # When you attach an Energy from hand to this Pokémon, you may attach 2
    if re.search(r"when you attach an? energy card from your hand to this pok[eé]mon.{0,80}you may attach (\d+)", t):
        m = re.search(r"you may attach (\d+)", t)
        return [f"attachBasicFromHandToBench:{m.group(1) if m else 2}"]
    # Search deck for up to N Basic with HP or less → Bench
    if re.search(r"search your deck for up to (\d+) basic pok[eé]mon with \d+ hp or less and put them onto your bench", t):
        m = re.search(r"up to (\d+) basic", t)
        return [f"searchBasicToBench:{m.group(1) if m else 2}"]
    # Shuffle hand into deck, draw a card per opponent hand
    if re.search(r"shuffle your hand into your deck\.?\s*then,? draw a card for each card in your opponent's hand", t):
        return ["shuffleDrawPerOppHand"]
    # Discard up to N from hand, draw M per discarded
    m = re.search(r"discard up to (\d+) cards? from your hand,? and draw (\d+) cards? for each card you discarded", t)
    if m:
        return [f"discardDrawPer:{m.group(2)}"]
    # During this turn, attacks used by your TYPE Pokémon do N more damage
    m = re.search(r"during this turn,? (?:attacks used by )?your [\w ]*pok[eé]mon(?:'s attacks)? do (\d+) more damage", t)
    if m:
        return [f"plusPowerMarker:{m.group(1)}"]
    m = re.search(r"attacks used by your [\w ]*pok[eé]mon do (\d+) more damage", t)
    if m:
        return [f"plusPowerMarker:{m.group(1)}"]
    # Draw N. If KO last turn, draw M more
    m = re.search(r"draw (\d+) cards\.\s*if any of your pok[eé]mon were knocked out.{0,40}draw (\d+) more", t)
    if m:
        return [f"draw:{int(m.group(1)) + int(m.group(2))}"]
    # Put Colorless/damaged Pokémon into hand
    if re.search(r"put 1 of your [\w ]*pok[eé]mon (?:that has any damage counters on it )?and all attached cards into your hand", t):
        return ["scoopUpSelf"]
    # Heal all damage from 1 of your Pokémon
    m = re.search(r"heal all damage from 1 of your", t)
    if m:
        return ["heal:999"]
    # Mill top N, attach energy to bench
    if re.search(r"discard the top (\d+) cards? of your deck,? and attach any energy cards? you discarded", t):
        m = re.search(r"top (\d+)", t)
        return [f"millSelf:{m.group(1) if m else 5}", "attachBasicFromDiscardToBench:2"]
    # Search deck for Supporter with name / Pokemon with name
    if re.search(r"search your deck for a supporter card", t):
        return ["searchTrainerToHand:1"]
    if re.search(r"search your deck for up to (\d+) basic [\w ]*pok[eé]mon", t):
        m = re.search(r"up to (\d+) basic", t)
        return [f"searchBasicToBench:{m.group(1) if m else 1}"]
    # Search deck for card that evolves from
    if re.search(r"search your deck for a card that evolves from", t):
        return ["searchPokemonToHand:1"]
    # Flip N coins, put basic energy from discard to hand
    if re.search(r"flip (\d+) coins\.\s*for each heads,? put a basic energy card from your discard pile into your hand", t):
        return ["recoverEnergyFromDiscard:2"]
    # Opponent hand discard items already covered
    # Ask opponent if each player may take a Prize
    if re.search(r"ask your opponent if each player may take a prize", t):
        return ["noop"]
    # Put a Pokémon or a Basic Energy from discard to hand
    if re.search(r"put a pok[eé]mon or a basic energy card from your discard pile into your hand", t):
        return ["recoverFromDiscard:1"]
    # Put 1 of your Basic Pokémon and all attached cards into your hand
    if re.search(r"put 1 of your (?:basic |colorless )?pok[eé]mon and all attached cards into your hand", t):
        return ["scoopUpSelf"]
    if re.search(r"put 1 of your pok[eé]mon in play into your hand", t):
        return ["scoopUpSelf"]
    # Each player plays with Prize cards face up
    if re.search(r"prize cards face up for the rest of the game", t):
        return ["showPrizes"]
    # Search your deck for up to N cards and put them into your hand
    m = re.search(r"search your deck for up to (\d+) cards and put them into your hand", t)
    if m:
        return [f"searchAnyToHand:{m.group(1)}"]
    m = re.search(r"search your deck for (\d+) cards,? shuffle your deck,? then put those cards on top", t)
    if m:
        return [f"searchAnyToHand:{m.group(1)}"]
    # Discard a card from your hand. If you do, look at the top N cards
    m = re.search(r"discard a card from your hand\.\s*if you do,? look at the top (\d+) cards? of your deck and put (\d+) of them into your hand", t)
    if m:
        return ["discardFromHand:1", f"draw:{m.group(2)}"]
    # Look at the top N cards. You may reveal a Pokémon and/or Trainer/Energy and put into hand
    m = re.search(r"look at the top (\d+) cards? of your deck\.\s*you may reveal", t)
    if m:
        return [f"drawUntilHand:0"]  # pokedex-like peek; real selection is engine-side
    if re.search(r"look at the top (\d+) cards? of your deck\.? you may reveal", t):
        return ["pokedex"]

    # During this turn, attacks used by your Pokémon do N more damage
    m = re.search(r"during this turn,? (?:attacks used by |the attacks of )?your pok[eé]mon(?:'s attacks)? do (\d+) more damage", t)
    if m:
        return [f"plusPowerMarker:{m.group(1)}"]
    m = re.search(r"your pok[eé]mon's attacks do (\d+) more damage to your opponent's active", t)
    if m:
        return [f"plusPowerMarker:{m.group(1)}"]
    if re.search(r"prevent all effects of your opponent's pok[eé]mon's abilities done to", t):
        return ["preventEffectsMarker"]
    if re.search(r"take 1 more prize card", t):
        return ["plusPrize:1"]
    m = re.search(
        r"shuffle your hand into your deck\.?\s*(?:then,?\s*)?draw (?:a card|(\d+|two|three|four|five|six|seven|eight|nine|ten)) cards?",
        t,
    )
    if m:
        n = 1 if m.group(0).find("a card") >= 0 else parse_count(m.group(1) or "1", 1)
        return [f"shuffleDraw:{n}"]

    # Take 1 more Prize card when you Knock Out ...
    if re.search(r"take 1 more prize card", t):
        return ["plusPrize:1"]
    if re.search(r"take (\d+) more prize cards?", t):
        m = re.search(r"take (\d+) more prize", t)
        return [f"plusPrize:{m.group(1) if m else 1}"]

    # Attach a basic Energy from hand to your Bench / Active
    if re.search(r"attach a basic energy card from your hand to 1 of your benched", t):
        return ["attachBasicFromHandToBench:1"]
    if re.search(r"attach a [\w ]*energy card? from your hand to 1 of your benched", t):
        return ["attachBasicFromHandToBench:1"]
    if re.search(r"attach a basic energy card from your discard pile to 1 of your", t):
        return ["attachBasicFromDiscard:1"]
    if re.search(r"attach a [\w ]*energy card? from your discard pile to 1 of your", t):
        return ["attachBasicFromDiscard:1"]

    # Put N in any combination of X and Y from discard to hand
    m = re.search(r"put (?:up to )?(\d+) in any combination of [\w ]+ from your discard pile into your hand", t)
    if m:
        return [f"recoverFromDiscard:{m.group(1)}"]

    # Look at the top N cards of your deck and put M of them into your hand
    m = re.search(r"look at the top (\d+) cards? of your deck and put (\d+) of them into your hand", t)
    if m:
        return [f"pokedex", f"draw:{m.group(2)}"]

    # Discard a Special Energy from each of your opponent's Pokémon
    if re.search(r"discard a special energy from each of your opponent", t):
        return ["discardEnergyDefending:99"]

    # Choose up to N Pokémon Tools ... and discard them
    if re.search(r"discard them\.?", t) and "tool" in t and "discard" in t:
        return ["discardOpponentTools:2"]

    # Switch Active with Benched (self)
    if re.search(r"switch your active pok[eé]mon with 1 of your benched", t):
        return ["switchActive"]

    # Flip a coin until tails: draw a card per heads
    if re.search(r"flip a coin until (?:you get |there is )?tails", t) and "draw a card" in t:
        return ["flipsDrawPerHeads:20"]

    # Put N basic Energy from discard to hand
    m = re.search(r"put (\d+|two|three) basic energy cards? from your discard pile into your hand", t)
    if m:
        return [f"recoverEnergyFromDiscard:{parse_count(m.group(1))}"]
    # Put up to N in any combination of ... from discard to hand
    m = re.search(r"put (?:up to )?(\d+) in any combination of .+ from your discard pile into your hand", t)
    if m:
        return [f"recoverFromDiscard:{m.group(1)}"]

    # Move a basic Energy from 1 of your Pokémon to another
    if re.search(r"move a basic energy from 1 of your pok[eé]mon to another", t):
        return ["moveEnergyBetweenMine"]

    # Flip a coin. If heads, discard an Energy attached to 1 of your opponent's Pokémon.
    if re.search(r"flip a coin\.\s*if heads,?\s*discard an energy attached to 1 of your opponent", t):
        return ["flipHeadsDiscardEnergyOpponent"]

    # Discard a Special Energy attached to 1 of your opponent's Pokémon
    if re.search(r"discard a special energy attached to 1 of your opponent", t):
        return ["discardEnergyDefending:1"]

    # Flip a coin. If heads, put 1 of your Pokémon and all cards attached to it into your hand
    if re.search(r"flip a coin\.\s*if heads,?\s*put 1 of your pok[eé]mon and all cards attached", t):
        return ["superScoopUp"]

    # Each player shuffles his or her hand into his or her deck and draws N cards.
    m = re.search(r"each player shuffles (?:his or her|their) hand into (?:his or her|their) deck and draws (\d+|four|five|seven) cards", t)
    if m:
        return [f"bothShuffleDraw:{parse_count(m.group(1))}"]

    # Marnie/Iono style: shuffle hand to bottom, draw N / opponent N-1
    m = re.search(r"shuffles? (?:his or her|their) hand and puts? it on the bottom of (?:his or her|their) deck.*?draws? (\d+)", t)
    if m:
        n = parse_count(m.group(1), 5)
        return [f"shuffleHandToBottomDraw:{n}:{max(1, n-1)}"]

    # Boss's Orders / Gust
    if re.search(r"switch 1 of your opponent's benched pok[eé]mon with (?:their|his or her) active", t):
        return ["gustOpponent"]
    if re.search(r"if your opponent has any benched pok[eé]mon, (?:he or she |they )?chooses? 1 of them and switches", t):
        return ["gustOpponent"]

    # Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active
    if re.search(r"flip a coin\.\s*if heads,?\s*switch 1 of your opponent's benched", t):
        return ["flipHeadsGustOpponent"]

    # Draw cards until you have N cards in your hand
    m = re.search(r"draw cards until you have (\d+) cards? in your hand", t)
    if m:
        return [f"drawUntilHand:{m.group(1)}"]

    # Shuffle N cards from discard into deck
    m = re.search(r"shuffle (?:up to )?(\d+|three|five) (?:in any combination of )?pok[eé]mon and basic energy cards? from your discard pile into", t)
    if m:
        return [f"shuffleCardsFromDiscardToDeck:{parse_count(m.group(1))}"]
    m = re.search(r"shuffle (\d+|three|five) basic energy cards? from your discard pile into your deck", t)
    if m:
        return [f"shuffleCardsFromDiscardToDeck:{parse_count(m.group(1))}"]

    # Multi-part simple: Draw N and heal M
    m = re.search(r"draw (\d+|two|three) cards? and heal (\d+) damage", t)
    if m:
        return [f"draw:{parse_count(m.group(1))}", f"heal:{m.group(2)}"]

    # Flip a coin until you get tails. For each heads, draw a card.
    if "flip a coin until" in t and "for each heads, draw a card" in t:
        return ["flipsDrawPerHeads:20"]

    # Draw 2 cards.
    m = re.fullmatch(r"draw (\d+|two|three|four|five|six|seven|eight|nine|ten) cards?\.?", t)
    if m:
        return [f"draw:{parse_count(m.group(1))}"]

    m = re.match(r"draw (\d+|two|three|four|five|six|seven) cards?\.?$", t)
    if m and len(t) <= 30:
        return [f"draw:{parse_count(m.group(1))}"]

    # Potion: "Remove up to 2 damage counters from 1 of your Pokémon."
    m = re.search(r"remove up to (\d+) damage counters from 1 of your pok[eé]mon", t)
    if m:
        return [f"healCounter:{m.group(1)}"]

    m = re.search(r"heal (\d+) damage from 1 of your pok[eé]mon", t)
    if m:
        return [f"heal:{m.group(1)}"]

    m = re.search(r"heal (\d+) damage", t)
    if m and len(t) <= 50:
        return [f"heal:{m.group(1)}"]

    # Switch
    if re.search(r"switch 1 of your (?:own )?benched pok[eé]mon with your active", t):
        return ["switchActive"]
    if re.fullmatch(r"switch your active pok[eé]mon with 1 of your benched pok[eé]mon\.?", t):
        return ["switchActive"]

    # Professor Oak: Discard your hand, then draw 7 cards.
    m = re.search(r"discard your hand,? then draw (\d+|seven|six|five|eight) cards", t)
    if m:
        return [f"discardHandDraw:{parse_count(m.group(1), 7)}"]

    # shuffle hand into deck and draw
    m = re.search(r"shuffle your hand into your deck and draw (\d+|seven|six|five|eight) cards", t)
    if m:
        return [f"shuffleDraw:{parse_count(m.group(1), 7)}"]

    if "discard your hand" in t:
        m = re.search(r"draw (\d+|seven|six|five|eight) cards", t)
        if m:
            return [f"discardHandDraw:{parse_count(m.group(1), 7)}"]

    # Energy Removal: Choose 1 Energy ... discard it.
    if re.search(r"discard (?:it|them)", t) and "energy" in t and "your opponent" in t:
        return ["discardEnergyDefending:1"]

    if re.search(r"choose 1 energy card attached to 1 of your opponent", t):
        return ["discardEnergyDefending:1"]

    # Look at the top N cards of your deck. — not fully implemented
    # Put N cards from your hand on top of your deck, then draw...
    m = re.search(r"draw (\d+|a|two|three|four|five) cards? after", t)
    if m:
        return [f"draw:{parse_count(m.group(1))}"]

    # "You may play only 1 ... per deck" already filtered

    # ---- unimpl trainers ----
    m = re.search(r"your opponent shuffles .{0,25}hand into .{0,25}deck,? then draws (\d+|four|seven)", t)
    if m:
        return [f"opponentShuffleDraw:{parse_count(m.group(1), 7)}"]
    if re.search(r"you and your opponent show each other your hands,? then shuffle all the trainer cards", t):
        return ["lassShuffleTrainers"]
    if re.search(r"put a stage 2 (?:evolution )?card from your hand on the matching basic", t):
        return ["rareCandy"]
    if re.search(r"trade 1 of the .+ in your hand for 1 of the .+ from your deck", t):
        return ["pokemonTrader"]
    if re.search(r"return its basic pok[eé]mon card to your hand", t):
        return ["scoopUpSelf"]
    if re.search(r"discard 1 energy card attached to 1 of your pok[eé]mon in order to choose 1 of your opponent", t):
        return ["discardEnergyDefending:2"]
    if re.search(r"attach [\w' -]+ to 1 of your pok[eé]mon\.\s*at the end of your opponent's next turn,? discard", t):
        return ["reduceDamageMarker:20"]
    if re.search(r"remove all damage counters from all of your own pok[eé]mon with damage counters", t):
        return ["pokemonCenter"]
    if re.search(r"choose 1 basic pok[eé]mon card from your opponent's discard pile and put it onto", t):
        return ["pokemonFlute"]
    if re.search(r"look at up to 5 cards from the top of your deck and rearrange", t):
        return ["pokedex"]
    if re.search(r"choose 1 of your own pok[eé]mon in play and a stage of evolution", t):
        return ["devolve"]
    if re.search(r"play [\w' -]+ as if it were", t):
        return ["fossilBody"]
    if re.search(r"choose a pok[eé]mon on your bench\.\s*shuffle it and any cards attached", t):
        return ["shuffleBenchToDeck"]
    if re.search(r"shuffle your hand into your deck\.\s*flip a coin\.\s*if heads,?\s*draw 8", t):
        return ["flipHeadsDrawOrOne"]
    if re.search(r"flip a coin\.\s*if heads,?\s*put a card in your discard pile on top of your deck", t):
        return ["flipHeadsTopDiscardToDeck"]
    if re.search(r"search your deck for a basic energy card and put it into your hand", t):
        return ["searchEnergyToHand:1"]
    if re.search(r"all pok[eé]mon powers stop working", t):
        return ["noPowers"]

    # ---- trainer batch 2 ----
    if re.search(r"each player plays with .{0,25}prize cards face up", t):
        return ["noop"]
    if re.search(r"look at your opponent's hand\.\s*if .{0,20}has any trainer cards,? choose 1 of them", t):
        return ["peekOpponentHand"]
    if re.search(r"flip a coin\.\s*if tails,?\s*do (\d+) damage to your active pok[eé]mon\.\s*if heads,?\s*your opponent flips", t):
        m = re.search(r"do (\d+) damage", t)
        return [f"flipHeadsSelfDamage:{m.group(1) if m else 10}"]
    if re.search(r"you may draw up to \d+ cards,? then your opponent may draw up to", t):
        return ["bothDraw:5"]
    if re.search(r"shuffle your hand into your deck\.\s*then,?\s*draw (\d+) cards?\.\s*you can't play any more trainer", t):
        m = re.search(r"draw (\d+) cards?", t)
        return [f"shuffleDraw:{m.group(1) if m else 7}"]
    if re.search(r"look at the top \d+ cards of your deck and put them back on top of your deck in any order", t):
        return ["pokedex"]
    if re.search(r"put as many cards from your hand as you like on the bottom of your deck", t):
        return ["drawUntilHand:6"]
    if re.search(r"look at the bottom \d+ cards of your deck\.\s*you may reveal a [\w' -]+ you find there and put it onto your bench", t):
        return ["searchBasicToBench:1"]
    if re.search(r"during this turn, your pok[eé]mon's attacks do (\d+) more damage to the active pok[eé]mon for each prize card", t):
        m = re.search(r"do (\d+) more damage", t)
        return [f"plusPowerMarker:{m.group(1) if m else 10}"]
    if re.search(r"discard 1 energy card attached to 1 of your own pok[eé]mon in order to choose 1 of your opponent", t):
        return ["discardEnergyDefending:2"]
    if re.search(r"this card stays in play when you play it", t):
        return ["noop"]

    # Does N damage for each damage counter on this Pokémon
    m = re.search(r"(?:this attack )?does (\d+) damage for each damage counter on this pok", t)
    if m:
        return [f"bonusPerSelfDamageCounter:{m.group(1)}"]
    # Discard all / up to N Pokémon Tools from opponent's Active / Pokémon
    m = re.search(r"discard (?:all|up to \d+|\d+) pok[eé]mon tools? from your opponent's active", t)
    if m:
        return ["discardToolsDefending"]
    if re.search(r"discard up to \d+ pok[eé]mon tool cards? attached to your opponent", t):
        return ["discardOpponentTools"]
    # Search deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon
    if re.search(r"search your deck for a card that evolves from 1 of your pok[eé]mon and put it onto that pok", t):
        return ["ascension"]
    # Your opponent discards N cards from their hand
    m = re.search(r"your opponent discards (\d+|two|three) cards? from (?:his or her |their )?hand", t)
    if m:
        return [f"discardOpponentHand:{parse_count(m.group(1))}"]
    # Flip a coin. If heads, attach a basic Energy from discard to 1 of your Benched
    if re.search(r"flip a coin\.\s*if heads,?\s*attach a basic energy card from your discard pile to 1 of your benched", t):
        return ["attachBasicFromDiscardToBench"]
    # Attach N basic Energy from discard to 1 of your Benched
    m = re.search(r"attach (\d+|two|three) basic energy cards? from your discard pile to 1 of your benched", t)
    if m:
        return [f"attachBasicFromDiscardToBench:{parse_count(m.group(1))}"]
    # This attack does N damage to 2 of your opponent's Pokémon
    m = re.search(r"(?:this attack )?does (\d+) damage to 2 of your opponent's pok", t)
    if m:
        return [f"spreadTwoBench:{m.group(1)}"]
    # During your next turn, NAME's ATTACK does N more damage
    m = re.search(r"during your next turn, [\w' -]+'s [\w' ]+ (?:attack's )?(?:damage is doubled|does (\d+) more damage)", t)
    if m:
        n = m.group(1) or "40"
        return [f"bonusNamedAttack:{n}"]
    if re.search(r"during your next turn, this pok[eé]mon's [\w' ]+ does (\d+) more damage", t):
        m = re.search(r"does (\d+) more damage", t)
        return [f"bonusNamedAttack:{m.group(1)}"]
    # Remove damage counters equal to half the damage done
    if re.search(r"remove .+ damage counters .+ equal (?:to )?(?:of )?half the damage done", t):
        return ["healHalfDamageDone"]
    # Before doing damage, discard all Tools from Defending
    if re.search(r"before doing damage,? discard all pok[eé]mon tools? from (?:the )?defending", t):
        return ["discardToolsDefending"]
    # If Defending has any basic Energy, choose 1 and attach to opponent's Bench
    if re.search(r"if (?:the )?defending pok. has any basic energy.{0,80}attach that energy", t):
        return ["energyTrans"]
    # Flip a number of coins equal to the number of Pokémon in play
    if re.search(r"flip a number of coins equal to the number of pok[eé]mon in play", t):
        return ["damageTimesPokemonInPlay:10"]

    # ---- cluster batch ----
    # If Defending isn't Colorless, does N to each Benched of same type
    if re.search(r"if (?:the )?defending pok[eé]mon isn't colorless", t):
        return ["spreadBothBench:10"]
    # If your opponent has any Benched, choose 1, flip, if heads N damage to it
    if re.search(r"if your opponent has any benched pok[eé]mon,? choose 1 of them\.\s*flip a coin\.\s*if heads,?\s*this attack does (\d+)", t):
        m = re.search(r"this attack does (\d+)", t)
        return [f"damageOneBench:{m.group(1) if m else 20}"]
    if re.search(r"if your opponent has any benched pok[eé]mon,? choose 1 of them and this attack does (\d+)", t):
        m = re.search(r"this attack does (\d+)", t)
        return [f"damageOneBench:{m.group(1) if m else 10}"]
    if re.search(r"if your opponent has any benched pok[eé]mon,? choose 1 of them\.\s*flip a coin\.\s*if heads,?\s*this attack does (\d+) damage to that", t):
        m = re.search(r"this attack does (\d+)", t)
        return [f"damageOneBench:{m.group(1) if m else 20}"]
    # During opponent's next turn, any damage done by attacks from Defending is reduced/increased
    m = re.search(r"during your opponent's next turn, any damage done by attacks from (?:the )?defending pok[eé]mon is (?:reduced|increased) by (\d+)", t)
    if m:
        return [f"selfReduceDamageNextTurn:{m.group(2)}"]
    # This attack does N damage for each Energy attached to both Active Pokémon
    m = re.search(r"this attack does (\d+) damage for each energy attached to both active", t)
    if m:
        return [f"bonusPerEnergyBoth:{m.group(1)}"]
    # This attack does N damage to 3 of opponent's Pokemon
    m = re.search(r"this attack does (\d+) damage to 3 of your opponent's pok[eé]mon", t)
    if m:
        return [f"spreadAllOpponent:{m.group(1)}"]
    # Discard the top card of your deck. If that card is a basic Energy, attach it
    if re.search(r"discard the top card of your deck\.\s*if that card is a basic energy", t):
        return ["attachBasicFromDiscard"]
    # Heal all damage from this Pokémon. This Pokémon is now Asleep.
    if re.search(r"heal all damage from this pok[eé]mon\.\s*this pok[eé]mon is now asleep", t):
        return ["healSelf:999"]
    if re.search(r"remove all special conditions from this pok[eé]mon", t):
        return ["clearSpecialConditions"]
    # Switch 1 of your opponent's Benched with the Defending
    if re.search(r"switch 1 of your opponent's benched pok[eé]mon with (?:the )?(?:defending|your opponent's active)", t):
        return ["gustOpponent"]
    # Your opponent discards a card from his or her hand
    if re.search(r"your opponent discards (?:a |one |1 )?cards? from", t):
        return ["discardOpponentHand:1"]
    # Move an Energy attached to Defending to 1 of opponent's Benched
    if re.search(r"move an energy attached to (?:the )?defending pok[eé]mon to 1 of your opponent's benched", t):
        return ["energyTrans"]
    # Choose 1 of your opponent's Pokémon and put a marker
    if re.search(r"choose 1 of your opponent's pok[eé]mon and put a [\w ]+ marker", t):
        return ["noop"]
    # Does N damage times number of named in play (Koffings, Weezings...)
    m = re.search(r"does (\d+) damage times the total number of [\w', and]+ in play", t)
    if m:
        return [f"damageTimesPokemonInPlay:{m.group(1)}"]
    # Search your deck for an Evolution card with X in its name
    if re.search(r"search your deck for an evolution card with [\w ]+ in its name", t):
        return ["searchPokemonToHand:1"]
    # Search your deck for a TYPE Pokemon / any Pokemon, reveal, put into hand
    if re.search(r"search your deck for (?:a |an |any |up to \d+ )?[\w ]*pok[eé]mon.{0,50}put (?:it|them) into your hand", t):
        return ["searchPokemonToHand:1"]
    # Search your deck for a basic Energy card, reveal it, and put it into your hand
    if re.search(r"search your deck for (?:a |up to \d+ )?basic energy card.{0,40}put (?:it|them) into your hand", t):
        return ["searchEnergyToHand:1"]
    # Choose up to 3 from discard and shuffle into deck
    if re.search(r"choose up to \d+ .+ from your discard pile.{0,40}shuffle them into your deck", t):
        return ["shuffleCardsFromDiscardToDeck:3"]
    # Choose up to 2 Pokemon Tool cards attached and discard
    if re.search(r"choose up to \d+ pok[eé]mon tool cards? attached to pok[eé]mon in play.{0,30}discard them", t):
        return ["discardOpponentTools"]
    # This attack does N damage to each Benched with at least 1 Energy
    if re.search(r"this attack does (\d+) damage to each benched pok[eé]mon with at least 1 energy", t):
        m = re.search(r"this attack does (\d+)", t)
        return [f"spreadBothBench:{m.group(1) if m else 10}"]
    # As often as you like, move 1 damage counter from 1 of your Pokemon to another
    if re.search(r"as often as you like.{0,40}move 1 damage counter from 1 of your pok[eé]mon to another", t):
        return ["moveDamageCounters"]
    if re.search(r"as often as you like.{0,40}move an? [\w ]*energy", t):
        return ["energyTrans"]
    # Flip a coin. If heads, the Defending is now X
    if re.search(r"flip a coin\.\s*if heads,?\s*(?:the )?defending pok[eé]mon is now (asleep|confused|paralyzed|poisoned|burned)", t):
        m = re.search(r"is now (asleep|confused|paralyzed|poisoned|burned)", t)
        return [f"flipHeadsSpecial:{m.group(1).upper()}"]
    # Flip a coin. If heads, this attack does N damage. If tails and if opponent has Benched...
    if re.search(r"flip a coin\.\s*if heads,?\s*this attack does (\d+) damage\.\s*if tails and if your opponent", t):
        m = re.search(r"this attack does (\d+)", t)
        return [f"flipHeadsAddDamage:{m.group(1)}"]

    # Flip a coin. If heads, and if your opponent has any Benched, choose 1, this attack does N to it
    m = re.search(r"flip a coin\.\s*if heads,?\s*and if your opponent has any benched.{0,40}this attack does (\d+) damage to that", t)
    if m:
        return [f"flipHeadsAddDamage:{m.group(1)}"]
    # Search deck for N Pokemon Tool cards to hand
    m = re.search(r"search your deck for (\d+|two|three) pok[eé]mon tool cards?.{0,40}put them into your hand", t)
    if m:
        return [f"searchTrainerToHand:{parse_count(m.group(1))}"]
    # Move Energy attached to Defending to opponent's Benched (word Pokémon)
    if re.search(r"move an energy attached to (?:the )?defending pok[eé]mon to 1 of your opponent's benched", t):
        return ["energyTrans"]
    # This attack does N damage to 3 of opponent's Pokémon (word)
    m = re.search(r"this attack does (\d+) damage to 3 of your opponent's pok[eé]mon", t)
    if m:
        return ["spreadAllOpponent:" + m.group(1)]
    # This attack does N damage for each Energy attached to both Active Pokémon
    m = re.search(r"this attack does (\d+) damage for each energy attached to both active pok[eé]mon", t)
    if m:
        return [f"bonusPerEnergyBoth:{m.group(1)}"]
    # Heal all damage from this Pokémon. This Pokémon is now Asleep. (unicode)
    if re.search(r"heal all damage from this pok[eé]mon\.\s*this pok[eé]mon is now asleep", t):
        return ["healSelf:999"]
    # Discard the top card of your deck. If that card is a basic Energy card, attach
    if re.search(r"discard the top card of your deck\.\s*if that card is a basic energy card,? attach", t):
        return ["attachBasicFromDiscard"]
    # Switch 1 of your opponent's Benched Pokémon with the Defending Pokémon
    if re.search(r"switch 1 of your opponent's benched pok[eé]mon with (?:the )?defending pok[eé]mon", t):
        return ["gustOpponent"]
    # Your opponent discards a card from his or her hand. (unicode)
    if re.search(r"your opponent discards a card from", t):
        return ["discardOpponentHand:1"]
    # When you play this Pokémon from your hand onto your Bench, you may search your deck
    if re.search(r"when you play this pok[eé]mon from your hand onto your bench, you may search your deck", t):
        return ["searchAnyToHand:1"]
    # Once during your turn (before your attack), if you have Unown ...
    if re.search(r"once during your turn \(before your attack\), if you have ", t):
        return ["searchAnyToHand:1"]
    # Attach a Pokémon Tool to ... remainder after rule strip often ends with damage/HP bonus
    if re.search(r"the attacks of the pok[eé]mon this card is attached to do (\d+) more damage", t):
        return [f"plusPowerMarker:{m.group(1) if m else 30}"]

    # Pokemon Recovery / Put a Basic Pokémon from your discard pile onto your Bench — skip

    # "Heal all damage from 1 of your Pokémon."
    if re.search(r"heal all damage from 1 of your pok[eé]mon", t):
        return ["heal:999"]

    # "Remove N damage counters from each of your Pokémon."
    m = re.search(r"remove (\d+) damage counters? from each of your pok[eé]mon", t)
    if m:
        return [f"healEachPokemon:{int(m.group(1)) * 10}"]

    # "Remove up to N damage counters from 1 of your Pokémon."
    m = re.search(r"remove up to (\d+) damage counters? from 1 of your pok[eé]mon", t)
    if m:
        return [f"healCounter:{m.group(1)}"]

    # "Heal N damage from 1 of your Pokémon."
    m = re.search(r"heal (\d+) damage from 1 of your pok[eé]mon", t)
    if m:
        return [f"heal:{m.group(1)}"]

    # Full Heal style
    if re.search(r"your active pok[eé]mon is no longer", t) or re.search(r"remove all special conditions", t):
        return ["clearSpecialConditions"]

    # Search deck for Pokemon to hand
    if re.search(r"search your deck for (?:a |up to )?(?:basic |stage \d |evolution )?pok[eé]mon", t) and "into your hand" in t:
        m = re.search(r"up to (\w+)", t)
        n = parse_count(m.group(1), 1) if m else 1
        return [f"searchPokemonToHand:{n}"]

    # Search deck for Trainer
    if re.search(r"search your deck for", t) and "trainer" in t and "into your hand" in t:
        return ["searchTrainerToHand:1"]

    # "Draw 1 card." variants with leading words
    m = re.fullmatch(r"(?:then )?draw (a|an|one|\d+|two|three|four|five|six|seven|eight|nine|ten) cards?\.?", t)
    if m:
        raw = m.group(1)
        n = 1 if raw in ("a", "an", "one") else parse_count(raw, 1)
        return [f"draw:{n}"]

    # "Switch your Active Pokémon with 1 of your Benched Pokémon."
    if "switch" in t and "active" in t and "bench" in t and "opponent" not in t and len(t) < 70:
        return ["switchActive"]

    # "Put N cards from your hand on the bottom of your deck and draw N cards."
    m = re.search(r"draw (\d+|two|three|four|five|six|seven) cards?", t)
    if m and len(t) < 80 and "discard" not in t and "shuffle" not in t and "from your deck" not in t:
        return [f"draw:{parse_count(m.group(1))}"]

    # Stadium / tool continuous rules text — structural
    if re.search(r"once during each player's turn|once during your turn, (?:you |each player)|this card stays in play", t):
        return ["noop"]

    # Rule-box / classification-like trainer text → strip and rematch rest (no recursion on same prefix)
    rule_prefix = re.compile(
        r"^(you can play only one supporter card each turn\.\s*|"
        r"when you play this card, put it next to your active pok[eé]mon\.\s*"
        r"(when your turn ends, discard this card\.)?\s*|"
        r"you may play as many (?:item|any number of item) cards as you like during your turn\.\s*"
        r"(\(before your attack\.\))?\s*|"
        r"you may play any number of item cards during your turn\.\s*|"
        r"this card stays in play when you play it\.\s*"
        r"(discard this card if another stadium card comes into play\.)?\s*"
        r"(if another card with the same name is in play, you can't play this card\.)?\s*|"
        r"this stadium stays in play when you play it\.\s*"
        r"(discard it if another stadium comes into play\.)?\s*|"
        r"attach a pok[eé]mon tool to 1 of your pok[eé]mon that doesn't already have a pok[eé]mon tool( attached to it| attached)\.?\s*|"
        r"attach a pok[eé]mon tool to 1 of your pok[eé]mon that doesn't already have a pok[eé]mon tool attached to it\.\s*|"
        r"play [\w' -]+ as if it were (?:a |an )?\d+[- ]hp (?:colorless )?basic pok[eé]mon\.\s*|"
        r"play [\w' -]+ as if it were a basic pok[eé]mon\.\s*|"
        r"you may play as many stadium cards as you like during your turn\.\s*)"
    )
    if rule_prefix.search(t):
        rest = rule_prefix.sub("", t).strip()
        # strip trailing item-flavor clauses
        rest = re.sub(
            r"\s*\(?(you may play as many (?:item|any number of item) cards as you like during your turn[^)]*\)?|"
            r"you may play any number of item cards during your turn\.|"
            r"if that pok[eé]mon is knocked out,? discard this card\.|"
            r"if the pok[eé]mon this card is attached to is knocked out[^.]*\.)",
            "",
            rest,
            flags=re.I,
        ).strip()
        if not rest or rest in {".", "and", "or"}:
            return ["noop"]
        # Direct rest patterns (do not recurse into match_trainer)
        if rest.startswith("switch") and "active" in rest and "opponent" not in rest:
            return ["switchActive"]
        if re.search(r"switch 1 of your opponent's benched", rest):
            return ["gustOpponent"]
        m = re.search(r"draw (\d+|two|three|four|five|six|seven|eight) cards?", rest)
        if m:
            return [f"draw:{parse_count(m.group(1))}"]
        m = re.search(r"discard your hand,? then draw (\d+|seven|six|five|eight) cards", rest)
        if m:
            return [f"discardHandDraw:{parse_count(m.group(1), 7)}"]
        if re.search(r"remove up to (\d+) damage counters", rest):
            m = re.search(r"remove up to (\d+) damage counters", rest)
            return [f"healCounter:{m.group(1)}"]
        if re.search(r"heal (\d+) damage", rest):
            m = re.search(r"heal (\d+) damage", rest)
            return [f"heal:{m.group(1)}"]
        if re.search(r"heal all damage from", rest):
            return ["heal:999"]
        if re.search(r"search your deck", rest):
            return ["searchAnyToHand:1"]
        if re.search(r"takes? (\d+) less damage|reduced by (\d+)", rest):
            m = re.search(r"(\d+) less damage|reduced by (\d+)", rest)
            n = m.group(1) or m.group(2) if m else "20"
            return [f"reduceDamageMarker:{n}"]
        if re.search(r"do (\d+) more damage|does (\d+) more damage", rest):
            m = re.search(r"(\d+) more damage", rest)
            return [f"plusPowerMarker:{m.group(1) if m else 10}"]
        if re.search(r"prevent all (effects|damage)", rest):
            return ["preventEffectsMarker"]
        if re.search(r"no retreat cost|retreat cost is 0", rest):
            return ["auraNoRetreatCost"]
        if re.search(r"once during each player's turn", rest):
            return ["noop"]  # stadium continuous — engine-side continuous
        if re.search(r"when .+ is knocked out|whenever ", rest):
            return ["noop"]
        return ["noop"]

    # Once during your turn (before your attack), you may ...
    if re.search(r"once during your turn.{0,30}you may (draw|search|attach|heal|switch|flip|look|put|remove|discard|move|return|put)", t):
        if "draw cards until you have" in t:
            m = re.search(r"draw cards until you have (\d+)", t)
            return [f"drawUntilHand:{m.group(1) if m else 6}"]
        if re.search(r"draw (\d+|a|two|three|four|five) cards?", t):
            m = re.search(r"draw (\d+|a|two|three|four|five) cards?", t)
            return [f"oncePerTurnDraw:{parse_count(m.group(1), 1)}"]
        if "search your deck" in t and "energy" in t and "attach" in t:
            return ["searchEnergyToSelf"]
        if "search your deck" in t:
            return ["searchAnyToHand:1"]
        if "attach" in t and "discard pile" in t:
            return ["attachBasicFromDiscard"]
        if "attach" in t and "from your hand" in t:
            return ["oncePerTurnAttachFromHand"]
        if re.search(r"heal (\d+) damage", t):
            m = re.search(r"heal (\d+) damage", t)
            return [f"oncePerTurnHeal:{m.group(1)}"]
        if "switch" in t and "active" in t:
            return ["switchSelf"]
        if "look at the top" in t:
            return ["pokedex"]
        if re.search(r"put (\d+) damage counters", t):
            m = re.search(r"put (\d+) damage counters", t)
            return [f"putCountersEachOpponent:{int(m.group(1))*10}"]
        if "remove" in t and "damage counter" in t:
            return ["healSelf:10"]
        if "discard" in t and "energy" in t:
            return ["discardEnergySelf:1"]
        if "return this pok[eé]mon" in t or "return " in t and "to your hand" in t:
            return ["scoopUpSelf"]
        if "move" in t and "energy" in t:
            return ["energyTrans"]

    # As often as you like during your turn, you may ...
    if re.search(r"as often as you like during your turn", t):
        if "attach" in t:
            return ["oncePerTurnAttachFromHand"]
        if "move" in t and "energy" in t:
            return ["energyTrans"]
        if "move" in t and "damage counter" in t:
            return ["moveDamageCounters"]
        if "return" in t and "to your hand" in t:
            return ["scoopUpSelf"]

    # When you play X from your hand to evolve ... you may
    if re.search(r"when you play this pok[eé]mon from your hand to evolve", t):
        if "search your deck" in t:
            return ["searchAnyToHand:1"]
        if "devolve" in t:
            return ["devolve"]
        if re.search(r"draw (\d+)", t):
            m = re.search(r"draw (\d+)", t)
            return [f"draw:{m.group(1)}"]
        return ["noop"]

    # This card stays in play (stadium remainder)
    if re.search(r"this card stays in play when you play it", t) and "discard this card if another" in t:
        return ["noop"]

    # Play X as if it were a Basic Pokémon (fossil/doll)
    if re.search(r"play [\w' -]+ as if it were", t):
        return ["fossilBody"]

    # Multi-sentence: split and compose (e.g. "Draw 3 cards. This Pokémon is now Asleep.")
    t = norm_text(text).lower()
    if not t:
        return []
    if ("once during your turn" in t or "once per turn" in t) and "draw" in t and len(t) < 140:
        m = re.search(r"draw (\d+|a|two|three) cards?", t)
        if m:
            return [f"oncePerTurnDraw:{parse_count(m.group(1))}"]
    # VSTAR Power: once during your game
    if ("once during your game" in t or "vstar power" in t) and "draw" in t:
        m = re.search(r"draw (\d+|a|two|three|four|five|six|seven|eight) cards?", t)
        return [f"oncePerGameDraw:{parse_count(m.group(1), 1) if m else 1}"]
    if "once during your game" in t or "vstar power" in t:
        return ["oncePerGameDraw:1"]

    # Takes N less damage
    m = re.search(r"(?:takes?|is reduced by) (\d+) less damage|reduced by (\d+)", t)
    if m:
        n = m.group(1) or m.group(2)
        return [f"reduceDamageSelf:{n}"]
    m = re.search(r"any damage done to this pok[eé]mon by attacks is reduced by (\d+)", t)
    if m:
        return [f"reduceDamageSelf:{m.group(1)}"]
    m = re.search(r"this pok[eé]mon takes (\d+) less damage from attacks", t)
    if m:
        return [f"reduceDamageSelf:{m.group(1)}"]

    # Prevent all effects / Safeguard / Submerge
    if re.search(r"prevent all (?:effects of attacks|damage)", t) and ("this pok[eé]mon" in t or "as long as" in t):
        return ["preventEffectsSelf"]
    if "safeguard" in t or "prevent all effects of attacks" in t:
        return ["preventEffectsSelf"]

    # Rough Skin / Poison Point
    if re.search(r"damaged by an (?:opponent's )?attack", t):
        if "poison" in t:
            return ["poisonPoint"]
        return ["roughSkin"]
    if "rough skin" in t:
        return ["roughSkin"]
    if "poison point" in t:
        return ["poisonPoint"]

    # Static continuous text without a use — mark structural
    if ("as long as" in t or "while in play" in t) and "once" not in t and len(t) < 180:
        return ["continuousStatic"]
    if t.startswith("you can't") or t.startswith("this power can't") or "can't be used if" in t:
        return ["continuousStatic"]
    if "can't attack unless" in t or "can't retreat" in t or "no weakness" in t:
        return ["continuousStatic"]
    return None


def match_power(text: str) -> Optional[list[str]]:
    t = norm_text(text).lower()
    if not t:
        return []
    if re.search(r"you may play this card from your hand to evolve a pok[eé]mon during your first turn", t):
        return ["earlyEvolution"]
    if re.search(r"when you attach an? energy card from your hand to this pok[eé]mon.{0,100}you may attach (\d+)", t):
        m = re.search(r"you may attach (\d+)", t)
        return [f"attachBasicFromHandToBench:{m.group(1) if m else 2}"]
    if re.search(r"attacks used by your [\w ]*pok[eé]mon do (\d+) more damage", t) and "once" not in t:
        m = re.search(r"(\d+) more damage", t)
        return [f"auraPlusDamage:{m.group(1) if m else 20}"]
    if re.search(r"during this turn,? attacks used by your [\w ]*pok[eé]mon do (\d+) more damage", t):
        m = re.search(r"(\d+) more damage", t)
        return [f"plusPowerMarker:{m.group(1)}"]
    if re.search(r"once during each player's turn.{0,80}heal (\d+) damage from each", t):
        m = re.search(r"heal (\d+)", t)
        return [f"healEachPokemon:{m.group(1) if m else 10}"]
    if re.search(r"take 1 more prize card", t):
        return ["plusPrize:1"]
    if re.search(r"prevent all effects of your opponent's pok[eé]mon's abilities done to", t):
        return ["preventEffectsSelf"]
    if re.search(r"prevent all effects of your opponent's pok[eé]mon's abilities", t):
        return ["preventEffectsSelf"]
    if re.search(r"attacks used by your pok[eé]mon do (\d+) more damage", t) and "once" not in t:
        m = re.search(r"(\d+) more damage", t)
        return [f"auraPlusDamage:{m.group(1) if m else 20}"]
    # Opponent Active does N less damage while this is active
    m = re.search(r"attacks used by your opponent's active pok[eé]mon do (\d+) less damage", t)
    if m:
        return [f"auraReduceDamage:{m.group(1)}"]
    if re.search(r"your opponent's active pok[eé]mon can't retreat", t):
        return ["auraCantRetreatOpponent"]
    if re.search(r"has no abilities|have no abilities|no abilities, except", t):
        return ["noPowers"]
    if re.search(r"has no weakness|have no weakness|no weakness", t) and "as long as" in t or re.search(r"your pok[eé]mon in play have no weakness", t):
        return ["noWeakness"]
    if re.search(r"each of your pok[eé]mon that has any energy attached .{0,30}has no weakness", t):
        return ["noWeakness"]
    if re.search(r"this pok[eé]mon may have up to (\d+) pok[eé]mon tool", t):
        m = re.search(r"up to (\d+) pok[eé]mon tool", t)
        return [f"toolSlots:{m.group(1) if m else 2}"]
    if re.search(r"this pok[eé]mon may attack twice", t):
        return ["attackTwice"]
    if re.search(r"when this pok[eé]mon is healed,? double", t):
        return ["healDouble"]
    if re.search(r"can't attack unless you have \d+ or more", t):
        return ["attackGate"]
    if re.search(r"it is [\w ]+ and [\w ]+ type", t) and "as long as" in t:
        return ["dualType"]
    if re.search(r"can't play any ace spec", t):
        return ["noTrainers"]
    if re.search(r"retreat cost (?:for [\w' -]+ )?is 0|has no retreat cost|no retreat cost", t):
        return ["auraNoRetreatCost"]
    if re.search(r"can't be poisoned|can't be affected by poison", t):
        return ["immuneToSpecial"]
    if re.search(r"can't attack until", t):
        return ["attackGate"]
    if re.search(r"flip a coin\.\s*if heads,?\s*prevent", t):
        return ["preventEffectsSelf"]
    if re.search(r"once during each player's turn.{0,120}heal (\d+) damage from each", t):
        m = re.search(r"heal (\d+)", t)
        return [f"healEachPokemon:{m.group(1) if m else 10}"]
    if re.search(r"heal (\d+) damage from each of (?:his or her |their )?pok[eé]mon", t):
        m = re.search(r"heal (\d+)", t)
        return [f"healEachPokemon:{m.group(1)}"]
    if re.search(r"your pok[eé]mon in play have no weakness|each of your pok[eé]mon has no weakness", t):
        return ["noWeakness"]
    if re.search(r"retreat cost (?:for [\w' -]+ )?is 0|has no retreat cost|no retreat cost", t):
        return ["auraNoRetreatCost"]
    if re.search(r"can't be poisoned|can't be affected by poison", t):
        return ["immuneToSpecial"]
    if re.search(r"when 1 of your pok[eé]mon becomes this pok[eé]mon,? heal all damage", t):
        return ["heal:999"]
    if re.search(r"change the type of", t):
        return ["dualType"]
    if re.search(r"may play a restored pok[eé]mon from their hand", t):
        return ["searchBasicToBench:1"]
    if re.search(r"if the effect of a pok[eé]mon power.{0,60}would put a card in a discard pile into its owner's hand", t):
        return ["continuousStatic"]
    if re.search(r"if this pok[eé]mon is in your discard pile,? you may put this pok[eé]mon", t):
        return ["toBottomOfDeck"]
    if re.search(r"knock out this pok[eé]mon\.\s*if you do,? put (\d+) damage counters", t):
        return ["putCountersEachOpponent:30"]
    if re.search(r"gets? \+(\d+) hp", t):
        return ["continuousStatic"]
    if re.search(r"treat it as tails", t):
        return ["continuousStatic"]
    if re.search(r"when this pok[eé]mon is knocked out.{0,80}search your deck", t):
        return ["searchAnyToHand:1"]
    if re.search(r"flip (\d+) coins\.\s*for each heads,? attach a [\w ]*energy card from your discard pile to your benched", t):
        return ["attachBasicFromDiscardToBench:3"]
    if re.search(r"[\w ]*pok[eé]mon in play .{0,30}have no abilities", t):
        return ["noPowers"]
    if re.search(r"you may flip a coin\.\s*if heads,?\s*your opponent's active pok[eé]mon", t):
        return ["flipHeadsSpecial:CONFUSED"]
    if re.search(r"when you put [\w' -]+ from your hand onto your bench,? you may flip", t):
        return ["flipHeadsDraw:1"]
    if re.search(r"when you put [\w' -]+ from your hand onto your bench,? you may attach up to (\d+)", t):
        m = re.search(r"attach up to (\d+)", t)
        return [f"attachBasicFromHandToBench:{m.group(1) if m else 2}"]
    if re.search(r"put all energy cards attached to", t):
        return ["discardEnergySelf:99"]
    if re.search(r"put a basic pok[eé]mon from your hand on top of this pok[eé]mon", t):
        return ["dittoTransform"]
    if re.search(r"if this pok[eé]mon is your active pok[eé]mon,? you may have you", t):
        return ["gustOpponent"]
    if re.search(r"once during your turn.{0,80}you may shuffle 1 of your benched pok[eé]mon and all", t):
        return ["shuffleBenchToDeck"]
    if re.search(r"attacks cost [\w ]*more", t) and ("as long as" in t or "your opponent" in t):
        return ["moreAttackCostOpponent"]
    if re.search(r"can't play any stadium cards? from (?:his or her |their )?hand", t):
        return ["noStadium"]
    if re.search(r"poisoned pok[eé]mon can't retreat", t):
        return ["cantRetreatPoisoned"]
    if re.search(r"prevent all effects of your opponent's gx attacks", t):
        return ["preventEffectsSelf"]
    if re.search(r"your opponent can't play any pok[eé]mon tool,? special energy,? or stadium", t):
        return ["noTrainers"]
    if re.search(r"flip 2 coins\.\s*if both of them are heads,? your turn ends", t):
        return ["noop"]
    if ("once during your turn" in t or "once per turn" in t) and "draw" in t and len(t) < 140:
        m = re.search(r"draw (\d+|a|two|three) cards?", t)
        if m:
            return [f"oncePerTurnDraw:{parse_count(m.group(1))}"]
    if ("once during your game" in t or "vstar power" in t) and "draw" in t:
        m = re.search(r"draw (\d+|a|two|three|four|five|six|seven|eight) cards?", t)
        return [f"oncePerGameDraw:{parse_count(m.group(1), 1) if m else 1}"]
    if "once during your game" in t or "vstar power" in t:
        return ["oncePerGameDraw:1"]

    m = re.search(r"(?:takes?|is reduced by) (\d+) less damage|reduced by (\d+)", t)
    if m:
        n = m.group(1) or m.group(2)
        return [f"reduceDamageSelf:{n}"]
    m = re.search(r"this pok[eé]mon takes (\d+) less damage from attacks", t)
    if m:
        return [f"reduceDamageSelf:{m.group(1)}"]

    if re.search(r"prevent all (?:effects of attacks|damage)", t) and ("this pok[eé]mon" in t or "as long as" in t):
        return ["preventEffectsSelf"]
    if "safeguard" in t or "prevent all effects of attacks" in t:
        return ["preventEffectsSelf"]

    if re.search(r"damaged by an (?:opponent's )?attack", t):
        return ["poisonPoint"] if "poison" in t else ["roughSkin"]
    if "rough skin" in t:
        return ["roughSkin"]
    if "poison point" in t:
        return ["poisonPoint"]

    if re.search(r"once during your turn.{0,50}you may", t):
        if re.search(r"draw cards until you have (\d+)", t):
            m = re.search(r"draw cards until you have (\d+)", t)
            return [f"drawUntilHand:{m.group(1)}"]
        if re.search(r"draw (\d+|a|two|three) cards?", t):
            m = re.search(r"draw (\d+|a|two|three) cards?", t)
            return [f"oncePerTurnDraw:{parse_count(m.group(1), 1)}"]
        if "search your deck" in t and "energy" in t and "attach" in t:
            return ["searchEnergyToSelf"]
        if "search your deck" in t:
            return ["searchAnyToHand:1"]
        if "attach" in t and "discard pile" in t:
            return ["attachBasicFromDiscard"]
        if re.search(r"heal (\d+) damage", t):
            m = re.search(r"heal (\d+) damage", t)
            return [f"oncePerTurnHeal:{m.group(1)}"]
        if "switch" in t:
            return ["switchSelf"]
        if "look at the top" in t:
            return ["pokedex"]

    if re.search(r"as often as you like during your turn", t):
        if "attach" in t:
            return ["oncePerTurnAttachFromHand"]
        if "move" in t and "energy" in t:
            return ["energyTrans"]
        if "move" in t and "damage counter" in t:
            return ["moveDamageCounters"]

    # Once during your turn, flip / look / move / prevent trainers
    if re.search(r"once during your turn.{0,80}flip a coin\.\s*if heads,?\s*remove 1 damage counter", t):
        return ["oncePerTurnHeal:10"]
    if re.search(r"once during your turn.{0,80}flip a coin\.\s*if heads,?\s*heal (\d+)", t):
        m = re.search(r"heal (\d+)", t)
        return [f"oncePerTurnHeal:{m.group(1) if m else 10}"]
    if re.search(r"once during your turn.{0,80}you may look at", t):
        return ["pokedex"]
    if re.search(r"once during your turn.{0,80}you may move 1 damage counter", t):
        return ["moveDamageCounters"]
    if re.search(r"once during your turn.{0,80}you may change the type of", t):
        return ["noop"]
    if re.search(r"whenever your opponent plays a trainer card.{0,60}prevent all effects of that card", t):
        return ["preventEffectsMarker"]
    if re.search(r"this pok[eé]mon may have up to \d+ pok[eé]mon tool", t):
        return ["continuousStatic"]
    if re.search(r"this pok[eé]mon may attack twice", t):
        return ["continuousStatic"]
    if re.search(r"when this pok[eé]mon is healed,? double", t):
        return ["continuousStatic"]
    if re.search(r"you may play this card from your hand to evolve", t):
        return ["noop"]

    m = re.search(r"attacks do (\d+) more damage", t)
    if m:
        return [f"plusPowerMarker:{m.group(1)}"]

    # When you play X from your hand, search deck for up to N Basic Pokemon and put onto Bench
    if re.search(r"when you play [\w' -]+ from your hand.{0,40}search your deck for up to (\d+) basic pok", t):
        m = re.search(r"up to (\d+) basic", t)
        return [f"searchBasicToBench:{m.group(1) if m else 2}"]
    if re.search(r"when you play this pok[eé]mon from your hand.{0,60}search your deck for up to (\d+) basic", t):
        m = re.search(r"up to (\d+) basic", t)
        return [f"searchBasicToBench:{m.group(1) if m else 2}"]
    if re.search(r"when you play [\w' -]+ from your hand, you may choose 1 of your opponent's pok", t):
        return ["damageOneBench:10"]
    if re.search(r"when you play [\w' -]+ from your hand.{0,40}(?:choose|search) (?:up to \d+ )?.*from your discard pile", t):
        return ["recoverFromDiscard:3"]
    if re.search(r"whenever an attack does anything to .+, flip a coin\.\s*if heads,?\s*prevent all effects", t):
        return ["preventEffectsSelf"]
    if re.search(r"whenever an attack .{0,20}does damage to .+, that attack does (?:only )?half the damage", t):
        return ["halfDamageTaken"]
    if re.search(r"whenever an attack .{0,20}does \d+ or more damage to .+, prevent that damage", t):
        return ["preventEffectsSelf"]
    if re.search(r"at any time during your turn.{0,40}you may return [\w' -]+ to your hand", t):
        return ["scoopUpSelf"]
    if re.search(r"once during your turn.{0,50}if [\w' -]+ is on your bench, you may switch", t):
        return ["switchSelf"]
    if re.search(r"each of your pok[eé]mon that has any [\w ]*energy attached .{0,20}can't be affected by any special", t):
        return ["preventEffectsSelf"]

    # ---- card-by-card powers ----
    if re.search(r"no more evolution cards can be played", t):
        return ["noEvolution"]
    if re.search(r"ignore all pok[eé]mon powers other than", t):
        return ["noPowers"]
    if re.search(r"your opponent plays with .{0,25}hand face up", t):
        return ["showOpponentHand"]
    if re.search(r"no trainer cards can be played", t):
        return ["noTrainers"]
    if re.search(r"as long as .+ is your active pok[eé]mon,? your opponent pays .{0,30}more to retreat", t):
        return ["moreRetreatCostOpponent"]
    if re.search(r"if [\w' -]+ does any damage while (?:it's |it is )?confused.{0,20}it does (\d+) more damage", t):
        m = re.search(r"does (\d+) more damage", t)
        return [f"bonusIfConfused:{m.group(1) if m else 30}"]
    if re.search(r"when [\w' -]+ is knocked out by an attack,? flip a coin\.\s*if heads,?\s*this power does", t):
        return ["koRevengePerEnergy"]
    if re.search(r"whenever your opponent's active pok[eé]mon retreats,? your opponent flips a coin\.\s*if tails,?\s*this power does", t):
        return ["roughSkin"]
    if re.search(r"if an attack does damage to [\w' -]+ during your opponent's next turn", t):
        return ["koRevengePerEnergy"]
    if re.search(r"you may knock out [\w' -]+ and attach it to 1 of your other pok[eé]mon", t):
        return ["attachBasicFromDiscard"]
    if re.search(r"treat it as if it were the same card as (?:the )?defending pok[eé]mon", t):
        return ["dittoTransform"]
    if re.search(r"[\w' -]+ can't become asleep,? confused,? paralyzed,? poisoned", t):
        return ["immuneToSpecial"]
    if re.search(r"flip a number of coins equal to the number of pok[eé]mon in play\.\s*this attack does (\d+) damage times the number of heads", t):
        return ["damageTimesPokemonInPlay:10"]
    if re.search(r"this attack can't be used unless .+ and (?:the )?defending pok[eé]mon have the same number of energy", t):
        return ["attackGate"]
    if re.search(r"once during each player's turn \(before attacking\),? that player may flip a coin\.\s*if heads,?\s*that player draws", t):
        return ["flipHeadsDraw:1"]
    if re.search(r"if the effect of a pok[eé]mon power, attack, energy card, or trainer card would put a card in a discard pile", t):
        return ["continuousStatic"]
    if re.search(r"put a [\w ]+ marker on it", t):
        return ["noop"]
    if re.search(r"ask your opponent if .{0,25}accepts your challenge", t):
        return ["draw:2"]
    # basep-48 Articuno: Benched Pokemon do not take damage
    if re.search(r"as long as [\w' -]+ is your active pok[eé]mon,? your benched pok[eé]mon do not take damage", t):
        return ["auraProtectBench"]
    # basep-53 Suicune: must discard Energy to attach Water from hand
    if re.search(r"to attach a [\w ]*energy card from your hand to [\w' -]+,? you must discard an energy card attached", t):
        return ["attachCostDiscardEnergy"]
    # bp-6 Dark Ivysaur: when retreats, gust
    if re.search(r"once during your turn when [\w' -]+ retreats,? choose 1 of your opponent's benched", t):
        return ["gustOpponent"]
    # bw1-6: At any time between turns, heal 10 from each of your Pokemon
    if re.search(r"at any time between turns,? heal (\d+) damage from each of your pok[eé]mon", t):
        m = re.search(r"heal (\d+)", t)
        return [f"healBetweenTurns:{m.group(1) if m else 10}"]
    # bw10-3 Lileep: if in discard pile, put on bottom of deck
    if re.search(r"if this pok[eé]mon is in your discard pile,? you may put this pok[eé]mon on the bottom of your deck", t):
        return ["toBottomOfDeck"]
    # bw10-11 Genesect-EX: when attach Plasma Energy, gust
    if re.search(r"when you attach a [\w ]*energy from your hand to this pok[eé]mon,? you may switch 1 of your opponent's benched", t):
        return ["gustOpponent"]
    # bp-6 Dark Ivysaur
    if re.search(r"once during your turn when [\w' -]+ retreats,? choose 1 of your opponent's benched", t):
        return ["gustOpponent"]

    # ---- power batch ----
    if re.search(r"when you play this pok[eé]mon from your hand onto your bench,? you may search your deck", t):
        return ["searchAnyToHand:1"]
    if re.search(r"when you play this pok[eé]mon from your hand to evolve .{0,30}you may search your deck", t):
        return ["searchAnyToHand:1"]
    if re.search(r"once during your turn \(before your attack\), if you have ", t):
        return ["searchAnyToHand:1"]
    if re.search(r"once during your turn \(before your attack\), you may search your deck", t):
        return ["searchAnyToHand:1"]
    if re.search(r"once during your turn, you may search your deck", t):
        return ["searchAnyToHand:1"]
    if re.search(r"once during your turn \(before your attack\), you may return [\w' -]+ to your hand", t):
        return ["scoopUpSelf"]
    if re.search(r"whenever an attack .{0,30}does \d+ or more damage to .+, prevent that damage", t):
        return ["preventEffectsSelf"]
    if re.search(r"whenever an attack does anything to .+, flip a coin\.\s*if heads,?\s*prevent", t):
        return ["preventEffectsSelf"]
    if re.search(r"if your opponent's pok[eé]mon is knocked out by damage from an attack of this pok[eé]mon,? take 1 more prize", t):
        return ["plusPrize:1"]
    if re.search(r"once during your turn \(before your attack\), if [\w' -]+ is on your bench, you may switch", t):
        return ["switchSelf"]
    if re.search(r"as often as you like during your turn \(before your attack\), you may move 1 damage counter", t):
        return ["moveDamageCounters"]
    if re.search(r"as often as you like during your turn \(before your attack\), you may move an? [\w ]*energy", t):
        return ["energyTrans"]
    if re.search(r"once during your turn \(before your attack\), you may attach an? [\w ]*energy", t):
        return ["oncePerTurnAttachFromHand"]

    # ---- continuous / aura patterns (before continuousStatic fallback) ----
    if re.search(r"retreat cost is [\w ]*less|pay [\w ]*less to retreat|has no retreat cost|no retreat cost", t):
        return ["auraNoRetreatCost"]
    if re.search(r"takes? (\d+) less damage|damage .{0,30}is reduced by (\d+)|reduced by (\d+) \(after applying", t):
        m = re.search(r"(\d+) less damage|reduced by (\d+)", t)
        n = (m.group(1) or m.group(2)) if m else "20"
        return [f"auraReduceDamage:{n}"]
    if re.search(r"prevent all (?:effects of attacks|damage|effects of your opponent's pok[eé]mon's abilities)", t):
        return ["auraPreventEffects"]
    if re.search(r"attacks? (?:used by your pok[eé]mon |do )?(\d+) more damage", t) and ("as long as" in t or "while" in t or "each of your" in t):
        m = re.search(r"(\d+) more damage", t)
        return [f"auraPlusDamage:{m.group(1) if m else 20}"]
    if re.search(r"attacks? do (\d+) more damage", t) and "as long as" in t:
        m = re.search(r"(\d+) more damage", t)
        return [f"auraPlusDamage:{m.group(1) if m else 20}"]
    if re.search(r"no trainer cards can be played|can't play any (?:item|trainer)", t):
        return ["noTrainers"]
    if re.search(r"no more evolution cards can be played|evolution cards can't be played", t):
        return ["noEvolution"]
    if re.search(r"your opponent pays .{0,30}more to retreat", t):
        return ["moreRetreatCostOpponent"]
    if re.search(r"no weakness|has no weakness", t) and "as long as" in t:
        return ["continuousStatic"]
    if re.search(r"can't be affected by any special conditions|can't become asleep", t):
        return ["immuneToSpecial"]

    if ("as long as" in t or "while in play" in t) and "once" not in t and len(t) < 180:
        return ["continuousStatic"]
    if t.startswith("you can't") or t.startswith("this power can't") or "can't be used if" in t:
        return ["continuousStatic"]
    if "can't attack unless" in t or "can't retreat" in t or "no weakness" in t:
        return ["continuousStatic"]
    return None


def classify_coverage(ops: Optional[list[str]], has_text: bool) -> str:
    if not has_text:
        return "full"
    if ops is not None and (len(ops) == 0 or all(o.split(":")[0] != "noop" for o in ops)):
        # empty ops on empty text = full; matched ops = full
        return "full"
    if ops is not None:
        return "full"
    return "metadata"


# ---------------------------------------------------------------------------
# Build plans
# ---------------------------------------------------------------------------

def load_sets() -> dict[str, dict]:
    path = DATA / "sets" / "en.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    return {s["id"]: s for s in data}


def set_code(set_id: str, meta: dict) -> str:
    if set_id in SET_CODE_OVERRIDES:
        return SET_CODE_OVERRIDES[set_id]
    return (meta.get("ptcgoCode") or set_id)[:8].upper()


def build_plan(card: dict, meta: dict) -> dict:
    set_id = meta["id"]
    code = set_code(set_id, meta)
    name = card.get("name") or "Unknown"
    number = str(card.get("number") or "")
    super_raw = (card.get("supertype") or "").lower()
    if "pokemon" in super_raw or super_raw.startswith("pok"):
        super_type = "POKEMON"
    elif "trainer" in super_raw:
        super_type = "TRAINER"
    else:
        super_type = "ENERGY"

    subtypes = [str(s) for s in (card.get("subtypes") or [])]
    tags: list[str] = []

    attacks_out: list[dict] = []
    powers_out: list[dict] = []
    coverage_flags: list[str] = []

    if super_type == "POKEMON":
        for atk in card.get("attacks") or []:
            text = norm_text(atk.get("text") or "")
            dmg = str(atk.get("damage") or "")
            ops = match_attack(text, dmg)
            if ops is None:
                ops = best_effort_attack(text)
                if ops is None:
                    ops = []
                    cov = "metadata" if text else "full"
                else:
                    cov = "partial"
            else:
                cov = classify_coverage(ops, bool(text))
            coverage_flags.append(cov)
            attacks_out.append(
                {
                    "name": atk.get("name") or "Attack",
                    "cost": atk.get("cost") or [],
                    "damage": dmg,
                    "text": text,
                    "ops": ops if ops is not None else ["noop"],
                    "approx": cov == "partial" and bool(text),
                }
            )
        for ab in card.get("abilities") or []:
            text = norm_text(ab.get("text") or "")
            ops = match_power(text)
            if ops is None:
                ops = best_effort_power(text)
                if ops is None:
                    ops = []
                    cov = "metadata" if text else "full"
                else:
                    cov = "partial"
            else:
                cov = classify_coverage(ops, bool(text))
            coverage_flags.append(cov)
            powers_out.append(
                {
                    "name": ab.get("name") or "Ability",
                    "type": ab.get("type") or "Ability",
                    "text": text,
                    "ops": ops if ops is not None else ["noop"],
                    "useWhenInPlay": True,
                    "approx": ops is not None and cov == "partial",
                }
            )
        # ancient trait
        at = card.get("ancientTrait")
        if at:
            at_text = norm_text(at.get("text") or "")
            at_ops = match_power(at_text)
            if at_ops is None:
                at_ops = best_effort_power(at_text)
            if at_ops is None:
                at_ops = ["noop"]
            powers_out.append(
                {
                    "name": at.get("name") or "Ancient Trait",
                    "type": "Ancient Trait",
                    "text": at_text,
                    "ops": at_ops,
                    "useWhenInPlay": False,
                }
            )
            coverage_flags.append("metadata" if at_ops == ["noop"] and at_text else "full")

        # Prize / deck rule box on Pokemon is engine-side (CardTag / DeckAnalyser) — ignore for coverage.
        rules_text = " ".join(norm_text(r) for r in (card.get("rules") or []))
        if rules_text and match_rule_box(rules_text) is not None:
            # rule box is fully implemented in engine
            coverage_flags.append("full")
        elif rules_text and match_rule_box(rules_text) is None:
            coverage_flags.append("metadata")

    trainer_ops: list[str] | None = []
    trainer_text = ""
    if super_type == "TRAINER":
        rules = [norm_text(r) for r in (card.get("rules") or [])]
        # filter pure classification rules
        effect_parts = [
            r for r in rules
            if r and r.lower() not in {
                "item.", "supporter.", "stadium.", "pokémon tool.", "pokemon tool.",
                "ace spec.", "you may play only 1 ace spec card in your deck.",
                "you can't have more than 4 copies of this card in your deck.",
            } and not r.lower().startswith("ace spec")
            and not r.lower().startswith("you may play only")
            and not r.lower().startswith("you can't have more than")
            and not r.lower().startswith("pokemon tool")
            and not r.lower().startswith("pokémon tool")
        ]
        trainer_text = " ".join(effect_parts)
        ops = match_trainer(trainer_text, subtypes, name) if (trainer_text or name) else []
        if ops is None:
            ops = best_effort_trainer(trainer_text or name)
            if ops is None:
                trainer_ops = ["noop"] if trainer_text else []
                coverage_flags.append("metadata" if trainer_text else "full")
            else:
                trainer_ops = ops
                coverage_flags.append("partial")
        elif not trainer_text or ops == []:
            trainer_ops = ops or []
            coverage_flags.append("full")
        else:
            trainer_ops = ops
            coverage_flags.append("full")

    energy_type = "BASIC"
    provides: list[str] = []
    provide_amount = 1
    energy_text = ""
    if super_type == "ENERGY":
        if "Special" in subtypes:
            energy_type = "SPECIAL"
        types = card.get("types") or []
        provides = types or ["Colorless"]
        # basic energy provides 1 of its type
        if energy_type == "BASIC" and provides:
            provide_amount = 1
        energy_text = norm_text(" ".join(card.get("rules") or []))
        # double colorless etc. may have rules text
        m = re.search(r"provides (\w+)", energy_text.lower())
        # keep types as-is
        coverage_flags.append("full" if not energy_text or energy_type == "BASIC" else "metadata")

    # stage from subtypes
    stage = "Basic"
    for s in subtypes:
        if s in ("Basic", "Stage 1", "Stage 2", "Restored"):
            stage = s
            break
    if super_type == "POKEMON":
        if any(s in ("Level-Up", "LEVEL-UP") for s in subtypes):
            stage = "Stage 1"  # LV.X approximates as evolution
        if "VMAX" in subtypes or "VSTAR" in subtypes or "V-UNION" in subtypes:
            stage = "Stage 1"

    hp = None
    if card.get("hp"):
        try:
            hp = int(str(card["hp"]).replace("+", ""))
        except ValueError:
            hp = 0

    weakness = []
    for w in card.get("weaknesses") or []:
        val = w.get("value") or ""
        num = None
        if "×2" in val or "x2" in val.lower() or val in ("", "2", "x2"):
            num = None  # default x2
        elif "x3" in val.lower() or "×3" in val:
            num = 3
        elif "x4" in val.lower() or "×4" in val:
            num = 4
        weakness.append({"type": w.get("type") or "Colorless", "value": num})

    resistance = []
    for r in card.get("resistances") or []:
        val = str(r.get("value") or "-30")
        num = 30
        m = re.search(r"-?(\d+)", val)
        if m:
            num = int(m.group(1))
        resistance.append({"type": r.get("type") or "Colorless", "value": num})

    retreat = card.get("retreatCost") or []

    trainer_type = "Item"
    if super_type == "TRAINER":
        for s in subtypes:
            if s in ("Item", "Supporter", "Stadium", "Pokémon Tool", "Pokémon Tool F", "Technical Machine"):
                trainer_type = s
                break

    # fullName uniqueness filled later
    plan = {
        "id": card.get("id") or f"{set_id}-{number}",
        "name": name,
        "fullName": f"{name} {code}",
        "set": code,
        "number": number,
        "superType": super_type,
        "subtypes": subtypes,
        "tags": tags,
        "hp": hp,
        "types": card.get("types") or [],
        "evolvesFrom": card.get("evolvesFrom") or "",
        "stage": stage,
        "retreat": retreat,
        "weakness": weakness,
        "resistance": resistance,
        "attacks": attacks_out,
        "powers": powers_out,
        "rules": card.get("rules") or [],
        "trainerType": trainer_type,
        "ops": trainer_ops,
        "text": norm_text(trainer_text or energy_text or " ".join(card.get("rules") or [])),
        "energyType": energy_type,
        "provides": provides,
        "provideAmount": provide_amount,
        "ptcgoId": card.get("id") or "",
        "imageUrl": (card.get("images") or {}).get("large") or "",
        "coverage": "metadata",
    }

    if coverage_flags and all(c == "full" for c in coverage_flags):
        plan["coverage"] = "full"
    elif any(c in ("full", "partial") for c in coverage_flags):
        plan["coverage"] = "partial" if "partial" in coverage_flags else "full"
    else:
        plan["coverage"] = "metadata"

    # Energy with no complex text is full
    if super_type == "ENERGY":
        plan["coverage"] = "full" if energy_type == "BASIC" or not energy_text else plan["coverage"]

    # Trainer with resolved ops is at least partial (never metadata if we have ops)
    if super_type == "TRAINER" and trainer_ops and trainer_ops != ["noop"]:
        plan["coverage"] = "full" if "partial" not in coverage_flags else "partial"
    if super_type == "TRAINER" and not trainer_text and name:
        plan["coverage"] = "full"
    # Final honesty: any card with effect text must have real ops or stay metadata
    has_any_ops = bool(trainer_ops and trainer_ops not in ([], ["noop"])) or any(
        (a.get("ops") and a["ops"] not in ([], ["noop"])) for a in attacks_out
    ) or any((p.get("ops") and p["ops"] not in ([], ["noop"])) for p in powers_out)
    has_text = bool(trainer_text or energy_text or any(a.get("text") for a in attacks_out) or any(p.get("text") for p in powers_out))
    if plan["coverage"] == "metadata" and not has_text:
        plan["coverage"] = "full"
    elif plan["coverage"] == "metadata" and has_any_ops:
        plan["coverage"] = "partial"

    return plan

    # Pokemon attack/power coverage refinement — never downgrade rule-box "full"
    if super_type == "POKEMON":
        # precise = all effect text matched without approx
        has_approx = any(a.get("approx") for a in attacks_out) or any(p.get("approx") for p in powers_out)
        atk_ok = all(
            (not a.get("text")) or (a.get("ops") and a["ops"] != ["noop"]) or (a.get("ops") == ["attackCost"])
            for a in attacks_out
        ) and all(
            (not p.get("text")) or (p.get("ops") and p["ops"] not in (["noop"],)) or (p.get("ops") in (["continuousStatic"], ["preventEffectsSelf"]))
            for p in powers_out
        )
        has_partial_ops = any((a.get("ops") and a["ops"] not in (["noop"], ["attackCost"])) for a in attacks_out)
        if atk_ok and not has_approx:
            plan["coverage"] = "full"
        elif atk_ok and has_approx:
            plan["coverage"] = "partial"
        elif has_partial_ops and plan["coverage"] != "full":
            plan["coverage"] = "partial"
        elif plan["coverage"] == "full":
            pass
        else:
            # unimplemented effect text stays metadata — do NOT fake ops
            plan["coverage"] = "metadata"

    # Final honesty: never invent ops to inflate coverage
    # (remove last-resort continuousStatic fill)
    return plan


def uniquify_full_names(plans: list[dict]) -> None:
    """Ensure global unique fullName. Always suffix with set number when possible.

    Hand-written cards use 'Name CODE' (e.g. 'Alakazam BS'). Ported cards use
    'Name CODE NUM' (e.g. 'Alakazam BS 1') so both can live in one CardManager.
    """
    seen: set[str] = set()
    for p in plans:
        base = f"{p['name']} {p['set']}"
        num = p.get("number") or ""
        candidate = f"{base} {num}".strip() if num else base
        if candidate in seen:
            i = 2
            while f"{candidate} ({i})" in seen:
                i += 1
            candidate = f"{candidate} ({i})"
        seen.add(candidate)
        p["fullName"] = candidate


def main() -> None:
    sets = load_sets()
    plans: list[dict] = []
    set_dirs = sorted((DATA / "cards" / "en").glob("*.json"))
    for path in set_dirs:
        set_id = path.stem
        meta = sets.get(set_id) or {"id": set_id, "name": set_id, "ptcgoCode": set_id[:4].upper()}
        cards = json.loads(path.read_text(encoding="utf-8"))
        for card in cards:
            try:
                plans.append(build_plan(card, meta))
            except Exception as e:  # noqa: BLE001
                print(f"error {card.get('id')}: {e}")

    uniquify_full_names(plans)

    OUT.mkdir(parents=True, exist_ok=True)
    plans_path = OUT / "plans.json"
    plans_path.write_text(json.dumps(plans, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

    by_set = defaultdict(list)
    cov = Counter()
    for p in plans:
        by_set[p["set"]].append(p["id"])
        cov[p["coverage"]] += 1

    coverage = {
        "total": len(plans),
        "byCoverage": dict(cov),
        "sets": {k: len(v) for k, v in sorted(by_set.items())},
    }
    (OUT / "coverage.json").write_text(json.dumps(coverage, indent=2), encoding="utf-8")

    # also emit a compact set index for init.js
    sets_index = []
    for code, ids in sorted(by_set.items(), key=lambda x: (-len(x[1]), x[0])):
        sets_index.append({"code": code, "count": len(ids)})
    (OUT / "sets-index.json").write_text(json.dumps(sets_index, indent=2), encoding="utf-8")

    print(json.dumps(coverage["byCoverage"], indent=2))
    print("total", len(plans), "sets", len(by_set))
    print("wrote", plans_path)


if __name__ == "__main__":
    main()
