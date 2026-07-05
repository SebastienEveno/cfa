## Summary: Black Option Valuation Model — European Options on Futures (CFA Level II — Derivatives)

---

### The Black Model (1976)

**Fischer Black** introduced a modified BSM model for options on **underlying instruments that are costless to carry** — specifically:
- **Options on futures contracts** (equity index futures, commodity futures)
- **Options on forward contracts** (interest rate options: caps, floors, swaptions)

**Why a different model?** Futures contracts have **no carry costs or benefits** — the futures price already reflects the full cost of carry (via the carry arbitrage model). This simplifies the valuation by eliminating the need for a separate carry benefit adjustment.

---

### Black Model Formulas

$$\boxed{c = e^{-rT}[F_0(T)N(d_1) - XN(d_2)]} \quad \text{(Call)}$$

$$\boxed{p = e^{-rT}[XN(-d_2) - F_0(T)N(-d_1)]} \quad \text{(Put)}$$

**Where:**
$$d_1 = \frac{\ln[F_0(T)/X] + (\sigma^2/2)T}{\sigma\sqrt{T}} \qquad d_2 = d_1 - \sigma\sqrt{T}$$

**Key notation:**
- $F_0(T)$ = **futures price** at Time 0 for a contract expiring at Time T
- $X$ = exercise price
- $r$ = continuously compounded risk-free rate
- $\sigma$ = volatility of the **futures price** (not the spot price)
- $e^{-rT}$ = present value factor discounting back from expiration

---

### Black vs. BSM — The Key Difference

| Feature | BSM Model | Black Model |
|---------|-----------|-------------|
| **Underlying** | Spot price $S$ | Futures price $F_0(T)$ |
| **Carry benefit** | $-\gamma$ in $d_1$ (dividends, foreign rate) | **None** (already in futures price) |
| **$d_1$ formula** | $[\ln(S/X) + (r-\gamma+\sigma^2/2)T]/(\sigma\sqrt{T})$ | $[\ln(F_0(T)/X) + (\sigma^2/2)T]/(\sigma\sqrt{T})$ |
| **Structure** | $SN(d_1) - e^{-rT}XN(d_2)$ | $e^{-rT}[F_0(T)N(d_1) - XN(d_2)]$ |

**Intuition**: Replacing $S$ with $F_0(T)$ and setting carry benefit $\gamma = r$ in BSM reduces to the Black model — because a futures contract's full price is already the carry-adjusted spot price.

Mathematically: BSM with $\gamma = r$ → $Se^{-\gamma T} = Se^{-rT} = e^{-rT}F_0(T)/e^{-rT} = F_0(T)e^{-rT}$... which gives Black model structure.

---

### Two-Component Interpretation

**Call option:**
- **Futures component**: $F_0(T)e^{-rT}N(d_1)$
- **Bond component**: $e^{-rT}XN(d_2)$
- **Call value** = Futures component − Bond component

**Put option:**
- **Futures component**: $F_0(T)e^{-rT}N(-d_1)$
- **Bond component**: $e^{-rT}XN(-d_2)$
- **Put value** = Bond component − Futures component

**Alternative interpretation**: Black model = PV of the difference between futures price and exercise price, appropriately weighted by $N(d)$ functions.

---

### Futures Option Put-Call Parity

$$\boxed{c = e^{-rT}[F_0(T) - X] + p}$$

**Rearranged**: $c - p = e^{-rT}[F_0(T) - X]$

> Note: Unlike standard put-call parity ($S + p = PV(X) + c$), the futures version discounts the **entire payoff** including the futures price (since futures require no upfront investment).

---

### $N(d_1)$ and $N(d_2)$ Interpretation

| Term | Interpretation |
|------|----------------|
| $N(d_1)$ | Hedge ratio — units of futures contract per option |
| $N(d_2)$ | RN probability that the call expires in-the-money ($F_T > X$) |
| $N(-d_2)$ | RN probability that the put expires in-the-money ($F_T < X$) |

---

### Example 14 — S&P 500 Index Futures Options

**Setup**:
- Spot S&P 500 = 1,860
- **Futures price** $F_0(T) = 1,851.65$ (0.25-year contract)
- $X = 1,860$, $r = 0.2\%$, $T = 0.25$, $\sigma = 15\%$, $\delta = 2\%$ (dividend yield)

> Note: dividend yield does NOT appear in the Black model (it's already embedded in the futures price via carry arbitrage).

**Given values**: $N(d_1) = 0.491$, $N(d_2) = 0.461$, $N(-d_1) = 0.509$, $N(-d_2) = 0.539$

**Results**: $c = \$51.41$, $p = \$59.76$

---

**Q1 — Call option description:**

$$c = e^{-rT}[F_0(T)N(d_1) - XN(d_2)] = e^{-0.002 \times 0.25}[1,851.65 \times 0.491 - 1,860 \times 0.461]$$

→ **Answer: B** — "Call value = PV of (futures price × 0.491 − exercise price × 0.461)"

> Trap: Option C uses spot price 1,860 — **wrong**; Black model uses **futures price** 1,851.65.

---

**Q2 — Put option description:**

$$p = e^{-rT}[XN(-d_2) - F_0(T)N(-d_1)] = e^{-0.002 \times 0.25}[1,860 \times 0.539 - 1,851.65 \times 0.509]$$

→ **Answer: A** — "Put value = PV of (exercise price × 0.539 − futures price × 0.509)"

---

**Q3 — Underlying and exercise price:**
- **Underlying** = **futures price** = 1,851.65 (NOT the spot price 1,860)
- **Exercise price** = 1,860

→ **Answer: A. 1,851.65; 1,860**

> **Critical exam insight**: When valuing futures options with the Black model, the **futures price replaces the spot price** as the underlying. Never use the spot price in the Black model for futures options.

---

### Why Futures Price ≠ Spot Price Here

$F_0(T) = Se^{(r-\delta)T} = 1,860 \times e^{(0.002-0.02) \times 0.25} = 1,860 \times e^{-0.0045} = 1,851.65$

The futures price is **below spot** because the dividend yield (2%) exceeds the risk-free rate (0.2%) — the carry benefit exceeds the carry cost → futures trades at a discount to spot.

This is all automatically captured in $F_0(T)$ — no further carry adjustment needed in the Black model.

---

### Key Formula Reference Card

| Model | Call | Put |
|-------|------|-----|
| **BSM (no dividends)** | $SN(d_1) - e^{-rT}XN(d_2)$ | $e^{-rT}XN(-d_2) - SN(-d_1)$ |
| **BSM (with dividends)** | $Se^{-\delta T}N(d_1) - e^{-rT}XN(d_2)$ | $e^{-rT}XN(-d_2) - Se^{-\delta T}N(-d_1)$ |
| **Black (futures)** | $e^{-rT}[F_0(T)N(d_1) - XN(d_2)]$ | $e^{-rT}[XN(-d_2) - F_0(T)N(-d_1)]$ |

**$d_1$ comparison:**
- BSM: $d_1 = [\ln(S/X) + (r-\gamma+\sigma^2/2)T]/(\sigma\sqrt{T})$
- Black: $d_1 = [\ln(F_0(T)/X) + \sigma^2 T/2]/(\sigma\sqrt{T})$ ← no $r$ or $\gamma$ in numerator

---

### Exam Tips

- **Black model underlying = futures price** $F_0(T)$, NOT the spot price $S$
- **No carry adjustment** in Black model — futures price already embeds all carry costs and benefits
- **$d_1$ in Black model**: only $\sigma^2/2$ in the numerator (no $r$ or $\gamma$) — simpler than BSM
- **All terms multiplied by $e^{-rT}$** in Black model — different structure from BSM
- **Futures put-call parity**: $c = e^{-rT}[F_0(T)-X] + p$ — discount the entire payoff
- **$N(d_2)$ = RN probability call is ITM at expiration** — same interpretation as BSM
- **When $F_0(T) < X$**: call is out-of-the-money, put is in-the-money (compare futures price to strike)
- **Next applications of Black model**: interest rate caps, floors, and swaptions (covered in next section) — same formula, different underlying