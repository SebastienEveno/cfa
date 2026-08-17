---
layout: page
title: "Multicollinearity"
permalink: /study/01-quantitative-methods/03-model-misspecification/04-multicollinearity/
next: /cfa/study/01-quantitative-methods/03-model-misspecification/05-formula-summary/
prev: /cfa/study/01-quantitative-methods/03-model-misspecification/03-serial-correlation/
---
## Summary: Multicollinearity (CFA Level II — Quantitative Methods)

---

### What Is Multicollinearity?

Multiple linear regression assumes there is **no exact linear relationship** between two or more independent variables. If that assumption is fully violated, the regression cannot even be estimated. **Multicollinearity** is the milder — but common — case: two or more independent variables are highly correlated, or an **approximate** linear combination exists among three or more independent variables. The regression can still be estimated, but interpreting the role and significance of individual independent variables becomes unreliable. Because approximate linear relationships among financial and economic variables are common, multicollinearity is a frequent, serious concern.

---

### Consequences of Multicollinearity

- Coefficient estimates remain **consistent**, but become **imprecise and unreliable**.
- It becomes **impossible to isolate** the individual impact of each collinear independent variable on the dependent variable.
- Standard errors are **inflated** and t-statistics are **diminished**, so t-tests have little power to reject the null hypothesis — even when the variables, as a group, explain the dependent variable well.

> **Key insight — the classic symptom**: A **high $R^2$** and a **significant overall F-statistic**, combined with **individually insignificant t-statistics** on the slope coefficients, is the textbook signature of multicollinearity. The variables jointly explain the dependent variable; individually, their effects can't be disentangled.

---

### Detecting Multicollinearity — Variance Inflation Factor (VIF)

With more than two independent variables, **pairwise correlations are an inadequate diagnostic** — low pairwise correlations can still coexist with a highly correlated (and unobservable) linear combination of several regressors. The **variance inflation factor (VIF)** solves this by directly quantifying how much a variable's variance is inflated due to collinearity with the *other* regressors.

For independent variable $X_j$ among $k$ total independent variables: regress $X_j$ on the remaining $k-1$ independent variables to obtain $R_j^2$ (the variation in $X_j$ explained by the other regressors), then:

$$\boxed{VIF_j = \frac{1}{1 - R_j^2}}$$

| Rule of Thumb | Interpretation |
|---|---|
| $VIF_j = 1$ | No correlation between $X_j$ and the remaining regressors (minimum possible value, occurs when $R_j^2 = 0$) |
| $VIF_j > 5$ | Warrants further investigation |
| $VIF_j > 10$ | Serious multicollinearity — requires correction |

VIF rises as $R_j^2$ rises: the more accurately $X_j$ can be predicted from the other independent variables, the more redundant it is — and the larger its VIF.

---

### Worked Example — Meridian Capital: Style Analysis of the Meridian Technology Fund

**Setup**: An analyst wants to know whether the Meridian Technology Fund (MTF) behaves more like a large-cap growth or large-cap value fund, using 60 months of data:

$$MTF_t = b_0 + b_1SGX_t + b_2SVX_t + \varepsilon_t$$

where SGX is the monthly return on the S&P 500 Growth Index and SVX is the monthly return on the S&P 500 Value Index.

**Two-variable model** ($R^2 = 0.782$, Adjusted $R^2 = 0.774$):

| | Coefficient | Standard Error | t-Stat | P-Value |
|---|---|---|---|---|
| Intercept | −0.0069 | 0.004 | −1.896 | 0.063 |
| SGX | 1.7765 | 0.196 | 9.064 | 0.000 |
| SVX | −0.4488 | 0.196 | −2.292 | 0.026 |

Both SGX and SVX are statistically significant, and VIFs confirm no multicollinearity concern:

| Variable | VIF |
|---|---|
| SGX | 3.97 |
| SVX | 3.97 |

**Adding a redundant variable**: The analyst then adds the return on the S&P 500 Index (SPX) itself — which, by construction, is a blend of the growth and value indexes, inadvertently over-specifying the model. The correlation matrix reveals the problem:

| | MTF | SPX | SVX | SGX |
|---|---|---|---|---|
| **MTF** | 1 | 0.81 | 0.68 | 0.87 |
| **SPX** | 0.81 | 1 | 0.96 | 0.97 |
| **SVX** | 0.68 | 0.96 | 1 | 0.87 |
| **SGX** | 0.87 | 0.97 | 0.87 | 1 |

SPX is correlated 0.96–0.97 with each of SGX and SVX. The three-variable regression results:

| | Coefficient | Standard Error | t-Stat |
|---|---|---|---|
| SGX | 1.53 | 6.166 | 0.248 |
| SVX | −0.45 | 5.503 | −0.082 |

Adjusted $R^2$ barely changes — SPX adds essentially no new explanatory power — but the standard errors on SGX and SVX balloon (from 0.196 to 6.166 and 5.503, respectively), and **both variables are now statistically insignificant**. The VIFs confirm severe multicollinearity:

| Variable | VIF (with SPX) |
|---|---|
| SGX | ≈ 3,864 |
| SVX | ≈ 3,083 |
| SPX | ≈ 12,905 |

All three VIFs are far above the threshold of 10 — a classic case of a redundant, over-specified model.

---

### Correcting for Multicollinearity

Possible solutions include:

- **Excluding** one or more of the collinear regression variables (here: drop SPX).
- Using a **different proxy** for one of the variables.
- **Increasing the sample size**.

> **Practical note**: Often there is no clean fix — the analyst must experiment with including/excluding variables to isolate the source of the collinearity. Also, if the model's purpose is purely **prediction** of the dependent variable (rather than **interpreting** the individual roles of the regressors), multicollinearity may not be a major practical concern.

---

### Question Set Answers

**Q1** — A three-feature ROA model (CAPEX, ADV, R&D) for diversified manufacturers has Adjusted $R^2 = 86.50\%$ and a significant overall F-statistic (54.4039), with CAPEX's t-statistic highly significant. Is multicollinearity a concern based on the regression results alone? Based on VIF?
From the regression results alone, multicollinearity does not appear to be a concern — the significant F-statistic is consistent with at least one significant individual t-statistic (CAPEX). Checking VIF confirms this: CAPEX = 1.164, ADV = 1.068, R&D = 1.095 — all well below 5, so variances are not meaningfully inflated and t-statistics are reliable.

**Q2** — Four factors have $R_j^2$/VIF values: X1 (0.748 / 3.968), X2 (0.451 / 1.820), X3 (0.942 / 17.257), X4 (0.926 / 13.434). Which variables show multicollinearity issues?
**X3 and X4** — both VIFs exceed 10, indicating serious multicollinearity requiring correction. X1 and X2 have VIFs well below 5 and are not a concern.

**Q3** — What are valid solutions for the multicollinearity identified in Q2?
All three are valid: (1) exclude one or more of the regression variables (e.g., drop X3 or X4), (2) use a different proxy for one of the variables, and (3) increase the sample size.

