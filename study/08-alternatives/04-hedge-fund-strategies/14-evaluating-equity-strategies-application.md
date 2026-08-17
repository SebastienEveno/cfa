---
layout: page
title: "Evaluating Equity Hedge Fund Strategies: Application"
permalink: /study/08-alternatives/04-hedge-fund-strategies/14-evaluating-equity-strategies-application/
prev: /cfa/study/08-alternatives/04-hedge-fund-strategies/13-conditional-risk-factor-model/
next: /cfa/study/08-alternatives/04-hedge-fund-strategies/15-evaluating-multi-manager-strategies-application/
---
## Summary: 4.14 | Evaluating Equity Hedge Fund Strategies: Application (CFA Level II — Alternative Investments)

---

This section applies the **conditional factor model** (from 4.13) empirically to **equity-related** hedge fund strategies, using TASS/CISDM data, 2000–2016.

---

### New Risk-Adjusted Metrics Introduced

$$\boxed{\text{Sortino ratio} = \text{Like Sharpe ratio, but uses DOWNSIDE DEVIATION instead of standard deviation}}$$
- Focuses specifically on returns **below a threshold** (e.g., zero) — captures **downside** risk only, ignoring upside volatility

$$\boxed{\text{Rho (}\rho\text{)} = \text{First-order SERIAL AUTOCORRELATION of a fund's returns with its own LAGGED returns}}$$
- **High Rho** → signals **SMOOTHED returns** → indicator of potential **illiquidity/infrequent trading** in underlying securities (since illiquid marks artificially dampen measured volatility)

---

### Exhibit 13 — Key Return Characteristics by Category (2000–2016)

**Notable findings**:
$$\boxed{\text{L/S Equity Hedge (TASS): HIGHEST mean return (11.30\%) AND highest standard deviation (22.86\%)}}$$
$$\boxed{\text{EMN (TASS): HIGHEST Sharpe ratio (among categories with} >4 \text{ funds)}}$$
$$\boxed{\text{L/S Equity Hedge (TASS): ALSO highest Sortino ratio, despite highest std dev}}$$
$$\boxed{\text{Global L/S Equity (CISDM): LARGEST Rho (17.43\%)}}$$

**Interpretation**: 
$$\boxed{\text{L/S equity managers accept BETA + ILLIQUIDITY exposure} \implies \text{outperform EMN on TOTAL returns, but with MORE volatility} \implies \text{LOWER Sharpe ratios than EMN}}$$

This pattern is described as **intuitive** — consistent with expectations given L/S equity's larger net long tilt vs. EMN's beta-neutral design.

---

### Exhibit 14 — Average Factor Exposures (Conditional Model)

**EMN strategies**: 
$$\boxed{\text{LOW equity market exposure (0.11, sig. at 10\%)} + \text{NEUTRAL exposure to other factors, BOTH normal and crisis periods}}$$
— Confirms EMN's design goal (from 4.04) is being achieved empirically.

**L/S equity strategies**: 
$$\boxed{\text{SIGNIFICANT (5\% level) equity beta in NORMAL periods, ranging from 0.24 (Europe) to 0.58 (US and US Small Cap)}}$$

**Crisis period behavior**: 
$$\boxed{\text{NO significant INCREMENTAL equity exposure (DSNP500) during crisis} \implies \text{but TOTAL crisis exposure (normal + incremental) remains POSITIVE and SIGNIFICANT for ALL L/S equity strategies}}$$

**Worked example**: US L/S Equity total crisis exposure = **0.58 + 0.03 = 0.61**.

**Important limitation flagged**: 
$$\boxed{\text{Average exposures MASK significant HETEROGENEITY between individual funds within a category}}$$

---

### Exhibit 15 — Revealing Heterogeneity: % of Funds with Significant Exposures

**Normal period equity exposure**: 
$$\boxed{\text{Most equity-related HFs (EXCEPT dedicated short-biased) show significant POSITIVE equity exposure: 30\%+ of EMN funds, 70\%+ of L/S equity funds}}$$

**Crisis period equity exposure**: 
$$\boxed{\text{FEWER THAN 40\% of L/S equity funds show ANY significant INCREMENTAL equity exposure; among those that do, the direction is MIXED (positive AND negative)}}$$

**Interpretation**: 
$$\boxed{\text{Managers largely SUCCEEDED in reducing adverse crisis effects} \implies \text{likely via deleveraging, outright stock/index selling (incl. shorts), and/or buying INDEX PUT OPTIONS}}$$
- On average, managers **didn't significantly reduce their long beta tilt**, but also **didn't make things worse** by aggressively "bottom picking" — consistent with the ~zero average incremental exposure seen in Exhibit 14

**CREDIT exposure**: 
$$\boxed{\text{Only} \sim 1/3 \text{ of L/S equity funds show significant CREDIT exposure} — \text{mainly NEGATIVE (i.e., don't benefit from spread narrowing/upgrades)}}$$
$$\boxed{\text{Among the} \sim 25\% \text{ with significant INCREMENTAL crisis-period CREDIT exposure} \implies \text{exposure becomes MORE POSITIVE} \implies \text{HURTS returns as spreads widen in sell-offs}}$$

**USD and VIX exposure**: 
$$\boxed{\text{MARGINAL in normal times (few funds significant)}}$$
$$\boxed{\text{Crisis period: significant ADDITIONAL exposures are mainly NEGATIVE}}$$

**Specific examples**:
- **~40% of Europe L/S Equity funds**: significant **negative** USD exposure — possibly reflecting expected **flight-to-quality into EUR or JPY** rather than USD during a crisis
- **~40% of these funds**: significant **negative** VIX exposure (i.e., **short volatility**) during crisis times

**Key cautionary finding**: 
$$\boxed{\text{Some high-profile hedge funds were HURT by being UNEXPECTEDLY short volatility during crises} \implies \text{underscores WHY understanding heterogeneity of factor exposures matters}}$$

---

### Worked Example 14 — Bearish Asset Management (BAM), Dedicated Short-Biased Fund

**Factor regression results** (interpreted, exact table not fully reproduced in text but key figures given):

**Normal period findings**: 
$$\boxed{\text{Highly significant NEGATIVE equity beta (SNP500)} \qquad \text{Highly significant NEGATIVE volatility beta (VIX)}}$$

**Interpretation**:
- **Negative equity exposure**: **expected** for a short-biased strategy ✓
- **Negative VIX loading**: consistent with **SHORT volatility** exposure → suggests BAM's manager may be **selling puts** against short positions, additionally trying to **capture a volatility premium**

**Crisis period equity beta**:
$$\boxed{-0.572 + 0.236 = -0.336}$$

**Interpretation**: 
$$\boxed{\text{Equity exposure remains NEGATIVE and SIGNIFICANT, but LESS negative than in normal times}}$$
$$\boxed{\text{Despite being short-biased, BAM had LESS negative equity risk exposure during crisis periods} \implies \text{manager may be PURPOSEFULLY "harvesting" short exposure into market weakness (i.e., covering/reducing shorts as the market falls)}}$$

---

### Exam Tips

- **Sortino ratio and Rho are new, testable metrics for this section**: Sortino = Sharpe but with downside deviation (focus on losses below a threshold); Rho = serial autocorrelation, high value = smoothed/illiquid returns — memorize both definitions and what a high vs. low reading implies
- **High Rho as an illiquidity red flag** is a key practical takeaway — a fund with suspiciously **low reported volatility** but **high Rho** may be masking true risk via stale/smoothed pricing (mark-to-model), connecting back to Module 6's discussion of illiquid asset valuation challenges
- **The "average masks heterogeneity" theme is THE central pedagogical point of this section**: Exhibit 14's clean average results (EMN neutral, L/S equity moderate positive beta) look reassuring, but Exhibit 15 reveals **wide dispersion** across individual funds — a strong candidate for "why is fund-level due diligence still necessary even with good category-level statistics" essay questions
- **Crisis-period equity beta calculation (Example 14 pattern)**: total crisis exposure = normal beta + incremental (D-factor) beta — practice this simple addition, as it's a recurring calculation format (also seen with US L/S Equity: 0.58 + 0.03 = 0.61)
- **The "short volatility during crisis" danger is a critical, real-world risk lesson**: even funds with an intuitively defensive strategy (short-biased equity) can carry a **hidden dangerous exposure** (short VIX) that only reveals itself in a crisis — a strong essay/case-study theme tying back to 4.13's core rationale for using conditional models
- **BAM example demonstrates "harvesting shorts into weakness"**: a nuanced interpretation where a REDUCTION in negative equity beta during crisis is actually a **sign of active, skilled risk management** (covering shorts as they become profitable), not necessarily a weakness — good for testing whether you can correctly interpret a beta *change* direction in context
- **Deleveraging/hedging tools observed empirically** (short sales, index futures, index put options) directly connects back to the **strategy implementation** techniques described in 4.02 (L/S equity) — a good cross-section integration point
- Given 4.01's roadmap mentioned Section 16 (portfolio contribution) is the culmination, and this section explicitly states "Then, we turn to understanding risks of multi-manager strategies" at its end — expect the **next section** to apply this same conditional factor framework specifically to **multi-manager strategies** (FoF and multi-strategy funds)
