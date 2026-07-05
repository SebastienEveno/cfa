---
layout: page
title: "Formulas: Market-Based Valuation (CFA Level II)"
permalink: /study/05-equity-valuation/04-market-based-valuation/formulas/
prev: /cfa/study/05-equity-valuation/04-market-based-valuation/14-summary/
---
# Formulas: Market-Based Valuation (CFA Level II)

---

## 1. Price Multiples — Definitions

### P/E

$$P/E = \frac{\text{Price per share}}{EPS}$$

$$\text{Earnings yield} = \frac{EPS}{\text{Price}} = \frac{1}{P/E}$$

**NTM EPS** (for companies with different fiscal year ends):

$$NTM\ EPS = \frac{n}{12} \times FY1E\ EPS + \frac{12-n}{12} \times FY2E\ EPS$$

where $n$ = months remaining in the current fiscal year.

### P/B

$$P/B = \frac{\text{Market price per share}}{\text{Book value per share}}$$

$$BVPS = \frac{\text{Common shareholders' equity}}{\text{Shares outstanding}}$$

$$\text{Common shareholders' equity} = \text{Total equity} - \text{Preferred stock value}$$

### P/S

$$P/S = \frac{\text{Price per share}}{\text{Net sales per share}}$$

### P/CF

$$P/CF = \frac{\text{Price per share}}{CF}$$

$$CF = EPS + D\&A\ \text{per share}$$

### Dividend Yield

$$\text{Trailing dividend yield} = \frac{\text{Dividend rate}}{P_0}$$

$$\text{Leading dividend yield} = \frac{D_1}{P_0}$$

---

## 2. Enterprise Value Multiples — Definitions

### Enterprise Value (EV)

$$EV = \text{Market cap} + \text{Market value of debt} + \text{Preferred stock} + \text{Minority interest} - \text{Cash \& short-term investments}$$

### Total Invested Capital (TIC)

$$TIC = \text{Market cap} + \text{Debt} + \text{Preferred stock} + \text{Minority interest}$$

> TIC does **not** subtract cash.

### EBITDA and Related Measures

$$EBITDA = NI + \text{Interest expense} + \text{Income taxes} + D\&A$$

$$EBITA = NI + \text{Interest} + \text{Taxes} + \text{Amortization}$$

$$EBIT = NI + \text{Interest} + \text{Taxes}$$

$$FCFF = NI + Int(1-t) + D\&A - \Delta WC - \Delta FixedAssets$$

### EV/Sales

$$EV/Sales = \frac{\text{Market cap} + \text{Debt} - \text{Cash}}{\text{Net sales}}$$

---

## 3. Justified Multiples — Fundamentals-Based

### Justified Leading P/E

$$\frac{P_0}{E_1} = \frac{1-b}{r-g}$$

### Justified Trailing P/E

$$\frac{P_0}{E_0} = \frac{(1-b)(1+g)}{r-g}$$

| Driver | Effect on P/E |
|--------|--------------|
| ↑ Growth $g$ | ↑ |
| ↑ Payout $(1-b)$ | ↑ |
| ↑ Required return $r$ | ↓ |

### Justified P/B

$$\frac{P_0}{B_0} = \frac{ROE - g}{r - g}$$

**No-growth simplification:**

$$\frac{P_0}{B_0} = \frac{ROE}{r}$$

**Using residual income:**

$$\frac{P_0}{B_0} = 1 + \frac{PV(\text{future residual earnings})}{B_0}$$

### Justified P/S

$$\frac{P_0}{S_0} = \frac{(E_0/S_0)(1-b)(1+g)}{r-g} = \frac{PM \times (1-b)(1+g)}{r-g}$$

**Forward-looking form:**

$$\frac{P_0}{S_1} = \frac{(E_1/S_1)(1-b)}{r-g}$$

### Justified Dividend Yield

$$\frac{D_1}{P_0} = r - g$$

### Justified P/CF

$$\text{Justified P/CF} = \frac{V_0}{CF_0} \qquad \text{Justified P/FCFE} = \frac{V_0}{FCFE_0}$$

### Justified P/E — Inflation Model

$$\frac{P_0}{E} = \frac{1}{\rho + (1-\lambda)I}$$

| Symbol | Meaning |
|--------|---------|
| $\rho$ | Real required return |
| $\lambda$ | Cost pass-through rate (0 = none; 1 = full) |
| $I$ | Inflation rate |

---

## 4. Special P/E Models

### Fed Model

$$\text{Justified P/E} = \frac{1}{\text{10-year T-bond yield}}$$

Market is overvalued when: $\dfrac{E_1}{P_0} < \text{10-year T-bond yield}$

### Yardeni Model

$$CEY = CBY - b \times LTEG + \text{Residual}$$

$$\text{Justified P/E} = \frac{1}{CBY - b \times LTEG}$$

| Symbol | Meaning |
|--------|---------|
| $CEY$ | Current earnings yield (E/P) on the market index |
| $CBY$ | Moody's A-rated corporate bond yield |
| $LTEG$ | Consensus 5-year EPS growth forecast |
| $b$ | Weight the market places on 5-year growth ($\approx 0.10$) |

### Own Historical P/E

$$\text{Justified price} = \text{Historical average P/E} \times \text{Normalized EPS}$$

### Terminal P/E (used in multistage DDM)

$$V_n = \text{Terminal P/E} \times E_n \quad \text{(trailing)}$$

$$V_n = \text{Terminal P/E} \times E_{n+1} \quad \text{(leading)}$$

---

## 5. Key Relationships

### P/S and Profit Margin

$$P/S = P/E \times \text{Net profit margin}$$

$$\text{Net profit margin} = \frac{P/S}{P/E}$$

### Sustainable Growth Rate

$$g = b \times ROE = b \times PM \times \text{Asset turnover} \times \text{Leverage}$$

### PVGO

$$PVGO = P_0 - \frac{E_1}{r}$$

### PEG Ratio

$$PEG = \frac{P/E}{\text{Expected EPS growth rate (\%)}}$$

### EPS Normalization (for cyclical companies)

$$\text{Normalized EPS} = \overline{ROE} \times BVPS_{current} \quad \text{(preferred)}$$

---

## 6. Momentum Indicators

### Earnings Surprise

$$UE_t = EPS_t - E(EPS_t)$$

$$\% \text{ surprise} = \frac{EPS_t - E(EPS_t)}{E(EPS_t)}$$

$$\text{Scaled surprise} = \frac{EPS_t - E(EPS_t)}{\sigma(\text{analyst forecasts})}$$

### Standardized Unexpected Earnings (SUE)

$$SUE_t = \frac{EPS_t - E(EPS_t)}{\sigma[EPS_t - E(EPS_t)]}$$

> Denominator is the **time-series** standard deviation of past forecast errors (not cross-sectional).

### Relative Strength (RSTR)

$$RSTR_t = \frac{\text{Asset/Index}_t}{\text{Asset/Index}_{base}} \times \frac{1}{RSTR_{base}}$$

- $RSTR > 1$: outperformed the index
- $RSTR < 1$: underperformed the index

---

## 7. Averaging Multiples

| Method | Formula |
|--------|---------|
| Arithmetic mean | $\bar{X} = \dfrac{\sum X_i}{n}$ |
| Harmonic mean | $H = \dfrac{n}{\sum(1/X_i)}$ |
| Weighted harmonic mean | $WH = \dfrac{1}{\sum w_i/X_i}$ |

$$\text{Harmonic mean} < \text{Arithmetic mean}$$

> **Weighted harmonic mean** = exact portfolio/index P/E; used by index vendors.  
> **Median** is preferred for peer group benchmarks (robust to outliers in both directions).