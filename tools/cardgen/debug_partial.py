import json
import sys
from pathlib import Path

sys.path.insert(0, "tools/cardgen")
from generate import match_power, match_attack, match_trainer, norm_text

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))
n = 0
for p in plans:
    entries = []
    for a in p.get("attacks") or []:
        entries.append(("A", a.get("ops") or [], a.get("text") or "", a.get("damage") or ""))
    for w in p.get("powers") or []:
        entries.append(("P", w.get("ops") or [], w.get("text") or "", ""))
    if p.get("superType") == "TRAINER":
        entries.append(("T", p.get("ops") or [], p.get("text") or "", ""))

    all_ops = []
    for _, ops, _, _ in entries:
        all_ops.extend(ops)
    bases = {o.split(":")[0] for o in all_ops if o}
    real = bases - {"noop", "continuousStatic", "attackCost"}
    leftover = bases & {"noop", "continuousStatic", "attackCost"}
    if not (real and leftover):
        continue
    for kind, ops, text, dmg in entries:
        b = {o.split(":")[0] for o in ops if o}
        if not (b & {"noop", "continuousStatic", "attackCost"}):
            continue
        print(f"{p.get('fullName')} [{kind}] ops={ops}")
        print(f"  TEXT {text[:110]}")
        if kind == "P":
            print(f"  MP {match_power(text)}")
        elif kind == "A":
            print(f"  MA {match_attack(text, dmg)}")
        else:
            print(f"  MT {match_trainer(text, [], p.get('name') or '')}")
        n += 1
        if n >= 15:
            break
    if n >= 15:
        break
