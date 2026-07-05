## Summary: Active Bond Portfolio Management & Rolling Down the Yield Curve (CFA Level II — Fixed Income)

---

### The Central Principle

If spot rates evolve **exactly as implied by today's forward curve**, then **all bonds** earn the **same one-period risk-free rate** regardless of maturity over that period.

$$\boxed{\text{If future spot rates = today's forward rates} \implies \text{All bonds earn } z_1 \text{ over the first period}}$$

**Proven numerically** (Example: $z_1=9\%$, $z_2=10\%$, $z_3=11\%$, $f_{1,1}=11.01\%$, $f_{1,2}=12.01\%$):

| Bond | Buy Price | Sell Price (1yr later) | Return |
|------|-----------|------------------------|--------|
| 1-yr zero | 91.74 | 100.00 (maturity) | **9%** |
| 2-yr zero | 82.64 | 90.08 (= 100/1.1101) | **9%** |
| 3-yr zero | 73.12 | 79.71 (= 100/(1.1201)²) | **9%** |

---

### When Spot Rates Deviate from Forward Rates

If the realized spot curve **differs** from today's forward curve, bonds of different maturities will earn **different** returns.

**Example**: Assume flat 8% yield curve today. Three possible outcomes for spot curve at Year 1:

| Projected Future Spot Rate | Expected Bond Return | Comparison to YTM |
|---------------------------|---------------------|-------------------|
| = 8% (forward rate realized) | **8.00%** | = YTM |
| = 9% (above forward rate) | **6.24%** | < YTM |
| = 7% (below forward rate) | **9.81%** | > YTM |

**General rule:**

| Manager's Rate Expectation | Expected Return |
|---------------------------|----------------|
| Future spot **below** forward rate | **> One-period risk-free rate** (bond appears undervalued) |
| Future spot **above** forward rate | **< One-period risk-free rate** (bond appears overvalued) |
| Future spot **= forward rate** | **= One-period risk-free rate** |

---

### Rolling Down the Yield Curve (Ride the Yield Curve)

**Strategy**: Buy bonds with **longer maturity than investment horizon**, betting the yield curve remains **stable** and upward-sloping.

**Why it works on an upward-sloping curve:**
1. Bond purchased at higher yield (lower price) for longer maturity
2. As time passes and maturity shortens, bond is valued at lower yields → **price rises**
3. Higher coupon income from buying the longer-maturity (higher-yield) bond

**Total bond return decomposition:**
$$\text{Bond return} = \text{Coupon income} + \text{Reinvestment income} \pm \text{Capital gain/loss}$$

---

### Numerical Example — Roll-Down Strategy

**Spot rates (par bonds)**: 1yr=2%, 3yr=4%, 4yr=5%, 5yr=6%, 6yr=7%

**Investor horizon**: 2 years

| Strategy | Bond | Coupon | 2-Year Total Return | Annualized Return |
|---------|------|--------|---------------------|------------------|
| **Match maturity** | 5-yr bond, 6% | 6% | 117.67 | **8.48%** |
| **Roll-down (longer)** | 6-yr bond, 7% | 7% | 121.23 | **10.10%** |

**Source of ~2% excess return from roll-down:**
- Higher **coupon income** (7% vs. 6%)
- Larger **capital gain**: sold as 4-yr bond at 5% yield ($107.09) vs. 3-yr bond at 4% yield ($105.55)

---

### The "Carry Trade" Connection

**Maturity spread carry trade**: Borrow **short-term** (low rate) → invest in **long-term** bonds (high rate) = same economic logic as rolling down the yield curve.

**Common in**: Post-2008 environment with steep upward-sloping curve (central banks holding short rates at zero).

**Key risk**: Unexpected increase in future spot rates (e.g., inflation spike) → realized return falls below forward-implied return → loss.

---

### Example 7 — Knowledge Check Answers

**Q1 (Roll-down strategy buys bonds with maturities):**
→ **B. Longer than the investor's investment horizon** — the bond "rolls down" from a higher to lower yield point on the curve as maturity approaches, generating a capital gain.

**Q2 (Bond overvalued if expected spot rate is):**
→ **C. Higher than the current forward rate** — if future spot rate > forward rate, the bond will be discounted at a higher rate than the market implies → bond's market price exceeds the investor's estimated intrinsic value → bond is **overvalued** from the investor's perspective. (Expected return will be < one-period risk-free rate.)

**Q3 (6% coupon, 3-yr £100 bond, flat 6% → flat 7% next year):**
- Sell price at Year 1: Two years remaining, YTM = 7%
$$P = \frac{6}{1.07} + \frac{106}{(1.07)^2} = £98.19$$
- Total return = (98.19 + 6 - 100)/100 = **4.19%**
→ **A. 4.19%** — rate rise above forward rate → return below YTM (6%)

**Q4 (Forward contract price increases when):**
→ **B. Future spot rates are lower than predicted by current forward rates** — lower future spot rates → bond priced at lower discount → higher price → forward contract gains value.

---

### Strategy Summary

```
Key insight: Forward rates = breakeven rates for active management

If you expect future spot rates to be BELOW forward rates:
  → Buy longer-maturity bonds (roll-down/ride the yield curve)
  → Return > one-period risk-free rate ✓

If you expect future spot rates to be ABOVE forward rates:
  → Sell longer-maturity bonds (or stay short)
  → Return < one-period risk-free rate ✗

Roll-down (upward-sloping curve, stable rates):
  → Buy maturity > investment horizon
  → Earn: higher coupon + capital gain from price rising as bond ages
  → Risk: yield curve shifts up → capital gain becomes loss
```

---

### Exam Tips

- **All bonds earn $z_1$ over one period** when future spot rates = today's forward rates — crucial theoretical foundation
- **Expected spot < forward** → bond undervalued → buy → expect return **above** risk-free rate
- **Expected spot > forward** → bond overvalued → sell → expect return **below** risk-free rate
- **Roll-down strategy**: buy longer maturity than horizon on upward-sloping curve
- **Carry trade (maturity spread)**: borrow short, lend long — same concept applied with leverage
- **Gap between projected future spot and forward rate** drives the difference between expected return and YTM
- For roll-down exam calculations: compute sell price at holding period end using the future (expected unchanged) yield for the bond's remaining maturity