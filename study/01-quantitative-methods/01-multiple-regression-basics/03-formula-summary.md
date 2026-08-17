---
layout: page
title: "Formula Summary: Multiple Regression Basics (CFA Level II — Quantitative Methods)"
permalink: /study/01-quantitative-methods/01-multiple-regression-basics/03-formula-summary/
prev: /cfa/study/01-quantitative-methods/01-multiple-regression-basics/02-regression-assumptions/
---
## Formula Summary: Multiple Regression Basics (CFA Level II — Quantitative Methods)

---

### 1. The Multiple Regression Equation

**Population model:**
$$\boxed{Y_i = b_0 + b_1X_{1i} + b_2X_{2i} + b_3X_{3i} + \cdots + b_kX_{ki} + \varepsilon_i, \quad i = 1, 2, \ldots, n}$$

**Estimated model:**
$$\boxed{\hat{Y}_i = \hat{b}_0 + \hat{b}_1X_{1i} + \hat{b}_2X_{2i} + \cdots + \hat{b}_kX_{ki}}$$

> Requires $n > k$: more observations than independent variables.

---

### 2. Interpreting Coefficients

| Coefficient | Meaning |
|---|---|
| $b_0$ (intercept) | Expected value of $Y$ when all independent variables equal zero |
| $b_j$ (partial slope / partial regression coefficient) | Expected change in $Y$ for a one-unit change in $X_j$, **holding all other independent variables constant** |

> A variable can show little or no simple (bivariate) correlation with $Y$ in a scatterplot yet still have a statistically significant partial regression coefficient — the coefficient reflects the relationship *net of* the other independent variables in the model.

---

### 3. The Five Assumptions of Multiple Linear Regression

| # | Assumption | Violation consequence |
|---|-----------|------------------------|
| 1 | Linearity | Model misspecified; unreliable predictions and coefficients |
| 2 | Homoskedasticity | Heteroskedasticity → invalid standard errors, $t$-stats, $p$-values, CIs |
| 3 | Independence of errors | Serial correlation → understated standard errors, inflated $t$-stats |
| 4 | Normality of residuals | Unreliable $t$-/$F$-based hypothesis tests and CIs (less critical in large samples) |
| 5 | Independence of independent variables (not random; no exact linear relationship among them) | Exact relationship → model cannot be estimated; approximate relationship (multicollinearity) → unstable, hard-to-interpret coefficients |

---

### 4. Diagnostic Plot Reference

| Plot | Primary use |
|---|---|
| Scatterplot matrix (pairs plot) | Linearity between $Y$ and each $X$; correlation between independent variables; outliers |
| Residuals vs. predicted value | Homoskedasticity; independence of errors; outliers |
| Residuals vs. each independent variable | Model misspecification relative to a specific $X$; outliers |
| Normal Q-Q plot | Normality of residuals (especially fat tails) |

---

### 5. Worked-Example Reference (Kestrel Capital)

**Bond index duration model** (60 monthly observations):
$$RET = 0.0023 - 5.0585\,BY - 2.1901\,CS$$
- $BY$ coefficient = empirical duration (5.0585)
- Prediction at $BY=0.005$, $CS=0.001$: $RET = -2.52\%$

**Three-factor attribution model:**
$$RETRF = 1.5324 + 0.5892\,MKTRF - 0.8719\,SMB - 0.0560\,HML$$
- Prediction at $MKTRF=1$, $SMB=4$, $HML=-2$: $RETRF = -1.254\%$

**Solandra Robotics three-factor diagnostic model** (120 monthly observations):
$$RETRF = 0.0052 + 1.2889\,MKTRF - 0.5841\,SMB - 0.6810\,HML$$
- $R^2 = 0.3891$; overall $F = 24.63$ ($p < 0.0001$); MKTRF, SMB, HML each significant at 5%
- Diagnostics showed no linearity/homoskedasticity/independence violations; mild fat-tailed residuals; 3 outlier months flagged

---

### Quick Reference — All Formulas

| Item | Formula |
|---|---|
| Multiple regression (population) | $Y_i = b_0 + b_1X_{1i} + \cdots + b_kX_{ki} + \varepsilon_i$ |
| Multiple regression (estimated) | $\hat{Y}_i = \hat{b}_0 + \hat{b}_1X_{1i} + \cdots + \hat{b}_kX_{ki}$ |
| Partial slope coefficient $b_j$ | Change in $Y$ per one-unit change in $X_j$, other $X$s held constant |
| Required sample size | $n > k$ |

---

### Exam Tips

- **Dependent variable is continuous → multiple linear regression; dependent variable is discrete/binary (e.g., merger target) → logistic regression.** This is a frequent first-step exam trigger.
- **Partial regression coefficients ≠ simple regression coefficients** — always interpret $b_j$ as "holding all other independent variables constant." A variable can be insignificant in a bivariate scatterplot yet significant in the multiple regression (and vice versa).
- **n must exceed k** (observations must exceed the number of independent variables) or the model cannot be estimated.
- Know the **five assumptions cold**: linearity, homoskedasticity, independence of errors, normality, independence of independent variables (not random + no exact linear relationship).
- **Match each diagnostic plot to what it detects**: scatterplot matrix → linearity + correlation among $X$s + outliers; residuals vs. predicted value → homoskedasticity + independence of errors; residuals vs. a specific $X$ → misspecification re: that variable; normal Q-Q plot → normality.
- **Significant pairwise correlation between two independent variables** is the classic exam clue for an approximate linear relationship (multicollinearity) — a violation of the independence-of-independent-variables assumption, distinct from an *exact* linear relationship (which makes the model inestimable).
- **Heteroskedasticity and serial correlation attack the standard errors, not the coefficients** — coefficients can remain unbiased while $t$-stats, $p$-values, and confidence intervals become unreliable.
- **Normal Q-Q plot**: points along the 45° diagonal = normal; deviations in the tails (roughly beyond ±2 standard deviations) = fat tails / non-normality, common in financial return series.
- **The regression process is sequential**: continuous $Y$? → estimate model → residuals satisfy assumptions? → goodness of fit significant? → best available model? Only then use it for analysis/prediction — a "no" at any stage sends you back to adjust and re-estimate.
- Outliers flagged in a residuals-vs-predicted plot typically reappear in the residuals-vs-factor plots and in the Q-Q plot tails — cross-check them across diagnostics rather than treating each plot in isolation.

