import json
from pathlib import Path

data = json.loads(Path("pokemon-tcg-data-master/cards/en/base1.json").read_text(encoding="utf-8"))
pika = [c for c in data if c.get("name") == "Pikachu"][0]
print("keys", sorted(pika.keys()))
print("dex", pika.get("nationalPokedexNumbers"))

g = Path("tools/cardgen/generate.py").read_text(encoding="utf-8")
print("has _dex_height", "_dex_height" in g)
print("has height key", '"height"' in g)

# test height function
import sys
sys.path.insert(0, "tools/cardgen")
from generate import _dex_height, _HEIGHTS
print("heights loaded", len(_HEIGHTS))
print("pikachu height", _dex_height(pika))
