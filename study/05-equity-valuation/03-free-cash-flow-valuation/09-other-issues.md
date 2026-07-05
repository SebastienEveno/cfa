---
layout: page
title: Other Issues in Free Cash Flow Analysis
permalink: /study/05-equity-valuation/03-free-cash-flow-valuation/09-other-issues/
prev: /cfa/study/05-equity-valuation/03-free-cash-flow-valuation/08-forecasting-fcff/
next: /cfa/study/05-equity-valuation/03-free-cash-flow-valuation/10-free-cash-flow-model-variations/
---
## Summary: Other Issues in Free Cash Flow Analysis (CFA Level II)

---

### Analyst Adjustments to CFO — The "Articulation" Problem

**Non-articulation**: When changes in balance sheet working capital accounts don't match the amounts reported in the statement of cash flows.

**Common causes:**
| Cause | Example |
|-------|---------|
| **Acquisitions/divestitures** | Inventory increase from an acquisition is an *investing* activity, not operating — but appears as a balance sheet change |
| **Non-domestic subsidiaries** | Currency translation effects distort balance sheet changes vs. CF statement |
| **Discontinued operations** | Related cash flows may be excluded/reclassified |

**Implication for analysts**: When acquisition/divestiture activity is significant, CFO may be **distorted** — consider:
- Adjusting the starting CFO figure
- Forecasting individual components directly (especially working capital tied to sales)

---

### FCFE vs. Dividends — Why Analysts Prefer FCF Models

| Reason | Detail |
|--------|--------|
| **Many companies pay zero/low dividends** | DDM requires forecasting dividend *initiation* timing and growth — difficult |
| **Dividends are discretionary** | Board decisions may not reflect long-run profitability; some pay << FCFE, others >> FCFE |
| **Takeover context** | FCFE = cash *available* for distribution; once acquired, new owners control payout — FCFE is the relevant measure, not historical dividends |

**Theoretical equivalence**: If FCFE = dividends every year, DDM and FCFE model give **identical values**. In practice they differ, but:

> **Same economic forces drive both** — a high-growth company with strong investment opportunities will have **both low dividends AND low FCFE** (heavy reinvestment reduces FCFE: $FCFE = NI + NCC - FCInv - WCInv + \text{Net borrowing}$).

---

### Dividends, Repurchases, Issuances — Do They Affect FCFF/FCFE?

$$FCFF = NI + NCC + Int(1-t) - FCInv - WCInv$$
$$FCFE = NI + NCC - FCInv - WCInv + \text{Net borrowing}$$

**None of these formulas contain dividends, repurchases, or share issuances** because:

> FCFF and FCFE represent cash flow **available to** investors — dividends/repurchases/issuances are **uses** of that cash (transactions *between* the company and shareholders), not generation of it.

| Transaction | Effect on FCFF | Effect on FCFE |
|-------------|----------------|-----------------|
| Cash dividends | None | None |
| Share repurchases | None | None |
| Share issuances | None | None |
| **New debt issuance** | None directly | **+ Increases FCFE** in issuance year |
| **After-tax interest (ongoing)** | Already included | **− Reduces FCFE** going forward |

> **Leverage changes affect FCFE** (via the net borrowing term and future interest), but **not FCFF** — though leverage decisions made today affect future cash flows.

---

### Why NOT to Use NI or EBITDA as Proxies for FCFE/FCFF

#### Net Income ≠ FCFE

Net income **omits**:
- Noncash charges (add back)
- Fixed capital investment (subtract)
- Working capital investment (subtract)
- Net borrowing (add)

**Special case where NI = FCFE**: Only when investment exactly equals depreciation, ΔWC = 0, and net borrowing = 0 — rare in practice.

#### EBITDA ≠ FCFF

$$FCFF = EBITDA(1-t) + Dep(t) - FCInv - WCInv$$

**EBITDA's problems as a proxy:**
| Issue | Why It Matters |
|-------|----------------|
| **Ignores taxes** | EBITDA is pre-tax; FCFF is after-tax |
| **Ignores depreciation tax shield** | $Dep \times t$ varies significantly by company/industry |
| **Ignores fixed capital investment** | No deduction for CapEx |
| **Ignores working capital investment** | No deduction for ΔWC |
| **Discount rate mismatch** | EBITDA is pre-tax → would require pre-tax discount rate; WACC is after-tax |

**Even worse for FCFE**: EBITDA additionally ignores after-tax interest and net borrowing/repayment — making it a poor proxy for equity cash flows.

---

### FCFF and FCFE with Preferred Stock

**Modified formulas** (add preferred dividends where applicable):

$$\boxed{FCFF = NI + NCC + Int(1-t) + \text{Preferred dividends} - FCInv - WCInv}$$

$$\boxed{FCFE = NI + NCC - FCInv - WCInv + \text{Net borrowing (incl. preferred issuance/redemption)}}$$

**Key distinction**: Preferred dividends are **NOT tax-deductible** (unlike interest) — but still added back to NI for FCFF since preferred holders are capital providers.

---

### Worked Example — Welch Corporation (Example 12)

**Capital structure:**

| Source | Market Value | Required Return | Weight |
|--------|-------------|-----------------|--------|
| Bonds | $400M | 8.0% | 40% |
| Preferred | $100M | 8.0% | 10% |
| Common equity | $500M | 12.0% | 50% |

#### WACC Calculation:
$$WACC = 0.40 \times 8\% \times (1-0.30) + 0.10 \times 8\% + 0.50 \times 12\%$$
$$= 2.24\% + 0.80\% + 6.00\% = \mathbf{9.04\%}$$

#### FCFF:
$$FCFF = NI + NCC + Int(1-t) + \text{Preferred div} - FCInv - WCInv$$
$$= 110 + 40 + 32(0.70) + 8 - 70 - 20 = \mathbf{\$90.4M}$$

#### Firm Value (g = 4%):
$$Firm\ Value = \frac{90.4 \times 1.04}{0.0904 - 0.04} = \mathbf{\$1,865.40M}$$

#### Equity Value:
$$= 1,865.40 - 400 (\text{debt}) - 100 (\text{preferred}) = \mathbf{\$1,365.40M}$$

#### FCFE:
$$FCFE = NI + NCC - FCInv - WCInv + \text{Net borrowing}$$
$$= 110 + 40 - 70 - 20 + 25 = \mathbf{\$85M}$$

#### Equity Value via FCFE (g = 5.4%):
$$= \frac{85 \times 1.054}{r_e - 0.054}$$

---

### Effects of Leverage Changes on FCFE — Two-Stage Impact

| Timing | Effect on FCFE |
|--------|----------------|
| **Year debt is issued** | **+** FCFE increases by the amount of new debt issued (net borrowing) |
| **Subsequent years** | **−** FCFE decreases by after-tax interest expense on that debt |

---

### Exam Tips

- **Non-articulation**: when balance sheet ΔWC ≠ statement of cash flows ΔWC — usually due to M&A activity or FX translation
- **FCFE and dividends are driven by the same economic forces** but rarely equal — high-growth firms have low dividends AND low FCFE
- **Dividends/buybacks/issuances do NOT appear in FCFF or FCFE formulas** — they're *uses*, not sources
- **Preferred dividends**: added back for FCFF (like after-tax interest); preferred dividends are **not tax-deductible**
- **EBITDA is a poor FCFF proxy**: ignores taxes, depreciation tax shield, CapEx, and WC investment — and uses wrong discount rate basis (pre-tax vs. after-tax)
- **Net income is a poor FCFE proxy**: ignores NCC, CapEx, WC investment, and net borrowing
- **New debt issuance**: increases FCFE in the issuance year; reduces FCFE in subsequent years via interest expense
- **"Special case" NI = FCFE**: only when CapEx = Depreciation, ΔWC = 0, and net borrowing = 0