# Formulas: Private Company Valuation (CFA Level II)

---

## 1. Required Return on Equity

### Standard CAPM

$$r_e = r_f + \beta(r_m - r_f)$$

### Expanded CAPM

$$r_e = r_f + \beta(r_m - r_f) + \text{SP} + \text{CSRP}$$

| Symbol | Meaning |
|--------|---------|
| $r_f$ | Risk-free rate |
| $\beta(r_m - r_f)$ | Beta-adjusted equity risk premium |
| SP | Size premium |
| CSRP | Company-specific risk premium |

### Build-Up Approach

$$r_e = r_f + ERP + \text{SP} + \text{IP} + \text{CSRP}$$

| Symbol | Meaning |
|--------|---------|
| ERP | Equity risk premium (implicit $\beta = 1$) |
| SP | Size premium |
| IP | Industry risk premium |
| CSRP | Company-specific risk premium |

---

## 2. Beta Adjustment for Leverage (GPCM)

### Unlever comparable public company beta

$$\beta_{unlevered} = \frac{\beta_{levered}}{1 + (1-t) \times \frac{D}{E}}$$

### Relever to private company capital structure

$$\beta_{levered}^* = \beta_{unlevered} \times \left[1 + (1-t^*) \times \left(\frac{D}{E}\right)^*\right]$$

---

## 3. Free Cash Flow

### FCFF

$$FCFF = EBIT(1-t) + D\&A \cdot t - \Delta LT\ Assets - \Delta Working\ Capital$$

### Reinvestment Rate

$$\text{Reinvestment rate} = \frac{g}{WACC}$$

### FCFF from EBIT (CCM)

$$FCFF_{t+1} = EBIT_{t+1}(1-t)(1 - \text{Reinvestment rate})$$

---

## 4. Income-Based Valuation

### DCF Firm Value

$$IV_t = \sum_{i=1}^{n} \frac{FCFF_i}{(1+WACC)^i} + \frac{TV_n}{(1+WACC)^n}$$

### Terminal Value (Gordon Growth / CCM)

$$TV = \frac{FCFF_n \times (1+g)}{WACC - g}$$

### Capitalization Rate

$$\text{Cap rate} = WACC - g$$

### Capitalized Cash Flow Method (CCM) — Firm Value

$$Firm\ value = \frac{FCFF_{t+1}}{WACC - g} = \frac{FCFF_{t+1}}{\text{Cap rate}}$$

### CCM — Equity Value

$$Equity\ value = Firm\ value - Market\ value\ of\ debt$$

### CCM — FCFE Variant (direct equity valuation)

$$Equity\ value = \frac{FCFE_{t+1}}{r_e - g}$$

---

## 5. Excess Earnings Method (EEM)

### Step 1 — Residual Income (value of intangibles)

$$RI_t = \text{Normalized income} - (WC \times r_{WC}) - (FA \times r_{FA})$$

| Symbol | Meaning |
|--------|---------|
| WC | Working capital |
| $r_{WC}$ | Required return on working capital |
| FA | Fixed assets |
| $r_{FA}$ | Required return on fixed assets |

### Step 2 — Capitalize Residual Income

$$RV_t = \frac{RI_t \times (1+g)}{r_{RI} - g}$$

### Step 3 — Total Firm Value

$$Firm\ value = WC + FA + RV_t$$

---

## 6. Market-Based Valuation (Composite Multiples)

### Composite EV/Sales (weighted by revenue)

$$EV/Sales_{composite} = \sum_i \left(\frac{Revenue_i}{Revenue_{total}}\right) \times (EV/Sales)_i$$

### Composite EV/EBITDA (weighted by EBITDA)

$$EV/EBITDA_{composite} = \sum_i \left(\frac{EBITDA_i}{EBITDA_{total}}\right) \times (EV/EBITDA)_i$$

> When a segment has **negative EBITDA**, use EV/Sales for that segment instead.

### EV — Single Composite Multiple

$$EV = \text{Composite multiple} \times \text{Total company metric}$$

### EV — Segment-by-Segment (Sum of Parts)

$$EV = \sum_i \left(\text{Segment multiple}_i \times \text{Segment metric}_i\right)$$

---

## 7. Valuation Discounts and Premiums

### Discount for Lack of Control (DLOC)

$$DLOC = 1 - \frac{1}{1 + \text{Control premium}}$$

### Discount for Lack of Marketability (DLOM) — Put Option Method

$$DLOM = \frac{\text{At-the-money put premium}}{\text{Share price}}$$

### Combined Total Discount (multiplicative)

$$\text{Total discount} = 1 - (1 - DLOC) \times (1 - DLOM)$$

---

## 8. Scenario Analysis (Probability-Weighted Value)

$$V_{t=n} = \sum_i P_i \times V_i$$

$$V_0 = \frac{V_{t=n}}{(1 + WACC)^n}$$
