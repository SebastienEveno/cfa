## Summary: Two-Period Binomial Model — American-Style Put Options (CFA Level II — Derivatives)

---

### Key Distinction: American vs. European Options

**European options**: Can only be exercised at expiration → value = PV of expected future payoffs (expectations approach works directly).

**American options**: Can be exercised **at any time** before expiration → must check at **each node** whether early exercise is optimal.

---

### Why American Calls on Non-Dividend-Paying Stock Are Never Exercised Early

**Core argument**: A call option always has a value **greater than its exercise value** before expiration (intrinsic value < option value).

**Intuition** (deep in-the-money call, $S = \$100$, $X = \$10$):
- Exercising now costs $\$10$ to receive stock worth $\$100$ → exercise value = $\$90$
- Keeping the call preserves optionality AND delays the $\$10$ payment until expiration
- **The call must be worth more than $\$90$** → never optimal to exercise early
- **Better alternative**: Just sell the call at its market value (> exercise value)

$$\boxed{\text{American call (non-dividend-paying stock)} = \text{European call (same terms)}}$$

---

### Why American Puts May Be Exercised Early

**For a deep in-the-money put**: Early exercise delivers the exercise price $X$ immediately, which can be **invested at the risk-free rate**.

**Trade-off:**
- **Benefit of early exercise**: Receive $X$ now → earn interest on proceeds
- **Cost of early exercise**: Give up remaining time value of the put

**When the interest earned on early exercise proceeds > time value remaining** → **early exercise is optimal.**

> This is why American puts can be worth **more than** European puts (with identical terms) — the right to exercise early has positive value.

---

### Identifying Early Exercise — The Decision Rule

**At each Time 1 (and beyond) node:**

$$\boxed{P^{\text{American}}_t = \max(\text{Continuation value}, \text{Exercise value})}$$

Where:
- **Continuation value** = $PV[\pi p^{++} + (1-\pi)p^{+-}]$ (or $PV[\pi p^{+-} + (1-\pi)p^{--}]$ for the down node)
- **Exercise value** = $\max(0, X - S_t)$

**If exercise value > continuation value** → replace continuation value with exercise value and **flag early exercise at that node**.

---

### Numerical Example — European vs. American Put

**Setup**: $S = 72$, $X = 75$, $u = 1.356$, $d = 0.541$, $r = 3\%$, $T = 2$ years

**Terminal underlying prices:**
- $S^{++} = (1.356)^2 \times 72 = 132.389$
- $S^{+-} = 1.356 \times 0.541 \times 72 = 52.819$
- $S^{--} = (0.541)^2 \times 72 = 21.067$

**Terminal put payoffs:**
- $p^{++} = \max(0, 75-132.389) = 0$
- $p^{+-} = \max(0, 75-52.819) = 22.181$
- $p^{--} = \max(0, 75-21.067) = 53.933$

**Risk-neutral probability:** $\pi = (1.03-0.541)/(1.356-0.541) = 0.60$

**At Time 1 down node** ($S^- = 0.541 \times 72 = 38.952$):

| Value | Amount |
|-------|--------|
| Continuation value | $PV[0.60(22.181) + 0.40(53.933)]/1.03 = 33.864$ |
| **Exercise value** | $\max(0, 75-38.952) = \mathbf{36.048}$ |

→ **Exercise value > Continuation value** → **American put should be exercised early at this node!**

**European put value (Time 0):**
$$p_{EUR} = \frac{0.60(8.614) + 0.40(33.864)}{1.03} = \mathbf{18.169}$$

**American put value** (replace $33.864$ with $36.048$ at the down node):
$$p_{AM} = \frac{0.60(8.614) + 0.40(36.048)}{1.03} = \mathbf{19.017}$$

---

### Early Exercise Premium

$$\boxed{\text{Early exercise premium} = P^{\text{American}} - P^{\text{European}}}$$

**In this example:**
$$\text{EEP at Time 0} = 19.017 - 18.169 = \mathbf{0.848}$$

**Decomposed:**
- EEP at the down node (Time 1): $36.048 - 33.864 = 2.184$ (the value gained by exercising early)
- This propagates back to Time 0, discounted and probability-weighted

---

### American Put Valuation Algorithm

```
Step 1: Build the full binomial tree for the underlying (S values)

Step 2: Calculate all terminal put payoffs at Time n:
         p = max(0, X - S_T) at each terminal node

Step 3: Work BACKWARD through the tree at each node:
         Continuation value = PV[π × p_up + (1-π) × p_down]
         Exercise value = max(0, X - S_t)
         Node value = MAX(Continuation, Exercise)

Step 4: If Exercise > Continuation at any node:
         → Replace with exercise value
         → Flag early exercise at that node

Step 5: Time 0 option value = the value at the root node
         Early exercise premium = P_American - P_European
```

> **Critical**: American puts **cannot** be valued directly using the two-period expectations formula $p = PV^2[\pi^2 p^{++} + 2\pi(1-\pi)p^{+-} + (1-\pi)^2 p^{--}]$ — that formula ignores early exercise and gives the European value.

---

### Example 6 Answer — American Put Early Exercise Premium

**Setup**: $S = 26$, $X = 25$, $u = 1.466$, $d = 0.656$, $r = 2.05\%$ per period

**Terminal prices:**
- $S^{++} = (1.466)^2 \times 26 = 55.878$
- $S^{+-} = 1.466 \times 0.656 \times 26 = 25.004$
- $S^{--} = (0.656)^2 \times 26 = 11.189$

**Terminal payoffs:**
- $p^{--} = \max(0, 25-11.189) = 13.811$
- $p^{+-} = \max(0, 25-25.004) = 0$
- $p^{++} = 0$

**Risk-neutral probability**: $\pi = (1.0205-0.656)/(1.466-0.656) = 0.45$

**European put value (Time 0)**: $p_{EUR} = 4.012$ (given as starting point)

**At Time 1 down node** ($S^- = 0.656 \times 26 = 17.056$):

| Value | Amount |
|-------|--------|
| Continuation value | $\frac{0.45(0) + 0.55(13.811)}{1.0205} = 7.444$ |
| **Exercise value** | $\max(0, 25-17.056) = \mathbf{7.944}$ |

→ **Exercise value > Continuation** → exercise early; replace 7.444 with **7.944**

**American put value (Time 0):**
$$p_{AM} = \frac{0.45(0) + 0.55(7.944)}{1.0205} = \frac{4.369}{1.0205} = \mathbf{4.281}$$

**Early exercise premium:**
$$EEP = 4.281 - 4.012 = \mathbf{0.269 \approx 0.27}$$

→ **Answer: A. 0.27**

**Detailed decomposition:**
- EEP at Time 1 down node: $7.944 - 7.444 = 0.500$
- EEP flows back to Time 0 via probability weighting and discounting: $0.55 \times 0.500 / 1.0205 \approx 0.27$ ✓

---

### European vs. American Option Value Comparison

| Feature | European Put | American Put |
|---------|-------------|-------------|
| **Early exercise** | Never (cannot exercise early) | Possible when exercise value > continuation value |
| **Valuation** | Expectations approach OR backward induction | **Must use backward induction** (check each node) |
| **Value** | Always ≤ American put | Always ≥ European put |
| **Early exercise premium** | = 0 | = $P_{AM} - P_{EUR} \geq 0$ |

| Feature | American Call (no dividends) | American Put |
|---------|------------------------------|-------------|
| **Early exercise** | **Never optimal** | May be optimal when deep ITM |
| **Value vs. European** | = European call | ≥ European put |

---

### Exam Tips

- **American call on non-dividend-paying stock = European call** — never exercise early (time value always positive)
- **American put can be worth more than European put** — early exercise has positive value when deep in the money
- **Early exercise is optimal** when: exercise value > continuation value at a node
- **American options require backward induction** — the expectations formula does NOT work for American puts
- **Early exercise premium**: always ≥ 0; larger when rates are higher (greater benefit from investing exercise proceeds) and when put is deeper in the money
- **Algorithm**: at each node, take the MAX of continuation value and exercise value — this is the only correct approach for American options
- **Hedge ratio changes** when early exercise is flagged (the new node value is higher, changing the hedge ratio at prior nodes)
- **If no early exercise at any node**: American put value = European put value (no benefit to Americanness)