## Summary: One-Period Binomial Option Valuation Model (CFA Level II — Derivatives)

---

### The One-Period Binomial Framework

**Setup**: At Time 0, the underlying asset price = $S$. At Time 1 (expiration), it can only go to:
- **Up**: $S^+ = u \times S$ (where $u$ = up factor, total return if up move)
- **Down**: $S^- = d \times S$ (where $d$ = down factor, total return if down move)

**Higher volatility** → larger $u$, smaller $d$ (wider spread of possible outcomes)

---

### Approach 1: No-Arbitrage Replication

**Core idea**: The option can be **perfectly replicated** by holding $h$ units of the underlying plus borrowing/lending at the risk-free rate.

#### The Hedge Ratio

$$\boxed{h = \frac{c^+ - c^-}{S^+ - S^-}}$$

**Mnemonic**: (Call value up − Call value down) / (Stock up − Stock down) — same pattern in numerator and denominator, but numerator uses the option, denominator uses the underlying.

**Call hedge ratio**: $h > 0$ (long the underlying to hedge a short call)
**Put hedge ratio**: $h < 0$ (short the underlying to hedge a short put)

#### Call Option Value (No-Arbitrage)

$$\boxed{c = hS + PV(-hS^- + c^-)}$$

Equivalently: $c = hS + PV(-hS^+ + c^+)$

**Intuition**: Call = long $h$ units of stock partially financed by borrowing.

#### Put Option Value (No-Arbitrage)

$$\boxed{p = hS + PV(-hS^- + p^-)}$$

**Intuition**: Put = short $|h|$ units of stock + lending (investing the proceeds).

---

### Replicating Portfolios Summary

| Option | Underlying Position | Financing |
|--------|---------------------|-----------|
| **Long call** | Buy $h$ units (long) | Borrow $PV(-hS^- + c^-)$ |
| **Long put** | Short sell $|h|$ units | Lend $PV(-hS^- + p^-)$ |
| **Write call** | Short sell $h$ units | Lend proceeds |
| **Write put** | Buy $|h|$ units | Borrow to fund purchase |

> **Call = leveraged position in the underlying**
> **Put = short position in the underlying with lending**

---

### Approach 2: Expectations (Risk-Neutral Probability) Approach

**Key result**: Option value = **PV of expected payoff** using **risk-neutral probabilities** discounted at the **risk-free rate**.

#### Risk-Neutral Probability of Up Move

$$\boxed{\pi = \frac{FV(1) - d}{u - d} = \frac{(1+r) - d}{u - d}}$$

Where $FV(1) = (1+r)$ under periodic compounding.

#### Option Values (Expectations Approach)

$$\boxed{c = PV_r[\pi c^+ + (1-\pi)c^-]} = \frac{\pi c^+ + (1-\pi)c^-}{1+r}$$

$$\boxed{p = PV_r[\pi p^+ + (1-\pi)p^-]} = \frac{\pi p^+ + (1-\pi)p^-}{1+r}$$

**Both approaches give identical results** — the expectations approach is simply easier to compute.

---

### Two Key Differences from Standard DCF Valuation

| Feature | Standard DCF | Risk-Neutral (Expectations) Approach |
|---------|-------------|--------------------------------------|
| **Expected future value** | Based on investor's subjective beliefs | Based on **objective risk-neutral probability** $\pi$ |
| **Discount rate** | Risk-adjusted (reflects investor's risk preferences) | **Risk-free rate** only (no risk adjustment) |

> **$\pi$ is NOT the true probability** of an up move — it is a **mathematical construct** derived from the no-arbitrage condition. It does not reflect investor risk preferences.

---

### Put-Call Parity

$$\boxed{S + p = PV(X) + c}$$

**Mnemonic**: Two forms of "portfolio insurance":
- **Left side**: Long stock + Long put → floor on value
- **Right side**: Lend PV(X) + Long call → guaranteed minimum + upside

**Rearrangements:**
$$c = S - PV(X) + p$$
$$p = c - S + PV(X)$$

> **Put-call parity holds regardless of which valuation model is used** — it is a fundamental no-arbitrage relationship.

---

### Worked Example — Single-Period Call (Example 3)

**Setup**: $S = €100$, $X = €100$, $r = 5.15\%$, $T = 1$ year, $u = 1.35$, $d = 0.74$

**Step 1**: Underlying prices at expiration:
$$S^+ = 1.35 \times 100 = 135 \qquad S^- = 0.74 \times 100 = 74$$

**Step 2**: Call payoffs at expiration:
$$c^+ = \max(0, 135-100) = 35 \qquad c^- = \max(0, 74-100) = 0$$

**Step 3**: Hedge ratio:
$$h = \frac{35-0}{135-74} = \frac{35}{61} = \mathbf{0.5738}$$

→ **Answer Q1: A. 0.57**

**Step 4**: Risk-neutral probability:
$$\pi = \frac{1.0515 - 0.74}{1.35 - 0.74} = \frac{0.3115}{0.61} = 0.5107$$

**Step 5**: Call value (expectations approach):
$$c = \frac{0.5107(35) + (1-0.5107)(0)}{1.0515} = \frac{17.874}{1.0515} = \mathbf{€17.00}$$

**Verification (no-arbitrage approach):**
$$c = 0.5738(100) + \frac{-0.5738(74) + 0}{1.0515} = 57.38 - 40.38 = \mathbf{€17.00} ✓$$

→ **Answer Q2: C. €17**

---

### Worked Example — Single-Period Put (Example 4)

**Same setup**, now for the put option:

**Step 1**: Put payoffs at expiration:
$$p^+ = \max(0, 100-135) = 0 \qquad p^- = \max(0, 100-74) = 26$$

**Step 2**: Put value (same $\pi = 0.5107$):
$$p = \frac{0.5107(0) + (1-0.5107)(26)}{1.0515} = \frac{12.720}{1.0515} = \mathbf{€12.10}$$

→ **Answer: B. €12.10**

**Verification via put-call parity:**
$$p = c - S + PV(X) = 17.00 - 100 + \frac{100}{1.0515} = 17.00 - 100 + 95.10 = \mathbf{€12.10} ✓$$

---

### Key Formula Reference Card

| Formula | Expression |
|---------|-----------|
| **Up/down factor** | $u = S^+/S$; $d = S^-/S$ |
| **Hedge ratio (call)** | $h = (c^+-c^-)/(S^+-S^-)$ |
| **Hedge ratio (put)** | $h = (p^+-p^-)/(S^+-S^-)$ (negative) |
| **Risk-neutral prob.** | $\pi = [(1+r)-d]/(u-d)$ |
| **Call value** | $c = PV[\pi c^+ + (1-\pi)c^-]$ |
| **Put value** | $p = PV[\pi p^+ + (1-\pi)p^-]$ |
| **Put-call parity** | $S + p = PV(X) + c$ |

---

### Exam Tips

- **Two approaches, same answer**: no-arbitrage (replication) and expectations (risk-neutral probability) — always produce identical option values
- **Risk-neutral probability $\pi$**: NOT the actual probability of an up move — derived purely from no-arbitrage condition using $u$, $d$, and $r$
- **Discount rate = risk-free rate** in expectations approach — no risk adjustment needed
- **Call hedge ratio > 0**: long underlying to hedge; **Put hedge ratio < 0**: short underlying to hedge
- **$\pi$ interpretation**: the probability that makes the expected return on the underlying equal to the risk-free rate
- **Put-call parity**: $S + p = PV(X) + c$ — model-independent, always holds for European options
- **Higher volatility → higher $u$, lower $d$ → higher option values** (more dispersion = more potential for in-the-money payoffs)
- **Verify with both methods**: no-arbitrage approach ($c = hS + PV(\cdot)$) and expectations approach ($c = PV[\pi c^+ + (1-\pi)c^-]$) — use whichever is faster on exam