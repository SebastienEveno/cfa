---
layout: page
title: Valuing Risky Bonds and the Option-Adjusted Spread
permalink: /study/06-fixed-income/03-valuation-with-embedded-options/04-oas-and-risky-bonds/
prev: /cfa/study/06-fixed-income/03-valuation-with-embedded-options/03-valuation-with-interest-rate-volatility/
next: /cfa/study/06-fixed-income/03-valuation-with-embedded-options/05-effective-duration-and-convexity/
---
## Summary: Valuing Risky Bonds and the Option-Adjusted Spread (CFA Level II — Fixed Income)

---

### Extending the Framework to Risky Bonds

Everything so far assumed a **default-free** issuer. Most bonds carry credit risk, so the framework must be extended. Two approaches exist:

1. **Industry-standard approach**: increase discount rates above the default-free rates to reflect credit risk — higher discount rates → lower present value.
2. **Explicit default-probability approach**: assign a default probability to each period plus a recovery rate given default (this is the reduced-form approach covered under credit risk modeling — not the focus here).

This module uses the first (spread-based) approach throughout.

---

### The Z-Spread — Risky Option-Free Bonds

For an **option-free** risky bond, the simplest approach is to add a fixed **zero-volatility spread (Z-spread)** uniformly to every one-year forward rate on the default-free curve, then discount as usual.

**Example**: Meridian Grid's 3-year 4.25% option-free bond, now treated as risky with a Z-spread of 100 bps:

$$V = \frac{4.25}{1.035} + \frac{4.25}{(1.035)(1.04518)} + \frac{104.25}{(1.035)(1.04518)(1.05564)} = \mathbf{99.326}$$

(Each one-year forward rate — 2.500%, 3.518%, 4.564% — is raised by 100 bps to 3.500%, 4.518%, 5.564% before discounting.) As expected, this risky-bond value (99.326) sits well below the default-free straight value (102.114).

> **Note**: A bond's Z-spread is simply its **OAS at zero volatility** — the two concepts converge when there is no embedded option (or no volatility).

---

### Option-Adjusted Spread (OAS)

For bonds **with embedded options**, the equivalent tool is the **option-adjusted spread (OAS)**: the single constant spread added to *every* one-period forward rate on the binomial tree such that the tree's resulting model value equals the bond's observed market price.

$$\boxed{\text{OAS} = \text{constant spread added to all tree rates such that Model Value} = \text{Market Price}}$$

**Why "option adjusted"?** Because the tree still performs the exercise-decision logic (comparing each node's value to the call/put price) at every step — the OAS strips out only the *credit/liquidity* component of the spread, having already "adjusted for" the option's effect on cash flows.

**Determining OAS — trial and error.** Suppose the market price of Meridian Grid's 3-year 4.25% bond callable at par in Years 1 and 2 (10% volatility) is **101.000** instead of the model value of 101.540 computed with zero spread. Since the market price is *lower* than the default-free model value, a positive spread is needed:

| Trial Spread | Resulting Model Value |
|----------------|--------------------------|
| +30 bps | 100.973 (too low) |
| +28 bps | 101.010 (too high) |
| **+28.55 bps** | **101.000 ✓** |

The **OAS is 28.55 bps**. The full node structure (rates shifted up by 28.55 bps, exercise decisions re-evaluated at each node) reprices to exactly 101.000.

> **Interpretation as a relative-value tool**: Compare a bond's OAS to that of peers with similar characteristics and credit quality.
> - **OAS lower than peers** → bond is **rich** (overpriced) — avoid.
> - **OAS higher than peers** → bond is **cheap** (underpriced) — attractive.
> - **OAS in line with peers** → fairly priced.

---

### Effect of Interest Rate Volatility on OAS — The Classic Exam Trap

Because the tree's rate dispersion is volatility-dependent, **OAS is also volatility-dependent** — even though the market price is held fixed. Get the *direction* right for each bond type:

| Bond Type | Effect of ↑ Volatility on Option Value | Effect of ↑ Volatility on OAS (given a fixed market price) |
|-----------|--------------------------------------------|-----------------------------------------------------------------|
| **Callable** | Call option value ↑ | **OAS ↓** |
| **Putable** | Put option value ↑ | **OAS ↑** |

**Why callable OAS falls as volatility rises**: A higher call option value pulls the (zero-spread) model value of the callable bond *down*. If the market price is fixed and below the old model value, a *smaller* upward spread is now needed to bring the model value down to that same market price — so the required OAS shrinks. Illustration: a 5% coupon, 23-year bond callable in 3 years, priced at 95% of par on a flat 4% curve — its OAS falls from **138.2 bps at 0% volatility to just 1.2 bps at 30% volatility**.

**Why putable OAS rises as volatility rises**: A higher put option value pushes the (zero-spread) model value of the putable bond *up*. To bring that higher model value back down to the same fixed market price, a *larger* spread must now be subtracted in effect — i.e., a larger OAS is required to offset the added put value.

> **Key insight (exam trap)**: The relationship is **OAS ↓ as volatility ↑ for callable bonds**, but **OAS ↑ as volatility ↑ for putable bonds** — opposite directions. Candidates frequently misapply the callable-bond rule to putable bonds. Anchor it to the option-value mechanism: whichever direction the option's value moves, OAS for a callable bond moves the *opposite* way (call value up → callable OAS down), while OAS for a putable bond moves the *same* way (put value up → putable OAS up) — because the put's value is *added* rather than subtracted in the identity $V_{putable} = V_{straight} + V_{put}$.
> Practical consequence: an assumed higher volatility makes a callable bond that looked cheap (positive OAS) look **less cheap** — the OAS estimate is highly sensitive to the volatility assumption used.

---

### Scenario Analysis of Bonds with Options

Total-return scenario analysis over a fixed horizon must account for potential exercise **before** the horizon date. For an option-free bond, lower rates → higher ending value → better return (over a short horizon, reinvestment income is a minor factor relative to price change). For a **callable** bond, this simple relationship breaks down: sharply *rising* rates hurt performance (falling price), but sharply *falling* rates can also hurt performance because the bond gets called and both coupon and principal must be reinvested at the new lower rates. Total return as a function of the rate shift is therefore **not monotonic** for callable bonds — it can be highest near a modest rate decline and fall off in both directions from there.

> Assuming a callable bond survives uncalled to the horizon date, when in fact it would be called earlier under many scenarios, **overstates** expected performance. Realistic modeling of the exercise decision at each point along the horizon is essential.

---

### Question Set Answers

**Q1** — A 7% annual coupon, 3-year French corporate bond, callable at par in Years 1 and 2, was valued off the government curve at 102.294% of par with zero spread. A colleague says it should instead reflect a 200 bps OAS. What should be done?
→ **Add 200 bps to every rate in the binomial interest rate tree**, then re-run the exercise-decision/backward-induction procedure — not subtract from the tree, and not adjust the coupon rate directly.

**Q2** — Using that OAS-adjusted (200 bps-shifted) tree, the new callable bond value is closest to (given the specific tree numbers): 
→ Recomputed via full backward induction with rates shifted up 200 bps at every node, checking the 100 call price at each Year 1/Year 2 node — the resulting value is materially below the zero-spread value, illustrating how a wider OAS assumption directly compresses a callable bond's price.

**Q3** — Holding the price found above fixed, if assumed volatility rises from 15% to 20%, the OAS for this callable bond will be:
→ **Lower.** Consistent with the callable-bond OAS-volatility relationship: OAS falls as assumed volatility rises.

---

### Exam Tips

- **OAS = constant spread added to every tree node's rate to force Model Value = Market Price** — the trial-and-error/iterative-search process is identical in spirit to Z-spread search, just embedded in the tree instead of simple discounting
- **Z-spread = OAS at zero volatility** for any bond; the two only diverge once volatility (and thus option value) enters the picture
- **Callable bond: OAS falls as volatility assumption rises.** **Putable bond: OAS rises as volatility assumption rises.** — memorize both directions explicitly, this is a favorite exam trap
- **Low OAS relative to peers = rich (expensive)**; **high OAS relative to peers = cheap** — same interpretation logic as Z-spread, just option-adjusted
- **Scenario/total-return analysis of callable bonds is non-monotonic in rate changes** — both large rate increases (price decline) and large rate decreases (early call + reinvestment at lower rates) can hurt performance
- Effective duration (next file) is calculated by holding the **OAS fixed** while shifting the entire benchmark curve up and down — this is the critical link between this file and the next
