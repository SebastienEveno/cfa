---
layout: page
title: "Formulas: Residual Income Valuation (CFA Level II)"
permalink: /study/05-equity-valuation/05-residual-income-valuation/formulas/
prev: /cfa/study/05-equity-valuation/05-residual-income-valuation/05-accounting-international-considerations/
---
# Formulas: Residual Income Valuation (CFA Level II)

---

## 1. Residual Income

### Equity-Level (Approach 1)

$$RI = NI - (Equity \times r_e)$$

$$\text{Equity charge} = Equity \times r_e$$

### Firm-Level (Approach 2)

$$RI = NOPAT - (Total\ capital \times WACC)$$

### ROIC Perspective

$$RI = (ROIC - \text{Effective capital charge}) \times \text{Beginning capital}$$

### Per-Period (ROE form)

$$RI_t = E_t - r \times B_{t-1} = (ROE_t - r) \times B_{t-1}$$

> Always use **beginning-of-period** book value $B_{t-1}$.

### With OCI Adjustment

$$RI_t = (NI_t + OCI_t) - r \times B_{t-1}$$

Apply when OCI items are significant and not expected to net to zero across periods.

---

## 2. Book Value (Clean Surplus Relation)

$$B_t = B_{t-1} + E_t - D_t$$

---

## 3. Core Residual Income Valuation Model

$$V_0 = B_0 + \sum_{t=1}^{\infty} \frac{RI_t}{(1+r)^t}$$

### Equivalent ROE form

$$V_0 = B_0 + \sum_{t=1}^{\infty} \frac{(ROE_t - r) \times B_{t-1}}{(1+r)^t}$$

---

## 4. Single-Stage (Constant-Growth) RI Model

$$V_0 = B_0 + \frac{(ROE - r) \times B_0}{r - g}$$

**Requirements**: $r > g$; constant ROE; $g = b \times ROE$

### Justified P/B

$$\frac{V_0}{B_0} = \frac{ROE - g}{r - g} = 1 + \frac{ROE - r}{r - g}$$

---

## 5. Multistage RI Model

$$V_0 = B_0 + \sum_{t=1}^{T} \frac{RI_t}{(1+r)^t} + \frac{P_T - B_T}{(1+r)^T}$$

Where $(P_T - B_T)$ is the continuing residual income terminal value.

### Four Terminal Value Assumptions

| Assumption | Formula | When to Use |
|-----------|---------|-------------|
| **Perpetuity** (RI continues) | $TV = \dfrac{RI_T}{r}$ | ROE stays above $r$ indefinitely |
| **Zero** (RI ends) | $TV = 0$ | ROE converges to $r$; competitive equilibrium |
| **Persistence factor** (gradual fade) | $TV = \dfrac{RI_T}{1 + r - \omega}$ | Gradual mean reversion |
| **P/B terminal value** | $TV = (P/B_{terminal} - 1) \times B_T$ | Terminal P/B is estimable |

### Persistence Factor Model (Dechow, Hutton & Sloan)

$$TV_T = \frac{RI_T \times (1 + g)}{1 + r - \omega}$$

| $\omega$ | Interpretation |
|---------|---------------|
| $\omega = 1$ | RI persists indefinitely (no fade) |
| $\omega = 0$ | RI ends immediately |
| $\omega \approx 0.62$ | Empirical average (~38% annual decay) |

---

## 6. Model Equivalence

$$\underbrace{PV(\text{dividends})}_{\text{DDM}} = \underbrace{PV(\text{FCF})}_{\text{FCF model}} = \underbrace{B_0 + PV(\text{residual income})}_{\text{RI model}}$$

---

## 7. Justified Multiples from RI Model

$$\text{Justified P/E} = \frac{V_0^{RI}}{E_1}$$

$$\text{Justified P/B} = \frac{V_0^{RI}}{B_0}$$

---

## 8. Commercial Implementations

### Economic Value Added (EVA)

$$EVA = NOPAT - (C\% \times TC)$$

Where $C\%$ = WACC and $TC$ = total capital invested.

### Market Value Added (MVA)

$$MVA = \text{Market value of firm} - \text{Book value of total capital}$$

$$\text{Market value of firm} = \text{Market value of debt} + \text{Market value of equity}$$

MVA equals the cumulative present value of all future EVA.