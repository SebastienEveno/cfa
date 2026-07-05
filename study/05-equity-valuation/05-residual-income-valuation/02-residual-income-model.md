---
layout: page
title: The Residual Income Model
permalink: /study/05-equity-valuation/05-residual-income-valuation/02-residual-income-model/
prev: /cfa/study/05-equity-valuation/05-residual-income-valuation/01-introduction/
next: /cfa/study/05-equity-valuation/05-residual-income-valuation/03-single-stage-multistage-ri/
---
## Summary: The Residual Income Model (CFA Level II)

---

### Core Residual Income Model

$$\boxed{V_0 = B_0 + \sum_{t=1}^{\infty} \frac{RI_t}{(1+r)^t}}$$

Where:
$$\boxed{RI_t = E_t - r \times B_{t-1} = (ROE_t - r) \times B_{t-1}}$$

**Components:**
- $B_0$ = current book value per share (immediately recognized)
- $\sum PV(RI_t)$ = present value of all future residual income (abnormal returns)

**Book value evolution (clean surplus relation):**
$$B_t = B_{t-1} + E_t - D_t$$

---

### Relationship to DDM

The RI model is **derived from the DDM** using the clean surplus relation. They give **identical values** with consistent assumptions.

**Key practical difference — timing of value recognition:**

| Model | Value attributed near-term | Value attributed long-term |
|-------|---------------------------|---------------------------|
| **RI model** | **Higher** (current book value recognized immediately) | Lower (smaller RI tail) |
| **DDM** | Lower (small early dividends) | **Higher** (large terminal value dominates) |

**Example (Bugg Properties):**
- RI model: $6.00 (book value) recognized at t=0 out of $11.15 total → **54% near-term**
- DDM: $9.20 out of $11.15 total from final period → **82% long-term**

---

### Step-by-Step RI Calculation

**For each period:**
1. **Equity charge** = $r \times B_{t-1}$
2. **Residual income** = $EPS_t - \text{equity charge}$
3. **New book value** = $B_{t-1} + EPS_t - D_t$ (clean surplus)
4. **PV of RI** = $RI_t / (1+r)^t$

**Intrinsic value** = $B_0 + \sum PV(RI_t)$

---

### Alternative Form Using ROE

$$\boxed{V_0 = B_0 + \sum_{t=1}^{\infty} \frac{(ROE_t - r) \times B_{t-1}}{(1+r)^t}}$$

**Interpretation:**
- If $ROE_t > r$ → positive RI → stock worth **more than book value**
- If $ROE_t = r$ → zero RI → stock worth **exactly book value**
- If $ROE_t < r$ → negative RI → stock worth **less than book value**

---

### Single-Stage (Constant Growth) RI Model

$$\boxed{V_0 = B_0 + \frac{(ROE - r) \times B_0}{r - g}}$$

**Requirements**: $r > g$; constant ROE; constant growth ($g = b \times ROE$)

**Fundamental drivers:**
- ↑ ROE relative to r → ↑ value
- ↑ growth $g$ → ↑ value (increases PV of RI stream)
- ↑ required return $r$ → ↓ value

**Connection to justified P/B:**
$$\frac{V_0}{B_0} = \frac{ROE - g}{r - g} = 1 + \frac{(ROE-r)}{r-g}$$

---

### Worked Examples

#### CNR (Example 2)

| | 2019 | 2020 |
|--|------|------|
| Beginning BVPS | $24.32 | $28.40 |
| EPS | $6.23 | $6.96 |
| Equity charge ($r = 9.4\%$) | $2.29 | $2.67 |
| **RI** | **$3.94** | **$4.29** |

#### Bugg Properties (Example 3)

| Year | Beginning BV | EPS | Equity charge | RI | PV of RI |
|------|-------------|-----|--------------|----|----|
| 1 | $6.00 | $2.00 | $0.60 | $1.40 | $1.27 |
| 2 | $7.00 | $2.50 | $0.70 | $1.80 | $1.49 |
| 3 | $8.25 | $4.00 | $0.825 | $3.175 | $2.38 |

$$V_0 = B_0 + \sum PV(RI) = \$6.00 + \$1.27 + \$1.49 + \$2.38 = \mathbf{\$11.14}$$

✅ DDM gives same result: $PV(D_1) + PV(D_2) + PV(D_3) = \$11.15$

#### Alphabet (Example 5)

- **ROE declining** from 20.2% to 8.2% (= $r$) over 2019–2043
- Once ROE = r → RI = 0 → no more value-creating growth
- Estimated value: **$972.25** vs. market price $1,037.39

---

### Clean Surplus Accounting

**Clean surplus relation**: $B_t = B_{t-1} + E_t - D_t$

All income/expense flows through the **income statement** → book value changes only through earnings and dividends (+ ownership transactions).

**"Dirty surplus" violations** (items bypassing income statement → go directly to equity):
- Changes in market value of certain securities
- Foreign currency translation adjustments
- Pension adjustments
- → Called **Other Comprehensive Income (OCI)**

**Impact**: If material dirty surplus items expected, analyst should adjust net income for RI calculations.

---

### Relationship to Key Concepts

| Concept | Relationship |
|---------|-------------|
| **P/B** | RI model directly justifies P/B: positive RI → P/B > 1; negative RI → P/B < 1 |
| **PVGO** | Second term of RI model = PVGO (value from growth opportunities) |
| **Tobin's q** | Similar to P/B but uses replacement cost of assets and includes debt; theoretically averages to 1 |
| **EVA** | Commercial implementation using NOPAT − (WACC × capital) with specific accounting adjustments |

---

### Exam Tips

- **$RI_t = E_t - r \times B_{t-1}$** — always use **beginning-of-period** book value
- **Book value update**: $B_t = B_{t-1} + E_t - D_t$ (clean surplus)
- **RI model = DDM** with consistent assumptions — same final value, different timing
- **RI model recognizes value earlier** — large fraction at t=0 (book value); smaller terminal value
- **Single-stage RI**: $V_0 = B_0 + (ROE-r)B_0/(r-g)$
- **Dirty surplus items** (OCI): violate clean surplus assumption → may require adjustment
- **ROE declining to r**: RI approaches zero as ROE converges to cost of equity (competitive equilibrium)
- **For non-dividend-paying companies**: RI model is practical alternative to DDM when dividend initiation is uncertain