"""Count unique effect signatures among approx cards — reprints share one implementation."""
import json
from collections import defaultdict

plans = json.load(open("packages/sets/src/port/plans.json", encoding="utf-8"))

# signature = (superType, attack texts joined, power texts joined, trainer text)
sig_map = defaultdict(list)

for p in plans:
    if p.get("coverage") != "partial":
        continue
    atk = " || ".join(f"{a.get('name')}|{a.get('text')}|{a.get('damage')}" for a in p.get("attacks") or [])
    pw = " || ".join(f"{w.get('name')}|{w.get('text')}" for w in p.get("powers") or [])
    sig = (p.get("superType"), atk, pw, p.get("text") or "")
    sig_map[sig].append(p["fullName"])

print("unique effect signatures:", len(sig_map))
print("cards covered:", sum(len(v) for v in sig_map.values()))
print()
print("top 30 unique effects by reprint count:")
for sig, names in sorted(sig_map.items(), key=lambda x: -len(x[1]))[:30]:
    st, atk, pw, text = sig
    preview = (text or atk or pw)[:100].replace("\n", " ")
    print("%4d  %-8s  %s" % (len(names), st, preview))
