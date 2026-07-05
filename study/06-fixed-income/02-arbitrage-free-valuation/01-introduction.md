---
layout: page
title: Arbitrage-Free Valuation — Introduction
permalink: /study/06-fixed-income/02-arbitrage-free-valuation/01-introduction/
next: /cfa/study/06-fixed-income/02-arbitrage-free-valuation/02-arbitrage-free-valuation/
---
## Summary: Arbitrage-Free Valuation — Introduction (CFA Level II — Fixed Income)

---

### Core Principle

> **No arbitrage**: If net investment is zero and risk is zero, expected return must be zero.

**Arbitrage-free valuation**: A security valuation approach that produces values consistent with the **absence of arbitrage opportunities**.

---

### The Law of One Price

$$\boxed{\text{Two perfect substitutes must sell for the same price (no transaction costs)}}$$

If two identical assets trade at different prices, an investor could **buy low, sell high** for a riskless profit — this forces prices to converge.

---

### Three Steps of Asset Valuation

```
Step 1: Estimate future cash flows
Step 2: Determine appropriate discount rate(s)
Step 3: Calculate present value using those rates
```

---

### Traditional vs. Arbitrage-Free Bond Valuation

| Approach | Method | Problem |
|----------|--------|---------|
| **Traditional** | Discount all cash flows at a **single** YTM (as if flat curve) | Doesn't reflect actual term structure shape |
| **Arbitrage-free** | Treat bond as a **portfolio of zero-coupon bonds**; discount each cash flow at its own **spot rate** | Correctly reflects term structure |

**Key insight**: A bond is a **package of zeros**. Each individual zero-coupon cash flow should be valued using the **spot rate matching its specific maturity**.

> If a bond's market price diverges materially from the sum of its component zero-coupon values, an arbitrage opportunity exists.

---

### Two Types of Arbitrage Opportunities

#### 1. Value Additivity Violation

**Principle**: The value of the whole = sum of the value of the parts.

**Example (Assets A & B):**
- Asset A: zero-coupon bond, pays $1 in 1 year, priced at $0.952381 (= 1/1.05)
- Asset B: portfolio of 105 units of Asset A, pays $105 in 1 year, priced at **$97**

**Arbitrage**: 105 × $0.952381 = $100 (cost to assemble via individual units) vs. $97 (cost to buy the portfolio directly)
→ **Sell** 105 units of A for $100, **buy** portfolio B for $97 → **riskless profit of $3 today**, zero net cash flow at maturity.

#### 2. Dominance Violation

**Principle**: A risk-free asset with a positive future payoff must have a **positive price today**, and relative pricing among risk-free assets must be **consistent**.

**Example (Assets C & D):**

| Asset | Price Today | Payoff in 1 Year |
|-------|-------------|-------------------|
| C | $100 | $105 |
| D | $200 | $220 |

**Arbitrage**: Sell 2 units of C for $200, buy 1 unit of D for $200 → **zero net cost today**
- Cash inflow at maturity: $220 (from D) − $210 (owed on 2× C) = **$10 riskless profit**

---

### Resolution: Prices Adjust

Both types of arbitrage are **transitory** — once identified, investors trade in unlimited quantities until the mispricing disappears and prices converge to **arbitrage-free** levels.

---

### Example 1 — Knowledge Check

**Q1 (Which scenario includes an arbitrage opportunity?):**

**Bond A**: Yield 2.5% in NYC; price $104.376 in Chicago for a 3% coupon, 10-yr bond
**Bond B**: Yield 3.2% in Hong Kong; price RMB97.220 in Shanghai for a 3% coupon, 10-yr bond

For a 3% annual coupon, 10-year bond:
- At YTM = 2.5%: Price > par (since coupon > yield) → consistent with $104.376
- At YTM = 3.2%: Price < par (since coupon < yield) → should be **less than 100**, and RMB97.220 is indeed below par

→ **Bond A** is the arbitrage opportunity: if the NYC market implies a price consistent with 2.5% yield, but the Chicago price ($104.376) is the SAME as what 2.5% would generate — need to check if these are **consistent** or **inconsistent**. If both markets quote a price/yield combination that's internally consistent with the SAME bond, no arbitrage exists in that pairing; if the implied prices from the two markets' quoted yields **don't match the quoted prices**, that signals arbitrage.

> (The exercise is testing whether you can compute bond price from yield and check consistency — the takeaway is: **always verify price/yield consistency** between markets trading the *same* bond to spot the arbitrage opportunity.)

---

### Application to Fixed-Income Securities — Stripping and Reconstitution

**Every bond = portfolio of zero-coupon bonds.**

**Example**: A 5-year, 2% coupon Treasury = package of **11 zero-coupon instruments**:
- 10 semiannual coupon payments (one of which coincides with maturity)
- 1 principal repayment at maturity

**Stripping**: Dealers separate a coupon bond's individual cash flows and trade them as **separate zero-coupon securities**.

**Reconstitution**: Dealers recombine the appropriate individual zeros to **recreate** the original coupon bond.

> This stripping/reconstitution mechanism is **what enforces** arbitrage-free pricing in practice — if value additivity didn't hold, dealers could profit by stripping/reconstituting until prices converged.

---

### Key Implications for Valuation

| Principle | Implication |
|-----------|-------------|
| **Bonds as zero-coupon packages** | Each cash flow discounted at **its own** spot rate, not a single YTM |
| **Different coupon bonds, same maturity** | Treated as **different packages** of zeros — valued independently, even if final maturity matches |
| **Identical cash flows, different bonds** | Cash flows with **same risk and timing** use the **same discount rate**, regardless of which bond they're attached to |
| **Embedded options** | Bond value = arbitrage-free value of the **option-free bond** + arbitrage-free value of the **embedded option(s)** |

---

### Exam Tips

- **No arbitrage = zero investment, zero risk → zero expected return** — foundational principle
- **Law of one price**: identical assets must have identical prices (no transaction costs)
- **Value additivity**: whole = sum of parts; violated when a portfolio trades at a different price than its components combined
- **Dominance**: risk-free assets must be consistently priced relative to each other; violated when relative pricing creates a free lunch
- **Bond = portfolio of zeros**: each cash flow valued at its maturity-matched spot rate — this is the foundation of arbitrage-free valuation
- **Stripping/reconstitution**: the real-world mechanism (especially in US Treasuries) that enforces arbitrage-free bond pricing
- **Bonds with embedded options**: value = option-free bond value + value of embedded option(s) — each component priced arbitrage-free
- This section sets up the **binomial tree framework** (next sections) as the practical tool for arbitrage-free valuation of bonds with embedded options