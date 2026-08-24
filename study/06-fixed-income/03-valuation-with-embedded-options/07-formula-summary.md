---
layout: page
title: "Formula Summary: Bonds with Embedded Options (CFA Level II — Fixed Income)"
permalink: /study/06-fixed-income/03-valuation-with-embedded-options/07-formula-summary/
prev: /cfa/study/06-fixed-income/03-valuation-with-embedded-options/06-capped-floored-floaters-and-convertibles/
---
## Formula Summary: Bonds with Embedded Options (CFA Level II — Fixed Income)

---

### 1. Value Relationships

$$\boxed{V_{callable} = V_{straight} - V_{call}} \qquad \boxed{V_{call} = V_{straight} - V_{callable}}$$

$$\boxed{V_{putable} = V_{straight} + V_{put}} \qquad \boxed{V_{put} = V_{putable} - V_{straight}}$$

> Call = issuer option → subtracts value. Put = investor option → adds value.

---

### 2. Backward Induction (Binomial Tree)

$$\boxed{V_{node} = \frac{0.5 \times (V_{up} + C) + 0.5 \times (V_{down} + C)}{1 + i_{node}}}$$

Then reset:
- **Callable**: reset to call price if $V_{node} > $ call price (issuer exercises)
- **Putable**: reset to put price if $V_{node} < $ put price (investor exercises)

At **zero volatility**, this collapses to a single deterministic walk through the one-year forward rates (no tree needed).

---

### 3. Option-Adjusted Spread (OAS)

$$\boxed{\text{OAS} = \text{constant spread added to every tree rate such that Model Value} = \text{Market Price}}$$

| Bond Type | Effect of ↑ Volatility on OAS (fixed market price) |
|-----------|-----------------------------------------------------------|
| Callable | **Decreases** |
| Putable | **Increases** |

> Z-spread = OAS at zero volatility (converges for option-free bonds or any bond when volatility = 0).

---

### 4. Effective Duration

$$\boxed{\text{EffDur} = \frac{PV_- - PV_+}{2 \times (\Delta\text{Curve}) \times PV_0}}$$

Procedure: fix OAS from market price → shift benchmark curve ±ΔCurve → revalue at fixed OAS → compute $PV_-$, $PV_+$.

$$\boxed{\text{One-sided up/down duration} = \text{same formula, applied using only the up-shift or only the down-shift value}}$$

| Bond Type | Duration vs. Straight Bond | One-Sided Asymmetry |
|-----------|-------------------------------|---------------------------|
| Callable | ≤ straight; shortens as rates **fall** | Up-duration > down-duration |
| Putable | ≤ straight; shortens as rates **rise** | Down-duration > up-duration |

---

### 5. Effective Convexity

$$\boxed{\text{EffCon} = \frac{PV_- + PV_+ - (2 \times PV_0)}{(\Delta\text{Curve})^2 \times PV_0}}$$

| Bond Type | Convexity Near the Money |
|-----------|-------------------------------|
| Straight bond | Positive (low), unaffected by options |
| Callable bond | **Negative** (capped upside) |
| Putable bond | **Positive**, larger (floored downside) |

---

### 6. Capped and Floored Floaters

$$\boxed{V_{capped\ floater} = V_{straight\ floater} - V_{cap}}$$

$$\boxed{V_{floored\ floater} = V_{straight\ floater} + V_{floor}}$$

> Uncapped/unfloored floater resetting at the reference rate = par (100) at every reset.

---

### 7. Convertible Bonds

$$\boxed{\text{Conversion value} = \text{Underlying share price} \times \text{Conversion ratio}}$$

$$\boxed{\text{Conversion price} = \frac{\text{Par value}}{\text{Conversion ratio}}}$$

$$\boxed{\text{Minimum value} = \max(\text{Conversion value}, \text{Straight value})}$$

$$\boxed{\text{Market conversion price} = \frac{\text{Convertible bond price}}{\text{Conversion ratio}}}$$

$$\boxed{\text{Market conversion premium per share} = \text{Market conversion price} - \text{Underlying share price}}$$

$$\boxed{\text{Market conversion premium ratio} = \frac{\text{Market conversion premium per share}}{\text{Underlying share price}}}$$

$$\boxed{\text{Premium over straight value} = \frac{\text{Convertible bond price}}{\text{Straight value}} - 1}$$

$$\boxed{V_{convertible} = V_{straight} + V_{\text{call on stock}}}$$

$$V_{callable\ convertible} = V_{straight} + V_{\text{call on stock}} - V_{\text{issuer call}}$$

$$V_{callable\ putable\ convertible} = V_{straight} + V_{\text{call on stock}} - V_{\text{issuer call}} + V_{\text{investor put}}$$

---

### Quick Reference — All Formulas

| Measure | Formula |
|---------|---------|
| Callable bond value | $V_{straight} - V_{call}$ |
| Putable bond value | $V_{straight} + V_{put}$ |
| Node value (backward induction) | $[0.5(V_{up}+C) + 0.5(V_{down}+C)] / (1+i_{node})$ |
| OAS | Spread added to tree rates so Model Value = Market Price |
| Effective duration | $(PV_- - PV_+) / (2 \times \Delta\text{Curve} \times PV_0)$ |
| Effective convexity | $[PV_- + PV_+ - 2PV_0] / [(\Delta\text{Curve})^2 \times PV_0]$ |
| Capped floater value | $V_{straight\ floater} - V_{cap}$ |
| Floored floater value | $V_{straight\ floater} + V_{floor}$ |
| Conversion value | Share price × Conversion ratio |
| Conversion price | Par value / Conversion ratio |
| Minimum value of convertible | max(Conversion value, Straight value) |
| Market conversion price | Convertible price / Conversion ratio |
| Market conversion premium per share | Market conversion price − Share price |
| Market conversion premium ratio | Premium per share / Share price |
| Premium over straight value | Convertible price / Straight value − 1 |
| Convertible bond value | $V_{straight} + V_{\text{call on stock}}$ (± issuer call / investor put) |

---

### Exam Tips

- **Sign convention**: call option always subtracts value (issuer's option); put option always adds value (investor's option) — this governs callable/putable bonds, capped/floored floaters, and convertible-bond call/put layers alike
- **Zero volatility** = deterministic one-period forward-rate walk, no tree; **positive volatility** = full binomial tree with exercise-decision checks at every node before backward-inducting to the next step
- **The 0.5/0.5 weighting is already embedded in the calibrated up/down rate structure** — do not apply separate real-world probabilities
- **OAS-volatility relationship is the single highest-value memorization item in this module**: callable bond OAS **falls** as assumed volatility rises; putable bond OAS **rises** as assumed volatility rises — for a fixed market price in both cases
- **Effective duration is calculated holding OAS constant** while shifting the benchmark curve — this is what makes it comparable across differently-priced/differently-spread bonds
- **Callable/putable duration never exceeds straight-bond duration**; callable duration shortens as rates fall, putable duration shortens as rates rise
- **One-sided durations matter most near the money**: callable bonds are more sensitive to rate increases; putable bonds are more sensitive to rate decreases — two-sided effective duration masks this
- **Key rate durations**: callable bond sensitivity migrates from the maturity-matched point toward the call-date point as coupon (call likelihood) rises; putable bond sensitivity migrates from the put-date point toward the maturity-matched point as coupon (put likelihood) rises
- **Effective convexity**: putable bonds are *always* positively convex; callable bonds turn *negatively* convex once the call is near the money
- **Convertible bonds**: minimum value is a *moving* floor (straight value fluctuates with rates/credit); busted convertibles behave like bonds, in-the-money convertibles behave like the underlying stock; forced conversion lets the issuer eliminate future dilution risk by calling once the share price exceeds the conversion price
- **Premium over straight value** is a widely used but conceptually flawed downside-risk measure, since its denominator (straight value) is not fixed
