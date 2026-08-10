---
layout: page
title: "1.16 | Credit Premiums and the Business Cycle"
permalink: /study/09-portfolio-management/01-economics-and-investment-markets/16-credit-premiums/
prev: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/15-other-factors/
next: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/17-industry-and-company-credit-quality/
---
## Summary: 1.16 | Credit Premiums and the Business Cycle (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Explain how the phase of the business cycle affects **credit spreads** and the performance of **credit-sensitive fixed-income instruments**. *(New LOS — this section pivots from default-free bonds to credit-risky bonds.)*

---

### Even "Default-Free" Status Can Be Questioned

**Context**: Bonds once considered default-free — French, Italian, Greek, Portuguese, Irish, Belgian, Spanish government bonds — were called into question during the **2010–2012 euro financial crisis**. Even **US Treasuries'** default-free status has since been questioned by investors and rating agencies.

$$\boxed{\text{Any bond perceived as default-free requires NO compensation for default/credit risk, by definition}}$$

---

### Extending the Pricing Framework — Introducing the Credit Premium

**Recap**: In default-free bonds, $\pi_{t,s}$ (from 1.09/1.11) compensates for **inflation uncertainty** — and this factor **still applies** to credit-risky bonds too.

**New addition — the credit premium** $\gamma^{c}_{i,t,s}$, distinct from $\pi_{t,s}$:

$$\boxed{
P_{i,t} = \sum_{s=1}^{N} \frac{E_t(CF_{i,t+s})}{\left(1 + l_{t,s} + \theta_{t,s} + \pi_{t,s} + \gamma^{c}_{i,t,s}\right)^s}
} \quad \text{(Equation 13)}$$

**Key conceptual addition**: Equation 13 acknowledges that $CF_{i,t,s}$ (the cash flow itself) is now **uncertain** in a new way — not just because of inflation, but because:
1. **Whether** scheduled payments will be made at all is uncertain (default possibility)
2. **If default occurs**, the **recovery rate** (amount investors actually receive) is also unknown

$$\boxed{\gamma^{c}_{i,t,s} = \text{credit premium} = \text{compensation for both of these uncertainties}}$$

---

### Worked Example 15 — Extracting the Implied Credit Premium

**Given**: 
- Real risk-free rate $l_{t,s} = 1.25\%$
- Expected inflation $\theta_{t,s} = 2.5\%$
- Inflation uncertainty premium $\pi_{t,s} = 0.50\%$
- Corporate bond: £100 face value, 1-year maturity, priced at £94.21

**Solution approach** (same decomposition technique as Example 11 in 1.09):

$$\text{Total required yield} = \frac{100}{94.21} - 1 \approx 6.15\%$$

$$\boxed{\gamma^{c}_{t,s} \approx 6.15\% - 1.25\% - 2.5\% - 0.50\% \approx 1.90\%}$$

**Interpretation**: The bond's price embeds roughly a **1.90% credit premium**, above and beyond the real rate, expected inflation, and inflation uncertainty compensation.

---

### The Credit Spread — Definition

$$\boxed{\text{Credit spread} = \text{Yield on corporate bond} - \text{Yield on government bond (same currency, same maturity)}}$$

**Two risk components in a corporate bond**:
1. **Interest rate risk** — shared with government bonds; a parallel yield curve shift affects both proportionately in roughly the same way
2. **Credit risk** ($\gamma^c$) — this is what causes corporate and government bond returns to **diverge over time**

---

### Exhibit 15 — Credit Spreads Over the Business Cycle (US, 1926–2006)

**Two ratings tracked**: **Aaa/AAA** (highest quality) and **Baa/BBB** (lower investment-grade quality) corporate spreads over Treasuries.

**Key findings**:
$$\boxed{\text{Baa spread ALWAYS higher than Aaa spread} \implies \text{reflects lower credit quality}}$$
$$\boxed{\text{Both spreads RISE in the lead-up to and during recessions, and DECLINE as the economy recovers}}$$

---

### Decomposing the Credit Premium — Expected Loss Framework

**Risk-neutral baseline** (Equation 14):
$$\boxed{\text{Expected loss} = \text{Probability of default} \times (1 - \text{Recovery rate})}$$

**If investors were risk-neutral**: expected return on a corporate bond would simply equal the **loss-adjusted** expected return of a comparable government bond — no *additional* premium beyond compensating for expected loss.

**Reality — investors are risk-averse**:
$$\boxed{\text{Corporate bond expected return} > \text{Loss-adjusted comparable government bond return}}$$

**Why diversification doesn't fully eliminate this**: 
$$\boxed{\text{Corporate defaults CLUSTER around business cycle downturns} \implies \text{residual, non-diversifiable market risk remains even in a diversified corporate bond portfolio}}$$

---

### Exhibit 16 — Defaults, Default Rates, Recovery Rates, and Loss Rates (US, 1920s–2008)

**Panel A/B — Defaults and default rates**: Long stretches of **few defaults**, punctuated by spikes during the **1930s Depression** and the **1980s, 1990s, and 2000s recessions**.

**Practical application**: Historical default rates by rating class are often used by analysts as a **proxy for probability of default** in the Equation 14 expected-loss calculation.

**Panel C — Recovery rates by seniority**:

| Debt Type | Claim on Assets | Recovery Rate Pattern |
|---|---|---|
| **Senior secured** | Lien/claim against specific company assets | **Highest** recovery rates |
| **Senior unsecured** | No explicit asset claim | **Moderate** recovery rates |
| **Subordinated** | Inferior claim vs. senior debt holders | **Lowest**, often very low recovery rates |

$$\boxed{\text{Recovery rates are also PRO-CYCLICAL: HIGHER in expansions, LOWER in contractions}}$$
**Why**: Assets liquidated to recover value fetch **higher prices in buoyant economies** than in stagnant ones.

**Panel D — Loss rates (net of defaults and recovery rates), 1982–2008**:
$$\boxed{\text{Loss rates are COUNTER-CYCLICAL} \implies \text{RISE as economic activity DECLINES}}$$

---

### Exam Tips

- **Equation 13 is the key formula extension to memorize**: it adds $\gamma^c_{i,t,s}$ (credit premium) to the default-free discount rate framework from Equation 10 — know that $\gamma^c$ is **distinct** from $\pi_{t,s}$ (inflation uncertainty premium), even though both are "risk premiums"
- **Credit spread definition and decomposition technique (Example 15)** is a strong candidate for a direct calculation question — same method as Example 11 (1.09), just with one more term subtracted
- **Two-way pattern to memorize**: (1) Credit spreads **widen** in recessions/downturns and **narrow** in expansions; (2) Recovery rates **fall** in downturns and **rise** in expansions — these move in the **same cyclical direction relative to each other** (both worsen for bondholders in bad times), which is precisely **why loss rates are strongly counter-cyclical**
- **Seniority ranking for recovery rates**: senior secured > senior unsecured > subordinated — a classic, simple, highly testable ranking
- **Non-diversifiable risk concept**: even a well-diversified corporate bond portfolio retains **market-level credit risk** because defaults **cluster** during recessions — this is analogous to systematic risk in equities and is an important conceptual bridge to portfolio-level credit risk management
- **Risk-neutral vs. risk-averse framing**: Equation 14 gives the risk-neutral "fair" credit spread baseline; the **actual observed spread exceeds this** due to risk aversion — expect a question testing whether you understand that the full credit spread ≠ just expected loss
- This section marks a **clear transition point** in Module 1 — from default-free government bond analysis (1.02–1.15) to **credit-risky instruments**; expect subsequent sections to continue building out credit spread dynamics, possibly extending to specific corporate bond strategies or equity risk premium parallels