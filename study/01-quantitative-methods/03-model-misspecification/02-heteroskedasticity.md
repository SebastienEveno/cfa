---
layout: page
title: "Heteroskedasticity"
permalink: /study/01-quantitative-methods/03-model-misspecification/02-heteroskedasticity/
next: /cfa/study/01-quantitative-methods/03-model-misspecification/03-serial-correlation/
prev: /cfa/study/01-quantitative-methods/03-model-misspecification/01-model-specification-errors/
---
## Summary: Heteroskedasticity (CFA Level II — Quantitative Methods)

---

### What Is Heteroskedasticity?

A core linear regression assumption is that the variance of the residuals is **constant** across all observations (homoskedasticity). **Heteroskedasticity** occurs when this variance differs across observations. It can arise from model misspecification (omitted variables, wrong functional form, bad data transformations) or from extreme values in the independent variables.

| Type | Definition | Problem for Inference? |
|------|-----------|-------------------------|
| **Unconditional heteroskedasticity** | Error variance is **not** correlated with the independent variables | No major problems — technically violates the assumption but does not distort inference |
| **Conditional heteroskedasticity** | Error variance **is** correlated with (conditional on) the level of the independent variables | Yes — biases statistical tests |

---

### Consequences of Conditional Heteroskedasticity

- The **F-test** for overall regression significance becomes unreliable because the MSE is a biased estimator of the true population error variance.
- **t-tests** of individual coefficients become unreliable because heteroskedasticity biases the estimated standard errors of the coefficients.
- In practice, standard errors are typically **underestimated**, which **inflates t-statistics** — leading analysts to find "significant" relationships that don't actually exist (more **Type I errors**).

> **Key insight**: Conditional heteroskedasticity does not bias the coefficient estimates themselves — it biases the *standard errors* used to test them, making the model look more statistically significant than it really is.

---

### Testing: The Breusch–Pagan (BP) Test

The BP test is the standard tool for detecting conditional heteroskedasticity, applied via a three-step process:

1. **Run the initial regression**: $Y_t = b_0 + b_1X_{1t} + b_2X_{2t} + \varepsilon_t$, and save the residuals.
2. **Run an auxiliary regression**: regress the **squared residuals** from Step 1 on the same independent variables: $\hat{\varepsilon}_t^2 = a_0 + a_1X_{1t} + a_2X_{2t} + \eta_t$.
3. **Test the joint significance** of the coefficients in Step 2 using a chi-squared test.

$$\boxed{BP = nR^2 \sim \chi^2_k}$$

where $n$ is the number of observations, $R^2$ is from the **Step 2** (auxiliary) regression, and $k$ is the number of independent variables (degrees of freedom). This is a **one-tailed, right-side** test.

$$H_0: a_1 = a_2 = \cdots = a_k = 0 \quad \text{(no conditional heteroskedasticity)}$$
$$H_a: \text{at least one } a_j \neq 0$$

If the independent variables explain a significant portion of the variation in the squared residuals, conditional heteroskedasticity is present — because each squared residual is systematically related to the level of the regressors.

---

### Worked Example — Meridian Capital: Fama–French Three-Factor Model for Stock ARIA

**Setup**: Using 10 years of monthly data, an analyst at Meridian Capital estimates a Fama–French three-factor model for the excess returns of Stock ARIA (ARIA_RETRF), with regressors MKTRF (market), SMB (size), and HML (value).

**Initial regression results** ($n = 120$, $R^2 = 0.8788$, Adjusted $R^2 = 0.8757$):

| | Coefficient | Standard Error | t-Stat | P-Value |
|---|---|---|---|---|
| Intercept | −0.0026 | 0.0024 | −1.0735 | 0.2853 |
| MKTRF | 1.2414 | 0.0601 | 20.6419 | 0.0000 |
| SMB | 1.0953 | 0.1042 | 10.5147 | 0.0000 |
| HML | −0.1065 | 0.0872 | −1.2205 | 0.2248 |

MKTRF and SMB are both highly significant. Before relying on these results, the analyst runs a BP test:

| BP Test Statistic | P-Value |
|---|---|
| 13.40264 | 0.00038 |

**Conclusion**: The null hypothesis of no conditional heteroskedasticity is rejected at the 1% level — the residuals are conditionally heteroskedastic, so the standard errors above cannot be trusted for inference.

---

### Correcting for Heteroskedasticity — Robust Standard Errors

The standard fix is to compute **robust standard errors** — also called **heteroskedasticity-consistent** standard errors or **White-corrected** standard errors. These adjust the standard errors of the estimated coefficients to account for conditional heteroskedasticity. Critically, **the coefficient estimates themselves do not change** — only the standard errors (and therefore the t-statistics and p-values) are corrected.

**Meridian Capital's ARIA model with robust standard errors**:

| | Coefficient | Robust Standard Error | t-Stat | P-Value |
|---|---|---|---|---|
| Intercept | −0.0026 | 0.0021 | −1.2347 | 0.2194 |
| MKTRF | 1.2414 | 0.0910 | 13.6483 | 0.0000 |
| SMB | 1.0953 | 0.1111 | 9.8605 | 0.0000 |
| HML | −0.1065 | 0.1015 | −1.0488 | 0.2965 |

Notice the standard errors for MKTRF and SMB **increased** (0.0601 → 0.0910 and 0.1042 → 0.1111), pulling the t-statistics down — a more conservative, and more correct, basis for inference.

> **Market efficiency angle**: In efficient markets, heteroskedasticity generally should not be present in financial data. If it is detected — for example, as **volatility clustering**, where large (small) price changes tend to be followed by large (small) changes — this is not just a nuisance to correct; it is a potential source of forecastable, exploitable alpha.

---

### Question Set Answers

**Q1** — A regression has $n = 96$ observations and the Step 2 (auxiliary) regression has $R^2 = 0.06511$. The 5% BP critical value is 11.07. Is there evidence of heteroskedasticity?
$BP = nR^2 = 96 \times 0.06511 = 6.251$. Since $6.251 < 11.07$, we fail to reject $H_0$ — **no evidence of conditional heteroskedasticity**.

**Q2** — Three models (A, B, C) show residual scatterplots against factors X1, X2, X3: Model A's residual spread narrows sharply as X1 rises; Model B shows only noise vs. X2; Model C's spread widens non-linearly as X3 rises. BP tests confirm: Model A (BP = 7.183, p = 0.0072) and Model C (BP = 29.586, p = 0.0001) show heteroskedastic residuals at the 5% level; Model B (BP = 0.035, p = 0.8523) does not.

**Q3** — Given heteroskedastic residuals, what happens to standard errors, t-statistics, and p-values after applying White's correction?
Coefficient standard errors **increase**, which **decreases** the calculated t-statistics and **increases** the corresponding p-values for the independent variables. The point estimates of the coefficients are unaffected.

