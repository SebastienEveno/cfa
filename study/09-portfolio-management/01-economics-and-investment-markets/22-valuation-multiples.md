---
layout: page
title: "1.22 | Valuation Multiples"
permalink: /study/09-portfolio-management/01-economics-and-investment-markets/22-valuation-multiples/
prev: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/21-how-big-risk-premium/
next: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/23-commercial-real-estate/
---
## Summary: 1.22 | Valuation Multiples (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Describe **cyclical effects on valuation multiples**.

---

### The P/E Ratio — Definition and Interpretation

$$\boxed{P/E = \frac{\text{Current share price}}{\text{Earnings per share (EPS)}}}$$

**What it tells investors**: The price paid **per dollar of EPS**.

| P/E Level (relative to market) | Market Implication |
|---|---|
| **Low P/E** | Investors unwilling to pay much per $1 of earnings — likely reflects **low expected future earnings growth** |
| **High P/E** | Investors willing to pay a premium per $1 of earnings — likely reflects **expected rapid earnings growth** |

**Two variants**:
$$\boxed{\text{Historical/Trailing P/E} = \text{based on LAST year's EPS} \qquad \text{Leading/Forward P/E} = \text{based on ESTIMATED future EPS}}$$

**Relationship**: If EPS is expected to **grow**, then **Historical P/E > Forward P/E** (since forward EPS in the denominator is larger).

**Key caveat**: What counts as "high" or "low" P/E is **relative** — depends on the specific market, sector, company, and **economic backdrop**.

---

### The P/B Ratio — Definition and Interpretation

$$\boxed{P/B = \frac{\text{Share price}}{\text{Net assets per share (assets} - \text{liabilities)}}}$$

**What it tells investors**: The extent to which share value is **"covered"** by net assets (some tangible — e.g., buildings; some intangible — e.g., patents/copyrights; not all assets appear on the balance sheet).

**Interpretation**:
$$\boxed{\text{Higher P/B} \implies \text{Greater growth expectations, BUT lower "safety margin" if expectations disappoint}}$$

Like P/E, what constitutes high/low P/B is **market-, sector-, and stock-specific**.

---

### Exhibit 26 — US Trailing P/E, 1900–2018

**Historical trajectory**: Starts at **22 (1900)** → rises to **25 (1920s)** → falls to **18 (1950)** → rises to a **peak of 48 around 2000** → falls back to **20 (2018)**.

---

### The 1990s P/E Expansion — Explaining the Rise

**Key data point**: 
$$\boxed{\text{Average trailing US P/E, 1900–1990} = 13.5 \qquad \text{Late 1990s/early 2000s} \approx 45}$$

**Ad hoc explanations offered at the time** (per equity strategists): end of the Cold War, improved macro-policy (recessions "a thing of the past"), the internet revolution.

**Rigorous explanation — via Equation 15/16 framework**: A higher P/E can be justified by **any one or a combination** of the following:

$$\boxed{
\begin{array}{l}
1.\ \uparrow \text{Expected future real earnings growth} \\
2.\ \downarrow \text{Real interest rates } (l_{t,s}), \text{ possibly from falling real GDP growth volatility} \\
3.\ \downarrow \text{Inflation expectations } (\theta_{t,s}) \\
4.\ \downarrow \text{Uncertainty about future inflation } (\pi_{t,s}) \\
5.\ \downarrow \text{Equity risk premium } (ERP_{i,t,s})
\end{array}
}$$

**Logic**: Any decline in the **denominator** (discount rate components) or increase in expected growth (**numerator**) → justifies higher P (price) relative to E (earnings) → higher **equilibrium P/E**.

**Skepticism at the time**: Not all investors were convinced. **Alan Greenspan** (Fed Chairman) famously described 1996 equity valuations as reflecting **"irrational exuberance"** among investors, questioning whether such high P/Es relative to history were justified by fundamentals.

---

### The Cyclically Adjusted P/E (CAPE) — Robert Shiller's Alternative Measure

$$\boxed{
CAPE = \frac{\text{Real (inflation-adjusted) equity price}}{\text{10-year moving average of real (inflation-adjusted) earnings}}
}$$

**Purpose**: Using a **10-year moving average of earnings** in the denominator (instead of a single year) **smooths out short-term earnings volatility**, giving a cleaner cyclical valuation signal than the standard P/E.

---

### Exhibit 27 — US CAPE, 1900–2018

**Trajectory**: Starts at **22 (1900)** → falls to **15 (1920)** → rises to **33 (1930)** → falls to **15 (1933)** → **peaks at 45 in 1999** → falls to **30 (2018)**.

**Notable historical peaks**: **1929, 1965, and 1999** all show elevated CAPE levels — periods where equity investors paid historically high prices relative to smoothed earnings.

---

### CAPE as a Predictor — 10-Year Forward Real Returns

**Following CAPE PEAKS** (expensive valuations):

$$\boxed{
\begin{array}{l|c}
\text{Peak Year} & \text{Avg. Real Return, Next 10 Years} \\
\hline
1929 & -0.3\%/\text{yr} \\
1965 & -5.4\%/\text{yr} \\
1999 & -4.1\%/\text{yr}
\end{array}
}$$

**Following CAPE TROUGHS** (cheap valuations):

$$\boxed{
\begin{array}{l|c}
\text{Trough Year} & \text{Avg. Real Return, Next 10 Years} \\
\hline
1921 & +12.3\%/\text{yr} \\
1980 & +7.3\%/\text{yr}
\end{array}
}$$

**Key empirical pattern**: 
$$\boxed{\text{HIGH CAPE (expensive)} \implies \text{POOR subsequent 10-year real returns}}$$
$$\boxed{\text{LOW CAPE (cheap)} \implies \text{STRONG subsequent 10-year real returns}}$$

This is presented as **evidence of mean reversion** in equity valuations over long horizons.

---

### Exam Tips

- **P/E and P/B formulas and interpretation direction** (high vs. low relative valuation) are basic building blocks — make sure trailing vs. forward P/E distinction is second nature
- **The five-factor list explaining P/E expansion is HIGHLY testable**: memorize all five drivers (earnings growth expectations ↑, real rates ↓, inflation expectations ↓, inflation uncertainty ↓, ERP ↓) — this is a direct, practical application of the entire Equation 15/16 framework built across 1.02–1.21, and a strong candidate for an essay/explain-type question
- **CAPE formula and purpose**: know that CAPE uses a **10-year earnings average** specifically to smooth cyclicality — a good contrast point vs. standard trailing/forward P/E
- **CAPE mean-reversion data (peaks vs. troughs)** is a specific, memorable empirical result — useful for questions on valuation-based return forecasting or market timing discussions
- **"Irrational exuberance" (Greenspan, 1996)** is a citable, famous phrase — good for questions referencing historical valuation debates or behavioral aspects of markets
- **Important nuance**: high P/E is **not inherently irrational** — the reading is careful to show it *can* be fully justified by fundamentals (lower rates, lower risk premium, higher growth expectations); the Greenspan quote represents **one perspective**, not a definitive judgment — don't treat high valuations as automatically a "bubble" on the exam
- This section **applies the entire Module 1 discount-rate framework practically** to valuation multiples — a natural point for the module to **wrap up** or transition into a **summary/review** page next, given how comprehensively it ties together real rates, inflation, credit, and equity risk premium components into a single observable market metric (P/E)
