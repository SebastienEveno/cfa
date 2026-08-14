---
layout: page
title: "6.08 | Sensitivity Analysis"
permalink: /study/09-portfolio-management/06-backtesting-and-simulation/08-sensitivity-analysis/
prev: /cfa/study/09-portfolio-management/06-backtesting-and-simulation/07-simulation-analysis/
next: /cfa/study/09-portfolio-management/06-backtesting-and-simulation/09-summary/
---
## Summary: 6.08 | Sensitivity Analysis (CFA Level II — Portfolio Management)

---

### Learning Outcome
Demonstrate the use of sensitivity analysis.

---

### What Sensitivity Analysis Does

$$\boxed{\text{Sensitivity analysis} = \text{A technique for exploring how a TARGET VARIABLE is affected by CHANGES in INPUT VARIABLES (e.g., the assumed return distribution)}}$$

**Motivation**: The multivariate **normal** distribution used in 6.07's Monte Carlo simulation is a **sensible first approximation** (few parameters needed) but **fails to capture negative skewness and fat tails** evident in real factor returns.

$$\boxed{\text{Since simulation results depend CRITICALLY on whether the chosen distribution is a reasonable proxy for the TRUE distribution, sensitivity analysis re-runs the simulation under a DIFFERENT distributional assumption}}$$

---

### The Alternative Distribution — Multivariate Skewed Student's t

**Why chosen**: A **natural extension** of the multivariate normal, specifically capable of capturing **skewness** and **excess kurtosis** — the exact properties the normal distribution misses.

**Trade-off**: **More mathematically complex**, requiring **more parameters** to estimate than the normal distribution.

---

### Procedure — Nearly Identical to 6.07's Monte Carlo Process

$$\boxed{\text{Only Steps 4 and 5 change: calibrate to a SKEWED t-DISTRIBUTION instead of normal, then simulate 1,000 sets of factor returns from THAT distribution}}$$

All other steps (target variable, decision variables, N=1,000, computing/analyzing target values) remain the same as before.

---

### Worked Example — First Simulated Trial (Exhibit 23)

**Skewed t-distribution Trial 1 factor returns** produce:

$$\boxed{r_{BM} = 1.21\% \qquad r_{RP} = 0.75\%}$$

*(Using equal weights of 0.125 for BM, and May 2019 RP weights per Exhibit 18 — same calculation method as 6.07)*

---

### Comparing Results Across ALL Four Methods (Exhibit 24)

**Methods now compared**: Backtesting, Historical Simulation, Monte Carlo (Normal), Monte Carlo (Skewed t).

**Sharpe ratio finding — consistent with 6.07**:
$$\boxed{\text{Sharpe ratio is INSENSITIVE to simulation method} \implies \text{RP CONSISTENTLY outperforms BM across ALL FOUR approaches}}$$

**CVaR (downside risk) finding — the key new insight**:
$$\boxed{\text{RP strategy: CVaR relatively INSENSITIVE across all methods}}$$
$$\boxed{\text{BM strategy: CVaR HIGHLY SENSITIVE to method choice}}$$

**Detailed BM CVaR pattern**:
- **Historical simulation** ≈ **rolling-window backtesting** (closely resemble each other)
- **BOTH Monte Carlo methods** (normal AND skewed t) → **UNDERESTIMATE** BM's true downside risk

$$\boxed{\text{Critical implication: even switching to the skewed t-distribution did NOT fix the underestimation problem for BM} \implies \text{Further sensitivity analysis with OTHER functional forms is warranted}}$$

---

### Distribution Plot Comparison (Exhibit 25)

**BM strategy (Panel A)**: **Large divergence** between historical simulation and both Monte Carlo methods — consistent with BM's genuine **negative skewness and excess kurtosis** not being adequately captured even by the skewed t-distribution attempt.

**RP strategy (Panel B)**: **All three simulation methods look fairly similar** — because RP's return distribution is **relatively symmetric with little excess kurtosis**, there's less non-normality for any method to fail to capture.

**Key conceptual takeaway**: 
$$\boxed{\text{Sensitivity analysis is MOST valuable/revealing for strategies with NON-NORMAL (skewed, fat-tailed) return distributions} — \text{it adds little new insight for already near-normal strategies (like RP)}}$$

---

### Worked Example 8 — Practice Questions (with Answers)

**Q1. NOT a caveat of rolling-window backtesting:**
$$\boxed{\text{Answer: C — "This technique is intuitive... mimics how investing is done in reality"}}$$
*(A and B are genuine caveats/limitations; C is actually a STRENGTH, not a caveat.)*

**Q2. Situation MOST likely to involve data snooping:**
$$\boxed{\text{Answer: B — Trying many models, backtesting each, picking the best WITHOUT accounting for model selection bias}}$$
*(A is actually GOOD practice — cross-validation across markets; C is a MITIGATION technique, not the problem itself.)*

**Q3. Situation LEAST likely to involve scenario analysis:**
$$\boxed{\text{Answer: A — Testing strategies on Nikkei 225 vs. TOPIX 1000}}$$
*(This is testing on DIFFERENT stock universes/indexes, not different economic/market REGIMES — B and C are genuine scenario analysis examples: trade-agreement vs. not, high-vol vs. low-vol.)*

**Q4. FALSE statement about historical vs. Monte Carlo simulation:**
$$\boxed{\text{Answer: B — "Neither... makes use of a random number generator"}}$$
*(FALSE — BOTH methods use a random number generator; historical simulation uses it to select which historical month to draw, Monte Carlo uses it to draw from the specified distribution. A and C are both TRUE statements.)*

**Q5. FALSE statement about Monte Carlo simulation:**
$$\boxed{\text{Answer: C — "The Monte Carlo simulation process is deterministic and non-random in nature"}}$$
*(FALSE — Monte Carlo is explicitly RANDOM/non-deterministic; this is its defining characteristic, contrasted with deterministic rolling-window backtesting. A and B are both TRUE.)*

**Q6. Situation MOST likely to involve sensitivity analysis:**
$$\boxed{\text{Answer: A — Changing the distribution assumption from normal to skewed t}}$$
*(B and C describe HISTORICAL SCENARIO ANALYSIS — splitting by recession/volatility regime — not sensitivity analysis, which specifically concerns testing different INPUT/DISTRIBUTIONAL assumptions.)*

---

### Exam Tips

- **Core definitional distinction (critical for Q3 and Q6)**: **Sensitivity analysis** = varying **input assumptions** (e.g., distributional form) to see how outputs change; **Historical scenario analysis** (from 6.06) = examining performance across **discrete historical/economic regimes** (recession vs. expansion, high-vol vs. low-vol). These are **easy to confuse** on the exam — Q6's correct answer (A) hinges on recognizing this distinction precisely
- **Skewed t-distribution's value proposition**: extends normal distribution to capture **skewness + kurtosis**, at the cost of **more parameters/complexity** — a direct continuation of the bias-variance trade-off theme from 6.07
- **THE key empirical finding to remember**: even after switching to a MORE sophisticated distribution (skewed t), the **BM strategy's downside risk was STILL underestimated** by Monte Carlo methods — this is a powerful, humbling lesson: **better models don't automatically fix mis-specification**, and **further sensitivity testing may still be needed**
- **Why RP is less sensitive to distributional choice**: because its **actual return distribution is closer to symmetric/normal** to begin with — there's simply less non-normality for any method to miss. This reinforces the diversification theme running through the entire module
- **Q4 and Q5's "false statement" pattern** (both methods DO use random number generators; Monte Carlo IS random, not deterministic) tests basic definitional precision — make sure you can state clearly **what makes each method random** vs. what's deterministic (rolling-window backtesting is the ONLY deterministic method in this comparison set)
- This section **completes Module 6's technical content** (backtesting → biases → historical scenario analysis → historical/Monte Carlo simulation → sensitivity analysis) — you've now also seen the **Module 6 Summary (6.09)** from earlier in this conversation, so this closes out the full module. Expect either a transition to a **new module** or **practice/review questions** covering the whole Module 6 arc next