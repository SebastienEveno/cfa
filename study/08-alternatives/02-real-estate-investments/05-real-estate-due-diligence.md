## Summary: Real Estate Due Diligence and Valuation Approaches (CFA Level II — Alternative Investments)

---

### Real Estate Due Diligence — Four Elements

| Element | Focus |
|---------|-------|
| **1. Market review and outlook** | Local/macro conditions, supply-demand, environmental risks |
| **2. Current lease review** | Existing rents vs. market, vacancies, lease expiration schedule, tenant creditworthiness |
| **3. Future lease outlook** | Renewal costs/incentives, downtime, local supply changes, zoning/regulatory risk |
| **4. Documentation review + Property inspection** | Legal/tax ownership review, liens, physical/environmental inspection, service agreements |

**Market review specifics:**
- Actual transaction prices preferred over offer/estimated prices
- Environmental risks (wildfire, hurricane, flood) affect insurance costs and appreciation potential
- Older buildings require assessment of energy efficiency upgrade costs

**Case study — Berlin's Mietendeckel (rent cap) law**: Froze rents on pre-2014 buildings at June 2019 levels for 5 years → immediate 11% rent decline BUT rental supply fell ~59% (worsening housing shortage) → law struck down as unconstitutional the following year. **Key lesson**: Regulatory/legal review must anticipate rent cap and zoning risk.

**Future lease outlook**: Leasing costs (broker commissions, tenant incentives like free rent/improvement allowances) are typically **capitalized and amortized** over the lease term — NOT included in annual operating income directly.

**Documentation review**: Confirms property free of liens/tax obligations; required by mortgage lenders; verifies zoning/environmental compliance.

---

### Three Real Estate Valuation Approaches

| Approach | Method |
|----------|--------|
| **Income** | Direct capitalization OR DCF |
| **Cost** | Replacement cost − Depreciation |
| **Sales comparison** | Adjusted comparable transactions |

---

### Income Approach — Direct Capitalization

$$\boxed{\text{Property value} = \frac{\text{Expected NOI}}{\text{Cap rate}}}$$

$$\boxed{\text{Cap rate} = r - g}$$

**NOI formula**:
$$NOI = \text{Effective Gross Income} - \text{Operating Expenses} - \text{Property Maintenance Allowance}$$

**Best suited when**: NOI is stable/consistent and relationships between cash flows/expenses remain constant. If ongoing changes are expected, use a **stabilized/normalized NOI** instead.

---

### Wallonia Direct Capitalization Example (Example 8)

**Setup**: NOI = EUR406,750; $r = 12.5\%$; $g = 2\%$

$$\text{Cap rate} = 12.5\% - 2\% = 10.5\%$$
$$V_0 = \frac{406,750}{0.105} = \mathbf{EUR3,873,810}$$

**With 20% higher costs, NOI = EUR382,600:**
$$V_0 = \frac{382,600}{0.105} = \mathbf{EUR3,643,810}$$

---

### Income Approach — Discounted Cash Flow (DCF)

$$\boxed{\text{Property value} = \sum_{i=1}^{n} \frac{NOI_{t+i}}{(1+r)^i} + \frac{\text{Terminal value}}{(1+r)^n}}$$

$$\boxed{\text{Terminal value} = \frac{NOI_n(1+g)}{r-g}}$$

**Best suited when**: Analyst has greater visibility into NOI dynamics that will change over the holding period (unlike stable-NOI direct cap scenarios).

---

### Eastmain Plaza DCF Example (Example 9)

**Five-year NOI projections** ($r = 14\%$):

| Year | 1 | 2 | 3 | 4 | 5 |
|------|---|---|---|---|---|
| NOI | 8,259,417 | 6,092,385 | 13,539,114 | 14,020,153 | 14,515,622 |

**Step 1 — PV of 5-year NOI stream (discounted at 14%):**
$$\sum \frac{NOI_t}{(1.14)^t} \approx MYR 37{,}960{,}000 \text{ (approximate PV of explicit cash flows)}$$

**Step 2 — Terminal value (Year 5, growing at 3% thereafter):**
$$TV_5 = \frac{14,515,622 \times 1.03}{0.14 - 0.03} = \frac{14,951,091}{0.11} = MYR135,919,000$$

**Step 3 — PV of terminal value:**
$$PV(TV) = \frac{135,919,000}{(1.14)^5} \approx MYR70,590,000$$

**Total property value ≈ MYR107,503,600** (given in the question set, combining PV of NOI stream + PV terminal value)

---

### Going-In Cap Rate vs. Terminal Cap Rate

$$\boxed{\text{Going-in cap rate} = \frac{\text{First-year NOI}}{\text{Property value}}}$$

$$\text{Going-in cap rate} = \frac{8,259,417}{107,503,600} = 7.68\%$$

**Terminal cap rate** = $r - g = 14\% - 3\% = 11\%$

**Q1 Answer**: → **C** — Going-in cap rate (7.68%) is lower than terminal cap rate (11%) because **Year 1 and 2 NOI reflect a temporary downside scenario** (losing retail tenants) before recovery in later years — NOT because of a lower risk assumption (the required return $r=14\%$ is constant throughout).

---

### Cost Approach

**Core principle**: Investor should not pay more than the cost to buy vacant land + construct a comparable new property.

**Components**: Construction costs + soft costs (architect/legal/permits) + development-period interest + contractor profit + land cost.

**Adjustments needed**: Age, condition, less-ideal location, or infeasibility of new construction (zoning/historical protections).

**Cycle implication**: Replacement cost tends to **exceed market price during oversupply** phase (construction costs stay elevated while market prices weaken from excess supply).

**Q2 Answer**: → **A. Oversupply phase** — NOI peaks then declines; market prices soften while construction costs (materials, labor) remain high from projects still completing.

---

### Wallonia Cost Approach Example (Example 10)

**Total replacement cost estimate**: EUR4,350,000 (construction + soft costs + land)

**Building portion (excluding land)**: 4,350,000 − 750,000 (land) = **EUR3,600,000**

**Depreciation** (30-year useful life, straight-line, 4 years old):
$$\text{Accumulated depreciation} = 3,600,000 \times \frac{4}{30} = EUR480,000$$

**Depreciated building value**: 3,600,000 − 480,000 = **EUR3,120,000**

**Total estimated value**: 3,120,000 + 750,000 (land, not depreciated) = **EUR3,870,000**

---

### Sales Comparison Approach

**Core principle**: Investor shouldn't pay more than comparable properties have recently sold for (after adjustments).

**Common comparison units**: Price/sq ft, price/gross rent per sq ft, price/revenue.

**Adjustment factors**: Sale date, square footage, location, age, market condition differences.

---

### Pinebranch Sales Comparison Example (Example 11)

| | Comp 1 | Comp 2 | Comp 3 |
|--|--------|--------|--------|
| Raw Price/ft² | 86.67 | 103.20 | 96.82 |
| Net adjustment | +3% | +1% | +7% |
| Adjusted Price/ft² | 89.27 | 104.23 | 103.60 |

**Average adjusted price/ft²** = **AUD99.03**

**Estimated Pinebranch value** = 99.03 × 288,000 sq ft = **AUD28,520,640**

**Adjustment interpretation:**
- **Older sale dates** → adjust UP (prices have risen since then)
- **Farther from city center** → adjust UP for subject if comp was further out (comp less valuable, so subject relatively worth more) — direction depends on comparison
- **Smaller comps** → adjust based on size premium/discount
- **Newer comps** → adjust DOWN (comp is superior/newer, so subject relatively less valuable)

---

### Which Approach for Which Property Type?

| Property Type | Best Approach | Why |
|---------------|--------------|-----|
| **Large office/retail/commercial** | **Income approach** | Fewer comparable transactions; periodic income is the primary decision driver |
| **Single-family residential** | **Sales comparison** | Many comparable transactions available; less income-focused |

**Q3 Answer**: → **B. Large commercial properties use income approach** because fewer comparable transactions exist (large/unique assets don't trade as frequently as homes).

---

### Question Set Answers Summary

**Q1**: → **C** — Going-in cap rate lower than terminal due to temporary downside NOI scenario, not risk change
**Q2**: → **A. Oversupply phase** — replacement cost exceeds market price when construction costs stay high but market prices soften
**Q3**: → **B. Large commercial properties → income approach** (fewer comparables)
**Q4**: → **C. Documentation review** — focused on legal/tax/lien verification, NOT directly used in NOI forecasting (unlike market review, which informs pricing/rent assumptions, or lease outlook, which informs downtime/incentive costs)

---

### Exam Tips

- **Direct cap**: $V_0 = NOI_1/(r-g)$ — best for stable NOI properties
- **DCF**: explicit multi-year projection + terminal value — best when NOI dynamics change materially
- **Terminal value formula**: $NOI_n(1+g)/(r-g)$ — uses NEXT year's NOI (grown by g), not the final projected year's NOI directly
- **Going-in cap rate** = Year 1 NOI/Property value; can differ from terminal cap rate ($r-g$) if near-term NOI reflects temporary conditions
- **Cost approach**: land NOT depreciated; only building/improvements depreciate over useful life
- **Replacement cost > market price** typically signals **oversupply phase** (construction lag effect)
- **Income approach** for large/unique commercial properties (few comps); **Sales comparison** for residential (many comps)
- **Documentation review** does NOT feed into NOI forecasts — it's about legal/tax clearance, not income projection
- **Rent caps/zoning changes** are critical due diligence factors that can dramatically affect future lease outlook and NOI trajectory (Berlin example)