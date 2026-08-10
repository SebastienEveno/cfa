---
layout: page
title: "1.09 | The Yield Curve and the Business Cycle"
permalink: /study/09-portfolio-management/01-economics-and-investment-markets/09-yield-curve-and-business-cycle/
prev: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/08-real-default-free-bonds-interest-rates/
next: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/10-treasury-bills-and-business-cycle/
---
## Summary: 1.09 | The Yield Curve and the Business Cycle (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Same LOS as 1.08 — this section extends the analysis from **real** default-free bonds to **nominal** default-free bonds, introducing the **inflation risk premium**.

---

### Moving from Real to Nominal Bonds

**Starting point**: Equation 9 (from 1.08) priced a **real** default-free bond, where the only driver was $l_{t,s}$.

**New question**: What determines the price of a default-free bond paying a **fixed nominal (currency) amount** at maturity (e.g., a developed-economy government bond, default risk ignored)?

**No-inflation world**: Equation 9 would still apply — investors are still only giving up current consumption.

**With positive inflation**: Deferring consumption today reduces the **quantity of goods** purchasable at maturity → investors need compensation for **expected inflation**, $\theta_{t,s}$.

---

### Building the Nominal Discount Rate — Two Layers of Compensation

**Layer 1 — Perfect inflation forecasting (hypothetical)**:
$$\boxed{\text{Required return} = l_{t,s} + \theta_{t,s}}$$

**Layer 2 — Realistic case (inflation is uncertain)**: Since investors are **risk averse**, they demand compensation not just for *expected* inflation but for **inflation uncertainty** itself. This is captured by a **new, distinct risk premium**:

$$\boxed{\pi_{t,s} = \text{risk premium for inflation uncertainty} \quad (\text{distinct from } \gamma_{i,t,s} \text{ in Equation 1})}$$

---

### Equation 10 — Pricing a Nominal Default-Free Bond

$$\boxed{
P_{t,s} = \frac{\text{Face Value}}{(1 + l_{t,s} + \theta_{t,s} + \pi_{t,s})^s}
}$$

**Key conceptual point**: The bond's **nominal** payoff is still **certain** (negligible default risk assumed). It's the **real value** of that fixed nominal payoff that is uncertain — because future inflation is unknown — which is precisely why $\pi_{t,s}$ is needed.

---

### Worked Example 11 — Extracting the Implied Inflation Risk Premium

**Given**:
- Real risk-free rate: $l_{t,s} = 1.25\%$
- Expected average inflation over the year: $\theta_{t,s} = 2.5\%$
- Bond: £100 face value, 1-year maturity, priced at £95.92

**Solution approach**: Back out the total required nominal return from the price, then subtract the known real rate and expected inflation components to isolate $\pi_{t,s}$.

$$\text{Total nominal yield} = \frac{100}{95.92} - 1 \approx 4.25\%$$

$$\boxed{\pi_{t,s} \approx \text{Total nominal yield} - l_{t,s} - \theta_{t,s} \approx 4.25\% - 1.25\% - 2.5\% = 0.50\%}$$

**Interpretation**: The bond's price embeds roughly a **0.50% premium** compensating investors for the **uncertainty** around that 2.5% average inflation expectation (not for the expected inflation itself, which is already captured separately).

---

### Simplifying for Treasury Bills — Equation 11

**T-bills**: very short-dated (e.g., 3-month), nominal, zero-coupon government securities, closely tied to central bank policy rates.

**Key simplification**: Because the investment horizon is so short, **inflation uncertainty over that horizon is low** → the reading treats $\pi_{t,s}$ as **negligible** for T-bills.

$$\boxed{
P_{t,s} = \frac{\text{Face Value}}{1 + l_{t,s} + \theta_{t,s}} \quad \text{(Equation 11 — no summation needed, single payment)}
}$$

**Why no summation**: Unlike coupon bonds, a T-bill has **only one cash flow** at maturity.

---

### Setting Up the Next Discussion

The reading closes by pivoting toward: **how does a central bank's policy rate** (a short-term **nominal** rate) **evolve with the business cycle?** — building on the already-established behavior of $l_{t,s}$ (real rate, tied to growth/volatility/safe-haven effects from 1.08).

---

### Exam Tips

- **Critical distinction**: $\pi_{t,s}$ (inflation **uncertainty** risk premium) is a **separate** risk premium from $\gamma_{i,t,s}$ (the general asset risk premium in Equation 1) — don't conflate the two on the exam. $\pi_{t,s}$ specifically compensates for **not knowing** future inflation, while $\theta_{t,s}$ itself compensates for the **expected level** of inflation
- **Three components of a nominal discount rate** (building the full picture): $l_{t,s}$ (real rate) + $\theta_{t,s}$ (expected inflation) + $\pi_{t,s}$ (inflation uncertainty premium) — memorize this decomposition, as it's the direct extension of the discount-rate framework from 1.02
- **T-bill simplification is a common exam setup**: for very short maturities, $\pi_{t,s} \approx 0$ is a **reasonable assumption** because inflation uncertainty over a few months is low — but this assumption **breaks down** for longer-maturity nominal bonds, where inflation uncertainty compounds
- **Example 11's calculation approach** (back out total yield from price, subtract known components to isolate the unknown) is a useful **general technique** for these decomposition-style exam questions — expect similar problems isolating any one of $l$, $\theta$, or $\pi$ given the others and a market price
- **Nominal bond's payoff is certain in currency terms but uncertain in real terms** — this is the conceptual crux distinguishing why nominal bonds need $\pi_{t,s}$ even when default risk is negligible
- This section is a **bridge reading**: expect the **next section(s)** to shift focus specifically to how the **central bank policy rate** and the **yield curve slope** move across business cycle phases — the practical, more directly testable application of everything built so far