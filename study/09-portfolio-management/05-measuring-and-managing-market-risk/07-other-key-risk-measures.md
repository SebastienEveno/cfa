---
layout: page
title: "Other Key Risk Measures — Sensitivity Analysis"
permalink: /study/09-portfolio-management/05-measuring-and-managing-market-risk/07-other-key-risk-measures/
prev: /cfa/study/09-portfolio-management/05-measuring-and-managing-market-risk/06-advantages-limitations-extensions-of-var/
next: /cfa/study/09-portfolio-management/05-measuring-and-managing-market-risk/08-scenario-risk-measures/
---
## Summary: Other Key Risk Measures — Sensitivity Analysis (CFA Level II — Portfolio Management)

---

### Why Multiple Risk Measures Are Needed

$$\boxed{\text{No single risk measure gives a complete picture} \implies \text{Good risk managers use a COMPREHENSIVE toolkit}}$$

**Two additional risk measure classes beyond VaR:**
1. **Sensitivity risk measures** — how gains/losses change with a single risk factor movement
2. **Scenario risk measures** — performance under hypothetical/historical stress situations (covered separately)

---

## Equity Exposure Measures — Beta

$$\boxed{E(R_i) = R_F + \beta_i[E(R_M) - R_F]}$$

**Beta formula:**
$$\boxed{\beta_i = \frac{Cov(R_i, R_M)}{Var(R_M)}}$$

**Interpretation:**
| Beta Value | Meaning |
|------------|---------|
| **1.0** | Market average volatility (broad market beta) |
| **>1.0** | More volatile than market |
| **<1.0** | Less volatile than market |

**What beta measures**: Sensitivity of a security's expected return to the **equity risk premium** [$E(R_M) - R_F$].

> **Extensions**: Multifactor models (covered earlier in Module 4) provide more nuanced equity risk exposure measures beyond single-factor CAPM beta.

---

## Fixed-Income Exposure Measures — Duration and Convexity

### Duration — First-Order Sensitivity

**Definition**: Weighted-average time to maturity, treating the bond as **partially maturing** at each coupon date.

$$\boxed{\frac{\Delta B}{B} \approx -D \times \Delta y}$$

**Key assumptions:**
- All rates affecting the bond change by the **same percentage** (parallel shift, single yield $y$)
- Only valid for **small** yield changes ($\Delta y$ small)
- Only valid at a **single instant in time**

### Convexity — Second-Order Sensitivity

**Purpose**: Captures the **sensitivity of duration itself** to interest rate changes — needed for **larger** yield changes and **longer** holding periods.

$$\boxed{\frac{\Delta B}{B} \approx -D \times \Delta y + \frac{1}{2} \times C \times (\Delta y)^2}$$

**Why it matters**: Duration alone becomes **less accurate** for larger rate moves or longer time horizons — convexity is the **correction term** for this curvature effect.

---

## Options Risk Measures — The Greeks

### Why Options Need Special Treatment

**Key distinction**: Forwards, futures, and swaps have **LINEAR** payoffs relative to underlying → can use same exposure measures as the underlying.

**Options have NON-LINEAR payoffs** → require their own specialized family of exposure measures.

**Two sources of option risk:**
1. **High leverage** embedded in options
2. **Volatility sensitivity** of the underlying

---

### Delta — First-Order Price Sensitivity

$$\boxed{\Delta_c = \frac{\Delta c}{\Delta S}}$$

| Instrument | Delta Range |
|------------|-------------|
| **Call option** | 0 to +1 |
| **Put option** | 0 to −1 |

**Interpretation at extremes:**
- **Call delta = 0**: Very deep OUT-of-the-money (option value doesn't respond to underlying)
- **Call delta = 1**: Very deep IN-the-money (option moves 1-for-1 with underlying)
- **Put delta = −1**: Very deep IN-the-money (moves 1-for-1 opposite direction)

**As expiration approaches:**
- In-the-money call delta → **1**; In-the-money put delta → **−1**
- Out-of-the-money call/put delta → **0**

**Price approximation formula:**
$$\boxed{c + \Delta c \approx c + \Delta_c \times \Delta S}$$

**Delta ≈ Duration analogy**: Both are **first-order** effects — direct linear approximations of price sensitivity to their respective underlying variable (price for options, yield for bonds).

---

### Gamma — Second-Order Sensitivity (Analogous to Convexity)

**Definition**: Measures how sensitive **delta itself** is to changes in the underlying.

$$\boxed{\Gamma_c = \frac{\Delta \Delta_c}{\Delta S}}$$

**Numerical example**: Call with delta = 0.6, gamma = 0.02; underlying rises by 0.10:
$$\text{New delta} = 0.6 + (0.10 \times 0.02) = \mathbf{0.602}$$

**When gamma is LARGEST:**
- Options **near-the-money**
- Options **close to expiration** (unless deep in/out of the money)

**Why**: Near expiration + at-the-money = **maximum uncertainty** about whether the option finishes in or out of the money → highest sensitivity of delta to small underlying price moves.

**Updated price formula (with gamma):**
$$\boxed{c + \Delta c \approx c + \Delta_c\Delta S + \frac{1}{2}\Gamma_c(\Delta S)^2}$$

> **Direct parallel to bond pricing**: This mirrors the duration + convexity formula structure exactly.

---

### Vega — First-Order Volatility Sensitivity

$$\boxed{\text{Vega} = \frac{\Delta c}{\Delta \sigma}}$$

**Key insight**: Vega captures the effect of **volatility CHANGES** on option value — a **separate risk dimension** from price movement.

> Options are **highly sensitive to volatility** — value can change materially even when the underlying price is unchanged.

---

### Composite Sensitivity Formula (Delta + Gamma + Vega)

$$\boxed{c + \Delta c \approx c + \Delta_c\Delta S + \frac{1}{2}\Gamma_c(\Delta S)^2 + \text{Vega} \times \Delta\sigma}$$

> This captures the **combined** expected response of an option to changes in **both** the underlying's price AND its volatility — the two primary unpredictable drivers of option value.

---

### Portfolio-Level Application

**Example**: Long S&P 500 ETF + Short call option on that ETF

| Component | Delta | Gamma | Vega |
|-----------|-------|-------|------|
| **ETF** | **1** (moves 1-for-1) | **0** | **0** |
| **Short call** | Between 0 and −1 (short position) | Contributes | Contributes |

**Aggregation rule:**
$$\boxed{\text{Portfolio Greeks} = \sum(\text{Position size} \times \text{Individual Greek})}$$

> Risk managers need the **portfolio-level aggregated** deltas, gammas, vegas, durations, convexities, and betas to fully understand overall sensitivity.

---

## Comparison Table — Sensitivity Measure Families

| Asset Type | First-Order Measure | Second-Order Measure | Additional Measure |
|------------|-------------------------|----------------------------|------------------------|
| **Equity** | Beta | — | — |
| **Fixed Income** | **Duration** | **Convexity** | — |
| **Options** | **Delta** | **Gamma** | **Vega** (volatility) |

**Structural parallel**: Duration↔Delta (first-order); Convexity↔Gamma (second-order, curvature/sensitivity-of-sensitivity effect)

---

### Example 7 — Knowledge Check Answers

**Q1 — Best characterization of duration AND convexity together:**
→ **B. "First- and second-order effects of yield changes on bond prices"**
- A and C only describe duration correctly, not convexity
- **B correctly captures BOTH**: duration = 1st order, convexity = 2nd order

**Q2 — Which statement about call delta is INCORRECT:**
→ **B. "It PRECISELY captures the change in call value when underlying changes"** — **WRONG**
- Delta only provides an **APPROXIMATION**, not a precise/exact calculation
- A and C correctly describe delta's range and behavior at extremes

**Q3 — Correct statement about gamma and vega:**
→ **A. "Gamma is a second-order effect, and vega is a first-order effect"**
- B wrong: Gamma does NOT capture volatility effects — that's vega's role; vega measures the LEVEL relationship with volatility, not a "change in volatility" second-order effect
- C wrong: Gamma is NOT related to "sensitivity of volatility to underlying price" — it's the sensitivity of DELTA to the underlying price

---

### Key Formula Reference Card

| Measure | Formula | Order |
|---------|---------|-------|
| **Beta** | $Cov(R_i,R_M)/Var(R_M)$ | — |
| **Duration effect** | $\Delta B/B \approx -D \times \Delta y$ | First |
| **Convexity effect** | $+\frac{1}{2}C(\Delta y)^2$ (added term) | Second |
| **Delta** | $\Delta c/\Delta S$ | First |
| **Gamma** | $\Delta(\Delta_c)/\Delta S$ | Second |
| **Vega** | $\Delta c/\Delta \sigma$ | First (volatility dimension) |

---

### Exam Tips

- **Beta = 1.0** for the broad market; measures sensitivity to the **equity risk premium**, not just general "risk"
- **Duration = first-order; Convexity = second-order** — exactly parallel structure to **Delta (first-order) and Gamma (second-order)** for options
- **Delta is an APPROXIMATION, not exact** — a very commonly tested nuance (Example 7 Q2)
- **Delta range**: Calls 0 to +1; Puts 0 to −1 — know both ranges
- **Gamma is LARGEST**: near-the-money AND near expiration (maximum uncertainty about final moneyness)
- **Vega is a FIRST-order effect** (not second) — it's a separate risk DIMENSION (volatility), not a refinement of delta
- **Forwards/futures/swaps use SAME exposure measures as underlying** (linear payoffs); **options need their OWN measures** (non-linear payoffs)
- **Portfolio Greeks = weighted sum of individual position Greeks** — always aggregate by position size
- **ETF/linear instruments have delta=1, gamma=0, vega=0** — only option components contribute gamma/vega to a portfolio
- Duration/Convexity and Delta/Gamma/Vega all serve the SAME underlying purpose: **approximate how portfolio value changes for small movements in a single risk factor** — this is fundamentally different from VaR's probabilistic loss framework