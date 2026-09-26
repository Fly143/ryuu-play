"""Dump many remaining unique noop/continuousStatic texts for batch mapping."""
from __future__ import annotations

import collections
import json
from pathlib import Path

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))
seen = set()
n = 0
for p in plans:
    entries = []
    for a in p.get("attacks") or []:
        entries.append(("A", a.get("ops") or [], a.get("text") or ""))
    for w in p.get("powers") or []:
        entries.append(("P", w.get("ops") or [], w.get("text") or ""))
    if p.get("superType") == "TRAINER":
        entries.append(("T", p.get("ops") or [], p.get("text") or ""))
    for kind, ops, text in entries:
        bases = {o.split(":")[0] for o in ops if o}
        if not (bases & {"noop", "continuousStatic", "attackCost"}):
            continue
        key = (kind, (text or "")[:70])
        if key in seen:
            continue
        seen.add(key)
        print(f"{kind} {ops} | {text[:120]}")
        n += 1
        if n >= 80:
            break
    if n >= 80:
        break
print("unique shown", n)
