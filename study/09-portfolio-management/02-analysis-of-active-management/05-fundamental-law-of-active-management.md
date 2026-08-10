---
layout: page
title: "Active Security Returns and The Fundamental Law of Active Management"
permalink: /study/09-portfolio-management/02-analysis-of-active-management/05-fundamental-law-of-active-management/
prev: /cfa/study/09-portfolio-management/02-analysis-of-active-management/04-constructing-optimal-portfolios/
next: /cfa/study/09-portfolio-management/02-analysis-of-active-management/06-the-full-fundamental-law/
---
## Summary: Active Security Returns and The Fundamental Law of Active Management (CFA Level II — Portfolio Management)

---

### Overview — What the Fundamental Law Does

**Purpose**: A mathematical framework connecting an active manager's **skill** (forecasting ability) and **implementation** (breadth of decisions, active risk) to the **expected information ratio**.

**Uses**: Sizing active weights, estimating expected value added, or evaluating realized performance.

---

### Active Security Returns — Setup

$$\boxed{R_{Ai} = R_i - R_B} \qquad \text{(simple active return definition)}$$

**Investor's forecast**: $\mu_i = E(R_{Ai})$ — subjective expectation, not a formal equilibrium model output.

**Alternative definitions** (accommodating risk models):
- **Single-factor**: $R_{Ai} = R_i - \beta_i R_B$
- **Multi-factor**: $R_{Ai} = R_i - \sum_j \beta_{j,i} R_j$

> Fundamental law does **NOT require** validity of CAPM, APT, or any equilibrium theory — it's a standalone framework.

---

### The Correlation Triangle (Exhibit 6)

**Three corners:**
1. **Forecasted active returns** ($\mu_i$)
2. **Active portfolio weights** ($\Delta w_i$)
3. **Realized active returns** ($R_{Ai}$)

**Key correlations (the triangle's "legs"):**

| Correlation | Between | Called | Meaning |
|-------------|---------|--------|---------|
| **Signal quality** | $\mu_i$ ↔ $R_{Ai}$ | **Information Coefficient (IC)** | How well forecasts predict actual outcomes |
| **Implementation** | $\Delta w_i$ ↔ $\mu_i$ | **Transfer Coefficient (TC)** | How well forecasts are converted into positions |
| **Value added** | $\Delta w_i$ ↔ $R_{Ai}$ | Base of triangle | Actual realized value added |

**Algebraic decomposition:**
$$R_A = \sum \Delta w_i R_{Ai} = N \times COV(\Delta w, R_A) = N \times \sigma(\Delta w) \times \sigma(R_A) \times \rho(\Delta w, R_A)$$

---

### Optimal Active Weights (Mean-Variance)

**For uncorrelated active returns, subject to active risk constraint:**

$$\boxed{\Delta w_i^* = \frac{\sigma_A}{\sigma_i} \times \frac{\mu_i}{\sigma_i} \times \frac{1}{\sqrt{N}}}$$

> Intuition: Higher forecasted return $\mu_i$ → larger active weight; higher forecast volatility $\sigma_i$ → smaller active weight (uncertainty penalty); overall scaled by desired active risk $\sigma_A$.

---

### The Grinold Scaling Rule

$$\boxed{\mu_i = IC \times \sigma_i \times S_i}$$

Where:
- **$IC$**: expected information coefficient (single value for all securities)
- **$\sigma_i$**: security-specific forecast volatility
- **$S_i$**: standardized score (cross-sectional variance = 1)

**Resulting optimal active weights (combining with Grinold rule):**

$$\boxed{\Delta w_i^* = \frac{IC \times S_i \times \sigma_A}{\sigma_i \times \sqrt{BR}}}$$

Where **BR** (breadth) replaces $N$ in the more general formula.

---

### Information Coefficient (IC)

$$\boxed{IC = \rho(\mu_i, R_{Ai}) \quad \text{(risk-weighted correlation)}}$$

**Properties:**
- Range: **−1.00 to +1.00**
- Typical values: **< 0.20** (small positive values are the norm — skill is hard to demonstrate consistently)
- **Ex ante IC must be positive** — otherwise investor should simply hold the passive benchmark
- **Ex post (realized) IC** can be positive OR negative

---

### Breadth (BR)

**Conceptual definition**: The number of **independent** investment decisions made per year.

| Scenario | Breadth |
|----------|---------|
| **Single-factor model, independent decisions** | BR = Number of securities (N) |
| **Positively correlated securities** (e.g., same industry) | **BR < N** (fewer truly independent bets) |
| **Negatively correlated securities** | **BR > N** (can be non-integer) |
| **Persistent characteristics** (low decision frequency) | **Lower breadth over time** |
| **Independent quarterly/monthly forecasts** | **BR up to N × rebalancing periods per year** |

---

### Example 4 — Scaling Forecasts and Sizing Weights

**Setup**: 4 uncorrelated securities; IC = 0.20; Scores: Securities #1,#2 = +1.0; Securities #3,#4 = −1.0; Active risk target = 9.0%

**Step 1 — Forecasted active returns** ($\mu_i = IC \times \sigma_i \times S_i$):

| Security | Score | σ | Expected Active Return |
|----------|-------|---|--------------------------|
| #1 | +1.0 | 25.0% | 0.20(25.0)(1.0) = **5.0%** |
| #2 | +1.0 | 50.0% | 0.20(50.0)(1.0) = **10.0%** |
| #3 | −1.0 | 25.0% | **−5.0%** |
| #4 | −1.0 | 50.0% | **−10.0%** |

**Step 2 — Breadth**: BR = 4 (uncorrelated, independent decisions = number of securities)

**Step 3 — Active weights** (formula gives, for target $\sigma_A = 9.0\%$):

| Security | Expected Active Return | σ | Active Weight |
|----------|--------------------------|---|-----------------|
| #1 | 5.0% | 25.0% | **18.0%** |
| #2 | 10.0% | 50.0% | **9.0%** |
| #3 | −5.0% | 25.0% | **−18.0%** |
| #4 | −10.0% | 50.0% | **−9.0%** |

---

### The Basic Fundamental Law

$$\boxed{E(R_A)^* = IC \times \sqrt{BR} \times \sigma_A}$$

**Information ratio version:**
$$\boxed{IR^* = \frac{E(R_A)^*}{\sigma_A} = IC \times \sqrt{BR}}$$

> **This is THE central equation** — value added = **Skill (IC) × Breadth (√BR) × Aggressiveness (σ_A)**

---

### Example 5 — Verifying the Fundamental Law

**Setup**: Same 4-security portfolio; Benchmark equal-weighted (25% each), benchmark return = 10.0%

**Q1 — Portfolio weights and total returns:**

| Security | Portfolio Weight (25%+Active) | Total Return (10%+Active) |
|----------|-------------------------------|------------------------------|
| #1 | 43% | 15.0% |
| #2 | 34% | 20.0% |
| #3 | 7% | 5.0% |
| #4 | 16% | 0.0% |

**Q2 — Total and active return:**
$$R_P = 0.43(15.0) + 0.34(20.0) + 0.07(5.0) + 0.16(0.0) = \mathbf{13.6\%}$$
$$R_A = 13.6\% - 10.0\% = \mathbf{3.6\%}$$

**Verified via active weights × active returns:**
$$0.18(5.0) + 0.09(10.0) + (-0.18)(-5.0) + (-0.09)(-10.0) = 0.9+0.9+0.9+0.9 = 3.6\% ✓$$

**Q3 — Active risk of portfolio:**
$$\sigma_A = \sqrt{0.18^2(25^2) + 0.09^2(50^2) + 0.18^2(25^2) + 0.09^2(50^2)}$$
$$= \sqrt{2 \times [0.18^2 \times 625 + 0.09^2 \times 2500]}$$
$$= \sqrt{2 \times [20.25 + 20.25]} = \sqrt{81} = \mathbf{9.0\%}$$

**Q4 — Verify fundamental law:**
$$E(R_A)^* = IC \times \sqrt{BR} \times \sigma_A = 0.20 \times \sqrt{4} \times 9.0\% = 0.20 \times 2 \times 9.0\% = \mathbf{3.6\%} ✓$$

$$IR = 3.6\%/9.0\% = 0.40 = IC \times \sqrt{BR} = 0.20 \times 2 = 0.40 ✓$$

---

### Key Formula Reference Card

| Concept | Formula |
|---------|---------|
| **Active return** | $R_{Ai} = R_i - R_B$ |
| **Grinold scaling rule** | $\mu_i = IC \times \sigma_i \times S_i$ |
| **Optimal active weight** | $\Delta w_i^* = (IC \times S_i \times \sigma_A)/(\sigma_i \times \sqrt{BR})$ |
| **Basic fundamental law** | $E(R_A)^* = IC \times \sqrt{BR} \times \sigma_A$ |
| **Information ratio** | $IR^* = IC \times \sqrt{BR}$ |

---

### Exam Tips

- **Fundamental law: $IR = IC \times \sqrt{BR}$** — this is THE key formula to memorize
- **IC (skill)** and **BR (breadth)** are the two multiplicative drivers of information ratio — higher forecasting accuracy OR more independent bets both boost IR
- **Diversification of independent decisions matters**: even modest IC can generate a strong IR with sufficient breadth (many independent bets)
- **Grinold scaling rule**: $\mu_i = IC \times \sigma_i \times S_i$ — converts standardized scores into dollar/percentage forecasts
- **Active weight formula**: larger for high-confidence forecasts (high $\mu_i$), smaller for uncertain forecasts (high $\sigma_i$)
- **Correlation triangle**: IC = signal quality (forecast vs. realized); TC = implementation quality (forecast vs. actual weights)
- **Breadth ≠ number of securities** when returns are correlated — positively correlated securities reduce breadth below N; negatively correlated can increase it above N
- **Ex ante IC must be positive** for active management to make sense — otherwise, hold the passive benchmark
- Always **verify calculations two ways** (direct portfolio math vs. fundamental law formula) — they must match exactly