from pathlib import Path

e = Path("packages/sets/src/common/effect-ops.ts").read_text(encoding="utf-8")
for name in ("shuffleDraw", "discardHandDraw", "bothShuffleDraw", "shuffleHandToBottomDraw"):
    i = e.find(f"case '{name}'")
    print(f"==== {name} @ {i} ====")
    print(e[i : i + 450])
    print()
