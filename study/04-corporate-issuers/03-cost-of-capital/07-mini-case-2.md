---
layout: page
title: Mini-Case 2 — Precision Irrigation
permalink: /study/04-corporate-issuers/03-cost-of-capital/07-mini-case-2/
prev: /cfa/study/04-corporate-issuers/03-cost-of-capital/06-mini-case-1/
next: /cfa/study/04-corporate-issuers/04-corporate-restructuring/01-introduction/
---

This case integrates private company WACC estimation with emerging market adjustments — a comprehensive exam-style application.

---

### Company Profile

| Feature | Detail |
|---------|--------|
| Type | **Private** software company |
| Location | **Emerging market** country (higher sovereign risk) |
| Business | Irrigation efficiency software |
| Revenue mix | 60% subscriptions (recurring), 70% from top 5 customers |
| Key risk | Founder/CEO = key person risk; no succession plan |

---

### Capital Structure

$$w_d = \frac{18.4}{105.2} = 17.49\% \qquad w_e = \frac{86.8}{105.2} = 82.51\%$$

Assumed to equal **long-term target capital structure**.

---

### Step 1: After-Tax Cost of Debt

**Method**: Synthetic credit rating (non-traded bonds)

**Step 1**: Calculate leverage ratios:
$$IC = \frac{EBITDA}{\text{Interest}} = \frac{12.2}{1.6} = 7.63x$$
$$D/E = \frac{18.4}{105.2 - 18.4} = 0.212 = 21.2\%$$

**Step 2**: Match to synthetic rating schedule:
- IC of 7.63 → **A rating** (7 < IC < 9)
- D/E of 21.2% → **A rating** (20% < D/E < 25%)
- Both ratios agree → **A-rated, credit spread = 1.46%**

**Step 3**: Build cost of debt:
$$r_d = r_f + \text{Credit spread} + CRP = 5.41\% + 1.46\% + 2.00\% = 8.87\%$$

**Step 4**: After-tax adjustment:
$$r_d(1-t) = 8.87\% \times (1 - 0.20) = \mathbf{7.10\%}$$

---

### Step 2: Risk Premium Justification

**Factor risk premiums used:**

| Factor | Premium | Justification |
|--------|---------|--------------|
| ERP | 6.0% | Market risk |
| SP (Size) | 5.0% | Near high end — Precision is <1/10 industry average size |
| IP (Industry) | 1.0% | Software industry premium |
| SCRP | 6.0% | Mid-to-high range — mixed factors |
| CRP | 2.0% | Emerging market sovereign risk |

#### Why SP is near high end (5%):
- Precision total assets = $105.2M vs. industry average = $1,276.2M
- **Less than 1/10 the size** of average public peer
- SP inversely related to size → **larger premium justified**

#### SCRP analysis — factors pushing higher vs. lower:

| ↑ Higher SCRP | ↓ Lower SCRP |
|--------------|-------------|
| High intangibles (47% vs. 32% peer avg) | 60% recurring subscription revenue |
| Less cash (9% vs. 14% peer avg) | Lower financial leverage than peers |
| 70% revenue from 5 customers | IC ratio slightly above industry |
| Geographic concentration risk | |
| Key-person risk (founder/CEO, no succession) | |

---

### Step 3: Cost of Equity — Two Methods

#### Extended CAPM

**Step 1**: Unlever industry beta (using industry tax rate 25% and D/E 0.3025):
$$\beta_{asset} = \frac{\beta_{equity}}{1 + (1-t) \times D/E} = \frac{1.25}{1 + (0.75)(0.3025)} = \frac{1.25}{1.2269} = 1.0188$$

**Step 2**: Re-lever for Precision (tax rate 20%, D/E 0.212):
$$\beta_{Precision} = \beta_{asset} \times [1 + (1-t) \times D/E] = 1.0188 \times [1 + (0.80)(0.212)] = 1.1908$$

**Step 3**: Apply extended CAPM + CRP:
$$r_e = r_f + \beta \times ERP + SP + SCRP + CRP$$
$$r_e = 5.41\% + 1.1908 \times 6\% + 5\% + 6\% + 2\% = \mathbf{25.56\%}$$

#### Build-Up Approach

$$r_e = r_f + ERP + SP + IP + SCRP + CRP$$
$$r_e = 5.41\% + 6\% + 5\% + 1\% + 6\% + 2\% = \mathbf{25.41\%}$$

> Both methods yield very similar results (~25.4–25.6%) — good cross-check.

---

### Step 4: WACC Calculation (Build-Up)

$$WACC = w_d \times r_d(1-t) + w_e \times r_e$$
$$WACC = 0.1749 \times 7.10\% + 0.8251 \times 25.41\% = \mathbf{21.13\%}$$

---

### Precision vs. Industry — Key Comparisons

| Metric | Precision | Industry Avg | Implication |
|--------|----------|-------------|-------------|
| Intangible assets | 47% | 32% | ↑ Higher risk/cost |
| Cash | 9% | 14% | ↑ Less liquidity |
| D/E ratio | 21.2% | 30.25% | ↓ Less leveraged (positive) |
| IC ratio | 7.63x | 7.55x | ↓ Similar debt service capacity |
| Total assets | $105.2M | $1,276.2M | ↑ Much smaller |

---

### Exam Tips from This Case

**Process flow for private company WACC in emerging markets:**

```
1. Synthetic credit rating → credit spread → add CRP → cost of debt
2. Apply after-tax adjustment to cost of debt
3. Unlever peer beta → re-lever for subject company
4. Add size, industry, company-specific, and country risk premia
5. Cross-check extended CAPM vs. build-up (should be close)
6. Apply capital structure weights (current = target here)
```

**Key formulas:**
$$\boxed{\beta_{asset} = \frac{\beta_{equity}}{1 + (1-t)(D/E)}}$$
$$\boxed{\beta_{re-levered} = \beta_{asset} \times [1 + (1-t)(D/E)_{subject}]}$$
$$\boxed{r_d = r_f + \text{Credit spread} + CRP}$$
$$\boxed{r_e^{build-up} = r_f + ERP + SP + IP + SCRP + CRP}$$

**Critical judgment points:**
- When IC and D/E ratios **agree** → synthetic rating is clear
- SP is **inversely related to size** — very small private companies get higher SP
- SCRP requires **qualitative + quantitative** analysis vs. peers
- CRP applies to **both debt and equity** in emerging market context
- Extended CAPM requires **unlevering/re-levering** beta to match subject company's leverage