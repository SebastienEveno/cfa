## Summary: Forecasting FCFF and FCFE (CFA Level II)

---

### Two Approaches to Forecasting Free Cash Flow

| Approach | Method | Best When |
|----------|--------|----------|
| **Constant growth** | Apply a fixed growth rate to current FCFF/FCFE | Historical growth pattern is stable and expected to continue |
| **Component-based (sales-driven)** | Forecast individual components (EBIT margin, FCInv, WCInv) tied to sales growth | More complex relationships; changing margins/capital intensity |

---

### Method 1: Simple Constant Growth

**Pitts Corporation example**: FCFF$_{2020}$ = $155M, assumed growth = 15%/year

| | 2020 | 2021E | 2022E | 2023E |
|--|------|------|------|------|
| FCFF | $155.00 | $178.25 | $204.99 | $235.74 |

> Simple but assumes the **historical growth-fundamentals relationship persists unchanged**.

---

### Method 2: Sales-Based Component Forecasting

**Core assumption**: Two key investment items scale with **sales growth**, not sales level:
- **Incremental fixed capital** ($FCInv - Dep$) — net new investment beyond maintenance
- **Working capital investment** ($WCInv$)

**Required inputs:**
1. Sales growth rate forecast
2. EBIT margin (for FCFF) or net profit margin (for FCFE)
3. Incremental FCInv as % of sales increase
4. Incremental WCInv as % of sales increase
5. Target debt ratio (DR) — for FCFE only

---

### Calculating the Key Ratios (from Historical Data)

$$\text{Incremental FCInv \%} = \frac{FCInv - Dep}{\Delta Sales}$$

$$\text{Incremental WCInv \%} = \frac{WCInv}{\Delta Sales}$$

**Pitts Corporation (2020 data):**
- $\Delta$Sales = $300M (assumed from 2019→2020)
- FCInv − Dep = $400M − $300M = $100M → **33.33%** of $\Delta$Sales
- WCInv = $45M → **15%** of $\Delta$Sales

> Interpretation: For every $100 of sales growth, Pitts invests $33.33 in growth capex (beyond maintenance) and $15 in working capital.

---

### FCFF Forecasting Formula (Sales-Based)

$$\boxed{FCFF = EBIT(1-t) - (\text{Incremental FCInv \%} \times \Delta Sales) - (\text{Incremental WCInv \%} \times \Delta Sales)}$$

> Note: Rather than separately adding back **all** depreciation and subtracting **all** capex, this method directly subtracts only the **incremental (net) capital expenditure** — depreciation is implicitly netted out.

**Pitts Corporation — 2021 Forecast (Example 8):**

| Item | Value | Basis |
|------|-------|-------|
| Sales | $3,300M | +10% growth |
| EBIT | $550M | 16.67% margin |
| EBIT(1-t) | $330M | × 0.60 |
| − Incremental FC | ($100M) | 33.33% × $300M |
| − Incremental WC | ($45M) | 15% × $300M |
| **= FCFF** | **$185M** | |

---

### Multi-Year Forecast with Changing Margins (Example 9)

**Key flexibility**: EBIT margin can **decline over time** while sales growth and investment ratios stay constant.

| | Yr 1 | Yr 2 | Yr 3 | Yr 4 | Yr 5 |
|--|------|------|------|------|------|
| Sales growth | 10% | 10% | 10% | 10% | 10% |
| EBIT margin | 16.67% | 16.00% | 15.50% | 15.00% | 14.50% |
| Sales | $3,300 | $3,630 | $3,993 | $4,392.3 | $4,831.5 |
| EBIT(1-t) | $330.0 | $348.5 | $371.4 | $395.3 | $420.3 |
| − Incremental FC | ($100.0) | ($110.0) | ($121.0) | ($133.1) | ($146.4) |
| − Incremental WC | ($45.0) | ($49.5) | ($54.5) | ($59.9) | ($65.9) |
| **FCFF** | **$185.0** | **$189.0** | **$195.9** | **$202.3** | **$208.1** |

**Model flexibility**: Can start from sales, but equally adaptable to start from net income, CFO, or EBITDA. Can vary sales growth, margins, tax rates, and investment ratios independently each year.

---

### FCFE Forecasting — Target Debt Ratio Approach

**Key simplification**: Assume a **target debt ratio (DR)** finances a constant proportion of incremental investment:

$$\text{Net borrowing} = DR \times [(FCInv - Dep) + WCInv]$$

**Resulting FCFE formula:**
$$\boxed{FCFE = NI - (1-DR)(FCInv - Dep) - (1-DR)(WCInv)}$$

**Interpretation**: FCFE = Net income minus the portion of investment that **equity** must finance (i.e., the $(1-DR)$ share not covered by new debt).

---

### FCFE Worked Example (Pitts Corporation, 2021 — Example 10)

**Inputs:**
- Net profit margin = 8% (constant)
- Target DR = 50%

| Item | Value | Basis |
|------|-------|-------|
| Sales | $3,300M | +10% |
| Net income | $264M | 8% of sales |
| − Incremental FC | ($100M) | 33.33% × $300M |
| − Incremental WC | ($45M) | 15% × $300M |
| + Net borrowing | $72.50M | 50% × ($100M + $45M) |
| **= FCFE** | **$191.50M** | |

---

### Limitation of This Method

**Key assumption**: Depreciation is the **only significant noncash charge**.

If a company has other **material noncash charges** (impairments, stock-based compensation, deferred taxes, etc.), this simplified approach becomes **less accurate**, and analysts should forecast **all individual FCFE components** separately rather than relying on the simplified formula.

---

### Quick Reference — Forecasting Formulas

| Forecast | Formula |
|----------|---------|
| **FCFF (sales-based)** | $EBIT(1-t) - (\%FCInv \times \Delta Sales) - (\%WCInv \times \Delta Sales)$ |
| **FCFE (sales-based, target DR)** | $NI - (1-DR)(FCInv-Dep) - (1-DR)(WCInv)$ |
| **Incremental FCInv %** | $(FCInv - Dep)/\Delta Sales$ |
| **Incremental WCInv %** | $WCInv/\Delta Sales$ |
| **Net borrowing (target DR)** | $DR \times [(FCInv-Dep) + WCInv]$ |

---

### Exam Tips

- **Incremental FCInv = FCInv − Depreciation** — represents growth capex, not maintenance capex
- **Sales-based ratios** are derived from **one historical year** and applied to **forecasted $\Delta$Sales** going forward
- **EBIT margin can change over time** in multi-year forecasts — model is flexible
- **Target DR approach** eliminates need to forecast annual debt issuance/repayment individually
- **Method works best when depreciation is the only material noncash charge** — flag this assumption when significant other noncash items exist
- **FCFE = NI − (1-DR) × (incremental FC + WC investment)** — memorize this compact form
- Both FCFF and FCFE models can be **multi-period** with varying assumptions each year — useful for multistage DCF valuations