---
layout: page
title: Momentum Valuation Indicators
permalink: /study/05-equity-valuation/04-market-based-valuation/12-momentum-valuation-indicators/
prev: /cfa/study/05-equity-valuation/04-market-based-valuation/11-international-considerations/
next: /cfa/study/05-equity-valuation/04-market-based-valuation/13-valuation-indicators-issues/
---
## Summary: Momentum Valuation Indicators (CFA Level II)

---

### What Are Momentum Indicators?

Indicators that relate **price or a fundamental** (like earnings) to:
- Their **own past values** (time-series momentum)
- An **expected value** (surprise-based)
- **Performance of a benchmark group** (relative strength)

**Investment logic**: Patterns of persistence or reversal in returns may be exploitable for alpha generation.

**Caution**: Research is vulnerable to **data snooping and hindsight bias**; profitable rules self-destruct once widely known.

---

### Three Key Momentum Indicators

---

#### 1. Earnings Surprise

$$\boxed{UE_t = EPS_t - E(EPS_t)}$$

**Percentage earnings surprise:**
$$\% \text{ surprise} = \frac{EPS_t - E(EPS_t)}{E(EPS_t)}$$

**Scaled earnings surprise** (adjusts for analyst disagreement):
$$\text{Scaled surprise} = \frac{EPS_t - E(EPS_t)}{\sigma(\text{analyst forecasts})}$$

**Rationale**: Positive surprises → persistent positive abnormal returns (alpha). Scale by analyst disagreement because the same dollar surprise is more meaningful when analysts agree (low dispersion).

**Worked example (BP):**
- Actual = $3.74, Consensus = $3.26, σ = $0.29
$$\text{Scaled surprise} = \frac{3.74 - 3.26}{0.29} = \mathbf{1.66}$$

---

#### 2. Standardized Unexpected Earnings (SUE)

$$\boxed{SUE_t = \frac{EPS_t - E(EPS_t)}{\sigma[EPS_t - E(EPS_t)]}}$$

**Key difference from scaled earnings surprise:**
- **Scaled surprise**: denominator = **cross-sectional** standard deviation of analyst forecasts at a point in time
- **SUE**: denominator = **time-series** standard deviation of **past forecast errors** (e.g., prior 20 quarters)

**Interpretation**: Higher absolute SUE → more significant surprise relative to historical forecast accuracy for that company.

**Exxon vs. Volkswagen example:**

| Metric | Winner (Less Accurate) |
|--------|----------------------|
| % surprise range | VW (−36.3% to +15.0% vs. Exxon −18.4% to +10.2%) |
| SUE range | Exxon (−3.51 to +4.32 vs. VW −3.57 to +1.13) |

> **Why they differ**: Exxon has **smaller historical σ of forecast errors** → same dollar surprise produces a larger SUE for Exxon.

---

#### 3. Relative Strength

Two types:

**Type 1**: Stock's return vs. **its own past performance**
- Compound return over 6 months, 1 year, etc.
- Also called "price momentum" in academic literature

**Type 2**: Stock's return vs. **a benchmark group** (index)

$$\boxed{RSTR_t = \frac{\text{Asset/Index}_t}{\text{Asset/Index}_{base}} \times \frac{1}{RSTR_{base}}}$$

Scaled to **1.0** at the base period.
- RSTR **> 1.0** → outperformed index
- RSTR **< 1.0** → underperformed index

**Moving average approach** (Brock, Lakonishok, LeBaron 1992):
- Buy/sell signals from relationship between **short-period and long-period moving averages**

**Worked example (Mar 2018 – Aug 2019):**

| Asset | Final RSTR | Performance vs. S&P 500 |
|-------|-----------|------------------------|
| US Treasuries (TLT) | **1.067** | +6.7% outperformance |
| STOXX Europe 50 | **0.847** | −15.3% underperformance |
| Emerging Markets | **0.743** | −25.7% underperformance |

> One-month results can differ dramatically from cumulative period results — always specify the time horizon.

---

### How Analysts Use Momentum Indicators

| Use Case | Description |
|----------|-------------|
| **Confirmation signal** | Momentum consistent with fundamental view → higher conviction |
| **Timing signal** | Correct on intrinsic value, but momentum may indicate **when** price converges |
| **Complementary** to price/EV multiples | Different perspective; not a replacement for fundamental analysis |

---

### Exam Tips

- **Earnings surprise**: actual − expected EPS; scaled by **analyst forecast dispersion**
- **SUE**: same numerator but scaled by **historical time-series standard deviation of past surprises**
- **Higher σ of past errors** → **lower SUE** for the same dollar surprise → VW example
- **RSTR**: scaled to 1.0 at base period; >1 = outperformed; <1 = underperformed
- **Momentum strategies are self-defeating** once widely known — theoretical limitation
- **Data snooping bias** is a major concern in all momentum research
- Momentum indicators are **valuation indicators with a time-series focus** — complementary to, not substitutes for, fundamental multiples