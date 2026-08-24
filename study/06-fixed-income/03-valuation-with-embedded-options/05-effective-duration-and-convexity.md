---
layout: page
title: Effective Duration, One-Sided/Key Rate Durations, and Effective Convexity
permalink: /study/06-fixed-income/03-valuation-with-embedded-options/05-effective-duration-and-convexity/
prev: /cfa/study/06-fixed-income/03-valuation-with-embedded-options/04-oas-and-risky-bonds/
next: /cfa/study/06-fixed-income/03-valuation-with-embedded-options/06-capped-floored-floaters-and-convertibles/
---
## Summary: Effective Duration, One-Sided/Key Rate Durations, and Effective Convexity (CFA Level II — Fixed Income)

---

### Why Modified/Macaulay Duration Fail for Bonds with Embedded Options

**Yield duration measures** (modified duration, Macaulay duration) assume a bond's **cash flows do not change** when yield changes. That assumption is fine for option-free bonds but **false** for bonds with embedded options — a rate move can trigger a call, a put, or a floater's cap/floor, altering the timing and amount of cash flows themselves. The only duration measure that remains valid for bonds with embedded options is **effective (option-adjusted) duration** — and because it works for straight bonds too, practitioners default to it regardless of bond type.

---

### Effective Duration — Formula and Procedure

$$\boxed{\text{EffDur} = \frac{PV_- - PV_+}{2 \times (\Delta\text{Curve}) \times PV_0}}$$

where $\Delta\text{Curve}$ is the magnitude of the parallel shift (in decimal), $PV_-$/$PV_+$ are the full prices under a down/up shift, and $PV_0$ is the current full price (no shift).

**Practical procedure** (since practitioners typically start from a market price, not an issuer curve):

1. Given the bond's price $PV_0$, back out the implied **OAS** at an assumed volatility (as in the prior file).
2. Shift the benchmark par curve **down** by $\Delta\text{Curve}$, rebuild the tree, revalue the bond **holding the OAS fixed** at the Step-1 value → this is $PV_-$.
3. Shift the benchmark curve **up** by the same $\Delta\text{Curve}$, rebuild the tree, revalue at the same fixed OAS → this is $PV_+$.
4. Plug into the formula above.

> **Key insight**: The OAS is held **constant** across the up/down revaluations — effective duration measures sensitivity to the benchmark curve only, holding the credit/liquidity spread fixed.

---

### Worked Example — Meridian Grid Callable Bond

Continuing the 3-year 4.25% bond callable at par in Years 1 and 2, 10% volatility, current price $PV_0 = 101.000$ (OAS = 28.55 bps, from the prior file). Shift the par curve by ±30 bps and revalue at the fixed 28.55 bps OAS:

| Shift | Resulting Value |
|-------|--------------------|
| Down 30 bps | $PV_- = 101.599$ |
| Up 30 bps | $PV_+ = 100.407$ |

$$\text{EffDur} = \frac{101.599 - 100.407}{2 \times 0.0030 \times 101.000} = \mathbf{1.97}$$

A 100 bps parallel increase in rates would reduce this callable bond's value by approximately **1.97%**.

---

### Comparing Effective Durations: Callable, Putable, and Straight

> **Key insight**: The effective duration of a callable *or* putable bond **can never exceed** that of the otherwise-identical straight bond.

| Bond Type | When Option Is Out of the Money | When Option Is In/Near the Money |
|-----------|----------------------------------|-------------------------------------|
| **Callable** | Duration ≈ straight bond (rates high relative to coupon — call unlikely) | Duration **shortens** below straight bond as rates fall (call becomes likely, capping upside) |
| **Putable** | Duration ≈ straight bond (rates low relative to coupon — put unlikely) | Duration **shortens** below straight bond as rates rise (put becomes likely, flooring downside) |

When an embedded option is **deep in the money**, the bond's effective duration converges to that of a straight bond maturing on the **first exercise date** — exercise becomes a virtual certainty.

**Effective duration reference table:**

| Instrument | Effective Duration |
|------------|------------------------|
| Cash | 0 |
| Zero-coupon bond | ≈ Maturity |
| Fixed-rate (option-free) bond | < Maturity |
| Callable bond | ≤ Duration of straight bond |
| Putable bond | ≤ Duration of straight bond |
| Floater (reference rate flat) | Time (years) to next reset |

> A bond's effective duration generally does not exceed its maturity (rare exceptions exist, e.g., certain tax-exempt bonds analyzed after-tax). **Practical use**: adding floaters shortens a fixed-rate portfolio's duration; an issuer can shorten its liability duration by issuing callable debt instead of straight debt.

---

### One-Sided Durations

Effective duration averages the price responses to an up-shift and a down-shift of **equal magnitude** — appropriate for option-free bonds, but **misleading** for bonds with embedded options because their price response is **asymmetric** near the money: a callable bond's upside is capped near the call price; a putable bond's downside is floored near the put price.

$$\boxed{\text{One-sided up-duration and down-duration} = \text{EffDur formula applied separately to only the up-shift or only the down-shift}}$$

**Callable bond example** — 4.5% annual coupon, 5-year maturity, immediately callable at par, 4% flat curve, 15% volatility:

| Scenario | Bond Value | Duration Measure | Value |
|----------|--------------|----------------------|-------|
| At 4% flat curve | 99.75 | Effective duration | 1.39 |
| Rates up 30 bps | 99.17 | One-sided **up**-duration | **1.94** |
| Rates down 30 bps | 100.00 | One-sided **down**-duration | **0.84** |

The callable bond is far more sensitive to rate **increases** (up-duration 1.94) than to rate **decreases** (down-duration 0.84) — the call caps the price near 100, muting the downward-rate response.

**Putable bond example** — 4.1% annual coupon, 5-year maturity, immediately putable at par, same curve/volatility:

| Scenario | Bond Value | Duration Measure | Value |
|----------|--------------|----------------------|-------|
| At 4% flat curve | 100.45 | Effective duration | 3.00 |
| Rates up 30 bps | 100.00 | One-sided **up**-duration | **1.49** |
| Rates down 30 bps | 101.81 | One-sided **down**-duration | **4.51** |

The putable bond is far more sensitive to rate **decreases** (down-duration 4.51) than to rate **increases** (up-duration 1.49) — the put floors the price near 100, muting the downward exposure.

> **Key insight**: **Callable bond → more sensitive to rate increases** (up-duration > down-duration). **Putable bond → more sensitive to rate decreases** (down-duration > up-duration). This asymmetry is greatest when the option is near the money and largely disappears deep out of the money.

---

### Key Rate Durations

Effective duration assumes a **parallel** shift of the whole curve. In practice, curves twist and flex. **Key rate durations** (partial durations) isolate the price sensitivity to a shift in **one specific maturity point** on the par curve, holding all other points fixed — revealing "**shaping risk**" (sensitivity to steepening/flattening).

**Procedure**: identical to effective duration, but only one maturity point on the benchmark curve is shifted at a time.

**Option-free bonds**: the **maturity-matched** key rate duration dominates because the largest cash flow (final coupon + principal) occurs at maturity. For a bond trading exactly **at par**, only the maturity-matched key rate duration is non-zero — all other key rate durations are zero (a defining property of par bonds). Very-low-coupon or zero-coupon bonds can show *negative* key rate durations at shorter maturities, a byproduct of how par-curve shifts propagate into the spot curve.

**Bonds with embedded options — key rate durations depend on time to exercise, not just time to maturity:**

| Bond Type | Low Coupon (option unlikely to be exercised) | High Coupon (option likely to be exercised) |
|-----------|----------------------------------------------------|---------------------------------------------------|
| **Callable** | Behaves like straight bond → **maturity-matched** rate dominates | Behaves like a bond maturing at the **call date** → rate near the **call date** dominates |
| **Putable** | Behaves like a bond maturing at the **put date** → rate near the **put date** dominates | Behaves like straight bond → **maturity-matched** rate dominates |

> **Key insight**: For callable bonds, **higher coupon → higher call likelihood → duration shifts from maturity-matched key rate toward the call-date key rate**. For putable bonds, the relationship is reversed — **higher coupon → lower put likelihood → duration shifts from the put-date key rate toward the maturity-matched key rate**.

---

### Effective Convexity

$$\boxed{\text{EffCon} = \frac{PV_- + PV_+ - [2 \times PV_0]}{(\Delta\text{Curve})^2 \times PV_0}}$$

**Worked example** — same Meridian Grid callable bond, now priced at $PV_0 = 100.785$ (implied OAS = 40 bps), with $PV_- = 101.381$ and $PV_+ = 100.146$ under ±30 bps shifts:

$$\text{EffCon} = \frac{101.381 + 100.146 - (2 \times 100.785)}{(0.0030)^2 \times 100.785} = \mathbf{-47.41}$$

> Two reporting conventions exist in practice: this "raw" figure, or the same number scaled (divided) by 100.

**Comparing effective convexities:**

| Bond Type | Convexity When Option Out of the Money | Convexity When Option Near/In the Money |
|-----------|------------------------------------------|---------------------------------------------|
| **Straight bond** | Positive (low) | Positive (low) — unaffected by embedded options |
| **Callable bond** | Positive, similar to straight bond | **Negative** — upside is capped by the call price, so upside gain << downside loss |
| **Putable bond** | Positive, similar to straight bond | **Positive, and larger** — downside is floored by the put price, so upside gain >> downside loss |

> **Key insight**: **Putable bonds always exhibit positive convexity.** **Callable bonds turn negatively convex once the call option is near the money.** Side by side, a putable bond has *more* upside potential than an otherwise-identical callable bond when rates fall, and *less* downside risk than the callable bond when rates rise.

---

### Question Set Answers

**Q1** — Bond X (callable, 3.75% annual, 3-year, callable at par in Year 1) priced at 100.594 today; down-30bps price = 101.194; up-30bps price = 99.860. Effective duration?
→ $\text{EffDur} = \frac{101.194 - 99.860}{2 \times 0.0030 \times 100.594} = \mathbf{2.21}$

**Q2** — Bond Y (putable, 3.75% annual, 3-year, putable at par in Year 1) priced at 101.330 today; down-30bps price = 101.882; up-30bps price = 100.924. Effective duration?
→ $\text{EffDur} = \frac{101.882 - 100.924}{2 \times 0.0030 \times 101.330} = \mathbf{1.58}$

**Q3** — When interest rates rise, which duration shortens?
→ **Bond Y's (the putable bond).** A rate rise moves the put option into the money, making it more likely the bond is put — shortening its effective duration toward the put date. Bond X's call option moves *out* of the money on a rate rise, so its duration does not shorten from that cause.

**Q4** — When Bond Y's embedded option is in the money, the one-sided durations most likely show the bond is:
→ **More sensitive to a decrease in interest rates.** The put floors the downside on a rate rise, but there is no cap on the upside from a rate decrease.

**Q5** — Bond X's price is most sensitive to shifts in which par rate(s)?
→ **All par rates affect it, but it is most sensitive to the one-year and three-year par rates** — because the call decision hinges on the Year-1 forward rate one year from now, which is most directly shaped by the one- and three-year points on the curve.

**Q6** — Bond X's effective convexity:
→ **Turns negative when the embedded call option is near the money** — the callable bond's upside is capped by the call price when rates fall.

**Q7** — Which is most accurate: Bond Y exhibits negative convexity; Bond X has less upside potential than Bond Y for a given rate decline; or the straight bond corresponding to Bond Y exhibits negative convexity?
→ **Bond X has less upside potential than Bond Y for a given decline in rates.** Putable bonds always have positive convexity (ruling out the first option); straight bonds exhibit low positive (not negative) convexity (ruling out the third).

---

### Exam Tips

- **Effective duration is the only valid duration measure for bonds with embedded options** — modified/Macaulay duration assume fixed cash flows, which is false once optionality is present
- **Effective duration procedure**: fix the OAS from the market price, shift the curve ±ΔCurve, revalue at the fixed OAS both times, plug into $\frac{PV_- - PV_+}{2 \times \Delta\text{Curve} \times PV_0}$
- **Callable/putable duration ≤ straight bond duration**, always — the option can only shorten duration relative to the straight bond, never lengthen it
- **Callable bond duration shortens as rates fall** (call moves in the money); **putable bond duration shortens as rates rise** (put moves in the money)
- **One-sided durations**: callable bonds show **up-duration > down-duration** (more sensitive to rate rises); putable bonds show **down-duration > up-duration** (more sensitive to rate declines) — critical because two-sided effective duration masks this asymmetry near the money
- **Key rate durations** reveal "shaping risk"; for callable bonds duration sensitivity migrates from the maturity-matched point toward the call-date point as coupon (and call likelihood) rises; for putable bonds it migrates from the put-date point toward the maturity-matched point as coupon (and put likelihood) falls
- **Effective convexity**: callable bonds turn **negative** near the money (capped upside); putable bonds are **always positive**, and larger near the money (floored downside) — this pairing is a frequent exam question
- Effective duration and convexity flow directly into capped/floored floaters and convertible bonds (next file) — the same tree-based, OAS-anchored revaluation logic applies throughout
