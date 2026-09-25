import json
from pathlib import Path

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))
for p in plans:
    if "Dustox" in (p.get("fullName") or "") or "Dustox" in (p.get("name") or ""):
        print(p.get("fullName"), "id", p.get("id"), "set", p.get("set"), "num", p.get("number"))
        print("  powers", p.get("powers"))
        print("  attacks", [(a.get("name"), a.get("ops"), (a.get("text") or "")[:40]) for a in (p.get("attacks") or [])])
        print("  text", (p.get("text") or "")[:60])
