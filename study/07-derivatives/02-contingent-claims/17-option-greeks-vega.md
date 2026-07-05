---
layout: page
title: Option Greeks — Vega
permalink: /study/07-derivatives/02-contingent-claims/17-option-greeks-vega/
prev: /cfa/study/07-derivatives/02-contingent-claims/16-option-greeks-theta/
next: /cfa/study/07-derivatives/02-contingent-claims/18-option-greeks-rho/
---
## Summary: Option Greeks — Vega (CFA Level II — Derivatives)

---

### What Is Vega?

**Vega**: The change in an option's value for a given small change in **volatility** ($\sigma$), holding everything else constant.

$$\boxed{\text{Vega} = \frac{\partial \text{Option value}}{\partial \sigma} > 0}$$

**Vega measures the sensitivity of an option portfolio to changes in volatility.**

---

### Key Properties of Vega

| Property | Detail |
|---------|--------|
| **Sign** | Always **positive** for both calls and puts |
| **Call vega = Put vega** | Equal magnitude (from put-call parity) |
| **Maximum value** | Near **at-the-money** options |
| **Most important Greek?** | **Yes** — option values are most sensitive to volatility among all BSM inputs |
| **Observable?** | **No** — future volatility is unobservable and subjective |

---

### Why Calls and Puts Have Equal Vega

**From put-call parity**: $c - p = S_0 - e^{-rT}X$

The right-hand side ($S_0$ and $e^{-rT}X$) contains **no volatility** → right-side vega = 0

$$\Rightarrow \text{Vega}_c - \text{Vega}_p = 0 \Rightarrow \boxed{\text{Vega}_c = \text{Vega}_p}$$

---

### Vega and Volatility — Intuition

**Why both calls and puts increase in value as volatility rises:**
- Higher volatility → **wider distribution** of possible future stock prices
- **Calls**: more chance of large upside gains (unlimited upside, limited downside = premium paid)
- **Puts**: more chance of large downside capture (limited upside = X, limited downside = premium paid)
- The **asymmetric payoff** of options means more volatility always helps option holders

**At extremely low volatility** → option values approach their **lower bounds**:

| Option | Lower Bound |
|--------|------------|
| **European call** | $\max(0, S - e^{-rT}X)$ |
| **European put** | $\max(0, e^{-rT}X - S)$ |

**Example** (Exhibit 18: $S = X = 100$, $r = 5\%$, $T = 1$, $\delta = 0$):
- Call lower bound = $\max(0, 100 - e^{-0.05}(100)) = 4.88$
- Put lower bound = $\max(0, e^{-0.05}(100) - 100) = 0$
- Difference explained by **put-call parity**: $c - p = S - PV(X) = 4.88$

---

### Volatility as a Risk Factor

**Volatility is unique among Greeks** because:
1. **Unobservable**: Future volatility cannot be measured objectively — historical volatility is only a proxy
2. **Subjective**: Like an expected value, future volatility requires judgment
3. **Volatile itself**: Volatility can change dramatically and unpredictably
4. **Sometimes treated as its own asset class**: VIX, volatility swaps, variance swaps

**Vega hedging challenges**:
- Volatility can **only be hedged with other options** (or volatility derivatives) — not with stock
- Losses from volatility changes may be **difficult to explain** to risk managers, boards, and clients
- Volatility exposure requires careful management and clear communication

---

### Vega vs. Other Greeks

| Feature | Delta | Gamma | Theta | **Vega** |
|---------|-------|-------|-------|---------|
| **Sensitivity to** | Stock price | Rate of delta change | Time | **Volatility** |
| **Observable input?** | Yes ($S$) | Yes ($S$) | Yes (time) | **No** (future $\sigma$) |
| **Sign for long options** | Varies | + | − | **+** |
| **Hedge with stock?** | Yes | No | No | **No** |
| **Hedge requires** | Stock | Options | Options | **Options** |

---

### Exam Tips

- **Vega is always positive** for both long calls and long puts
- **Short options have negative vega** — hurt when volatility rises
- **Vega = Vega** for calls and puts (same underlying, strike, expiry) — from put-call parity
- **Option values most sensitive to volatility** among all BSM inputs — vega is the most practically important Greek for options trading
- **Vega is highest ATM** and decreases for deep ITM or OTM options
- **Cannot hedge vega with stock** — requires other option positions
- **Future volatility is subjective/unobservable** — makes vega management particularly challenging
- **Increasing volatility → higher option values** for ALL options (long positions benefit; short positions hurt)
- **"Volatility as an asset class"**: VIX futures, variance swaps, volatility swaps — all instruments designed specifically to trade volatility risk (vega exposure)