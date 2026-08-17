---
layout: page
title: "Moving-Average Models and Seasonality"
permalink: /study/01-quantitative-methods/05-time-series-analysis/05-moving-average-and-seasonality/
next: /cfa/study/01-quantitative-methods/05-time-series-analysis/06-arch-and-multiple-time-series/
prev: /cfa/study/01-quantitative-methods/05-time-series-analysis/04-random-walks-and-unit-roots/
---
## Summary: Moving-Average Models and Seasonality (CFA Level II — Quantitative Methods)

---

### Smoothing with an n-Period Moving Average

A simple **n-period moving average** smooths short-term noise to reveal an underlying trend:

$$\boxed{\text{MA}_t = \frac{x_t+x_{t-1}+\dots+x_{t-(n-1)}}{n}}$$

This is purely a **descriptive/smoothing** tool (e.g., a 12-month moving average of retail sales strips out the December spike/January drop to reveal the underlying trend) — it is **not** a forecasting model, and it always **lags** turning points in the underlying data (it rose only gradually as oil prices spiked in 2007–08, and fell only gradually as they crashed in late 2008). It also weights every included period equally, which limits its use as a forecasting tool.

**CFA curriculum example**: a four-quarter moving average of AstraZeneca's quarterly sales (\$8,490m, \$8,601m, \$8,405m, \$8,872m) is $(8{,}490+8{,}601+8{,}405+8{,}872)/4=\$8{,}592$ million.

---

### Moving-Average Time-Series Models for Forecasting

Do **not** confuse the simple moving average above with a **moving-average (MA) time-series model** — a genuinely different construct in which the current value is a (weighted) function of current and past **unobservable error terms**, not past observed values:

**MA(1):**

$$\boxed{x_t = \varepsilon_t + \theta\varepsilon_{t-1}}, \quad E(\varepsilon_t)=0,\; E(\varepsilon_t^2)=\sigma^2,\; \text{cov}(\varepsilon_t,\varepsilon_s)=0 \text{ for } t \ne s$$

**MA(q) — general form:**

$$\boxed{x_t = \varepsilon_t+\theta_1\varepsilon_{t-1}+\dots+\theta_q\varepsilon_{t-q}}$$

**Key diagnostic — how to tell AR from MA, and to choose $q$:**

| Model | Pattern of autocorrelations |
|---|---|
| **MA(q)** | First $q$ autocorrelations significantly different from 0; **all autocorrelations beyond lag $q$ are exactly 0** ("memory" of $q$ periods) |
| **AR(p)** | Autocorrelations start large and **decline gradually** across many lags (no sudden cutoff) |

> **Key insight**: This is the practical test for choosing between an AR and an MA specification — plot the first several autocorrelations of the *raw series itself* (not residuals). A sudden drop-off after lag $q$ signals MA(q); a gradual decay signals AR. Most financial series are best modeled as AR; a documented exception in the curriculum is monthly returns to the S&P BSE 100 Index, none of whose first six autocorrelations was statistically significant — consistent with an **MA(0)** process, i.e., $x_t=\mu+\varepsilon_t$ (unpredictable from its own past, though a small constant positive mean is expected on investment-theory grounds).

---

### Seasonality in Time-Series Models

A series with **significant seasonality** shows a regular within-year pattern (e.g., December retail spikes). Modeled naively with a plain AR(p), the seasonal autocorrelation of the residuals (the autocorrelation at the lag corresponding to one year — the 4th lag for quarterly data, the 12th lag for monthly data) will be significantly nonzero, signaling misspecification.

**Fix: add a seasonal lag as an extra regressor.** For quarterly data and an AR(1) base model:

$$\boxed{x_t = b_0+b_1x_{t-1}+b_2x_{t-4}+\varepsilon_t}$$

**Detecting and correcting seasonality — step-by-step:**

1. Estimate the base AR(p) model (with $p$ chosen as in Module 2).
2. Compute residual autocorrelations, paying particular attention to the lag equal to the periods-per-year (4 for quarterly, 12 for monthly).
3. If that seasonal-lag autocorrelation is statistically significant → seasonality present, model misspecified.
4. Add the seasonal lag (e.g., $x_{t-4}$ for quarterly data) as an additional independent variable and re-estimate.
5. Re-check residual autocorrelations (including the seasonal lag itself) for significance; iterate if necessary.

**CFA curriculum example — Starbucks quarterly (log-differenced) sales:**

| Model | Seasonal (4th-lag) residual autocorrelation | t-statistic | $R^2$ |
|---|---|---|---|
| AR(1), no seasonal lag | 0.7630 | 6.47 (significant) | 0.2044 |
| AR(1) + seasonal lag | Not significant | — | 0.7032 |

Adding the seasonal lag more than tripled the $R^2$ and eliminated the significant seasonal autocorrelation — powerful evidence that seasonal lags are essential for series like quarterly retail/consumer sales.

**CFA curriculum example — Canadian furniture/home-furnishing retail sales growth (monthly):** the 12th-lag (seasonal) residual autocorrelation was 0.7620 (t≈11.2) without a seasonal lag; adding the 12th lag dropped it to −0.1168 (not significant) and raised $R^2$ from 0.0509 to 0.6724.

---

### Worked Example — Solvane Robotics Seasonal Sales

Solvane's quarterly sales growth shows a strong seasonal pattern (year-end capital-equipment orders). Nandakumar fits an AR(1) model with a seasonal (4th) lag:

$$\text{Sales growth}_t = 0.01 - 0.10(\text{Sales growth}_{t-1}) + 0.75(\text{Sales growth}_{t-4}) + \varepsilon_t$$

**Q1 — Forecast, given sales grew 3% last quarter and 5% in the same quarter one year ago:**

$$\hat{\text{Sales growth}}_t = 0.01 - 0.10(0.03)+0.75(0.05) = 0.01-0.003+0.0375 = 0.0445 \;(4.45\%)$$

**Q2 — Why include the 4th lag rather than, say, the 2nd or 3rd?**
**A.** Because Solvane reports quarterly data, one full year = 4 quarters; the seasonal pattern (e.g., a Q4 order surge) recurs every 4th observation, so the seasonal autocorrelation to check — and the lag to add — is the 4th, not the 2nd or 3rd.

---

### Question Set Answers

**Q1.** A series' autocorrelations are significant at lags 1 and 2 but statistically indistinguishable from 0 at lag 3 onward. What model class and order does this suggest?
**A.** MA(2) — a moving-average model of order 2, since MA(q) processes have a "memory" of exactly $q$ periods and all higher-lag autocorrelations are 0.

**Q2.** An analyst models monthly seasonally-unadjusted data with an AR(1) model. The residual autocorrelation at lag 12 is significant. What should she do?
**A.** Add a seasonal lag (the 12th lag of the series) as an additional regressor, i.e., estimate $x_t=b_0+b_1x_{t-1}+b_2x_{t-12}+\varepsilon_t$, and re-check the residual autocorrelations (including lag 12) for significance.

**Q3.** Distinguish a "simple moving average" from a "moving-average time-series model."
**A.** A simple moving average is a descriptive smoothing device computed from *observed* past values of the series (Equation for $\text{MA}_t$ above) and is not itself a forecasting model. A moving-average time-series model (MA(q)) expresses the current observation as a function of current and lagged **unobservable error terms**, and is a genuine alternative to AR models for forecasting.

---

*Continued in [Module 6: ARCH Models and Multiple Time Series](/cfa/study/01-quantitative-methods/05-time-series-analysis/06-arch-and-multiple-time-series/).*
