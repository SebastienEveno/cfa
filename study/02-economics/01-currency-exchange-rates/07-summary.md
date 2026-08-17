---
layout: page
title: "Exchange Rate Management and Formula Summary"
permalink: /study/02-economics/01-currency-exchange-rates/07-summary/
prev: /cfa/study/02-economics/01-currency-exchange-rates/06-exchange-rate-policy-models/
---
## Summary: Exchange Rate Management and Formula Summary (CFA Level II — Economics)

---

### Central Bank Intervention and Capital Controls

Capital inflows are a **blessing** when they fund productive investment and growth, but a **curse** when they fuel asset bubbles, overvaluation, and boom-bust cycles. Three major currency crises of the 1990s — the **European ERM crisis (1992–93)**, the **Mexican peso crisis (1994)**, and the **Asian financial crisis (1997–98)** — were all preceded by capital inflow surges and highly leveraged speculative positioning that then unwound violently.

**Effectiveness of direct intervention:**

| Market type | Effectiveness | Why |
|-------------|---------------|-----|
| **Developed markets** | Generally **limited** | Central bank FX reserves are typically small relative to daily currency turnover |
| **Emerging markets** | **More mixed, potentially greater** | EM reserve holdings are often large relative to (thinner) local currency turnover; intervention appears to reduce volatility, though its effect on the exchange rate *level* is not statistically robust |

> **Key insight**: a central bank trying to **weaken** its own currency faces (in principle) no hard constraint — it can create unlimited domestic currency to sell. A central bank trying to **strengthen** its currency is constrained by finite FX reserves. Persistent intervention of either kind can undermine the independence and efficacy of domestic monetary policy.

**Capital controls** — forms include transaction taxes (Brazil, 2016), non-interest-bearing deposit requirements on inflows (Thailand, 2006), foreign-ownership limits (Vietnam), and multiple/segmented exchange rates (Venezuela, 2016–2019, later loosened). Controls are rarely fully effective: trade-related flows must generally still be permitted, and **black markets** emerge to circumvent restrictions. The IMF has softened its historical opposition, acknowledging capital controls may sometimes have benefits that exceed their costs — particularly for preventing overshooting, bubble formation, and financial fragility.

---

### Warning Signs of a Currency Crisis

Currency crises typically catch investors, bond markets, and credit rating agencies **by surprise** — they are rarely well anticipated. Two schools of thought exist: (1) crises are preceded by deteriorating fundamentals (in principle predictable), and (2) crises can strike countries with sound fundamentals via sentiment shifts or contagion (much harder to predict). An effective early warning system should have a strong record with **few false alarms**, use **timely** (not lagged) data, and be **broad-based** (crises are rarely triggered by a single factor).

**Checklist of empirically identified warning signs:**

| # | Warning sign |
|---|--------------|
| 1 | Capital markets have recently been **liberalized** (free capital flow permitted) |
| 2 | Large foreign capital **inflows** relative to GDP, especially **short-term, foreign-currency-denominated** funding |
| 3 | A **banking crisis** precedes or coincides with the currency crisis |
| 4 | The exchange rate regime is **fixed or partially fixed** (more vulnerable than floating) |
| 5 | FX **reserves decline precipitously** as the crisis approaches |
| 6 | The currency has **risen substantially above its historical mean** in the run-up |
| 7 | The **terms of trade** (exports/imports) deteriorate before the crisis |
| 8 | **Broad money growth** and the M2-to-bank-reserves ratio **rise** prior to the crisis |
| 9 | **Inflation** is significantly higher than in tranquil periods |

> **Key insight (exam trap)**: FX reserves **decline** — they do not rise — as a crisis approaches (reserves are being spent defending the currency). A student confusing this direction is a classic wrong-answer trap.

**Iceland 2008 in one paragraph**: banking liberalization (2001) → three banks funded rapid growth via foreign-currency retail deposits and short-term wholesale borrowing → assets reached >14× GDP, foreign debt 5× GDP → the krona appreciated 40% (2001–07) → a 2002 trade surplus flipped to persistent deficits → external debt reached >7× GDP → as the 2008 global financial crisis froze interbank lending, foreign depositors fled, the krona fell >40% against the euro in H1 2008, all three banks collapsed, a one-day currency peg attempt failed, and the krona subsequently fell over 60% — followed by an IMF-led bailout.

---

### Question Set Answers

**Q1.** A country has a rising foreign exchange reserve level heading into a period of economic stress. Is this a currency crisis warning sign?
→ **Answer: No.** Rising (not falling) reserves are generally a **stabilizing** factor; **declining** reserves are the warning sign.

**Q2.** Why is an early warning system with a strong crisis-prediction record but many false alarms *not* necessarily a good system?
→ **Answer:** False alarms erode the system's credibility and usefulness for portfolio hedging decisions — an ideal system needs both a strong hit rate **and** a low false-alarm rate, plus timely, broad-based data.

**Q3.** Which is more vulnerable to a currency crisis, a fixed exchange rate regime or a floating one, all else equal?
→ **Answer: A fixed (or partially fixed) regime** — it removes the natural pressure-release valve of gradual currency adjustment, allowing imbalances to build until a disorderly break becomes necessary.

---

### Formula Summary — Currency Exchange Rates

**1. Quote Convention and Real Exchange Rate**

$$\boxed{S_{P/B} = \text{Price of 1 unit of the base currency, in the price currency}}$$

$$\boxed{S^{real}_{P/B} = S_{P/B} \times \frac{CPI_B}{CPI_P}}$$

**2. Triangular Arbitrage (Cross Rates)**

$$\boxed{\frac{A}{C} = \frac{A}{B} \times \frac{B}{C}}$$

> Use bid rates for the implied cross-rate bid, offer rates for the implied offer, matching each leg's direction (buy → offer, sell → bid) for the currency in the denominator; invert (and swap bid/offer) any quote that does not already have the common currency in the denominator.

**3. Covered Interest Rate Parity (CIP) — arbitrage-enforced**

$$\boxed{F_{P/B} = S_{P/B} \times \frac{1+i_P \times t}{1+i_B \times t}}$$

$$\boxed{F_{P/B} - S_{P/B} = S_{P/B} \times \frac{i_P - i_B}{1+i_B \times t} \times t}$$

**4. Mark-to-Market Value of a Forward**

$$\boxed{\text{MTM value} = \frac{\text{Notional} \times (\text{Original forward rate} - \text{Offsetting forward rate})}{1 + i \times t}}$$

**5. Uncovered Interest Rate Parity (UIP) — not arbitrage-enforced**

$$\boxed{\%\Delta S^{e}_{P/B} \approx i_P - i_B}$$

**6. Forward Rate Parity** (holds only if CIP and UIP both hold)

$$\boxed{F_{P/B} = S^{e}_{P/B}}$$

**7. Purchasing Power Parity**

$$\boxed{\text{Absolute PPP: } S_{P/B} = \frac{CPI_P}{CPI_B}} \qquad \boxed{\text{Relative/ex ante PPP: } \%\Delta S^{e}_{P/B} = \pi^{e}_P - \pi^{e}_B}$$

**8. Fisher Effect, Real Interest Rate Parity, International Fisher Effect**

$$\boxed{i = r + \pi^{e}} \qquad \boxed{r_P - r_B = 0 \text{ (real rate parity, if UIP + ex ante PPP hold)}} \qquad \boxed{i_P - i_B = \pi^{e}_P - \pi^{e}_B \text{ (international Fisher effect)}}$$

**9. Carry Trade Return** (approximate, funding currency B, investment currency P)

$$\boxed{\text{Carry trade return} \approx \left(\frac{S_0}{S_1}\right)(1+i_P) - 1 - i_B}$$

---

### Quick Reference — Which Condition Holds, and When

| Condition | Holds short-run? | Holds long-run? | Enforcement mechanism |
|-----------|:---:|:---:|---|
| Covered interest rate parity | **Yes** | Yes | Arbitrage |
| Uncovered interest rate parity | No | Partial support | Risk-neutral speculation |
| Forward rate parity | No | Partial support | Depends on UIP |
| Relative/ex ante PPP | No | **Yes** | Goods arbitrage / competitiveness |
| Real interest rate parity | No | Partial support | Depends on UIP + PPP |
| International Fisher effect | No | Partial support | Depends on real rate parity |

---

### Exam Tips

- **CIP is the only parity condition enforced by arbitrage** — it holds virtually always. Every other condition (UIP, forward rate parity, PPP, real interest rate parity, the international Fisher effect) is a long-run tendency, not a short-run law — this distinction drives a large share of exam questions on "which condition holds."
- **Higher-yield currency → forward discount; lower-yield currency → forward premium** (CIP). Do not confuse this with UIP's prediction that the higher-yield currency's *spot* rate is expected to *depreciate* — same direction, different mechanism (arbitrage vs. expectation).
- **The carry trade exists precisely because UIP fails empirically** — high-yield currencies do not depreciate as much as interest differentials imply. Carry trade P&L = yield spread ± spot rate change; returns are positively skewed in calm markets but subject to fat-tailed crash risk when volatility spikes (deleveraging spirals).
- **Bid/offer rule of thumb**: a quoted bid or offer always refers to the currency in the **denominator** (the base currency). When computing implied cross rates, invert (and swap bid/offer) any quote lacking a shared denominator currency.
- **Mark-to-market a forward** by (1) creating the exact offsetting position, (2) selecting bid/offer correctly (sell base → bid; buy base → offer), (3) computing the settlement-date cash flow from the rate difference, and (4) discounting at the money market rate matching the cash flow's currency.
- **Absolute PPP almost never holds** (trade barriers, non-tradables, differing baskets); **relative/ex ante PPP is a reasonable long-run (5+ year) guide**, essentially useless at a 1-year horizon — except when inflation differentials are extreme (hyperinflation), where PPP dominates even short-run.
- **Real exchange rate rising above its base level = base currency overvalued** relative to PPP fair value; a currency correction (depreciation of the overvalued currency) is the textbook resolution.
- In the **short-to-intermediate term, capital/financing flows dominate trade flows** in driving exchange rates; only over the **long run** do persistent current account trends (net borrower/lender status, via the debt sustainability channel) reliably move currencies.
- **Mundell–Fleming, high capital mobility**: restrictive monetary + expansionary fiscal = most currency-bullish combination (higher real rates draw capital); expansionary monetary + restrictive fiscal = most bearish. Same-direction policies = indeterminate.
- **Mundell–Fleming, low capital mobility**: policy works through trade flows, not capital flows — expansionary monetary + fiscal = bearish (worse trade balance); restrictive + restrictive = bullish.
- **Monetary models (pure monetary / Dornbusch overshooting)** work through **prices and inflation** (via PPP), not interest rates and output — the opposite transmission channel from Mundell–Fleming. Overshooting arises from short-run price stickiness forcing the full long-run adjustment onto the exchange rate initially.
- **Portfolio balance approach**: sustained large budget deficits are long-run currency-**negative**, even when the same fiscal expansion is currency-**positive** in the short run under Mundell–Fleming with high capital mobility — reconcile these by distinguishing the *initial* capital-inflow effect from the *cumulative* debt-sustainability effect.
- **FX reserves fall (not rise) as a currency crisis approaches**; a fixed/pegged regime, recent capital account liberalization, short-term FX-denominated funding, an already-overvalued currency, and rising inflation/money growth are the classic warning-sign cluster.
- **Currency crises are rarely well anticipated** by investors, bond spreads, or rating agencies — treat any exam statement implying crises are easily and reliably predicted as false.
