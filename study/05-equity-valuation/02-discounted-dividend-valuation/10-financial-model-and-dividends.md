---
layout: page
title: Financial Models and Dividends
permalink: /study/05-equity-valuation/02-discounted-dividend-valuation/10-financial-model-and-dividends/
prev: /cfa/study/05-equity-valuation/02-discounted-dividend-valuation/09-financial-determinants-growth-rate/
next: /cfa/study/05-equity-valuation/02-discounted-dividend-valuation/11-summary/
---
## Summary: Financial Models and Dividends (CFA Level II)

---

### Core Concept

Rather than applying a stylized growth pattern (Gordon model, H-model, etc.), analysts can build **detailed pro forma financial models** to forecast dividends based on explicit assumptions about the company's operating and financial environment.

---

### The Integrated Modeling Approach

**Key inputs modeled explicitly:**
- Sales growth rates (varying by year)
- Operating profit margins (EBIT/Sales — declining as competition increases)
- Interest expense (% of debt)
- Tax rate
- Dividend payout ratios (rising as growth slows)
- Balance sheet structure (assets as % of sales; debt = assets − equity)

**Terminal value**: Applied at the end of the explicit forecast period using a **P/E multiple** on forecasted EPS.

---

### Hoshino Distributors — Worked Example

**Setup**: High-growth company with declining margins and rising payouts over 5 years.

#### Pro Forma Income Statement Summary ($ millions)

| | Yr 1 | Yr 2 | Yr 3 | Yr 4 | Yr 5 |
|--|------|------|------|------|------|
| Sales | $100 | $120 | $138 | $151.8 | $167.0 |
| EBIT margin | 20% | 20% | 18% | 16% | 16% |
| Net income | $9.60 | $11.50 | $11.69 | $11.19 | $12.32 |
| Payout ratio | 20% | 20% | 30% | 40% | 50% |
| Dividends | $1.92 | $2.30 | $3.51 | $4.48 | $6.16 |

#### Per Share Data and PV @ 15%

| | Yr 1 | Yr 2 | Yr 3 | Yr 4 | Yr 5 | Total |
|--|------|------|------|------|------|-------|
| DPS | $0.48 | $0.58 | $0.88 | $1.12 | $1.54 | |
| PV | $0.42 | $0.44 | $0.58 | $0.64 | $0.77 | **$2.84** |

#### Terminal Value

$$EPS_5 = \frac{\$12.32M}{4M\ \text{shares}} = \$3.08$$
$$V_5 = 10 \times \$3.08 = \$30.80$$
$$PV(V_5) = \frac{30.80}{(1.15)^5} = \mathbf{\$15.31}$$

#### Total Stock Value

$$V_0 = PV(\text{dividends}) + PV(V_5) = \$2.84 + \$15.31 = \mathbf{\$18.15}$$

---

### Key Modeling Mechanics

**Balance sheet linkage:**
- Total assets = 80% × current year sales
- Debt = Total assets − Shareholders' equity
- Equity grows by retained earnings each year: $\text{Equity}_t = \text{Equity}_{t-1} + (1-\text{payout}) \times \text{Net income}_{t-1}$
- Interest expense = 10% × prior year debt

**Earnings to dividends chain:**
$$\text{Sales} \to \text{EBIT} \to \text{EBT} \to \text{Net income} \to \text{Dividends (payout × NI)}$$

---

### Advantages Over Stylized Models

| Feature | Stylized DDM | Detailed Financial Model |
|---------|-------------|--------------------------|
| Growth pattern | Fixed (constant/stage) | Flexible (year-by-year) |
| Margin evolution | Assumed fixed | Explicitly modeled |
| Payout ratio | Fixed | Can vary each year |
| Balance sheet | Ignored | Integrated |
| Complexity | Low | High |
| Flexibility | Limited | Maximum |

---

### Exam Tips

- **Detailed models = spreadsheet models** — same concept as "spreadsheet modeling" in the curriculum
- **Terminal value still dominates**: $15.31/$18.15 = **84%** from terminal P/E value
- **Payout ratio rising over time** = typical for maturing companies (heavy reinvestment early → more cash to distribute later)
- **Debt grows with assets** (maintains capital structure) → interest expense rises → dampens EPS growth
- **Two components of value**: PV of explicit dividends + PV of terminal price
- **Terminal value via P/E**: EPS × multiple → discount back — alternative to Gordon growth model terminal value