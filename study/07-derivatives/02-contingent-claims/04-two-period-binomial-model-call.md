## Summary: Two-Period Binomial Model — Call Options (CFA Level II — Derivatives)

---

### Two-Period Binomial Structure

**The two-period lattice = three one-period lattices solved sequentially:**
- **Box 1**: Time 1 (up node) → Time 2
- **Box 2**: Time 1 (down node) → Time 2
- **Box 3**: Time 0 → Time 1 (uses results from Box 1 and Box 2)

**Process**: Work **backward** through the tree (backward induction).

---

### Recombining Lattice — Why It Matters

**Recombining condition**: $S^{+-} = S^{-+}$ (up then down = down then up)

**Mathematically**: $u \times d \times S = d \times u \times S$ ✓ (always true when $u$ and $d$ are constant)

**Computational advantage:**
- **Recombining** ($n$ periods): $n+1$ terminal nodes → manageable
- **Non-recombining** ($n$ periods): $2^n$ terminal nodes → computationally explosive

---

### Terminal Values at Time 2

**Underlying prices:**

| Path | Price |
|------|-------|
| Up-Up | $S^{++} = u^2 S$ |
| Up-Down = Down-Up | $S^{+-} = udS$ |
| Down-Down | $S^{--} = d^2 S$ |

**Call payoffs at expiration:**
$$\boxed{c^{++} = \max(0, u^2S - X)} \qquad c^{+-} = \max(0, udS - X) \qquad c^{--} = \max(0, d^2S - X)$$

**Put payoffs at expiration:**
$$\boxed{p^{++} = \max(0, X - u^2S)} \qquad p^{+-} = \max(0, X - udS) \qquad p^{--} = \max(0, X - d^2S)$$

---

### Two Key Concepts: Self-Financing and Dynamic Replication

**Dynamic replication**: Option payoffs can be **exactly replicated** through a planned trading strategy that adjusts the hedge ratio at each node.

**Self-financing**: The replicating portfolio **requires no additional external cash** from the arbitrageur. Any increase in shares needed (due to changing hedge ratio) is funded by **additional borrowing** — all within the existing portfolio structure.

---

### Valuation Method 1: No-Arbitrage (Backward Induction)

**Step 1**: Compute all terminal payoffs at Time 2.

**Step 2**: At each Time 1 node, apply the one-period model:
$$h^+ = \frac{c^{++} - c^{+-}}{S^{++} - S^{+-}} \qquad h^- = \frac{c^{+-} - c^{--}}{S^{+-} - S^{--}}$$

$$c^+ = h^+S^+ + PV(-h^+S^{+-} + c^{+-}) \qquad c^- = h^-S^- + PV(-h^-S^{--} + c^{--})$$

**Step 3**: At Time 0, apply the one-period model again using $c^+$ and $c^-$:
$$h = \frac{c^+ - c^-}{S^+ - S^-} \qquad c = hS + PV(-hS^- + c^-)$$

---

### Valuation Method 2: Expectations Approach (Faster)

**Risk-neutral probability** (same formula as before):
$$\boxed{\pi = \frac{(1+r) - d}{u - d}}$$

**Two-period call value:**
$$\boxed{c = PV^2[\pi^2 c^{++} + 2\pi(1-\pi)c^{+-} + (1-\pi)^2 c^{--}]}$$

$$\boxed{c = \frac{\pi^2 c^{++} + 2\pi(1-\pi)c^{+-} + (1-\pi)^2 c^{--}}{(1+r)^2}}$$

**Two-period put value:**
$$\boxed{p = \frac{\pi^2 p^{++} + 2\pi(1-\pi)p^{+-} + (1-\pi)^2 p^{--}}{(1+r)^2}}$$

**Path probability interpretation:**
| Path | Probability |
|------|------------|
| Up-Up | $\pi^2$ |
| Up-Down or Down-Up | $2\pi(1-\pi)$ (two paths, same end node) |
| Down-Down | $(1-\pi)^2$ |

> **The factor of 2** in $2\pi(1-\pi)$ reflects the two paths leading to the same middle node in the recombining lattice.

---

### Worked Example — Two-Period Call Verification

**Setup**: $S = 72$, $u = 1.356$, $d = 0.541$, $r = 3\%$, $X = 75$

**Terminal underlying prices:**
- $S^{++} = (1.356)^2 \times 72 = 132.389$
- $S^{+-} = 1.356 \times 0.541 \times 72 = 52.819$
- $S^{--} = (0.541)^2 \times 72 = 21.067$

**Terminal call payoffs:**
- $c^{++} = \max(0, 132.389-75) = 57.389$
- $c^{+-} = \max(0, 52.819-75) = 0$
- $c^{--} = \max(0, 21.067-75) = 0$

**Risk-neutral probability:**
$$\pi = \frac{1.03 - 0.541}{1.356 - 0.541} = \frac{0.489}{0.815} = 0.60$$

**Call at Time 1 (up node):**
$$c^+ = \frac{0.60(57.389) + 0.40(0)}{1.03} = \frac{34.433}{1.03} = 33.430$$

**Call at Time 1 (down node):**
$$c^- = \frac{0.60(0) + 0.40(0)}{1.03} = 0$$

**Call at Time 0:**
$$c = \frac{0.60(33.430) + 0.40(0)}{1.03} = \frac{20.058}{1.03} = \mathbf{19.47}$$

**Or directly using two-period formula:**
$$c = \frac{(0.60)^2(57.389) + 2(0.60)(0.40)(0) + (0.40)^2(0)}{(1.03)^2} = \frac{0.36(57.389)}{1.0609} = \mathbf{19.47} ✓$$

---

### Dynamic Replication Verification (Self-Financing)

**At Time 0**: $h = 0.56971$; Buy 0.56971 shares at 72 = $41.019$; Borrow $21.545$

**After up move to Time 1**:
- Stock position worth: $0.56971 \times 97.632 = 55.622$
- Loan outstanding: $1.03 \times 21.545 = 22.191$
- **Portfolio value: $55.622 - 22.191 = 33.431 \approx c^+ = 33.430$ ✓**

**Rebalancing at Time 1 (up node)**: New hedge ratio = $0.72124$ (higher than 0.56971)
- Need more shares → funded by **additional borrowing** (self-financing)
- New total borrowing: $36.986$; reflects new hedge requirements
- **No external capital required** → portfolio is self-financing ✓

---

### Example 5 Answers — Two-Period European Call & Put

**Setup**: $S = €50$, $X = €50$, $r = 5\%$, $u = 1.356$, $d = 0.744$, $T = 2$ years

**Q1 — Risk-neutral probability:**
$$\pi = \frac{1.05 - 0.744}{1.356 - 0.744} = \frac{0.306}{0.612} = \mathbf{0.50 = 50\%}$$

→ **Answer: C. 50%**

**Terminal underlying prices:**
- $S^{++} = (1.356)^2 \times 50 = 91.937$
- $S^{+-} = 1.356 \times 0.744 \times 50 = 50.443$
- $S^{--} = (0.744)^2 \times 50 = 27.673$

**Call payoffs:**
- $c^{++} = \max(0, 91.937-50) = 41.937$
- $c^{+-} = \max(0, 50.443-50) = 0.443$
- $c^{--} = \max(0, 27.673-50) = 0$

**Q2 — Call value:**
$$c = \frac{(0.50)^2(41.937) + 2(0.50)(0.50)(0.443) + (0.50)^2(0)}{(1.05)^2}$$
$$= \frac{0.25(41.937) + 0.50(0.443)}{1.1025} = \frac{10.484 + 0.222}{1.1025} = \frac{10.706}{1.1025} = \mathbf{€9.71}$$

→ **Answer: B. €9.71**

**Put payoffs:**
- $p^{++} = \max(0, 50-91.937) = 0$
- $p^{+-} = \max(0, 50-50.443) = 0$
- $p^{--} = \max(0, 50-27.673) = 22.327$

**Q3 — Put value:**
$$p = \frac{(0.50)^2(0) + 2(0.50)(0.50)(0) + (0.50)^2(22.327)}{(1.05)^2}$$
$$= \frac{0.25(22.327)}{1.1025} = \frac{5.582}{1.1025} = \mathbf{€5.06}$$

→ **Answer: A. €5.06**

**Verify via put-call parity:**
$$p = c - S + PV(X) = 9.71 - 50 + \frac{50}{1.1025} = 9.71 - 50 + 45.35 = €5.06 ✓$$

---

### Key Formula Reference Card

| Item | Formula |
|------|---------|
| **Risk-neutral probability** | $\pi = [(1+r)-d]/(u-d)$ |
| **Terminal call payoffs** | $c^{++} = \max(0,u^2S-X)$; $c^{+-}=\max(0,udS-X)$; $c^{--}=\max(0,d^2S-X)$ |
| **Two-period call (expectations)** | $[\pi^2 c^{++} + 2\pi(1-\pi)c^{+-} + (1-\pi)^2 c^{--}]/(1+r)^2$ |
| **Two-period put (expectations)** | $[\pi^2 p^{++} + 2\pi(1-\pi)p^{+-} + (1-\pi)^2 p^{--}]/(1+r)^2$ |
| **Put-call parity** | $S + p = PV(X) + c$ |

---

### Exam Tips

- **Two-period expectations formula**: don't forget the **factor of 2** in $2\pi(1-\pi)$ for the middle node — it reflects two paths
- **Discount factor is $(1+r)^2$** for two periods — easy to forget vs. single period
- **Same $\pi$ throughout the tree** when $u$, $d$, and $r$ are constant
- **Self-financing verification**: compare old portfolio value + accrued borrowing to new portfolio at each node — they should match without external funds
- **Dynamic replication**: hedge ratio changes at each node — this is the "dynamic" part requiring rebalancing
- **Recombining lattice is essential** for computational efficiency — confirms why $u \times d = d \times u$ (constant $u$, $d$) is a key assumption
- **Expectations approach is faster** for exam calculations — use it instead of full backward induction when possible
- **Both methods give identical answers** — use no-arbitrage to understand the economics; use expectations for speed