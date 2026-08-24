---
layout: page
title: "Formula Summary: Intercorporate Investments (CFA Level II — Financial Statement Analysis)"
permalink: /study/03-financial-statement-analysis/01-intercorporate-investments/06-formula-summary/
prev: /cfa/study/03-financial-statement-analysis/01-intercorporate-investments/05-vies-and-comparability-issues/
---
## Formula Summary: Intercorporate Investments (CFA Level II — Financial Statement Analysis)

---

### 1. Classification Thresholds

$$\boxed{\text{No influence} < 20\% \quad|\quad \text{Significant influence } 20\text{–}50\% \quad|\quad \text{Control} > 50\%}$$

| Category | Method |
|---|---|
| No significant influence | Fair value (FVTPL/FVOCI) or amortized cost — IFRS 9 |
| Significant influence (associates, most JVs) | Equity method |
| Control (subsidiaries) | Acquisition method + consolidation |

---

### 2. IFRS 9 Financial Assets

$$\boxed{\text{Amortized cost requires: hold-to-collect business model AND cash flows are solely principal + interest (SPPI)}}$$

- **Equity instruments**: FVTPL (default) or FVOCI (irrevocable election); never amortized cost.
- **Debt instruments**: amortized cost, FVOCI, or FVTPL depending on business model.
- **FVOCI equity election**: only dividend income hits profit or loss; gains/losses stay in OCI.
- **Reclassification**: equity — never; debt — only if business model changes.

---

### 3. Equity Method

$$\boxed{\text{Ending investment} = \text{Beginning investment} + \text{Share of investee income} - \text{Dividends received} - \text{Amortization of excess purchase price} - \text{Impairment}}$$

$$\boxed{\text{Goodwill (equity method)} = \text{Purchase price} - \text{Investor's share of book value} - \text{Investor's share of (FV} - \text{BV) of identifiable net assets}}$$

$$\text{Investment balance (cross-check)} = \text{Investor's \%} \times \text{Investee's current book value} + \text{Unamortized excess purchase price}$$

> Dividends received **reduce** the investment account (return of capital) — never recognized as income. Amortization of the portion of excess purchase price allocated to finite-lived assets reduces equity income; goodwill is never amortized.

---

### 4. Transactions with Associates

$$\boxed{\text{Investor's share of unrealized profit deferred} = \text{Ownership \%} \times \text{Total intercompany profit} \times \text{\% of goods unsold at investee}}$$

| Direction | Profit originally recorded by | Deferral hits |
|---|---|---|
| Upstream (associate → investor) | Associate | Investor's equity income |
| Downstream (investor → associate) | Investor | Investor's own gross profit / equity income |

---

### 5. Acquisition Method and Goodwill

$$\boxed{\text{Goodwill} = \text{Fair value of consideration/entity} - \text{Fair value of identifiable net assets acquired}}$$

| Goodwill method | Formula | Availability |
|---|---|---|
| Partial goodwill | Consideration given − Acquirer's share of FV of net assets | IFRS only (optional) |
| Full goodwill | FV of entity as a whole − 100% of FV of net assets | IFRS (optional) / US GAAP (mandatory) |

- Consideration = fair value of cash/stock/other assets given **plus** acquisition-date fair value of contingent consideration.
- Direct transaction costs are **expensed**, not capitalized into the purchase price.
- **Bargain purchase**: purchase price < fair value of net assets acquired → immediate gain in profit or loss.

---

### 6. Non-Controlling Interests

$$\boxed{\text{NCI (full goodwill)} = \text{NCI \%} \times \text{Fair value of the subsidiary as a whole}}$$
$$\boxed{\text{NCI (partial goodwill)} = \text{NCI \%} \times \text{Fair value of subsidiary's identifiable net assets}}$$
$$\boxed{\text{Net income attributable to parent} = \text{Consolidated net income} - \text{NCI's share of subsidiary's net income}}$$

| | IFRS | US GAAP |
|---|---|---|
| NCI measurement | Fair value (full) **or** proportionate share of net assets (partial) | Fair value (full) — mandatory |

---

### 7. Goodwill Impairment

| | IFRS (one-step) | US GAAP (two-step) |
|---|---|---|
| Level | Cash-generating unit (CGU) | Reporting unit |
| Test | Recoverable amount vs. carrying value | Step 1: fair value vs. carrying value → Step 2: implied goodwill vs. recorded goodwill |

$$\boxed{\text{IFRS impairment loss} = \text{Carrying value of CGU} - \text{Recoverable amount of CGU}}$$
$$\boxed{\text{US GAAP implied goodwill} = \text{Fair value of reporting unit} - \text{Fair value of its net assets}}$$
$$\boxed{\text{US GAAP impairment loss} = \text{Recorded goodwill} - \text{Implied goodwill}}$$

> IFRS applies the loss first to goodwill, then pro rata to other non-cash assets if goodwill is exhausted. US GAAP applies the loss only to goodwill. Impairment losses are **never reversed** under either framework.

---

### 8. Variable Interest / Special Purpose Entities

$$\boxed{\text{Consolidate a VIE/SPE if you are the primary beneficiary} = \text{absorb majority of expected losses OR receive majority of expected residual returns}}$$

Securitizing receivables through a consolidated SPE produces a consolidated balance sheet **identical** to borrowing directly against the receivables — any "sale" gain and the transferred receivables are reversed/retained on consolidation.

---

### 9. The Central Comparison — Fair Value vs. Equity Method vs. Consolidation

This is the single most exam-relevant comparison in the learning module: **the same underlying economic investment produces different financial statement pictures depending solely on the accounting classification.**

| Financial statement item | Fair value method (<20%, no influence) | Equity method (20–50%, significant influence) | Consolidation (>50%, control) |
|---|---|---|---|
| Total assets | Investment at fair value only | Single "investment" line (cost + share of income − dividends − amortization) | 100% of subsidiary's assets added, at fair value |
| Total liabilities | Investee's liabilities never appear | Investee's liabilities never appear | 100% of subsidiary's liabilities added |
| Revenue / Sales | Investee's revenue never appears | Investee's revenue never appears | 100% of subsidiary's revenue added |
| Net income to parent's shareholders | **Different** — only dividends (± unrealized FV gains if FVTPL) | **Same as consolidation** — full proportionate share of investee income | **Same as equity method** |
| Total equity | Parent's equity only | Parent's equity only | Parent's equity **plus** NCI |

> **Key insight**: Net income attributable to the parent's shareholders is **identical under the equity method and consolidation** — only the *disclosure* differs (one line vs. full line-by-line detail). The fair value method is fundamentally different because it captures only dividends/interest received, not a share of investee earnings.

Because equity method and consolidation share the same net income numerator but very different denominators, the **direction of ratio distortion is entirely predictable**:

| Ratio | Equity method | Consolidation | Direction of change, equity method → consolidation |
|---|---|---|---|
| Net profit margin | Higher | Lower | ↓ (same NI ÷ larger consolidated sales) |
| Return on equity | Higher | Lower | ↓ (same NI ÷ larger consolidated equity, which includes NCI) |
| Total asset turnover | Lower | Higher | ↑ (consolidated sales added proportionally more than assets, in the typical case) |
| Long-term debt-to-equity (leverage) | Lower (**understated**) | Higher (**more representative of true leverage**) | ↑ |
| Current ratio | Typically higher | Typically lower | ↓ (depends on subsidiary's own current ratio relative to parent's) |

---

### Worked Example — Meridian Group / Castellan Corp Ratio Comparison

**Setup**: Meridian Group owns 50% of Castellan Corp and has obtained control (consolidates). No goodwill arises (purchase price exactly matched Meridian's proportionate share of Castellan's fair value). Selected figures, Year 2:

| | Meridian (standalone / equity-method basis) | Castellan (100%, at fair value) |
|---|---|---|
| Net sales | 950 | 510 |
| Current assets | 250 | 140 |
| Current liabilities | 110 | 90 |
| Long-term debt | 600 | 400 |
| Total identifiable net assets (fair value) | — | 640 |
| Net income attributable to Meridian's shareholders | 75 | (same under both methods) |

**NCI at fair value** = 50% × 640 = **320**. **Consolidated equity** = Meridian's own equity (1,430) + NCI (320) = **1,750**. **Consolidated total assets** = Meridian's own assets (2,140, which includes a 320 "investment in Castellan" line) − 320 + Castellan's assets at fair value (1,130) = **2,950**.

| Ratio | Equity method | Consolidation | Calculation |
|---|---|---|---|
| Current ratio | 2.27 | 1.95 | 250/110 vs. (250+140)/(110+90) = 390/200 |
| Long-term debt-to-equity | 0.42 | 0.57 | 600/1,430 vs. (600+400)/1,750 = 1,000/1,750 |
| Net profit margin | 7.89% | 5.14% | 75/950 vs. 75/(950+510) = 75/1,460 |
| Return on equity | 5.24% | 4.29% | 75/1,430 vs. 75/1,750 |
| Total asset turnover | 0.444 | 0.495 | 950/2,140 vs. 1,460/2,950 |

> **Key insight**: Net income attributable to Meridian's shareholders is **75 either way**. Every ratio difference above comes purely from the denominator (or, for turnover/margin, the numerator's sales base) changing — a textbook illustration of why the *choice* of accounting method for the same 50% economic stake can make a company look more profitable and less leveraged (equity method) or more representative of its true consolidated size and leverage (consolidation).

---

### Quick Reference — All Formulas

| Measure | Formula |
|---|---|
| Classification thresholds | <20% no influence, 20–50% significant influence, >50% control |
| Amortized cost eligibility | Hold-to-collect model AND SPPI cash flows |
| Equity method ending balance | Beginning + share of income − dividends − amortization − impairment |
| Equity method goodwill | Purchase price − share of BV − share of (FV−BV) of identifiable net assets |
| Unrealized profit deferred | Ownership % × total intercompany profit × % unsold |
| Acquisition goodwill | FV of consideration/entity − FV of identifiable net assets |
| Partial goodwill | Consideration given − acquirer's share of FV of net assets |
| Full goodwill | FV of entity − 100% of FV of net assets |
| NCI (full goodwill) | NCI % × FV of subsidiary as a whole |
| NCI (partial goodwill) | NCI % × FV of subsidiary's identifiable net assets |
| Net income to parent | Consolidated NI − NCI's share of subsidiary NI |
| IFRS impairment loss | Carrying value of CGU − recoverable amount |
| US GAAP implied goodwill | FV of reporting unit − FV of its net assets |
| US GAAP impairment loss | Recorded goodwill − implied goodwill |
| VIE consolidation trigger | Primary beneficiary: majority of losses OR majority of residual returns |

---

### Question Set Answers

**Q1.** A parent consolidates a 60%-owned subsidiary. Compared to using the equity method for the same stake, consolidation will show:
**Answer:** Higher total assets, higher total liabilities, higher revenue, higher total equity (due to NCI) — but the **same** net income attributable to the parent's shareholders.

**Q2.** Which single financial statement figure is guaranteed to be unaffected by the choice between equity method and consolidation for the same controlling stake?
**Answer: Net income (and retained earnings) attributable to the parent's shareholders.** Every other major statement total (assets, liabilities, revenue, equity) differs.

**Q3.** An analyst wants the most accurate picture of a group's true leverage. Should she prefer the equity-method-based debt-to-equity ratio or the consolidated one, and why?
**Answer:** The **consolidated** ratio — the equity method excludes the investee's own liabilities entirely, systematically understating group leverage whenever the investee itself carries debt.

**Q4.** Why does the equity method typically produce a higher net profit margin than consolidation for the same underlying investment?
**Answer:** Net income attributable to the parent is identical under both methods, but equity-method revenue excludes the investee's sales entirely, while consolidated revenue includes 100% of the investee's sales — a smaller denominator under the equity method mechanically produces a higher margin.

---

### Exam Tips

- Ownership percentage thresholds (<20% / 20–50% / >50%) are **presumptions**, not rules — board seats, policy-making participation, material transactions, personnel interchange, and technological dependency can override the percentage.
- **Equity method = "one-line consolidation."** Investment account = cost + share of income − dividends − amortization of excess purchase price − impairment. Dividends are a **return of capital**, never income.
- **Excess purchase price**: allocate to identifiable assets first (amortize over their lives), residual is goodwill (never amortized, tested for impairment).
- **Upstream vs. downstream** only determines whose income statement originally shows the profit — in both cases, defer the investor's proportionate share of the **unrealized** (unsold-to-outsiders) portion.
- **Net income attributable to the parent's shareholders is identical under the equity method and consolidation** — this is the single most tested fact in this LM. Everything else (assets, liabilities, revenue, equity, and every ratio) differs.
- **Full vs. partial goodwill** changes goodwill and NCI, but never changes net income to the parent — 100% of the subsidiary's assets are stepped up to fair value regardless of the goodwill method.
- IFRS goodwill impairment = **one-step** (CGU recoverable amount vs. carrying value). US GAAP = **two-step** (fair value trigger, then implied-goodwill measurement). Impairment losses are **never reversed** under either framework.
- **Fair value option** for equity-method-eligible investments: available to all entities under US GAAP, restricted to VC/mutual funds/similar under IFRS; irrevocable; no goodwill or amortization created.
- IFRS **permits reversal** of an equity-method (and asset-level) impairment loss if conditions improve; US GAAP **prohibits** reversal — but neither framework ever reverses a **goodwill** impairment loss (consolidated goodwill).
- **VIE/SPE consolidation** turns on the **primary beneficiary** test (majority of losses or majority of residual returns), not voting control — this closed the Enron-era off-balance-sheet loophole.
- Securitizing assets through a consolidated SPE leaves the consolidated balance sheet **unchanged** from direct borrowing — any "gain on sale" and the transferred assets are reversed on consolidation.
- Contingent liabilities: IFRS recognizes if **reliably measurable**; US GAAP requires **probable and reasonably estimable** — a stricter bar. Contingent assets: IFRS never recognizes at acquisition; US GAAP may, if "more likely than not."
- Restructuring costs and in-process R&D impairments/amortization from a business combination are **never** part of the acquisition cost — always expensed/amortized in the periods incurred.
