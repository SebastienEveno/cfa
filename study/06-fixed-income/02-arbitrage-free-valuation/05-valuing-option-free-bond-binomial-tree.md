## Summary: Valuing an Option-Free Bond with a Binomial Tree (CFA Level II — Fixed Income)

---

### Core Verification Principle

> **Two arbitrage-free valuation methods must agree.**

For an **option-free bond**, valuing it via:
1. **Spot rate discounting** (each cash flow discounted at its own spot rate), and
2. **The calibrated binomial interest rate tree** (backward induction through the tree)

...must produce the **same price**, because both methods are arbitrage-free and the tree was specifically calibrated to reproduce the spot/par curve.

---

### Why This Matters

This is a **consistency check** on the binomial tree framework:
- If the tree is properly calibrated, it should price option-free bonds **identically** to direct spot-rate discounting
- This confirms the tree is genuinely **arbitrage-free** — not just an approximation
- This consistency is what allows the tree to be **trusted** when extended to bonds **with** embedded options (where spot-rate discounting alone won't work)

---

### Worked Example 1 — 4-Year, 2% Coupon Bond

**Setup**: Using the benchmark yield curve from Exhibit 2 and the corresponding calibrated tree (Exhibit 10), value a **non-benchmark** 4-year bond with a 2% coupon (note: this bond is **not** at par since it differs from the 4-year benchmark coupon).

**Method 1 — Spot rate discounting:**
$$P_0 = \frac{2}{(1.01)^1} + \frac{2}{(1.012012)^2} + \frac{2}{(1.012515)^3} + \frac{102}{(1.014045)^4}$$

**Method 2 — Binomial tree (backward induction):**

Using the calibrated tree from Exhibit 10, working backward from maturity through all nodes.

**Result**: Both methods produce **102.3254** ✅

> The tree's pricing exactly matches spot-rate discounting — confirming the tree's arbitrage-free calibration.

---

### Worked Example 2 (Example 5) — 3-Year, 5% Coupon Bond

**Setup**: Same par curve as Example 2/4 (1yr=2%, 2yr=3%, 3yr=4%); using the **already-calibrated** tree from Example 4.

**Recall from Example 2** (spot-rate method): Correct arbitrage-free price = **102.8102**

**Tree-based valuation (Example 5)**: Backward induction through the calibrated tree (Exhibit 22) produces a price of **102.8105**

**Small discrepancy (102.8102 vs. 102.8105)**: Due to **rounding** in the iterative calibration process (trial-and-error/Solver convergence), not a methodological error.

> Confirms: **a properly calibrated binomial tree reproduces spot-rate-based pricing** for option-free bonds, validating the entire tree-building framework.

---

### Key Takeaway

```
Spot rate discounting          Binomial tree (calibrated)
        ↓                                ↓
   Same arbitrage-free curve info   Same arbitrage-free curve info
        ↓                                ↓
        └──────────► SAME PRICE ◄────────┘
              (for option-free bonds)
```

**Why build the tree at all if spot rates give the same answer for option-free bonds?**
→ Because the **tree's real value** comes when valuing bonds **with embedded options** — there, cash flows depend on the interest rate path, and spot-rate discounting alone cannot capture option exercise behavior. The tree framework extends naturally to that more complex case (covered in subsequent readings), while this section validates that the tree is built correctly using the simpler option-free case as a benchmark check.

---

### Exam Tips

- **Always expect agreement** between spot-rate pricing and binomial-tree pricing for **option-free** bonds — if they don't match (beyond rounding), the tree was **miscalibrated**
- **Small rounding differences** (e.g., 102.8102 vs. 102.8105) are normal artifacts of iterative numerical calibration — not a conceptual error
- This validation step is the **bridge** between the simpler spot-curve approach and the more powerful (but complex) tree approach needed for option-embedded bonds
- **Exam scenario**: you may be given a calibrated tree and asked to value a bond by backward induction, then asked to confirm the result matches spot-curve pricing — know both methods
- The tree is **not needed** for option-free bonds in practice (direct spot discounting is simpler) — its real utility comes in the **next readings** on callable/putable bond valuation