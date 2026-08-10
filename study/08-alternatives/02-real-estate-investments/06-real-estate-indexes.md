## Summary: Real Estate Indexes (CFA Level II — Alternative Investments)

---

### Purpose of Real Estate Indexes

Real estate indexes track broad market risk/return for:
1. **Performance evaluation** of markets
2. **Benchmarking** investments and managers
3. **Creating index-based investment products**

**Two broad categories:**

| Type | Investability | Basis |
|------|---------------|-------|
| **Private market indexes** | Generally **not directly investable** | Appraisals or actual transactions |
| **Public market indexes** | **Directly investable** | Listed equity/debt securities (via mutual funds, ETFs, UCITS) |

---

### Appraisal-Based Indexes

**Why appraisals are needed**: Individual properties don't transact frequently enough to build a reliable index from same-property sales alone.

**Example — GREFI (Global Real Estate Fund Index)**:
- Launched 2014; capitalization-weighted; quarterly, local-currency returns
- Combines data from **NCREIF** (US), **INREV** (Europe), **ANREV** (Asia)
- Managers contribute appraised values, NOI, capex, occupancy data

**Holding period return formula:**
$$\boxed{\text{HPR} = \frac{\text{Ending market value} - \text{Beginning market value} + \text{Net income}}{\text{Beginning market value}}}$$

> Equivalent to a **single-period IRR** — but uses **appraised values** (not actual transaction prices) since properties don't sell every period.

---

### Wallonia Example — Holding Period Return

**Setup**: NOI = EUR406,750; Capex = EUR100,000; Purchase price (2 years ago) = EUR3,750,000; INREV returns: Year 1 = +5.6%, Year 2 = +3.2%

**Beginning market value** (most recent year) = 3,750,000 × 1.056 = **EUR3,960,000**
**Ending market value** = 3,960,000 × 1.032 = **EUR4,086,720**

**Holding period return:**
$$HPR = \frac{4,086,720 - 3,960,000 + 406,750 - 100,000}{3,960,000} = \frac{433,470}{3,960,000} = \mathbf{10.95\%}$$

> **Key limitation**: Income component doesn't represent actual **distributions** to fund/REIT investors — unlike equity total return (capital appreciation + dividends actually paid).

---

### Transaction-Based Indexes

**Two econometric approaches:**

#### 1. Repeat Sales Index
- Relies on **same property selling multiple times**
- Regression allocates value change between sale dates to each intervening quarter
- **More reliable with more transactions**
- Example: RCA Commercial Property Price Indexes (US)

#### 2. Hedonic Index
- **Does NOT require repeat sales**
- Uses regression with variables controlling for property characteristics (size, age, construction quality, location)
- Separates value differences due to **property characteristics** from value differences due to **market conditions**
- Most reliable at **national level**; sometimes regional if sufficient data

---

### Appraisal Lag — Core Problem

**Why appraisals lag:**

| Market Direction | Transaction Prices | Appraised Values |
|------------------|---------------------|-------------------|
| **Rising** | Rise **first** | Lag (captured later via comps/surveys) |
| **Falling** | Fall **first** | Lag (captured later) |

**Second cause — infrequent appraisals**: Not all properties in a pooled fund get appraised every quarter; managers may assume constant value between periodic appraisals (often annual).

---

### Consequences of Appraisal Lag

| Impact | Effect |
|--------|--------|
| **Smoothing** | Appraisal-based indexes understate true volatility |
| **Correlation** | Understated correlation with other asset classes (stocks/bonds) |
| **Sharpe ratio** | **Overstated** (understated volatility inflates risk-adjusted returns) |
| **Asset allocation** | Overestimates optimal allocation to private real estate |

> **Critical caveat**: If comparing real estate managers who ALL use appraisal-based valuation, the comparison remains internally consistent. The problem arises specifically when comparing appraisal-based real estate returns to **publicly-traded** asset classes.

---

### Correcting for Appraisal Lag — Unsmoothing

**Two solutions:**
1. **Unsmooth** the appraisal-based index (statistical adjustment)
2. **Use a transaction-based index** instead for cross-asset comparisons

**Unsmoothing model** (modified autoregressive):
$$\boxed{R_t^* = aR_t + (1-a)R_{t-1}^*}$$

**Reversed to solve for true return:**
$$\boxed{R_t = \frac{R_t^* - (1-a)R_{t-1}^*}{a}}$$

Where $a$ (0 ≤ a ≤ 1) = speed of adjustment; **higher $a$ = faster reflection** of true returns in appraisals.

---

### Example 13 — Unsmoothing Calculation ($a = 0.6$)

**Formula applied**: $R_t = \frac{R_t^* - 0.4 \times R_{t-1}^*}{0.6}$

| Period | Appraisal Return | Lagged Appraisal Return | **Unsmoothed Return** |
|--------|-------------------|--------------------------|------------------------|
| 1 | 0.50% | 2.70% | **2.63%** |
| 2 | 2.20% | 0.50% | **4.00%** |
| 3 | 7.30% | 2.20% | **13.97%** |
| 4 | 3.20% | 7.30% | **8.87%** |
| 5 | 1.00% | 3.20% | **3.80%** |
| 6 | −8.70% | 1.00% | **−13.83%** |
| 7 | −1.10% | −8.70% | **−5.63%** |
| 8 | 2.40% | −1.10% | **3.27%** |
| 9 | 3.10% | 2.40% | **6.77%** |
| 10 | 4.20% | 3.10% | **9.07%** |

> **Unsmoothed returns show much wider swings** — this confirms appraisal-based indexes dramatically understate true volatility.

---

### Public Real Estate Equity Indexes (REIT Indexes)

**Example — S&P Asia-Pacific REIT Index:**

| Feature | Detail |
|---------|--------|
| **Coverage** | Australia, Hong Kong SAR, Japan, New Zealand, Singapore, South Korea |
| **Eligibility** | Real estate ownership/development/management REIT structures |
| **Exclusions** | Timber REITs, mortgage REITs, tower REITs, MBS REITs |
| **Weighting** | Float-adjusted, market-cap weighted |
| **Rebalancing** | Annual (September); interim updates March/June/December |

**Key bias**: Float-adjusted market-cap weighting skews toward **largest markets** (e.g., Singapore) rather than transaction volume — same concentration issue seen in commodity indexes.

---

### Real Estate Fixed-Income Indexes

**Key feature vs. equity indexes**: Finite bond maturities and frequent new issuance → **greater turnover and more frequent rebalancing**.

**MBS Indexes — Prepayment Risk:**

| Risk Type | Description | Interest Rate Environment |
|-----------|-------------|---------------------------|
| **Contraction risk** | Faster-than-expected repayment | Low rates → refinancing surge → shorter duration |
| **Extension risk** | Slower-than-expected repayment | Rising rates → less refinancing → longer duration |

> Prepayment risk is **most prevalent in the US** due to lack of prepayment penalties common elsewhere.

**Covered Bonds:**
- Issued primarily by **European banks**
- Mortgage pool segregated on balance sheet as collateral
- **Dual recourse**: investors have claims on both the issuing bank AND the collateral pool
- Result: **Lower risk, more stable returns** than typical fixed income

**Denmark Case Study**: Largest covered bond market globally; AAA sovereign rating; ~25% foreign ownership (2021); high liquidity allows borrowers to shift between fixed/adjustable rate structures as conditions change; S&P Denmark Collateralized Bond Index tracks this market since 2017.

---

### Question Set Answers

**Q1 — Volatility estimation in real estate indexes:**
→ **A. Volatility is typically UNDERESTIMATED using appraisal-based indexes** — smoothing effect from lagged/infrequent appraisals suppresses observed volatility below true market volatility.

**Q2 — Problem in comparing real estate indexes to stocks/bonds:**
→ **C. The income component doesn't represent actual cash flow distributions** — unlike equity total return (based on dividends actually paid), the appraisal-based income component reflects accounting NOI, not distributed cash to investors.

**Q3 — Correct statement about hedonic and repeat sales indexes:**
→ **B. Hedonic indexes use sales in each time period and control for property characteristic differences** — hedonic indexes do NOT require repeat sales of the same property (unlike repeat sales indexes); they use regression variables (size, age, location, quality) to isolate market-driven value changes from characteristic-driven differences.

---

### Exam Tips

- **Appraisal-based indexes UNDERSTATE volatility** — smoothing effect from lagged/infrequent appraisals
- **Appraisal lag direction**: lags BOTH rising and falling markets — always behind actual transaction prices
- **Smoothing → understated correlation with other assets + overstated Sharpe ratios** → can lead to OVER-allocation to private real estate in asset allocation models
- **Unsmoothing formula**: $R_t = [R_t^* - (1-a)R_{t-1}^*]/a$ — memorize for calculation questions
- **Repeat sales index**: requires SAME property sold twice; **Hedonic index**: does NOT require repeat sales, uses characteristic-controlling regression
- **REIT index bias**: float-adjusted market-cap weighting concentrates in largest markets (not necessarily most liquid/traded)
- **MBS prepayment risk**: contraction risk (rates fall) vs. extension risk (rates rise) — directly affects index duration
- **Covered bonds**: dual recourse (issuer + collateral pool) → lower risk than typical MBS; Denmark = largest, most liquid market
- **Income component in appraisal indexes ≠ actual distributions** — key distinguishing feature vs. equity/bond total return calculations