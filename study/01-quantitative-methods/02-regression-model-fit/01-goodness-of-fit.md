---
layout: page
title: "Goodness of Fit: R², Adjusted R², AIC, and BIC"
permalink: /study/01-quantitative-methods/02-regression-model-fit/01-goodness-of-fit/
next: /cfa/study/01-quantitative-methods/02-regression-model-fit/02-hypothesis-testing/
---
## Summary: Goodness of Fit — R², Adjusted R², AIC, and BIC (CFA Level II — Quantitative Methods)

---

### R² in Multiple Regression

**Coefficient of determination**, same ratio as in simple regression — the share of total variation in the dependent variable explained by the model:

$$\boxed{R^2 = \frac{\text{Sum of squares regression}}{\text{Sum of squares total}} = \frac{SSR}{SST} = \frac{\sum_{i=1}^n(\hat{Y}_i - \bar{Y})^2}{\sum_{i=1}^n(Y_i - \bar{Y})^2}}$$

where $Y_i$ is an observed value of the dependent variable, $\hat{Y}_i$ is the model's predicted value, and $\bar{Y}$ is the sample mean of the dependent variable.

**Problem**: in multiple regression, $R^2$ mechanically increases (or stays flat) every time another independent variable is added — regardless of whether that variable actually helps explain $Y$. This makes raw $R^2$ unreliable for:
- Judging whether coefficients are statistically significant
- Detecting bias in the coefficients or predictions
- Judging whether the model fit is actually "good" — a low-$R^2$ asset-pricing model can be well specified, and a high-$R^2$ model can simply be **overfit** (too many independent variables relative to the number of observations, so the estimated coefficients no longer reflect the true underlying relationships)

> **Key insight**: Because $R^2$ never falls when a variable is added, it cannot by itself be used to compare models with different numbers of independent variables. Use **adjusted $R^2$** instead.

---

### Adjusted R²

Adjusted $R^2$ ($\bar{R}^2$) corrects $R^2$ for the number of independent variables ($k$) and degrees of freedom used:

$$\boxed{\bar{R}^2 = 1 - \left[\frac{SSE/(n-k-1)}{SST/(n-1)}\right]}$$

Equivalently, in terms of $R^2$ itself:

$$\boxed{\bar{R}^2 = 1 - \left[\left(\frac{n-1}{n-k-1}\right)(1-R^2)\right]}$$

**Properties:**

| Property | Detail |
|---|---|
| Relative to $R^2$ | $\bar{R}^2 < R^2$ whenever $k \geq 1$ |
| Floor | $R^2$ has a minimum of 0; **$\bar{R}^2$ can be negative** |
| Adding a variable | $\bar{R}^2$ **increases** if the new variable's coefficient has $\lvert t\text{-statistic}\rvert > 1.0$; **decreases** if $\lvert t\text{-statistic}\rvert < 1.0$ |
| Interpretation | Unlike $R^2$, $\bar{R}^2$ has **no clean "percentage of variation explained" interpretation** in a multiple-regression setting |

> **Key insight**: A $\lvert t\text{-statistic}\rvert$ of 1.0 is a very low bar — well short of the ~2.0 threshold typically needed for significance at 5%. So adjusted $R^2$ can still rise even when the added variable is not statistically significant at conventional levels; always check the coefficient's own significance separately.

---

### Worked Example: Kestrel Capital's Five-Factor Model

Kestrel Capital's quant team regresses their flagship long/short portfolio's monthly excess returns on five proprietary style factors (Factors 1–5), using 50 months of data ($n=50$, $k=5$):

| Statistic | Value |
|---|---|
| Sum of squares regression (SSR) | 90.6234 |
| Sum of squares error (SSE) | 56.6182 |
| Sum of squares total (SST) | 147.2416 |
| $R^2$ | 0.6155 |
| Adjusted $R^2$ | 0.5718 |

$$R^2 = \frac{90.6234}{147.2416} = 0.6155$$

$$\bar{R}^2 = 1 - \left[\left(\frac{50-1}{50-5-1}\right)(1-0.6155)\right] = 1 - \left[\left(\frac{49}{44}\right)(0.3845)\right] = 0.5718$$

**Adding factors one at a time**, the team observes:

| Model | R² | Adjusted R² |
|---|---|---|
| Factor 1 only | 0.541 | 0.531 |
| Factors 1–2 | 0.541 | 0.521 |
| Factors 1–3 | 0.562 | 0.533 |
| Factors 1–4 | 0.615 | 0.580 |
| Factors 1–5 (full model) | 0.615 | 0.572 |

$R^2$ never falls as factors are added, but adjusted $R^2$ **falls** when Factor 2 is added (0.531 → 0.521) and again when Factor 5 is added (0.580 → 0.572) — telling the team those two factors' $\lvert t\text{-statistics}\rvert$ are below 1.0 and are not pulling their weight in the model.

---

### AIC and BIC

Both statistics compare models that explain the **same** dependent variable and penalize model complexity — but the penalty terms differ. $n$ = number of observations, $k$ = number of independent variables, SSE = sum of squares error:

$$\boxed{AIC = n\ln\left(\frac{SSE}{n}\right) + 2(k+1)}$$

$$\boxed{BIC = n\ln\left(\frac{SSE}{n}\right) + \ln(n)(k+1)}$$

| Criterion | Penalty per parameter | Preferred when... | Decision rule |
|---|---|---|---|
| **AIC** | $2$ | Goal is **prediction** | Lower is better |
| **BIC** (SBC) | $\ln(n)$ | Goal is **goodness of fit** / parsimony | Lower is better |

> **Key insight**: $\ln(n) > 2$ for any sample size of 8 or more, so BIC always penalizes additional parameters more harshly than AIC and will tend to favor smaller, more parsimonious models. The absolute level of AIC or BIC is meaningless on its own — only **relative** comparisons across a set of candidate models (same dependent variable) matter.

---

### Worked Example: Selecting Among Kestrel Capital's Factor Models

Continuing the five-factor exercise, Kestrel's team tabulates AIC and BIC across the nested models:

| Model | R² | Adjusted R² | AIC | BIC |
|---|---|---|---|---|
| Factor 1 only | 0.541 | 0.531 | 19.079 | **22.903** |
| Factors 1–2 | 0.541 | 0.521 | 21.078 | 26.814 |
| Factors 1–3 | 0.562 | 0.533 | 20.743 | 28.393 |
| Factors 1–4 | 0.615 | 0.580 | **16.331** | 25.891 |
| Factors 1–5 | 0.615 | 0.572 | 18.215 | 29.687 |

- **AIC is minimized** by the four-factor model (Factors 1–4) → best model **for prediction**.
- **BIC is minimized** by the one-factor model (Factor 1 only) → best model **for goodness of fit / parsimony**.
- The full five-factor model has the highest $R^2$ but ranks poorly on every other metric — a textbook overfitting signature.

Selecting the "best" model is therefore iterative and purpose-dependent, not a single mechanical rule.

---

### Summary Table: Assessing Model Fit

| Statistic | Criterion |
|---|---|
| Adjusted $R^2$ | Higher is better |
| AIC | Lower is better (prediction focus) |
| BIC | Lower is better (goodness-of-fit focus) |
| $t$-statistic on a slope coefficient | Outside the critical $t$-value bounds |
| $F$-test for joint significance | Exceeds the critical $F$-value |

---

### Question Set Answers

**Q1.** Kestrel's equity research desk regresses **return on assets (ROA)** for 26 diversified manufacturers on capital expenditures scaled by beginning-of-year PPE (**CAPEX**) — call this **Model 1** — for a manufacturer named **Bracknell Industries**' peer group. Adding the prior year's advertising-to-revenue ratio (**ADV**) gives **Model 2**. Results:

| Statistic | Model 1 (CAPEX) | Model 2 (CAPEX, ADV) |
|---|---|---|
| $R^2$ | 0.8799 | 0.8805 |
| Adjusted $R^2$ | 0.8749 | 0.8701 |
| ADV $t$-statistic | — | −0.3320 |
| ADV $p$-value | — | 0.7429 |

Interpret and contrast the two models.

**A.** $R^2$ rises slightly (87.99% → 88.05% of ROA variation explained) simply because a variable was added — that alone tells us nothing. Adjusted $R^2$ **falls** from 0.8749 to 0.8701, consistent with ADV's $\lvert t\text{-statistic}\rvert = 0.332 < 1.0$ (and $p$-value 0.7429, far from significant). Adding ADV does not improve the model's explanatory power; Model 1 (CAPEX only) is preferred.

**Q2.** Using AIC = 23.899 and BIC = 26.523 for Model 1, versus AIC = 25.804 and BIC = 28.792 for Model 2, which model is better and why?

**A.** Model 1, on both criteria — both AIC and BIC are lower for Model 1. Together with the adjusted $R^2$ decline in Q1, this confirms adding ADV does not improve fit or predictive power; the single-variable CAPEX model is the more parsimonious, better-performing model.

**Q3.** True or false: because $R^2$ increased when ADV was added in Q1, ADV must be adding genuine explanatory power.

**A.** False. $R^2$ mechanically cannot decrease when a variable is added — this is precisely why $R^2$ alone is unreliable for model comparison. Adjusted $R^2$, AIC, and BIC all point the other way, and ADV's own $t$-statistic confirms it is statistically insignificant.

---
