import json
from pathlib import Path
import sys
sys.path.insert(0, "tools/cardgen")
from generate import match_trainer, strip_rule_prefix, norm_text

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))
# find trainer with supporter rule that is metadata or noop
n = 0
for p in plans:
    if p.get("superType") != "TRAINER":
        continue
    text = p.get("text") or ""
    ops = p.get("ops") or []
    if "only one supporter" in text.lower() and len(text) > 80:
        print("COV", p.get("coverage"), "ops", ops)
        print("TEXT", text[:140])
        print("strip", strip_rule_prefix(norm_text(text).lower())[:100])
        print("match", match_trainer(text, [], p.get("name") or ""))
        print()
        n += 1
        if n >= 6:
            break
print("total sample", n)
