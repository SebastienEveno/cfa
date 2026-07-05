## Summary: Accounting & International Considerations in Residual Income Models (CFA Level II)

---

### The Core Problem: Clean Surplus Violations

**Clean surplus relation**: $B_t = B_{t-1} + E_t - D_t$

**Violation**: When items bypass the income statement and go **directly to equity** as Other Comprehensive Income (OCI).

**Impact**: Book value is stated correctly (includes AOCI), but **net income and ROE are misstated** from an RI perspective → distorted residual income estimates.

---

### Common Clean Surplus Violations (OCI Items)

| OCI Item | IFRS | US GAAP |
|---------|------|---------|
| Unrealized gains/losses on certain financial instruments | ✅ | ✅ |
| Foreign currency translation adjustments | ✅ | ✅ |
| Pension adjustments | ✅ | ✅ |
| Hedging gains/losses | ✅ | ✅ |
| **Fixed asset revaluation surplus** | ✅ | ❌ (not permitted) |
| **Fair value changes from own credit risk on liabilities** | ✅ | ❌ |

---

### When Do Violations Matter?

**Bauman's balancing argument** (theoretical): Aggressive accounting → higher book value + lower future earnings → effects cancel out in RI model.

**Why it breaks down in practice:**
1. Clean surplus doesn't hold (OCI bypasses income)
2. Analysts use **historical earnings/ROE** to forecast future — if OCI is consistently positive or negative, forecasts are systematically biased

> **Key rule**: Bias is introduced only if the **present value of clean surplus violations does NOT net to zero** across periods.

---

### Aggressive Accounting and RI Models

**Example — capitalized vs. expensed:**
- Expensed: NI = $200K, BV = $1,000K → ROE = 20%
- Capitalized: NI = $250K, BV = $1,050K → ROE = 23.81%

**Problem**: If analyst uses inflated historical ROE to forecast future ROE → **overstates future RI** → **overestimates value**.

**Over time for stable company**: Capitalized items eventually amortized → NI normalizes, but BV remains inflated → ROE declines back.

**For growing company**: Continuously capitalizing growing expenditures → inflated ROE can persist → ongoing overvaluation risk.

---

### OCI Forecast Scenarios (Exhibit 13)

Three forecasts all assume ROE = 12%, but differ in OCI assumptions:

| Forecast | OCI Assumption | Book Value Effect | RI Growth (t→t+1) |
|---------|---------------|-----------------|-----------------|
| **A** | No future OCI | AOCI stable | **12%** (consistent with ROE) |
| **B** | OCI continues negative | AOCI increasingly negative → ↓ BV | **2.2%** (RI grows slower than expected) |
| **C** | OCI reverses positive | AOCI → 0, ↑ BV | **21.8%** (RI grows faster than expected) |

**Key insight**: Only Forecast A (no future OCI) correctly reflects the 12% ROE → 12% growth relationship. OCI distorts the relationship between assumed ROE and actual RI growth.

---

### The Correct Approach: Adjust for OCI

**If OCI is significant and not expected to net to zero:**

$$RI_t = (NI_t + OCI_t) - r \times B_{t-1}$$

**Mannistore Example (Example 14):**

| Year | RI (NI only) | RI (NI + OCI) |
|------|-------------|--------------|
| 1 | $1.14 | $1.14 |
| 2 | $1.45 | **$2.45** (OCI = $1.00 in Year 2) |
| 3–5 | Same | Same |

- RI model with **NI only** (ignores OCI) → incorrect value
- RI model with **NI + OCI** → **matches DDM value** ✅

---

### Growth Rate of Residual Income ≠ Growth Rate of Net Income

**Example 14, Part 4:**
- Net income grows 8% (Year 5 → 6)
- RI in Year 6 = $4.92 − (22.04 × 10%) = $4.92 − $2.20 = **$2.72**
- vs. Year 5 RI = $2.77
- **RI growth = −2%** despite 8% net income growth

**Why?** Book value also grows → equity charge grows → RI grows slower than NI (or may even decline).

---

### Nokia and SAP — Real-World Examples

**Nokia (IFRS)**: 2018 OCI items include:
- Translation differences: +€341M
- Pension re-measurements: +€293M
- Fair value financial instruments: −€38M
- Net investment/cash flow hedges: −€101M

**SAP (IFRS/comparable)**: 2018 OCI = +€887M (primarily from "Other components of equity")

**Analytical implication**: If positive translation adjustments are expected to continue, analyst may need to **adjust ROE upward** for future forecasts — but if expected to reverse, **no adjustment** warranted.

---

### Other Accounting Issues for RI Models

| Issue | Effect | Adjustment |
|-------|--------|-----------|
| **Off-balance-sheet liabilities** | Understates true debt, overstates equity | Add to liabilities, reduce book equity |
| **Intangible assets (internally generated)** | Not on balance sheet → understates BV | Capitalize R&D, brand value if material |
| **Non-recurring items** | Distort ROE and earnings | Normalize earnings (remove one-time items) |
| **Aggressive revenue recognition** | Inflates NI → overstates ROE | Reduce revenues/NI to sustainable level |
| **Expense capitalization** | Inflates NI and BV | Reverse capitalizations if inappropriate |

---

### Exam Tips

- **Clean surplus violation = OCI bypassing income statement** → distorts RI if not adjusted
- **When OCI expected to persist** → incorporate into RI: use (NI + OCI) − equity charge
- **When OCI expected to net to zero** → less urgent to adjust (Frankel & Lee)
- **ROE from aggregate level** is preferred: total NI / total equity (not per-share) — avoids distortion from share issuance/repurchases
- **RI growth ≠ NI growth** — equity charge grows with book value → RI grows more slowly
- **Nokia/SAP**: use statement of changes in equity to identify OCI amounts bypassing income statement
- **Aggressive accounting** (capitalizing vs. expensing): inflates current NI and BV → if analyst naively uses historical ROE → overestimates future RI → overvalues stock
- **Best practice**: examine equity section, AOCI, comprehensive income statement carefully before applying RI model