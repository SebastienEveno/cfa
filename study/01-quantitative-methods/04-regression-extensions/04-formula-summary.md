---
layout: page
title: "Formula Summary: Extensions of Multiple Regression"
permalink: /study/01-quantitative-methods/04-regression-extensions/04-formula-summary/
prev: /cfa/study/01-quantitative-methods/04-regression-extensions/03-qualitative-dependent-variables/
---
## Formula Summary: Extensions of Multiple Regression (CFA Level II — Quantitative Methods)

---

### 1. Influence Analysis

**Leverage cutoff** (potentially influential high-leverage point):

$$\boxed{h_{ii} > 3\left(\frac{k+1}{n}\right)}$$

Sum of all $h_{ii}$ across observations $= k+1$.

**Studentized deleted residual**:

$$\boxed{t_i^* = \frac{e_i^*}{s_{e(i)}} = \frac{e_i}{\sqrt{MSE_{(i)}(1-h_{ii})}}}$$

Compared to a critical $t$-value with $(n-k-2)$ degrees of freedom; rule of thumb: $|t_i^*|>3$ flags an outlier.

| Measure | Flags | Influential if |
|---|---|---|
| Leverage $h_{ii}$ | Extreme X | $h_{ii}>3(k+1)/n$ |
| Studentized residual $t_i^*$ | Extreme Y | $\lvert t_i^*\rvert >$ critical $t_{(n-k-2)}$ |

---

### 2. Dummy Variables

**Category rule**: $(n-1)$ dummies for $n$ categories; the omitted category is the base/control group.

**Intercept dummy**:

$$\boxed{Y_i = b_0+d_0D_i+b_1X_i+\varepsilon_i}$$

**Slope dummy**:

$$\boxed{Y_i = b_0+b_1X_i+d_1D_iX_i+\varepsilon_i}$$

**Both**:

$$\boxed{Y_i=b_0+d_0D_i+b_1X_i+d_1D_iX_i+\varepsilon_i}$$

| D | Equation |
|---|---|
| 0 (base) | $Y=b_0+b_1X$ |
| 1 (intercept dummy) | $Y=(b_0+d_0)+b_1X$ |
| 1 (slope dummy) | $Y=b_0+(b_1+d_1)X$ |
| 1 (both) | $Y=(b_0+d_0)+(b_1+d_1)X$ |

Significance of a category difference: standard $t$-test on the dummy coefficient(s).

---

### 3. Logistic Regression

**Odds and log odds (logit)**:

$$\boxed{\text{Odds}=\frac{P}{1-P}} \qquad \boxed{\ln\left(\frac{P}{1-P}\right)=b_0+b_1X_1+\dots+b_kX_k}$$

**Solving for probability**:

$$\boxed{P=\frac{1}{1+\exp\left[-(b_0+b_1X_1+\dots+b_kX_k)\right]}}$$

**Likelihood ratio test**:

$$\boxed{LR=-2\times(LL_{restricted}-LL_{unrestricted})} \sim \chi^2_q$$

$q$ = number of restrictions (coefficients set to zero under $H_0$).

**Marginal effect** (probability scale): recompute $P$ at sample means, then again with one $X_j$ increased by one unit, holding others constant; the marginal effect is the difference — it is **not constant** across observations.

---

### Quick Reference — All Formulas

| Concept | Formula |
|---|---|
| Leverage cutoff | $h_{ii}>3(k+1)/n$ |
| Studentized deleted residual | $e_i^*/\sqrt{MSE_{(i)}(1-h_{ii})}$, df $=n-k-2$ |
| Intercept dummy | $Y=b_0+d_0D+b_1X$ |
| Slope dummy | $Y=b_0+b_1X+d_1DX$ |
| Odds | $P/(1-P)$ |
| Log odds (logit) | $\ln[P/(1-P)]=b_0+b_1X_1+\dots+b_kX_k$ |
| Probability from logit | $1/\{1+\exp[-(b_0+b_1X_1+\dots+b_kX_k)]\}$ |
| LR test | $-2(LL_{restricted}-LL_{unrestricted})\sim\chi^2_q$ |

---

### Exam Tips

- **High-leverage point** = extreme X; **outlier** = extreme Y (large residual); neither is automatically "influential" — influence requires the point to also be far from the fitted line.
- Leverage cutoff formula: $3(k+1)/n$ — memorize it; the sum of all leverages across the sample always equals $k+1$.
- Studentized residuals use $(n-k-2)$ degrees of freedom, not $(n-k-1)$ — don't confuse this with the residual df of a standard $F$-test.
- Never delete a flagged observation reflexively — investigate first (data error → correct/discard/winsorize; valid but extreme → check for omitted variables or assumption violations).
- **$(n-1)$ dummy variables** for $n$ categories — including all $n$ creates perfect multicollinearity with the intercept and the regression cannot be estimated.
- Intercept dummy shifts the line vertically (parallel lines); slope dummy changes the line's steepness (interaction term with X); a model can include both simultaneously.
- Every dummy coefficient is interpreted **relative to the omitted base category** — always identify the base group first.
- When both intercept and slope dummies are present for the same category, compute the **combined effect** (sum the relevant coefficients) — don't just read the slope-interaction coefficient in isolation.
- Linear probability models (OLS on a 0/1 dependent variable) can predict probabilities outside [0,1] — this is the core motivation for logistic regression.
- Logistic regression's dependent variable is the **log odds**, not the probability itself; solve $P=1/\{1+\exp[-(\dots)]\}$ to recover the probability.
- Logistic coefficients are estimated by **MLE**, not OLS — a slope coefficient is the change in **log odds** per unit change in X, holding other X's constant (not the change in probability, and not the change in odds).
- The marginal effect of $X_j$ on $P$ is **not constant** — it's largest near $P=0.5$ and shrinks toward the extremes (0 or 1); this is why marginal effects are computed at specific points (e.g., sample means), not read off the coefficient directly.
- Log-likelihood is always negative; a value **closer to zero** means a better fit. It is meaningless on its own — only useful to compare models with the same dependent variable.
- Pseudo-$R^2$ can only be used to compare **different specifications of the same model on the same data** — never to compare across different datasets/samples.
- LR test degrees of freedom = number of restricted (dropped) coefficients under $H_0$; reject $H_0$ if the calculated LR exceeds the critical $\chi^2_q$ value.
- Logistic regression underpins binary classification in machine learning (e.g., bankruptcy prediction, NLP-based sentiment classification of financial text) — a recurring application link tested at Level II.
