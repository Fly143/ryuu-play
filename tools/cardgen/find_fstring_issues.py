"""Find and help fix f-strings with backslashes in expressions (Py3.11)."""
from __future__ import annotations

import re
from pathlib import Path

p = Path("tools/cardgen/generate.py")
lines = p.read_text(encoding="utf-8").splitlines()
for i, line in enumerate(lines, 1):
    if "f\"" in line or "f'" in line:
        if re.search(r"re\.(search|match|findall|sub|fullmatch)\(", line) or "r'" in line or 'r"' in line:
            print(f"{i}: {line}")
