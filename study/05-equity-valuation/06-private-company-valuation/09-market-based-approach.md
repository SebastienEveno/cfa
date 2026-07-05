---
layout: page
title: Private Company Valuation — Market-Based Approach
permalink: /study/05-equity-valuation/06-private-company-valuation/09-market-based-approach/
prev: /cfa/study/05-equity-valuation/06-private-company-valuation/08-income-based-approach/
next: /cfa/study/05-equity-valuation/06-private-company-valuation/formulas/
---
## Summary: Private Company Valuation — Market-Based Approach (CFA Level II)

---

### Four-Step Market Approach Process

```
Step 1: Identify comparable public companies across business lines
Step 2: Gather and calculate composite multiples (weight by revenue or EBITDA)
Step 3: Apply multiples to private company fundamentals → initial EV estimate
Step 4: Apply DLOC and/or DLOM to adjust for control and marketability
```

---

### Everfloat Full Market-Based Valuation (Example 13)

#### Step 1 — Business Lines & Weights

| Segment | Revenue | EBITDA | Assets |
|---------|---------|--------|--------|
| Marine Navigation | 70% | 75% | 78% |
| Logistics Services | 25% | 30% | 20% |
| Energy Solutions | 5% | **−5%** | 2% |

#### Step 2 — Composite Multiples

| Segment | EV/Sales | EV/EBITDA |
|---------|---------|----------|
| Marine Navigation | 2.8× | 8.2× |
| Logistics Services | 1.1× | 8.1× |
| Energy Solutions | 8.0× | 20.0× |

**Composite EV/Sales** (weighted by revenue):
$$= (0.70)(2.8) + (0.25)(1.1) + (0.05)(8.0) = \mathbf{2.635\times}$$

**Composite EV/EBITDA** (weighted by EBITDA, including negative):
$$= (187.5/250)(8.2) + (75/250)(8.1) + (-12.5/250)(20.0) = \mathbf{7.58\times}$$

> **Energy Solutions EBITDA is negative** → weighted EV/EBITDA composite is pulled **down** because the segment receives negative weight × positive multiple = negative contribution.

#### Step 3 — Initial EV Estimates (Public Company Equivalent)

| Method | Calculation | Initial EV |
|--------|------------|-----------|
| **EV/Sales** | 2.635 × GBP 1,000M | **GBP 2,635M** |
| **EV/EBITDA** | 7.58 × GBP 250M | **GBP 1,895M** |

**Segment-by-segment approach (EV/Sales)**:

| Segment | Revenue | Multiple | Stand-Alone Value |
|---------|---------|---------|-----------------|
| Marine Navigation | GBP 700M | 2.8× | GBP 1,960M |
| Logistics Services | GBP 250M | 1.1× | GBP 275M |
| Energy Solutions | GBP 50M | 8.0× | GBP 400M |
| **Total** | **GBP 1,000M** | | **GBP 2,635M** |

> **Why EV/Sales >> EV/EBITDA?** Energy Solutions has high EV/Sales (8.0×) but negative EBITDA → EV/Sales treats it as high-value (early-stage growth); EV/EBITDA gives it negative value → large divergence between the two methods.

#### Step 4 — Apply Discounts (Non-Controlling, Non-Marketable Minority)

From earlier examples: **DLOC = 13%, DLOM = 16.8% → Total discount = 27.6%**

| Method | Pre-Discount EV | After 27.6% Discount |
|--------|----------------|---------------------|
| EV/Sales | GBP 2,635M | **GBP 1,907.7M** |
| EV/EBITDA | GBP 1,895M | **GBP 1,372.0M** |
| **Average** | | **GBP 1,639.9M** |

---

### When EV/Sales vs. EV/EBITDA Diverge — Key Insight

**EV/Sales** preferred when:
- Segments have **negative EBITDA** (early-stage growth)
- Revenue is a more reliable metric than earnings for the stage

**EV/EBITDA** preferred when:
- All segments are **profitable** (positive EBITDA)
- Capital structure comparison is needed

**Best practice**: Use **both** and triangulate — large divergence signals business mix complexity or early-stage segments.

---

### Two Ways to Apply Composite Multiples

**Method 1 — Single composite multiple:**
$$EV = \text{Composite multiple} \times \text{Total company metric}$$

**Method 2 — Segment-by-segment (Sum of Parts):**
$$EV = \sum_i (\text{Segment multiple}_i \times \text{Segment metric}_i)$$

Both give the **same result** — but Method 2 provides insight into individual segment values (useful for SOTP analysis).

---

### Knowledge Check Answers

**Q1 (Least valuable Everfloat division by EV/Sales):**
- Marine: GBP 1,960M
- Energy: GBP 400M
- Logistics: GBP 275M
→ **B. Logistics Services** (GBP 275M = smallest stand-alone value)

**Q2 (Most valid concern about EV/EBITDA composite):**
→ **A. Energy Solutions has negative EBITDA** → applying a positive multiple (20×) to a negative EBITDA → **negative value contribution** for that segment → arguably distorts the composite multiple (makes it lower than warranted for the going-concern business).

**Q3 (Marine navigation peers have similar divisional mix as Everfloat):**
→ **C. Use only the marine navigation comparables** — if those public companies already have similar proportions of logistics and energy businesses as Everfloat, then a single set of marine navigation comparables already represents the blended business profile. Creating a composite from three separate peer groups would be **double-counting** the business mix adjustment.

---

### Advantages and Disadvantages of Market-Based Approach

| Advantage | Disadvantage |
|-----------|-------------|
| Based on actual market transaction data | Comparability may be imperfect |
| Most widely used; conceptually intuitive | Requires subjective adjustments for risk/growth differences |
| Large pool of public company data available | Control premium adjustments are debatable |
| Can triangulate with income approach | Historical transactions (GTM) may not reflect current conditions |
| No need to forecast specific cash flows | Composite multiples require weighting judgment |

---

### Exam Tips

- **Four steps**: identify comparables → composite multiples → initial EV → apply discounts
- **Composite multiple**: weight by **revenue** for EV/Sales; weight by **EBITDA** for EV/EBITDA
- **Negative EBITDA segment**: use EV/Sales instead; EV/EBITDA gives nonsensical negative value
- **Segment-by-segment = composite approach** mathematically — both give same EV
- **Large divergence between EV/Sales and EV/EBITDA**: indicates early-stage or loss-making segments
- **Apply discounts last**: DLOC × DLOM multiplicatively → then apply to preliminary EV
- **If comparable companies already match the business mix**: use them directly, no need for composite weighting