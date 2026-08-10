---
layout: page
title: "The Parametric Method of VaR Estimation"
permalink: /study/09-portfolio-management/05-measuring-and-managing-market-risk/03-parametric-method-of-var-estimation/
prev: /cfa/study/09-portfolio-management/05-measuring-and-managing-market-risk/02-estimating-var/
next: /cfa/study/09-portfolio-management/05-measuring-and-managing-market-risk/04-historical-simulation-method-of-var-estimation/
---
## Summary: The Parametric Method of VaR Estimation (CFA Level II — Portfolio Management)

---

### Overview

**Parametric method** (also called: **analytical method**, **variance-covariance method**)

**Core assumption**: Return distributions are **normal** — though not a strict requirement (other distributions require additional parameters like skewness/kurtosis).

**Why normal distribution is convenient**: Requires only **two parameters** — expected value (μ) and standard deviation (σ) — to fully describe the entire distribution.

---

### The Standard Normal (z) Distribution Transformation

$$\boxed{z = \frac{R - \mu}{\sigma}}$$

**Standard VaR thresholds in z-terms:**

| VaR Level | Standard Deviations Below Mean |
|-----------|-----------------------------------|
| **16% VaR** | 1.00 |
| **5% VaR** | **1.65** |
| **1% VaR** | **2.33** |

---

### Step 1: Portfolio Expected Return

$$\boxed{E(R_p) = w_{SPY}E(R_{SPY}) + w_{SPLB}E(R_{SPLB})}$$

**Calculation** (80% SPY at 10.5%, 20% SPLB at 6.0%):
$$E(R_p) = 0.80(10.5\%) + 0.20(6.0\%) = \mathbf{9.6\%}$$

---

### Step 2: Portfolio Volatility

$$\boxed{\sigma_p = \sqrt{w_{SPY}^2\sigma_{SPY}^2 + w_{SPLB}^2\sigma_{SPLB}^2 + 2w_{SPY}w_{SPLB}\rho_{SPY,SPLB}\sigma_{SPY}\sigma_{SPLB}}}$$

**Calculation** (σ_SPY = 20.0%, σ_SPLB = 8.5%, ρ = −0.06):
$$\sigma_p = \sqrt{(0.80)^2(0.20)^2 + (0.20)^2(0.085)^2 + 2(0.80)(0.20)(-0.06)(0.20)(0.085)}$$
$$\sigma_p = \mathbf{15.99\%}$$

**Portfolio (annual)**: Expected return = 9.6%; Volatility ≈ 15.99%

---

### Converting Annual → Daily Parameters (250 Trading Days)

$$\boxed{\text{Daily expected return} = \frac{\text{Annual return}}{250}}$$

$$\boxed{\text{Daily std dev} = \frac{\text{Annual std dev}}{\sqrt{250}}}$$

> **Why square root for std dev?** Variance scales linearly with time; standard deviation (√variance) scales with **√time**.

**Calculation:**
$$\text{Daily } E(R_p) = \frac{9.6\%}{250} = \mathbf{0.0384\%}$$
$$\text{Daily } \sigma_p = \frac{15.99\%}{\sqrt{250}} = \mathbf{0.010112\% \text{ (1.0112\%)}}$$

---

### CRITICAL Rule — Cannot Reverse the Direction

$$\boxed{\text{Annualize FIRST, then compute VaR} \neq \text{Compute daily VaR, then "annualize" it}}$$

**Why this fails:**
1. Assuming daily distribution scales cleanly to annual is a **bold, often unjustified assumption**
2. **Annualizing VaR ≠ annualizing the underlying parameters** — VaR already incorporates BOTH mean and standard deviation combined; you cannot simply multiply the VaR figure by √250 or 250

**Correct approach**: Always convert **return by ×250** and **std dev by ×√250** FIRST, then apply the VaR formula to the annualized parameters.

---

### The Parametric VaR Calculation — Step-by-Step Procedure

$$\boxed{VaR = \{[E(R_p) - z \times \sigma_p] \times (-1)\} \times \text{Portfolio Value}}$$

**Worked Example — Daily 5% VaR ($150M portfolio):**

| Step | Calculation | Result |
|------|-------------|--------|
| **1.** Multiply σ_p by z (1.65) | $0.010112 \times 1.65$ | 0.016685 |
| **2.** Subtract from expected return | $0.000384 - 0.016685$ | −0.016301 |
| **3.** Convert to positive (VaR expressed as absolute loss) | $-0.016301 \to$ | **0.016301** |
| **4.** Multiply by portfolio value | $0.016301 \times \$150,000,000$ | **$2,445,150** |

$$\boxed{\text{5\% daily parametric VaR} = \$2,445,150}$$

**Interpretation**: On **5% of trading days**, the portfolio would be expected to lose **at least $2,445,150**.

> **Note**: Asset managers sometimes stop at Step 3 (percentage form) since that's their common reporting convention.

---

### Example 2 — Knowledge Check Answers

**Q1 — Normal distribution parameters needed for parametric VaR:**
→ **A. Expected value and standard deviation**
- Skewness/kurtosis are needed only for **non-normal** distributions

**Q2 — 1% VaR (z = 2.33) for $150M portfolio:**

| Step | Calculation | Result |
|------|-------------|--------|
| 1 | $2.33 \times 0.010112$ | 0.023561 |
| 2 | $0.000384 - 0.023561$ | −0.023177 |
| 3 | Convert to positive | 0.023177 |
| 4 | $0.023177 \times \$150M$ | **$3,476,550** |

→ **Answer: A. $3.5 million**

**Q3 — Annual 5% VaR (from daily parameters):**

**Correct approach**: Annualize FIRST
$$\text{Annual return} = 0.000384 \times 250 = 0.096 (9.6\%)$$
$$\text{Annual std dev} = 0.010112 \times \sqrt{250} = 0.159885 (15.99\%)$$

| Step | Calculation | Result |
|------|-------------|--------|
| 1 | $0.159885 \times 1.65$ | 0.263810 |
| 2 | $0.096000 - 0.263810$ | −0.167810 |
| 3 | Convert to positive | 0.167810 |
| 4 | $0.167810 \times \$150M$ | **$25,171,500** |

→ **Answer: B. $25 million**

**Common errors to avoid:**
- Multiplying **daily VaR** by $\sqrt{250}$ (incorrect — gives $38M) 
- Multiplying **daily VaR** by $250$ (incorrect — gives $600M)
- **Correct method**: annualize the underlying parameters FIRST (return × 250, std dev × √250), THEN compute VaR from those annualized parameters

---

### Advantages of the Parametric Method

| Advantage | Detail |
|-----------|--------|
| **Simplicity** | Easy to compute once parameters are estimated |
| **Straightforward interpretation** | Direct link to well-understood normal distribution properties |
| **Efficient parameter estimation** | Historical data readily available, adjustable via judgment |

**Best used when**: Confident that normal distribution is a reasonable approximation AND parameter estimates are reliable (or can be reliably adjusted).

**Key sensitivity**: VaR under this method is **highly sensitive** to parameter estimates, **especially covariances**.

---

### Major Weakness — Options in the Portfolio

**The core problem**: Options have **asymmetric, truncated payoff structures**:
- If exercised: payoff is **linear** with the underlying
- If never exercised: option loses **100% of value**

$$\boxed{\text{This creates a NON-NORMAL, truncated distribution} \implies \text{Poor fit for parametric method}}$$

**Additional complication**: Even if the underlying's return/volatility are stable, the **option's own distribution changes continuously** as:
- Underlying price changes
- Underlying volatility changes
- Time to expiration decreases

**Partial mitigation**: Adjustments exist to make options "more responsive" to parametric treatment, but these are **imperfect** — limiting the method's usefulness for option-containing portfolios.

---

### Key Formula Reference Card

| Formula | Expression |
|---------|-----------|
| **Portfolio expected return** | $w_1E(R_1) + w_2E(R_2)$ |
| **Portfolio volatility (2-asset)** | $\sqrt{w_1^2\sigma_1^2 + w_2^2\sigma_2^2 + 2w_1w_2\rho\sigma_1\sigma_2}$ |
| **Daily return from annual** | Annual return / 250 |
| **Daily std dev from annual** | Annual std dev / √250 |
| **Parametric VaR** | $\{[E(R_p) - z\sigma_p] \times (-1)\} \times \text{Portfolio value}$ |
| **z-values** | 1.65 (5%), 2.33 (1%), 1.00 (16%) |

---

### Exam Tips

- **Normal distribution parameters = expected value + standard deviation ONLY** — skewness/kurtosis are for non-normal distributions
- **z-values to memorize**: 1.65 (5% VaR), 2.33 (1% VaR), 1.00 (16% VaR)
- **NEVER annualize a daily VaR directly** — always annualize the underlying return/std dev parameters FIRST, then compute VaR from those
- **Return annualizes by ×N (time periods)**; **std dev annualizes by ×√N** — this asymmetry is critical and frequently tested
- **4-step VaR calculation procedure**: (1) σ×z, (2) subtract from E(R), (3) flip sign, (4) multiply by portfolio value
- **Portfolio volatility requires the FULL variance-covariance formula** — including the cross term with correlation, not just weighted average of individual volatilities
- **Parametric method struggles with options** — truncated, non-normal payoff distributions are poorly captured by normal-distribution assumptions
- **VaR is highly sensitive to correlation/covariance estimates** — small changes in ρ can meaningfully shift portfolio volatility and thus VaR
- **Judgment matters**: historical data provides a starting point, but analysts often adjust parameters (as shown in the prior section) based on beliefs about future representativeness