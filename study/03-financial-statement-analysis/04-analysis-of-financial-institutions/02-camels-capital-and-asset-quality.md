---
layout: page
title: "CAMELS: Capital Adequacy and Asset Quality"
permalink: /study/03-financial-statement-analysis/04-analysis-of-financial-institutions/02-camels-capital-and-asset-quality/
next: /cfa/study/03-financial-statement-analysis/04-analysis-of-financial-institutions/03-camels-management-earnings-liquidity-sensitivity/
prev: /cfa/study/03-financial-statement-analysis/04-analysis-of-financial-institutions/01-what-makes-financial-institutions-different/
---
## Summary: CAMELS: Capital Adequacy and Asset Quality (CFA Level II — Financial Statement Analysis)

---

### The CAMELS Framework — Overview

**CAMELS** is an acronym for a bank rating approach originally developed by US regulators, now widely used for investment analysis as well:

| Letter | Component | What It Assesses |
|--------|-----------|-------------------|
| **C** | **C**apital adequacy | Proportion of risk-weighted assets funded with capital; loss-absorbing capacity |
| **A** | **A**sset quality | Credit risk in loans/investments; strength of risk management processes |
| **M** | **M**anagement capabilities | Ability to identify/exploit opportunities while managing risk; governance |
| **E** | **E**arnings sufficiency | Return on capital; sustainability/quality of earnings |
| **L** | **L**iquidity position | Liquid assets relative to near-term cash needs; funding stability |
| **S** | **S**ensitivity to market risk | Earnings/capital exposure to interest rate, FX, equity, commodity moves |

> **Key insight**: The ordering of the letters does **not** signify importance — Basel III treats strong capital and strong liquidity as equally important. CAMELS is neither comprehensive nor fully integrated; Learning file 04 covers what it leaves out.

**Rating mechanics:**
- Each component is rated **1 (best) to 5 (worst)**.
- A **composite rating** is built from the six component ratings — but it is **not a simple average**. The examiner (or analyst) applies judgment-based **weights** to each component.
- Two analysts can assign identical component ratings and still reach different composite ratings because of differing weights.
- Different investor types naturally weight differently: an **equity investor** may weight earnings/asset quality more heavily; a **fixed-income investor** may weight capital adequacy/liquidity more heavily.

---

### Capital Adequacy

Capital adequacy is described as the proportion of a bank's assets funded by capital, where assets are **risk-weighted** — riskier assets require more capital support.

**Step 1 — Risk-weighted assets (RWA):** Each asset (including off-balance-sheet exposures) is multiplied by a risk weight set by national regulators (informed by Basel III):

| Asset type | Typical risk weight |
|---|---|
| Cash | 0% |
| Corporate loans (performing) | 100% |
| High-volatility commercial real estate; loans >90 days past due | >100% |

$$\boxed{RWA = \sum (\text{Asset amount} \times \text{Risk weight})}$$

**Step 2 — Capital tiers (highest to lowest loss-absorbing quality):**

| Tier | Composition |
|---|---|
| **Common Equity Tier 1 (CET1)** | Common stock, issuance surplus, retained earnings, accumulated OCI, less deductions (intangibles, deferred tax assets) — the most loss-absorbing, permanent capital |
| **Additional Tier 1** | Instruments subordinate to deposits/debt, no fixed maturity, fully discretionary dividends/interest (e.g., qualifying preferred stock) |
| **Tier 2** | Subordinate to depositors/general creditors, ≥5-year original maturity, limited inclusion of loan-loss allowances |

$$\boxed{\text{Total Tier 1 Capital} = CET1 + \text{Additional Tier 1}}$$
$$\boxed{\text{Total Capital} = \text{Total Tier 1} + \text{Tier 2}}$$

**Step 3 — Basel III minimum ratios:**

$$\boxed{CET1\ \text{ratio} = \frac{CET1\ \text{Capital}}{RWA} \geq 4.5\%}$$

$$\boxed{\text{Tier 1 ratio} = \frac{\text{Total Tier 1 Capital}}{RWA} \geq 6.0\%}$$

$$\boxed{\text{Total capital ratio} = \frac{\text{Total Capital}}{RWA} \geq 8.0\%}$$

> **Key insight**: Individual jurisdictions' regulators have authority to set actual minimums for banks under their supervision — the Basel III figures above are the *global* floor.

---

### Worked Example — Meridian National Bank: Capital Adequacy

**Setup** ($ millions): Cash $200 (0% RW); performing corporate loans $8,000 (100% RW); residential mortgages $3,000 (50% RW); non-performing loans $200 (150% RW).

| Asset | Amount | Risk weight | RWA contribution |
|---|---|---|---|
| Cash | 200 | 0% | 0 |
| Corporate loans | 8,000 | 100% | 8,000 |
| Residential mortgages | 3,000 | 50% | 1,500 |
| Non-performing loans | 200 | 150% | 300 |
| **Total RWA** | | | **9,800** |

**Capital**: CET1 = $650m; Additional Tier 1 = $100m; Tier 2 = $150m.

$$CET1\ \text{ratio} = \frac{650}{9{,}800} = 6.63\% \quad(\text{minimum } 4.5\%)$$
$$\text{Tier 1 ratio} = \frac{650+100}{9{,}800} = 7.65\% \quad(\text{minimum } 6.0\%)$$
$$\text{Total capital ratio} = \frac{650+100+150}{9{,}800} = 9.18\% \quad(\text{minimum } 8.0\%)$$

**Conclusion**: Meridian comfortably exceeds all three Basel III minimums — capital adequacy alone would support a strong CAMELS "C" rating (this is combined with other components in file 04's full worked assessment).

> **Key insight (HSBC 2016 case)**: When a bank's capital *ratios* improve but its capital *balances* stay flat or shrink, check the denominator — a common driver is a **reduction in risk-weighted assets** (e.g., shrinking the loan book or de-risking the portfolio) rather than raising fresh capital.

---

### Asset Quality

Asset quality concerns both (1) the **composition** of a bank's assets by risk and (2) the **strength of risk management processes** by which assets are originated and monitored.

**Measurement basis varies by asset type:**

| Asset class | Measurement |
|---|---|
| Loans | Amortized cost, net of allowance for loan losses |
| Debt securities (IFRS: 3 categories) | Amortized cost / Fair value through OCI (FVOCI) / Fair value through P&L (FVTPL) — depends on business model + contractual cash flows |
| Debt securities (US GAAP) | Held-to-maturity (amortized cost) / Trading (FV through income) / Available-for-sale (FV through OCI) |
| Equity investments (US GAAP) | Fair value through net income (with limited cost-minus-impairment exception) |

**Asset risk ordering (lowest to highest):** highly liquid instruments (cash, interbank deposits, reverse repos) → investment securities (AFS/HTM) → loans (highest risk, usually largest asset class, embeds underwriting judgment).

> **Key insight**: "Reverse repurchase agreements" are a form of **collateralized loan** made by the bank (the lender) — don't confuse with "assets held for sale" (a discontinued-operations concept) or securities classified as "available for sale."

**Assessing loan-loss allowance adequacy** — three ratios, each comparing a *discretionary* measure to a more *objective* one:

$$\boxed{\text{Allowance to non-performing loans} = \frac{\text{Allowance for loan losses}}{\text{Non-performing (non-accrual) loans}}}$$

$$\boxed{\text{Allowance to net charge-offs} = \frac{\text{Allowance for loan losses}}{\text{Net loan charge-offs}}}$$

$$\boxed{\text{Provision to net charge-offs} = \frac{\text{Provision for loan losses}}{\text{Net loan charge-offs}}}$$

Where **net charge-offs = gross charge-offs − recoveries**, and the **provision** (income statement expense) is the amount added each period to the **allowance** (balance sheet contra-asset account).

| Ratio | Interpretation of a rising trend |
|---|---|
| Allowance / NPLs | Reserve is building ahead of loans turning non-performing → reassuring |
| Allowance / net charge-offs | Larger cushion between reserve and realized losses → reassuring |
| Provision / net charge-offs | Provisioning is keeping pace with (or exceeding) realized losses → conservative provisioning; a ratio persistently < 1.0 suggests the allowance has been under-provisioned relative to actual loss experience |

> **Limitation**: Net charge-offs and non-performing loans are *confirming* (lagging) indicators — the loss has already become apparent. The allowance and provision are *discretionary* (forward-looking, but manipulable) estimates. No single ratio is definitive; an analyst triangulates across all three, ideally split by loan segment (e.g., consumer vs. corporate), since underwriting dynamics differ materially.

---

### Worked Example — Meridian National Bank: Asset Quality

**Setup** ($ millions): Allowance for loan losses = $250; Non-performing loans = $200; Net charge-offs = $80; Provision for loan losses = $90.

$$\text{Allowance to NPLs} = \frac{250}{200} = 1.25\text{x}$$
$$\text{Allowance to net charge-offs} = \frac{250}{80} = 3.13\text{x}$$
$$\text{Provision to net charge-offs} = \frac{90}{80} = 1.13\text{x}$$

**Interpretation**: The allowance covers 125% of non-performing loans and more than 3x annual net charge-offs — a healthy cushion. Provisioning (1.13x) modestly exceeds current-period charge-offs, indicating the bank is building reserves slightly ahead of realized losses rather than merely keeping pace — a mildly conservative posture consistent with a CAMELS asset-quality rating in the "2" (good) range.

---

### Question Set Answers

**Q1. A bank's CET1 ratio rose from 12% to 14% year over year, while CET1 capital in dollar terms was flat. What is the most likely explanation?**
A decline in risk-weighted assets (the ratio's denominator) — e.g., loan book shrinkage or a shift toward lower-risk-weighted assets — rather than new capital raised, since the numerator was unchanged.

**Q2. Bank A's allowance-to-non-performing-loans ratio has declined for three straight years while net charge-offs have been rising. What does this suggest?**
Deteriorating asset quality and a thinning cushion — the allowance is not keeping pace with the loans actually turning non-performing, raising the risk that future provisions will need to catch up sharply (an "urgent adjustment"), which would also pressure the Earnings component of CAMELS.

**Q3. Why can two banks with identical CAMELS component ratings receive different composite CAMELS ratings?**
Because the composite is a *weighted* combination of the six components, and the weights reflect each analyst's/examiner's judgment about which risks matter most for their purpose (e.g., an equity investor weighting earnings and asset quality more heavily than a fixed-income investor would).
