---
layout: page
title: Computing FCFE from FCFF
permalink: /study/05-equity-valuation/03-free-cash-flow-valuation/05-computing-fcfe-from-fcff/
prev: /cfa/study/05-equity-valuation/03-free-cash-flow-valuation/04-additional-consideration/
next: /cfa/study/05-equity-valuation/03-free-cash-flow-valuation/06-fcff-from-ebitda/
---
## Summary: Computing FCFE from FCFF (CFA Level II)

---

### Core Relationship Between FCFF and FCFE

$$\boxed{FCFE = FCFF - Int(1-t) + \text{Net borrowing}}$$

Equivalently (reverse direction):
$$\boxed{FCFF = FCFE + Int(1-t) - \text{Net borrowing}}$$

**Net borrowing** = New debt issued − Debt repaid (over the period)

---

### Why These Adjustments?

| Adjustment | Reason |
|-----------|--------|
| **Subtract $Int(1-t)$** | FCFF belongs to all capital providers; removing after-tax interest leaves only the cash flow available to equity |
| **Add net borrowing** | New debt proceeds become available to equity holders; debt repayments reduce what's available |

---

### All Four FCFE Formulas (Starting Points)

| Starting Point | Formula |
|----------------|---------|
| **From FCFF** | $FCFE = FCFF - Int(1-t) + \text{Net borrowing}$ |
| **From Net Income** | $FCFE = NI + NCC - FCInv - WCInv + \text{Net borrowing}$ |
| **From CFO** | $FCFE = CFO - FCInv + \text{Net borrowing}$ |

> Note: FCFE from NI/CFO is **simpler** than FCFF — no interest adjustment needed (interest already embedded in NI/CFO, and FCFE doesn't need to "add it back" since it belongs to equity only).

---

### FCFE ≠ Dividends (Important Distinction)

**FCFE represents what a company *could* pay out**, but actual dividends often differ because:

- Dividend policy is a **discretionary board decision**
- Companies prefer **smooth, gradually increasing dividends** (dividend smoothing)
- Companies avoid cutting dividends even when profitability declines
- **Earnings (and FCFE) are more volatile than dividends**

---

### Worked Example — Cane Distribution (from Earlier FCFF Calculation)

| Year | FCFF | − Int(1-t) | + Net borrowing | = FCFE |
|------|------|-----------|-----------------|--------|
| 2018 | $97.50 | ($10.98) | $22.40 | **$108.92** |
| 2019 | $107.26 | ($12.08) | $24.64 | **$119.82** |
| 2020 | $117.97 | ($13.28) | $27.10 | **$131.79** |

---

### Comprehensive Example — Pitts Corporation (Example 5)

#### Step 1: FCFF from Net Income

$$FCFF = NI + NCC + Int(1-t) - FCInv - WCInv$$

| Component | Amount ($M) |
|-----------|------------|
| Net income | $240 |
| + Depreciation (NCC) | $300 |
| + Interest × (1-0.40) | $60 |
| − FCInv (capex) | ($400) |
| − WCInv | ($45) |
| **= FCFF** | **$155** |

**WCInv calculation:**
$$WCInv = \Delta AR + \Delta Inventory - \Delta AP - \Delta Accrued$$
$$= (600-560) + (440-410) - (300-285) - (150-140) = 40+30-15-10 = \$45$$

> **Excluded from WC**: cash (the item being explained) and notes payable (financing item)

#### Step 2: Net Borrowing Calculation

| Item | Change |
|------|--------|
| Notes payable: $250M − $200M | +$50M |
| Long-term debt: $890M − $865M | +$25M |
| **Net borrowing** | **$75M** |

#### Step 3: FCFE — Three Equivalent Calculations

**From FCFF:**
$$FCFE = 155 - 60 + 75 = \mathbf{\$170M}$$

**From Net Income:**
$$FCFE = 240 + 300 - 400 - 45 + 75 = \mathbf{\$170M}$$

**From CFO ($495M):**
$$FCFE = 495 - 400 + 75 = \mathbf{\$170M}$$

✅ All three methods converge to **$170 million**.

---

### Unusual Result: FCFE > FCFF

In this example: **FCFE ($170M) > FCFF ($155M)**

**Normal expectation**: FCFE < FCFF (since FCFE excludes the portion going to debtholders)

**Why reversed here**: **Large net borrowing ($75M)** more than offset the after-tax interest deduction ($60M):
$$\text{Net effect} = -60 + 75 = +15$$

→ When a company **borrows heavily** in a given period, FCFE can temporarily **exceed** FCFF.

---

### Quick Reference — All FCFF/FCFE Formulas

| | Formula |
|--|---------|
| FCFF from NI | $NI + NCC + Int(1-t) - FCInv - WCInv$ |
| FCFF from CFO | $CFO + Int(1-t) - FCInv$ |
| FCFE from FCFF | $FCFF - Int(1-t) + \text{Net borrowing}$ |
| FCFE from NI | $NI + NCC - FCInv - WCInv + \text{Net borrowing}$ |
| FCFE from CFO | $CFO - FCInv + \text{Net borrowing}$ |
| FCFF from FCFE | $FCFE + Int(1-t) - \text{Net borrowing}$ |

---

### Exam Tips

- **FCFE from CFO is the simplest formula**: $CFO - FCInv + \text{Net borrowing}$ — only two adjustments
- **Net borrowing**: sum changes in **all interest-bearing debt** (notes payable + long-term debt), not just long-term debt
- **FCFE typically < FCFF**, but **can exceed it** in years with large net new borrowing
- **All starting points (NI, CFO, FCFF) should give the same FCFE** — useful for checking work
- **WCInv excludes cash and short-term debt** (notes payable) — same rule as for FCFF
- **FCFE ≠ actual dividends** — dividend smoothing means FCFE and dividends diverge, sometimes significantly
- When asked "calculate FCFE from FCFF" — always check if interest and net borrowing are given directly or need to be derived from balance sheet changes