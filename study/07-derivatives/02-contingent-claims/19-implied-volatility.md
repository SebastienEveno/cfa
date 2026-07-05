## Summary: Implied Volatility (CFA Level II — Derivatives)

---

### What Is Implied Volatility?

**Implied volatility (IV)**: The volatility value **backed out from an observed market option price** using an option valuation model (e.g., BSM) — with all other inputs known.

$$\boxed{\text{Observed option price} + \text{Known inputs} (S, X, T, r, \delta) \xrightarrow{\text{Invert BSM}} \text{Implied volatility}}$$

**Analogy**: Just as yield-to-maturity is inferred from a bond's market price, implied volatility is inferred from an option's market price.

**Key property**: **One-to-one correspondence** between option price and implied volatility (given all other inputs) — no ambiguity.

---

### Why IV Exists — The Observable vs. Unobservable Problem

| BSM Input | Observable? |
|-----------|------------|
| Underlying price ($S$) | ✅ Yes |
| Exercise price ($X$) | ✅ Yes |
| Time to expiration ($T$) | ✅ Yes |
| Risk-free rate ($r$) | ✅ Yes |
| Dividend yield ($\delta$) | ✅ Yes |
| **Future volatility ($\sigma$)** | ❌ **No** — must be estimated |

> Since everything else is known AND the market price is observable, we can solve for the **one unknown: implied volatility**.

---

### Historical vs. Implied Volatility

| Type | Basis | Limitation |
|------|-------|-----------|
| **Historical volatility** | Past return data | Backward-looking; poor guide to future |
| **Implied volatility** | Current market option price | Forward-looking; reflects collective market view |

**Better predictor**: Implied volatility — reflects what the market **expects** going forward, not what happened in the past.

---

### What Implied Volatility Tells Us

1. **Market's collective view of future uncertainty** — higher IV = greater perceived risk
2. **Demand for options** — increased option buying drives IV higher even if underlying volatility hasn't changed
3. **Market price of hedging** — higher IV for puts = more expensive downside protection
4. **Risk premium signal** — high IV indicates investors are paying up for protection/speculation

---

### Volatility Smile and Surface

**BSM assumption**: Single constant volatility across all strikes and maturities.

**Reality**: IV varies across:

| Dimension | Pattern | Name |
|-----------|---------|------|
| **Strike price** | Higher IV for OTM options (especially OTM puts) | **Volatility smile/skew** |
| **Time to expiration** | IV varies by term | **Term structure of volatility** |
| **Both together** | 3D visualization | **Volatility surface** |

> **If BSM assumptions held perfectly**: Volatility surface would be **completely flat** (same IV everywhere). The fact that it isn't flat reveals BSM's limitations.

---

### The VIX — Volatility as an Index (Exhibit 20)

**VIX** (CBOE S&P 500 Volatility Index):
- Approximates **30-day implied volatility** of the S&P 500
- Quoted as a percentage
- Known as the **"fear index"** — higher VIX = greater market uncertainty

**Key historical observations:**
- Low VIX (~10%): Calm markets (e.g., 1994, 2006)
- High VIX (~45%): Market stress (1998 — LTCM; 2002 — tech bust)
- **Peak VIX (~80%)**: 2008 global financial crisis (extreme fear and uncertainty)

**Why VIX spiked in 2008**: Both higher **expected future volatility** AND increased **demand for protective options** (put buying) drove IV higher simultaneously.

**VIX tradability**: Futures and options on VIX allow investors to directly trade volatility — manage vega exposure without using individual stock options.

---

### Quoting Options in Volatility Units

**Why traders quote options as implied volatility instead of price:**

1. **Comparability across strikes and expiries**: IV is roughly the same order of magnitude regardless of maturity or strike; raw prices can vary enormously
2. **Value assessment**: Higher IV for one option vs. another = one is genuinely more expensive after accounting for time and strike differences
3. **Common language**: All market participants use the same measure regardless of option type
4. **Easier to spot mispricings**: If an OTM option quotes at higher IV than an ATM option, it reveals a premium unexplained by BSM assumptions

**Example**: Two options at wildly different prices ($190 vs. $280 futures points) → both easily compared via their IV (16% vs. 15.2%).

---

### Example 20 Answer — Why Quote in IV?

**Q1 (Client wants IV quotes for OTM puts at 16% and ATM puts at 15.2%):**

→ **C. Both A and B are valid reasons**

- **Reason A**: Comparing IVs directly shows which option is "cheap" or "expensive" relative to the other after adjusting for all other factors — the OTM put at 16% is more expensive than the ATM put at 15.2% on a volatility-adjusted basis
- **Reason B**: IV at current market levels can be used to **revalue the entire options portfolio** at prevailing market volatility levels — essential for mark-to-market portfolio management

---

### Example 21 Answer — Cross-Market IV Trading

**Setup**:
- FTSE 3-month ATM call offered at **19% IV** (trader thinks fair value = **25%** → currently **cheap**)
- VOD 1-month ITM put offered at **24% IV** (trader thinks fair value = **20%** → currently **expensive**)

**Trading strategy**:
- FTSE call at 19% but should be 25% → **BUY** (underpriced, long vol position)
- VOD put at 24% but should be 20% → **SELL** (overpriced, short vol position)

→ **Answer: B. Buy the FTSE call and sell the VOD put**

---

### Practical Uses of Implied Volatility

| Use | Description |
|-----|-------------|
| **Market consensus pricing** | Standard pricing mechanism across all participants |
| **Portfolio revaluation** | Mark-to-market using current market IV levels |
| **Value comparison** | Compare options across different strikes, maturities |
| **Mispricing identification** | Spot cheap/expensive options by comparing IVs |
| **Market sentiment gauge** | Rising IV = rising fear; falling IV = complacency |
| **Regulatory/compliance reporting** | Standard language for communicating options risk |

---

### Exam Tips

- **Implied volatility = volatility backed out from observed option price** (all other inputs known)
- **Forward-looking**: IV reflects market expectations of **future** volatility, not historical
- **One-to-one relationship**: Every option price maps to a unique IV (given same model and inputs)
- **Volatility smile/skew**: IV varies with strike price — real-world violation of BSM's constant volatility assumption
- **Term structure of volatility**: IV varies with expiration — another BSM violation
- **Volatility surface**: 3D plot of IV vs. strike AND expiration — would be flat if BSM were perfect
- **VIX = "fear index"**: S&P 500 30-day IV; rises in market stress; tradable via futures/options
- **Higher IV = more expensive options** → higher cost of hedging/speculation
- **Quoting in volatility allows cross-option comparison** on a level playing field regardless of strike, maturity, or price differences
- **Options trading strategy**: If market IV < your forecast IV → buy options (cheap); If market IV > forecast → sell options (expensive)