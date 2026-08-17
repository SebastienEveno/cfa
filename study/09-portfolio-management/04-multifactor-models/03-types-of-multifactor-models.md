---
layout: page
title: "Types of Multifactor Models"
permalink: /study/09-portfolio-management/04-multifactor-models/03-types-of-multifactor-models/
prev: /cfa/study/09-portfolio-management/04-multifactor-models/02-APT-and-multifactor-models/
next: /cfa/study/09-portfolio-management/04-multifactor-models/04-macroeconomic-factor-models/
---
## Summary: Types of Multifactor Models (CFA Level II — Portfolio Management)

---

### Three Main Categories of Multifactor Models

| Type | Factors Are... | Interpretation |
|------|-----------------|-----------------|
| **Macroeconomic factor models** | Surprises in macroeconomic variables | Easy to interpret |
| **Fundamental factor models** | Attributes of stocks/companies | Easy to interpret |
| **Statistical factor models** | Extracted portfolios that explain historical return covariances/variances | Difficult to interpret economically |

---

## Macroeconomic Factor Models

**Factors**: **Surprises** in macro variables (interest rates, inflation, business cycle risk, credit spreads).

**Mechanism**: Affect either:
- Expected future cash flows of companies, OR
- The discount rate used to value those cash flows

---

## Fundamental Factor Models

**Factors**: Observable **attributes** of stocks/companies (book-to-price, market cap, P/E, leverage).

### Key Structural Differences from Macroeconomic Models

$$R_i = a_i + b_{i1}F_1 + b_{i2}F_2 + \ldots + b_{iK}F_K + \varepsilon_i$$

**Same equation form, but different interpretation:**

| Element | Macroeconomic Model | Fundamental Model |
|---------|----------------------|---------------------|
| **Factors** | Return surprises (mean = 0) | **Returns** (not necessarily mean = 0) |
| **Intercept ($a_i$)** | = Expected return | NOT expected return (with standardized betas, minimal meaning) |
| **Estimation order** | Factors first → estimate sensitivities via regression | **Sensitivities (attributes) first → estimate factor returns via regression** |

---

### Standardized Beta Calculation (Fundamental Models)

$$\boxed{\text{Standardized beta} = \frac{\text{Attribute value for asset} - \text{Average attribute value across all stocks}}{\text{Standard deviation of attribute across all stocks}}}$$

**Interpretation:**
- Beta = 0: Stock has **average** attribute value
- Beta = +1: Stock is **one standard deviation above** average
- Beta = −1: Stock is **one standard deviation below** average

**Numerical example**: Dividend yield factor
- Stock's dividend yield = 3.5%; Average across universe = 2.5%; Std dev = 2%
$$\text{Sensitivity} = \frac{3.5\% - 2.5\%}{2\%} = \mathbf{0.50} \text{ (half a standard deviation above average)}$$

**Exception**: **Binary/dummy variables** (e.g., industry membership) — value = 1 if belongs, 0 if not (no standardization applied).

---

### Fundamental Model Applications

- **Portfolio performance attribution**: 
  - **Return attribution**: identifying sources of excess return vs. benchmark
  - **Risk attribution**: identifying sources of volatility (absolute) or tracking risk (relative)
- **Risk analysis**

---

### Three Broad Groups of Equity Fundamental Factors

| Group | Description | Examples |
|-------|-------------|---------|
| **Company fundamental factors** | Internal performance metrics | Earnings growth, earnings variability, earnings momentum, financial leverage |
| **Company share-related factors** | Valuation/trading characteristics; incorporate investor expectations | Earnings yield, dividend yield, book-to-market, market cap, price momentum, volatility, trading activity |
| **Macroeconomic factors** | Systematic risk exposures + sector/industry | Sector/industry membership, CAPM beta, yield curve sensitivity |

**Global factor model classification**: Country, industry, and **style factors** (country/industry = dummy variables; style = earnings/risk/valuation-based).

---

## Statistical Factor Models

**Two types:**

| Type | Factors Explain... |
|------|----------------------|
| **Factor analysis models** | Historical **return covariances** |
| **Principal components models** | Historical **return variances** |

**Advantage**: Minimal assumptions required.

**Disadvantage**: **Difficult economic interpretation** — a statistical factor resembling market-index weights *might* be interpretable as "the market factor," but generally these factors lack clear economic meaning.

**Industry preference**: Fundamental and macroeconomic models are **more commonly used in practice** — easier interpretation, less data-mining concern.

---

## Fixed-Income Multifactor Models

### Macroeconomic Fixed-Income Model

**Example — Two-factor bond model:**

$$\boxed{R_i = a_i + b_{i1}F_{INFL} + b_{i2}F_{GDP} + \varepsilon_i}$$

Where:
- $F_{INFL}$ = inflation rate surprise
- $F_{GDP}$ = GDP growth surprise (assumed uncorrelated with inflation)

> Macroeconomic surprises **mechanically affect** bond pricing (rates, inflation → discount rates and expected cash flows).

---

### Fundamental Fixed-Income Model — Dopfel (2004) Framework

**Key fixed-income-specific factor categories:**

| Category | Range |
|----------|-------|
| **Duration** | Cash → long-dated bonds |
| **Credit** | Government → high-yield |
| **Currency** | Home currency → foreign developed/emerging market |
| **Geography** | Specific developed/emerging markets |

**Simplified Bloomberg Barclays US Aggregate structure (Exhibit 4):**

```
Government: Short / Intermediate / Long
Investment-Grade Credit
MBS/Securitized
High Yield
```

**Model equation:**
$$\boxed{R_i = a_i + b_{i1}F_{Gvt\_Sh} + b_{i2}F_{Gvt\_Int} + b_{i3}F_{Gvt\_Lg} + b_{i4}F_{Invest} + b_{i5}F_{HiYld} + b_{i6}F_{MBS} + \varepsilon_i}$$

**Weights ($b_{ik}$)**: Determined via **constrained regression** — weights must sum to 100%.

**Dual nature**: Categories are BOTH macroeconomic (spread relates to growth factor/credit risk) AND fundamental (duration as a security attribute).

**Applications**: Performance/risk attribution, portfolio construction, manager evaluation (spread, duration, yield, quality) — extendable to **ESG scoring** integrated into the same sector framework.

---

### Example 3 — Portfolio-Level Expected Return Calculation

**Setup**: Portfolio weights — 35% intermediate govt, 40% IG credit, 5% securitized, 20% high yield

**Component expected returns:**
- Intermediate government: 1.50%
- Investment-grade credit: 4.25%
- MBS/Securitized: 1.75%
- High yield: 5.75%

**Portfolio expected return** (weighted average):
$$E(R_p) = 0.35(1.50\%) + 0.40(4.25\%) + 0.05(1.75\%) + 0.20(5.75\%)$$
$$= 0.525\% + 1.700\% + 0.0875\% + 1.150\% = \mathbf{3.4625\%}$$

---

### Example 4 — Diagnosing Style Drift Using Sector Attribution

**Setup**: "Intermediate duration (5-7yr) investment-grade" strategy shows:

| Sector | Weight |
|--------|--------|
| Gov't (Short) | 2% |
| Gov't (Intermediate) | 4% |
| Gov't (Long) | 14% |
| Investment-Grade Credit | 56% |
| MBS/Securitized | 6% |
| **High Yield** | **18%** |

**Is this consistent with the stated approach? NO — two red flags:**

1. **18% high-yield exposure** — a true investment-grade portfolio should have **NO high-yield** exposure (below investment grade)
2. **14% Gov't (Long) weighting** — heavy long-duration government exposure implies the portfolio's actual duration is **LONGER than "intermediate"** — inconsistent with stated mandate

> **Key exam skill**: Use factor exposure breakdowns to detect **style drift** — where a fund's actual holdings don't match its stated investment mandate.

---

## Risk/Style Multifactor Models (Cross-Asset)

**Definition**: Factors that apply **thematically across asset classes** — not limited to equity or fixed income specifically.

**Common cross-asset style factors:**

| Factor | Typical Definition |
|--------|----------------------|
| **Value** | Real (inflation-adjusted) yield |
| **Momentum** | Previous 12-month excess return |
| **Carry** | Term spread |
| **Volatility** | Return variability measure |

---

### Cross-Asset Factor Alignment (Exhibit 5, Podkaminer 2017)

| Factor | Equity | Credit | Treasury | Commodities | Currency |
|--------|--------|--------|----------|--------------|----------|
| Economic Growth | ✓✓ | ✓ | — | — | — |
| Rates | — | ✓ | ✓✓ | — | — |
| Inflation | — | — | ✓ | ✓✓ | ✓ |
| Value | ✓✓ | ✓ | — | ✓ | ✓ |
| Size | ✓✓ | — | — | — | — |
| Momentum | ✓✓ | ✓✓ | ✓✓ | ✓✓ | ✓✓ |
| Carry | ✓ | ✓✓ | ✓✓ | ✓✓ | ✓✓ |
| Low-Volume | ✓✓ | ✓ | — | — | — |

> **Key insight**: **Momentum** shows strong alignment across ALL asset classes — a nearly universal factor. **Size** is essentially equity-specific.

**Statistical models' advantage for cross-asset use**: Require **no asset-class-specific tuning** (minimal assumptions) — easier to apply universally than macro/fundamental models, which need repurposing for each asset class.

---

### Comprehensive Comparison Table

| Feature | Macroeconomic | Fundamental | Statistical |
|---------|-----------------|--------------|--------------|
| **Factor source** | Macro surprises | Security attributes | Extracted from historical returns |
| **Estimation order** | Factors → sensitivities | Sensitivities → factors | Neither (data-driven extraction) |
| **Interpretability** | High | High | **Low** |
| **Assumptions required** | Moderate | Moderate | **Minimal** |
| **Cross-asset ease** | Requires adjustment | Requires adjustment | **Easiest** |
| **Industry preference** | High | High | Lower (but has proponents) |

---

### Exam Tips

- **Macro factor models**: factors are SURPRISES (mean = 0); fundamental factor models: factors are RETURNS (not necessarily mean = 0)
- **Fundamental model estimation order is REVERSED** from macro models: specify sensitivities (attributes) FIRST, then regress to find factor returns
- **Standardized beta formula**: (Attribute − Average)/Std Dev — memorize this calculation
- **Industry/binary factors**: NOT standardized — simple 1/0 dummy variables
- **Three equity fundamental factor groups**: company fundamental, company share-related, macroeconomic
- **Statistical models**: hardest to interpret economically, but require fewest assumptions and work well across asset classes
- **Fixed-income factor categories**: duration, credit, currency, geography — analogous but distinct from equity factors
- **Portfolio expected return**: simple weighted average of component/sector expected returns using portfolio weights
- **Style drift detection**: compare stated mandate (e.g., "investment-grade intermediate") against actual sector/duration exposures to spot inconsistencies
- **Momentum is the most universal cross-asset factor** (strong alignment across equity, credit, treasury, commodities, currency)
