---
layout: page
title: Maturity Structure of Yield Curve Volatilities
permalink: /study/06-fixed-income/01-term-structure-dynamics/08-yield-curve-volatilities/
prev: /cfa/study/06-fixed-income/01-term-structure-dynamics/07-yield-curve-factor-models/
next: /cfa/study/06-fixed-income/01-term-structure-dynamics/09-interest-rate-views/
---
## Summary: Maturity Structure of Yield Curve Volatilities (CFA Level II — Fixed Income)

---

### Why Interest Rate Volatility Matters

**Two key reasons for fixed-income managers:**
1. Most fixed-income instruments have **embedded options** — option values depend critically on interest rate volatility levels
2. **Interest rate risk management** requires controlling the impact of rate volatility on price volatility

---

### Volatility Term Structure

**Definition**: Representation of yield volatility of a **zero-coupon bond at each maturity** along the curve.

$$\boxed{\sigma(t,T) = \text{annualized standard deviation of proportional change in bond yield with maturity } T \text{ at time } t}$$

**Key empirical finding**: **Short-term rates are MORE volatile than long-term rates**.

| Maturity (years) | 0.25 | 0.50 | 1 | 2 | 3 | 5 | 7 | 10 | 20 | 30 |
|-----------------|------|------|---|---|---|---|---|----|----|-----|
| σ(t,T) | 35.15% | 31.73% | 29.64% | 27.13% | 25.77% | 21.54% | 18.85% | 16.21% | 13.32% | 11.69% |

> US Treasury data, Aug 2005 – Dec 2007 (pre-crisis, "normal" period)

**Annualization**: Monthly σ → annualized σ by multiplying by $\sqrt{12}$

**Example**: 3-month T-bill monthly σ = 10.15% → annualized = $10.15\% \times \sqrt{12} = 35.15\%$

---

### Drivers of Volatility by Maturity Segment

| Maturity | Primary Driver |
|---------|----------------|
| **Short-term** | Uncertainty about **monetary policy** |
| **Long-term** | Uncertainty about **real economy and inflation** |

> Co-movement between short- and long-term volatilities depends on **ever-changing correlations** among monetary policy, real economy, and inflation uncertainties.

---

### Important Distinction: Rate Volatility vs. Price Volatility

| | Short-term bonds | Long-term bonds |
|--|-----------------|-----------------|
| **Rate/yield volatility** | **Higher** (rates move more) |  Lower |
| **Price volatility** | Lower | **Higher** (due to duration) |

> Short-term rates move more, but long-term bond **prices** move more for a given rate change — duration is the key.

---

### Managing Yield Curve Risk — Key Rate Duration

**Effective duration**: Sensitivity to **parallel** shift only — insufficient for non-parallel moves.

**Key rate duration** (KeyDur$_T$): Sensitivity to change in yield at a **specific maturity** $T$, holding all other rates constant.

$$\boxed{\frac{\Delta V}{V} \approx -\sum_T KeyDur_T \times \Delta y_T}$$

**Key property**: Sum of key rate durations = Effective duration
$$\sum_T KeyDur_T = \text{Effective duration}$$

**Intuition**: When all key rates move by the same amount (parallel shift), the sum of all key rate sensitivities must equal the effective duration.

---

### Portfolio Example — Key Rate Duration Calculation

**Portfolio**: 3 zero-coupon bonds — 1-yr, 5-yr, 10-yr — each $100 → Total = $300

**Effective durations** (= maturity for zero-coupon bonds): 1, 5, 10

**Portfolio effective duration** = (1+5+10)/3 = **5.333**

**Key rate durations** (impact per 100 bps move in that rate only):

| Key Rate | Price Impact | KeyDur$_T$ = Impact/(300 × 0.01) |
|----------|-------------|----------------------------------|
| 1-year | $1 | **0.333** |
| 5-year | $5 | **1.667** |
| 10-year | $10 | **3.333** |
| **Sum** | | **5.333** ✅ |

---

### Factor-Based Sensitivity Measures (Level, Steepness, Curvature)

Define factor shifts as:

| Year | Parallel (Level) | Steepness | Curvature |
|------|-----------------|-----------|-----------|
| 1-yr | +1 | −1 | +1 |
| 5-yr | +1 | 0 | 0 |
| 10-yr | +1 | +1 | +1 |

**Calculating factor durations:**

$$KeyDur_L = \frac{1+5+10}{300 \times 0.01} = \mathbf{5.333}$$

$$KeyDur_S = \frac{-(1-10)}{300 \times 0.01} = \frac{9}{3} = \mathbf{3.000}$$ (short falls, long rises → portfolio loses on long more than gains on short)

$$KeyDur_C = \frac{1+10}{300 \times 0.01} = \frac{11}{3} = \mathbf{3.667}$$ (short and long rise, belly unchanged)

**Portfolio yield curve risk model:**
$$\frac{\Delta V}{V} \approx -KeyDur_L \cdot \Delta x_L - KeyDur_S \cdot \Delta x_S - KeyDur_C \cdot \Delta x_C$$

**Numerical example**: $\Delta x_L = -0.005$, $\Delta x_S = +0.002$, $\Delta x_C = +0.001$:
$$\frac{\Delta V}{V} = -(5.333)(-0.005) - (3.000)(0.002) - (3.667)(0.001) = 2.67\% - 0.60\% - 0.37\% = \mathbf{+1.70\%}$$

**Relationships between key rate and factor durations:**
$$KeyDur_L = KeyDur_1 + KeyDur_5 + KeyDur_{10}$$
$$KeyDur_S = -KeyDur_1 + KeyDur_{10}$$
$$KeyDur_C = KeyDur_1 + KeyDur_{10}$$

---

### Example 10 — Knowledge Check Answers

**Q1 (Most important factor in yield curve changes):**
→ **A. Level** — explains the most variance; approximately a parallel shift affecting all maturities.

**Q2 (Short rate −150 bps, long rate −50 bps — describe the movement):**
- Average fall ≈ −100 bps (level component)
- Short fell MORE than long → curve steepened (short rates fell relative to long rates)
→ **B. Steepening of the yield curve resulting from changes in level and steepness** — level moved down (both fell), steepness changed (differential change).

**Q3 (Intermediate yields fall 10 bps, short and long unchanged):**
- Level unchanged (short and long don't move)
- Belly falls while wings are flat → classic curvature move
→ **B. Curvature only** — intermediate rates fell while short and long were unchanged (belly down, wings flat = curvature change).

**Q4 (Short-term vs. long-term interest rate volatility):**
→ **B. More volatile** — short-term rates exhibit higher yield volatility than long-term rates (though long-term bonds have higher price volatility due to duration).

**Q5 (Parallel shift −50 bps, KeyDur₁=0.50, KeyDur₂=0.70, KeyDur₃=0.90):**
$$\frac{\Delta V}{V} = -(0.50+0.70+0.90) \times (-0.005) = -2.10 \times (-0.005) = +1.05\%$$
→ **B. +1.05%** — rates fall, portfolio value rises; total duration = 2.10 × 0.50% = 1.05%.

---

### Exam Tips

- **Short-term rates**: more volatile than long-term rates (yield volatility)
- **Long-term bonds**: more price-volatile than short-term bonds (duration effect)
- **Volatility term structure typically slopes downward** — declining volatility with increasing maturity
- **Key rate duration**: sensitivity to ONE maturity point; **sum = effective duration**
- **Effective duration** covers parallel shifts only; **key rate duration** covers non-parallel shifts too
- **Factor durations** (Level, Steepness, Curvature) are mathematically derivable from key rate durations
- **Level** explains most variance; **Curvature** explains least
- **Steepness**: short rates fall more than long (or vice versa) — affects slope
- **Curvature**: intermediate rates move opposite to short and long — affects belly
- **Short-term volatility ← monetary policy uncertainty**; **Long-term volatility ← real economy + inflation uncertainty**