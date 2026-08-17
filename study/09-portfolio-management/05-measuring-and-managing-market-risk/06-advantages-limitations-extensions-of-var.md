---
layout: page
title: "Advantages, Limitations, and Extensions of VaR"
permalink: /study/09-portfolio-management/05-measuring-and-managing-market-risk/06-advantages-limitations-extensions-of-var/
prev: /cfa/study/09-portfolio-management/05-measuring-and-managing-market-risk/05-monte-carlo-method-of-var-estimation/
next: /cfa/study/09-portfolio-management/05-measuring-and-managing-market-risk/07-other-key-risk-measures/
---
## Summary: Advantages, Limitations, and Extensions of VaR (CFA Level II — Portfolio Management)

---

## Advantages of VaR

| Advantage | Detail |
|-----------|--------|
| **Simple concept** | Easy to understand even for non-technical decision makers |
| **Easily communicated** | Consolidates significant information into a single number |
| **Basis for risk comparison** | Compare risk across asset classes, portfolios, trading units |
| **Facilitates capital allocation** | E.g., firm can rebalance capital based on relative VaR of trading desks |
| **Performance evaluation basis** | Risk-adjusted return comparisons — less risky/lower-profit unit may be judged more favorably |
| **Verifiable/backtestable** | Can check historically whether losses at expected frequency actually occurred |
| **Widely accepted by regulators** | SEC requires derivatives risk disclosure (VaR, sensitivity analysis, or summary table); banking regulators encourage VaR use |

**Key regulatory nuance**: Regulators **require or encourage** VaR usage but do **NOT prescribe** the estimation method or maximum acceptable VaR level.

---

## Limitations of VaR

| Limitation | Detail |
|-----------|--------|
| **Subjectivity** | Many discretionary choices — cutoff level, time horizon, estimation method, input sources |
| **Underestimates extreme events** | Normal distribution assumption (parametric, often Monte Carlo) understates **left-tail** frequency |
| **Ignores liquidity** | Illiquid assets → VaR understated, especially worse during stress/liquidity squeezes |
| **Correlation risk** | Correlations **rise during market stress** → diversification benefits evaporate exactly when needed most |
| **Vulnerable to trending/volatility regimes** | Portfolio can lose amounts near VaR limit repeatedly without technically breaching it; low-volatility periods understate future risk when volatility normalizes |
| **Misunderstood as worst-case** | VaR is NOT a worst-case scenario — losses CAN and WILL exceed VaR |
| **Oversimplification** | Single number can mask important nuances; should be supplemented with other measures |
| **Ignores right-tail (gains)** | VaR focuses exclusively on losses — misses full risk-reward picture |

> **Important context**: These limitations are **NOT unique to VaR** — they apply to virtually any risk quantification technique.

---

### Example 5 — Knowledge Check Answers

**Q1 — NOT an advantage of VaR:**
→ **B. "There is widespread agreement on how to calculate it"** — **FALSE** (this is actually a limitation — subjectivity in methodology is a KEY weakness)
- A and C ARE genuine advantages (simple communication; cross-unit risk comparison)

**Q2 — A genuine limitation of VaR:**
→ **C. "It focuses exclusively on potential losses, without considering potential gains"**
- A wrong: VaR does NOT require normal distribution — only parametric method typically uses it; historical uses actual data; Monte Carlo uses whatever distribution the user specifies
- B wrong: Regulators do NOT prescribe a maximum VaR — they only encourage/require its use as a disclosure tool

---

## Extensions of VaR

### 1. Conditional VaR (CVaR) — "Expected Tail Loss" / "Expected Shortfall"

$$\boxed{CVaR = \text{Average loss GIVEN that the VaR threshold is exceeded}}$$

**Key question answered**: 
- VaR answers: "What's the **minimum** loss I can expect at X% confidence?"
- CVaR answers: "**How much** can I expect to lose **IF** VaR is exceeded?"

**Calculation approach**: 
- **Best derived from**: Historical simulation or Monte Carlo (can directly observe/average tail losses)
- **Parametric method**: Requires advanced continuous-distribution math — beyond typical scope

---

### Worked Example — CVaR Calculation

**Historical simulation** (500-day sample, 5% VaR = $1,622,272):
- 50 observations (5% of 1,006 total historical returns) lie below the VaR threshold
- **Average of these 50 losses = $2,668,389** → this is the CVaR

**Monte Carlo** (10,000 simulations, 5% VaR = $2,517,705):
- 500 observations (5% of 10,000) lie in the tail
- **Average of these 500 losses = $4,397,756** → this is the CVaR

$$\boxed{\text{Historical CVaR (\$2.67M)} < \text{Monte Carlo CVaR (\$4.40M)}}$$

> **Same pattern as before**: Historical simulation's CVaR is lower because the observed S&P 500 data had **abnormally low volatility** relative to the parametric/Monte Carlo assumed inputs.

---

### 2. Incremental VaR (IVaR)

$$\boxed{IVaR = VaR_{\text{after change}} - VaR_{\text{before change}}}$$

**Purpose**: Measures how portfolio VaR changes when a **position size is altered** relative to remaining positions.

**Worked example**: Increasing SPY allocation from 80% → 90%:
$$VaR_{\text{before}} = \$2,445,150 \qquad VaR_{\text{after}} = \$2,752,500$$
$$\boxed{IVaR = \$2,752,500 - \$2,445,150 = \mathbf{\$307,350}}$$

**Use cases**: Evaluate the risk impact of:
- Increasing an existing position
- Adding a new asset (reducing exposure elsewhere)

> IVaR could reveal the new VaR is **unacceptably high** — OR could reveal VaR actually **decreases** (diversification benefit).

---

### 3. Marginal VaR (MVaR)

**Conceptually similar to IVaR** — but reflects the effect of a **very small (marginal)** change, derived using **calculus-based formulas** rather than discrete before/after comparison.

**Common (approximate) interpretation**: The change in VaR for a $1 or 1% change in a position — technically not exact, but a reasonable approximation.

**Key application**: In a diversified portfolio, marginal VaRs for all positions can be **proportionately weighted to sum to total portfolio VaR** — allowing decomposition of VaR contribution by asset.

---

### IVaR vs. MVaR — Comparison

| Feature | Incremental VaR (IVaR) | Marginal VaR (MVaR) |
|---------|---------------------------|---------------------------|
| **Change size** | Any size (discrete before/after comparison) | **Small/marginal** change (calculus-based) |
| **Method** | Recalculate VaR under new scenario, take difference | Derivative-based formula |
| **Both** | Account for diversification effects; useful pre-trade evaluation | |

---

### 4. Ex Ante Tracking Error (Relative VaR)

**Definition**: Measures the degree to which portfolio performance might **deviate from its benchmark**.

**Calculation method**: 
$$\boxed{\text{Portfolio for VaR calculation} = \text{Actual holdings} - \text{Benchmark holdings (as short positions)}}$$

**Expression**: Typically a **one standard deviation, annualized** measure.

**Interpretation:**

| Scenario | Ex Ante Tracking Error |
|----------|---------------------------|
| Portfolio = perfect benchmark match | **At or near zero** |
| Portfolio deviates significantly from benchmark | **Larger** |

> This is the VaR-based analog to the traditional tracking error concept covered earlier in active management analysis.

---

### Example 6 — Knowledge Check Answers

**Q1 — Conditional VaR measures:**
→ **C. "Average loss, given that VaR is exceeded"**
- A wrong: CVaR is NOT concerned with losses below the VaR threshold — only those EXCEEDING it
- B wrong: VaR/CVaR don't distinguish "normal vs. non-normal" markets in this way

**Q2 — Correct definition of incremental VaR:**
→ **A. "The change in VaR from increasing a position in an asset"**
- B wrong: Describes volatility-driven VaR changes, NOT intentional position changes
- C wrong: IVaR is not about comparing different assets' VaRs — it's about the effect of a SPECIFIC portfolio change

**Q3 — Correct statement about marginal VaR:**
→ **C. "Marginal VaR estimates the change in VaR for a SMALL change in a given portfolio holding"**
- A wrong: MVaR ≠ IVaR — related but distinct concepts (small/marginal change vs. discrete change)
- B wrong: Has nothing to do with margin calls (unfortunate naming similarity, but unrelated concept)

---

### Key Formula Reference Card

| Concept | Formula/Definition |
|---------|----------------------|
| **CVaR (Conditional VaR)** | Average loss GIVEN loss exceeds VaR threshold |
| **IVaR (Incremental VaR)** | $VaR_{\text{after}} - VaR_{\text{before}}$ for a discrete portfolio change |
| **MVaR (Marginal VaR)** | Calculus-derived; approx. change in VaR per $1/1% position change |
| **Ex ante tracking error** | VaR applied to (Portfolio − Benchmark) holdings; one SD, annualized |

---

### Exam Tips

- **CVaR ≠ VaR**: CVaR = average tail loss BEYOND VaR; best calculated via historical simulation or Monte Carlo (not parametric, due to math complexity)
- **IVaR = discrete before/after VaR comparison** for a specific portfolio change; **MVaR = small/marginal change** using calculus
- **Marginal VaRs sum to total portfolio VaR** when properly weighted — useful for risk contribution analysis
- **Ex ante tracking error = relative VaR** — computed by treating benchmark holdings as SHORT positions against actual portfolio holdings
- **VaR is NOT a worst-case scenario** — this is the single most commonly tested misconception
- **Regulators encourage/require VaR but do NOT prescribe methodology or maximum levels** — key distinction
- **VaR limitations are universal to risk measurement techniques**, not unique flaws of VaR specifically
- **Correlation risk**: diversification benefits disappear precisely when needed most (market stress → correlations rise)
- **VaR ignores right-tail (gains)** — a complete risk-reward picture requires examining BOTH tails of the distribution
- **All VaR limitations trace back to**: subjectivity in setup, distributional assumptions, and the backward-looking nature of the underlying data
