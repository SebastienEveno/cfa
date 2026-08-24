---
layout: page
title: Valuation with Interest Rate Volatility — The Binomial Tree
permalink: /study/06-fixed-income/03-valuation-with-embedded-options/03-valuation-with-interest-rate-volatility/
prev: /cfa/study/06-fixed-income/03-valuation-with-embedded-options/02-callable-putable-bond-relationships/
next: /cfa/study/06-fixed-income/03-valuation-with-embedded-options/04-oas-and-risky-bonds/
---
## Summary: Valuation with Interest Rate Volatility — The Binomial Tree (CFA Level II — Fixed Income)

---

### Effect of Interest Rate Volatility on Option Value

> **Key insight**: The value of *any* embedded option — call or put — increases with interest rate volatility. Greater volatility means more/wider opportunities for the option to end up in the money at some point along the tree.

**Illustration — 30-year 4.50% bond callable at par in 10 years, 4% flat yield curve:**

| Interest Rate Volatility | Value of Call Option | Value of Callable Bond |
|---------------------------|------------------------|--------------------------|
| 0% | 4.60% of par | Straight value − 4.60 |
| 30% | 14.78% of par | Straight value − 14.78 |

**Illustration — 30-year 3.75% bond putable at par in 10 years, 4% flat yield curve:**

| Interest Rate Volatility | Value of Put Option | Value of Putable Bond |
|---------------------------|------------------------|--------------------------|
| 0% | 2.30% of par | Straight value + 2.30 |
| 30% | 10.54% of par | Straight value + 10.54 |

> **As volatility rises: the callable bond's value falls (call option grows), and the putable bond's value rises (put option grows).** The straight bond value is unaffected by interest rate volatility — volatility only changes the value of the optionality layered on top.

---

### Effect of the Level and Shape of the Yield Curve

**Level of the yield curve (callable bond):** As the flat yield curve declines, the straight bond's value rises — but the call option value rises *too*, partially offsetting the gain. For the 30-year 4.50%/10-year-call bond at 15% volatility: dropping the curve from 5% to 3% flat raises the straight bond value by ~40% but the *callable* bond value by only ~27%. The call option **caps** the callable bond's upside.

**Level of the yield curve (putable bond):** Symmetric logic — as rates rise, the straight bond falls, but the put option gains value and partially cushions the decline. Moving the curve from 3% to 5% flat: the straight bond falls ~30%, but the putable bond falls only ~22%. The put option **floors** the putable bond's downside.

**Shape of the yield curve:**

| Yield Curve Shape | Call Option Value | Put Option Value |
|--------------------|----------------------|----------------------|
| **Upward sloping** (e.g., 2% → 4%) | Lower (~8% of par) | Higher |
| **Flat** (e.g., 4%) | Higher (~10% of par) | Moderate |
| **Downward sloping/inverted** (e.g., 6% → 4%) | Highest (~12%+ of par) | Lowest |

**Intuition**: When the curve is upward sloping, one-period forward rates are high throughout the tree, giving the issuer *fewer* opportunities to call profitably. As the curve flattens or inverts, more nodes carry low forward rates, creating *more* call opportunities — raising the call option's value. The reverse logic holds for the put option: an upward-sloping curve produces more high-rate nodes, creating more put opportunities and a higher put value; a flat or inverted curve reduces put opportunities.

> A callable bond **issued at par** on a normal upward-sloping curve has a call option that is initially **out of the money** (it would not be called if the zero-volatility forward rates prevailed). Callable bonds issued at a **large premium** (common among US municipals) are typically **in the money** at issuance.

---

### The Binomial Tree Valuation Procedure

1. **Generate** an interest rate tree from the benchmark yield curve and a volatility assumption (calibration procedure from Module 2 — each rate related to its neighbor by $i_H = i_L \times e^{2\sigma\sqrt{\Delta t}}$, and the tree reproduces par bond prices).
2. **At each node**, determine whether the embedded option would be exercised: compare the value of the bond's future cash flows (if not exercised) against the exercise price.
3. **Backward-induct**: starting at maturity and working right-to-left, compute each node's value as the coupon plus the probability-weighted average of the two subsequent nodes' values, discounted one period at that node's rate — using the (already exercise-adjusted) values from the next step to the right.

$$\boxed{V_{node} = \frac{0.5 \times (V_{up} + C) + 0.5 \times (V_{down} + C)}{1 + i_{node}}}$$

where $C$ is the coupon paid at that step and $i_{node}$ is the one-period forward rate at that node. After computing $V_{node}$, compare it against the exercise price and **reset** to the exercise price if the option holder would rationally exercise (issuer calls if $V_{node} >$ call price; investor puts if $V_{node} <$ put price).

---

### The Calibrated Tree — Meridian Grid Corp., 10% Volatility

Returning to the same 3-year 4.25% annual-coupon bond (par curve: 1yr = 2.500%, 2yr = 3.000%, 3yr = 3.500%), now calibrated at **10% interest rate volatility**:

| Time | Node | Forward Rate |
|------|------|----------------|
| Year 0 | — | 2.5000% |
| Year 1 | Upper | 3.8695% |
| Year 1 | Lower | 3.1681% |
| Year 2 | Upper | 5.5258% |
| Year 2 | Middle | 4.5242% |
| Year 2 | Lower | 3.7041% |

This is the same style of calibrated tree used to value option-free bonds in Module 2 — the tree correctly reprices the 1-, 2-, and 3-year par bonds at 100.

---

### Worked Example — Callable Bond with 10% Volatility

The bond is **callable at par (100)** one year and two years from now.

**Year 2 nodes** — discount the Year 3 cash flow (104.250) at each Year-2 rate; none exceed the call price of 100, so no exercise occurs here:

| Node (rate) | Value | Exercised? |
|---|---|---|
| Upper (5.5258%) | $104.250/1.055258 = 98.791$ | No (< 100) |
| Middle (4.5242%) | $104.250/1.045242 = 99.738$ | No (< 100) |
| Lower (3.7041%) | $104.250/1.037041 = 100.526$ | **Yes → reset to 100.000** |

**Year 1 nodes** — add the Year 2 coupon (4.250) to the expected value of the two successor nodes, discount at the Year-1 rate, then check against the call price:

$$\text{Upper: } \frac{4.250 + 0.5(98.791) + 0.5(99.738)}{1.038695} = 99.658 \quad (\text{no call, } < 100)$$

$$\text{Lower: } \frac{4.250 + 0.5(99.738) + 0.5(100.000)}{1.031681} = 100.922 \quad (\text{call} \to \text{reset to } 100.000)$$

**Year 0 (today):**

$$V_{callable} = \frac{4.250 + 0.5(99.658) + 0.5(100.000)}{1.025} = \mathbf{101.540}$$

**Value of the call option:**

$$V_{call} = 102.114 - 101.540 = \mathbf{0.574}$$

> Compare to the zero-volatility call value of 0.407 — consistent with the rule that **option value rises with volatility**, so the callable bond's value (101.540) is lower than at zero volatility (101.707).

---

### Worked Example — Putable Bond with 10% Volatility

Same bond and tree, now **putable at par (100)** one year and two years from now. The investor puts when the PV of future cash flows falls *below* 100.

**Year 2 nodes:**

| Node (rate) | Value | Exercised? |
|---|---|---|
| Upper (5.5258%) | 98.791 | **Yes → reset to 100.000** |
| Middle (4.5242%) | 99.738 | **Yes → reset to 100.000** |
| Lower (3.7041%) | 100.526 | No (> 100) |

**Year 1 nodes:**

$$\text{Upper: } \frac{4.250 + 0.5(100.000) + 0.5(100.000)}{1.038695} = 100.366 \quad (\text{no put, } > 100)$$

$$\text{Lower: } \frac{4.250 + 0.5(100.000) + 0.5(100.526)}{1.031681} = 101.304 \quad (\text{no put, } > 100)$$

**Year 0:**

$$V_{putable} = \frac{4.250 + 0.5(100.366) + 0.5(101.304)}{1.025} = \mathbf{102.522}$$

**Value of the put option:**

$$V_{put} = 102.522 - 102.114 = \mathbf{0.408}$$

> Compare to the zero-volatility put value of 0.283 — again consistent with **option value rising with volatility**, so the putable bond's value (102.522) is higher than at zero volatility (102.397).

---

### Putable vs. Extendible Bonds

A **putable bond** and an economically equivalent **extendible bond** must have the same value under no-arbitrage — a 3-year bond putable in Year 2 is worth exactly the same as a 2-year bond of the same coupon, extendible by one year. Cash flows are identical through Year 2; from Year 2 onward, both bonds' outcomes depend identically on whether the Year-2 forward rate is above or below the coupon rate (put/no-extend if rates are higher; no-put/extend if rates are lower) — the same economic decision expressed as opposite mechanics (early termination vs. continuation).

---

### Question Set Answers

**Q1** — At the initial setting (10% volatility), if volatility rises to 15%, the callable bond's value will be:
→ **Less than 101.540.** Higher volatility raises the call option value, which is subtracted from the straight value — lowering the callable bond's value.

**Q2** — If the same bond is instead callable at **102** (rather than 100), its value is closest to:
→ **102.114 (the straight bond value).** At 102, the call price is too high to ever be triggered given the tree's node values — the call option is worthless, so $V_{callable} = V_{straight}$.

**Q3** — At the initial setting (10% volatility putable bond), if volatility rises to 20%, the putable bond's value will be:
→ **More than 102.522.** Higher volatility raises the put option value, which is added to the straight value.

**Q4** — If the same bond is instead putable at **95** (rather than 100), its value is closest to:
→ **102.114 (the straight bond value).** At 95, the put price is too low to ever be triggered — the put option is worthless, so $V_{putable} = V_{straight}$.

---

### Exam Tips

- **Backward induction mechanic**: at each node, compute the "hold" value as coupon + probability-weighted average of the next period's two values, discounted one period — *then* compare to the exercise price and reset if exercise is optimal
- **Callable bond**: reset (cap) at the call price whenever the computed hold value **exceeds** it; **putable bond**: reset (floor) at the put price whenever the computed hold value **falls below** it
- **Risk-neutral probabilities of 0.5/0.5 are already built into the calibrated up/down rate structure** — don't apply a separate market-based probability
- **Higher volatility → higher option value always**, regardless of call or put → callable bond value falls, putable bond value rises as volatility increases
- **Yield curve shape**: flatter/inverted curves raise call option value (more low-rate nodes → more call opportunities) and lower put option value (fewer high-rate nodes); upward-sloping curves do the reverse
- **Putable bond ≡ extendible bond** economically, differing only in which underlying option-free bond anchors the valuation
- The next file extends this exact tree mechanic to **risky** (credit-sensitive) bonds via the **option-adjusted spread (OAS)**
