import json
import sys
from pathlib import Path

sys.path.insert(0, "tools/cardgen")
from generate import build_plan, match_power, DATA

# find Dustox AOR card in source
src = DATA / "cards" / "en" / "aor.json"
if not src.exists():
    # try glob
    for p in (DATA / "cards" / "en").glob("*.json"):
        if "aor" in p.stem.lower() or "ancient" in p.name.lower():
            print("candidate", p)
    print("list", list((DATA / "cards" / "en").glob("*aor*")))
    print("list sample", list((DATA / "cards" / "en").glob("*.json"))[:5])
else:
    cards = json.loads(src.read_text(encoding="utf-8"))
    for card in cards:
        if (card.get("name") or "").startswith("Dustox"):
            print("SOURCE card", card.get("name"), card.get("id"))
            for ab in card.get("abilities") or []:
                print(" ability", ab.get("name"), "text repr", repr((ab.get("text") or "")[:100]))
                print(" match_power", match_power(ab.get("text") or ""))
            plan = build_plan(card, {"id": "aor", "name": "Ancient Origins", "ptcgoCode": "AOR"})
            print(" PLAN powers", plan.get("powers"))
