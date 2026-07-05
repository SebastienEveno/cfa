---
layout: page
title: Two-Period Binomial Model — Role of Dividends and Comprehensive Exercise
permalink: /study/07-derivatives/02-contingent-claims/06-two-binomial-model-dividends/
prev: /cfa/study/07-derivatives/02-contingent-claims/05-two-period-binomial-model-put/
next: /cfa/study/07-derivatives/02-contingent-claims/07-interest-rate-options/
---
## Summary: Two-Period Binomial Model — Role of Dividends and Comprehensive Exercise (CFA Level II — Derivatives)

---

### Role of Dividends in Option Valuation

**Key problem**: Dividends **reduce stock price** when paid → hurt call holders (who don't receive dividends unless they own the stock) → affect option values.

**Escrow method**: Split the stock price into two components:

$$\boxed{\hat{S} = S - \gamma}$$

Where:
- $\hat{S}$ = stock price **excluding** the PV of known future dividends
- $\gamma$ = PV of all dividend payments during the option's life
- **Model uncertainty using $\hat{S}$**, not $S$
- At expiration, $\hat{S}_T = S_T$ (all dividends paid by then)

**Why this matters**: The up/down moves apply to the **ex-dividend price** component only — dividends are "escrowed" out and treated as certain.

---

### Dividends and Early Exercise of American Calls

**Without dividends**: American call = European call (never exercise early).

**With dividends**: Early exercise can be rational!

**Why**: By exercising just before the ex-dividend date, the call holder **captures the dividend** that they would otherwise lose.

**Early exercise of call is optimal when**:
$$\text{Exercise value (including dividend)} > \text{Continuation value (ex-dividend)}$$

**Example** ($S = 100$, $X = 95$, $D = \$3$, $r = 1\%$):
- At Time 1 (up node): $\hat{S}^+ = (100 - 3/1.01) \times 1.224 = 118.764$ (ex-div)
- Stock price just before ex-dividend: $118.764 + 3 = 121.764$
- **Exercise value**: $121.764 - 95 = 26.764$ > **Continuation value**: $24.934$
- → **Exercise early to capture the $\$3$ dividend**

> **General rule**: American calls may be exercised early on **dividend-paying stocks** when the dividend is large enough that the lost dividend from not exercising exceeds the remaining time value.

---

### Comprehensive Example 7 — European Call and Put Values

**Setup**: $S = A\$7.35$, $X = A\$8.0$, $r = 4.35\%$, $u = 1.445$, $d = 0.715$, $T = 2$ years, no dividends

**Risk-neutral probability:**
$$\pi = \frac{1.0435 - 0.715}{1.445 - 0.715} = \frac{0.3285}{0.730} = \mathbf{0.45}$$

**Terminal underlying prices:**
- $S^{++} = (1.445)^2 \times 7.35 = 15.347$
- $S^{+-} = 1.445 \times 0.715 \times 7.35 = 7.594$
- $S^{--} = (0.715)^2 \times 7.35 = 3.758$

**Terminal payoffs:**

| | Call | Put |
|-|------|-----|
| $c^{++}$, $p^{++}$ | $\max(0,15.347-8) = 7.347$ | $0$ |
| $c^{+-}$, $p^{+-}$ | $0$ | $\max(0,8-7.594) = 0.406$ |
| $c^{--}$, $p^{--}$ | $0$ | $\max(0,8-3.758) = 4.240$ |

**Time 1 expected payoffs:**

| Node | Call | Put |
|------|------|-----|
| Up | $0.45(7.347) + 0.55(0) = 3.306$ | $0.45(0) + 0.55(0.406) = 0.223$ |
| Down | $0.45(0) + 0.55(0) = 0$ | $0.45(0.406) + 0.55(4.240) = 2.514$ |

**Time 1 option values** ($PV = 1/1.0435 = 0.9583$):
- $c^+ = 0.9583 \times 3.306 = \mathbf{3.17}$; $c^- = 0$
- $p^+ = 0.9583 \times 0.223 = \mathbf{0.214}$; $p^- = 0.9583 \times 2.514 = \mathbf{2.41}$

**Time 0 option values** (two-period formula, $PV^2 = 1/1.0435^2 = 0.9184$):
$$c = 0.9184 \times [0.45^2(7.347) + 2(0.45)(0.55)(0) + 0.55^2(0)] = 0.9184 \times 1.488 = \mathbf{A\$1.37}$$
$$p = 0.9184 \times [0 + 2(0.45)(0.55)(0.406) + 0.55^2(4.240)] = 0.9184 \times 1.484 = \mathbf{A\$1.36}$$

**Why $c \approx p$?** Stock price = PV(X): $7.35 \approx 8.0/(1.0435)^2 = 7.35$ → put-call parity confirms $c - p = S - PV(X) \approx 0$.

---

### Hedge Ratios — Comprehensive Example 7 (Q2)

**Underlying at Time 1 and Time 2:**

| | $S^{++} = 15.347$ | $S^{+-} = 7.594$ | $S^{--} = 3.758$ |
| | $S^+ = 10.621$ | $S^- = 5.255$ | |

**Hedge ratios at Time 1 (up node):**
$$h_c^+ = \frac{c^{++}-c^{+-}}{S^{++}-S^{+-}} = \frac{7.347-0}{15.347-7.594} = \mathbf{0.9476}$$
$$h_p^+ = \frac{p^{++}-p^{+-}}{S^{++}-S^{+-}} = \frac{0-0.406}{15.347-7.594} = \mathbf{-0.0524}$$

**Hedge ratios at Time 1 (down node):**
$$h_c^- = \frac{c^{+-}-c^{--}}{S^{+-}-S^{--}} = \frac{0-0}{7.594-3.758} = \mathbf{0}$$
$$h_p^- = \frac{p^{+-}-p^{--}}{S^{+-}-S^{--}} = \frac{0.406-4.240}{7.594-3.758} = \mathbf{-1.0}$$

**Hedge ratios at Time 0:**
$$h_c = \frac{c^+-c^-}{S^+-S^-} = \frac{3.17-0}{10.621-5.255} = \mathbf{0.5905}$$
$$h_p = \frac{p^+-p^-}{S^+-S^-} = \frac{0.214-2.41}{10.621-5.255} = \mathbf{-0.4095}$$

---

### Interpreting Model Components

**Call option** = **Leveraged long position in stock**:
$$c = h_c S - \text{Amount borrowed}$$

At Time 0: Long $0.5905$ shares ($4.34 cost$) financed with $2.97$ borrowing → net cost = $1.37 = $ call price.

**Put option** = **Short stock position + Lending**:
$$p = -|h_p|S + \text{Amount lent}$$

At Time 0: Short $0.4095$ shares ($3.01$ received) + lend $4.37$ → net cost = $1.36 = $ put price.

---

### American Option Valuation — Comprehensive Example 7 (Q3)

**American call** (no dividends): Same as European → **early exercise never optimal**.

**Verification** (all call exercise values < model values):
- $EV^+ = \max(0,10.621-8) = 2.621 < c^+ = 3.17$ → Don't exercise
- $EV^- = \max(0,5.255-8) = 0 = c^- = 0$ → No difference
- $EV_0 = \max(0,7.35-8) = 0 < c = 1.37$ → Don't exercise

$$\boxed{C^{\text{American}} = c^{\text{European}} = A\$1.37}$$

**American put** (early exercise check):

| Node | Model Value | Exercise Value | Decision |
|------|------------|----------------|---------|
| Time 1 up | $p^+ = 0.214$ | $\max(0,8-10.621) = 0$ | Continue (model > EV) |
| **Time 1 down** | $p^- = 2.41$ | $\max(0,8-5.255) = \mathbf{2.745}$ | **Exercise early!** |

**Replace $p^- = 2.41$ with $2.745$** and recompute:

**New Time 0 hedge ratio:**
$$h_p^{\text{AM}} = \frac{0.214-2.745}{10.621-5.255} = \frac{-2.531}{5.366} = \mathbf{-0.4717}$$

**New American put value:**
$$P^{\text{AM}} = \frac{0.45(0.214) + 0.55(2.745)}{1.0435} = \frac{0.096 + 1.510}{1.0435} = \frac{1.606}{1.0435} = \mathbf{A\$1.54}$$

**Summary of American vs. European:**

| | European | American | Difference |
|-|---------|---------|------------|
| **Call** | $1.37$ | $1.37$ | $0$ (no early exercise) |
| **Put** | $1.36$ | **$1.54$** | **$+0.18$** (early exercise premium) |
| **Put hedge ratio** | $-0.4095$ | $-0.4717$ | More negative (more short stock needed) |

---

### Key Takeaways — Full Summary

| Scenario | American vs. European |
|----------|----------------------|
| Call, no dividends | Equal (never exercise early) |
| Call, with dividends | American > European (may exercise early to capture dividend) |
| Put, no dividends | American ≥ European (may exercise early when deep ITM) |
| Put, with dividends | American ≥ European (dividend strengthens case to keep put) |

---

### Exam Tips

- **Escrow method**: $\hat{S} = S - PV(\text{dividends})$ — model uncertainty on the ex-dividend price
- **American calls with dividends**: can be exercised early to **capture the dividend** — exercise value includes the dividend, continuation value uses ex-dividend price
- **American puts**: check at each node — replace model value with exercise value if $\max(0,X-S) > $ continuation value
- **American calls (no dividends)**: always equal to European call — early exercise never optimal
- **Hedge ratio changes** when early exercise is triggered — the new node value propagates back and changes prior hedge ratios
- **Put interpretation**: short stock + lending; **Call interpretation**: long stock + borrowing (leverage)
- **Put-call parity check**: when $S \approx PV(X)$, call and put values should be approximately equal
- **Early exercise premium for puts** can be significant, especially when: rates are high (opportunity cost of waiting), stock is deep in the money, or long time to expiration remains