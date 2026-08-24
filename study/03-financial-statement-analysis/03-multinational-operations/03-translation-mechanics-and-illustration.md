---
layout: page
title: "Translation Mechanics and Illustration"
permalink: /study/03-financial-statement-analysis/03-multinational-operations/03-translation-mechanics-and-illustration/
next: /cfa/study/03-financial-statement-analysis/03-multinational-operations/04-hyperinflationary-economies-and-analytical-issues/
prev: /cfa/study/03-financial-statement-analysis/03-multinational-operations/02-translation-methods-and-functional-currency/
---
## Summary: Translation Mechanics and Illustration (CFA Level II — Financial Statement Analysis)

---

### Translating Retained Earnings

Equity accounts (other than retained earnings) are translated at historical rates under **both** methods. Retained earnings, however, is the cumulative result of past income and dividends, so it must be built up period by period rather than translated directly.

**First year of operations:**

$$\boxed{\text{RE in parent currency} = \text{Net income (translated per method)} - \text{Dividends} \times \text{Rate when declared}}$$

**Subsequent years:**

$$\boxed{\text{Ending RE}_{PC} = \text{Beginning RE}_{PC} + \text{Net income}_{PC} - \text{Dividends}_{PC}}$$

Where beginning RE in parent currency (PC) simply carries forward from the prior year's ending translated balance.

> **Key insight**: Under the **current rate method**, the income statement is translated first (all items at the average rate, dividends at the declaration-date rate), giving translated net income and ending RE; these RE and net-income figures then flow onto the balance sheet, and the **translation adjustment is the plug** needed to balance the balance sheet. Under the **temporal method**, it works in reverse — the **balance sheet is translated first**, RE is the plug there, and that RE figure is then carried back to the income statement, where the **translation gain/loss is the plug** needed to reconcile income before translation effects to the required ending RE.

---

### Full Illustration — Northbridge S.A. and Southmark Inc.

Northbridge S.A. (Europe-based, EUR presentation currency) establishes Southmark Inc. in the United States on 1 January 20X1, funding it partly with equity and partly with a US-dollar bank loan used to buy property and equipment.

**Southmark Balance Sheet, 1 January 20X1 (USD)**

| Assets | USD | Liabilities & Equity | USD |
|---|---|---|---|
| Cash | 1,500,000 | Long-term note payable | 3,000,000 |
| Property and equipment | 3,000,000 | Capital stock | 1,500,000 |
| **Total** | **4,500,000** | **Total** | **4,500,000** |

During 20X1 Southmark generates net income of USD1,180,000 and pays USD350,000 in dividends (declared 1 December). Inventory is carried at historical cost, FIFO.

**Southmark Income Statement and Statement of Retained Earnings, 20X1 (USD)**

| | USD |
|---|---|
| Sales | 12,000,000 |
| Cost of goods sold | (9,000,000) |
| Selling expenses | (750,000) |
| Depreciation expense | (300,000) |
| Interest expense | (270,000) |
| Income tax | (500,000) |
| **Net income** | **1,180,000** |
| Less: Dividends (declared 1 Dec) | (350,000) |
| **Retained earnings, 31 Dec 20X1** | **830,000** |

**Southmark Balance Sheet, 31 December 20X1 (USD)**

| Assets | USD | Liabilities & Equity | USD |
|---|---|---|---|
| Cash | 980,000 | Accounts payable | 450,000 |
| Accounts receivable | 900,000 | *(Total current liabilities)* | *450,000* |
| Inventory | 1,200,000 | Long-term notes payable | 3,000,000 |
| *(Total current assets)* | *3,080,000* | **Total liabilities** | **3,450,000** |
| Property and equipment | 3,000,000 | Capital stock | 1,500,000 |
| Less: accumulated depreciation | (300,000) | Retained earnings | 830,000 |
| **Total assets** | **5,780,000** | **Total liabilities + equity** | **5,780,000** |

**Relevant EUR/USD exchange rates (EUR per USD1) — the US dollar strengthens steadily all year:**

| Date | Rate |
|---|---|
| 1 January 20X1 | 0.70 |
| Weighted-average rate when inventory acquired | 0.74 |
| Average, 20X1 | 0.75 |
| 1 December 20X1 (dividends declared) | 0.78 |
| 31 December 20X1 | 0.80 |

---

#### Case A — Southmark's Functional Currency Is the US Dollar (Current Rate Method)

Income statement translated first, at the average rate (dividends at the declaration-date rate):

| | USD | Rate | EUR |
|---|---|---|---|
| Sales | 12,000,000 | 0.75 A | 9,000,000 |
| Cost of goods sold | (9,000,000) | 0.75 A | (6,750,000) |
| Selling expenses | (750,000) | 0.75 A | (562,500) |
| Depreciation expense | (300,000) | 0.75 A | (225,000) |
| Interest expense | (270,000) | 0.75 A | (202,500) |
| Income tax | (500,000) | 0.75 A | (375,000) |
| **Net income** | **1,180,000** | | **885,000** |
| Less: Dividends | (350,000) | 0.78 H | (273,000) |
| **Retained earnings, 31 Dec** | **830,000** | | **612,000** |

Balance sheet translated at the current (period-end) rate, with capital stock at the historical rate and the translation adjustment as the balancing plug:

| | USD | Rate | EUR |
|---|---|---|---|
| Cash | 980,000 | 0.80 C | 784,000 |
| Accounts receivable | 900,000 | 0.80 C | 720,000 |
| Inventory | 1,200,000 | 0.80 C | 960,000 |
| Property and equipment, net | 2,700,000 | 0.80 C | 2,160,000 |
| **Total assets** | **5,780,000** | | **4,624,000** |
| Accounts payable | 450,000 | 0.80 C | 360,000 |
| Long-term notes payable | 3,000,000 | 0.80 C | 2,400,000 |
| **Total liabilities** | **3,450,000** | | **2,760,000** |
| Capital stock | 1,500,000 | 0.70 H | 1,050,000 |
| Retained earnings (from I/S) | 830,000 | | 612,000 |
| Cumulative translation adjustment (plug) | N/A | | **202,000** |
| **Total liabilities + equity** | **5,780,000** | | **4,624,000** |

Southmark has a **net asset exposure** (total assets exceed total liabilities), and the dollar **strengthened** → **positive CTA of EUR202,000** in equity, per the exposure/direction table from the prior file.

---

#### Case B — Southmark's Functional Currency Is the Euro (Temporal Method / Remeasurement)

Balance sheet translated first: monetary items at the current rate; inventory and PP&E (and accumulated depreciation) at the historical rates in effect when acquired (0.74 and 0.70, respectively); retained earnings is the plug.

| | USD | Rate | EUR |
|---|---|---|---|
| Cash | 980,000 | 0.80 C | 784,000 |
| Accounts receivable | 900,000 | 0.80 C | 720,000 |
| Inventory | 1,200,000 | 0.74 H | 888,000 |
| Property and equipment, net | 2,700,000 | 0.70 H | 1,890,000 |
| **Total assets** | **5,780,000** | | **4,282,000** |
| Accounts payable | 450,000 | 0.80 C | 360,000 |
| Long-term notes payable | 3,000,000 | 0.80 C | 2,400,000 |
| **Total liabilities** | **3,450,000** | | **2,760,000** |
| Capital stock | 1,500,000 | 0.70 H | 1,050,000 |
| Retained earnings (plug) | 830,000 | | **472,000** |
| **Total liabilities + equity** | **5,780,000** | | **4,282,000** |

That RE figure of EUR472,000 now carries back to the income statement. COGS and depreciation are translated at the *same* historical rates as the related assets (0.74 and 0.70); the translation gain/loss is whatever plug reconciles "income before translation gain/loss" to the required net income:

| | USD | Rate | EUR |
|---|---|---|---|
| Sales | 12,000,000 | 0.75 A | 9,000,000 |
| Cost of goods sold | (9,000,000) | 0.74 H | (6,660,000) |
| Selling expenses | (750,000) | 0.75 A | (562,500) |
| Depreciation expense | (300,000) | 0.70 H | (210,000) |
| Interest expense | (270,000) | 0.75 A | (202,500) |
| Income tax | (500,000) | 0.75 A | (375,000) |
| Income before translation gain (loss) | 1,430,000 | | 990,000 |
| Translation loss (plug) | N/A | | **(245,000)** |
| **Net income** | **1,180,000** | | **745,000** |
| Less: Dividends | (350,000) | 0.78 H | (273,000) |
| **Retained earnings, 31 Dec** | **830,000** | | **472,000** |

Southmark has a **net monetary liability exposure** under the temporal method (monetary liabilities of USD3,450,000 exceed monetary assets of USD1,880,000 cash + receivables), and the dollar **strengthened** → a **translation loss of EUR245,000** hits net income directly.

---

### Comparing the Two Sets of Results

| Item | USD (local) | EUR — Current Rate | EUR — Temporal |
|---|---|---|---|
| Sales | 12,000,000 | 9,000,000 | 9,000,000 |
| Net income | 1,180,000 | 885,000 | 745,000 |
| Total assets | 5,780,000 | 4,624,000 | 4,282,000 |
| Total equity | 2,330,000 | 1,864,000 | 1,522,000 |

> **Key insight**: The current rate method shows **higher** net income, total assets, and total equity than the temporal method here, purely because (1) the temporal method's translation loss reduces net income directly, and (2) all assets — including historical-cost inventory and PP&E — are marked up to the higher current rate under the current rate method.

**Selected ratios — local currency vs. each translated version:**

| Ratio | USD (local) | EUR — Current Rate | EUR — Temporal |
|---|---|---|---|
| Current ratio | 6.84 | **6.84** (preserved) | 6.64 (distorted) |
| Debt-to-equity | 1.48 | **1.48** (preserved) | 1.81 (distorted) |
| Net profit margin | 9.83% | **9.83%** (preserved) | 8.28% (distorted) |
| Return on equity | 50.6% | 47.5% (distorted) | 48.9% (distorted) |
| Receivables turnover | 13.33 | 12.50 (distorted, but **identical to temporal**) | 12.50 (distorted, but **identical to current rate**) |
| Inventory turnover | 7.50 | 7.03 (distorted) | **7.50** (preserved) |

> **Key insight — why some ratios survive translation and others don't**:
> - **Current rate method** preserves any ratio built entirely from **balance sheet** items or entirely from **income statement** items, because a single uniform rate (current, or average) cancels out of the ratio. It **distorts** ratios that mix a balance-sheet item with an income-statement item (turnover and return ratios), because the balance sheet uses the current rate while the income statement uses the average rate.
> - **Temporal method** distorts almost everything relative to the local-currency ratios — **except** ratios where numerator and denominator are translated at the *same* historical rate (e.g., inventory turnover: COGS and inventory both use the 0.74 rate that matches when the inventory was acquired).
> - **Receivables turnover** is the one ratio unaffected by *which* method is chosen (though still different from the local-currency ratio), because both methods translate receivables at the current rate and sales at the average rate identically.

---

### Question Set Answers

**Q1.** Using the current rate method illustration above, if the dollar had instead *weakened* over 20X1 (all else equal), what sign would the cumulative translation adjustment take, and why?
**A. Negative.** Southmark has a net asset exposure; per the exposure/direction relationship, a net asset exposure combined with a weakening foreign currency produces a **negative** CTA in equity.

**Q2.** Under the temporal method illustration, if Southmark had financed its property and equipment with additional capital stock instead of the long-term note payable (eliminating monetary liabilities), what would happen to the translation loss?
**A.** Removing the monetary liability shrinks (or reverses) the net monetary liability exposure. With little or no net monetary liability exposure, the translation loss from the dollar's strengthening would shrink toward zero — demonstrating that **balance sheet exposure under the temporal method is a financing choice management can actively manage** (unlike under the current rate method, where eliminating exposure would require zero equity).

**Q3.** Why is retained earnings translated as a plug rather than at a single exchange rate under either method?
**A.** Retained earnings is not a single historical transaction — it accumulates multiple years of net income (itself built from many transactions at different rates) less dividends (at their own declaration-date rates). There is no single "historical rate" that applies to the balance as a whole, so it must be derived indirectly: as the roll-forward of beginning RE plus translated net income less translated dividends (current rate method), or as the balancing plug needed to keep the translated balance sheet in balance (temporal method).
