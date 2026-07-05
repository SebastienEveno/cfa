## Summary: Free Cash Flow Valuation — Introduction (CFA Level II)

---

### Why Free Cash Flow Models?

**Usage statistics** (Pinto, Robinson, Stowe 2019):
- 86.9% of DCF users use discounted **free cash flow** models
- 35.1% use DDM
- FCFF used **~2× more frequently** than FCFE

**Use FCF models when:**
- Company **does not pay dividends**
- Dividends paid differ significantly from **capacity to pay** dividends
- FCF aligns with **profitability** within a comfortable forecast horizon
- Investor takes a **control perspective** (can redirect cash flows)

---

### FCFF vs. FCFE — Definitions

| | FCFF | FCFE |
|--|------|------|
| **Definition** | CF available to **all capital providers** after operating expenses, taxes, and reinvestment | CF available to **common equity holders** after all expenses, interest, debt payments, and reinvestment |
| **Simplified formula** | CFO − CapEx | CFO − CapEx − Net debt repayments |
| **Discount rate** | **WACC** | **Required return on equity (r)** |
| **Output** | Total firm value → subtract debt → equity value | Directly equity value |

---

### Why Not Use Other Measures?

| Measure | Problem |
|---------|---------|
| **EBIT / EBITDA** | Before-tax → overstates available cash |
| **Net income** | Ignores capex and working capital needs |
| **CFO** | Doesn't subtract capex → not "free" |
| **FCFF/FCFE** | ✅ Correct — after tax, after reinvestment |

---

### FCFF Valuation Model

$$\boxed{\text{Firm value} = \sum_{t=1}^{\infty} \frac{FCFF_t}{(1+WACC)^t}}$$

$$\boxed{\text{Equity value} = \text{Firm value} - \text{Market value of debt}}$$

**WACC formula:**
$$WACC = \frac{MV(Debt)}{MV(Total)} \times r_d(1-t) + \frac{MV(Equity)}{MV(Total)} \times r_e$$

> Use **market value weights**, not book value. Or use **target capital structure weights** if known and different from current market weights.

---

### FCFE Valuation Model

$$\boxed{\text{Equity value} = \sum_{t=1}^{\infty} \frac{FCFE_t}{(1+r)^t}}$$

Discount at **required return on equity** $r$ (not WACC).

---

### Single-Stage (Constant Growth) Models

#### Constant-Growth FCFF:
$$\boxed{\text{Firm value} = \frac{FCFF_1}{WACC - g} = \frac{FCFF_0(1+g)}{WACC-g}}$$

#### Constant-Growth FCFE:
$$\boxed{\text{Equity value} = \frac{FCFE_1}{r - g} = \frac{FCFE_0(1+g)}{r-g}}$$

> **Note**: FCFF growth rate and FCFE growth rate are **not necessarily equal** — they frequently differ.

---

### Worked Example (Cagiati Enterprises)

**Given**: FCFF = CHF700M, FCFE = CHF620M, $r_d = 5.7\%$, $r_e = 11.8\%$, target weights: 20% debt / 80% equity, tax = 33.33%, $g_{FCFF} = 5\%$, debt MV = CHF2.2B, shares = 200M

**WACC:**
$$WACC = 0.20 \times 5.7\% \times (1-0.333) + 0.80 \times 11.8\% = 0.76\% + 9.44\% = \mathbf{10.2\%}$$

**Firm value:**
$$= \frac{700 \times 1.05}{0.102 - 0.05} = \frac{735}{0.052} = \mathbf{CHF\ 14,134.6M}$$

**Equity value:**
$$= 14,134.6 - 2,200 = \mathbf{CHF\ 11,934.6M}$$

**Value per share:**
$$= \frac{11,934.6}{200} = \mathbf{CHF\ 59.67}$$

---

### When to Choose FCFF vs. FCFE

| Situation | Preferred Model |
|-----------|----------------|
| **Stable capital structure** | FCFE — simpler and more direct |
| **Levered company with negative FCFE** | FCFF — add non-operating assets, subtract debt |
| **Changing capital structure** | FCFF — FCFF growth reflects fundamentals more clearly; FCFE distorted by fluctuating net borrowing |
| **Changing leverage → changing $r_e$** | FCFF — WACC more stable than re |

---

### The APV Approach (Mentioned)

When capital structure is changing significantly:
$$\text{Firm value} = \text{Unlevered firm value} + \text{NPV of debt effects (tax shield − distress costs)}$$

Discount FCFF at **unlevered cost of equity** (as if no debt). Not the primary exam focus but worth knowing exists.

---

### Ownership Perspective

| Perspective | Appropriate Model |
|-------------|-----------------|
| **Minority investor** | DDM or FCFE (receive dividends; can't control payout) |
| **Control investor** | FCFF or FCFE — can redirect/redeploy cash flows; dividends are less meaningful constraint |

---

### Exam Tips

- **FCFF → WACC; FCFE → re** — never mix these up
- **Equity value via FCFF**: always subtract **market value** of debt (not book value)
- **FCFF ≠ FCFE** — different growth rates, different discount rates
- **FCFE = FCFF − after-tax interest + net new borrowing** (conceptually)
- **Both approaches should give same equity value** if all assumptions are consistent
- **Use FCFF** when capital structure is changing or FCFE is negative
- **Constant-growth FCF models** are directly analogous to the Gordon growth model — same math, different cash flow definition