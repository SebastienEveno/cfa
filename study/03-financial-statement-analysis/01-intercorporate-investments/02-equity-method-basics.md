---
layout: page
title: "Equity Method Basics — Significant Influence, Excess Purchase Price, and Impairment"
permalink: /study/03-financial-statement-analysis/01-intercorporate-investments/02-equity-method-basics/
next: /cfa/study/03-financial-statement-analysis/01-intercorporate-investments/03-equity-method-transactions-and-disclosure/
prev: /cfa/study/03-financial-statement-analysis/01-intercorporate-investments/01-investment-categories-and-fair-value/
---
## Summary: Equity Method Basics (CFA Level II — Financial Statement Analysis)

---

### Significant Influence: Associates and Joint Ventures

Under both IFRS and US GAAP, an investor holding **20%–50%** of the voting rights of an investee, directly or indirectly, is **presumed** to have significant influence (but not control). Below 20%, the presumption reverses — no significant influence unless demonstrated otherwise. Evidence of significant influence (IAS 28) includes:

- Representation on the **board of directors**
- Participation in the **policy-making process**
- **Material transactions** between investor and investee
- **Interchange of managerial personnel**
- **Technological dependency**

> **Key insight**: An investor with only 15%–19% ownership but board representation and policy-making participation is still required to use the equity method. Conversely, a 25% passive stake with no real influence may not qualify. Ownership percentage is a presumption, not a rule.

**Joint ventures** — arrangements where two or more parties share **joint control** — are also accounted for using the **equity method** under both IFRS (IAS 28) and US GAAP. Proportionate consolidation (combining the venturer's pro rata share of the JV's assets, liabilities, revenues, and expenses line-by-line) is permitted only in rare circumstances. Because the equity method nets everything into single line items, **total recognized income and total net assets are identical** under equity method vs. proportionate consolidation — but individual ratios (leverage, turnover) can differ materially between the two.

---

### Equity Method: Basic Mechanics

The equity investment is initially recorded **at cost**. In each subsequent period:

$$\boxed{\text{Ending investment balance} = \text{Beginning balance} + \text{Investor's share of investee income} - \text{Dividends received} - \text{Amortization of excess purchase price} - \text{Impairment}}$$

- The investor's **share of investee net income** is recognized in the investor's profit or loss (equity income) — income is recognized **as earned**, not as dividends are received.
- **Dividends received** are treated as a **return of capital** — they reduce the investment account and are **not** recognized in profit or loss (this avoids double-counting: the investor already recognized its share of the earnings that funded the dividend).
- The equity method is called **"one-line consolidation"**: the investor's proportionate share of the investee's net assets appears as a **single non-current asset line** on the balance sheet, and the investor's share of investee profit or loss appears as a **single line item** on the income statement.
- If the investment balance is driven to **zero** by cumulative losses, the investor generally **stops** applying the equity method (does not recognize further losses) unless it has a further funding obligation. The method resumes once subsequent profits offset the unrecognized losses.

---

### Worked Example 1 — Basic Equity Income Roll-Forward

Branch Co. purchases a 20% interest in Williams Inc. for 200,000 on 1 January Year 1 (purchase price equals 20% of book value — no excess purchase price). Williams reports:

| Year | Income | Dividends |
|---|---|---|
| Year 1 | 200,000 | 50,000 |
| Year 2 | 300,000 | 100,000 |
| Year 3 | 400,000 | 200,000 |

**Investment balance at end of Year 3:**

$$200,000 + 20\%(200,000+300,000+400,000) - 20\%(50,000+100,000+200,000)$$
$$= 200,000 + 20\%(900,000 - 350,000) = 200,000 + 110,000 = \boxed{310,000}$$

---

### Amortization of Excess Purchase Price

The purchase price paid for an equity-method stake usually **exceeds** the investor's share of the investee's **book value**, because (1) many investee assets are carried at historical cost rather than fair value, and (2) the investor may be paying for future synergies. The **excess purchase price** is allocated in this order:

1. First, to the investor's share of the difference between **fair value and book value** of specific identifiable assets/liabilities (e.g., inventory, PP&E, intangibles).
2. The **residual** is **goodwill** — not separately amortized (indefinite life), but embedded in the single "investment" balance sheet line and tested for impairment.

$$\boxed{\text{Goodwill (equity method)} = \text{Purchase price} - \text{Investor's share of book value} - \text{Investor's share of (FV} - \text{BV) of identifiable net assets}}$$

Amounts allocated to depreciable/amortizable assets are **amortized over their remaining useful lives**, reducing both (a) equity income on the income statement and (b) the investment account on the balance sheet — because this allocation exists only on the *investor's* books, never on the investee's own financial statements.

> **Key insight**: Unlike goodwill, the portion of excess purchase price allocated to identifiable assets (e.g., PP&E) **is** amortized through equity income, even though it never appears as a separate line item anywhere.

---

### Worked Example 2 — Equity Method with Goodwill

**Setup**: On 1 January Year 1, Meridian Group acquires a 25% interest in Castellan Corp for 500,000 cash and obtains significant influence (board representation). At acquisition, Castellan's net assets have a book value of 400,000. A building is undervalued by 40,000 (20-year remaining life, straight-line); all other assets/liabilities are at fair value.

**Step 1 — Goodwill at acquisition:**

| | Amount |
|---|---|
| Purchase price | 500,000 |
| Less: 25% × book value of Castellan (25% × 400,000) | (100,000) |
| Excess purchase price | 400,000 |
| Less: attributable to building (25% × 40,000) | (10,000) |
| **Goodwill (residual)** | **390,000** |

**Step 2 — Year 1 equity income**, given Castellan reports net income of 60,000 and pays dividends of 12,000:

| | Amount |
|---|---|
| Meridian's share of Castellan's net income (25% × 60,000) | 15,000 |
| Less: amortization of excess purchase price on building (10,000 ÷ 20 years) | (500) |
| **Equity income, Year 1** | **14,500** |

**Step 3 — Investment balance at end of Year 1:**

$$500,000 + 14,500 \text{ (equity income)} - 3,000 \text{ (25\% × 12,000 dividends)} = \boxed{511,500}$$

**Cross-check via the "share of net assets" approach:**

$$\text{Investment} = \underbrace{25\% \times (\text{Castellan's ending book value})}_{\text{proportionate share of book value}} + \underbrace{\text{unamortized excess purchase price}}_{400,000 - 500}$$

Castellan's ending book value = 400,000 + 60,000 − 12,000 = 448,000. Meridian's share = 25% × 448,000 = 112,000. Unamortized excess = 400,000 − 500 = 399,500. Total = 112,000 + 399,500 = **511,500** ✓ — matches.

---

### Fair Value Option

Both IFRS and US GAAP allow an investor to elect to carry an equity-method-eligible investment **at fair value** instead:

| | IFRS | US GAAP |
|---|---|---|
| Availability | Restricted to venture capital, mutual funds, unit trusts, and similar entities | Available to all entities |
| Election timing | Irrevocable, at initial recognition | Irrevocable, at initial recognition |
| Subsequent measurement | Fair value; unrealized gains/losses **and** dividends/interest received flow through profit or loss | Same |

Under the fair value option, the investment account does **not** reflect the investor's proportionate share of investee earnings, dividends, or other distributions — and no excess-purchase-price amortization or goodwill is created.

---

### Impairment of Equity Method Investments

$$\boxed{\text{Impairment loss} = \text{Carrying amount} - \text{Recoverable amount (IFRS) or Fair value (US GAAP)}}$$

| | IFRS | US GAAP |
|---|---|---|
| Trigger | Objective evidence of impairment from a loss event with a reliably estimable effect on future cash flows | Fair value decline below carrying value judged **other than temporary** |
| What's tested | Entire investment carrying amount (goodwill is not separately tested — it's embedded) vs. **recoverable amount** (higher of value in use and fair value less costs to sell) | Entire investment vs. **fair value** |
| Reversal of prior impairment | **Permitted** if recoverable amount later increases (IAS 36) | **Prohibited** |

> **Key insight**: Because goodwill is never separately recognized under the equity method (it's buried inside one balance sheet line), it is never separately impairment-tested the way *consolidated* goodwill is (see the Acquisition Method / Consolidation notes). The whole investment is tested as a single unit.

---

### Question Set Answers

**Q1.** An investor owns 18% of an investee's voting shares but has a seat on the board and supplies key technology to the investee. Which accounting method applies?
**Answer: Equity method.** Board representation and technological dependency both indicate significant influence despite ownership below 20%.

**Q2.** Under the equity method, dividends received from the investee are recorded as:
**Answer: A reduction of the investment account (return of capital)** — not as investment income, because the investor already recognized its full share of investee earnings when they were earned.

**Q3.** An investor's equity-method investment balance has been reduced to zero by cumulative investee losses. The investee then reports a profit. What happens?
**Answer:** The investor generally resumes equity method accounting only after its share of subsequent profits equals the cumulative unrecognized losses from the suspension period.

**Q4.** Which component of excess purchase price is amortized, and which is not?
**Answer:** Amounts allocated to identifiable assets with finite lives (e.g., buildings, equipment, intangibles with determinable lives) are amortized over those lives; goodwill (indefinite life) is not amortized but is tested for impairment.

**Q5.** How does IFRS differ from US GAAP on reversing a previously recognized equity-method impairment loss?
**Answer:** IFRS permits reversal (up to the amount that would have existed absent the impairment) if the recoverable amount subsequently increases; US GAAP prohibits any reversal.

---

*Continued in [Equity Method — Transactions with Associates and Disclosure](/cfa/study/03-financial-statement-analysis/01-intercorporate-investments/03-equity-method-transactions-and-disclosure/).*
