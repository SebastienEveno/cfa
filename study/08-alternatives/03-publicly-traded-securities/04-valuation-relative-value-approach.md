## Summary: Valuation — Relative Value (Price Multiple) Approach for REITs (CFA Level II — Alternative Investments)

---

### Overview — REIT-Specific Multiples

**Standard equity multiples adapted for REITs:**

| Multiple | REIT Equivalent Of | Usage |
|----------|---------------------|-------|
| **P/FFO** | P/E ratio | Most widely used in the US |
| **P/AFFO** | Cash flow multiple | Better cash flow proxy; most useful for dividend sustainability |
| **EV/EBITDA** | Standard corporate multiple | Used less frequently; unlevered comparison |

> **Regional convention**: FFO/AFFO dominant in the **US**; NAVPS more common in **Europe/Asia** (though FFO usage growing in Asia-Pacific over past 5 years).

---

### Funds From Operations (FFO)

$$\boxed{FFO = \text{Net income} + \text{Depreciation} + \text{Amortization} - \text{Net gains on sale of real property}}$$

**Nareit (National Association of REITs) standardized definition** — SEC-accepted non-GAAP measure requiring reconciliation to GAAP net income.

**Full definition:**
$$FFO = \text{Net income (GAAP)} + \text{Losses (− Gains) from property sales} + \text{D\&A related to real estate} + \text{Impairments/write-downs}$$

---

### Why Add Back Depreciation?

**Core rationale**: Real estate **maintains or appreciates in value** over time — accounting depreciation does **not reflect economic reality**.

**Tax benefit connection**: REOCs using moderate leverage and reinvesting income can **defer tax liability** significantly because:
- Accelerated depreciation for tax purposes reduces taxable income
- Continued reinvestment expands the depreciable base
- Cash taxes remain low even as economic income grows

**Why remove gains/losses on sale**: These are **non-recurring** — don't represent sustainable ongoing operating performance.

**Amortization add-back includes**: Leasing commissions, tenant improvements, tenant allowances.

**Important limitation**: FFO is **NOT a cash flow measure** — it excludes:
- Capital expenditures needed to sustain growth
- Financing activity cash flows
- (Does include FFO from unconsolidated joint ventures)

---

### Adjusted Funds From Operations (AFFO)

**Also known as**: Funds Available for Distribution (FAD) or Cash Available for Distribution

$$\boxed{AFFO = FFO - \text{Non-cash (straight-line) rent} - \text{Recurring maintenance capex and leasing costs}}$$

**Two key adjustments:**

#### 1. Non-Cash (Straight-Line) Rent Adjustment
- **Straight-line rent**: Average contractual rent recognized evenly over the lease term (required under IFRS/US GAAP)
- **Problem**: For **escalating rent leases**, early-year cash received < recognized revenue; later years cash received > recognized revenue
- **Adjustment**: Remove the accounting-driven difference to reflect **actual cash received**

#### 2. Recurring Maintenance Capex and Leasing Costs
- Capital needed to **maintain** existing property value and re-lease space (agent commissions, tenant improvement allowances)
- Excludes growth/development capex

**AFFO's advantage**: **Better approximates sustainable dividend-paying capacity** than FFO — closer to true economic cash flow.

**AFFO's disadvantage**: More subjective — **no universally accepted methodology**; data providers (Bloomberg, Refinitiv) often don't track AFFO due to inconsistent reporting and estimation difficulty.

---

### Worked Example — Office Equity REIT Inc. (Exhibit 3)

**A. FFO Calculation:**

| Item | SGD 000s |
|------|----------|
| Net income | 160,638 |
| + Depreciation and amortization | 76,100 |
| + (Gains)/losses from sale of depreciable real estate | 25,000 |
| **Funds from operations** | **261,738** |
| **FFO per share** (55,689 shares) | **4.70** |

**B. AFFO Calculation:**

| Item | SGD 000s |
|------|----------|
| Funds from operations | 261,738 |
| − Non-cash (straight-line) rent | (21,103) |
| − Recurring maintenance capex and leasing commissions | (55,765) |
| **Adjusted funds from operations** | **184,870** |
| **AFFO per share** | **3.32** |

> **Note**: AFFO per share ($3.32) < FFO per share ($4.70) — the gap (~29%) reflects the true cash cost of maintaining the property portfolio and the straight-line rent adjustment.

---

### Three Drivers of Multiple Differences Among REITs

#### 1. Expected FFO/AFFO Growth

$$\boxed{\text{Higher expected growth} \implies \text{Higher multiple}}$$

Growth drivers:
- **Business model**: Development-focused REITs often achieve above-average growth
- **Geography**: Supply-constrained primary markets (NYC, London) → more pricing power → higher growth
- **Other factors**: Management skill, lease structure

#### 2. Risk of Underlying Real Estate

| Property Type | Cash Flow Volatility | Typical Multiple |
|---------------|----------------------|-------------------|
| **Apartments** | Low | Higher multiple |
| **Hotels** | High (highly cyclical) | Lower multiple |

**Portfolio quality**: Young, well-maintained properties → higher multiples than old/deferred-maintenance portfolios (which need higher future capex).

#### 3. Capital Structure and Access to Capital

$$\boxed{\uparrow \text{Financial leverage} \implies \downarrow \text{FFO/AFFO multiple}}$$

**Why:**
- Higher leverage → higher required return (higher risk) → lower multiple
- Constrains incremental borrowing capacity
- May create **"stock overhang"** — investors avoid buying in anticipation of future dilutive equity offerings

---

### EV/EBITDA — Special Considerations for REITs

**Key advantage**: FFO/AFFO are **levered** measures (net income-based); EBITDA is **unlevered** (before interest effect) → EV/EBITDA allows **like-for-like comparison** regardless of capital structure differences.

**Connection to cap rate:**
$$\boxed{\frac{EBITDA}{EV} \approx \frac{NOI}{\text{Market value}} = \text{Cap rate}}$$

> **P/FFO is generally lower for higher-leverage companies** (all else equal) because leveraged income is riskier; EV/EBITDA avoids this distortion.

---

### P/FFO and P/AFFO — Advantages and Disadvantages

#### Advantages
- **Widely accepted** globally — allows comparison with other asset classes
- **Readily available data** (Bloomberg, Refinitiv track FFO estimates)
- Multiples can be **combined with growth and leverage metrics** for deeper relative analysis
- Leverage ratios can adjust for capital structure differences when comparing REITs

#### Disadvantages
- **Doesn't capture intrinsic value of non-income-producing assets**: land held for development, vacant buildings, under-construction properties
- **Doesn't reflect below-market rent upside** or underused/mis-allocated assets
- **P/FFO ignores recurring capex** entirely (P/AFFO attempts to address this, but with significant estimation variability)
- **One-time items and new revenue recognition rules** complicate FFO/AFFO calculation and cross-company comparability

---

### FFO vs. AFFO — Practical Usage

| Aspect | FFO | AFFO |
|--------|-----|------|
| **Standardization** | High (Nareit standard) | **Low** (varies by company) |
| **Data availability** | Widely tracked | Often not tracked by data providers |
| **Estimation difficulty** | Lower | **Higher** (capex timing unpredictable) |
| **Economic accuracy** | Moderate | **Higher** (closer to true cash flow) |
| **Investment decisions** | Reference point | **Primary basis** for judgment (despite estimation challenges) |

> Despite AFFO's superior accuracy, **FFO estimates are more frequently referenced** due to greater standardization and availability — but investors still weight AFFO heavily in final investment decisions.

---

### Key Formula Reference Card

| Metric | Formula |
|--------|---------|
| **FFO** | Net income + D&A − Net gains on property sales |
| **AFFO** | FFO − Non-cash rent − Recurring maintenance capex/leasing costs |
| **P/FFO** | Share price ÷ FFO per share |
| **P/AFFO** | Share price ÷ AFFO per share |
| **EV/EBITDA ≈ 1/Cap rate** | EBITDA/EV ≈ NOI/Market value |

---

### Exam Tips

- **FFO = Net income + D&A − Gains from property sales** — memorize exactly
- **AFFO = FFO − Non-cash rent − Maintenance capex** — the "true cash flow" measure
- **Depreciation added back** because real estate typically appreciates (accounting depreciation doesn't reflect economic reality)
- **Straight-line rent adjustment**: matters most for escalating-rate leases — removes the accounting smoothing effect
- **Higher leverage → lower P/FFO multiple** (all else equal) — higher risk requires higher return
- **EV/EBITDA avoids leverage distortion** — unlevered measure allows cleaner cross-company comparison
- **EBITDA/EV ≈ Cap rate** (NOI/Value) — important conceptual link between corporate and real estate valuation
- **AFFO more accurate but less standardized** than FFO — data providers often skip AFFO due to inconsistent methodology
- **Apartment REITs trade at higher multiples than hotel REITs** — classic example of cash flow volatility affecting valuation
- **Non-income-producing assets** (land, development pipeline) are NOT captured well by P/FFO or P/AFFO multiples — a key limitation of this approach vs. NAV