---
layout: page
title: "FX Market Concepts and Arbitrage"
permalink: /study/02-economics/01-currency-exchange-rates/01-fx-market-concepts-and-arbitrage/
next: /cfa/study/02-economics/01-currency-exchange-rates/02-forward-markets-and-parity-conditions/
---
## Summary: FX Market Concepts and Arbitrage (CFA Level II — Economics)

---

### Quote Conventions

**An exchange rate is the price of the base currency (B) expressed in terms of the price currency (P), written P/B.**

$$\boxed{S_{P/B} = \text{Number of units of the price currency needed to buy 1 unit of the base currency}}$$

**Example**: USD/EUR = 1.1650 → the euro (base currency) costs USD 1.1650.

> **Key insight**: Notation is not standardized across the industry (JPY/USD, USD:JPY, $/¥ can all appear). The CFA curriculum's "domestic/foreign" (f/d) shorthand is only a teaching device — professional FX desks always describe pairs by price/base currency, because "domestic" and "foreign" depend on where the trader sits.

**Settlement**: spot rates settle **T+2** for most pairs (the exception is **CAD/USD**, which settles **T+1**). Anything settling later than T+2 is a **forward contract**.

**Bid–offer quotes**: dealers quote two-sided prices —

| Term | Meaning |
|------|---------|
| **Bid** | Price (in P) at which the dealer will **buy** 1 unit of the base currency |
| **Offer (ask)** | Price (in P) at which the dealer will **sell** 1 unit of the base currency |

- The offer is **always** ≥ the bid; the difference is the **bid–offer spread**, the dealer's compensation for providing liquidity.
- The client who requests the quote chooses to **"hit the bid"** (sell the base currency) or **"pay the offer"** (buy the base currency) — the dealer has no choice once quoting.
- A **pip** is the smallest quoted increment: 0.0001 for most pairs, but 0.01 for JPY pairs (quoted to only 2 decimal places).
- **Interbank market** quotes (dealer-to-dealer) are tighter than the quotes dealers show retail/corporate clients; dealers typically lay off client flow in the interbank market to earn the spread.

**What drives the size of the bid–offer spread:**

| Factor | Effect |
|--------|--------|
| **Currency pair** | Major pairs (USD/EUR, JPY/USD, USD/GBP) are deep and liquid → tight spreads. Obscure crosses (e.g., MXN/CHF) → wide spreads |
| **Time of day** | Tightest when London and New York overlap (≈8:00–11:00 a.m. NY time). Widens after London closes; widest between NY close and Asia open (only Sydney active) |
| **Market volatility** | Geopolitical shocks, market crashes, major data releases (e.g., US non-farm payrolls) → dealers widen spreads to compensate for risk |
| **Transaction size** | Larger deals (e.g., USD 50 million) get wider spreads than small ones (USD 1 million); "retail" sizes (<1 million units) get the widest spreads of all |
| **Dealer–client relationship** | Repeat business / cross-sell opportunities (bonds, equities) → tighter spreads. Credit risk is a minor factor given T+2 settlement |

---

### Nominal versus Real Exchange Rates

The **nominal exchange rate** is simply the quoted market rate ($S_{P/B}$) — it says nothing about relative purchasing power. The **real exchange rate** adjusts the nominal rate for the relative price levels (inflation) of the two countries, and measures whether a currency has gained or lost competitiveness relative to a base period.

$$\boxed{S^{real}_{P/B} = S_{P/B} \times \frac{CPI_B}{CPI_P}}$$

> **Key insight**: If relative purchasing power parity holds exactly, the real exchange rate is constant over time (indexed to 1.0 in the base period). A **rise** in the real exchange rate above its base-period level means the base currency has become **overvalued** in real terms (the base country's goods have gotten relatively more expensive); a **fall** signals **undervaluation**. This concept is developed further, with a full worked example, in the purchasing power parity discussion later in this module.

---

### Arbitrage Constraint 1 — Consistency with the Interbank Market

A dealer's bid–offer quote to a client cannot be inconsistent with the prevailing interbank market, or riskless arbitrage results:

- The dealer's **bid** cannot be **higher** than the current interbank **offer**.
- The dealer's **offer** cannot be **lower** than the current interbank **bid**.

If violated, arbitrageurs buy from the cheaper source and sell to the more expensive one until prices realign.

---

### Arbitrage Constraint 2 — Triangular (Cross-Rate) Arbitrage

If a currency pair A/C is not directly quoted, it can be **implied** from quotes on A/B and C/B (both against a common third currency B). This implied cross rate must be consistent with the direct quotes for A/B and C/B — otherwise a **triangular arbitrage** opportunity exists.

**Rule of thumb**: A bid or offer exchange rate always refers to the bid or offer for the currency in the **denominator** (the base currency) of that quote.

**Two-step process:**

1. Write the trade as a chain of transactions that cancel out the common currency:

$$\frac{A}{C} = \frac{A}{B} \times \frac{B}{C}$$

2. For each leg, determine whether you are **buying** or **selling** the base currency of that leg, and select the **offer** (if buying) or **bid** (if selling) accordingly. To calculate the **implied bid** for A/C, multiply the **bid** rates of the two component quotes; for the **implied offer**, multiply the **offer** rates — **provided both component quotes already have the common currency in the denominator**. If not, one quote must first be **inverted** (and bid/offer swapped, since inverting a bid produces the offer of the inverse quote, and vice versa).

> **Key insight**: The implied cross-rate bid must always be less than the implied cross-rate offer, exactly as with any single spot quote — this is the no-arbitrage check.

---

### Worked Example — Triangular Arbitrage

**Elin Kovač**, an FX strategist at **Nordkap Capital**, observes the following interbank spot quotes:

| Pair | Bid/Offer |
|------|-----------|
| USD/EUR | 1.1649/1.1651 |
| JPY/USD | 105.39/105.41 |
| SEK/USD | 9.6300/9.6302 |

**Step 1 — Implied SEK/EUR cross rate.** Both SEK/USD and USD/EUR already have USD in the denominator, so Elin can multiply directly:

$$\text{SEK/EUR bid} = 9.6300 \times 1.1649 = 11.2180$$
$$\text{SEK/EUR offer} = 9.6302 \times 1.1651 = 11.2201$$

The market-implied SEK/EUR cross rate is **11.2180/11.2201**.

**Step 2 — A dealer quotes SEK/EUR at 11.2500/11.2600 to a client wanting to sell EUR.** Since the dealer's **bid** (11.2500) is **higher** than the interbank-implied **offer** (11.2201), the dealer is offering to buy EUR too richly. Elin can:
1. Buy EUR in the interbank market at the offer (11.2201 SEK per EUR, i.e., pay SEK to receive EUR).
2. Sell that EUR to the dealer at the dealer's bid of 11.2500.
3. Profit = 11.2500 − 11.2201 = **SEK 0.0299 per EUR transacted**, risk-free.

**Step 3 — Implied JPY/CAD cross rate when only JPY/USD and CAD/USD are quoted.** Both quotes have USD in the denominator, but Elin wants JPY/CAD — she must invert CAD/USD to get USD/CAD first (swapping bid and offer):

Given CAD/USD = 1.3199/1.3201 → USD/CAD = 1/1.3201 / 1/1.3199 = **0.75752/0.75763**

$$\text{JPY/CAD bid} = 105.39 \times 0.75752 = 79.84$$
$$\text{JPY/CAD offer} = 105.41 \times 0.75763 = 79.86$$

If a dealer quotes JPY/CAD at 79.81/79.83 (offer below the interbank-implied bid of 79.84), Elin can **buy CAD from the dealer** at 79.83 and **sell CAD in the interbank market** at 79.84, earning **JPY 0.01 per CAD** risk free.

---

### Question Set Answers

**Q1.** Given USD/GBP = 1.2302/1.2304 and USD/EUR = 1.1649/1.1651, what is the implied GBP/EUR bid rate?
- Neither quote has GBP in the denominator directly usable for GBP/EUR, so invert USD/GBP: GBP/USD bid = 1/1.2304 = 0.81274; GBP/USD offer = 1/1.2302 = 0.81288.
- GBP/EUR bid = GBP/USD bid × USD/EUR bid = 0.81274 × 1.1649 = **0.9468**.
→ **Answer: GBP/EUR bid ≈ 0.9468** (offer ≈ 0.9471, using the offer sides).

**Q2.** A dealer quotes a bid–offer of 79.82/79.87 in JPY/CAD when the interbank-implied cross rate is 79.84/79.86. Is there an arbitrage opportunity?
- The dealer's bid (79.82) is not above the interbank offer (79.86), and the dealer's offer (79.87) is not below the interbank bid (79.84).
→ **Answer: No arbitrage — the quote does not violate either constraint.**

**Q3.** Which factor is *least* likely to produce a tight bid–offer spread on a spot trade: (A) trading during the London–New York overlap, (B) a AA-rated counterparty, (C) a EUR/USD trade versus an obscure emerging-market cross?
→ **Answer: (B).** Because spot settles in two business days, counterparty credit quality is a minor factor relative to liquidity (time of day, currency pair) and transaction size.
