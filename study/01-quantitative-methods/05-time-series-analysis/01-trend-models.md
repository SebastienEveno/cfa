---
layout: page
title: "Trend Models"
permalink: /study/01-quantitative-methods/05-time-series-analysis/01-trend-models/
next: /cfa/study/01-quantitative-methods/05-time-series-analysis/02-ar-models-and-stationarity/
---
## Summary: Trend Models (CFA Level II — Quantitative Methods)

---

### Why Time Series Are Different

A **time series** is a set of observations on a variable ordered chronologically (quarterly sales, monthly inflation, daily returns). Time-series observations have a **logical order** — unlike cross-sectional data, you cannot scramble the sequence without destroying the information in it.

Two problems recur throughout this module and drive almost every modeling decision:

1. **Correlated (serially correlated) residual errors.** In a regression where the independent variable is a *lagged value of the dependent variable* — e.g., $x_t = b_0 + b_1x_{t-1}+\varepsilon_t$ — serial correlation in the errors makes the intercept and slope estimates **inconsistent** (not just inefficient, as in a typical cross-sectional regression with distinct dependent/independent variables).
2. **Nonconstant mean or variance.** If the mean or variance of the series changes over time, regression results estimated on it are invalid.

> **Key insight**: Because time-series regressions often use lagged values of the dependent variable as regressors, violations of "uncorrelated errors" are far more damaging here than in ordinary cross-sectional regression. Confirming a well-specified model is the central task of this entire module.

---

### Linear Trend Models

The simplest forecasting tool: fit the level of the series against time itself.

$$\boxed{y_t = b_0 + b_1 t + \varepsilon_t}, \quad t = 1, 2, \dots, T$$

- $b_1$ is the **trend coefficient** — the constant *amount* by which $y_t$ changes each period.
- Fitted/predicted value at any time $t$: $\hat{y}_t = \hat{b}_0 + \hat{b}_1 t$.
- To forecast **out-of-sample** (period $T+h$), simply plug in $t = T+h$.

A linear trend is appropriate when the series tends to increase or decrease by a **constant amount** per period.

**CFA curriculum example (US CPI inflation, Jan 1995–Jun 2019, monthly, $T=294$):** the fitted equation was $\hat y_t = 2.7845 - 0.0037t$. The intercept was highly significant (t ≈ 7.46) but the trend coefficient was not (t ≈ -1.68 vs. a critical value of 1.97), so the model implies no statistically significant trend in inflation over the period. In-sample fitted value at $t=1$: $2.7845-0.0037(1)=2.7808\%$. Out-of-sample forecast 12 months after the last observation ($t=306$): $2.7845-0.0037(306)=1.6523\%$.

---

### Log-Linear Trend Models

Many financial and economic series (sales, GDP, price indexes) grow at a roughly **constant rate**, not a constant amount — i.e., they exhibit **exponential growth**. A linear trend badly misfits such series (fitted values are persistently above or below actuals for long stretches — exactly the correlated-error problem).

For exponential growth, model the series as:

$$\boxed{y_t = e^{\,b_0+b_1 t}} \;\Longleftrightarrow\; \boxed{\ln y_t = b_0 + b_1 t + \varepsilon_t}$$

- Predicted trend value: $\hat y_t = e^{\hat b_0 + \hat b_1 t}$ (because $e^{\ln \hat y_t} = \hat y_t$).
- $b_1$ is now the **continuously compounded growth rate per period**; the *discrete* per-period growth rate is $e^{b_1}-1$.

| Model | Series grows by | Predicted value | Growth rate |
|---|---|---|---|
| Linear trend | Constant **amount** per period | $\hat b_0+\hat b_1 t$ | N/A (level, not rate) |
| Log-linear trend | Constant **rate** per period | $e^{\hat b_0+\hat b_1 t}$ | $e^{\hat b_1}-1$ |

**CFA curriculum example (Starbucks quarterly sales, 2Q2001–3Q2019, $T=74$):** the log-linear fit gave $\hat b_0=6.7617$, $\hat b_1=0.0295$ ($R^2=0.977$). Predicted sales for 4Q2019 ($t=75$): $\ln\hat y_{75}=6.7617+0.0295(75)=8.9742 \Rightarrow \hat y_{75}=e^{8.9742}\approx \$7{,}896.7$ million, implying quarterly growth of $e^{0.0295}-1=2.99\%$. By contrast, the (misspecified) linear-trend fit predicted only $\approx\$6{,}152.9$ million for the same quarter — a large divergence that illustrates how much model choice matters.

---

### Choosing Between Linear and Log-Linear Trend

| Signal | Use linear trend | Use log-linear trend |
|---|---|---|
| Plot of raw series | Roughly straight line | Curved, accelerating (convex) growth |
| Growth pattern | Constant $ amount/period | Constant % rate/period (compounding) |
| Typical data | Series already near-stationary in levels | Sales, GDP, price levels, most macro/financial series |

> **Key insight**: When in doubt, plot the series. If it curves upward like a hockey stick, it is very likely a candidate for a log-linear (or first-differenced log) specification rather than a raw linear trend.

---

### Testing for Correlated Errors in Trend Models

Fitting a trend line does **not** guarantee a well-specified model. Because trend models are simple regressions with a distinct (deterministic) independent variable, the ordinary **Durbin–Watson (DW) statistic is valid** here (unlike in AR models — see Module 2).

**Procedure:**

1. Estimate the trend model (linear or log-linear) and obtain residuals.
2. Compute the DW statistic; under the null of no positive serial correlation, DW should not differ significantly from 2.0.
3. Compare DW to the lower critical value $d_l$ for the sample size and number of parameters at the chosen significance level.
   - DW well below 2 (and below $d_l$) → reject the null → **positive serial correlation**.
   - DW well above 2 → negative serial correlation.
4. If serial correlation is present, the trend model is **misspecified** — even a high $R^2$ does not save it — and a different model (typically an autoregressive model, Module 2) is required.

| Example | DW statistic | $d_l$ (5%) | Conclusion |
|---|---|---|---|
| Linear trend, US CPI inflation | 1.2145 | 1.77 | Reject no-correlation null → positive serial correlation |
| Log-linear trend, Starbucks sales | 0.26 | 1.60 | Reject no-correlation null → positive serial correlation |

> **Key insight**: A high $R^2$ is not evidence of a well-specified trend model. Starbucks' log-linear trend had $R^2=0.977$ yet DW = 0.26 — the residuals are highly persistent (positive serial correlation), meaning the trend line sits below sales for years, then above for years. The model must be rejected in favor of a richer specification (an autoregressive model on the differenced/logged series — see Modules 2 and 4).

---

### Worked Example — Solvane Robotics

Solvane Robotics is a fictional mid-cap industrial automation company used as a running example through this module. Analyst Priya Nandakumar has 40 quarterly observations of Solvane's revenue and fits a log-linear trend:

$$\ln(\text{Sales}_t) = 6.50 + 0.025t + \varepsilon_t$$

**Q1 — Predicted sales for the next quarter ($t=41$):**

$$\ln\hat y_{41} = 6.50+0.025(41) = 7.525 \Rightarrow \hat y_{41}=e^{7.525}\approx \$1{,}854.9 \text{ million}$$

Implied quarterly growth rate: $e^{0.025}-1 = 2.53\%$.

**Q2 — Nandakumar computes DW = 0.85 on the trend residuals, with $d_l = 1.59$ at the 5% level.** Because $0.85 < 1.59$, she rejects the null of no positive serial correlation. The trend model is misspecified — despite a high $R^2$ — and she moves to an autoregressive specification (continued in Module 2).

---

### Question Set Answers

**Q1.** A time series shows accelerating (convex) growth when plotted, and successive percentage changes are roughly constant. Which trend model is more appropriate, and why?
**A.** Log-linear trend — the series exhibits exponential (constant-rate) growth, which a linear model (constant absolute change) cannot fit without persistent, serially correlated residuals.

**Q2.** A linear trend regression produces $R^2=0.95$ but DW = 0.30 with $d_l=1.65$. Can the analyst rely on this model for forecasting?
**A.** No. DW is far below $d_l$, so the null of no positive serial correlation is rejected regardless of the high $R^2$. The residuals are persistent, violating the regression assumption of uncorrelated errors; a different (typically autoregressive) model is needed.

**Q3.** Given a fitted log-linear trend $\ln \hat y_t = 4.10 + 0.018t$, what is the model-implied per-period growth rate?
**A.** $e^{0.018}-1 = 1.816\%$ per period.

---

*Continued in [Module 2: AR Models and Stationarity](/cfa/study/01-quantitative-methods/05-time-series-analysis/02-ar-models-and-stationarity/), which addresses how to correctly model a series once trend-model residuals prove serially correlated.*
