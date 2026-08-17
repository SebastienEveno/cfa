---
layout: page
title: "1.08 | Real Default-Free Interest Rates and the Business Cycle"
permalink: /study/09-portfolio-management/01-economics-and-investment-markets/08-real-default-free-bonds-interest-rates/
prev: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/07-default-free-interest-rates-economic-growth/
next: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/09-yield-curve-and-business-cycle/
---
## Summary: 1.08 | Real Default-Free Interest Rates and the Business Cycle (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Explain how the **phase of the business cycle** affects: policy/short-term rates, the **slope of the term structure**, and the **relative performance of bonds of differing maturities**.

---

### Recap of the Core Relationship

$$\boxed{l_{t,s} \text{ (real risk-free rate) is positively related to: (1) real GDP growth level, AND (2) volatility of real GDP growth}}$$

**Mechanism recap**: Willingness to substitute future wealth for current consumption is **inversely** related to changes in real GDP growth → this drives the positive rate-growth relationship established in 1.04/1.07.

**Equation 1 link**: $l_{t,s}$ is one component of the discount rate applied to **all** financial instruments' cash flows.

---

### Empirical Evidence — Inflation-Linked Bonds as a Proxy

**Why inflation-linked bonds?** They pay a **real** return plus CPI-indexation, so their yields directly proxy the real default-free rate $l_{t,s}$, stripping out inflation compensation ($\theta_{t,s}$).

- Issued by developed economies (Canada, France, Germany, Italy, Sweden, UK, US) and some developing economies (Brazil)
- **UK gilts**: both coupon **and** principal indexed to CPI
- **US TIPS**: principal indexed; coupon is a function of the indexed principal
- Net effect in both structures: **inflation → higher coupon and principal payments**

---

### Exhibit 1 — Cross-Sectional Evidence (July 2007, pre-GFC)

**Real yields observed**: Australia 3.4%, US 2.6%, UK 2.5%, Italy 2.4%, France/Sweden 2.3%, Japan 1.2% (lowest)

**Pattern**:
- **Japan**: lowest yield, consistent with historically **low and stable** growth
- **Australia**: highest yield, consistent with relatively **strong** growth

**Correlations** (limited sample, but directionally supportive of theory):
$$\boxed{\text{Corr(yields, historical growth)} = 0.57 \qquad \text{Corr(yields, historical growth volatility)} = 0.74}$$

**Caveat on weak pattern clarity**: Real yields are **forward-looking** (reflect expected future growth/volatility), while GDP data used is **historical** — the past may be a poor guide for the future, especially for fast-developing economies or after major shocks (e.g., Lehman collapse).

---

### Example 9 — UK Index-Linked Gilts Over Time (1985–2007)

**Why the UK**: Oldest index-linked government bond market (first issued 1981); US TIPS only began in 1997.

**Observation (Exhibit 2, Panel A)**: UK real yields show a **clear downward trend, 1985–2007** (volatile but declining).

**Testing the growth explanation**: Real GDP growth averaged **2.8%** (1985–1999) vs. **2.7%** (2000–2007) — **essentially unchanged** → growth-level story does **not** explain the yield decline.

**Testing the volatility explanation**: UK GDP growth volatility (3-year moving std. dev.) **declined dramatically, 1995–2007** — a global phenomenon, also seen across **OECD** countries, dubbed **"the Great Moderation."**

$$\boxed{\text{Conclusion: Declining GDP growth VOLATILITY (not growth level) most plausibly explains the falling real yields, 1999–2007}}$$

**Broader implication**: Even where index-linked bond markets didn't exist, declining global volatility likely lowered real rate components **embedded within conventional government bond yields** elsewhere too.

---

### Example 10 — Post-GFC Real Yields (2008–2011)

**Puzzle**: By end-2011, real yields had **fallen further** despite the GFC causing volatility to **rise substantially** — the opposite of what the volatility relationship alone would predict.

**Exhibit 3 data (Dec 2011)**: Australia 0.9%, Japan 0.8%, France 0.5%, Sweden 0.1%, Italy 2.1%, **UK −1.1%, US −0.9%** (UK/US both **negative**)

**Resolution — growth expectations dominated**:
$$\boxed{\text{Higher volatility} \uparrow \implies \text{would predict HIGHER yields, but...}}$$
$$\boxed{\text{Investors expected LOWER future real growth} \implies \text{dominated, pushing equilibrium real yields DOWN (even negative)}}$$

**Additional contributing factors for negative yields**:
1. **Inflation fears**: aggressive QE (US, UK formal; eurozone informal) may have led investors to accept low/negative real yields **in exchange for inflation protection**
2. **Safe-haven demand**: index-linked developed-market bonds are **specialized and in limited supply** — in times of crisis/uncertainty, this scarcity + safety premium can independently **drive yields down**

---

### Summary Framework — Simplified Pricing Equation for a Real Default-Free Bond

$$\boxed{P_{t,s} = \frac{1}{(1+l_{t,s})^s}} \quad \text{(Equation 9)}$$

**Why so simple**: Since the cash flow at $t+s$ is **certain** (fixed-interest, default-free), the **only** variable that can move the bond's price is $l_{t,s}$ itself.

$$\boxed{l_{t,s} \text{ is determined by real economic growth and its volatility, via the aggregation of individual saving/consumption decisions}}$$

---

### Exam Tips

- **Distinguish the two explanatory stories carefully**: the reading demonstrates with real UK data that a *growth-level story* can fail (flat growth 1985–2007) while a *volatility story* succeeds (declining volatility → declining yields) — expect exam scenarios that ask you to pick the correct explanatory driver given both growth and volatility data
- **The Great Moderation** (declining global volatility, ~1990s–2007) is a specific historical term worth recognizing
- **Post-GFC negative real yields (Example 10) is a key "exception that proves the rule" case**: rising volatility *should* raise yields, but **falling growth expectations dominated** — a testable example of two competing forces where the *magnitude* of one effect outweighs the other, similar to the "ambiguous effect" framework from 1.07
- **Additional non-fundamental drivers of yields**: don't forget **QE/inflation fears** and **safe-haven scarcity premium** as real-world factors that can push real yields below what pure growth/volatility theory would predict
- **Equation 9 is a clean, testable simplification**: for a real default-free bond, price changes are driven **exclusively** by changes in $l_{t,s}$ — no cash flow uncertainty to worry about, unlike risky assets
- Ties directly to the module's overarching structure: this section is **empirical validation** of the theoretical relationships built in 1.04–1.07; expect the **next sections** to shift toward the **business cycle's effect on the term structure/yield curve slope** (per this section's LOS, which explicitly mentions term structure slope and relative bond performance — likely the focus of 1.09+)
