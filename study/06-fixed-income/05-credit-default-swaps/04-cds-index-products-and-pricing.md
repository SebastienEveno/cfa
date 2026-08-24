---
layout: page
title: Credit Default Swaps — Index Products and Pricing
permalink: /study/06-fixed-income/05-credit-default-swaps/04-cds-index-products-and-pricing/
prev: /cfa/study/06-fixed-income/05-credit-default-swaps/03-cds-market-features-and-settlement/
next: /cfa/study/06-fixed-income/05-credit-default-swaps/05-cds-valuation-changes-and-applications/
---
## Summary: Credit Default Swaps — Index Products and Pricing (CFA Level II — Fixed Income)

---

### CDS Index Products

Markit (now IHS Markit) constructs and maintains the standard CDS indexes; the traded instruments based on those indexes pay off on any default among the covered entities.

**The major index families:**

| Index | Region | Credit quality | Constituents |
|---|---|---|---|
| **CDX IG** | North America | Investment-grade | 125 entities |
| **CDX HY** | North America | High-yield | 100 entities |
| **iTraxx Main** | Europe/Asia/Australia | Investment-grade | 125 entities |
| **iTraxx Crossover** | Europe/Asia/Australia | High-yield | Up to 75 entities |

- All CDS indexes are **equally weighted** — a 125-entity index allocates 1/125 of notional to each name.
- **Investment-grade indexes** are quoted in **spread terms**; **high-yield indexes** are quoted in **price terms** (analogous to bonds being quoted as yield vs. price) — both use standardized coupons.

**Roll conventions:**

- Markit updates index constituents **every six months**, creating a new **series** while retaining the old one.
- The newest series is the **on-the-run** series; older series become **off-the-run**.
- Moving a position from an old series to the new one is called a **roll** — this is why the March/September maturity dates (aligned with the roll) are the most liquid.
- If a constituent defaults, it is **removed from the index** and settled as a single-name CDS based on its proportional weight; the index continues with a **smaller notional**.

**Worked example — hedging with an index:**

> Castellan Capital sells $500 million of protection using the CDX IG index (125 entities). Concerned about one constituent, Meridian Industrial Corp, Castellan separately buys $3 million of single-name protection on Meridian, which then defaults.

- Index exposure to Meridian = $500m / 125 = **$4 million** (long credit exposure, since Castellan sold index protection)
- Single-name hedge = **$3 million** (short credit exposure, since Castellan bought protection)
- **Net notional exposure to Meridian** = $4m − $3m = **$1 million** (75% hedged)
- **Remaining index notional after settlement** = $500m − $4m = **$496 million**

---

### Market Characteristics

CDS trade **over-the-counter** — by phone, instant message, or dealer messaging systems — with trades reported to central data repositories (e.g., the DTCC in the US).

| Feature | Detail |
|---|---|
| **Central clearing** | Now required for many CDS; roughly half of the market is centrally cleared today, up from ~10% in 2010 |
| **Market size** | Gross notional has **shrunk substantially since the 2008 crisis** (from roughly $58 trillion in 2007 to roughly $7–8 trillion more recently) |
| **Concentration** | More than 90% of CDS trading activity is now concentrated in five major indexes (iTraxx Europe, iTraxx Europe Crossover, iTraxx Europe Senior Financials, CDX IG, CDX HY) |

> **Key insight — liquidity ranking**: **Index CDS are more liquid than single-name CDS** (average daily volume several multiples higher), and within each market, **investment-grade CDS are more liquid than high-yield CDS**. Standardization is what drives this: pooling diverse single-name risk into a common, heavily traded instrument concentrates liquidity that would otherwise be fragmented across hundreds of illiquid single names.

---

### Basics of Valuation and Pricing

**The core pricing insight**: CDS pricing separates two components — a **credit view** component (the market's honest assessment of default probability and loss severity) and a set of **technical/supply-demand factors** (liquidity, dealer positioning, financing costs) that cause the traded spread to deviate from that "pure" credit assessment. The **protection leg / premium leg** framework below prices the credit-view component; the deviation from it is what basis trading (covered in the next file) tries to exploit.

**The protection leg and premium leg:**

```
Protection Buyer ---------- Premium Leg (coupon payments) ----------> Protection Seller
                    (PV of contingent coupons, weighted by survival probability)

Protection Buyer <--------- Protection Leg (contingent payoff) ------ Protection Seller
                    (PV of expected loss, weighted by default probability)

              Upfront payment = PV(Protection leg) - PV(Premium leg)
```

- **Protection leg** = PV of the expected loss the seller may have to pay, built from the **loss given default (LGD)** and the **probability of default (POD)**, both discounted at the risk-free rate.
- **Premium leg** = PV of the standardized coupon payments the buyer promises, which are themselves contingent on the reference entity **surviving** to each payment date (weighted by the **hazard rate** — the conditional probability of default given survival to that point).
- Whichever leg has the greater present value determines who pays the **upfront payment** at inception.

**A simple one-period intuition:**

$$\text{CDS spread} \approx (1 - RR) \times POD$$

For example, a 2% probability of default and a 60% recovery rate imply a fair one-period spread of roughly $(1-0.60) \times 0.02 = 0.008$, or **80 bps**.

> Probability of default (POD) is a **conditional** probability over time (the **hazard rate**) — the probability of default in year 2 is conditional on having survived year 1. A low *annual* hazard rate can still compound into a high *cumulative* POD over a long horizon: e.g., a constant 2% annual hazard rate implies a 10-year survival probability of $0.98^{10} = 81.7\%$, i.e., an 18.3% cumulative POD — even though no single year looks risky in isolation.

**Standardized coupons and the upfront premium**

Because the reference entity's true (fair) credit spread will rarely equal the standardized coupon (100 bps IG / 500 bps HY), the present-value gap between the two legs is settled as an upfront payment:

$$\boxed{\text{Upfront payment (\% of notional)} \approx (\text{Credit spread} - \text{Fixed coupon}) \times \text{Duration}}$$

- If **credit spread > fixed coupon** → protection is "cheap" at the standard coupon → the **protection buyer pays** the upfront premium to the seller.
- If **credit spread < fixed coupon** → protection is "expensive" at the standard coupon → the **protection seller pays** the upfront premium to the buyer.
- Duration here is **effective duration**, since the premium leg's cash flows are contingent on survival (not fixed, as with a plain bond).

The upfront amount also converts to a **CDS price** per 100 of par:

$$\boxed{\text{Price of CDS} = 100 - \text{Upfront premium (\%)}}$$

**Worked example — upfront premium (Meridian Industrial Corp):**

> Castellan Capital wants to buy 5-year protection on Meridian Industrial Corp, an investment-grade name. Meridian's 5-year credit spread is **300 bps**, the CDS duration is **4.2 years**, and the standardized IG coupon is **100 bps**.

$$\text{Upfront premium} \approx (300\text{bps} - 100\text{bps}) \times 4.2 = 840\text{bps} = 8.4\% \text{ of notional}$$

- Since the credit spread (300 bps) exceeds the fixed coupon (100 bps), **Castellan (the protection buyer) pays** the 8.4% upfront to Northbridge (the protection seller).
- On a $10 million notional: upfront payment = $840,000, **plus** ongoing quarterly coupon payments at 100 bps/year.
- CDS price = $100 - 8.4 = 91.6$ per 100 of par.

Now consider a different case where the seller pays: Northbridge separately sells 5-year protection on a stronger investment-grade name whose credit spread is only **60 bps**, with a CDS duration of 4 years, still against the standard 100 bps coupon.

$$\text{Upfront premium} \approx (60\text{bps} - 100\text{bps}) \times 4 = -160\text{bps} = -1.6\%$$

- The **negative** sign means the direction reverses: **Northbridge (the protection seller) pays** the 1.6% upfront to the protection buyer, because 100 bps is "too rich" a coupon for only 60 bps of true credit risk.
- CDS price = $100 - (-1.6) = 101.6$ per 100 of par.

---

### The Credit Curve and CDS Pricing Conventions

The **credit curve** plots a reference entity's CDS spread against tenor, analogous to the term structure of interest rates but for credit risk rather than pure time value.

| Curve shape | Interpretation |
|---|---|
| **Upward sloping** (most common) | Greater probability of default in later years than near term — the "normal" shape, much like the yield curve |
| **Downward sloping / inverted** | Greater near-term default probability than long-term — typically signals **acute financial distress** (the market believes the entity may not survive the near term, but conditional on survival, longer-run risk looks comparatively lower) |
| **Flat** | Constant hazard rate — but note the curve is never *perfectly* flat even with a constant hazard rate, because of discounting effects across maturities |

**CDS pricing conventions — "Big Bang" and "Small Bang"**

The 2009 ISDA **Big Bang Protocol** standardized North American single-name CDS around fixed coupons plus upfront payments (replacing the older convention of setting the coupon equal to the market spread) and hardwired the auction settlement process into all contracts. The companion **Small Bang Protocol** extended standardized auction settlement to **restructuring** credit events. Together, they moved the market from quoting a freely floating **par spread** (coupon = spread, no upfront) to quoting **standardized coupon + upfront** — the convention used throughout this and the prior CFA formulas.

**Worked example — reading the curve:**

> Meridian's 5-year CDS trades at 300 bps and its 10-year CDS trades at 420 bps.

1. If the 5-year spread is unchanged but the 10-year spread widens to 520 bps, the curve **steepens**: Meridian's near-term risk is unchanged, but its longer-term outlook has deteriorated (e.g., a maturity wall or refinancing risk further out).
2. If the 10-year spread is unchanged but the 5-year spread widens sharply (say, to 600 bps, inverting the curve), the curve **inverts**: near-term risk has spiked — a liquidity or covenant problem that must be resolved soon, with the market pricing a real chance the company does not survive to face its longer-term obligations at all.

---

### Question Set Answers

**Q1.** A 10-year CDS on a high-yield company has a credit spread of 650 bps and a duration of 7.5 years; the standardized high-yield coupon is 500 bps. What is the approximate upfront premium, and who pays it?
**A.** Upfront $\approx (650 - 500) \times 7.5 = 1{,}125$ bps $= 11.25\%$ of notional. Since the credit spread exceeds the fixed coupon, the **protection buyer pays** the upfront premium to the protection seller.

**Q2.** A protection seller on a 5-year investment-grade name must pay a 2.5% upfront premium; the CDS duration is 5 years. What is the company's implied credit spread (fixed coupon = 100 bps)?
**A.** Upfront premium (signed, seller-pays) = −2.5% ÷ 5 years = −50 bps. Credit spread = fixed coupon + signed upfront-per-year = 100 bps − 50 bps = **50 bps**. Consistent with a seller-pays outcome, since 50 bps < the 100 bps standardized coupon.

**Q3.** Why is index CDS generally more liquid than single-name CDS?
**A.** Standardization concentrates trading interest: rather than hundreds of thinly traded single names, participants transact a small number of highly standardized, broadly diversified index contracts, producing average daily volumes several multiples higher than any single-name CDS.

---

### Exam Tips

- **Upfront premium % ≈ (Credit spread − Fixed coupon) × Duration** — memorize the sign convention: **spread > coupon → buyer pays**; **spread < coupon → seller pays**
- **Price of CDS = 100 − Upfront premium (%)** — a below-par price means the buyer paid upfront (higher credit risk than the standard coupon implies)
- Duration used is **effective duration** (coupon leg is contingent on survival)
- **Upward-sloping credit curve** = normal (more risk further out); **downward-sloping/inverted** = near-term distress signal
- **CDX** = North America; **iTraxx** = Europe/Asia/Australia; **IG indexes** (125 names) quoted in spread; **HY indexes** (100 CDX / up to 75 iTraxx Crossover) quoted in price
- Indexes **roll every six months**; **on-the-run** = newest series, most liquid; March/September maturities align with the roll
- When a constituent defaults, it's settled individually and the index continues at a **smaller notional**
- **Liquidity ranking**: Index CDS > single-name CDS; Investment-grade > high-yield
- **Big Bang Protocol (2009)**: standardized coupon + upfront convention, hardwired auction settlement; **Small Bang Protocol**: extended auction settlement to restructuring events
- **CDS spread ≈ (1 − Recovery rate) × Probability of default** — the basic one-period fair-value building block
