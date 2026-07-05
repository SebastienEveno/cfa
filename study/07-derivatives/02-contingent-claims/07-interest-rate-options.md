## Summary: Interest Rate Options and the Multiperiod Binomial Model (CFA Level II — Derivatives)

---

### Interest Rate Options — Key Concepts

**Underlying**: The **spot interest rate** (not a bond price)

**Call on interest rates**: In the money when **spot rate > exercise rate** (buyer profits from rising rates)

**Put on interest rates**: In the money when **spot rate < exercise rate** (buyer profits from falling rates)

**Practical use**: Hedging interest rate exposure — caps (series of call options), floors (series of put options), collars.

---

### Key Difference from Equity Options

**Variable discount rates**: Because the underlying IS an interest rate, the **discount factors at each node differ** based on the prevailing rate at that node.

| | Equity Options | Interest Rate Options |
|-|----------------|----------------------|
| **Discount factor** | Same risk-free rate throughout | **Varies by node** (uses node-specific rate) |
| **$\pi$ assumption** | Derived from $u$, $d$, $r$ | Often **50% by convention** (arbitrary choice) |
| **Underlying** | Stock/index price | Spot interest rate |

---

### Valuation — Same Expectations Approach, Variable PV Factors

**Terminal payoffs** (per $1 notional):
$$\boxed{c_T = \max(0, S_T - X)} \qquad p_T = \max(0, X - S_T)$$

Where $S_T$ = realized spot rate at expiration, $X$ = exercise rate.

**Working backward** (same backward induction as equity options, but each node uses its own discount factor):

$$c^+ = PV_{1,2}^+[\pi c^{++} + (1-\pi)c^{+-}]$$
$$c^- = PV_{1,2}^-[\pi c^{+-} + (1-\pi)c^{--}]$$

> **Critical**: $PV_{1,2}^+$ and $PV_{1,2}^-$ are **different** (each reflects the one-period zero-coupon bond value at that node's interest rate).

**At Time 0:**
$$c = PV_{0,1}[\pi c^+ + (1-\pi)c^-]$$
$$p = PV_{0,1}[\pi p^+ + (1-\pi)p^-]$$

---

### Example 8 — Interest Rate Option Valuation

**Setup**: 2-year European call and put on 1-year spot rate; $X = 3.25\%$; $NA = \$1,000,000$; $\pi = 50\%$ at each node

**Binomial lattice rates:**

| Time | Node | Rate | PV factor |
|------|------|------|-----------|
| 0 | — | 3.0454% | 0.970446 |
| 1 | + | — | 0.962386 |
| 1 | − | — | 0.974627 |
| 2 | ++ | 3.9706% | — |
| 2 | +− | 3.2542% | — |
| 2 | −− | 2.2593% | — |

**Step 1 — Terminal payoffs (per $1):**

| Node | Call Payoff | Put Payoff |
|------|------------|-----------|
| ++ | $\max(0,0.039706-0.0325) = \mathbf{0.007206}$ | 0 |
| +− | $\max(0,0.032542-0.0325) = \mathbf{0.000042}$ | 0 |
| −− | 0 | $\max(0,0.0325-0.022593) = \mathbf{0.009907}$ |

**Step 2 — Time 1 values (node-specific discount factors):**

$$c^+ = 0.962386 \times [0.5(0.007206) + 0.5(0.000042)] = 0.962386 \times 0.003624 = \mathbf{0.003488}$$

$$c^- = 0.974627 \times [0.5(0.000042) + 0.5(0)] = 0.974627 \times 0.000021 = \mathbf{0.000020}$$

$$p^+ = 0.962386 \times [0.5(0) + 0.5(0)] = \mathbf{0}$$

$$p^- = 0.974627 \times [0.5(0) + 0.5(0.009907)] = 0.974627 \times 0.004954 = \mathbf{0.004828}$$

**Step 3 — Time 0 values (using Time 0 discount factor = 0.970446):**

$$c = 0.970446 \times [0.5(0.003488) + 0.5(0.000020)] = 0.970446 \times 0.001754 = \mathbf{0.001702}$$

$$p = 0.970446 \times [0.5(0) + 0.5(0.004828)] = 0.970446 \times 0.002414 = \mathbf{0.002343}$$

**Dollar values (multiply by $1,000,000 notional):**
$$\text{Call} = \$1,000,000 \times 0.001702 = \mathbf{\$1,702.16}$$
$$\text{Put} = \$1,000,000 \times 0.002343 = \mathbf{\$2,342.66}$$

---

### The Multiperiod Binomial Model — Bridge to BSM

**Core idea**: Divide the option's total expiration $T$ into $n$ equal time steps, each of length $T/n$, and apply the two-period framework repeatedly.

| Number of Steps | Time Step Length | Accuracy |
|----------------|-----------------|---------|
| $n = 2$ | $T/2$ | Rough approximation |
| $n = 50$ | $T/50$ | Good approximation |
| $n \to \infty$ | $T/n \to 0$ | → **Black-Scholes-Merton model** |

**As $n$ increases:**
- More nodes → smoother distribution of terminal prices
- Terminal price distribution → **lognormal** (BSM assumption)
- Binomial model **converges to BSM** for European options as $n \to \infty$

---

### Handling American Options in Multiperiod Setting

**Same backward induction rule at every node:**
$$\text{Node value} = \max(\text{Continuation value}, \text{Exercise value})$$

```
At each node, going backward through the tree:
  Continuation value = PV[π × up_value + (1-π) × down_value]
  Exercise value = max(0, S-X) for call; max(0, X-S) for put
  Node value = MAX(Continuation, Exercise)
```

---

### Summary: Expectations vs. No-Arbitrage for Binomial Models

| Approach | Applicable To | Description |
|----------|--------------|-------------|
| **Expectations (RN probability)** | European options | $c = PV_r[\pi c^+ + (1-\pi)c^-]$; fast and clean |
| **No-arbitrage (replication)** | European AND American | Hedge ratio + financing; tests early exercise at each node |

> **Interest rate options**: Always use **node-specific discount factors** — this is the critical difference from equity options where a constant risk-free rate is used throughout the tree.

---

### Exam Tips

- **Interest rate option payoffs**: $\max(0, S_T - X)$ for call; $\max(0, X - S_T)$ for put — where $S_T$ is the realized **interest rate**, not a bond price
- **Variable PV factors**: Each node has its own discount factor — don't use a single constant discount rate across nodes for interest rate options
- **$\pi = 50\%$** is a common simplifying assumption for interest rate option trees (stated in the problem)
- **Multiply by notional amount** at the end: final per-$1 values × notional = dollar option value
- **Multiperiod → BSM**: as time steps increase toward infinity, the binomial model converges to BSM for European options
- **American options in multiperiod tree**: test early exercise at **every node** on the way backward — same algorithm as two-period case, just more nodes
- **This section bridges to BSM**: the expectations approach under risk-neutral probabilities with risk-free discounting is the conceptual foundation of BSM