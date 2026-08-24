---
layout: page
title: "Earnings Quality Case Studies"
permalink: /study/03-financial-statement-analysis/05-evaluating-quality-of-financial-reports/04-earnings-quality-case-studies/
next: /cfa/study/03-financial-statement-analysis/05-evaluating-quality-of-financial-reports/05-bankruptcy-prediction-models/
prev: /cfa/study/03-financial-statement-analysis/05-evaluating-quality-of-financial-reports/03-earnings-quality-indicators/
---
## Summary: Earnings Quality Case Studies (CFA Level II — Financial Statement Analysis)

---

### Overview

These three real cases illustrate the two most common enforcement-case categories from the prior file — improper **revenue recognition** (Sunbeam, MicroStrategy) and improper **expense recognition** via cost capitalization (WorldCom) — and show exactly which ratios and trends would have exposed each scheme *before* the fraud became public.

| Company | Technique | Mechanism | Key Red Flag |
|---|---|---|---|
| **Sunbeam Corporation** | Premature/fraudulent revenue recognition | Channel stuffing, bill-and-hold sales, one-time disposals booked as sales | Receivables growing far faster than revenue; rising DSO vs. own history and vs. industry |
| **MicroStrategy, Inc.** | Multiple-element contract misallocation | Recognized 100% of bundled software+services deals as immediate license revenue | Erratic, unexplained quarter-to-quarter swings in the license/support revenue mix |
| **WorldCom Corp.** | Cost capitalization | Capitalized ordinary operating "line costs" as PP&E instead of expensing | Sudden, unexplained jump in gross PP&E as a % of total assets with no strategy change |

---

### Revenue Recognition Case: Sunbeam Corporation

Sunbeam, a consumer household-appliance maker, appeared to turn around dramatically under CEO "Chainsaw Al" Dunlap in the mid-to-late 1990s through claimed cost-cutting and revenue growth. The revenue growth was substantially manufactured through:

- **One-time product-line disposals** booked as ordinary sales (Q1 1997) without disclosure that they were non-recurring.
- **A bill-and-hold barbecue grill sale** (Q1 1997) where the wholesaler took no ownership risk and could return goods freely — all were in fact returned in Q3 1997.
- **Channel stuffing**: inducing customers (via discounts/incentives, often with return rights) to order more than they needed, pulling future sales into the current period. Undisclosed, and used heavily in late 1997/early 1998.
- **Bill-and-hold sales**: revenue recognized on invoicing while goods stay on the seller's premises. GAAP requires strict conditions (buyer-initiated request, genuine business purpose, buyer accepts ownership risk, seller's own track record with such sales) — the SEC found Sunbeam's version to be "little more than projected orders disguised as sales."

**The receivables/DSO tell-tale (1995–1997):**

| ($ millions) | 1995 | 1996 | 1997 |
|---|---|---|---|
| Total revenue | $1,016.9 | $984.2 | $1,168.2 |
| Revenue growth | — | −3.2% | +18.7% |
| Gross accounts receivable | $216.2 | $213.4 | $295.6 |
| Receivables growth | — | −1.3% | +38.5% |
| Receivables/revenue | 21.3% | 21.7% | 25.3% |
| Days' sales outstanding (DSO) | 77.6 | 79.1 | 92.4 |
| AR turnover | 4.7 | 4.6 | 4.0 |

**Receivables (+38.5%) growing more than double the rate of revenue (+18.7%)** in 1997 is the single clearest signal: it means either collections deteriorated or sales were manufactured (goods shipped/booked but not genuinely earned). Rising DSO and falling AR turnover confirm slowing, less genuine collections.

**It gets worse under a securitization adjustment.** A 10-K note disclosed Sunbeam sold ~$59 million of receivables in a securitization in December 1997 — those receivables were removed from the year-end AR balance. Adding them back (pro forma):

| ($ millions) | 1997 Reported | 1997 Pro Forma (add back securitized AR) |
|---|---|---|
| Gross accounts receivable | $295.6 | $354.6 |
| Receivables growth | 38.5% | 66.1% |
| Receivables/revenue | 25.3% | 30.4% |
| DSO | 92.3 | 110.8 |

**Industry comparison** (vs. Harman International, Jarden, Leggett & Platt, Mohawk, Newell Rubbermaid, Tupperware): Sunbeam's DSO of 77.6–92.3 days over 1995–1997 ran **33–42 days worse** than the industry median of 44.6–50.4 days — a persistent, widening gap even before adjusting for the securitization.

**Quantifying the bill-and-hold impact on net income**: the 1997 10-K disclosed bill-and-hold sales were ~3% of consolidated revenue. Applying a ~28.3% gross margin and a 35% tax rate to that 3% of $1,168.2 million revenue implies roughly **$6.45 million of after-tax earnings — about 5.9% of Sunbeam's $109.4 million reported earnings from continuing operations** — depended on a revenue-recognition method the company itself flagged as unusual. A seemingly small disclosed percentage translated into a material share of the bottom line.

> **Key insight**: None of this required inside information — it was derivable entirely from the 10-K's own numbers and notes. The lesson: always compute DSO/receivables-turnover trends **and** compare them to peers, and read footnotes on securitizations and unusual revenue policies (like bill-and-hold) closely.

---

### Revenue Recognition Case: MicroStrategy, Inc.

MicroStrategy, a fast-growing software/information-services company (IPO 1998), increasingly sold **multiple-element arrangements** bundling software licenses with consulting/training/maintenance services. Under the applicable standards at the time, license revenue could only be recognized immediately if it could be **separated** from the service element and the service portion accounted for separately.

MicroStrategy's stated policy (1998 10-K) matched the rules — but its practice did not:
- **Q4 1998**: A $4.5 million deal for software licenses **plus** extensive consulting was recognized **entirely** as software (license) revenue, even though much of the licensed software was to be used in applications MicroStrategy itself would develop in the future (i.e., service obligations remained).
- **Q4 1999**: A similar multiple-deliverable arrangement resulted in **$14.1 million** of product revenue improperly recognized in a single quarter — a material misstatement.

**The tell: erratic quarterly revenue mix.**

| Quarter | License % | Support % |
|---|---|---|
| 1Q98 | 71.8% | 28.2% |
| 2Q98 | 68.3% | 31.7% |
| 3Q98 | 62.7% | 37.3% |
| **4Q98** | **70.7%** | **29.3%** |
| 1Q99 | 64.6% | 35.4% |
| 2Q99 | 68.1% | 31.9% |
| 3Q99 | 70.1% | 29.9% |
| **4Q99** | **73.2%** | **26.8%** |

There is no economic reason the license/support mix should whipsaw quarter to quarter for a steady-state software business — and the sharpest drops in the support share occurred in **exactly** the two quarters (4Q98, 4Q99) later confirmed to contain the improperly recognized product revenue. An analyst without access to the underlying contracts could not prove misallocation, but the unexplained quarterly volatility alone should have prompted direct questions to management.

**General framework for assessing revenue quality (applies broadly, not just to MicroStrategy):**
- **Start with the basics**: understand shipping terms, return rights, rebate treatment, and whether arrangements have multiple deliverables (and whether revenue is deferred until later elements are delivered).
- **Age matters**: track DSO/receivables-turnover trend vs. own history and vs. peers.
- **Cash vs. accrual**: track AR/revenue vs. own history and peers (channel stuffing signal).
- **Compare with the real world**: relate revenue growth to non-financial operating data disclosed by the company (airlines: miles flown/capacity; retailers: square footage/store count; any company: headcount).
- **Revenue trends and composition**: track the *mix* of revenue types over time and versus AR growth.
- **Relationships**: scrutinize transactions with entities owned by officers/shareholders (potential dumping ground for inflated/fake revenue).

---

### Cost Capitalization Case: WorldCom Corp.

WorldCom, a major global telecom, grew largely through acquisitions in the 1990s. To keep delivering the earnings analysts expected, from **1999 through Q1 2002** it improperly **capitalized** "line costs" — fees paid to third-party network providers for network access rights — that GAAP requires to be expensed immediately as an ordinary operating cost. WorldCom filed for bankruptcy in July 2002.

**Why the auditor (Arthur Andersen) missed it**: per the special investigative committee, Andersen ran a controls-based audit relying on WorldCom's internal controls, concluded (wrongly) that fraud risk was minimal, and therefore never designed procedures to test for it — missing unsupported "top-side" reserve reversals, questionable revenue items, and the line-cost capitalization entries, despite several opportunities to catch them.

**What an attentive analyst *could* have seen — the balance sheet, not the income statement:**

| Gross PP&E as % of total assets | 1997 | 1998 | 1999 | 2000 | 2001 |
|---|---|---|---|---|---|
| | 30% | 31% | **37%** | **45%** | **47%** |

The fraud began in 1999 — exactly when gross PP&E jumped from a stable ~30% of total assets to 37%, then kept climbing to 47% by 2001, with **no change in strategy** to justify it. Because an under-reported operating expense must show up as an offsetting *increase somewhere else on the balance sheet* (the accounting equation again), this buildup in a non-current asset account — even without knowing "line costs" specifically — should have triggered suspicion that expenses were being under-reported.

**General framework for assessing expense-recognition quality:**
- **Start with the basics**: understand cost-capitalization policy (what's capitalized into inventory, how obsolescence reserves work), depreciation policy/lives vs. competitors, and whether either has changed.
- **Trend analysis**: watch non-current asset accounts for unusual buildups; check whether margins are stable/improving *while* non-current assets grow and the industry is otherwise weak (a mismatch); compute turnover ratios (revenue/PP&E, revenue/total assets, revenue/other assets) — falling turnover with steady/rising revenue suggests capitalization is being used to avoid expense recognition; compare capex relative to gross PP&E over time — a rising ratio can indicate more aggressive capitalization.
- **Relationships**: watch for **tunneling** (wealth transferred out of the public company to manager-owned private entities via unfavorable pricing, excessive comp, loans, or guarantees) and **propping** (the reverse — a manager-owned entity props up the public company to preserve future misappropriation opportunities).

---

### Worked Example — Meridian Appliances, Inc. (Applying the Sunbeam Lens)

Continuing the fictional company from earlier in this module: suppose Meridian's receivables grew 38% in a year when revenue grew only 12%.

- Receivables/revenue ratio rises → DSO rises → AR turnover falls.
- Applying the Sunbeam framework: this is a strong signal of either (a) deteriorating collections, (b) channel stuffing, or (c) premature/fictitious revenue recognition — regardless of which, the analyst should discount the reported revenue growth's *quality* and investigate footnotes for securitizations, bill-and-hold language, or unusual multiple-element arrangements before accepting the growth at face value.

---

### Question Set Answers

**Q1:** In the Sunbeam case, what single ratio comparison most directly signals the revenue quality problem?
**A:** **Receivables growth relative to revenue growth** (equivalently, the trend in DSO/AR turnover) — 1997 receivables grew 38.5% against 18.7% revenue growth, and DSO rose to 92.4 days versus an industry median of ~50 days.

**Q2:** What accounting condition must be met before a bill-and-hold sale can be recognized as revenue?
**A:** The buyer must request the arrangement for a genuine business purpose, accept the risks of ownership, and the seller must have a track record of completing such sales without reversal — none of which reflected genuine economic substance in Sunbeam's case (SEC: "little more than projected orders disguised as sales").

**Q3:** Why couldn't an outside analyst prove MicroStrategy's revenue misallocation directly from the financial statements?
**A:** Because judging whether a multiple-element contract's software vs. services allocation was proper requires access to the **underlying contracts** — not visible externally. The best external analyst could do was notice the **anomalous, unexplained volatility** in the quarterly license/support revenue mix and use it to raise pointed questions with management.

**Q4:** What balance sheet pattern exposed WorldCom's line-cost capitalization fraud, and why does it have to appear there?
**A:** A sharp, unexplained rise in **gross PP&E as a percentage of total assets** (30% → 47% over 1997–2001). By the accounting equation, under-reporting an expense must be offset by an overstatement elsewhere — here, capitalizing (rather than expensing) line costs pushed the cost onto the balance sheet as PP&E instead of through the income statement.
