## Summary: Macroeconomic Factor Models (CFA Level II — Portfolio Management)

---

### Core Concept — Factors as Surprises

**Key distinction**: In macroeconomic factor models, factors are **surprises** (unexpected components), NOT the actual level of the variable.

$$\boxed{\text{Surprise} = \text{Actual value} - \text{Predicted (expected) value}}$$

**Example**: Predicted monthly inflation = 0.4%; Actual inflation = 0.5%
$$\text{Surprise in inflation} = 0.5\% - 0.4\% = \mathbf{0.1\%}$$

---

### Why Use Surprises Instead of Predicted Values?

$$\boxed{\text{Predicted values are ALREADY reflected in current stock prices/expected returns}}$$

**Only NEW information (surprise) moves returns unexpectedly.**

**Return decomposition into three components:**
1. **Expected return** ($a_i$) — reflects predicted macro variable effects
2. **Unexpected return** — from factor surprises (new information)
3. **Error term** ($\varepsilon_i$) — asset-specific/idiosyncratic risk

---

### The General Macroeconomic Factor Model

$$\boxed{R_i = a_i + b_{i1}F_1 + b_{i2}F_2 + \ldots + b_{iK}F_K + \varepsilon_i}$$

| Term | Meaning |
|------|---------|
| $R_i$ | Return to asset $i$ |
| $a_i$ | **Expected return** to asset $i$ (when all surprises = 0) |
| $b_{ik}$ | **Factor sensitivity** — response of return per unit surprise in factor $k$ |
| $F_k$ | Surprise in factor $k$ |
| $\varepsilon_i$ | Error term (mean = 0) — **asset-specific risk** |

---

### Two-Factor Example — Inflation and GDP Growth

$$R_i = a_i + b_{i1}F_{INFL} + b_{i2}F_{GDP} + \varepsilon_i$$

**Interpreting the sensitivities:**
- $b_{i1}$: A **1 percentage point** inflation surprise contributes $b_{i1}$ percentage points to return
- $b_{i2}$: A **1 percentage point** GDP growth surprise contributes $b_{i2}$ percentage points to return

**Factor sensitivities** = "factor betas" or "factor loadings" — measure response per unit factor increase, holding other factors constant.

---

### Risk Premium Signs — Inflation vs. GDP Growth

| Factor | Typical Risk Premium |
|--------|------------------------|
| **GDP growth** | **Positive** |
| **Inflation** | **Negative** |

**Why inflation risk premium is negative**: 
- An asset with **positive** sensitivity to inflation surprises (performs well when inflation is unexpectedly high) provides **inflation-hedging value**
- Investors value this hedge → willing to accept **lower required return** for such assets
- → Negative sensitivity to inflation risk premium relationship

---

### Growth/Inflation Factor Matrix (Exhibit 6) — Asset Allocation Application

| | **Low Inflation** | **High Inflation** |
|--|---------------------|----------------------|
| **Low Growth** | Cash, Government bonds | Inflation-linked bonds, Commodities, Infrastructure |
| **High Growth** | Equity, Corporate debt | Real assets (real estate, timberland, farmland, energy) |

> **Application**: This 2×2 matrix helps investors match asset classes to their expected inflation/growth regime — a practical, intuitive extension of the two-factor macro model to strategic asset allocation.

---

### Estimation Process

```
Step 1: Construct time series of FACTOR SURPRISES first
Step 2: Use regression analysis to estimate asset sensitivities (b_ik) to those factors
```

> Note: This is the **OPPOSITE order** from fundamental factor models (which specify sensitivities/attributes first, then estimate factor returns).

**Practical note**: Sensitivities and intercepts are often sourced from **specialized factor model consulting firms** rather than estimated in-house.

---

### Portfolio-Level Aggregation

**Portfolio parameters = weighted average of individual asset parameters** (weighted by market value proportion).

---

### Example 5 — Two-Stock Portfolio Analysis

**Setup**: 
$$R_{MANM} = 0.09 - 1F_{INFL} + 1F_{GDP} + \varepsilon_{MANM}$$
$$R_{NXT} = 0.12 + 2F_{INFL} + 4F_{GDP} + \varepsilon_{NXT}$$

**Portfolio weights**: 1/3 MANM, 2/3 NXT

---

**Q1 — Portfolio return expression:**

$$R_P = \frac{1}{3}(0.09) + \frac{2}{3}(0.12) + \left[\frac{1}{3}(-1) + \frac{2}{3}(2)\right]F_{INFL} + \left[\frac{1}{3}(1) + \frac{2}{3}(4)\right]F_{GDP} + \frac{1}{3}\varepsilon_{MANM} + \frac{2}{3}\varepsilon_{NXT}$$

**Simplifying each component:**
- Intercept: $\frac{1}{3}(0.09) + \frac{2}{3}(0.12) = 0.03 + 0.08 = 0.11$
- Inflation sensitivity: $\frac{1}{3}(-1) + \frac{2}{3}(2) = -0.333 + 1.333 = 1.0$
- GDP sensitivity: $\frac{1}{3}(1) + \frac{2}{3}(4) = 0.333 + 2.667 = 3.0$

$$\boxed{R_P = 0.11 + 1F_{INFL} + 3F_{GDP} + \frac{1}{3}\varepsilon_{MANM} + \frac{2}{3}\varepsilon_{NXT}}$$

---

**Q2 — Expected portfolio return:**

$$\boxed{E(R_P) = 11\%} \quad \text{(the intercept — when all surprises and errors = 0)}$$

---

**Q3 — Actual return given specific surprises:**

**Given**: $F_{INFL} = 1\%$, $F_{GDP} = 0\%$, $\varepsilon_{MANM} = \varepsilon_{NXT} = 0.5\%$

$$R_P = 0.11 + 1(0.01) + 3(0) + \frac{1}{3}(0.005) + \frac{2}{3}(0.005)$$
$$= 0.11 + 0.01 + 0 + 0.00167 + 0.00333$$
$$= \mathbf{0.125 = 12.5\%}$$

---

### Key Formula Reference Card

| Formula | Expression |
|---------|-----------|
| **Surprise definition** | Actual value − Predicted value |
| **General macro factor model** | $R_i = a_i + \sum b_{ik}F_k + \varepsilon_i$ |
| **Portfolio parameter aggregation** | Weighted average of individual asset parameters |
| **Expected return** | = Intercept term $a_i$ (or $a_P$ for portfolio) |

---

### Exam Tips

- **Factors = surprises, NOT levels** — this is the defining feature of macroeconomic factor models
- **Surprise = Actual − Predicted** — always calculate this way
- **Predicted values are already priced in** — only unexpected news moves returns
- **Intercept ($a_i$) = expected return** — this holds specifically for macro models (differs from fundamental models where intercept has less direct meaning)
- **GDP growth risk premium is typically POSITIVE; inflation risk premium is typically NEGATIVE**
- **Positive inflation sensitivity = inflation hedge = investors accept lower required return**
- **Portfolio-level parameters**: simple market-value-weighted average of individual asset parameters (intercepts, sensitivities, AND error terms all combine this way)
- **Estimation order for macro models**: factors (surprises) constructed FIRST, then sensitivities estimated via regression — opposite of fundamental models
- **Growth/Inflation matrix**: useful mental model for strategic asset allocation — commodities/real assets hedge high inflation; equities/bonds favor low inflation with growth/no-growth split respectively