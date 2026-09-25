import json
from collections import Counter

plans = json.load(open("packages/sets/src/port/plans.json", encoding="utf-8"))
c = Counter()
s = {}
for p in plans:
    texts = []
    for a in p.get("attacks") or []:
        if a.get("ops") == ["noop"] and a.get("text"):
            texts.append(a["text"])
    for w in p.get("powers") or []:
        if w.get("ops") == ["noop"] and w.get("text"):
            texts.append(w["text"])
    if p.get("superType") == "TRAINER" and p.get("ops") == ["noop"] and p.get("text"):
        texts.append(p["text"])
    for t in texts:
        tl = t.lower()
        key = None
        for ph, pat in [
            ("copy_attack", "use it as this attack"),
            ("swap_counters", "switch all damage counters"),
            ("spread", "to each of"),
            ("bench_damage", "benched pok"),
            ("more_for_each", "more damage for each"),
            ("if_type", "if the defending pok"),
            ("asleep_self", "is now asleep"),
            ("from_discard_to_bench", "from your discard pile onto your bench"),
            ("from_discard_to_hand", "from your discard pile into your hand"),
            ("evolve", "evolv"),
            ("energy_attach", "attach"),
            ("hand_attack", "from your hand"),
            ("opponent_hand", "opponent's hand"),
            ("prize", "prize"),
            ("tool", "tool"),
            ("stadium", "stadium"),
            ("ability", "ability"),
            ("coin", "flip a coin"),
            ("damage_counters", "damage counter"),
            ("prevent", "prevent"),
            ("cant_", "can't"),
            ("during_", "during your"),
            ("search", "search"),
            ("draw", "draw"),
            ("discard", "discard"),
            ("heal", "heal"),
            ("switch", "switch"),
            ("put_", "put "),
        ]:
            if pat in tl:
                key = ph
                break
        if not key:
            key = "other"
        c[key] += 1
        if key not in s:
            s[key] = t[:120]

print("metadata cluster counts:")
for k, v in c.most_common():
    print("%5d  %-22s  %s" % (v, k, s[k][:90]))
print("total unmatched texts", sum(c.values()))
