---
layout: page
title: Traditional Theories of the Term Structure of Interest Rates
permalink: /study/06-fixed-income/01-term-structure-dynamics/06-traditional-theories/
prev: /cfa/study/06-fixed-income/01-term-structure-dynamics/05-swap-spreads/
next: /cfa/study/06-fixed-income/01-term-structure-dynamics/07-yield-curve-factor-models/
---
## Summary: Traditional Theories of the Term Structure of Interest Rates (CFA Level II — Fixed Income)

---

### Overview of Four Theories

| Theory | Core Claim | Forward Rates as Predictors | Risk Aversion? |
|--------|-----------|----------------------------|----------------|
| **Unbiased expectations** | Forward rates = unbiased predictors of future spot rates | Unbiased | No (risk-neutral) |
| **Local expectations** | All bonds earn risk-free rate over short holding periods | Unbiased (short term) | Can accommodate risk |
| **Liquidity preference** | Forward rates = expected future spot + liquidity premium | Upwardly biased | Yes |
| **Segmented markets** | Yields determined purely by supply/demand per maturity segment | Not meaningful | Yes (but not the focus) |
| **Preferred habitat** | Preferred maturities but yield differentials can induce deviation | Biased by risk premium | Yes |

---

### Theory 1: Unbiased (Pure) Expectations Theory

**Core claim**: Forward rates are **unbiased predictors** of future spot rates.

**Implication**: Bonds of **all maturities are perfect substitutes** — holding a 5-year bond for 3 years gives the same expected return as:
- Buying a 3-year bond, OR
- Rolling three consecutive 1-year bonds

**Assumes**: Risk-neutral investors — no risk premiums exist; all securities yield the risk-free rate for their maturity.

**Yield curve interpretation**:
- Upward-sloping → market expects rising short-term rates
- Downward-sloping → market expects falling short-term rates
- Flat → market expects stable rates

**Limitation**: Conflicts with overwhelming evidence that investors are **risk averse** — real-world risk premiums clearly exist.

---

### Theory 2: Local Expectations Theory

**Core claim**: The expected return for **every bond** over **short holding periods** equals the **risk-free rate** (no-arbitrage condition).

**Key difference from unbiased expectations theory**:
- Local expectations: every bond earns the risk-free rate over **short** periods only
- Unbiased expectations: every bond earns the same expected return over **any** holding period

**Advantage over unbiased expectations**: Can be extended to a world with **risk** — only requires zero risk premium for very short holding periods, not all periods.

**Limitation**: Empirically, **short-holding-period returns on long-dated bonds exceed those on short-dated bonds** — the theory's prediction is violated in practice due to liquidity demand and risk hedging behavior.

---

### Theory 3: Liquidity Preference Theory

**Core claim**: Forward rates = expected future spot rate + **liquidity premium** that compensates for interest rate risk of longer maturities.

$$\boxed{f_{t,1} = E(\text{future spot rate}) + \text{Liquidity premium}_t}$$

**Why liquidity premiums exist**: Investors have **shorter horizons** than available bond maturities → must be compensated for risk of selling before maturity at an uncertain price.

**Key implications:**
- Forward rates are **upwardly biased** predictors of future spot rates
- Yield curve is **typically upward-sloping** even if future rates are expected to stay flat
- Liquidity premiums are **non-decreasing** with maturity (each successive premium ≥ prior one)

**Can still accommodate:**
- **Downward-sloping curves**: if expectation of sharply falling rates or deflation is large enough to override liquidity premiums
- **Humped curves**: if rate expectations vary across maturities

**Example**: 30-year Treasury — most investors have shorter horizons → demand higher yield to accept the price uncertainty risk of a premature sale.

**Important clarification**: Liquidity premium here is **NOT** a premium for thinly traded bonds — it applies to **all** long-term bonds including highly liquid ones.

---

### Theory 4: Segmented Markets Theory

**Core claim**: Each maturity segment is an **independent market** — yields determined solely by **supply and demand** for that specific maturity. No relationship between yields at different maturities.

**Why markets are segmented**: Regulatory or self-imposed **asset/liability management constraints** force institutions to match asset and liability maturities:

| Institution | Preferred Maturity | Why |
|-------------|-------------------|-----|
| Life insurers | Long-term | Match long-duration insurance liabilities |
| Pension funds | Long-term | Match long-term benefit obligations |
| Money market funds | Short-term (<1 year) | Regulatory requirements |

**Implications**:
- Yield curve shape reflects **supply/demand imbalances** at each maturity
- Investors are **unwilling or unable** to deviate from preferred maturity — no substitution
- Forward rates have **no predictive content** for future spot rates

**Limitation**: Too extreme — ignores evidence that investors do move across maturities when returns are sufficiently attractive.

---

### Theory 5: Preferred Habitat Theory

**Core claim**: Investors have **preferred maturities** (habitats), but will deviate if the **expected additional return** is large enough to compensate for the risk.

**Synthesis of two theories:**
- From **segmented markets**: institutional preferences for specific maturities matter
- From **unbiased expectations**: expected returns can attract investors out of their preferred habitat

**Key difference from segmented markets**: Investors **can** and **will** move across maturities — but only when the yield differential is sufficiently attractive.

**Examples:**
- Intermediate bond fund extends duration if long-term yields exceed short-term by enough
- Life insurer shifts to shorter maturities if short-term returns become sufficiently attractive

**Most realistic theory**: Combines institutional constraints with market-driven incentives — closest to real-world behavior.

---

### Preferred Habitat and QE — Application

**QE mechanism and preferred habitat:**
- Fed purchased massive amounts of long-term Treasuries and MBS (2008–2014)
- Reduced supply of these assets available for private investors
- MBS investors have comparative expertise (interest rate + prepayment risk) → **preferred habitat** in MBS
- Reduced supply → remaining buyers bid aggressively → **MBS yields fell from 5-6% to <2% by end of 2012**

**Federal Reserve Holdings (Sep 2007 vs. Oct 2014):**

| | Sep 2007 | Oct 2014 |
|--|----------|----------|
| Total securities | $780B | $4,219B |
| T-bills | $267B (34%) | **$0** |
| MBS | **$0** | $1,718B (41%) |

> QE shifted Fed holdings massively from short-term T-bills → long-term bonds + MBS, suppressing long-term yields — consistent with preferred habitat theory's prediction.

---

### Example 9 — Knowledge Check Answers

**Q1 (Fallen angels sold by pension funds → depressed prices/high yields):**
→ **B. Segmented markets theory** — pension funds are restricted to investment-grade bonds (regulatory constraint); forced selling at downgrade creates excess supply in the high-yield segment specifically, depressing prices and elevating yields in that segment independently.

**Q2 (Theory where investors can be induced to deviate from preferred maturities by attractive yields):**
→ **A. Preferred habitat theory** — investors have preferences but will move if the excess return is large enough.

**Q3 (Unbiased expectations theory assumes investors are):**
→ **B. Risk neutral** — no risk premiums; all bonds are perfect substitutes; investors are indifferent to risk.

**Q4 (Market evidence shows forward rates are):**
→ **B. Upwardly biased predictors of future spot rates** — liquidity premiums mean forward rates systematically exceed realized future spot rates.

**Q5 (Short holding-period returns on short-maturity bonds vs. long-maturity):**
→ **A. Less than those on long-maturity bonds** — liquidity demand drives down yields on short-term securities; long-term securities earn higher returns over short holding periods (the local expectations theory prediction fails empirically).

---

### Exam Tips

- **Unbiased expectations**: forward rates = unbiased predictors; assumes risk neutrality — **theoretically elegant but empirically rejected**
- **Local expectations**: all bonds earn $z_1$ over short periods (no-arbitrage) — can accommodate risk; **empirically also violated** as long bonds earn more over short periods
- **Liquidity preference**: forward rates are upwardly biased; typical yield curve is upward-sloping due to liquidity premiums — **most consistent with empirical evidence for normal curve shapes**
- **Segmented markets**: each maturity is independent; institutional constraints drive supply/demand — **too extreme but explains persistent demand imbalances**
- **Preferred habitat**: most realistic; combines institutional preferences with return-seeking behavior — explains QE effects and fallen angel dynamics
- Know which theory predicts: **forward rates biased (LP, PH)** vs. **unbiased (pure expectations)** vs. **irrelevant (segmented)**
- **Downward-sloping curve**: consistent with **all four theories** — liquidity preference requires severe rate decline expectations to overcome premiums