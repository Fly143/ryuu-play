"""Honest completion metrics for the card port."""
from __future__ import annotations

import collections
import json
import re
from pathlib import Path

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))

cov = collections.Counter(p.get("coverage") for p in plans)
total = len(plans)

# Effect-text honesty: how many cards have all their effect text resolved
full_text = 0
partial_text = 0
meta_text = 0
empty_text = 0
noop_only = 0
real_ops = 0

for p in plans:
    texts = []
    op_lists = []
    for a in p.get("attacks") or []:
        texts.append(a.get("text") or "")
        op_lists.append(a.get("ops") or [])
    for w in p.get("powers") or []:
        texts.append(w.get("text") or "")
        op_lists.append(w.get("ops") or [])
    if p.get("ops") is not None and p.get("superType") == "TRAINER":
        texts.append(p.get("text") or "")
        op_lists.append(p.get("ops") or [])
    elif p.get("superType") == "TRAINER":
        texts.append(p.get("text") or "")
        op_lists.append(p.get("ops") or [])

    has_text = any(t.strip() for t in texts)
    if not has_text:
        empty_text += 1
        continue

    bases = set()
    for ops in op_lists:
        for o in ops:
            bases.add(o.split(":")[0])
    meaningful = {b for b in bases if b not in ("noop", "continuousStatic", "attackCost", "structural")}
    if not bases or (bases <= {"noop"} and has_text):
        meta_text += 1
    elif meaningful:
        real_ops += 1
        if "noop" in bases or "continuousStatic" in bases:
            partial_text += 1
        else:
            full_text += 1
    else:
        partial_text += 1

print("=== plan coverage field ===")
print(dict(cov), "total", total)
print(f"full {cov.get('full',0)} ({100*cov.get('full',0)/total:.1f}%)  metadata {cov.get('metadata',0)}  partial {cov.get('partial',0)}")

print("\n=== effect-text honesty (cards with any text) ===")
print("no effect text (vanilla damage/basic energy)", empty_text)
print("real field calls, all effects mapped", full_text)
print("real field calls, some still noop/structural", partial_text)
print("text present but only noop", meta_text)
print("cards with real ops", real_ops)

# stub density in generated TS
root = Path("packages/sets/src/port/cards")
field = structural = opstub = 0
for p in root.rglob("*.ts"):
    if p.name == "index.ts":
        continue
    t = p.read_text(encoding="utf-8")
    field += t.count("commonEffects.")
    structural += t.count("/* structural */")
    opstub += len(re.findall(r"/\* [^*]+ \*/ state", t))
print("\n=== generated TS ===")
print("field-calls", field, "structural", structural, "other op stubs", opstub)

# unique remaining
noop_u = cs_u = 0
noop_n = cs_n = 0
for p in plans:
    entries = []
    for a in p.get("attacks") or []:
        entries.append(a.get("ops") or [])
    for w in p.get("powers") or []:
        entries.append(w.get("ops") or [])
    if p.get("superType") == "TRAINER":
        entries.append(p.get("ops") or [])
    for ops in entries:
        bases = {o.split(":")[0] for o in ops}
        if bases == {"noop"}:
            noop_n += 1
        if "continuousStatic" in bases:
            cs_n += 1
print("noop op occurrences", noop_n, "continuousStatic", cs_n)

print("\n=== set load ===")
print("sets", len({p.get('set') for p in plans}), "cards", total)
