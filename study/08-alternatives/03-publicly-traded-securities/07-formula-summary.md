---
layout: page
title: "Formula Summary: Publicly Traded Real Estate Securities (CFA Level II — Alternative Investments)"
permalink: /study/08-alternatives/03-publicly-traded-securities/07-formula-summary/
prev: /cfa/study/08-alternatives/03-publicly-traded-securities/06-private-vs-public/
---
## Formula Summary: Publicly Traded Real Estate Securities (CFA Level II — Alternative Investments)

---

### 1. REIT Structural Rules (Not Formulas, But Common Thresholds)

| Rule | Typical Threshold |
|------|-------------------|
| Distribution requirement | 90%–100% of taxable income |
| Asset composition | ≥75% of assets in real estate |
| Income composition | ≥75% from rental income or mortgage interest |
| US "5/50 Rule" | ≥100 shareholders; fewer than 5 shareholders can't own >50% of shares |

---

### 2. Net Operating Income (Starting Point for NAV)

$$\boxed{NOI = \text{Gross rental revenue} - \text{Vacancy/collection loss} - \text{Operating expenses}}$$

> NOI is analogous to EBIT — before interest, taxes, depreciation, and amortization.

---

### 3. Net Asset Value (NAV) Approach

$$\boxed{NAVPS = \frac{\text{Market value of assets} - \text{Market value of liabilities}}{\text{Shares outstanding}}}$$

**Cap rate approach (most common way to value operating real estate):**
$$\boxed{\text{Last-12-month cash NOI} = \text{Last-12-month NOI} - \text{Non-cash rents}}$$

$$\boxed{\text{Next-12-month growth in NOI} = \text{Last-12-month cash NOI} * \text{Estimated growth rate}}$$

$$\boxed{\text{Estimated next-12-month cash NOI} = \text{Last-12-month cash NOI} + \text{Next-12-month growth in NOI}}$$

$$\boxed{\text{Estimated value of operating real estate} = \frac{\text{Estimated next-12-month cash NOI}}{\text{Cap rate}}}$$

$$\boxed{\text{Estimated gross asset value} = \text{Estimated value of operating real estate} + \text{cash and cash equivalents}}$$

$$\boxed{\text{NAV} = \text{Estimated gross asset value} - \text{Total debt}}$$

**Simplified NAV (single property pool):**
$$\boxed{NAV = \frac{NOI}{\text{Cap rate}} + \text{Cash + accounts receivable} - \text{Debt and other liabilities}}$$

**Implied cap rate** — reverse-engineered from the current share price:
$$\boxed{\text{Implied cap rate} = \frac{NOI}{\text{Market-derived property value from current stock price}}}$$

> Adjustments to reported NOI before capitalizing: remove non-cash (straight-line) rent, gross up partial-year acquisitions to a full-year run rate, and apply expected forward growth. Exclude "soft" items from NAV: goodwill, deferred financing costs, deferred tax assets/liabilities.

---

### 4. FFO and AFFO

$$\boxed{FFO = \text{Net income} + \text{Depreciation} + \text{Amortization} - \text{Net gains on sale of real property}}$$

$$\boxed{AFFO = FFO - \text{Non-cash (straight-line) rent} - \text{Recurring maintenance capex and leasing costs}}$$

**Payout ratios:**
$$\text{FFO payout ratio} = \frac{\text{Dividends per share}}{FFO \text{ per share}} \qquad \text{AFFO payout ratio} = \frac{\text{Dividends per share}}{AFFO \text{ per share}}$$

> AFFO is also called Funds Available for Distribution (FAD) or Cash Available for Distribution. It better approximates sustainable dividend-paying capacity but is less standardized than FFO.

---

### 5. Relative Value (Price Multiple) Approach

$$\boxed{\text{P/FFO} = \frac{\text{Share price}}{FFO \text{ per share}}} \qquad \boxed{\text{P/AFFO} = \frac{\text{Share price}}{AFFO \text{ per share}}}$$

**EV/EBITDA — link to cap rate:**
$$\boxed{\frac{EBITDA}{EV} \approx \frac{NOI}{\text{Market value}} = \text{Cap rate}}$$

| Driver | Effect on Multiple |
|--------|---------------------|
| Higher expected FFO/AFFO growth | ↑ Multiple |
| Higher cash flow volatility (e.g., hotels) | ↓ Multiple |
| Higher financial leverage | ↓ Multiple |

---

### 6. Leverage and Coverage Ratios (REIT Credit Analysis)

$$\boxed{\text{Debt/Market Cap} = \frac{\text{Total debt}}{\text{Market capitalization}}}$$

$$\boxed{\text{Interest Coverage} = \frac{EBITDA}{\text{Interest expense}}}$$

$$\boxed{\text{Net Debt/EBITDA} = \frac{\text{Total debt} - \text{Cash}}{EBITDA}}$$

---

### 7. Discount Rate and Valuation Cross-Checks

**CAPM required return:**
$$\boxed{r = r_f + \beta \times MRP}$$

**Dividend Discount Model:**
$$\boxed{V_0 = \frac{D_1}{r - g}}$$

> Lower expected growth $g$ → lower value at a given discount rate (standard Gordon growth relationship); higher cap rate → lower NAV (cap rate is the denominator of the property value calculation).

---

### Quick Reference — All Formulas

| Measure | Formula |
|---------|---------|
| NOI | Gross rental revenue − Vacancy/collection loss − Operating expenses |
| NAVPS | (Market value of assets − Market value of liabilities) / Shares outstanding |
| Operating real estate value (cap rate approach) | Estimated NTM cash NOI / Cap rate |
| Simplified NAV | NOI/Cap rate − Debt |
| Implied cap rate | NOI / Market-derived property value |
| FFO | Net income + D&A − Gains on property sales |
| AFFO | FFO − Non-cash rent − Maintenance capex/leasing costs |
| FFO/AFFO payout ratio | Dividends per share / (A)FFO per share |
| P/FFO, P/AFFO | Share price / (A)FFO per share |
| EV/EBITDA ≈ 1/Cap rate | EBITDA/EV ≈ NOI/Market value |
| Debt/Market cap | Total debt / Market capitalization |
| Interest coverage | EBITDA / Interest expense |
| Net Debt/EBITDA | (Total debt − Cash) / EBITDA |
| CAPM required return | $r_f + \beta \times MRP$ |
| DDM value | $D_1/(r-g)$ |

---

### Exam Tips

- **NAVPS = (Market value assets − Market value liabilities) / Shares outstanding** — memorize; cap rate approach (NOI/Cap rate) is the most common way to value the real estate component
- **Higher cap rate → lower NAV** — cap rate sits in the denominator; rising rates/risk push cap rates up and NAV down
- **NAV adjustments**: remove non-cash straight-line rent, gross up partial-year acquisitions, apply forward growth to NOI before capitalizing; exclude goodwill, deferred financing costs, and deferred tax items
- **FFO = Net income + D&A − Gains from property sales**; **AFFO = FFO − Non-cash rent − Maintenance capex** — know both exactly and be able to solve algebraically in either direction
- **AFFO is more economically accurate but less standardized** than FFO — data providers track FFO far more consistently
- **Higher leverage → lower P/FFO multiple**; **EV/EBITDA is unlevered** and avoids this distortion — EBITDA/EV ≈ cap rate
- **NAV becomes LESS reliable**, not more, when transaction volumes decline (fewer comps to support cap rate assumptions) — income-based multiples (P/FFO, P/AFFO) remain more usable in stressed markets
- **P/FFO and P/AFFO don't capture non-income-producing assets** (land held for development) — the market should apply a premium multiple to compensate
- **REOC = most operating flexibility** (no distribution mandate, can retain earnings for growth); **REIT = most liquidity + governance protections** but must constantly access capital markets since retained earnings are minimal
- **CAPM (r = r_f + β×MRP) and DDM (V₀ = D₁/(r−g))** are the standard cross-checks against NAV and relative-multiple valuations
