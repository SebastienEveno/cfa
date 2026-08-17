---
layout: page
title: "Uncovered Interest Rate Parity and Purchasing Power Parity"
permalink: /study/02-economics/01-currency-exchange-rates/03-uncovered-parity-and-ppp/
next: /cfa/study/02-economics/01-currency-exchange-rates/04-fisher-effect-and-parity-synthesis/
prev: /cfa/study/02-economics/01-currency-exchange-rates/02-forward-markets-and-parity-conditions/
---
## Summary: Uncovered Interest Rate Parity and Purchasing Power Parity (CFA Level II — Economics)

---

### Uncovered Interest Rate Parity (UIP)

Unlike covered interest rate parity, an **uncovered** (unhedged) foreign investment leaves the investor exposed to the unknown future spot rate. UIP asserts that the **expected** return on an unhedged foreign investment equals the return on a comparable domestic investment — the expected currency appreciation/depreciation exactly offsets the interest-rate differential.

$$\boxed{\%\Delta S^{e}_{P/B} \approx i_P - i_B}$$

> **Key insight**: UIP implies that **high-yield currencies are expected to depreciate** (relative to the base currency) by enough to offset their yield advantage, and **low-yield currencies are expected to appreciate**. If UIP always held, there would be no way to earn excess returns simply by holding a high-yield currency — this is the condition the carry trade exploits (see the next file).

UIP requires **risk-neutral speculators** to be willing to take open currency positions — it is *not* enforced by arbitrage (there is no combination of trades that locks in a riskless profit). This is the critical distinction from CIP.

**Empirical evidence**: Over short- and medium-term horizons, UIP **fails** — high-yield currencies tend to depreciate *less* than implied by the interest-rate differential (and sometimes even appreciate). UIP has more empirical support over **very long-run** horizons.

---

### Worked Example — UIP as a Spot Rate Forecast

**Elin Kovač** is comparing a one-year AUD deposit against a one-year JPY deposit for a JPY/AUD position (AUD is the base currency).

| Item | Value |
|------|-------|
| Spot (JPY/AUD) | 71.78 |
| One-year Australian deposit rate | 3.00% |
| One-year Japanese deposit rate | 1.00% |

Under UIP, the expected change in JPY/AUD:

$$\%\Delta S^{e}_{JPY/AUD} = 1.00\% - 3.00\% = -2.00\%$$

The Australian dollar (the higher-yielding, base currency) is expected to **depreciate** by about 2% over the year — offsetting its 2-percentage-point yield advantage over JPY. **Why this forecast may not be reliable**: there is no arbitrage condition forcing UIP to hold; it depends on risk-neutral speculators enforcing it, and in practice they rarely are.

---

### Purchasing Power Parity (PPP)

PPP relates exchange rates to relative **inflation** rates, building on the **law of one price**: identical goods should cost the same across countries once converted to a common currency.

**Absolute PPP** extends the law of one price to entire price levels:

$$\boxed{S_{P/B} = \frac{CPI_P}{CPI_B}}$$

Absolute PPP requires that all goods are tradable and that price indexes across countries use identical baskets — assumptions that virtually never hold exactly, so sizable, persistent deviations from absolute PPP are the norm (transaction costs, trade barriers, non-tradable goods, different consumption baskets).

**Relative PPP** is more useful: it says *changes* in the exchange rate should track the *inflation differential*, even if the *level* relationship (absolute PPP) never holds:

$$\boxed{\%\Delta S_{P/B} \approx \pi_P - \pi_B}$$

**Ex ante (relative) PPP** — the forward-looking version, linking *expected* inflation to *expected* exchange rate change:

$$\boxed{\%\Delta S^{e}_{P/B} = \pi^{e}_P - \pi^{e}_B}$$

> **Key insight**: The currency of the **high-inflation** country should **depreciate** relative to the currency of the **low-inflation** country — otherwise the high-inflation country's exports lose competitiveness. If the exchange rate does not adjust, real purchasing power shifts away from the low-inflation country's producers.

**Empirical evidence**: at a **one-year horizon**, there is essentially no visible relationship between inflation differentials and exchange rate changes. At **5-, 10-, and 15-year horizons**, a strong positive relationship emerges — PPP is a poor short-run predictor but a reasonably good guide to **long-run fair value**. PPP's short-run power is strongest precisely when inflation differentials are very large (e.g., hyperinflationary economies), where it dominates all other factors.

---

### The Real Exchange Rate, Revisited

Recall from the FX market concepts file:

$$\boxed{S^{real}_{P/B} = S_{P/B} \times \frac{CPI_B}{CPI_P}}$$

If PPP holds exactly, $S^{real}_{P/B}$ is constant (indexed to 1.0). A currency that has **appreciated in nominal terms by more than the inflation differential justifies** will show a rising real exchange rate — i.e., it is becoming **overvalued** on a PPP basis.

---

### Worked Example — PPP Overvaluation

**Elin Kovač** estimates that the Australian dollar is **10% overvalued** relative to the Japanese yen on a PPP basis (AUD is the base currency in JPY/AUD). Australia's one-year deposit rate is 3%, versus 1% in Japan.

**Q: All else equal, what single move would restore AUD to its PPP fair value?**
→ A roughly **10% depreciation of the JPY/AUD rate** (AUD falling toward its PPP-implied level).

**Q: If real interest rates in Japan and Australia are equal, what does the international Fisher relation (previewed here, developed fully in the next file) imply the JPY–AUD inflation differential is?**
→ If real rates are equal, the entire **nominal** yield spread (3% − 1% = 2%) must be explained by the expected inflation differential: Australia's expected inflation is about **2 percentage points higher** than Japan's.

---

### Question Set Answers

**Q1.** Which of the following would *not* be consistent with long-run PPP: (A) a currency's equilibrium path follows relative price-level trends, (B) deviations from PPP occur short-term but correct over time, (C) high-inflation countries see currency appreciation?
→ **Answer: (C)** — high-inflation countries should see their currencies **depreciate**, not appreciate, to preserve competitiveness.

**Q2.** What best explains why *absolute* PPP fails empirically?
→ **Answer:** Trade barriers, transaction costs, and non-identical/non-tradable consumption baskets across countries — not simply "inflation rates vary," which relative PPP already accounts for.

**Q3.** An analyst observes the JPY/AUD rate is unchanged in 2025, while Australian inflation ran 4% higher than Japan's over the year. What does relative PPP suggest happened to the real exchange rate?
→ **Answer:** With no nominal exchange rate adjustment offsetting a 4% inflation differential, the AUD's real exchange rate **rose (AUD became more overvalued)** — a PPP-based correction (AUD depreciation) would be expected over the longer run.
