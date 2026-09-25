import json
from pathlib import Path

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))
n = 0
print("=== take 1 more prize ===")
for p in plans:
    entries = []
    for a in p.get("attacks") or []:
        if "take 1 more prize" in (a.get("text") or "").lower():
            entries.append(("A", a.get("ops"), (a.get("text") or "")[:90]))
    for w in p.get("powers") or []:
        if "take 1 more prize" in (w.get("text") or "").lower():
            entries.append(("P", w.get("ops"), (w.get("text") or "")[:90]))
    if "take 1 more prize" in (p.get("text") or "").lower():
        entries.append(("T", p.get("ops"), (p.get("text") or "")[:90]))
    for kind, ops, tx in entries:
        print(kind, ops, "|", tx)
        n += 1
        if n >= 15:
            break
    if n >= 15:
        break

print("\n=== prevent abilities ===")
n = 0
for p in plans:
    for w in p.get("powers") or []:
        t = (w.get("text") or "").lower()
        if "abilities done to" in t:
            print(w.get("ops"), "|", (w.get("text") or "")[:90])
            n += 1
            if n >= 10:
                break
    if n >= 10:
        break

print("\n=== continuousStatic sample ops ===")
n = 0
for p in plans:
    for w in p.get("powers") or []:
        ops = w.get("ops") or []
        if any((o or "").startswith("continuousStatic") for o in ops) or any(
            (o or "").startswith("aura") for o in ops
        ):
            print(ops, "|", (w.get("text") or "")[:90])
            n += 1
            if n >= 15:
                break
    if n >= 15:
        break
