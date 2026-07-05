## Summary: Integrating ESG in Free Cash Flow Models (CFA Level II)

---

### Two Types of ESG Information

| Type | Example | Integration Approach |
|------|---------|----------------------|
| **Quantitative** | Projected environmental fine impact on cash flows | Direct adjustment to cash flow forecasts (numerator) |
| **Qualitative** | Reputational risk, governance concerns | Add **risk premium to cost of equity** (denominator) — requires analyst judgment |

> For qualitative ESG factors deemed material but hard to quantify, the standard approach is an **ESG risk premium added to required return on equity**.

---

### Case Study: American Copper Mining Company (ACMC) — Three-Stage FCFF Model

**Context**: ACMC acquiring new copper mine in dry Latin American region; market reacted positively (price = $110/share); analyst Jane Dodd has "hold" rating and reassesses.

---

### Three ESG Considerations Identified

| ESG Factor | Issue | Quantitative or Qualitative Impact |
|-----------|-------|-------------------------------------|
| **Local government (license delays)** | Track record suggests approval will take **5 years**, not management's projected **3 years** | **Quantitative** — delays Stage 1, pushes back revenue start |
| **Labor issues** | Below-market wages; no safety-linked exec comp; peers had strikes from inflation-unadjusted wages | **Qualitative** — reputational/financial risk → ESG risk premium |
| **Water-related issues** | Dry region → underestimated capex for water wells | **Quantitative** — additional capex line item |

---

### Three-Stage Model Structure

| Stage | Period | Description |
|-------|--------|-------------|
| **Stage 1** | 2020–2024 | Before new mine operates (5-year delay incorporated) |
| **Stage 2** | 2025–2039 | Mine operational (15-year life) |
| **Stage 3** | 2040+ | After mine closure, perpetuity |

---

### Revenue Assumptions

| Period | Base Business | New Mine |
|--------|---------------|----------|
| 2020-2024 (Stage 1) | +2% annual growth | $0 |
| 2025 | Flat | +$400M (first year) |
| 2026-2031 | Flat | +10% annual growth |
| 2032-2039 | Flat | Constant (flat) |
| 2040+ (Stage 3) | +1% perpetual growth (total) | Mine closed |

---

### Standard Financial Assumptions (All Stages)

| Item | Assumption |
|------|-----------|
| EBITDA margin | 30% of revenue |
| Tax rate | 25% |
| Net FCInv (non-water) | 50% of EBITDA |
| Depreciation | 40% of CapEx |
| WCInv | 10% of total revenue |

---

### ESG-Specific Adjustments

#### 1. Water-Related CapEx (Quantitative)
$$\text{Additional FCInv (water)} = 10\% \times \text{Non-water CapEx}$$

→ Added as a **separate line item**, increasing total investment outflows.

#### 2. ESG Equity Risk Premium (Qualitative)
$$\boxed{r_e = r_f + \beta \times ERP + \text{ESG premium}}$$
$$r_e = 3\% + (1.2)(5\%) + 0.75\% = \mathbf{9.75\%}$$

> The **0.75% ESG premium** reflects labor-related reputational/financial risk **not yet priced into the market**.

---

### WACC Calculation

$$\text{Cost of debt (after-tax)} = 5\% \times (1-25\%) = 3.75\%$$
$$\text{Cost of equity} = 9.75\%$$
$$WACC = (0.50)(3.75\%) + (0.50)(9.75\%) = \mathbf{6.75\%}$$

---

### FCFF Formula Used (per period)

$$FCFF = EBITDA(1-t) + Dep(t) - FCInv - WCInv - \text{Water-related FCInv}$$

---

### Valuation Output

| Component | Value |
|-----------|-------|
| PV of FCFF (2020–2035 explicit forecast) | $1,178M |
| PV of perpetual FCFF (2036 onward, g = 1%) | $758M |
| **Total PV of FCFF** | **$1,936M** |
| − Market value of debt (50% debt ratio) | ($968M) |
| **Fair value of equity** | **$968M** |
| Shares outstanding | 10M |
| **Fair value per share** | **$97** |

---

### Investment Conclusion

| | Value |
|--|-------|
| ESG-adjusted fair value | **$97/share** |
| Current market price | **$110/share** |
| **Recommendation** | **"Sell"** (downgraded from "hold") |

> **Key takeaway**: Integrating material ESG considerations — license delays, water capex, and a labor-related risk premium — **reduced the fair value estimate below market price**, reversing the analyst's prior "hold" rating to a "sell."

---

### General Framework for ESG Integration

```
Step 1: Identify material ESG factors specific to the company/industry
Step 2: Classify each factor as quantitative or qualitative
Step 3: Quantitative factors → adjust cash flow line items directly
         (revenue delays, additional capex, fines, etc.)
Step 4: Qualitative factors → add risk premium to cost of equity
         (reputational risk, governance concerns, social risk)
Step 5: Rebuild WACC with ESG-adjusted cost of equity
Step 6: Run standard multistage FCFF/FCFE model with adjusted inputs
Step 7: Compare resulting fair value to market price → valuation conclusion
```

---

### Exam Tips

- **Quantitative ESG** → adjust **cash flows** (revenue timing, capex, fines)
- **Qualitative ESG** → adjust **discount rate** via risk premium (analyst judgment)
- **ESG risk premium** added directly to cost of equity: $r_e = r_f + \beta \times ERP + \text{ESG premium}$
- **License/regulatory delays**: push back Stage 1 → Stage 2 transition, reducing near-term cash flows
- **Environmental/resource constraints** (e.g., water in dry regions): translate to **additional CapEx line items**
- **Three-stage models for resource companies**: often structured around an asset's lifecycle (pre-operation, operation, post-closure/perpetuity)
- **Net effect of ESG integration**: typically **reduces fair value estimate** when material risks weren't previously priced in — can flip a "hold" to a "sell"
- **WACC built from ESG-adjusted cost of equity** flows through to discount the entire FCFF stream, including terminal value — amplifies impact of even small ESG premium adjustments