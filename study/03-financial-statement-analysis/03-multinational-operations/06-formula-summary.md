---
layout: page
title: "Formula Summary: Multinational Operations"
permalink: /study/03-financial-statement-analysis/03-multinational-operations/06-formula-summary/
prev: /cfa/study/03-financial-statement-analysis/03-multinational-operations/05-tax-rate-and-additional-disclosures/
---
## Formula Summary: Multinational Operations (CFA Level II — Financial Statement Analysis)

---

### 1. Foreign Currency Transactions

$$\boxed{\text{FX transaction gain (loss)} = \text{FC monetary amount} \times (\text{Rate}_{\text{new}} - \text{Rate}_{\text{old}})}$$

Rate stated as functional currency per unit of foreign currency.

| Exposure | FC Strengthens | FC Weakens |
|---|---|---|
| Asset (receivable) | Gain | Loss |
| Liability (payable) | Loss | Gain |

> Total realized gain/loss over the life of a transaction = sum of all interim (unrealized) period gains/losses recognized at each intervening balance sheet date.

---

### 2. Balance Sheet Translation Exposure

| Exposure | FC Strengthens | FC Weakens |
|---|---|---|
| Net asset (exposed assets > exposed liabilities) | Positive translation adjustment | Negative translation adjustment |
| Net liability (exposed liabilities > exposed assets) | Negative translation adjustment | Positive translation adjustment |

---

### 3. Current Rate Method vs. Temporal Method

| Item | Current Rate Method | Temporal Method |
|---|---|---|
| Monetary assets/liabilities | Current rate | Current rate |
| Non-monetary items at current value | Current rate | Current rate |
| Non-monetary items at historical cost (inventory, PP&E, intangibles) | Current rate | Historical rate |
| Equity (excl. retained earnings) | Historical rate | Historical rate |
| Retained earnings | Plug (roll-forward) | Plug (roll-forward) |
| Revenues, most expenses | Average rate | Average rate |
| COGS, depreciation, amortization | Average rate | Historical rate (matching related asset) |
| Translation adjustment location | Equity (CTA, OCI) | Net income |
| Typical exposure | Net asset | Net liability |
| Used when functional currency is... | The local/foreign currency | The parent's presentation currency (= "remeasurement" under US GAAP) |

$$\boxed{\text{Adjusted net income} = \text{Reported net income} + \Delta\text{Cumulative translation adjustment}}$$

Used to approximate a clean-surplus comparison between companies using different predominant methods.

---

### 4. Functional Currency Determination — Three-Step Process

1. Identify the functional currency (apply IFRS indicators; priority to sales-price and competitive/regulatory indicators when mixed).
2. Translate the entity's own foreign-currency balances into its functional currency (transaction accounting rules).
3. If functional currency ≠ parent's presentation currency, translate into the presentation currency using the **current rate method**.

| Indicator category | Points to local currency as functional when... |
|---|---|
| Sales price / competitive & regulatory | Local currency/market drives selling prices |
| Cost | Local currency drives costs |
| Financing | Funds raised locally |
| Cash retention | Operating receipts retained locally |
| Autonomy | Entity operates independently of parent |
| Intercompany transactions | Small proportion of activity |
| Cash flow to parent | Not directly/readily remitted |
| Debt service | Serviced from local operating cash flow |

---

### 5. Translation of Retained Earnings

**First year:**
$$\boxed{\text{RE}_{PC} = \text{Net income}_{PC} - \text{Dividends}_{FC} \times \text{Rate at declaration}}$$

**Subsequent years:**
$$\boxed{\text{Ending RE}_{PC} = \text{Beginning RE}_{PC} + \text{Net income}_{PC} - \text{Dividends}_{PC}}$$

> Current rate method: income statement translated first (RE flows to balance sheet; CTA is the plug). Temporal method: balance sheet translated first (RE is the plug there; translation gain/loss flows back to the income statement as the plug that reconciles income before translation to net income).

---

### 6. Effect of Currency Movement — Summary Matrix

| | Current Rate Method | Temporal Method, Net Monetary Liability Exposure | Temporal Method, Net Monetary Asset Exposure |
|---|---|---|---|
| **FC strengthens** | Revenues ↑, assets ↑, liabilities ↑, net income ↑ (translation unaffected), equity ↑ (positive CTA) | Revenues ↑, assets ↑, liabilities ↑, **net income ↓** (translation loss), **equity ↓** | Revenues ↑, assets ↑, liabilities ↑, **net income ↑** (translation gain), **equity ↑** |
| **FC weakens** | Revenues ↓, assets ↓, liabilities ↓, net income ↓ (translation unaffected), equity ↓ (negative CTA) | Revenues ↓, assets ↓, liabilities ↓, **net income ↑** (translation gain), **equity ↑** | Revenues ↓, assets ↓, liabilities ↓, **net income ↓** (translation loss), **equity ↓** |

---

### 7. Which Ratios Survive Translation

| | Current Rate Method | Temporal Method |
|---|---|---|
| Ratios using only balance sheet items, or only income statement items | **Preserved** (uniform rate cancels) | Generally distorted |
| Ratios mixing balance sheet + income statement items (turnover, return ratios) | Distorted (current vs. average rate mismatch) | Generally distorted |
| Exception | — | Preserved when numerator and denominator share the *same historical rate* (e.g., inventory turnover: COGS and inventory both at the rate matching acquisition) |
| Receivables turnover | Identical under both methods (but ≠ local-currency ratio) — both translate receivables at current rate, sales at average rate | Same as current rate method |

---

### 8. Hyperinflationary Economies

| | US GAAP | IFRS (IAS 29) |
|---|---|---|
| Threshold | Cumulative 3-yr inflation > 100% (judgment-based) | Cumulative 3-yr inflation approaching/exceeding 100% |
| Method | Temporal method (parent currency treated as functional) | Restate for local inflation, then translate at current rate |
| Functional currency relevant? | No — override applies | No — override applies |

$$\boxed{\text{Purchasing power gain (loss)} = \text{Net monetary liability (asset) position} \times \frac{\Delta \text{GPI}}{\text{GPI}_{\text{beginning}}}}$$

> Net monetary **liability** position → purchasing power **gain** during inflation (analogous to a temporal-method translation gain from a net monetary liability exposure when the FC weakens). Net monetary **asset** position → purchasing power **loss**.
> US GAAP (temporal) and IFRS (restate-and-translate) produce **identical** results only when the change in the exchange rate exactly inversely mirrors the change in the general price index (purchasing power parity holding exactly) — rare in practice.

---

### 9. Effective Tax Rate and Sales Growth

$$\boxed{\text{Effective tax rate} = \frac{\text{Income tax expense}}{\text{Pretax accounting profit}}}$$

$$\boxed{\text{Reported net sales growth} = \text{Volume} + \text{Price/mix} + \text{FX effect} + \text{Acquisition/divestiture effect}}$$

$$\boxed{\text{Organic sales growth} = \text{Reported net sales growth} - \text{FX effect} - \text{Acquisition/divestiture effect}}$$

---

### Quick Reference — All Formulas

| Measure | Formula |
|---|---|
| FX transaction gain/loss | FC amount × (New rate − Old rate) |
| Adjusted net income | Reported NI + Δ Cumulative translation adjustment |
| RE, first year | Net income (PC) − Dividends × rate at declaration |
| RE, subsequent years | Beginning RE + Net income − Dividends (all in PC) |
| Purchasing power gain/loss | Net monetary liability (asset) position × ΔGPI / Beginning GPI |
| Effective tax rate | Income tax expense / Pretax accounting profit |
| Reported net sales growth | Volume + Price/mix + FX effect + Acquisition/divestiture effect |
| Organic sales growth | Reported net sales growth − FX effect − Acquisition/divestiture effect |

---

### Exam Tips

- **Functional currency drives everything**: local/foreign currency functional → current rate method → CTA in equity, net asset exposure. Parent's currency functional → temporal method (remeasurement) → gain/loss in net income, typically net liability exposure. Get this classification right first; the rest follows mechanically.
- **Read for autonomy language** in vignettes: independent operations, local pricing, local financing → current rate method. Extension-of-parent language, parent-currency pricing, intercompany financing → temporal method.
- **Current rate method**: ALL assets/liabilities at current rate, equity at historical, income statement at average (dividends at declaration-date rate). Translation adjustment is a **balance sheet plug in equity**, never touches net income until the subsidiary is sold/disposed of.
- **Temporal method**: only monetary items (+ non-monetary items at current value) at current rate; historical-cost non-monetary items and equity at historical rates; COGS/depreciation/amortization at the *same* historical rate as the related asset. Translation gain/loss is an **income statement plug**.
- **Direction of currency movement matters as much as the method**: strengthening FC always raises translated revenues, assets, and liabilities under both methods — the divergence is in net income and equity, which depend on balance sheet exposure type.
- **Ratio distortion**: current rate method preserves single-statement ratios but distorts turnover/return ratios (rate mismatch between balance sheet and income statement); temporal method distorts almost everything except where numerator/denominator share a historical rate (e.g., inventory turnover).
- **Hyperinflation overrides functional currency** entirely: US GAAP → temporal method, no inflation restatement; IFRS → restate for local inflation then translate at the current rate. Current rate method alone (no inflation adjustment) is never acceptable — it causes the "disappearing plant problem."
- **US GAAP vs. IFRS in hyperinflation converge only under exact purchasing power parity** (FX rate change exactly inverse to GPI change) — don't assume they always match.
- **A company can use both translation methods simultaneously** across different subsidiaries — always check which functional currency applies to which entity before assuming a single method for the whole group.
- **Effective tax rate reconciliation**: the "foreign jurisdiction" line tells you directly whether multinational operations raised or lowered ETR versus the home statutory rate; a change in that line year-over-year usually reflects a shift in profit mix across jurisdictions (or a foreign statutory rate change).
- **Organic sales growth strips out FX and M&A/divestiture effects** — treat it as the more sustainable, comparable growth measure; reported (GAAP) growth can look strong or weak purely due to currency translation with no change in the underlying business.
- **FX risk sensitivity disclosures** (cash-flow-at-risk, scenario analysis) quantify potential earnings impact from exposure net of hedges — use them alongside your own rate forecasts to calibrate downside scenarios, especially where detailed disclosure is unavailable.
