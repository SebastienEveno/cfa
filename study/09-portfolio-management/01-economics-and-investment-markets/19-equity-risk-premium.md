---
layout: page
title: "1.19 | Equities and the Equity Risk Premium"
permalink: /study/09-portfolio-management/01-economics-and-investment-markets/19-equity-risk-premium/
prev: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/18-sovereign-credit-risk/
next: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/20-earnings-growth-economic-cycle/
---
## Summary: 1.19 | Equities and the Equity Risk Premium (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Explain the relationship between the **consumption hedging properties of equity** and the **equity risk premium**. *(New sub-topic — pivots from fixed income to equities within the same PV framework.)*

---

### Why Equities Are Riskier Than Credit-Risky Bonds

**Recap**: Credit-risky bonds have **uncertain payment** (default possibility), but at least the **schedule and terms** are known in advance.

**Equities are different**: 
$$\boxed{\text{BOTH the SIZE and TIMING of dividend cash flows are uncertain} \implies \text{dividends may not materialize AT ALL}}$$

- Dividends are **not promised**
- Can **rise, fall, or cease entirely** (e.g., in bankruptcy)

---

### The Equity Pricing Equation (Equation 15)

$$\boxed{
P_{i,t} = \sum_{s=1}^{\infty} \frac{E_t(CF_{i,t+s})}{\left(1 + l_{t,s} + \theta_{t,s} + \pi_{t,s} + \gamma^{c}_{i,t,s} + \gamma^{e}_{i,t,s}\right)^s}
}$$

**Two key differences from the credit-risky bond equation (13)**:
1. **No maturity** — the sum runs to **infinity ($\infty$)**, since equity is a perpetual claim on cash flows
2. **New term**: $\gamma^{e}_{i,t,s}$ — the **additional** return investors require for equity **over and above** what they require for the company's own credit-risky debt ($\gamma^c_{i,t,s}$)

---

### Why Equity Holders Need Extra Compensation Beyond Bondholders

**Two structural reasons** (both stemming from equity's **subordinate claim** on company cash flows):

1. **Priority of claims**: In financial distress, **debt holders have the senior claim** — equity holders only receive the **residual**, which could be **zero**
2. **Bankruptcy outcome asymmetry**: 
$$\boxed{\text{In bankruptcy: bondholders typically recover SOMETHING (per credit quality); equity holders typically lose ALL their investment}}$$

$$\boxed{\text{Both bond and equity investors face "corporate risk," but the POTENTIAL LOSS is GREATER for equity investors}}$$

---

### Defining the Equity Risk Premium — Two Equivalent Framings

**Framing 1 — relative to the firm's own bonds**: $\gamma^e_{i,t,s}$ = extra premium equity requires over the company's credit-risky debt

**Framing 2 — relative to default-free debt (the standard convention)**:

$$\boxed{
P_{i,t} = \sum_{s=1}^{\infty} \frac{E_t(CF_{i,t+s})}{\left(1 + l_{t,s} + \theta_{t,s} + \pi_{t,s} + ERP_{i,t,s}\right)^s}
} \quad \text{(Equation 16)}$$

$$\boxed{ERP_{i,t,s} = \gamma^{c}_{i,t,s} + \gamma^{e}_{i,t,s}}$$

**Definition**: The **equity risk premium** is the **combined** compensation for (1) the company's credit/default risk **and** (2) the additional equity-specific risk — all measured **relative to a default-free bond of the same currency** (conceptually, a very long-dated, plain-vanilla, default-free coupon bond).

$$\boxed{ERP = \text{Combination of corporate risk (credit) + equity-specific subordination risk, together known as the "equity risk premium"}}$$

---

### Equities and Consumption Hedging — Why the Premium Should Be Positive

**Core hypothesis**: Equity investors demand a positive premium if equities have **poor consumption-hedging properties** — i.e., if equities **don't pay off in bad times** (recall the covariance framework from 1.06).

$$\boxed{\text{If equities are a POOR hedge for bad consumption outcomes} \implies \text{ERP should be POSITIVE}}$$

**Caveat**: Precisely pinning down the **equity-return/consumption relationship** empirically has proven **very difficult** — but long-run historical data offers indirect evidence.

---

### Exhibit 21 — Historical Real Equity Returns (US & UK, 1900–2010)

**Pattern**: Sharp equity price **declines** are consistently associated with **recessions** (bad times):

| Event | Market | Real Decline |
|---|---|---|
| **1972 recession** | UK | Prices **more than halved** |
| **Great Depression** | US | Fell **more than 40%** |
| **2009 (GFC aftermath)** | UK | Fell **~30%** |
| **2009 (GFC aftermath)** | US | Fell **~40%** |

$$\boxed{\text{Conclusion: Empirical evidence supports that equities are a POOR hedge for bad consumption outcomes}}$$

**Implication for premium size**: 
$$\boxed{\text{Given the LARGE magnitude of price declines possible in bad times, the equity risk premium should be POSITIVE and potentially LARGE}}$$

---

### Setting Up the Next Discussion

The reading closes by flagging that the **next step** is to examine the **nature of equity cash flows themselves** (dividends) — since it's precisely the characteristics of this cash flow stream that **causes** investors to demand the equity risk premium in the first place.

---

### Exam Tips

- **Equation 15 vs. 16 distinction is testable**: Equation 15 expresses the equity premium **relative to the firm's own bonds** ($\gamma^e$ alone); Equation 16 expresses it **relative to default-free debt** (the standard/conventional ERP = $\gamma^c + \gamma^e$) — know which framing is being asked for
- **Two structural reasons for the "extra" equity premium over bonds** (residual claim + total-loss-in-bankruptcy asymmetry) are a strong candidate for a short-answer "explain why" question
- **No maturity / infinite horizon** is a key structural distinction from bonds — equities are priced as a **perpetuity** of uncertain cash flows, reinforcing why equity valuation is inherently more sensitive to long-run assumptions
- **Historical decline magnitudes** (US Depression >40%, UK 1972 >50%, 2009 US ~40%/UK ~30%) are concrete, citable data points for essay questions on consumption-hedging evidence
- **Core causal chain to memorize**: Poor consumption-hedging (equities fall precisely in bad times) → positive covariance-based logic from 1.06 → **positive and large ERP** — this directly reuses the covariance/marginal-utility framework built earlier in the module, so make sure that foundational logic (1.05–1.06) is solid before this section
- **ERP = compensation for BOTH credit/corporate risk AND equity-specific subordination risk** — a nuance worth remembering, since casual treatments of ERP often gloss over the fact that it's really a **combination** of two distinct risk sources
- This section is explicitly framed as a **setup/foundation** for subsequent sections on **equity cash flow characteristics** — expect the next reading section(s) to dig into dividend dynamics, cash flow growth, and how these interact with the discount rate to determine equity valuations and the ERP's magnitude
