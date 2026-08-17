---
layout: page
title: "Time-Series Model Selection Summary"
permalink: /study/01-quantitative-methods/05-time-series-analysis/07-summary/
prev: /cfa/study/01-quantitative-methods/05-time-series-analysis/06-arch-and-multiple-time-series/
---
## Summary: Time-Series Model Selection and Formula Reference (CFA Level II — Quantitative Methods)

---

### The Master Decision Framework (Suggested Steps in Time-Series Forecasting)

This is the single most exam-relevant sequence in the Learning Module — CFA exam vignettes are frequently built as a walk through exactly these steps. Work through them **in order**; each step's outcome determines whether you move on or loop back.

| Step | Question | If NO / fails | If YES / passes |
|---|---|---|---|
| 1 | Is a **causal regression model** (based on other variables) more appropriate than a pure time-series model? | Use a time-series model (continue below) | Use causal regression instead |
| 2 | Plot the series. Does it look covariance stationary (no trend, no seasonality, no regime shift)? | Identify the specific problem: linear trend, exponential trend, seasonality, and/or a structural shift | Skip to Step 5 |
| 3 | Is there a linear or exponential trend but **no** seasonality/shift? | Go to Step 4 | Fit a trend model (Module 1): linear ($y_t=b_0+b_1t$) or log-linear ($\ln y_t=b_0+b_1t$), based on whether growth is constant-amount or constant-rate |
| 3a | Check the trend model's residuals with the **Durbin–Watson** statistic. Significant serial correlation? | Trend model is sufficient — use it for forecasting | Go to Step 4 |
| 4 | Transform the series to achieve covariance stationarity: linear trend → **first-difference**; exponential trend → **log, then first-difference**; regime shift → **split the sample**; seasonality → handled in Step 7 | — | Proceed to Step 5 with the transformed series |
| 5 | Estimate an **AR(1)** model on the (possibly transformed) series. Residual autocorrelations significant? | Use the AR(1) model | Go to Step 6 |
| 6 | Estimate **AR(2)**; test residual autocorrelations again. Still significant? | Keep increasing AR order until residual autocorrelations are insignificant | Use that AR($p$) model |
| 7 | Check for **seasonality**: plot the data, and/or test whether the residual autocorrelation at the seasonal lag (4 for quarterly, 12 for monthly) is significant | No significant seasonal autocorrelation — proceed to Step 8 | Add a seasonal lag term (e.g., $x_{t-4}$) to the AR model and re-check residual autocorrelations |
| 8 | Test for **ARCH**: regress squared residuals on their own first lag; is the lag coefficient significant? | No ARCH — standard errors from the model are valid | ARCH present — use generalized least squares or another heteroskedasticity correction |
| 9 | Evaluate **out-of-sample** forecasting performance (RMSE) to confirm the final model generalizes beyond the estimation sample | — | Model is ready for use |

> **Key insight**: Notice the recurring pattern — *estimate, check residual autocorrelations, fix if significant, re-check.* Steps 3a, 5–6, and 7 are all instances of the same underlying diagnostic loop applied to a trend model, an AR model, and a seasonal AR model, respectively.

---

### Regression-with-Multiple-Series Decision Table (Module 6 Recap)

| # | Dependent series unit root? | Independent series unit root? | Cointegrated? | Valid to use linear regression? |
|---|---|---|---|---|
| 1 | No | No | N/A | **Yes** |
| 2 | Yes | No | N/A | **No** — spurious |
| 3 | No | Yes | N/A | **No** — spurious |
| 4 | Yes | Yes | No | **No** — spurious |
| 5 | Yes | Yes | Yes | **Yes**, for the long-run relation (Engle–Granger DF test on residuals) |

---

### Formula Summary

**1. Trend models**

$$\boxed{y_t = b_0+b_1t+\varepsilon_t} \quad \text{(linear)} \qquad \boxed{\ln y_t = b_0+b_1t+\varepsilon_t} \quad \text{(log-linear, growth rate} = e^{b_1}-1\text{)}$$

**2. Autoregressive model, order $p$**

$$\boxed{x_t = b_0+b_1x_{t-1}+b_2x_{t-2}+\dots+b_px_{t-p}+\varepsilon_t}$$

**3. Mean-reverting level (AR(1))**

$$\boxed{x_t = \frac{b_0}{1-b_1}}$$

**4. Chain rule of forecasting**

$$\hat x_{t+1}=\hat b_0+\hat b_1x_t \qquad \hat x_{t+2}=\hat b_0+\hat b_1\hat x_{t+1}$$

**5. Root mean squared error (out-of-sample model comparison)**

$$\boxed{RMSE = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(\text{Actual}_i-\text{Forecast}_i)^2}}$$

**6. Random walk / random walk with drift**

$$x_t = x_{t-1}+\varepsilon_t \qquad x_t = b_0+x_{t-1}+\varepsilon_t \;(b_0\neq0)$$

**7. Dickey–Fuller unit root test regression**

$$\boxed{x_t-x_{t-1} = b_0+g_1x_{t-1}+\varepsilon_t}, \quad H_0: g_1=0 \text{ (unit root)} \text{ vs. } H_a: g_1<0$$

**8. n-period moving average (smoothing)**

$$\boxed{\text{MA}_t = \frac{x_t+x_{t-1}+\dots+x_{t-(n-1)}}{n}}$$

**9. Moving-average time-series model, order $q$**

$$x_t = \varepsilon_t+\theta_1\varepsilon_{t-1}+\dots+\theta_q\varepsilon_{t-q}$$

**10. AR model with seasonal lag (quarterly example)**

$$\boxed{x_t = b_0+b_1x_{t-1}+b_2x_{t-4}+\varepsilon_t}$$

**11. ARCH(1) test and variance forecast**

$$\hat\varepsilon_t^2=a_0+a_1\hat\varepsilon_{t-1}^2+u_t \qquad \boxed{\hat\sigma_{t+1}^2=\hat a_0+\hat a_1\hat\varepsilon_t^2}$$

**12. Engle–Granger cointegration test**

Estimate $y_t=b_0+b_1x_t+\varepsilon_t$; apply a Dickey–Fuller test (Engle–Granger critical values) to the regression residuals for a unit root.

---

### Quick Reference — Model Diagnostics at a Glance

| Test / statistic | Used for | Valid when independent variable is a lagged $y$? |
|---|---|---|
| Durbin–Watson | Serial correlation in trend-model residuals | **No** — invalid for AR models |
| Residual autocorrelation t-test ($1/\sqrt{T}$ SE) | Serial correlation in AR-model residuals | **Yes** — the correct tool for AR models |
| Dickey–Fuller | Unit root (nonstationarity) in a single series | Uses revised (larger) critical values |
| Engle–Granger (Dickey–Fuller on residuals) | Cointegration between two+ unit-root series | Uses further-revised critical values |
| ARCH(1) regression test | Time-varying (conditional) error variance | Applies to residuals of any AR/MA/ARMA model |
| RMSE | Out-of-sample forecast accuracy comparison | N/A — applies to forecast errors directly |

---

### Exam Tips

- **Model-selection checklist, memorize the order**: plot → check stationarity → trend model + DW test → if misspecified, transform (difference/log) → AR(1) → test residual autocorrelations → increase AR order until clean → check seasonal lag → check ARCH → validate out-of-sample with RMSE.
- **Durbin–Watson is valid only for trend models** (distinct dependent/independent variables). For **any** AR model, use the residual-autocorrelation t-test with standard error $1/\sqrt{T}$ instead — this substitution is a classic exam trap.
- **Mean-reverting level** $=b_0/(1-b_1)$ — compute it and compare to the *current* value to determine whether the model predicts a rise or fall. Undefined ($b_1=1$) signals a random walk.
- **Chain rule of forecasting**: multi-period forecasts substitute the prior forecast back into the model; forecast uncertainty **grows** with horizon.
- **In-sample ≠ out-of-sample.** RMSE (out-of-sample) is the tie-breaker between competing models for real forecasting use — never rely on in-sample $R^2$ or standard error alone.
- **Coefficient instability**: different sample periods can imply different model orders and different forecasts. Look for regime changes (policy shifts, volatility breaks) before committing to a sample window.
- **Random walk red flags**: $b_1\approx1$, intercept $\approx0$, deceptively high $R^2$ in levels but near-zero $R^2$ after differencing. Random walks have **undefined mean reversion** and **unbounded variance** — never estimate AR/OLS directly on a suspected random walk; first-difference it first.
- **Unit root test = Dickey–Fuller**, on $x_t-x_{t-1}=b_0+g_1x_{t-1}+\varepsilon_t$, testing $H_0: g_1=0$ with **DF-specific critical values** (not standard t-tables) — always larger in magnitude than conventional ones.
- **AR vs. MA diagnosis**: AR autocorrelations decay gradually; MA(q) autocorrelations cut off sharply to zero after lag $q$.
- **Seasonality tell**: significant residual autocorrelation at the periods-per-year lag (4 = quarterly, 12 = monthly). Fix by adding that lag as a regressor, not by switching model families.
- **ARCH test**: regress squared residuals on their own lag; significant coefficient ⇒ standard errors from the original model are unusable without correction (e.g., generalized least squares).
- **The five-scenario cointegration table is the highest-yield content in this LM** — memorize it: (1) neither series has a unit root → regress freely; (2)/(3) only one has a unit root → never regress; (4) both have unit roots, not cointegrated → never regress (spurious); (5) both have unit roots, cointegrated → regress, but only trust it for the long-run relationship, and use Engle–Granger (not plain Dickey–Fuller) critical values to test cointegration.
- **ARMA and GARCH are "know the limitations," not "know the math"** topics at this level: unstable parameters, no clean order-selection rule, require large samples — be ready to recognize these as weaknesses, not to estimate them.
