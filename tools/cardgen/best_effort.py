"""Only return ops when the mapping is rules-accurate. Never fake coverage."""
from __future__ import annotations

import re
import unicodedata
from typing import Optional

COND = r"(asleep|confused|paralyzed|poisoned|burned|confusion|paralysis|poison|burn)"
WORDS = {"a": 1, "an": 1, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7}


def parse_count(s: str, default: int = 1) -> int:
    if s.isdigit():
        return int(s)
    return WORDS.get(str(s).lower(), default)


def norm_text(s: str) -> str:
    if not s:
        return ""
    s = unicodedata.normalize("NFKC", s)
    s = s.replace("’", "'").replace("‘", "'")
    s = s.replace("“", '"').replace("”", '"')
    s = s.replace("–", "-").replace("—", "-")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def best_effort_attack(text: str) -> Optional[list[str]]:
    """Return None when we cannot implement correctly."""
    return None


def best_effort_trainer(text: str) -> Optional[list[str]]:
    return None


def best_effort_power(text: str) -> Optional[list[str]]:
    t = norm_text(text).lower()
    if not t:
        return []
    ops: list[str] = []
    if re.search(r"as long as .{0,60}(is your active pok[eé]mon|is in play)", t):
        m = re.search(r"(\d+) less damage|reduced by (\d+)", t)
        if m:
            n = m.group(1) or m.group(2) or "20"
            ops.append(f"auraReduceDamage:{n}")
        elif "prevent all damage" in t or "prevent all effects" in t:
            ops.append("auraPreventEffects")
        elif "no retreat cost" in t:
            ops.append("auraNoRetreatCost")
    if not ops:
        return None
    return ops
