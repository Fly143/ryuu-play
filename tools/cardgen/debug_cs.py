import json
import sys
from pathlib import Path

sys.path.insert(0, "tools/cardgen")
from generate import match_power, norm_text

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))
seen = set()
n = 0
for p in plans:
    for w in p.get("powers") or []:
        ops = w.get("ops") or []
        if "continuousStatic" not in {o.split(":")[0] for o in ops}:
            continue
        text = w.get("text") or ""
        key = text[:80]
        if key in seen:
            continue
        seen.add(key)
        print(p.get("fullName"), "|", text[:110])
        print("  MP", match_power(text))
        n += 1
        if n >= 20:
            break
    if n >= 20:
        break
print("unique continuousStatic power texts", len(seen))
