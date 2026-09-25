from pathlib import Path

g = Path("tools/cardgen/generate.py").read_text(encoding="utf-8").splitlines()
in_mt = False
for i, l in enumerate(g, 1):
    if l.startswith("def match_trainer"):
        in_mt = True
    elif l.startswith("def ") and in_mt:
        in_mt = False
    if in_mt and ("discard" in l.lower() or "return None" in l or "return []" in l):
        print(f"{i}: {l}")
