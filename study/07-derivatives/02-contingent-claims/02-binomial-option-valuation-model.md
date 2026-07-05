---
layout: page
title: Binomial Option Valuation Model — Introduction
permalink: /study/07-derivatives/02-contingent-claims/02-binomial-option-valuation-model/
prev: /cfa/study/07-derivatives/02-contingent-claims/01-introduction/
next: /cfa/study/07-derivatives/02-contingent-claims/03-one-period-binomial-model/
---
## Summary: Binomial Option Valuation Model — Introduction (CFA Level II — Derivatives)

---

### What Is the Binomial Option Valuation Model?

**Binomial model**: A discrete-time option valuation framework based on **no-arbitrage principles** — the underlying can move to one of **two possible values** each period (up or down).

**Primary strength**: Can value **path-dependent options** — options whose value depends not only on the final underlying price but also on the **path taken to get there**.

---

### Path-Dependent vs. Path-Independent Options

| Feature | Path-Dependent | Path-Independent |
|---------|---------------|-----------------|
| **Type** | American options (early exercise possible) | European options (exercise only at expiry) |
| **Valuation model** | **Binomial model** (required) | BSM model OR Binomial |
| **Value depends on** | Final price AND path of underlying | Final price only |

> **Key distinction**: The BSM model can only handle path-independent (European) options. The binomial model handles both.

---

### The No-Arbitrage Foundation

**Two fundamental arbitrageur rules:**
1. **Do not use your own money** — positions are funded by borrowing or short sale proceeds
2. **Do not take any price risk** — all market price risk is hedged; focus is purely on exploiting mispricing

**The arbitrageur's goal**: Build a portfolio using the **underlying instrument** that **synthetically replicates** the option's cash flows, then exploit any pricing discrepancy between the option price and the replicating portfolio's value.

---

### Key Notation

| Symbol | Meaning |
|--------|---------|
| $S_t$ | Underlying price at time $t$ |
| $S_T$ | Underlying price at expiration $T$ |
| $c_t$ / $c$ | European call price at time $t$ (= $c_0$ at initiation) |
| $C_t$ | American call price at time $t$ |
| $p_t$ / $p$ | European put price |
| $P_t$ | American put price |
| $X$ | Exercise (strike) price |
| $T$ | Time to expiration (fraction of year) |
| $t$ | Current time as fraction of year |

**Example**: 90-day European call option initiated 15 April → $T = 90/365 = 0.2466$; European call price $c = €2.50$

---

### Option Values at Expiration (Intrinsic Value)

$$\boxed{c_T = \max(0, S_T - X)} \quad \text{(Call expires in the money if } S_T > X\text{)}$$

$$\boxed{p_T = \max(0, X - S_T)} \quad \text{(Put expires in the money if } X > S_T\text{)}$$

**If option prices deviate from these at expiration** → arbitrage profits available → prices must equal these intrinsic values.

---

### Intrinsic Value vs. Time Value

**Option price = Intrinsic value + Time value**

| Component | Definition | At expiration |
|-----------|-----------|---------------|
| **Intrinsic value** | $\max(0, S_t - X)$ for call; $\max(0, X - S_t)$ for put | = Option price |
| **Time value** | Market's valuation of potential for higher future intrinsic value | = **0** |

**Key properties of time value:**
- Always **non-negative** (due to asymmetry of option payoffs)
- **Declines toward zero** as expiration approaches (time decay)
- Captures the **upside potential** relative to the **limited downside**:
  - Call: upside = unlimited; downside = 0 (premium paid)
  - Put: upside = X (if $S_T → 0$); downside = 0 (premium paid)

---

### Why Time Value Is Always Non-Negative

**For a call option**: Even if $S_t < X$ (out of the money), there's still a chance $S_T > X$ by expiration. The asymmetry means potential gain is unlimited, while the loss is capped at the premium paid.

**For a put option**: Even if $S_t > X$ (out of the money), there's still a chance $S_T < X$ by expiration. The asymmetry means potential gain = $X$ (if stock goes to zero), while loss is capped at premium paid.

→ Option value can **never be negative** before expiration (no obligation to exercise).

---

### What Determines Option Value?

At this stage, the **underlying price** is identified as the **primary uncertain factor** affecting option value. Additional factors (volatility, time, interest rates, dividends) are covered in subsequent sections.

**Timeline:**

```
Time 0 (Initiation)                    Time T (Expiration)
     |__________________________________|
     Option price = c or p              Option value = max(0, ST-X) or max(0, X-ST)
     (determined by no-arbitrage        (known with certainty
     replication of future payoffs)      once ST is observed)
```

---

### Exam Tips

- **Binomial model**: handles both European AND American options; essential for American options (path-dependent due to early exercise)
- **BSM model**: European options only (path-independent)
- **At expiration**: $c_T = \max(0, S_T - X)$; $p_T = \max(0, X - S_T)$ — no time value remains
- **Time value ≥ 0 always** — asymmetric payoff structure ensures this (can walk away if unfavorable)
- **Intrinsic value before expiration**: technically the European option can't be exercised early, but $\max(0, S_t - X)$ serves as a floor for the option's value
- **Arbitrageur mindset**: build replicating portfolio using underlying + borrowing; exploit mispricing between option and replicating portfolio value
- The one-period binomial model (covered next) is the **foundational building block** for multi-period models and eventually BSM