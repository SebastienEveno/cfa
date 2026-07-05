## Summary: Option Greeks — Delta (CFA Level II — Derivatives)

---

### What Are the Greeks?

**The Greeks**: Measures of **sensitivity of option values** to changes in factors that affect option prices, holding all other factors constant.

**"Static risk measures"** — capture the option value change for a move in ONE parameter at a time.

| Greek | Sensitivity To |
|-------|---------------|
| **Delta** | Underlying price (this section) |
| **Gamma** | Rate of change of delta |
| **Theta** | Time (time decay) |
| **Vega** | Volatility |
| **Rho** | Risk-free interest rate |

---

### Delta — Definition and Formulas

$$\boxed{\Delta_c = e^{-\delta T} N(d_1)} \quad \text{(Call delta)}$$

$$\boxed{\Delta_p = -e^{-\delta T} N(-d_1)} \quad \text{(Put delta)}$$

**Definition**: Change in option value for a **given small change in the underlying stock price**, holding everything else constant.

| Position | Delta |
|---------|-------|
| **Long stock** | $+1.0$ |
| **Short stock** | $-1.0$ |
| **Long call** | $+e^{-\delta T}N(d_1) \in (0, e^{-\delta T})$ |
| **Short call** | $-e^{-\delta T}N(d_1) \in (-e^{-\delta T}, 0)$ |
| **Long put** | $-e^{-\delta T}N(-d_1) \in (-e^{-\delta T}, 0)$ |
| **Short put** | $+e^{-\delta T}N(-d_1) \in (0, e^{-\delta T})$ |

> For non-dividend-paying stock: $\delta = 0$ → $e^{-\delta T} = 1$ → $\Delta_c = N(d_1)$, $\Delta_p = -N(-d_1)$

---

### How Delta Changes with Stock Price and Time

**As stock price increases:**
- Call: $N(d_1) \to 1$ (deeper ITM) → $\Delta_c \to e^{-\delta T}$
- Put: $N(-d_1) \to 0$ (deeper OTM) → $\Delta_p \to 0$

**As stock price decreases:**
- Call: $N(d_1) \to 0$ (deeper OTM) → $\Delta_c \to 0$
- Put: $N(-d_1) \to 1$ (deeper ITM) → $\Delta_p \to -e^{-\delta T}$

**As expiration approaches:**
- ITM option: delta drifts toward $\pm1$ (more certain to be exercised)
- OTM option: delta drifts toward $0$ (less chance of exercise)

---

### Delta Approximation

**Price change estimation using delta:**

$$\boxed{\tilde{c} \approx c + \Delta_c \times (S' - S)} \quad \text{(Call)}$$

$$\boxed{\tilde{p} \approx p + \Delta_p \times (S' - S)} \quad \text{(Put)}$$

**Limitations** (from Exhibit 15):
- **Accurate for small price changes** ($S$ moves slightly from 100 to 101)
- **Inaccurate for large moves** (S = 100 to S = 150 → significant underestimation of call value)
- **Delta approximation is always biased low** for both up and down moves (the option price curve is convex — gamma captures this second-order effect)

---

### Delta Hedging

**Goal**: Create a **delta-neutral portfolio** where the total portfolio delta = 0.

**Formula for number of hedging units:**
$$\boxed{N_H = -\frac{\text{Portfolio delta}}{\Delta_H}}$$

Where:
- **Portfolio delta** = sum of deltas of all existing positions
- **$\Delta_H$** = delta of the hedging instrument
- **$N_H > 0$**: Buy the hedging instrument
- **$N_H < 0$**: Short sell the hedging instrument

**If $N_H$ is negative → short the hedging instrument; if positive → go long**

---

### Delta Hedging — Direction Logic

| Existing Position | Sign of Portfolio Delta | To Hedge (using stock) |
|-----------------|------------------------|------------------------|
| Long calls | Positive | **Short sell stock** |
| Short calls | Negative | **Buy stock** |
| Long puts | Negative | **Buy stock** |
| Short puts | Positive | **Short sell stock** |

**Key intuition**:
- **Short put** has positive delta (like being partially long stock) → hedge by **short selling stock**
- **Short call** has negative delta (like being partially short stock) → hedge by **buying stock**
- **Selling puts ≠ buying stock to hedge** (common exam trap)

---

### Example 17 — Apple Delta Hedge

**Setup**: Short 1,000 calls on Apple at $S = \$125$, call delta = 0.50

**Portfolio delta** = $-1,000 \times 0.50 = -500$ (short calls → negative delta)

**Hedge**: $N_H = -(-500)/1 = +500$ → **Buy 500 Apple shares** ✓

**Verification**: Apple rises $0.10:
- Short calls lose: $1,000 \times 0.50 \times 0.10 = \$50$ (liability up)
- Long stock gains: $500 \times 0.10 = \$50$ ✓ → Perfectly offsetting

**Which statement is INCORRECT?**

→ **A. "If we sell Apple puts, we need to buy Apple stock to delta hedge"** — **WRONG**

**Why wrong**: Selling puts creates **positive delta** (short put has positive delta) → need to **short sell stock**, not buy stock, to achieve delta neutrality.

---

### Example 18 — Comprehensive Delta Hedge

**Setup**: $S=100$, $X=100$, $r=5\%$, $T=1$, $\sigma=30\%$, $\delta=5\%$
Given: $\Delta_c = 0.532$, $\Delta_p = -0.419$

**Position**: Short puts on 10,000 shares → short put has delta = $+0.419$ per put

**Portfolio delta** = $10,000 \times (+0.419) = +4,190$

**Q1 — Hedge with stock** ($\Delta_H = 1.0$):
$$N_H = -\frac{4,190}{1.0} = \mathbf{-4,190} \implies \text{Short sell 4,190 shares}$$

→ **Answer: B. Short sell 4,190 shares**

**Q2 — Hedge with calls** ($\Delta_H = 0.532$):
$$N_H = -\frac{4,190}{0.532} = -7,876 \implies \text{Sell 7,876 call options}$$

→ **Answer: A. Sell 7,876 call options**

> Why sell calls? Selling calls creates negative delta → offsets the positive delta from the short puts.

**Q3 — Correct definition of option delta:**

→ **B. Option delta = change in option value for a small change in stock price, holding everything else constant**

Common mistake: Delta ≠ probability of expiring ITM (that's $N(d_2)$, not $N(d_1)$); Delta ≠ curvature (that's gamma).

---

### Key Formula Reference Card

| Formula | Expression |
|---------|-----------|
| **Call delta** | $e^{-\delta T}N(d_1)$ (range: 0 to $e^{-\delta T}$) |
| **Put delta** | $-e^{-\delta T}N(-d_1)$ (range: $-e^{-\delta T}$ to 0) |
| **Delta approx (call)** | $c + \Delta_c(S'-S)$ |
| **Hedging units** | $N_H = -(\text{Portfolio delta})/\Delta_H$ |
| **Delta neutral** | Portfolio delta + $N_H \times \Delta_H = 0$ |

---

### Exam Tips

- **Call delta ≥ 0; Put delta ≤ 0** — always remember the signs
- **Short position**: flip the sign of the long option delta
- **Short put = positive delta**: hedge by short selling stock (NOT buying — common trap)
- **Short call = negative delta**: hedge by buying stock
- **$N_H < 0$**: short the hedging instrument; **$N_H > 0$**: buy the hedging instrument
- **Delta ≠ probability of expiring ITM**: $\Delta_c \approx N(d_1)$; probability ITM = $N(d_2)$ → $d_1 \neq d_2$
- **Delta approximation is biased low**: always understates the true option value for large moves (convexity/gamma effect)
- **Continuous rebalancing required** for perfect delta hedging — BSM assumes continuous trading
- **BSM hedge ratio = $N(d_1)$**: directly corresponds to binomial hedge ratio $h$ from earlier sections