---
layout: page
title: "1.07 | Default-Free Interest Rates and Economic Growth"
permalink: /study/09-portfolio-management/01-economics-and-investment-markets/07-default-free-interest-rates-economic-growth/
prev: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/06-risk-premiums-on-risky-assets/
next: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/08-real-default-free-bonds-interest-rates/
---
## Summary: 1.07 | Default-Free Interest Rates and Economic Growth (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Explain the relationship between: (1) the **long-term GDP growth rate**, (2) the **volatility** of that growth rate, and (3) the **average level of real short-term interest rates**.

---

### Relationship #1 — GDP Growth Level and Real Interest Rates

**Perfectly anticipated growth case**:
$$\boxed{\uparrow \text{Real GDP growth (known/forecastable)} \implies \uparrow \text{Real default-free interest rate}}$$

**Mechanism**: More goods/services available in the future relative to today → investors' willingness to substitute consumption over time **falls** → **less saving, more borrowing** → real rate rises (per Equation 4 from 1.04).

---

### Relationship #2 — GDP Growth Volatility and Real Interest Rates

Since GDP growth **cannot be perfectly anticipated** in reality:

$$\boxed{\text{Real rates are positively related to BOTH: (a) expected GDP growth AND (b) expected GDP growth volatility}}$$

---

### Worked Example 7 — Effect of Doubling Volatility

**Setup**: Double the standard deviation of the random shock $z_{t+s}$ from Example 1.

**One-period bond**: Expected value is **unchanged** from Example 1, but state prices become **more dispersed** (wider spread between good/bad state prices) — reflecting the higher volatility.

**Two-period bond results**:
- Higher volatility can even push the **good-state price above 1** (implying a negative yield) — flagged as "somewhat unrealistic," despite the *expected* price still being below 1
- **Risk-neutral price**: $0.872336$
- **Actual price**: $0.872303$
- **Covariance term**: $\gamma = 0.872303 - 0.872336 = \boxed{-0.000033}$ (more negative than the $-0.000008$ from Example 6's lower-volatility case)
- **Resulting holding-period return**: $4.771\%$, vs. $4.768\%$ in the original (lower-volatility) Example 6

$$\boxed{\uparrow \text{Volatility} \implies \text{More negative covariance} \implies \text{Investors require a HIGHER risk premium}}$$

---

### Two Practical Implications

**1. Trend growth level → real rate level**
$$\boxed{\text{Higher trend real GDP growth} \implies \text{Higher real default-free rates, other things equal}}$$
- **Expectation**: fast-growing developing economies (India, China) should show **higher** real default-free rates than slower-growing developed economies (Western Europe, Japan, US)
- **Why**: developing economies are typically **below their steady state**, growing faster to catch up → **marginal product of capital** is higher during this catch-up phase → real rate is higher
- This growth advantage **dissipates as the economy matures** (cited: Japan and Western Europe, 1950–2000)

**2. Growth volatility → real rate level**
$$\boxed{\text{More volatile GDP growth} \implies \text{Higher real interest rates, other things equal}}$$

---

### Example 8 — Practice Questions (with Answers)

**Q1. An asset's risk premium is high when:**
$$\boxed{\text{Answer: B — positive relationship between future payoff and investors' marginal utility from future consumption}}$$
*Rationale*: High payoff exactly when marginal utility is high (bad times) makes the asset unattractive as a hedge → investors demand extra compensation → high premium. (Note: this is a **positive covariance with marginal utility**, which — per 1.06 — corresponds to a *negative* covariance with $\Psi$ acting oppositely... the key link is payoff vs. marginal utility, not payoff vs. price.)

**Q2. Relationship between real risk-free rate and real GDP growth:**
$$\boxed{\text{Answer: C — positive}}$$

**Q3. Relationship between real risk-free rate and volatility of real GDP growth:**
$$\boxed{\text{Answer: C — positive}}$$

**Q4. Asset offers high positive returns during downturns — can its nominal required return be less than the nominal risk-free rate?**
$$\boxed{\text{Answer: A — Yes}}$$
*Rationale*: An asset that pays off well during bad times (when marginal utility is high) acts as a **hedge** → has a **negative risk premium** → its required return can fall **below** the risk-free rate. Investors are willing to accept a lower return for the insurance-like property.

**Q5. Why is the impact of above-trend real GDP growth on equity market valuation ambiguous?**

$$\boxed{\text{Numerator effect: } \uparrow \text{GDP growth} \implies \uparrow \text{expected corporate earnings} \implies \uparrow \text{equity value}}$$
$$\boxed{\text{Denominator effect: } \uparrow \text{GDP growth} \implies \uparrow \text{real risk-free rate} \implies \uparrow \text{discount rate} \implies \downarrow \text{equity value}}$$

**Conclusion**: The two effects work in **opposite directions** on Equation 1 (numerator up, denominator up) — which effect dominates **cannot be inferred** from the given assumptions alone, so the **net effect on equity valuation is ambiguous**.

---

### Exam Tips

- **Two positive relationships to memorize cold**: (1) GDP growth level ↔ real rates: **positive**; (2) GDP growth volatility ↔ real rates: **positive**
- **Developing vs. developed economy rates**: higher trend growth (catch-up phase, higher marginal product of capital) → structurally higher real rates — a classic exam application question
- **Hedge asset logic (Q1/Q4) is a recurring exam theme** from 1.06: assets that pay off when marginal utility is high (bad times) have **negative** risk premiums and can have required returns **below** the risk-free rate — don't assume all required returns exceed $r_f$
- **The "ambiguous effect" framework (Q5) is highly testable**: any macro shock that simultaneously affects **both** cash flows (numerator) and discount rates (denominator) in **the same direction of causation but opposite sign of impact** creates an **ambiguous** net valuation effect. Learn to identify numerator vs. denominator channels for a given macro scenario and check whether they reinforce or offset
- **Numerical volatility example (Example 7)** reinforces 1.06's covariance mechanism — higher dispersion in future states → larger magnitude (more negative) covariance term → higher risk premium; the specific numbers are illustrative, not independently testable
- This section **completes Module 1's foundational buildup** on GDP growth's role — expect subsequent sections to extend this framework to **inflation** and other macro factors (business cycle, credit spreads, etc.) affecting the full discount rate
