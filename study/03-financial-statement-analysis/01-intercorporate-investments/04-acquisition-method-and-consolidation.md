---
layout: page
title: "The Acquisition Method and Consolidation"
permalink: /study/03-financial-statement-analysis/01-intercorporate-investments/04-acquisition-method-and-consolidation/
next: /cfa/study/03-financial-statement-analysis/01-intercorporate-investments/05-vies-and-comparability-issues/
prev: /cfa/study/03-financial-statement-analysis/01-intercorporate-investments/03-equity-method-transactions-and-disclosure/
---
## Summary: The Acquisition Method and Consolidation (CFA Level II — Financial Statement Analysis)

---

### Types of Business Combinations

| Structure | Result | Notation |
|---|---|---|
| **Merger** | Only the acquirer remains; target is absorbed and ceases to exist | A + B = A |
| **Acquisition** | Both entities keep legal identity; parent–subsidiary relationship; consolidated statements prepared each period | A + B = (A + B) |
| **Consolidation** (legal, not the accounting process) | A brand-new legal entity is formed; neither predecessor survives | A + B = C |

Under IFRS, no distinction is drawn among these based on resulting legal structure — one party is simply identified as **the acquirer**. Under US GAAP, all three legal structures exist, but regardless of structure, **all business combinations use the same accounting: the acquisition method.** The old **pooling-of-interests** method is no longer permitted under either framework.

> In an "acquisition"-structured combination, the acquirer does **not** need to buy 100% of the target to obtain control — it can acquire **less than 50%** and still exert control through other means, or more commonly, acquire **more than 50%** and leave a **non-controlling (minority) interest** on the consolidated statements.

---

### The Acquisition Method — Core Mechanics

The acquisition method resolves three central accounting questions:

1. **Recognition and measurement of identifiable assets and liabilities** — measured at **acquisition-date fair value**, including intangibles the acquiree never recognized on its own books (e.g., internally developed brand names, patents, technology).
2. **Recognition and subsequent accounting for goodwill.**
3. **Recognition and measurement of any non-controlling interest.**

The consideration transferred is measured at the **fair value of what the acquirer gives up** (cash, fair value of stock issued, and the acquisition-date fair value of any **contingent consideration**). **Direct transaction costs** (legal, valuation, advisory fees) are **expensed as incurred** — they are not included in the purchase price.

**Contingent liabilities** assumed in the acquisition:

| | IFRS | US GAAP |
|---|---|---|
| Recognition | Recognized if it's a present obligation from a past event **and** fair value can be measured reliably | Recognized only if **probable** and **reasonably estimable** |

**Indemnification assets**: if the seller contractually indemnifies the acquirer against a specific contingency (e.g., guarantees a contingent liability won't exceed a stated amount), the acquirer recognizes an **indemnification asset** measured on the same basis as the indemnified liability.

---

### Goodwill: Full vs. Partial

$$\boxed{\text{Goodwill} = \text{Fair value of consideration/entity} - \text{Fair value of identifiable net assets acquired}}$$

| Method | Definition | Who can use it |
|---|---|---|
| **Partial goodwill** | Fair value of consideration given (i.e., only the *acquired* stake) − acquirer's proportionate share of the fair value of identifiable net assets | **IFRS only** (optional) |
| **Full goodwill** | Fair value of the entity **as a whole** − 100% of the fair value of identifiable net assets | **IFRS (optional) and US GAAP (mandatory)** |

**Worked Example — Full vs. Partial Goodwill**: Meridian Group contributes 800,000 for an 80% interest in Castellan Corp. Identifiable net assets have a fair value of 900,000; the fair value of the entire entity is 1,000,000.

| | Partial goodwill (IFRS only) | Full goodwill (IFRS or US GAAP) |
|---|---|---|
| Consideration / entity fair value | 800,000 | 1,000,000 |
| Less: share of FV of identifiable net assets | (720,000) = 80% × 900,000 | (900,000) = 100% × 900,000 |
| **Goodwill** | **80,000** | **100,000** |

Because it has an indefinite life, goodwill is **never amortized** under either framework — it is tested for **impairment** at least annually (see below).

**Bargain purchases**: if the purchase price is *less than* the fair value of net assets acquired, the difference is recognized **immediately as a gain** in profit or loss (both IFRS and US GAAP).

---

### Worked Example — Purchase Price Allocation and Post-Combination Balance Sheet

Meridian Co. acquires 100% of Castellan Inc. by issuing 1,000,000 shares of 1-par common stock (market value 15/share). Castellan has no separately identifiable intangible assets. Selected pre-combination figures (000s):

| | Meridian book value | Castellan book value | Castellan fair value |
|---|---|---|---|
| Inventory | 12,000 | 1,700 | 3,000 |
| PP&E (net) | 27,000 | 2,500 | 4,500 |
| Long-term debt | 8,000 | 2,000 | 1,800 |
| Net assets | 16,000 | 1,900 | 5,400 |

**Purchase price allocation:**

| | Amount (000s) |
|---|---|
| Fair value of stock issued (1,000,000 × 15) | 15,000 |
| Less: book value of Castellan's net assets | (1,900) |
| Excess purchase price | 13,100 |
| Less: allocated to inventory (3,000 − 1,700) | (1,300) |
| Less: allocated to PP&E (4,500 − 2,500) | (2,000) |
| Less: allocated to long-term debt (1,800 − 2,000, a debit since debt fell) | 200 |
| **Goodwill (residual)** | **9,600** |

**Post-combination consolidated balance sheet** combines Meridian's **book values** with Castellan's **fair values**:

| | Meridian book value | Castellan fair value | Consolidated |
|---|---|---|---|
| Inventory | 12,000 | 3,000 | 15,000 |
| PP&E (net) | 27,000 | 4,500 | 31,500 |
| Goodwill | — | — | 9,600 |
| Long-term debt | 8,000 | 1,800 | 9,800 |

In subsequent periods, **depreciation/amortization is higher** than pre-combination because it now runs on Castellan's stepped-up fair values, not historical cost — e.g., as the acquired inventory is sold, COGS is 1,300 higher, and depreciation on the acquired PP&E is 2,000 higher over its remaining life, purely as an artifact of purchase accounting.

---

### The Consolidation Process: Less-Than-100% Acquisitions

Both IFRS and US GAAP presume **control** at ownership > 50%. When the parent owns less than 100%, the **acquisition method still requires including 100% of the subsidiary's assets and liabilities at fair value** on the consolidated balance sheet — the parent's *ownership percentage does not scale down the subsidiary's assets/liabilities*. What it *does* scale is the split of subsidiary equity between the parent and the **non-controlling (minority) interest**.

#### Non-Controlling Interests — Balance Sheet

NCI is presented as a **separate component of consolidated stockholders' equity** (not as a liability or mezzanine item).

| | IFRS | US GAAP |
|---|---|---|
| NCI measurement | Choice: **fair value** (full goodwill) OR **proportionate share of identifiable net assets** (partial goodwill) | **Must** use fair value (full goodwill) |

$$\boxed{\text{NCI (full goodwill)} = \text{NCI's \%} \times \text{Fair value of the subsidiary as a whole}}$$
$$\boxed{\text{NCI (partial goodwill)} = \text{NCI's \%} \times \text{Fair value of subsidiary's identifiable net assets}}$$

**Worked Example — NCI at Acquisition**: On 1 January Year 1, Meridian Group acquires **90%** of Castellan Corp in exchange for stock with a fair value of 180,000. The fair value of Castellan **as a whole** (100%) is 200,000; the fair value of Castellan's identifiable net assets is 160,000.

| | Full goodwill (mandatory US GAAP, optional IFRS) | Partial goodwill (IFRS only) |
|---|---|---|
| Goodwill | 200,000 − 160,000 = **40,000** | 180,000 − (90% × 160,000) = 180,000 − 144,000 = **36,000** |
| NCI | 10% × 200,000 = **20,000** | 10% × 160,000 = **16,000** |

> **Key insight**: Under full goodwill, NCI includes its share of goodwill; under partial goodwill, NCI reflects only its share of identifiable net assets (no goodwill allocated to NCI). **Consolidated net income attributable to the parent's shareholders is identical either way** — because 100% of the subsidiary's assets are stepped up to fair value and depreciated identically regardless of the goodwill method chosen. What *does* differ between methods is **total consolidated assets, equity, and any resulting ratios** (e.g., return on assets and return on equity will differ slightly because the equity/asset bases differ, even though net income to the parent is unchanged).

#### Non-Controlling Interests — Income Statement

On the consolidated income statement, **100%** of the subsidiary's revenues and expenses are included line by line (after eliminating intercompany transactions in full), and the portion of consolidated net income attributable to NCI is subtracted as a **separate line item**:

$$\boxed{\text{Net income attributable to parent's shareholders} = \text{Consolidated net income} - \text{NCI's share of subsidiary's net income}}$$

In practice, NCI is computed on the subsidiary's **after-tax** income.

---

### Goodwill Impairment

Goodwill is tested for impairment **at least annually** (more often if a triggering event occurs). Once written down, an impairment loss **cannot be reversed** under either framework.

| | IFRS (one-step) | US GAAP (two-step) |
|---|---|---|
| Level of testing | **Cash-generating unit (CGU)** — smallest group of assets generating largely independent cash inflows | **Reporting unit** — an operating segment or one level below it |
| Step 1 | Compare CGU's **recoverable amount** (higher of value in use and fair value less costs to sell) to its **carrying value** (including allocated goodwill) | Compare reporting unit's **fair value** to its **carrying value** (including goodwill); if carrying > fair value, proceed to Step 2 |
| Step 2 | N/A — impairment loss = carrying value − recoverable amount, applied first to goodwill, then pro rata to other non-cash assets if goodwill is exhausted | Impairment loss = carrying value of goodwill − **implied fair value of goodwill** (= fair value of reporting unit − fair value of its net assets); applied only to goodwill |

**Worked Example — IFRS (one-step)**: A CGU has a carrying value of 1,400,000 (including 300,000 of allocated goodwill). Its recoverable amount is 1,300,000.

$$\text{Impairment loss} = 1,400,000 - 1,300,000 = \boxed{100,000}$$

This is absorbed entirely by goodwill (300,000 → 200,000). If the recoverable amount had instead been 800,000, the loss would be 600,000: the first 300,000 wipes out goodwill entirely, and the remaining 300,000 is allocated pro rata across the CGU's other non-cash assets.

**Worked Example — US GAAP (two-step)**: A reporting unit has a fair value of 1,300,000 and a carrying value of 1,400,000 (including recorded goodwill of 300,000). The fair value of its identifiable net assets is 1,200,000.

- **Step 1**: Fair value (1,300,000) < carrying value (1,400,000) → potential impairment identified.
- **Step 2**: Implied goodwill = fair value of unit − fair value of net assets = 1,300,000 − 1,200,000 = 100,000. Impairment loss = current goodwill (300,000) − implied goodwill (100,000) = $\boxed{200,000}$.

Goodwill is written down from 300,000 to 100,000; the loss appears as a separate line item on the consolidated income statement under both frameworks.

---

### Question Set Answers

**Q1.** A parent issues stock to acquire 100% of a target. How are the combined entity's assets measured on the post-combination balance sheet?
**Answer:** The parent's own assets remain at **book value**; the target's (acquiree's) assets and liabilities are stepped up to **acquisition-date fair value**.

**Q2.** Under IFRS, a company chooses the partial goodwill method for a 75% acquisition. Compared to the full goodwill method, partial goodwill produces:
**Answer:** Lower goodwill and lower NCI (NCI reflects only its share of identifiable net assets, with no goodwill allocated to it) — but the **same** net income attributable to the parent's shareholders.

**Q3.** Why does full vs. partial goodwill not affect net income attributable to the parent, even though it changes total consolidated assets and equity?
**Answer:** Because 100% of the subsidiary's identifiable assets (e.g., PP&E) are stepped up to fair value and depreciated at 100% regardless of the goodwill method chosen — the depreciation expense affecting consolidated net income is identical either way. Only the goodwill amount and the equity split between parent and NCI differ.

**Q4.** A reporting unit's carrying value (including 250,000 of goodwill) is 1,000,000. Its fair value is 950,000, and the fair value of its identifiable net assets is 900,000. What is the US GAAP impairment loss?
**Answer:** Step 1: fair value (950,000) < carrying value (1,000,000) → test triggered. Step 2: implied goodwill = 950,000 − 900,000 = 50,000; impairment = 250,000 − 50,000 = **200,000**.

**Q5.** Same facts as Q4, but under IFRS with a recoverable amount of 950,000. What is the impairment loss?
**Answer:** IFRS is one-step: impairment = carrying value (1,000,000) − recoverable amount (950,000) = **50,000**, applied entirely against goodwill (250,000 → 200,000). Note IFRS and US GAAP can produce **different impairment amounts** from similar-looking facts because of the differing mechanics.

---

*Continued in [VIEs and Comparability Issues](/cfa/study/03-financial-statement-analysis/01-intercorporate-investments/05-vies-and-comparability-issues/).*
