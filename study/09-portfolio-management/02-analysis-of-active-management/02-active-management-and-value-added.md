---
layout: page
title: "Active Management and Value Added"
permalink: /study/09-portfolio-management/02-analysis-of-active-management/02-active-management-and-value-added/
next: /cfa/study/09-portfolio-management/02-analysis-of-active-management/03-sharpe-ratio-and-information-ratio/
---
## Summary: Active Management and Value Added (CFA Level II — Portfolio Management)

---

### The Objective of Active Management

**Value added**: Performance relative to a benchmark (passive) portfolio.

$$\boxed{RA = R_P - R_B}$$

- **Positive value added**: Outperformed benchmark
- **Negative value added**: Underperformed benchmark (investor better off holding the benchmark, especially net of fees)

---

### Choosing a Benchmark — Required Qualities

1. **Representative** of the assets the investor selects from
2. **Replicable at low cost** (positions can actually be held)
3. **Weights verifiable ex ante**; returns timely ex post

**Market-cap weighted indexes**: Most common benchmark type — self-rebalancing, can be simultaneously held by many investors.

**Float-adjusted market-cap weighting**: Improvement over standard cap-weighting — accounts for shares NOT privately held (i.e., actually available to public investors).

---

### The Zero-Sum Game Principle

$$\boxed{\text{If benchmark = total market} \implies \text{Active management is a zero-sum game (before costs)}}$$

**Why**: The market portfolio represents the **average** performance across ALL investors. Since it's an average, active investors as a group **cannot** collectively outperform the market before costs — for every winner, there's an equal loser.

**Exception**: For **narrower benchmarks** (not the full market), active management is **NOT** necessarily zero-sum because investors can select assets **outside** the benchmark's universe.

---

### Return Formulas

**Benchmark return:**
$$\boxed{R_B = \sum_{i=1}^{N} w_{B,i} R_i}$$

**Managed portfolio return:**
$$\boxed{R_P = \sum_{i=1}^{N} w_{P,i} R_i}$$

> Securities can have **zero weight** in either portfolio (in benchmark but not held, or held but not in benchmark).

---

### Active Weights — The Core Driver of Value Added

$$\boxed{\Delta w_i = w_{P,i} - w_{B,i}}$$

**Key result — Value added = sum product of active weights and active returns:**

$$\boxed{R_A = \sum_{i=1}^{N} \Delta w_i \times R_{A,i}}$$

Where $R_{A,i} = R_i - R_B$ (each security's return relative to the benchmark).

**Interpretation**: Positive value added comes from:
- **Overweighting** securities with returns **above** the benchmark
- **Underweighting** securities with returns **below** the benchmark

---

### Numerical Example — Stock/Bond Composite

**Setup**: Benchmark = 60% stocks/40% bonds; Managed portfolio = 70% stocks/30% bonds (overweight stocks +10%, underweight bonds −10%)

**Actual returns**: Stocks = 14.0%; Bonds = 2.0%

**Direct calculation:**
$$R_P = 0.70(14.0) + 0.30(2.0) = 10.4\% \qquad R_B = 0.60(14.0) + 0.40(2.0) = 9.2\%$$
$$R_A = 10.4\% - 9.2\% = \mathbf{1.2\%}$$

**Decomposed calculation (Equation 3):**
$$R_A = 0.10(14.0-9.2) + (-0.10)(2.0-9.2) = 0.10(4.8) + (-0.10)(-7.2) = 0.48\% + 0.72\% = \mathbf{1.2\%}$$

> **Interpretation**: +0.5% from stock overweight; +0.7% from bond underweight — both decisions added value.

**Alternative scenario** (stocks return −14.0% instead):
$$R_P = -9.2\% \qquad R_B = -7.6\%$$
$$R_A = 0.10(-14.0-(-7.6)) + (-0.10)(2.0-(-7.6)) = -0.64\% + (-0.96\%) = \mathbf{-1.6\%}$$

> Same overweight/underweight decision → **negative** value added when the bet goes wrong.

---

### Example 1 — Country Equity Markets (MSCI EAFE Benchmark)

| Country | Benchmark Wt | Portfolio Wt | Active Weight | 2018 Return |
|---------|-------------|---------------|----------------|-------------|
| UK | 17% | 16% | −1% | −7.6% |
| Japan | 25% | 14% | **−11%** | −9.0% |
| France | 11% | 8% | −3% | −3.5% |
| Germany | 9% | 24% | **+15%** | −15.8% |
| Other | 38% | 38% | 0% | −0.1% |

**Q1 — Largest overweight/underweight:**
→ **Germany: largest overweight (+15%)**
→ **Japan: largest underweight (−11%)**

**Q2 — Value added calculation:**
$$R_A = (-0.01)(-7.6) + (-0.11)(-9.0) + (-0.03)(-3.5) + (0.15)(-15.8) + 0$$
$$= 0.076 + 0.99 + 0.105 - 2.37 = \mathbf{-1.2\%}$$

> **Key insight**: The large Germany overweight (+15%) combined with Germany's poor return (−15.8%) drove the negative value added — the "Other Countries" position (zero active weight) contributed nothing.

---

### Decomposition of Value Added

**Total value added can be split into:**
1. **Asset allocation** (active weight decisions across asset classes)
2. **Security selection** (active management within each asset class)

**General formula (M asset classes):**
$$\boxed{R_A = \sum_{j=1}^{M} \Delta w_j R_{B,j} + \sum_{j=1}^{M} w_{P,j} R_{A,j}}$$

**Two-asset-class simplification (stocks and bonds):**
$$R_A = \underbrace{[\Delta w_{stocks}R_{B,stocks} + \Delta w_{bonds}R_{B,bonds}]}_{\text{Asset allocation value added}} + \underbrace{[w_{P,stocks}R_{A,stocks} + w_{P,bonds}R_{A,bonds}]}_{\text{Security selection value added}}$$

> **Note**: This formulation arbitrarily assigns any **interaction effect** to security selection (not a separately isolated term).

---

### Worked Example — Fidelity/PIMCO Portfolio (2018)

**Setup**: Investor holds 68% Fidelity Magellan (equity) + 32% PIMCO Total Return (bond); Policy portfolio = 60% equity/40% bond

| Fund | Fund Return | Benchmark Return | Value Added |
|------|------------|-------------------|-------------|
| Fidelity Magellan | −5.6% | −4.5% (S&P 500) | **−1.1%** |
| PIMCO Total Return | −0.3% | 0.0% (Barclays Agg) | **−0.3%** |

**Step 1 — Security selection value added:**
$$0.68(-1.1\%) + 0.32(-0.3\%) = -0.748\% + (-0.096\%) = \mathbf{-0.8\%}$$

**Step 2 — Asset allocation value added:**
- Active weights: Equity = 68% − 60% = **+8%**; Bond = 32% − 40% = **−8%**
$$0.08(-4.5\%) + (-0.08)(0.0\%) = -0.36\% + 0 = \mathbf{-0.4\%}$$

**Step 3 — Total value added:**
$$-0.8\% + (-0.4\%) = \mathbf{-1.2\%}$$

**Verification via direct calculation:**
$$R_P = 0.68(-5.6\%) + 0.32(-0.3\%) = -3.9\%$$
$$R_{Policy} = 0.60(-4.5\%) + 0.40(0.0\%) = -2.7\%$$
$$R_A = -3.9\% - (-2.7\%) = \mathbf{-1.2\%} ✓$$

---

### Extended Performance Attribution

**Systems can decompose across multiple layers:**
- Asset classes (stocks, bonds, real estate, cash — $M = 4$ or more)
- Within-asset-class sectors/industries (equity: sector over/underweighting + individual stock selection)
- Fixed-income sub-decomposition (sovereign vs. corporate mix + individual bond selection)

---

### Key Formula Reference Card

| Concept | Formula |
|---------|---------|
| **Simple value added** | $R_A = R_P - R_B$ |
| **Risk-adjusted alpha** | $\alpha_P = R_P - \beta_P R_B$ |
| **Active weight** | $\Delta w_i = w_{P,i} - w_{B,i}$ |
| **Value added (active weights × active returns)** | $R_A = \sum \Delta w_i \times R_{A,i}$ |
| **Asset allocation contribution** | $\sum \Delta w_j \times R_{B,j}$ |
| **Security selection contribution** | $\sum w_{P,j} \times R_{A,j}$ |

---

### Exam Tips

- **Value added = $R_P - R_B$** — always positive if outperforming, negative if underperforming
- **Zero active weight → zero contribution** to value added, regardless of the security's actual return
- **Active management is zero-sum ONLY for the total market benchmark** — narrower benchmarks allow non-zero-sum outcomes
- **Value added = sum product of active weights × active returns** — the fundamental decomposition formula (Equation 3)
- **Total value added decomposes into asset allocation + security selection** — this is the standard performance attribution framework
- **Asset allocation contribution**: active weight × **benchmark** return for that asset class
- **Security selection contribution**: portfolio weight × (fund return − fund's own benchmark return)
- **Alpha vs. active return**: technically different (alpha uses beta-adjustment); often used interchangeably assuming beta = 1
- Always **verify decomposed calculation** against direct $R_P - R_B$ calculation — they must match