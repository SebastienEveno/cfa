## Summary: Discounted Dividend Valuation — Introduction (CFA Level II)

---

### Core Principle

$$V_0 = \sum_{t=1}^{\infty} \frac{CF_t}{(1+r)^t}$$

An asset's value = **present value of all expected future cash flows**, discounted at the required rate of return. For equities, the forecast horizon is **infinite** (no maturity date).

**Key distinction from bonds**: Equity cash flows are **not contractually specified** → greater uncertainty in both cash flow estimation and discount rate selection.

---

### Three Definitions of Cash Flow — When to Use Each

| Model | Cash Flow Definition | Best Suited When |
|-------|--------------------|--------------:|
| **DDM** | Dividends paid to shareholders | Company pays dividends with consistent payout policy; non-control perspective |
| **FCFE/FCFF** | Free cash flow (post or pre-debt) | Non-dividend-paying; dividends ≠ FCFE; control perspective; profitability aligns with FCF within forecast horizon |
| **Residual Income** | Earnings in excess of opportunity cost of equity | Non-dividend-paying; negative expected FCF within forecast horizon; good accounting quality |

---

### Dividend Discount Model (DDM)

**Core logic**: Investor receives cash only as dividends → value = PV of all future dividends.

**Reinvested earnings** are captured implicitly: retained earnings → future growth → higher future dividends.

**DDM is most appropriate when:**
- Company **pays dividends** with a long track record
- Dividends have a **consistent, understandable relationship** to profitability (stable payout ratio)
- Investor takes a **non-control perspective** (minority investor)

**DDM is NOT appropriate when:**
- Dividends are erratic or bear no relationship to earnings (e.g., AB InBev — payout ratio ranged 18%–542%)
- Company is non-dividend-paying
- Dividends significantly exceed or fall short of FCFE

**Diageo (DDM appropriate)**: EPS and DPS grew at ~6.8% and 6.3% CAGR; payout ratio consistently 50–60%; explicit dividend cover target (1.8–2.2×).

**AB InBev (DDM NOT appropriate)**: Highly variable payout (18%–542%); dividend policy driven by M&A history, not earnings consistency.

---

### Free Cash Flow Models

$$FCFF = \text{CFO} - \text{CapEx}$$
$$FCFE = FCFF - \text{Net debt payments}$$

| | FCFF | FCFE |
|--|------|------|
| **Perspective** | Pre-debt (all capital providers) | Post-debt (equity only) |
| **Use** | When leverage expected to change significantly | Baseline equity FCF model |
| **Value derived** | Total firm value → subtract debt → equity value | Directly equity value |

**FCF models most appropriate when:**
- Company **not paying dividends**, or dividends ≫ or ≪ FCFE
- **Control perspective** (acquirer can redeploy cash flows)
- FCF aligns with profitability within a **comfortable forecast horizon**

**FCF models problematic when:**
- Expected FCF is **negative for extended periods** (e.g., capital-intensive growth retailer) → very long forecast horizon needed → high uncertainty

---

### Residual Income Model

$$RI_t = E_t - (r \times BV_{t-1})$$

**Residual income** = earnings **in excess** of the required return on beginning book value.

$$V_0 = BV_0 + \sum_{t=1}^{\infty} \frac{RI_t}{(1+r)^t}$$

**Book value link** (clean surplus relation):
$$BV_t = BV_{t-1} + E_t - D_t$$

**Residual income most appropriate when:**
- Company **not paying dividends** (alternative to FCF)
- **Negative expected FCF** within comfortable horizon → RI brings value recognition closer to the present (higher near-term estimates)
- Good accounting quality/disclosure

**Limitations:**
- Requires **detailed knowledge of accrual accounting**
- Susceptible to **accounting distortions** (management discretion in reporting)
- If accounting quality is poor → RI model is error-prone

---

### Comparison Summary

| Criterion | DDM | FCFE/FCFF | Residual Income |
|-----------|-----|-----------|----------------|
| Dividend paying? | Required | Not required | Not required |
| Consistent payout policy? | Required | Not required | Not required |
| Negative FCF? | N/A | Problematic | Works well |
| Control perspective? | ❌ No | ✅ Yes | Either |
| Accounting knowledge needed? | Low | Medium | High |
| Captures near-term value? | Lower (long-term focus) | Depends on horizon | Higher (near-term recognition) |
| Volatile earnings/dividends? | Problematic | Better | Better |

---

### Key Exam Points

- **DDM = long-run intrinsic value** — dividend stability makes it less sensitive to short-term fluctuations
- **FCFE = what company can afford to pay** as dividends — even applicable to non-dividend-paying companies
- **FCFF vs. FCFE**: use FCFF when leverage is expected to change significantly (easier to model at firm level)
- **Residual income**: value = book value + PV of future excess returns — captures near-term value better when FCF is negative
- **All three models are theoretically equivalent** if consistently applied — differences arise in practice from forecasting difficulty
- **Skill in forecasting** (not model selection) is often the decisive factor in valuation quality