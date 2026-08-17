---
layout: page
title: "Multiple Regression: Uses and the Regression Equation"
permalink: /study/01-quantitative-methods/01-multiple-regression-basics/01-multiple-regression-basics/
next: /cfa/study/01-quantitative-methods/01-multiple-regression-basics/02-regression-assumptions/
---
## Summary: Multiple Regression — Uses and the Regression Equation (CFA Level II — Quantitative Methods)

---

### Why Multiple Regression?

**Simple regression** explains the variation of a dependent variable, $Y$, using the variation of a *single* independent variable, $X$. **Multiple regression** explains $Y$ using the variation in a *set* of independent variables, $X_1, X_2, \ldots, X_k$.

- Financial and economic relationships are rarely driven by one factor — multiple regression lets the analyst model realistic, multi-factor relationships.
- **Used correctly**, it can improve predictions, portfolio construction, and understanding of return drivers.
- **Used incorrectly**, it can produce spurious relationships, poor predictions, and a false sense of understanding.

Before estimating a model, the analyst must decide:

1. What is the **dependent variable** of interest?
2. What **independent variables** are important?
3. What **form** should the model take?
4. What is the model's **goal** — prediction, or understanding the relationship?

> **Key insight**: Software (Excel, Python's `statsmodels`/`scipy`, R's `lm`, SAS, STATA) does the estimation. The analyst's real job is specifying the model correctly and interpreting the output.

---

### Uses of Multiple Linear Regression

Typical investment applications include:

- A portfolio manager estimating a **Fama–French five-factor model** (market, size, value, profitability, investment) to understand what drives a stock's excess returns.
- A financial adviser testing whether **leverage, profitability, revenue growth, and market-share changes** predict financial distress.
- An analyst examining how dimensions of **country risk** (political stability, economic conditions, ESG factors) affect equity returns in that market.

Multiple regression is used to **identify relationships**, **test existing theories**, or **forecast**.

**The regression process** (the analyst's decision path):

1. Is the dependent variable **continuous**? If **no** (e.g., a 0/1 takeover-target indicator), use **logistic regression** instead.
2. If **yes**, **estimate the regression model**.
3. **Analyze the residuals** — are the assumptions of regression satisfied?
   - **No** → adjust the model and re-estimate.
   - **Yes** → continue.
4. **Examine goodness of fit.** Is the overall fit statistically significant?
   - **No** → adjust the model and re-estimate.
   - **Yes** → continue.
5. Is this the **best** of the possible models?
   - **No** → adjust the model and re-estimate.
   - **Yes** → **use the model** for analysis and prediction.

---

### The Multiple Regression Equation

$$\boxed{Y_i = b_0 + b_1X_{1i} + b_2X_{2i} + b_3X_{3i} + \cdots + b_kX_{ki} + \varepsilon_i, \quad i = 1, 2, \ldots, n}$$

- $Y$ is the **dependent variable**; $X_1$ through $X_k$ are the **independent variables**.
- The model is estimated using $n$ observations, and $n$ must exceed $k$ (more observations than independent variables).
- The terms involving the $X$s form the **deterministic** part of the model; the error term $\varepsilon_i$ is the **stochastic (random)** part.
- $b_0$, the **intercept**, is the expected value of $Y$ when all independent variables equal zero.
- $b_1, \ldots, b_k$ are the **slope coefficients**, also called **partial regression coefficients** (or partial slope coefficients).

The **estimated** regression equation (coefficients denoted with a hat) is:

$$\hat{Y}_i = \hat{b}_0 + \hat{b}_1X_{1i} + \hat{b}_2X_{2i} + \cdots + \hat{b}_kX_{ki}$$

**Interpreting a partial slope coefficient**: $b_j$ measures the change in $Y$ for a one-unit change in $X_j$, **holding all other independent variables constant**. This "holding constant" caveat is what distinguishes a partial regression coefficient from a simple regression slope — it isolates the marginal effect of $X_j$ net of the other explanatory variables in the model.

> **Key insight**: A variable's simple (bivariate) correlation with $Y$ can look weak or absent even when its partial regression coefficient is highly significant — the regression coefficient captures the relationship *after controlling for the other independent variables*, which a simple scatterplot cannot show. (See LM1.02 for a worked illustration.)

---

### Worked Example: Kestrel Capital's Bond Index Duration Model

Kestrel Capital's fixed-income team regresses the monthly excess return of a bond index ($RET$) against the change in monthly government bond yields ($BY$) and the change in investment-grade credit spreads ($CS$), using 60 monthly observations:

$$\boxed{RET = 0.0023 - 5.0585\,BY - 2.1901\,CS}$$

**Interpretation:**

1. **Intercept**: If $BY$ and $CS$ are both zero, the bond index is expected to return 0.0023% per month (≈ 0.028% per year).
2. **$BY$ coefficient (−5.0585)**: Holding $CS$ constant, a one-unit increase in government bond yields is associated with a −5.0585 change in the bond index return. Equivalently, the bond index has an **empirical (regression-based) duration** of 5.0585.
3. **$CS$ coefficient (−2.1901)**: Holding $BY$ constant, a one-unit increase in credit spreads is associated with a −2.1901 change in the bond index return.
4. **Prediction**: For a month in which $CS$ changes by 0.001 and $BY$ changes by 0.005, the expected excess return is:

$$RET = 0.0023 - 5.0585(0.005) - 2.1901(0.001) = -0.0252, \text{ or } -2.52\%$$

---

### Worked Example: Kestrel Capital's Three-Factor Attribution Model

Kestrel Capital also runs a Fama–French three-factor regression of a client portfolio's monthly excess return ($RETRF$, stated in whole percent) against:

- $MKTRF$ — the market excess return
- $SMB$ — small-minus-big (size factor)
- $HML$ — high-minus-low (value factor)

$$\boxed{RETRF = 1.5324 + 0.5892\,MKTRF - 0.8719\,SMB - 0.0560\,HML}$$

**Interpretation:**

1. **Intercept**: If $MKTRF$, $SMB$, and $HML$ are all zero, the expected portfolio return is 1.5324%.
2. **Slope coefficients** (each holding the other two factors constant):
   - $MKTRF$: a 1% increase in the market return is associated with a 0.5892% increase in portfolio return.
   - $SMB$: a 1% increase in the size factor is associated with a 0.8719% *decrease* in portfolio return (a large-cap tilt).
   - $HML$: a 1% increase in the value factor is associated with a 0.0560% *decrease* in portfolio return (a growth tilt).
3. **Prediction** given $MKTRF = 1$, $SMB = 4$, $HML = -2$:

$$RETRF = 1.5324 + 0.5892(1) - 0.8719(4) - 0.0560(-2) = -1.254\%$$

---

### Question Set Answers

**Q1 — Which type of model should you use to explain portfolio excess returns using a market factor, a value factor, and a volatility factor?**
The dependent variable (returns) is continuous and there is more than one explanatory variable.
→ **Answer: Multiple linear regression** (not logistic regression, which is reserved for a discrete/binary dependent variable).

**Q2 — A regression of monthly portfolio excess returns yields $\hat{Y} = -0.999 + 1.817\,MRKT + 0.489\,HML + 0.037\,VIX$. Which statement about the $VIX$ coefficient is correct?**
→ **Answer**: Holding the other independent variables constant, a 1.0% increase in $VIX$ is associated with a 0.037% increase in the portfolio's excess return.

**Q3 — The dependent variable takes on a value of 1 if the company is a merger target and 0 otherwise. What should the analyst do?**
→ **Answer**: Use **logistic regression** — the dependent variable is discrete (an indicator variable), not continuous.

**Q4 — An analyst estimates a model with five independent variables, and none of them is a significant explanatory variable. What should the analyst do?**
→ **Answer**: **Adjust the model and re-estimate** — the model has failed the "is the overall fit significant / is this the best model" stage of the regression process.

