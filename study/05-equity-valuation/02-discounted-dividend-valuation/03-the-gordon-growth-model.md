---
layout: page
title: The Gordon Growth Model
permalink: /study/05-equity-valuation/02-discounted-dividend-valuation/03-the-gordon-growth-model/
prev: /cfa/study/05-equity-valuation/02-discounted-dividend-valuation/02-dividend-discount-model/
next: /cfa/study/05-equity-valuation/02-discounted-dividend-valuation/04-shares-repurchases-and-implied-dividend-growth-rate/
---
## Summary: The Gordon Growth Model (CFA Level II)

---

### The Gordon Growth Model Formula

$$\boxed{V_0 = \frac{D_1}{r - g} = \frac{D_0(1+g)}{r-g}}$$

Where:
- $D_1$ = next period's expected dividend ($D_0 \times (1+g)$)
- $r$ = required return on equity
- $g$ = constant, perpetual dividend growth rate
- **Critical requirement**: $r > g$ (otherwise value is infinite/undefined)

---

### Key Relationships in the Gordon Growth Model

| Component | Formula | Constant Through Time? |
|-----------|---------|----------------------|
| **Dividend yield** | $D_1/P_0$ | ✅ Yes (dividends and price grow at same rate $g$) |
| **Capital gains yield** | $g$ | ✅ Yes |
| **Total return** | $r = D_1/P_0 + g$ | ✅ Yes |

> **$g$ is simultaneously**: the dividend growth rate, earnings growth rate (if payout ratio is constant), and **capital appreciation rate**.

---

### When to Use the Gordon Growth Model

**Most appropriate when:**
- Company pays dividends with a **consistent, understandable relationship to profitability**
- Expected growth rate is **comparable to or below** the economy's nominal GDP growth rate
- **No distinct high-growth stage** expected — stable, mature business
- Company operates in a **stable, regulated industry** (e.g., water utilities, mature consumer staples)

**Not appropriate when:**
- Growth rate far exceeds nominal GDP growth (use **multistage DDM** instead)
- Dividends are erratic or bear no clear relationship to earnings

---

### Nominal GDP Growth as a Growth Rate Benchmark

$$\text{Nominal GDP growth} \approx \text{Real GDP growth} + \text{Inflation target}$$

**Example (Canada)**: 1.6% real growth + 2% inflation target = **3.6% nominal growth**

> An earnings/dividend growth rate **far above nominal GDP growth cannot be sustained in perpetuity** → use multistage DDM.

---

### Valuing Perpetual Preferred Stock (Special Case: g = 0)

$$\boxed{V_0 = \frac{D}{r}}$$

This is a **perpetuity formula** — fixed dividend, no growth.

**Worked example (KSU-P Preferred):**
$$V_0 = \frac{\$1.00}{0.055} = \mathbf{\$18.18}$$

---

### Negative Growth (Declining Dividends)

Gordon growth model works with **negative g**:

**Worked example (Afton Mines, g = −4%, r = 9%):**
$$V_0 = \frac{D_1}{r-g} = \frac{4.25}{0.09 - (-0.04)} = \frac{4.25}{0.13} = \mathbf{\$32.69}$$

---

### Worked Examples Summary

#### Sonoco Products (Example 5)
- $D_0 = \$1.64$, $g = 4.5\%$, $r = 7.3\%$
$$V_0 = \frac{1.64 \times 1.045}{0.073 - 0.045} = \frac{1.714}{0.028} = \mathbf{\$61.21}$$
- Market price: $59.55 → **slightly undervalued** (~2.7% below intrinsic value)

#### Middlesex Water (Example 6)
- $D_0 = \$0.911$, $g = 4.5\%$, $r = 6.8\%$
$$V_0 = \frac{0.911 \times 1.045}{0.068 - 0.045} = \frac{0.952}{0.023} = \mathbf{\$41.39}$$
- Market price: $43.20 → **fairly valued** (<5% difference)

**Sensitivity to r (MSEX):**

| Required Return | Estimated Value |
|----------------|----------------|
| 6.6% (adjusted beta CAPM) | $45.33 → fairly valued |
| 6.8% (base case) | **$41.39** |
| 7.3% (bond yield + RP) | $34.00 → overvalued |

**Key lesson**: Wide range of outcomes across methods → model uncertainty is significant.

---

### Sensitivity Analysis (Example 7 — MSEX)

| | g = 4.25% | g = 4.50% | g = 4.75% |
|--|-----------|-----------|-----------|
| **r = 6.55%** | $41.29 | $46.44 | $53.02 |
| **r = 6.80%** | $37.24 | **$41.39** | $46.55 |
| **r = 7.05%** | $33.92 | $37.33 | $41.49 |

**Range**: $33.92 to $53.02 — a **55%+ spread** from just ±25 bps changes in inputs.

> **Critical exam point**: Gordon growth model values are **extremely sensitive** to small changes in $r$ and $g$ — sensitivity analysis is mandatory.

---

### Strengths and Limitations

| Strengths | Limitations |
|-----------|------------|
| Simple, elegant formula | Highly sensitive to $r$ and $g$ inputs |
| Theoretically grounded (infinite horizon DDM) | Only valid when $r > g$ |
| Useful for stable, mature dividend-paying companies | Not suitable for high-growth companies |
| Applicable to broad equity market indexes | Assumes constant growth forever (unrealistic for many firms) |
| Works for preferred stock (g = 0) | Requires stable, predictable dividend policy |

---

### Exam Tips

- **Always use $D_1$ (not $D_0$)** in the numerator: $D_1 = D_0 \times (1+g)$
- **$r > g$ is required** — if $r \leq g$, the model breaks down mathematically and economically
- **$g$ = capital gains yield** — in efficient market, stock price grows at $g$
- **Dividend yield stays constant** because both dividends and price grow at the same rate $g$
- **Sensitivity analysis** is essential given model's extreme sensitivity to inputs
- **Preferred stock**: use perpetuity formula $D/r$ (g = 0)
- **Negative g**: model still works — denominator becomes larger → lower value
- **Good candidates**: regulated utilities, mature consumer staples, slow-growth businesses with consistent payout ratios