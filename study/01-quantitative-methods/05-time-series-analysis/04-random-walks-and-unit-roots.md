---
layout: page
title: "Random Walks and Unit Roots"
permalink: /study/01-quantitative-methods/05-time-series-analysis/04-random-walks-and-unit-roots/
next: /cfa/study/01-quantitative-methods/05-time-series-analysis/05-moving-average-and-seasonality/
prev: /cfa/study/01-quantitative-methods/05-time-series-analysis/03-comparing-forecast-models/
---
## Summary: Random Walks and Unit Roots (CFA Level II — Quantitative Methods)

---

### Random Walks

A **random walk** is a time series whose current value equals its previous value plus an unpredictable, mean-zero error:

$$\boxed{x_t = x_{t-1} + \varepsilon_t}, \quad E(\varepsilon_t)=0,\; E(\varepsilon_t^2)=\sigma^2,\; \text{cov}(\varepsilon_t,\varepsilon_s)=0 \text{ for } t\neq s$$

This is a **special case of AR(1) with $b_0=0$ and $b_1=1$.** The best forecast of $x_t$ made at $t-1$ is simply $x_{t-1}$ — and $x_{t-1}$ remains the best forecast for *every* future period. Currency exchange rates are the classic example of series that behave like random walks.

**A random walk is never covariance stationary:**

| Property | Random walk | Consequence |
|---|---|---|
| Mean-reverting level | $b_0/(1-b_1)=0/0$ → **undefined** | Cannot compute a meaningful long-run mean |
| Variance of $x_t$ | Grows linearly with $t$ (unbounded as $t\to\infty$) | Violates the finite-variance requirement |

Because it is not covariance stationary, **OLS/AR estimation on a random walk is invalid** — estimated coefficients and their standard errors/t-statistics are unreliable, even though the regression may show a deceptively high $R^2$.

> **Key insight (the $R^2$ trap)**: In the CFA curriculum's yen/USD example, an AR(1) model in **levels** produced $R^2=0.99$ (because today's exchange rate is an excellent predictor of tomorrow's *level*), while the same series **first-differenced** produced $R^2\approx 0.0008$ (because *changes* in a random walk are, by definition, unpredictable). Relying on the high-$R^2$ levels regression would have been badly misleading — it says nothing about whether the change is predictable, which is the actual investment question.

**Random walk with drift** adds a nonzero intercept:

$$\boxed{x_t = b_0 + x_{t-1}+\varepsilon_t}, \quad b_0 \neq 0$$

This still has $b_1=1$ (undefined mean reversion, unbounded variance) — it is still not stationary.

---

### Transforming a Random Walk: First-Differencing

Because $b_1=1$ produces $\Delta x_t = x_t - x_{t-1} = \varepsilon_t$ (or $=b_0+\varepsilon_t$ with drift), **first-differencing** a random walk produces a series that *is* covariance stationary:

$$\boxed{y_t = x_t - x_{t-1}}$$

The first-differenced series is AR(1) with $b_0=0,\,b_1=0$ (no drift) or $b_0\neq0,\,b_1=0$ (with drift) — its mean-reverting level is simply $b_0$ (0 for a pure random walk), and its variance is the constant $\sigma^2_\varepsilon$. This satisfies all three covariance-stationarity conditions, so the differenced series **can** be modeled with linear regression — though for a pure random walk, the differenced AR(1) model ($b_0=b_1=0$) carries no forecasting content; it simply confirms the series is a random walk.

---

### The Unit Root Problem

For an AR(1) series to be covariance stationary, $|b_1|<1$. If $|b_1|=1$, the series has a **unit root** and is a random walk (not stationary); if $|b_1|>1$, the root is "explosive." **All random walks (with or without drift) have unit roots.**

A naive t-test of $H_0: b_1=1$ using OLS is **invalid**, because under that null the series is not stationary and the estimated t-statistic does not follow a standard t-distribution.

---

### The Dickey–Fuller Unit Root Test

Dickey and Fuller solved this by transforming the AR(1) model. Subtracting $x_{t-1}$ from both sides of $x_t=b_0+b_1x_{t-1}+\varepsilon_t$:

$$\boxed{x_t - x_{t-1} = b_0 + g_1x_{t-1} + \varepsilon_t}, \quad g_1 \equiv (b_1-1)$$

- $H_0: g_1=0$ (equivalent to $b_1=1$ → **unit root, nonstationary**)
- $H_a: g_1<0$ (equivalent to $b_1<1$ → **stationary**, no unit root)

The t-statistic on $\hat g_1$ is computed conventionally, but it must be compared against **Dickey–Fuller critical values** (larger in absolute value than standard t critical values), not ordinary t-tables.

**Decision framework:**

| Result of DF test | Conclusion | Next step |
|---|---|---|
| Fail to reject $H_0$ ($g_1$ not significantly $<0$) | Series has a unit root — nonstationary | First-difference the series, then model the differenced series with AR |
| Reject $H_0$ ($g_1$ significantly $<0$) | No unit root — stationary in levels | Can model the original series directly with AR |

**CFA curriculum example — AstraZeneca quarterly sales (log), 2000–2011:** a log-linear trend left serially correlated errors (DW = 0.71), so the analyst tested $\ln(\text{Sales}_t)$ for a unit root and **failed to reject** $H_0$ — consistent with the strong visual upward drift. He then first-differenced the logged series (i.e., modeled the log growth rate) and fit an AR(1) to the differenced series, obtaining a well-specified model ($\hat b_0=0.0222$, $\hat b_1=-0.5493$, no significant residual autocorrelation).

**Applying that model**: with $\ln(\text{Sales})_{t-1}=9.0366$ and $\ln(\text{Sales})_t=9.0907$ (so $y_t=0.0541$), the forecast of next period's log-difference is $\hat y_{t+1}=0.0222-0.5493(0.0541)=-0.0075$, implying $\text{Sales}_{t+1}=\text{Sales}_t\times e^{-0.0075}=\$8{,}872\times0.9925\approx\$8{,}805$ million.

---

### Worked Example — Solvane Robotics Stock Price

Nandakumar suspects Solvane Robotics' monthly stock price, $P_t$, behaves like a random walk. She estimates:

$$P_t = 0.42 + 0.995P_{t-1}+\varepsilon_t$$

**Q1 — Is this consistent with a random walk?**
**A.** The slope coefficient (0.995) is very close to 1 and the intercept is small — visually consistent with a random walk (with possible slight drift). However, the ordinary t-statistics on these OLS estimates cannot be trusted for testing $H_0: b_1=1$, because if true, $P_t$ is not covariance stationary.

**Q2 — Correct test procedure:**
**A.** Run the Dickey–Fuller regression $P_t - P_{t-1} = b_0 + g_1P_{t-1}+\varepsilon_t$ and compare the t-statistic on $\hat g_1$ to Dickey–Fuller (not standard) critical values. Suppose $\hat g_1=-0.005$ with a DF t-statistic of $-1.40$, while the 5% DF critical value is $-2.86$. Because $-1.40$ is not more negative than $-2.86$, Nandakumar **fails to reject** $H_0: g_1=0$ — she cannot reject the hypothesis of a unit root, consistent with a random walk.

**Q3 — Given the unit root finding, how should she proceed?**
**A.** First-difference the price series ($\Delta P_t = P_t - P_{t-1}$) and, if needed, model the differenced (return) series with an AR specification — never model $P_t$ in levels with AR/OLS.

---

### Question Set Answers

**Q1.** A researcher estimates an AR(1) model on an exchange rate and obtains $\hat b_1=1.002$ with $R^2=0.98$. Can she conclude the model is a good forecasting tool?
**A.** No. A slope near 1 with a very high $R^2$ is the signature of a random walk in levels; the high $R^2$ reflects predictability of the *level* (today predicts tomorrow's level well) but says nothing about predictability of *changes*, which is what matters for trading/forecasting. A unit root test is required before trusting any inference.

**Q2.** Why can't the ordinary t-statistic from an AR(1) regression be used to test whether $b_1=1$?
**A.** Under the null $b_1=1$, the series is not covariance stationary, so the t-statistic does not follow the standard t-distribution; the Dickey–Fuller test with revised critical values must be used instead.

**Q3.** A series has a unit root. What transformation typically produces a covariance-stationary series that can be modeled with AR methods?
**A.** First-differencing (and, if the series also grows exponentially, taking logs before differencing).

---

*Continued in [Module 5: Moving-Average Models and Seasonality](/cfa/study/01-quantitative-methods/05-time-series-analysis/05-moving-average-and-seasonality/).*
