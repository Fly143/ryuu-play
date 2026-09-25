"""Cards with real field calls AND leftover noop/structural ops."""
from __future__ import annotations

import collections
import json
from pathlib import Path

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))

partial = []
stuck = collections.Counter()
for p in plans:
    entries = []
    for a in p.get("attacks") or []:
        entries.append(("A", a.get("ops") or [], a.get("text") or ""))
    for w in p.get("powers") or []:
        entries.append(("P", w.get("ops") or [], w.get("text") or ""))
    if p.get("superType") == "TRAINER":
        entries.append(("T", p.get("ops") or [], p.get("text") or ""))

    all_ops = []
    for _, ops, _ in entries:
        all_ops.extend(ops)
    bases = {o.split(":")[0] for o in all_ops if o}
    real = bases - {"noop", "continuousStatic", "attackCost"}
    leftover = bases & {"noop", "continuousStatic", "attackCost"}
    if real and leftover:
        partial.append((p.get("fullName"), p.get("superType"), entries))
        for b in leftover:
            stuck[b] += 1

print("partial cards", len(partial))
print("leftover kinds", dict(stuck))
print("\n=== samples ===")
n = 0
for name, st, entries in partial:
    if n >= 12:
        break
    print(name, st)
    for kind, ops, text in entries:
        bases = {o.split(":")[0] for o in ops if o}
        if bases & {"noop", "continuousStatic", "attackCost"}:
            print(f"  {kind} {ops} | {text[:90]}")
    n += 1
