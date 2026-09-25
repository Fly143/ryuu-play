import json
from pathlib import Path

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))

def iter_entries(p):
    for a in p.get("attacks") or []:
        yield "A", a.get("ops") or [], a.get("text") or ""
    for w in p.get("powers") or []:
        yield "P", w.get("ops") or [], w.get("text") or ""
    if p.get("ops"):
        yield "T", p.get("ops") or [], p.get("text") or ""

for needle in ("take 1 more prize", "abilities done to"):
    print(f"\n==== NOOP {needle} ====")
    seen = set()
    for p in plans:
        for kind, ops, text in iter_entries(p):
            if needle in text.lower() and ops == ["noop"]:
                key = text[:120]
                if key not in seen:
                    seen.add(key)
                    print(kind, "|", text[:160])
