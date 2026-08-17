---
layout: page
title: "Factor Models in Portfolio Construction"
permalink: /study/09-portfolio-management/04-multifactor-models/08-factor-models-in-portfolio-construction/
prev: /cfa/study/09-portfolio-management/04-multifactor-models/07-factor-models-in-risk-attribution/
next: /cfa/study/09-portfolio-management/04-multifactor-models/09-factor-models-in-strategic-ptf-decisions/
---
## Summary: Factor Models in Portfolio Construction (CFA Level II — Portfolio Management)

---

### Overview — Two Main Applications

| Application | Purpose |
|-------------|---------|
| **Passive management** | Replicate index factor exposures with a **sample** of securities |
| **Active management** | Predict alpha, establish desired risk profiles, construct factor-based ("alternative index") strategies |

**Rules-based active management (alternative indexes)**: Systematically tilt toward factors (size, value, quality, momentum) in a **transparent, mechanical, low-cost** manner — mimicking what was traditionally attributed to manager "skill."

---

### Pure Factor Portfolios — Core Concept

**Definition**: A portfolio with sensitivity = **1** to ONE target factor, and sensitivity = **0** to all other factors.

**Uses**:
- **Hedge** existing risk (offset unwanted exposure)
- **Speculate** on a specific risk view (pure directional bet)

---

### Example 10 — Selecting Factor Portfolios (Burmeister, Roll, Ross Model)

**Five macro factors**: Confidence risk, Time horizon risk, Inflation risk, Business cycle risk, Market timing risk

**Given portfolios (factor sensitivities):**

| Factor | A | B | C | D | E | F |
|--------|---|---|---|---|---|---|
| Confidence | 0.50 | 0.00 | 1.00 | 0.00 | 0.00 | 0.80 |
| Time horizon | 1.92 | 0.00 | 1.00 | **1.00** | **1.00** | 1.00 |
| Inflation | 0.00 | 0.00 | 1.00 | 0.00 | 0.00 | −1.05 |
| **Business cycle** | 1.00 | **1.00** | 0.00 | 0.00 | 1.00 | 0.30 |
| Market timing | 0.90 | 0.00 | 1.00 | 0.00 | 0.00 | 0.75 |

---

**Q1 — Manager wants to bet on rising business activity:**

→ **Portfolio B** — sensitivity of **1.00 to Business cycle risk**, and **0.00 to ALL other factors** — this is a **pure factor portfolio** for business cycle risk.

**Q2 — Long or short?**
→ **LONG** — a positive surprise in business activity increases the portfolio's return (positive sensitivity), so betting on **rising** activity means going **long**.

---

**Q3 — Manager wants to HEDGE existing positive time horizon risk exposure:**

→ **Portfolio D** — sensitivity of **1.00 to Time horizon risk**, and **0.00 to ALL other factors** — pure factor portfolio for time horizon risk.

> Note: While portfolios A, C, E, F all have time horizon exposure, only D has **ZERO exposure to all other factors** — making it the cleanest hedging instrument.

**Q4 — Position type?**
→ **SHORT** — to offset an existing **positive (long)** exposure, the manager must take the **opposite (short)** position in the pure factor portfolio.

---

## Constructing Multifactor Portfolios — Practical Framework

### Eight Fundamental Factors Used (Style Categories)

| Style | Factor | Preference |
|-------|--------|------------|
| **Defensive value** | Trailing earnings yield | High preferred |
| **Cyclical value** | Book-to-market ratio | High preferred (cheap valuations) |
| **Growth** | Consensus FY1/FY0 EPS growth | High preferred |
| **Price momentum** | 12M total return (ex most recent month) | Positive preferred |
| **Analyst sentiment** | 3M EPS revision | Positive preferred |
| **Profitability** | Return on equity (ROE) | High preferred |
| **Leverage** | Debt/equity ratio | Low preferred |
| **Earnings quality** | Non-cash earnings (accruals) | Low preferred (less manipulation risk) |

**Stock universe**: Russell 3000 (US), S&P/TSX Composite (Canada), MSCI China A (China), S&P Global BMI (rest of world)

---

### Building Pure Factor Portfolios

**Methodology**: 
1. Rank stocks by factor value
2. **Buy top 20%** (long)
3. **Short bottom 20%** (short)
4. Equal weight both long and short legs
5. **Rebalance monthly**

**Alternative ranking methods** (mentioned but not used in this demo): Pearson IC, Spearman Rank IC, other univariate regressions.

---

### Two Multifactor Portfolio Construction Approaches

#### 1. Benchmark (BM) Portfolio — Equal Weighting

$$\boxed{\text{Simple equal weighting across all 8 pure factor portfolios}}$$

> **Key finding**: Simple equal weighting **typically performs at least as well** as more sophisticated optimization approaches in practice.

---

#### 2. Risk Parity (RP) Portfolio — Equal Risk Contribution

$$\boxed{\text{Weight factors so EACH contributes EQUALLY to total portfolio risk}}$$

**Requires**: Volatility of each factor + correlations among all factors → determines actual weights.

**Key distinction from BM**: RP does NOT equally weight dollar exposure — it equally weights **risk contribution**, which typically means underweighting more volatile factors and overweighting less volatile ones.

---

### Backtesting Methodology — Rolling Window Framework

```
Step 1: Form investment hypothesis and rules
Step 2: Collect data
Step 3: Create portfolio using in-sample data
Step 4: Test performance in out-of-sample (OOS) period
Step 5: Roll window forward one month; repeat
```

**Example — Defensive Value Factor (Nov 2011–Apr 2012):**
- 30 Nov 2011: Compute trailing 12-month earnings yield → buy top 20%, short bottom 20%
- **Assess performance in December 2011** (out-of-sample)
- Repeat on 31 Dec 2011 → assess January 2012
- Continue through 6 OOS periods → compute average return, volatility, Sharpe ratio, drawdown

---

### Double Rolling Window — Avoiding Look-Ahead Bias

**Critical methodological point**: Multifactor portfolio construction requires **TWO** rolling window procedures:

$$\boxed{\text{Rolling window 1: Form the 8 pure factor portfolios each month} \implies \text{Rolling window 2: Estimate covariance matrix + optimize BM/RP weights}}$$

**Process:**
1. Each month-end: use **previous 5 years** of monthly data to estimate the **variance-covariance matrix** of the 8 factor portfolios
2. Optimize weights for RP portfolio based on this covariance matrix
3. Apply weights to **NEXT** month's returns (true out-of-sample test)
4. Repeat monthly from **1988 to May 2019**

> **Why avoid look-ahead bias**: Using only historically available data (prior 5 years) at each point in time — never using future information to set current weights.

---

### Important Structural Note — Long-Only Overlay on Long-Short Factors

$$\boxed{\text{Each of the 8 factor portfolios} = \text{long-short}}$$
$$\boxed{\text{BM and RP allocation weights across the 8 factors} = \text{LONG-ONLY (non-negative, sum to 100\%)}}$$

> The **factor construction** (long top 20%, short bottom 20%) uses long-short positions, but the **allocation** across those 8 factor portfolios is itself long-only.

---

### Empirical Results — US Market (1993–2019)

**RP Allocation Weight Patterns:**
- **Largest allocations**: Book-to-market (cyclical value), Earnings quality
- **Smallest allocations**: ROE (profitability), Price momentum

**Performance Comparison:**

| Metric | BM Portfolio | RP Portfolio |
|--------|---------------|----------------|
| **Cumulative return** | Higher | **Lower** |
| **Volatility** | Higher | **Substantially lower** |
| **Sharpe ratio** | Lower | **~2× higher (nearly double)** |

$$\boxed{\text{RP portfolio's superior risk-adjusted performance held across MOST markets examined, not just the US}}$$

---

### Cross-Market Sharpe Ratio Comparison (Exhibit)

| Region | BM Sharpe (approx range) | RP Sharpe (approx range) |
|--------|----------------------------|-----------------------------|
| **Emerging EMEA** | Highest BM (~2.2) | — |
| **Japan** | Lowest BM (~0.6) | — |
| **Asia ex Japan** | — | Highest RP (~2.5) |
| **China** | — | Lowest RP (~1.0) |

> **Consistent pattern**: RP generally outperforms BM on a Sharpe ratio basis across most markets, though absolute levels vary by region.

---

### Key Formula/Concept Reference Card

| Concept | Definition |
|---------|-----------|
| **Pure factor portfolio** | Sensitivity = 1 to target factor; 0 to all others |
| **BM portfolio** | Equal dollar-weighting of pure factor portfolios |
| **RP portfolio** | Equal risk-contribution weighting of pure factor portfolios |
| **Rolling window backtest** | In-sample estimation → out-of-sample testing → repeat monthly |
| **Look-ahead bias avoidance** | Only use data available AT THE TIME of each decision point |

---

### Exam Tips

- **Pure factor portfolio**: sensitivity of exactly 1 to target factor, 0 to ALL others — identify by scanning for the row with only ONE non-zero entry
- **To bet on a factor rising**: go LONG the pure factor portfolio for that factor
- **To hedge existing exposure**: take the OPPOSITE (short) position in the pure factor portfolio
- **BM (equal-weight) portfolios often perform as well as sophisticated optimization** — a counterintuitive but empirically supported finding
- **RP (risk parity) weights based on volatility AND correlation** — not equal dollar amounts
- **RP typically shows LOWER return but MUCH lower volatility → substantially higher Sharpe ratio** than BM
- **Double rolling window is required** for multifactor portfolio construction to avoid look-ahead bias — first for factor portfolio formation, second for covariance estimation/weight optimization
- **Factor portfolios are long-short; multifactor allocation (BM/RP) is long-only** — don't confuse these two levels
- **Standard 20%/20% long-short construction**: top quintile long, bottom quintile short, equal-weighted within each leg
- Know the **eight factors and their style groupings** (defensive value, cyclical value, growth, momentum, sentiment, profitability, leverage, earnings quality) as a representative fundamental factor set
