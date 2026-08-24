---
layout: page
title: "Investment Categories and Fair Value Accounting (IFRS 9)"
permalink: /study/03-financial-statement-analysis/01-intercorporate-investments/01-investment-categories-and-fair-value/
next: /cfa/study/03-financial-statement-analysis/01-intercorporate-investments/02-equity-method-basics/
---
## Summary: Investment Categories and Fair Value Accounting (CFA Level II — Financial Statement Analysis)

---

### Why Intercorporate Investments Matter

Companies invest in the debt and equity securities of other companies to diversify their asset base, enter new markets, obtain competitive advantages, deploy excess cash, and achieve additional profitability. The **accounting treatment** for these investments depends almost entirely on the **degree of influence or control** the investor has over the investee — not simply on the percentage owned, although percentage ownership creates a rebuttable presumption of the applicable category.

> **Key insight**: The same underlying investment can be accounted for under three fundamentally different bases (fair value, equity method, or consolidation) depending on the degree of influence. Each basis produces a different picture of leverage, profitability, and turnover — even though the true underlying economics are unchanged. This is the central analytical theme of the entire learning module.

---

### The Four Basic Investment Categories

| Category | Degree of Influence | Typical Ownership | Accounting Treatment |
|---|---|---|---|
| **Investments in financial assets** | None / not significant | Usually < 20% | Fair value (FVTPL/FVOCI) or amortized cost — IFRS 9 |
| **Investments in associates** | Significant influence, not control | Usually 20%–50% | Equity method (IAS 28) |
| **Joint ventures** | Shared control | Varies | Equity method (IFRS 11/IAS 28); proportionate consolidation only in rare circumstances |
| **Business combinations (subsidiaries)** | Control | Usually > 50%, or other indicators of control | Acquisition method + consolidation (IFRS 3/IFRS 10) |

$$\boxed{\text{No influence} < 20\% \quad|\quad \text{Significant influence } 20\text{–}50\% \quad|\quad \text{Control} > 50\%}$$

> **Key insight**: These percentage thresholds are *presumptions*, not bright lines. Board representation, participation in policy-making, material intercompany transactions, interchange of managerial personnel, or technological dependency can establish significant influence (or even control) at ownership levels below 20%. Conversely, an investor with >20% but with no real influence (e.g., a passive financial investor blocked by other large shareholders) may not qualify for the equity method.

Under both IFRS and US GAAP the standards governing these categories differ somewhat in name but are substantially converged:

| Category | IFRS | US GAAP |
|---|---|---|
| Financial assets | IFRS 9 | FASB ASC Topic 320 / 825 |
| Associates | IAS 28 | FASB ASC Topic 323 |
| Business combinations | IFRS 3, IFRS 10 | FASB ASC Topics 805, 810 |
| Joint ventures | IFRS 11, IAS 28 | FASB ASC Topic 323 |

---

### IFRS 9: Classification and Measurement

IFRS 9 replaced IAS 39 and abandoned the old "held for trading / available-for-sale / held-to-maturity" portfolio approach. Classification now depends on **two tests** applied to debt instruments:

1. **Business model test** — Is the financial asset held to collect contractual cash flows (vs. held to sell, or held to both collect and sell)?
2. **Cash flow characteristic test** — Are the contractual cash flows solely payments of principal and interest on principal (an "SPPI" test)?

$$\boxed{\text{Amortized cost requires: (1) Hold-to-collect business model, AND (2) Cash flows are solely principal + interest}}$$

**Three measurement categories result:**

| Classification | Applies to | Subsequent measurement | Where changes in value go |
|---|---|---|---|
| **Amortized cost** | Debt only | Amortized cost (effective interest method) | N/A (no fair value remeasurement) |
| **FVOCI** (fair value through OCI) | Debt (hold-to-collect-and-sell) or equity (irrevocable election) | Fair value | Other comprehensive income |
| **FVTPL / FVPL** (fair value through profit or loss) | Debt (held for trading or fails SPPI) or equity (default) | Fair value | Profit or loss (net income) |

Key rules to remember:

- **Equity instruments** are never eligible for amortized cost — only **FVTPL** (the default) or **FVOCI** (an irrevocable, investment-by-investment election). If FVOCI is elected for equity, **only dividend income** flows through profit or loss; realized/unrealized gains and losses stay in OCI (and are typically never recycled to profit or loss under IFRS).
- **Debt instruments** can sit in any of the three categories depending on the business model.
- Management may elect the **FVTPL option** for an asset that would otherwise qualify for amortized cost or FVOCI, to avoid an **accounting mismatch** (an inconsistency arising from measuring related assets/liabilities on different bases).
- All financial assets are measured at **fair value on initial recognition** (generally equal to cost).
- Derivatives are measured at FVTPL (except qualifying hedging instruments).

---

### Reclassification of Investments

| Instrument | Reclassification allowed? |
|---|---|
| **Equity instruments** | **Never** — the FVTPL/FVOCI election is irrevocable |
| **Debt instruments** | Only if the **business model** changes (expected to be very infrequent) |

When a debt instrument is reclassified, there is **no restatement of prior periods**:

- Amortized cost → FVTPL: asset is remeasured to fair value at the reclassification date; any gain/loss is recognized immediately in profit or loss.
- FVTPL → Amortized cost: fair value at the reclassification date becomes the new amortized cost basis going forward.

---

### Worked Example — Meridian Group's Investment Portfolio

**Setup**: Meridian Group, a European industrial holding company, holds three passive (no significant influence) securities at 31 December Year 2, all acquired at par/cost:

| Security | Classification | Cost | Fair value, Year 2 |
|---|---|---|---|
| Alpha Corp bonds | FVTPL | 25,000 | 28,000 |
| Beta Corp equity | FVOCI | 40,000 | 37,000 |
| Gamma Corp bonds | Amortized cost | 50,000 | 55,000 |

**Question 1**: What is the balance sheet carrying value of Meridian's investment portfolio at 31 December Year 2?

FVTPL and FVOCI securities are carried at **fair value**; amortized-cost securities are carried at **historical (amortized) cost**, regardless of fair value movements.

$$28,000 \text{ (Alpha, FVTPL)} + 37,000 \text{ (Beta, FVOCI)} + 50,000 \text{ (Gamma, amortized cost)} = \boxed{115,000}$$

**Question 2**: If Gamma had instead been classified as FVTPL, would the carrying value be higher or lower?

Higher — Gamma's fair value (55,000) exceeds its amortized cost (50,000), so reclassifying it to FVTPL would raise the reported carrying value by 5,000 and would also have flowed a 5,000 unrealized gain through profit or loss in Year 2.

**Question 3**: Would Meridian's interest income differ if Gamma were FVTPL instead of amortized cost?

No — the **coupon/interest income** recognized is the same regardless of classification (as long as the bond was purchased at par, so there is no premium/discount to amortize). What differs is that unrealized fair value changes flow through profit or loss only under FVTPL.

---

### Analytical Implications

Analysts typically evaluate operating and investing performance **separately**. Because investment income (interest, dividends, and realized/unrealized gains and losses) is a function of the *classification choice* rather than core operations:

- Operating performance analysis should **exclude** financial-asset investment income.
- Non-operating assets should be excluded when computing **return on net operating assets**, for comparability across companies with different investment portfolios.
- Both IFRS (IFRS 7) and US GAAP require **disclosure of fair value** for each class of financial asset investment, even those carried at amortized cost — enabling analysts to build a fair-value-consistent pro forma balance sheet for comparison purposes.

---

### Question Set Answers

**Q1.** A company holds a corporate bond that it intends to hold to collect contractual cash flows, and the cash flows are solely principal and interest. Under IFRS 9, this bond is most likely to be measured at:
**Answer: Amortized cost** — it passes both the business model test (hold-to-collect) and the SPPI cash flow test.

**Q2.** A company elects the FVOCI option for a non-trading equity investment. Which of the following will appear in profit or loss?
**Answer: Only dividend income.** Unrealized and realized gains/losses on FVOCI equity investments bypass profit or loss entirely and remain in OCI.

**Q3.** Under IFRS 9, can a company reclassify an equity security from FVTPL to FVOCI after initial recognition because market conditions changed?
**Answer: No.** The classification choice for equity instruments is irrevocable at initial recognition; only debt instruments can be reclassified, and only upon a change in business model.

**Q4.** Company A holds Bond X (FVTPL, fair value $12M, cost $10M) and Bond Y (amortized cost, cost $10M, fair value $12M). All else equal, which company reports higher net income in the period of the fair value increase?
**Answer:** The unrealized $2M gain on Bond X (FVTPL) flows through profit or loss; the unrealized gain on Bond Y (amortized cost) is not recognized at all. Net income is higher for the FVTPL holding.

---

*Continued in [Equity Method Basics](/cfa/study/03-financial-statement-analysis/01-intercorporate-investments/02-equity-method-basics/).*
