---
layout: page
title: Free Cash Flow Valuation — Module 3 Wrap-Up
permalink: /study/05-equity-valuation/03-free-cash-flow-valuation/15-summary/
prev: /cfa/study/05-equity-valuation/03-free-cash-flow-valuation/14-non-operating-assets-firm-value/
---
## Summary: Free Cash Flow Valuation — Module 3 Wrap-Up (CFA Level II)

A closing summary consolidating the entire FCF valuation module for exam use.

---

### When to Use FCF Instead of Dividends

| Trigger | Reason |
|---------|--------|
| Company doesn't pay dividends | DDM requires forecasting dividend initiation |
| Dividends ≠ capacity to pay | Dividend policy is discretionary; FCF reflects true capacity |
| FCF aligns with profitability within forecast horizon | FCF is forecastable with confidence |
| Control perspective | Investor can redirect cash flows; dividends irrelevant |

---

### Core Valuation Formulas

#### FCFF Approach
$$\boxed{\text{Firm value} = \sum_{t=1}^{\infty} \frac{FCFF_t}{(1+WACC)^t}}$$

$$\boxed{\text{Equity value} = \text{Firm value} - \text{Market value of debt}}$$

$$\boxed{WACC = \frac{D}{D+E}r_d(1-t) + \frac{E}{D+E}r_e}$$

**Constant growth (single-stage):**
$$\text{Firm value} = \frac{FCFF_1}{WACC-g} = \frac{FCFF_0(1+g)}{WACC-g}$$

#### FCFE Approach
$$\boxed{\text{Equity value} = \sum_{t=1}^{\infty} \frac{FCFE_t}{(1+r)^t}}$$

**Constant growth:**
$$\text{Equity value} = \frac{FCFE_1}{r-g} = \frac{FCFE_0(1+g)}{r-g}$$

---

### Complete Formula Reference Table

| Starting Point | FCFF | FCFE |
|----------------|------|------|
| **Net Income** | $NI + NCC + Int(1-t) - FCInv - WCInv$ | $NI + NCC - FCInv - WCInv + \text{Net borrowing}$ |
| **CFO** | $CFO + Int(1-t) - FCInv$ | $CFO - FCInv + \text{Net borrowing}$ |
| **EBIT** | $EBIT(1-t) + Dep - FCInv - WCInv$ | $FCFF - Int(1-t) + \text{Net borrowing}$ |
| **EBITDA** | $EBITDA(1-t) + Dep(t) - FCInv - WCInv$ | $FCFF - Int(1-t) + \text{Net borrowing}$ |

**FCFF ↔ FCFE conversion:**
$$\boxed{FCFE = FCFF - Int(1-t) + \text{Net borrowing}}$$

---

### Why Not Use Earnings Components Directly?

| Measure | Problem |
|---------|---------|
| Net income | Ignores NCC, CapEx, WC investment, net borrowing |
| EBIT | Pre-tax, pre-financing — doesn't reflect cash to investors |
| EBITDA | Ignores taxes, depreciation tax shield, CapEx, WC — wrong discount rate basis |
| CFO | Not "free" — doesn't subtract CapEx |

> All either **double-count** or **omit** parts of the true cash flow stream available to investors.

---

### Multistage Models

**General two-stage FCFF:**
$$\text{Firm value} = \sum_{t=1}^{n}\frac{FCFF_t}{(1+WACC)^t} + \frac{FCFF_{n+1}/(WACC-g)}{(1+WACC)^n}$$

**General two-stage FCFE:**
$$\text{Equity value} = \sum_{t=1}^{n}\frac{FCFE_t}{(1+r)^t} + \frac{FCFE_{n+1}/(r-g)}{(1+r)^n}$$

| Model Type | Stage 1 Pattern |
|-----------|----------------|
| Constant-growth two-stage | Fixed rate → drops to Stage 2 rate |
| H-model-style two-stage | Declining growth → reaches Stage 2 rate smoothly |
| Three-stage | Good approximation for realistic year-to-year fluctuations |

---

### Forecasting Approach

**Common method**: Forecast **sales** → derive profitability, investments, and financing from sales changes.

**Sales-based formula:**
$$FCFF = EBIT(1-t) - (\%FCInv \times \Delta Sales) - (\%WCInv \times \Delta Sales)$$

---

### Capital Structure Extensions

**With preferred stock:**
$$FCFF = NI + NCC + Int(1-t) + \text{Preferred dividends} - FCInv - WCInv$$

---

### Non-Operating Assets

$$\boxed{\text{Total firm value} = \text{Operating asset value (FCFF/FCFE)} + \text{Non-operating asset value (market value)}}$$

**Examples**: Excess cash, marketable securities, noncurrent investment securities, nonperforming assets — valued separately and **added back**.

---

### One-Page Mental Model

```
Choose FCFF vs. FCFE:
  Stable capital structure → FCFE (direct, simpler)
  Negative FCFE / changing leverage → FCFF (then subtract debt)

Pick starting point based on available data:
  NI → 4 adjustments (NCC, Int(1-t), FCInv, WCInv)
  CFO → 2 adjustments (Int(1-t), FCInv)
  EBIT → tax-adjust + full Dep − FCInv − WCInv
  EBITDA → tax-adjust + Dep×t − FCInv − WCInv

FCFE = FCFF − Int(1-t) + Net borrowing

Model selection:
  Stable growth → single-stage (Gordon-style)
  Two distinct phases → two-stage (constant or declining Stage 1)
  Realistic fluctuation → three-stage

Always:
  - Check IFRS vs. GAAP interest/dividend classification
  - Verify sustainability of working capital trends
  - Add non-operating assets at market value
  - Run sensitivity analysis (growth rate most impactful)
  - Terminal value often >75% of total value
```

---

This completes the **Free Cash Flow Valuation** module (3.01–3.15). Combined with the earlier completed modules — **Dividend Discount Models (Module 2)**, **Market-Based Valuation/Multiples (Module 4)**, **Residual Income Valuation (Module 5)**, and **Private Company Valuation (Module 6)** — the full **Equity Valuation** curriculum for CFA Level II is now covered. Let me know if you'd like a consolidated cross-module summary or exam-style practice questions tying these valuation approaches together (e.g., model selection decision trees, FCFF vs. RI vs. DDM comparison tables).