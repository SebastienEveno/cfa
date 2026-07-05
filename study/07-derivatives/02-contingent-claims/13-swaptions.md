---
layout: page
title: Swaptions — Black Model Application
permalink: /study/07-derivatives/02-contingent-claims/13-swaptions/
prev: /cfa/study/07-derivatives/02-contingent-claims/12-interest-rate-option/
next: /cfa/study/07-derivatives/02-contingent-claims/14-option-greeks-delta/
---
## Summary: Swaptions — Black Model Application (CFA Level II — Derivatives)

---

### What Is a Swaption?

**Swaption** = Option on a swap. Gives the holder the **right but not obligation** to enter a swap at a pre-agreed fixed rate (**exercise rate** $R_X$) at the swaption's expiration.

**Two types** (terminology focuses on the fixed rate leg):

| Swaption Type | Right to... | Profits when fixed rates... |
|--------------|-------------|----------------------------|
| **Payer swaption** | **Pay fixed**, receive floating | **Rise** (can lock in below-market fixed rate) |
| **Receiver swaption** | **Receive fixed**, pay floating | **Fall** (can lock in above-market fixed rate) |

> **Avoid "call" and "put"**: These terms are not used for swaptions to avoid confusion about the direction of the underlying.

---

### How a Payer Swaption Works at Exercise

1. Buyer exercises: enter **pay-fixed $R_X$, receive-floating** swap
2. Immediately enter offsetting: **receive-fixed $R_{FIX}$, pay-floating** at-market swap
3. Floating legs cancel → left with **annuity** = $(R_{FIX} - R_X)$ per period

> **Key insight**: Since the payoff is a series of equal payments (an annuity), swaption valuation requires a **present value of annuity (PVA) factor**, not a single discount factor.

---

### Swaption Notation

| Symbol | Meaning |
|--------|---------|
| $T$ | Swaption expiration date |
| $R_{FIX}$ | Forward swap rate (at-market rate for the swap starting at $T$) |
| $R_X$ | Exercise rate of the swaption |
| $AP$ | Accrual period (e.g., 0.25 for quarterly resets) |
| $\sigma$ | Volatility of the **forward swap rate** |
| $PVA$ | PV of an annuity matching the forward swap payment dates |
| $n$ | Number of settlement periods in the underlying swap |

**Present Value of Annuity factor:**
$$\boxed{PVA = \sum_{j=1}^{n} e^{-r t_j} \approx \sum_{j=1}^{n} \frac{1}{(1+r)^{t_j}}}$$

---

### Swaption Valuation Formulas (Black-Based)

**Payer swaption:**
$$\boxed{PAY_{SWN} = (AP) \times PVA \times [R_{FIX}N(d_1) - R_XN(d_2)]}$$

**Receiver swaption:**
$$\boxed{REC_{SWN} = (AP) \times PVA \times [R_XN(-d_2) - R_{FIX}N(-d_1)]}$$

**Where:**
$$d_1 = \frac{\ln(R_{FIX}/R_X) + (\sigma^2/2)T}{\sigma\sqrt{T}} \qquad d_2 = d_1 - \sigma\sqrt{T}$$

---

### Four Key Differences from Standard Black Model

| Feature | Black (Futures) | Swaption Model |
|---------|----------------|----------------|
| **Discount factor** | $e^{-rT}$ (single payment) | **$PVA$** (embedded annuity discounting — multiple payments) |
| **Underlying** | Futures price | **Forward swap rate $R_{FIX}$** |
| **Exercise** | Dollar price $X$ | **Exercise rate $R_X$** (annual, decimal) |
| **Accrual** | None | Multiply by **$AP$** (converts annual rate to per-period payment) |

---

### Two-Component Interpretation

| Component | Payer Swaption | Receiver Swaption |
|-----------|---------------|-------------------|
| **Swap component** | $(AP)(PVA)(R_{FIX})N(d_1)$ | $(AP)(PVA)(R_{FIX})N(-d_1)$ |
| **Bond component** | $(AP)(PVA)(R_X)N(d_2)$ | $(AP)(PVA)(R_X)N(-d_2)$ |
| **Value** | Swap − Bond | Bond − Swap |

---

### Important Equivalence Relationships

#### Swaption Combinations

| Long/Short | Equivalent To |
|-----------|--------------|
| **Long receiver + Short payer** (same $R_X$) | **Receive-fixed, pay-floating forward swap** |
| **Long payer + Short receiver** (same $R_X$) | **Receive-floating, pay-fixed forward swap** |

> When exercise rate = at-market forward swap rate → **payer swaption value = receiver swaption value** (put-call parity equivalent)

#### Swaptions and Bonds

**Long callable bond** = **Long straight bond** + **Short receiver swaption**

**Intuition**:
- Bond issuer has the right to call bonds when rates fall (refinance cheaper)
- Receiver swaption buyer has the right to receive fixed rates (valuable when rates fall)
- Both benefit from falling rates → embedded call ≈ receiver swaption
- If bond issuer sells a receiver swaption → converts callable bond to straight bond (floating received from swaption offsets floating-rate refinancing)

#### Connection to Caps and Floors

| Relationship | Equivalent |
|-------------|-----------|
| **Long cap + Short floor** (at $R_X$) | **Receive-floating, pay-fixed swap** |
| **Short cap + Long floor** (at $R_X$) | **Pay-floating, receive-fixed swap** |
| Cap and floor in swaptions | Extend to multi-period swaption payoffs |

---

### Example 16 Answer

**Setup**: Australian company with floating-rate debt; wants to buy **payer swaption** (right to pay fixed) expiring in 3 months on a 5-year swap.

- Current 3-month forward, 5-year swap rate: **2.65%**
- Current 5-year spot swap rate: 2.55%
- Current 3-month risk-free rate: 2.25%

**Q1 — What is the underlying in the Black model?**

→ **A. The underlying is the three-month forward, five-year swap rate (2.65%)**

**Why not the other answers?**
- **B wrong**: Discount rate is NOT the 5-year swap rate — the PVA uses risk-free rates; the 2.55% is the current spot swap rate (not forward rate and not the discount rate in the swaption model)
- **C wrong**: Swaption time to expiration $T$ = **0.25 years** (3 months) — NOT 5 years (which is the life of the underlying swap, not the swaption)

---

### Critical Distinctions for Swaptions

| Parameter | Correct Value | Common Mistake |
|-----------|-------------|----------------|
| **Underlying** | **Forward swap rate** $R_{FIX}$ | Using spot swap rate |
| **$T$ (time to expiration)** | **Swaption expiration** (e.g., 3 months = 0.25) | Using swap tenor (5 years) |
| **Discount factor** | **PVA** (sum of discounted annuity payments) | Single $e^{-rT}$ |
| **$\sigma$** | Volatility of **forward swap rate** | Spot rate volatility |

---

### Summary — Black Model Family

| Instrument | Underlying | $d_1$ numerator | Discount | Accrual |
|-----------|-----------|-----------------|---------|--------|
| **Equity futures options** | Futures price $F_0(T)$ | $\ln(F/X) + \sigma^2T/2$ | $e^{-rT}$ | None |
| **Interest rate options** (caps/floors) | FRA rate | $\ln(FRA/R_X) + \sigma^2t_{j-1}/2$ | $e^{-rt_j}$ | $\times AP$ |
| **Swaptions** | Forward swap rate $R_{FIX}$ | $\ln(R_{FIX}/R_X) + \sigma^2T/2$ | $PVA$ (annuity) | $\times AP$ |

---

### Exam Tips

- **Payer swaption**: right to **pay fixed** → profits when rates **rise** (like buying a call on interest rates)
- **Receiver swaption**: right to **receive fixed** → profits when rates **fall** (like buying a put on interest rates)
- **Underlying = forward swap rate** ($R_{FIX}$), NOT current spot swap rate
- **$T$ = swaption expiration**, NOT the swap tenor
- **PVA replaces $e^{-rT}$**: annuity factor accounts for multiple settlement payments over the swap's life
- **Multiply by $AP$**: converts annual rates to per-period cash flows
- **At the money**: when $R_X = R_{FIX}$ (exercise rate = forward swap rate) → payer = receiver swaption value
- **Callable bond ≈ straight bond + short receiver swaption**: the embedded call is similar to a receiver swaption (both valuable when rates fall)
- **Long payer + Short receiver = forward swap** (receive floating, pay fixed) — synthetic position using swaptions