import json
from pathlib import Path

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))

def iter_entries(p):
    for a in p.get("attacks") or []:
        yield "A", a.get("ops") or [], a.get("text") or a.get("name") or ""
    for w in p.get("powers") or []:
        yield "P", w.get("ops") or [], w.get("text") or w.get("name") or ""
    if p.get("ops") or p.get("text"):
        yield "T", p.get("ops") or [], p.get("text") or p.get("name") or ""

needles = [
    "take 1 more prize",
    "abilities done to this",
    "may have up to 2",
    "as often as you like",
]
for needle in needles:
    print(f"\n==== {needle} ====")
    kinds = {}
    n = 0
    for p in plans:
        for kind, ops, text in iter_entries(p):
            if needle in text.lower():
                bases = tuple(sorted({o.split(":")[0] for o in ops})) if ops else ("EMPTY",)
                kinds[bases] = kinds.get(bases, 0) + 1
                if n < 6:
                    print(kind, ops, "|", text[:85])
                    n += 1
    print("by-ops", kinds)
