---
layout: page
title: "Post-Employment Benefits: DC and DB Plans"
permalink: /study/03-financial-statement-analysis/02-employee-compensation/04-post-employment-benefits-db-dc-plans/
next: /cfa/study/03-financial-statement-analysis/02-employee-compensation/05-formula-summary/
prev: /cfa/study/03-financial-statement-analysis/02-employee-compensation/03-share-based-comp-effects-and-modeling/
---
## Summary: Post-Employment Benefits — DC and DB Plans (CFA Level II — Financial Statement Analysis)

---

### Defined Contribution vs. Defined Benefit Plans

Post-employment benefits are classified as **defined contribution (DC)** or **defined benefit (DB)**. **Other post-employment benefits (OPEB)** — non-monetary benefits like retiree life insurance and medical care — are accounted for using the **DB model**, even though they are frequently unfunded ("pay-as-you-go").

| Feature | DC Plan | DB Plan (incl. OPEB) |
|---------|---------|------------------------|
| **Amount of future benefit** | Not defined — depends on contributions plus investment performance | Defined by a formula (typically years of service × final-year compensation) |
| **Company's obligation** | Limited to the periodic contribution; no further obligation once made | Must estimate and recognize the full future obligation currently |
| **Who bears investment/actuarial risk** | Employee | Company (sponsor) |
| **Pre-funding** | Not applicable (no company future obligation) | Regulated pre-funding common for pensions (via a separate trust); OPEB usually unfunded |

**Global trend**: post-employment benefits have shifted from DB to DC in the private sector as employers seek to shed investment/actuarial risk (exceptions include the Netherlands and Japan, where DC remains rare). Many legacy DB plans have been **closed** (no new entrants) and/or **frozen** (no further benefit accrual for existing participants), with affected employees typically shifted to DC arrangements going forward.

---

### Financial Reporting for DC Plans

DC plan accounting mirrors short-term benefits: the employer's contribution is recognized as an **expense** (grouped within the relevant functional expense category, not usually a discrete line), with a **current liability** for any vested-but-unpaid contribution, and a **cash outflow in operating activities** at payment. The DC plan itself is a separate legal entity — its assets, liabilities, and transactions are **not** recognized on the employer's financial statements.

---

### Financial Reporting for DB Plans: The Funded Status

Both IFRS and US GAAP require the plan's **funded status** to be reported on the balance sheet:

$$\boxed{\text{Funded status} = \text{Fair value of plan assets} - \text{Pension (DB) obligation}}$$

- **Fair value of plan assets**: assets held exclusively for paying benefits (bonds, equities, cash, derivatives), legally isolated from the sponsor (protected in bankruptcy) — the sponsor cannot withdraw contributed assets once made.
- **Pension obligation**: the present value (undiscounted for plan assets) of expected future benefit payments arising from employee service in the current *and* prior periods. The discount rate is the yield on **investment-grade corporate bonds** (or government bonds absent a liquid corporate market) denominated in the same currency as the benefits.

A **negative** funded status (obligation > assets) is reported as a **net pension liability**; a **positive** funded status (assets > obligation) is reported as a **net pension asset** — one of the few cases where accounting permits "net," not "gross," balance sheet presentation. Different plans' funded statuses **cannot** be netted against each other (a company can simultaneously report a net pension asset for one plan and a net pension liability for another).

> **Key insight — DB plans are debt-like**: a DB obligation is deferred compensation and represents a long-term commitment not unlike debt. General Electric's DB plans moved from a $4 billion *surplus* (2007) to a deficit exceeding $35 billion by 2018 — over 40% of its market capitalization at the time — driven by a decade of falling discount rates (which increase the pension obligation) and rising longevity assumptions. Unlike conventional debt, falling interest rates typically **hurt** DB sponsors (higher obligation), an effect only partly offset if plan assets are long-duration fixed income.

---

### Components of DB Pension Cost — IFRS

Simply expensing the period's cash contribution would violate accrual accounting (contributions need not track service). Instead, IFRS recognizes three components of periodic pension cost:

1. **Service cost** (recognized in **P&L**, as an **operating** expense):
   - **Current service cost** — increase in the obligation from the current period's employee service, calculated by an actuary using the *projected unit credit method*
   - **Past service cost** — increase (or decrease) in the obligation from a plan amendment affecting prior periods' service, recognized immediately in the period of the amendment
2. **Net interest expense/income** (recognized in **P&L**, **below** operating income, alongside other financing items):
   $$\boxed{\text{Net interest expense/income} = \text{Discount rate} \times \text{Net pension liability (or asset) at beginning of period}}$$
3. **Remeasurements** (recognized in **OCI**, *not* in P&L):
   - Actuarial gains/losses — changes in the obligation from changes in actuarial assumptions (salary growth, discount rate, mortality, etc.)
   - The difference between the **actual** return on plan assets and the return implied by the net interest calculation

$$\boxed{\text{IFRS periodic pension cost in P\&L} = \text{Service cost} + \text{Net interest expense/income}}$$

Employer **contributions** and **benefit payments** never directly appear on the income statement; contributions are a **cash outflow in operating activities**; benefit payments are neutral to funded status (reduce both plan assets and the obligation by the same amount) and are not reported on the sponsor's financial statements at all (the plan is a separate legal entity).

---

### Worked Example — Meridian Robotics: DB Pension Reconciliation (IFRS)

Meridian Robotics sponsors a DB pension plan; discount rate = **5%**.

**Beginning of year:** Benefit obligation = USD 500 million; Plan assets = USD 460 million → **Beginning funded status = −USD 40 million** (net pension liability).

**During the year:**

| Item | Amount (USD millions) |
|------|--------------------------|
| Current service cost | 30 |
| Past service cost (plan amendment) | 5 |
| Interest cost on obligation (5% × 500) | 25 |
| Actuarial loss on obligation (assumption changes) | 10 |
| Benefits paid | 20 |
| Actual return on plan assets | 18 |
| Employer contributions | 35 |

**Ending benefit obligation** $= 500 + 30 + 5 + 25 - 20 + 10 = \boxed{550}$

**Ending plan assets** $= 460 + 18 + 35 - 20 = \boxed{493}$

**Ending funded status** $= 493 - 550 = \boxed{-57}$ (net pension liability, up from 40 at the start of the year)

**Income statement (IFRS):**
- Service cost (operating expense) $= 30 + 5 = \boxed{35}$
- Net interest expense (financing, below operating line) $= 5\% \times 40 = \boxed{2}$ — check: interest cost on obligation (25) − interest income on assets (5% × 460 = 23) = 2 ✓

**OCI (remeasurements):**
- Actuarial loss on obligation: 10
- Shortfall of actual vs. assumed return on assets: 18 − 23 = **(5)**, a loss
- **Total remeasurement loss in OCI = 15**

**Reconciliation check**: change in net pension liability $= -57-(-40) = -17$. Components: $-35$ (service cost) $-2$ (net interest) $-15$ (remeasurement loss) $+35$ (contributions) $= -17$ ✓

---

### US GAAP and IFRS Differences in DB Pension Accounting

US GAAP reporting is the **same as IFRS on the balance sheet and statement of cash flows**, but **significantly different on the income statement and in OCI**. US GAAP recognizes **five** components of pension cost:

1. **Current service cost** — same computation as IFRS; operating expense
2. **Interest cost** — discount rate × beginning obligation; a **gross** amount (not netted against asset returns), typically presented as a non-operating financing item
3. **Expected return on plan assets** — expected rate of return × beginning fair value of plan assets; an **offset within earnings** (not directly netted into a single "interest" line as under IFRS); the expected return is a **management assumption** that can differ from the discount rate
4. **Amortization of past service cost** — past service cost is recognized in **OCI** in the period the amendment occurs, then **amortized to P&L** over the average remaining service life of affected employees in subsequent periods (unlike IFRS, which expenses it immediately)
5. **Amortization of net gains/losses** — actuarial gains/losses and asset-return differences ("remeasurements" under IFRS) are recognized either immediately in P&L or (more commonly) in **OCI**, then amortized to P&L under the **corridor approach**: only the portion of cumulative unrecognized gains/losses exceeding 10% of the greater of the obligation or plan assets must be amortized, over the employees' expected average remaining working lives

| IFRS Component | IFRS Recognition | US GAAP Component | US GAAP Recognition |
|-----------------|---------------------|------------------------|---------------------------|
| Service cost (current + past) | P&L (operating) | Current service cost | P&L (operating) |
| — | — | Amortization of past service cost | **OCI** in period incurred; amortized to P&L over employees' service lives |
| Net interest expense/income (net liability/asset × discount rate) | P&L, below operating | Interest cost (gross, obligation × discount rate) | P&L, non-operating |
| — | — | Expected return on plan assets (expected rate × beginning assets) | P&L, offset to earnings, non-operating |
| Remeasurements (actual − assumed return on assets; actuarial gains/losses) | **OCI**, not P&L | Actuarial gains/losses; actual vs. expected return on assets | Immediate P&L, **or** (more common) OCI, amortized via the **corridor approach** |

> **Key insight — management discretion**: management can flatter reported earnings by assuming a **high discount rate**, **low salary growth rate**, **low life expectancy** (and, for OPEB, a low healthcare cost trend rate) to shrink the obligation and periodic cost. Under US GAAP specifically, management can further flatter earnings by assuming a **high expected return on plan assets**. Analysts should track these assumptions over time and against peers for reasonableness.

---

### Worked Example — Meridian Robotics: The Same Facts Under US GAAP

Using the same facts as above, and assuming an **expected** rate of return on plan assets of 5% (i.e., expected return $= 5\% \times 460 = 23$), that the past service cost has not yet begun amortizing (first year of the amendment), and that this year's net actuarial loss has not yet triggered corridor amortization (no beginning unrecognized balance):

| Component | Amount (USD millions) | Recognized in |
|-----------|--------------------------|------------------|
| Current service cost | 30 | P&L (operating) |
| Interest cost (25) − Expected return on assets (23) | 2 | P&L (non-operating) |
| **Total P&L impact** | **32** | |
| Past service cost | 5 | OCI (to be amortized in future years) |
| Net actuarial loss (10 on obligation + 5 shortfall vs. expected return) | 15 | OCI (subject to future corridor amortization) |
| **Total OCI impact** | **20** | |

**Compare to IFRS**: total P&L impact of USD 37 million (35 service cost + 2 net interest) versus **USD 32 million under US GAAP** — the USD 5 million difference is exactly the past service cost, which IFRS expenses immediately but US GAAP defers to OCI. This is the single most testable US GAAP/IFRS distinction for plan amendments.

---

### Disclosures for Post-Employment Benefit Plans

**DC plans**: disclosure requirements are minimal — issuers need only disclose the amount recognized as expense (typically in a brief "Employee Compensation" or "Post-Employment Benefits" note).

**DB plans (including OPEB)**: IAS 19 requires extensive disclosure — often among the longest notes in the financial statements — intended to (a) explain the plans' characteristics and risks, (b) identify and explain the financial statement amounts arising from the plans, and (c) describe how the plans may affect the amount, timing, and uncertainty of future cash flows. In practice this includes: a reconciliation of the benefit obligation and plan assets (as constructed above), the funded status and its balance sheet presentation, the components of periodic pension cost, key actuarial assumptions (discount rate, salary growth, mortality, healthcare trend rate for OPEB), a breakdown of plan asset classes, expected future employer contributions, and **sensitivity analyses** showing the effect of a change in key assumptions (e.g., ±1% discount rate) on the obligation.

> **Analytical use of sensitivity disclosures**: a company disclosing that a 1% decrease in the discount rate would increase the obligation by a large amount, but only a modest amount after considering an offsetting increase in the value of long-duration fixed-income plan assets, is signaling that its plan assets are reasonably **duration-matched** to the obligation — a lower-risk asset-liability structure than a plan invested primarily in equities.

---

### Question Set Answers

**Q1.** A company's DB plan has a beginning benefit obligation of $200 million and beginning plan assets of $180 million, with a 4% discount rate. What is the net interest expense/income recognized in P&L under IFRS?
*Answer*: Net interest expense $= 4\% \times (200-180) = 4\% \times \$20\text{m} = \$0.8$ million **expense** (net pension liability of $20 million at the start of the period).

**Q2.** Under IFRS, a plan amendment increases the pension obligation by $12 million relating to employees' past service. How is this recognized?
*Answer*: As **past service cost**, recognized **immediately in P&L** (as an operating expense) in the period the amendment occurs — unlike US GAAP, which would defer it to OCI and amortize it over the employees' remaining average service life.

**Q3.** A DB plan pays $8 million in benefits to retirees during the year. What is the effect on the plan's funded status as reported on the sponsor's balance sheet?
*Answer*: **None.** Benefit payments reduce plan assets and the benefit obligation by the same amount, leaving funded status unchanged; the payment is also not separately reported on the sponsor's financial statements (the plan is a separate legal entity).

**Q4.** Why might a company's DB pension expense fall even though its workforce and salary levels are unchanged?
*Answer*: Management could raise the discount rate assumption (reducing both the obligation and, typically, net interest expense/cost), lower the assumed salary growth rate (reducing current service cost), lower assumed mortality/life expectancy, or (under US GAAP) raise the expected return on plan assets assumption — all discretionary choices that reduce reported pension cost without any change in the underlying economics.
