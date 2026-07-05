## Summary: Free Cash Flow Model Variations (CFA Level II)

---

### Why Use Real (Inflation-Adjusted) Values?

**When appropriate**: High or volatile inflation environments, particularly for **international valuations**.

**Special challenges in cross-border valuation:**
- Different **interest rates, inflation rates, and growth rates** across countries
- **Varied accounting standards**
- Maintaining **consistent assumptions** across a team analyzing multiple countries

**Solution**: Value using **real cash flows discounted at real discount rates** — both numerator and denominator stripped of inflation effects.

---

### Building a Real Required Return — Modified Build-Up Approach

$$\boxed{\text{Required return (real)} = \text{Country return (real)} \pm \text{Industry adj.} \pm \text{Size adj.} \pm \text{Leverage adj.}}$$

| Component | Source |
|-----------|--------|
| **Country return (real)** | Base real required return for stocks in that country |
| **Industry adjustment** | Reflects sector-specific risk vs. country average |
| **Size adjustment** | Smaller companies → typically positive adjustment (more risk) |
| **Leverage adjustment** | Higher leverage → typically positive adjustment |

> Adjustments must have **sound economic justification** — reflect factors genuinely affecting relative risk/return.

**Growth rate**: Also estimated in **real terms**, benchmarked against the country's real economic growth rate, with company-specific adjustment.

---

### Worked Example — Mukamba Ventures (DR Congo)

**Inputs:**
- Normalized FCFE = CDF 1,400/share
- Country return (real) = 7.30%
- Industry adjustment = +0.80%
- Size adjustment = −0.33%
- Leverage adjustment = −0.12%

**Required return (real):**
$$r_{real} = 7.30\% + 0.80\% - 0.33\% - 0.12\% = \mathbf{7.65\%}$$

**Growth rate (real):**
- Country real growth = 3.0%
- Company-specific adjustment = −0.5%
$$g_{real} = 3.0\% - 0.5\% = \mathbf{2.5\%}$$

**Value per share** (constant-growth FCFE model, real terms):
$$V_0 = \frac{FCFE_0 \times (1+g)}{r-g} = \frac{1,400 \times 1.025}{0.0765 - 0.025} = \frac{1,435}{0.0515} \approx \mathbf{CDF\ 27,864}$$

---

### Sensitivity Analysis — Why It Matters

**FCFF/FCFE growth depends on:**
- **Sales growth** — tied to industry growth phase and competitive dynamics
- **Profit margins** — eroded over time by competition
- **Base-year FCFF/FCFE level** — value scales **proportionally** with the starting cash flow figure

> Growth rates and growth **duration** are inherently difficult to forecast → sensitivity analysis is essential.

---

### Worked Example — Petrobras Sensitivity Analysis (Example 14)

**Base case** (single-stage FCFE model):
- FCFE₀ = BRL 2.59
- $r_f$ = 8.9%, ERP = 5.3%, β = 1.4
- $r_e = 8.9\% + 1.4 \times 5.3\% = 16.32\%$
- $g$ = 7.0%

$$V_0 = \frac{2.59 \times 1.07}{0.1632 - 0.07} \approx \mathbf{BRL\ 29.71}$$ (approx, base case)

#### Sensitivity Table

| Variable | Base | Low | High | Value (Low) | Value (High) | Range |
|----------|------|-----|------|-------------|---------------|-------|
| Beta | 1.4 | 1.2 | 1.6 | BRL 33.55 | BRL 26.70 | 6.85 |
| Risk-free rate | 8.9% | 7.9% | 9.9% | BRL 33.31 | BRL 26.85 | 6.46 |
| Equity risk premium | 5.3% | 4.3% | 6.3% | BRL 34.99 | BRL 25.85 | 9.14 |
| **FCFE growth rate** | 7.0% | 5.0% | 9.0% | BRL 24.02 | **BRL 38.57** | **14.55** |

---

### Direction of Sensitivity

| Variable | Relationship to Value |
|----------|----------------------|
| Beta | **Negative** — higher β → higher $r_e$ → lower value |
| Risk-free rate | **Negative** — higher $r_f$ → higher $r_e$ → lower value |
| Equity risk premium | **Negative** — higher ERP → higher $r_e$ → lower value |
| **FCFE growth rate** | **Positive** — higher $g$ → narrower $(r-g)$ → higher value |

---

### Key Insight — FCFE Growth Rate Is the Dominant Variable

For Petrobras, the **FCFE growth rate range (BRL 24.02 to BRL 38.57 = BRL 14.55 spread)** produces the **widest valuation range** of all four variables tested.

> **Why**: Because $g$ appears in the **denominator** $(r-g)$ of the Gordon-type formula — small changes in $g$ near $r$ create **disproportionately large** changes in value (the closer $g$ gets to $r$, the more sensitive the model becomes).

**General takeaway**: Sensitivity analysis identifies which inputs the **valuation conclusion depends on most** — analysts should focus due diligence and scenario work on those variables.

---

### Exam Tips

- **Real cash flow models**: use real $r$ and real $g$ — particularly valuable for high/volatile-inflation countries
- **Modified build-up for real $r$**: country return ± industry ± size ± leverage adjustments
- **Value scales proportionally with base-year FCFF/FCFE** — a 10% error in the starting cash flow → ~10% error in value (holding $r$, $g$ constant)
- **Sensitivity analysis**: vary one input at a time, holding others at base case — identify which input drives the widest valuation range
- **Growth rate near required return**: small changes in $g$ → large changes in value (denominator effect) — typically the **most sensitive variable**
- **Direction of sensitivity**: $r_f$, β, ERP all **negatively** related to value (via $r_e$); $g$ is **positively** related
- For international valuations, **consistency of assumptions across countries/analysts** is a practical challenge — real-value frameworks help standardize comparisons