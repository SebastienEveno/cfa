---
layout: page
title: "6.03 | The Backtesting Process"
permalink: /study/09-portfolio-management/06-backtesting-and-simulation/03-the-backtesting-process/
prev: /cfa/study/09-portfolio-management/06-backtesting-and-simulation/02-objectives-of-backtesting/
next: /cfa/study/09-portfolio-management/06-backtesting-and-simulation/04-backtesting-multifactor-models/
---
## Summary: 6.03 | The Backtesting Process (CFA Level II — Portfolio Management)

---

### Learning Outcomes
1. Describe and contrast steps/procedures in backtesting an investment strategy
2. Interpret metrics and visuals reported in a backtest

---

### The Three Steps of Backtesting (Exhibit 1 Flowchart)

$$\boxed{\text{Strategy Design} \rightarrow \text{Historical Investment Simulation} \rightarrow \text{Analysis of Backtesting Output}}$$

---

## STEP 1: Strategy Design

**Sub-step 1 — Identify goals and hypothesis**:
- **Goal** (active strategies): excess return over benchmark, or superior **risk-adjusted absolute return**
- **Hypothesis**: the method (trading rule, selection criterion, portfolio) aimed at achieving the goal

**Sub-step 2 — Translate hypothesis into specific, testable parameters**:

### Investment Universe
$$\boxed{\text{Investment universe} = \text{All securities potentially investable}}$$
- Academics: union of Compustat/Worldscope and CRSP
- Practitioners: typically use **broad market index constituents**
- Reading's convention: **Russell 3000** (US), **S&P/TSX Composite** (Canada), **MSCI China A** (Chinese Mainland), **S&P Global BMI** (all other markets)

### Return Definition
- Global strategies raise **currency** questions: single-currency (home) translation vs. **local-currency** returns
- Choice often depends on whether the **manager hedges** currency exposure — unhedged managers often backtest in **single-currency** terms
- If goal = excess return, a **benchmark** must be specified, ideally **matching the investment universe** (e.g., MSCI China A Index for an MSCI China A-based strategy)

### Rebalancing Frequency and Transaction Costs
$$\boxed{\text{Common practitioner frequency: MONTHLY (though higher/lower also used)}}$$
- **Higher frequency** (daily+) → **higher transaction costs** AND data quality issues: bid-ask spread bias, asynchronous global trading, missing holiday days
- **Critical**: transaction costs must be explicitly disclosed, since **many anomalies disappear once costs are included**

### Start and End Date
$$\boxed{\text{Longer history} \implies \text{Greater statistical confidence, BUT financial data are likely NON-STATIONARY}}$$
- **Solution**: supplement long-history backtests with **historical scenario analysis** examining **discrete regimes** (high/low inflation, recessions/expansions) — previews later reading sections

---

### Worked Example 1 — SWF Fund Value Strategy Design

**Sarah Koh's specification**:
- **Goal**: Superior risk-adjusted absolute return
- **Hypothesis**: "Value" factor (cheap stocks outperform expensive stocks)
- **Chosen metric**: **Trailing earnings yield** (= inverse of P/E) — chosen over P/E because **P/E is undefined/uninterpretable when EPS ≤ 0**, while earnings yield can always be computed
- **Investment universe**: Russell 3000 (US) + S&P Europe BMI (Europe); **hedged back to USD**
- **Period**: January 1986 – May 2019 (long history, since data is widely available)
- **Rebalancing**: Monthly, **including transaction costs**; returns computed on a **12-month moving average basis**

**Practice Question Answers**:

**Q1. Concern for SWF Fund's investment committee**:
$$\boxed{\text{Answer: B — The historical period includes recessions, currency regime changes, and varying interest rate periods}}$$
*(This is a genuine concern given data non-stationarity; A is wrong — hedging removes currency direction bets; C is wrong — earnings yield specifically SOLVES the computability problem P/E has.)*

**Q2. Rebalancing frequency vs. transaction costs**:
$$\boxed{\text{Answer: A — Monthly to WEEKLY would likely INCREASE transaction costs}}$$
*(Higher frequency = more trades = more costs; B is backwards — quarterly is lower frequency, would decrease costs; C is wrong — frequency clearly affects costs.)*

**Q3. NOT a concern of using a SHORT backtest period**:
$$\boxed{\text{Answer: C — "The backtest is likely to cover MULTIPLE business cycle, inflation, and interest rate regimes"}}$$
*(This is backwards — a SHORT period covers FEWER regimes, which is the actual concern; A and B correctly describe genuine short-period concerns.)*

---

## STEP 2: Historical Investment Simulation

**Portfolio construction depends on**: investment hypothesis type, manager's capabilities/style, and **client mandate constraints** (geography, size/liquidity limits, ability to short).

### The Rolling-Window Method

$$\boxed{
\begin{array}{l}
\text{1. Constitute portfolio at period START using historical IN-SAMPLE data} \\
\text{2. Test performance over the subsequent OUT-OF-SAMPLE (OOS) period} \\
\text{3. Repeat, rolling forward through time}
\end{array}
}$$

**Why this approach**: It **replicates live investing** — managers adjust positions as **new information arrives**.

**Worked mechanics (Exhibit 2 illustration)**:
- **30 Nov 2011**: Compile trailing 12-month earnings yield using EPS from **Dec 2010–Nov 2011** (in-sample) ÷ price as of 30 Nov 2011
- **Execute strategy** as of that date (e.g., long high earnings-yield stocks, short low earnings-yield stocks)
- **Record results** for **December 2011** (the OOS month)
- **Repeat monthly**, refreshing the trailing 12-month window each time

---

## STEP 3: Analysis of Backtesting Output

### Key Quantitative Metrics
$$\boxed{\text{Sharpe ratio, Sortino ratio, volatility, MAXIMUM DRAWDOWN}}$$

$$\boxed{\text{Maximum drawdown} = \text{Maximum loss from a PEAK to a TROUGH}}$$

**Why both return AND risk matter**: analysts care about the **risk profile** (volatility, downside risk), not just average return.

### Key Visual Tools
- **Time series of returns**
- **Return distributions** plotted against a reference (e.g., normal distribution)
- **Cumulative performance graphs**, ideally on a **LOGARITHMIC scale** — so equal % changes show as equal vertical distance

**What cumulative graphs reveal**: downside risk, **performance decay**, and **structural breaks**.

### Structural Breaks (Regime Changes) — Why History ≠ Perfect Guide

$$\boxed{\text{Structural breaks = a key reason the PAST is not always a reliable guide to the FUTURE}}$$

**Four example categories**:
1. **Depressions/recessions** (e.g., 2008–09 GFC)
2. **Geopolitical events** (trade relationship shifts, countries entering/exiting trading blocs)
3. **Major monetary/fiscal policy shifts** (e.g., post-2008 QE)
4. **Major technological changes** (dot-com bubble, ML/AI proliferation)

---

### The Long-Short Hedged Portfolio Methodology (Fama-French 1993)

$$\boxed{
\begin{array}{l}
1.\ \text{Sort universe by the metric (e.g., trailing earnings yield)} \\
2.\ \text{Divide into quantiles (typically quintiles or deciles)} \\
3.\ \text{GO LONG top quantile (highest earnings yield)} \\
4.\ \text{GO SHORT bottom quantile (lowest earnings yield)} \\
5.\ \text{Weight stocks equally OR by market cap within each quantile}
\end{array}
}$$

**Caveat**: Quantiles may have unequal **beta** or other factor exposures — but the **average metric difference** between quantiles is still a reasonable performance characterization.

---

### Worked Example 2 — Interpreting Exhibits 3, 4, and 5

**Q1. Compare US vs. Europe value strategy performance (Exhibit 3), 1986–2019**:

$$\boxed{
\begin{array}{l|c|c}
 & \text{US} & \text{Europe} \\
\hline
\text{Avg. annual return} & 9.2\% & 6.7\% \ (-250\text{bps vs US}) \\
\text{Sharpe ratio} & 0.75 & 0.67 \\
\text{Max drawdown} & \text{Just over 3× volatility} & \text{Just over 3× volatility}
\end{array}
}$$

**Conclusion**: US outperforms Europe on **raw return**, but Europe's **lower volatility** brings its Sharpe ratio **close to** the US level → US is only **"slightly"** better as a long-term value strategy once risk-adjusted.

**Q2. Cumulative performance (Exhibit 4) and return distribution (Exhibit 5)**:

- **Strongest long-run performance**: **Asia ex-Japan**
- **Performance flattening**: US, Europe, Japan **since 2016**; all regions except Asia ex-Japan also flattened **after 2002**
- **Notable drawdowns/structural breaks**: **late 1990s** (tech bubble) and **March–May 2009** (GFC risk rally), visible in most regions

**Return distribution finding (US)**:
$$\boxed{\text{US strategy shows EXCESS KURTOSIS (fat tails) AND NEGATIVE SKEWNESS}}$$

**Interpretation**:
- **Excess kurtosis** → strategy more prone to **extreme return surprises**
- **Negative skewness** → those surprises are **more likely to be negative** than positive

---

### Exam Tips

- **Three-step framework (Design → Simulation → Analysis) is foundational** — expect to be asked to place a given procedure into the correct step
- **Key backtest design parameters to memorize**: investment universe, return/currency definition, benchmark choice, rebalancing frequency, transaction cost treatment, start/end date — a strong checklist for "critique this backtest design" questions
- **Rolling-window mechanics (in-sample calibration → out-of-sample test → roll forward) is HIGHLY testable** — practice tracing through a specific date example like Exhibit 2's illustration
- **Earnings yield vs. P/E**: know WHY earnings yield is preferred as a value metric — it handles negative/zero EPS, unlike P/E. This is a classic "why this metric, not that one" exam point
- **Long-short hedged quantile portfolio construction (Fama-French)** is a standard methodology — memorize: sort → quantile → long top, short bottom → equal or cap-weight within quantile
- **Maximum drawdown definition**: peak-to-trough max loss — simple but precise definition, often tested directly
- **Structural breaks**: memorize the **four category examples** (recessions, geopolitical shifts, monetary/fiscal policy shifts, technological change) — a good source for "give an example of a structural break" questions
- **Kurtosis/skewness interpretation is a recurring exam favorite**: excess kurtosis = fat tails = more extreme surprises (magnitude); negative skewness = surprises skewed toward the downside (direction) — make sure you can distinguish these two concepts cleanly, as this Example 2 answer is a clean template
- **Sharpe ratio comparison nuance**: don't just compare raw returns — Example 2's US/Europe comparison shows how **volatility differences can largely offset return differences** on a risk-adjusted basis; this is a good template for similar "compare two strategies" questions
- **Logarithmic scale for cumulative performance charts** is a specific, testable visualization best practice — know **why** (equal % changes = equal visual distance, avoiding the distortion of exponential growth on a linear scale)