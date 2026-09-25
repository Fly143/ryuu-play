from pathlib import Path

g = Path("packages/common/src/store/effect-reducers/game-effect.ts").read_text(encoding="utf-8").splitlines()
print("===== game-effect.ts 135-165 =====")
for i in range(135, min(166, len(g) + 1)):
    print(f"{i}: {g[i-1]}")

e = Path("packages/sets/src/common/effect-ops.ts").read_text(encoding="utf-8").splitlines()
print("\n===== effect-ops.ts 725-780 =====")
for i in range(725, min(781, len(e) + 1)):
    print(f"{i}: {e[i-1]}")
