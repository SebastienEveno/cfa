---
layout: page
title: "Equity Method — Transactions with Associates and Disclosure"
permalink: /study/03-financial-statement-analysis/01-intercorporate-investments/03-equity-method-transactions-and-disclosure/
next: /cfa/study/03-financial-statement-analysis/01-intercorporate-investments/04-acquisition-method-and-consolidation/
prev: /cfa/study/03-financial-statement-analysis/01-intercorporate-investments/02-equity-method-basics/
---
## Summary: Equity Method — Transactions with Associates and Disclosure (CFA Level II — Financial Statement Analysis)

---

### Upstream vs. Downstream Transactions

Because an investor can influence the terms and timing of transactions with an investee over which it has significant influence, **profit on intercompany transactions cannot be treated as fully realized** until confirmed by a sale to an outside third party. Both IFRS and US GAAP require the **unrealized profit** to be **deferred**, to the extent of the investor's ownership interest, by reducing equity income.

| Transaction direction | Who records the profit | Where the deferral hits |
|---|---|---|
| **Upstream** (associate → investor) | Recorded on the **associate's** income statement | Investor's share of the *unrealized* portion is removed from **equity income** on the investor's income statement |
| **Downstream** (investor → associate) | Recorded on the **investor's** income statement | Investor's share of the *unrealized* portion is removed directly from the **investor's own** gross profit / equity income |

$$\boxed{\text{Investor's share of unrealized profit deferred} = \text{Investor's ownership \%} \times \text{Total profit on intercompany sale} \times \text{\% of goods still unsold at investee}}$$

In the period the deferred profit is confirmed by an outside sale (i.e., the investee resells the remaining goods to a third party), it is added back to equity income.

---

### Worked Example — Upstream Sale

**Setup**: On 1 January Year 1, Meridian Group acquires a 25% interest in Castellan Corp for 1,000,000, applying the equity method. Book value of Castellan's net assets = 3,800,000; a building is undervalued by 40,000 (20-year remaining life). During Year 1, Castellan reports net income of 20,000 and pays dividends of 3,200. During the year, **Castellan sold inventory to Meridian** (an **upstream** sale); at year-end, 8,000 of profit from this sale remains in Castellan's net income because Meridian has not yet resold the inventory to an outside party.

**Equity income, Year 1:**

| | Amount |
|---|---|
| Meridian's share of Castellan's reported income (25% × 20,000) | 5,000 |
| Less: amortization of excess purchase price on building (25% × 40,000 ÷ 20) | (500) |
| Less: Meridian's share of unrealized upstream profit (25% × 8,000) | (2,000) |
| **Equity income, Year 1** | **2,500** |

> **Key insight**: Whether the sale is upstream or downstream determines *which company's* income statement originally records the profit — but in both cases, it is the **investor's proportionate share** of the unrealized (unsold-to-outsiders) portion that gets deferred out of equity income. Once the inventory is resold externally in a later period, that deferred amount flows back into equity income as *realized* profit.

---

### Disclosure Requirements

Both IFRS and US GAAP require disclosure in the notes to the financial statements about the assets, liabilities, and results of equity-method investments, typically including:

- The **carrying amount** of investments in associates/joint ventures
- The investor's **share of profit or loss** (and other comprehensive income) of associates/joint ventures, often disaggregated between continuing and discontinued operations
- **Aggregated financial information** for individually immaterial associates and joint ventures
- The **accounting policy** for how equity income is determined and whether results are incorporated with a time lag (in practice, a lag of up to one quarter is common and acceptable for practical reasons)

> Dividends from associates are **never** separately reported as investor income — this would double-count income the investor already recognized in full under the equity method.

---

### Issues for Analysts

The equity method presents several distinct analytical challenges:

1. **Appropriateness of the classification itself.** Management has an incentive to game the ownership/influence boundary:
   - An investor holding **19%** (just under the 20% threshold) but with real influence might avoid the equity method to keep associate **losses** off its income statement.
   - An investor holding **25%** without real influence (or without access to associate cash flows) might nonetheless prefer the equity method because it lets associate **income** flow through even without effective control.

2. **Understated leverage and distorted ratios ("one-line consolidation" problem).** The associate's own assets and liabilities — potentially significant — are **not** reflected on the investor's balance sheet; only a single net investment line appears. This can materially understate the investor's effective economic footprint and:
   - **Debt ratios** appear more conservative than the group's true economic leverage.
   - **Net margin** can be *overstated* because the associate's income is included in the investor's net income numerator, but the associate's **revenue is not included** in the investor's sales (denominator) — inflating margin ratios relative to a fully consolidated presentation.
   - An investor might in substance **control** an investee (effectively >50% influence via contractual arrangements) yet report it under the equity method — deliberately or not — to keep the investee's liabilities off the consolidated balance sheet.

3. **Quality of earnings.** The equity method assumes the investor earns a pro rata fraction of every dollar the investee earns, **even if no cash is received**. Analysts should assess:
   - Whether the associate has **restrictions on dividend payments** that would prevent the investor from ever collecting cash matching the reported equity income.
   - The statement of cash flows, since equity income is a **non-cash** component of net income (only dividends received are cash).

---

### Question Set Answers

**Q1.** Meridian sells inventory to Castellan (its 30%-owned associate) at a profit of 60,000; at year-end, 40% of the inventory remains unsold by Castellan. How much of the profit does Meridian defer from its own income statement?
**Answer:** This is a **downstream** sale, so the profit originates on Meridian's own books. Meridian defers its proportionate share of the *unrealized* (unsold) portion: 30% × (60,000 × 40%) = 30% × 24,000 = **7,200** is deferred out of Meridian's recognized profit; the remaining 60,000 − 24,000 = 36,000 (already resold externally) is fully recognized.

**Q2.** Why might an analyst be skeptical of a company reporting a 25% associate stake using the equity method, if the associate consistently reports losses that management appears eager to avoid consolidating?
**Answer:** The equity method requires recognizing the investor's *full* proportionate share of associate losses, so it does not, by itself, let a company hide losses — but an analyst should verify that the ownership/influence classification is genuine rather than structured (e.g., via voting-right caps or side agreements) to avoid a *different*, less favorable classification such as consolidation, which would force disclosure of the associate's full liabilities.

**Q3.** What is the primary reason equity-method net margin can look better than a consolidated presentation of the same economic investment?
**Answer:** Equity income (net, after-the-fact) is added to the investor's net income, but the associate's revenue is excluded from the investor's sales — inflating the margin ratio relative to full consolidation, where both the associate's revenue and expenses are included line by line.

**Q4.** An analyst notices an equity-method investee has paid no dividends in three years despite reporting steady profits. What should the analyst check?
**Answer:** Whether the investee faces **restrictions on dividend distributions** (e.g., loan covenants, local capital controls, reinvestment requirements) — since equity income is a non-cash accrual, sustained profits with no dividends raise a cash-flow-quality concern for the investor.

---

*Continued in [Acquisition Method and Consolidation](/cfa/study/03-financial-statement-analysis/01-intercorporate-investments/04-acquisition-method-and-consolidation/).*
