---
layout: page
title: "Testing Joint Hypotheses for Coefficients"
permalink: /study/01-quantitative-methods/02-regression-model-fit/02-hypothesis-testing/
next: /cfa/study/01-quantitative-methods/02-regression-model-fit/03-forecasting/
prev: /cfa/study/01-quantitative-methods/02-regression-model-fit/01-goodness-of-fit/
---
## Summary: Testing Joint Hypotheses for Coefficients (CFA Level II — Quantitative Methods)

---

### Single-Coefficient Tests (Recap)

Testing one slope coefficient at a time in multiple regression works exactly as in simple regression — same $t$-test, same logic. For a two-sided test of $b_j$ against a hypothesized value $B_j$:

$$H_0: b_j = B_j \quad \text{vs.} \quad H_a: b_j \neq B_j$$

$$t = \frac{\hat{b}_j - B_j}{s_{\hat{b}_j}}, \quad \text{with } n-k-1 \text{ degrees of freedom}$$

One-sided variants ($H_0: b_j \leq B_j$ vs. $H_a: b_j > B_j$, or the mirror image) work the same way. Testing simple significance ($B_j = 0$) is the default output of most statistical software. To test against a non-zero $B_j$, either rebuild the $t$-statistic with that value or check whether $B_j$ falls inside the coefficient's 95% confidence interval.

**Interpreting coefficients in multiple regression:**
- **Intercept**: expected value of $Y$ when *all* independent variables equal zero (not just one, as in simple regression)
- **Slope $b_j$**: expected change in $Y$ for a one-unit change in $X_j$, holding *all other* independent variables constant

---

### Why Test Coefficients Jointly?

Financial variables are often correlated with one another, so their explanatory power overlaps. Testing each coefficient one at a time can miss this — two variables might each look individually insignificant yet jointly matter (or vice versa). Joint tests address a subset of coefficients at once.

**Nested models**: compare an **unrestricted model** (the full set of independent variables) to a **restricted model** that omits some of them (equivalent to setting those slope coefficients to zero). The restricted model is "nested" inside the unrestricted one because it uses a strict subset of its variables.

For the general unrestricted model with $k$ variables, testing whether the last $q$ variables jointly contribute nothing:

$$H_0: b_{k-q+1} = b_{k-q+2} = \cdots = b_k = 0 \quad \text{vs.} \quad H_a: \text{at least one of these } q \text{ slopes} \neq 0$$

---

### The Joint (Restricted-vs-Unrestricted) F-Test

$$\boxed{F = \frac{(SSE_R - SSE_U)/q}{SSE_U/(n-k-1)}}$$

where $SSE_R$ = sum of squares error of the restricted model, $SSE_U$ = sum of squares error of the unrestricted model, $q$ = number of restrictions (variables omitted in the restricted model), $k$ = number of independent variables in the unrestricted model. This statistic follows an $F$-distribution with $q$ and $n-k-1$ degrees of freedom, and the test is always **one-tailed, right side** (a larger $F$ means the extra variables explain more, which is only possible if they help).

> **Key insight**: Because $SSE_R \geq SSE_U$ always (removing variables can only raise or hold constant the error sum of squares), the numerator is always $\geq 0$. The test asks whether the *drop* in SSE from adding the $q$ variables is large enough, relative to the two degrees of freedom it costs, to be worth it.

---

### Worked Example: Kestrel Capital — Do Factors 4 and 5 Add Value?

Returning to Kestrel's five-factor portfolio model ($n=50$), the team compares:
- **Restricted model**: Factors 1, 2, 3 only → $SSE_R = 64.5176$, 46 degrees of freedom
- **Unrestricted model**: Factors 1–5 → $SSE_U = 56.6182$, 44 degrees of freedom, $k=5$

Testing $H_0: b_{Factor4} = b_{Factor5} = 0$ vs. $H_a$: at least one $\neq 0$, at the 1% significance level ($q=2$, $n-k-1=44$):

| Step | Detail |
|---|---|
| Test statistic | $F = \dfrac{(SSE_R - SSE_U)/q}{SSE_U/(n-k-1)}$, with 2 and 44 df |
| Critical value | $F_{0.01, 2, 44} = 5.120$ |
| Decision rule | Reject $H_0$ if calculated $F > 5.120$ |

$$F = \frac{(64.5176 - 56.6182)/2}{56.6182/44} = \frac{3.9497}{1.2868} = 3.069$$

**Conclusion**: $3.069 < 5.120$ → **fail to reject** $H_0$. Factors 4 and 5 do not jointly add significant explanatory power; the smaller three-factor model is preferred on this test.

---

### The General Linear F-Test

The joint test extends naturally to test the significance of the **entire regression** — i.e., whether the model explains anything at all. For $Y_i = b_0 + b_1X_{1i} + \cdots + b_kX_{ki} + \varepsilon_i$:

$$H_0: b_1 = b_2 = \cdots = b_k = 0 \quad \text{vs.} \quad H_a: \text{at least one } b_j \neq 0$$

This is calculated as the ratio of **mean square regression (MSR)** to **mean square error (MSE)**, with $k$ and $n-k-1$ degrees of freedom:

$$\boxed{F = \frac{MSR}{MSE} = \frac{SSR/k}{SSE/(n-k-1)}}$$

This is exactly the $F$-statistic reported in the ANOVA table of standard regression output — it is a special case of the restricted-vs-unrestricted test where the "restricted" model is just the intercept (no independent variables at all).

---

### Worked Example: Kestrel Capital — Is the Five-Factor Model Significant Overall?

Using the ANOVA results for the five-factor model ($SSR = 90.6234$, $k=5$; $SSE = 56.6182$, $n-k-1=44$), test overall significance at the 5% level:

| Step | Detail |
|---|---|
| Hypotheses | $H_0: b_1 = \cdots = b_5 = 0$ vs. $H_a$: at least one $b_j \neq 0$ |
| Test statistic | $F = MSR/MSE$, with 5 and 44 df |
| Critical value | $F_{0.05, 5, 44} = 2.427$ |
| Decision rule | Reject $H_0$ if calculated $F > 2.427$ |

$$F = \frac{90.6234/5}{56.6182/44} = \frac{18.1247}{1.2868} = 14.085$$

**Conclusion**: $14.085 > 2.427$ → **reject** $H_0$. There is sufficient evidence that at least one of the five factor slopes is different from zero — the model as a whole is statistically significant, even though the earlier joint test showed Factors 4 and 5 specifically add little.

---

### Worked Example: Bracknell Industries — Full Battery of Tests

Kestrel's equity analyst extends the Bracknell Industries peer-group ROA study to a three-variable Model 3 ($n=26$, $k=3$): $ROA_i = b_0 + b_{CAPEX}CAPEX_i + b_{ADV}ADV_i + b_{R\&D}R\&D_i + \varepsilon_i$, with $SSE = 55.3949$ and $SSR = 410.9591$ (so $SST = 466.3540$).

**1. Overall significance at 1%** ($k=3$, $n-k-1=22$):

$$F = \frac{410.9591/3}{55.3949/22} = \frac{136.9864}{2.5180} = 54.40$$

Critical $F_{0.01,3,22} = 4.817$. Since $54.40 > 4.817$, **reject** $H_0: b_{CAPEX}=b_{ADV}=b_{R\&D}=0$ — the model overall is significant.

**2. Individual coefficients at 1%** (critical $t_{0.005,22} = \pm 2.819$):

| Variable | $t$-statistic | Decision |
|---|---|---|
| CAPEX | 11.65 | Reject $H_0$ — significant |
| ADV | −0.35 | Fail to reject — not significant |
| R&D | 0.36 | Fail to reject — not significant |

**3. Joint test of ADV and R&D together at 1%**: restricted model = CAPEX only ($SSE_R = 55.9934$, $n-k-1=24$); unrestricted model = Model 3 ($SSE_U = 55.3949$, $q=2$, $n-k-1=22$):

$$F = \frac{(55.9934 - 55.3949)/2}{55.3949/22} = \frac{0.2993}{2.5180} = 0.119$$

Critical $F_{0.01,2,22} = 5.719$. Since $0.119 < 5.719$, **fail to reject** — ADV and R&D together do not add explanatory power.

**Overall conclusion**: CAPEX alone explains Bracknell's ROA variation; ADV and R&D contribute nothing, individually or jointly. This matches the adjusted $R^2$/AIC/BIC verdict from the prior file — all signals converge on the single-variable model.

---

### Question Set Answers

**Q1.** A three-factor model (MRKT, HML, VIX) is expanded first with SMB (Model 2), then with SMB and MOM (Model 3). Adjusted $R^2$ is 0.846 for Model 2 and 0.844 for Model 3. Why did adjusted $R^2$ fall?

**A.** Adding MOM to Model 2 caused adjusted $R^2$ to decline, which only happens when the newly added variable's $\lvert t\text{-statistic}\rvert < 1.0$. $R^2$ itself cannot fall when a variable is added, so the decline is entirely an adjusted-$R^2$ signal that MOM does not meaningfully improve the model.

**Q2.** Using restricted Model 1 ($SSE_R = 1087.618$, $n-k-1=92$) and unrestricted Model 3 ($SSE_U = 908.647$, $n-k-1=90$), test at 1% whether SMB and MOM jointly explain the portfolio's excess return (critical $F = 4.849$).

**A.**

$$F = \frac{(1087.618 - 908.647)/2}{908.647/90} = \frac{89.4855}{10.096} = 8.863$$

Since $8.863 > 4.849$, **reject** $H_0: b_{SMB} = b_{MOM} = 0$ — SMB and MOM jointly do contribute to explaining returns, even though a look at their individual $t$-statistics alone might not have told the same story.

**Q3.** True or false: if a joint $F$-test rejects $H_0$ for two variables together, each variable's individual $t$-test must also reject $H_0$.

**A.** False. Because financial variables are often correlated, a joint test can reject $H_0$ (the variables matter as a group) even when neither variable is individually significant on its own $t$-test — their explanatory power is shared/overlapping rather than cleanly attributable to one variable. This is exactly why joint tests exist alongside single-coefficient tests.

---
