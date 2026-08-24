---
layout: page
title: "Insurance Company Analysis"
permalink: /study/03-financial-statement-analysis/04-analysis-of-financial-institutions/05-insurance-company-analysis/
next: /cfa/study/03-financial-statement-analysis/04-analysis-of-financial-institutions/06-formula-summary/
prev: /cfa/study/03-financial-statement-analysis/04-analysis-of-financial-institutions/04-non-camels-factors-and-worked-example/
---
## Summary: Insurance Company Analysis (CFA Level II — Financial Statement Analysis)

---

### Insurers vs. Banks — A Different Toolkit Again

Insurance companies earn revenue from **premiums** and from investment income on the **float** — premiums collected but not yet paid out as benefits. Insurers act as both risk managers *and* investment companies. There is **no CAMELS-equivalent global framework** for insurers; instead, analysis centers on five common areas plus reserve/underwriting metrics specific to P&C.

| Analysis area | Applies to |
|---|---|
| Business profile | P&C and L&H |
| Earnings characteristics | P&C and L&H |
| Investment returns | P&C and L&H |
| Liquidity | P&C and L&H |
| Capitalization | P&C and L&H |
| Reserves + combined ratio | **P&C only** |

**P&C vs. L&H — the core distinction:**

| Feature | P&C Insurance | L&H Insurance |
|---|---|---|
| **Policy duration** | Short term (usually annual) | Longer term |
| **Claim timing certainty** | Final cost usually known within a year | N/A — benefit tied to mortality/health event |
| **Claim variability** | High — "lumpy" (accidents, catastrophes, unpredictable events) | Low — correlates with stable, actuarially based mortality rates across large populations |
| **Capital requirement** | Higher (claim unpredictability requires bigger equity cushion) | Lower, but sensitive to **interest rate risk** (long-duration liabilities) |
| **Investment risk appetite** | Conservative (claims can hit anytime) | Can accept more risk/higher-yielding assets given predictable claim timing |

> **Key insight**: This is the single most exam-relevant contrast in the insurance section — P&C's *unpredictable, short-duration* claims drive conservative, liquid investment portfolios and higher capital cushions; L&H's *predictable, long-duration* claims allow more investment risk-taking but introduce material interest rate/duration risk that P&C mostly avoids.

---

### Property and Casualty (P&C) Insurance

**Products**: Property insurance (loss/damage to buildings, autos, other tangible assets) vs. casualty/liability insurance (third-party legal liability). A single event can trigger both ("multiple peril" policies, e.g., an auto accident damaging the car *and* injuring passengers). Sold via **direct writing** (in-house sales staff — higher fixed cost) or **agency writing** (independent/exclusive agents and brokers — variable, commission-based cost).

**The underwriting cycle**: P&C is a cyclical, price-competitive business.
- **Soft market**: heavy price competition → falling premiums → depleted capital → tightening underwriting standards.
- **Hard market**: capital scarcity → less competition → rising premiums → improving profitability → new entrants → cycle repeats.

**The Combined Ratio — the key P&C underwriting profitability measure:**

$$\boxed{\text{Loss and LAE ratio} = \frac{\text{Loss expense} + \text{Loss adjustment expense (LAE)}}{\text{Net premiums earned}}}$$

$$\boxed{\text{Underwriting expense ratio} = \frac{\text{Underwriting expense}}{\text{Net premiums written}}}$$

$$\boxed{\text{Combined ratio} = \text{Loss and LAE ratio} + \text{Underwriting expense ratio}}$$

$$\boxed{\text{Combined ratio after dividends} = \text{Combined ratio} + \frac{\text{Dividends to policyholders}}{\text{Net premiums earned}}}$$

| Combined ratio | Meaning |
|---|---|
| **< 100%** | Underwriting profit — efficient operation |
| **= 100%** | Break-even underwriting |
| **> 100%** | Underwriting loss (must be offset by investment income to be profitable overall) |

> **Key distinction**: The loss and LAE ratio measures underwriting *quality* (how well risk was priced/estimated); the underwriting expense ratio measures operating *efficiency* (cost of acquiring/servicing business). A low combined ratio could stem from either — always check both components separately.

#### Worked Example — 2016 Combined Ratios, Selected P&C Insurers

| Insurer | Loss & LAE ratio | Underwriting expense ratio | Combined ratio | Combined ratio after dividends |
|---|---|---|---|---|
| Markel Corp. | 53.0% | 35.9% | **89.0%** | 89.0% |
| Travelers Companies | 61.4% | 32.6% | 94.0% | 97.1% |
| W. R. Berkley Corp. | 61.1% | 37.3% | 98.4% | 101.3% |
| CNA Financial Corp. | 76.1% | 39.9% | 116.0% | 127.7% |
| Hartford Financial Services Group | 82.2% | 48.8% | **131.0%** | 133.4% |

**Interpretation**: Markel had the best underwriting result (combined ratio 89% — clear underwriting profit); Hartford performed the worst (131% — a substantial underwriting loss, driven by *both* an elevated loss ratio and an elevated expense ratio, signaling issues in both risk selection/pricing and operating efficiency). Travelers ranks in the better-performing half of the group on all three ratios.

**Loss reserves** are the critical, judgment-heavy P&C liability:
- Reserves = estimated ultimate cost of claims incurred but not yet fully paid (including IBNR — incurred but not reported).
- **Underestimating reserves** → policies underpriced for the risk actually borne → potential insolvency down the road.
- The longer the tail (e.g., asbestos/environmental liabilities), the harder reserves are to estimate — historical loss experience can diverge sharply from eventual payouts.
- **Reinsurance** — ceding a portion of risk to a reinsurer for a premium — reduces net reserve exposure; a P&C insurer's gross-to-net reserve reduction percentage indicates how much risk-transfer is in use.
- **Downward reserve revisions** (releasing redundant prior-year reserves) can meaningfully boost current-period pretax income — a recurring pattern of releases contributing double-digit percentages to pretax income is worth flagging: it may reflect appropriately conservative initial reserving, *or* it may be a tool for smoothing/managing earnings.

**Investment returns**: P&C insurers hold conservative, liquid portfolios (dominated by fixed-maturity securities, with only small equity/real estate allocations) because claim timing is unpredictable. Investment performance is commonly measured as:

$$\boxed{\text{Investment return} = \frac{\text{Investment income (± unrealized gains)}}{\text{Invested assets (cash + investments)}}}$$

**Liquidity**: assessed via the **fair value hierarchy** (Level 1/2/3, as in bank Asset quality analysis) — a portfolio concentrated in Level 1/2 (vs. Level 3) implies greater ease of converting investments to cash without moving the price.

**Capitalization**: No single global risk-based capital standard exists for insurers (unlike Basel III for banks), but jurisdictional regimes exist:

| Regime | Jurisdiction | Approach |
|---|---|---|
| **Solvency II** | European Union (2014) | Minimum capital requirements; supervisory intervention if breached |
| **NAIC Risk-Based Capital** | United States | Minimum capital based on size/risk profile; incorporates asset risk, credit risk, underwriting risk (P&C) |

---

### Life and Health (L&H) Insurance

**Products**: Range from pure protection (**term life** — pays only if death occurs within the term, otherwise expires worthless) to combined protection-plus-savings vehicles (whole/universal life, annuities with fixed or market-linked payments). Health products cover specific medical expenses/treatments or income replacement during illness/injury.

**Distribution**: Direct (electronic/employee channels) or agency (employee, exclusive, or independent agents) — independent agents cost more per sale but minimize fixed costs and add growth flexibility.

**Diversification** matters across revenue sources, product offerings, geography, distribution channels, and investment assets. A company earning a smaller share of revenue from premiums (vs. investment/fee income) is typically viewed as more diversified — though premium income is also comparatively more *stable*, so diversification and stability can trade off against each other.

**Earnings characteristics**: Major expense = benefit payments to policyholders (life, annuity, other contracts). **Contract surrender** (early cancellation with return of accumulated cash value) is a source of additional expense. Like P&C, L&H earnings involve significant estimates:
- Future policyholder benefits/claims based on **actuarial assumptions** (life expectancy, etc.).
- Capitalized **acquisition costs** for new/renewal business, amortized against expected future profits from that business.
- Potential **asset/liability measurement mismatches**: assets often reported at current market value while long-duration liabilities are carried at fixed historical-cost assumptions — interest rate changes can create earnings distortions that don't reflect true economic performance.

**Common profitability measures**: ROA, ROE, growth/volatility of capital, book value per share, pre-/post-tax operating margin, pre-/post-tax operating ROA/ROE. Insurance-specific measures (e.g., A.M. Best): total benefits paid as % of net premiums written + deposits; commissions and expenses as % of net premiums written + deposits.

**Investment returns**: L&H's more predictable claim timing generally permits **higher risk tolerance** than P&C — more allocation to equities, real estate, and other higher-yielding (more volatile) assets. A prolonged low-interest-rate environment is a structural headwind, compressing achievable risk-adjusted returns. Key interest-rate-risk tool:

$$\boxed{\text{Duration gap} = \text{Duration of assets} - \text{Duration of liabilities}}$$

A large positive or negative duration gap signals asset/liability mismatch and interest rate risk exposure — the L&H analogue to a bank's contractual maturity mismatch.

#### Worked Example — Estimating Fixed-Income Investment Return

An L&H insurer's fixed-income portfolio (loans/deposits + debt securities) averaged $116,265.5m over the year (average of $122,829m beginning and $109,702m ending fixed-income balances, illustratively). Interest income was $5,290m and realized gains on debt securities were $127m.

$$\text{Investment income on fixed-income assets} = 5{,}290 + 127 = 5{,}417$$
$$\text{Return on fixed-income assets} = \frac{5{,}417}{116{,}265.5} = 4.7\%$$

> **Key insight**: Always combine interest/dividend income *and* realized (and, separately, unrealized) gains/losses when evaluating total investment performance — a portfolio's income-statement "interest income" line alone understates total investment return.

**Liquidity**: Historically less critical for L&H than for banks or P&C (long-duration traditional products), but has grown in importance as products with surrender/withdrawal features have proliferated. Liquidity measures compare liquid assets to near-term liabilities, but the standard "current ratio" doesn't translate well — L&H balance sheets typically lack a current/non-current classification.

**Capitalization**: As with P&C, no global standard; jurisdictional risk-based capital regimes apply, but L&H's risk-based capital calculation differs in two ways from P&C's:
1. **Lower capital cushion generally required** — claim predictability reduces required equity relative to P&C.
2. **Interest rate risk is explicitly incorporated** — reflecting L&H's material exposure to duration/asset-liability mismatch, which P&C's risk-based capital calculation does not need to emphasize to the same degree.

---

### Question Set Answers

**Q1. Insurer X has a loss and LAE ratio of 55% and an underwriting expense ratio of 50% (combined ratio 105%). Insurer Y has a loss and LAE ratio of 70% and an underwriting expense ratio of 25% (combined ratio 95%). Which has the healthier underwriting operation, and what does each insurer need to work on?**
Insurer Y (combined ratio 95% < 100%, an underwriting profit) is healthier overall. Insurer X has an underwriting *loss* (105%) driven mainly by high operating costs (50% expense ratio) rather than poor risk pricing (55% loss ratio is not unreasonable) — X's priority is operating efficiency. Y's loss ratio (70%) is comparatively high, so Y should examine underwriting/pricing quality even though its overall combined ratio looks fine.

**Q2. Why can P&C insurers tolerate less investment risk than L&H insurers, even though both invest float?**
P&C claims are unpredictable in timing and size ("lumpy," driven by accidents/catastrophes), so the insurer may need to liquidate investments on short notice to pay claims — favoring liquid, low-volatility holdings. L&H claims correlate with stable, predictable actuarial mortality/health experience across large populations, allowing a longer investment horizon and higher risk tolerance.

**Q3. An L&H insurer reports declining investment income for two straight years, and premiums have grown as a share of total revenue as a result — not because premium growth accelerated. How should an analyst interpret the change in revenue mix?**
The improved revenue "diversification" metric is misleading here — it results from a shrinking, not a strengthening, revenue base (falling investment income), not from genuinely broader-based growth. The analyst should examine why investment income fell (asset mix, low-rate environment, realized losses) rather than treating a higher premium share as a straightforwardly positive diversification signal.
