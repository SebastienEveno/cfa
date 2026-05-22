---
layout: page
title: Estimating the Cost of Debt
permalink: /study/04-corporate-issuers/03-cost-of-capital/03-estimating-cost-of-debt/
prev: /cfa/study/04-corporate-issuers/03-cost-of-capital/02-cost-of-capital-factors/
next: /cfa/study/04-corporate-issuers/03-cost-of-capital/04-excess-risk-premium/
---

---

### Four Key Factors Determining the Method Used

| Factor | Question to Ask |
|--------|----------------|
| **Type of debt** | Publicly traded? Private? Bank loan? Lease? |
| **Liquidity** | How frequently does it trade? |
| **Credit rating** | Does a rating exist? |
| **Currency** | Domestic or foreign currency? |

---

### Method 1: Traded Debt (Straight Debt)

- Use the **yield to maturity (YTM)** on existing publicly traded debt
- Prefer **longest maturity** bond as benchmark for long-term cost of debt
- If shorter-term bonds are **more liquid and trade more frequently** → use those instead (more reliable price signal)
- YTM = current market cost of issuing new debt with similar features

---

### Method 2: Non-Traded / Illiquid Debt

Two sub-approaches depending on whether a credit rating exists:

#### If credit rating exists:
- **Matrix pricing** — find YTMs of other bonds with similar maturity and credit rating → apply to subject company

#### If no credit rating exists:
- **Synthetic credit rating** — use financial ratios (IC ratio, D/E ratio) to infer a likely rating class
- Then apply YTM or credit spread for that inferred rating + benchmark risk-free rate:

$$r_d = r_f + \text{Credit spread (for inferred rating)}$$

> **Exam tip (Gamma Company example)**: When IC ratio and D/E ratio point to **different rating classes**, use trend analysis and judgment — don't mechanically apply one ratio alone.

**Important nuance**: A company's overall credit rating may differ from ratings on individual debt issues — specific bond features (collateral, seniority, convertibility) can cause different bonds from the same issuer to carry different ratings.

---

### Method 3: Bank Debt

- Use the **interest rate on recently issued new bank debt** as the cost of debt estimate
- Only reliable if: market conditions haven't materially changed AND company's risk profile is stable since issuance

**Amortizing vs. Non-amortizing:**

| Loan Type | Default Risk | Cost of Debt |
|-----------|-------------|-------------|
| **Amortizing** (principal repaid over time) | Lower | Lower |
| **Non-amortizing / bullet** (principal at maturity) | Higher | Higher |

---

### Method 4: Leases

**Finance (capital) lease** = treated like asset ownership; has an implicit interest rate.

**Rate Implicit in the Lease (RIIL)** — solve for the discount rate where:

$$PV(\text{lease payments}) + PV(\text{residual value}) = FV(\text{leased asset}) + \text{Lessor's direct costs}$$

If residual value and lessor costs are **unknown** to the lessee → use the **Incremental Borrowing Rate (IBR)** = rate the company would pay on a collateralized loan of the same term.

**Key characteristics of leases:**
- Secured financing → typically **lower cost than unsecured borrowing**
- Lower than equity cost → usually accretive decision
- But increases **financial leverage** on the balance sheet

**Tax treatment**: If interest on finance lease is tax-deductible → apply after-tax adjustment to cost.

**Worked example (G&S Airlines):**
- Lease: 15-year, €9M annual payments, FV = €100M, residual = €10M, lessor costs = €5M
- Implied RIIL = **4.08%** vs. unsecured IBR of 6% and equity cost of 11%
- → Leasing is the **lowest-cost financing option**

---

### International Considerations: Country Risk Premium (CRP)

When estimating cost of debt for a foreign/emerging market company:

$$r_d = r_f + \text{Credit spread} + \text{Country risk premium}$$

**Country Risk Rating (CRR)** reflects:
- Economic conditions
- Political risk
- Exchange rate risk
- Securities market development and regulation

**How to derive CRP:**
- Compare median interest rate for the country's risk rating vs. a benchmark country (rating = 1, CRP = 0%)
- Example: Country C (rating 2, median rate 4.5%) vs. Country A benchmark (4.0%) → **CRP = 0.5%**

| Country | Risk Rating | Median Rate | CRP |
|---------|------------|------------|-----|
| A (benchmark) | 1 | 4.0% | 0.0% |
| C | 2 | 4.5% | 0.5% |
| B | 5 | 7.0% | 3.0% |
| D | 8 | 15.5% | 11.5% |

---

### Master Summary: Method Selection

| Debt Type | Primary Method | Fallback |
|-----------|--------------|---------|
| Traded straight debt | YTM (longest or most liquid maturity) | — |
| Non-traded, rated | Matrix pricing | — |
| Non-traded, unrated | Synthetic rating → YTM or spread | Trend/judgment for conflicting ratios |
| Bank debt | Rate on recent new debt | Synthetic rating approach |
| Finance lease | RIIL (solve from lease cash flows) | IBR or non-traded method |
| International/EM | Benchmark rate + CRP | Country risk rating table |

---

### Exam Tips

- **YTM on traded debt** = most direct and reliable estimate
- **Synthetic rating** requires judgment when ratios conflict — look at **trends**, not just current values
- **Leases are secured** → typically **lower cost than unsecured borrowing**
- If a company has **reached its interest deduction limit** → **no tax adjustment** to cost of debt (no further tax benefit available)
- CRP is **additive** to the standard credit spread in international settings
- Always use **marginal/current market rates**, not historical coupon rates, when estimating cost of debt