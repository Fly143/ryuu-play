import sys
sys.path.insert(0, "tools/cardgen")
from generate import match_power, norm_text

texts = [
    "If your opponent's Pokémon is Knocked Out by damage from an attack of this Pokémon, take 1 more Prize card.",
    "Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.",
]
for t in texts:
    print("INPUT", t[:60])
    print(" match_power", match_power(t))
    print(" match_power lower", match_power(t.lower()))
    print(" norm", match_power(norm_text(t)))
