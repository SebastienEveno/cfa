## Formula Summary: Real Estate Investments (CFA Level II — Alternative Investments)

---

### 1. Income and Cash Flow Measures

**Net Operating Income (NOI):**
$$\boxed{NOI = \text{Effective gross income} - \text{Operating expenses} - \text{Property maintenance allowance}}$$

**Gross Potential Rental Income (GPRI)** — residential/multi-family:
$$\boxed{GPRI = \text{Market rent} \times \text{Rentable space}}$$

> **Loss to Lease** = GPRI − Gross Rental Income (current rents below market rent)

**Equity Dividend Rate (EDR):**
$$\boxed{EDR = \frac{\text{Pre-tax cash flow}}{\text{Initial equity investment}}}$$
$$\text{Pre-tax cash flow} = NOI - \text{Debt service} \qquad \text{Initial equity} = \text{Purchase price} - \text{Mortgage amount}$$

---

### 2. Leverage and Coverage Measures

**Loan-to-Value Ratio (LTV):**
$$\boxed{LTV = \frac{\text{Mortgage principal outstanding}}{\text{Current property value}}}$$

**Debt Service Coverage Ratio (DSC):**
$$\boxed{DSC = \frac{NOI}{\text{Annual debt service (principal + interest)}}}$$

| Cycle Phase | NOI | DSC | LTV |
|-------------|-----|-----|-----|
| Recovery | Bottoms, begins rising | Bottoms, begins rising | **Peaks**, begins falling |
| Expansion | Rising | Increasing | Decreasing |
| Oversupply | **Peaks**, begins falling | **Peaks**, begins falling | Bottoms, begins rising |
| Recession | Falling | Decreasing | Increasing |

---

### 3. After-Tax Returns

$$\boxed{\text{After-tax CF} = \text{Pre-tax CF} - \text{Taxes}}$$
$$\boxed{\text{Taxes} = t \times (NOI - \text{Interest expense} - \text{Depreciation expense})}$$
$$\boxed{\text{Annual depreciation} = \frac{\text{Depreciable base}}{\text{Useful life}}} \quad \text{Depreciable base} = \text{Total cost} - \text{Land value}$$

> **Land is never depreciated.** Lower land value → higher depreciable base → higher depreciation → lower taxes → higher after-tax CF.

---

### 4. Direct Capitalization Valuation

$$\boxed{\text{Property value} = \frac{\text{Expected NOI}}{\text{Cap rate}}}$$

$$\boxed{\text{Cap rate} = r - g}$$

$$\boxed{\text{Implied cap rate} = \frac{NOI_1}{\text{Sale price}}} \quad \text{(from comparable sales)}$$

**Going-in cap rate** — first-year NOI relative to the purchase/estimated property value:
$$\boxed{\text{Going-in cap rate} = \frac{\text{First-year NOI}}{\text{Property value}}}$$

> Going-in cap rate can differ from the terminal cap rate ($r-g$) when near-term NOI reflects temporary conditions (e.g., lease-up or tenant losses) rather than a permanently different risk/growth profile.

**Best suited when**: NOI is stable/consistent; otherwise use a **stabilized/normalized NOI**.

---

### 5. DCF Valuation

$$\boxed{\text{Property value} = \sum_{i=1}^{n} \frac{NOI_{t+i}}{(1+r)^i} + \frac{\text{Terminal value}}{(1+r)^n}}$$

$$\boxed{\text{Terminal value} = \frac{NOI_n(1+g)}{r - g}}$$

> Terminal value uses **next year's NOI** (final projected year's NOI grown by $g$), discounted at the terminal cap rate $r-g$, and often represents the majority of total DCF value. **Best suited when**: the analyst has visibility into NOI dynamics that change materially over the holding period (unlike the stable-NOI direct cap case).

---

### 6. Cost Approach

**Core principle**: Don't pay more than the cost to buy vacant land + construct a comparable new property.

$$\boxed{\text{Accumulated depreciation} = \text{Building cost} \times \frac{\text{Age}}{\text{Useful life}}}$$

$$\boxed{\text{Total estimated value} = (\text{Building cost} - \text{Accumulated depreciation}) + \text{Land value}}$$

> Land is not depreciated. Replacement cost tends to **exceed market price during the oversupply phase** (construction costs stay elevated while market prices soften).

---

### 7. Sales Comparison Approach

**Core principle**: Don't pay more than comparable properties have recently sold for, after adjustments (sale date, size, location, age, market condition).

$$\boxed{\text{Estimated value} = \text{Average adjusted price per unit} \times \text{Subject property size}}$$

> **Income approach** favored for large/unique commercial properties (few comparables). **Sales comparison** favored for single-family residential (many comparables).

---

### 8. REIT Financial Metrics

**Funds from Operations (FFO):**
$$\boxed{FFO = \text{Net income} + \text{Depreciation} + \text{Amortization} - \text{Net gains from property sales}}$$

**Adjusted Funds from Operations (AFFO):**
$$\boxed{AFFO = FFO - \text{Non-cash rent} - \text{Recurring maintenance capital expenditures}}$$

**Payout ratios:**
$$\text{FFO payout ratio} = \frac{\text{Dividends per share}}{FFO \text{ per share}} \qquad \text{AFFO payout ratio} = \frac{\text{Dividends per share}}{AFFO \text{ per share}}$$

---

### 9. REIT Valuation

**Net Asset Value (NAV):**
$$\boxed{NAV = \text{Total assets at market value} - \text{Total liabilities}}$$
$$\boxed{NAV \text{ per share} = \frac{NAV}{\text{Shares outstanding}}}$$

**Price multiples:**
$$\boxed{\text{P/FFO} = \frac{\text{Share price}}{FFO \text{ per share}}} \qquad \boxed{\text{P/AFFO} = \frac{\text{Share price}}{AFFO \text{ per share}}}$$

**Dividend Discount Model:**
$$\boxed{V_0 = \frac{D_1}{r - g}}$$

**RevPAR (hospitality REITs):**
$$\boxed{RevPAR = \text{Occupancy rate} \times \text{Average daily rate (ADR)}} = \frac{\text{Total room revenue}}{\text{Total available room-nights}}$$

---

### 10. Real Estate Index Returns

**Holding period return (appraisal-based indexes)** — equivalent to a single-period IRR using appraised (not transaction) values:
$$\boxed{\text{HPR} = \frac{\text{Ending market value} - \text{Beginning market value} + \text{Net income}}{\text{Beginning market value}}}$$

> Net income here is NOI net of capex; the income component reflects accounting NOI, not actual distributions to fund/REIT investors.

**Unsmoothing model** (corrects for appraisal lag/smoothing):
$$\boxed{R_t^* = aR_t + (1-a)R_{t-1}^*}$$

**Reversed to solve for the true (unsmoothed) return:**
$$\boxed{R_t = \frac{R_t^* - (1-a)R_{t-1}^*}{a}}$$

Where $R_t^*$ = observed (smoothed) appraisal return, $R_t$ = true unsmoothed return, $a$ (0 ≤ a ≤ 1) = speed of adjustment (higher $a$ = faster reflection of true returns).

---

### Quick Reference — All Formulas

| Measure | Formula |
|---------|---------|
| NOI | Effective gross income − Operating expenses − Property maintenance allowance |
| GPRI | Market rent × Rentable space |
| EDR | (NOI − Debt service) / Initial equity |
| LTV | Mortgage principal outstanding / Current property value |
| DSC | NOI / Annual debt service |
| Taxes | $t \times (NOI - \text{Interest} - \text{Depreciation})$ |
| Annual depreciation | (Total cost − Land value) / Useful life |
| Direct cap value | Expected NOI / Cap rate, where Cap rate $= r-g$ |
| Implied cap rate | $NOI_1$ / Sale price |
| Going-in cap rate | First-year NOI / Property value |
| DCF value | $\sum NOI_t/(1+r)^t + \text{Terminal value}/(1+r)^n$ |
| Terminal value | $NOI_n(1+g)/(r-g)$ |
| Cost approach — accumulated depreciation | Building cost × (Age / Useful life) |
| Cost approach — total value | (Building cost − Accumulated depreciation) + Land value |
| Sales comparison value | Average adjusted price per unit × Subject size |
| FFO | Net income + D&A − Gains from property sales |
| AFFO | FFO − Non-cash rent − Maintenance capex |
| NAV | Total assets (market value) − Total liabilities |
| P/FFO, P/AFFO | Share price / (A)FFO per share |
| DDM value | $D_1/(r-g)$ |
| RevPAR | Occupancy rate × ADR |
| Holding period return (appraisal-based) | (Ending MV − Beginning MV + Net income) / Beginning MV |
| Unsmoothed return | $[R_t^* - (1-a)R_{t-1}^*]/a$ |

---

### Exam Tips

- **Cap rate = $r - g$**: higher growth → lower cap rate → higher value (same logic as equity P/E expansion)
- **NOI and DSC move together** over the real estate cycle; **LTV moves inversely** (peaks at recovery, troughs at oversupply)
- **Land is never depreciated** — whether for after-tax cash flow (higher depreciable base) or the cost approach (only the building depreciates)
- **Direct cap = perpetuity** shortcut; **DCF** requires explicit holding period + terminal value, and the terminal cap rate ($r-g$) choice dominates the result
- **Going-in cap rate ≠ terminal cap rate** when near-term NOI reflects temporary conditions rather than a permanent change in risk
- **Replacement cost > market price** typically signals the **oversupply phase** (construction costs stay high while prices soften)
- **Income approach** for large/unique commercial properties (few comparables); **sales comparison** for residential (many comparables)
- **AFFO > FFO** as an economic cash flow measure — it strips out non-cash straight-line rent and deducts real maintenance capex
- **P/AFFO** is the more reliable REIT valuation multiple vs. P/FFO
- **RevPAR = Occupancy × ADR** — the key hospitality REIT metric since unused room capacity cannot be stored
- **Appraisal-based indexes understate volatility** (smoothing) — unsmoothing or using a transaction-based index corrects the comparison to public assets
- **HPR income component ≠ actual distributions** — it reflects accounting NOI (net of capex), not cash paid to investors
