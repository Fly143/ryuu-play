import json
import sys
from pathlib import Path

sys.path.insert(0, "tools/cardgen")
from generate import match_trainer, strip_rule_prefix, norm_text

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))
n = 0
for p in plans:
    text = p.get("text") or ""
    ops = p.get("ops") or []
    if ops != ["noop"] and ops:
        continue
    if "supporter" not in text.lower() and "item cards" not in text.lower() and "stadium" not in text.lower():
        continue
    if n >= 12:
        break
    st = strip_rule_prefix(norm_text(text).lower())
    print("NAME", p.get("fullName"))
    print(" ST ", st[:130])
    print(" M  ", match_trainer(text, [], p.get("name") or ""))
    n += 1
