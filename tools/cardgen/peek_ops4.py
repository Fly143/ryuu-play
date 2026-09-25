from pathlib import Path

e = Path("packages/sets/src/common/effect-ops.ts").read_text(encoding="utf-8")
for name in ("oncePerTurnAttachFromHand", "attachBasicFromDiscard", "attachBasicFromDiscardToBench"):
    i = e.find(f"case '{name}'")
    print(f"==== {name} @ {i} ====")
    print(e[i : i + 550])
    print()

# prize related in whole common
import os
root = Path("packages/common/src")
for p in root.rglob("*.ts"):
    t = p.read_text(encoding="utf-8", errors="ignore")
    if "prize" in t.lower() and ("take" in t.lower() or "PrizeCard" in t or "prizes" in t):
        if p.name.endswith(".spec.ts"):
            continue
        print("file", p)
