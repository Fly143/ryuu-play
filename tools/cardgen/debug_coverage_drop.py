import json
from pathlib import Path
import sys
sys.path.insert(0, "tools/cardgen")
from generate import match_trainer, match_power, strip_rule_prefix, norm_text

plans = json.loads(Path("packages/sets/src/port/plans.json").read_text(encoding="utf-8"))
cov = {}
for p in plans:
    cov[p.get("coverage")] = cov.get(p.get("coverage"), 0) + 1
print("coverage", cov)

# find trainers that are metadata but strip+match should work
print("\n--- metadata trainers where strip leaves draw/search ---")
n = 0
for p in plans:
    if p.get("coverage") != "metadata":
        continue
    text = p.get("text") or ""
    ops = p.get("ops") or []
    if p.get("superType") == "TRAINER" and ("supporter" in text.lower() or "item cards" in text.lower()):
        st = strip_rule_prefix(norm_text(text).lower())
        m = match_trainer(text, [], p.get("name") or "")
        if m and m != ["noop"] and m != []:
            print("WEIRD", p.get("fullName"), "match", m, "stored", ops, "cov", p.get("coverage"))
            n += 1
        elif (not m or m == ["noop"]) and any(k in st for k in ("draw", "search", "shuffle", "discard", "heal", "attach")):
            print("MISSED", p.get("fullName"))
            print("  stripped:", st[:100])
            print("  match:", m, "stored:", ops)
            n += 1
        if n >= 12:
            break

print("\n--- powers metadata with simple text ---")
n = 0
for p in plans:
    if p.get("coverage") != "metadata":
        continue
    for w in p.get("powers") or []:
        text = w.get("text") or ""
        ops = w.get("ops") or []
        if len(text) < 100 and text:
            print(p.get("fullName"), "ops", ops, "|", text[:80])
            n += 1
            if n >= 10:
                break
    if n >= 10:
        break
