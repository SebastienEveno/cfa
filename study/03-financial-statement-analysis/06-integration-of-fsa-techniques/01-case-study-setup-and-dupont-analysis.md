---
layout: page
title: "Case Study Setup and DuPont Analysis"
permalink: /study/03-financial-statement-analysis/06-integration-of-fsa-techniques/01-case-study-setup-and-dupont-analysis/
next: /cfa/study/03-financial-statement-analysis/06-integration-of-fsa-techniques/02-capital-structure-and-segment-analysis/
---
## Summary: Case Study Setup and DuPont Analysis (CFA Level II — Financial Statement Analysis)

---

### Introduction: Why This Module Matters

Financial analysis is a **means to an end**, not the end itself — the goal is to support an economic decision (buy/hold/sell equity, extend credit, assign a rating). Rather than mechanically applying every ratio and technique, an analyst should select the tools that answer the specific question at hand. This module is a single extended **case study** (Nestlé S.A., analyzed by a pension-fund portfolio manager's analyst) that walks through a standard six-phase framework end to end, integrating tools from every other FSA learning module: ratio analysis, DuPont decomposition, segment analysis, and accruals/earnings-quality diagnostics.

> **Key insight**: The exam value of this LM is twofold — (1) know the six phases cold (their sequence, inputs, and outputs), and (2) be able to apply the *toolkit* (DuPont, accruals ratios, cash flow ratios, sum-of-the-parts valuation) to an unfamiliar company the way the analyst does here.

---

### The Six-Phase Financial Statement Analysis Framework

| Phase | Sources of Information | Examples of Output |
|-------|------------------------|---------------------|
| **1. Define the purpose and context of the analysis** | Nature of the analyst's function (equity/debt investment, credit rating); communication with client/supervisor; institutional guidelines | Statement of the purpose/objective; list of specific questions to be answered; nature/content of the report; timetable and budget |
| **2. Collect input data** | Financial statements, other financial data, questionnaires, industry/economic data; discussions with management, suppliers, customers, competitors; company site visits | Organized financial statements; financial data tables; completed questionnaires |
| **3. Process data** (as required, into analytically useful data) | Data from Phase 2 | Adjusted financial statements; common-size statements; ratios and graphs; forecasts |
| **4. Analyze/interpret the data** | Input data and processed data | Analytical results |
| **5. Develop and communicate conclusions and recommendations** (e.g., with an analysis report) | Analytical results and previous reports; institutional guidelines for published reports | Analytical report answering the Phase 1 questions; recommendation (e.g., invest or not, grant credit or not) |
| **6. Follow-up** | Periodically repeating the above steps to determine whether changes to holdings/recommendations are needed | Updated reports and recommendations |

> **Key insight**: Phases 3 and 4 (process and analyze/interpret) are typically performed **jointly** in practice — as the analyst processes raw data into ratios and adjusted statements, interpretation happens simultaneously. This case study spends nearly all of its effort here.

---

### Case Study Setup

**Scenario**: A portfolio manager (PM) for the food sector of a large public pension fund wants to take a **long-term core equity position** in Nestlé S.A. based on Nestlé's stated strategy of leadership in "Nutrition, Health and Wellness." Before committing, the PM asks an analyst to address three concerns:

1. **Sources and sustainability of earnings growth** — do reported earnings reflect economic reality, and will performance be sustainable over a 5–10 year core-holding horizon?
2. **Earnings-to-cash-flow relationship** — quality of earnings over a long horizon.
3. **Balance sheet strength and capital structure** — can the balance sheet support future operations and strategy, without the risk of dilutive "balance-sheet repair" issuance?

The analyst addresses these concerns by working through the six-phase framework, with **Phases 3 and 4 as the bulk of the work**.

#### Phase 1: Define a Purpose for the Analysis

The analyst states the purpose: **identify the factors that have driven Nestlé's financial success and assess their sustainability**, and identify risks that could threaten that sustainability.

#### Phase 2: Collect Input Data

The analyst gathers several years of Nestlé annual reports (income statements, balance sheets, cash flow statements, segment footnotes) from the company's website.

#### Phases 3 and 4: The Analytical Plan

The analyst plans a sequence of analyses to accomplish the Phase 1 purpose:

1. **DuPont analysis** (this file)
2. **Composition of the asset base** (file 2)
3. **Capital structure analysis** (file 2)
4. **Segment analysis and capital allocation** (file 2)
5. **Accruals and earnings quality** (file 3)
6. **Cash flow adequacy** (file 3)
7. **Decomposition and analysis of valuation** (file 3)

> **Key insight**: Starting with a DuPont analysis is a *choice*, not a mandate — a different analyst might start with a time-series common-size income statement instead. The starting point depends on the analyst's own perspective; what matters on the exam is being able to execute the full toolkit, not memorizing a rigid order.

---

### DuPont Analysis — The Core Technique

The premise underlying DuPont analysis — and financial analysis generally — is **"seeking granularity"**: constantly disaggregating summary figures (a single line item, a segment, an entire ROE number) to reveal what is really driving performance, expose weak operations hidden inside strong aggregates, and open a dialogue with management about problems.

**Three-way decomposition:**

$$\boxed{ROE = \text{Net profit margin} \times \text{Asset turnover} \times \text{Financial leverage}}$$

$$ROE = \frac{\text{Net income}}{\text{Sales}} \times \frac{\text{Sales}}{\text{Avg. total assets}} \times \frac{\text{Avg. total assets}}{\text{Avg. total equity}}$$

**Five-way decomposition** (splits net profit margin into tax burden × interest burden × EBIT margin):

$$\boxed{ROE = \text{Tax burden} \times \text{Interest burden} \times \text{EBIT margin} \times \text{Asset turnover} \times \text{Financial leverage}}$$

$$ROE = \frac{\text{Net income}}{\text{EBT}} \times \frac{\text{EBT}}{\text{EBIT}} \times \frac{\text{EBIT}}{\text{Sales}} \times \frac{\text{Sales}}{\text{Avg. assets}} \times \frac{\text{Avg. assets}}{\text{Avg. equity}}$$

| Component | Formula | Interpretation |
|-----------|---------|-----------------|
| **Tax burden** | Net income / EBT | Higher = more profit retained after tax (lower effective tax rate) |
| **Interest burden** | EBT / EBIT | Higher = less profit consumed by interest expense |
| **EBIT margin** | EBIT / Sales | Core operating profitability |
| **Asset turnover** | Sales / Avg. total assets | Efficiency of asset utilization |
| **Financial leverage** | Avg. total assets / Avg. total equity | Degree of balance-sheet leverage |

> **Also recognized**: ROE = Return on assets × Leverage, where ROA = Net income / Avg. total assets. This is the two-way "compressed" form of the same decomposition.

---

### Worked Example — Basic 5-Way DuPont Mechanics (Meuse Industries, fictional)

To fix the mechanics before applying them to a messier real company, consider a simple fictional company, **Meuse Industries**:

| Line item | Amount |
|-----------|--------|
| Sales | 500 |
| EBIT | 60 |
| Interest expense | 10 |
| EBT | 50 |
| Tax (25%) | 12.5 |
| Net income | 37.5 |
| Avg. total assets | 400 |
| Avg. total equity | 200 |

$$\text{Tax burden} = \frac{37.5}{50} = 75.0\% \qquad \text{Interest burden} = \frac{50}{60} = 83.33\% \qquad \text{EBIT margin} = \frac{60}{500} = 12.0\%$$
$$\text{Asset turnover} = \frac{500}{400} = 1.25 \qquad \text{Leverage} = \frac{400}{200} = 2.00$$
$$ROE = 75.0\% \times 83.33\% \times 12.0\% \times 1.25 \times 2.00 = 18.75\%$$

**Check with the 3-way form**: Net profit margin $= 37.5/500 = 7.5\%$; $ROE = 7.5\% \times 1.25 \times 2.00 = 18.75\%$ ✓ — both decompositions must reconcile to the same ROE.

---

### Applying DuPont to the Case Study Company (Nestlé)

Studying Nestlé's income statement, the analyst notices a large **"income from associates and joint ventures"** line — CHF8,003 million in 2014, or **53.7% of net income** — driven mainly by Nestlé's 23.4% equity stake in L'Oréal (accounted for under the equity method). In 2014 this included a CHF4,569 million gain from partially disposing of L'Oréal shares and a CHF2,817 million revaluation gain from gaining full control of Galderma (a former 50/50 joint venture with L'Oréal).

**Why adjust it out**: Associates' income is a **pure net-income figure with no matching revenue line**, and the underlying operations are **not under Nestlé management's direct control**. Leaving it in would commingle "pure Nestlé" profitability and asset efficiency with the performance of a separately run company, distorting net profit margin and asset turnover.

**Adjustment mechanics**:
- **Net profit margin**: subtract income from associates from net income, divide by sales.
- **Asset turnover**: subtract investments in associates from total assets before computing the average.
- **Financial leverage**: **left unadjusted** — the analyst assumes the same blend of debt and equity finances both the Nestlé-only assets and the investment in associates, so isolating leverage effects would require an assumption the data can't support.

**Income statement and balance sheet data (CHF millions):**

| | 2014 | 2013 | 2012 |
|---|---|---|---|
| Sales | 91,612 | 92,158 | 89,721 |
| EBIT (operating profit) | 10,905 | 13,068 | 13,388 |
| EBT (excl. associates) | 10,268 | 12,437 | 12,683 |
| Income from associates | 8,003 | 1,264 | 1,253 |
| Profit for the year (net income, incl. associates) | 14,904 | 10,445 | 10,677 |
| Profit excl. associates | 6,901 | 9,181 | 9,424 |
| Total assets | 133,450 | 120,442 | 125,877 |
| Investments in associates | 8,649 | 12,315 | 11,586 |
| Total assets excl. associates | 124,801 | 108,127 | 114,291 |

**Expanded (Nestlé-only) DuPont decomposition:**

| Component | 2014 | 2013 | 2012 |
|-----------|------|------|------|
| Tax burden (excl. associates) | 67.21% | 73.82% | 74.30% |
| × Interest burden | 94.16% | 95.17% | 94.73% |
| × EBIT margin | 11.90% | 14.18% | 14.92% |
| **= Net profit margin (excl. associates)** | **7.53%** | **9.96%** | **10.50%** |
| Net profit margin (incl. associates, as reported) | 16.27% | 11.33% | 11.90% |
| Total asset turnover (excl. associates) | 0.787 | 0.829 | 0.825 |
| Total asset turnover (incl. associates) | 0.722 | 0.748 | 0.750 |
| Effect of associates on turnover | −0.065 | −0.081 | −0.075 |
| Financial leverage (unadjusted) | 1.87 | 1.94 | 1.98 |
| **ROE — Nestlé-only** | **11.08%** | **16.02%** | **17.15%** |
| **ROE — including associates (as reported)** | **21.97%** | **16.44%** | **17.67%** |
| Associates' contribution to ROE | 10.89 | 0.42 | 0.52 |

> **Key insight**: The "Nestlé-only" net profit margin **declined every year** (10.50% → 9.96% → 7.53%), while the as-reported (consolidated) margin *rose sharply* in 2014 (11.90% → 11.33% → 16.27%) purely because of the one-off L'Oréal/Galderma transaction gains. Reported ROE trending up (17.67% → 16.44% → 21.97%) masks a **deteriorating core business** — this divergence is exactly the kind of finding this framework is designed to surface.

---

### Adjusting for Unusual (Non-Recurring) Charges

The declining Nestlé-only margin prompted the analyst to look for an explanation. He found recurring **goodwill impairments** (a large CHF1,908 million charge in 2014, related to US ice cream and pizza acquisitions) and annual **provisions** for restructuring, environmental, and litigation matters.

**Profitability adjusted for unusual charges (CHF millions):**

| | 2014 | 2013 | 2012 |
|---|---|---|---|
| Sales | 91,612 | 92,158 | 89,721 |
| Profit excl. associates | 6,901 | 9,181 | 9,424 |
| + Impairment of goodwill | 1,908 | 114 | 14 |
| + Provisions (restructuring, environmental, litigation — not tax-affected) | 920 | 862 | 618 |
| **= Profit adjusted for unusual charges** | **9,729** | **10,157** | **10,056** |
| Net profit margin, excl. associates (with unusual charges included) | 7.53% | 9.96% | 10.50% |
| Net profit margin, excl. associates **and** unusual charges | 10.62% | 11.02% | 11.21% |
| Margin consumed by unusual charges | 3.09% | 1.06% | 0.71% |

**Nestlé-only ROE with unusual charges removed** (= adjusted NPM × asset turnover excl. associates × leverage):

| | 2014 | 2013 | 2012 |
|---|---|---|---|
| Nestlé-only ROE (unusual charges removed) | 15.63% | 17.73% | 18.31% |

> **Key insight — judgment call**: Even though unusual charges clearly depress the Nestlé-only margin, the analyst **chose not to strip them out of the main DuPont analysis**. His reasoning: these charges result from management decisions, recur regularly (impairments and provisions appear in all three years), and directly affect shareholder returns — normalizing them away would be too generous. He uses the *adjusted* figures only as a supplementary check. Even with charges removed, the **downward trend in Nestlé-only ROE persists** (18.31% → 17.73% → 15.63%), reinforcing that the core-business deterioration is real, not just an artifact of one-off write-offs.

**Net profit margin spread (as-reported vs. Nestlé-only):**

| | 2014 | 2013 | 2012 |
|---|---|---|---|
| Consolidated (as-reported) net profit margin | 16.27% | 11.33% | 11.90% |
| Nestlé-only net profit margin | 7.53% | 9.96% | 10.50% |
| **Spread** | **8.74%** | **1.37%** | **1.40%** |

The widening spread in 2014 underscores how dependent the *as-reported* growth story had become on the associates' investment (L'Oréal) rather than on Nestlé's own operations.

---

### Question Set Answers

**Q1. Why does the analyst leave financial leverage unadjusted when stripping out associates from margin and turnover?**
A. Because he assumes the investment in associates is financed with the *same blend* of debt and equity as the rest of the company — there's no reliable way to separately identify financing attributable to the associates' stake, unlike revenue/income (clearly identified) and the investment's carrying value (clearly identified on the balance sheet).

**Q2. In 2014, is Nestlé's rising *reported* ROE (21.97%, up from 16.44%) a bullish signal on its own?**
A. No — the increase is almost entirely explained by a CHF10.89 (out of 21.97) percentage-point contribution from associates (the L'Oréal/Galderma transactions), a non-recurring event. The Nestlé-only ROE actually *fell* in 2014 (11.08%, down from 16.02%), consistent with three straight years of declining core profitability.

**Q3. Using the 5-way DuPont identity, if a company's tax burden falls from 75% to 65% with all else constant, what happens to ROE?**
A. ROE falls proportionally by the same percentage (65/75 − 1 = −13.3%), since ROE is a straight product of the five components — a lower tax burden means the effective tax rate has *risen*, consuming more of EBT.

---

### Exam Tips (this file)

- Memorize **Exhibit 1's six phases in order** — Define Purpose → Collect Data → Process Data → Analyze/Interpret → Communicate Conclusions → Follow-up. Phases 3–4 are usually merged in practice.
- The 3-way and 5-way DuPont identities **must reconcile** — use this as a built-in error check on any DuPont problem.
- When a company holds a large equity-method **investment in associates**, expect exam questions testing the "strip it out" adjustment: subtract associates' income from net income (for margin) and investments in associates from total assets (for turnover), but generally **leave leverage as reported**.
- **Unusual/non-recurring items** (impairments, restructuring provisions) are a judgment call — the CFA curriculum's own case study chooses to leave them in the primary analysis because they recur and are management-driven, while still calculating an adjusted, supplementary view.
- Watch for exam scenarios where an **as-reported ROE trend diverges from a core/adjusted ROE trend** — this is the single most tested pattern in this module.
