---
layout: page
title: Valuing an Option-Free Bond with Pathwise Valuation
permalink: /study/06-fixed-income/02-arbitrage-free-valuation/06-pathwise-valuation/
prev: /cfa/study/06-fixed-income/02-arbitrage-free-valuation/05-valuing-option-free-bond-binomial-tree/
next: /cfa/study/06-fixed-income/02-arbitrage-free-valuation/07-monte-carlo-method/
---
## Summary: Valuing an Option-Free Bond with Pathwise Valuation (CFA Level II — Fixed Income)

---

### What Is Pathwise Valuation?

**Alternative to backward induction**: Instead of working backward through the tree node-by-node, **pathwise valuation**:
1. Identifies **every possible interest rate path** through the tree
2. Calculates the **present value of the bond along each path**
3. Takes the **average** of all path-specific values

> Both methods (backward induction and pathwise) produce the **same result** for option-free bonds — pathwise valuation is simply a different computational route to the same arbitrage-free value.

---

### Counting the Number of Paths — Pascal's Triangle

The number of possible paths to reach a given time period follows the same combinatorics as coin-toss outcomes (heads/tails = up/down rate moves).

| Number of Periods | Number of Paths | Pascal's Triangle Row |
|--------------------|------------------|------------------------|
| 1 | 2 | 1, 1 |
| 2 | 4 | 1, 2, 1 |
| 3 | **4** (combinations, not total sequences) | 1, 3, 3, 1 |

**For a 3-period tree**: There are **4 distinct interest rate paths** (HH, HT, TH, TT) reaching Year 3.

---

### Worked Example 1 — 3-Year Zero-Coupon Bond

**The four paths and their forward rates:**

| Path | Year 1 | Year 2 | Year 3 | Present Value |
|------|--------|--------|--------|----------------|
| 1 | 1.0000% | 1.6121% | 1.7863% | **95.7291** |
| 2 | 1.0000% | 1.6121% | 1.3233% | **96.1665** |
| 3 | 1.0000% | 1.1943% | 1.3233% | **96.5636** |
| 4 | 1.0000% | 1.1943% | 0.9803% | **96.8916** |
| **Average** | | | | **96.3377** |

**Sample calculation (Path 1):**
$$PV = \frac{100}{1.01000 \times 1.016121 \times 1.017863} = \mathbf{95.7291}$$

**Verification**: This average (96.3377) matches the value obtained from standard backward induction through the same tree — confirming consistency between methods.

---

### Worked Example 2 (Example 6) — 3-Year, 5% Coupon Bond

**Setup**: Same calibrated tree from Example 4/5 (1yr=2%, 2yr=3%, 3yr=4% par curve)

**Cash flows along all 4 paths (identical regardless of path, since option-free):**

| Path | Time 1 | Time 2 | Time 3 |
|------|--------|--------|--------|
| All paths | 5 | 5 | 105 |

**Discount rates along each path:**

| Path | Time 0 | Time 1 | Time 2 |
|------|--------|--------|--------|
| 1 (HH) | 2.000% | 4.646% | 8.167% |
| 2 (HL) | 2.000% | 4.646% | 6.050% |
| 3 (LH) | 2.000% | 3.442% | 6.050% |
| 4 (LL) | 2.000% | 3.442% | 4.482% |

**Present values along each path:**

| Path | PV |
|------|-----|
| 1 | **100.5298** |
| 2 | **102.3452** |
| 3 | **103.4794** |
| 4 | **104.8877** |

**Sample calculation (Path 1):**
$$PV = \frac{5}{1.02} + \frac{5}{1.02 \times 1.04646} + \frac{105}{1.02 \times 1.04646 \times 1.08167} = \mathbf{100.5298}$$

**Sample calculation (Path 3):**
$$PV = \frac{5}{1.02} + \frac{5}{1.02 \times 1.03442} + \frac{105}{1.02 \times 1.03442 \times 1.06050} = \mathbf{103.4794}$$

**Average across all 4 paths:**
$$\frac{100.5298 + 102.3452 + 103.4794 + 104.8877}{4} = \mathbf{102.8105}$$

✅ **Exactly matches** the backward induction result from Example 5 (102.8105).

---

### Key Conceptual Points

| Aspect | Detail |
|--------|--------|
| **Equal path probability** | Each path has equal weight in a lognormal binomial model (consistent with the 50/50 up/down assumption at each node) |
| **Same cash flows, different discount rates** | For option-free bonds, cash flows don't change across paths — only the discounting differs |
| **Equivalence to backward induction** | Pathwise valuation and backward induction are mathematically equivalent — both leverage the same underlying tree |
| **Number of paths grows** | $2^n$ total sequences, but recombining tree means fewer **distinct rate combinations** (Pascal's Triangle row values) |

---

### Pathwise vs. Backward Induction — Comparison

| Feature | Backward Induction | Pathwise Valuation |
|---------|---------------------|----------------------|
| **Direction** | Right to left (maturity → present) | Forward along each path, then average |
| **Computational approach** | Node-by-node averaging | Path-by-path discounting, then average |
| **Best suited for** | Bonds with embedded options (allows checking option exercise at each node) | Understanding/visualizing how individual rate scenarios contribute to value |
| **Result** | Same as pathwise (for option-free bonds) | Same as backward induction (for option-free bonds) |

> For bonds **with embedded options**, pathwise valuation becomes more complex because cash flows can differ by path (option exercised or not) — but the same averaging principle still applies once cash flows are correctly determined per path.

---

### Exam Tips

- **Pathwise valuation = average of path-specific present values** — straightforward to compute once paths and forward rates are known
- **Number of paths**: use Pascal's Triangle — for $n$ periods, there are $n+1$ distinct rate-combination paths (though $2^n$ total sequences before considering combining)
- **For option-free bonds**: cash flows are **identical** across all paths — only discount rates differ
- **Must match backward induction**: if pathwise and backward induction give different answers (beyond rounding), something is wrong with the calibration or calculation
- **Discount each cash flow along its specific path**: multiply (1+rate) terms sequentially for the cumulative discount factor at each point
- This approach becomes essential conceptually for **Monte Carlo simulation** (covered next) — pathwise valuation is the building block for simulation-based bond pricing, especially for path-dependent securities like MBS