---
layout: page
title: "Forward Markets and Parity Conditions"
permalink: /study/02-economics/01-currency-exchange-rates/02-forward-markets-and-parity-conditions/
next: /cfa/study/02-economics/01-currency-exchange-rates/03-uncovered-parity-and-ppp/
prev: /cfa/study/02-economics/01-currency-exchange-rates/01-fx-market-concepts-and-arbitrage/
---
## Summary: Forward Markets and Parity Conditions (CFA Level II — Economics)

---

### Forward Contracts and Forward Points

An **outright forward** is an agreement to exchange currencies at a future date at a rate set today. Any FX transaction settling later than T+2 is a forward.

In professional markets, forwards are quoted as **forward points** — the difference between the forward rate and the spot rate, scaled to the last decimal place of the spot quote:

$$\boxed{\text{All-in forward rate} = \text{Spot rate} + \frac{\text{Forward points}}{10{,}000}}$$

(Divide by 100, not 10,000, for JPY pairs, which quote to only 2 decimal places.)

- **Positive points** → the base currency trades at a **forward premium** (forward > spot).
- **Negative points** → the base currency trades at a **forward discount** (forward < spot).
- The **magnitude** of points grows with the term of the contract (longer maturity → larger point spread), and points are **already scaled** to the maturity — never annualize them.
- To convert points into a bid or offer forward rate, use the same side of the market for both the spot rate and the points (spot bid + points bid = forward bid, etc.), matching whichever side is relevant to the trade (buying vs. selling the base currency).
- **Broken dates** (non-standard maturities) are typically interpolated from the standard-maturity points.
- Bid–offer spreads on forward points widen with the factors already listed for spot (liquidity, size, relationship), **plus a fourth**: **longer maturities → wider spreads**, because (1) forward market liquidity declines with tenor, (2) counterparty credit risk rises, and (3) interest rate risk (sensitivity to rate differentials) rises.

---

### Covered Interest Rate Parity (CIP)

CIP is a **no-arbitrage condition**: a fully currency-hedged foreign money market investment must earn exactly the same return as an equivalent domestic investment. It is the **only** parity condition enforced by arbitrage, so it holds essentially at all times (given liquid markets and free capital flow).

**Derivation intuition** (using P/B notation, where B is the currency being "invested" and P is the price currency): investing 1 unit of currency B at rate $i_B$ must equal converting to currency P at the spot rate, investing at $i_P$, and locking in the forward rate to convert back:

$$\boxed{F_{P/B} = S_{P/B} \times \frac{1+i_P \times t}{1+i_B \times t}}$$

where $t$ is the day-count fraction (Actual/360 for most currencies; **Actual/365 for GBP**).

**Forward premium/discount** (rearranged):

$$\boxed{F_{P/B} - S_{P/B} = S_{P/B} \times \frac{i_P - i_B}{1+i_B \times t} \times t}$$

> **Key insight**: The base currency trades at a forward **premium** ($F_{P/B} > S_{P/B}$) if and only if $i_B > i_P$ — the **higher-yielding currency always trades forward at a discount, and the lower-yielding currency always trades forward at a premium**. This exactly offsets the yield advantage, which is precisely why CIP is arbitrage-free: no combination of borrowing low/lending high and hedging with a forward can generate a riskless profit.

The forward premium/discount is (1) proportional to the spot rate, (2) proportional to the interest-rate differential, and (3) approximately proportional to time to maturity.

---

### Worked Example — Forward Premium/Discount

**Elin Kovač** at Nordkap Capital is quoting a 270-day forward on CAD/AUD (AUD is the base currency).

| Item | Value |
|------|-------|
| Spot (CAD/AUD) | 0.9000 |
| 270-day MRR (AUD, base) | 1.47% |
| 270-day MRR (CAD, price) | 0.41% |

$$t = 270/360 = 0.75$$
$$F_{P/B} - S_{P/B} = 0.9000 \times \frac{0.0041 - 0.0147}{1 + 0.0147 \times 0.75} \times 0.75 = -0.0071$$

Because AUD (the base currency) has the **higher** interest rate, the AUD trades at a forward **discount** of roughly 71 CAD pips relative to spot — consistent with CIP.

---

### The Mark-to-Market Value of a Forward Contract

A forward's mark-to-market (MTM) value is **zero at inception** and then changes as spot rates and interest rates move. To close out (or value) an open forward position:

1. **Create an offsetting forward** in the opposite direction, same notional, same original settlement date.
2. **Determine the new all-in forward rate** for that offsetting position — use the **bid** side if selling the base currency, the **offer** side if buying it.
3. **Calculate the settlement-date cash flow** = notional × (original forward rate − new offsetting forward rate), with the sign depending on whether the long position's currency appreciated (inflow) or depreciated (outflow).
4. **Discount that cash flow to the present** using the money market rate of the currency in which the cash flow is denominated.

$$\boxed{\text{MTM value} = \frac{\text{Notional} \times (\text{Original forward rate} - \text{Offsetting forward rate})}{1 + i \times t}}$$

---

### Worked Example — Mark-to-Market Valuation

Six months ago, **Elin Kovač** bought GBP 10 million forward against the AUD at an all-in rate of **1.8100 AUD/GBP** (six-month maturity). Three months later (three months remaining to settlement), she wants to mark the position to market.

| Item | Value |
|------|-------|
| Spot (AUD/GBP) | 1.8210/1.8215 |
| Three-month forward points | 130/140 |
| Three-month AUD MRR (annualized) | 2.40% |

**Step 1–2**: To close out a long GBP position, Elin needs an **offsetting sale** of GBP 10 million forward. Selling the base currency (GBP) means using the **bid** side:

$$\text{All-in forward rate} = 1.8210 + \frac{130}{10{,}000} = 1.8340$$

**Step 3**: Settlement-date cash flow (GBP nets to zero; AUD does not):

$$(1.8340 - 1.8100) \times 10{,}000{,}000 = +\text{AUD } 240{,}000$$

This is an **inflow** because Elin was long GBP and GBP appreciated (AUD/GBP rose).

**Step 4**: Discount at the 3-month AUD MRR:

$$\text{MTM value} = \frac{240{,}000}{1 + 0.0240 \times (90/360)} = \text{AUD } 238{,}569$$

The original long-GBP forward now has a mark-to-market value of **+AUD 238,569**.

---

### Forward Rate Parity — A First Look

**Forward rate parity** states that the forward exchange rate is an **unbiased predictor** of the future spot exchange rate — not a perfect forecast, but one that is, on average, correct. It is built by combining CIP (which we've just covered) with **uncovered interest rate parity**, covered in the next file. Because CIP holds by arbitrage but uncovered interest rate parity does *not* hold reliably in practice, **forward rate parity itself tends to fail in the short run** — a theme this module returns to when tying all the parity conditions together.

---

### Question Set Answers

**Q1.** The mid-market CAD/AUD spot rate is 0.9000, the 270-day AUD MRR is 1.47%, and the 270-day CAD MRR is 0.41%. Is CAD or AUD trading at a forward premium?
→ **Answer: CAD (the price currency) trades at a forward premium**, since AUD (the base currency) has the higher interest rate — CIP requires the higher-yield currency (AUD) to trade at a forward discount.

**Q2.** A trader bought NZD 10 million forward at 0.7900 (USD/NZD, six months), and three months later marks the position to market with spot 0.7825/0.7830, 3-month points −12.1/−10.0, and NZD/USD 3-month MRRs of 3.31%/0.31%. Should the trader use the bid or offer side to compute the offsetting rate?
→ **Answer:** The original trade was a *sale* of NZD forward (long USD exposure via selling NZD), so the offsetting trade is a *purchase* of NZD forward — use the **offer** side: 0.7830 + (−10.0/10,000) = 0.7820. Comparing 0.7900 (original) to 0.7820 (offsetting) determines the cash flow, then discount at the 3-month USD MRR.

**Q3.** Why does a longer-dated forward typically carry a wider bid–offer spread than a shorter-dated one on the same currency pair?
→ **Answer:** Declining liquidity, rising counterparty credit risk, and rising interest-rate sensitivity as maturity extends.
