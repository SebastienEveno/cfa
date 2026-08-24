---
layout: page
title: "Restricted Stock and Stock Options"
permalink: /study/03-financial-statement-analysis/02-employee-compensation/02-restricted-stock-and-stock-options/
next: /cfa/study/03-financial-statement-analysis/02-employee-compensation/03-share-based-comp-effects-and-modeling/
prev: /cfa/study/03-financial-statement-analysis/02-employee-compensation/01-types-of-compensation-and-share-based-basics/
---
## Summary: Restricted Stock and Stock Options (CFA Level II — Financial Statement Analysis)

---

### Restricted Stock and RSUs

**Restricted stock** consists of common shares granted to employees subject to sale and other restrictions until vesting; it generally carries voting rights and dividend participation but is not tradeable. **Restricted stock units (RSUs)** represent only the *right* to receive shares upon settlement — they carry **no voting rights and no dividend participation**, and are also non-tradeable. RSUs are the more common instrument in practice.

$$\boxed{\text{Grant-date fair value of restricted stock/RSU} = \text{Market price of the underlying share}}$$

For RSUs that do not participate in dividends, the grant-date share price is typically adjusted **downward** for dividends expected over the vesting period (since the RSU holder forgoes them).

**Settlement of RSUs is automatic upon vesting** — no employee decision is required. The only accounting entry needed is a transfer within equity, from the share-based compensation reserve to common stock/paid-in capital; there is no cash flow impact.

---

### Worked Example — Meridian Robotics: RSU Grant

On 1 January Year 1, Meridian Robotics grants **500,000 RSUs** to R&D employees. The award cliff-vests after **three years**, contingent on continued service (forfeitures accounted for as they occur). The share price on the grant date is **USD 40.00**.

$$\text{Aggregate grant-date fair value} = 500{,}000 \times \$40.00 = \$20{,}000{,}000$$

$$\boxed{\text{Annual SBC expense (straight-line)} = \frac{\text{Aggregate grant-date fair value}}{\text{Vesting period (years)}}}$$

$$\text{Annual expense} = \frac{\$20{,}000{,}000}{3} = \$6{,}666{,}667 \text{ per year, Years 1–3}$$

| Year | Income Statement | Balance Sheet | Statement of Cash Flows |
|------|-------------------|-----------------|----------------------------|
| 1 | R&D expense +6,666,667 | SBC reserve (equity) +6,666,667 | No impact* |
| 2 | R&D expense +6,666,667 | SBC reserve (equity) +6,666,667 | No impact* |
| 3 | R&D expense +6,666,667 | Transfer $20,000,000 from SBC reserve to common stock/paid-in capital | No impact* |

*If the indirect method is used, the expense is added back when reconciling net income to cash flow from operations.

> **Key insight**: If the share price rose 25% at each subsequent anniversary (unrelated to the original grant), **none** of the above expense schedule would change — the fair value was fixed at the 1 January Year 1 grant date. Only *future* grants would reflect the higher price.

---

### Stock Options

Employee stock options are **non-tradeable call options** on the employer's own stock, typically issued **at-the-money** (strike price = grant-date share price). If the share price exceeds the strike price after vesting (and before expiration), the employee can exercise and capture the spread.

Unlike restricted stock/RSUs, an option's grant-date fair value must be **estimated** using a valuation model (Black–Scholes or a binomial model) because an at-the-money option's intrinsic value is zero but its time value can be significant. Neither IFRS nor US GAAP mandates a specific model, but the model must (1) be consistent with fair value measurement principles, (2) be grounded in established financial economic theory, and (3) reflect the award's substantive characteristics.

**Effect of key inputs on estimated option fair value:**

| Input | Effect on Fair Value if Input Increases |
|-------|-------------------------------------------|
| Volatility (most subjective input) | Increases |
| Expected life/term | Increases |
| Risk-free rate | Increases |
| Dividend yield | **Decreases** |

Companies typically derive the volatility assumption from **implied volatility** on exchange-traded options or **historical share price volatility**.

**Settlement differs fundamentally from RSUs**: options only settle if and when the employee chooses to **exercise** them. At exercise, the company records a **cash inflow in financing activities** equal to the strike price × the number of options exercised, and transfers the related SBC reserve amount to paid-in capital.

---

### Worked Example — Meridian Robotics: Stock Option Grant

On 1 January Year 1, Meridian Robotics grants **1,000,000 stock options** to executives, vesting after **three years** (cliff, service condition). The options are at-the-money: strike price = grant-date share price = USD 40.00. The Black-Scholes-estimated fair value per option is **USD 12.50**.

$$\text{Aggregate grant-date fair value} = 1{,}000{,}000 \times \$12.50 = \$12{,}500{,}000$$

$$\text{Annual SBC expense} = \frac{\$12{,}500{,}000}{3} = \$4{,}166{,}667 \text{ per year, Years 1–3}$$

| Year | Income Statement | Balance Sheet | Statement of Cash Flows |
|------|--------------------|------------------|----------------------------|
| 1–3 (each year) | G&A expense +4,166,667 | SBC reserve (equity) +4,166,667 | No impact* |

*Added back to net income under the indirect method.

**Year 4** — the share price remains below USD 40.00 (options are out-of-the-money): **no financial statement impact**; grantees will not exercise.

**Year 5** — the share price rises to USD 58.00 and **400,000 options** are exercised (40% of the grant):

- Cash inflow (financing activities) $= 400{,}000 \times \$40.00 = \$16{,}000{,}000$ (based on the **strike price**, not the current share price)
- SBC reserve transferred to paid-in capital $= \$12{,}500{,}000 \times \frac{400{,}000}{1{,}000{,}000} = \$5{,}000{,}000$
- Paid-in capital increases by $16{,}000{,}000 + 5{,}000{,}000 = \$21{,}000{,}000$; SBC reserve decreases by $5,000,000

> **Key insight**: The amounts recognized on the financial statements at exercise are based on the **strike price and grant-date fair value only** — the current share price affects *whether* (and how many) options are exercised, but never the accounting entries themselves.

---

### RSUs vs. Stock Options — Side-by-Side Comparison

| Feature | RSUs | Stock Options |
|---------|------|-----------------|
| Grant-date fair value | Market share price (adj. for dividends) | Estimated via option-pricing model |
| Voting/dividend rights before vesting | None | None (not yet shares) |
| Settlement trigger | Automatic upon vesting | Employee's discretion (exercise) |
| Cash flow at settlement | None | Cash inflow (financing) = strike × options exercised |
| Value in a declining market | Retains positive value unless price falls to zero | Can go "underwater" (worthless) if price < strike |
| Employee/shareholder alignment | Symmetric — exposed to both upside and downside | Asymmetric payoff — upside only, can incentivize excess risk-taking |

---

### The Debate Over Accounting for Share-Based Compensation

Before IFRS 2 and US SFAS 123R (2004–2005), companies measured and expensed share-based compensation at **intrinsic value** at the grant date — for at-the-money options, this meant **zero expense**. Arguments made against fair-value expensing included: fair value is imprecise; it is a non-cash, equity-only entry; it "double counts" the EPS effect (lower net income *and* more shares); share issuance is a financing transaction, not normally expensed; and it disproportionately burdens younger/innovative firms.

After fair-value expensing became mandatory, companies increasingly reported **non-GAAP earnings measures** that added back SBC expense. Following SEC scrutiny (2016), several major US tech companies (Apple, Amazon, Alphabet, Microsoft, Meta) stopped excluding SBC from non-GAAP results, citing it as a "real cost" of the business.

**The shift to restricted stock**: partly in response to mandatory fair-value expensing of options (which made both instruments similarly costly to report), companies have shifted toward granting RSUs over options. By 2021, options were used in fewer than 50% of S&P 500 CEO compensation packages. Reasons include: RSUs retain value in a downturn (no "underwater" risk); RSUs better align employee/shareholder interests (symmetric payoff); and RSUs are simpler for employees (no exercise price, easier tax treatment).

> **Key insight**: While SBC is a non-cash expense, it is **not economically meaningless** — it is a real transfer of value to employees that dilutes existing shareholders, whether or not the company would otherwise have paid in cash.

---

### Question Set Answers

**Q1.** Meridian grants 200,000 RSUs on 1 January at a share price of USD 25, vesting over 4 years. What is the annual compensation expense?
*Answer*: Aggregate FV = 200,000 × $25 = $5,000,000; annual expense = $5,000,000 / 4 = **$1,250,000/year**.

**Q2.** If Meridian's share price doubles one year after an option grant, how does this affect the SBC expense already recognized for that grant?
*Answer*: **No effect.** Fair value is fixed at the grant date; subsequent price changes are irrelevant to the accounting for past grants (though they will raise the estimated fair value, and thus expense, of *new* grants made at the higher price).

**Q3.** An analyst observes that Company X's option fair values are unusually low relative to peers with similar share price levels. What assumption differences might explain this (holding the valuation model constant)?
*Answer*: Lower assumed volatility, shorter expected life, a lower risk-free rate, and/or a higher assumed dividend yield would each independently reduce the estimated option fair value.

**Q4.** Why might a company prefer granting RSUs over options today, compared to several decades ago?
*Answer*: Options' fair-value expensing (post-2004/2005) removed the accounting cost advantage they once had; RSUs then became preferable because employees value them more consistently (never "underwater"), they better align risk incentives (symmetric payoff), and they are operationally simpler (no exercise price, easier for employees to understand and to compute personal taxes on).
