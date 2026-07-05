## Summary: Carry Arbitrage Model (CFA Level II — Derivatives)

---

### The Core Idea

**Carry arbitrage**: Price a forward contract by replicating its payoff — buy the underlying with borrowed funds and "carry" it to the forward's expiration date.

$$\boxed{F_0 = FV(S_0) \quad \text{(no cash flows on underlying)}}$$

**If violated**: Arbitrage profits emerge, forcing prices back to equilibrium.

---

### Case 1: No Underlying Cash Flows

**The arbitrage portfolio (Exhibit 3):**

| Position | Time 0 | Time T |
|---------|--------|--------|
| Buy underlying | $-S_0$ | $+S_T$ |
| Borrow funds | $+S_0$ | $-FV(S_0)$ |
| Short forward | $0$ | $+F_0 - S_T$ |
| **Net** | **0** | **$F_0 - FV(S_0)$** |

**For no arbitrage**: Net cash flow at T = 0, therefore:
$$\boxed{F_0 = FV(S_0) = S_0(1+r)^T}$$

**Important**: $FV(S_0)$ is the **spot price grown at the risk-free rate** — NOT the expected future spot price. Expectations of future price movements have **no bearing** on the forward price.

---

### Numerical Example

**Setup**: $S_0 = 100$, $r = 5\%$, $T = 1$ → $F_0 = 105$

**Without the forward hedge:**
- $S_T^+ = 110$: Profit = $110 - 105 = +5$
- $S_T^- = 90$: Loss = $90 - 105 = -15$
- → **Price risk exists**

**With short forward at $F_0 = 105$:**
- $S_T^+ = 110$: Forward value = $105 - 110 = -5$; Total = $110 - 5 - 105 = 0$
- $S_T^- = 90$: Forward value = $105 - 90 = +15$; Total = $90 + 15 - 105 = 0$
- → **Zero cash flow regardless of outcome** ✅

---

### Arbitrage When Forward Price Is Wrong

#### If $F_0 > FV(S_0)$ (Forward overpriced): "Carry Arbitrage"

| Step | Action | Rationale |
|------|--------|-----------|
| 1 | **Sell** the forward | Forward price too high → sell |
| 2 | **Borrow** funds at risk-free rate | Don't use own money |
| 3 | **Buy** the underlying | Offset forward exposure |

**Result**: Risk-free profit at T = $F_0 - FV(S_0) > 0$

**Example**: $F_0 = 106$, $FV(S_0) = 105$ → Profit = **+1** regardless of $S_T$

**Value of mispriced forward at Time 0**:
$$V_0 = PV[F_0 - FV(S_0)] = \frac{106-105}{1.05} = 0.9524$$

---

#### If $F_0 < FV(S_0)$ (Forward underpriced): "Reverse Carry Arbitrage"

| Step | Action | Rationale |
|------|--------|-----------|
| 1 | **Buy** the forward | Forward price too low → buy |
| 2 | **Sell short** the underlying | Offset forward exposure |
| 3 | **Lend** short sale proceeds at risk-free rate | Earn interest on proceeds |

**Result**: Risk-free profit at T = $FV(S_0) - F_0 > 0$

**Example**: $F_0 = 104$, $FV(S_0) = 105$ → Profit = **+1** regardless of $S_T$

---

### Arbitrage Mechanics Summary

| Condition | Action | Market Effect |
|-----------|--------|---------------|
| $F_0 > FV(S_0)$ | Sell forward + Buy underlying | $F_0 \downarrow$, $S_0 \uparrow$ |
| $F_0 < FV(S_0)$ | Buy forward + Short underlying | $F_0 \uparrow$, $S_0 \downarrow$ |
| $F_0 = FV(S_0)$ | No arbitrage possible | Equilibrium |

---

### Forward Value Prior to Maturity

**Timeline**: Contract initiated at Time 0; valuation at Time t; expiration at Time T.

**Strategy at Time t**: Enter an **offsetting forward** at current price $F_t$ (same expiration T).

**Cash flow at T**: $(S_T - F_0) + (F_t - S_T) = F_t - F_0$ — **no price risk** (S_T cancels)

$$\boxed{V_t(\text{long}) = PV[F_t - F_0] = \frac{F_t - F_0}{(1+r)^{T-t}}}$$

**Equivalently** (substituting $F_t = S_t(1+r)^{T-t}$):
$$\boxed{V_t(\text{long}) = S_t - PV[F_0] = S_t - \frac{F_0}{(1+r)^{T-t}}}$$

**Short forward value**:
$$\boxed{-V_t = \frac{F_0 - F_t}{(1+r)^{T-t}} = PV[F_0] - S_t}$$

---

### Example 2 Answer

**Setup**: $F_0 = 105$, $T-t = 0.25$ (3 months remaining), $S_{0.75} = 110$, $r = 5\%$

$$F_t = 110 \times (1.05)^{0.25} = 111.34$$

$$V_t = \frac{111.34 - 105}{(1.05)^{0.25}} = \frac{6.34}{1.0123} \approx \mathbf{6.27}$$

→ **Answer: B. 6.27**

---

### Case 2: Underlying Has Cash Flows (Dividends, Coupons)

**General carry arbitrage model:**
$$\boxed{F_0 = FV(S_0 + CC_0 - CB_0)}$$

| Component | Symbol | Effect on $F_0$ | Examples |
|-----------|--------|-----------------|---------|
| **Carry Costs** | $CC_0$ | **Increase** $F_0$ | Storage, insurance, spoilage (commodities) |
| **Carry Benefits** | $CB_0$ | **Decrease** $F_0$ | Dividends (equities), coupons (bonds), foreign interest |

**Financing cost ($r$)**: Always a carry cost (opportunity cost of capital tied up in the position) — already incorporated in $FV(S_0)$.

**Simplified with no explicit carry costs ($CC_0 = 0$):**
$$\boxed{F_0 = FV(S_0) - FV(CB_0) = FV(S_0 - PV(\text{Benefits}))}$$

---

### Dividend-Paying Stock Forward Pricing

$$\boxed{F_0 = FV(S_0 - PV(D)) = FV(S_0) - FV(D)}$$

**Key subtlety**: The future value of the dividend is compounded only from the **dividend payment date** to the **forward expiration date** (not the full period):
$$FV(D) = D(1+r)^{T-t_D} \quad \text{where } t_D = \text{dividend payment date}$$

---

### Example 3 Answer

**Setup**: $S_0 = \$1,000$, $D = \$10$ in 2 months, $r = 5\%$, $T = 3$ months

$$PV(D) = \frac{10}{(1.05)^{2/12}} = 9.919$$

$$F_0 = FV(S_0 - PV(D)) = (1,000 - 9.919)(1.05)^{3/12} = 990.081 \times 1.01227 = \mathbf{\$1,002.23}$$

→ **Answer: A. $1,002.23**

**Q2**: If dividend paid in 1 month instead of 2 months → **PV(D) is larger** (less discounting) → $S_0 - PV(D)$ is **smaller** → $F_0$ **decreases**.
→ **Answer: A. Decrease**

---

### Forward Value with Cash Flows

$$\boxed{V_t = PV[F_t - F_0]}$$

Where both $F_t$ and $F_0$ already incorporate carry costs and benefits:
$$F_t = FV(S_t + CC_t - CB_t) \qquad F_0 = FV(S_0 + CC_0 - CB_0)$$

---

### Example 4 Answer

**Setup**: $F_0 = ₡1,000$, $S_{0.583} = ₡1,050$, $PV(CC) = ₡4.00$, $PV(CB) = ₡28.00$, $r = 2\%$, $T-t = 5/12$

$$F_t = FV(S_t + CC_t - CB_t) = (1,050 + 4 - 28)(1.02)^{5/12} = 1,026 \times 1.00829 = ₡1,034.51$$

$$V_t = \frac{F_t - F_0}{(1.02)^{5/12}} = \frac{1,034.51 - 1,000}{1.00829} = \frac{34.51}{1.00829} \approx \mathbf{₡34.22}$$

→ **Answer: A. ₡34.22**

---

### Stock Index with Continuous Compounding

For large indexes with many dividend-paying stocks:

**Continuous dividend yield assumption** ($\delta_c$ = continuous dividend yield):
$$\boxed{F_0 = S_0 e^{(r_c - \delta_c)T}}$$

More generally with carry costs and benefits (all continuously compounded):
$$\boxed{F_0 = (S_0 + CC_0 - CB_0)e^{r_c T}}$$

**Rationale**: Dividends accrue continuously across many stocks in the index — a reasonable approximation for broad market indices.

---

### Example 1 Answers

**Setup**: $S_0 = A\$63.31$, $r = 2.75\%$, $T = 3/12 = 0.25$, no dividends

$$F_0 = 63.31 \times (1.0275)^{0.25} = 63.31 \times 1.00683 = \mathbf{A\$63.74}$$

→ **Q1: Answer: B. A$63.74**

**Q2**: Interest rate falls to 2.25% → $FV(S_0)$ is smaller → $F_0$ **decreases**
→ **Answer: A. Decrease**

---

### Key Formula Reference Card

| Situation | Forward Price $F_0$ | Forward Value $V_t$ (Long) |
|-----------|---------------------|---------------------------|
| No cash flows | $S_0(1+r)^T$ | $S_t - F_0/(1+r)^{T-t}$ |
| With dividends (discrete) | $FV(S_0 - PV(D))$ | $PV[F_t - F_0]$ |
| With carry costs/benefits | $FV(S_0 + CC_0 - CB_0)$ | $PV[F_t - F_0]$ |
| Continuous compounding | $S_0 e^{(r_c - \delta_c)T}$ | $S_t e^{-\delta_c(T-t)} - F_0 e^{-r_c(T-t)}$ |

---

### Exam Tips

- **$F_0 = FV(S_0)$** is the foundational no-arbitrage forward price — memorize it
- **Carry benefits (dividends, coupons) reduce $F_0$**; carry costs (storage) increase $F_0$
- **Dividend timing matters**: earlier dividend → larger PV(D) → lower $F_0$
- **Forward value at initiation = 0**; changes as spot price and time evolve
- **$V_t = PV[F_t - F_0]$** — forward value = PV of difference in forward prices (current vs. initial)
- **Equivalently**: $V_t = S_t - PV[F_0]$ — easier when spot price is observable
- **Carry arbitrage** ($F_0 > FV$): sell forward + buy spot; **Reverse carry** ($F_0 < FV$): buy forward + short spot
- **Expectations don't matter for forward pricing** — only current spot, interest rate, carry costs/benefits, and time to expiration
- **Continuous compounding**: $F_0 = S_0 e^{(r_c - \delta_c)T}$ — used for stock index forwards