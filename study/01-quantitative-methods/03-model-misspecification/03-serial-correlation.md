---
layout: page
title: "Serial Correlation"
permalink: /study/01-quantitative-methods/03-model-misspecification/03-serial-correlation/
next: /cfa/study/01-quantitative-methods/03-model-misspecification/04-multicollinearity/
prev: /cfa/study/01-quantitative-methods/03-model-misspecification/02-heteroskedasticity/
---
## Summary: Serial Correlation (CFA Level II — Quantitative Methods)

---

### What Is Serial Correlation?

Another core regression assumption is that the errors are **uncorrelated across observations**. When this is violated, the errors are **serially correlated** (or **autocorrelated**) — a common and serious problem in **time-series** regressions (it can also arise in panel data). We focus on **first-order serial correlation** — correlation between adjacent observations, i.e., the error in period $t$ correlated with the error in period $t-1$.

| Type | Behavior |
|------|----------|
| **Positive serial correlation** | A positive residual increases the likelihood of another positive residual next period (and vice versa for negative) — residuals show a stable, persistent pattern |
| **Negative serial correlation** | A positive residual increases the likelihood of a *negative* residual next period, and vice versa |

Positive serial correlation is by far the more common type in financial time series.

---

### Consequences of Serial Correlation

Whether serial correlation invalidates the **coefficient estimates** (not just their standard errors) depends on whether a regressor is a **lagged value of the dependent variable**:

| Is an Independent Variable a Lagged Value of $Y$? | Invalid Coefficient Estimates? | Invalid Standard Error Estimates? |
|---|---|---|
| No | No | **Yes** |
| Yes | **Yes** | **Yes** |

Even when the coefficients remain consistent, positive serial correlation still distorts statistical tests:

- The **F-statistic** tends to be **inflated** because the MSE underestimates the true population error variance.
- **Standard errors** are typically **underestimated**, inflating t-statistics — leading to more **Type I errors**, exactly as with conditional heteroskedasticity.

> **Market efficiency angle**: If a time series exhibits serial correlation, it has some degree of predictability. Under (even weak-form) market efficiency, investors would identify and trade away such a pattern, so financial market data should generally **not** exhibit serial correlation — its presence is itself informative.

---

### Testing for Serial Correlation

**Durbin–Watson (DW) test** — the classic measure of first-order autocorrelation, comparing the squared differences of successive residuals to the sum of squared residuals:

$$\boxed{DW = \frac{\displaystyle\sum_{t=2}^{T}(e_t - e_{t-1})^2}{\displaystyle\sum_{t=1}^{T} e_t^2} \approx 2(1 - r)}$$

where $r$ is the sample correlation between adjacent residuals. $DW$ ranges from 0 to 4:

| DW Value | Interpretation |
|---|---|
| $DW \approx 2$ | No first-order serial correlation ($r \approx 0$) |
| $DW < 2$ | Positive serial correlation ($r > 0$) |
| $DW > 2$ | Negative serial correlation ($r < 0$) |

**Limitation**: The DW test applies only to **first-order** serial correlation.

**Breusch–Godfrey (BG) test** — the more robust and general test, capable of detecting serial correlation up to a chosen lag order $p$ (i.e., where the error in period $t$ is correlated with the error in period $t - p$):

1. **Run the initial regression**: $Y_t = b_0 + b_1X_{1t} + b_2X_{2t} + \varepsilon_t$, and save the residuals $\hat{u}_t$.
2. **Run an auxiliary regression**: regress $\hat{u}_t$ on the original regressors **plus lagged residuals**: $\hat{u}_t = a_0 + a_1X_{1t} + a_2X_{2t} + \rho_1\hat{u}_{t-1} + \cdots + \rho_p\hat{u}_{t-p} + e_t$.
3. **Test the joint significance** of the lagged-residual coefficients:

$$H_0: \rho_1 = \rho_2 = \cdots = \rho_p = 0 \quad \text{(no serial correlation up to lag } p\text{)}$$
$$H_a: \text{at least one } \rho_i \neq 0$$

The test statistic is approximately **F-distributed** with $p$ and $n - p - k - 1$ degrees of freedom, where $p$ is the number of lags and $k$ is the number of original regressors.

---

### Worked Example — Meridian Capital: GDP Sensitivity to Consumption Growth

**Setup**: Meridian Capital's macro research team studies the sensitivity of quarterly GDP growth to quarterly changes in personal consumption expenditures (CONS), using 30 years of quarterly data ($n = 121$).

**Initial (OLS) regression results** ($R^2 = 0.896$, Adjusted $R^2 = 0.895$):

| | Coefficient | Standard Error | t-Stat | P-Value |
|---|---|---|---|---|
| Intercept | 0.0991 | 0.050 | 1.974 | 0.051 |
| CONS | 0.8696 | 0.027 | 31.990 | 0.000 |

CONS is highly significant. But because this is a time-series model, the team also runs a BG test (order 1):

| BG F-Statistic | Degrees of Freedom | 5% Critical F-Value | Conclusion |
|---|---|---|---|
| 4.82 | (1, 118) | 3.92 | Reject $H_0$ — serial correlation present |

**Correction**: The team re-estimates the standard errors using a **robust (Newey–West/HAC)** procedure:

| | Coefficient | Robust Standard Error | t-Stat | P-Value |
|---|---|---|---|---|
| Intercept | 0.0991 | 0.058 | 1.701 | 0.091 |
| CONS | 0.8696 | 0.036 | 24.310 | 0.000 |

The coefficients are **unchanged**, but the robust standard error for CONS rises from 0.027 to 0.036, pulling the t-statistic down from 31.990 to 24.310. CONS remains highly significant, but the corrected standard error now properly reflects the uncertainty that serial correlation had masked.

---

### Correcting for Serial Correlation

The standard fix is to adjust the coefficient standard errors — variously called **serial-correlation-consistent standard errors**, **serial-correlation- and heteroskedasticity-adjusted standard errors**, **Newey–West standard errors**, or simply **robust standard errors**. These use a **heteroskedasticity- and autocorrelation-consistent (HAC)** estimator of the coefficient variance–covariance matrix, so a single correction handles **both** serial correlation and conditional heteroskedasticity simultaneously. The correction does not eliminate the underlying serial correlation in the data — it simply ensures the standard errors properly reflect it.

---

### Question Set Answers

**Q1** — Determine, at the 5% significance level, whether each model shows evidence of serial correlation:

| Model | BG F-Statistic | Degrees of Freedom | Critical F-Value | Serial Correlation? |
|---|---|---|---|---|
| A | 5.1634 | (4, 13) | 3.1791 | **Yes** |
| B | 22.0560 | (6, 15) | 2.7905 | **Yes** |
| C | 2.3400 | (4, 15) | 3.0556 | **No** |
| D | 1.9800 | (3, 35) | 2.8742 | **No** |

A model shows evidence of serial correlation when its BG F-statistic exceeds the critical F-value; Models A and B exceed their respective critical values, while Models C and D do not.

**Q2** — Describe robust standard errors and why they are useful.
Robust standard errors are regression coefficient standard errors corrected for the bias that autocorrelation and/or heteroskedasticity introduce. They are typically **larger** than uncorrected OLS standard errors and allow the model's t-statistics and p-values to be used validly for statistical inference.

