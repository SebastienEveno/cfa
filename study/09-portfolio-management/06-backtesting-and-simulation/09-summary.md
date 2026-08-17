---
layout: page
title: "6.09 | Summary — Module 6: Backtesting and Simulation"
permalink: /study/09-portfolio-management/06-backtesting-and-simulation/09-summary/
prev: /cfa/study/09-portfolio-management/06-backtesting-and-simulation/08-sensitivity-analysis/
---
## Summary: 6.09 | Summary — Module 6: Backtesting and Simulation (CFA Level II — Portfolio Management)

---

This page consolidates the entire module: rolling-window backtesting → common biases → historical scenario analysis → historical/Monte Carlo simulation → sensitivity analysis.

---

### Core Objective

$$\boxed{\text{Main objective of backtesting} = \text{Understand the risk-return trade-off of a strategy by approximating the REAL-LIFE investment process}}$$

---

### Rolling-Window Backtesting — The Five Steps (recap from 6.03)

$$\boxed{
\begin{array}{l}
1.\ \text{Specify investment hypothesis and goals} \\
2.\ \text{Determine rules/processes behind the strategy} \\
3.\ \text{Form the portfolio per those rules} \\
4.\ \text{Rebalance periodically} \\
5.\ \text{Compute performance and risk profiles}
\end{array}
}$$

**Mechanics**: rolling-window (walk-forward) framework — fit/calibrate on in-sample data, rebalance, track out-of-sample performance, roll forward.

$$\boxed{\text{Rolling-window backtesting is a PROXY for actual investing}}$$

---

### Behavioral Biases (recap from 6.05)

$$\boxed{\text{Key biases to guard against: SURVIVORSHIP BIAS and LOOK-AHEAD BIAS}}$$

*(Data snooping was also covered in 6.05, though not explicitly named in this summary's bullet — worth remembering it as the third major bias category.)*

---

### Why Backtesting Alone Isn't Enough — Non-Normality

$$\boxed{\text{Asset/factor returns are often NEGATIVELY SKEWED, exhibit EXCESS KURTOSIS (fat tails), and show TAIL DEPENDENCE — properties standard backtesting may not fully capture, especially for DOWNSIDE risk}}$$

This is the **core motivation** for all the complementary techniques that follow.

---

### Historical Scenario Analysis (recap from 6.06)

$$\boxed{\text{Financial data face STRUCTURAL BREAKS} \implies \text{Scenario analysis helps understand strategy performance across DIFFERENT structural regimes}}$$

(e.g., recession vs. expansion, high- vs. low-volatility)

---

### Historical Simulation (recap from 6.07)

$$\boxed{\text{Relatively straightforward; shares similar PROS and CONS with rolling-window backtesting}}$$

**Shared key assumption**: the historical distribution pattern **sufficiently represents future uncertainty**.

**Technique**: **Bootstrapping** (random draws **with replacement**) is commonly used.

---

### Monte Carlo Simulation (recap from 6.07)

$$\boxed{\text{More SOPHISTICATED than historical simulation}}$$

**Most important decision**: choice of **functional form** for the statistical distribution of decision variables.

$$\boxed{\text{Multivariate normal distribution: commonly used for its SIMPLICITY, BUT cannot capture negative skewness or fat tails present in factor/asset returns}}$$

---

### Sensitivity Analysis (recap from 6.08)

$$\boxed{\text{Explores how a TARGET VARIABLE and RISK PROFILES respond to changes in INPUT variables} \implies \text{Reveals limitations of the conventional (normal) Monte Carlo assumption}}$$

$$\boxed{\text{Multivariate SKEWED t-distribution: accounts for skewness/kurtosis, BUT requires MORE parameters} \implies \text{Larger ESTIMATION ERRORS}}$$

---

### Exam Tips — Full Module 6 Review Checklist

- **Five-step rolling-window process** and the **three-step overall backtesting framework** (design → simulation → output analysis, from 6.03) are the module's structural backbone — know both levels of granularity
- **Three biases to distinguish cleanly**: survivorship bias (subset of look-ahead bias), look-ahead bias (reporting lags, revisions, database backfills), and data snooping (cherry-picking best-of-many results) — this trio is heavily tested via scenario-identification questions
- **The non-normality theme is the connective tissue of the entire module**: negative skew + fat tails + tail dependence in real returns is **why** scenario analysis, historical simulation, Monte Carlo, AND sensitivity analysis all exist as backtesting complements — if you understand this one causal thread, most of Module 6's "why" questions become intuitive
- **Historical vs. Monte Carlo simulation**: both use random number generators (non-deterministic), but historical **resamples actual data** while Monte Carlo **draws from a fitted distribution** — and Monte Carlo's accuracy is only as good as the distributional assumption's fit to reality
- **Sensitivity analysis vs. scenario analysis** — a recurring point of confusion: sensitivity analysis varies **model/distributional inputs**; scenario analysis varies **which historical regime** you're examining. Keep these conceptually separate
- **The BM vs. RP running example** across 6.04–6.08 is a strong integrated case study — if you can reconstruct why RP consistently showed better risk-adjusted properties (diversification via risk parity weighting) across backtesting, scenario analysis, historical simulation, AND Monte Carlo, you've internalized the module's key applied lesson
- With this Module 6 summary now covered in full context, you've completed **Module 1 (Economics and Investment Markets)** and **Module 6 (Backtesting and Simulation)** — a good point to check with the syllabus on which module comes next in the CFA-26-11-LII-A Portfolio Management sequence
