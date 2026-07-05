## Summary: Creating a Binomial Interest Rate Tree (CFA Level II — Fixed Income)

---

### Lognormal Volatility Structure

**Key property**: Standard deviation of the one-year rate is **proportional to the rate level**:

$$\boxed{\text{Std. dev. of one-year rate} = i_0 \times \sigma}$$

**Example**: $i_0 = 2\%$, $\sigma = 10\%$ → std. dev. = $2\% \times 10\% = 0.20\%$ (20 bps)

**Implications:**
- **Larger absolute rate moves** when rates are **high**
- **Smaller absolute rate moves** when rates are **low**
- **Negative rates impossible** — as rates approach zero, absolute changes shrink toward zero

---

### Estimating Interest Rate Volatility (σ)

| Method | Source |
|--------|--------|
| **Historical volatility** | Recent past data, assumed representative of the future |
| **Implied volatility** | Derived from market prices of interest rate derivatives (swaptions, caps, floors) |

---

### Backward Induction — Valuing a Bond on the Tree

**Process**: Start at **maturity** (bond = par + final coupon) and work **right to left** through the tree.

$$\boxed{\text{Bond value at a node} = \frac{0.5 \times (V_H + C) + 0.5 \times (V_L + C)}{1+i}}$$

Where:
- $V_H, V_L$ = bond values at the two nodes one period **ahead** (higher/lower rate path)
- $C$ = coupon payment due at the end of the period
- $i$ = one-year forward rate **at the current node** (used to discount back one period)
- **Equal probability (50/50)** assumed for up/down moves in the lognormal model

**Key insight**: This is simply discounting the **probability-weighted average** of the two possible next-period values (each including the coupon) back one period using the **current node's** rate.

---

### Worked Example — 3-Year, 5% Annual Coupon Bond (Example 3)

**Given binomial tree:**

| Time | Rate(s) |
|------|---------|
| 0 | 2% |
| 1 | 5% (up) / 3% (down) |
| 2 | 8% (HH) / 6% (HL) / 4% (LL) |

#### Step 1 — Time 3 (Maturity): Cash flow = 105 regardless of path

#### Step 2 — Time 2: Discount the Time-3 cash flow back one period at each Time-2 rate

| Time-2 Node Rate | Bond Value |
|-------------------|-----------|
| 8% | $105/1.08 = \mathbf{97.2222}$ |
| 6% | $105/1.06 = \mathbf{99.0566}$ |
| 4% | $105/1.04 = \mathbf{100.9615}$ |

#### Step 3 — Time 1: Apply backward induction formula

**At the 5% node (upper):**
$$V_{1,H} = \frac{0.5(97.2222+5) + 0.5(99.0566+5)}{1.05} = \mathbf{98.2280}$$

**At the 3% node (lower):**
$$V_{1,L} = \frac{0.5(99.0566+5) + 0.5(100.9615+5)}{1.03} = \mathbf{101.9506}$$

#### Step 4 — Time 0: Final backward induction step

$$V_0 = \frac{0.5(98.2280+5) + 0.5(101.9506+5)}{1.02} = \mathbf{103.0287}$$

---

### Visual Summary of the Process

```
Time 3 (maturity): Value = 105 (par + final coupon) at every node

Time 2: Discount Time-3 cash flow at each Time-2 rate
         → 97.2222 (8%) | 99.0566 (6%) | 100.9615 (4%)

Time 1: For each Time-1 node, average the two adjacent Time-2 values
         (each plus coupon), discount at the Time-1 rate
         → 98.2280 (5% node) | 101.9506 (3% node)

Time 0: Average the two Time-1 values (plus coupon), discount at
         Time-0 rate (2%)
         → 103.0287 (final answer)
```

---

### Why This Approach Matters

This **backward induction** methodology is the foundation for valuing bonds with **embedded options** (callable, putable bonds covered in subsequent sections):
- At each node, the bond's value can be **adjusted** for option exercise (e.g., capped at call price for callable bonds)
- The same backward induction process applies — just with a comparison step inserted at each node

---

### Exam Tips

- **Volatility scales with rate level**: $\sigma_{\text{rate}} = i_0 \times \sigma$ — higher rates → bigger absolute moves
- **Backward induction**: always start at maturity, work right to left
- **Formula**: average the two forward node values (+ coupon), discount at the **current node's** rate
- **50/50 probability** is standard assumption in the lognormal binomial tree (equal up/down probability)
- **Coupon is added** to both $V_H$ and $V_L$ before averaging — easy to forget
- **Discount rate used**: always the rate **at the node being solved for**, not the rate of the nodes being averaged
- This tree-building process is the **direct precursor** to valuing callable/putable bonds — the next logical step in the curriculum
- Practice working through multi-period trees systematically — exam loves multi-step binomial tree calculations