"""Ops still stubbed in card TS that effect-ops does NOT implement."""
from __future__ import annotations

import re
import collections
from pathlib import Path

# ops referenced in effect-ops
eo = Path("packages/sets/src/common/effect-ops.ts").read_text(encoding="utf-8")
eo_ops = set(re.findall(r"=== '([A-Za-z][A-Za-z0-9]*)'", eo))
eo_ops.update(re.findall(r"case '([A-Za-z][A-Za-z0-9]*)':", eo))
eo_ops.update(re.findall(r"startsWith\('([A-Za-z][A-Za-z0-9]*)", eo))

# stubs in cards
ctr: collections.Counter[str] = collections.Counter()
for p in Path("packages/sets/src/port/cards").rglob("*.ts"):
    if p.name == "index.ts":
        continue
    t = p.read_text(encoding="utf-8")
    for m in re.finditer(r"/\* ([^*]+) \*/ state", t):
        op = m.group(1).strip()
        base = op.split(":")[0]
        if base == "structural":
            continue
        ctr[op] += 1

print("total non-structural op stubs", sum(ctr.values()))
print("unique", len(ctr))
covered = 0
uncovered = 0
print("--- NOT in effect-ops ---")
for op, n in ctr.most_common():
    base = op.split(":")[0]
    if base in eo_ops:
        covered += n
    else:
        uncovered += n
        if n >= 2:
            print(f"{n:5} {op}")
print("covered-by-effect-ops stubs", covered)
print("truly-uncovered", uncovered)
print("--- structural base ops in effect-ops? ---")
for s in ["noop", "continuousStatic", "attackCost", "fossilBody", "pokedex", "rareCandy", "metronome", "copyAttack"]:
    print(s, s in eo_ops)
