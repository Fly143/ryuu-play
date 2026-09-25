import json
from collections import Counter

plans = json.load(open("packages/sets/src/port/plans.json", encoding="utf-8"))
seen = set()
texts = []
for p in plans:
    for a in p.get("attacks") or []:
        t = a.get("text") or ""
        if t and (not a.get("ops") or a["ops"] in (["noop"], [])) and t not in seen:
            seen.add(t)
            texts.append(("A", t))
    for w in p.get("powers") or []:
        t = w.get("text") or ""
        if t and (not w.get("ops") or w["ops"] == ["noop"]) and t not in seen:
            seen.add(t)
            texts.append(("P", t))
    if p["superType"] == "TRAINER" and p.get("text"):
        t = p["text"]
        if t and (not p.get("ops") or p.get("ops") == ["noop"]) and t not in seen:
            seen.add(t)
            texts.append(("T", t))

print("unique", len(texts))
phrases = [
    "flip a coin. if heads",
    "flip a coin. if tails",
    "if the defending",
    "if your opponent",
    "does 10 more damage",
    "does 20 more damage",
    "does 30 more damage",
    "does 10 damage times",
    "does 20 damage times",
    "search your deck",
    "discard an energy",
    "discard the top",
    "attach",
    "move",
    "put 1 damage",
    "put 2 damage",
    "heal",
    "switch 1",
    "choose 1 of",
    "choose up to",
    "your opponent discards",
    "your opponent shuffles",
    "during your next turn",
    "during your opponent",
    "this attack does 10",
    "this attack does 20",
    "this attack does 30",
    "remove all",
    "remove 1 damage",
    "return this",
    "both this",
    "as often as you like",
    "once during your turn",
    "when you play",
    "whenever",
]
c = Counter()
s = {}
for k, t in texts:
    tl = t.lower()
    key = "other"
    for ph in phrases:
        if tl.startswith(ph):
            key = ph
            break
    c[key] += 1
    if key not in s:
        s[key] = (k, t[:120])
for k, v in c.most_common(25):
    print("%4d  %-30s  %s %s" % (v, k, s[k][0], s[k][1][:90]))
