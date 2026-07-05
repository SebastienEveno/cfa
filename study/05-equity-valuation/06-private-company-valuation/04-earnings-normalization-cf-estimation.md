---
layout: page
title: Earnings Normalization & Cash Flow Estimation
permalink: /study/05-equity-valuation/06-private-company-valuation/04-earnings-normalization-cf-estimation/
prev: /cfa/study/05-equity-valuation/06-private-company-valuation/03-private-company-valuation-areas-focus/
next: /cfa/study/05-equity-valuation/06-private-company-valuation/05-private-company-discount-rates/
---
## Summary: Earnings Normalization & Cash Flow Estimation (CFA Level II)

---

### Financial Statement Quality for Private Companies

| Statement Type | Assurance Level | Typical Adjustment Needed |
|---------------|----------------|--------------------------|
| **Audited** | Highest | Least adjustment |
| **Reviewed** | Moderate (opinion letter, limited assurance) | Some adjustment |
| **Compiled** | Lowest (no auditor opinion) | Most adjustment |

**Goal**: Adjust reported financials to estimate **normalized earnings** — what the company would earn if operated efficiently by a new owner.

---

### Common Earnings Normalization Adjustments

#### Upward Adjustments (Earnings too LOW as reported)
- **Above-market executive compensation** → add back excess over market rate
- **Non-operating assets** → remove associated expenses (ranch, condo, personal aircraft, luxury vehicles)
- **Personal expenses charged to company** → remove entertainment, residences, personal use
- **Life insurance premiums, shareholder loans** → review and adjust

#### Downward Adjustments (Earnings too HIGH as reported)
- **Below-market management compensation** → add realistic market salary as expense
- **Related-party transactions below fair market value** → add missing costs
- **Omitted rental expenses** (using related-party property) → add market rent

#### Real Estate Treatment
- **Company owns property**: separate operating business from real estate; add **market rental charge** to operating expenses → real estate becomes non-operating asset
- **Company uses related-party property free**: add **market rent** to normalize costs

---

### The FLI Example (Example 1) — Key Adjustments

**Two normalizations:**
1. **CEO compensation**: SGD 1.5M → SGD 500K (market rate) → **save SGD 1.0M in SG&A**
2. **Non-operating assets** (ranch + condo): Remove SGD 300K SG&A + SGD 100K D&A

**Result:**

| | As Reported | Normalized |
|--|------------|-----------|
| SG&A | SGD 5.0M | SGD 3.7M |
| EBITDA | SGD 15.0M | **SGD 16.3M** |
| EBIT | SGD 14.0M | **SGD 15.4M** |
| Operating income after taxes | SGD 11.62M | **SGD 12.78M** |

---

### Related-Party Transaction Issues

| Situation | Adjustment Needed |
|-----------|-----------------|
| Above-market compensation to controlling shareholder | ↓ Reduce expense to market rate |
| Below-market compensation to owner-manager | ↑ Add market salary as expense |
| Company buys goods/services from related entity below market | ↑ Add difference to cost |
| Company uses related-party real estate without paying rent | ↑ Add market rental charge |

---

### Cash Flow Estimation for Private Companies

**Two relevant FCF definitions:**
- **FCFF**: Enterprise-level → use for firm valuation (then subtract debt)
- **FCFE**: Equity-level → use for direct equity valuation

**Key challenges specific to private companies:**

| Challenge | Detail |
|-----------|--------|
| **Nature of interest** | Minority vs. controlling stake → different cash flow assumptions |
| **Uncertain future outcomes** | IPO, acquisition, continued private operation, or bankruptcy all possible |
| **Early-stage uncertainty** | Regulatory approvals, proof of concept milestones |
| **Management bias** | May overstate values (impairment testing) or understate (stock option grants) |

**Solution for high uncertainty**: **Scenario analysis** with probability-weighted outcomes.

---

### Nano Beta Scenario Analysis (Example 3)

**Setup:**
- WACC = 15%, constant growth DCF
- Two possible outcomes if approved:
  - **Broad applicability**: FCFF = €200M, g = 5%
  - **Limited applicability**: FCFF = €50M, g = 2%

**Terminal values at t=2:**
$$V_{broad} = \frac{200 \times 1.05}{0.15 - 0.05} = \mathbf{€2.1B}$$
$$V_{limited} = \frac{50 \times 1.02}{0.15 - 0.02} = \mathbf{€392.3M}$$

**Probability-weighted future value (at t=2):**
- P(broad) = 80% × 40% = **32%**
- P(limited) = 80% × 40% = **32%**

$$V_{t=2} = 0.32 \times 2,100M + 0.32 \times 392.3M = \mathbf{€797.5M}$$

**Discount to today:**
$$V_0 = \frac{797.5M}{(1.15)^2} = \mathbf{€603M}$$

---

### Knowledge Check Answers

**Q1 (Xin takes dividend instead of compensation):**
→ **B. FLI earnings normalized lower** — Without CEO salary, FLI understates a real operating cost. Normalizing would ADD market-rate compensation expense → lower normalized earnings.

**Q2 (FLI uses owner's family building at no charge):**
→ **C. Add market rental expense** — Even though FLI doesn't own the building, it receives a benefit that should be reflected as a real cost. Add market rental rate → reduces normalized earnings.

**Q3 (Revised Nano Beta probabilities — 60% preliminary, 60% broad, 20% limited):**
- P(broad) = 60% × 60% = **36%**
- P(limited) = 60% × 20% = **12%**
- New future value = 0.36 × 2,100M + 0.12 × 392.3M = **€804.1M**
- Discounted: 804.1M / (1.15)² = **€608M**
- Change: €608M − €603M = **+€5M ≈ EUR 4.2M increase**
→ **B. Increase of EUR 4.2 million**

---

### Exam Tips

- **Above-market CEO pay**: add back excess → increases normalized earnings
- **Below-market CEO pay**: add market salary as expense → decreases normalized earnings
- **Related-party real estate with no rent**: always add market rental charge → decreases earnings
- **Non-operating assets**: remove all associated revenues/expenses; treat as separate non-operating value
- **Scenario analysis**: use when future has discrete probability-weighted outcomes (biotech approval, IPO/acquisition/bankruptcy scenarios)
- **Management bias**: may overstate (impairment) or understate (option grants) → analyst must independently assess