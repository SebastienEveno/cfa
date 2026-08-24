---
layout: page
title: "Translation Methods and Functional Currency"
permalink: /study/03-financial-statement-analysis/03-multinational-operations/02-translation-methods-and-functional-currency/
next: /cfa/study/03-financial-statement-analysis/03-multinational-operations/03-translation-mechanics-and-illustration/
prev: /cfa/study/03-financial-statement-analysis/03-multinational-operations/01-foreign-currency-transactions/
---
## Summary: Translation Methods and Functional Currency (CFA Level II — Financial Statement Analysis)

---

### Two Conceptual Questions in Translation

To consolidate a foreign subsidiary that keeps its books in a foreign currency, the parent must resolve:

1. **What exchange rate translates each financial statement item** — current, average, or historical?
2. **How is the resulting translation adjustment reflected** in the consolidated statements — through net income, or deferred in equity — so that the translated balance sheet still balances?

---

### Balance Sheet (Translation) Exposure

Items translated at the **current rate** are revalued each period in parent-currency terms and are said to be **exposed** to translation adjustment. Items translated at **historical rates** are not revalued and are not exposed.

| Balance Sheet Exposure | FC Strengthens | FC Weakens |
|---|---|---|
| **Net asset exposure** (exposed assets > exposed liabilities) | Positive translation adjustment | Negative translation adjustment |
| **Net liability exposure** (exposed liabilities > exposed assets) | Negative translation adjustment | Positive translation adjustment |

This mirrors the transaction-exposure logic from the prior file (asset exposure ↔ gains when FC strengthens; liability exposure ↔ losses when FC strengthens) — just applied to an entire balance sheet rather than a single receivable/payable.

---

### The Two Translation Methods

$$\boxed{\text{Current rate method: ALL assets and liabilities translated at the current (period-end) rate}}$$

$$\boxed{\text{Temporal method: MONETARY items (and non-monetary items at current value) at current rate; historical-cost items at historical rates}}$$

| Item | Current Rate Method | Temporal Method |
|---|---|---|
| Monetary assets/liabilities (cash, receivables, payables, most debt) | Current rate | Current rate |
| Non-monetary items at current/market value | Current rate | Current rate |
| Non-monetary items at historical cost (inventory at cost, PP&E, intangibles) | Current rate | **Historical rate** |
| Equity (common/capital stock) | Historical rate | Historical rate |
| Retained earnings | Plug (from translated income statement + dividends) | Plug (from translated income statement + dividends) |
| Revenues and most expenses | Average rate for the period | Average rate for the period |
| COGS, depreciation, amortization (expenses tied to historical-cost assets) | Average rate | **Historical rate(s)** matching the related asset |
| **Resulting translation adjustment** | Separate component of **equity** (CTA — cumulative translation adjustment) | **Net income** (a translation/remeasurement gain or loss) |
| **Typical balance sheet exposure** | **Net asset** (nearly always, since assets = liabilities + equity and equity > 0) | **Net liability** (monetary liabilities usually exceed monetary assets, since most non-monetary assets are historical-cost and thus unexposed) |

> **Key insight — the single most tested distinction**: Current rate method → translation adjustment sits in **OCI/equity**, never touches net income, until the subsidiary is sold. Temporal method → translation gain/loss hits **net income** every period. US GAAP calls the temporal-method translation process **remeasurement**.

---

### Determining the Functional Currency

**Three-step process:**

1. Identify the foreign entity's **functional currency**.
2. Translate any of the entity's *own* foreign currency balances (i.e., currencies other than its functional currency) into its functional currency (using the current-transaction-accounting rules from the prior file).
3. If the functional currency differs from the parent's presentation currency, translate the functional-currency financial statements into the parent's presentation currency using the **current rate method**.

**IFRS functional currency indicators** (indicators 1–2 take priority when evidence is mixed):

| # | Indicator | Points toward FC = local currency when... |
|---|---|---|
| 1 | Sales price indicator | Local currency mainly drives the entity's selling prices |
| 2 | Competitive/regulatory indicator | Local country's competition/regulation drives selling prices |
| 3 | Cost indicator | Local currency mainly drives labor, material, and other costs |
| 4 | Financing indicator | Funds from financing activities are generated in local currency |
| 5 | Cash retention indicator | Operating cash receipts are usually retained in local currency |
| 6 | Autonomy indicator | The foreign operation runs with significant autonomy (vs. as an extension of the parent) |
| 7 | Intercompany transactions indicator | Transactions with parent are a small proportion of the entity's activity |
| 8 | Cash flow indicator | Foreign entity's cash flows don't directly affect / aren't readily remitted to parent |
| 9 | Financing/debt-service indicator | Foreign entity's own operating cash flows can service its debt without parent funding |

> **Key insight**: These indicators are directional evidence, not a checklist requiring unanimity. Management applies judgment when indicators conflict, giving priority to indicators 1 and 2.

---

### Decision Logic: Functional Currency → Translation Method

| If the foreign subsidiary's functional currency is... | Then translate using... | And the translation adjustment goes to... |
|---|---|---|
| **The local (foreign) currency** — the subsidiary operates with autonomy in its own economic environment | **Current rate method** | Cumulative translation adjustment (equity/OCI) |
| **The parent's presentation currency** — the subsidiary is effectively a extension of the parent's operations (few indicators point to local autonomy) | **Temporal method** (= "remeasurement" under US GAAP) | Net income (translation/remeasurement gain or loss) |

> **Exam tip**: Read the vignette for autonomy language — "operates independently," "sets its own prices," "finances itself locally" → foreign currency is functional → current rate method. Conversely, "acts as a sales/distribution arm of the parent," "prices set in parent's currency," "financed by parent" → parent's currency is functional → temporal method.

---

### Worked Example — Northbridge S.A. and a New US Subsidiary

Northbridge S.A. (Europe-based, EUR presentation currency) forms a wholly owned US subsidiary, Southmark Inc., on 31 December 20X1 by investing EUR10,000, converted to US$10,000 at a 1:1 spot rate. Southmark also borrows US$5,000 locally and buys US$12,000 of inventory, holding US$3,000 cash.

**Southmark Balance Sheet, 31 Dec 20X1 (USD)**

| Assets | USD | Liabilities & Equity | USD |
|---|---|---|---|
| Cash | 3,000 | Notes payable | 5,000 |
| Inventory | 12,000 | Common stock | 10,000 |
| **Total** | **15,000** | **Total** | **15,000** |

At inception, translating everything at EUR1.00 = US$1 keeps the translated balance sheet in balance (EUR15,000 = EUR15,000). By 31 March 20X2, the dollar has **weakened** to EUR0.80 = US$1, with no new transactions.

**If the current rate method applies** (all items at the new current rate of 0.80, common stock at historical 1.00):

| | USD | Rate | EUR |
|---|---|---|---|
| Cash | 3,000 | 0.80 C | 2,400 |
| Inventory | 12,000 | 0.80 C | 9,600 |
| **Total assets** | **15,000** | | **12,000** |
| Notes payable | 5,000 | 0.80 C | 4,000 |
| Common stock | 10,000 | 1.00 H | 10,000 |
| Translation adjustment (plug, negative) | | | (2,000) |
| **Total liabilities + equity** | **15,000** | | **12,000** |

Net asset exposure (assets US$15,000 > liabilities US$5,000) combined with a **weakening** dollar produces a **negative** CTA of EUR2,000, parked in equity — unrealized, and reflecting what Northbridge would lose in euro terms if it sold Southmark today.

**If the temporal method applies** (only monetary items at current rate; inventory stays at historical 1.00):

| | USD | Rate | EUR |
|---|---|---|---|
| Cash | 3,000 | 0.80 C | 2,400 |
| Inventory | 12,000 | 1.00 H | 12,000 |
| **Total assets** | **15,000** | | **14,400** |
| Notes payable | 5,000 | 0.80 C | 4,000 |
| Common stock | 10,000 | 1.00 H | 10,000 |
| Translation gain (plug, positive, → net income) | | | 400 |
| **Total liabilities + equity** | **15,000** | | **14,400** |

Net monetary liability exposure (monetary assets US$3,000 cash < monetary liabilities US$5,000 notes payable) combined with a weakening dollar produces a **translation gain of EUR400** in net income — the mirror image of a foreign-currency liability exposure benefiting when the foreign currency weakens.

---

### Question Set Answers

**Q1.** A French parent's Japanese subsidiary sets its own sales prices based on local competition, sources materials locally, retains cash locally, and services its own debt from local operating cash flow. What is the subsidiary's functional currency, and which translation method applies?
**A.** All indicators point to **local autonomy** → the **Japanese yen** is the functional currency → the **current rate method** applies, with the CTA reported in equity.

**Q2.** A Canadian distribution subsidiary of a US parent sells only the parent's US-sourced products, prices them in US dollars, and is financed almost entirely by intercompany loans from the parent. What is the functional currency, and which method applies?
**A.** The subsidiary is effectively an extension of the parent → the **US dollar** (parent's presentation currency) is functional → the **temporal method** (remeasurement) applies, with the gain/loss in net income.

**Q3.** Under which method is balance sheet exposure easiest for management to fully eliminate, and why?
**A.** The **temporal method** — exposure is eliminated when monetary assets equal monetary liabilities, which management can engineer (e.g., financing local operations with equity rather than debt). Under the **current rate method**, eliminating exposure requires total assets to equal total liabilities, i.e., zero stockholders' equity — essentially unachievable in practice.
