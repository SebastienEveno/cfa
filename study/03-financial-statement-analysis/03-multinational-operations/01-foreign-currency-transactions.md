---
layout: page
title: "Foreign Currency Transactions"
permalink: /study/03-financial-statement-analysis/03-multinational-operations/01-foreign-currency-transactions/
next: /cfa/study/03-financial-statement-analysis/03-multinational-operations/02-translation-methods-and-functional-currency/
---
## Summary: Foreign Currency Transactions (CFA Level II — Financial Statement Analysis)

---

### Presentation, Functional, and Local Currency

| Concept | Definition |
|---------|-----------|
| **Local currency** | The national currency of the country where an entity is located |
| **Functional currency** | The currency of the primary economic environment in which an entity operates; normally the currency in which it primarily generates and expends cash |
| **Presentation (reporting) currency** | The currency in which financial statements are presented |
| **Foreign currency** | Any currency other than an entity's own functional currency |

> **Key insight**: In most cases, local = functional = presentation currency. A multinational parent, however, typically has *several* functional currencies across its subsidiaries — one per foreign operating environment — while it has only **one** presentation currency (its own).

A **foreign currency transaction** occurs when a company (1) imports/exports on credit terms denominated in a currency other than its own functional currency, or (2) borrows/lends an amount to be repaid/received in a foreign currency.

---

### Transaction Exposure to Foreign Exchange Risk

Exposure arises only when the transaction date and cash-settlement date differ — the company carries a foreign-currency-denominated monetary asset or liability in the interim.

| Transaction | Exposure Type | FC Strengthens | FC Weakens |
|---|---|---|---|
| **Export sale** (receivable in FC) | Asset exposure | **Gain** | Loss |
| **Import purchase** (payable in FC) | Liability exposure | Loss | **Gain** |

> **Key insight**: An asset exposure benefits from a strengthening foreign currency (more functional currency is received on conversion); a liability exposure is hurt by it (more functional currency must be spent to settle).

---

### Accounting Mechanics

**Core principle**: Record the transaction at the spot rate on the transaction date. Any FC-denominated monetary asset/liability is then revalued at each subsequent balance sheet date and again at settlement, with the change flowing through net income as a **foreign currency transaction gain or loss** — even if unrealized.

$$\boxed{\text{FX transaction gain (loss)} = \text{FC monetary amount} \times (\text{Rate}_{\text{new}} - \text{Rate}_{\text{old}})}$$

Where "Rate" is stated as units of functional currency per unit of foreign currency (FC/functional).

**Case 1 — Settlement occurs before the balance sheet date**: the entire gain/loss is recognized at settlement, in the period of settlement, and is realized.

**Case 2 — A balance sheet date falls between transaction and settlement**: the monetary item is revalued at each balance sheet date; the recognized gain/loss up to that date is *unrealized*. A second gain/loss is recognized from the balance sheet date to the settlement date. The two pieces sum to the total realized gain/loss over the life of the transaction.

---

### Worked Example — Northbridge S.A.

Northbridge S.A. is a Europe-based company with EUR as its functional and presentation currency.

**Case 1 (settlement before year-end).** Northbridge imports goods from a Japanese supplier on 1 November 20X1 for JPY10,000,000, payable in 45 days. Spot rates:

| Date | JPY1 = EUR |
|---|---|
| 1 Nov 20X1 (transaction) | 0.0068 |
| 15 Dec 20X1 (settlement) | 0.0071 |

- Payable recorded on 1 Nov: JPY10,000,000 × 0.0068 = **EUR68,000**
- Cash paid on 15 Dec: JPY10,000,000 × 0.0071 = **EUR71,000**
- **FX transaction loss = EUR3,000** (the yen strengthened while Northbridge owed yen — a liability exposure hurt by appreciation), recognized in 20X1 net income; realized because cash actually left the company.

**Case 2 (intervening balance sheet date).** Northbridge sells goods to a UK customer for GBP100,000 on 15 November 20X1, collectible 15 January 20X2. Fiscal year-end is 31 December.

| Date | GBP1 = EUR | EUR Value | Change |
|---|---|---|---|
| 15 Nov 20X1 (sale) | 1.160 | 116,000 | N/A |
| 31 Dec 20X1 (year-end) | 1.180 | 118,000 | +2,000 |
| 15 Jan 20X2 (settlement) | 1.175 | 117,500 | −500 |

- 20X1 income statement: **unrealized FX transaction gain of EUR2,000** (receivable — asset exposure — benefits as GBP strengthens)
- 20X2 income statement (Q1): **FX transaction loss of EUR500** as GBP weakens slightly before settlement
- Net over the life of the receivable: EUR1,500 realized gain (117,500 − 116,000), which equals the sum of the two pieces recognized (2,000 − 500)

> **Key insight**: Both IFRS and US GAAP require recognizing this **unrealized** gain/loss in net income at each intervening balance sheet date — one of the few cases where accounting rules require booking a gain before it is realized. The final realized amount can differ substantially from the amount originally recognized if exchange rates reverse course before settlement.

---

### Income Statement Placement and Comparability

Neither IFRS nor US GAAP dictates *where* on the income statement FX transaction gains/losses are reported. Common alternatives:

1. As a component of **other operating income/expense** (affects operating profit margin)
2. As a component of **non-operating income/expense**, often within net financing cost (does not affect operating profit margin)

> **Key insight**: Because companies can choose either placement, operating profit margins are **not directly comparable** across companies unless an analyst adjusts for how each treats FX transaction gains/losses. A company that buries transaction gains/losses in operating income will show more volatile operating margins over time, since exchange rate moves rarely repeat in the same direction or magnitude period to period.

---

### Disclosures

- **IFRS**: disclose "the amount of exchange differences recognized in profit or loss"
- **US GAAP**: disclose "the aggregate transaction gain or loss included in determining net income for the period"
- Neither standard requires disclosing *which line item* houses the gain/loss — analysts must search the notes and MD&A.

**Reasons a company's FX transaction gains/losses may be immaterial / undisclosed:**

1. Few, small foreign-currency transactions
2. Relatively stable exchange rates between functional currency and transaction currencies
3. **Natural offsetting** — e.g., a receivable and payable in the same foreign currency of similar size and maturity largely cancel
4. **Hedging** — forward contracts and FX options are the two most common instruments used to manage transaction exposure

---

### Question Set Answers

**Q1.** A US company (USD functional currency) sells goods to a German customer for EUR50,000 on credit, to be settled in 60 days. Between the sale date and a balance sheet date falling 30 days later, the euro weakens from USD1.10/EUR to USD1.05/EUR. What is recognized, and is it a gain or a loss?
**A.** The receivable is an **asset exposure**; the euro **weakened**, so the company recognizes an **unrealized FX transaction loss** of EUR50,000 × (1.05 − 1.10) = **USD2,500 loss**, included in net income at the balance sheet date.

**Q2.** Two otherwise identical companies both had a EUR5 million net FX transaction gain this year. Company A reports it in "other operating income"; Company B reports it in "non-operating income." Which company shows the higher operating profit margin, all else equal?
**A. Company A** — including the gain within operating income raises operating profit (and thus operating margin) relative to Company B, even though net profit margin is identical for both.

**Q3.** A company has a JPY payable and a JPY receivable of roughly equal size and maturity outstanding at year-end. The yen strengthens sharply during the year. What is the *net* effect on reported FX transaction gain/loss, and why might the company choose not to disclose a dollar amount?
**A.** The **gain on the receivable** (asset exposure benefiting from JPY strengthening) is **largely offset** by the **loss on the payable** (liability exposure hurt by JPY strengthening). The net effect is close to zero, which is a common reason companies view FX transaction gains/losses as immaterial and provide minimal disclosure.
