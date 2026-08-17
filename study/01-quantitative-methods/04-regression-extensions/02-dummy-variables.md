---
layout: page
title: "Dummy Variables in Multiple Regression"
permalink: /study/01-quantitative-methods/04-regression-extensions/02-dummy-variables/
prev: /cfa/study/01-quantitative-methods/04-regression-extensions/01-influence-analysis/
next: /cfa/study/01-quantitative-methods/04-regression-extensions/03-qualitative-dependent-variables/
---
## Summary: Dummy Variables in Multiple Regression (CFA Level II — Quantitative Methods)

---

### Defining a Dummy Variable

A **dummy variable** (indicator variable) takes the value 1 if a condition is true and 0 if it is false. Dummy variables let a regression distinguish between qualitative "groups" or "categories" using an otherwise purely quantitative modeling framework. They commonly arise from:

- An inherent property of the data (e.g., industry membership)
- A true/false characteristic (e.g., before/after a market event)
- A constructed condition (e.g., firm sales above/below some threshold)

> **The n − 1 rule**: To distinguish among $n$ categories, include $(n-1)$ dummy variables, not $n$. The omitted category becomes the **base** (or **control**) group, and every dummy coefficient is interpreted *relative to* that base. Including all $n$ dummies would create perfect multicollinearity with the intercept term (the dummies would sum to the constant used to estimate it), causing the regression to fail.

**Example — five industry sectors, four dummies (base = Food & Beverage):**

| Industry Sector | Technology | Financial Services | Health Care | Energy |
|---|---|---|---|---|
| Technology | 1 | 0 | 0 | 0 |
| Financial Services | 0 | 1 | 0 | 0 |
| Health Care | 0 | 0 | 1 | 0 |
| Energy | 0 | 0 | 0 | 1 |
| Food & Beverage (base) | 0 | 0 | 0 | 0 |

---

### Intercept Dummies

An **intercept dummy** shifts the regression line up or down (parallel to the base line) when the condition is met:

$$\boxed{Y_i = b_0 + d_0 D_i + b_1 X_i + \varepsilon_i}$$

- If $D=0$: $Y = b_0 + b_1 X + \varepsilon$ (base category)
- If $D=1$: $Y = (b_0 + d_0) + b_1 X + \varepsilon$ (category with the shifted intercept)

The vertical distance between the two parallel fitted lines is $d_0$, which can be positive or negative.

---

### Slope Dummies

A **slope dummy** interacts the dummy with the continuous variable, allowing the *slope* — not just the intercept — to differ across categories:

$$\boxed{Y_i = b_0 + b_1 X_i + d_1 D_i X_i + \varepsilon_i}$$

- If $D=0$: $Y = b_0 + b_1 X + \varepsilon$ (base category)
- If $D=1$: $Y = b_0 + (b_1 + d_1) X + \varepsilon$ (category with the shifted slope)

A regression can combine both an intercept dummy and a slope dummy for the same category:

$$\boxed{Y_i = b_0 + d_0 D_i + b_1 X_i + d_1 D_i X_i + \varepsilon_i}$$

- If $D=0$: $Y = b_0 + b_1 X + \varepsilon$
- If $D=1$: $Y = (b_0+d_0) + (b_1+d_1)X + \varepsilon$

| Dummy type | What it changes | Category-2 (D=1) equation |
|---|---|---|
| Intercept dummy | Vertical shift only | $Y=(b_0+d_0)+b_1X$ |
| Slope dummy | Steepness only | $Y=b_0+(b_1+d_1)X$ |
| Intercept + slope dummy | Both | $Y=(b_0+d_0)+(b_1+d_1)X$ |

---

### Testing Statistical Significance

Because a dummy variable is just another regressor, the standard $t$-test on its coefficient (coefficient ÷ standard error, compared to the critical $t$-value) tells you whether the category it represents differs significantly from the base category — either in intercept, in slope, or in both, depending on how the dummy enters the model.

---

### Worked Example — Meridian Capital Research: Mutual Fund Style Premiums

An analyst at **Meridian Capital Research** studies how mutual fund characteristics drive five-year average annual returns across a database of 23,025 funds spanning three styles: **blend**, **growth**, and **value**. She uses $n-1=2$ dummies — **BLEND** and **GROWTH** — with **value** as the base category, alongside continuous controls: expense ratio (EXP), cash ratio (CASH), fund age (AGE), and log fund size (SIZE).

$$Returns_i = b_0 + b_1EXP_i + b_2CASH_i + b_3AGE_i + b_4SIZE_i + d_1BLEND_i + d_2GROWTH_i + \varepsilon_i$$

**Model 1 results (intercept dummies only)**, $R^2=12.30\%$, Adj. $R^2=12.28\%$:

| Variable | Coefficient | Interpretation |
|---|---|---|
| Intercept | −2.91% | Value fund return unexplained by the model's regressors |
| EXP, CASH, SIZE | all significant, p < 0.05 | Control variables |
| BLEND | +0.66% | Blend funds return 0.66% more than value funds, controls held constant |
| GROWTH | +2.50% | Growth funds return 2.50% more than value funds, controls held constant |

**Extending with slope dummies**: the analyst suspects the *age effect* on returns differs by style, so she adds interaction terms AGE_BLEND ($=AGE$ when BLEND=1, else 0) and AGE_GROWTH ($=AGE$ when GROWTH=1, else 0):

$$Returns_i = b_0+b_1EXP_i+b_2CASH_i+b_3AGE_i+b_4SIZE_i+d_1BLEND_i+d_2GROWTH_i+d_3AGE\_BLEND_i+d_4AGE\_GROWTH_i+\varepsilon_i$$

| Variable | Coefficient | P-value | Interpretation |
|---|---|---|---|
| AGE (base = value funds) | 0.065% | < 0.05 | Value funds earn an extra 0.065% return per year of age |
| GROWTH | 2.262% | < 0.05 | Growth funds' intercept premium over value, holding the AGE slope effect aside |
| AGE_GROWTH | 0.020% | 0.01 | Growth funds earn an *additional* 0.020% per year of age, beyond the base AGE effect |

Growth funds' total age slope is therefore $0.065\% + 0.020\% = 0.085\%$ per year of age. Combining the intercept premium and the extra age-related slope, growth funds outperform value funds overall by $2.262\% + 0.085\% = 2.347\%$ per year of a fund's age since inception.

> **Key insight**: When both intercept and slope dummies are included, always compute the *combined* effect (base coefficient + interaction coefficient) to interpret the non-base category correctly — reading the interaction coefficient alone understates the total effect.

---

### Question Set Answers

**Q1.** You must classify countries into emerging (1) vs. developed (0) stock markets to study the level difference in average stock returns. Which variable should you add?

**A.** An **intercept dummy** — it allows the regression's intercept (average return, controls held constant) to shift for emerging-market countries relative to the developed-market base.

**Q2.** You now want to capture how the *relationship between GDP growth and stock returns* differs between emerging and developed markets. Which model is correct — using $GDPG$ = GDP growth and $EM$ = 1 if emerging, 0 if developed (base)?

**A.** $Stock\ return = b_0 + b_1 GDPG + d_1 EM + d_2(EM \times GDPG) + \varepsilon$. This includes GDP growth, an intercept dummy for emerging-market status, and a slope-dummy interaction term capturing how GDP-growth sensitivity differs for emerging markets relative to the developed-market base.

**Q3.** A regression of ROA on a regulation dummy (REG=1 if regulated), market share (MKTSH), and their interaction (REG_MKTSH) yields: $RET = 0.50 - 0.5REG + 0.4MKTSH - 0.2REG\_MKTSH$. Evaluate: (A) regulated firms' average return is at least 0.5% lower, holding market share constant; (B) non-regulated firms with larger market share have lower ROA than regulated firms; (C) each 1-unit increase in market share widens the regulated firm's ROA disadvantage.

**A.** A and C are correct. A: the REG coefficient is −0.5, so as MKTSH → 0, a regulated firm's return is 0.5% lower than a non-regulated firm's. C: for a 1-unit increase in MKTSH, the regulated firm's return changes by $0.4 - 0.2 = 0.2$ versus the non-regulated firm's $0.4$ — a smaller increase, so the regulated firm's ROA disadvantage widens as market share grows. B is incorrect because the MKTSH coefficient is positive: higher market share *raises* ROA for non-regulated firms, it does not lower it.
