---
layout: page
title: "6.07 | Simulation Analysis"
permalink: /study/09-portfolio-management/06-backtesting-and-simulation/07-simulation-analysis/
prev: /cfa/study/09-portfolio-management/06-backtesting-and-simulation/06-historical-scenario-analysis/
next: /cfa/study/09-portfolio-management/06-backtesting-and-simulation/08-sensitivity-analysis/
---
## Summary: 6.07 | Simulation Analysis (CFA Level II — Portfolio Management)

---

### Learning Outcomes
1. Contrast Monte Carlo and historical simulation approaches
2. Explain inputs/decisions in simulation and interpret a simulation

---

### Why Simulation Complements Backtesting

**Backtesting's limitation** (recap): Assumes the **past is likely to repeat itself** — doesn't fully capture the dynamic nature of markets, including **extreme upside/downside risks that have never occurred before**.

$$\boxed{\text{Two basic simulation types: HISTORICAL and MONTE CARLO}}$$

---

### Historical Simulation — Core Concept

$$\boxed{\text{Historical simulation} = \text{Select returns RANDOMLY from historical periods, WITHOUT regard to time-ordering}}$$

**Key relationship to backtesting**: 
$$\boxed{\text{Historical simulation} = \text{a NON-DETERMINISTIC version of rolling-window backtesting}}$$
- Still assumes past returns guide future returns
- But **relaxes the sequencing restriction** — randomizes which historical period is drawn, rather than moving strictly chronologically

**Widely used by**: banks, for **market risk analysis**.

**Core limitation**: Only **one realized historical path** exists — and financial data are **not stationary**, undermining classical time-series assumptions.

---

### Monte Carlo Simulation — Core Concept

$$\boxed{\text{Monte Carlo simulation: each key variable is assigned a STATISTICAL DISTRIBUTION; observations are drawn RANDOMLY from that distribution}}$$

**Advantage**: Highly **flexible** — can incorporate non-normality, fat tails, tail dependence, etc., rather than being constrained to what actually happened historically.

**Disadvantage**: **Complex and computationally intensive**.

**Shared goal of both approaches**: **Verify backtesting results** by explicitly accounting for randomness; especially useful for measuring **downside risk**.

---

### The Eight-Step Simulation Framework

$$\boxed{
\begin{array}{l}
1.\ \text{Determine the TARGET variable (e.g., } r_{p,t}\text{, portfolio return)} \\
2.\ \text{Specify KEY DECISION VARIABLES (asset returns } r_{i,t}\text{, weights } \omega_{i,t}\text{)} \\
3.\ \text{Specify number of trials } N \text{ (typically 1,000–10,000)} \\
4.\ \text{Define distributional properties of key decision variables} \\
5.\ \text{Use a random number generator to draw } N \text{ random numbers per variable} \\
6.\ \text{Compute the target variable's value for each simulated set} \\
7.\ \text{Repeat Steps 5–6 until } N \text{ trials complete} \\
8.\ \text{Analyze the resulting } N \text{ values: mean, volatility, Sharpe ratio, CVaR, max drawdown}
\end{array}
}$$

$$\boxed{r_{p,t} = \sum_{i=1}^{K} \omega_{i,t} \cdot r_{i,t}}$$

**Key divergence point (Step 4)**: Historical simulation **draws from actual historical data**; Monte Carlo **requires specifying a statistical distribution**.

**Trial count note**: More trials → **more stable** performance/variance estimates (though optimal N is a complex topic in its own right).

**Preferred downside risk metrics for simulation**: **CVaR** and **maximum drawdown**.

---

## Historical Simulation — Detailed Mechanics

**Sampling decision**: **with replacement** (bootstrapping) vs. **without replacement**.
$$\boxed{\text{Bootstrapping (WITH replacement) is standard} \implies \text{needed because simulations (N=1,000+) often EXCEED the historical dataset size}}$$

### Worked Example — BM/RP Historical Simulation

**Setup**: 
- Target variables: BM and RP portfolio returns
- Key decision variables: returns of the 8 factor portfolios
- $N = 1{,}000$ trials
- **374 months** of historical data (April 1988–May 2019)

**Random number → month mapping mechanic**:
$$\boxed{\text{Bucket width} = \frac{1.0}{374} = 0.00267}$$
- Draw a uniform random number between 0 and 1
- Divide by 0.00267 to identify which historical month is selected (with replacement)

**Illustrated first 5 draws** → mapped to Sept 2006, Apr 1998, Feb 2012, Feb 2016, May 2002.

**Computing BM portfolio return for Trial 1 (Sept 2006)**:
$$\boxed{r_{BM} = \frac{1}{8}\sum_{\text{8 factors}} r_i = 0.46\%} \quad \text{(simple equal-weighted average)}$$

**Computing RP portfolio return for Trial 1**: Uses the **May 2019 (final month) RP weights** applied to the **Sept 2006** factor returns:
$$\boxed{r_{RP} = \sum_{i=1}^{8} \omega_i^{(May 2019)} \times r_i^{(Sept 2006)} = 0.17\%}$$

**Process repeated for all 1,000 trials** → generates 1,000 simulated BM and RP returns.

### Comparing Historical Simulation to Backtesting (Exhibits 19–20)

$$\boxed{\text{Sharpe ratios: LARGELY CONSISTENT between historical simulation and rolling-window backtesting}}$$
- RP **outperforms** BM on Sharpe ratio under **both** methodologies

$$\boxed{\text{CVaR: RP shows SUBSTANTIALLY LESS downside risk than BM under BOTH methodologies}}$$

**Return distribution shapes (Exhibit 20)**: Broadly **similar pattern** between backtesting and historical simulation — both show **RP less volatile, more right-skewed, lower downside risk (thinner tails)** than BM.

---

## Monte Carlo Simulation — Detailed Mechanics

**Key extra step vs. historical simulation**: Must **specify a functional form** (statistical distribution) for each key decision variable.

**Model calibration**: Uses regression/distribution-fitting techniques to estimate **mean, standard deviation, skewness, kurtosis** from historical data (readily done in R, Python, MATLAB).

### Three Considerations When Choosing the Distribution

$$\boxed{
\begin{array}{l}
1.\ \text{Distribution should reasonably match empirical patterns (e.g., asset returns} \approx \text{bell curve} \implies \text{normal or Student's t as first-cut)} \\
2.\ \text{MUST account for CORRELATIONS between variables} \implies \text{need a MULTIVARIATE distribution, not standalone modeling} \\
3.\ \text{Complexity/parameter trade-off} \implies \text{THE BIAS-VARIANCE TRADE-OFF}
\end{array}
}$$

**Bias-variance trade-off explained**:
$$\boxed{\text{Highly complex models: LOW specification error, but LARGE estimation error (too many parameters to estimate precisely from limited data)}}$$
$$\boxed{\text{Overly simple models: LOW estimation error, but LARGER specification error (poor fit to true data patterns)}}$$

### The Multivariate Normal Distribution — Standard First-Cut Choice

$$\boxed{\text{Multivariate normal distribution: fully specified by MEAN, STANDARD DEVIATION, and COVARIANCE MATRIX}}$$

**Parameter count for K assets**:
$$\boxed{K \text{ means} + K \text{ standard deviations} + \frac{K(K-1)}{2} \text{ correlations}}$$

**For K=8 factors**: 8 means + 8 std devs + $\frac{8 \times 7}{2} = 28$ correlations.

**Key limitation flagged**: 
$$\boxed{\text{Multivariate normal does NOT capture (negative) skewness, excess kurtosis, or tail dependence} \implies \text{addressed later via sensitivity analysis}}$$

### Worked Example — BM/RP Monte Carlo Simulation

**Setup**: Same target/decision variables and N=1,000 as historical simulation. **Calibrate** multivariate normal using the same 374 months of data (8 means, 8 std devs, 28 correlations).

**Mechanic**: 8 randomly generated uniform numbers are mapped jointly onto the multivariate normal's joint cumulative distribution function to produce one simulated set of 8 factor returns.

**Trial 1 example returns**: Earnings yield −3.2%, Book-to-market −3.1%, Earnings growth −0.2%, Momentum 0.7%, Earnings revision 2.3%, ROE −3.3%, Debt/equity −1.7%, Earnings quality 1.9%

**BM portfolio return, Trial 1**:
$$\boxed{r_{BM} = \frac{1}{8}\sum r_i = -0.83\%}$$

**RP portfolio return, Trial 1** (using May 2019 RP weights):
$$\boxed{r_{RP} = -0.86\%}$$

**Process repeated for all 1,000 trials**.

---

### Worked Example 7 — Comparing All Three Methods (Backtesting, Historical Sim, Monte Carlo)

**Sharpe ratio finding**: 
$$\boxed{\text{Sharpe ratio is RELATIVELY INSENSITIVE to method — RP outperforms BM by roughly the SAME margin under all three approaches}}$$

**CVaR finding — a critical divergence**:
$$\boxed{\text{Monte Carlo simulation UNDERSTATES the downside risk of the BM strategy, relative to BOTH backtesting AND historical simulation}}$$

**Why the underestimation occurs**:
$$\boxed{\text{Factor returns are negatively skewed with FAT TAILS (excess kurtosis)} \implies \text{Multivariate NORMAL assumption fails to capture this} \implies \text{Understates true BM downside risk}}$$

**Why RP is NOT similarly affected**: 
$$\boxed{\text{RP strategy is ROBUST to non-normal factor return distributions} \implies \text{diversification via risk parity naturally limits the impact of individual factors' fat tails}}$$

**Contrast**: The **naive equal-weighting (BM)** scheme does **not properly account for factor risks/correlations**, making it more vulnerable to the multivariate normal's blind spot regarding tail risk.

---

### Exam Tips

- **Core distinction, memorize cold**: Historical simulation = random resampling of **actual historical data** (non-deterministic rolling-window backtest); Monte Carlo simulation = random draws from an **assumed statistical distribution**, calibrated to historical data but not literally reusing historical sequences
- **Bootstrapping (sampling WITH replacement)** is the standard historical simulation technique — know **why**: simulation trial counts typically exceed available historical months
- **Eight-step framework is a strong candidate for a "put these steps in order" question** — know the sequence: target variable → decision variables → number of trials → distribution specification → random draws → compute target → repeat → analyze
- **Bias-variance trade-off reappears here from earlier ML/big-data readings** — recognize this as a **recurring curriculum theme**, not a new concept; complex distributional models = low bias/high variance (estimation error), simple models = high bias/low variance
- **Multivariate normal parameter count formula** ($K$ means + $K$ std devs + $K(K-1)/2$ correlations) is a clean, testable calculation — practice plugging in different $K$ values
- **THE key exam takeaway from Example 7**: Sharpe ratio is **robust** across methods, but **CVaR (tail risk) is NOT** — Monte Carlo with a **normal distribution assumption systematically understates downside risk** when the true data has **negative skew + fat tails**. This is the section's single most important practical/conceptual conclusion
- **Why RP is more robust to this Monte Carlo limitation** than BM: risk parity's diversification structure **inherently mitigates** the impact of any single factor's tail risk, whereas naive equal-weighting does not — a good "explain why" essay answer template
- **Practical implication for the exam**: normal-distribution-based Monte Carlo simulation should be treated with **caution** for strategies/assets known to have skewed, fat-tailed return distributions — this sets up the **next section (sensitivity analysis)**, which explicitly addresses these non-normal distribution limitations, per the text's own forward reference