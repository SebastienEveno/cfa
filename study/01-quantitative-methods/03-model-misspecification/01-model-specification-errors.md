---
layout: page
title: "Model Specification Errors"
permalink: /study/01-quantitative-methods/03-model-misspecification/01-model-specification-errors/
next: /cfa/study/01-quantitative-methods/03-model-misspecification/02-heteroskedasticity/
---
## Summary: Model Specification Errors (CFA Level II — Quantitative Methods)

---

### Principles of Good Regression Specification

Model specification is the choice of variables to include in a regression and the functional form of the regression equation. Five broad principles guide a well-specified model:

| Principle | Explanation |
|-----------|-------------|
| **Grounded in economic reasoning** | Variable choices should have a logical, economic justification, not just statistical fit |
| **Parsimonious** | Every included variable should play an essential role; avoid unnecessary complexity |
| **Performs well out of sample** | A model that fits only the training data is **overfit** and will fail on new data |
| **Appropriate functional form** | If theory suggests a nonlinear relationship, the model should include the appropriate nonlinear terms |
| **Satisfies regression assumptions** | If heteroskedasticity, serial correlation, or multicollinearity are detected, revise the variables and/or functional form |

---

### Failures in Regression Functional Form

Four common errors cause a regression to depart from its correct functional form:

| Failure | Explanation | Typical Consequence |
|---------|-------------|---------------------|
| **Omitted variables** | One or more important independent variables are left out of the regression | Heteroskedasticity or serial correlation |
| **Inappropriate form of variables** | A nonlinear relationship between dependent and independent variables is ignored (modeled as linear) | Heteroskedasticity |
| **Inappropriate scaling** | One or more variables should be transformed (e.g., scaled by size) before estimation | Heteroskedasticity or serial correlation |
| **Inappropriate pooling of data** | The sample pools data from structurally different regimes/subsamples that should not be combined | Unreliable, unstable coefficient estimates |

---

### Omitted Variable Bias

Suppose the **true** model is:

$$\boxed{Y_i = b_0 + b_1X_{1i} + b_2X_{2i} + \varepsilon_i}$$

but the analyst estimates the **misspecified** model, omitting $X_2$:

$$\boxed{Y_i = b_0 + b_1X_{1i} + u_i} \qquad \text{where } u_i = b_2X_{2i} + \varepsilon_i$$

The consequences depend on whether the omitted variable is correlated with the included variable:

| Case | Effect on $\hat{b}_1$ | Effect on Intercept/Residuals | Usable for Inference? |
|------|------------------------|-------------------------------|------------------------|
| $X_2$ **uncorrelated** with $X_1$ | Still estimated correctly (unbiased) | Intercept is biased; residual is not i.i.d. with mean zero | No — standard errors are still unreliable |
| $X_2$ **correlated** with $X_1$ | Biased **and** inconsistent | Intercept and residuals biased and inconsistent | No — coefficients and standard errors are both invalid |

> **Key insight**: Omitted variable bias is the most damaging when the missing variable is correlated with an included regressor — in that case, *every* estimated coefficient, not just the omitted one, becomes unreliable.

---

### Inappropriate Form of Variables

A model may wrongly assume a **linear** relationship when the true relationship is nonlinear. Economic theory and a simple scatterplot of the data are the first line of defense. A common fix: if a relationship becomes linear when a variable is expressed as a **proportional change**, taking the **natural logarithm** of that variable corrects the misspecification.

---

### Inappropriate Scaling of Variables

Using raw (unscaled) data when scaled data is more appropriate is a common source of misspecification. This is why analysts routinely convert financial statements to **common-size** form before comparing companies — it removes the confound of company size and lets profitability, leverage, and efficiency trends be compared on a like-for-like basis.

---

### Inappropriate Pooling of Data

Pooling data that spans a **structural break** — such as a regulatory change or a shift from a low- to a high-volatility regime — produces a sample that does not represent a single underlying relationship. On a scatterplot, pooled data from different regimes appears as **discrete, widely separated clusters** with little or no overall correlation, because the cluster means differ sharply. When such subsamples are identifiable, the analyst should estimate the model using only the subsample most representative of the conditions expected during the forecast period.

---

### Worked Example — Meridian Capital: Gold Returns and Market Volatility

**Setup**: A junior analyst at Meridian Capital, a precious-metals-focused asset manager, is asked to model gold returns (GOLD) as a function of changes in the CBOE VIX Index (VIX) using 32 months of data. Two diagnostic scatterplots are produced: (1) GOLD vs. VIX changes, and (2) the regression residuals vs. GOLD returns.

**Diagnosis**: The residual-vs-GOLD scatterplot shows a **strong positive relationship**, not random noise. This is a red flag — it indicates the residuals are not independent, do not have a zero expected value, and are likely heteroskedastic. The conclusion is that VIX alone does not explain enough of the variation in GOLD returns — the model is missing relevant explanatory variables (omitted variable bias).

**Recommended fix**: Add variables with economic justification — e.g., broad market returns, expected inflation, or an indicator variable for high- vs. low-geopolitical-risk periods.

**A related factor model**: Meridian's precious-metals team also estimates a two-factor model explaining the excess returns of the Meridian Precious Metals Portfolio (MPMP):

$$MPMP_i = b_0 + b_1 X_{1i} + b_2 X_{2i} + \varepsilon_i$$

| | Coefficient | Standard Error | t-Stat | P-Value |
|---|---|---|---|---|
| Intercept | 0.013 | 0.005 | 2.671 | 0.009 |
| X1 (Factor 1) | 1.896 | 0.208 | 9.111 | 0.000 |
| X2 (Factor 2) | 0.170 | 0.186 | 0.916 | 0.361 |

Adjusted $R^2 = 43\%$, and the overall F-test rejects the null that both slope coefficients are zero.

The analyst then plots the model's residuals against the excess return on the market (MKTRF) and fits a trend line: $y = 1.0225x - 0.0118$, with $R^2 = 0.6474$.

**Diagnosis**: A strong, systematic relationship between the residuals and MKTRF — a variable *not* in the model — is the signature of **omitted variable bias**. Because MKTRF is (plausibly) correlated with Factor 1 and/or Factor 2, both estimated coefficients and their standard errors are unreliable.

**Correction**: Add MKTRF to the model and re-estimate.

---

### Question Set Answers

**Q1 — Gold/VIX scatterplots**: Do they show a violation of regression assumptions?
Yes — the strong pattern in residuals vs. GOLD indicates non-independent, non-normally-distributed, heteroskedastic residuals, and signals that VIX alone fails to capture the variation in gold returns.

**Q2 — Type of misspecification in the MPMP factor model**:
Omitted variable bias — the clear linear relationship between the model's residuals and MKTRF ($R^2 = 0.6474$) shows a relevant variable was left out.

**Q3 — Effect of the misspecification on the estimated model**:
The coefficients on X1 and X2, along with their standard errors, are biased and inconsistent, so the model cannot be relied on for statistical inference until MKTRF is added and the model is re-estimated.

