---
layout: page
title: Private Company Valuation Approaches
permalink: /study/05-equity-valuation/06-private-company-valuation/07-private-company-valuation-approaches/
prev: /cfa/study/05-equity-valuation/06-private-company-valuation/06-valuation-discounts-and-premiums/
next: /cfa/study/05-equity-valuation/06-private-company-valuation/08-income-based-approach/
---
## Summary: Private Company Valuation Approaches (CFA Level II)

---

### Three Primary Approaches

| Approach | Public Company Equivalent | Best For |
|---------|--------------------------|---------|
| **Income** | DCF / Present value models | Companies with forecastable cash flows |
| **Market** | Method of comparables | Most widely used; most conceptually preferred |
| **Asset-based** | Net asset value | Asset-heavy companies; liquidation scenarios |

---

## Income-Based Approaches

### 1. Free Cash Flow Valuation (FCFF)

$$\boxed{IV_t = \sum_{i=1}^{n} \frac{FCFF_i}{(1+WACC)^i} + \frac{TV_n}{(1+WACC)^n}}$$

**Three terminal value approaches:**
- **Gordon growth / CCM** (constant growth perpetuity)
- **Exit multiple** (apply market multiple to final year earnings)
- **Liquidation value** (asset-based)

---

### 2. Capitalized Cash Flow Method (CCM)

**Use when**: No detailed projections available; stable, mature private company; limited comparable market data.

$$\boxed{Firm\ value = \frac{FCFF_{t+1}}{WACC - g}}$$

$$\boxed{Equity\ value = Firm\ value - Market\ value\ of\ debt}$$

**Using EBIT:**
$$\boxed{FCFF_{t+1} = EBIT_{t+1}(1-t)(1 - \text{Reinvestment rate})}$$

**Reinvestment rate:**
$$\boxed{\text{Reinvestment rate} = \frac{g}{WACC}}$$

**Vinuvia example:**
- FCFF = BRL 15M, g = 5%, WACC = 14.2%
- FCFF$_{t+1}$ = 15M × 1.05 = 15.75M
- Firm value = 15.75M / (0.142 − 0.05) = **BRL 171.9M**
- Equity value = 171.9M − 5M debt = **BRL 166.9M**
- Same with g = 2%: firm value drops 25%+ → **highly sensitive to growth assumptions**

**FCFE variant** (direct equity valuation):
$$Equity\ value = \frac{FCFE_{t+1}}{r_e - g}$$

---

### 3. Excess Earnings Method (EEM)

**Use when**: Valuing small businesses; intangible-asset-heavy companies; when market approach not feasible.

**Conceptual equivalent**: Residual income model.

**Steps:**

**Step 1**: Normalize earnings
**Step 2**: Identify tangible assets (working capital + fixed assets) and their required returns

| Asset Type | Return | Risk Level |
|-----------|--------|-----------|
| Working capital ($r_{WC}$) | Lowest | Lowest (most liquid) |
| Fixed assets ($r_{FA}$) | Medium | Medium |
| Intangibles ($r_{RI}$) | Highest | Highest (illiquid, unique) |

**Step 3**: Calculate residual income (excess earnings):
$$\boxed{RI_t = \text{Normalized income} - (WC \times r_{WC}) - (FA \times r_{FA})}$$

**Step 4**: Capitalize residual income (value of intangibles):
$$\boxed{RV_t = \frac{RI_t(1+g)}{r_{RI} - g}}$$

**Step 5**: Total firm value:
$$\boxed{Firm\ value = WC + FA + RV_t}$$

**Digigraf example:**
- Normalized income = €120K, WC = €200K (5%), FA = €800K (11%)
- RI = 120K − 10K − 88K = **€22K**
- Intangible value = 22K × 1.03 / (0.12 − 0.03) = **€251.8K**
- Firm value = 200K + 800K + 251.8K = **€1,251.8K**

---

## Market-Based Approaches

**Most frequently used**; conceptually preferred because based on actual market transactions.

### Three Variations

| Method | Data Source | Key Feature |
|--------|------------|-------------|
| **GPCM** (Guideline Public Company Method) | Trading multiples from public comparables | Large data pool; no control premium embedded |
| **GTM** (Guideline Transactions Method) | Acquisition multiples (public/private) | Control premium embedded; more relevant for controlling interest |
| **Prior Transaction Method** | Actual trades in subject company's own shares | Most direct; least available |

---

### GPCM — Beta Adjustment for Leverage Differences

**Step 1 — Unlever public company beta:**
$$\boxed{\beta_{unlevered} = \frac{\beta_{levered}}{1 + (1-t) \times \frac{D}{E}}}$$

**Step 2 — Relever to private company's capital structure:**
$$\boxed{\beta_{levered}^* = \beta_{unlevered} \times \left[1 + (1-t^*) \times \left(\frac{D}{E}\right)^*\right]}$$

**Quik Chip example:**
- Average peer β = 1.21, D/E = 50%, tax = 21.6%
- β$_{unlevered}$ = 1.21 / [1 + (0.784)(0.50)] = **0.869**
- Quik Chip D/E = 25%, tax = 18%
- β$_{relevered}$ = 0.869 × [1 + (0.82)(0.25)] = **1.048**

**EV Range for Quik Chip (sales = €250M, EBIT = €35M):**
- EV/EBIT: 17.3 × 35M = **€605.5M**
- EV/Sales: 2.0 × 250M = **€500M**
- Higher EV/EBIT result → Quik Chip EBIT margin (14%) > peer average (11.6%)

---

### Composite Multiples (Multi-Segment Companies)

Weight peer multiples by **revenue** (for EV/Sales) or **EBITDA** (for EV/EBITDA):

**Everfloat example (Marine 70%, Logistics 25%, Energy 5%):**

EV/Sales composite:
$$= (700/1000)(2.8) + (250/1000)(1.1) + (50/1000)(8.0) = \mathbf{2.6\times}$$

EV/EBITDA composite (Energy has negative EBITDA):
$$= (187.5/250)(8.2) + (75/250)(8.1) + (-12.5/250)(20.0) = \mathbf{7.6\times}$$

> When a segment has **negative EBITDA**: use EV/Sales for that segment instead.

---

### GPCM Control Premium Considerations

- Public company trading multiples reflect **minority, non-controlling stakes** → may need control premium for controlling interest valuation
- Control premium size depends on: **type of transaction** (strategic > financial), **industry** (in-play sectors), **form of consideration** (stock vs. cash)

---

### GTM — Additional Factors to Consider

| Factor | Issue |
|--------|-------|
| **Synergies** | Strategic deal multiples include synergy value → may overstate standalone value |
| **Contingent consideration** | Deferred payments tied to milestones → uncertain total price |
| **Non-cash consideration** | Stock payments → uncertain cash equivalent value |
| **Transaction age** | Old transactions may not reflect current market conditions |
| **Availability** | Limited historical transactions for niche industries |

---

### Knowledge Check Answers

**Q1 (Vinuvia reinvestment rate):**
- Reinvestment rate = g / ROIC
- ROIC = FCFF / Firm value = 15M / (15.75M / 0.092) = not directly given
- Alternative: reinvestment rate = g / (WACC × Firm value / EBIT × (1-t))
- More directly: since FCFF = EBIT(1-t)(1 - reinvestment rate), and g = WACC × reinvestment rate relationship:
- g/WACC = 5%/14.2% ≈ 35.2% → but closest answer is:
→ **A. 33.33%** (g/ROIC = 5%/15% = 1/3)

**Q2 (Digigraf corrected discount rates: rWC=4%, rFA=10%, rRI=11%):**
- RI = 120K − (200K × 4%) − (800K × 10%) = 120K − 8K − 80K = **€32K**
- Intangible value = 32K × 1.03 / (0.11 − 0.03) = 32,960 / 0.08 = **€412K**
- Firm value = 200K + 800K + 412K = **€1,412K**
→ **C. EUR 1,412,000**

**Q3 (Least useful criterion for guideline company selection):**
→ **A. Similar debt ratio** — GPCM already adjusts for leverage differences through beta unlevering/relevering. Similar risk and growth are the primary comparable selection criteria.

---

### Exam Tips

- **CCM = Gordon growth model** applied to FCFF; use when no detailed projections available
- **EEM = residual income model** applied to private companies; separates tangible and intangible asset returns
- **GPCM**: unlever peer betas → relever to private company D/E → use for cost of equity
- **GTM**: includes control premium; more relevant for controlling interest; but synergies and data quality are concerns
- **Composite multiple**: weight by sales (for EV/Sales) or EBITDA (for EV/EBITDA); handle negative EBITDA segments with sales multiples
- **EV multiples preferred** over price multiples for private companies (accommodate capital structure changes)
- **Most preferred**: market approach (actual transaction data); income approach (theoretically sound); asset approach (last resort or liquidation)