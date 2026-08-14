---
layout: page
title: "6.04 | Backtesting Multifactor Models"
permalink: /study/09-portfolio-management/06-backtesting-and-simulation/04-backtesting-multifactor-models/
prev: /cfa/study/09-portfolio-management/06-backtesting-and-simulation/03-the-backtesting-process/
next: /cfa/study/09-portfolio-management/06-backtesting-and-simulation/05-common-problem-in-backtesting/
---
## Summary: 6.04 | Backtesting Multifactor Models (CFA Level II — Portfolio Management)

---

### Learning Outcomes
Same two LOS as 6.03 — this section extends the backtesting framework from single-factor to **multifactor** strategies.

---

### Why Multifactor Models

$$\boxed{\text{Few managers use a SINGLE signal in practice} \implies \text{Most quant models use a LINEAR COMBINATION of multiple factors}}$$

Fundamental managers similarly use **multiple screening filters**, not just one metric.

---

## STEP 1: Strategy Design

### The Eight Fundamental Factors Selected

| Style | Factor |
|---|---|
| **Defensive value** | Trailing earnings yield |
| **Cyclical value** | Book-to-market ratio |
| **Growth** | Consensus FY1/FY0 EPS growth |
| **Price momentum** | 12-month total return, excluding most recent month |
| **Analyst sentiment** | 3-month EPS revision |
| **Profitability** | Return on equity (ROE) |
| **Leverage** | Debt-to-equity ratio |
| **Earnings quality** | Non-cash earnings (accrual proportion) |

**Construction per factor**: Long top 20%, short bottom 20%, equal-weighted within each bucket. **No transaction costs** included (illustrative simplification).

### Exhibit 6 — Individual Factor Performance (US, 1988–2019)

**All eight** delivered **positive** long-term returns. 

**Return clusters observed**:
1. **Best performers**: earnings revision, earnings yield, price momentum
2. **Middle**: ROE, earnings quality
3. **Laggards**: book-to-market, earnings growth, debt/equity

---

### Two Ways to Combine Factors into a Multifactor Portfolio

**Benchmark (BM) Portfolio**: 
$$\boxed{\text{Equal WEIGHT across all 8 factor portfolios}}$$
- Supported by research (DeMiguel, Garlappi, Uppal 2007) showing naive equal-weighting often matches or beats sophisticated optimization

**Risk Parity (RP) Portfolio**:
$$\boxed{\text{Equal RISK CONTRIBUTION across all 8 factor portfolios} \implies \text{accounts for each factor's volatility AND cross-factor correlations}}$$

**Markets tested**: US, Canada, LATAM, Europe, UK, EMEA, Asia ex-Japan, Japan, ANZ, Chinese Mainland.

**Important structural constraint**: Unlike the underlying long-short factor portfolios, **BM and RP portfolios are LONG-ONLY** — factor weights are non-negative and sum to 100%.

---

## STEP 2: Historical Investment Simulation — Double Rolling-Window

$$\boxed{\text{TWO separate rolling-window procedures are needed — one at EACH portfolio "layer"}}$$

**Layer 1**: Form the 8 individual factor portfolios monthly (1988–May 2019) using the standard rolling-window method from 6.03.

**Layer 2** (needed specifically for RP weights, to avoid **look-ahead bias**):
$$\boxed{\text{At each month-end, use the PRIOR 5 years of monthly data to estimate the variance-covariance matrix of the 8 factor portfolios}}$$
- This covariance matrix is the **key input** for computing equal-risk-contribution weights
- Once weights are computed, form the RP portfolio and measure **out-of-sample** returns each month

---

## STEP 3: Output Analysis

### Exhibit 7 — BM vs. RP Comparison (US, 1993–2019)

**RP portfolio factor weights**: relatively **stable over time**, but **NOT equal** — book-to-market and earnings quality receive the **largest** allocations; ROE and price momentum receive the **lowest**.

**Performance comparison**:

$$\boxed{
\begin{array}{l|c|c}
 & \text{Benchmark (BM)} & \text{Risk Parity (RP)} \\
\hline
\text{Average return} & 5.5\% & 5.0\% \\
\text{Annual volatility} & 5.7\% & 2.5\% \\
\text{Sharpe ratio} & 1.0 & 1.9
\end{array}
}$$

**Key takeaway**: RP has **slightly lower return** but **less than half the volatility** → **nearly double the Sharpe ratio**.

---

### Exhibit 8 — Return Distribution Statistics, 1993–2019

**Skewness pattern**: 6 of 8 individual factor portfolios show **negative skewness**; the **BM** portfolio also negative (−2.40); the **RP** portfolio shows **slight positive skewness** (+0.51).

**Kurtosis pattern**: **ALL** factors and combined portfolios show **excess kurtosis** (>3.0) — though RP's kurtosis (5.37) is far **lower** than BM's (17.78).

**Downside asymmetry**: For most individual factors, **minimum monthly returns exceed maximum returns in magnitude** — downside risk dominates upside.

**Diversification benefit**: BM and RP portfolios show **moderate means** (0.5%/0.4% monthly) and **much lower standard deviations** (1.6%/0.7%) than the underlying individual factors — demonstrating clear **diversification benefits** from factor allocation.

---

### Exhibit 9 — Downside Risk Measures, 1993–2019

**Three metrics compared**: **VaR(95%)**, **CVaR(95%)**, **Maximum Drawdown**.

**Findings**:
$$\boxed{\text{Largest downside risk: Price MOMENTUM factor (followed by ROE)}}$$
$$\boxed{\text{Smallest downside risk: Earnings QUALITY factor}}$$
$$\boxed{\text{RP portfolio: SUBSTANTIALLY less downside risk than ANY individual factor OR the BM portfolio}}$$
- RP Max Drawdown: **3.8%** vs. BM's **22.6%** — dramatic difference

**Conclusion**: RP strategy **benefits greatly from risk diversification**, at least in this US sample period.

---

### Worked Example 3 — BM vs. RP: Which Suits Risk-Averse Investors?

**Comparison summary**:

$$\boxed{
\begin{array}{l|c|c}
 & \text{BM} & \text{RP} \\
\hline
\text{Mean return} & 0.5\%/\text{mo} & 0.4\%/\text{mo} \\
\text{Std. Dev} & 1.6\% & 0.7\% \\
\text{Min return} & -10.9\% & -2.5\% \\
\text{Skewness} & -2.40 \text{ (negative)} & +0.51 \text{ (positive)} \\
\text{Kurtosis} & 17.78 \text{ (high)} & 5.37 \text{ (moderate)}
\end{array}
}$$

$$\boxed{\text{Conclusion: RP portfolio has MORE ATTRACTIVE distributional properties for RISK-AVERSE investors}}$$
*(similar returns, much lower volatility/downside risk, positive skew, lower kurtosis — confirmed by VaR/CVaR/max drawdown in Exhibit 9)*

---

### Worked Example 4 — Practice Questions (with Answers)

**Q1. Which statement about rolling-window backtesting is INACCURATE?**
$$\boxed{\text{Answer: A — "The data are divided into just two samples"}}$$
*(Incorrect statement — rolling-window involves MANY repeated in-sample/out-of-sample splits as the window rolls forward, not just two. B and C are accurate descriptions.)*

**Q2. Drawback of the long-short hedged portfolio approach**:
$$\boxed{\text{Answer: C — "Not every manager can short stocks"}}$$
*(A and B are simply descriptions of the methodology, not drawbacks; the practical constraint that shorting isn't always feasible is the genuine limitation.)*

**Q3. NOT a metric/visual used in backtesting assessment**:
$$\boxed{\text{Answer: B — "A word cloud of text describing the characteristics of the factor"}}$$
*(A and C are legitimate quantitative/visual backtesting tools; a word cloud is not a standard backtesting output.)*

**Q4. Rolling-window use in risk parity factor allocation**:
$$\boxed{\text{Answer: C — Used TWICE: once for factor returns, once for the covariance matrix (risk parity weights)}}$$
*(Directly confirms the "double rolling-window" structure described in Step 2 above.)*

---

### Exam Tips

- **Double rolling-window structure is the section's signature testable concept**: Layer 1 (factor portfolio formation) + Layer 2 (5-year rolling covariance matrix estimation for RP weights, to avoid look-ahead bias) — expect a direct question on **why two separate procedures are needed**
- **BM vs. RP trade-off is a strong template for comparative analysis questions**: similar/slightly lower returns, but RP wins decisively on **volatility, Sharpe ratio, skewness, kurtosis, and all three downside risk measures** — a clean illustration of diversification benefits from **risk-based** (vs. naive equal) weighting
- **Eight factors and their style categories** are worth memorizing at a high level (value×2, growth, momentum, sentiment, profitability, leverage, earnings quality) — good foundation for factor-model questions elsewhere in the curriculum (this connects directly to the Multifactor Models module from Portfolio Management)
- **Skewness/kurtosis interpretation reused from 6.03**: negative skew = downside-biased surprises; high kurtosis = fat tails/more extreme surprises — Example 3's answer is a clean template for comparing two return distributions
- **Look-ahead bias avoidance** is the stated **reason** for the second rolling-window (covariance estimation) — a good conceptual link back to the biases flagged in the Module 6 summary (6.09) you've already reviewed
- **VaR, CVaR, and Maximum Drawdown** are presented as a **complementary trio** of downside risk measures — expect questions requiring you to interpret all three together, not in isolation
- **Practical caveat repeated from Example 4, Q2**: even a well-designed strategy can face **implementation constraints** (e.g., shorting restrictions) that aren't captured in a pure backtest — a good reminder that backtest results are necessary but not sufficient for real-world deployment