---
layout: page
title: Private Company Discount Rates & Required Returns
permalink: /study/05-equity-valuation/06-private-company-valuation/05-private-company-discount-rates/
prev: /cfa/study/05-equity-valuation/06-private-company-valuation/04-earnings-normalization-cf-estimation/
next: /cfa/study/05-equity-valuation/06-private-company-valuation/06-valuation-discounts-and-premiums/
---
## Summary: Private Company Discount Rates & Required Returns (CFA Level II)

---

### Why CAPM is Problematic for Private Companies

| CAPM Assumption | Private Company Reality |
|-----------------|------------------------|
| Observable market prices for equity | **Not available** |
| Well-diversified investors | Owners often highly **concentrated** in the private firm |
| Beta measurable from market returns | **No market price** → beta must be estimated from comparables |
| Access to public debt markets | Often **limited** → different debt cost and capacity |

---

### Four Factors Affecting Private Company Discount Rates

| Factor | Effect on Discount Rate |
|--------|------------------------|
| **Size premium** | ↑ Higher — smaller companies → more risk → higher required return |
| **Debt access/cost** | ↑ Higher — less debt access → more equity → higher WACC; higher cost of debt |
| **Acquisition context** | Use **target's** cost of capital, not buyer's (buyer's lower cost = paying for its own value creation) |
| **Projection risk** | ↑ Higher — less information + less forecasting experience → more uncertainty → higher discount rate |

---

### Three Models for Required Return on Equity

#### 1. Standard CAPM
$$\boxed{r_e = r_f + \beta(r_m - r_f)}$$

**Limitations for private companies**: No observable beta; assumes diversified investors; ignores size effects.

#### 2. Expanded CAPM
$$\boxed{r_e = r_f + \beta(r_m - r_f) + \text{SP} + \text{CSRP}}$$

| Component | Description |
|-----------|-------------|
| $r_f$ | Risk-free rate |
| $\beta(r_m - r_f)$ | Systematic market risk (beta from comparable public companies) |
| **SP** | **Size premium** — smaller company = higher risk |
| **CSRP** | **Company-specific risk premium** — key-person risk, etc. |

#### 3. Build-Up Approach
$$\boxed{r_e = r_f + ERP + \text{SP} + \text{IP} + \text{CSRP}}$$

| Component | Description |
|-----------|-------------|
| $r_f$ | Risk-free rate |
| **ERP** | Equity risk premium (no beta adjustment — **implicit β = 1.0**) |
| **SP** | Size premium |
| **IP** | Industry risk premium (replaces beta adjustment) |
| **CSRP** | Company-specific risk premium |

**Use when**: No comparable public companies available or comparability is questionable.

---

### FLI Example — Three Models Compared

**Inputs**: $r_f = 3.8\%$, ERP = 5%, β = 1.1, SP = 3%, CSRP = 1%, Industry premium = 0%

| Model | Required Return on Equity |
|-------|--------------------------|
| **CAPM** | $3.8\% + 1.1(5\%) = \mathbf{9.3\%}$ |
| **Expanded CAPM** | $3.8\% + 5.5\% + 3\% + 1\% = \mathbf{13.3\%}$ |
| **Build-up** | $3.8\% + 5\% + 3\% + 0\% + 1\% = \mathbf{12.8\%}$ |

**Why expanded CAPM > build-up (with same components)?**
- β = 1.1 → CAPM equity premium = 1.1 × 5% = **5.5%**
- Build-up equity premium = 1.0 × 5% = **5.0%** (implicit β = 1)
- Difference = 0.5% → accounts for the gap

**Why CAPM (9.3%) << Expanded CAPM (13.3%)?**
- **Size premium (3%) + CSRP (1%) = 4%** difference

---

### WACC — Capital Structure Selection

**Key principle**: For an acquisition valuation, use the **target's optimal capital structure** (what an acquirer would establish), NOT the current sub-optimal structure.

**FLI WACC comparison** (using $r_e = 13\%$, $r_d = 7.5\% \times (1-17\%) = 6.225\%$):

| Capital Structure | Debt Weight | WACC |
|-----------------|------------|------|
| **Actual** (2% debt) | 2% | **12.9%** |
| **Optimal** (10% debt) | 10% | **12.3%** |

> **Lower WACC → higher valuation** — if a buyer uses its own lower WACC to value FLI, they're paying for value they would create through better capitalization → value transferred from buyer to seller.

---

### Knowledge Check Answers

**Q1 (Main difference: Expanded CAPM vs. CAPM):**
→ **A. Size premium** — adds 3%; CSRP only adds 1%. Size premium is the largest single addition.

**Q2 (Why build-up < expanded CAPM despite more factors?):**
→ **C.** Build-up uses unadjusted ERP (5%); expanded CAPM uses beta-adjusted ERP (5.5% = 1.1 × 5%). With β > 1, expanded CAPM's ERP is higher → expanded CAPM gives higher result despite no industry premium in build-up.

**Q3 (Acquisition complication — optimal vs. actual WACC):**
→ **B.** If buyer uses **lower optimal WACC** to value FLI → higher valuation → buyer pays more for capital structure improvements they would make. This transfers value from buyer to seller for a benefit the buyer creates.

---

### Exam Tips

- **Expanded CAPM = CAPM + SP + CSRP** — always adds at least size and company-specific premia
- **Build-up = r_f + ERP + SP + IP + CSRP** — no beta; implicit β = 1; industry premium replaces beta
- **Key difference**: Expanded CAPM applies beta to ERP; build-up does not
- **When β > 1**: Expanded CAPM gives higher required return than build-up (same other premia)
- **Acquisition WACC**: use **target's** optimal capital structure, not buyer's and not current actual
- **Size premium**: primary driver of difference between CAPM and expanded CAPM for private companies
- **Projection risk** and **management bias**: may justify additional risk premium adjustments (highly judgmental)