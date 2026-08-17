---
layout: page
title: "AR Models and Stationarity"
permalink: /study/01-quantitative-methods/05-time-series-analysis/02-ar-models-and-stationarity/
next: /cfa/study/01-quantitative-methods/05-time-series-analysis/03-comparing-forecast-models/
prev: /cfa/study/01-quantitative-methods/05-time-series-analysis/01-trend-models/
---
## Summary: AR Models and Stationarity (CFA Level II — Quantitative Methods)

---

### The Autoregressive (AR) Model

An **autoregressive model** regresses a time series on its own past (lagged) values. Because the dependent and "independent" variables are really the same series, we drop the $y$/$x$ distinction and just write $x_t$.

**AR(1):**

$$\boxed{x_t = b_0 + b_1x_{t-1} + \varepsilon_t}$$

**AR(p) — general form, using $p$ lags:**

$$\boxed{x_t = b_0 + b_1x_{t-1}+b_2x_{t-2}+\dots+b_px_{t-p}+\varepsilon_t}$$

AR models are the workhorse of time-series forecasting in investments — most financial and economic series are best described this way (moving-average models, Module 5, are the exception rather than the rule).

---

### Covariance Stationarity

Ordinary least squares on an AR model is only valid if the series is **covariance stationary**. A covariance-stationary series satisfies **three requirements**, all periods $t$:

1. **Constant, finite mean**: $E(y_t)=\mu$, $|\mu|<\infty$
2. **Constant, finite variance**: $\text{var}(y_t)$ constant and finite
3. **Constant, finite covariance with itself at any fixed lag**: $\text{cov}(y_t,y_{t-s})=\lambda_s$, constant and finite for all $s$

| Symptom in a time-series plot | Implication |
|---|---|
| Roughly constant mean and variance, no strong trend, no seasonality | Likely covariance stationary |
| Steady upward/downward drift | Nonconstant mean → **not** stationary |
| Regular seasonal swings (e.g., December retail spikes) | Nonconstant mean by season → **not** stationary |
| Random walk (see Module 4) | Unbounded variance → **not** stationary |

> **Key insight**: If a series is not covariance stationary, estimating $x_t=b_0+b_1x_{t-1}+\varepsilon_t$ by OLS produces **spurious** results: $\hat b_1$ is biased and all hypothesis tests are invalid. Any series accurately described by a linear or log-linear trend model (Module 1) is, by construction, **not** covariance stationary in levels.

> Stationarity in the past does not guarantee stationarity in the future — a well-specified model can still fail if the underlying data-generating regime shifts.

---

### Detecting Serially Correlated Errors in an AR Model

The Durbin–Watson statistic is **invalid** here because the independent variable is a lagged dependent variable. Instead, use the **autocorrelations of the residuals**.

The $k$th-order **autocorrelation** of a series is its correlation with its own value $k$ periods earlier, $\hat\rho_k$. For a correctly specified AR model, *all residual autocorrelations should be statistically indistinguishable from 0*.

**Test**: the standard error of each residual autocorrelation is $1/\sqrt{T}$ (T = number of observations); the t-statistic is $\hat\rho_k \big/ (1/\sqrt{T})$, compared against the usual critical t-value.

**Three-step method to validate/select an AR model:**

1. Estimate an AR(1) (or candidate order) model.
2. Compute the autocorrelations of the model's residuals (typically the first 4+ lags).
3. Test each residual autocorrelation for significance against 0.
   - **None significant** → model is well specified; use it.
   - **Any significant** → model is misspecified; add another lag (try AR(2), AR(3), …) and repeat.

**CFA curriculum example — Intel gross margin, AR(1), quarterly 2003–2019:** $\hat b_0=0.1513$ (t≈3.15), $\hat b_1=0.7462$ (t≈9.22); the first four residual autocorrelations all had $|t|<1.97$ → model well specified.

**CFA curriculum example — US CPI inflation, 1995–2018:** an AR(1) model left the *second* residual autocorrelation significant ($t\approx-2.80$) → misspecified. Moving to **AR(2)** ($\hat b_0=1.5996$, $\hat b_1=0.4759$, $\hat b_2=-0.1964$) eliminated the significant autocorrelation → correctly specified.

---

### Mean Reversion

A series is **mean reverting** if it tends to fall when above its long-run mean and rise when below it — every covariance-stationary series is mean reverting.

At the **mean-reverting level**, the model predicts no change: $x_{t+1}=x_t$. Solving the AR(1) equation for that condition:

$$\boxed{x_t = \frac{b_0}{1-b_1}}$$

| Current value vs. mean-reverting level | Model's prediction |
|---|---|
| $x_t = b_0/(1-b_1)$ | Stays the same |
| $x_t < b_0/(1-b_1)$ | Rises next period |
| $x_t > b_0/(1-b_1)$ | Falls next period |

**Intel example continued**: mean-reverting level $=0.1513/(1-0.7462)=0.5961$ (59.61%). At a current margin of 65%, the AR(1) model predicts a *decline* toward 59.61%; at 55%, it predicts a *rise*.

> **Key insight**: $b_1$ near 1 implies very slow mean reversion (a near-random walk); $b_1$ near 0 implies the series reverts almost fully to $b_0$ each period. $b_1 \geq 1$ in absolute value means the mean-reverting level is undefined or negative-implying and the series is **not** covariance stationary (see Module 4).

---

### Multiperiod Forecasts and the Chain Rule of Forecasting

The one-period-ahead AR(1) forecast made in period $t$:

$$\hat x_{t+1} = \hat b_0 + \hat b_1 x_t$$

Because $x_{t+1}$ is unknown at time $t$, a two-period-ahead forecast substitutes the *forecast* of $x_{t+1}$ back into the model — the **chain rule of forecasting**:

$$\boxed{\hat x_{t+2} = \hat b_0 + \hat b_1 \hat x_{t+1}}$$

and, generally, each successive-period forecast plugs in the prior period's forecast. Analogous logic extends to AR(p) models and to $h$-period-ahead forecasts.

> **Key insight**: Multiperiod forecasts are **more uncertain** than single-period forecasts — uncertainty compounds at each link of the chain, so forecast-error variance rises with the forecast horizon.

---

### Worked Example — Solvane Robotics Gross Margin

Continuing the Solvane Robotics example (Module 1), Nandakumar fits an AR(1) model to quarterly gross margin:

$$\text{Margin}_t = 0.12 + 0.80(\text{Margin}_{t-1}) + \varepsilon_t$$

**Q1 — Mean-reverting level:**

$$\frac{0.12}{1-0.80} = 0.60 \;(60\%)$$

**Q2 — One- and two-period-ahead forecasts, current margin = 58%:**

$$\hat{\text{Margin}}_{t+1} = 0.12+0.80(0.58) = 0.584 \;(58.4\%)$$

$$\hat{\text{Margin}}_{t+2} = 0.12+0.80(0.584) = 0.5872 \;(58.72\%)$$

Both forecasts rise toward the 60% mean-reverting level, consistent with the current margin (58%) sitting below it.

**Q3 — Diagnostic check:** the residual autocorrelations at lags 1–4 all have $|t|<1.90$ (critical value ≈1.99 at 5% with her sample size), so Nandakumar concludes the AR(1) specification is adequate — she does not need to move to AR(2).

---

### Question Set Answers

**Q1.** Why is the Durbin–Watson statistic invalid for testing serial correlation in an AR(1) model?
**A.** Because the independent variable ($x_{t-1}$) is a lagged value of the dependent variable, violating the assumption underlying the DW test; instead, test the autocorrelations of the residuals against 0 using the $1/\sqrt{T}$ standard error.

**Q2.** An AR(1) model has $\hat b_0=0.40$, $\hat b_1=0.50$. What is the mean-reverting level, and what does the model predict if the current value is 0.90?
**A.** Mean-reverting level $=0.40/(1-0.50)=0.80$. Since 0.90 > 0.80, the model predicts the series will **fall** toward 0.80 next period: $\hat x_{t+1}=0.40+0.50(0.90)=0.85$.

**Q3.** A four-quarter-ahead forecast is needed from an AR(1) model. How is it computed?
**A.** Apply the chain rule of forecasting sequentially: compute $\hat x_{t+1}$ from $x_t$, then $\hat x_{t+2}$ from $\hat x_{t+1}$, then $\hat x_{t+3}$ from $\hat x_{t+2}$, then $\hat x_{t+4}$ from $\hat x_{t+3}$ — each step substitutes the prior forecast into the AR(1) equation.

---

*Continued in [Module 3: Comparing Forecast Models](/cfa/study/01-quantitative-methods/05-time-series-analysis/03-comparing-forecast-models/).*
