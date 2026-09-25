"""Dump unique approx effect texts one per line for systematic implementation."""
import json
from collections import defaultdict

plans = json.load(open("packages/sets/src/port/plans.json", encoding="utf-8"))

# Only cards where some attack/power has approx=True
rows = []
for p in plans:
    for a in p.get("attacks") or []:
        if a.get("approx") and a.get("text"):
            rows.append(("ATK", a["name"], a["text"], a.get("ops") or []))
    for w in p.get("powers") or []:
        if w.get("approx") and w.get("text"):
            rows.append(("PW", w["name"], w["text"], w.get("ops") or []))
    if p.get("superType") == "TRAINER" and p.get("coverage") == "partial" and p.get("text"):
        # only if trainer used best_effort (ops look generic)
        ops = p.get("ops") or []
        if ops and set(ops) <= {"continuousStatic", "draw:1", "searchAnyToHand:1", "heal:30", "switchActive", "recoverFromDiscard:1"} or any(o.startswith("heal:") for o in ops):
            rows.append(("TRN", p["name"], p["text"], ops))

# unique by text
seen = {}
for kind, name, text, ops in rows:
    key = text.strip()
    if key not in seen:
        seen[key] = (kind, name, ops)

print("unique approx texts:", len(seen))
for i, (text, (kind, name, ops)) in enumerate(sorted(seen.items(), key=lambda x: x[0])[:80], 1):
    print("%4d [%s] %s" % (i, kind, text[:140].replace("\n", " ")))
