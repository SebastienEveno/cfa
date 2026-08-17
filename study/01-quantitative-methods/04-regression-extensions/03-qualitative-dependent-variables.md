---
layout: page
title: "Logistic Regression and Qualitative Dependent Variables"
permalink: /study/01-quantitative-methods/04-regression-extensions/03-qualitative-dependent-variables/
prev: /cfa/study/01-quantitative-methods/04-regression-extensions/02-dummy-variables/
next: /cfa/study/01-quantitative-methods/04-regression-extensions/04-formula-summary/
---
## Summary: Logistic Regression and Qualitative Dependent Variables (CFA Level II — Quantitative Methods)

---

### The Problem with a Qualitative Dependent Variable

A **qualitative (categorical) dependent variable** describes an outcome that falls into discrete categories rather than along a continuum — e.g., whether a company goes bankrupt (1) or not (0). Naively estimating this with ordinary least squares produces a **linear probability model**:

$$Y_i = b_0 + b_1X_{1i} + b_2X_{2i} + b_3X_{3i} + \varepsilon_i$$

This is problematic for two reasons:

- **Predicted probabilities can fall outside [0, 1]** — nonsensical for a probability.
- **It assumes a linear relationship** between each independent variable and the probability of the event across its entire range, which is usually unrealistic (e.g., the marginal effect of leverage on bankruptcy probability should not be constant at very low and very high leverage levels).

---

### The Logistic Transformation

The standard fix is the **logistic transformation**, which converts the event probability $P$ into **log odds** and relates the log odds linearly to the independent variables. Let $P$ be the probability the event happens (e.g., bankruptcy).

**Odds** of the event happening:

$$\boxed{\text{Odds} = \frac{P}{1-P}}$$

**Log odds (the logit)** — the dependent variable in a logistic regression:

$$\boxed{\ln\left(\frac{P}{1-P}\right) = b_0 + b_1X_1 + b_2X_2 + \dots + b_kX_k + \varepsilon}$$

Solving back for the probability:

$$\boxed{P = \frac{1}{1+\exp\left[-(b_0+b_1X_1+b_2X_2+\dots+b_kX_k)\right]}}$$

> **Key insight**: If $P = 0.75$, the odds are $0.75/0.25 = 3$ — bankruptcy is three times as likely as no bankruptcy. The logit is simply $\ln(3) = 1.099$. Unlike $P$ itself, the logit is unbounded, which is exactly what makes it suitable as a linear regression's dependent variable — the resulting logistic curve is S-shaped (sigmoidal) and stays within [0,1] for every possible value of the regressors.

---

### Estimation: Maximum Likelihood

Logistic regression coefficients are estimated by **maximum likelihood estimation (MLE)**, not least squares — MLE finds the coefficients that make the observed sample outcomes "most likely," using a binomial likelihood function (since each outcome is binary). Key features:

- Individual coefficient significance is tested with a $z$-statistic, analogous to the $t$-test in OLS.
- **Log-likelihood** is always negative; values closer to zero indicate a better fit. It is not meaningful in isolation — only useful for *comparing* models with the same dependent variable.
- **Pseudo-$R^2$** substitutes for $R^2$ (which does not exist for MLE-fitted models) but should only be used to compare different specifications of the *same* model on the *same* data, not across different datasets.

---

### Interpreting Coefficients and Marginal Effects

A logistic slope coefficient is interpreted as: **the change in the log odds of the event, per one-unit change in the independent variable, holding all other independent variables constant.**

Unlike OLS, the *marginal effect on the probability itself* is **not constant** — because the logistic function is non-linear, the probability's sensitivity to a one-unit change in $X_j$ depends on the level of *every* independent variable. The marginal effect is largest when the fitted probability is near 0.5 (the inflection point of the S-curve) and shrinks toward zero as the fitted probability approaches 0 or 1.

The standard approach to estimating a marginal effect is:

1. Compute $P$ using the **mean** value of every independent variable.
2. Increase one variable's value by one unit (holding the others at their means) and recompute $P$.
3. The marginal effect is the difference between the two probabilities.

(The same process can be applied at a specific observation's characteristics instead of the sample means, to obtain a firm- or security-specific sensitivity — effectively a scenario analysis.)

---

### The Likelihood Ratio (LR) Test

The **LR test** assesses whether a set of independent variables jointly improves model fit, analogous to the joint $F$-test in OLS but based on log-likelihoods:

$$\boxed{LR = -2 \times \left(\text{Log-likelihood}_{\text{restricted}} - \text{Log-likelihood}_{\text{unrestricted}}\right)}$$

The LR statistic is $\chi^2$-distributed with $q$ degrees of freedom, where $q$ is the number of restrictions (coefficients set to zero under $H_0$). The null hypothesis is that the restricted (smaller) model is adequate; rejecting $H_0$ favors the unrestricted (larger) model. The LR test performs best in large samples.

---

### Worked Example — Meridian Capital Research: Share-Repurchase Propensity

An analyst at **Meridian Capital Research** models the odds that a company repurchases shares (Repurchase = 1) using cash-to-total-assets (CASH), debt-to-equity (DE), and net profit margin (NPM) across a sample of 500 companies:

$$Repurchase_i = b_0 + b_1CASH_i + b_2DE_i + b_3NPM_i + \varepsilon_i$$

**Regression results:**

| Variable | Coefficient | Std. Error | z-Statistic | P-value |
|---|---|---|---|---|
| Intercept | −0.4738 | 0.196 | −2.415 | 0.016 |
| CASH | −0.9118 | 1.154 | −0.790 | 0.430 |
| DE | −0.3186 | 0.133 | −2.396 | 0.017 |
| NPM | 0.9407 | 0.417 | 2.255 | 0.024 |

Sample means: CASH = 0.0830, DE = 0.9182, NPM = −0.0535.

**Interpreting the intercept**: the log odds of repurchasing when CASH = DE = NPM = 0 is −0.4738. Converting to a probability: odds $= e^{-0.4738} = 0.6226$; $P = 0.6226 / 1.6226 = 38.37\%$.

**Baseline probability at sample means**:

$$P = \frac{1}{1+\exp\left\{-\left[-0.4738+(-0.9118)(0.0830)+(-0.3186)(0.9182)+(0.9407)(-0.0535)\right]\right\}} = 29.06\%$$

**Marginal effects** (each variable increased by 0.01 = 1 percentage point, others held at their means):

| Variable ↑ by 1 pt | New probability | Marginal effect |
|---|---|---|
| CASH: 0.083 → 0.093 | 28.87% | −0.19% |
| DE: 0.9182 → 0.9282 | 29.00% | −0.07% |
| NPM: −0.0535 → −0.0435 | 29.26% | +0.20% |

Even though CASH has the largest raw coefficient in absolute value, its statistical insignificance ($p=0.430$) means this marginal effect should not be relied on — only DE and NPM are significant at the 5% level.

**Likelihood ratio test** ($H_0: b_{CASH}=b_{DE}=b_{NPM}=0$ vs. $H_a$: at least one $\neq 0$), using LL$_{restricted}$ (intercept-only model) $=-312.68$ and LL$_{unrestricted}=-304.20$:

$$LR = -2\times(-312.68-(-304.20)) = 16.96$$

With $q=3$ restrictions, the critical $\chi^2$ value at 5% significance is 7.815. Since $16.96 > 7.815$, reject $H_0$ — the three explanatory variables are jointly significant, and the unrestricted model fits the data better than the intercept-only model.

---

### Question Set Answers

**Q1.** Why is logistic regression the appropriate method for modeling whether an ETF is a "winning fund" (1) vs. an "average fund" (0)?

**A.** Because the dependent variable is binary rather than continuous — OLS would produce a linear probability model with predicted probabilities that can fall outside [0, 1].

**Q2.** How should a logistic regression's slope coefficient be interpreted?

**A.** As the change in the **log odds** that the event happens per one-unit change in the independent variable, holding all other independent variables constant — not the change in probability itself, and not the change in odds.

**Q3.** How should the intercept in a logistic regression be interpreted?

**A.** As the log odds of the event occurring when every independent variable equals zero.

**Q4.** Comparing two logistic regression specifications, Model 1 has log-likelihood −451.66 and Model 2 has log-likelihood −450.40. Which fits better?

**A.** Model 2. Log-likelihood is always negative, and values closer to zero (less negative) indicate a better fit, so −450.40 (Model 2) beats −451.66 (Model 1).
