## Summary: Discounted Dividend Valuation — Module 2 Wrap-Up (CFA Level II)

A closing summary consolidating the entire module for exam use.

---

### Core DCF Framework

$$V_0 = \sum_{t=1}^{\infty} \frac{CF_t}{(1+r)^t}$$

---

### Model Selection Guide

| Model | Best When |
|-------|----------|
| **DDM** | Dividend-paying; consistent payout policy; non-control perspective |
| **FCFF/FCFE** | Non-dividend-paying; dividends ≠ FCFE; control perspective |
| **Residual income** | Non-dividend-paying; negative FCF within forecast horizon |

---

### Key Formulas — Complete Reference

#### Single-Period DDM
$$V_0 = \frac{D_1 + P_1}{1+r} \qquad r = \frac{D_1 + P_1}{P_0} - 1$$

#### General DDM (n-period)
$$V_0 = \sum_{t=1}^{n} \frac{D_t}{(1+r)^t} + \frac{V_n}{(1+r)^n}$$

#### Gordon Growth Model
$$V_0 = \frac{D_1}{r-g} \qquad r = \frac{D_1}{P_0} + g$$

#### Perpetual Preferred Stock (g = 0)
$$V_0 = \frac{D}{r}$$

#### PVGO Decomposition
$$V_0 = \frac{E_1}{r} + PVGO$$

#### Justified P/E Ratios
$$\frac{P_0}{E_1} = \frac{1-b}{r-g} \qquad \frac{P_0}{E_0} = \frac{(1-b)(1+g)}{r-g}$$

#### Two-Stage DDM
$$V_0 = \sum_{t=1}^{n} \frac{D_0(1+g_S)^t}{(1+r)^t} + \frac{V_n}{(1+r)^n} \qquad V_n = \frac{D_0(1+g_S)^n(1+g_L)}{r-g_L}$$

#### H-Model
$$V_0 = \frac{D_0(1+g_L)}{r-g_L} + \frac{D_0 \cdot H(g_S-g_L)}{r-g_L}$$

$$r^{H-model} = \frac{D_0}{P_0}[(1+g_L)+H(g_S-g_L)] + g_L$$

#### Sustainable Growth Rate
$$g = b \times ROE = b \times \text{Profit margin} \times \text{Asset turnover} \times \text{Leverage}$$

---

### Growth Phases

| Phase | Characteristics | DDM Treatment |
|-------|----------------|--------------|
| **Growth** | Supernormal EPS growth; low/zero dividends | Individual dividend forecasts |
| **Transition** | Slowing growth; rising payouts | H-model or explicit stage |
| **Mature** | Stable ROE ≈ r; sustainable dividends | **Gordon growth model** |

---

### Model Comparison

| Model | Growth Pattern | Transition |
|-------|---------------|-----------|
| Gordon | Constant forever | None |
| Two-stage | High → stable | Abrupt |
| H-model | Linearly declining → stable | Smooth |
| Three-stage (v1) | High → medium → stable | Two abrupt steps |
| Three-stage (v2) | High → linearly declining → stable | Smooth in Stage 2 |

---

### One-Page Mental Model

```
Choose cash flow definition:
  Dividends → DDM (non-control, dividend-paying)
  FCF → FCFE/FCFF (control, non-dividend-paying)
  Residual income → negative FCF, non-dividend

Choose DDM variant:
  Stable mature company → Gordon growth model
  Temporary high growth → Two-stage DDM
  Gradual maturation → H-model
  Complex growth path → Three-stage / spreadsheet

Key formulas:
  Gordon: V = D1/(r−g); r = D1/P + g; g_implied = r − D1/P
  PVGO = P − E1/r
  Leading P/E = (1−b)/(r−g)
  g = b × ROE (sustainable growth)
  g = b × margin × turnover × leverage (PRAT/DuPont)

Always:
  - Terminal value dominates (typically >75%)
  - Sensitivity analysis is mandatory
  - r > g required for Gordon model
```