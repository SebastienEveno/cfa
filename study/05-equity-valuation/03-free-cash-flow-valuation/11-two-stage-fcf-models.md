---
layout: page
title: Two-Stage Free Cash Flow Models
permalink: /study/05-equity-valuation/03-free-cash-flow-valuation/11-two-stage-fcf-models/
prev: /cfa/study/05-equity-valuation/03-free-cash-flow-valuation/10-free-cash-flow-model-variations/
next: /cfa/study/05-equity-valuation/03-free-cash-flow-valuation/13-integrating-esg-fcf-models/
---
## Summary: Two-Stage Free Cash Flow Models (CFA Level II)

---

### General Structure of Two-Stage FCF Models

**Stage 1**: Higher growth (constant or declining)
**Stage 2**: Long-run sustainable growth rate

**Sustainable Stage 2 growth rate guidance:**
- **Declining industry**: slightly below GDP growth
- **Above-average growth industry**: slightly above GDP growth

---

### Two Variants of Stage 1 Growth Pattern

| Variant | Stage 1 Pattern | Analog |
|---------|----------------|--------|
| **Constant** | Fixed growth rate, then drops to Stage 2 rate | Standard two-stage DDM |
| **Declining** | Growth rate declines progressively to Stage 2 rate | H-model for DDM |

---

### Important: "Growth Rate" Can Refer to Different Variables

Unlike DDM (always dividend growth), FCF models may specify growth in:
- **FCFF or FCFE** directly
- **Net income or operating income**
- **Sales**

> The choice matters: if growth is in *income*, FCF changes also depend on investment/financing patterns. If growth is in *sales*, profit margins AND investment/financing all interact to determine FCF.

---

### General Two-Stage Formulas

**FCFF Model:**
$$\boxed{Firm\ Value = \sum_{t=1}^{n} \frac{FCFF_t}{(1+WACC)^t} + \frac{FCFF_{n+1}/(WACC-g)}{(1+WACC)^n}}$$

$$\text{Equity value} = \text{Firm value} - \text{Debt}$$

**FCFE Model:**
$$\boxed{Equity\ Value = \sum_{t=1}^{n} \frac{FCFE_t}{(1+r)^t} + \frac{FCFE_{n+1}/(r-g)}{(1+r)^n}}$$

**Terminal value alternatives**: Constant-growth formula (most common) OR P/E × forecasted EPS, P/B × forecasted BVPS, etc.

> **Terminal value typically represents a substantial portion of total value** — same theme as DDM models.

---

### Variant 1: Constant Growth in Each Stage (TechnoSchaft, Example 15)

**Setup:**
- Sales₀ = €25/share; Sales growth = 20% (Years 1-3), then 6% (Year 4+)
- Net profit margin = 10% (constant)
- Net FCInv = 50% of sales increase
- WCInv = 20% of sales increase
- Debt financing = 40% of (FCInv + WCInv)
- $r_e = 7\% + 1.20 \times 4.5\% = 12.4\%$

**FCFE per share:**

| Year | 1 | 2 | 3 | 4 | 5 | 6 |
|------|---|---|---|---|---|---|
| Sales growth | 20% | 20% | 20% | 6% | 6% | 6% |
| FCFE | 0.900 | 1.080 | 1.296 | 3.491 | 3.700 | 3.922 |
| FCFE growth | — | 20% | 20% | **169%** | 6% | 6% |

**Key insight — the "growth spike"**: FCFE jumps **169%** in Year 4 because:
- Profits grow only 6% (down from 20%)
- But **investment needs drop sharply** (lower growth → less capex/WC needed)
- Net effect: much more cash left over for equity

**Terminal value (at end of Year 3):**
$$TV_3 = \frac{FCFE_4}{r-g} = \frac{3.491}{0.124-0.06} = €54.55$$

**Total value:**
$$V_0 = PV(FCFE_{1-3}) + PV(TV_3) = €2.565 + €38.415 = \mathbf{€40.98}$$

> **PV of terminal value = 94% of total value** — extreme terminal value dependence.

---

### Variant 2a: Declining EPS Growth in Stage 1 (Sindhuh Enterprises, Example 16)

**Setup:**
- EPS₂₀₁₉ = $2.40
- EPS growth declines: 30% → 18% → 12% → 9% → 7% (2020-2024), then constant 7%
- Net CapEx declining: $3.00 → $2.50 → $2.00 → $1.50 → $1.00 (then grows 7%)
- WCInv = 50% of net CapEx
- Debt financing = 30% of (FCInv + WCInv)
- $r_e = 6\% + 1.10 \times 4\% = 10.4\%$

**FCFE per share:**

| Year | 2020 | 2021 | 2022 | 2023 | 2024 |
|------|------|------|------|------|------|
| EPS growth | 30% | 18% | 12% | 9% | 7% |
| EPS | 3.120 | 3.682 | 4.123 | 4.494 | 4.809 |
| FCFE | **−0.030** | 1.057 | 2.023 | 2.919 | 3.759 |
| PV @10.4% | −0.027 | 0.867 | 1.504 | 1.965 | — |

**Key observation**: FCFE is **negative in Year 1** (2020) — high earnings growth requires heavy reinvestment, exceeding net income.

**Terminal value (at end of 2023):**
$$V_{2023} = \frac{FCFE_{2024}}{r-g} = \frac{3.759}{0.104-0.07} = \$110.56$$

$$PV(V_{2023}) = \frac{110.56}{(1.104)^4} = \$74.425$$

**Total value:**
$$V_{2019} = -0.027+0.867+1.504+1.965+74.425 = \mathbf{\$78.73}$$

**Trailing P/E comparison:**
| | Beginning 2020 | Beginning 2024 |
|--|----------------|-----------------|
| Stock value | $78.73 | $110.56 |
| Prior-year EPS | $2.40 | $4.494 |
| **Trailing P/E** | **32.8×** | **24.6×** |

> **Key lesson**: As growth phase ends, P/E **declines substantially** — high P/E reflects expected future growth, which is "used up" as the company matures.

---

### Variant 2b: Declining Sales Growth + Margins (Medina Werks, Example 17)

**Setup**: Sales = C$600M; growth and margin both decline:

| Year | 1 | 2 | 3 | 4 | 5 | 6 |
|------|---|---|---|---|---|---|
| Sales growth | 20% | 16% | 12% | 10% | 8% | **7%** (perpetual) |
| Net profit margin | 14% | 13% | 12% | 11% | 10.5% | **10%** (perpetual) |

- Net FCInv = 60% of sales increase
- WCInv = 25% of sales increase
- Debt financing = 40% of (FCInv + WCInv)
- $r_e = 6\% + 1.10 \times 4.5\% = 10.95\%$

**FCFE (C$ millions):**

| Year | 1 | 2 | 3 | 4 | 5 | 6 |
|------|---|---|---|---|---|---|
| Sales | 720.0 | 835.2 | 935.4 | 1,029.0 | 1,111.3 | 1,189.1 |
| Net profit | 100.8 | 108.6 | 112.3 | 113.2 | 116.7 | 118.9 |
| FCFE | 39.6 | 49.8 | 61.1 | 65.5 | 74.7 | **79.2** |
| PV @10.95% | 35.69 | 40.48 | 44.76 | 43.21 | 44.43 | — |

**Terminal value (at end of Year 5):**
$$TV_5 = \frac{FCFE_6}{r-g} = \frac{79.235}{0.1095-0.07} = C\$2,005.95M$$

$$PV(TV_5) = \frac{2,005.95}{(1.1095)^5} = C\$1,193.12M$$

**Total firm value:**
$$MV = 35.69+40.48+44.76+43.21+44.43+1,193.12 = \mathbf{C\$1,401.69M}$$

**Value per share** (70M shares):
$$= \frac{1,401.69}{70} = \mathbf{C\$20.02}$$

---

### Common Modeling Pattern Across All Three Examples

```
1. Forecast revenue driver (sales or EPS growth) for each year
2. Apply margin (profit margin or constant) → derive Net Income
3. Estimate Net FCInv and WCInv as % of sales/CapEx increase
4. Estimate debt financing as % of (FCInv + WCInv)
5. FCFE = Net Income − Net FCInv − WCInv + Debt financing
6. Discount Stage 1 FCFE at r_e
7. Calculate terminal value using constant-growth formula at Stage 2 entry point
8. Discount terminal value back to t=0
9. Sum PVs → total equity value → divide by shares for per-share value
```

---

### Exam Tips

- **Two-stage models**: constant Stage 1 (sharp transition) vs. declining Stage 1 (smooth, H-model-like)
- **"Growth rate" can mean different things** in FCF models — always clarify (sales, income, or FCF itself)
- **Negative FCFE in high-growth years is normal** — heavy reinvestment can exceed net income
- **Sharp FCFE jumps at stage transitions**: when growth drops, investment needs drop faster than profits → large % increase in FCFE
- **Terminal value typically dominates** (often >75-95% of total value) — same as DDM
- **P/E declines as growth phase ends** — reflects diminishing growth premium
- **Debt financing percentage**: applied to (FCInv + WCInv) — represents how much of total investment is debt-funded vs. equity-funded (affects FCFE directly)
- **Sales-driven models with declining margins**: both growth AND profitability decline simultaneously — common for maturing companies facing competition