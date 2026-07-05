---
layout: page
title: General Modeling & Estimating Required Return Using Any DDM
permalink: /study/05-equity-valuation/02-discounted-dividend-valuation/08-general-modeling/
prev: /cfa/study/05-equity-valuation/02-discounted-dividend-valuation/07-h-model-and-3-stage-ddm/
next: /cfa/study/05-equity-valuation/02-discounted-dividend-valuation/09-financial-determinants-growth-rate/
---
## Summary: General Modeling & Estimating Required Return Using Any DDM (CFA Level II)

---

### Spreadsheet / General DDM Modeling

**Key advantage**: No restriction to stylized growth patterns — any dividend stream can be modeled:
- Declining dividends
- Lumpy cash flows (e.g., asset sale proceeds)
- Mixed patterns across periods
- Terminal Gordon growth model at the point where stable growth begins

**Worked example (Yang Co., Example 19):**

| Year | Dividend | PV @ 12% | Note |
|------|---------|----------|------|
| 1 | $21.00 | $18.75 | Set |
| 2–4 | Declining 10%/yr | $36.91 | × 0.90 each year |
| 5 | $60.00 | $34.05 | Asset sale proceeds |
| 6–7 | $40.00 | $38.36 | Set |
| 7 | $V_7 = 600$ | $271.41 | Gordon: $40×1.05/(0.12−0.05) |
| **Total** | | **$399.48** | |

---

### Estimating the Mature Growth Rate $g$

Several approaches for the terminal stage growth rate:

| Approach | Formula/Method |
|----------|---------------|
| **Sustainable growth** | $g = b \times ROE$ (where $b$ = retention rate in mature phase) |
| **ROE = r assumption** | In mature phase, ROE → required return → no economic profit |
| **Industry median ROE** | Use peer group ROE as proxy for mature-phase ROE |
| **Macroeconomic** | Link to nominal GDP growth or industry growth projections |

**Bloomberg assumption**: $b = 0.55$ (payout = 45%) in mature phase — long-run US average.

**Worked example (Example 20):**
- Payout = 25% → $b = 75\%$, $ROE = r = 9\%$
$$g = 0.75 \times 9\% = \mathbf{6.75\%}$$

---

### Estimating Required Return Using Any DDM

**Concept**: Given current price and all other DDM inputs, solve for $r$ as the IRR.

$$r = IRR\ \text{such that}\ P_0 = \sum_{t=1}^{\infty} \frac{D_t}{(1+r)^t}$$

This IRR represents the **market-price-implied expected return** (efficient market interpretation).

#### Gordon Growth Model (simplest case):
$$\boxed{r = \frac{D_1}{P_0} + g}$$

#### H-Model:
$$\boxed{r = \frac{D_0}{P_0}\left[(1+g_L) + H(g_S-g_L)\right] + g_L}$$

When $g_S = g_L$, reduces to Gordon growth model.

**H-Model example:**
- $D_0 = \$1$, $P_0 = \$20$, $g_S = 10\%$, $g_L = 6\%$, $H = 5$

$$r = \frac{1}{20}[(1.06) + 5(0.04)] + 0.06 = \frac{1}{20}[1.26] + 0.06 = 6.3\% + 6\% = \mathbf{12.3\%}$$

#### Multistage Models (general case):
- No closed-form solution
- Use **trial and error** or **spreadsheet IRR/Goal Seek**
- **Starting approximation**: use Gordon growth model with long-term $g$ as initial guess
- If early-stage growth > long-term $g$ → actual IRR > Gordon-model approximation

---

### JNJ Example — Two-Stage IRR Estimation

**Setup**: $D_0 = \$3.60$, $g_1 = 7\%$ (6 years), $g_2 = 5\%$ (perpetuity), $P_0 = \$136.61$

**Starting approximation (Gordon model):**
$$r \approx \frac{3.60 \times 1.07}{136.61} + 0.05 = 7.8\%$$

Since $g_1 = 7\% > g_L = 5\%$ → actual IRR > 7.8%

**Trial and error:**

| Discount Rate | Estimated Value | vs. Market Price |
|--------------|----------------|-----------------|
| 8.0% | $140.07 | Above ($136.61) → r must be higher |
| 8.5% | $119.92 | Below → r must be lower |
| **8.08%** | **$136.61** | **= market price → IRR** |

**Excel method**: Goal Seek → set total PV cell = market price by changing discount rate cell.

---

### Multistage DDM — Concluding Remarks

| Feature | Detail |
|---------|--------|
| **Stage 1** | Individual analyst forecasts (2–5 years typically) |
| **Final stage** | Gordon growth model with sustainable long-run $g$ |
| **H-model** | Smooth transition in Stage 1 itself |
| **Two-stage** | Immediate jump to mature rate |
| **Three-stage** | Explicit middle transition stage |

**Key limitations:**
- Terminal value often **>75% of total share value** — highly sensitive to growth and discount rate assumptions
- Lifecycle model is a **crude approximation** — technological disruption can invalidate stage assumptions
- **Different discount rates** could be used for different phases, but no clear standard

---

### Master Formula Summary

$$\boxed{r^{Gordon} = \frac{D_1}{P_0} + g}$$

$$\boxed{r^{H-model} = \frac{D_0}{P_0}[(1+g_L) + H(g_S-g_L)] + g_L}$$

$$\boxed{g^{sustainable} = b \times ROE}$$

---

### Exam Tips

- **Spreadsheet models** = most flexible — handle any dividend pattern; terminal value still uses Gordon model
- **IRR as required return**: only valid if price = intrinsic value; if mispriced, adjust for expected price convergence
- **Starting approximation for IRR**: use Gordon model with long-term $g$; if early growth > long-term growth → actual IRR is higher
- **H-model r formula**: reduces to Gordon when $g_S = g_L$
- **Sustainable growth**: $g = b \times ROE$ — key input for mature stage
- **Terminal value sensitivity**: small changes in $g$ or $r$ → large changes in valuation — always run sensitivity analysis
- **Goal Seek in Excel**: standard exam-implied method for multistage IRR