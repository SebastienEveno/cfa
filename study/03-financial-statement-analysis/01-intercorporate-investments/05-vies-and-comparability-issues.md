---
layout: page
title: "Financial Statement Presentation, VIEs, and Comparability Issues"
permalink: /study/03-financial-statement-analysis/01-intercorporate-investments/05-vies-and-comparability-issues/
next: /cfa/study/03-financial-statement-analysis/01-intercorporate-investments/06-formula-summary/
prev: /cfa/study/03-financial-statement-analysis/01-intercorporate-investments/04-acquisition-method-and-consolidation/
---
## Summary: Financial Statement Presentation, VIEs, and Comparability Issues (CFA Level II — Financial Statement Analysis)

---

### Financial Statement Presentation

Consolidated statement formats are broadly similar under IFRS and US GAAP. Each income statement line (sales, cost of sales, etc.) reflects **100%** of parent-plus-subsidiary transactions after eliminating intercompany (upstream and downstream) transactions, with the portion of income attributable to **non-controlling interests** shown as a separate line. Real-world filings (e.g., GlaxoSmithKline) typically disclose, near the consolidation note:

- Investments in **financial assets** (fair value, and liquid investments) separately from
- Investments in **associates and joint ventures** (equity method carrying amount) separately from
- **Goodwill** and **contingent consideration** liabilities/assets from completed and pending acquisitions
- **Non-controlling interests** as a distinct line within consolidated equity

> Total consolidated net income is generally the **same under IFRS and US GAAP** for a given combination, though individual line items can differ due to differing recognition/measurement rules elsewhere in each framework (e.g., PP&E revaluation).

---

### Variable Interest and Special Purpose Entities

A **special purpose entity (SPE)** — called a **variable interest entity (VIE)** under US GAAP — is created by a sponsor for a narrowly defined purpose (financing, leasing, securitization, R&D). Historically, sponsors avoided consolidating SPEs because they lacked *voting* control, even though they retained substantial economic exposure through guarantees or residual interests. **Enron** is the canonical cautionary example: it used SPEs for off-balance-sheet financing and collapsed partly due to guarantees of SPE debt it had never disclosed as consolidated liabilities.

Both IFRS and US GAAP responded by shifting the definition of "control" away from pure voting rights:

| | IFRS 10 | US GAAP (ASC 810) |
|---|---|---|
| Control test | (1) Ability to direct relevant financial/operating policies **and** (2) exposure/rights to variable returns from involvement | Two-component model: **voting interest** model plus a **variable interest** model |
| Who consolidates | The party in "control" per the two-part test | The **primary beneficiary** — the party absorbing a majority of expected losses, receiving a majority of expected residual returns, or both |
| Scope | All entities meeting the control definition | VIEs specifically defined as entities where equity at risk is insufficient to finance activities, or equity holders lack decision rights, obligation to absorb losses, or right to receive returns |

$$\boxed{\text{Consolidate a VIE/SPE if you are the primary beneficiary} = \text{absorb majority of expected losses OR receive majority of expected residual returns (or both)}}$$

Off-balance-sheet SPEs historically let sponsors report **improved asset turnover, lower leverage, and higher profitability** than the true consolidated economics would show — exactly the same distortion risk seen with the equity method's "one-line consolidation" problem, but potentially worse because SPE assets/liabilities might not appear *anywhere* on the sponsor's statements pre-reform.

---

### Worked Example — Securitization of Receivables

Odena, an auto manufacturer, wants to raise 55M against its financial receivables and is choosing between two structures:

- **Alternative 1**: Borrow 55M directly, secured by the receivables.
- **Alternative 2**: Create an SPE, invest 5M of its own cash, have the SPE borrow 55M, and have the SPE use the combined 60M to purchase 60M of receivables directly from Odena.

**If Odena controls the SPE and must consolidate it (the standard outcome post-reform):**

| | Alternative 1 | Alternative 2 (consolidated) |
|---|---|---|
| Cash | +55M (borrowed directly) | +55M net (60M received for receivables sold to SPE, less 5M invested in SPE) |
| Accounts receivable | Unchanged | Unchanged (still on Odena's consolidated books — the "sale" to the SPE is reversed on consolidation) |
| Long-term debt | +55M | +55M (the SPE's borrowing) |

**The consolidated balance sheet is identical either way.** This is the entire point of requiring consolidation: it eliminates the incentive to structure a transaction through an SPE purely to achieve off-balance-sheet treatment. Any gain Odena might have recognized on "selling" receivables to the SPE at a premium is also **reversed** upon consolidation, since intercompany sales are eliminated.

> **Key insight**: Before the post-Enron reforms, Alternative 2 could have kept both the receivables-backed debt *and* a sale-related gain off Odena's consolidated statements (if Odena lacked technical voting "control" of the SPE) — flattering leverage and profitability ratios. Modern VIE/SPE consolidation rules close this loophole for any sponsor that is the primary beneficiary, regardless of its voting stake.

---

### Additional Issues That Impair Comparability

A grab-bag of business-combination accounting choices that analysts must adjust for when comparing companies across IFRS and US GAAP (or across companies with different acquisition histories):

| Issue | IFRS | US GAAP |
|---|---|---|
| **Contingent liabilities** (acquired) | Recognized if fair value can be reliably measured, regardless of probability | Recognized only if **probable** and **reasonably estimable** |
| **Contingent assets** (acquired) | **Not recognized** | Recognized (contractual) if "more likely than not" they meet the asset definition; measured at the **lower** of acquisition-date fair value or best estimate of settlement |
| **Contingent consideration** | Measured at fair value at acquisition; subsequent changes in liability-classified consideration flow through the income statement; equity-classified consideration is **not** remeasured | Same treatment; US GAAP also remeasures asset-classified contingent consideration through income |
| **In-process R&D acquired** | Recognized as a separate intangible asset at fair value; **amortized** if successfully completed, **impaired** if abandoned or not viable | Same treatment |
| **Restructuring costs** related to the acquisition | **Not** included in the cost of the acquisition — expensed in the period incurred | Same treatment |

> **Key insight**: None of these differences change the ultimate cash economics of a deal, but they change **when and how** costs/gains hit the income statement — which is exactly why an analyst comparing an aggressive acquirer (frequent restructuring charges, large contingent consideration liabilities) to a conservative one must normalize for these items before comparing profitability trends.

---

### Question Set Answers

**Q1.** A sponsor creates an SPE, holds no voting equity in it, but is contractually obligated to absorb any losses the SPE incurs. Who should consolidate the SPE?
**Answer: The sponsor.** Under the variable-interest model, the sponsor is the primary beneficiary because it absorbs the majority (in this case, effectively all) of expected losses — voting equity is irrelevant to the determination.

**Q2.** A company sells receivables to a consolidated SPE at a gain. How does this transaction affect the consolidated financial statements?
**Answer:** No effect — the "sale" is an intercompany transaction and is fully eliminated in consolidation, including any recognized gain. The consolidated balance sheet looks exactly as if the company had borrowed directly against the receivables rather than routing the transaction through the SPE.

**Q3.** Company A (IFRS) and Company B (US GAAP) both acquire targets with pre-existing lawsuits (contingent liabilities) whose fair values can be reliably estimated but are not yet "probable." How does recognition differ?
**Answer:** Company A (IFRS) recognizes the contingent liability at fair value at the acquisition date. Company B (US GAAP) does **not** recognize it, because it fails the "probable and reasonably estimable" threshold — it will only appear later if/when it becomes probable.

**Q4.** A company incurs restructuring costs six months after closing an acquisition, related to eliminating duplicate facilities. How are these costs treated?
**Answer:** Expensed in the period incurred, under both IFRS and US GAAP — they are never included as part of the acquisition cost or allocated in the purchase price allocation.

---

*Continued in [Formula Summary](/cfa/study/03-financial-statement-analysis/01-intercorporate-investments/06-formula-summary/).*
