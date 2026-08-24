---
layout: page
title: Callable and Putable Bond Value Relationships
permalink: /study/06-fixed-income/03-valuation-with-embedded-options/02-callable-putable-bond-relationships/
prev: /cfa/study/06-fixed-income/03-valuation-with-embedded-options/01-introduction/
next: /cfa/study/06-fixed-income/03-valuation-with-embedded-options/03-valuation-with-interest-rate-volatility/
---
## Summary: Callable and Putable Bond Value Relationships (CFA Level II — Fixed Income)

---

### The Core Valuation Identity

Under the **arbitrage-free framework**, the value of a bond with embedded options equals the sum of the arbitrage-free values of its parts: the **straight (option-free) bond** and the **embedded option(s)**.

**Callable bond** — the issuer holds the call option, so the investor is long the bond but short the call:

$$\boxed{V_{callable} = V_{straight} - V_{call}}$$

$$\boxed{V_{call} = V_{straight} - V_{callable}}$$

**Putable bond** — the investor holds the put option, so the investor is long both the bond and the put:

$$\boxed{V_{putable} = V_{straight} + V_{put}}$$

$$\boxed{V_{put} = V_{putable} - V_{straight}}$$

> **Key insight**: The call option always *subtracts* value from the investor's perspective (issuer option); the put option always *adds* value (investor option). Never confuse the sign — this is the single most common error on this topic.

---

### Valuation of Default-Free, Option-Free Bonds — A Refresher

An option-free bond's future cash flows are certain, so each cash flow is discounted at the **spot rate** matching its payment date. Spot, par, and forward rates are equivalent representations of the same yield curve — knowing one lets you derive the others.

**Running example — Meridian Grid Corp.** Consider a default-free, 3-year, 4.25% annual-coupon bond. The par curve, derived spot curve, and one-year forward curve are:

| Maturity | Par Rate | Spot Rate | 1-Year Forward Rate |
|----------|----------|-----------|----------------------|
| 1 year | 2.500% | 2.500% | 2.500% (today) |
| 2 years | 3.000% | 3.008% | 3.518% (1 year from now) |
| 3 years | 3.500% | 3.524% | 4.564% (2 years from now) |

Valuing the straight bond by discounting at spot rates (equivalently, by discounting one period at a time using the forward rates) gives:

$$V_{straight} = \frac{4.25}{1.025} + \frac{4.25}{(1.03008)^2} + \frac{104.25}{(1.03524)^3} = \mathbf{102.114}$$

This is the **benchmark value** against which the callable and putable versions of the same bond will be compared.

---

### Valuation of Callable/Putable Bonds in the Absence of Interest Rate Volatility

When interest rate volatility is zero, the one-year forward rates are known with certainty, so there is no need for a binomial tree — cash flows can be discounted one period at a time using the forward curve, checking at each exercise date whether the option holder would rationally exercise.

**Optimal exercise logic:**

| Bond Type | Exercised By | Exercise Rule |
|-----------|--------------|----------------|
| **Callable** | Issuer | Exercise (call) if PV of remaining cash flows **>** call price |
| **Putable** | Investor | Exercise (put) if PV of remaining cash flows **<** put price |

> **Key insight**: A rational issuer never calls a bond trading (on a PV basis) below the call price, and a rational investor never puts a bond trading above the put price — doing so would be economically irrational. At the boundary, the bond's value is capped (callable) or floored (putable) at the exercise price.

---

### Worked Example — Callable Bond at Zero Volatility

Meridian Grid's bond is now **Bermudan-style callable at par (100)** one year and two years from today. Working backward from maturity using the forward rates above:

**Step 1 — Year 2 node**: Discount the Year 3 cash flow (104.250) back one period at the Year-2 forward rate (4.564%):

$$\frac{104.250}{1.04564} = 99.700$$

This is **below** the call price of 100 → the issuer does **not** call. Value carried forward = 99.700.

**Step 2 — Year 1 node**: Add the Year 2 coupon (4.250) to 99.700, then discount at the Year-1 forward rate (3.518%):

$$\frac{4.250 + 99.700}{1.03518} = 100.417$$

This **exceeds** the call price of 100 → the issuer **calls** the bond. Value is reset to **100.000**.

**Step 3 — Year 0 (today)**: Add the Year 1 coupon (4.250) to the reset value of 100, then discount at today's rate (2.500%):

$$V_{callable} = \frac{4.250 + 100.000}{1.025} = \mathbf{101.707}$$

**Value of the call option:**

$$V_{call} = 102.114 - 101.707 = \mathbf{0.407}$$

---

### Worked Example — Putable Bond at Zero Volatility

Same bond, now **Bermudan-style putable at par (100)** one year and two years from today.

**Step 1 — Year 2 node**: Same as before, PV of remaining cash flows = 99.700, which is **below** the put price of 100 → the investor **puts**. Value reset to **100.000**.

**Step 2 — Year 1 node**: Add the Year 2 coupon (4.250) to the reset value (100), discount at 3.518%:

$$\frac{4.250 + 100.000}{1.03518} = 100.707$$

This **exceeds** the put price of 100 → the investor does **not** put. Value carried forward = 100.707.

**Step 3 — Year 0**: Add the Year 1 coupon (4.250) to 100.707, discount at 2.500%:

$$V_{putable} = \frac{4.250 + 100.707}{1.025} = \mathbf{102.397}$$

**Value of the put option:**

$$V_{put} = 102.397 - 102.114 = \mathbf{0.283}$$

> **Note**: These are the same underlying bond and the same deterministic forward curve — only the exercise decision differs. The call option shaves value off (101.707 < 102.114); the put option adds value on (102.397 > 102.114).

---

### Question Set Answers

**Q1** — Bond A (option-free), Bond B (callable at par in Years 2–3), Bond C (Bond B's features plus putable at par in Year 1). Relative to Bond A, is Bond B's value lower, the same, or higher?
→ **Lower.** The call option is an issuer option that decreases value for the investor — price appreciation is capped relative to the option-free bond when rates fall.

**Q2** — Relative to Bond B, is Bond C's value lower, the same, or higher?
→ **Higher.** Bond C adds a put option (investor option), which increases value relative to Bond B.

**Q3** — Given an anticipation of *rising* interest rates, what happens to Bond C?
→ **It will most likely be put by the bondholders.** Rising rates push bond prices down; investors exercise the put to reinvest proceeds at the higher prevailing yield.

---

### Exam Tips

- **Memorize the signs**: $V_{callable} = V_{straight} - V_{call}$; $V_{putable} = V_{straight} + V_{put}$ — call subtracts, put adds
- **Zero-volatility valuation** = simple backward walk through the one-year forward rates, comparing PV of remaining cash flows to the exercise price at each call/put date — no tree needed yet
- **Issuer calls when PV of future cash flows > call price**; **investor puts when PV of future cash flows < put price** — reset the node value to the exercise price when the condition triggers
- At zero volatility, the callable bond value (101.707) < straight bond value (102.114) < putable bond value (102.397) for the identical underlying bond — this ordering always holds
- The next file introduces interest rate volatility and the full binomial-tree backward-induction framework — the zero-volatility approach here is the deterministic special case (σ = 0) of that broader framework
