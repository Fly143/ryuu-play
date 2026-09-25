import json
import sys
from pathlib import Path

sys.path.insert(0, "tools/cardgen")
from generate import match_trainer, match_power, strip_rule_prefix, norm_text

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))
n = 0
for p in plans:
    if p.get("superType") == "ENERGY":
        continue
    text = p.get("text") or ""
    ops = p.get("ops") or []
    powers_ops = []
    atk_ops = []
    for w in p.get("powers") or []:
        powers_ops.extend(w.get("ops") or [])
    for a in p.get("attacks") or []:
        atk_ops.extend(a.get("ops") or [])
    all_ops = ops + powers_ops + atk_ops
    bases = {o.split(":")[0] for o in all_ops if o}
    if bases and bases - {"noop"}:
        continue
    # skip pure rule boxes
    st = strip_rule_prefix(norm_text(text or " ").lower())
    for w in p.get("powers") or []:
        st = st or strip_rule_prefix(norm_text(w.get("text") or " ").lower())
    if not st or len(st) < 15:
        continue
    if "rule:" in st or "when a pok" in st and "takes 2 prize" in st:
        continue
    if n >= 20:
        break
    print("NAME", p.get("fullName"), "|", p.get("superType"))
    # show power/attack texts if trainer text empty
    if p.get("superType") == "POKEMON":
        for w in p.get("powers") or []:
            print("  P", (w.get("text") or "")[:100])
        for a in p.get("attacks") or []:
            if (a.get("text") or "").strip():
                print("  A", (a.get("text") or "")[:100])
    else:
        print(" ST ", st[:120])
        print(" MT ", match_trainer(text, [], p.get("name") or ""))
    n += 1
