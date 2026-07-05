## Summary: Selecting the Appropriate Valuation Method (CFA Level II)

---

### Forecasting Approaches

| Approach | Direction | Example |
|----------|-----------|---------|
| **Top-down** | Macro → Industry → Company | GDP → appliance industry sales → company market share → revenue |
| **Bottom-up** | Micro → Aggregate | Store-level sales/m² → company total revenue |

Analysts integrate both **quantitative** (ratios, forecasts) and **qualitative** factors (management quality, accounting transparency) into forecasts.

---

### Two Broad Types of Valuation Models

| Type | Definition | Key Feature |
|------|-----------|------------|
| **Absolute valuation** | Estimates intrinsic value directly | Compared to market price to identify mispricing |
| **Relative valuation** | Estimates value relative to comparable assets | "Similar assets should sell at similar prices" |

> In practice, analysts **use multiple approaches** simultaneously for cross-validation.

---

### Absolute Valuation Models

#### 1. Present Value / Discounted Cash Flow (DCF) Models

Three cash flow definitions:

| Model | Cash Flow Defined As | Level |
|-------|---------------------|-------|
| **Dividend Discount Model (DDM)** | Dividends paid to shareholders | Shareholder level |
| **Free Cash Flow to Equity (FCFE)** | CF from operations net of reinvestment and debt payments | Company level (equity claim) |
| **Free Cash Flow to Firm (FCFF)** | CF from operations net of reinvestment, before debt payments | Company level (all claimants) |
| **Residual Income Model** | Accrual earnings in excess of opportunity cost of equity | Accounting-based |

**Equity DCF vs. Bond DCF — Key Differences:**

| Factor | Bond Valuation | Equity Valuation |
|--------|---------------|-----------------|
| Cash flows | **Contractually specified** | Must be estimated and forecast |
| Forecast horizon | Finite (maturity date) | **Indefinite** (no maturity) |
| Discount rate | Based on market rates + credit rating | **Subjective** — requires risk model (CAPM, etc.) |
| Uncertainty | Lower | **Much higher** |

> **Implication**: Graham & Dodd (1934) recommendation still valid — state a **range** of intrinsic values, not a single point. Sensitivity analysis is essential.

#### 2. Asset-Based Valuation

Values a company based on **market value of assets or resources controlled**.

**Best suited for:**
- Natural resource companies (oil reserves, timber board meters)
- Companies where assets are the primary value driver

**Limitation**: Few pure-play natural resource companies exist today — most have mixed operations → may need **sum-of-the-parts** approach (asset-based for resource division + DCF for other divisions).

---

### Relative Valuation Models

**Core principle**: Similar assets should sell at similar prices.

**Implementation:**

| Type | Examples |
|------|---------|
| **Price multiples** | P/E, P/B, P/CF, P/S (price relative to per-share fundamental) |
| **Enterprise multiples** | EV/EBITDA, EV/Sales, EV/EBIT (total firm value to operating fundamental) |

**Method of comparables**: Apply peer group multiples to value the subject company.

**Key distinctions:**

| Term | Meaning |
|------|---------|
| **Undervalued** | Below intrinsic value (absolute) |
| **Relatively undervalued** | Below comparable asset's valuation (relative) — **may still be overvalued in absolute terms** |

**Trading strategies based on relative valuation:**
- **Conservative**: overweight relatively undervalued; underweight relatively overvalued vs. benchmark
- **Aggressive (pairs trading)**: buy relatively undervalued stock + short relatively overvalued stock — market-neutral

---

### Critical Exam Point — Can Both Analysts Be Right?

**Yes** — from the Smithson Genomics example:
- Analyst 1: Smithson overvalued vs. **healthcare sector peers** (15% overvalued)
- Analyst 2: Smithson undervalued vs. **Russell 3000** (10% undervalued)

**Both can be right if**: The entire healthcare sector is undervalued relative to the broader market. Each conclusion is relative to a **different benchmark** — neither is an absolute valuation statement.

---

### Advantages and Limitations

| Model Type | Advantages | Limitations |
|-----------|-----------|------------|
| **DCF/Present value** | Theoretically rigorous; estimates intrinsic value | High uncertainty in inputs; many assumptions; complex |
| **Asset-based** | Independent estimate; useful for resource companies | Limited to asset-heavy businesses |
| **Relative (comparables)** | Simple; market-grounded; widely understood | Doesn't establish absolute value; comparison asset may itself be mispriced |

---

### Exam Tips

- **Absolute models** → can identify absolute mispricing; **relative models** → can only identify mispricing relative to a benchmark
- **Relative valuation requires a further assumption**: the comparison asset is fairly valued — if it isn't, relative valuation conclusions can be misleading
- **Equity DCF > Bond DCF in complexity**: no contractual cash flows, no maturity, subjective discount rate
- **Sensitivity analysis** is mandatory in DCF — always present a range, not a single value
- **Both analysts can be right** in relative valuation if they use different benchmarks — this is a classic exam trap
- **Pairs trading** = market-neutral relative value strategy — profits from convergence regardless of market direction