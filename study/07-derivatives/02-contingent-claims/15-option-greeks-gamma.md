## Summary: Option Greeks — Gamma (CFA Level II — Derivatives)

---

### What Is Gamma?

**Gamma**: The change in an option's **delta** for a given small change in the underlying stock price, holding everything else constant.

$$\boxed{\Gamma_c = \Gamma_p = \frac{n(d_1)}{Se^{\delta T}\sigma\sqrt{T}}}$$

Where $n(d_1)$ = **standard normal probability density function** (lowercase $n$, NOT cumulative $N$).

**Gamma measures the curvature** of the option price relationship with respect to the stock price — it captures what delta misses.

---

### Key Properties of Gamma

| Property | Detail |
|---------|--------|
| **Sign** | Always **non-negative** (≥ 0) |
| **Calls vs. puts** | $\Gamma_c = \Gamma_p$ (same gamma for call and put) |
| **Maximum value** | Near **at-the-money** options |
| **Minimum value** | Deep ITM or deep OTM (delta barely changes when stock moves) |
| **Stock position** | Gamma = **0** (delta of stock is always ±1, never changes) |
| **Over time** | Changes as stock price and time to expiration change |

**Why calls and puts have equal gamma**: From put-call parity ($c - p = S_0 - e^{-rT}X$), the right side doesn't depend on delta in a non-linear way → gammas must be equal to maintain parity.

---

### Gamma as a Risk Measure

**Why gamma matters**: Delta is a **linear approximation** of a **non-linear** relationship. Gamma measures the degree of that non-linearity (curvature).

$$\boxed{\text{Gamma} = \text{rate of change of delta as stock price changes}}$$

**Gamma risk**: The risk that stock prices **jump** (rather than move continuously), leaving an option position suddenly unhedged despite being delta-neutral.

- **Large gamma** → delta changes rapidly → frequent rebalancing needed → expensive to hedge
- **Small gamma** → delta relatively stable → less rebalancing needed

---

### Long vs. Short Gamma

| Position | Gamma | Consequence |
|---------|-------|------------|
| **Long options** (calls or puts) | **Positive gamma** | Benefits from large moves in either direction |
| **Short options** (calls or puts) | **Negative gamma** | Loses from large moves in either direction |
| **Stock position** | Zero gamma | No curvature effect |

> **Positive gamma** = like being long volatility — large moves (up or down) are profitable
> **Negative gamma** = like being short volatility — large moves cause losses

---

### Delta-Plus-Gamma Approximation (Improved Accuracy)

**For calls:**
$$\boxed{\tilde{c} \approx c + \Delta_c(S'-S) + \frac{1}{2}\Gamma_c(S'-S)^2}$$

**For puts:**
$$\boxed{\tilde{p} \approx p + \Delta_p(S'-S) + \frac{1}{2}\Gamma_p(S'-S)^2}$$

**Comparison of approximation methods (Exhibit 16):**

| Method | Accuracy | Bias |
|--------|---------|------|
| **Delta only** | Accurate for small moves; poor for large | Always **biased low** (both up and down) |
| **Delta + Gamma** | Much better even for large moves | Biased **low** for down moves; **high** for up moves |
| **BSM model (exact)** | Perfect (by definition) | None |

> The delta-plus-gamma approximation is a **significant improvement** over delta alone, but still imperfect for very large moves.

---

### Gamma Neutral Portfolio — Management Strategy

**Problem**: Options have gamma, stocks do not.

**Two-step approach to achieve both gamma and delta neutrality:**

```
Step 1: Neutralize GAMMA first
         → Can only be done by adding/removing OPTION positions
         → Adding options changes both delta and gamma
         → Because stocks have zero gamma, they can't help here

Step 2: Neutralize DELTA second
         → Use STOCK positions (buy or sell shares)
         → Stock has delta but zero gamma
         → Adjusting stock does NOT disturb the gamma from Step 1
```

$$\boxed{\text{To change gamma} \to \text{Trade options}} \qquad \boxed{\text{To change delta without affecting gamma} \to \text{Trade stock}}$$

---

### Example 19 — Gamma Risk in Option Trading

**Setup**: Short 1 call option + long stock (delta-hedged portfolio)

**Which statement is true?**

**A**: "We are gamma neutral" → **WRONG**
- Short call = negative gamma
- Stock = zero gamma
- Net gamma = negative → NOT gamma neutral

**B**: "Buying a call will increase our overall gamma" → **CORRECT** ✓
- Buying any option (call or put) increases net gamma (options always have positive gamma)
- This would reduce the magnitude of the negative gamma from the short call

**C**: "Our overall position has positive gamma, making large moves profitable" → **WRONG**
- Short call → negative gamma → large stock moves **hurt** (the delta hedge becomes inadequate in both directions)

→ **Answer: B**

---

### Gamma Risk Explained

**Why short gamma is dangerous**: If you've sold options and are delta-hedged:
- Stock jumps up suddenly → call option gains more than your hedge → large loss
- Stock jumps down → call option loses slower than expected → also hurts
- Continuous rebalancing (BSM assumption) would theoretically handle this
- In reality, jumps mean **the hedge fails** before rebalancing can occur

**This is "gamma risk"** — the risk inherent in short option positions when markets move discontinuously.

---

### Comparison: Delta vs. Gamma

| Feature | Delta | Gamma |
|---------|-------|-------|
| **Measures** | Sensitivity of option value to stock price | Sensitivity of **delta** to stock price |
| **Order** | First-order (linear) | Second-order (curvature) |
| **Stock gamma** | Always ±1 (delta of stock) | Always **0** |
| **Sign** | + for calls, − for puts | Always **≥ 0** |
| **Max value** | Deep ITM (delta → ±1) | **At-the-money** |
| **Approximation error** | Biased low for large moves | Corrects delta's bias |

---

### Exam Tips

- **Gamma always ≥ 0** for both calls and puts — no exceptions
- **$\Gamma_c = \Gamma_p$**: same gamma for call and put on the same underlying (from put-call parity)
- **Gamma is largest ATM**: delta changes most rapidly near the money
- **Stock has zero gamma**: can't be used to adjust gamma — only option trades can change gamma
- **Short option = negative gamma**: vulnerable to large price moves (gamma risk)
- **Long option = positive gamma**: benefits from large moves in either direction
- **Two-step hedging**: use options to set gamma first → use stock to set delta second
- **Delta-plus-gamma approximation**: always more accurate than delta alone; biased low for down moves, high for up moves (vs. BSM)
- **Gamma risk** = the risk of stock price jumps violating BSM's continuous price assumption → suddenly unhedged despite being delta-neutral