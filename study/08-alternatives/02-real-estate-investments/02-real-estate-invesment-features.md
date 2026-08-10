## Summary: Real Estate Investment Features (CFA Level II — Alternative Investments)

---

### General Characteristics

**Spectrum of real estate investment:**

| Type | Risk/Return | Characteristics |
|------|------------|-----------------|
| **Core real estate** | Low/stable | Income-producing, bond-like returns, primarily public |
| **Opportunistic real estate** | High/speculative | New developments, substantial improvement needed, equity-like returns, primarily private |

**Key characteristics affecting tradability and returns:**
- Current and potential **economic uses**
- Expected **net cash flows**
- **Capital structure** (leverage)

---

### Net Operating Income (NOI)

**The primary cash flow measure for income-producing real estate:**

$$\boxed{NOI = \text{Effective gross income} - \text{Operating expenses} - \text{Property maintenance allowance}}$$

**Building blocks:**

| Component | Definition |
|-----------|-----------|
| **Gross rent** | Average rent per sq ft × Total rentable space |
| **+ Other income** | Additional revenue sources |
| **− Vacancy/concessions** | Unoccupied space + tenant incentives |
| **= Effective gross income** | Total realizable revenue |
| **− Operating expenses** | Fixed (taxes, insurance) + Variable (utilities) costs |
| **− Property maintenance allowance** | Capital to maintain current income level (NOT upgrades) |
| **= NOI** | Pre-financing, pre-tax income measure |

> **Key difference from corporate finance**: NOI (not EBITDA or FCFF) is used for real estate income valuation — does NOT include financing costs or taxes.

---

### Wallonia Transit Example — NOI Calculation

**Setup**: 10,000 m², fully leased at EUR52.50/m²; tenant covers taxes and insurance; operating expense recovery = EUR10.25/m²

| Item | EUR |
|------|-----|
| Gross Rent (52.50 × 10,000) | 525,500 |
| Operating Expense Recovery (10.25 × 10,000) | 102,500 |
| Property Tax (pass-through) | 12,500 |
| Insurance (pass-through) | 40,000 |
| **Effective Gross Income** | **680,000** |
| − Services and Repairs | (120,750) |
| − Property Tax (pass-through) | (12,500) |
| − Insurance (pass-through) | (40,000) |
| − Property Maintenance Allowance | (100,000) |
| **NOI** | **406,750** |

**Key insight**: Pass-through costs cancel out (received from tenant, paid back out) → net zero effect on NOI. Only non-recoverable costs matter.

**If service/repair costs rise 20%**: Additional cost = 120,750 × 20% = 24,150; not fully recovered (recovery is fixed at EUR102,500) → **NOI falls by EUR24,150 to EUR382,600**.

---

### Leverage and Coverage Measures

**Loan-to-Value Ratio (LTV):**
$$\boxed{LTV = \frac{\text{Mortgage principal outstanding}}{\text{Current property value}}}$$

- Lower LTV → Higher equity cushion → Less credit risk
- LTV fluctuates as property values change and principal is amortized

**Debt Service Coverage Ratio (DSC):**
$$\boxed{DSC = \frac{NOI}{\text{Annual debt service (principal + interest)}}}$$

- DSC > 1: Property generates enough income to cover debt payments
- Commonly used as a **loan covenant** by lenders

---

### Wallonia Example — Leverage and Coverage

**Setup**: Purchase price = EUR3,750,000; Mortgage = EUR3,000,000 at 4%, 20-year fully amortizing; Annual payment = EUR220,745

**Q1 — LTV at end of Year 1** (property value constant):
- Principal paid in Year 1 = 220,745 − 120,000 (interest) = 100,745
- Remaining principal = 3,000,000 − 100,745 = 2,899,255
$$LTV = \frac{2,899,255}{3,750,000} = 77.3\%$$

**Q2 — After 10% property appreciation**:
$$LTV = \frac{2,899,255}{3,750,000 \times 1.10} = \frac{2,899,255}{4,125,000} = 70.3\%$$

**Q3 — DSC**:
$$DSC = \frac{406,750}{220,745} = 1.84$$

**Q4 — Revised DSC with higher costs** (NOI = 382,600):
$$DSC = \frac{382,600}{220,745} = 1.73$$ → Still above 1.0 but lower safety margin

---

### Equity Dividend Rate (EDR)

$$\boxed{EDR = \frac{\text{Pre-tax cash flow}}{\text{Initial equity investment}}}$$

$$\text{Pre-tax cash flow} = NOI - \text{Debt service}$$
$$\text{Initial equity} = \text{Purchase price} - \text{Mortgage amount}$$

**Wallonia Example (Q3)**:
- Pre-tax CF = 406,750 − 220,745 = **186,005**
- Initial equity = 3,750,000 − 3,000,000 = **750,000**
$$EDR = \frac{186,005}{750,000} = 24.8\%$$

**Revised EDR** (with higher costs, NOI = 382,600):
$$EDR = \frac{382,600 - 220,745}{750,000} = \frac{161,855}{750,000} = 21.6\%$$

> **EDR is purely income-based** — ignores capital gains/losses and tax effects.

---

### After-Tax Returns

$$\boxed{\text{After-tax CF} = \text{Pre-tax CF} - \text{Taxes}}$$

$$\boxed{\text{Taxes} = t \times (NOI - \text{Interest expense} - \text{Depreciation expense})}$$

$$\boxed{\text{Annual depreciation} = \frac{\text{Depreciable base}}{\text{Useful life}}} \quad \text{where Depreciable base} = \text{Total cost} - \text{Land value}}$$

**Land is NOT depreciated** (assumed infinite useful life).

**Wallonia After-Tax Example**:
- Depreciable base = 3,750,000 − 750,000 (land) = 3,000,000
- Useful life = 30 years
- Annual depreciation = 3,000,000/30 = **100,000**
- Taxable income = 406,750 − 120,000 (interest) − 100,000 (depreciation) = 186,750
- Taxes = 25% × 186,750 = **46,688**
- After-tax CF = 186,005 − 46,688 = **139,317**

**Key property tax insight**: **Lower land value → higher depreciable base → higher depreciation → lower taxes → higher after-tax CF**

---

### Classifications

**Three classification approaches for real estate:**

#### 1. GICS Classification (Standard Business Classification)
- Real estate companies: Operating, developing, servicing (REOCs)
- REITs: Own and operate rental properties; must distribute nearly all earnings to avoid corporate tax

**REOC vs. REIT:**

| Feature | REOC | REIT |
|---------|------|------|
| **Tax** | Taxable corporation | Avoids corporate tax (distributes earnings) |
| **Restrictions** | Few | Must primarily own/operate rental or mortgage properties |
| **Available in** | Globally | 30+ countries |

**FFO (Funds from Operations)** — Key REIT performance measure:
$$\boxed{FFO = \text{Net income} + \text{Depreciation} + \text{Amortization} - \text{Net gains from property sales}}$$

#### 2. Business Cycle Sensitivity
| REIT Type | Cycle Sensitivity |
|-----------|-----------------|
| Health care REITs | **Defensive** — stable demand regardless of cycle |
| Industrial/Office REITs | **Cyclical** — volatile demand tied to economic activity |

#### 3. Property Classes

| Class | Age | Quality | Income/Appreciation |
|-------|-----|---------|---------------------|
| **A** | <10 years | Top amenities, best materials | High income, low appreciation potential |
| **B** | <20 years | Dated amenities, good construction | Moderate income and appreciation |
| **C** | <30 years | Limited amenities, aging construction | Lower income, more appreciation potential |
| **D** | >30 years | No amenities, poor condition | Limited usability, highest risk |

---

### Sustainable Building Certification

| Standard | Origin | Geographic Prevalence |
|---------|--------|----------------------|
| **BREEAM** | UK (1990s) | UK and Europe |
| **LEED** | US (1990s) | Global (US, China, Canada, India) |

**Green building benefits**: Lower operating costs + higher rents + lower vacancy + investor ESG objectives + tax incentives in many jurisdictions.

---

### Key Risks

| Risk Category | Examples |
|--------------|---------|
| **Economic/market** | Economic cycles, demographics, supply of new real estate, capital costs |
| **Property-specific** | Management quality, obsolescence, technological change |
| **Environmental** | Energy efficiency requirements, floods, earthquakes, hurricanes |
| **Regulatory** | Zoning restrictions, environmental compliance |
| **Data/model** | Over-reliance on algorithms (e.g., Zillow Offers — lost $1B using flawed home-pricing algorithm) |

---

### Question Set Answers

**Q1** (10% vacancy rate impact on NOI):
- Vacancy deduction = 10% × gross rent = 10% × 525,500 = EUR52,500
- NOI falls from EUR406,750 to **EUR354,250**
→ **Answer: B. EUR354,250**

**Q2** (Which strategy improves NOI?):
- Property tax → fully passed through to tenant → no NOI impact
- Insurance → fully passed through → no NOI impact
- **Service/repair → partially passed through** (fixed recovery of 102,500); actual costs exceed recovery → reducing actual costs improves NOI
→ **Answer: C. Negotiate with vendors for lower service/repair rates**

**Q3** (Lower land value → higher depreciable base → higher depreciation → lower taxes → higher after-tax CF):
- Property 1: Land = AUD600K → Depreciable base = AUD1.4M → Higher depreciation
- Property 2: Land = AUD800K → Depreciable base = AUD1.2M → Lower depreciation
→ **Answer: A. First property has higher after-tax cash flow**

---

### Exam Tips

- **NOI = Effective gross income − Operating expenses − Property maintenance allowance** — does NOT include financing costs or income taxes
- **Vacancy rate** reduces effective gross income (% of gross rent lost)
- **Pass-through costs** cancel out (collected from tenants, paid to third parties) → zero net NOI impact
- **Land is NEVER depreciated** → lower land value = higher depreciable base = lower taxes = higher after-tax CF
- **LTV** = mortgage principal / property value; declines as principal amortizes AND as property appreciates
- **DSC** = NOI / Debt service; must remain > 1 for debt coverage; typically a loan covenant
- **EDR** = pre-tax CF / initial equity; income-only measure (ignores capital gains)
- **FFO** (REIT measure) = Net income + D&A − Gains from property sales
- **Class A** = highest rents, lowest appreciation potential; **Class D** = lowest rents, highest renovation risk