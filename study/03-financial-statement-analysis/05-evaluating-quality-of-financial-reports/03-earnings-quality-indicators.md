---
layout: page
title: "Earnings Quality Indicators"
permalink: /study/03-financial-statement-analysis/05-evaluating-quality-of-financial-reports/03-earnings-quality-indicators/
next: /cfa/study/03-financial-statement-analysis/05-evaluating-quality-of-financial-reports/04-earnings-quality-case-studies/
prev: /cfa/study/03-financial-statement-analysis/05-evaluating-quality-of-financial-reports/02-beneish-model-and-quantitative-tools/
---
## Summary: Earnings Quality Indicators (CFA Level II — Financial Statement Analysis)

---

### Indicators of Earnings Quality — Overview

Four broad classes of evidence bear on earnings quality:

1. **Recurring earnings** (vs. non-recurring/one-off items)
2. **Earnings persistence and related measures of accruals**
3. **Beating benchmarks**
4. **After-the-fact confirmations** — enforcement actions and restatements (external indicators, covered at the end of this file)

---

### Recurring Earnings and Classification Shifting

An analyst forecasting future earnings should isolate the **recurring** component — items expected to continue (excludes discontinued operations, one-off asset sales, litigation/tax settlements, etc.). Reported earnings with a high proportion of non-recurring items are **less likely to be sustainable** and are lower quality as a forecasting input.

> **Example — Enron Corp.**: Enron's *operating income* swung dramatically year to year (declining 1998→1999, then more than doubling in 2000), yet its *income before interest, minority interest, and taxes* showed a suspiciously **smooth, steadily rising trend** (+26% in 1999, +24% in 2000). The smoothness was manufactured by non-recurring "other income" items — gains on sales of non-merchant assets and a gain on the issuance of stock by a subsidiary (TNPC) — which in 1999 alone represented **52% of total pre-tax income** ($1,031m of $1,995m). Short seller James Chanos specifically flagged Enron's reliance on "one-time gains that boosted earnings" as evidence the market was mispricing the stock — i.e., that investors were treating non-recurring gains as part of sustainable earnings.

**Classification shifting**: reclassifying normal operating expenses as "special items," or shifting expenses into discontinued operations — does **not** change total net income, but inflates the *core/recurring* earnings number investors focus on. It only tends to be confirmed after the fact (via reversal of the "unexpectedly high" core earnings the following year).

| Company | Classification-Shifting Tactic |
|---|---|
| **Borden** | $146 million of operating expenses reclassified as a "special" restructuring charge rather than SG&A |
| **AmeriServe Food Distribution** | Substantial operating expenses classified as restructuring charges, masking underperformance ahead of bankruptcy (just 4 months after a $200m junk-bond issuance) |
| **Waste Management** | Netted non-operating gains (investment sales, discontinued ops) against unrelated operating expenses to inflate operating income |
| **IBM** | Classified intellectual-property income as an offset to SG&A, overstating core earnings by $1.5–1.7 billion |

> **Key insight**: Companies voluntarily disclose "pro forma"/adjusted (non-GAAP) income excluding items they deem non-recurring, with a required reconciliation to GAAP income. The determination of "non-recurring" is judgment-laden — Groupon's original IPO filing excluded online marketing costs from its non-GAAP operating income; the SEC found this misleading and forced its removal. Always verify that excluded items are genuinely non-recurring.

---

### Earnings Persistence and Accruals

**Earnings persistence** = sustainability of (non-obviously-non-recurring) earnings and their growth. More persistent earnings are better inputs to earnings-based valuation. Persistence is the slope coefficient in:

$$Earnings_{t+1} = \alpha + \beta_1 Earnings_t + \varepsilon$$

A higher $\beta_1$ = more persistent earnings.

**Decomposing earnings into cash and accruals:**

$$Earnings_{t+1} = \alpha + \beta_1 \, CashFlow_t + \beta_2 \, Accruals_t + \varepsilon$$

> **Key insight (Sloan 1996)**: Empirically, $\beta_1 > \beta_2$ — **the cash flow component of earnings is more persistent than the accruals component.** Accruals arise because revenue/expense recognition timing (accrual accounting) differs from cash timing (e.g., a credit sale creates income now but the accrual — the receivable — only converts to cash later, and may not convert at all). Because accruals rely on estimation, they add noise and are less reliable predictors of future earnings. **The larger the accruals share of earnings, the lower the earnings quality and persistence.**

**Discretionary vs. non-discretionary accruals:**

| Type | Source | Quality Implication |
|---|---|---|
| **Non-discretionary accruals** | Normal transactions of the period (e.g., AR from ordinary credit sales, depreciation) | Expected, modeled by economic drivers (credit sales growth, depreciable asset base) |
| **Discretionary accruals** | Choices/transactions outside the norm, possibly intended to distort earnings | Outliers are a red flag for manipulated, low-quality earnings |

The standard technique (Jones Model / Modified Jones Model; also the SEC's Accounting Quality Model) regresses total accruals on economic drivers of normal accruals; the **residual is the proxy for abnormal (discretionary) accruals**. A simpler practitioner shortcut: compare **scaled total accruals** (by average assets or average NOI) across peers — larger scaled accruals flag possible manipulation.

> **A more dramatic signal**: positive net income paired with **negative** operating cash flow.

**Worked example — Allou Health & Beauty Care, Inc.**: Reported positive income from continuing operations in each of FY2000–2002 (e.g., $7.0m, $2.5m, $6.6m) but **negative cash from operating activities in every year** ($27.1m, $34.2m, $17.4m used, respectively). The reconciliation showed steadily increasing accounts receivable and inventories consuming cash. Persistent negative CFO alongside positive net income is not sustainable for a going concern — and Allou was subsequently confirmed to have fraudulently inflated sales and inventory.

> **Caution — accruals are not foolproof**: Enron's *annual* operating cash flow actually **exceeded** net income in all three fraud years shown in the curriculum (1998–2000) — some fraudulent transactions were specifically engineered to inflate CFO. WorldCom similarly showed CFO consistently above net income throughout its fraud period, because capitalizing operating costs (line costs) shifted the corresponding outflow into *investing* activities, artificially inflating reported CFO. **A large accruals gap is a useful screen, but its absence does not clear a company** — and in fact this exact blind spot let Satyam evade one screening firm's computer model, because Satyam's reported cash "kept pace" with profits.

---

### Mean Reversion in Earnings

Extreme earnings — high or low — do not persist; competitive forces pull results back toward normal levels over time:
- Poor performers shed losing operations and replace management → earnings improve.
- Abnormally profitable companies attract competitors (absent high barriers to entry), who compete away excess returns.

> **Nissim and Penman (2001)**: Tracking NYSE/AMEX companies from 1963–1999 across measures including return on net operating assets (RNOA = Operating income$_t$ / Net operating assets$_{t-1}$), decile portfolios sorted on RNOA showed the **spread compressed dramatically** over five-year horizons — from roughly 35% to −5% initially down to 22% to 7%. Middle-of-the-pack (non-outlier) portfolios stayed roughly constant.

**Practical takeaway**: Never simply extrapolate current extreme (high or low) earnings into a forecast. Because earnings = cash flow + accruals, and the cash component is more persistent, **a large accruals component hastens reversion to the mean** — especially when the accruals themselves are outliers relative to the company's normal accrual level.

---

### Beating Benchmarks

Meeting or beating analyst consensus (or other benchmarks) typically moves the share price up — but **exactly meeting or only narrowly beating** a benchmark has been proposed as itself an indicator of earnings management (research documents a statistically unusual clustering of reported-minus-benchmark differences just above zero). This is a debated interpretation, but a company that **consistently and narrowly** clears its targets should raise a question mark on earnings quality.

---

### External Indicators of Poor-Quality Earnings

Two after-the-fact indicators: **regulatory enforcement actions** and **restatements** of previously issued financial statements. These are, by definition, less useful than early qualitative/quantitative detection (the deficiency is already public), but analysts should stay alert to them and be ready to revisit prior conclusions. Per an SEC study of 227 enforcement cases (1997–2002), the two most common misrepresentation categories were, in order: **(1) improper revenue recognition** and **(2) improper expense recognition** (typically understatement) — the subjects of the real-world case studies in the next file.

---

### Question Set Answers

**Q1:** A regression of $Earnings_{t+1}$ on $CashFlow_t$ and $Accruals_t$ produces $\beta_1 = 0.85$ and $\beta_2 = 0.40$. What does this indicate about earnings persistence?
**A:** Because $\beta_1 > \beta_2$, the **cash flow component is more persistent** than the accruals component — consistent with Sloan (1996). Earnings with a relatively larger cash flow component (smaller accrual share) will be more persistent/higher quality.

**Q2:** Company A reports positive net income but negative operating cash flow in each of the last three years, driven by rising receivables and inventory. Is this necessarily proof of fraud?
**A:** No — it is a **strong warning sign**, not proof. It signals aggressive revenue recognition or a genuine, unsustainable cash-collection/inventory problem; further investigation (as with Allou) is required. Note also the converse trap: fraud (Enron, WorldCom) can *also* occur when CFO exceeds net income, so the absence of this signal does not clear a company either.

**Q3:** Why does a large one-year jump in operating income coupled with an even larger jump in a subsidiary's "gain on issuance of stock" concern an analyst assessing recurring earnings?
**A:** Because gains like this are typically **non-recurring** and unrelated to core operations; including them when forecasting future (recurring) earnings — as some Enron-era investors did — overstates sustainable earnings power (classic non-recurring-item classification-quality issue).

**Q4:** Under the mean-reversion principle, which of two similarly high-ROE firms should an analyst expect to revert to the mean more slowly?
**A:** The firm whose ROE is driven relatively more by the **cash flow** component of earnings (vs. accruals) — cash-driven returns are more persistent and revert more slowly than accrual-driven returns.
