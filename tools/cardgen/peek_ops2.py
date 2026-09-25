from pathlib import Path
import re

e = Path("packages/sets/src/common/effect-ops.ts").read_text(encoding="utf-8")
for s in ["shuffleHand", "shuffleDraw", "prize", "Prize", "attachFromHand", "preventEffects", "bonusPrize", "takePrize"]:
    print(s, e.count(s))
print("--- cases ---")
for m in re.finditer(r"case '([^']+)':", e):
    name = m.group(1)
    if any(k in name.lower() for k in ("prize", "hand", "attach", "shuffle", "prevent")):
        print(name)
