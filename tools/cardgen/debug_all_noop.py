import json
import sys
from pathlib import Path

sys.path.insert(0, "tools/cardgen")
from generate import match_trainer, match_power, strip_rule_prefix, norm_text

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))
n = 0
for p in plans:
    text = p.get("text") or ""
    ops = p.get("ops") or []
    if ops and ops != ["noop"]:
        continue
    st = strip_rule_prefix(norm_text(text).lower())
    if not st or len(st) < 20:
        continue
    if n >= 15:
        break
    print("NAME", p.get("fullName"), "|", p.get("superType"))
    print(" ST ", st[:120])
    print(" MT ", match_trainer(text, [], p.get("name") or ""))
    print(" MP ", match_power(text))
    n += 1
