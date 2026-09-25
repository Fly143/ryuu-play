from pathlib import Path

e = Path("packages/sets/src/common/effect-ops.ts").read_text(encoding="utf-8").splitlines()
# find applyTrainerOp and applyPowerOp case blocks to insert near
for label, start_hint in (("applyTrainerOp", "export function applyTrainerOp"), ("applyPowerOp", "export function applyPowerOp")):
    idx = next(i for i, l in enumerate(e, 1) if start_hint in l)
    print(f"==== {label} starts line {idx} ====")
    # print first 40 lines of function
    for i in range(idx, min(idx + 50, len(e) + 1)):
        print(f"{i}: {e[i-1]}")
    print()
    # find a late case to insert before default
    for i in range(idx, min(idx + 400, len(e) + 1)):
        if e[i-1].strip().startswith("default:"):
            print(f"default at {i}")
            for j in range(i - 15, i + 3):
                print(f"{j}: {e[j-1]}")
            break
    print()
