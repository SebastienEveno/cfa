## Summary: Credit Analysis for Securitized Debt (CFA Level II — Fixed Income)

---

### Why Securitized Debt Is Different from Corporate Debt

**Corporate debt**: General obligation of the **entire balance sheet** of the issuer.

**Securitized debt**: Financing of a **specific pool of assets** (mortgages, auto loans, credit cards), isolated from the originator's balance sheet.

**Key motivations for securitization:**
- Increase debt capacity
- Reduce regulatory capital requirements
- Lower financing cost on a stand-alone basis vs. general obligation financing
- Free up capital for further loan originations

**Investor benefits:**
- Greater diversification
- More stable, predictable cash flows
- Yield premium over similarly-rated bonds (complexity premium)

---

### Two Critical Dimensions of ABS Classification

#### 1. Granularity — Number of Underlying Obligations

| Level | Description | Analysis Approach |
|-------|-------------|-------------------|
| **Highly granular** | Hundreds of underlying borrowers (e.g., credit cards, auto loans) | Portfolio-level statistics (averages, distributions) |
| **Non-granular** | Fewer, larger discrete loans (e.g., CMBS, CLOs) | **Loan-by-loan** analysis |

#### 2. Homogeneity — Similarity of Underlying Obligations

| Level | Description | Example | Analysis Approach |
|-------|-------------|---------|-------------------|
| **Homogeneous** | Similar credit characteristics, strict eligibility criteria | Credit cards, auto loans | Portfolio-level; draw general conclusions |
| **Heterogeneous** | Different characteristics, bespoke terms | CMBS, leveraged loans, project finance | Loan-by-loan scrutiny |

---

### Credit Analysis Approach by Asset Type

| Asset Type | Granularity | Homogeneity | Analysis Approach |
|-----------|-------------|-------------|-------------------|
| **Asset-backed CP / Credit cards / Trade receivables** | Granular | Homogeneous | **Book/statistical** (short-term, static pool) |
| **Auto ABS / Consumer ABS** | Granular | Homogeneous | **Portfolio** (medium-term, revolving pool) |
| **RMBS / SME ABS** | Granular | Homogeneous/Mixed | **Loan-by-loan or portfolio** |
| **CMBS / CRE loans** | Non-granular | Heterogeneous | **Loan-by-loan** |
| **LL CLOs / PF CLOs** | Non-granular | Heterogeneous | **Loan-by-loan** |

**General rule**: Short-term + granular + homogeneous → statistical/book approach; Long-term + non-granular + heterogeneous → loan-by-loan.

---

### Synchrony Credit Card ABS Example

**Transaction**: $750M Series 2016-1 Asset Backed Notes, backed by credit card receivables

**FICO distribution of pool:**

| FICO Range | % of Pool |
|-----------|-----------|
| ≤599 (subprime) | 6.6% |
| 600–659 | 18.7% |
| 660–719 | 39.9% |
| ≥720 (prime) | 34.4% |
| No score | 0.4% |

**Analysis**: Investors use **mean default probability, recovery rate, and variance** across the FICO distribution — NOT individual borrower analysis. Additional data: receivable age, average balances, delinquency rates.

---

### Three Critical Credit Analysis Areas for ABS

#### 1. Underlying Asset Pool Quality

**Granular + homogeneous** (e.g., credit cards):
- Portfolio statistics: default probability, recovery rate, variance
- FICO distribution, delinquency rates, vintage analysis

**Non-granular + heterogeneous** (e.g., leveraged loans, CMBS):
- Individual loan analysis: each obligor's ability to meet financial obligations
- Property-specific or company-specific analysis

---

#### 2. Originator and Servicer Quality

**Originator responsibilities** (at inception):
- Establish and enforce loan eligibility criteria
- Secure and maintain proper documentation
- Maximize timely repayment and contract enforceability for delinquencies

**Servicer responsibilities** (ongoing, over life of transaction):
- Manage and service the portfolio
- Handle defaults and recoveries:
  - **Auto ABS**: repossess and sell vehicles near residual value
  - **CMBS**: identify and replace non-performing tenants
- Manage revolving pools: replacement of obligors over time

**What to evaluate in servicer analysis:**
- Creditworthiness of the servicer itself
- **Track record** across the credit cycle (compare performance of seasoned transactions vs. competitors)

**Synchrony example**: Synchrony Financial (servicer) + Synchrony Bank (sub-servicer for collections processing) — analysts evaluate historical performance of other Synchrony-serviced transactions.

---

#### 3. Transaction Structure and Credit Enhancements

**Special Purpose Entity (SPE)**:
- Sole purpose: acquire the asset pool and issue ABS securities
- **Bankruptcy remoteness**: isolation of the asset pool from originator bankruptcy
- Requires a **"true sale"** of assets from originator to SPE

**Credit Enhancement Types:**

| Enhancement | Description |
|------------|-------------|
| **Bankruptcy remoteness** | SPE structurally isolated from originator's financial distress |
| **Overcollateralization** | Asset pool value > par value of issued notes |
| **Credit tranching** | Tiered claim priority — subordinated tranches absorb losses first, protecting senior tranches |
| **Excess spread** | Return built into the transaction above expected/historical loss — primary protection for consumer ABS |
| **Payout/performance triggers** | Early amortization of notes if servicer fails to make deposits, quality deteriorates, or other adverse events occur |

---

### Covered Bonds — Similar but Fundamentally Different

**Definition**: Senior debt obligation of a **financial institution** providing recourse to **both** the issuer AND a specific collateral pool.

**Key differences from ABS:**

| Feature | ABS | Covered Bonds |
|---------|-----|---------------|
| **Recourse** | Asset pool only | **Dual recourse**: issuer + cover pool |
| **Originator liability** | Isolated (bankruptcy remote) | Issuer remains on the hook |
| **Cover pool** | Static (prepayment risk) | **Dynamic** — must replace prepaid/non-performing assets |
| **Regulatory protection** | Standard | Enhanced under EU BRRD |
| **Rating vs. issuer** | May be higher due to structure | **Several notches above** issuing institution's rating |

**Cover pool eligible collateral** (varies by jurisdiction):
- Commercial or residential mortgages meeting specific criteria
- Public sector debt

**Dynamic cover pool**: Financial institution must maintain sufficient assets at all times → eliminates prepayment risk for investors (unlike US MBS).

**Three redemption structures:**

| Type | Default Trigger | Cash Flow Treatment |
|------|----------------|---------------------|
| **Hard-bullet** | Immediate if payment schedule missed | Bond payments accelerated immediately |
| **Soft-bullet** | Delayed until new final maturity (usually +1 year) | Payment acceleration delayed |
| **Conditional pass-through** | Converts to pass-through after original maturity | Cash flows follow underlying asset payments |

**Credit analysis**: Traditional analysis of both the **issuing institution** AND the **cover pool** — recovery rates tend to be high, default probabilities low → typically rated **several notches above** the issuing bank's own credit rating.

---

### Comparison: Corporate vs. Securitized Credit Analysis

| Dimension | Corporate Bonds | Securitized Debt |
|-----------|----------------|-----------------|
| **Obligor** | Full balance sheet | Specific asset pool / SPE |
| **Default driver** | Company-wide financial health | Asset pool performance + servicer quality + structure |
| **Credit analysis focus** | Income statement, leverage, cash flows | Collateral quality, servicer track record, structural enhancements |
| **Granularity** | Single entity | Portfolio (granular) or individual loans (non-granular) |
| **Recovery** | Depends on seniority | Determined by collateral type + structural protections |
| **POD estimation** | Fundamental analysis / structural model | Mean pool POD (granular) or loan-by-loan POD (non-granular) |

---

### Exam Tips

- **Granularity + homogeneity** = key dimensions determining analysis approach; know which asset types fall where
- **Granular + homogeneous → portfolio/statistical approach**; **non-granular + heterogeneous → loan-by-loan**
- **Three credit analysis areas for ABS**: asset pool quality, originator/servicer quality, transaction structure
- **Excess spread** = primary protection for consumer ABS investors (credit card, auto ABS)
- **Bankruptcy remoteness** requires a "true sale" — key legal concept for ABS
- **Covered bonds** = dual recourse (issuer + pool); **ABS** = pool only (bankruptcy remote from originator)
- **Dynamic cover pool** = covered bond feature that eliminates prepayment risk (replaced assets); static pool MBS has prepayment risk
- **Covered bonds rated several notches above issuing bank** — benefit from both dual recourse and EU BRRD protection
- **Servicer quality matters**: track record across credit cycles is as important as current creditworthiness