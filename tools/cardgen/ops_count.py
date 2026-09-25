import json
from collections import Counter

plans = json.load(open("packages/sets/src/port/plans.json", encoding="utf-8"))
ops = Counter()
for p in plans:
    for a in p.get("attacks") or []:
        for o in a.get("ops") or []:
            ops[o.split(":")[0]] += 1
    for w in p.get("powers") or []:
        for o in w.get("ops") or []:
            ops[o.split(":")[0]] += 1
    for o in p.get("ops") or []:
        ops[o.split(":")[0]] += 1

# ops that emit_cards currently maps to real fields vs stubs — just print all high-freq
for name, n in ops.most_common(80):
    print("%5d  %s" % (n, name))
print("TOTAL", len(ops))
