---
layout: page
title: "Estimating VaR — Setup and Data Foundations"
permalink: /study/09-portfolio-management/05-measuring-and-managing-market-risk/02-estimating-var/
prev: /cfa/study/09-portfolio-management/05-measuring-and-managing-market-risk/01-introduction/
next: /cfa/study/09-portfolio-management/05-measuring-and-managing-market-risk/03-parametric-method-of-var-estimation/
---
## Summary: Estimating VaR — Setup and Data Foundations (CFA Level II — Portfolio Management)

---

### Three VaR Estimation Methods (Preview)

1. **Parametric (variance-covariance) method**
2. **Historical simulation method**
3. **Monte Carlo simulation method**

---

### Three Common Steps Across All VaR Methods

| Step | Description |
|------|-------------|
| **1. Risk decomposition** | Convert portfolio holdings into exposures to risk factors |
| **2. Gather data history** | Collect historical data for each risk factor |
| **3. Apply method-specific computation** | Use data to estimate VaR (this is where methods diverge) |

---

### Step 1: Risk Decomposition — Simple vs. Complex

**Simple example**: An **equity security can BE the risk factor itself** (direct mapping).

**Complex example**: A **foreign convertible bond** has MULTIPLE risk factors simultaneously:
- Currency risk
- Equity risk (conversion feature)
- Multiple points on a yield curve (credit-quality-specific)

> Fixed-income and derivatives instruments often require **more sophisticated decomposition** than simple equity holdings to accurately capture loss potential.

---

### Step 2: Data History Requirements — Method Differences

| Method | Data History Requirement |
|--------|----------------------------|
| **Parametric** | NOT formally required — needs only **parameter estimates** (expected return, std dev, sometimes skewness/kurtosis) |
| **Monte Carlo** | NOT formally required — same parameter-based approach |
| **Historical simulation** | **ABSOLUTELY required** — method is built directly on historical data |

**Key nuance**: Even though parametric/Monte Carlo don't *formally* require historical data, historical data is **typically used as a starting point** to estimate the needed parameters — users can also substitute **judgment** or alternative forecasting models.

---

## Example Portfolio Setup

**Portfolio**: $150 million, two-asset ETF portfolio

| Asset | Ticker | Represents | Allocation |
|-------|--------|-----------|------------|
| **SPY** | SPDR S&P 500 ETF | US equity exposure | **80%** |
| **SPLB** | SPDR Portfolio Long-Term Corporate Bond ETF | Corporate bond exposure | **20%** |

**Simplification**: The two securities **ARE** the risk factors (no further decomposition needed) — return history serves directly as risk factor history.

**Lookback period**: 1 July 2015 – 28 June 2019 (4 years of daily total return data, including dividends).

> **Lookback period**: The historical data window used to estimate model parameters — a **critical judgment call** in any VaR estimation (how much historical data is "representative"?).

---

### Raw Historical Statistics (Exhibit 2)

| | Daily Avg Return | Daily Std Dev | **Annualized Return** | **Annualized Std Dev** |
|--|---------------------|-------------------|---------------------------|----------------------------|
| **SPY** | 0.047% | 0.86% | **12.51%** | **13.64%** |
| **SPLB** | 0.031% | 0.49% | **8.03%** | **7.73%** |

**Correlation (SPLB, SPY)**: **−0.0607**

---

### Comparison to Long-Run Historical Norms

| Asset | Recent 4-yr Data | Long-Run Historical Norm (Malkiel 2007) |
|-------|---------------------|---------------------------------------------|
| **S&P 500 (SPY)** | 12.5% return, 13.6% σ | **~10.5% return, ~20% σ** |
| **Long-term corporate bonds (SPLB)** | 8.0% return, 7.7% σ | **~6% return, ~8.5% σ** |

**Key observations:**
- Recent SPY period showed **higher returns but LOWER volatility** than long-run norms
- Recent SPLB period showed **higher returns but SIMILAR volatility** to the long-run norm

---

### The Critical Judgment Step — Adjusting Inputs

$$\boxed{\text{Practitioners MUST critically assess whether the lookback period is REPRESENTATIVE of expected future performance}}$$

**Decision made in this example**: Believing no information suggests future deviation from **long-run historical performance**, the analyst **overrides** the recent 4-year data with long-run historical averages:

| Input | Recent Data (Rejected) | **Adjusted (Used)** |
|-------|---------------------------|--------------------------|
| SPY return | 12.51% | **10.5%** |
| SPY std dev | 13.64% | **20.0%** |
| SPLB return | 8.03% | **6.0%** |
| SPLB std dev | 7.73% | **8.5%** |

**Correlation**: **NOT adjusted** — analyst assumes the recent equity/bond correlation relationship (−0.0607, rounded to **−0.06**) remains a reasonable forward-looking estimate.

> **Key teaching point**: Different analysts applying different judgment could reach **very different VaR estimates** even using the same raw data — this is a fundamental source of VaR estimation uncertainty.

---

### Final Input Assumptions for VaR Calculations (Exhibit 3)

| Asset | Allocation | Annualized Return | Annualized Std Dev |
|-------|------------|------------------------|---------------------------|
| **SPY** | 80% | **10.5%** | **20.0%** |
| **SPLB** | 20% | **6.0%** | **8.5%** |

**Correlation (SPY, SPLB)**: **−0.06**

> These inputs will serve as the **foundation** for calculating VaR using all three methods (parametric, historical simulation, Monte Carlo) in subsequent sections.

---

### Key Conceptual Takeaways

1. **Risk decomposition complexity varies** — simple for direct equity holdings, complex for hybrid instruments (convertibles, derivatives)
2. **Historical data is a starting point, not gospel** — analysts should apply judgment to adjust for whether the lookback period is representative
3. **Different VaR methods have different data requirements** — historical simulation is data-intensive; parametric/Monte Carlo are parameter-driven
4. **Judgment introduces subjectivity** — the SAME underlying data can produce DIFFERENT VaR estimates depending on how inputs are adjusted
5. **Correlation assumptions matter** — even when adjusting return/volatility inputs, the correlation structure between assets is a separate judgment call

---

### Exam Tips

- **Three-step universal process**: (1) risk decomposition, (2) gather data history, (3) apply method-specific computation
- **Historical simulation REQUIRES data history**; parametric and Monte Carlo do NOT formally require it (but typically use it as a starting point)
- **Lookback period** = the historical window used for parameter estimation — choosing this window is itself a judgment call
- **Practitioners should critically assess whether historical data is representative** of future expectations — override with judgment when needed
- **This example demonstrates real analyst judgment**: replacing recent 4-year data with long-run historical averages because the analyst believed the recent period wasn't representative
- **Correlation was NOT adjusted** in this example, even though returns/volatilities were — shows that different inputs can be treated differently based on the analyst's confidence in each
- **Simple two-asset portfolio** used pedagogically to illustrate VaR mechanics without complex multi-asset math — real portfolios have many more holdings/risk factors
- This section sets up the **foundational inputs** (80/20 SPY/SPLB, 10.5%/6.0% returns, 20.0%/8.5% std devs, −0.06 correlation) that will be used to actually CALCULATE VaR via the three methods in the next sections