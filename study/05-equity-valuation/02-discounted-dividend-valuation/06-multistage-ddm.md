---
layout: page
title: Multistage Dividend Discount Models
permalink: /study/05-equity-valuation/02-discounted-dividend-valuation/06-multistage-ddm/
prev: /cfa/study/05-equity-valuation/02-discounted-dividend-valuation/05-gordon-growth-model-other-issues/
next: /cfa/study/05-equity-valuation/02-discounted-dividend-valuation/07-h-model-and-3-stage-ddm/
---
## Summary: Multistage Dividend Discount Models (CFA Level II)

---

### The Three Growth Phases

| Phase | Characteristics | Dividend Policy |
|-------|----------------|----------------|
| **Growth** | Rapidly expanding markets; high margins; supernormal EPS growth | Low or zero dividends; heavy reinvestment; often negative FCFE |
| **Transition** | Slowing growth; competition/market saturation; above-average but declining growth | Rising payout ratios; dividend initiation possible |
| **Mature** | Equilibrium reached; ROE ≈ r; stable growth at sustainable rate | Stable, predictable dividends; Gordon growth model applicable |

> **Mature phase** is the stage where the **Gordon growth model** is directly applicable — used as the terminal value calculation in all multistage models.

---

### Usage in Practice (CFA Survey)

| Model | Usage Among DDM Users |
|-------|----------------------|
| Two-stage DDM | **55%** |
| H-model | **11%** |
| Three-stage (3+ stage) | **50%** |

*(Percentages exceed 100% as analysts often use multiple models)*

---

### 1. Two-Stage DDM

**Structure**: High constant growth ($g_S$) for n years → perpetual lower growth ($g_L$) forever.

**Formula:**
$$\boxed{V_0 = \sum_{t=1}^{n} \frac{D_0(1+g_S)^t}{(1+r)^t} + \frac{V_n}{(1+r)^n}}$$

$$\boxed{V_n = \frac{D_{n+1}}{r - g_L} = \frac{D_0(1+g_S)^n(1+g_L)}{r-g_L}}$$

**Process:**
1. Calculate each dividend in Stage 1: $D_t = D_0 \times (1+g_S)^t$
2. Calculate terminal value at end of Stage 1: Gordon growth model with $g_L$
3. Discount everything back to $t = 0$

**Worked example (Carl Zeiss Meditec):**
- $D_0 = €0.55$, $g_S = 9\%$ (10 years), $g_L = 5\%$, $r = 5.88\%$
- $V_{10} = D_{10}(1+g_L)/(r-g_L) = 1.302 \times 1.05/(0.0588-0.05) = €155.36$
- **PV of Stage 1 dividends**: €6.47 (only 7% of total!)
- **PV of terminal value**: €87.74 (93% of total!)
- **Total**: €94.21

> **Critical insight**: Terminal value typically dominates total value (80-95%+ in most cases) — estimate quality is crucial.

**Best used when:**
- Company has temporary competitive advantage (patent, first-mover)
- Supernormal growth for a defined period, then abrupt transition to maturity
- **Limitation**: abrupt growth transition is often unrealistic

---

### 2. Combining DDM + P/E for Terminal Value

Instead of Gordon growth model for terminal value, use a **P/E multiple**:

$$V_n = \text{Trailing P/E} \times EPS_n$$

Where:
$$EPS_n = \frac{D_n}{\text{Payout ratio}}$$

**Worked example (P&G):**
- $D_0 = \$2.79$, $g = 4\%$ (4 years), $r = 6.5\%$
- Year 4 payout ratio = 60% → $EPS_4 = \$3.2639/0.60 = \$5.44$
- Terminal value: $V_4 = 22 \times \$5.44 = \$119.68$
- **PV of dividends**: $10.52
- **PV of terminal value**: $93.03
- **Total**: $103.55 (vs. market price of $96.47 → **undervalued**)

---

### 3. Valuing Non-Dividend-Paying Companies with DDM

**Approach**: Use multistage DDM with Stage 1 dividends = 0.

**Process:**
1. Set Stage 1 dividends to zero until dividend initiation date
2. Use Gordon growth model at the point dividends begin
3. Discount terminal value back to today

**Worked example:**
- First dividend $1.00 at $t = 5$, $g = 5\%$ thereafter, $r = 11\%$
$$V_4 = \frac{D_5}{r-g} = \frac{1.00}{0.11-0.05} = \$16.67$$
$$V_0 = \frac{V_4}{(1+r)^4} = \frac{16.67}{(1.11)^4} = \mathbf{\$10.98}$$

> **Limitation**: For non-dividend-paying, unprofitable companies, estimating when dividends will begin and at what level is extremely difficult → prefer **FCF or residual income models**.

---

### Terminal Value — Two Methods

| Method | Formula | When to Use |
|--------|---------|------------|
| **Gordon growth model** | $V_n = D_{n+1}/(r-g_L)$ | Stable, predictable mature growth |
| **P/E multiple** | $V_n = P/E \times EPS_n$ | When valuation multiples are more reliable than growth estimates |

**Note**: Some analysts use different discount rates for different growth phases — no clear standard approach.

---

### Exam Formulas

$$\boxed{V_0 = \sum_{t=1}^{n} \frac{D_0(1+g_S)^t}{(1+r)^t} + \frac{D_0(1+g_S)^n(1+g_L)}{(r-g_L)(1+r)^n}}$$

$$\boxed{V_0 \text{ (no dividend, starts at t=n+1)} = \frac{D_{n+1}}{(r-g)(1+r)^n}}$$

---

### Exam Tips

- **Terminal value dominates** (often 90%+) — always sanity-check this component
- **Two-stage DDM**: abrupt transition — works for companies with temporary competitive advantages
- **Non-dividend-paying**: DDM still works in theory but FCF/residual income often more practical
- **P/E terminal value**: requires payout ratio to convert dividend to EPS
- **All multistage models** use Gordon growth model (or a multiple) for the terminal stage
- **Single discount rate** is the standard in exam problems unless told otherwise
- **Mature phase** is defined by ROE ≈ r — that's when Gordon growth model assumptions hold