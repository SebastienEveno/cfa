## Summary: BSM Model Components and Interpretation (CFA Level II — Derivatives)

---

### The BSM Formulas

$$\boxed{c = SN(d_1) - e^{-rT}XN(d_2)} \quad \text{(Call)}$$

$$\boxed{p = e^{-rT}XN(-d_2) - SN(-d_1)} \quad \text{(Put)}$$

**Note**: All rates ($r$) and volatility ($\sigma$) are **annualized**; $r$ is **continuously compounded**.

---

### The $N(x)$ Function

$N(x)$ = **Standard normal cumulative distribution function** = probability of observing a value less than $x$ from a standard normal distribution.

**Key properties:**
- $N(x)$ ranges from 0 to 1
- $N(0) = 0.50$ (symmetric around zero)
- $N(-x) = 1 - N(x)$ (symmetry of normal distribution)
- $N(-1.645) = 0.05$; $N(1.645) = 0.95$
- Values of $d < 0$ → $N(d) < 0.5$; Values of $d > 0$ → $N(d) > 0.5$

---

### BSM Model Interpretation — Two Equivalent Views

#### View 1: PV of Expected Option Payoff

$$\boxed{c = PV_r[E(c_T)] = e^{-rT} \times E(c_T)}$$

Where expectation is under the **risk-neutral probability measure** (not investor's subjective beliefs) and discounting uses the **risk-free rate** (not risk-adjusted).

Consistent with the binomial model's expectations approach — just in continuous time.

---

#### View 2: Two-Component (Stock + Bond) Decomposition

| Component | Call Option | Put Option |
|-----------|------------|-----------|
| **Stock component** | $+SN(d_1)$ | $-SN(-d_1)$ |
| **Bond component** | $-e^{-rT}XN(d_2)$ | $+e^{-rT}XN(-d_2)$ |
| **Option value** | Stock − Bond | Bond − Stock |

---

### Replicating Portfolio Interpretation

$$\boxed{\text{Option value} = n_S \times S + n_B \times B}$$

Where $B = e^{-rT}X$ (price of zero-coupon bond paying $X$ at expiration).

| | Call Option | Put Option |
|-|------------|-----------|
| **$n_S$ (shares)** | $+N(d_1) > 0$ (long stock) | $-N(-d_1) < 0$ (short stock) |
| **$n_B$ (bonds)** | $-N(d_2) < 0$ (short bonds = borrow) | $+N(-d_2) > 0$ (long bonds = lend) |
| **Economic interpretation** | **Leveraged long position** in stock (buy stock on margin) | **Short stock + lending** (bond financed by short sale proceeds) |

---

### BSM vs. Binomial Model — Direct Comparison

| Term | Binomial Model | BSM Model |
|------|---------------|-----------|
| **Hedge ratio (stock units)** | $h = (c^+-c^-)/(S^+-S^-)$ | $N(d_1)$ for calls; $-N(-d_1)$ for puts |
| **Financing** | $PV(-hS^- + c^-)$ | $-N(d_2)e^{-rT}X$ for calls; $+N(-d_2)e^{-rT}X$ for puts |
| **Parallel** | $h \leftrightarrow N(d_1)$; borrowing $\leftrightarrow$ bond component |

**$N(d_1)$ = continuous-time analog of the binomial hedge ratio $h$**

---

### Dynamic Replication — Continuous Rebalancing

**As $S$ rises** → $N(d_1)$ increases → replicating portfolio must **buy more shares**

**As $S$ falls** → $N(d_1)$ decreases → replicating portfolio must **sell shares**

**Result**: The strategy is "buy high, sell low" — the aggregate losses from this rebalancing **exactly equal the option premium** received (if BSM assumptions hold perfectly).

**In practice**, this means option hedging is imperfect because:
- Transaction costs make continuous rebalancing expensive
- Price **jumps** violate the continuous price assumption
- Volatility is **not known in advance** (not constant)
- → Options typically priced **higher** than BSM theory predicts (higher implied vol used)

---

### Critical Interpretation: $N(d_2)$

$$\boxed{N(d_2) = \text{Risk-neutral probability that call expires in the money (}S_T > X\text{)}}$$

$$\boxed{N(-d_2) = 1 - N(d_2) = \text{Risk-neutral probability that put expires in the money (}S_T < X\text{)}}$$

> **Important distinction**: $N(d_2)$ is the **risk-neutral probability** of expiring in the money — NOT the real-world probability nor the investor's subjective estimate.

---

### Example 10 — Numerical Application

**Given**: $S = 100$, $X = 100$, $r = 5\%$, $T = 1.0$, $\sigma = 30\%$

**BSM outputs provided**: $d_1 = 0.317$, $d_2 = 0.017$

| | Value |
|-|-------|
| $PV(X) = e^{-0.05 \times 1} \times 100$ | $95.123$ |
| $N(d_1)$ | $0.624$ |
| $N(d_2)$ | $0.507$ |
| $N(-d_1)$ | $0.376$ |
| $N(-d_2)$ | $0.493$ |
| **Call value $c$** | **$14.23$** |
| **Put value $p$** | **$9.35$** |

**Q1 — Call replicating strategy:**
- $n_S = N(d_1) = +0.624$ shares (long)
- $n_B = -N(d_2) = -0.507$ zero-coupon bonds (short = borrow)
- **Cost**: $0.624(100) + (-0.507)(95.123) = 62.40 - 48.23 = 14.17 \approx c = 14.23$ ✓

→ **Answer Q1: B** — Buy 0.624 shares, short sell 0.507 zero-coupon bonds

**Q2 — Put replicating strategy:**
- $n_S = -N(-d_1) = -0.376$ shares (short)
- $n_B = +N(-d_2) = +0.493$ zero-coupon bonds (long = lend)
- **Cost**: $-0.376(100) + (0.493)(95.123) = -37.60 + 46.89 = 9.29 \approx p = 9.35$ ✓

→ **Answer Q2: C** — Short sell 0.376 shares, buy 0.493 zero-coupon bonds

---

### Key Formula Reference Table

| Component | Call | Put |
|-----------|------|-----|
| **Option value** | $SN(d_1) - e^{-rT}XN(d_2)$ | $e^{-rT}XN(-d_2) - SN(-d_1)$ |
| **Shares ($n_S$)** | $+N(d_1)$ | $-N(-d_1)$ |
| **Bonds ($n_B$)** | $-N(d_2)$ | $+N(-d_2)$ |
| **Bond price ($B$)** | $e^{-rT}X$ | $e^{-rT}X$ |
| **RN prob. in-the-money** | $N(d_2)$ (call ITM) | $N(-d_2)$ (put ITM) |

---

### Exam Tips

- **$N(d_1)$** = hedge ratio (number of shares to replicate the option) — analog of $h$ in binomial model
- **$N(d_2)$** = risk-neutral probability the call expires ITM (stock price > strike at expiration)
- **$N(-d_1) = 1 - N(d_1)$** and **$N(-d_2) = 1 - N(d_2)$** — use the symmetry
- **Call = leveraged stock position**: buy $N(d_1)$ shares + borrow $N(d_2) \times e^{-rT}X$
- **Put = short stock + lending**: short $N(-d_1)$ shares + lend $N(-d_2) \times e^{-rT}X$
- **Short call = over-leveraged**: borrow more than 100% of stock value
- **Dynamic replication**: as $S$ rises, buy more shares (buy high/sell low) — aggregate cost = option premium
- **$d_1$ and $d_2$**: $d_1 > d_2$ always (because $d_2 = d_1 - \sigma\sqrt{T}$) → $N(d_1) > N(d_2)$ always
- **BSM pricing**: uses risk-neutral expectation discounted at risk-free rate — no investor risk premium involved