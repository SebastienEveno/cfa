---
layout: page
title: "Fixed-Income Strategies — Applications of the Fundamental Law"
permalink: /study/09-portfolio-management/02-analysis-of-active-management/08-fixed-income-strategies/
prev: /cfa/study/09-portfolio-management/02-analysis-of-active-management/07-applications-of-fundamental-law/
next: /cfa/study/09-portfolio-management/02-analysis-of-active-management/09-practical-limitations-of-fundamental-law/
---
## Summary: Fixed-Income Strategies — Applications of the Fundamental Law (CFA Level II — Portfolio Management)

---

### Overview — Two Fixed-Income Applications

1. **Credit timing strategy** (time-series application) — quarterly dichotomous decisions on IG vs. HY credit exposure
2. **Treasury curve positioning** (cross-sectional application) — annual decisions across 5 maturity buckets

---

## Example 1: Credit Timing Strategy (Time-Series Application)

### Setup

**Benchmark**: 70% investment-grade (IG) / 30% high-yield (HY) bonds

**Asset risk statistics:**
- IG quarterly volatility = 2.84%
- HY quarterly volatility = 4.64%
- Correlation(IG, HY) = 0.575

**Active risk (differential volatility):**
$$\sigma_A = \sqrt{2.84^2 - 2(2.84)(4.64)(0.575) + 4.64^2} = \mathbf{3.80\%} \text{ (quarterly)}$$

**Annualized active risk:**
$$3.80\% \times \sqrt{4} = \mathbf{7.60\%}$$

---

### Time-Series Information Coefficient

**Investor accuracy**: Correct 55% of the time (11/20 quarters)

$$\boxed{IC_{\text{time-series}} = \% \text{Correct} - \% \text{Incorrect} = 0.55 - 0.45 = \mathbf{0.10}}$$

**Underlying logic**: For dichotomous ±1.0 scores with zero mean and unit variance, the correlation coefficient = covariance = (correct decisions − incorrect decisions)/total decisions.

---

### Applying the Fundamental Law

**Unconstrained expected quarterly return (probability-weighted):**
$$0.55(3.80) + 0.45(-3.80) = \mathbf{38 \text{ bps}}$$

**Via Grinold rule** ($\mu = IC \times \sigma \times S$):
$$0.10 \times 3.80\% \times 1.0 = \mathbf{38 \text{ bps}} ✓$$

**With active risk limited to 2.00% annually:**
$$\text{Active weight} = \frac{2.00\%}{7.60\%} = \mathbf{26.3\%}$$

**Breadth** (assuming uncorrelated decisions over time): $BR = 4$ (quarterly rebalancing)

**Expected annualized active return:**
$$E(R_A) = IC \times \sqrt{BR} \times \sigma_A = 0.10 \times \sqrt{4} \times 2.00\% = \mathbf{40 \text{ bps/year}}$$

**Information ratio:**
$$IR = 0.10 \times \sqrt{4} = \mathbf{0.20}$$

**Portfolio allocation in each scenario:**
- Bullish credit quarter: 43.7% IG / 56.3% HY
- Bearish credit quarter: 96.3% IG / 3.7% HY

---

### The Breadth Problem — "Rule of Thumb"

$$\boxed{BR \approx \frac{N}{1+(N-1)\rho}}$$

Where $N$ = number of decisions, $\rho$ = average correlation between decisions.

**Key insight**: Market-timing strategies with **few rebalancing opportunities per year** (like this 4-decision credit strategy) suffer from **low breadth** — even with decent IC (0.10), the resulting IR (0.20) is modest.

---

### Increasing Rebalancing Frequency — The Power of Breadth

**Monthly rebalancing** (if truly independent, IC = 0.10 maintained):
$$BR = 12 \implies IR = 0.10 \times \sqrt{12} = \mathbf{0.35}$$

**Daily rebalancing** (250 trading days, if truly independent):
$$BR = 250 \implies IR = 0.10 \times \sqrt{250} = \mathbf{1.58}$$

> **Critical caveat**: This only works if decisions are **truly independent** each period. Simply repeating the same quarterly signal monthly (e.g., +1, +1, +1 for 3 months) does **NOT** increase breadth or IR.

---

### The Constraint Problem — When Aggressiveness Meets Limits

**At IR = 1.58, doubling active risk to 4.00%** would require active weight = $4.00/7.60 = 52.6\%$
→ Total portfolio: 122.6% IG / −22.6% HY (**requires short selling** HY bonds)

**With long-only constraint**: TC falls below 1.0

**Using cumulative normal distribution** for continuous scores:
$$TC = \Phi(1.32) - \Phi(-0.57) = \mathbf{0.62}$$

**Constrained IR and active return:**
$$IR_{constrained} = 0.62 \times 1.58 = \mathbf{0.98}$$
$$E(R_A) = 0.98 \times 4.00\% = \mathbf{3.92\%} \text{ (not the unconstrained } 6.32\%\text{)}$$

> Constraints significantly dampen the benefits of high-frequency/high-conviction strategies once position limits are hit.

---

## Example 2: US Treasury Curve Positioning (Cross-Sectional Application)

### Setup — Five Treasury Maturity Buckets

**Benchmark**: Equal-weighted (20% each), annual rebalancing

**Return and risk statistics (2009-2018):**

| Bucket | Avg Return | Absolute Vol | **Active Vol** |
|--------|-----------|--------------|------------------|
| 0-1yr | 0.40% | 0.17% | **3.45%** |
| 1-3yr | 0.90% | 0.85% | 2.85% |
| 3-7yr | 2.21% | 3.20% | **1.05%** (lowest — closest to benchmark average) |
| 7-10yr | 3.15% | 5.86% | 2.40% |
| 10-20yr | 3.89% | 7.95% | **4.57%** (highest) |

**Key insight**: **Active** volatility is highest at the extremes (shortest and longest maturity) — NOT proportional to absolute volatility (which rises monotonically with maturity).

**Active return correlations**: Mixed signs — short maturities positively correlate with each other; short vs. long maturities are **negatively** correlated (curve-steepening/flattening dynamics).

---

### Breadth Calculation

$$BR = 9.4 \text{ (despite only 5 assets)}$$

> **Why BR > N**: Some off-diagonal correlations are **negative** — negatively correlated bets effectively create MORE independent decisions than the raw asset count suggests.

---

### Scenario 1: "Rates Will Rise" Bet (Uniform Directional View)

**Scores**: Positive for short maturities, negative for long maturities (all reflecting ONE view: rates rising)

**Assumed IC input = 0.20, BUT adjusted DOWN to 0.12** in fundamental law accounting.

**Why the downward adjustment**: All scores reflect essentially **ONE underlying decision** (rates will rise) — not truly independent bets across 5 assets, so the "ambition" of the forecast is lower relative to the risk model's implied opportunities.

**Expected active return:**
$$E(R_A) = 0.12 \times \sqrt{9.4} \times 1.00\% = \mathbf{37 \text{ bps/year}}$$

---

### Scenario 2: "Yield Curve Shape Change" Bet (More Differentiated View)

**Scores**: More varied — betting on curve reshaping (not simple parallel shift)

**IC adjustment**: Much smaller drop — **0.18** (close to assumed 0.20)

**Why less adjustment needed**: This forecast represents a **more genuinely differentiated/ambitious** set of independent views across maturities.

**Expected active return:**
$$E(R_A) = 0.18 \times \sqrt{9.4} \times 1.00\% = \mathbf{55 \text{ bps/year}}$$

**Information ratio:**
$$IR = 0.18 \times \sqrt{9.4} = \mathbf{0.55}$$

---

### Key Lesson — Score Assignment Affects Realized IC

> **Two forecasts using the SAME assumed IC input (0.20) can produce very different fundamental law ICs** (0.12 vs. 0.18) depending on whether the scores represent:
> - **One consolidated view** expressed across many assets (heavily downward-adjusted IC)
> - **Multiple genuinely independent views** (minimal downward adjustment)

**Increasing aggressiveness caveat**: At higher active risk (e.g., 2.00% instead of 1.00%), the 10-20yr position would approach a **near-zero total weight** (2.8%) → risk of requiring **short selling** → if disallowed, **TC < 1.00** and expected returns fall below the simple fundamental law prediction.

---

## Example 9 — Breadth and Rebalancing with Correlated Assets

**Setup**: 4 assets; #1-#2 correlated (0.25); #3-#4 correlated (0.25); all cross-pairs uncorrelated

**Correlation matrix:**

| | #1 | #2 | #3 | #4 |
|-|-----|-----|-----|-----|
| #1 | 1.00 | 0.25 | 0.00 | 0.00 |
| #2 | 0.25 | 1.00 | 0.00 | 0.00 |
| #3 | 0.00 | 0.00 | 1.00 | 0.25 |
| #4 | 0.00 | 0.00 | 0.25 | 1.00 |

**Given**: BR = 3.2 (< N = 4, due to positive within-pair correlations)

**Q1 — Why is breadth < number of assets (conceptual)?**
→ Because Assets #1-#2 and #3-#4 each move together (positive correlation) — betting on both members of a correlated pair isn't a fully independent decision, reducing effective breadth below the raw asset count.

**Q2 — IC impact: Betting #1&#2 outperform, #3&#4 underperform vs. Betting #1&#3 outperform, #2&#4 underperform:**
→ **First scenario (aligned with correlation structure)**: LESS ambitious → **IC adjusted DOWN more**
→ **Second scenario (cuts across correlated pairs)**: MORE ambitious/differentiated → **IC adjusted down LESS**

**Q3 — Monthly rebalancing instead of annual:**
→ **Potential breadth increase**: $12 \times 3.2 = 38.4$ (IF decisions are truly uncorrelated over time)
→ **BUT**: Requires maintained IC AND a transfer coefficient of 1.00 (no turnover constraints)
→ **In practice**: Turnover limits likely reduce TC, partially offsetting the breadth gain

---

### Summary Table — All Fixed-Income Examples

| Strategy | BR | IC (assumed→adjusted) | Active Risk | Active Return | IR |
|----------|-----|------------------------|--------------|-----------------|-----|
| Credit timing (quarterly, unconstrained) | 4.0 | 0.10 | 2.00% | 40 bps | **0.20** |
| Credit timing (daily, hypothetical) | 250 | 0.10 | 2.00% | 316 bps | **1.58** |
| Credit timing (daily, constrained TC=0.62) | 250 | 0.10 | 4.00% | 392 bps | **0.98** |
| Treasury "rates rise" bet | 9.4 | 0.20→0.12 | 1.00% | 37 bps | **0.37** |
| Treasury "curve shape" bet | 9.4 | 0.20→0.18 | 1.00% | 55 bps | **0.55** |

---

### Key Formula Reference Card

| Formula | Expression |
|---------|-----------|
| **Time-series IC** | % Correct − % Incorrect |
| **Breadth rule of thumb** | $BR \approx N/[1+(N-1)\rho]$ |
| **Active weight (dichotomous)** | $\sigma_A^{target}/\sigma_A^{security}$ |
| **Fundamental law** | $IR = TC \times IC \times \sqrt{BR}$ |
| **TC via normal CDF** | $\Phi(S_{upper}) - \Phi(S_{lower})$ |

---

### Exam Tips

- **Market-timing/tactical strategies have LOW breadth** (few decisions/year) — need very high IC to compensate
- **Time-series IC = % correct − % incorrect** — different calculation method than cross-sectional IC
- **Breadth > number of assets** possible when correlations include NEGATIVE values (Treasury example: BR=9.4 with only 5 assets)
- **Breadth < number of assets** when correlations are POSITIVE among grouped assets (Example 9: BR=3.2 with 4 assets)
- **Score assignment affects the ADJUSTED IC** used in fundamental law calculations, even with the same assumed IC input — depends on how ambitious/differentiated the forecast truly is relative to the correlation structure
- **Increasing rebalancing frequency increases breadth** ONLY if decisions are truly independent over time — repeating the same signal doesn't help
- **Aggressive strategies eventually hit constraints** (long-only, position limits) → TC falls below 1.0 → actual performance falls short of unconstrained fundamental law predictions
- **A forecast that "goes against" the correlation structure** (betting negatively correlated pairs will move oppositely as expected, or positively correlated pairs will diverge) represents a MORE ambitious, differentiated view → smaller IC downward adjustment
