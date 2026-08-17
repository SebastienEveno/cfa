---
layout: page
title: "Formula Summary: Model Misspecification (CFA Level II — Quantitative Methods)"
permalink: /study/01-quantitative-methods/03-model-misspecification/05-formula-summary/
prev: /cfa/study/01-quantitative-methods/03-model-misspecification/04-multicollinearity/
---
## Formula Summary: Model Misspecification (CFA Level II — Quantitative Methods)

---

### 1. Omitted Variable Bias

**True model:**
$$\boxed{Y_i = b_0 + b_1X_{1i} + b_2X_{2i} + \varepsilon_i}$$

**Misspecified model (omitting $X_2$):**
$$\boxed{Y_i = b_0 + b_1X_{1i} + u_i} \qquad u_i = b_2X_{2i} + \varepsilon_i$$

> If $X_2$ is uncorrelated with $X_1$: $\hat{b}_1$ stays unbiased, but the intercept is biased and residuals are not i.i.d. If $X_2$ is correlated with $X_1$: **all** coefficients and standard errors become biased and inconsistent.

---

### 2. Breusch–Pagan (BP) Test — Conditional Heteroskedasticity

$$\boxed{BP = nR^2 \sim \chi^2_k}$$

where $n$ = number of observations, $R^2$ = from the auxiliary regression of squared residuals on the original regressors, $k$ = number of independent variables. One-tailed, right-side test; $H_0$: no conditional heteroskedasticity.

---

### 3. Durbin–Watson (DW) Statistic — First-Order Serial Correlation

$$\boxed{DW = \frac{\displaystyle\sum_{t=2}^{T}(e_t - e_{t-1})^2}{\displaystyle\sum_{t=1}^{T} e_t^2} \approx 2(1-r)}$$

| DW | Interpretation |
|---|---|
| $\approx 2$ | No serial correlation |
| $< 2$ | Positive serial correlation |
| $> 2$ | Negative serial correlation |

---

### 4. Breusch–Godfrey (BG) Test — Serial Correlation up to Lag $p$

**Auxiliary regression:**
$$\boxed{\hat{u}_t = a_0 + a_1X_{1t} + a_2X_{2t} + \rho_1\hat{u}_{t-1} + \cdots + \rho_p\hat{u}_{t-p} + e_t}$$

$H_0: \rho_1 = \cdots = \rho_p = 0$. Test statistic is approximately $F$-distributed with $p$ and $n-p-k-1$ degrees of freedom.

---

### 5. Variance Inflation Factor (VIF) — Multicollinearity

$$\boxed{VIF_j = \frac{1}{1-R_j^2}}$$

where $R_j^2$ is from regressing $X_j$ on the remaining $k-1$ independent variables. $VIF_j > 5$: investigate; $VIF_j > 10$: serious multicollinearity.

---

### 6. Comparison Table — The Three Regression Assumption Violations

| | **Heteroskedasticity** | **Serial Correlation** | **Multicollinearity** |
|---|---|---|---|
| **Violated assumption** | Constant error variance | Independence of errors across observations | Independence of regressors |
| **Typical cause** | Omitted variables, wrong functional form, bad scaling, extreme values | Time-series data with omitted dynamics or trending variables | High correlation (or approximate linear combination) among independent variables |
| **Consequence** | Biased (usually underestimated) coefficient standard errors → inflated t-stats | Inconsistent coefficient estimates *if* a regressor is a lagged $Y$; biased (underestimated) standard errors always | Consistent but imprecise coefficients; inflated standard errors → deflated t-stats |
| **Detection** | Visual inspection of residuals; **Breusch–Pagan test** | **Durbin–Watson test** (first-order only); **Breusch–Godfrey test** (general) | Pairwise correlations (unreliable with >2 regressors); **variance inflation factor (VIF)** |
| **Correction** | Revise the model; use **robust (White-corrected) standard errors** | Revise the model; use **serial-correlation-consistent (Newey–West/HAC) standard errors** | Exclude a variable; use a different proxy; increase sample size |

> All three violations share a common thread: they distort **standard errors**, not necessarily the coefficient point estimates — which is exactly why "robust" standard error corrections (HAC estimators) can simultaneously fix both heteroskedasticity and serial correlation, but **cannot** fix multicollinearity (a data problem, not a variance-estimation problem).

---

### Quick Reference — All Formulas

| Concept | Formula |
|---|---|
| True vs. misspecified model | $Y_i = b_0 + b_1X_{1i} + b_2X_{2i} + \varepsilon_i$ vs. $Y_i = b_0 + b_1X_{1i} + u_i$ |
| BP test statistic | $nR^2 \sim \chi^2_k$ |
| Durbin–Watson statistic | $DW \approx 2(1-r)$, range 0 to 4 |
| BG auxiliary regression | $\hat{u}_t = a_0 + a_1X_{1t} + a_2X_{2t} + \rho_1\hat{u}_{t-1} + \cdots + \rho_p\hat{u}_{t-p} + e_t$ |
| BG test statistic distribution | $F(p,\ n-p-k-1)$ |
| VIF | $VIF_j = 1/(1-R_j^2)$ |

---

### Exam Tips

- **Model specification checklist**: economic reasoning, parsimony, out-of-sample performance, correct functional form, no assumption violations — the exam loves testing which principle a described model violates.
- **Omitted variable bias**: if the omitted variable is *uncorrelated* with included regressors, only the intercept is biased; if *correlated*, everything (coefficients, intercept, standard errors) is biased and inconsistent.
- **Unconditional heteroskedasticity** is mostly harmless; **conditional heteroskedasticity** is the one that matters — it underestimates standard errors and inflates t-statistics, causing more **Type I errors**.
- **BP test = $nR^2$**, chi-square distributed with $k$ df, one-tailed right-side test — compare against the chi-square critical value or use the p-value directly.
- **Serial correlation and lagged dependent variables**: if a regressor is a lagged $Y$, serial correlation makes the coefficient estimates themselves invalid, not just the standard errors — this distinction is a favorite exam trap.
- **DW test only catches first-order** serial correlation; the **BG test** is more general (catches higher-order correlation) and is run as an auxiliary regression with lagged residuals as added regressors.
- **Robust standard errors** (White-corrected / Newey–West / HAC) fix heteroskedasticity and serial correlation simultaneously by adjusting standard errors upward — coefficients are unchanged, but t-statistics fall and p-values rise.
- **Multicollinearity's classic tell**: high $R^2$ + significant F-statistic + individually insignificant t-statistics on the slope coefficients.
- **Pairwise correlation is not a reliable multicollinearity test** once there are more than two independent variables — always prefer **VIF**.
- **VIF thresholds**: $>5$ warrants investigation, $>10$ requires correction; minimum VIF is 1 (no correlation with other regressors).
- **Multicollinearity does not bias coefficients** — it inflates their standard errors and destroys the ability to isolate individual variable effects. If the goal is pure prediction (not interpretation), it may not matter much.
- **Market efficiency lens**: heteroskedasticity and serial correlation "shouldn't" persist in efficient financial markets — if detected, treat it as a potential signal to exploit (e.g., volatility clustering), not just a nuisance to statistically patch.

