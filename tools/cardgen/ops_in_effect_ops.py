"""List op names handled inside effect-ops.ts."""
from __future__ import annotations

import re
from pathlib import Path

t = Path("packages/sets/src/common/effect-ops.ts").read_text(encoding="utf-8")
names = set(re.findall(r"=== '([A-Za-z][A-Za-z0-9]*)'", t))
names.update(re.findall(r"case '([A-Za-z][A-Za-z0-9]*)':", t))
names.update(re.findall(r"startsWith\('([A-Za-z][A-Za-z0-9]*)", t))
print("unique eq/case/starts", len(names))
for n in sorted(names):
    print(n)
print("--- exports ---")
for m in re.finditer(r"export function (\w+)", t):
    print(m.group(1), m.start())
