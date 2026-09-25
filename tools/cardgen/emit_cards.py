"""Emit one TypeScript card file per CardPlan (upstream packages/sets style).

Shared effect fields live in packages/sets/src/common/effects/*.ts.
Each card file calls those fields and supplies its own parameters
(e.g. drawCards(..., 2) for Bill).

Output: packages/sets/src/port/cards/<set_code>/<slug>.ts
        packages/sets/src/port/cards/index.ts
"""
from __future__ import annotations

import json
import re
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PLANS = ROOT / "packages" / "sets" / "src" / "port" / "plans.json"
OUT = ROOT / "packages" / "sets" / "src" / "port" / "cards"


def slugify(name: str) -> str:
    s = unicodedata.normalize("NFKD", name)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s or "card"


def class_name(name: str, set_code: str, number: str) -> str:
    parts = re.findall(r"[A-Za-z0-9]+", name)
    base = "".join(p[:1].upper() + p[1:] for p in parts) or "Card"
    if base[0].isdigit():
        base = "C" + base
    suffix = re.sub(r"[^0-9A-Za-z]", "", number or "")
    if suffix and suffix[0].isdigit():
        return f"{base}_{suffix}"
    return f"{base}{suffix}"


def ts_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def map_op_power(op: str) -> str:
    """Map EffectOp to commonEffects field call (PowerEffect side)."""
    name, *args = op.split(":")
    a = args
    if name in ("draw", "oncePerTurnDraw", "oncePerGameDraw"):
        n = a[0] if a else "1"
        return f"commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, {n})"
    if name in ("healSelf", "oncePerTurnHeal"):
        return f"commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, {a[0] if a else 10})"
    if name == "reduceDamageSelf":
        return f"commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, {a[0] if a else 10})"
    if name == "preventEffectsSelf":
        return "commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power)"
    if name == "roughSkin" or name == "poisonPoint":
        return "commonEffects.roughSkinPower(this, store, state, effect).reduce(effect.power)"
    if name == "flipHeadsSpecial":
        cond = (a[0] if a else "CONFUSED").upper()
        if cond not in ("ASLEEP", "CONFUSED", "PARALYZED", "POISONED", "BURNED"):
            cond = "CONFUSED"
        return f"commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, \"flipHeadsSpecial:{cond}\")"
    if name == "specialDefending":
        cond = (a[0] if a else "CONFUSED").upper()
        if cond not in ("ASLEEP", "CONFUSED", "PARALYZED", "POISONED", "BURNED"):
            cond = "CONFUSED"
        return f"commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, \"specialDefending:{cond}\")"
    if name == "preventEffectsMarker":
        return "commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power)"
    if name == "switchSelf":
        return "commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power)"
    if name == "discardEnergySelf":
        return f"commonEffects.discardEnergySelfPower(this, store, state, effect).reduce(effect.power, {a[0] if a else 1})"
    if name == "scoopUpSelf":
        return "commonEffects.scoopUpSelf(this, store, state, effect).use(effect as any)"
    if name == "energyTrans":
        return "commonEffects.energyTrans(this, store, state, effect).use(effect as any)"
    if name in ("noop", "continuousStatic", "attackCost"):
        return "/* structural */ state"
    return f"commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, {ts_str(op)})"


def map_op_attack(op: str) -> str:
    """Map EffectOp to a commonEffects field call (attack side)."""
    name, *args = op.split(":")
    a = args
    if name == "draw":
        return f"commonEffects.drawCardsAttack(this, store, state, effect).use(effect, {a[0] if a else 1})"
    if name == "healSelf":
        return f"commonEffects.healSelfAttack(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "healEachPokemon":
        return f"commonEffects.healSelfAttack(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "bonusDamagePer":
        return f"commonEffects.bonusDamagePer(this, store, state, effect).use(effect, {a[0] if a else 10}, {a[1] if len(a)>1 else 0})"
    if name == "bonusPerSelfDamageCounter":
        n = a[0] if a else "10"
        if n.startswith("-"):
            n = n[1:]
        return (
            f"commonEffects.bonusDamagePer(this, store, state, effect).use(effect, "
            f"{n}, Math.floor(effect.player.active.damage / 10))"
        )
    if name in ("ignoreWeaknessResistance", "ignoreAllEffects", "ignoreResistance", "ignoreWeakness"):
        return "commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect)"
    if name == "flipHeadsAddDamage":
        return f"commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "flipHeadsSpecial":
        cond = (a[0] if a else "CONFUSED").upper()
        if cond not in ("ASLEEP", "CONFUSED", "PARALYZED", "POISONED", "BURNED"):
            cond = "CONFUSED"
        return f"commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.{cond})"
    if name == "flipHeadsSelfDamage":
        return f"commonEffects.flipTailsSelfDamage(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "searchBasicToBench":
        return f"commonEffects.searchBasicToBench(this, store, state, effect).use(effect, {a[0] if a else 1})"
    if name in ("attackCost", "noop", "continuousStatic"):
        return "/* structural */ state"
    if name == "selfDamage" or name == "recoil":
        return f"commonEffects.selfDamage(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "discardEnergySelf":
        return f"commonEffects.discardEnergySelf(this, store, state, effect).use(effect, {a[0] if a else 1})"
    if name == "discardEnergyDefending":
        return f"commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, {a[0] if a else 1})"
    if name == "attachBasicFromDiscard":
        return f"commonEffects.attachBasicFromDiscard(this, store, state, effect).use(effect, {a[0] if a else 1})"
    if name == "switchSelf":
        return "commonEffects.switchSelf(this, store, state, effect).use(effect)"
    if name == "gustOpponent":
        return "commonEffects.gustOpponent(this, store, state, effect).use(effect)"
    if name == "millOpponent":
        return f"commonEffects.millOpponent(this, store, state, effect).use(effect, {a[0] if a else 1})"
    if name == "millSelf":
        return f"commonEffects.millSelf(this, store, state, effect).use(effect, {a[0] if a else 1})"
    if name == "specialDefending":
        cond = (a[0] if a else "CONFUSED").upper()
        return f"commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.{cond})"
    if name == "poisonDefending":
        return "commonEffects.poisonDefending(this, store, state, effect).use(effect)"
    if name == "specialBoth":
        cond = (a[0] if a else "CONFUSED").upper()
        return f"commonEffects.specialBoth(this, store, state, effect).use(effect, SpecialCondition.{cond})"
    if name == "flipTimesDamage":
        return f"commonEffects.flipTimesDamage(this, store, state, effect).use(effect, {a[0] if a else 1}, {a[1] if len(a)>1 else 10})"
    if name == "cantAttackNextTurn":
        return "commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect)"
    if name == "cantAttackOpponentNextTurn":
        return "commonEffects.cantAttackOpponentNextTurn(this, store, state, effect).use(effect)"
    if name == "preventDamageNextTurn":
        return "commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect)"
    if name == "reduceDamageNextTurn":
        return f"commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, {a[0] if a else 20})"
    if name == "cantRetreatNextTurn":
        return "commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect)"
    if name == "damageOneBench" or name == "damageDamagedOpponent":
        return f"commonEffects.damageOneOpponent(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "damageTwoBench" or name == "spreadTwoBench":
        return f"commonEffects.damageTwoOpponentBench(this, store, state, effect).use(effect, {a[0] if a else 20})"
    if name == "spreadAllOpponent":
        return f"commonEffects.damageAllOpponent(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "spreadBothBench":
        return f"commonEffects.damageAllBench(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "damageOwnBench":
        return f"commonEffects.damageOwnBench(this, store, state, effect).use(effect, {a[0] if a else 20})"
    if name == "putDamageCounters":
        return f"commonEffects.putCountersDefending(this, store, state, effect).use(effect, {a[0] if a else 1})"
    if name == "discardOpponentHand":
        return f"commonEffects.discardOpponentHand(this, store, state, effect).use(effect, {a[0] if a else 1})"
    if name == "discardFromHand":
        return f"commonEffects.discardFromHand(this, store, state, effect).use(effect, {a[0] if a else 1})"
    if name == "scoopUpSelf":
        return "commonEffects.scoopUpSelf(this, store, state, effect).use(effect)"
    if name == "bonusPerSelfDamageCounter":
        n = a[0] if a else "10"
        return f"commonEffects.bonusDamagePer(this, store, state, effect).use(effect, {n}, Math.floor(effect.player.active.damage / 10))"
    if name == "bonusPerEnergySelf":
        return f"commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "damageTimesEnergySelf":
        return f"commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, {a[0] if a else 20})"
    if name == "selfReduceDamageNextTurn":
        return f"commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, {a[0] if a else 20})"
    if name == "gxOncePerGame":
        return "commonEffects.gxOncePerGame(this, store, state, effect).use(effect)"
    if name == "plusPowerMarker" or name == "bonusDamage":
        return f"commonEffects.plusPower(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "energyTrans":
        return "commonEffects.energyTrans(this, store, state, effect).use(effect)"
    if name == "searchEnergyToSelf":
        return f"commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, {a[0] if a else 1})"
    if name == "ignoreResistance" or name == "ignoreWeakness" or name == "ignoreAllEffects":
        return "commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect)"
    if name == "flipHeadsDiscardEnergyOpponent":
        return "commonEffects.flipHeadsDiscardEnergyOpponent(this, store, state, effect).use(effect)"
    if name == "flipUntilTailsTimes":
        return f"commonEffects.flipUntilTailsDamage(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "peekOpponentHand":
        return "commonEffects.peekOpponentHand(this, store, state, effect).use(effect)"
    if name == "spreadBenchDamage":
        return f"commonEffects.damageAllBench(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "damageTimesSelfCounters":
        return f"commonEffects.damageTimesSelfCounters(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "healSelfAfterAttack":
        return f"commonEffects.healSelfAfterAttack(this, store, state, effect).use(effect, {a[0] if a else 0})"
    if name == "bonusPerDefendingDamageCounter":
        return f"commonEffects.bonusPerDefendingDamageCounter(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "bonusPerOwnBench":
        return f"commonEffects.bonusPerOwnBench(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "bonusPerOpponentBench" or name == "bonusPerOpponentBenchTimes":
        return f"commonEffects.bonusPerOpponentBench(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "damageTimesPokemonInPlay":
        return f"commonEffects.damageTimesPokemonInPlay(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "bonusPerPrize":
        return f"commonEffects.bonusPerPrize(this, store, state, effect).use(effect, {a[0] if a else 10})"
    if name == "clearSpecialConditions":
        return "commonEffects.clearSpecialConditions(this, store, state, effect).use(effect)"
    if name == "putCountersEachOpponent":
        return f"commonEffects.putCountersEachOpponent(this, store, state, effect).use(effect, {a[0] if a else 1})"
    if name == "putDamageCounters":
        return f"commonEffects.putCountersDefending(this, store, state, effect).use(effect, {a[0] if a else 1})"
    if name == "ascension":
        return "commonEffects.ascension(this, store, state, effect).use(effect)"
    if name == "discardRandomOpponentHand":
        return f"commonEffects.discardOpponentHand(this, store, state, effect).use(effect, {a[0] if a else 1})"
    return f"commonEffects.runAttackOp(this, store, state, effect).use(effect, {ts_str(op)})"


def map_op_trainer(op: str) -> str:
    name, *args = op.split(":")
    a = args
    if name == "draw":
        return f"commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, {a[0] if a else 1})"
    if name == "discardHandDraw":
        return f"commonEffects.discardHandDraw(this, store, state, effect).playCard(effect as TrainerEffect, {a[0] if a else 7})"
    if name in ("heal", "healCounter"):
        n = a[0] if a else "20"
        if name == "healCounter":
            n = f"{n} * 10"
        return f"commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, {n})"
    if name == "healEachPokemon":
        return f"commonEffects.healEachPokemon(this, store, state, effect).playCard(effect as TrainerEffect, {a[0] if a else 10})"
    if name in ("searchAnyToHand", "searchPokemonToHand", "searchTrainerToHand"):
        return f"commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, {a[0] if a else 1})"
    if name == "searchEnergyToHand":
        return f"commonEffects.searchEnergyToHand(this, store, state, effect).playCard(effect as TrainerEffect, {a[0] if a else 1})"
    if name == "switchActive" or name == "switchSelf":
        return "commonEffects.switchSelfTrainer(this, store, state, effect).playCard(effect as TrainerEffect)"
    if name == "gustOpponent":
        return "commonEffects.gustOpponentTrainer(this, store, state, effect).playCard(effect as TrainerEffect)"
    if name == "shuffleOpponentDeck":
        return "commonEffects.shuffleOpponentDeck(this, store, state, effect).playCard(effect as TrainerEffect)"
    if name == "recoverFromDiscard":
        return f"commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, {a[0] if a else 1})"
    if name == "drawUntilHand":
        return f"commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, {a[0] if a else 6})"
    if name == "bothDraw":
        return f"commonEffects.bothDraw(this, store, state, effect).playCard(effect as TrainerEffect, {a[0] if a else 3})"
    if name == "discardOpponentHand":
        return f"commonEffects.discardOpponentHandTrainer(this, store, state, effect).playCard(effect as TrainerEffect, {a[0] if a else 1})"
    if name == "discardFromHand":
        return f"commonEffects.discardFromHandTrainer(this, store, state, effect).playCard(effect as TrainerEffect, {a[0] if a else 1})"
    if name in ("noop", "continuousStatic"):
        return "/* structural */ state"
    return f"commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, {ts_str(op)})"


COND_ENUM = {
    "ASLEEP": "ASLEEP",
    "CONFUSED": "CONFUSED",
    "CONFUSION": "CONFUSED",
    "PARALYZED": "PARALYZED",
    "PARALYSIS": "PARALYZED",
    "POISONED": "POISONED",
    "POISON": "POISONED",
    "BURNED": "BURNED",
    "BURN": "BURNED",
}

# Ops that are always-on (re-applied via BetweenTurnsEffect).
CONTINUOUS_POWER_OPS = {
    "reduceDamageSelf",
    "preventEffectsSelf",
    "preventEffectsMarker",
    "roughSkin",
    "poisonPoint",
    "noRetreatCost",
    "noTrainers",
    "noEvolution",
    "noPowers",
    "moreRetreatCostOpponent",
    "immuneToSpecial",
    "halfDamageTaken",
    "plusPowerMarker",
    "plusPrize",
    "noWeakness",
    "healDouble",
    "toolSlots",
    "attackTwice",
    "dualType",
    "attackGate",
    "moreAttackCostOpponent",
    "noStadium",
    "cantRetreatPoisoned",
    "auraReduceDamage",
    "auraPreventEffects",
    "auraNoRetreatCost",
    "auraPlusDamage",
    "auraProtectBench",
    "auraCantRetreatOpponent",
    "continuousStatic",
}


def is_continuous_op(op: str) -> bool:
    return op.split(":")[0] in CONTINUOUS_POWER_OPS


def emit_pokemon(p: dict) -> str:
    cn = class_name(p["name"], p["set"], p.get("number") or "")
    hp = p.get("hp") or 0
    text = ts_str(p.get("name") or "")
    full = ts_str(p.get("fullName") or "")
    name = ts_str(p.get("name") or "")
    set_code = ts_str(p.get("set") or "")
    attacks = p.get("attacks") or []
    powers = p.get("powers") or []

    uses_special = any(
        "SpecialCondition" in map_op_attack(op)
        for a in attacks for op in (a.get("ops") or [])
    ) or any(
        "SpecialCondition" in map_op_power(op)
        for w in powers for op in (w.get("ops") or [])
    )

    atk_fields = ",\n".join(
        f"      {{ name: {ts_str(a.get('name') or '')}, cost: [], damage: {ts_str(a.get('damage') or '')}, text: {ts_str(a.get('text') or '')} }}"
        for a in attacks
    )
    pow_fields = ",\n".join(
        f"      {{ name: {ts_str(w.get('name') or '')}, powerType: PowerType.ABILITY, text: {ts_str(w.get('text') or '')}, useWhenInPlay: true }}"
        for w in powers
    )

    calls = []
    for i, a in enumerate(attacks):
        for op in a.get("ops") or []:
            if op in ("noop",):
                continue
            body = map_op_attack(op)
            calls.append(
                f"    if (effect instanceof AttackEffect && effect.attack === this.attacks[{i}]) {{\n"
                f"      return {body};\n"
                f"    }}"
            )
    for i, w in enumerate(powers):
        for op in w.get("ops") or []:
            if op in ("noop",):
                continue
            body = map_op_power(op)
            calls.append(
                f"    if (effect instanceof PowerEffect && effect.power === this.powers[{i}]) {{\n"
                f"      return {body};\n"
                f"    }}"
            )
            if is_continuous_op(op) and op.split(":")[0] != "continuousStatic":
                # Re-apply markers every between-turns while this Pokemon is in play.
                calls.append(
                    f"    if (effect instanceof BetweenTurnsEffect) {{\n"
                    f"      return commonEffects.refreshPowerAura(this, store, state, effect.player, {ts_str(op)});\n"
                    f"    }}"
                )

    reduce_body = "\n".join(calls) if calls else "    /* no scripted effect */"
    powers_block = (
        "  public powers: Power[] = [\n" + pow_fields + "\n  ];"
        if powers else "  public powers: Power[] = [];"
    )
    attacks_block = (
        "  public attacks: Attack[] = [\n" + atk_fields + "\n  ];"
        if attacks else "  public attacks: Attack[] = [];"
    )

    # Only import what is used
    used_common = "commonEffects" in (reduce_body or "") or any(
        "commonEffects" in (map_op_attack(op) if i is not None else "")
        for i, a in enumerate(attacks) for op in (a.get("ops") or [])
    )
    uses_attack = "AttackEffect" in (reduce_body or "")
    uses_power = "PowerEffect" in (reduce_body or "")
    uses_between = "BetweenTurnsEffect" in (reduce_body or "")

    imports: list[str] = ["Effect", "State", "StoreLike"]
    if uses_attack:
        imports.append("AttackEffect")
    if uses_power:
        imports.append("PowerEffect")
    if uses_between:
        imports.append("BetweenTurnsEffect")
    imports += ["Attack", "CardType", "PokemonCard", "Power", "PowerType", "Stage", "Weakness", "Resistance"]
    if uses_special:
        imports.append("SpecialCondition")
    import_block = ",\n".join(f"  {n}" for n in imports)

    ce_import = (
        "import { commonEffects } from '../../../common';\n"
        if reduce_body and "commonEffects" in reduce_body else ""
    )

    return f"""import {{
{import_block},
}} from '@ptcg/common';
{ce_import}
export class {cn} extends PokemonCard {{
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = {ts_str(p.get('evolvesFrom') or '')};
  public hp: number = {hp};
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
{powers_block}
{attacks_block}
  public set: string = {set_code};
  public name: string = {name};
  public fullName: string = {full};
  public text: string = {text};

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {{
{reduce_body}
    return state;
  }}
}}
"""


def emit_trainer(p: dict) -> str:
    cn = class_name(p["name"], p["set"], p.get("number") or "")
    full = ts_str(p.get("fullName") or "")
    name = ts_str(p.get("name") or "")
    set_code = ts_str(p.get("set") or "")
    text = ts_str(p.get("text") or p.get("name") or "")
    ttype = {
        "Item": "TrainerType.ITEM",
        "Supporter": "TrainerType.SUPPORTER",
        "Stadium": "TrainerType.STADIUM",
        "Pokémon Tool": "TrainerType.TOOL",
        "Pokémon Tool F": "TrainerType.TOOL",
        "Technical Machine": "TrainerType.TOOL",
    }.get(p.get("trainerType") or "Item", "TrainerType.ITEM")

    calls = []
    for op in p.get("ops") or []:
        if op in ("noop",):
            continue
        body = map_op_trainer(op)
        calls.append(
            f"      return {body};"
        )
    reduce_body = (
        "    if (effect instanceof TrainerEffect && effect.trainerCard === this) {\n"
        + ("\n".join(calls) if calls else "      /* structural */")
        + "\n    }"
    )
    return f"""import {{
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
}} from '@ptcg/common';
import {{ commonEffects }} from '../../../common';

export class {cn} extends TrainerCard {{
  public trainerType: TrainerType = {ttype};
  public set: string = {set_code};
  public name: string = {name};
  public fullName: string = {full};
  public text: string = {text};

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {{
{reduce_body}
    return state;
  }}
}}
"""


def emit_energy(p: dict) -> str:
    cn = class_name(p["name"], p["set"], p.get("number") or "")
    full = ts_str(p.get("fullName") or "")
    name = ts_str(p.get("name") or "")
    set_code = ts_str(p.get("set") or "")
    text = ts_str(p.get("text") or "")
    etype = "EnergyType.SPECIAL" if p.get("energyType") == "SPECIAL" else "EnergyType.BASIC"
    amount = p.get("provideAmount") or 1
    return f"""import {{ CardType, EnergyCard, EnergyType }} from '@ptcg/common';

export class {cn} extends EnergyCard {{
  public energyType: EnergyType = {etype};
  public provides: CardType[] = [];
  public provideAmount = {amount};
  public set: string = {set_code};
  public name: string = {name};
  public fullName: string = {full};
  public text: string = {text};
}}
"""


def main() -> None:
    plans = json.loads(PLANS.read_text(encoding="utf-8"))
    if OUT.exists():
        for old in OUT.rglob("*.ts"):
            old.unlink()
    OUT.mkdir(parents=True, exist_ok=True)

    index_imports = []
    class_names = []
    used_classes: set[str] = set()

    for p in plans:
        code = (p.get("set") or "UNK").lower()
        slug = slugify(p.get("name") or "card")
        number = re.sub(r"[^0-9A-Za-z]", "", p.get("number") or "")
        if number:
            slug = f"{slug}-{number}"
        folder = OUT / code
        folder.mkdir(parents=True, exist_ok=True)
        cn = class_name(p.get("name") or "Card", p.get("set") or "", p.get("number") or "")
        base_cn = cn
        n = 2
        while cn in used_classes:
            cn = f"{base_cn}{n}"
            n += 1
        used_classes.add(cn)

        # unique filename if slug collides
        path = folder / f"{slug}.ts"
        fn_n = 2
        while path.exists():
            path = folder / f"{slug}-{fn_n}.ts"
            fn_n += 1

        st = p.get("superType")
        if st == "POKEMON":
            src = emit_pokemon(p)
        elif st == "TRAINER":
            src = emit_trainer(p)
        else:
            src = emit_energy(p)
        # fix class name if uniquified
        src = src.replace(f"class {base_cn} ", f"class {cn} ", 1)

        path.write_text(src, encoding="utf-8")
        rel = f"./{code}/{path.stem}"
        index_imports.append(f"import {{ {cn} }} from '{rel}';")
        class_names.append(cn)

    index_ts = (
        "import { Card } from '@ptcg/common';\n\n"
        + "\n".join(index_imports)
        + "\n\nexport function buildAllGeneratedCards(): Card[] {\n"
        + "  const cards: Card[] = [];\n"
        + "\n".join(f"  cards.push(new {cn}());" for cn in class_names)
        + "\n  return cards;\n}\n"
        + "\nexport const allGeneratedCards: Card[] = buildAllGeneratedCards();\n"
    )
    (OUT / "index.ts").write_text(index_ts, encoding="utf-8")
    print("generated", len(plans), "card files under", OUT)


if __name__ == "__main__":
    main()
