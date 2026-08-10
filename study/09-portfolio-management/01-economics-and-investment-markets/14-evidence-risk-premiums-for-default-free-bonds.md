---
layout: page
title: "1.14 | Evidence on Risk Premiums for Default-Free Bonds"
permalink: /study/09-portfolio-management/01-economics-and-investment-markets/14-evidence-risk-premiums-for-default-free-bonds/
prev: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/13-slope-of-yield-curve-and-term-spread/
next: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/15-other-factors/
---
## Summary: 1.14 | Evidence on Risk Premiums for Default-Free Bonds (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Same LOS as 1.08/1.10/1.12/1.13 — this section provides **empirical evidence** that the yield curve embeds a **positive, maturity-increasing risk premium** (term premium), and shows how to **isolate/measure** it.

---

### The Core Claim — Yield Curve Embeds a Risk Premium

$$\boxed{\text{Yield curve} = \text{Interest rate expectations} + \text{Risk premium}}$$

**Recap of hedge logic**: Investors value assets that pay off **more in bad times** → drives down expected return / drives up price for such assets. Applied to bonds: if **short-dated** bonds are a **better hedge** (less positively correlated with bad times) than **long-dated** bonds, investors will pay a premium for short bonds → **long bonds trade at a discount** → **upward-sloping curve**.

---

### Historical Average Slopes (US/UK, 1900–2011)

$$\boxed{\text{Average slope: US} = 0.24\% \qquad \text{UK} = 0.14\%}$$
$$\boxed{\text{Post-1945: US} = 0.50\% \qquad \text{UK} = 0.40\%}$$

**Interpretation**: Positive average slopes historically → investors have generally been willing to pay a premium for **shorter-dated** bonds, implying longer-dated bonds are a **less effective hedge** against bad economic times.

---

### Exhibit 12 — Cross-Country Evidence (Canada, France, UK, US)

**Panel A — Yield spreads (longer minus shorter maturity)**: Almost all **positive** (one exception: UK 30 vs. 10 = −0.05).
$$\boxed{\text{Bond risk premium generally RISES with maturity} \implies \text{"term premium"}}$$

**Panel B — Total returns by maturity**: Returns generally **increase with maturity** across all four markets (e.g., US: 5.77% at 2yr → 9.07% at 30yr).

**Panel C — Correlation of bond total returns with GDP growth**: **Predominantly negative** across markets and maturities (e.g., US ranges from −7.30% to −14.33%).

$$\boxed{\text{Negative GDP correlation} \implies \text{Government bonds tend to pay off in BAD times} \implies \text{Investors pay a premium} \implies \text{Accept a LOWER return, i.e., hedge value}}$$

---

### Three Conclusions from Exhibit 12

$$\boxed{
\begin{array}{l}
1.\ \text{Government bond risk premiums are POSITIVE} \\
2.\ \text{They are related to consumption-hedging benefits of government bonds} \\
3.\ \text{They RISE with maturity} \implies \text{"normal" yield curve shape is UPWARD SLOPING}
\end{array}
}$$

**Applied to 2007–2011 case (callback to 1.12)**: The US Treasury curve's persistent upward slope through this period was likely **partly explained by a positive, maturity-increasing risk premium** on Treasuries — not solely by rate expectations.

---

### Measuring the Bond Risk Premium (BRP) Empirically

**Method**:
$$\boxed{\text{BRP}_{t,s} = \text{Yield on conventional bond} - \text{Yield on index-linked bond (same maturity)} - \text{Survey-based inflation expectations}}$$

**Logic**: 
- Index-linked bond yield ≈ proxy for real rate $l_{t,s}$
- Nominal minus real yield = BEI rate (from 1.11) = $\theta_{t,s} + \pi_{t,s}$
- Subtracting a **survey-based** measure of $\theta_{t,s}$ (rather than relying on the market-implied BEI, which already conflates expectations and premium) leaves just $\pi_{t,s}$ — the **bond risk premium**

---

### Exhibit 13 — UK Bond Risk Premium Over Time (1993–2018)

**Time-varying pattern**:
$$\boxed{1993\text{–mid-}1997: \text{BRP} \approx 1.5\% \qquad \text{mid-}1997\text{–}2005: \text{BRP} \approx 0.25\% \qquad 2013\text{–}2018: \text{BRP} \approx 1.42\%}$$

**Important caveat/imperfection**: The measure sometimes produces a **negative** BRP at certain points, which is **theoretically inconsistent** with risk aversion (a negative premium implies investors are willing to **pay** for taking on risk) — flagged as a limitation of this measurement approach, not a rejection of the underlying theory.

---

### Panel B — BRP Change During the 2008–09 Global Financial Crisis (Jul 2007 → Dec 2011)

$$\boxed{
\begin{array}{l|c}
\text{Country} & \text{Change in BRP} \\
\hline
\text{Australia} & -0.8\% \\
\text{Canada} & -1.1\% \\
\text{France} & -0.7\% \\
\text{Italy} & -1.7\% \\
\text{Japan} & -0.2\% \\
\text{UK} & -1.8\% \\
\text{US} & -0.4\%
\end{array}
}$$

$$\boxed{\text{BRP FELL for every market examined during the GFC}}$$

**Interpretation**:
$$\boxed{\text{Crisis} \implies \text{Investors placed GREATER value on bonds' consumption-hedging properties} \implies \text{Willing to pay HIGHER prices} \implies \text{Required risk premium FELL}}$$

**General implication**: Bond risk premiums are **not constant** — they tend to **rise** when investors place **less** value on the hedging properties of government bonds (e.g., calmer economic periods) and **fall** during crises/uncertainty when the hedge value is most prized.

---

### Exam Tips

- **Core empirical takeaway**: government bond risk premiums are (1) positive, (2) tied to consumption-hedging value, and (3) increasing with maturity — memorize this **three-part conclusion** verbatim, as it's the section's central thesis
- **Negative GDP-correlation logic (Panel C)** is the same hedge-value mechanism from 1.06 (covariance between payoff and marginal utility) applied empirically — bonds that do well when GDP is weak are valuable hedges, commanding **lower** required returns
- **BRP measurement formula is testable as a calculation**: conventional yield − index-linked yield − survey inflation expectations = bond risk premium. Know this is **distinct** from the simpler BEI calculation (nominal − real yield) in 1.11, since BEI still contains $\pi_{t,s}$ un-isolated
- **Negative BRP readings are a known limitation**, not a contradiction of theory — if asked, the correct interpretation is that the **empirical proxy is imperfect**, not that risk aversion theory is wrong
- **Crisis behavior is directly parallel to 1.11's BEI-during-crisis finding**: just as BEI rates fell during the GFC (disinflation expectations), BRP **also** fell during the GFC (flight-to-safety, higher hedge value) — both effects **reinforce** each other in pushing nominal bond yields down during the crisis
- **"Term premium" terminology**: this section explicitly introduces "term premium" as the common name for the maturity-increasing risk premium — expect this term to be used interchangeably with "bond risk premium" on the exam
- This section appears to **conclude Module 1's default-free bond risk premium discussion** — the accumulated framework (1.02 → 1.14) has now built the complete real rate → inflation → risk premium → yield curve shape → business cycle story; expect the **next reading/module** to pivot to **credit risk / risky (non-default-free) bonds**, or to equities specifically