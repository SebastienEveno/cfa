---
layout: page
title: "Factor Models in Risk Attribution"
permalink: /study/09-portfolio-management/04-multifactor-models/07-factor-models-in-risk-attribution/
prev: /cfa/study/09-portfolio-management/04-multifactor-models/06-factor-models-in-return-attribution/
next: /cfa/study/09-portfolio-management/04-multifactor-models/08-factor-models-in-portfolio-construction/
---
## Summary: Factor Models in Risk Attribution (CFA Level II — Portfolio Management)

---

### Key Terms — Active Risk Fundamentals

**Tracking Error (TE)** = Active Risk = Standard deviation of active returns:

$$\boxed{TE = s(R_P - R_B)}$$

**Annualization conventions:**
$$\text{Daily TE} \times \sqrt{250} \quad \text{(daily-to-annual)}$$
$$\text{Monthly TE} \times \sqrt{12} \quad \text{(monthly-to-annual)}$$

---

### Typical Tracking Error Ranges (US Equity Markets)

| Strategy Type | Typical Annual TE |
|---------------|---------------------|
| **Well-executed passive strategy** | ≤ **0.10%** |
| **Low-risk active/enhanced index** | ~**2%** |
| **Diversified active large-cap** | **2%–6%** |
| **Aggressive active manager** | **6%–10%+** |

---

### Information Ratio (Historical/Ex Post)

$$\boxed{IR = \frac{\bar{R}_P - \bar{R}_B}{TE}}$$

**Numerical example**: Portfolio return = 9%, Benchmark = 7.5%, TE = 6%
$$IR = \frac{9\% - 7.5\%}{6\%} = \mathbf{0.25}$$

> **Assumption**: Portfolio has same systematic risk as benchmark.

---

### Example 8 — Setting Active Manager Guidelines

**Practical application**: A pension fund's "low-active-risk US large-cap equity" mandate might specify:

- Holdings must be S&P 500 components
- Minimum 200 issues; max position size = greater of 5% or 150% of S&P 500 weight
- **Minimum information ratio: 0.30** (since inception or trailing 7 years)
- **Maximum tracking risk: 3%** vs. S&P 500

> **Key insight**: Benchmark-relative risk/return framework allows investors to write **quantitative, enforceable guidelines** into manager mandates — the benchmark serves as a continuously observable reference standard.

---

### Analyst Questions Addressed by Risk Decomposition

1. What active exposures contributed **most** to tracking error?
2. Is the manager **aware** of and able to **articulate rationale** for these exposures?
3. Are active risk exposures **consistent** with stated investment philosophy?
4. Which active bets earned **adequate returns** for the risk taken?

> **Preferred tool**: Fundamental factor models — directly and intuitively relate risk exposures to portfolio decisions.

---

### Active Risk Squared — Decomposition Framework

**Why use variances instead of standard deviations?** Variances of **uncorrelated variables are additive** — makes decomposition mathematically tractable.

$$\boxed{\text{Active risk squared} = s^2(R_P - R_B)}$$

**Two components:**

$$\boxed{\text{Active risk squared} = \text{Active factor risk} + \text{Active specific risk}}$$

| Component | Definition |
|-----------|-----------|
| **Active factor risk** | Contribution from **different-from-benchmark exposures** to risk model factors |
| **Active specific risk** | **Non-factor/residual risk** from individual security selection (security-specific bets) |

---

### Formulas for Each Component

**Active specific risk:**
$$\boxed{\text{Active specific risk} = \sum_i (\Delta w_i)^2 \times \sigma_{\varepsilon,i}^2}$$

Where $\Delta w_i$ = active weight of asset $i$; $\sigma_{\varepsilon,i}^2$ = residual (unexplained) variance of asset $i$.

**Active factor exposure to factor $j$:**
$$\boxed{TB_j = \sum_i \Delta w_i \times b_{ij}}$$

**Active factor risk** (found indirectly):
$$\boxed{\text{Active factor risk} = \text{Active risk squared} - \text{Active specific risk}}$$

---

### Example 9 — Comparing Four Managers' Active Risk (BARRA US-E4 Model)

**Model**: 12 style factors + 60 industry factors

**Exhibit 10 — Active Risk Squared Decomposition (% squared):**

| Portfolio | Industry | Style Factor | Total Factor | Active Specific | Active Risk Squared |
|-----------|----------|---------------|---------------|-------------------|------------------------|
| **A** | 12.25 | 17.15 | 29.40 | 19.60 | **49** |
| **B** | 1.25 | 13.75 | 15.00 | 10.00 | **25** |
| **C** | 1.25 | 17.50 | 18.75 | 6.25 | **25** |
| **D** | 0.03 | 0.47 | 0.50 | 0.50 | **1** |

**Exhibit 11 — Restated as Proportions and Tracking Error:**

| Portfolio | Industry % | Style % | Total Factor % | Active Specific % | **Tracking Error** |
|-----------|-----------|---------|-------------------|----------------------|----------------------|
| **A** | 25% | 35% | 60% | 40% | **7%** |
| **B** | 5% | 55% | 60% | 40% | **5%** |
| **C** | 5% | 70% | 75% | 25% | **5%** |
| **D** | 3% | 47% | 50% | 50% | **1%** |

---

### Q1 — Comparing Portfolios A and B

**Key finding**: A has **higher absolute risk** (7% vs. 5% TE), and while **both have the same proportion** of factor vs. specific risk (60%/40%), their **factor risk composition differs dramatically**:

| | Portfolio A | Portfolio B |
|--|-------------|-------------|
| **Industry risk** | **Substantial** (25% of total) | **Minimal** (5% — approximately industry-neutral) |
| **Style factor risk** | 35% | **Higher** (55%) |

> **Interpretation**: A takes concentrated **industry bets**; B is **industry-neutral** but expresses views via **company/share characteristic tilts** (style factors).

---

### Q2 — Comparing Portfolios B and C

**Similar absolute risk** (both 5% TE), **both approximately industry-neutral**, but different split:

| | Portfolio B | Portfolio C |
|--|-------------|-------------|
| **Style factor risk** | 55% | **Higher (70%)** |
| **Active specific risk** | **Higher (40%)** | 25% |

> **Interpretation**: C takes **more concentrated style bets**; B relies **more on individual security selection** — implying **B is somewhat LESS diversified** than C (higher specific risk = more idiosyncratic bets on individual names).

---

### Q3 — Characterizing Portfolio D

**Extremely low active risk squared (1)** → **Tracking error = √1 = 1%**

$$\boxed{\text{Portfolio D} \approx \text{Passively managed} \text{ — risk exposures very closely match the benchmark}}$$

> **Active factor risk of 0.50 (%²) = 0.707% as standard deviation** — negligible deviation from benchmark factor structure.

---

### Application Beyond Equities

**Multifactor risk decomposition also applies to:**
- **Fixed-income portfolios**: Using **duration and spread** as factors
- **Multi-asset/multi-strategy funds**: Can decompose **total** risk (not just active risk) using appropriate multifactor model

---

### Comprehensive Summary Table

| Concept | Formula | Interpretation |
|---------|---------|------------------|
| **Tracking error** | $s(R_P - R_B)$ | Standard deviation of active returns |
| **Information ratio** | $(\bar{R}_P - \bar{R}_B)/TE$ | Risk-adjusted active return |
| **Active risk squared** | $s^2(R_P - R_B)$ | Variance of active returns |
| **Active specific risk** | $\sum(\Delta w_i)^2 \sigma_{\varepsilon,i}^2$ | Idiosyncratic/security-specific risk contribution |
| **Active factor risk** | Active risk squared − Active specific risk | Systematic factor exposure contribution |
| **Active factor exposure** | $\sum \Delta w_i \times b_{ij}$ | Portfolio's net tilt to factor $j$ |

---

### Exam Tips

- **TE = standard deviation of active returns**; **Active risk squared = variance of active returns** — know both terms
- **Variances (not standard deviations) are used for decomposition** because uncorrelated variance components are additive
- **Active risk squared = Active factor risk + Active specific risk** — the fundamental decomposition
- **Same proportion of factor/specific risk ≠ same TYPE of factor exposure** — always examine the sub-components (industry vs. style) for real insight
- **High active specific risk = less diversified portfolio** (more concentrated individual security bets)
- **Near-zero active risk = essentially passive/index-tracking** portfolio, even if nominally "active"
- **IR formula assumes equal systematic risk** between portfolio and benchmark — a key caveat
- **Fundamental factor models preferred for risk attribution** — intuitive link between exposures and portfolio manager decisions
- **Annualization**: multiply daily TE by √250, monthly TE by √12
- Framework extends to **fixed income** (duration/spread factors) and **multi-asset strategies** (total risk, not just active risk)
