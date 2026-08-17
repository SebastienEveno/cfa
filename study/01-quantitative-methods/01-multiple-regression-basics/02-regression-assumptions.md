---
layout: page
title: "Regression Assumptions and Diagnostic Plots"
permalink: /study/01-quantitative-methods/01-multiple-regression-basics/02-regression-assumptions/
next: /cfa/study/01-quantitative-methods/01-multiple-regression-basics/03-formula-summary/
prev: /cfa/study/01-quantitative-methods/01-multiple-regression-basics/01-multiple-regression-basics/
---
## Summary: Regression Assumptions and Diagnostic Plots (CFA Level II — Quantitative Methods)

---

### The Five Assumptions Underlying Multiple Linear Regression

Before drawing valid statistical inference from an OLS-estimated multiple regression, five assumptions must hold. Simple regression has four; multiple regression modifies the last one to reflect having more than one independent variable.

| # | Assumption | Statement | If violated |
|---|-----------|-----------|-------------|
| 1 | **Linearity** | The relationship between $Y$ and the $X$s is linear. | Model is misspecified; predictions and coefficient interpretation are unreliable. |
| 2 | **Homoskedasticity** | The variance of the regression residuals is the same for all observations. | **Heteroskedasticity**: coefficients stay unbiased, but standard errors are wrong → invalid $t$-stats, $p$-values, and confidence intervals. |
| 3 | **Independence of errors** | Observations (and hence residuals) are uncorrelated across observations. | Serial correlation: standard errors are understated → inflated $t$-stats and spurious statistical significance. |
| 4 | **Normality** | The regression residuals are normally distributed. | Hypothesis tests and confidence intervals based on the $t$- and $F$-distributions become unreliable (less of a concern in very large samples). |
| 5 | **Independence of independent variables** | (5a) The $X$s are not random; (5b) no exact linear relationship exists between two or more $X$s (or combinations of them). | **Exact** linear relationship → model *cannot* be estimated. **Approximate** linear relationship (multicollinearity) → model can be estimated, but coefficients are unstable and hard to interpret. |

> **Key insight**: Approximate (rather than exact) linear relationships among independent variables are commonly flagged by **significant pairwise correlations** between those variables. The model can still be estimated, but interpretation of the affected coefficients becomes problematic.

---

### Diagnosing Violations: The Diagnostic-Plot Toolkit

Regression software produces diagnostic plots that help detect potential assumption violations.

| Plot | What it detects |
|------|------------------|
| **Scatterplot matrix** (pairs plot) — every variable plotted against every other, with a fitted line and histograms on the diagonal | Non-linearity between $Y$ and each $X$ (linearity); approximate linear relationships between independent variables (independence of independent variables); outliers |
| **Residuals vs. predicted (fitted) value of $Y$** | Non-constant variance / clustering (homoskedasticity); non-random patterns (independence of errors); outliers |
| **Residuals vs. each independent variable** | Whether an omitted non-linear relationship with a specific $X$ remains in the residuals (model misspecification); outliers |
| **Normal Q-Q plot** of standardized residuals vs. a theoretical normal distribution | Non-normality of residuals, especially fat tails, in the extremes (beyond roughly ±2 standard deviations) |

A **normal Q-Q plot** compares a variable's empirical distribution to a theoretical normal distribution. If residuals are normally distributed, the plotted points align along the 45° diagonal. Because 5% of a normal distribution lies below −1.65 standard deviations, the 5th-percentile residual should plot near −1.65 on the theoretical axis; large deviations from the diagonal — especially in the tails — signal non-normality (commonly "fat tails" in financial data).

---

### Worked Example: Kestrel Capital's Three-Factor Diagnostic Review (Solandra Robotics)

Kestrel Capital's quant team regresses 10 years (120 monthly observations) of **Solandra Robotics'** excess stock returns on the Fama–French three factors:

$$\boxed{RETRF_t = b_0 + b_1MKTRF_t + b_2SMB_t + b_3HML_t + \varepsilon_t}$$

**Regression output:**

| Statistic | Value |
|---|---|
| Multiple R | 0.6238 |
| R-squared | 0.3891 |
| Adjusted R-squared | 0.3733 |
| Standard error | 0.0628 |
| Observations | 120 |

| Source | df | SS | MS | F | Significance F |
|---|---|---|---|---|---|
| Regression | 3 | 0.2914 | 0.0971 | 24.6278 | 0.0000 |
| Residual | 116 | 0.4575 | 0.0039 | | |
| Total | 119 | 0.7489 | | | |

| Variable | Coefficient | Std. error | $t$-Stat | $p$-value | Lower 95% | Upper 95% |
|---|---|---|---|---|---|---|
| Intercept | 0.0052 | 0.0062 | 0.84 | 0.4007 | −0.0070 | 0.0173 |
| MKTRF | 1.2889 | 0.1538 | 8.38 | 0.0000 | 0.9842 | 1.5935 |
| SMB | −0.5841 | 0.2665 | −2.19 | 0.0304 | −1.1118 | −0.0564 |
| HML | −0.6810 | 0.2231 | −3.05 | 0.0028 | −1.1229 | −0.2391 |

The overall regression is highly significant ($F = 24.63$, $p < 0.0001$), and MKTRF, SMB, and HML are all individually significant at the 5% level (the intercept is not significantly different from zero). Solandra Robotics has an aggressive market beta (1.29), a negative loading on the size factor (behaves more like a large-cap name), and a negative loading on the value factor (a growth tilt).

**Diagnostics:**

- **Scatterplot matrix**: shows a positive relationship between Solandra's returns and MKTRF, a negative relationship with HML, and *no apparent* simple relationship with SMB — yet SMB is statistically significant in the regression. This is expected: the scatterplot shows only the bivariate relationship, while the regression coefficient captures the *partial* relationship after controlling for MKTRF and HML. SMB and HML themselves show little correlation with each other — a desirable, low-multicollinearity property among the independent variables.
- **Residuals vs. predicted value**: no directional pattern, centered near zero — consistent with homoskedastic, independent errors. Three potential outliers stand out (Months 7, 25, and 95), worth investigating for company- or period-specific shocks not captured by the model.
- **Residuals vs. each factor** (MKTRF, SMB, HML): no directional relationship in any panel — no evidence of assumption violations; the same three outlier months reappear.
- **Normal Q-Q plot**: residuals track the diagonal closely within about ±2 standard deviations, but Months 25 and 95 fall notably below the theoretical line and Month 7 sits somewhat above it beyond that range — a mild fat-tailed pattern, common in financial return data, but not enough to reject approximate normality of the residuals overall.

---

### Question Set Answers

**Q1 — You examine the correlation between two independent variables, GOLD and TECH, and find a significant pairwise correlation. What assumption may be violated?**
→ **Answer**: This suggests an **approximate linear relationship** between GOLD and TECH — a potential violation of the **independence of independent variables** assumption (multicollinearity), which warrants further investigation.

**Q2 — A scatterplot of portfolio returns (RET) against a volatility factor (VIX) shows a curved, quadratic-looking pattern rather than a straight line. Which assumption is likely violated?**
→ **Answer**: **Linearity** — the true relationship between the dependent and independent variable appears non-linear.

**Q3 — Which diagnostic plot is best suited to assess homoskedasticity?**
→ **Answer**: A scatterplot of the **regression residuals vs. the predicted (fitted) values**. Clusters of high or low residuals across the range of fitted values indicate the variance of the residuals is not constant.

**Q4 — What is the purpose of a normal Q-Q plot of the regression residuals?**
→ **Answer**: To assess whether the residuals are **normally distributed**, by comparing the empirical distribution of standardized residuals to a theoretical standard normal distribution.

