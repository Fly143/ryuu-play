from pathlib import Path
e = Path("packages/sets/src/common/effect-ops.ts").read_text(encoding="utf-8")
print("discardBench", e.count("case 'discardBench'"))
print("drawPerOpponentBench", e.count("drawPerOpponentBench"))
