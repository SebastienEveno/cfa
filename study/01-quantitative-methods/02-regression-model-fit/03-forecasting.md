---
layout: page
title: "Forecasting Using Multiple Regression"
permalink: /study/01-quantitative-methods/02-regression-model-fit/03-forecasting/
next: /cfa/study/01-quantitative-methods/02-regression-model-fit/04-formula-summary/
prev: /cfa/study/01-quantitative-methods/02-regression-model-fit/02-hypothesis-testing/
---
## Summary: Forecasting Using Multiple Regression (CFA Level II — Quantitative Methods)

---

### The Point Forecast

Forecasting with a multiple regression extends the simple-regression approach: multiply each estimated slope by an assumed value for that independent variable, sum across all variables, and add the intercept.

$$\boxed{\hat{Y}_f = \hat{b}_0 + \hat{b}_1X_{1f} + \hat{b}_2X_{2f} + \cdots + \hat{b}_kX_{kf} = \hat{b}_0 + \sum_{j=1}^{k}\hat{b}_jX_{jf}}$$

**Two cautions specific to multiple regression:**
- **Include every independent variable used to estimate the model** — even ones that were individually insignificant — because the estimated coefficients reflect the correlations *among* all the variables jointly. Dropping an insignificant variable from the forecast changes the meaning of the remaining coefficients.
- **Always include the intercept term.**

---

### Worked Example: Kestrel Capital — Forecasting Portfolio Excess Return

Using the fitted five-factor model,

$$\hat{Y}_f = -2.1876 + 1.5992\,Factor1 + 0.1923\,Factor2 - 0.7126\,Factor3 + 3.3376\,Factor4 - 2.6832\,Factor5$$

Kestrel's team plugs in the desk's assumed factor values for next month:

| Factor | Assumed value | Estimated coefficient | Product |
|---|---|---|---|
| Intercept | 1.000 | −2.1876 | −2.1876 |
| Factor 1 | 0.110 | 1.5992 | 0.1759 |
| Factor 2 | 0.040 | 0.1923 | 0.0077 |
| Factor 3 | 0.080 | −0.7126 | −0.0570 |
| Factor 4 | −0.010 | 3.3376 | −0.0334 |
| Factor 5 | 0.001 | −2.6832 | −0.0027 |
| **Predicted excess return** | | | **−2.0971%** |

$$\hat{Y}_f = -2.1876 + 0.1759 + 0.0077 - 0.0570 - 0.0334 - 0.0027 = -2.0971\%$$

The model forecasts a **−2.0971%** excess return for the portfolio given these factor realizations.

---

### Sources of Forecast Uncertainty

The confidence interval around $\hat{Y}_f$ must reflect **two** sources of error, both larger than the simple within-sample regression standard error:

| Source | Description |
|---|---|
| **Model error** | The regression's own residual variance — not every observation lies exactly on the fitted relationship, captured by $\varepsilon_i$ |
| **Sampling error** | Present only when the independent variables themselves are *forecasts* (out-of-sample $X_{1f}, \ldots, X_{kf}$) rather than known, in-sample values — error in forecasting the $X$'s propagates into error in forecasting $Y$ |

> **Key insight**: The combined effect of model error and sampling error means the **standard error of the forecast is always larger than the standard error of the regression**, and out-of-sample prediction intervals are correspondingly **wider** than what within-sample fit statistics alone would suggest. The full closed-form calculation is beyond what's tested directly — in practice, and on the exam, statistical software produces the standard error of the forecast and the interval bounds directly.

---

### Worked Example: Kestrel Capital — Prediction Interval

For the same five-factor forecast above, Kestrel's risk system reports a standard error of the forecast of 1.1466 around the point estimate of −2.0971%, giving a 95% confidence interval:

$$\text{Lower bound} = -4.4098\%, \qquad \text{Upper bound} = 0.2119\%$$

Even though the point forecast is negative, the wide interval (driven by both model and sampling error) means the true excess return could plausibly be mildly positive — a reminder that a single point forecast can overstate the precision of a multi-factor prediction.

---

### In-Sample vs. Out-of-Sample Forecasting

| | In-sample | Out-of-sample |
|---|---|---|
| Independent variable values | Actual, observed values from the estimation data | Assumed / forecasted values, not yet observed |
| Error sources | Model error only | Model error **and** sampling error (from forecasting the $X$'s) |
| Interval width | Narrower | Wider |
| Typical use | Describing historical fit | Predicting a future or hypothetical outcome |

---

### Question Set Answers

**Q1.** Kestrel's research analyst estimates the following model for Bracknell Industries' manufacturing peer group:

$$ROA = 4.7022 + 1.2302 \cdot CAPEX - 0.0371 \cdot ADV + 0.1029 \cdot R\&D$$

An institutional salesperson asks for the predicted ROA assuming $CAPEX = 5$, $ADV = 4$, $R\&D = 3$.

**A.**

$$\hat{ROA}_f = 4.7022 + 1.2302(5) - 0.0371(4) + 0.1029(3) = 11.0135$$

The predicted ROA is **11.0135%**.

**Q2.** For the RET model $RET = -0.823 + 1.719\,MRKT + 0.412\,HML + 0.026\,VIX + 0.553\,SMB - 0.067\,MOM$, calculate predicted RET given $MRKT=3$, $HML=-2$, $VIX=-5$, $SMB=1$, $MOM=3$.

**A.**

$$RET = -0.823 + 1.719(3) + 0.412(-2) + 0.026(-5) + 0.553(1) - 0.067(3) = 3.732$$

**Q3.** A colleague suggests dropping the statistically insignificant VIX term from the RET forecast above to "clean up" the prediction. Is this appropriate?

**A.** No. All independent variables used to estimate the model — including those that are not individually significant — must be included when generating a forecast. The fitted coefficients were estimated jointly, accounting for correlations across all five variables; omitting one from the forecast calculation (while keeping the others' coefficients as estimated) produces a biased, inconsistent prediction.

---
