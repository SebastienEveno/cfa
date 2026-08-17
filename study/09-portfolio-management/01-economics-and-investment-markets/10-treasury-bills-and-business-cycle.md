---
layout: page
title: "1.10 | Treasury Bills and the Business Cycle"
permalink: /study/09-portfolio-management/01-economics-and-investment-markets/10-treasury-bills-and-business-cycle/
prev: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/09-yield-curve-and-business-cycle/
next: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/11-conventional-gov-bonds/
---
## Summary: 1.10 | Treasury Bills and the Business Cycle (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Same LOS as 1.08/1.09 — this section provides the **empirical/policy mechanics** of short-term rates: inflation linkage, central bank behavior, and the **Taylor rule**.

---

### Core Relationship — Nominal Rate Decomposition

$$\boxed{\text{Nominal rate} = \text{Real rate (balancing savers/investors)} + \text{Expected inflation}}$$

**Implication**: Short-term nominal rates are **positively related** to:
1. Short-term real interest rates
2. Short-term inflation expectations
3. (Indirectly) higher/more volatile GDP growth and higher average inflation over time — carrying forward the relationships from 1.07/1.08

---

### Exhibit 4 — T-Bill Yields Track Inflation Closely

**US data (1957–present)**: T-bill rate curve **closely follows** the inflation curve — inflation peaked near **14% in 1979**, with T-bill rates moving in tandem.

**UK data (1961–present)**: Similar pattern — UK inflation peaked at **26% in 1975**; UK T-bill rate peaked at **15% in 1980**, also tracking inflation with a lag.

$$\boxed{\text{Key takeaway: Inflation environment is a KEY driver of short-term nominal rates}}$$

**Caveat**: Measured (realized) inflation ≠ expected inflation, but **current inflation heavily shapes inflation expectations**, especially over a T-bill's very short horizon.

---

### Exhibit 5 — T-Bill Yields Track Central Bank Policy Rates

**US**: Fed funds rate and T-bill rate curves **closely overlap** — from ~1% (1954) to 18% peak (1980s) down to near-zero (2012)

**UK**: UK policy rate and T-bill rate move together — from 7% (1970) to 17% peak (1981) down to 1% (2013)

**Central bank behavior pattern**:
$$\boxed{\text{Cut policy rate when activity/inflation "too low"} \qquad \text{Raise policy rate when activity/inflation "too high"}}$$

---

### The Taylor Rule (Equation 12)

$$\boxed{
pr_t = l_t + \iota_t + 0.5(\iota_t - \iota_t^*) + 0.5(Y_t - Y_t^*)
}$$

*(equivalently written with weight 1.5 on inflation once combined — see note below)*

**Where**:
- $pr_t$ = policy rate at time $t$
- $l_t$ = level of real short-term rate balancing long-term savings/borrowing
- $\iota_t$ = actual inflation rate
- $\iota_t^*$ = target/preferred inflation rate
- $Y_t - Y_t^*$ = **output gap** (log actual GDP − log potential GDP), in percentage terms

---

### Understanding the Output Gap

| Output Gap | Meaning | Analogy | Typically Associated With |
|---|---|---|---|
| **Positive** | Economy producing **beyond** sustainable capacity | Marathon runner starting too fast — will "overheat" | High/rising inflation |
| **Negative** | Economy producing **below** sustainable capacity | Runner starting too slow — must speed up later | High unemployment |

---

### Taylor Rule Weighting Logic

$$\boxed{\text{Weight on inflation} = 1.5 \qquad \text{Weight on output gap} = 0.5}$$

**Why inflation gets more weight**: Inflation appears **twice** in the equation (once directly as $\iota_t$, once again in the $(\iota_t - \iota_t^*)$ gap term) — the combined effective weight on inflation is 1.5x that on the output gap. **Purpose**: prioritize stabilizing inflation near target over the longer term.

---

### The Neutral Policy Rate

$$\boxed{\text{Neutral rate} = l_t + \iota_t^* \quad \text{(when inflation is at target AND output gap = 0)}}$$

**Definition**: The policy rate that **neither spurs on nor impedes** real economic activity.

**Directional rules**:
- Inflation **above** target → policy rate should be **above** neutral
- Inflation **below** target → policy rate should be **below** neutral
- Output gap **positive** → policy rate should be **above** neutral
- Output gap **negative** → policy rate should be **below** neutral

---

### Worked Example — Taylor Rule Calculation

**Given**: $l_t = 2.0\%$, $\iota_t = 3.0\%$, $\iota_t^* = 2.0\%$, output gap $= 2.0\%$

$$\boxed{pr_t = 2.0\% + 3.0\% + 0.5(3.0\% - 2.0\%) + 0.5(2.0\%) = 6.5\%}$$

**Breaking it down**: $2.0 + 3.0 + 0.5(1.0) + 0.5(2.0) = 2.0 + 3.0 + 0.5 + 1.0 = 6.5\%$

---

### Exhibit 6 — Taylor Rule vs. Actual Policy Rates (Historical, 1990–2018)

| Economy | Finding |
|---|---|
| **United States** | Taylor rule tracked Fed policy closely until early-2000s tech bubble collapse; Fed kept rates **"too low for too long," 2002–2005** |
| **Canada** | Similar pattern to the US |
| **United Kingdom** | Less evidence of "too low for too long" post-tech-bubble |
| **All three (post-GFC)** | Central banks cut rates sharply during liquidity/credit crisis; by **end of 2018**, Taylor rule suggested rates were **"too low"** in all three economies |

---

### Policy Errors and Business Cycle Amplification

$$\boxed{\text{Central banks can EXAGGERATE (not just moderate) the business cycle via policy errors}}$$

- **Rates too low for too long** → risk of **credit bubble**
- **Rates too high for too long** → risk of **recession/depression-like conditions**

---

### Short-Term Interest Rate Summary — Key Drivers

$$\boxed{
\begin{array}{l}
\text{Short-term default-free rates driven by:} \\
1.\ \text{Inflation environment/expectations} \\
2.\ \text{Real economic activity (via household saving/investment decisions)} \\
3.\ \text{Central bank policy rate (fluctuating around the neutral rate)}
\end{array}
}$$

**The neutral rate itself is not fixed** — it varies with:
- The level of real economic growth and its expected volatility
- Changes in the central bank's **inflation target**

**Historical UK inflation target changes** (illustrative of target evolution):
- 1992–1997: target band **2%–4%**
- 1997: target became **2.5%** ± 1 percentage point
- 2003: target changed to **2.0%** ± 1 percentage point, with a **different inflation measure definition**

---

### Exam Tips

- **Memorize the Taylor rule formula and weights** (1.5 on inflation, 0.5 on output gap) — this is a **high-probability calculation question** on the exam, practice plugging in given values quickly
- **Output gap sign interpretation** is a classic testable point: positive → inflationary pressure/above-capacity; negative → unemployment/below-capacity — know the "marathon runner" intuition as a memory aid
- **Neutral rate = $l_t + \iota_t^*$** only when inflation is at target AND output gap is zero — a frequently tested condition-based definition
- **Directional policy rate rules relative to neutral**: above target inflation → above neutral rate; positive output gap → above neutral rate (and the mirror-image for below/negative) — expect scenario-based questions applying these rules
- **"Too low for too long" as a policy error concept**: the US 2002–2005 example (per the Taylor rule) is a specific historical illustration worth remembering — policy errors can **amplify**, not dampen, business cycles
- **T-bill yields empirically track BOTH inflation AND policy rates** — this dual empirical linkage (Exhibits 4 and 5) reinforces the theoretical decomposition (real rate + inflation) from 1.09
- This section is the **last piece on short-term rates** — the reading explicitly signals the **next section shifts to longer-term nominal default-free government bonds** (likely term structure/yield curve slope across the business cycle, tying back to this section's LOS)
