---
layout: page
title: "The Carry Trade and Balance of Payments"
permalink: /study/02-economics/01-currency-exchange-rates/05-carry-trade-and-balance-of-payments/
next: /cfa/study/02-economics/01-currency-exchange-rates/06-exchange-rate-policy-models/
prev: /cfa/study/02-economics/01-currency-exchange-rates/04-fisher-effect-and-parity-synthesis/
---
## Summary: The Carry Trade and Balance of Payments (CFA Level II — Economics)

---

### The FX Carry Trade

The carry trade exploits the empirical **failure of uncovered interest rate parity**: high-yield currencies do not depreciate — and low-yield currencies do not appreciate — by as much as their interest-rate differential would imply. The strategy: **go long high-yield ("investment") currencies, funded by short positions in low-yield ("funding") currencies.**

**Mechanics** (e.g., borrow CAD at 1%, invest in BRL at 9%):

1. Borrow the funding currency at $t=0$.
2. Sell the funding currency / buy the investment currency at the spot rate.
3. Invest in the investment-currency money market.
4. Liquidate the investment at $t=1$.
5. Sell the investment currency / buy back the funding currency at the spot rate.
6. Repay the funding-currency loan.

> **Key insight**: the carry trader's total return = (1) the interest-rate spread, **plus/minus** (2) the appreciation/depreciation of the investment currency. If UIP held, (2) would exactly offset (1) on average. Because UIP fails empirically, carry trades have historically generated **positive average returns over long periods** — but they carry significant **crash risk**.

**Why carry trades crash**: the reward (accrued yield) is steady and low-volatility; the risk (a sudden adverse FX move) is a rare but severe tail event. In calm periods, investors get complacent and add leverage. When volatility spikes, crowded positions unwind simultaneously — selling the high-yield currency and buying back the funding currency — which itself drives further losses (a self-reinforcing "flight to quality"). As a result, carry trade return distributions are **more peaked than normal, with fat (negative) tails and negative skew**: many small gains, punctuated by occasional large losses.

---

### Worked Example — Carry Trade Return

**Elin Kovač**, based in Tokyo, funds an AUD carry trade by borrowing JPY.

| Currency | One-year MRR | Pair | Spot today | Spot in 1 year |
|----------|--------------|------|-------------|-----------------|
| JPY | 0.10% | JPY/USD | 105.40 | 104.60 |
| AUD | 1.70% | USD/AUD | 0.6810 | 0.6850 |

**Step 1 — Cross rates.** JPY/AUD today = 105.40 × 0.6810 = **71.78**; in one year = 104.60 × 0.6850 = **71.65**.

**Step 2 — Gross AUD investment return, in JPY terms:**

$$\left(\frac{1}{71.78}\right)(1+1.70\%)(71.65) - 1 = 1.52\%$$

**Step 3 — Net of JPY funding cost (0.10%):**

$$1.52\% - 0.10\% = 1.42\%$$

**Cross-check via a transactional approach** (JPY 100 notional): convert to AUD 1.3931 → grows to AUD 1.4168 → converts back to JPY 101.51 → less the JPY loan repayment of JPY 100.10 → profit of **JPY 1.41**, matching the 1.42% return (rounding).

---

### Balance of Payments and Exchange Rates

A country's balance of payments comprises its **current account** (trade in goods/services — "the real economy") and its **capital account** (investment/financing flows). By definition, a current account deficit must be exactly offset by a capital account surplus (net capital inflow), and vice versa.

**Three channels through which current account imbalances influence exchange rates:**

| Channel | Mechanism |
|---------|-----------|
| **Flow supply/demand** | A trade surplus raises demand for the surplus country's currency (needed to settle exports) → currency appreciates; a deficit does the reverse |
| **Portfolio balance** | Persistent deficits shift wealth to surplus nations, who may eventually hold more of the deficit country's assets than they want, prompting rebalancing sales that weaken the deficit country's currency |
| **Debt sustainability** | Persistent deficits raise a country's external debt; once debt is perceived as unsustainable, a large currency depreciation becomes anticipated as the mechanism that will eventually shrink the deficit |

> **Key insight**: in the **short-to-intermediate run**, capital/financing flows dominate trade flows in driving exchange rates — goods prices adjust slowly, production has inertia, and financial flows can reposition instantly. Only over the **long run** do persistent current account trends (net borrower vs. net lender status) reliably drive currency depreciation/appreciation. Because of **limited pass-through** (a 1% currency decline often raises import prices by only ~0.5%, as foreign producers absorb margin) and **slow demand responses**, the exchange rate adjustment needed to correct a trade imbalance can be large and can take **years** to play out — trade flows do **not** self-correct immediately.

**Historical pattern (US dollar)**: large, sustained current account deficits eventually triggered major dollar declines (1977–78, 1985–87, 2002–08) — but often with a long lag, and sometimes even alongside dollar *strength* in the interim (e.g., the dollar rallied through the worsening deficits of the early 1980s and late 1990s because strong capital inflows — chasing high US real rates, then FDI/equity flows — dominated in the short run).

---

### Capital Flows

Greater financial market integration has raised the importance of capital flows in driving exchange rates, interest rates, and asset prices. Excessive emerging-market capital **inflows** can plant the seeds of a future crisis by contributing to:

1. unwarranted currency appreciation,
2. a buildup of external debt,
3. asset bubbles,
4. a consumption/credit binge, and
5. overinvestment in risky projects.

Governments often resist unwanted appreciation with **capital controls** (e.g., Brazil's 2016 FX transaction tax, Thailand's 2006 unremunerated reserve requirement) or direct FX market intervention, though such controls are rarely fully effective (trade-related flows must still be permitted, and black markets emerge).

**"Pull" vs. "push" factors** driving capital inflows:

| Type | Examples |
|------|----------|
| **Pull** (domestic policy driven) | Lower inflation/inflation volatility, more flexible exchange rate regimes, improved fiscal positions, privatization, financial liberalization |
| **Push** (external, not domestically controlled) | Low interest rates in industrial countries encouraging a global reach for yield; secular shifts in industrial-country asset allocation toward EM |

---

### Equity Market Trends and Exchange Rates

The correlation between equity returns and exchange rate movements is **unstable** — it swings between strongly positive and strongly negative depending on the period, and the **long-run correlation tends toward zero**. Since the global financial crisis, the US dollar has often shown a **negative** correlation with US equities, reflecting its role as a **safe-haven asset**: in "risk-on" periods, capital flows to risky assets (equities) and away from safe havens (USD); in "risk-off" periods, the reverse occurs.

---

### Question Set Answers

**Q1.** Carry trades can be profitable specifically because:
→ **Answer: Uncovered interest rate parity does not hold** — not because CIP or the international Fisher effect fail (CIP essentially always holds).

**Q2.** The return distribution of a carry trade strategy most closely resembles:
→ **Answer: A distribution with fat tails and negative skew** — reflecting periodic "crash risk" when crowded positions unwind.

**Q3.** A fund's carry trade returns are far more volatile relative to its equity base than the underlying yield spread would suggest. The most likely explanation is:
→ **Answer: Leverage** — carry trades are typically implemented with borrowed capital, amplifying return-on-equity volatility.

**Q4.** A country runs a persistent current account deficit. Over time, which channel explains why its currency's long-run equilibrium value would be revised downward, even absent any near-term change in trade flows?
→ **Answer: The debt sustainability channel** — as external debt accumulates relative to GDP, investors anticipate that a depreciation will eventually be required to stabilize the debt trajectory.
