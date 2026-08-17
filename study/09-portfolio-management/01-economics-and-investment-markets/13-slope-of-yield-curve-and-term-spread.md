---
layout: page
title: "1.13 | The Slope of the Yield Curve and the Term Spread"
permalink: /study/09-portfolio-management/01-economics-and-investment-markets/13-slope-of-yield-curve-and-term-spread/
prev: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/12-default-free-yield-curve/
next: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/14-evidence-risk-premiums-for-default-free-bonds/
---
## Summary: 1.13 | The Slope of the Yield Curve and the Term Spread (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Same LOS as 1.08/1.10/1.12 — this section connects yield curve **slope/inversion** directly to **recession prediction**.

---

### Recap — Decomposing the Yield Curve Slope

Per Equation 10, required return on default-free nominal cash flows = **real rate** + **expected inflation premium** + **inflation uncertainty risk premium**.

$$\boxed{\text{Expectations of rising/falling short-term rates} \iff \text{Expectations about future inflation AND/OR the maturity structure of inflation risk premiums}}$$

---

### Revisiting the UK 2007 Inverted Curve

**Mechanism explained**: If investors **expect interest rates to decline**, reinvesting proceeds from maturing short-term bonds at those (lower) future rates would **offset** the initial yield advantage of holding short-dated bonds today.

$$\boxed{\text{Expected declining short rates} \implies \text{Downward-sloping (inverted) yield curve}}$$

This explains the UK gilt curve's inversion in summer 2007 (referenced back from 1.12).

**Underlying drivers of short rates** (recap): the real rate (balancing saving/investment) + GDP growth level/volatility + variation of inflation around the central bank's target.

---

### Exhibit 11 — US and UK Term Spreads Since 1900

**Definition**: Term spread = yield on a **long-dated** government bond minus yield on an **equivalent one-year** bond.

**Historical episodes highlighted**:

**Mid-1970s — Steep positive slope**:
$$\boxed{\text{Steep curve} \implies \text{Expectations of SHARPLY RISING interest rates}}$$
- Context: high inflation and inflation expectations following the **1973 oil shock**

**1979–1980 — Steeply inverted curves (both US and UK)**:
$$\boxed{\text{Sharply inverted curve} \implies \text{Expectations of SHARPLY FALLING inflation and future rates}}$$
- **US policy rate peaked at 17.5%** (December 1980, under Fed Chairman **Paul Volcker**)
- **UK policy rate peaked at 17%** (November 1979, under PM **Margaret Thatcher**)
- Context: response to the **1979 second oil shock**; both governments made **inflation-fighting the top policy priority**
- Inversion signaled investors expected rates to fall **once inflation's root causes were addressed**

---

### The Core Recession-Prediction Mechanism

**Late-stage business cycle pattern**:
$$\boxed{
\begin{array}{l}
\text{Late expansion} \implies \text{Inflation peaks} \implies \text{Short-term rates relatively HIGH} \\
\text{If long-maturity yields reflect LOWER expected future inflation} \\
\text{AND diminished business credit demand} \\
\implies \text{Yield curve FLATTENS or INVERTS}
\end{array}
}$$

$$\boxed{\text{An inverted yield curve is often read as a PREDICTOR OF RECESSION}}$$

**General pattern in Exhibit 11**: recessions are **often preceded** by yield curve flattening or inversion — a recurring historical regularity across both the US and UK, over more than a century of data.

---

### Example 13 — Practice Questions (with Answers)

**Q1. Best instrument for studying the relationship between real interest rates and the business cycle:**
$$\boxed{\text{Answer: C — Default-free inflation-indexed bonds}}$$
*Rationale*: These strip out inflation and default risk, isolating the real rate ($l_{t,s}$) — the cleanest proxy, consistent with 1.08's use of index-linked bonds.

**Q2. Effect of an unanticipated increase in real GDP growth (and its volatility) on the coupon payments of an inflation-indexed bond:**
$$\boxed{\text{Answer: A — to rise}}$$
*Rationale*: Higher GDP growth (and higher volatility) → higher real risk-free rate $l_{t,s}$ (per 1.07) → since inflation-indexed bond coupons are tied to the indexed principal/real rate mechanics, higher required real return translates to higher coupon payments.

**Q3. What affects the yield spread between non-inflation-adjusted (nominal) and inflation-indexed (real) bonds of the same maturity:**
$$\boxed{\text{Answer: C — BOTH a risk premium for inflation uncertainty AND investors' inflation expectations}}$$
*Rationale*: Direct callback to the BEI decomposition from 1.11: $\text{BEI} = \theta_{t,s} + \pi_{t,s}$ — both components matter, not just one.

**Q4. Economic reason why an inverted yield curve may predict a recession:**

> **Solution**: Late-stage business cycles are typically characterized by relatively **high inflation** and **high short-term interest rates**. To the extent that longer-term yields reflect expectations of **declining inflation** and a **slackening in credit demand**, the yield curve would be expected to **flatten or invert**.

---

### Exam Tips

- **Q1–Q3 pattern recognition**: this Example 13 set is a strong template for how the exam likely tests Module 1's cumulative framework — expect similarly structured multi-part questions combining several LOS at once (real rate identification, GDP-growth-to-coupon linkages, BEI decomposition)
- **Historical anchors worth memorizing**: 1973 oil shock → steep positive slope (rate-hike expectations); 1979 oil shock + Volcker/Thatcher rate hikes → steeply inverted curve (rate-cut expectations once inflation defeated) — both are **concrete, textbook-citable examples**
- **Core recession-prediction logic** (Q4 answer) is very likely **directly testable as a short-answer/essay-style question** — memorize the causal chain: late-cycle high inflation/high short rates → longer yields reflect anticipated **disinflation + weaker credit demand** → curve flattens/inverts → **read as recession predictor**
- **Term spread definition**: long-maturity yield **minus** 1-year yield — make sure you know this is the standard convention used in Exhibit 11's century-long dataset
- **Don't overstate causality**: the reading is careful to frame the inverted curve as being **"often read as"** a recession predictor — it's an empirical regularity/leading indicator, not a deterministic law
- This section **effectively concludes** the yield-curve-shape discussion (level/slope/curvature from 1.12, now the term spread/recession link) — expect the **next section** of Module 1 to pivot toward either **credit spreads/risky bonds** or move into a **new module** given the "Economics and Investment Markets" framework has now covered the full default-free nominal/real rate story extensively
