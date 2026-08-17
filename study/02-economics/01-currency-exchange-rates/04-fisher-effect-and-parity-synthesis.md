---
layout: page
title: "The Fisher Effect and Parity Conditions Synthesis"
permalink: /study/02-economics/01-currency-exchange-rates/04-fisher-effect-and-parity-synthesis/
next: /cfa/study/02-economics/01-currency-exchange-rates/05-carry-trade-and-balance-of-payments/
prev: /cfa/study/02-economics/01-currency-exchange-rates/03-uncovered-parity-and-ppp/
---
## Summary: The Fisher Effect and Parity Conditions Synthesis (CFA Level II — Economics)

---

### The Fisher Effect and Real Interest Rate Parity

The (domestic) **Fisher effect** decomposes a nominal interest rate into a real rate and expected inflation:

$$\boxed{i = r + \pi^{e}}$$

Writing this for both the price-currency country and the base-currency country and subtracting gives the **nominal yield spread** as the sum of a **real yield spread** and an **expected inflation differential**:

$$i_P - i_B = (r_P - r_B) + (\pi^{e}_P - \pi^{e}_B)$$

Now combine two relationships already established:
- **UIP**: $\%\Delta S^{e}_{P/B} = i_P - i_B$
- **Ex ante PPP**: $\%\Delta S^{e}_{P/B} = \pi^{e}_P - \pi^{e}_B$

If **both** hold simultaneously, then $i_P - i_B = \pi^{e}_P - \pi^{e}_B$, which — substituted back into the Fisher decomposition above — forces:

$$\boxed{r_P - r_B = 0}$$

This is **real interest rate parity**: if UIP and ex ante PPP both hold, real interest rates converge to the same level across markets.

$$\boxed{i_P - i_B = \pi^{e}_P - \pi^{e}_B} \quad \text{— the international Fisher effect}$$

> **Terminology trap**: some sources call UIP itself "the international Fisher effect." This module reserves that term specifically for the relationship between **nominal interest rate differentials and expected inflation differentials** shown above, consistent with the original (domestic) Fisher effect being a relationship between rates and inflation, not between rates and exchange rates.

**Caveat**: the international Fisher effect and real interest rate parity assume currency risk is identical everywhere. In practice, higher-risk (e.g., heavily indebted emerging market) currencies carry a **risk premium**, so their nominal (and calculated real) rates run higher than the international Fisher effect alone would predict.

---

### Tying All the Parity Conditions Together

| # | Condition | Statement | Enforced by |
|---|-----------|-----------|-------------|
| 1 | **Covered interest rate parity (CIP)** | Nominal yield spread = forward premium/discount (%) | **Arbitrage** — always holds |
| 2 | **Uncovered interest rate parity (UIP)** | Nominal yield spread = expected % change in spot rate | Risk-neutral speculation — often fails short/medium term |
| 3 | **Forward rate parity** | If CIP **and** UIP hold → forward rate = expected future spot rate (unbiased predictor) | Depends on UIP holding |
| 4 | **Ex ante PPP** | Expected % change in spot rate = expected inflation differential | Goods arbitrage/competitiveness — holds only over long horizons |
| 5 | **Real interest rate parity** | If UIP **and** ex ante PPP hold → real rates equalize across markets | Depends on both holding |
| 6 | **International Fisher effect** | Nominal yield spread = expected inflation differential | Depends on real interest rate parity + Fisher effect |

**The full chain, if everything held simultaneously:**

$$\boxed{\%\Delta S^{e}_{P/B} = \underbrace{\frac{F_{P/B}-S_{P/B}}{S_{P/B}}}_{\text{forward premium/discount}} = \underbrace{i_P - i_B}_{\text{nominal yield spread}} = \underbrace{\pi^{e}_P - \pi^{e}_B}_{\text{expected inflation differential}}}$$

> **Key insight — the exam-critical takeaway**: **Covered interest rate parity is the only one of these conditions enforced by arbitrage, and it holds essentially all the time.** Every other link in the chain (UIP, forward rate parity, ex ante PPP, real interest rate parity, the international Fisher effect) is a **behavioral/equilibrium** relationship that holds only loosely, and typically **only over long horizons**. If all conditions held at all times, no global investor could earn consistent excess returns from currency positioning — forward speculation, carry trades, and PPP-based value strategies would all be unprofitable on average. **The fact that these strategies have historically been profitable is itself evidence that the non-arbitrage parity conditions fail in the short-to-medium run.**

---

### Forecasting Future Spot Rates — Four Approaches Compared

| Approach | Assumes | Predicted future spot rate |
|----------|---------|----------------------------|
| **Current spot rate** | Exchange rates follow a **random walk** | $S_t = S_0$ (no change) |
| **Forward rate** | CIP **and** UIP hold; investors are **risk neutral** | $S_t = F_{0,t}$ |
| **Uncovered interest rate parity** | Same as above (forward rate = expected spot only if forward rate parity holds) | $S_t = S_0 \times (1 + i_P - i_B)$ (approx.) |
| **Purchasing power parity** | Ex ante PPP holds (best for **long-run** horizons) | $S_t = S_0 \times (1 + \pi^{e}_P - \pi^{e}_B)$ (approx.) |

> **Key insight**: Assuming the current spot rate is the best predictor requires a random walk — it does **not** require risk neutrality. Using the forward rate as a predictor requires both CIP (essentially automatic) and UIP (a much stronger, less reliable assumption) to hold. In practice, no single approach dominates; academic evidence favors the random walk at very short horizons and PPP at very long horizons, with interest-rate-based approaches (UIP/forward rate) performing inconsistently in between.

---

### Worked Example — Applying the Synthesis

**Elin Kovač** collects the following data for a Japanese investor considering GBP exposure:

| Currency | One-year MRR | Pair | Spot rate |
|----------|--------------|------|-----------|
| JPY | 0.10% | JPY/USD | 105.40 |
| USD | 0.10% | USD/GBP | 1.2303 |
| GBP | 3.00% | JPY/GBP | 129.67 |

**Q1 — If CIP holds, what is the all-in one-year return to a Japanese investor who fully hedges a GBP money market investment back into JPY?**
→ By CIP (an arbitrage condition), a fully hedged GBP investment must earn exactly the **JPY rate: 0.10%** — no calculation of the forward rate is even needed.

**Q2 — If UIP holds, what is the expected JPY/GBP spot rate in one year?**
→ If UIP holds, forward rate parity also holds, so the expected future spot rate equals today's forward rate:
$$F_{JPY/GBP} = 129.67 \times \frac{1.001}{1.03} = 126.02$$

**Q3 — If UIP holds, what is the expected change in JPY/USD over the year?**
→ Since JPY and USD one-year MRRs are identical (0.10% each), UIP implies **no expected change** in JPY/USD.

---

### Question Set Answers

**Q1.** Which parity condition is a true no-arbitrage condition?
→ **Answer: Covered interest rate parity.** It equates returns on two riskless (hedged) investments.

**Q2.** Forward rate parity requires which two conditions to hold?
→ **Answer: Covered interest rate parity and uncovered interest rate parity** (not real interest rate parity, which is a *consequence*, not a *requirement*, of UIP + ex ante PPP).

**Q3.** The international Fisher effect requires which conditions, other than the Fisher effect itself?
→ **Answer: Ex ante PPP and real interest rate parity** — not *absolute* PPP.

**Q4.** If all key parity conditions held at all times, the expected % change in the spot rate would equal the nominal yield spread and the expected inflation spread, but *not* which of the following: the real yield spread?
→ **Answer: Correct — the real yield spread would be zero** under real interest rate parity, so it plays no role in explaining the expected currency move.
