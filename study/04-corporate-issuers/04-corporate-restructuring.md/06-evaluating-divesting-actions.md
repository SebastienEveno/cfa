---
layout: page
title: Evaluating Divestment Actions
permalink: /study/04-corporate-issuers/04-corporate-restructuring/06-evaluating-divesting-actions/
prev: /cfa/study/04-corporate-issuers/04-corporate-restructuring/05-evaluating-investment-actions/
next: /cfa/study/04-corporate-issuers/04-corporate-restructuring/07-evaluating-restructuring-actions/
---

---

### Key Analytical Context

Companies often announce **strategic reviews** before a specific action — analysts must:
- Estimate potential outcomes of different scenarios
- Judge the **likelihood** of each scenario
- Recognize that markets **immediately price in risk-adjusted expectations** upon review announcement

---

### The Benefit Ltd. Case — Full Walkthrough

**Company profile:**
- Two segments: **Consulting** (mature, profitable) + **BenefitsExchange** (fast-growing, loss-making SaaS)
- Triggered by: **activist investor** with 8% stake pushing for value maximization
- Two scenarios under review: **sell** or **spin off** the Consulting segment

---

### Step 1: Identify the Conglomerate Discount

**Sum-of-the-parts (SOTP) valuation** compares the value of each segment independently vs. the current consolidated EV.

#### Comparable Company Multiples:
- **Consulting peers**: Median EV/EBITDA = **9×**
- **BenefitsExchange peers**: Median EV/Sales = **12×**

#### SOTP Valuation I (median multiples):

| Segment | Metric | Multiple | EV |
|---------|--------|---------|-----|
| Consulting (adj. for corp costs) | EBITDA = 80 | 9× | ZAR 721M |
| BenefitsExchange | Sales = 75 | 12× | ZAR 900M |
| **Total SOTP EV** | | | **ZAR 1,621M** |
| Current trading EV | | | ZAR 1,437M |
| **Conglomerate discount** | | | **ZAR 184M** |

#### SOTP Valuation II (growth-matched multiple for BenefitsExchange):

BenefitsExchange LTM growth = (75−55)/55 = **36.4%**
→ Closest peer: Comparable E (35% growth) → EV/Sales = **15×**

| Segment | Metric | Multiple | EV |
|---------|--------|---------|-----|
| Consulting | EBITDA = 80 | 9× | ZAR 721M |
| BenefitsExchange | Sales = 75 | 15× | ZAR 1,125M |
| **Total SOTP EV** | | | **ZAR 1,846M** |
| Current trading EV | | | ZAR 1,437M |
| **Conglomerate discount** | | | **ZAR 409M** |

> **Key lesson**: Multiple selection is judgment-driven — growth-matched multiples can significantly change the implied discount.

---

### Step 2: Evaluate the Sale Bid

**Bid received**: ZAR 800M for Consulting segment

#### Comparable Transaction Analysis:

| Transaction | EV/EBITDA |
|------------|----------|
| Comparable 1 | 9× |
| Comparable 2 | 12× |
| Comparable 3 | 7× |
| Comparable 4 | 14× |
| **Median/Mean** | **11×** |
| **Bid implied** | **10×** |

→ Bid is **below median comparable transaction multiple** → Consulting segment is **moderately undervalued** by the bid

#### Bid vs. Implied Current Market Value:

| Item | Value |
|------|-------|
| Current Benefit Ltd. EV | ZAR 1,437M |
| BenefitsExchange EV (at 15×) | ZAR 1,125M |
| **Implied Consulting value** | **ZAR 312M** |
| Bid | ZAR 800M |
| **Premium to implied value** | **ZAR 488M** |

→ Despite being below comparable transaction multiples, the bid is **substantially above** what the market is currently implying for Consulting → **bid is attractive relative to current market value**

---

### Step 3: Pro Forma Income Statement After Sale + ASR

**Assumptions:**
- Sell Consulting for ZAR 800M cash
- Reduce corporate costs by ZAR 1M, D&A by ZAR 12M
- Use ZAR 800M proceeds to repurchase 200M shares (ASR)
- Tax rate = 0%

| Item | Pro Forma (LTM) |
|------|----------------|
| BenefitsExchange EBITDA | (5) |
| Corporate costs (adjusted) | (3) |
| D&A (adjusted) | (8) |
| EBIT | **(16)** |
| Interest expense | (9) |
| Net income | **(25)** |
| Shares outstanding (post-ASR) | 1,254M |
| **Pro forma diluted EPS** | **(1.99 cents)** |

**Key insight**: Sale is **dilutive to EPS** — Consulting was the only profitable segment. BenefitsExchange is still loss-making. Share repurchase partially offsets dilution from losing Consulting earnings, but net result is a loss.

---

### Step 4: Sale vs. Spin-Off Decision

| Factor | Sale (ZAR 800M) | Spin-Off (at 13× EV/EBITDA) |
|--------|----------------|---------------------------|
| Implied EV/EBITDA | **10×** | **13×** |
| Implied EV | ZAR 800M | ZAR 1,040M+ |
| Cash received by parent | ✅ Yes (ZAR 800M) | ❌ No cash |
| Valuation certainty | ✅ Definitive | ❌ Depends on market conditions |
| Upside potential | Limited | Higher if market values it well |

**Conclusion**: Spin-off is preferable **if** the 13× multiple is achievable — adds ~ZAR 240M+ more value. However, if markets correct or the spin-off trades lower, the guaranteed ZAR 800M from a sale may be superior.

---

### Master Framework for Divestment Evaluation

```
1. Check for conglomerate discount (SOTP vs. current EV)
      ↓
2. Choose valuation method:
   - Comparable company (spin-off, trading multiple)
   - Comparable transaction (sale, includes control premium)
      ↓
3. Evaluate bid vs. comparable multiples AND vs. implied current value
      ↓
4. Build pro forma income statement (remove divested segment, adjust costs/D&A)
      ↓
5. Compare sale vs. spin-off (valuation certainty vs. potential upside)
```

---

### Key Formulas

$$\text{Conglomerate discount} = \text{SOTP EV} - \text{Current trading EV}$$

$$\text{Implied segment value} = \text{Parent EV} - \text{Other segment EV (from comps)}$$

$$\text{Comparable transaction EV} = \text{Cash paid} + \text{Stock issued} + \text{Net debt assumed}$$

$$\text{Pro forma EPS} = \frac{\text{Pro forma net income}}{\text{Pro forma shares outstanding}}$$

---

### Exam Tips

- **SOTP valuation** is the primary tool for identifying a conglomerate discount
- Use **EV multiples** (EV/EBITDA, EV/Sales) — capital structure neutral
- Use **comparable company multiples** for spin-offs; **comparable transaction multiples** for sales
- **Corporate/unallocated costs**: allocate to segments before valuing — reduces segment EBITDA
- **Sale → cash in; Spin-off → no cash but potentially higher value** — trade-off between certainty and upside
- **Growth-matched multiples** can dramatically change SOTP valuation — always check sensitivity
- Pro forma after sale: **remove divested EBITDA/D&A/costs** → can be dilutive if divested segment was the profitable one