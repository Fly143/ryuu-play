from pathlib import Path

g = Path("tools/cardgen/generate.py").read_text(encoding="utf-8").splitlines()
for i, l in enumerate(g, 1):
    if l.startswith("def "):
        last_def = (i, l)
    if i == 2672:
        print("function containing 2672:", last_def)
        break

print("--- matchers for as often as you like ---")
for i, l in enumerate(g, 1):
    if "as often as you like" in l or "as often" in l:
        for j in range(max(1, i - 1), min(len(g), i + 6) + 1):
            print(f"{j}: {g[j-1]}")
        print()
