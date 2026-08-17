---
layout: page
title: "Formula Summary: Regression Model Fit and Model Results"
permalink: /study/01-quantitative-methods/02-regression-model-fit/04-formula-summary/
prev: /cfa/study/01-quantitative-methods/02-regression-model-fit/03-forecasting/
---
## Formula Summary: Evaluating Regression Model Fit and Interpreting Model Results (CFA Level II — Quantitative Methods)

---

### 1. Goodness of Fit

**Coefficient of determination:**
$$\boxed{R^2 = \frac{SSR}{SST} = \frac{\sum_{i=1}^n(\hat{Y}_i - \bar{Y})^2}{\sum_{i=1}^n(Y_i - \bar{Y})^2}}$$

**Adjusted $R^2$:**
$$\boxed{\bar{R}^2 = 1 - \left[\frac{SSE/(n-k-1)}{SST/(n-1)}\right] = 1 - \left[\left(\frac{n-1}{n-k-1}\right)(1-R^2)\right]}$$

> $\bar{R}^2$ rises when an added variable's $\lvert t\text{-statistic}\rvert > 1.0$; falls when $\lvert t\text{-statistic}\rvert < 1.0$. $\bar{R}^2 < R^2$ whenever $k \geq 1$, and $\bar{R}^2$ can be negative.

**Information criteria** (lower is better; compare only across models sharing the same dependent variable):
$$\boxed{AIC = n\ln\left(\frac{SSE}{n}\right) + 2(k+1)}$$
$$\boxed{BIC = n\ln\left(\frac{SSE}{n}\right) + \ln(n)(k+1)}$$

---

### 2. Testing Joint Hypotheses

**Restricted-vs-unrestricted (nested model) F-test:**
$$\boxed{F = \frac{(SSE_R - SSE_U)/q}{SSE_U/(n-k-1)}} \quad \text{with } q \text{ and } n-k-1 \text{ df}$$

**General linear F-test (overall model significance):**
$$\boxed{F = \frac{MSR}{MSE} = \frac{SSR/k}{SSE/(n-k-1)}} \quad \text{with } k \text{ and } n-k-1 \text{ df}$$

**Single-coefficient t-test** (identical in form to simple regression):
$$\boxed{t = \frac{\hat{b}_j - B_j}{s_{\hat{b}_j}}} \quad \text{with } n-k-1 \text{ df}$$

---

### 3. Forecasting

**Point forecast:**
$$\boxed{\hat{Y}_f = \hat{b}_0 + \sum_{j=1}^{k}\hat{b}_jX_{jf}}$$

> Must include every independent variable from the estimated model (even insignificant ones) plus the intercept. Out-of-sample forecast intervals are wider than in-sample fit because they combine **model error** with **sampling error** (from forecasting the $X$'s).

---

### Quick Reference — All Formulas

| Measure | Formula |
|---|---|
| $R^2$ | $SSR/SST$ |
| Adjusted $R^2$ | $1-[(n-1)/(n-k-1)](1-R^2)$ |
| AIC | $n\ln(SSE/n) + 2(k+1)$ |
| BIC | $n\ln(SSE/n) + \ln(n)(k+1)$ |
| Restricted-vs-unrestricted F-test | $[(SSE_R-SSE_U)/q] \, / \, [SSE_U/(n-k-1)]$ |
| General linear F-test | $MSR/MSE = (SSR/k)/(SSE/(n-k-1))$ |
| Single-coefficient t-test | $(\hat{b}_j - B_j)/s_{\hat{b}_j}$ |
| Point forecast | $\hat{b}_0 + \sum \hat{b}_jX_{jf}$ |

---

### Exam Tips

- **$R^2$ never decreases** when a variable is added — never use raw $R^2$ alone to compare models with different numbers of independent variables; use **adjusted $R^2$**, AIC, or BIC instead.
- **Adjusted $R^2$ rule of thumb**: rises if the added variable's $\lvert t\text{-statistic}\rvert > 1.0$, falls if $< 1.0$. This is a *low* bar — well short of typical 5%/1% significance thresholds — so a rising adjusted $R^2$ does not by itself prove significance.
- **AIC → prediction focus; BIC → goodness-of-fit/parsimony focus.** BIC's penalty ($\ln n$) always exceeds AIC's penalty (2) for $n \geq 8$, so BIC favors smaller models more aggressively. Only compare AIC/BIC values across models with the **same dependent variable**.
- **Restricted vs. unrestricted F-test**: restricted model = fewer variables (nested inside the unrestricted model); $q$ = number of coefficients restricted to zero; always a one-tailed, right-side test; reject $H_0$ when SSE drops enough to justify the lost degrees of freedom.
- **General linear F-test** is the special case of the joint F-test where the restricted model is the intercept-only model — it's exactly the $F$-statistic reported in every ANOVA table (MSR/MSE).
- **A joint F-test can reject $H_0$ even when no individual $t$-test does** (and vice versa) — correlated independent variables share explanatory power that single-coefficient tests can miss. Always check both.
- **Forecasting checklist**: (1) include *every* independent variable from the fitted model, even statistically insignificant ones; (2) don't forget the intercept; (3) out-of-sample forecasts (using assumed/forecasted $X$ values) carry **more** error than in-sample fit — the prediction interval is wider because it adds sampling error to model error.
- **Multiple-regression coefficient interpretation**: intercept = expected $Y$ when *all* $X$'s are zero; slope $b_j$ = expected change in $Y$ per one-unit change in $X_j$, holding all *other* independent variables constant.
- Watch for **overfitting** signals on the exam: a model with the highest $R^2$ but weak adjusted $R^2$/AIC/BIC rankings relative to a smaller nested model is the classic overfitting trap.
