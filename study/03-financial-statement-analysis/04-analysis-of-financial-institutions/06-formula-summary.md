---
layout: page
title: "Formula Summary: Analysis of Financial Institutions"
permalink: /study/03-financial-statement-analysis/04-analysis-of-financial-institutions/06-formula-summary/
prev: /cfa/study/03-financial-statement-analysis/04-analysis-of-financial-institutions/05-insurance-company-analysis/
---
## Formula Summary: Analysis of Financial Institutions (CFA Level II — Financial Statement Analysis)

---

### 1. Capital Adequacy (Bank)

$$\boxed{RWA = \sum (\text{Asset amount} \times \text{Risk weight})}$$

$$\boxed{CET1\ \text{ratio} = \frac{\text{Common Equity Tier 1 Capital}}{RWA} \geq 4.5\%}$$

$$\boxed{\text{Tier 1 ratio} = \frac{CET1 + \text{Additional Tier 1 Capital}}{RWA} \geq 6.0\%}$$

$$\boxed{\text{Total capital ratio} = \frac{\text{Tier 1 Capital} + \text{Tier 2 Capital}}{RWA} \geq 8.0\%}$$

---

### 2. Asset Quality (Bank)

$$\boxed{\text{Allowance to non-performing loans} = \frac{\text{Allowance for loan losses}}{\text{Non-performing (non-accrual) loans}}}$$

$$\boxed{\text{Allowance to net charge-offs} = \frac{\text{Allowance for loan losses}}{\text{Net loan charge-offs}}}$$

$$\boxed{\text{Provision to net charge-offs} = \frac{\text{Provision for loan losses}}{\text{Net loan charge-offs}}}$$

> Net charge-offs = Gross charge-offs − Recoveries.

---

### 3. Earnings (Bank)

$$\boxed{NIM = \frac{\text{Net interest income}}{\text{Average interest-earning assets}}}$$

**Fair value hierarchy** (least to most management judgment): Level 1 (quoted, identical instrument) → Level 2 (observable, similar/inactive market) → Level 3 (unobservable, model-based).

---

### 4. Liquidity (Bank — Basel III)

$$\boxed{LCR = \frac{\text{High-quality liquid assets}}{\text{Net cash outflows over 30 days (stress)}} \geq 100\%}$$

$$\boxed{NSFR = \frac{\text{Available stable funding}}{\text{Required stable funding}} \geq 100\%}$$

---

### 5. Sensitivity to Market Risk (Bank)

Interest rate sensitivity disclosure: estimated NII impact of a parallel rate shift (e.g., ±25bp/quarter or ±100bp).

**Asset-sensitive bank**: NII rises when rates rise (assets reprice faster/more than liabilities). **VaR**: estimated potential loss at a given confidence level and holding period — trend-useful within one company, not comparable across companies.

---

### 6. Overall CAMELS Composite

$$\boxed{\text{Unweighted composite} = \frac{\text{Sum of six component ratings (1 = best, 5 = worst)}}{6}}$$

$$\boxed{\text{Weighted composite} = \frac{\sum (\text{Rating}_i \times \text{Weight}_i)}{\sum \text{Weight}_i}}$$

---

### 7. P&C Insurance

$$\boxed{\text{Loss and LAE ratio} = \frac{\text{Loss expense} + \text{Loss adjustment expense}}{\text{Net premiums earned}}}$$

$$\boxed{\text{Underwriting expense ratio} = \frac{\text{Underwriting expense}}{\text{Net premiums written}}}$$

$$\boxed{\text{Combined ratio} = \text{Loss and LAE ratio} + \text{Underwriting expense ratio}}$$

$$\boxed{\text{Combined ratio after dividends} = \text{Combined ratio} + \frac{\text{Dividends to policyholders}}{\text{Net premiums earned}}}$$

---

### 8. L&H Insurance

$$\boxed{\text{Duration gap} = \text{Duration of assets} - \text{Duration of liabilities}}$$

---

### 9. Insurer Investment Performance (Both P&C and L&H)

$$\boxed{\text{Investment return} = \frac{\text{Investment income} (\pm \text{realized/unrealized gains})}{\text{Invested assets (cash + investments)}}}$$

---

### Quick Reference — All Formulas

| Measure | Formula |
|---|---|
| Risk-weighted assets | Σ (Asset amount × Risk weight) |
| CET1 ratio | CET1 Capital / RWA ≥ 4.5% |
| Tier 1 ratio | (CET1 + Additional Tier 1) / RWA ≥ 6.0% |
| Total capital ratio | (Tier 1 + Tier 2 Capital) / RWA ≥ 8.0% |
| Allowance / NPLs | Allowance for loan losses / Non-performing loans |
| Allowance / net charge-offs | Allowance for loan losses / Net loan charge-offs |
| Provision / net charge-offs | Provision for loan losses / Net loan charge-offs |
| Net interest margin (NIM) | Net interest income / Average interest-earning assets |
| Liquidity Coverage Ratio (LCR) | HQLA / 30-day stress net cash outflows ≥ 100% |
| Net Stable Funding Ratio (NSFR) | Available stable funding / Required stable funding ≥ 100% |
| CAMELS unweighted composite | Sum of 6 ratings / 6 |
| CAMELS weighted composite | Σ(Rating × Weight) / Σ Weight |
| Loss and LAE ratio | (Loss expense + LAE) / Net premiums earned |
| Underwriting expense ratio | Underwriting expense / Net premiums written |
| Combined ratio | Loss and LAE ratio + Underwriting expense ratio |
| Combined ratio after dividends | Combined ratio + (Dividends to policyholders / Net premiums earned) |
| Duration gap (L&H) | Duration of assets − Duration of liabilities |
| Insurer investment return | Investment income (± gains) / Invested assets |

---

### Exam Tips

- **Leverage is not, by itself, a red flag for a bank** — it's structural to the deposit-taking/loan-making business model. The analytical question is whether capital is *adequate relative to risk-weighted assets*, not whether leverage exists at all.
- **CAMELS letters carry no priority ordering** — Basel III treats Capital and Liquidity as equally important; don't assume "C" outranks "L" or "S."
- **Composite CAMELS rating ≠ simple average** unless every component happens to receive the same rating — always check whether the question specifies weights.
- **Basel III minimums to memorize cold**: CET1 ≥ 4.5%, Tier 1 ≥ 6.0%, Total capital ≥ 8.0%, LCR ≥ 100% (30-day), NSFR ≥ 100% (1-year).
- **Three loan-loss ratios each pair a discretionary number (allowance, provision) against an objective/lagging one (NPLs, net charge-offs)** — rising allowance/NPL and allowance/charge-off ratios are reassuring; a provision/charge-off ratio persistently below 1.0 signals under-provisioning.
- **Trading income is the least sustainable earnings source** for a bank; net interest income and fee income are higher quality. A rising trading-income share should push the Earnings CAMELS rating *up* (worse).
- **Fair value Level 3 = highest management judgment** — rising Level 3 exposure is an earnings-quality and asset-quality caution flag.
- **Non-CAMELS factors matter and are commonly tested**: government support/ownership (too big to fail, SIFI), corporate culture, competitive environment, off-balance-sheet items (VIEs, benefit plans, AUM), segment info, currency exposure, Basel III Pillar 3 disclosures.
- **VIE consolidation ≠ equity ownership test** — a bank can be required to consolidate a VIE with zero equity stake if it's the primary beneficiary; conversely, a non-consolidated VIE still carries disclosed (and analytically relevant) exposure.
- **P&C vs. L&H is the core insurance contrast**: P&C = short-duration, unpredictable/"lumpy" claims → conservative/liquid investments, higher capital cushion. L&H = long-duration, predictable (actuarial) claims → higher risk tolerance in investments, lower capital cushion, but material interest rate/duration risk.
- **Combined ratio < 100% = underwriting profit; > 100% = underwriting loss** — always decompose into the loss & LAE ratio (pricing/reserving quality) vs. the underwriting expense ratio (operating efficiency) rather than reading the combined number alone.
- **Downward reserve revisions boost current income** — recurring, large contributions to pretax income from prior-year reserve releases can reflect either conservative initial reserving or earnings management; investigate the trend.
- **No global insurer capital standard exists** (unlike Basel III for banks) — jurisdictional regimes (Solvency II in the EU, NAIC risk-based capital in the US) fill the gap; L&H risk-based capital explicitly incorporates interest rate risk, P&C's does not need to as much.
- **Reinsurance reduces net risk exposure** — track the gross-to-net reserve reduction percentage as an indicator of risk-transfer intensity.
