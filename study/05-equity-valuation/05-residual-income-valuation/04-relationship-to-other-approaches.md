---
layout: page
title: Residual Income — Relationship to Other Approaches
permalink: /study/05-equity-valuation/05-residual-income-valuation/04-relationship-to-other-approaches/
prev: /cfa/study/05-equity-valuation/05-residual-income-valuation/03-single-stage-multistage-ri/
next: /cfa/study/05-equity-valuation/05-residual-income-valuation/05-accounting-international-considerations/
---
## Summary: Residual Income — Relationship to Other Approaches (CFA Level II)

---

### All Three Models Are Theoretically Equivalent

With fully consistent assumptions, DDM, FCF models, and RI model give **identical values**:

$$\underbrace{PV(\text{dividends})}_{\text{DDM}} = \underbrace{PV(\text{FCF})}_{\text{FCF model}} = \underbrace{B_0 + PV(\text{residual income})}_{\text{RI model}}$$

**Key difference**: Not the final value — but **when and how value is recognized**.

---

### Value Recognition — The Critical Distinction

**Perpetuity example (Example 12):**
- EPS = $1.00 forever, payout = 100%, B₀ = $6.00, r = 10%
- Both DDM and RI give **V₀ = $10.00**

| | DDM | RI Model |
|--|-----|---------|
| **t=0** | $0 | **$6.00 (60% of value immediately)** |
| **Year 1** | $0.909 | $0.364 |
| **First 5 years** | $3.79 (38%) | $7.79 (78%) |
| **Total** | $10.00 | $10.00 |

> **RI model recognizes ~60% of value at t=0** (current book value) vs. **DDM spreads value across all future periods**.

---

### Why Earlier Value Recognition Matters

**Practical advantage of RI model**:
- **Terminal value is a small fraction** of total value in RI (vs. often 75%+ in DDM/DCF)
- Terminal value is the most **uncertain** component of any valuation
- RI model's lower sensitivity to terminal value = **more robust valuation**
- In some RI applications, terminal value can be **set to zero** without major distortion

---

### Discount Rate Reference

| Model | Discount Rate |
|-------|--------------|
| DDM | Cost of equity ($r_e$) |
| FCFE | Cost of equity ($r_e$) |
| **FCFF** | **WACC** |
| RI model | Cost of equity ($r_e$) |

---

### Strengths of Residual Income Models

| Strength | Detail |
|---------|--------|
| **Terminal value less critical** | Book value captures large fraction at t=0 |
| **Uses readily available data** | Accounting information is publicly disclosed |
| **Works for non-dividend-paying firms** | DDM fails; RI still applies |
| **Works with negative near-term FCF** | DCF problematic; RI uses book value base |
| **Handles unpredictable cash flows** | Doesn't depend on reliable FCF forecasts |
| **Economic profitability focus** | Explicitly captures value creation above cost of capital |

---

### Weaknesses of Residual Income Models

| Weakness | Detail |
|---------|--------|
| **Accounting manipulation** | Net income and book value subject to management discretion |
| **Significant adjustments needed** | Reported accounting data may require heavy adjustment |
| **Clean surplus assumption** | OCI items bypass income statement → violates the assumption |
| **Debt cost assumption** | Model assumes interest expense correctly reflects cost of debt |

---

### When to Use vs. Avoid RI Models

| Use RI Model When | Avoid RI Model When |
|------------------|-------------------|
| Company **doesn't pay dividends** | Significant **dirty surplus (OCI) items** |
| **Negative expected FCF** within forecast horizon | Book value and ROE are **not predictable** |
| **High terminal value uncertainty** in alternative models | Management has significantly **manipulated** accounting |
| Cash flows are **unpredictable** | Clean surplus relation **significantly violated** |

---

### Using RI Model Alongside Other Models

**Triangulation approach**: Use RI model alongside DDM and FCF models to check consistency:
- All three should give **same value** with consistent assumptions
- Large divergence → assumptions may be **internally inconsistent**
- Analyst must investigate and determine which model is most appropriate

**Deriving justified multiples from RI model:**
$$\text{Justified P/E} = \frac{V_0^{RI}}{E_1} \qquad \text{Justified P/B} = \frac{V_0^{RI}}{B_0}$$

---

### Model Selection Decision Tree

```
Does company pay dividends?
  No → RI model or FCF model preferred
  Yes → DDM applicable, but check dividend predictability

Is near-term FCF negative?
  Yes → RI model preferred over DCF
  No → FCF model is viable

Is terminal value highly uncertain?
  Yes → RI model preferred (less terminal value sensitivity)
  No → Any model appropriate

Are there significant OCI / dirty surplus items?
  Yes → RI model requires adjustment or is less appropriate
  No → RI model appropriate

Are book value and ROE predictable?
  No → RI model less appropriate
  Yes → RI model appropriate
```

---

### Exam Tips

- **All three models give same value** with consistent assumptions — this is tested frequently
- **RI recognizes more value early** (book value at t=0); **DDM/DCF recognize more value late** (terminal value)
- **Terminal value less important** in RI — key practical advantage
- **Best use cases**: non-dividend payers, negative FCF, uncertain terminal values
- **Worst use cases**: significant OCI/dirty surplus, unpredictable book value and ROE
- **Clean surplus relation**: critical assumption — OCI items that bypass income statement violate it
- **Triangulation**: using multiple models and checking for consistency is best practice
- **Justified multiples** can be derived from any model including RI