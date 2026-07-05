## Summary: Residual Income Valuation — Introduction (CFA Level II)

---

### What Is Residual Income?

$$\boxed{RI = \text{Net income} - \text{Equity charge}}$$

$$\boxed{\text{Equity charge} = \text{Equity capital} \times \text{Cost of equity} (r_e)}$$

**Core concept**: Net income accounts for the cost of **debt** (interest expense) but NOT the cost of **equity**. Residual income corrects this by subtracting the equity charge — the shareholders' opportunity cost.

> A company can have **positive net income** but **negative residual income** if it doesn't earn enough to cover its cost of equity capital.

---

### Two Equivalent Approaches

| Approach | Perspective | Formula |
|---------|-------------|---------|
| **Approach 1** (equity-level) | Equity holders | $RI = NI - (Equity \times r_e)$ |
| **Approach 2** (firm-level) | All capital providers | $RI = NOPAT - (Total\ capital \times WACC)$ |

Both give the **same result** when:
1. Marginal cost of debt = current cost of debt (after-tax interest in NI = debt cost in capital charge)
2. Weights are based on **book value** of debt and equity

**AXCI Example:**

| Item | Amount |
|------|--------|
| Net income | €91,000 |
| Equity charge (€1M × 12%) | €120,000 |
| **Residual income** | **(€29,000)** |

| Item | Amount |
|------|--------|
| NOPAT | €140,000 |
| Capital charge (€49K debt + €120K equity) | €169,000 |
| **Residual income** | **(€29,000)** |

✅ Same result from both approaches.

---

### ROIC Perspective

$$RI = (ROIC - \text{Effective capital charge}) \times \text{Beginning capital}$$

**AXCI**: ROIC = €140,000/€2,000,000 = **7%** vs. capital charge = **8.45%** → negative residual income confirmed.

---

### Residual Income and Valuation

| Residual Income | Interpretation | P/B vs. 1.0 |
|----------------|---------------|------------|
| **Positive** | Company creating value (ROE > r) | **P/B > 1** (premium to book) |
| **Zero** | Company earns exactly its cost of equity | **P/B = 1** |
| **Negative** | Company destroying value (ROE < r) | **P/B < 1** (discount to book) |

**AXCI valuation example:**
- Book value = €10/share; EPS = €0.91/share
- Value being destroyed per year: €0.29/share
- PV of perpetuity: €0.29/12% = €2.42
- Fair value = €10 − €2.42 = **€7.58/share**
- At €7.58: E/P = €0.91/€7.58 = 12% = cost of equity ✅
- P/B = 0.7583 (below 1, as expected with negative RI)

---

### Commercial Implementations

#### Economic Value Added (EVA) — Stern Stewart & Co.

$$\boxed{EVA = NOPAT - (C\% \times TC)}$$

Where $C\%$ = cost of capital (WACC), $TC$ = total capital

**Key EVA adjustments** (to NOPAT and capital):
- **R&D**: capitalize and amortize (add back net R&D to NOPAT)
- **Deferred taxes**: eliminated → use only cash taxes
- **LIFO reserve**: add back to capital; add increase to NOPAT
- **Operating leases**: reclassified as capital leases
- **Strategic investments**: defer capital charge until returns begin
- **Non-recurring items**: adjust out

> EVA adjustments produce different numerical results than simple RI calculation — but same conceptual framework.

#### Market Value Added (MVA)

$$\boxed{MVA = \text{Market value of firm} - \text{Book value of total capital}}$$

- Company with consistently **positive EVA** → **MVA > 0** (market value exceeds accounting book value)
- MVA is the **cumulative present value** of all future EVA

**Research evidence**: Mixed results — value-added measures are slightly more correlated with stock returns than traditional measures (Peterson & Peterson), but not consistently better at **predicting future returns** (Bernstein).

---

### Other Names for Residual Income

| Name | Context |
|------|---------|
| **Economic profit** | Emphasizes deduction of all capital costs |
| **Abnormal earnings** | Earnings in excess of cost of capital (under long-run equilibrium assumption) |
| **Edwards-Bell-Ohlson (EBO) model** | Academic research name |
| **Discounted abnormal earnings model** | Alternative academic terminology |

---

### Uses of Residual Income Models

- Valuing **individual stocks** (primary focus here)
- Valuing **stock market indexes**
- Measuring **internal corporate performance**
- Determining **executive compensation** (commercial implementations)

---

### Exam Tips

- **RI = NI − Equity charge** — the fundamental formula; equity charge = equity × $r_e$
- **RI ≠ accounting profit** — accounting profit ignores the cost of equity
- **Positive NI + Negative RI** = company is profitable in accounting terms but **destroying value economically**
- **Two approaches give same RI** under clean surplus + book-value weights
- **Negative RI → P/B < 1**; **Positive RI → P/B > 1**
- **EVA**: commercial implementation with specific accounting adjustments — know the major adjustments
- **MVA = market value − book value** of total capital
- **ROIC vs. WACC**: if ROIC > WACC → positive RI; if ROIC < WACC → negative RI