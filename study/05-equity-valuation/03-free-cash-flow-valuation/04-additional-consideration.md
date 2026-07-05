## Summary: Additional Considerations in Computing FCFF (CFA Level II)

---

### IFRS vs. US GAAP — Classification of Interest and Dividends

| Item | IFRS | US GAAP |
|------|------|---------|
| Interest received | Operating **or** investing | Operating |
| Interest paid | Operating **or** financing | Operating |
| Dividends received | Operating **or** investing | Operating |
| Dividends paid | Operating **or** financing | **Financing** |

**Critical implication for FCFF = CFO + Int(1-t) - FCInv:**

| Scenario | Add back interest? |
|----------|-------------------|
| Interest paid classified as **operating** (US GAAP always; IFRS sometimes) | **Yes** — add back $Int(1-t)$ |
| Interest paid classified as **financing** (IFRS only) | **No** — already excluded from CFO |

> **Always check the cash flow statement classification before mechanically adding back interest.**

---

### Noncash Adjustments — Add Back or Subtract?

| Item | Adjustment to NI for FCFF |
|------|---------------------------|
| Depreciation expense | **Add back** |
| Amortization / impairment of intangibles | **Add back** |
| Restructuring charges (expense) | **Add back** |
| Restructuring charges (income from reversal) | **Subtract** |
| Amortization of bond **discount** | **Add back** |
| Amortization of bond **premium** | **Subtract** |
| Losses on non-operating activity | **Add back** |
| Gains on non-operating activity | **Subtract** |
| Deferred taxes | **Add back, but with caution** |

---

### Gains/Losses on Asset Sales — Why Remove Them

**Two reasons:**
1. **Not an operating activity** — belongs in investing section
2. **Reported gain/loss ≠ cash flow** — the cash flow is the **total sale proceeds**, not just the gain/loss

**Example**: Equipment with book value €60,000 sold for €100,000:
- Income statement shows: €40,000 **gain** (added to NI)
- Cash flow statement: **subtract** the €40,000 gain from NI when deriving CFO
- The full €100,000 proceeds appear in **investing activities**

> If sold at a **loss** (e.g., for €40,000, book value €60,000 → €20,000 loss): **add back** the loss to NI.

---

### Deferred Taxes — Special Attention Required

**Core issue**: Deferred taxes arise from **timing differences** between book income and taxable income.

| Situation | Treatment |
|-----------|-----------|
| **Deferred tax liability** expected to **reverse soon** | Do NOT add back — not persistent |
| **Deferred tax liability** can be **indefinitely deferred** (growing company) | **Add back** is warranted — but be aware future payment may eventually occur |
| **Deferred tax asset** (taxable income > book income) | **Subtract** from NI for CFO — unless expected to reverse soon (then don't subtract) |

**Key principle for forecasting**: Only adjust for deferred taxes that reflect **persistent** patterns, not one-time timing differences.

---

### Employee Stock Options (Share-Based Compensation)

| Issue | Treatment |
|-------|----------|
| **Option expense** | Noncash charge — already in NI, no separate add-back needed for CFO derivation |
| **Cash received on exercise** | **Financing** cash flow (not operating) |
| **Tax benefit from option exercise** | Portion classified as **financing** cash flow under both IFRS and GAAP |
| **Persistence** | If option-related cash flows are not expected to continue, **exclude from forecasts** |
| **Share count for valuation** | Use **expected future shares outstanding** (including likely option exercises), not just current shares |

---

### Sustainability of Working Capital Effects — Duplico Holdings Example

#### Part 1: Depreciation vs. CapEx Trend

| Year | CapEx | Depreciation | CapEx/Depreciation |
|------|-------|-------------|-------------------|
| 2020 | €997.8M | €235.4M | **4.2×** |
| 2021 | €897.2M | €277.7M | 3.2× |
| 2022 | €317.6M | €309.2M | **1.03×** |

**Implication of rising future depreciation (all else equal):**
- **Net income** ↓ by $Depreciation \times (1-t)$ (after-tax effect)
- **CFO** — depreciation is added back **in full**, so the **net effect on CFO** is:
$$\Delta CFO = \text{Depreciation} \times \text{Tax rate}$$
→ Rising depreciation is a **negative for NI** but a **positive for CFO** (or neutral at worst, if company has a loss).

#### Part 2: Working Capital Effects on FCFE (2022)

| Account | Change | Effect on Cash Flow |
|---------|--------|---------------------|
| Inventory (increase) | Use of cash | **Negative** |
| Trade receivables (increase) | Use of cash | **Negative** |
| Trade payables (increase) | Source of cash | **Positive** |
| Accrued expenses (increase) | Source of cash | **Positive** |
| Other creditors (increase) | Source of cash | **Positive** |

**Sustainability concern**: Declining asset balances (inventory, receivables) or increasing liability balances (payables) **cannot continue indefinitely** — at the extreme, balances hit zero.

**For a growing company like Duplico**: Working capital requirements should **grow** in line with the business — historical favorable working capital changes (e.g., large increases in payables/accrued expenses in 2020-2021) may **not be sustainable** as growth continues.

---

### Exam Tips

- **IFRS interest paid as financing** → do NOT add back when starting from CFO (already excluded)
- **Gains subtract, losses add back** — and remember full sale proceeds go in investing activities
- **Deferred taxes**: only add back if **persistent**; don't add back near-term reversals
- **Stock option cash flows**: exercise proceeds and related tax benefits are **financing** activities — exclude from FCFF if not expected to persist
- **Rising depreciation**: hurts NI by $D\&A \times (1-t)$, but **increases CFO** by $D\&A \times t$ — opposite directions
- **Working capital trends**: assess **sustainability** — declining balances can't continue forever; growing companies need growing working capital
- **CapEx vs. Depreciation ratio**: useful indicator of whether a company is in growth mode (CapEx >> Depreciation) or maintenance mode (CapEx ≈ Depreciation)