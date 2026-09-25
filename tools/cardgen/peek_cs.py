from pathlib import Path

g = Path("tools/cardgen/generate.py").read_text(encoding="utf-8").splitlines()
for i, l in enumerate(g, 1):
    if "continuousStatic" in l:
        lo = max(1, i - 6)
        hi = min(len(g), i + 2)
        print(f"----- around {i} -----")
        for j in range(lo, hi + 1):
            print(f"{j}: {g[j-1]}")
        print()
