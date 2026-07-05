---
layout: page
title: Term Structure and Interest Rate Dynamics — Module 1 Wrap-Up
permalink: /study/06-fixed-income/01-term-structure-dynamics/10-summary/
prev: /cfa/study/06-fixed-income/01-term-structure-dynamics/09-interest-rate-views/
---
## Summary: Term Structure and Interest Rate Dynamics — Module 1 Wrap-Up (CFA Level II — Fixed Income)

A closing summary consolidating the entire module for exam use.

---

### Spot Rates, Forward Rates, and the Yield Curve

| Key Relationship | Formula/Rule |
|-----------------|-------------|
| Spot rate = geometric mean | $(1+z_T)^T = (1+z_1)(1+f_{1,1})\cdots(1+f_{T-1,1})$ |
| Upward-sloping curve | Forward rates **above** spot rates |
| Downward-sloping curve | Forward rates **below** spot rates |
| Flat curve | Forward rates **equal** spot rates |
| Forward rates realized | All bonds earn **same one-period return** = first-period spot rate |

---

### Key Valuation Models

$$\boxed{DF_N = \frac{1}{(1+z_N)^N}} \qquad \boxed{DF_B = DF_A \times F_{A,B-A}} \qquad \boxed{(1+z_B)^B = (1+z_A)^A(1+f_{A,B-A})^{B-A}}$$

**Par curve → spot curve**: Bootstrapping (sequential forward substitution)

**Swap rate formula**: $s_T = (1-DF_T)/\sum_{t=1}^{T}DF_t$

---

### YTM, Expected Return, and Realized Return

| Concept | Relationship |
|---------|-------------|
| YTM | Weighted average of spot rates |
| YTM = Expected return | Only if flat curve + coupons reinvested at YTM |
| Expected return > YTM | Upward-sloping curve (reinvestment at higher forward rates) |
| Realized return | Depends on actual reinvestment rates + exit yield curve |

---

### Rolling Down the Yield Curve

- **Stable upward-sloping curve**: bond earns the forward rate as it rolls to shorter maturity → **price appreciation + coupon income**
- **Strategy**: Buy longer maturity than investment horizon → earn excess return over maturity-matched strategy
- **Active management**: Outperform if actual future spot rates < today's forward rates

---

### Swap Curve and Spreads

| Spread | Definition | Measures |
|--------|-----------|---------|
| **Swap spread** | Swap rate − on-the-run government yield | Market credit premium over risk-free rate |
| **I-spread** | Bond YTM − interpolated swap rate | Bond-specific credit/liquidity risk |
| **TED spread** | 3M MRR − 3M T-bill yield | Economy-wide banking credit/liquidity risk |
| **MRR-OIS spread** | MRR − OIS rate | Short-term interbank credit risk |
| **Z-spread** | Constant spread over spot curve | Total credit/liquidity premium |

**Why swap ≠ government curve**: Different credit exposure (bank vs. sovereign), liquidity differences, imperfect arbitrage.

---

### Traditional Term Structure Theories

| Theory | Forward Rates | Key Assumption |
|--------|--------------|----------------|
| Unbiased expectations | Unbiased predictors | Risk neutral; bonds perfect substitutes |
| Local expectations | Unbiased (short term) | No-arbitrage; can accommodate risk |
| Liquidity preference | Upwardly biased | Risk aversion; liquidity premiums rise with maturity |
| Segmented markets | Irrelevant | Supply/demand per maturity segment; no substitution |
| Preferred habitat | Biased by risk premium | Preferences exist but yield incentives can override them |

---

### Three-Factor Yield Curve Model (Litterman & Scheinkman)

| Factor | Description | Variance Explained |
|--------|-------------|-------------------|
| **Level** | Parallel shift up/down | Largest |
| **Steepness** | Short rates move more than long (or vice versa) | Second |
| **Curvature** | Belly moves opposite to wings | Smallest |

---

### Volatility Term Structure

- Short-term rates are **more volatile** than long-term rates (but long-term bonds have higher price volatility due to duration)
- Short-term volatility ← monetary policy uncertainty
- Long-term volatility ← inflation and real economy uncertainty

---

### Duration Measures for Yield Curve Risk

| Measure | Captures |
|---------|---------|
| **Effective duration** | Parallel shift only |
| **Key rate duration** | Specific maturity point; sum = effective duration |
| **Level/Steepness/Curvature sensitivities** | Full shaping risk across all curve movements |

$$\frac{\Delta V}{V} \approx -\sum_T KeyDur_T \cdot \Delta y_T = -KeyDur_L \cdot \Delta x_L - KeyDur_S \cdot \Delta x_S - KeyDur_C \cdot \Delta x_C$$

---

### Macroeconomic Drivers and Trading Strategies

| Macro Driver | Curve Effect |
|-------------|-------------|
| Central bank tightening (expansion) | **Bearish flattening** |
| Central bank easing (recession) | **Bullish steepening** |
| Flight to quality (uncertainty) | **Bullish flattening** |
| QE (long-end asset purchases) | Suppresses long yields; tapering → **wider term spread** |
| Rising fiscal deficit | ↑ Supply → **↑ yields** |
| ↑ Domestic/foreign demand | **↓ bond risk premium** |

**Trading rules:**

| View | Action |
|------|--------|
| Rates fall | **Extend duration** |
| Rates rise | **Shorten duration** |
| Steepening expected | **Short long + buy short** (duration-neutral) |
| Flattening expected | **Buy long + short short** (duration-neutral) |
| Bullish flattening | **Bullet → Barbell** |

---

### One-Page Mental Model

```
Term structure basics:
  Spot rate = geometric mean of short rate + forward rates
  Forward curve above spot → upward-sloping (margin > average)
  All bonds earn z₁ when forwards are realized exactly

Active management:
  Earn alpha if actual future spots ≠ today's forward rates
  Spot < forward → buy bonds (undervalued; expect higher return)
  Spot > forward → sell bonds (overvalued; expect lower return)

Swap curve:
  Par curve from bank lending rates (not risk-free)
  Swap spread = swap − govt yield → credit premium
  I-spread, TED, MRR-OIS → different credit/liquidity barometers

Theories:
  Unbiased expectations → forwards = future spots (risk neutral)
  Liquidity preference → forwards biased UP (most empirically supported)
  Preferred habitat → most realistic (institutional + market incentives)

Factor model:
  Level (most important) → Steepness → Curvature (least important)
  Key rate duration = sensitivity at one maturity point
  Sum of key rate durations = effective duration

Macro:
  Short yields ← monetary policy
  Long yields ← inflation
  Tightening → bearish flattening
  Easing → bullish steepening
  Flight to quality → bullish flattening
```