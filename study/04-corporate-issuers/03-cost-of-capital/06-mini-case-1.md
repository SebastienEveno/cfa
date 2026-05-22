---
layout: page
permalink: /study/04-corporate-issuers/03-cost-of-capital/06-mini-case-1/
prev: /cfa/study/04-corporate-issuers/03-cost-of-capital/05-cost-of-equity/
---

## Summary: Mini-Case 1 — Gretna Engines (CFA Level II)

This is an integrative case applying cost of capital concepts to a real-world-style scenario. It ties together matrix pricing, cost of preferred equity, CAPM, FF5, and BYPRP.

---

### Company Profile

| Feature | Detail |
|---------|--------|
| Type | Small-cap, publicly traded manufacturer |
| Industry | Industrial equipment — **cyclical** |
| Business model | Small engines for boats/ATVs; **high fixed costs** |
| Revenue | Trending up but **highly volatile** over business cycle |
| Assets | Primarily inventory + PP&E (tangible, but relatively illiquid) |
| Current issue | Wants to issue new debt to retire expensive preferred shares |

---

### Why Gretna Has a Higher Cost of Capital

Three bottom-up factors:
1. **Revenue/earnings volatility** — cyclical industry
2. **High operating leverage** — high proportion of fixed costs
3. **Asset illiquidity** — PP&E and inventory are less liquid than cash/securities

---

### Current Capital Structure

| Capital Type | Weight | Key Feature |
|-------------|--------|------------|
| Debt | 20% | BBB-rated, 7% coupon, 7-year remaining, thinly traded |
| Preferred equity | 15% | 7% dividend, par = 1,000, trading at 980 |
| Common equity | 65% | Actively traded |

---

### Step 1: Cost of Debt — Matrix Pricing

Since Gretna's debt is **thinly traded** (no reliable YTM) → use **matrix pricing** with 4 comparable BBB-rated liquid bonds.

**Process:**

**Step 1**: Calculate YTM for each comparable bond:
| Bond | Maturity | YTM |
|------|---------|-----|
| Bond 1 | 4yr | 5.140% |
| Bond 2 | 4yr | 5.191% |
| Bond 3 | 8yr | 6.000% |
| Bond 4 | 8yr | 6.021% |

**Step 2**: Average YTMs by maturity:
- 4-year average: **5.166%**
- 8-year average: **6.011%**

**Step 3**: Linear interpolation for 7-year maturity:
$$\text{Annual increment} = \frac{6.011\% - 5.166\%}{4} = 0.211\%$$
$$\text{7-year YTM} = 5.166\% + 3 \times 0.211\% = \mathbf{5.80\%}$$

> **Caveat**: Gretna's actual YTM would be **slightly higher** than 5.80% due to **liquidity premium** on its thinly traded bond.

---

### Step 2: Cost of Preferred Equity

Using the **perpetuity DDM** (g = 0):

$$r_p = \frac{D}{P} = \frac{70}{980} = \mathbf{7.14\%}$$

---

### Step 3: Future Cost of Debt (Post-Refinancing)

If management retires preferred equity (7.14%) with new debt:
- Capital structure becomes: **35% debt / 65% equity**
- New debt cost: **between 5.80% and 7.14%**
  - Higher claim than preferred → lower rate than 7.14%
  - Additional leverage → slightly higher than current 5.80%

**Favorable conditions to issue**: Low risk-free rate + tight credit spreads

**Ways to further lower debt cost at issuance:**
1. Issue **secured debt** (collateralized by PP&E)
2. Add a **put feature** (investor benefit → lower yield)
3. Add a **convertibility feature** (investor benefit → lower yield)

---

### Step 4: Cost of Common Equity — Three Methods

#### CAPM
$$r_e = 2.1\% + 0.91 \times 5.5\% = \mathbf{7.11\%}$$

#### Fama-French Five-Factor
$$r_e = 2.1\% + 0.95(5.5\%) + 0.45(1.8\%) + 0.14(3.9\%) - 0.19(3.1\%) + 0.30(3.7\%) = \mathbf{9.20\%}$$

#### BYPRP
$$r_e = 5.80\% + 6.20\% = \mathbf{12.00\%}$$

---

### Critical Judgment: Which Estimate Is Reliable?

| Method | Estimate | Credible? |
|--------|---------|----------|
| CAPM | 7.11% | ❌ **Problematic** |
| FF5 | 9.20% | ✅ More reasonable |
| BYPRP | 12.00% | ✅ Reasonable upper bound |

**Why CAPM fails here**: The CAPM estimate of 7.11% is **below the cost of preferred equity** (7.14%). Since common shareholders have a **residual claim below preferred shareholders**, they must demand a **higher return** than preferred investors. A $r_e < r_p$ is economically impossible.

> **Exam lesson**: Always cross-check cost of equity estimates against cost of preferred equity — $r_e$ must exceed $r_p$ which must exceed $r_d$.

---

### Why KM's ERP Estimate Is Likely Too High

KM used:
1. **Short-term T-bill rate** as risk-free proxy → lower $r_f$ → **higher ERP**
2. **Arithmetic mean** → **higher ERP** than geometric mean

Both choices systematically **bias the ERP upward** relative to using:
- Long-term government bond YTM
- Geometric mean

---

### Capital Structure Hierarchy Check

$$r_d < r_p < r_e$$
$$5.80\% < 7.14\% < r_e$$

→ Any cost of equity estimate below 7.14% should be **rejected as unreasonable**.

---

### Exam Tips from This Case

- **Matrix pricing**: calculate YTMs, average by maturity, interpolate for target maturity
- Always add **liquidity premium** when subject bond is less liquid than comparables
- **Preferred equity cost** = annual dividend / market price (perpetuity formula)
- Cost of equity **must exceed** cost of preferred equity — use this as a sanity check
- Short T-bill + arithmetic mean = **upward-biased ERP** estimate
- CAPM often gives lower $r_e$ than multifactor models — FF5 captures size, value, profitability, and investment premia that CAPM misses