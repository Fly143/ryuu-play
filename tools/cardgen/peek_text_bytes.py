import json
from pathlib import Path

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))
for name in ("Lugia-EX PHF 102", "Dustox AOR 8", "Mega Clefable ex POR 31", "Volcarona BKT 18"):
    for p in plans:
        if p.get("fullName") == name:
            for w in p.get("powers") or []:
                t = w.get("text") or ""
                print(name, "ops", w.get("ops"))
                print(" repr:", repr(t[:120]))
                print(" lower match prize", "take 1 more prize" in t.lower())
                print(" lower match abil", "abilities done to this" in t.lower())
                print()
