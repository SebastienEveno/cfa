---
layout: page
title: Enterprise Value/EBITDA
permalink: /study/05-equity-valuation/04-market-based-valuation/09-entreprise-value-to-ebitda/
prev: /cfa/study/05-equity-valuation/04-market-based-valuation/08-price-to-dividends/
next: /cfa/study/05-equity-valuation/04-market-based-valuation/10-other-ev-multiples/
---
## Summary: Enterprise Value/EBITDA (CFA Level II)

---

### Why EV/EBITDA vs. Price Multiples?

**Core advantage**: EV/EBITDA is **relatively less sensitive to financial leverage** than price multiples, making it more appropriate for comparing companies with different capital structures.

**Logic**: EBITDA is a **pre-interest** measure → belongs to all capital providers → should be paired with a **total firm value** numerator (EV), not just equity value (price).

---

### Rationales for EV/EBITDA

| Rationale | Detail |
|-----------|--------|
| **Leverage-neutral** | EBITDA is pre-interest; EV includes debt → appropriate cross-company comparison |
| **Controls for D&A differences** | Adds back depreciation/amortization → comparable across capital-intensive businesses |
| **EBITDA often positive when EPS is negative** | Useful when net income is negative |
| **Frequently used in M&A** | EV represents the total acquisition cost (equity + debt − cash) |

---

### Drawbacks

| Drawback | Detail |
|---------|--------|
| **Ignores working capital** | If WC is growing, EBITDA overstates operating cash flow |
| **Ignores capex** | FCFF has stronger theoretical link; EBITDA ≈ FCFF only if D&A ≈ capex |
| **Revenue recognition differences** | Doesn't capture all accounting quality issues |

---

### Enterprise Value Formula

$$\boxed{EV = \text{Market cap} + \text{Market value of debt} + \text{Preferred stock} + \text{Minority interest} - \text{Cash \& short-term investments}}$$

**Why subtract cash?**
An acquirer pays equity + debt prices but immediately gets access to the company's cash → cash **reduces the net acquisition cost**.

**Note**: Use market values for debt where available; use book value when market value unavailable (or use matrix pricing).

**TIC (Total Invested Capital)** = same as EV but **does NOT subtract cash**:
$$TIC = \text{Market cap} + \text{Debt} + \text{Preferred} + \text{Minority interest}$$

---

### EBITDA Calculation

$$\boxed{EBITDA = \text{Net income} + \text{Interest expense} + \text{Income taxes} + \text{D\&A}}$$

> **If preferred dividends are deducted from net income**: use net income before preferred dividends.

---

### Worked Example (Colgate-Palmolive)

**EV Calculation:**
| Component | Value |
|-----------|-------|
| Market cap (863M × $66.48) | $57,372M |
| + Long-term debt + other liabilities | $8,623M |
| + Minority interest | $299M |
| − Cash | ($726M) |
| **= Enterprise Value** | **$65,034M** |

**EBITDA:**
$$= 2,400 + 143 + 906 + 511 = \mathbf{\$3,960M}$$

$$EV/EBITDA = 65,034/3,960 = \mathbf{16.6\times}$$

---

### Fundamental Drivers of Justified EV/EBITDA

| Factor | Direction |
|--------|----------|
| ↑ Expected FCFF growth rate | ↑ Higher justified EV/EBITDA |
| ↑ Return on invested capital (ROIC) | ↑ Higher justified EV/EBITDA |
| ↑ WACC | ↓ Lower justified EV/EBITDA |

**ROIC** (not ROE) is the relevant profitability metric because EBITDA flows to **all** capital providers.

$$ROIC = \frac{\text{Operating profit after tax}}{\text{Invested capital}}$$

---

### Comparables Example (Household Products — Example 35)

| Company | EV/EBITDA | Profit Margin | Revenue Growth |
|---------|----------|--------------|----------------|
| CL | **16.9×** | 14.8% | –0.5% |
| KMB | **14.7×** | 9.8% | –0.2% |
| CLX | **17.6×** | 13.2% | –3.8% |
| CHD | **22.5×** | 5.0% | **+13.8%** |

**Analysis:**
- **CL vs. CHD**: CL has higher margins but lower growth → lower EV/EBITDA (justified)
- **CL vs. KMB**: CL has higher margin (14.8% vs. 9.8%) → CL's higher EV/EBITDA is justified by superior profitability
- **CL vs. CLX**: CL appears slightly cheaper on EV/EBITDA (16.9× vs. 17.6×) with similar profitability

**TIC vs. EV rankings**: Identical here because cash holdings are small/similar. Rankings would differ if cash holdings varied materially across companies.

---

### EV/EBITDA vs. P/CF — Key Distinction

| | P/CF | EV/EBITDA |
|--|------|----------|
| **Numerator** | Share price (equity only) | Enterprise value (all capital) |
| **Denominator** | Post-interest cash flow | **Pre-interest** cash flow |
| **Capital structure sensitivity** | High | **Low** |
| **Best for** | Same-leverage comparisons | **Different-leverage comparisons** |

---

### Exam Tips

- **EBITDA is pre-interest** → must use **EV** in numerator (not price)
- **EV formula**: market cap + debt + preferred + minority interest − cash
- **Why subtract cash**: acquirer receives cash upon acquisition → reduces net cost
- **ROIC** (not ROE) is relevant for EV multiples — profitability relative to all invested capital
- **Justified EV/EBITDA**: ↑ growth, ↑ ROIC → higher; ↑ WACC → lower
- **TIC vs. EV**: TIC does not subtract cash — rankings same when cash differences are immaterial
- **EBITDA ≈ FCFF only when D&A ≈ capex** — important caveat for capital-intensive companies
- **EV/EBITDA vs. P/E**: EV/EBITDA better when companies have very different leverage levels