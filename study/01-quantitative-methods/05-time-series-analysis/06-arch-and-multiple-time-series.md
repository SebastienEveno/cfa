---
layout: page
title: "ARCH Models and Multiple Time Series"
permalink: /study/01-quantitative-methods/05-time-series-analysis/06-arch-and-multiple-time-series/
next: /cfa/study/01-quantitative-methods/05-time-series-analysis/07-summary/
prev: /cfa/study/01-quantitative-methods/05-time-series-analysis/05-moving-average-and-seasonality/
---
## Summary: ARCH Models and Multiple Time Series (CFA Level II — Quantitative Methods)

---

### ARMA Models — Brief Overview and Cautions

An **autoregressive moving-average (ARMA)** model combines AR and MA terms:

$$x_t = b_0+b_1x_{t-1}+\dots+b_px_{t-p}+\varepsilon_t+\theta_1\varepsilon_{t-1}+\dots+\theta_q\varepsilon_{t-q}$$

denoted ARMA($p,q$). Despite the theoretical appeal, the CFA curriculum flags **serious practical limitations**:

- Parameter estimates can be **highly unstable** — small changes in the data sample or in starting parameter guesses can produce very different final estimates.
- Choosing $p$ and $q$ is "more art than science" — no clean diagnostic like the AR/MA autocorrelation cutoff rules exists for the combined model.
- More complexity does not guarantee better forecasts; a well-specified plain AR model frequently forecasts just as well.
- Practitioners generally avoid ARMA with fewer than ~80 observations, and even proponents don't recommend it for quarterly company data (sales, margins) with only ~15 years of history.

> **Exam angle**: ARMA models are testable mainly as a "know the limitations" topic, not as a calculation topic — expect qualitative questions about instability and model-selection difficulty rather than numeric ARMA problems.

---

### Autoregressive Conditional Heteroskedasticity (ARCH)

Time-series regressions have so far assumed **homoskedasticity** (constant error variance). When error variance instead depends on the size of *previous* errors, the series exhibits **ARCH** — a concept introduced by Robert Engle (2003 Nobel laureate).

**ARCH(1):**

$$\varepsilon_t \sim N(0,\, a_0+a_1\varepsilon_{t-1}^2)$$

If $a_1=0$, variance is constant (no ARCH). If $a_1>0$, a large squared error today raises the *expected* variance of tomorrow's error — volatility clustering.

**Testing for ARCH(1):**

$$\boxed{\hat\varepsilon_t^2 = a_0+a_1\hat\varepsilon_{t-1}^2+u_t}$$

1. Estimate the time-series model (AR, MA, or ARMA) and save the residuals.
2. Square the residuals to form $\hat\varepsilon_t^2$.
3. Regress $\hat\varepsilon_t^2$ on a constant and its own first lag, $\hat\varepsilon_{t-1}^2$.
4. Test whether $\hat a_1$ is statistically significantly different from 0.
   - **Not significant** → no ARCH(1); the original model's standard errors are valid.
   - **Significant** → ARCH(1) present; the original model's standard errors/t-statistics are **invalid**, and generalized least squares (or another correction for heteroskedasticity) is needed.

**If ARCH(1) is confirmed, forecast next period's error variance:**

$$\boxed{\hat\sigma_{t+1}^2 = \hat a_0+\hat a_1\hat\varepsilon_t^2}$$

**CFA curriculum example — AR(1) model of US CPI inflation (1995–2018):** the ARCH(1) test regression gave $\hat a_0=6.3626$, $\hat a_1=0.2754$ (t≈4.83) — clearly significant, so the AR(1) inflation model's original t-statistics cannot be trusted. Predicted variance next period, given this period's error = 1%: $6.3626+0.2754(1)^2=6.6380$.

> **Key insight**: **GARCH** (generalized ARCH) extends ARCH(1) the way ARMA extends AR — it is similarly "finicky," sensitive to sample period and starting values, and results should always be checked for robustness.

---

### Regressions with More Than One Time Series

Everything up to this point modeled a **single** series on its own lags. When regressing one time series on **another** (or on several others), each series must first be checked separately for a unit root before the regression can be trusted.

**Decision framework — two time series (dependent $y_t$, independent $x_t$):**

| Scenario | $y_t$ has unit root? | $x_t$ has unit root? | Can we trust OLS on $y_t=b_0+b_1x_t+\varepsilon_t$? |
|---|---|---|---|
| 1 | No | No | **Yes** — proceed with standard linear regression |
| 2 | Yes | No | **No** — error term not stationary; regression is spurious |
| 3 | No | Yes | **No** — same problem, reversed |
| 4 | Yes | Yes, **not cointegrated** | **No** — error term not stationary; spurious regression |
| 5 | Yes | Yes, **cointegrated** | **Yes**, cautiously — coefficients/SEs are consistent for the **long-term** relation only |

> **Key insight**: This five-row table is the single most heavily tested piece of logic in this Learning Module. The only two "safe to regress" outcomes are (1) neither series has a unit root, or (5) both have a unit root **and** are cointegrated. Every other combination produces a **spurious regression** — a seemingly significant relationship with high $R^2$ that reflects nothing but shared nonstationary drift, not a genuine economic relationship (Granger and Newbold 1974).

---

### Cointegration and the Engle–Granger Test

Two unit-root series are **cointegrated** if a long-term economic relationship ties them together so they do not diverge without bound (e.g., they share a common stochastic trend).

**Engle–Granger (Dickey–Fuller) test for cointegration — step-by-step:**

1. Confirm **both** series have a unit root (via separate Dickey–Fuller tests).
2. Estimate the regression $y_t = b_0+b_1x_t+\varepsilon_t$.
3. Test whether the **residuals** of that regression have a unit root, using a Dickey–Fuller test — but with **Engle–Granger critical values**, not ordinary DF critical values (these account for the extra uncertainty from using estimated, not raw, residuals).
4. **Fail to reject** unit root in the residuals → residuals nonstationary → **not cointegrated** → the original regression is spurious, discard it.
5. **Reject** unit root in the residuals → residuals stationary → series **are cointegrated** → the regression coefficients/standard errors are consistent and usable for hypothesis tests about the **long-run** relationship (though not necessarily the best short-run model — that requires an error-correction model, outside CFA Level II scope).

**CFA curriculum example — Intel sales vs. nominal GDP (logs, quarterly 1995–2019):** both $\ln(\text{Intel sales})$ and $\ln(\text{GDP})$ fail to reject a unit root individually. Regressing $\ln(\text{Intel sales}_t)=b_0+b_1\ln(\text{GDP}_t)+\varepsilon_t$ and applying the Engle–Granger DF test to the residuals: rejecting the residual unit-root null implies the two series are cointegrated, validating use of the regression to describe their long-run relationship.

**Extending to three or more series**: the same logic applies (test each series, then test the multiple-regression residuals for a unit root using Engle–Granger critical values), but modeling cointegration among three-plus nonstationary series is materially harder and is flagged in the curriculum as beyond Level II scope — the practical exam guidance is: *if you have not mastered these multi-series techniques, avoid building forecasting models on multiple unit-root series altogether*, since misapplied regression coefficients can produce systematically wrong forecasts.

---

### Worked Example — Solvane Robotics Sales vs. GDP

Nandakumar wants to know whether Solvane Robotics' log sales are related to log national industrial-production GDP over the long run.

**Q1 — First step?**
**A.** Test each series individually for a unit root with a Dickey–Fuller test. Suppose both $\ln(\text{Sales})$ and $\ln(\text{GDP})$ fail to reject $H_0$ (unit root present in both) — she cannot yet run a naive regression.

**Q2 — Next step, and outcome?**
**A.** Regress $\ln(\text{Sales}_t)=b_0+b_1\ln(\text{GDP}_t)+\varepsilon_t$, save the residuals, and run a Dickey–Fuller test on those residuals using **Engle–Granger** critical values. Suppose the residual DF t-statistic is $-3.95$, more negative than the 5% Engle–Granger critical value of $-3.40$. She **rejects** the unit-root null for the residuals → the two series are **cointegrated** → the regression is valid for describing the long-run sales/GDP relationship.

**Q3 — Caveat?**
**A.** Even though the long-run regression is valid, it may not be the best model of *short-term* dynamics between Solvane's sales and GDP — that would require an error-correction model, which is beyond the scope of this reading.

---

### Question Set Answers

**Q1.** Regressing $y_t$ (no unit root) on $x_t$ (has a unit root) yields a highly significant slope coefficient and $R^2=0.88$. Should the analyst trust this result?
**A.** No. This is Scenario 3 in the decision table — one series has a unit root and the other does not, so the error term cannot be covariance stationary and the regression is spurious regardless of significance/$R^2$.

**Q2.** Two series both have unit roots. The Engle–Granger DF test on the regression residuals fails to reject the null of a unit root. What should the analyst conclude and do?
**A.** The series are **not** cointegrated; the residuals are nonstationary, so the regression relationship is spurious and should be discarded — do not use it for inference or forecasting.

**Q3.** How does an analyst test whether an AR(1) model's errors exhibit ARCH(1)?
**A.** Regress the squared residuals on a constant and the first lag of the squared residuals; if the coefficient on the lagged squared residual is statistically significant, the errors are ARCH(1), and generalized least squares (or another heteroskedasticity correction) should replace ordinary OLS standard errors.

---

*Continued in [Module 7: Time-Series Model Selection and Formula Summary](/cfa/study/01-quantitative-methods/05-time-series-analysis/07-summary/), which ties every model and test in this reading into a single decision framework.*
