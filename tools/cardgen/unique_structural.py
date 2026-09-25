"""Unique texts still mapped to noop / continuousStatic / attackCost."""
from __future__ import annotations

import collections
import json
from pathlib import Path

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))

noop_texts: collections.Counter[str] = collections.Counter()
cs_texts: collections.Counter[str] = collections.Counter()
ac_texts: collections.Counter[str] = collections.Counter()

for p in plans:
    name = p.get("fullName") or ""
    entries = []
    for a in p.get("attacks") or []:
        entries.append((a.get("ops") or [], a.get("text") or a.get("name") or ""))
    for w in p.get("powers") or []:
        entries.append((w.get("ops") or [], w.get("text") or w.get("name") or ""))
    if p.get("ops"):
        entries.append((p.get("ops") or [], p.get("text") or p.get("name") or ""))
    for ops, text in entries:
        bases = {o.split(":")[0] for o in ops}
        if "noop" in bases and len(bases) == 1:
            noop_texts[text.strip() or "(empty)"] += 1
        elif not ops:
            # pure damage / no scripted effect — not a stub
            pass
        if "continuousStatic" in bases:
            cs_texts[text.strip() or "(empty)"] += 1
        if "attackCost" in bases:
            ac_texts[text.strip() or "(empty)"] += 1

print("noop unique texts", len(noop_texts), "total", sum(noop_texts.values()))
print("continuousStatic unique", len(cs_texts), "total", sum(cs_texts.values()))
print("attackCost unique", len(ac_texts), "total", sum(ac_texts.values()))
print("\n=== top noop texts ===")
for t, n in noop_texts.most_common(40):
    print(f"{n:4} | {t[:130]}")
print("\n=== top continuousStatic texts ===")
for t, n in cs_texts.most_common(25):
    print(f"{n:4} | {t[:130]}")
print("\n=== top attackCost texts ===")
for t, n in ac_texts.most_common(15):
    print(f"{n:4} | {t[:130]}")
