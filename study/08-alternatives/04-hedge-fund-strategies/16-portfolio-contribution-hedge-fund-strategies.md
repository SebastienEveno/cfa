---
layout: page
title: "Portfolio Contribution of Hedge Fund Strategies"
permalink: /study/08-alternatives/04-hedge-fund-strategies/16-portfolio-contribution-hedge-fund-strategies/
prev: /cfa/study/08-alternatives/04-hedge-fund-strategies/15-evaluating-multi-manager-strategies-application/
next: /cfa/study/08-alternatives/04-hedge-fund-strategies/17-summary/
---
## Summary: 4.16 | Portfolio Contribution of Hedge Fund Strategies (CFA Level II — Alternative Investments)

---

### Learning Outcome
Evaluate the impact of an allocation to a hedge fund strategy in a traditional investment portfolio.

*(This is Section 16 from 4.01's roadmap — the module's culminating practical application.)*

---

### Methodology — The 48/32/20 Combined Portfolio

$$\boxed{\text{Base traditional portfolio: 60\% stocks (S\&P 500 TR) + 40\% bonds (Bloomberg Barclays Corp AA Intermediate)}}$$

$$\boxed{\text{Add 20\% allocation to an EQUAL-WEIGHTED portfolio of ALL live funds in a given strategy category}}$$

$$\boxed{\text{Resulting combined allocation: 48\% stocks + 32\% bonds + 20\% hedge fund strategy}}$$

**Important caveat**: this is an **illustrative exercise** — no real investor would practically hold an equal-weighted allocation across *all* live funds in one category.

---

### Exhibit 19 — Overall Performance Results (2000–2016)

**Traditional 60/40 baseline**: Mean return **6.96%**, SD **8.66%**, Sharpe **0.62**, Sortino **1.13**, Max Drawdown **14.42%**.

**Highest mean return improvement**: 
$$\boxed{\text{US Small Cap L/S Equity: 7.53\% mean} \implies +57 \text{ bps improvement over the traditional portfolio}}$$

**Other strong return categories** (>7.30% mean): **fixed-income arbitrage, distressed securities, systematic futures**.

**General pattern**: 
$$\boxed{\text{Adding almost ANY hedge fund strategy (20\% allocation) DECREASES total portfolio SD while INCREASING Sharpe and Sortino ratios} \implies \text{hedge funds act as BOTH return enhancers AND diversifiers}}$$

---

### Sharpe vs. Sortino — Reminder of the Distinction

$$\boxed{\text{Sharpe ratio: penalizes BOTH upside and downside variability (uses standard deviation)}}$$
$$\boxed{\text{Sortino ratio: penalizes ONLY downside variability below a minimum target (uses downside deviation)}}$$

**Practical implication**: for strategies with **large negative tail events**, **Sortino is considered the better performance measure** (since it doesn't unfairly penalize beneficial upside volatility).

**Best Sharpe ratio combined portfolio**: 
$$\boxed{\text{Systematic futures: Sharpe} = 0.83 \text{ (highest)}}$$
Also strong: distressed securities, fixed-income arbitrage, global macro, equity market-neutral.

**Best Sortino ratio combined portfolios**: equity market-neutral (TASS), systematic futures, L/S equity hedge, event-driven (TASS).

---

### Exhibit 20 — Visualizing Risk-Adjusted Performance

$$\boxed{\text{Systematic futures, equity market-neutral, global macro, and event-driven strategies deliver SUPERIOR risk-adjusted performance when added to the traditional portfolio}}$$

**Key negative finding**:
$$\boxed{\text{Funds-of-funds and multi-manager funds do NOT meaningfully enhance risk-adjusted performance, DESPITE their flexibility to invest across many strategies}}$$

---

### Exhibit 21 — Risk (Standard Deviation) Reduction

**Traditional portfolio baseline SD**: 8.66%.

**Lowest SD combined portfolios** (excluding dedicated short-bias/bear market — too few funds, only 6 total): 
$$\boxed{\text{Systematic futures (6.94\%), FoF-macro/systematic, and equity market-neutral (}\sim7.0\%\text{)}}$$

**Notable overlap**: these are the **SAME categories** that also enhanced risk-adjusted returns (Exhibit 20) — reinforcing their dual role as **risk reducers AND return enhancers**.

**Highest SD (worst risk-reduction) combined portfolios**: 
$$\boxed{\text{Event-driven/distressed securities AND relative value/convertible arbitrage}}$$

**Explanation**: 
- Event-driven/distressed: **binary, long-biased** nature of these strategies
- Relative value/convertible arbitrage: typical **leverage downsizing/liquidity issues** during market stress

---

### Exhibit 22 — Maximum Drawdown Analysis

$$\boxed{\text{Drawdown = difference between a portfolio's HIGH-WATER MARK and a subsequent LOW POINT}}$$
$$\boxed{\text{Maximum drawdown = the LARGEST such difference over the period}}$$

**Traditional portfolio baseline max drawdown**: 14.42%.

**Smallest max drawdown combined portfolios**: 
$$\boxed{\text{Opportunistic strategies (global macro, systematic futures) + merger arbitrage + equity market-neutral}}$$

**Why these strategies protect capital well**: 
$$\boxed{\text{The conditional risk model (4.13-4.15) showed these strategies DID NOT carry significant equity/credit risk during crisis periods}}$$
$$\boxed{\text{They ALSO showed the LOWEST serial autocorrelation (Rho)} \implies \text{signals GOOD liquidity}}$$

**Conclusion**: these strategies mitigate risk because they're **not exposed to the same risks** as traditional assets, are **opportunistic**, and remain **liquid even during market stress**.

**Highest max drawdown (worst) combined portfolios**: L/S equity, event-driven/distressed securities, relative value/convertible arbitrage — **directly consistent** with the conditional risk model findings (4.14/4.15) that these strategies **retain equity risk** and develop **significant credit risk** during crises.

---

### Worked Example 15 — Evergreen Tech Endowment Case Study

**Setup**: $150M endowment (4-year college), 60/40 traditional allocation, supports 5% of annual spending, planning enrollment growth (3,000 → 4,000 students over 5 years).

**IC's stated criteria for a hedge fund allocation**:
$$\boxed{
\begin{array}{l}
a)\ \text{MAXIMIZE risk-adjusted returns} \\
b)\ \text{LIMIT downside risk} \\
c)\ \text{Do NOT impair portfolio LIQUIDITY} \\
\quad + \text{Fee sensitivity: AVOID fee layering}
\end{array}
}$$

**Four short-listed options compared** (48/32/20 combined portfolios):

$$\boxed{
\begin{array}{l|c|c|c|c|c}
\text{Category} & \text{Mean} & \text{SD} & \text{Sharpe} & \text{Sortino} & \text{Max DD} \\
\hline
\text{Traditional 60/40} & 6.96\% & 8.66\% & 0.62 & 1.13 & 14.42\% \\
\text{US small-cap L/S equity} & 7.53\% & 8.75\% & 0.68 & 1.23 & 27.02\% \\
\text{Event driven} & 7.19\% & 7.83\% & 0.71 & 1.31 & 20.57\% \\
\text{Sovereign debt FI arb} & 7.50\% & 7.82\% & 0.75 & 1.39 & 12.68\% \\
\text{FoF - equity} & 6.39\% & 7.76\% & 0.62 & 1.11 & 21.63\%
\end{array}
}$$

**Q1. LEAST suitable strategy?**

$$\boxed{\text{Answer: Fund-of-Funds - Equity}}$$

**Reasoning**:
- **No improvement** in Sharpe (0.62, unchanged) or Sortino (1.11, actually **slightly worse** than baseline 1.13)
- **Max drawdown 50% higher** (21.63% vs. 14.42%) → **more downside risk**, violating criterion (b)
- **Liquidity impairment**: FoF structure has **TWO levels** of redemption lock-ups/gates → violates criterion (c)
- **Fee layering**: FoF structure means **two fee layers** + **fee netting risk** → directly violates the IC's stated fee concern

**Q2. MOST suitable strategy?**

$$\boxed{\text{Answer: Sovereign Debt Fixed-Income Arbitrage}}$$

**Reasoning**:
- **Highest Sharpe (0.75) AND Sortino (1.39)** among all options → best risk-adjusted return improvement
- **Lowest max drawdown (12.68%)** — even **better** than the traditional portfolio alone → best downside protection
- **Liquidity preserved**: sovereign debt of developed markets typically has **good liquidity**
- **Single fee layer**: no FoF structure → **no netting risk**

---

### Exam Tips

- **THE CENTRAL, MOST TESTABLE FINDING of this entire section**: **systematic futures, equity market-neutral, and global macro consistently appear as the "best" strategies** across ALL THREE risk-adjusted metrics (highest Sharpe, best Sortino, lowest SD, lowest max drawdown) — memorize this convergent pattern, as it's likely to be tested directly
- **The FoF/multi-manager underperformance finding is a strong, counterintuitive, and highly testable conclusion**: despite offering diversification and manager access, FoF/multi-manager allocations **do NOT meaningfully improve** risk-adjusted portfolio metrics — directly reinforces 4.15's finding that multi-manager diversification failed to reduce crisis-period risk
- **Sharpe vs. Sortino selection logic**: for strategies with **large negative tail events** (e.g., merger arb, distressed, convertible arb — anything with binary/skewed outcomes), Sortino is the **preferred** metric since it doesn't penalize beneficial upside volatility — a good conceptual distinction to apply in essay answers
- **Example 15 is an EXCELLENT template for a portfolio construction/suitability exam question**: practice matching **each IC criterion** (risk-adjusted returns, downside risk, liquidity, fees) to the **specific quantitative/qualitative evidence** that supports or refutes suitability — this multi-criteria matching approach is very likely to appear in a similar form on the actual exam
- **Drawdown definition** (high-water mark to subsequent low, MAX = largest such difference) is a precise, simple, testable definition
- **Causal chain to remember**: strategies with **low equity/credit risk during crises + low serial autocorrelation (good liquidity)** = the strategies that **best protect** a traditional portfolio during stress — this ties together ALL of 4.13-4.16 into one coherent, unified conclusion
- **Worst risk-reduction categories** (event-driven/distressed, relative value/convertible arb) show HIGH drawdowns specifically because of their **binary/long-biased nature** (event-driven) and **leverage/liquidity fragility** (relative value) — good specific causal explanations to cite if asked "why doesn't strategy X protect a portfolio well?"
- **This section completes Module 4 entirely** (per 4.01's roadmap: Sections 1-12 individual strategies, Section 13 factor model, Section 16 portfolio contribution) — the module concludes with this practical, decision-useful synthesis. Expect either a **module summary page** next, or a transition to a **new Alternative Investments topic/module**
