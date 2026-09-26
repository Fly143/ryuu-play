"""More remaining unique texts - trainers only."""
from __future__ import annotations

import json
from pathlib import Path

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))
seen = set()
n = 0
for p in plans:
    if p.get("superType") != "TRAINER":
        continue
    ops = p.get("ops") or []
    text = p.get("text") or ""
    bases = {o.split(":")[0] for o in ops if o}
    if not (bases & {"noop", "continuousStatic", "attackCost"}):
        continue
    key = text[:70]
    if key in seen:
        continue
    seen.add(key)
    print(f"{ops} | {text[:130]}")
    n += 1
    if n >= 40:
        break
print("unique trainer leftovers", len(seen))
