## Summary: The Historical Simulation Method of VaR Estimation (CFA Level II — Portfolio Management)

---

### Core Concept

**Historical simulation method**: Reprices the **current portfolio** using **actual historical returns** experienced during the lookback period — NO distributional assumptions required.

$$\boxed{\text{Historical simulation} = \text{No estimation of mean, std dev, or correlations} \implies \text{Use raw historical data directly}}$$

---

### Methodology — Step by Step

```
Step 1: Decompose portfolio into risk factors (same as parametric method)
Step 2: Gather historical returns for each risk factor over lookback period
Step 3: Apply CURRENT portfolio weights to EACH day's historical returns
         → Creates a series of hypothetical one-day portfolio returns
Step 4: Sort returns from LARGEST LOSS to GREATEST GAIN
Step 5: Identify the point at the desired percentile (e.g., 5th percentile for 5% VaR)
```

**Key clarification**: This does **NOT** replicate actual historical price sequences — it creates a **sample of one-day returns** using **fixed current weights** applied to each historical day's returns.

---

### Worked Example — Portfolio Return Calculation (Exhibit 4)

**Setup**: 80% SPY / 20% SPLB, fixed weights applied to each historical day

| Day | SPY Return | SPLB Return | **Portfolio Return** |
|-----|------------|-------------|---------------------------|
| 1 | 0.80% | −0.53% | **0.53%** |
| 2 | −0.09% | 0.45% | **0.02%** |
| 3 | −0.28% | 1.47% | **0.07%** |
| 4 | −0.63% | 0.28% | **0.56%** |
| 5 | −1.68% | −0.23% | **−1.39%** |

**Day 1 calculation example:**
$$0.80(0.80\%) + 0.20(-0.53\%) = 0.64\% - 0.106\% = \mathbf{0.53\%}$$

> This process is repeated for **all days** in the full lookback period (not just 5 shown here) using Excel's `=PERCENTILE(x,y)` function to find the specific VaR threshold.

---

### Historical Simulation VaR Results

| VaR Level | Value |
|-----------|-------|
| **1% VaR (99% confidence)** | $2,643,196 |
| **5% VaR (95% confidence)** | $1,622,272 |
| **16% VaR (84% confidence)** | $880,221 |

---

### Comparison: Historical Simulation vs. Parametric Method (Exhibit 5)

| VaR Level | **Historical Simulation** | **Parametric** |
|-----------|-------------------------------|---------------------|
| 1% VaR | **$2,643,196** | $3,476,550 |
| 5% VaR | **$1,622,272** | $2,445,150 |
| 16% VaR | **$880,221** | $1,459,200 |

$$\boxed{\text{Historical simulation VaR} < \text{Parametric VaR at all confidence levels}}$$

**Why the difference?**
1. **Parametric inputs were adjusted UP** — analyst raised SPY's volatility from the observed 13.64% to the long-run norm of 20.0% (recall: recent SPY period had abnormally LOW volatility)
2. **Historical simulation uses the RAW observed data** — reflects the actual (lower-volatility) recent period without adjustment

> **Key lesson**: The methods can produce **materially different** VaR estimates from the SAME underlying data, because parametric method inputs were **judgmentally overridden**, while historical simulation uses data **as observed**.

---

### No Normal Distribution Assumption

**Exhibit 6 — Histogram of actual portfolio returns**: Shows the empirical distribution **departs from normality** (visible skew/shape differences vs. overlaid normal curve).

$$\boxed{\text{Historical simulation captures the TRUE empirical distribution, including any skewness, fat tails, etc.}}$$

> This is a **key advantage** over parametric method, which forces a normal distribution assumption regardless of actual data shape.

---

### No Single "Right" VaR Method

$$\boxed{\text{Different VaR methods WILL disagree — all are sensitive to input choices}}$$

---

### Equal Weighting Limitation (Both Basic Methods)

**Shared limitation**: In their **most basic forms**, both parametric and historical simulation weight **all historical observations equally**.

**Fix for historical simulation**: Can apply a **weighting scheme** that gives:
- **More weight** to recent observations
- **Less weight** to distant observations

---

### Advantages of Historical Simulation

| Advantage | Detail |
|-----------|--------|
| **Uses actual realized outcomes** | Cannot be dismissed as "impossible" — these events actually happened |
| **No distributional assumption needed** | Captures true empirical shape (skewness, fat tails, etc.) |
| **Handles options well** | Since it captures actual realized returns regardless of instrument type — unlike parametric method's struggle with option payoff truncation |

---

### Weaknesses of Historical Simulation

**Core weakness**: **No guarantee the past will repeat** — historical patterns may not recur, or may recur differently.

**Illustrative example — "Black Monday" bias**: Using a short historical window (Jan 1987–Dec 1988) that includes the October 1987 crash would suggest such an event occurs **once every two years** — a clear **overstatement** of true probability.

$$\boxed{\text{Historical simulation works best when the lookback period is genuinely REPRESENTATIVE of future conditions}}$$

---

### Time Horizon Conversion

**Historical method CAN convert time horizons** (e.g., daily → annual) — **IF** the return distribution can be assumed **stationary** (statistical properties don't change over time).

**Method**: Convert each **daily return to an annual equivalent**, then estimate annual VaR from that converted series.

**Caveat**: Using **actual annual data** directly is always **preferred**, but this requires a **much longer lookback period** to have sufficient data points.

---

### Historical Simulation vs. Parametric — Options Handling

| Method | Options Suitability |
|--------|----------------------|
| **Parametric** | **Poor fit** — options have truncated, non-normal payoff distributions |
| **Historical simulation** | **Better fit** — captures actual realized option returns regardless of the non-normal payoff structure |

---

### Example 3 — Knowledge Check Answers

**Q1 — Correct description of 5% historical simulation VaR:**

→ **C. "The fifth percentile — the point beyond which 5% of outcomes result in larger losses"**

- **A wrong**: Confuses percentile-based measurement with a simple "5% to the left of expected value" — doesn't reflect the actual sorting/percentile methodology
- **B wrong**: Confuses historical simulation with the **parametric method** — the "1.65 standard deviations" concept applies to parametric VaR (normal distribution assumption), NOT historical simulation (which uses raw sorted data)

**Q2 — Limitation of historical simulation method:**

→ **A. "The past may not repeat itself"**

- **B wrong**: Historical simulation does NOT rely on the normal distribution — it uses **whatever distribution actually occurred** historically
- **C wrong**: Historical simulation does NOT formally estimate mean/variance — it works directly with realized data, so "biased mean/variance estimates" is not applicable

---

### Key Formula/Concept Reference Card

| Concept | Detail |
|---------|--------|
| **Historical portfolio return formula** | $w_1R_{1,t} + w_2R_{2,t}$ for each historical day $t$, using CURRENT weights |
| **VaR extraction** | Sort returns; select value at desired percentile |
| **Time horizon conversion** | Requires stationarity assumption; convert daily → annual returns, then re-estimate |
| **Weighting scheme option** | Can weight recent observations more heavily to address equal-weighting limitation |

---

### Exam Tips

- **Historical simulation uses CURRENT portfolio weights applied to HISTORICAL returns** — creates a synthetic return series, doesn't replicate actual historical portfolio value paths
- **5% historical VaR = 5th percentile of the sorted return distribution** — NOT a standard-deviation-based calculation (that's parametric method)
- **No distributional assumption required** — this is the KEY conceptual difference from the parametric method
- **Historical simulation VaR ≠ Parametric VaR**, even using the "same" underlying data — differences arise from parameter ADJUSTMENTS made in the parametric approach (judgment overrides)
- **Historical simulation handles options BETTER than parametric** — captures actual realized payoffs regardless of the non-normal truncated distribution
- **Key weakness**: "The past may not repeat itself" — historical patterns are not guaranteed to recur with the same frequency or magnitude
- **Short lookback periods can overstate rare event probability** (Black Monday example) — lookback period selection is critical
- **Time horizon conversion requires STATIONARITY assumption** — same caveat as parametric method regarding extrapolation across time periods
- **Both basic methods (parametric & historical) equally weight ALL observations** by default — historical simulation CAN be modified to weight recent data more heavily, addressing this limitation