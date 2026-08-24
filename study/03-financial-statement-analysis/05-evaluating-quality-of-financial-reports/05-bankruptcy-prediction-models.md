---
layout: page
title: "Bankruptcy Prediction Models"
permalink: /study/03-financial-statement-analysis/05-evaluating-quality-of-financial-reports/05-bankruptcy-prediction-models/
next: /cfa/study/03-financial-statement-analysis/05-evaluating-quality-of-financial-reports/06-cash-flow-and-balance-sheet-quality/
prev: /cfa/study/03-financial-statement-analysis/05-evaluating-quality-of-financial-reports/04-earnings-quality-case-studies/
---
## Summary: Bankruptcy Prediction Models (CFA Level II — Financial Statement Analysis)

---

### Why Bankruptcy Prediction Models Matter Here

Bankruptcy prediction models are broader than earnings-quality tools — they quantify the likelihood a company will **default on debt and/or declare bankruptcy**, drawing on earnings, cash flow, *and* balance sheet information together (recall "earnings quality" is used broadly in this module to span all three).

---

### The Altman Model

Edward Altman's 1968 model was an early, influential attempt to combine multiple financial ratios into a **single discriminant score** — solving the problem that looking at ratios in isolation can mislead (e.g., a company with weak profitability/solvency but strong liquidity might not look bankruptcy-prone from any single ratio). Using **discriminant analysis**, Altman built a linear combination of five ratios — spanning liquidity, profitability, leverage, and activity — to separate bankrupt from non-bankrupt companies.

$$\boxed{Z\text{-score} = 1.2\left(\frac{\text{Net working capital}}{\text{Total assets}}\right) + 1.4\left(\frac{\text{Retained earnings}}{\text{Total assets}}\right) + 3.3\left(\frac{EBIT}{\text{Total assets}}\right) + 0.6\left(\frac{\text{Market value of equity}}{\text{Book value of liabilities}}\right) + 1.0\left(\frac{\text{Sales}}{\text{Total assets}}\right)}$$

| Ratio (X-variable) | Category | Interpretation |
|---|---|---|
| Net working capital / Total assets | Liquidity | Short-term liquidity risk |
| Retained earnings / Total assets | Profitability (cumulative) | Accumulated profitability *and* proxy for company age (retained earnings accumulate over time) |
| EBIT / Total assets | Profitability | A variant of ROA |
| Market value of equity / Book value of liabilities | Leverage/solvency | Effectively equity/debt — higher = more solvent, more market-perceived cushion |
| Sales / Total assets | Activity | Asset-utilization efficiency |

> **Higher Z-score = lower bankruptcy risk.** In Altman's original application to manufacturing companies:

| Z-score | Zone | Interpretation |
|---|---|---|
| **< 1.81** | Distress zone | High probability of bankruptcy |
| **1.81 – 3.00** | Grey (unclear) zone | Ambiguous |
| **> 3.00** | Safe zone | Low probability of bankruptcy |

> **Note on coefficients**: Altman's original 1968 discriminant function used differently-scaled coefficients (0.012, 0.014, 0.033, 0.006, 0.999) because X1–X4 were entered as *whole percentages* (e.g., 10% entered as "10.0," not "0.10") while X5 was entered as a decimal ratio. The boxed formula above — with coefficients 1.2, 1.4, 3.3, 0.6, 1.0 — is the equivalent version used when all ratios are entered as decimals, and is the form generally quoted and used in practice.

---

### Worked Example — Meridian Appliances, Inc.

Continuing the fictional running example, suppose Meridian reports (in $ millions): net working capital $40, total assets $500, retained earnings $120, EBIT $55, market value of equity $300, book value of liabilities $250, sales $600.

$$Z = 1.2\left(\frac{40}{500}\right) + 1.4\left(\frac{120}{500}\right) + 3.3\left(\frac{55}{500}\right) + 0.6\left(\frac{300}{250}\right) + 1.0\left(\frac{600}{500}\right)$$

$$Z = 1.2(0.08) + 1.4(0.24) + 3.3(0.11) + 0.6(1.20) + 1.0(1.20)$$

$$Z = 0.096 + 0.336 + 0.363 + 0.720 + 1.200 = 2.715$$

**Interpretation**: Z = 2.72 falls in the **grey zone (1.81–3.00)** — the model does not give a clear signal either way. An analyst would need to dig into the qualitative and other quantitative factors (industry conditions, liquidity trend, covenant headroom) rather than rely on the Z-score alone.

---

### Developments in Bankruptcy Prediction Models

Two structural shortcomings of the original Altman model, and the responses to each:

| Shortcoming | Response |
|---|---|
| **Static, single-period model** — uses one snapshot of financial data | **Shumway (2001)**: a *hazard model* that incorporates all available years of data to re-estimate bankruptcy risk at each point in time |
| **Relies on accounting data under the going-concern assumption** — balance sheet values assume the company will continue operating, even when it may not | **Market-based models**: build on Merton's insight that equity can be modeled as a **call option on the company's assets**; default probability is inferred from equity value, debt level, equity returns, and equity volatility (Kealhofer 2003 / KMV-style models) |

**Best-of-both-worlds research**: Bharath and Shumway (2008) combine **market-based and accounting-based** predictor variables — market value of equity, face value of debt, equity volatility, stock returns relative to the market over the prior year, **and** the ratio of net income to total assets — to identify likely defaulters. Studies generally find the most effective models blend both data types rather than relying on accounting data (or market data) alone.

> **Key insight**: Altman-style models look *backward* (historical accruals-based statements); market-based models look *forward* (current equity pricing embeds the market's forward-looking default assessment) but require the company to be publicly traded with observable equity volatility. Combined models exploit both information sets.

---

### Question Set Answers

**Q1:** Two companies have identical Altman Z-score inputs except Company A has a much higher market value of equity relative to its book value of liabilities. All else equal, which has the higher (safer) Z-score?
**A:** **Company A** — the market value of equity/book value of liabilities ratio carries a positive 0.6 coefficient; a higher ratio (more market-perceived equity cushion relative to debt) raises the Z-score.

**Q2:** What is the core limitation of the original Altman model that Shumway's hazard model addresses?
**A:** The original model is **static** — a single snapshot of ratios at one point in time. Shumway's hazard model uses **all available years of data** to continuously re-estimate bankruptcy risk over time, rather than relying on one static cross-section.

**Q3:** Why might a market-based (Merton/KMV-style) bankruptcy model be preferable to a purely accounting-based model for a distressed company?
**A:** Accounting-based models rely on financial statements prepared under the **going-concern assumption**, which may not hold for a distressed company — recorded asset values may overstate what would actually be realized. Market-based models instead infer default probability from **current equity value and volatility**, which embed the market's forward-looking assessment of distress risk in real time.

**Q4:** A company's Z-score is 1.5. What does this suggest, and what should the analyst do next?
**A:** A score below 1.81 places the company in Altman's **distress zone**, indicating a **high probability of bankruptcy** based on the original manufacturing-company calibration. The analyst should corroborate this with market-based indicators (credit spreads, equity volatility, CDS pricing) and qualitative analysis (liquidity access, covenant compliance, industry conditions) rather than relying on the accounting-based score alone.
