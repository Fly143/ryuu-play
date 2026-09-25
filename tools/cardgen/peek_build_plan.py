from pathlib import Path

g = Path("tools/cardgen/generate.py").read_text(encoding="utf-8")
i = g.find("def build_plan")
print(g[i : i + 3500])
