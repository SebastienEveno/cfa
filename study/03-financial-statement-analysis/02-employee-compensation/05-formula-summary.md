---
layout: page
title: "Formula Summary: Employee Compensation"
permalink: /study/03-financial-statement-analysis/02-employee-compensation/05-formula-summary/
prev: /cfa/study/03-financial-statement-analysis/02-employee-compensation/04-post-employment-benefits-db-dc-plans/
---
## Formula Summary: Employee Compensation (CFA Level II — Financial Statement Analysis)

---

### 1. Financial Modeling and Valuation Considerations for Post-Employment Benefits

Financial modeling of **DC plan** expense is straightforward: it is forecast implicitly with other operating expenses (typically as a percentage of salaries, in cash), sharing the same drivers as short-term benefits. **DB plan** (including OPEB) modeling requires forecasting service cost, net interest expense/income, remeasurements, and employer contributions to build out the income statement effect, the balance sheet's net pension asset/liability, and the plan-contribution cash outflow. For companies with a small, well-funded, closed/frozen DB plan (net pension liability not exceeding roughly 5% of equity market capitalization), analysts may reasonably skip detailed modeling as immaterial to the investment case.

**Valuation must account for two distinct effects of a DB plan:**

1. **Funded status** — treated **asymmetrically**:
   $$\boxed{\text{Underfunded DB plan (net pension liability)} \Rightarrow \text{treat as debt: deduct from enterprise value in the bridge to equity value}}$$
   $$\boxed{\text{Overfunded DB plan (net pension asset)} \Rightarrow \text{ignore in valuation}}$$
   This asymmetry is not mere conservatism: an underfunded plan is a real obligation regardless of the sponsor's other circumstances, while an overfunded plan's surplus **cannot** be withdrawn and distributed to shareholders or other capital providers — plan assets exist solely to pay benefits. Some data providers reflect this directly, including net pension liabilities within debt and enterprise value quotations.

2. **Future service costs** — future increases in the pension obligation from ongoing employee service (not applicable to frozen plans, where no further benefits accrue):
   $$\boxed{\text{Deduct service cost from free cash flow in a DCF model (do not add it back to EBIT)}}$$
   $$\boxed{\text{Exclude net interest expense/income from free cash flow}}$$
   Net interest expense/income represents only the **unwinding of the discount** on an already-recognized, present-valued obligation — including it in FCF would double-count the time-value effect that is already captured by deducting the (present-valued) net pension liability from enterprise value.

> **Key insight — the parallel to share-based compensation**: exactly as with SBC, the correct treatment of a non-cash pension cost component in a DCF model depends on *what it represents economically*, not on whether cash actually changed hands. Service cost is a real, ongoing compensation cost → deduct from FCF. Net interest is a financing/time-value artifact already captured elsewhere in the valuation bridge → exclude from FCF.

---

### Worked Example — Meridian Robotics: DB Plan in a DCF Valuation

Using the Meridian Robotics DB plan reconciliation from the prior lesson (ending funded status = net pension liability of **USD 57 million**; current + past service cost of **USD 35 million** in the most recent year; net interest expense of **USD 2 million**):

| Step | Treatment |
|------|-----------|
| Enterprise value → equity value bridge | Deduct the **USD 57 million** net pension liability, exactly as with interest-bearing debt |
| Free cash flow forecast | **Deduct** projected future service cost each year (a real compensation cost) |
| Free cash flow forecast | **Exclude** net interest expense/income (already reflected in the present-valued deduction above) |
| Overfunded scenario check | If Meridian's plan were instead overfunded (net pension **asset**), the surplus would be **ignored**, not added to equity value |

---

### 2. Types of Compensation and the Compensation Timeline

$$\boxed{\text{Grant} \rightarrow \text{Vesting} \rightarrow \text{Settlement}}$$

**Underlying principle**: recognize compensation cost at fair value in the period the employee provides service (typically the vesting period); offsetting entry is a **liability** for cash-settled compensation or **equity** for share-settled compensation.

---

### 3. Share-Based Compensation — Grant, Expense, and Fair Value

**Restricted stock / RSUs:**
$$\boxed{\text{Grant-date fair value} = \text{Market price of the underlying share (adjusted downward for non-participating expected dividends)}}$$

**Stock options:**
$$\boxed{\text{Grant-date fair value estimated via an option-pricing model (e.g., Black–Scholes)}}$$

Higher volatility, longer expected life, and a higher risk-free rate each **increase** estimated option fair value; a higher dividend yield **decreases** it.

**Straight-line expense recognition (either instrument):**
$$\boxed{\text{Annual SBC expense} = \frac{\text{Awards granted} \times \text{Grant-date fair value per award}}{\text{Vesting period (years)}}}$$

> Fair value is fixed at the grant date and is **never remeasured** for subsequent share price changes.

**At option exercise:**
$$\boxed{\text{Cash inflow (financing activities)} = \text{Strike price} \times \text{Options exercised}}$$

---

### 4. Tax Effects of Share-Based Compensation

$$\boxed{\text{Windfall/(Shortfall)} = \text{Statutory tax rate} \times (\text{Tax deduction} - \text{Cumulative SBC expense})}$$

| | IFRS | US GAAP |
|---|------|---------|
| Windfall (settlement price > grant price) | Gain directly to **equity** | **Reduces** income tax expense |
| Shortfall (settlement price < grant price) | Loss directly to **equity** | **Increases** income tax expense |

---

### 5. Diluted Shares Outstanding — Treasury Stock Method

$$\boxed{\text{Diluted shares} = \text{Basic shares} + \text{Shares from conversion/exercise} - \frac{\text{Assumed proceeds}}{\text{Average share price for the period}}}$$

$$\boxed{\text{Assumed proceeds} = \text{Cash proceeds from exercise} + \text{Average unrecognized SBC expense}}$$

$$\text{Average unrecognized SBC expense} = \frac{\text{Beginning unrecognized expense} + \text{Ending unrecognized expense}}{2}$$

| Award type | Dilutive when... |
|------------|----------------------|
| Options | In-the-money (average price > strike) |
| Options | Anti-dilutive if out-of-the-money or at-the-money |
| RSUs | Usually dilutive; anti-dilutive if average price falls materially below the grant-date price |
| Any award | Anti-dilutive by definition if the company reports a **net loss** for the period |

---

### 6. Financial Statement Modeling — Shares Outstanding

$$\boxed{\text{Basic shares, end of period} = \text{Basic shares, beginning} + \text{Vested/exercised awards} + \text{Other issuances} - \text{Repurchases}}$$

---

### 7. Post-Employment Benefits — Funded Status and Pension Cost

$$\boxed{\text{Funded status} = \text{Fair value of plan assets} - \text{Pension (DB) obligation}}$$

**IFRS — three components (P&L unless noted):**
$$\boxed{\text{Periodic pension cost (P\&L)} = \text{Service cost (current + past)} + \text{Net interest expense/income}}$$
$$\boxed{\text{Net interest expense/income} = \text{Discount rate} \times \text{Net pension liability (or asset), beginning of period}}$$
$$\text{Remeasurements (OCI only)} = \text{Actuarial gains/losses} + (\text{Actual return} - \text{Discount rate} \times \text{Beginning plan assets})$$

**US GAAP — five components:**
$$\text{P\&L} = \text{Current service cost} + \text{Interest cost (gross)} - \text{Expected return on plan assets} + \text{Amortization of past service cost} + \text{Amortization of net gains/losses (excess over 10\% corridor)}$$

---

### Quick Reference — All Formulas

| Measure | Formula |
|---------|---------|
| Annual SBC expense (straight-line) | (Awards granted × grant-date FV per award) / Vesting period |
| Tax windfall/(shortfall) | Statutory tax rate × (Tax deduction − Cumulative SBC expense) |
| Diluted shares | Basic shares + Shares from exercise − (Assumed proceeds / Average share price) |
| Assumed proceeds | Cash proceeds from exercise + Average unrecognized SBC expense |
| Basic shares, end of period | Beginning + Vested/exercised + Other issuances − Repurchases |
| Funded status | Fair value of plan assets − Pension obligation |
| Net interest expense/income (IFRS) | Discount rate × Beginning net pension liability/(asset) |
| IFRS periodic pension cost (P&L) | Service cost (current + past) + Net interest expense/income |
| US GAAP periodic pension cost (P&L) | Current service cost + Interest cost − Expected return on plan assets + Amortization of past service cost + Amortization of excess gains/losses |
| DCF treatment — DB plan | Deduct net pension liability from EV; deduct service cost from FCF; exclude net interest from FCF |

---

### Question Set Answers

**Q1** (Kensington plc, IFRS DB plan; discount rate 5.48%; obligation at year-end GBP 28,879m; plan assets GBP 24,105m): What does the GBP 28,879 million figure represent, and what should an analyst deduct from enterprise value to reach equity value?
*Answer*: GBP 28,879 million is the **gross** DB obligation (present value of future benefits), before netting plan assets — not the funded status. For a DCF valuation, the analyst should deduct the **net pension liability** (funded status), i.e., obligation minus plan assets, **not** the gross obligation alone (which would ignore that plan assets exist solely to pay those benefits) and not the *beginning*-of-year balance.

**Q2** (XYZ SA, IFRS; current service cost 200, past service cost 120, employer contribution 1,000): What operating expense does XYZ recognize on its income statement related to the DB plan?
*Answer*: **320** — service cost (current 200 + past 120), recognized as an operating expense under IFRS. The GBP/local-currency 1,000 employer contribution has no income statement effect; it is a cash outflow in operating activities and reduces the DB obligation's net funded status via plan assets.

**Q3** (Same facts, but under US GAAP, with beginning obligation 42,000 at 7% discount rate and beginning plan assets 39,000 at 8% expected return, ignoring past-service and gain/loss amortization): What is the total P&L pension cost?
*Answer*: Current service cost (200) + interest cost (7% × 42,000 = 2,940) − expected return on assets (8% × 39,000 = 3,120) = **20**. Note this is far lower than the IFRS figure (320) because IFRS immediately expenses past service cost (120) in P&L, while US GAAP defers it to OCI — the same distinction illustrated in the Meridian Robotics example in the prior lesson.

**Q4.** An analyst's DCF model expenses both service cost and net interest expense in free cash flow, and separately deducts the company's net pension liability from enterprise value to reach equity value. What correction should be made?
*Answer*: **Remove net interest expense from free cash flow.** Since the (present-valued) net pension liability is already being deducted from enterprise value, including net interest expense in FCF as well double-counts the unwinding of that same discount. Service cost is correctly retained in FCF, as it represents a real, ongoing compensation cost unrelated to the time value of money.

**Q5.** A colleague's balance sheet model is out of balance (assets exceed liabilities plus equity) by exactly the amount of forecast share-based compensation expense, even though SBC was correctly added back on the cash flow statement. What was most likely omitted?
*Answer*: The offsetting **credit to equity** (the share-based compensation reserve). Recognizing the expense (which reduces retained earnings) without the offsetting increase to equity leaves the balance sheet imbalanced by that amount.

**Q6.** Management guides to an effective tax rate well below the statutory rate next year, driven by expected tax windfalls from share-based compensation. What is the risk of holding that rate constant across all future years in a DCF model?
*Answer*: It would **overstate free cash flow to the firm** in later years, since windfalls depend on the company's share price continuing to rise relative to grant-date prices each year — an assumption that is unlikely to persist indefinitely and is not a sustainable driver of a lower effective tax rate.

---

### Exam Tips

- **Offsetting entry is the key distinguishing fact**: cash-settled compensation → liability; share-settled compensation → **equity**. This drives every other difference in the accounting.
- **Fair value is fixed at the grant date and never remeasured** — subsequent share price moves affect only *future* grants, never the expense already recognized on a past grant.
- RSU fair value = market price (possibly dividend-adjusted); **option fair value requires a pricing model** — know the direction of each Black-Scholes-style input (higher volatility/life/risk-free rate → higher option value; higher dividend yield → lower option value). Volatility and dividend assumptions are **irrelevant** to RSU valuation — a classic exam trap.
- **Diluted shares via the treasury stock method**: memorize $\text{Diluted shares} = \text{Basic} + \text{Awards} - \text{Assumed proceeds}/\text{Average price}$, and that assumed proceeds = cash exercise proceeds (zero for RSUs) **plus** average unrecognized SBC expense. A rising average share price *increases* dilution from a given award; a falling price can flip RSUs (and out-of-the-money options) to **anti-dilutive**.
- **Net loss ⇒ diluted shares = basic shares**, always — regardless of how many awards are outstanding. Always add back anti-dilutive securities from the notes when valuing unprofitable or recently-declined-sharply issuers.
- **Tax windfalls/shortfalls**: IFRS → equity (no P&L effect, stable effective tax rate); US GAAP → income tax expense (P&L effect, volatile effective tax rate). Never assume a US GAAP reporter's SBC-driven effective tax rate will persist.
- **SBC in DCF valuation**: deduct SBC expense from free cash flow (the pragmatic standard approach) *and/or* use diluted (or gross potentially-dilutive) shares outstanding — do not ignore SBC just because it is non-cash, and never compare Price/FCF or FCF-margin multiples across companies with materially different SBC intensity without adjustment.
- **Funded status = Plan assets − DB obligation.** Underfunded (net liability) is debt-like: deduct from EV. Overfunded (net asset) is **ignored** in valuation — the surplus cannot be distributed to shareholders.
- **IFRS pension P&L = Service cost + Net interest expense/income (net).** Remeasurements (actuarial gains/losses + asset-return variance) go to **OCI only**, never P&L, under IFRS.
- **US GAAP pension P&L uses gross interest cost minus a separately-assumed expected return on assets** (not automatically equal to the discount rate), plus amortization (not immediate P&L recognition) of past service cost and, typically, of net gains/losses beyond the 10% corridor. This is why US GAAP and IFRS P&L pension expense can diverge materially even from identical underlying facts — especially in the presence of a plan amendment (past service cost).
- **In a DCF, deduct future service cost from FCF but exclude net interest expense/income** — the latter is already captured by deducting the present-valued net pension liability from enterprise value; including both double-counts the time-value effect.
- Analysts should scrutinize DB assumption trends (discount rate, salary growth, mortality, expected return on assets under US GAAP) for aggressive, earnings-flattering choices, and use the required sensitivity disclosures to gauge asset-liability duration matching.
