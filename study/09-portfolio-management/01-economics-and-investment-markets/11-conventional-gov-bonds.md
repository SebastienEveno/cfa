---
layout: page
title: "1.11 | Conventional Government Bonds and Break-even Inflation Rates"
permalink: /study/09-portfolio-management/01-economics-and-investment-markets/11-conventional-gov-bonds/
prev: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/10-treasury-bills-and-business-cycle/
next: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/12-default-free-yield-curve/
---
## Summary: 1.11 | Conventional Government Bonds and Break-even Inflation Rates (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Describe the factors that affect **yield spreads between non-inflation-adjusted (nominal) and inflation-indexed (real) bonds**.

---

### Why Maturity Matters for the Inflation Risk Premium ($\pi_{t,s}$)

**Short horizon (T-bill, ~3 months)**:
- Real payoff is highly **certain** — very unlikely to fall even if the investor loses their job during that horizon
- Payoff has **low/zero correlation** with bad consumption outcomes → acts as a **good hedge**
- $\implies$ **$\pi_{t,s} \approx 0$** → justifies the simplified Equation 11 from 1.09

**Long horizon (20-year conventional bond)**:
- Nominal cash flow is still **certain** — but only in **nominal** terms
- Investors have **much less confidence** forming 20-year inflation views than 3-month views
- Greater uncertainty about the bond's **real** payoff → investors demand a **higher** risk premium

$$\boxed{\text{Longer maturity} \implies \text{Greater inflation uncertainty} \implies \text{Higher } \pi_{t,s}}$$

---

### Defining the Break-Even Inflation (BEI) Rate

$$\boxed{
\text{BEI rate} = \text{Yield on nominal zero-coupon default-free bond} - \text{Yield on real (inflation-indexed) zero-coupon default-free bond of the SAME maturity}
}$$

**Decomposition**:
$$\boxed{\text{BEI} = \theta_{t,s} \ (\text{expected inflation}) + \pi_{t,s} \ (\text{inflation uncertainty risk premium})}$$

**Critical exam point**: 
$$\boxed{\text{BEI rate} \neq \text{market's pure "best guess" of future inflation}}$$

BEI **also embeds a risk premium** — it is *not* a clean proxy for expected inflation alone, since it conflates true inflation expectations with the compensation investors demand for inflation *uncertainty*.

---

### What Drives Real vs. Nominal Yield Evolution Differently

| Yield Type | Primarily Driven By |
|---|---|
| **Real zero-coupon yields** | Inter-temporal rate of substitution (ITRS) — i.e., growth/consumption trade-off dynamics from 1.04–1.08 |
| **Nominal zero-coupon yields** | ITRS **PLUS** changing inflation expectations ($\theta_{t,s}$) **PLUS** changing perceptions of inflation uncertainty ($\pi_{t,s}$) |

---

### Exhibit 7 — Empirical Evidence on BEI Rates

**UK and Australia (longer historical data, since mid-1980s)**: Clear **gradual decline** in 10-year BEI rates.

**Driven by falling actual inflation**:
- **1985–1990**: UK inflation averaged ~**6.0%**, Australia ~**7.5%**
- **2000–2011**: UK inflation averaged ~**3.0%**, Australia ~**3.2%** (after steady decline through the 1990s)

**United States**: 10-year BEI data only available from **1997 onward** — a period of already relatively low, stable US inflation.

**Panel D — Impact of the 2008–2009 GFC**:
$$\boxed{\text{10-year BEI rates FELL across developed economies during the crisis}}$$

**Mechanism**: Weaker global economic environment → weaker inflationary backdrop (lower demand for resources → costs/prices rise more slowly) → lower expected inflation embedded in BEI.

**Specific example**: **Italian** 10-year BEI rates fell from **2.3% to 0.8%**, reflecting the **eurozone crisis's** impact on the Italian economy.

---

### Practical Value of Break-Even Inflation Rates

**Usefulness for central banks**: BEI rates provide an **independent, market-based view** of future inflation expectations, which can be **compared against** the central bank's own judgment (though the two can be **interdependent** — central bank credibility itself shapes market inflation expectations).

**Important caveat (repeated for emphasis)**: Because BEI = expected inflation **+ risk premium**, it should **not** be read as a pure, unbiased forecast of future inflation — the risk premium component distorts the signal, especially at longer maturities where $\pi_{t,s}$ is more significant.

---

### Exam Tips

- **Core formula to memorize**: BEI rate = nominal yield − real yield (same maturity) = $\theta_{t,s} + \pi_{t,s}$ — this is very likely to appear directly on the exam, possibly as a "decompose the BEI rate" question
- **The single most important nuance for this LOS**: BEI rate is **NOT** a pure inflation expectation proxy — it's contaminated by the inflation **uncertainty risk premium**. Expect an exam question testing whether you understand this distinction (e.g., "why might BEI overstate expected inflation?")
- **Maturity-dependence of $\pi_{t,s}$**: short-maturity instruments (T-bills) have near-zero inflation risk premium (good real-payoff hedge, low correlation with bad consumption outcomes); long-maturity instruments have a **meaningfully positive** and typically **maturity-increasing** premium
- **Crisis behavior of BEI rates is a testable empirical pattern**: BEI rates **fall** during severe downturns (2008–09 GFC) because **weaker demand → weaker expected inflation** — this is a **disinflationary/deflationary fear** signal, not necessarily about risk premium changes
- **Italy eurozone crisis example** (2.3% → 0.8%) is a specific, citable data point if an exam question asks for a real-world illustration
- Connects directly back to **Equation 10** (1.09): BEI decomposition is simply extracting $\theta_{t,s} + \pi_{t,s}$ by comparing a nominal bond's yield to a real bond's yield of identical maturity — eliminating $l_{t,s}$ from the comparison since both bonds share the same real rate exposure
- This section **completes the short-to-intermediate-term nominal/real bond analysis** — expect subsequent sections to address **longer-term** government bond behavior and/or shift toward **credit spreads / risky corporate bonds**, per the module's stated trajectory
