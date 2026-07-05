## Summary: Option Greeks — Rho (CFA Level II — Derivatives)

---

### What Is Rho?

**Rho**: The change in an option's value for a given small change in the **risk-free interest rate** ($r$), holding everything else constant.

$$\boxed{\rho_c > 0 \quad \text{(Call rho is positive)}}$$
$$\boxed{\rho_p < 0 \quad \text{(Put rho is negative)}}$$

---

### Intuition — Why Call Rho is Positive

**Buying a call instead of the stock avoids the financing cost** of purchasing the stock outright:
- Call buyer pays a small premium instead of the full stock price
- The remaining capital can be **invested at the risk-free rate** and earn interest
- **Higher interest rates** → more valuable interest earned on money NOT spent on the stock → **call value increases**

$$\boxed{\uparrow r \implies \uparrow \text{Call value}}$$

---

### Intuition — Why Put Rho is Negative

**Buying a put instead of selling the stock delays receiving the sale proceeds**:
- Put buyer waits until expiration to potentially sell the stock
- This **delays earning interest** on the proceeds that would come from an immediate stock sale
- **Higher interest rates** → greater cost of delay → **put value decreases**

$$\boxed{\uparrow r \implies \downarrow \text{Put value}}$$

---

### Interest Rate Effect on Put-Call Parity

**From put-call parity**: $c - p = S_0 - e^{-rT}X$

**When $r = 0$**: $e^{-rT} = 1$ → $c - p = S_0 - X$ → For ATM options ($S_0 = X$): $c = p$

**As $r$ rises**: $e^{-rT}$ decreases → $PV(X)$ falls → right-hand side increases → $c - p$ increases → calls worth more than puts by an increasing margin

---

### Magnitude of Rho vs. Other Greeks

| Greek | Relative Impact on Option Value |
|-------|--------------------------------|
| **Vega** (volatility) | **Largest** — most significant |
| **Delta** (stock price) | Very significant |
| **Gamma** | Significant for dynamic hedging |
| **Theta** (time) | Significant, especially near expiry |
| **Rho** (interest rate) | **Smallest** — generally minor concern |

> **Rho is the least impactful Greek** in practice — interest rate changes have a **relatively small effect** on option values compared to stock price movements and volatility changes.

---

### Key Properties Summary

| Property | Call | Put |
|---------|------|-----|
| **Sign of rho** | **Positive** | **Negative** |
| **When $r$ rises** | Call value **rises** | Put value **falls** |
| **When $r$ falls** | Call value **falls** | Put value **rises** |
| **ATM at $r=0$** | $c = p$ | $c = p$ |

---

### Exam Tips

- **Rho call = positive; Rho put = negative** — the opposite signs reflect the opposite timing effects
- **Calls benefit from higher rates**: lock up less capital → earn more interest on freed-up funds
- **Puts hurt by higher rates**: delay receiving sale proceeds → lose more interest while waiting
- **Rho is the least practically important Greek** — interest rate changes have minimal impact vs. stock moves and volatility
- **At $r = 0$, ATM call = ATM put** — confirmed by put-call parity where $PV(X) = X$ when rate is zero
- **As $r$ rises**: $c - p$ gap widens (calls worth more relative to puts) — directly from put-call parity
- Unlike volatility (vega), interest rates are **observable and change slowly** — rho is generally easier to understand and manage