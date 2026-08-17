---
layout: page
title: "6.05 | Common Problems in Backtesting"
permalink: /study/09-portfolio-management/06-backtesting-and-simulation/05-common-problem-in-backtesting/
prev: /cfa/study/09-portfolio-management/06-backtesting-and-simulation/04-backtesting-multifactor-models/
next: /cfa/study/09-portfolio-management/06-backtesting-and-simulation/06-historical-scenario-analysis/
---
## Summary: 6.05 | Common Problems in Backtesting (CFA Level II — Portfolio Management)

---

### Learning Outcome
Identify problems in a backtest of an investment strategy.

---

## Problem 1: Survivorship Bias

$$\boxed{\text{Survivorship bias} = \text{Drawing conclusions from data reflecting ONLY entities that SURVIVED to the present date}}$$

**Why it occurs**: Firms constantly enter/exit indexes — new firms via IPOs, spin-offs, outperformance; firms disappear via privatization, acquisition, bankruptcy, or cap-size migration.

**Exhibit 10 — Empirical magnitude**:
$$\boxed{\text{Russell 3000 (1985 → 2019): FEWER THAN 400 of original constituents survive (<13\%)}}$$
$$\boxed{\text{S\&P BMI Europe (1989 → 2019): Only 142 of ~720 original constituents survive (\sim 20\%)}}$$

**The flawed defense**: Some argue "we can only invest in today's companies, so use today's index" — but this fails because **at any past point in time, you couldn't know** which firms would survive, disappear, or get added. The surviving-firm list is **inherently biased** (e.g., skewed toward multinationals, innovative firms, or the most successful).

**Correct solution**:
$$\boxed{\text{Use POINT-IN-TIME data — tracking BOTH survivors AND casualties as they actually existed at each historical date}}$$

### Worked Illustration — Low-Volatility Anomaly (Exhibit 11)

$$\boxed{\text{Point-in-time backtest (correct)}: \text{LOW-volatility stocks significantly OUTPERFORM HIGH-volatility stocks, 1989–2019}}$$
$$\boxed{\text{Survivors-only backtest (biased)}: \text{Result REVERSES — HIGH-volatility stocks outperform LOW-volatility by} \sim 5.5\times}$$

**Key takeaway**: Survivorship bias can **completely flip** a strategy's conclusion — a powerful, concrete illustration of the stakes involved.

---

## Problem 2: Look-Ahead Bias

$$\boxed{\text{Look-ahead bias} = \text{Using information that was UNKNOWN or UNAVAILABLE during the historical period being backtested}}$$

**Important relationship**: Survivorship bias is actually a **specific form** of look-ahead bias (future survival status is inherently unknowable at the time).

**Three common sub-forms**:

### (a) Reporting Lags
$$\boxed{\text{Financial results aren't available immediately after period-end} \implies \text{Must build in a reporting lag}}$$
- Example: Dec 2018 EPS not fully available until **~March 2019** (though large-caps may report by **Jan 2019**)
- **Trade-off**: Uniform lag assumptions avoid look-ahead bias but can introduce **stale data** for companies that reported earlier than the assumed lag

### (b) Data Revisions
$$\boxed{\text{Macro data \& financial statements get REVISED after initial release; many databases only keep the LATEST (revised) figures}}$$
- Using revised numbers for a historical backtest = using information **not actually available** at that historical date

### (c) Index/Database Additions
$$\boxed{\text{When vendors add new companies, they often backfill YEARS of historical financials} \implies \text{Backtest sees data that wasn't in the database at that time}}$$
- **Consequence**: typically produces **overly optimistic** backtest results

### Worked Illustration — Reporting Lag Impact on Earnings Yield Strategy (Exhibit 12)

**Setup**: Compare point-in-time results vs. lag assumptions from **0 to 6 months** (zero lag = full look-ahead bias).

$$\boxed{\text{No-lag scenario INFLATES US strategy performance by ALMOST 100\% vs. proper point-in-time data}}$$

**Region-specific appropriate lag assumptions** (to match point-in-time results):

| Region | Appropriate Reporting Lag |
|---|---|
| US, Canada, Japan | 1–2 months |
| Europe, UK, ANZ | 2–3 months |
| Asia ex-Japan, LATAM, EMEA | 3 months |

**Why lags differ by region**: Reflects **differing reporting timeliness** conventions across markets.

---

## Problem 3: Data Snooping (a.k.a. "P-Hacking")

$$\boxed{\text{Data snooping} = \text{Making an inference AFTER looking at statistical results, rather than testing a PRIOR hypothesis}}$$

**Common manifestations**:
- Backtesting **many** strategies, then picking the best performer
- Performing interim analyses to decide whether to keep collecting data
- Testing many variables, deciding later which to report
- Dropping outliers **only after** seeing results

**Consequence**: **False positives** — apparent statistical significance that doesn't reflect a genuine, robust relationship.

### Mitigation Techniques

**1. Raise the statistical bar**:
$$\boxed{\text{Require a HIGHER hurdle than typical — e.g., t-statistic} > 3.0 \text{ (vs. conventional} > 2.0\text{)}}$$

**2. Cross-validation**:
$$\boxed{\text{Partition data into TRAINING and TESTING (validation) sets} \implies \text{Build model on training, test on validation}}$$
- **Rolling-window backtesting IS a form of cross-validation** (deterministic, non-random version — in-sample trains, out-of-sample validates)
- **Geographic cross-validation**: test a strategy developed in one market (e.g., US) across **other global markets** to assess robustness

### Worked Illustration — Global Cross-Validation of RP Strategy (Exhibit 13)

$$\boxed{\text{RP strategy delivers LOWER realized volatility than BM in ALL 10 global markets, 1993–2019}}$$
$$\boxed{\text{RP outperforms BM on Sharpe ratio in 7 OF 10 markets}}$$

**Interpretation**: Since the RP-vs-BM advantage holds **broadly across markets** (not just the original US test), this is evidence the finding is **robust**, not a data-snooped artifact.

---

### Worked Example 5 — Diagnosing Data Snooping in a Presented Model

**Red flags in the scenario**:
- Analyst tested **many variations**: 5–10 factors, monthly/quarterly rebalancing, 5/15/25-year rolling windows
- **Recommended model** was specifically the one with the **highest Sharpe ratio (3.0), lowest volatility (1.0%), highest t-stat (2.5), lowest p-value (1.3%)** — i.e., cherry-picked as the **best-performing** among many trials

**Diagnosis**: 
$$\boxed{\text{Strong evidence of MODEL SELECTION BIAS / DATA SNOOPING — selecting the "winning" model post-hoc from many trials}}$$

**Recommended actions**:
1. Verify transaction costs/liquidity were incorporated
2. Raise the significance hurdle (t-stat > 3.0)
3. Use **cross-validation** (e.g., test the strategy in **other geographic markets**) to check robustness

---

### Worked Example 6 — Practice Questions (with Answers)

**Q1. Picking the strategy with highest t-stat/lowest p-value after testing dozens of strategies:**
$$\boxed{\text{Answer: C — Data snooping}}$$

**Q2. Point-in-time data does NOT help avoid:**
$$\boxed{\text{Answer: A — Data snooping}}$$
*(Point-in-time data solves survivorship and look-ahead bias by providing accurate historical data; it does NOT prevent the researcher-behavior problem of cherry-picking among many backtested strategies.)*

**Q3. GDP data released ~30 days late with subsequent revisions — this creates:**
$$\boxed{\text{Answer: C — Reporting lag}}$$
*(Note: this scenario combines both reporting lag AND revision issues, but "reporting lag" is the best single answer given the options.)*

**Q4. Example of cross-validation:**
$$\boxed{\text{Answer: B — Backtesting with out-of-sample data}}$$

**Q5. Russell 3000 constituent counts (2005: 2,250; 1995: 1,500) vs. current (May 2019) list — correction needed:**
$$\boxed{\text{Answer: C — Look-ahead bias}}$$
*(Using the CURRENT constituent list for historical backtesting — rather than the actual historical constituent lists — is a classic look-ahead/survivorship-type error; since survivorship bias is a specific form of look-ahead bias, "look-ahead bias" is the best general answer here.)*

---

### Exam Tips

- **Three core problems to distinguish clearly**: (1) **Survivorship bias** — using only current survivors; (2) **Look-ahead bias** — using info unavailable at the time (reporting lags, revisions, backfilled database additions); (3) **Data snooping** — cherry-picking the best of many tested strategies. **Survivorship bias is a SUBSET of look-ahead bias** — a key relationship worth memorizing
- **Low-volatility anomaly reversal (Exhibit 11)** is the module's most dramatic illustration — a **complete sign flip** (low-vol wins vs. high-vol wins by 5.5x) depending on survivorship bias correction. Excellent for essay questions on "why does this matter in practice"
- **Reporting lag ~100% performance inflation (Exhibit 12)** is a striking, citable figure — reinforces that look-ahead bias isn't a minor technicality
- **Regional reporting lag differences** (1–2mo US/Canada/Japan vs. 2–3mo Europe/UK/ANZ vs. 3mo Asia ex-Japan/LATAM/EMEA) show that **a single global lag assumption is inappropriate** — good testable nuance
- **Data snooping mitigation techniques**: (1) higher statistical hurdle (t-stat > 3.0), (2) cross-validation (train/test split OR rolling-window OR geographic robustness testing) — memorize both approaches, as Example 5's solution uses both
- **"Rolling-window backtesting IS a form of cross-validation"** — an important conceptual link connecting 6.03's core methodology to 6.05's bias-mitigation discussion
- **Practice question pattern recognition**: this Example 6 set is a strong template for how the exam will test bias identification — expect scenario-based questions requiring you to **name the specific bias** given a described backtesting setup
- This section **completes the "problems" catalog** for Module 6 — expect subsequent sections to move toward **scenario analysis and simulation** (as previewed in 6.01/6.09), which serve as **complementary techniques** to address exactly these backtesting limitations
