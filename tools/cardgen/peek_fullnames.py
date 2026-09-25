import json
from pathlib import Path

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))
needle = "take 1 more prize card"
for p in plans:
    for w in p.get("powers") or []:
        t = w.get("text") or ""
        if needle in t.lower():
            print(p.get("fullName"), "|", w.get("ops"), "|", t[:70])
print("--- abilities ---")
needle = "abilities done to this pokémon"
for p in plans:
    for w in p.get("powers") or []:
        t = w.get("text") or ""
        if needle in t.lower():
            print(p.get("fullName"), "|", w.get("ops"), "|", t[:70])
