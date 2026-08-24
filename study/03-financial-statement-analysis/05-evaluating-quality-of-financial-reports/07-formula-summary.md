---
layout: page
title: "Formula Summary: Evaluating Quality of Financial Reports (CFA Level II — Financial Statement Analysis)"
permalink: /study/03-financial-statement-analysis/05-evaluating-quality-of-financial-reports/07-formula-summary/
prev: /cfa/study/03-financial-statement-analysis/05-evaluating-quality-of-financial-reports/06-cash-flow-and-balance-sheet-quality/
---
## Formula Summary: Evaluating Quality of Financial Reports (CFA Level II — Financial Statement Analysis)

---

### 1. Limited Usefulness of the Auditor's Opinion as a Source of Risk Information

An audit opinion states that financial statements are fairly presented in conformity with GAAP/IFRS, and (where required) that internal controls over financial reporting are effective. It is **rarely a timely source of risk information** for two structural reasons:

1. It addresses **historical** information — by the time it is issued, more current signals (market data, operational trends) typically already reflect emerging problems.
2. Clean opinions can persist right up to the edge of failure.

> **Example — Eastman Kodak**: Filed for bankruptcy on **19 January 2012**. Its audit opinion, dated **28 February 2012** (over a month *later*), added a going-concern paragraph — information the market already knew from the bankruptcy filing itself. The audit opinion covered financial statements that had **not been adjusted** to reflect the bankruptcy at all.

> **Example — Groupon**: Went public November 2011; disclosed a "material weakness" in internal controls in March 2012 — but **no external auditor opinion on internal controls was required** for its first annual filing (newly-public-company exemption), so no negative opinion ever flagged the weakness while it existed. By the time the *next* annual filing's audit opinion appeared, the weakness had already been remediated and the opinion was clean. Meanwhile, far more timely warning signs were visible **months earlier**: revenue growing >300x (2008→2009) and >23x (2009→2010), driven by 17 acquisitions in about a year, expansion to 45 countries, and employee headcount growth from 37 to 9,625 in two years — a scale of expansion incompatible with well-functioning internal controls, as an August 2011 blog post presciently argued *before* the weakness was disclosed.

**What actually is useful about the auditor relationship:**
- **Discretionary auditor changes** — especially *multiple* changes in a short window — signal possible "auditor shopping." One of Bernie Madoff's largest feeder funds had **three different auditors in three years** (2004–2006), flagged in Congressional testimony as a major warning sign.
- **Auditor capacity relative to client complexity** — Madoff's own $50 billion operation was audited by a **three-person firm** (two principals, one secretary); a glaring mismatch between auditor scale and client scale.
- **Any indication of impaired auditor independence** (unusually close management relationship; client representing a large share of the audit firm's revenue).

---

### 2. Risk-Related Disclosures in the Notes

Both IFRS and US GAAP require specific risk disclosures for:

| Disclosure Area | What to Look For |
|---|---|
| **Contingent obligations** | Description, estimated amount, timing, and uncertainties (e.g., decommissioning/restoration, litigation, environmental provisions) — track **year-to-year changes** in management's estimates |
| **Pension and post-employment benefits** | Actuarial risk (assumptions like the discount rate could diverge from actual outcomes) and investment risk (plan asset performance vs. estimates) |
| **Financial instruments** | Credit risk, liquidity risk, market risk (interest rate, FX, commodity) and how each is managed — often includes quantified sensitivity disclosures (e.g., "+1% rates → −$X pre-tax income") |

> **Practical use — Royal Dutch Shell example**: Shell disclosed that a 1% rate increase would reduce pre-tax income by $27 million against $50,289 million of pre-tax income (<0.1% — immaterial), while a 10% appreciation of the Australian dollar would raise pre-tax income by $246 million (~0.5%). Quantified sensitivities let the analyst directly size the materiality of a disclosed risk rather than treating all disclosed risks as equally important.

---

### 3. Management Commentary, Other Required Disclosures, and the Financial Press

**Management commentary (MD&A):**
- Under the **IFRS Practice Statement, Management Commentary** (2010, non-binding), five elements should be covered: (1) nature of the business, (2) objectives and strategies, (3) resources/risks/relationships, (4) results and prospects, (5) performance measures and indicators — with the risks section emphasizing **principal** risks, not an exhaustive generic list.
- US public companies must include **MD&A as Item 7** of Form 10-K, covering liquidity, capital resources, results of operations, off-balance-sheet arrangements, and contractual arrangements, plus **quantitative/qualitative market risk disclosure as Item 7A**.
- **Common failure mode**: generic, boilerplate risk factors that apply to any company in the industry (e.g., Autonomy Corporation's 2010 "Key Risks and Uncertainties" ran two pages of largely generic items — competition, key-person risk, macro conditions) can **bury** the specific, decision-relevant risks an analyst actually needs. (Autonomy was acquired by HP in 2011; HP subsequently took a multi-billion-dollar impairment, attributing it to accounting improprieties at Autonomy.)

**Other required, event-specific disclosures:**
- US: **Form 8-K** for specific events (capital raising, management changes, M&A); **Form NT** ("notification of inability to timely file") — an NT filing is a **strong** signal of financial reporting trouble (internal disagreement on accounting, inadequate finance staff, or discovery of fraud requiring investigation).
- Europe: national-authority ad hoc disclosure regimes (formerly CESR, now ESMA) cover similar events — control changes, management/board changes, M&A, legal disputes, new patents/licenses.
- A sudden CFO or external auditor resignation, or a legal dispute over a key asset, are direct warning signs regardless of jurisdiction.

**Financial press:**
- Can surface reporting issues *before* they are otherwise recognized — e.g., WSJ reporter Jonathan Weil's 2000 article on Enron's aggressive "gain-on-sale" accounting is cited by short seller Jim Chanos as the catalyst for his own (successful, pre-bankruptcy) investigation of Enron.
- Press coverage should always be a **starting point, not an endpoint** — verify via primary regulatory filings (10-K/10-Q) and corroborate with other independent sources (insider trading data, business strategy analysis, other analysts' views). Weigh source credibility: established financial news providers vs. blogs/individuals with a product or service to sell.

---

### 4. Beneish M-Score (Recap)

$$\boxed{M\text{-score} = -4.84 + 0.920\,DSRI + 0.528\,GMI + 0.404\,AQI + 0.892\,SGI + 0.115\,DEPI - 0.172\,SGAI + 4.679\,TATA - 0.327\,LVGI}$$

| Variable | Formula |
|---|---|
| DSRI | $(Receivables_t/Sales_t)/(Receivables_{t-1}/Sales_{t-1})$ |
| GMI | $Gross\ margin_{t-1}/Gross\ margin_t$ |
| AQI | $[1-(PPE_t+CA_t)/TA_t]/[1-(PPE_{t-1}+CA_{t-1})/TA_{t-1}]$ |
| SGI | $Sales_t/Sales_{t-1}$ |
| DEPI | $Depreciation\ rate_{t-1}/Depreciation\ rate_t$ |
| SGAI | $(SGA_t/Sales_t)/(SGA_{t-1}/Sales_{t-1})$ |
| TATA (Accruals) | $(\text{Income before extraordinary items} - CFO)/Total\ assets$ |
| LVGI | $Leverage_t/Leverage_{t-1}$, Leverage = Debt/Assets |

**Cutoff**: M-score > **−1.78** (≈ 3.8% probability of manipulation) flags a likely manipulator. Higher (less negative) M-scores → higher manipulation probability.

---

### 5. Altman Z-Score (Recap)

$$\boxed{Z\text{-score} = 1.2\left(\frac{\text{NWC}}{TA}\right) + 1.4\left(\frac{\text{Retained earnings}}{TA}\right) + 3.3\left(\frac{EBIT}{TA}\right) + 0.6\left(\frac{\text{MV equity}}{\text{BV liabilities}}\right) + 1.0\left(\frac{\text{Sales}}{TA}\right)}$$

| Zone | Z-score | Interpretation |
|---|---|---|
| Distress | < 1.81 | High bankruptcy probability |
| Grey | 1.81 – 3.00 | Ambiguous |
| Safe | > 3.00 | Low bankruptcy probability |

---

### 6. Earnings Persistence and Accruals (Recap)

$$Earnings_{t+1} = \alpha + \beta_1\,Earnings_t + \varepsilon \qquad \text{(higher } \beta_1 \text{ = more persistent)}$$

$$Earnings_{t+1} = \alpha + \beta_1\,CashFlow_t + \beta_2\,Accruals_t + \varepsilon \qquad \text{(empirically, } \beta_1 > \beta_2\text{)}$$

> **Higher accruals share of earnings → lower persistence → faster mean reversion.**

---

### Quick Reference — All Models and Ratios

| Measure | Formula / Threshold |
|---|---|
| Beneish M-score cutoff | M-score > −1.78 (≈3.8% probability) → flag as likely manipulator |
| Altman Z-score zones | <1.81 distress; 1.81–3.00 grey; >3.00 safe |
| DSO | Accounts receivable / (Revenue/365) |
| AR turnover | 365 / DSO, or Revenue / Average AR |
| Recurring/core earnings | Reported earnings + non-recurring expenses − non-recurring gains |
| Sealed Air-style goodwill red flag | Market cap < Reported goodwill → implied negative value on all other assets |

---

### Exam Tips

- **The two-question conceptual framework is the exam's anchor**: (1) GAAP-compliant and decision-useful? (2) Adequate return and sustainable? Any vignette describing a quality issue can be mapped onto where it falls on the spectrum using these two questions.
- **Know the Beneish M-score variables cold** — both the standard names (DSRI, GMI, AQI, SGI, DEPI, SGAI, TATA, LVGI) and the curriculum's own labels (DSR, Accruals, LEVI). Memorize which direction (>1 or <1) signals manipulation risk for each, and the −1.78 cutoff / ≈3.8% probability benchmark.
- **TATA (accruals/total assets) has the single largest Beneish coefficient (4.679)** — accruals size is the strongest individual predictor in the model. This connects directly to the Sloan (1996) persistence result: cash-flow-driven earnings persist more than accrual-driven earnings.
- **Net income > CFO is a warning sign, but its absence does NOT clear a company** — Enron and WorldCom both showed CFO exceeding net income throughout their fraud years (via engineered CFO-boosting transactions and improper capitalization, respectively). Satyam's fraud was specifically designed to defeat this screen.
- **Altman Z-score**: know all five ratios, their categories (liquidity/profitability/leverage/activity), and the three zones (<1.81 / 1.81–3.00 / >3.00). Remember its two core limitations — static/single-period, and reliance on going-concern accounting values — and the fixes (Shumway's hazard model; Merton/KMV market-based models; Bharath and Shumway's combined model).
- **Quantitative models show association, not causation**, and their power **decays over time** as managers learn to game them — always pair with qualitative analysis.
- **Case study mechanisms, memorized cold**:
  - **Sunbeam** = premature/fraudulent **revenue** recognition (channel stuffing + bill-and-hold) → receivables growing far faster than revenue, rising DSO vs. peers.
  - **MicroStrategy** = multiple-element **contract misallocation** (services revenue mischaracterized as license revenue) → erratic quarterly revenue-mix swings.
  - **WorldCom** = improper **cost capitalization** (operating "line costs" capitalized as PP&E) → sudden, unexplained jump in gross PP&E as % of total assets.
- **Classification shifting doesn't change total net income or total cash flow** — it moves items between "core"/"non-core" (income statement) or between operating/investing/financing (cash flow statement) to flatter the metric analysts focus on. Always compare the *same period* as reported in consecutive filings to catch reclassifications (Nautica).
- **Balance sheet quality = completeness + unbiased measurement + clear presentation.** Goodwill exceeding market cap (Sealed Air) is a classic unbiased-measurement red flag pointing to an overdue impairment.
- **The auditor's opinion is a lagging indicator** — Kodak's going-concern paragraph arrived *after* the bankruptcy filing; Groupon's material weakness was never flagged by an audit opinion at all due to a newly-public exemption. Auditor *changes* (especially multiple, rapid changes) are more informative than the opinion's content itself.
- **IFRS vs. US GAAP cash flow classification flexibility**: IFRS allows a choice for interest paid (operating or financing) and interest/dividends received (operating or investing); US GAAP requires all three in operating. Always check for consistency when comparing an IFRS reporter to a US GAAP reporter, and for a single company changing its own classification year over year.
