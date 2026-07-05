## Summary: Interest Rate Options — Black Model Application (CFA Level II — Derivatives)

---

### What Are Interest Rate Options?

**Underlying**: A **reference interest rate** (e.g., 3-month MRR/SORA)

| Option Type | Gains When | Used To |
|------------|-----------|---------|
| **Interest rate call** | Reference rate **rises** above exercise rate | Hedge borrowing costs (borrowers) |
| **Interest rate put** | Reference rate **falls** below exercise rate | Hedge lending returns (lenders/investors) |

**Key connection**: The underlying for an interest rate option is a **FRA rate** (forward rate), not the current spot rate — consistent with Black's futures/forward model approach.

---

### Timing Convention: Advanced Set, Settled in Arrears

| Time Point | Event |
|-----------|-------|
| **$t_{j-1}$** | Option **expires**; interest rate is SET; determines payoff amount |
| **$t_j = t_{j-1} + t_m$** | **Payment made** (settled in arrears) |

**Example**: 3-month MRR option expiring January 15 → payoff determined January 15 → **actual cash payment made April 15**.

> **Critical for valuation**: Discount from **$t_j$** (payment date), NOT from $t_{j-1}$ (option expiration).

---

### The Standard Market Model (Black for Interest Rate Options)

**Call option on interest rate:**
$$\boxed{c = (AP) \times e^{-r t_j} \times [FRA(0,t_{j-1},t_m)N(d_1) - R_X N(d_2)]}$$

**Put option on interest rate:**
$$\boxed{p = (AP) \times e^{-r t_j} \times [R_X N(-d_2) - FRA(0,t_{j-1},t_m)N(-d_1)]}$$

**Where:**
$$d_1 = \frac{\ln[FRA/R_X] + (\sigma^2/2)t_{j-1}}{\sigma\sqrt{t_{j-1}}} \qquad d_2 = d_1 - \sigma\sqrt{t_{j-1}}$$

| Symbol | Meaning |
|--------|---------|
| $AP$ | Accrual period (e.g., $90/360 = 0.25$ for quarterly) |
| $FRA(0,t_{j-1},t_m)$ | Forward rate at Time 0, expiring at $t_{j-1}$, underlying deposit of $t_m$ |
| $R_X$ | Exercise rate (annual basis, in decimal) |
| $\sigma$ | Volatility of continuously compounded changes in the FRA rate |
| $t_{j-1}$ | Time to **option expiration** (used in $d_1$, $d_2$ calculation) |
| $t_j = t_{j-1}+t_m$ | Time to **payment** (used in discount factor $e^{-rt_j}$) |

---

### Five Key Differences from the Standard Black Model

| Feature | Black (Futures) | Standard Market Model (IR Options) |
|---------|----------------|-------------------------------------|
| **Underlying** | Futures price | **FRA rate** $FRA(0,t_{j-1},t_m)$ |
| **Exercise price** | Dollar price $X$ | **Exercise rate** $R_X$ (annual) |
| **Discount period** | To option expiration $T$ | To **payment date** $t_j$ (not expiration $t_{j-1}$) |
| **Accrual adjustment** | None needed | Multiply by **$AP$** (rate × period = payment) |
| **$d_1$, $d_2$ time** | $T$ (expiration) | $t_{j-1}$ (option expiration, not payment) |

---

### Interest Rate Options as Building Blocks

| Combination | Equivalent Instrument |
|------------|----------------------|
| **Long call + Short put** (at exercise = FRA rate) | **Receive-floating, pay-fixed FRA** |
| **Long put + Short call** (at exercise = FRA rate) | **Receive-fixed, pay-floating FRA** |
| **Strip of call options** (caplets) | **Interest rate cap** (hedges floating-rate borrowing) |
| **Strip of put options** (floorlets) | **Interest rate floor** (hedges floating-rate lending) |
| **Long cap + Short floor** (at swap rate) | **Receive-floating, pay-fixed swap** |
| **Long floor + Short cap** (at swap rate) | **Pay-floating, receive-fixed swap** |

---

### Caps and Floors

**Interest rate cap** = portfolio of **caplets** (individual call options on successive settlement periods)
- Buyer receives payment when floating rate > cap rate on each settlement date
- Used by **borrowers** to cap their floating-rate borrowing costs

**Interest rate floor** = portfolio of **floorlets** (individual put options)
- Buyer receives payment when floating rate < floor rate on each settlement date
- Used by **lenders/investors** to guarantee minimum floating-rate income

**At-market relationship (exercise rate = swap rate):**
$$\boxed{\text{Cap value} = \text{Floor value when strike} = \text{Swap rate}}$$

This is because at initiation, the swap (long cap + short floor) has zero value — so cap and floor must have equal value when the strike equals the swap rate.

---

### Example 15 Answers — Singapore Dollar Interest Rate Call

**Setup**: Borrowing S$10M from 15 June to 15 September; current 3-month SORA = 0.55%; FRA rate (15 Jun to 15 Sep) = 0.68%; exercise rate $R_X$ = 0.60%

**Q1 — What is the underlying rate in the Black model?**
→ **B. 0.68%** — the **FRA rate**, not the spot rate.

> Black model uses forward/futures prices (or rates) as the underlying — the FRA rate of 0.68% is what the market implies for 3-month MRR starting June 15. The spot rate (0.55%) is irrelevant for pricing.

**Q2 — Discount factor period:**
- Option priced **15 May**
- Option expires (rate set) **15 June** = $t_{j-1}$
- Payment made **15 September** = $t_j$
→ **C. 15 May to 15 September** — discount from the **payment date** ($t_j$) back to today.

> Critical: Even though the payoff is determined on June 15 (expiration), the **cash payment** is made on September 15 (in arrears). Therefore discount from September 15 back to May 15.

---

### Timeline Visualization

```
15 May          15 June              15 September
   |               |                      |
Price option    Option expires;        Payment made
(t = 0)        Rate set (t_j-1)       (t_j = t_j-1 + tm)

d1, d2 use: t_j-1 (June to May = option life)
Discount from: t_j (September to May = full period)
Underlying: FRA rate (not spot SORA)
```

---

### Practical Applications

| Situation | Hedge Instrument |
|-----------|-----------------|
| Borrower concerned rates will **rise** | Buy **interest rate cap** (strip of calls) |
| Lender/investor concerned rates will **fall** | Buy **interest rate floor** (strip of puts) |
| Convert floating to fixed (cap + floor) | **Interest rate collar** (buy cap, sell floor at lower strike) |
| Zero-cost collar | Buy cap at swap rate, sell floor at swap rate (net = zero initial cost) |

---

### Exam Tips

- **Underlying in Black/Standard Market Model for IR options = FRA rate** (not spot MRR)
- **Discount to $t_j$ (payment date)**, not $t_{j-1}$ (expiration) — advanced set, settled in arrears
- **$d_1$, $d_2$ use $t_{j-1}$** in the calculation (option life, not full period to payment)
- **Accrual period (AP)** scales the option value from a per-annum rate to a per-period payment
- **Rates and exercise prices in decimal** (e.g., 0.68%, not 68%)
- **Cap = strip of calls** (hedges borrowers); **Floor = strip of puts** (hedges lenders)
- **Long cap + Short floor** at swap rate = swap; if equal value → at-market swap has zero value
- **At swap rate**: cap value = floor value (zero-cost collar)
- **Call + Put at FRA rate** → synthetic FRA (long call, short put = receive floating FRA)