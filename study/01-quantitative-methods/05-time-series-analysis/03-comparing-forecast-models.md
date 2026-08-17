---
layout: page
title: "Comparing Forecast Models"
permalink: /study/01-quantitative-methods/05-time-series-analysis/03-comparing-forecast-models/
next: /cfa/study/01-quantitative-methods/05-time-series-analysis/04-random-walks-and-unit-roots/
prev: /cfa/study/01-quantitative-methods/05-time-series-analysis/02-ar-models-and-stationarity/
---
## Summary: Comparing Forecast Models (CFA Level II — Quantitative Methods)

---

### In-Sample vs. Out-of-Sample Forecast Errors

| Term | Definition |
|---|---|
| **In-sample forecast errors** | Residuals from the fitted model, *within* the period used to estimate it |
| **Out-of-sample forecast errors** | Differences between actual and predicted values for a period **outside** the estimation sample |

> **Key insight**: Out-of-sample performance is what matters for real-world investment decisions — the future is always out of sample. A model can fit its estimation period beautifully (low in-sample error, high $R^2$) yet forecast poorly going forward. Many published analyses report only in-sample fit; a careful analyst always checks out-of-sample performance too.

**In-sample comparison shortcut**: the model with the smaller **standard error of the regression** (reported directly in the regression output) has the smaller in-sample forecast-error variance and is judged more accurate in-sample.

---

### Root Mean Squared Error (RMSE)

For **out-of-sample** comparison, compute the **root mean squared error**:

$$\boxed{RMSE = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(\text{Actual}_i - \text{Forecast}_i)^2}}$$

The model with the **smaller** out-of-sample RMSE is judged the more accurate forecasting model.

**CFA curriculum example — US CPI inflation, Jan–Sep 2019 out-of-sample (models estimated 1995–2018):**

| Model | In-sample standard error | Out-of-sample RMSE |
|---|---|---|
| AR(1) | 2.9687 | 1.9014 |
| AR(2) | 2.9208 | 1.4157 |

AR(2)'s RMSE was $1.4157/1.9014 = 74.46\%$ of AR(1)'s — the AR(2) model was more accurate **both** in-sample and out-of-sample, consistent with AR(2) being the correctly specified model (Module 2).

> **Key insight**: $R^2$ comparisons across models can be actively misleading when one series is nonstationary (see the random-walk case in Module 4) — RMSE on out-of-sample data is the more reliable comparison tool for forecast accuracy specifically.

---

### Instability of Regression Coefficients

Time-series coefficient estimates are often **unstable across sample periods** — a model estimated on an earlier window can differ substantially from the same model estimated on a later or longer window, and the *best model order* (AR(1) vs. AR(2), etc.) can itself change with the sample period chosen.

**Why this happens**: different sub-periods may reflect different underlying regimes (e.g., fixed vs. floating exchange rates, pre- vs. post-financial-crisis monetary policy). Combining regimes with different means/variances into one sample violates covariance stationarity.

**Practical guidance for choosing a sample period:**

- Plot the data first — look for visually distinct regimes (structural breaks, volatility shifts).
- If you know a policy or structural change occurred on a specific date, test whether the time-series relation differs before/after.
- Do not mechanically rely on autocorrelation diagnostics alone to choose a sample period — economic judgment about *why* the data-generating process might have changed is essential.
- Compare the **standard deviation** of the series across candidate sub-periods; a large shift is a red flag for regime change.

**CFA curriculum example — US CPI inflation, full sample (1995–2018) vs. sub-sample (2008–2018):**

| Sample period | Best AR order | Estimated coefficients | Std. dev. of inflation |
|---|---|---|---|
| 1995–2018 (full) | AR(2) | $b_0=1.5996$, $b_1=0.4759$, $b_2=-0.1964$ | 2.86% (1995–2007) |
| 2008–2018 (shorter) | AR(1) | $b_0=0.8431$, $b_1=0.5036$ | 3.54% (2008–2018) |

Given inflation of 4% last month and 3% the month before, the AR(2)/full-sample forecast was 2.91% versus the AR(1)/short-sample forecast of 2.86% — a modest difference, but the example illustrates that **sample-period choice changes both model order and forecast**. Because volatility clearly differs across the two sub-periods (2.86% vs. 3.54% standard deviation), the series is likely not covariance stationary over the full 1995–2018 window, favoring the shorter, single-regime AR(1) model estimated on 2008–2018 data.

---

### Worked Example — Solvane Robotics

Nandakumar (from Module 2) now compares her AR(1) gross-margin model against an AR(2) alternative using four out-of-sample quarters of Solvane Robotics data:

| Quarter | Actual margin | AR(1) forecast | AR(1) error | AR(1) squared error | AR(2) forecast | AR(2) error | AR(2) squared error |
|---|---|---|---|---|---|---|---|
| Q1 | 59.0% | 58.4% | 0.6 | 0.36 | 58.8% | 0.2 | 0.04 |
| Q2 | 60.5% | 59.3% | 1.2 | 1.44 | 60.1% | 0.4 | 0.16 |
| Q3 | 58.0% | 60.0% | -2.0 | 4.00 | 58.6% | -0.6 | 0.36 |
| Q4 | 61.0% | 58.5% | 2.5 | 6.25 | 60.4% | 0.6 | 0.36 |

$$RMSE_{AR(1)} = \sqrt{\frac{0.36+1.44+4.00+6.25}{4}} = \sqrt{3.0125} \approx 1.735$$

$$RMSE_{AR(2)} = \sqrt{\frac{0.04+0.16+0.36+0.36}{4}} = \sqrt{0.23} \approx 0.480$$

Because $RMSE_{AR(2)} \ll RMSE_{AR(1)}$, Nandakumar concludes the AR(2) specification forecasts Solvane's gross margin materially better out-of-sample and adopts it going forward.

---

### Question Set Answers

**Q1.** Model A has an in-sample standard error of 1.85; Model B has 2.10. Out-of-sample, Model A has RMSE 3.40 and Model B has RMSE 2.95. Which model should be used for forecasting?
**A.** Model B — although Model A fits better in-sample, out-of-sample RMSE is the relevant criterion for real forecasting performance, and Model B's RMSE is lower.

**Q2.** An analyst finds that an AR(1) model is adequate for a series estimated over the last five years, but an AR(3) model was needed over the last fifteen years. What is the most likely explanation?
**A.** The longer sample likely spans more than one underlying regime (structural break/regime change), so the series may not be covariance stationary over the full 15 years; the shorter, more homogeneous sample better satisfies the AR-model assumptions.

**Q3.** Why can't $R^2$ alone be used to choose between two competing time-series models?
**A.** $R^2$ can be misleadingly high for a nonstationary (e.g., random walk) series while being uninformative about genuine predictability; RMSE computed on out-of-sample data is the more reliable comparison criterion (see also Module 4 for the random-walk $R^2$ trap).

---

*Continued in [Module 4: Random Walks and Unit Roots](/cfa/study/01-quantitative-methods/05-time-series-analysis/04-random-walks-and-unit-roots/).*
