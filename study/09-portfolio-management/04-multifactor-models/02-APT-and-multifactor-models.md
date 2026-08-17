---
layout: page
title: "Arbitrage Pricing Theory and Multifactor Models"
permalink: /study/09-portfolio-management/04-multifactor-models/02-APT-and-multifactor-models/
next: /cfa/study/09-portfolio-management/04-multifactor-models/03-types-of-multifactor-models/
---
## Summary: Arbitrage Pricing Theory and Multifactor Models (CFA Level II — Portfolio Management)

---

### Overview — APT vs. CAPM

**Arbitrage Pricing Theory (APT)**: Developed by Ross (1976) as an alternative to CAPM — explains expected returns using **multiple systematic risk factors**.

**Key advantage over CAPM**: **Fewer/weaker assumptions**; APT does NOT specify the identity or number of risk factors — it's a general framework applicable to any assumed multifactor return-generating process.

---

### The Multifactor Return-Generating Process

$$\boxed{R_i = a_i + b_{i1}I_1 + b_{i2}I_2 + \ldots + b_{iK}I_K + \varepsilon_i}$$

| Term | Meaning |
|------|---------|
| $R_i$ | Return on asset $i$ |
| $a_i$ | Intercept (expected return when all factors = 0) |
| $I_k$ | Return on factor $k$ |
| $b_{ik}$ | Sensitivity of asset $i$ to factor $k$ |
| $\varepsilon_i$ | Error term (mean = 0; unexplained by factors) |

**Common variant**: Subtract risk-free rate from both sides → dependent variable becomes **excess return** (used in the Carhart model).

---

### Three Key APT Assumptions

1. **A factor model describes asset returns** (number of factors unspecified)
2. **Investors can form well-diversified portfolios** that eliminate asset-specific risk (empirically supported — Fabozzi 2008)
3. **No arbitrage opportunities exist** among well-diversified portfolios

---

### Definition of Arbitrage

$$\boxed{\text{Arbitrage} = \text{Risk-free operation, zero net investment, positive expected profit}}$$

> **Caution**: "Arbitrage" or "risk arbitrage" in practice sometimes describes strategies with SIGNIFICANT risk — the formal APT definition requires **true riskless profit**.

---

### The APT Equation

$$\boxed{E(R_p) = R_F + \lambda_1\beta_{p,1} + \lambda_2\beta_{p,2} + \ldots + \lambda_K\beta_{p,K}}$$

| Term | Meaning |
|------|---------|
| $\lambda_j$ | **Factor risk premium** for factor $j$ |
| $\beta_{p,j}$ | Portfolio's sensitivity to factor $j$ |
| $K$ | Number of factors (must be << number of assets) |

**If no risk-free asset exists**: Replace $R_F$ with $\lambda_0$ = expected return of a **zero-sensitivity** risky portfolio.

---

### Factor Risk Premium — Interpretation

$$\boxed{\lambda_j = \text{Expected reward for bearing risk of a PURE FACTOR PORTFOLIO for factor } j}$$

**Pure factor portfolio**: Sensitivity = 1 to factor $j$; sensitivity = 0 to all other factors.

**Numerical example**: Portfolio with $\beta_1 = 1$, all others = 0; $E(R) = 12\%$, $R_F = 4\%$:
$$\lambda_1 = 0.12 - 0.04 = \mathbf{8\%}$$

---

### Example 1 — Solving for RF and λ in a One-Factor Model

**Given three portfolios:**

| Portfolio | E(R) | Factor Sensitivity |
|-----------|------|----------------------|
| A | 7.5% | 0.5 |
| B | 15.0% | 2.0 |
| C | 7.0% | 0.4 |

**Setting up two equations (using A and B):**
$$0.075 = R_F + 0.5\lambda_1 \qquad 0.150 = R_F + 2\lambda_1$$

**Solving:**
$$R_F = 0.075 - 0.5\lambda_1$$
$$0.15 = 0.075 - 0.5\lambda_1 + 2\lambda_1 \implies 0.075 = 1.5\lambda_1 \implies \lambda_1 = \mathbf{0.05 (5\%)}$$
$$R_F = 0.075 - 0.5(0.05) = \mathbf{0.05 (5\%)}$$

**Resulting APT equation:**
$$E(R_p) = 0.05 + 0.05\beta_{p,1}$$

**Verification with Portfolio C** ($\beta = 0.4$):
$$E(R_C) = 0.05 + 0.05(0.4) = \mathbf{7.0\%} ✓ \text{ (matches given value)}$$

---

### Example 2 — Detecting Arbitrage Opportunities

**Adding Portfolio D**: $E(R_D) = 8.0\%$, $\beta_D = 0.45$

**Test**: Create a synthetic portfolio matching D's factor sensitivity using A and C:

**Equal-weighted A+C portfolio:**
$$E(R_{AC}) = 0.5(0.075) + 0.5(0.070) = \mathbf{7.25\%}$$
$$\beta_{AC} = 0.5(0.50) + 0.5(0.40) = \mathbf{0.45}$$

**Same factor sensitivity as D (0.45), but different expected return (7.25% vs. 8.0%)!**

**APT-predicted return for D:**
$$E(R_D)^{APT} = 0.05 + 0.05(0.45) = \mathbf{7.25\%}$$

$$\boxed{\text{Portfolio D is UNDERVALUED} \text{ — offers 8\% but "should" offer only 7.25\% given its risk}}$$

---

### Constructing the Arbitrage Portfolio

**Strategy**: Buy $10,000 of D; Fund by short-selling $10,000 equal-weighted A+C portfolio

| Position | Initial Cash Flow | Final Cash Flow (1yr) | Factor Sensitivity |
|----------|---------------------|---------------------------|----------------------|
| Long D | −$10,000 | +$10,800 | +0.45 |
| Short A+C | +$10,000 | −$10,725 | −0.45 |
| **Net** | **$0** | **+$75** | **0** |

**Verification:**
- Zero net investment ✓
- Zero factor risk (0.45 − 0.45 = 0) ✓
- Guaranteed positive profit ($75) ✓
- Idiosyncratic risk negligible (well-diversified portfolios) ✓

$$\boxed{\text{This IS a true arbitrage opportunity — meets all three requirements}}$$

**Market correction mechanism**: Investors would buy D (bidding up its price, lowering expected return) until the arbitrage disappears and equilibrium is restored — i.e., until $E(R_D)$ converges to 7.25%.

---

## The Carhart Four-Factor Model

### Overview

**Extension of Fama-French three-factor model** + **momentum factor**.

**Three "anomalous" return groups** (higher returns than CAPM alone predicts):
1. **Small-cap stocks**
2. **Low price-to-book stocks** ("value" stocks)
3. **Rising-price stocks** ("momentum" stocks)

### The Model

$$\boxed{R_p - R_F = a_p + b_{p1}RMRF + b_{p2}SMB + b_{p3}HML + b_{p4}WML + \varepsilon_p}$$

| Factor | Meaning |
|--------|---------|
| **RMRF** | Market index return **minus** risk-free rate |
| **SMB** | "Small Minus Big" — small-cap portfolio return minus large-cap portfolio return |
| **HML** | "High Minus Low" — high book-to-market minus low book-to-market portfolio return |
| **WML** | "Winners Minus Losers" — momentum factor (top 30% 11-month return performers minus bottom 30%, lagged 1 month) |

**Equilibrium expected return version** (applying APT logic, since $E(\alpha) = 0$):

$$\boxed{E(R_p) = R_F + \beta_{p,1}RMRF + \beta_{p,2}SMB + \beta_{p,3}HML + \beta_{p,4}WML}$$

---

### CAPM "Anomalies" → Carhart Systematic Factors

**Key conceptual shift**: 

| From CAPM Perspective | From Carhart Perspective |
|-------------------------|------------------------------|
| Size, value, momentum = **anomalies** (unexplained deviations from CAPM) | Size, value, momentum = **legitimate systematic risk factors** |
| Extra returns = market inefficiency or luck | Extra returns = **compensation for bearing additional systematic risk** |

$$\boxed{\text{"Anomaly"} = \text{Observed market regularity NOT explained by (or contradicting) a given asset pricing theory}}$$

---

### Practical Relevance

**Size, value, and momentum** remain **robust, widely-used themes** in:
- Equity portfolio construction
- Active management **risk decomposition**
- **Return attribution** analysis

---

### Key Formula Reference Card

| Formula | Expression |
|---------|-----------|
| **Return-generating process** | $R_i = a_i + \sum b_{ik}I_k + \varepsilon_i$ |
| **APT equilibrium equation** | $E(R_p) = R_F + \sum \lambda_j \beta_{p,j}$ |
| **Factor risk premium** | $\lambda_j = E(R_{\text{pure factor }j}) - R_F$ |
| **Carhart model** | $R_p - R_F = a_p + b_1RMRF + b_2SMB + b_3HML + b_4WML + \varepsilon_p$ |

---

### Exam Tips

- **APT vs. CAPM**: APT makes FEWER assumptions and doesn't specify factor identity/number — more flexible framework
- **Three APT assumptions**: factor model exists, diversification eliminates idiosyncratic risk, no arbitrage among well-diversified portfolios
- **Solving for RF and λ**: use two portfolios' equations, solve simultaneously (same technique as solving two-point linear equations)
- **Arbitrage test**: create a synthetic portfolio matching the target's factor sensitivity — if expected returns differ, arbitrage exists
- **Arbitrage portfolio construction**: long the undervalued asset, short a matching-sensitivity synthetic portfolio, verify zero net investment + zero factor risk + positive profit
- **Undervalued** = offers HIGHER return than APT predicts for its risk (buy signal); **Overvalued** = offers LOWER return than APT predicts (sell signal)
- **Carhart model factors**: RMRF (market), SMB (size), HML (value), WML (momentum) — memorize all four
- **CAPM "anomalies" become Carhart "systematic factors"** — this reframing is the conceptual core of the model
- **WML construction**: top 30% vs. bottom 30% of 11-month returns, lagged 1 month — specific methodology worth remembering
- **Size, value, momentum remain actively used** in modern portfolio risk decomposition and attribution
