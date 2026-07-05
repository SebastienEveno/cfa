---
layout: page
title: Computing FCFF from the Cash Flow Statement
permalink: /study/05-equity-valuation/03-free-cash-flow-valuation/03-computing-fcff-from-cash-flow-statement/
prev: /cfa/study/05-equity-valuation/03-free-cash-flow-valuation/02-computing-fcff-from-net-income/
next: /cfa/study/05-equity-valuation/03-free-cash-flow-valuation/04-additional-consideration/
---
## Summary: Computing FCFF from the Cash Flow Statement (CFA Level II)

---

### The CFO-Based FCFF Formula

$$\boxed{FCFF = CFO + Int(1-t) - FCInv}$$

**Why simpler than the NI-based formula**: CFO already incorporates:
- ✅ Depreciation/amortization add-back
- ✅ Working capital investment adjustments

So only **two adjustments** are needed from CFO:
1. **+ After-tax interest** (add back what was deducted)
2. **− Capital expenditures** (FCInv)

---

### Interest Paid — Accounting Treatment Matters

| Standard | Treatment of Interest Paid | Impact on Formula |
|----------|--------------------------|-------------------|
| **US GAAP** | Must be in **operating** CF | Interest is in CFO → add back $Int(1-t)$ |
| **IFRS** | Can be **operating OR financing** | Check where interest is classified first |

> If interest paid is classified as **financing** under IFRS → it is NOT already deducted from CFO → **do not add it back**.

---

### Worked Example (Cane Distribution, from CFO)

| Item | 2018 | 2019 | 2020 |
|------|------|------|------|
| CFO | $86.52 | $145.18 | $159.69 |
| + $Int \times (1-0.30)$ | $10.98 | $12.08 | $13.28 |
| − FCInv (PP&E) | ($0) | ($50.00) | ($55.00) |
| **= FCFF** | **$97.50** | **$107.26** | **$117.97** |

✅ Same result as the NI-based calculation — confirms consistency.

---

### Comparing the Two Starting Points

| | From Net Income | From CFO |
|--|----------------|----------|
| **Formula** | $NI + NCC + Int(1-t) - FCInv - WCInv$ | $CFO + Int(1-t) - FCInv$ |
| **D&A adjustment** | ✅ Explicit (+D&A) | Already in CFO |
| **WCInv adjustment** | ✅ Explicit (−WCInv) | Already in CFO |
| **Int(1-t) add-back** | ✅ Required | ✅ Required (if in CFO) |
| **FCInv subtraction** | ✅ Required | ✅ Required |
| **Complexity** | Higher | Lower |

---

### The Indirect Method (Standard Presentation)

Most companies present the cash flow statement using the **indirect method**:
$$\text{Net income} \to +\text{D\&A} \pm \Delta\text{Working capital} = CFO$$

This means CFO already captures all the NCC and WCInv adjustments — making it the most convenient starting point for FCFF calculation.

---

### Exam Tips

- **CFO → FCFF**: only two adjustments — add $Int(1-t)$, subtract FCInv
- **NI → FCFF**: four adjustments — add NCC, add $Int(1-t)$, subtract FCInv, subtract WCInv
- **Both give the same FCFF** — use whichever starting point is available
- **IFRS caution**: check where interest is classified before adding it back — if already in financing CF, don't add back
- **FCInv** = net of asset purchases minus proceeds from asset sales (found in investing activities section)
- **Indirect method**: most common CFO presentation; starts from NI and works down