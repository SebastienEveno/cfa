---
layout: page
title: "The Full Fundamental Law"
permalink: /study/09-portfolio-management/02-analysis-of-active-management/06-the-full-fundamental-law/
prev: /cfa/study/09-portfolio-management/02-analysis-of-active-management/05-fundamental-law-of-active-management/
next: /cfa/study/09-portfolio-management/02-analysis-of-active-management/07-applications-of-fundamental-law/
---
## Summary: The Full Fundamental Law (CFA Level II — Portfolio Management)

---

### From Unconstrained to Constrained — Why We Need the Transfer Coefficient

**Reality**: Most portfolios face **constraints** (long-only restrictions, turnover limits, ESG screens) that prevent achieving the theoretically optimal active weights ($\Delta w_i^*$).

**Actual active weights**: $\Delta w_i$ (without asterisk) — differ from unconstrained optimal $\Delta w_i^*$.

---

### The Transfer Coefficient (TC)

$$\boxed{TC = \rho\left(\frac{\mu_i}{\sigma_i}, \Delta w_i \sigma_i\right)}$$

**Interpretation**: Risk-weighted correlation between **forecasted active returns** and **actual active weights** — measures how effectively forecasts are translated into real portfolio positions.

**Alternative expression**: Correlation between **optimal** active weights and **actual** active weights.

**Range and typical values:**

| TC Value | Meaning |
|----------|---------|
| **TC = 1.00** | No binding constraints — perfect correspondence; full expected value added realized |
| **TC = 0.20–0.90** | Typical range in practice |
| **TC = 0.00** | No correspondence between forecasts and weights → **zero expected value added** |
| **TC < 0** | Possible if weights negatively correlate with forecasts (portfolio needs rebalancing) |

---

### The Expanded (Full) Fundamental Law

$$\boxed{E(R_A) = TC \times IC \times \sqrt{BR} \times \sigma_A}$$

**Information ratio version:**
$$\boxed{IR = TC \times IC \times \sqrt{BR}}$$

> **Key insight**: Even a manager with strong skill (IC) and broad decision-making (BR) will see **diminished** information ratio if constraints prevent full expression of those views (**low TC**).

---

### Example 6 — Calculating and Applying TC

**Setup**: 4 securities, uncorrelated active returns; optimal weights vs. actual (constrained) weights:

| Security | Expected Active Return | σ | Optimal Weight | Actual Weight |
|----------|--------------------------|---|-----------------|-----------------|
| #1 | 5.0% | 25.0% | 18% | 6% |
| #2 | 10.0% | 50.0% | 9% | 4% |
| #3 | −5.0% | 25.0% | −18% | 7% |
| #4 | −10.0% | 50.0% | −9% | −17% |

**Q1 — Calculate TC:**
Risk-weighted pairs: $(\Delta w_i \sigma_i, \mu_i/\sigma_i)$
$$\text{Correlation across 4 securities} = TC = \mathbf{0.58}$$

> Confirms: optimal weights would give TC = 1.0 (by definition/construction)

**Q2 — Active return and risk using ACTUAL weights:**
$$E(R_A) = 0.06(5.0) + 0.04(10.0) + 0.07(-5.0) + (-0.17)(-10.0) = \mathbf{2.1\%}$$

$$\sigma_A = \sqrt{0.06^2(25)^2 + 0.04^2(50)^2 + 0.07^2(25)^2 + (-0.17)^2(50)^2} = \mathbf{9.0\%}$$

**Q3 — Verify expanded fundamental law:**
$$E(R_A) = TC \times IC \times \sqrt{BR} \times \sigma_A = 0.58 \times 0.20 \times \sqrt{4} \times 9.0\% = 0.58 \times 0.20 \times 2 \times 9.0\%$$
$$= \mathbf{2.09\% \approx 2.1\%} ✓$$

> **Confirmed**: Constrained active return (2.1%) < unconstrained optimal (3.6%) — the gap reflects the cost of constraints (TC = 0.58 vs. TC = 1.0).

---

### Optimal Active Risk Under Constraints

$$\boxed{\sigma_A^* = TC \times \left(\frac{IR^*}{SR_B}\right) \times \sigma_B}$$

Where $IR^*$ = **unconstrained** information ratio.

**Maximum achievable constrained Sharpe ratio:**
$$\boxed{SR_P^2 = SR_B^2 + TC^2 \times IR^{*2}}$$

**Key implication**: With **TC = 0.00**, optimal active risk = **0** → investor should simply hold the passive benchmark.

---

### Numerical Example — TC's Impact on Optimal Aggressiveness

**Setup**: TC = 0.50, unconstrained IR* = 0.30, Benchmark: SR = 0.40, σ = 16.0%

**Optimal active risk:**
$$\sigma_A^* = 0.50 \times \frac{0.30}{0.40} \times 16.0\% = \mathbf{6.0\%}$$

**Resulting Sharpe ratio:**
$$SR_P = \sqrt{0.40^2 + 0.50^2 \times 0.30^2} = \sqrt{0.16 + 0.0225} = \sqrt{0.1825} = \mathbf{0.43}$$

**If current active risk = 8.0%, adjust to optimal 6.0%:**
$$\text{Benchmark weight needed} = 1 - \frac{6.0}{8.0} = \mathbf{25\%}$$
$$\text{Active fund weight} = \mathbf{75\%}$$

---

## Ex Post Performance Measurement

### Realized Information Coefficient (ICR)

**Conditional expected value added:**

$$\boxed{E(R_A | IC_R) = TC \times IC_R \times \sqrt{BR} \times \sigma_A}$$

**Total realized active return decomposition:**

$$\boxed{R_A = E(R_A | IC_R) + \text{Noise}}$$

Where **Noise** = deviation from the constraint-adjusted, IC-conditional expectation.

---

### Variance Decomposition — Skill vs. Noise

$$\boxed{\text{Proportion from realized IC variation} = TC^2}$$
$$\boxed{\text{Proportion from constraint-induced noise} = 1 - TC^2}$$

**Example** (TC = 0.60):
$$TC^2 = 36\% \text{ from IC variation} \qquad 1-TC^2 = 64\% \text{ from constraint noise}$$

> **Important consequence**: **Low-TC investors** frequently experience periods where:
> - Forecasting succeeds BUT actual performance is poor (bad luck with noise)
> - Forecasting fails BUT actual performance is good (fortunate noise offset)

---

### Example 7 — Ex Post Performance Analysis

**Setup**: BR = 100, IC (expected) = 0.05, TC = 0.80, $\sigma_A = 4.0\%$

**Expected value added (using expected IC):**
$$E(R_A) = 0.80 \times 0.05 \times \sqrt{100} \times 4.0\% = 0.80 \times 0.05 \times 10 \times 4.0\% = \mathbf{1.6\%}$$

**Q1 — Realized IC = −0.10 (instead of expected 0.05); expected value added conditional on this:**
$$E(R_A|IC_R) = 0.80 \times (-0.10) \times \sqrt{100} \times 4.0\% = 0.80 \times (-0.10) \times 10 \times 4.0\% = \mathbf{-3.2\%}$$

**Q2 — Actual active return = −2.6%; decompose into skill vs. noise:**
$$\text{Noise} = R_A - E(R_A|IC_R) = -2.6\% - (-3.2\%) = \mathbf{+0.6\%}$$

> **Interpretation**: The realized skill (negative IC) produced a −3.2% expected drag, but **positive noise (+0.6%)** partially offset this, resulting in an actual −2.6% return. Noise could just as easily have made performance worse.

**Q3 — Variance decomposition:**
$$TC^2 = 0.80^2 = \mathbf{64\%} \text{ from forecasting skill variation}$$
$$1 - TC^2 = \mathbf{36\%} \text{ from constraint-induced noise}$$

---

### Key Formula Reference Card

| Formula | Expression |
|---------|-----------|
| **Full fundamental law** | $E(R_A) = TC \times IC \times \sqrt{BR} \times \sigma_A$ |
| **Constrained IR** | $IR = TC \times IC \times \sqrt{BR}$ |
| **Optimal constrained active risk** | $\sigma_A^* = TC \times (IR^*/SR_B) \times \sigma_B$ |
| **Max constrained Sharpe ratio** | $SR_P^2 = SR_B^2 + TC^2 \times IR^{*2}$ |
| **Ex post conditional value added** | $E(R_A|IC_R) = TC \times IC_R \times \sqrt{BR} \times \sigma_A$ |
| **Realized active return decomposition** | $R_A = E(R_A|IC_R) + \text{Noise}$ |
| **Variance from skill vs. noise** | $TC^2$ vs. $1-TC^2$ |

---

### Exam Tips

- **Full fundamental law**: $IR = TC \times IC \times \sqrt{BR}$ — the complete, practical version accounting for real-world constraints
- **TC = 1.0**: unconstrained (theoretical maximum); **TC = 0**: constraints completely negate forecasting value
- **Constraints always reduce (or leave unchanged) the achievable information ratio** relative to the unconstrained optimum
- **Optimal active risk under constraints**: scale by TC in addition to (IR*/SR_B)
- **Ex post analysis**: substitute realized IC (ICR) for expected IC to get conditional expected value added
- **Variance decomposition**: $TC^2$ = skill-driven variance; $1-TC^2$ = constraint-induced noise variance
- **Low TC managers**: expect frequent divergence between forecasting success and actual performance — noise dominates
- **Negative realized IC** doesn't necessarily mean negative actual returns — noise can offset (or worsen) the skill-driven expectation
- Always distinguish between **expected** (ex ante) fundamental law using assumed IC, and **conditional/ex post** version using realized ICR
