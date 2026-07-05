## Summary: Black-Scholes-Merton (BSM) Option Valuation Model — Introduction and Assumptions (CFA Level II — Derivatives)

---

### Historical Context

| Milestone | Detail |
|-----------|--------|
| **1900** | Louis Bachelier — first mathematically rigorous option valuation model (normal distribution) |
| **1973** | Fischer Black, Myron Scholes, Robert Merton — BSM model (two papers) |
| **1997** | Scholes and Merton — Nobel Prize in Economics (Black had died in 1995) |

**BSM innovation**: The no-arbitrage approach from the binomial model applied with a **continuous time process** — equivalent to a binomial model where the time step length approaches zero ($n \to \infty$).

---

### Normal vs. Lognormal Distribution

| Property | Normal Distribution | Lognormal Distribution (BSM choice) |
|---------|--------------------|------------------------------------|
| **Zero possible** | Yes | Yes (log of any positive number) |
| **Negative values** | ❌ Theoretically possible (violates limited liability) | ❌ Never negative |
| **Symmetry** | Symmetric | Right-skewed |
| **Interpretation** | Returns are normally distributed | **Log returns** (continuously compounded returns) are normally distributed |
| **Stock prices** | Can go negative (unrealistic) | **Cannot go negative** (consistent with limited liability) |

**Why lognormal won**: Research on stock prices in the 1950s-60s supported the lognormal; GBM is mathematically consistent with limited liability.

---

### Geometric Brownian Motion (GBM)

**GBM**: The stochastic process chosen by BSM to model how the underlying evolves over time.

**Two components:**
1. **Drift term** ($\mu$): Expected growth rate (deterministic)
2. **Random term** ($\sigma$): Volatility component (stochastic)

$$\boxed{\text{GBM: } dS = \mu S\,dt + \sigma S\,dZ}$$

**Key properties of GBM:**
- Price **never hits zero or goes negative** — consistent with limited liability
- Higher price levels → **larger absolute moves** (but same proportional volatility $\sigma$)
- Price paths are **continuous** — no sudden jumps
- **$\sigma$** = annualized standard deviation of **continuously compounded log returns**

**Exhibit 12 insight** ($S=50$, $\mu=3\%$, $\sigma=45\%$):
- Highest price paths: **more erratic** in absolute terms (10% of 100 = 10)
- Lowest price paths: **less erratic** in absolute terms (10% of 10 = 1)
- All paths: **no sudden jumps** — continuous movement

---

### 11 Assumptions of the BSM Model

| # | Assumption | Key Implication |
|---|-----------|-----------------|
| 1 | **GBM process** — continuously compounded returns are **normally distributed** | Log returns ~ N; prices ~ lognormal |
| 2 | **Continuous prices** — no jumps | Smooth price evolution |
| 3 | **Liquid underlying** | Easily bought and sold at any time |
| 4 | **Continuous trading** available | Can trade at every instant (theoretical requirement) |
| 5 | **Short selling** with full use of proceeds | Allows perfect replication |
| 6 | **No market frictions** | No transaction costs, taxes, or regulatory constraints |
| 7 | **No arbitrage** opportunities | Foundation of the no-arbitrage pricing approach |
| 8 | **European-style options** | No early exercise (American options require different models) |
| 9 | **Constant, known risk-free rate** | Borrowing/lending available at this rate |
| 10 | **Constant, known volatility** | $\sigma$ is fixed (not stochastic) — key practical limitation |
| 11 | **If underlying pays yield**: it is a **constant, known, continuous yield** | Dividends/foreign interest handled parametrically |

---

### Example 9 Answer

**Q1 (Correct pair of BSM assumptions):**

**A**: "Return is normally distributed" ✓ (log return is normal) but "price can jump abruptly" ✗ (BSM assumes continuous prices — no jumps) → **Wrong**

**B**: "Brokerage costs factored in" ✗ (BSM assumes NO frictions); "impossible to trade continuously" ✗ (BSM requires continuous trading) → **Wrong**

**C**: "Volatility can be predicted with certainty" ✓ (BSM assumes constant, known $\sigma$); "Arbitrage is non-existent" ✓ (no-arbitrage is a core BSM assumption) → **Correct**

→ **Answer: C**

---

### Key Limitations of BSM Assumptions vs. Reality

| Assumption | Reality |
|-----------|---------|
| **Constant volatility** | Volatility changes over time (volatility smile/skew) |
| **No jumps** | Asset prices do jump (earnings surprises, crises) |
| **European-style only** | Many real options are American-style |
| **Continuous trading** | Markets have hours, circuit breakers, illiquidity |
| **Known, constant risk-free rate** | Rates change stochastically |
| **No transaction costs** | Real trading involves costs |
| **Known, constant yield** | Dividends are discretionary and unpredictable |

> Despite these limitations, BSM produces models that are **tractable and practically useful** — the key test for any financial model.

---

### Exam Tips

- **GBM → lognormal prices → normally distributed log returns** — this is the foundational distribution choice
- **BSM = continuous-time limit of the binomial model** (as $n \to \infty$, binomial converges to BSM)
- **No negative prices**: GBM's key advantage over the normal distribution assumption
- **Volatility ($\sigma$)**: annualized standard deviation of **continuously compounded (log) returns** — not simple returns
- **Higher price → higher absolute variability** (proportional volatility is constant, absolute is not)
- **11 assumptions**: know which ones are most unrealistic (constant volatility, no jumps, European-style) — these motivate extensions like stochastic volatility models and jump-diffusion models
- **Example 9**: "volatility can be predicted with certainty" and "no arbitrage" are both correct BSM assumptions → Answer C
- **BSM for American options**: must use other methods (binomial tree, numerical methods) — BSM is European only
- This section sets up the **BSM formula** (covered next) which is the practical implementation of all these assumptions