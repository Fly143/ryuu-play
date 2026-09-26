from pathlib import Path
g = Path("tools/cardgen/generate.py").read_text(encoding="utf-8")
i = g.find('"superType": super_type')
print("idx", i)
print(g[i - 400 : i + 800])
