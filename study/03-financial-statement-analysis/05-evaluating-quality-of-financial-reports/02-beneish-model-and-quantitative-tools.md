---
layout: page
title: "The Beneish Model and Quantitative Tools"
permalink: /study/03-financial-statement-analysis/05-evaluating-quality-of-financial-reports/02-beneish-model-and-quantitative-tools/
next: /cfa/study/03-financial-statement-analysis/05-evaluating-quality-of-financial-reports/03-earnings-quality-indicators/
prev: /cfa/study/03-financial-statement-analysis/05-evaluating-quality-of-financial-reports/01-conceptual-framework-and-reporting-problems/
---
## Summary: The Beneish Model and Quantitative Tools (CFA Level II — Financial Statement Analysis)

---

### General Steps to Evaluate the Quality of Financial Reports

A seven-step qualitative-then-quantitative process (Step 7 is the quantitative overlay covered in this file):

1. **Understand the company and its industry** — what accounting choices are appropriate given the economics, and what is the industry norm?
2. **Learn about management** — incentives to misreport (compensation structure, insider stock sales, related-party transactions).
3. **Identify significant accounting areas** — especially where judgment or an unusual rule drives reported performance.
4. **Make comparisons**: (A) current year vs. prior year statements/disclosures, (B) accounting policies vs. closest competitors, (C) ratio performance vs. closest competitors.
5. **Check for warning signs**, e.g.:
   - Declining receivables turnover → possible fictitious/premature revenue or insufficient bad-debt allowance
   - Declining inventory turnover → possible unrecognized obsolescence
   - Net income > cash from operations → possible aggressive accrual accounting
6. **For multi-segment/multinational firms**, consider whether results have been shifted toward a geography/product segment the market currently favors (suspect if the "hot" segment is strong while consolidated results are flat or worse).
7. **Apply quantitative tools** to assess the likelihood of misreporting — the subject of this file.

---

### The Beneish Model

Messod Beneish (1999; Beneish, Lee, and Nichols 2013) developed a probit-style model — the **M-score** — that combines eight financial-statement-derived variables into a single probability of earnings manipulation.

$$\boxed{M\text{-score} = -4.84 + 0.920\,DSRI + 0.528\,GMI + 0.404\,AQI + 0.892\,SGI + 0.115\,DEPI - 0.172\,SGAI + 4.679\,TATA - 0.327\,LVGI}$$

| Variable | Formula | What It Captures | Manipulation Signal |
|---|---|---|---|
| **DSRI** — Days sales in receivables index | $\dfrac{Receivables_t/Sales_t}{Receivables_{t-1}/Sales_{t-1}}$ | Change in receivables relative to sales | > 1 → possible premature/inappropriate revenue recognition (or deteriorating customer credit quality) |
| **GMI** — Gross margin index | $\dfrac{Gross\ margin_{t-1}}{Gross\ margin_t}$ | Margin deterioration | > 1 → margins fell y/y; deteriorating firms are more prone to manipulate |
| **AQI** — Asset quality index | $\dfrac{1-(PPE_t+CA_t)/TA_t}{1-(PPE_{t-1}+CA_{t-1})/TA_{t-1}}$ | Growth in "soft," non-PPE/non-current assets as a share of total assets | > 1 → possible excessive cost capitalization (into intangibles/other assets) |
| **SGI** — Sales growth index | $\dfrac{Sales_t}{Sales_{t-1}}$ | Revenue growth | > 1 → growth itself isn't bad, but high-growth firms face more pressure to sustain the story and to raise capital, predisposing them to manipulate |
| **DEPI** — Depreciation index | $\dfrac{Depreciation\ rate_{t-1}}{Depreciation\ rate_t}$, where rate $= \dfrac{Depreciation}{Depreciation+PPE}$ | Change in the depreciation rate | > 1 → depreciation rate fell y/y; possible understated depreciation to inflate earnings |
| **SGAI** — SG&A index | $\dfrac{SGA_t/Sales_t}{SGA_{t-1}/Sales_{t-1}}$ | SG&A efficiency | > 1 → deteriorating administrative/marketing efficiency, a manipulation predisposing factor |
| **TATA** — Total accruals to total assets | $\dfrac{\text{Income before extraordinary items} - CFO}{Total\ assets}$ | Size of the accruals component of earnings | Higher accruals → greater manipulation likelihood (largest coefficient in the model: 4.679) |
| **LVGI** — Leverage index | $\dfrac{Leverage_t}{Leverage_{t-1}}$, where Leverage = Debt/Assets | Change in leverage | > 1 → rising leverage predisposes firms toward covenant-driven manipulation |

> **Note on naming**: The curriculum labels the receivables variable "DSR" and the accruals variable simply "Accruals," and the leverage variable "LEVI." The names DSRI, TATA, and LVGI shown above are the standard academic labels for the same variables and are used interchangeably in practice — know both.

**Interpreting the M-score:**
- The M-score is (approximately) normally distributed with mean 0 and standard deviation 1.0, so probabilities of manipulation come from the standard normal CDF (Excel's `NORMSDIST`).
- **Higher (less negative) M-scores → higher probability of manipulation.**
- Beneish's recommended cutoff (minimizing the cost of Type I vs. Type II misclassification for *investors*) is an **M-score above −1.78**, corresponding to roughly a **3.8%** probability of manipulation. (An M-score of −1.49 ≈ 6.8% probability.)
- **Type I error**: classifying a manipulator as a non-manipulator (costly — you hold/miss the fraud). **Type II error**: classifying a non-manipulator as a manipulator (costly — you avoid/short a legitimate company). The cutoff choice reflects the relative cost of each.

---

### Worked Example — XYZ Corporation M-Score

| Variable | Value | Coefficient | Contribution |
|---|---|---|---|
| DSRI | 1.300 | 0.920 | 1.196 |
| GMI | 1.100 | 0.528 | 0.581 |
| AQI | 0.800 | 0.404 | 0.323 |
| SGI | 1.100 | 0.892 | 0.981 |
| DEPI | 1.100 | 0.115 | 0.127 |
| SGAI | 0.600 | −0.172 | −0.103 |
| TATA (Accruals) | 0.150 | 4.679 | 0.702 |
| LVGI | 0.600 | −0.327 | −0.196 |
| Intercept | — | — | −4.840 |
| **M-score** | | | **−1.231** |
| **Probability of manipulation** | | | **≈ 10.93%** |

**Interpretation:**
- M-score of −1.231 is **above** the −1.78 cutoff → XYZ is **flagged as a likely manipulator**. A probability of 10.93% is far above the 3.8% benchmark cutoff.
- DSRI, GMI, SGI, and DEPI are all > 1: (i) DSRI > 1 → receivables growing faster than sales, consistent with premature/aggressive revenue recognition (or weakening customer credit); (ii) GMI > 1 → margins were **higher last year** (deteriorating this year), a manipulation predisposing factor; (iii) SGI > 1 → positive sales growth, which creates pressure to sustain the growth narrative and secure capital; (iv) DEPI > 1 → the depreciation **rate** was higher last year (i.e., it declined this year), consistent with understated current-year depreciation.

---

### Other Quantitative Models

Beyond Beneish, research has identified additional variables useful for detecting misstatement:
- **Accruals quality** (magnitude/volatility of discretionary accruals)
- **Deferred taxes** (large or unusual swings)
- **Auditor changes**
- **Market-to-book value**
- **Public listing status**
- **Growth-rate divergence** between financial and *non-financial* operating metrics (patents, employees, units sold, square footage, etc.)
- **Corporate governance and incentive compensation** structure

**Modeling abnormal (discretionary) accruals** — the academic/regulatory approach:
- Total accruals are modeled as a function of factors expected to produce *normal* ("non-discretionary") accruals — e.g., growth in credit sales (→ AR growth) and the level of depreciable assets (→ depreciation).
- **Jones Model** (Jones 1991) and the **Modified Jones Model** (Dechow, Sloan, and Sweeney 1995) are the seminal academic implementations: regress total accruals on these economic drivers; the **regression residual** is a proxy for *abnormal* (discretionary) accruals.
- The **SEC's Accounting Quality Model** extends this approach using filings data across all registrants to screen firms with the most aggressive-looking discretionary accruals.
- A simplified practitioner shortcut: **compare the magnitude of total accruals across companies**, scaled by average assets or average NOI — larger scaled accruals are a flag, without needing a full regression.

---

### Limitations of Quantitative Models

- **Accounting numbers are only a partial representation of economic reality** — quantitative models built on them can establish *associations*, not *causation*. Determining actual cause and effect requires deeper investigation (interviews, surveys, regulatory enforcement powers).
- **Adaptive manipulators**: because managers know these models exist, some test their own reporting choices against the model before filing — Beneish et al. (2013) found the **predictive power of the Beneish model has declined over time** as a result.
- **Practical implication**: quantitative screens are a triage tool, not a verdict. Analysts must combine them with the qualitative steps (management incentives, disclosure quality, peer comparisons) from the general evaluation framework.

---

### Question Set Answers

**Q1:** A company's Beneish M-score is −1.55. Using the standard −1.78 cutoff, should an analyst flag it as a likely manipulator?
**A:** Yes — −1.55 is *greater than* (less negative than) −1.78, placing the estimated probability of manipulation above the ~3.8% benchmark.

**Q2:** A company's DSRI rises from 1.00 to 1.35 year over year while SGI stays near 1.0. What does this combination most likely suggest?
**A:** Receivables are growing much faster than sales even though sales themselves are flat — a classic signal of **premature or fictitious revenue recognition** (or a sharp deterioration in customer creditworthiness), rather than growth-driven working capital expansion.

**Q3:** Why does TATA (accruals/total assets) carry the largest coefficient (4.679) in the M-score model?
**A:** Because the accruals component of earnings — the gap between income before extraordinary items and cash from operations — is the single strongest statistical predictor of earnings manipulation in Beneish's sample; large accruals indicate income being recognized well ahead of (or independent of) cash generation.

**Q4:** What is the key limitation analysts should keep in mind when relying on the Beneish model or similar quantitative screens?
**A:** They identify **statistical association**, not proof of fraud, and their **predictive power decays over time** as sophisticated managers learn to "test" their own reporting against the model before it becomes public information. Quantitative screens should trigger — not substitute for — deeper qualitative investigation.
