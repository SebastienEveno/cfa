---
layout: page
title: "Formula Summary: Valuation of Contingent Claims (CFA Level II — Derivatives)"
permalink: /study/07-derivatives/02-contingent-claims/21-formula-summary/
prev: /cfa/study/07-derivatives/02-contingent-claims/19-implied-volatility/
---
# Formula Summary: Valuation of Contingent Claims (CFA Level II — Derivatives)

---

## 1. Option Payoffs and Bounds

### At Expiration (Intrinsic Value)

$$\boxed{c_T = \max(0, S_T - X)} \qquad p_T = \max(0, X - S_T)$$

### Option Price Decomposition

$$\text{Option price} = \text{Intrinsic value} + \text{Time value}$$

| Component | Call | Put |
|-----------|------|-----|
| Intrinsic value | $\max(0, S_t - X)$ | $\max(0, X - S_t)$ |
| Time value | Always $\geq 0$ | Always $\geq 0$ |

### Put-Call Parity (European options)

$$\boxed{S + p = PV(X) + c} \qquad \text{i.e., } S + p = e^{-rT}X + c$$

Rearrangements:
$$c = S - PV(X) + p \qquad p = c - S + PV(X)$$

Carry-adjusted form:
$$\boxed{p + Se^{-\gamma T} = c + e^{-rT}X}$$

---

## 2. One-Period Binomial Model

### Underlying Price Moves

$$S^+ = u \times S \qquad S^- = d \times S$$

### Approach 1 — No-Arbitrage Replication

**Hedge ratio:**

$$\boxed{h = \frac{c^+ - c^-}{S^+ - S^-}} \quad \text{(same pattern for puts)}$$

**Option value:**

$$\boxed{c = hS + PV(-hS^- + c^-)}$$
$$\boxed{p = hS + PV(-hS^- + p^-)}$$

### Approach 2 — Risk-Neutral Probability (Expectations)

**Risk-neutral probability of up move:**

$$\boxed{\pi = \frac{(1+r) - d}{u - d}}$$

**Call and put values:**

$$\boxed{c = \frac{\pi c^+ + (1-\pi)c^-}{1+r}} \qquad \boxed{p = \frac{\pi p^+ + (1-\pi)p^-}{1+r}}$$

| Replicating Portfolio | Underlying | Financing |
|-----------------------|------------|-----------|
| Long call | Buy $h$ units (long) | Borrow $PV(-hS^- + c^-)$ |
| Long put | Short $|h|$ units | Lend $PV(-hS^- + p^-)$ |

---

## 3. Two-Period Binomial Model

### Terminal Underlying Prices

$$S^{++} = u^2 S \qquad S^{+-} = udS \qquad S^{--} = d^2 S$$

### Terminal Payoffs

$$c^{++} = \max(0, u^2S - X) \quad c^{+-} = \max(0, udS - X) \quad c^{--} = \max(0, d^2S - X)$$
$$p^{++} = \max(0, X - u^2S) \quad p^{+-} = \max(0, X - udS) \quad p^{--} = \max(0, X - d^2S)$$

### Two-Period Expectations Formula (European only)

$$\boxed{c = \frac{\pi^2 c^{++} + 2\pi(1-\pi)c^{+-} + (1-\pi)^2 c^{--}}{(1+r)^2}}$$

$$\boxed{p = \frac{\pi^2 p^{++} + 2\pi(1-\pi)p^{+-} + (1-\pi)^2 p^{--}}{(1+r)^2}}$$

| Path | Probability |
|------|------------|
| Up-Up | $\pi^2$ |
| Up-Down or Down-Up | $2\pi(1-\pi)$ |
| Down-Down | $(1-\pi)^2$ |

### Backward Induction (Time 1 nodes)

$$c^+ = \frac{\pi c^{++} + (1-\pi)c^{+-}}{1+r} \qquad c^- = \frac{\pi c^{+-} + (1-\pi)c^{--}}{1+r}$$

---

## 4. American Options and Early Exercise

### Decision Rule at Each Node

$$\boxed{P^{\text{American}}_t = \max(\text{Continuation value},\ \text{Exercise value})}$$

**Exercise value** = $\max(0, X - S_t)$ for put; $\max(0, S_t - X)$ for call

**Early exercise premium:**

$$\boxed{EEP = P^{\text{American}} - P^{\text{European}} \geq 0}$$

| Option | Dividends | Early Exercise? |
|--------|-----------|----------------|
| American call | No | Never optimal |
| American call | Yes | May be optimal to capture dividend |
| American put | Either | May be optimal when deep ITM |

---

## 5. Dividends in the Binomial Model (Escrow Method)

$$\boxed{\hat{S} = S - \gamma}$$

Where $\gamma$ = PV of dividends paid during the option's life; model the binomial tree using $\hat{S}$ (ex-dividend component).

---

## 6. Black-Scholes-Merton (BSM) Model

### Core Formulas

$$\boxed{c = SN(d_1) - e^{-rT}XN(d_2)} \quad \text{(Call, no dividends)}$$

$$\boxed{p = e^{-rT}XN(-d_2) - SN(-d_1)} \quad \text{(Put, no dividends)}$$

### $d_1$ and $d_2$

$$\boxed{d_1 = \frac{\ln(S/X) + (r + \sigma^2/2)T}{\sigma\sqrt{T}}} \qquad \boxed{d_2 = d_1 - \sigma\sqrt{T}}$$

### Replicating Portfolio (BSM)

| | Call | Put |
|-|------|-----|
| Shares ($n_S$) | $+N(d_1)$ (long) | $-N(-d_1)$ (short) |
| Bonds ($n_B$) | $-N(d_2)$ (borrow) | $+N(-d_2)$ (lend) |
| Bond price | $e^{-rT}X$ | $e^{-rT}X$ |

**Call** = leveraged long stock position; **Put** = short stock + lending.

### Key Interpretations

$$N(d_2) = \text{RN probability call expires ITM} \qquad N(-d_2) = \text{RN probability put expires ITM}$$

$$N(d_1) = \text{Hedge ratio (BSM analog of } h \text{ in binomial)}$$

---

## 7. BSM with Carry Benefits

### General Carry-Adjusted Formulas

$$\boxed{c = Se^{-\gamma T}N(d_1) - e^{-rT}XN(d_2)}$$

$$\boxed{p = e^{-rT}XN(-d_2) - Se^{-\gamma T}N(-d_1)}$$

$$d_1 = \frac{\ln(S/X) + (r - \gamma + \sigma^2/2)T}{\sigma\sqrt{T}} \qquad d_2 = d_1 - \sigma\sqrt{T}$$

### Applications by Underlying

| Underlying | Carry Benefit $\gamma$ | Risk-Free Rate $r$ |
|-----------|------------------------|-------------------|
| Non-dividend stock | $0$ | Risk-free rate |
| Dividend-paying stock | $\delta$ (continuous dividend yield) | Risk-free rate |
| Foreign currency | $r_f$ (foreign rate) | $r_d$ (domestic rate) |

### Dividend-Paying Stock

$$c = Se^{-\delta T}N(d_1) - e^{-rT}XN(d_2)$$

$$p = e^{-rT}XN(-d_2) - Se^{-\delta T}N(-d_1)$$

### Currency Options

$$c = Se^{-r_f T}N(d_1) - e^{-r_d T}XN(d_2)$$

$$p = e^{-r_d T}XN(-d_2) - Se^{-r_f T}N(-d_1)$$

| Model | Call | Put |
|-------|------|-----|
| No dividends | $SN(d_1) - e^{-rT}XN(d_2)$ | $e^{-rT}XN(-d_2) - SN(-d_1)$ |
| With dividends $\delta$ | $Se^{-\delta T}N(d_1) - e^{-rT}XN(d_2)$ | $e^{-rT}XN(-d_2) - Se^{-\delta T}N(-d_1)$ |
| Currency | $Se^{-r_f T}N(d_1) - e^{-r_d T}XN(d_2)$ | $e^{-r_d T}XN(-d_2) - Se^{-r_f T}N(-d_1)$ |

---

## 8. Black Model (Options on Futures)

### Formulas

$$\boxed{c = e^{-rT}[F_0(T)N(d_1) - XN(d_2)]}$$

$$\boxed{p = e^{-rT}[XN(-d_2) - F_0(T)N(-d_1)]}$$

$$d_1 = \frac{\ln[F_0(T)/X] + (\sigma^2/2)T}{\sigma\sqrt{T}} \qquad d_2 = d_1 - \sigma\sqrt{T}$$

**Note**: No $r$ or $\gamma$ in numerator of $d_1$ — carry costs already embedded in futures price.

### Futures Put-Call Parity

$$\boxed{c = e^{-rT}[F_0(T) - X] + p}$$

---

## 9. Interest Rate Options (Standard Market Model)

**Underlying** = FRA rate; payment made in arrears at $t_j = t_{j-1} + t_m$.

### Call on Interest Rate (Caplet)

$$\boxed{c = (AP) \times e^{-r t_j} \times [FRA(0,t_{j-1},t_m)N(d_1) - R_X N(d_2)]}$$

### Put on Interest Rate (Floorlet)

$$\boxed{p = (AP) \times e^{-r t_j} \times [R_X N(-d_2) - FRA(0,t_{j-1},t_m)N(-d_1)]}$$

$$d_1 = \frac{\ln[FRA/R_X] + (\sigma^2/2)t_{j-1}}{\sigma\sqrt{t_{j-1}}} \qquad d_2 = d_1 - \sigma\sqrt{t_{j-1}}$$

| Symbol | Meaning |
|--------|---------|
| $AP$ | Accrual period (e.g., $90/360$) |
| $FRA(0,t_{j-1},t_m)$ | Forward rate (underlying) |
| $R_X$ | Exercise rate |
| $t_{j-1}$ | Time to option expiration (used in $d_1$, $d_2$) |
| $t_j$ | Time to payment date (used in discount factor) |

### Caps and Floors

| Instrument | Components | Hedges |
|-----------|------------|--------|
| **Cap** | Strip of caplets (calls) | Floating-rate borrowers |
| **Floor** | Strip of floorlets (puts) | Floating-rate lenders |
| At swap rate | Cap value = Floor value | — |

---

## 10. Swaptions (Black Model)

### Formulas

**Payer swaption** (right to pay fixed $R_X$):

$$\boxed{PAY_{SWN} = (AP) \times PVA \times [R_{FIX}N(d_1) - R_XN(d_2)]}$$

**Receiver swaption** (right to receive fixed $R_X$):

$$\boxed{REC_{SWN} = (AP) \times PVA \times [R_XN(-d_2) - R_{FIX}N(-d_1)]}$$

$$d_1 = \frac{\ln(R_{FIX}/R_X) + (\sigma^2/2)T}{\sigma\sqrt{T}} \qquad d_2 = d_1 - \sigma\sqrt{T}$$

$$PVA = \sum_{j=1}^{n} e^{-r t_j}$$

| Symbol | Meaning |
|--------|---------|
| $R_{FIX}$ | **Forward swap rate** (underlying) |
| $R_X$ | Exercise rate of swaption |
| $T$ | **Swaption expiration** (not swap tenor) |
| $PVA$ | PV of annuity over the swap's remaining cash flow dates |

### Black Model Family — Comparison

| Instrument | Underlying | Discount Factor | Accrual |
|-----------|-----------|-----------------|---------|
| Futures options | $F_0(T)$ | $e^{-rT}$ | None |
| IR options (caps/floors) | FRA rate | $e^{-rt_j}$ (to payment) | $\times AP$ |
| Swaptions | Forward swap rate $R_{FIX}$ | $PVA$ (annuity) | $\times AP$ |

---

## 11. Option Greeks

### Delta

$$\boxed{\Delta_c = e^{-\delta T}N(d_1)} \qquad \boxed{\Delta_p = -e^{-\delta T}N(-d_1)}$$

**Delta approximation:**

$$\tilde{c} \approx c + \Delta_c(S' - S) \qquad \tilde{p} \approx p + \Delta_p(S' - S)$$

**Delta hedging — number of hedging units:**

$$\boxed{N_H = -\frac{\text{Portfolio delta}}{\Delta_H}}$$

| Position | Delta | Hedge (using stock) |
|---------|-------|---------------------|
| Long call | $+\Delta_c$ | Short stock |
| Short call | $-\Delta_c$ | Buy stock |
| Long put | $-|\Delta_p|$ | Buy stock |
| Short put | $+|\Delta_p|$ | Short stock |

---

### Gamma

$$\boxed{\Gamma_c = \Gamma_p = \frac{n(d_1)}{Se^{\delta T}\sigma\sqrt{T}}}$$

Where $n(d_1)$ = standard normal PDF (lowercase).

**Delta-plus-gamma approximation:**

$$\boxed{\tilde{c} \approx c + \Delta_c(S'-S) + \tfrac{1}{2}\Gamma_c(S'-S)^2}$$

$$\boxed{\tilde{p} \approx p + \Delta_p(S'-S) + \tfrac{1}{2}\Gamma_p(S'-S)^2}$$

| Position | Gamma | Exposure to large moves |
|---------|-------|------------------------|
| Long option (call or put) | $+$ | Benefits |
| Short option (call or put) | $-$ | Loses |
| Stock position | $0$ | None |

**Two-step neutralization:**

$$\text{Step 1: Neutralize gamma} \to \text{trade options}$$
$$\text{Step 2: Neutralize delta} \to \text{trade stock (zero gamma)}$$

---

### Theta

$$\Theta = \text{change in option value per unit of time} < 0 \text{ (typically)}$$

- Time decay **accelerates** as expiration approaches
- ATM options have the largest theta (most time value to lose)
- Positive gamma $\leftrightarrow$ Negative theta (fundamental trade-off)

---

### Vega

$$\text{Vega} = \frac{\partial \text{Option value}}{\partial \sigma} > 0 \quad \text{(always positive for long options)}$$

$$\text{Vega}_c = \text{Vega}_p \quad \text{(from put-call parity)}$$

- Vega is largest ATM; decreases deep ITM or deep OTM
- **Cannot hedge vega with stock** — requires other options

---

### Rho

$$\rho_c > 0 \quad \text{(call rho positive: higher } r \Rightarrow \text{ higher call)}$$

$$\rho_p < 0 \quad \text{(put rho negative: higher } r \Rightarrow \text{ lower put)}$$

- Rho is the **least impactful** Greek in practice
- At $r = 0$: ATM call = ATM put (from put-call parity: $c - p = S - X = 0$)

---

### Greeks Summary Table

| Greek | Measures | Call sign | Put sign | Stock | Max at |
|-------|---------|-----------|----------|-------|--------|
| **Delta** | $\partial V / \partial S$ | $+$ | $-$ | $\pm 1$ | Deep ITM |
| **Gamma** | $\partial \Delta / \partial S$ | $+$ | $+$ | $0$ | ATM |
| **Theta** | $\partial V / \partial t$ | $-$ | $-^*$ | $0$ | Near expiry ATM |
| **Vega** | $\partial V / \partial \sigma$ | $+$ | $+$ | $0$ | ATM |
| **Rho** | $\partial V / \partial r$ | $+$ | $-$ | $0$ | Long-dated ITM |

*Deep ITM puts can have positive theta.

---

## 12. Implied Volatility

$$\text{Observed market price} + S, X, T, r, \delta \xrightarrow{\text{Invert BSM}} \text{Implied Volatility (IV)}$$

- IV is **forward-looking** (reflects market's expectation of future volatility)
- **Volatility smile/skew**: IV varies with strike (real-world BSM violation)
- **Term structure of volatility**: IV varies with expiration
- **Volatility surface**: 3D plot of IV vs. strike and expiration
- **VIX** ≈ 30-day S&P 500 implied volatility; rises in market stress

---

## Quick Reference — All Valuation Formulas

| Instrument | Formula |
|------------|---------|
| Call payoff at expiry | $\max(0, S_T - X)$ |
| Put payoff at expiry | $\max(0, X - S_T)$ |
| Put-call parity | $S + p = e^{-rT}X + c$ |
| Binomial: risk-neutral $\pi$ | $[(1+r) - d]/(u - d)$ |
| Binomial: call/put | $[\pi V^+ + (1-\pi)V^-]/(1+r)$ |
| 2-period (European) | $[\pi^2 V^{++} + 2\pi(1-\pi)V^{+-} + (1-\pi)^2 V^{--}]/(1+r)^2$ |
| American option (each node) | $\max(\text{Continuation},\ \text{Exercise value})$ |
| BSM call (no div.) | $SN(d_1) - e^{-rT}XN(d_2)$ |
| BSM put (no div.) | $e^{-rT}XN(-d_2) - SN(-d_1)$ |
| BSM with carry $\gamma$ | Replace $S \to Se^{-\gamma T}$ in stock component |
| $d_1$ | $[\ln(S/X) + (r - \gamma + \sigma^2/2)T] / \sigma\sqrt{T}$ |
| $d_2$ | $d_1 - \sigma\sqrt{T}$ |
| Black (futures) call | $e^{-rT}[F_0(T)N(d_1) - XN(d_2)]$ |
| Black (futures) put | $e^{-rT}[XN(-d_2) - F_0(T)N(-d_1)]$ |
| IR call (caplet) | $(AP) e^{-rt_j}[FRA \cdot N(d_1) - R_X N(d_2)]$ |
| IR put (floorlet) | $(AP) e^{-rt_j}[R_X N(-d_2) - FRA \cdot N(-d_1)]$ |
| Payer swaption | $(AP)(PVA)[R_{FIX}N(d_1) - R_X N(d_2)]$ |
| Receiver swaption | $(AP)(PVA)[R_X N(-d_2) - R_{FIX}N(-d_1)]$ |
| Delta (call) | $e^{-\delta T}N(d_1)$ |
| Delta (put) | $-e^{-\delta T}N(-d_1)$ |
| Gamma (call = put) | $n(d_1) / [Se^{\delta T}\sigma\sqrt{T}]$ |
| Delta hedge units | $N_H = -\text{Portfolio delta} / \Delta_H$ |