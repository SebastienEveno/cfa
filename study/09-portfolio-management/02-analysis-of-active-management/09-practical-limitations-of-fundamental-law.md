---
layout: page
title: "Practical Limitations of the Fundamental Law"
permalink: /study/09-portfolio-management/02-analysis-of-active-management/09-practical-limitations-of-fundamental-law/
prev: /cfa/study/09-portfolio-management/02-analysis-of-active-management/08-fixed-income-strategies/
next: /cfa/study/09-portfolio-management/02-analysis-of-active-management/10-formula-summary/
---
## Summary: Practical Limitations of the Fundamental Law (CFA Level II — Portfolio Management)

---

### Overview of Limitations

The fundamental law extends mean-variance optimization to relative performance and thus inherits many of its limitations (normality assumptions, risk model estimation issues). This section focuses on **two specific limitations**:

1. **Ex ante measurement of skill** (uncertainty in IC)
2. **Independence assumptions** in forecasts (across assets and over time)

> **Note**: The reading explicitly does NOT cover general mean-variance optimization shortcomings (return distribution assumptions, risk aversion) or risk model estimation problems (factor selection, nonlinearities) — these are assumed given.

---

## Limitation 1: Ex Ante Measurement of Skill

### The Core Problem

**Information coefficient (IC)** is assumed to be a known, stable parameter — but in reality:
- Investors may **overestimate their own skill** (behavioral bias)
- Forecasting ability **varies across asset segments**
- Forecasting ability **varies over time**

### Qian and Hua (2004) — Accounting for Skill Uncertainty

**Key insight**: Realized active risk has TWO components:

$$\boxed{\sigma_A = \sqrt{\sigma_{RM}^2 + \sigma_{IC}^2}}$$

Where:
- **$\sigma_{RM}$**: Benchmark tracking risk predicted by the risk model (traditional component)
- **$\sigma_{IC}$**: Additional "strategy risk" from **uncertainty in the level of skill itself**

**Refined fundamental law incorporating this uncertainty:**

$$\boxed{IR = \frac{IC \times \sqrt{BR}}{\sqrt{1 + \left(\frac{\sigma_{IC}}{\sigma_{RM}}\right)^2 \times BR}}} \quad \text{(conceptual form — Equation 18)}$$

**Practical impact**: 
$$\boxed{\text{Actual IRs for stock selection strategies are 45\%-91\% of naive fundamental law estimates}}$$

> **Key takeaway**: Uncertainty about forecasting ability **always reduces** expected value added — the more uncertain the skill level, the greater the shortfall from theoretical predictions.

---

## Limitation 2: Independence of Investment Decisions

### The Breadth Measurement Problem

**Core issue**: Number of assets ($N$) ≠ Breadth ($BR$) when active returns are correlated.

$$\boxed{BR = \frac{N}{1+(N-1)\rho}} \quad \text{(Clarke, de Silva, Thorley 2006 — Equation 19)}$$

Where $\rho$ = uniform off-diagonal correlation coefficient.

---

### Case A: Positive Correlations Reduce Breadth

**Example**: Overweighting all stocks in one industry, underweighting all stocks in another sector.
→ These aren't truly independent decisions — the risk model shows they're correlated → **effective breadth < N**

---

### Case B: Negative Correlations Can Dramatically INCREASE Breadth

**Numerical example — Near-arbitrage strategy:**

$N = 2$ (two securities, e.g., same ETF on two different exchanges), $\rho = -0.8$:

$$BR = \frac{2}{1-(2-1)(0.8)} = \frac{2}{1-0.8} = \frac{2}{0.2} = \mathbf{10.0}$$

> **Key insight**: With just **2 securities** but strong **negative correlation** (near-arbitrage), breadth can reach **10.0** — leading to very high information ratios even with modest IC. This explains why arbitrage-like strategies can appear to generate outsized risk-adjusted returns.

---

### Case C: Fixed-Income — A Structural Independence Problem

**Why fixed-income breaks the standard fundamental law framework:**

| Equity | Fixed Income |
|--------|--------------|
| Risk decomposed into **systematic + idiosyncratic** | Almost all bonds share **duration risk** |
| Idiosyncratic (active) returns are relatively **independent** after removing systematic factors | Returns correlated through duration, credit risk, **and optionality** — in subtler, harder-to-model ways |
| Normal distribution assumption reasonably valid | **Normality assumption is clearly unwarranted** for bonds with default risk and embedded options |

> This makes breadth **harder to accurately determine** for bond portfolios compared to equity portfolios.

---

### Time-Series Independence Limitation

**Key requirement for increasing breadth via more frequent rebalancing**: Sequential forecasts must be **truly independent** period-to-period.

**Common violation**: If a forecasting signal (e.g., earnings yield) **changes slowly**, a stock forecasted to outperform this month is **likely to retain that forecast** for several subsequent months → **NOT independent** → rebalancing more frequently does NOT proportionally increase breadth.

---

### Example 10 — Diagnosing an Unrealistic Information Ratio

**Setup**: Monthly stock selection in S&P 500; IC = 0.05; naively calculated BR = $12 \times 500 = 6,000$

**Naive (flawed) calculation:**
$$IR = 0.05 \times \sqrt{6,000} = \mathbf{3.87}$$
$$E(R_A) = 3.87 \times 3.0\% = \mathbf{11.6\%} \text{ (implausibly high)}$$

**Why this is unrealistic — Multiple explanations:**

#### 1. Cross-Sectional Dependence
S&P 500 stocks are **correlated** (sector/industry effects) → forecasting outperformance of all stocks in one sector isn't 500 independent decisions → **breadth < 500** per period.

#### 2. Time-Series Dependence
Monthly forecasts likely **correlated over time** — e.g., if based on a slowly-changing signal like earnings yield, a stock's forecast persists for multiple months → **breadth < 12 rebalances/year** in practice.

#### 3. Uncertainty in IC
Even a "modest" IC = 0.05 doesn't account for:
- Uncertainty about the TRUE level of skill
- Possible time-variation in actual forecasting ability
- Different skill levels across different stock groups

#### 4. Constraints (Weaker Explanation)
Long-only/turnover constraints (captured by TC) are a **well-known, separate refinement** — citing this is a **weaker answer** since it's already a recognized part of the standard framework, not really a "hidden" limitation being tested here.

> **Grading insight**: The best answers focus on the **less obvious** limitations (correlation structure, skill uncertainty) rather than the already-well-known constraint/TC issue.

---

### Summary of Key Limitations

| Limitation | Effect | Correction |
|------------|--------|-----------|
| **IC uncertainty** | Reduces realized IR to 45-91% of naive estimate | Qian-Hua strategy risk adjustment |
| **Cross-sectional correlation (positive)** | Breadth < N | Clarke-de Silva-Thorley formula |
| **Cross-sectional correlation (negative)** | Breadth CAN exceed N (arbitrage-like) | Same formula, negative ρ |
| **Time-series correlation** | More frequent rebalancing doesn't proportionally increase breadth | Requires truly independent period-to-period forecasts |
| **Fixed-income structural correlation** | Duration/credit/optionality create subtle correlations | Standard equity-style decomposition doesn't cleanly apply |

---

### Key Formula Reference Card

| Formula | Expression |
|---------|-----------|
| **Strategy risk decomposition** | $\sigma_A = \sqrt{\sigma_{RM}^2 + \sigma_{IC}^2}$ |
| **Breadth formula (uniform correlation)** | $BR = N/[1+(N-1)\rho]$ |
| **Impact of IC uncertainty** | Realized IR = 45%-91% of naive fundamental law prediction |

---

### Exam Tips

- **Uncertainty about skill (IC) always reduces** actual information ratios below naive fundamental law predictions — realized IRs are typically **45-91%** of the theoretical estimate
- **Breadth formula**: $BR = N/[1+(N-1)\rho]$ — memorize for calculating effective breadth with uniform correlations
- **Positive correlation → breadth < N**; **Negative correlation → breadth CAN exceed N** (arbitrage-like strategies)
- **Two-security arbitrage example**: with $\rho = -0.8$, breadth can reach 10.0 from just 2 assets — explains high apparent Sharpe/information ratios in true arbitrage
- **Fixed-income breaks the clean idiosyncratic-return framework** — duration, credit, and optionality create correlations that don't decompose as neatly as equity systematic/idiosyncratic risk
- **More frequent rebalancing only helps IF decisions are truly independent** over time — slowly-changing signals (like earnings yield) violate this and prevent the expected breadth increase
- **When diagnosing an implausibly high IR**: focus on (1) cross-sectional correlation, (2) time-series correlation, (3) skill uncertainty — NOT just constraints/TC, which is a separate, well-known issue
- **The fundamental law's assumptions are a starting point, not a guarantee** — always sanity-check unrealistic-looking IR values against these practical limitations