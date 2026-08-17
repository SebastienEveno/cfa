---
layout: page
title: "Influence Analysis"
permalink: /study/01-quantitative-methods/04-regression-extensions/01-influence-analysis/
next: /cfa/study/01-quantitative-methods/04-regression-extensions/02-dummy-variables/
---
## Summary: Influence Analysis (CFA Level II — Quantitative Methods)

---

### Why Influential Observations Matter

Beyond violations of regression assumptions (linearity, homoskedasticity, independence, normality), a small number of unusual observations can materially bias multiple regression results. An **influential observation** is one whose inclusion in — or exclusion from — the sample significantly alters the estimated regression (coefficients, fit, or both).

Two distinct types of unusual observations can be influential:

| Type | Extreme in... | Effect on regression |
|---|---|---|
| **High-leverage point** | An independent variable (X) | Can "tilt" the fitted line toward it if it also lies far from the line |
| **Outlier** | The dependent variable (Y), relative to its predicted value | Produces a large residual; can distort slope and fit statistics |

> **Key insight**: Being unusual is not the same as being influential. A high-leverage point that still lies close to the fitted regression line has little effect on the estimated coefficients. An observation only becomes a problem when it is both extreme **and** distant from the line — that combination is what "tilts" the regression toward it.

---

### Detecting High-Leverage Points

**Leverage** ($h_{ii}$) measures how far the $i$th observation's independent variable value(s) lie from the mean of that variable across the sample. It ranges from 0 to 1, and the sum of leverage values across all $n$ observations equals $k+1$ (the $k$ independent variables plus 1 for the intercept).

$$\boxed{h_{ii} \text{ is potentially influential if } h_{ii} > 3\left(\frac{k+1}{n}\right)}$$

Where $k$ = number of independent variables and $n$ = number of observations. The higher the leverage, the more extreme the observation's X-value relative to the sample mean, and therefore the more potential pull it has on the fitted regression line.

---

### Detecting Outliers: Studentized Residuals

Because a simple scatterplot cannot reliably flag unusual observations once there are multiple independent variables, analysts use the **studentized (deleted) residual**. The logic:

1. Estimate the regression using all $n$ observations.
2. For each observation $i$, delete it and re-estimate the regression on the remaining $(n-1)$ observations, generating a predicted value $\hat{Y}_i^*$.
3. Compute the deleted residual $e_i^* = Y_i - \hat{Y}_i^*$, and divide it by its own standard error to "studentize" it.

$$\boxed{t_i^* = \frac{e_i^*}{s_{e(i)}} = \frac{e_i}{\sqrt{MSE_{(i)}\left(1-h_{ii}\right)}}}$$

Where $MSE_{(i)}$ is the mean squared error of the regression that excludes observation $i$, and $h_{ii}$ is that observation's leverage. The studentized residual is compared to the critical value of a $t$-distribution with $(n-k-2)$ degrees of freedom.

| If... | Then... |
|---|---|
| $\lvert t_i^* \rvert > 3$ | Flag observation as an outlier (rule of thumb) |
| $\lvert t_i^* \rvert >$ critical $t$-value at $(n-k-2)$ df | Flag as a **potentially influential** outlier |

---

### Summary: Measures of Influence

| Measure | Flags extremeness in... | Range/basis | Influential if... |
|---|---|---|---|
| **Leverage** ($h_{ii}$) | Independent variable (X) | 0 to 1; sums to $k+1$ | $h_{ii} > 3\left(\dfrac{k+1}{n}\right)$ |
| **Studentized residual** ($t_i^*$) | Dependent variable (Y) | $t$-distributed, $(n-k-2)$ df | $\lvert t_i^* \rvert >$ critical $t$-value |

Both measures are readily produced by statistical software. Together with a visual influence plot and a comparison of "full-sample" versus "observation-removed" regression output, they form the standard toolkit for identifying influential data points.

---

### Worked Example — Meridian Capital Research: OPM Regression

A junior analyst at **Meridian Capital Research** is initiating coverage of nutritional supplement retailers, motivated by "health consciousness" and "aging population" themes. She regresses **operating profit margin (OPM)** on the number of unique products (**PROD**) and the percentage of online sales (**ONLINE**) across $n=15$ retailers ($k=2$).

**Full-sample regression:**

| Variable | Coefficient | Std. Error | t-Statistic | P-value |
|---|---|---|---|---|
| Intercept | 7.03 | 13.60 | 0.52 | 0.61 |
| PROD | 0.77 | 0.28 | 2.70 | 0.02 |
| ONLINE | −0.29 | 0.28 | −1.02 | 0.33 |

Only PROD has a slope coefficient significantly different from zero at the 5% level (p = 0.02).

**Checking leverage**: the rule-of-thumb cutoff is $3\left(\frac{k+1}{n}\right) = 3\left(\frac{3}{15}\right) = 0.60$. Observation 7 has leverage of 0.80, which exceeds 0.60 — it is flagged as a potentially influential high-leverage point.

**Regression after removing Observation 7:**

| Variable | Coefficient | Std. Error | t-Statistic | P-value |
|---|---|---|---|---|
| Intercept | 9.81 | 24.80 | 0.40 | 0.70 |
| PROD | 0.74 | 0.33 | 2.25 | 0.05 |
| ONLINE | −0.36 | 0.61 | −0.59 | 0.57 |

Removing Observation 7 raises the intercept and widens the standard errors, pushing PROD's p-value to exactly 5%. The observation is influential in the sense that it changes the precision of the estimates — but the core conclusion (PROD is significant at the 5% level) still holds.

**Checking studentized residuals**: with $n=15$, $k=2$, degrees of freedom $= n-k-2 = 11$, the two-tailed critical $t$-value at 5% significance is 2.2010. Observations 2 and 3 have studentized residuals exceeding this critical value in absolute terms, flagging them as potentially influential outliers requiring further investigation (e.g., checking for data errors in their reported OPM).

---

### Remedies for Influential Observations

- **Data errors**: If the influential point reflects a data-entry or measurement error, correct or discard it and re-estimate on the cleansed sample.
- **Winsorizing**: Cap (rather than delete) extreme values to limit their pull on the regression without discarding the observation entirely.
- **Valid but influential data**: If the point is legitimate, it may signal an **omitted variable** or a violation of regression assumptions — the fix is to improve the model specification, not to mechanically delete the observation.

> **Key insight**: Automatically excluding influential points is not a default best practice — it can materially change coefficient estimates and their interpretation. The decision to exclude, winsorize, or retain a point should follow from understanding *why* it is unusual.

---

### Question Set Answers

**Q1.** A regression of companies' return on assets (ROA) uses 26 observations and three independent variables. Using studentized residuals, which observations are outliers at the 5% significance level, given studentized residuals of 2.915 for Observation 3 and −4.033 for Observation 5?

**A.** Degrees of freedom $= n - k - 2 = 26 - 3 - 2 = 21$, giving critical $t$-values of ±2.080. Both Observation 3 (2.915) and Observation 5 (−4.033) exceed this threshold in absolute value, so both are flagged as outliers.

**Q2.** What should the analyst do about these flagged observations?

**A.** Investigate Observations 3 and 5 for data-entry or data-quality issues before deciding whether to correct, winsorize, or retain them; do not delete them automatically without investigation.

**Q3.** In a regression with $n = 96$ and $k = 2$, an observation has leverage $h_{ii} = 0.101$. Is it potentially influential?

**A.** The cutoff is $3\left(\frac{k+1}{n}\right) = 3\left(\frac{3}{96}\right) = 0.09375$. Since 0.101 > 0.09375, yes — this observation is flagged as a potentially influential high-leverage point.
