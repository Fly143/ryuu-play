"""Summarize apply*Op signatures and fallbacks."""
from __future__ import annotations

import re
from pathlib import Path

t = Path("packages/sets/src/common/effect-ops.ts").read_text(encoding="utf-8")
for name in ("applyAttackOp", "applyTrainerOp", "applyPowerOp", "hasEffectOps", "applyContinuousAura"):
    i = t.find(f"export function {name}")
    print("====", name, "====")
    print(t[i : i + 500])
    print()
