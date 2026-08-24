---
layout: page
title: "Non-CAMELS Factors and a Worked Bank Example"
permalink: /study/03-financial-statement-analysis/04-analysis-of-financial-institutions/04-non-camels-factors-and-worked-example/
next: /cfa/study/03-financial-statement-analysis/04-analysis-of-financial-institutions/05-insurance-company-analysis/
prev: /cfa/study/03-financial-statement-analysis/04-analysis-of-financial-institutions/03-camels-management-earnings-liquidity-sensitivity/
---
## Summary: Non-CAMELS Factors and a Worked Bank Example (CFA Level II — Financial Statement Analysis)

---

### Why CAMELS Isn't Enough

CAMELS is useful but **neither comprehensive nor fully integrated**. Two categories of gaps matter:

1. **Bank-specific** factors CAMELS doesn't address at all.
2. **General** factors relevant to *any* company (bank or not) that CAMELS also omits.

---

### Banking-Specific Factors Not Addressed by CAMELS

| Factor | Why It Matters | What to Examine |
|---|---|---|
| **Government support** | Governments have a strong interest in a healthy banking system (monetary policy transmission, payment processing, depositor confidence) — unlike most industries, banks may be rescued rather than allowed to fail | Bank size ("too big to fail"?); health of the national banking system (would the system absorb the failure or would government need to step in — the SIFI concept); precedent (e.g., 2008 TARP purchases + equity injections + arranged mergers) |
| **Government ownership** | A government equity stake signals implicit backstop likelihood | Direction of change in ownership stake (reduction *can* signal renewed strength if driven by improving fundamentals rather than random privatization) |
| **Mission of the banking entity** | A community bank tied to one local industry (farming, mining, one large employer) carries concentrated risk a global, diversified bank does not | How the bank's asset/liability management reflects its customer base's economics |
| **Corporate culture** | Risk-averse vs. risk-seeking culture drives volatility of results | Recent losses from narrowly concentrated bets; financial restatements from control failures; above-average equity-based pay (risk-taking incentive); history of slow loss-reserve recognition followed by large write-downs |

> **Key insight**: "Too big to fail" and the post-2008 **SIFI (systemically important financial institution)** designation exist precisely because CAMELS has no mechanism for capturing the *probability of external rescue* — a qualitative overlay an analyst must apply separately.

---

### General Factors Not Addressed by CAMELS (Relevant to Any Company)

| Factor | Banking-Specific Nuance |
|---|---|
| **Competitive environment** | A regional bank may hold a near-monopoly and take few risks; a global bank's managers may chase market share aggressively or accept slower, more profitable growth — capital allocation and risk culture both hinge on this |
| **Off-balance-sheet items** | Operating leases are low-risk and disclosed in footnotes; **variable interest entities (VIEs)** are higher-risk — a bank may hold an interest in a VIE without being required to consolidate it (interest in a VIE ≠ equity ownership); non-consolidated VIEs still require disclosure, and an analyst should scrutinize the non-consolidation rationale |
| **Benefit plans** | Technically on-balance-sheet (net position), but plan economics are unrelated to the bank's core business; market drops or falling discount rates can trigger sudden required contributions (cash drain) |
| **Assets under management (AUM)** | Client assets aren't consolidated onto the balance sheet, yet AUM-based fees can be material to results — size/growth trends in AUM matter even though the assets themselves never appear on the balance sheet |
| **Segment information** | Reveals how the chief operating decision maker allocates capital across business lines (domestic/foreign, consumer/industrial, trust operations, etc.) |
| **Currency exposure** | Larger for global banks; includes both *transaction* exposure (lending/funding in multiple currencies) and *translation* exposure (home-currency strengthening reduces reported capital upon consolidation of foreign subsidiaries) |
| **Risk factors (annual filing)** | Often dismissed as boilerplate legal worst-case scenarios, but can surface legal/regulatory issues not otherwise visible |
| **Basel III (Pillar 3) disclosures** | Extensive disclosure requirements designed to promote market discipline by giving investors consistent, comparable regulatory information beyond the minimum ratios themselves |

> **Key insight**: Derivatives accounting interacts with several of the above. At inception, most derivatives create no balance sheet entry (only a notional-amount disclosure). Once marked to market, gains/losses on **cash flow hedges** or **net investment hedges** flow through OCI; gains/losses on **fair value hedges** or **free-standing (non-hedge) derivatives** flow immediately through net income — the latter can create unexpected earnings volatility and missed earnings targets.

---

### Full Worked Example — Meridian National Bank CAMELS Assessment

Bringing together the ratios and ratings developed across this reading's CAMELS files, here is a complete rating narrative for **Meridian National Bank**, the fictional bank used throughout this module.

| Component | Key evidence | Rating (1 = best, 5 = worst) |
|---|---|---|
| **Capital adequacy** | CET1 6.63% (min 4.5%), Tier 1 7.65% (min 6.0%), Total capital 9.18% (min 8.0%) — comfortably above all Basel III minimums | **2** |
| **Asset quality** | Allowance/NPLs = 1.25x; Allowance/net charge-offs = 3.13x; Provision/net charge-offs = 1.13x — adequately, modestly conservatively reserved | **2** |
| **Management** | Two-thirds independent board (exceeds exchange minimums); separate CEO/Chair since inception; active risk committee; unqualified internal-controls opinion — good governance environment, but not, by itself, proof of superior skill | **2** |
| **Earnings** | NIM stable but a rising share of revenue from trading income over the period, and roughly half of recent pretax income growth traceable to lower loan-loss provisioning rather than core revenue growth | **3** |
| **Liquidity** | LCR 120% (min 100%), NSFR 114.5% (min 100%) — strong buffer on both the 30-day and 1-year horizons | **1** |
| **Sensitivity** | Asset-sensitive: NII +$45m on +100bp, −$60m on −100bp; VaR small relative to earnings and capital | **2** |

**Unweighted composite** = (2+2+2+3+1+2)/6 = **2.00**

**Equity-analyst-weighted composite** (Asset quality and Earnings weighted 2x): (2×1 + 2×2 + 2×1 + 3×2 + 1×1 + 2×1) / (1+2+1+2+1+1) = 17/8 = **2.13**

**Overall conclusion**: Meridian is a fundamentally sound bank — strong capital and liquidity, adequate asset quality — held back mainly by earnings quality concerns (growing trading-income reliance, provision-driven profit growth) that a targeted equity-focused weighting scheme correctly surfaces as the dominant issue. A debt investor weighting Capital and Liquidity more heavily would likely reach a more favorable composite than an equity investor focused on sustainable earnings power.

> **Key insight**: This is exactly the pattern CFA Institute's own Citigroup case study illustrates — a bank can be unambiguously well-capitalized and liquid while still carrying earnings-quality or asset-quality flags that only surface once you go ratio-by-ratio rather than relying on a single composite number.

---

### Question Set Answers

**Q1. A bank's non-consolidated VIE disclosure states the bank holds a meaningful economic interest but is not the "primary beneficiary." What should an analyst do?**
Scrutinize the stated rationale for non-consolidation for reasonableness (is the "not primary beneficiary" conclusion well-supported?) and separately assess the bank's exposure under adverse scenarios affecting the VIE, since the VIE's assets/liabilities are absent from the balance sheet but the bank's economic exposure is not zero.

**Q2. Why might reducing government ownership of a bank be read as a *positive* signal despite removing an implicit backstop?**
If the reduction reflects improving fundamentals (the market no longer requires taxpayer support to have confidence in the bank) rather than a policy-driven divestiture unrelated to health, markets may interpret it as a signal of renewed underlying strength — as occurred with several banks recapitalized during the 2008–2009 crisis.

**Q3. In the Meridian example, why does the equity-analyst-weighted composite (2.13) come out worse than the unweighted composite (2.00)?**
Because the weighting scheme double-weights Earnings — the single weakest component (rating of 3) — pulling the weighted average down (i.e., toward a worse/higher number) relative to a simple unweighted mean across all six components.
