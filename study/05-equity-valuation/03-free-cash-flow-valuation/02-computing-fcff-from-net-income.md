---
layout: page
title: Computing FCFF from Net Income
permalink: /study/05-equity-valuation/03-free-cash-flow-valuation/02-computing-fcff-from-net-income/
prev: /cfa/study/05-equity-valuation/03-free-cash-flow-valuation/01-introduction/
next: /cfa/study/05-equity-valuation/03-free-cash-flow-valuation/03-computing-fcff-from-cash-flow-statement/
---
## Summary: Computing FCFF from Net Income (CFA Level II)

---

### The Core FCFF Formula (from Net Income)

$$\boxed{FCFF = NI + NCC + Int(1-t) - FCInv - WCInv}$$

| Component | Symbol | Direction | Explanation |
|-----------|--------|-----------|-------------|
| Net income | $NI$ | Base | After-tax, after-interest starting point |
| Noncash charges | $NCC$ | **+** | D&A reduces NI but is not a cash outflow |
| After-tax interest | $Int(1-t)$ | **+** | Add back because interest is a cash flow to debt providers |
| Fixed capital investment | $FCInv$ | **−** | Cash spent on PP&E / intangibles / acquisitions |
| Working capital investment | $WCInv$ | **−** | Net increase in operating working capital |

---

### Why Each Adjustment Is Made

#### + Noncash Charges (NCC)
- **Depreciation**: reduces NI but no cash out → add back
- **Amortization**: same logic → add back
- Other noncash items (restructuring provisions, impairments, etc.) depend on whether they reduced cash

#### + After-Tax Interest $Int(1-t)$
- Interest was deducted to arrive at NI
- But interest is a **cash flow to debt providers** → must be included in FCFF (which belongs to ALL capital providers)
- Use after-tax because WACC is also after-tax (consistency requirement)
- **Preferred dividends**: same logic — add back if deducted from NI to arrive at net income available to common

#### − Fixed Capital Investment (FCInv)
- Capital expenditures on PP&E, intangibles
- Net of proceeds from asset disposals
- Cash acquisitions of companies can be treated as CapEx (conservative)
- **Non-cash acquisitions** (stock/debt for PP&E): don't affect historical FCFF but relevant for forecasting

#### − Working Capital Investment (WCInv)
$$WCInv = \Delta(\text{Operating current assets} - \text{Operating current liabilities})$$

**Exclude from working capital:**
- **Cash and cash equivalents** (that's what we're trying to explain)
- **Notes payable and current portion of long-term debt** (financing items, not operating)

**Include:**
- Accounts receivable, inventory, other operating current assets
- Accounts payable, accrued liabilities, other operating current liabilities

---

### Working Example (Cane Distribution)

**FCFF Calculation (in thousands):**

| Item | 2018 | 2019 | 2020 |
|------|------|------|------|
| Net income | $97.52 | $107.28 | $118.00 |
| + Depreciation | $45.00 | $49.50 | $54.45 |
| + Int × (1−t) = Int × 0.70 | $10.98 | $12.08 | $13.28 |
| − FCInv | ($0) | ($50.00) | ($55.00) |
| − WCInv | ($56.00) | ($11.60) | ($12.76) |
| **= FCFF** | **$97.50** | **$107.26** | **$117.97** |

**Working capital details:**
- WC = (AR + Inventory) − Accounts payable
- **Exclude** cash, notes payable, current LTD
- 2018 WCInv = $116 − $60 = **$56**
- 2019 WCInv = $127.60 − $116 = **$11.60**
- 2020 WCInv = $140.36 − $127.60 = **$12.76**

---

### Key Conceptual Points

| Issue | Detail |
|-------|--------|
| **NCC sign** | If noncash decreases > noncash increases → net add-back is positive (usual case) |
| **Asset disposal** | Reduces FCInv (cash inflow from selling fixed assets) |
| **Non-cash acquisitions** | Don't affect historical FCFF but may require future cash → include in forecasts |
| **Preferred dividends** | Add back to NI if preferred dividends were deducted to get to net income available to common |
| **WACC consistency** | If using after-tax WACC → use after-tax interest in FCFF. If pretax WACC → no tax adjustment to interest |

---

### Exam Tips

- **FCFF formula from NI**: $NI + NCC + Int(1-t) - FCInv - WCInv$ — memorize exactly
- **Always add back depreciation** — most common NCC
- **Always add back after-tax interest** — critical distinguisher between FCFF and FCFE
- **Working capital**: exclude cash and short-term debt — operating items only
- **Net capital expenditure**: gross capex minus proceeds from asset sales
- **Non-cash charges**: add back if they reduced NI without using cash
- **If preferred dividends deducted from NI**: add back for FCFF (preferred = capital provider)