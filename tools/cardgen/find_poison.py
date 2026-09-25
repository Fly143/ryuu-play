from pathlib import Path
g = Path("tools/cardgen/generate.py").read_text(encoding="utf-8").splitlines()
for i, l in enumerate(g, 1):
    if "can't be poisoned" in l:
        print("---", i)
        for j in range(max(1, i - 2), min(len(g), i + 5) + 1):
            print(f"{j}: {g[j-1]}")
