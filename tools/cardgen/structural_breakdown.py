"""Break remaining /* structural */ stubs down by source op."""
from __future__ import annotations

import collections
import json
from pathlib import Path

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))
op_ctr: collections.Counter[str] = collections.Counter()
combo: collections.Counter[tuple[str, ...]] = collections.Counter()
for p in plans:
    ops: list[str] = []
    for a in p.get("attacks") or []:
        ops.extend(a.get("ops") or [])
    for w in p.get("powers") or []:
        ops.extend(w.get("ops") or [])
    ops.extend(p.get("ops") or [])
    structural_ops = [o for o in ops if o.split(":")[0] in ("noop", "continuousStatic", "attackCost")]
    for o in structural_ops:
        op_ctr[o.split(":")[0]] += 1
    if structural_ops:
        combo[tuple(sorted({o.split(":")[0] for o in structural_ops}))] += 1

print("structural op occurrences", dict(op_ctr))
print("combos", dict(combo))

print("\n--- continuousStatic samples ---")
n = 0
for p in plans:
    texts: list[tuple[str, str]] = []
    for a in p.get("attacks") or []:
        if any((o or "").startswith("continuousStatic") for o in (a.get("ops") or [])):
            texts.append(("A", a.get("text") or a.get("name") or ""))
    for w in p.get("powers") or []:
        if any((o or "").startswith("continuousStatic") for o in (w.get("ops") or [])):
            texts.append(("P", w.get("text") or w.get("name") or ""))
    if any((o or "").startswith("continuousStatic") for o in (p.get("ops") or [])):
        texts.append(("T", p.get("text") or p.get("name") or ""))
    for kind, tx in texts:
        print(kind, tx[:140])
        n += 1
        if n >= 20:
            break
    if n >= 20:
        break

print("\n--- attackCost samples ---")
n = 0
for p in plans:
    for a in p.get("attacks") or []:
        if any((o or "").startswith("attackCost") for o in (a.get("ops") or [])):
            print("A", (a.get("text") or a.get("name") or "")[:140])
            n += 1
            if n >= 12:
                break
    if n >= 12:
        break

print("\n--- noop-only cards (sample) ---")
n = 0
for p in plans:
    ops: list[str] = []
    for a in p.get("attacks") or []:
        ops.extend(a.get("ops") or [])
    for w in p.get("powers") or []:
        ops.extend(w.get("ops") or [])
    ops.extend(p.get("ops") or [])
    bases = {o.split(":")[0] for o in ops}
    if bases and bases <= {"noop"}:
        print(p.get("fullName"), "|", (p.get("text") or "")[:100])
        n += 1
        if n >= 8:
            break
