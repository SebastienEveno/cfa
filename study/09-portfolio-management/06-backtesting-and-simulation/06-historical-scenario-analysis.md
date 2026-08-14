---
layout: page
title: "6.06 | Historical Scenario Analysis"
permalink: /study/09-portfolio-management/06-backtesting-and-simulation/06-historical-scenario-analysis/
prev: /cfa/study/09-portfolio-management/06-backtesting-and-simulation/05-common-problem-in-backtesting/
next: /cfa/study/09-portfolio-management/06-backtesting-and-simulation/07-simulation-analysis/
---
## Summary: 6.06 | Historical Scenario Analysis (CFA Level II — Portfolio Management)

---

### Learning Outcome
Evaluate and interpret a historical scenario analysis.

---

### What Historical Scenario Analysis Does

$$\boxed{\text{Historical scenario analysis} = \text{A type of backtesting that explores strategy performance/risk within DIFFERENT structural regimes and AT structural breaks}}$$

**Motivation**: Rather than **ignoring** structural breaks identified during backtesting (per 6.03/6.05), analysts should **explicitly examine** how a strategy behaves during specific regime changes.

---

### Two Common Regime Classifications Used

### 1. Expansions vs. Recessions

**Data source**: NBER (National Bureau of Economic Research) official US recession dates.

**Recessions identified since 1993** (start of the RP strategy backtest):
$$\boxed{\text{March 2001 – November 2001} \qquad \text{December 2007 – June 2009}}$$

**Important methodological caveat — recession dating itself has look-ahead bias**:
$$\boxed{\text{Business cycle inflection points are identified ONLY IN HINDSIGHT}}$$
- NBER didn't declare **Dec 2007** as a recession start until **Dec 2008** (a full year later)
- NBER didn't declare **June 2009** as the recession end until **Sept 2010** (over a year later)
- The reading explicitly notes this look-ahead bias is **being ignored** for this illustrative example — a candid methodological caveat

### 2. High- vs. Low-Volatility Regimes

**Data source**: **VIX index** (CBOE) — gauges **options-implied volatility** on the S&P 500.

**Regime construction method**:
$$\boxed{\text{Compute a 5-year MOVING AVERAGE of the VIX}}$$
$$\boxed{\text{VIX ABOVE its 5-yr moving average} \implies \text{HIGH-volatility regime}}$$
$$\boxed{\text{VIX BELOW its 5-yr moving average} \implies \text{LOW-volatility regime}}$$

---

### Applying Regime Analysis to the BM and RP Portfolios (Exhibit 15)

**Panel A — Recession vs. Expansion (Sharpe ratio)**:
$$\boxed{\text{RP strategy: QUITE ROBUST to recessions}}$$
$$\boxed{\text{BM strategy: STRUGGLES during recessions}}$$

**Panel B — High vs. Low volatility (Sharpe ratio)**:
$$\boxed{\text{BM strategy: slightly WORSE performance in LOW-volatility regimes than high-volatility regimes}}$$
$$\boxed{\text{RP strategy: performs EQUALLY WELL in both volatility environments}}$$

**Overall conclusion**: The **RP strategy is more regime-robust** than the BM strategy across both dimensions tested — reinforcing the risk-diversification benefits highlighted in 6.04.

---

### Deeper Analysis — Return Distributions by Regime (Exhibit 16)

**Method**: Probability density plots comparing return distributions **during recession vs. non-recession** periods, for both BM and RP strategies.

**General pattern**: 
$$\boxed{\text{BOTH strategies show FLATTER distributions in NON-recession periods} \implies \text{implies HIGHER standard deviation in non-recession regimes}}$$

**BM strategy specifics (Panel A)**:
$$\boxed{\text{BM shows NEGATIVE skewness AND excess kurtosis (fat left tails) REGARDLESS of recession regime}}$$
- **Average return is clearly LOWER during recessions**

**RP strategy specifics (Panel B)**:
$$\boxed{\text{RP also shows LOWER average return during recessions}}$$
- **BUT**: RP's **volatility and kurtosis are both MUCH LOWER** than BM's, in both regimes

---

### Exam Tips

- **Core definition to memorize**: historical scenario analysis = backtesting **specifically targeted** at structural regimes/breaks, rather than treating the full sample as homogeneous — this directly complements (doesn't replace) the standard backtesting from 6.03–6.05
- **VIX regime construction method is a specific, testable mechanic**: VIX vs. its own **5-year moving average** — know this exact construction, as it's a clean, memorable rule
- **NBER recession dating lag is an important, somewhat counterintuitive point**: recession start/end dates are only known **well after the fact** (up to a year+ delay) — this is itself a form of **look-ahead bias**, and the reading is transparent about **knowingly ignoring it** for the illustration. A good candidate for a "identify the bias in this scenario analysis" question
- **RP > BM in regime robustness is the section's central empirical conclusion** — ties together with 6.04's diversification-benefit findings: risk-based (RP) allocation isn't just better on average, it's **more STABLE across different macro/volatility regimes** than naive equal-weighting (BM)
- **Distributional nuance**: don't just compare **means** across regimes — note that BOTH strategies see **higher volatility in expansions** (flatter distribution), which is a somewhat counterintuitive but testable empirical finding (one might naively expect volatility to spike mainly during recessions, but here overall dispersion of monthly returns is wider in non-recession periods)
- **Two-dimensional regime testing** (business cycle AND volatility regime) demonstrates good practice: testing robustness across **multiple, independent regime classifications** strengthens confidence in a strategy's genuine robustness — a good technique to reference if asked "how would you rigorously test a strategy's regime dependence?"
- This section builds directly on the **BM/RP framework from 6.04** and the **bias concepts from 6.05** — expect the **next section** to move into **simulation** methodology (historical or Monte Carlo), per the Module 6 roadmap established in 6.01/6.09