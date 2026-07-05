---
layout: page
title: BSM Model with Carry Benefits — Equities and Currencies
permalink: /study/07-derivatives/02-contingent-claims/10-bsm-model-carry-benefits/
prev: /cfa/study/07-derivatives/02-contingent-claims/09-bsm-model-components/
next: /cfa/study/07-derivatives/02-contingent-claims/11-black-option-valuation-model/
---
## Summary: BSM Model with Carry Benefits — Equities and Currencies (CFA Level II — Derivatives)

---

### Carry Benefit-Adjusted BSM Model

**Carry benefits** ($\gamma$) reduce the burden of holding the underlying — they are subtracted from the underlying's growth rate.

**Adjusted BSM formulas:**

$$\boxed{c = Se^{-\gamma T}N(d_1) - e^{-rT}XN(d_2)} \quad \text{(Call)}$$

$$\boxed{p = e^{-rT}XN(-d_2) - Se^{-\gamma T}N(-d_1)} \quad \text{(Put)}$$

**Where $d_1$ is now:**
$$d_1 = \frac{\ln(S/X) + (r - \gamma + \sigma^2/2)T}{\sigma\sqrt{T}}$$

$$d_2 = d_1 - \sigma\sqrt{T}$$

**Adjusted put-call parity:**
$$\boxed{p + Se^{-\gamma T} = c + e^{-rT}X}$$

---

### Effect of Carry Benefits on Option Values

| Effect | Call | Put |
|--------|------|-----|
| **↑ carry benefit ($\gamma$)** | **↓ Value** (reduces $d_1$, $d_2$, and stock component) | **↑ Value** |
| **↑ $\gamma$ → ↓ $d_1$, $d_2$** | Lower RN probability of ITM expiry | Higher RN probability of ITM expiry |

> **Intuition**: Carry benefits lower the expected future price of the underlying (the benefit has already been "paid out") → less upside potential for call holders → lower call value.

---

### Application 1: Equity Options with Dividends

**Set $\gamma = \delta$** (continuously compounded dividend yield)

$$\boxed{c = Se^{-\delta T}N(d_1) - e^{-rT}XN(d_2)}$$

$$\boxed{p = e^{-rT}XN(-d_2) - Se^{-\delta T}N(-d_1)}$$

**Replicating portfolio (dividend-adjusted):**

| | Shares ($n_S$) | Bonds ($n_B$) |
|-|----------------|----------------|
| **Call** | $+e^{-\delta T}N(d_1)$ (fewer shares due to dividends) | $-N(d_2)$ (borrow) |
| **Put** | $-e^{-\delta T}N(-d_1)$ (more shares to short) | $+N(-d_2)$ (lend) |

**Why fewer shares for call?** When long stock, dividends are received — this benefit partially offsets the cost of holding the position, so fewer shares are needed in the hedge.

**$\delta = 0$**: Formulas reduce to standard non-dividend BSM (Equations 10 and 11).

---

### Example 11 Answers — Dividend-Paying Stock Options

**Q1**: BSM call value for dividend-paying stock:
→ **B. $Se^{-\delta T}N(d_1) - Xe^{-rT}N(d_2)$** — stock component discounted by dividend yield; bond component discounted by risk-free rate.

**Q2**: BSM put value for dividend-paying stock:
→ **C. $Xe^{-rT}N(-d_2) - Se^{-\delta T}N(-d_1)$** — bond minus (dividend-adjusted) stock component.

**Q3**: If $\delta = 0$ (no dividends):
→ **A. Option values are the same as standard BSM** — setting $\delta = 0$ reduces the carry-adjusted formulas back to Equations 10 and 11; $e^{-\delta T} = e^0 = 1$.

---

### Example 12 — BSM Inputs for Stock Option

**Setup**: Bank of China at HKD 4.41; sell 3-month call at exercise price HKD 4.60; $r = 1.60\%$; dividend yield = 0.24%; $\sigma = 28\%$

**Identifying BSM inputs:**

| Input | Value | Note |
|-------|-------|------|
| Underlying ($S$) | **HKD 4.41** | Current stock price |
| Exercise ($X$) | **HKD 4.60** | Strike price |
| Expiration ($T$) | **0.25** | 3 months = 0.25 years (not 3!) |
| Risk-free rate ($r$) | **0.016** | 1.60% |
| Dividend yield ($\delta$) | **0.0024** | 0.24% |
| Volatility ($\sigma$) | **0.28** | 28% |

→ **Answer Q1: B. 4.41, 4.60, 0.25, 0.0160, 0.0024, 0.28**

> **Exam trap**: $T$ must be in years ($3$ months = $0.25$, not $3$); underlying is stock price (4.41), not exercise price (4.60).

---

### Application 2: Currency Options

**Set $\gamma = r_f$** (continuously compounded **foreign** risk-free interest rate)

$$\boxed{c = Se^{-r_f T}N(d_1) - e^{-r_d T}XN(d_2)}$$

$$\boxed{p = e^{-r_d T}XN(-d_2) - Se^{-r_f T}N(-d_1)}$$

**Key rules for currency options:**

| Element | Specification |
|---------|--------------|
| **Underlying ($S$)** | Spot FX rate (domestic per unit of foreign) |
| **Exercise price ($X$)** | Same currency unit as underlying |
| **Risk-free rate ($r$)** | **Domestic** risk-free rate |
| **Carry benefit ($\gamma$)** | **Foreign** risk-free rate $r_f$ |
| **Volatility ($\sigma$)** | Volatility of log returns of the spot FX rate |
| **Total option cost** | Formula value × notional amount (quantity of foreign currency) |

**Why is foreign rate the carry benefit?** Holding foreign currency earns interest in the foreign country → this is the "dividend" equivalent for currency options.

**Components (call):**
- **FX component** = $Se^{-r_f T}N(d_1)$ (long foreign currency position)
- **Bond component** = $e^{-r_d T}XN(d_2)$ (short domestic bond)

---

### Example 13 — Japanese Camera Exporter (¥/€)

**Setup**: Japanese firm receives euros, wants to hedge ¥ appreciation (€ depreciation).

**Quote**: $135¥/€$ → domestic currency = ¥ (Japanese yen); foreign currency = € (euro)

**Strategy**: Buy **euro put option** (right to sell € for ¥ at strike) = call on ¥

**Q1 — Underlying and exercise price:**
- At-the-money spot → underlying = current spot = **135¥/€**; exercise = **135¥/€**
→ **Answer: B. 135; 135**

> **Key**: Underlying and exercise price are in the **same currency units** (¥/€ in this case)

**Q2 — Risk-free rate and carry rate:**
- Domestic currency = ¥ → domestic risk-free rate = **Japanese rate = 0.25%**
- Foreign currency = € → foreign risk-free rate (carry) = **European rate = 1.00%**
→ **Answer: A. 0.25%; 1.00%**

> **Memory rule**: The rate associated with the **currency in the denominator** of the exchange rate quote = domestic risk-free rate; the rate of the **currency in the numerator** (foreign currency being priced) = carry rate.

---

### Summary: Carry Benefit Applications

| Underlying | Carry Benefit ($\gamma$) | Risk-Free Rate ($r$) |
|-----------|--------------------------|----------------------|
| **Non-dividend stock** | $0$ | Risk-free rate |
| **Dividend-paying stock** | $\delta$ (continuous dividend yield) | Risk-free rate |
| **Foreign currency** | $r_f$ (foreign risk-free rate) | $r_d$ (domestic risk-free rate) |
| **Commodity** | Negative carry (storage costs) | Risk-free rate |
| **Futures** | $r$ (futures carry = risk-free rate → cancels) | Risk-free rate |

---

### Key Formula Reference Card

| Model | Call ($c$) | Put ($p$) |
|-------|-----------|-----------|
| **No dividends** | $SN(d_1) - e^{-rT}XN(d_2)$ | $e^{-rT}XN(-d_2) - SN(-d_1)$ |
| **With dividends ($\delta$)** | $Se^{-\delta T}N(d_1) - e^{-rT}XN(d_2)$ | $e^{-rT}XN(-d_2) - Se^{-\delta T}N(-d_1)$ |
| **Currency ($r_f$)** | $Se^{-r_f T}N(d_1) - e^{-r_d T}XN(d_2)$ | $e^{-r_d T}XN(-d_2) - Se^{-r_f T}N(-d_1)$ |

$$d_1 = \frac{\ln(S/X) + (r - \gamma + \sigma^2/2)T}{\sigma\sqrt{T}} \qquad d_2 = d_1 - \sigma\sqrt{T}$$

---

### Exam Tips

- **Carry benefit reduces call value, increases put value** — think of it as reducing the effective growth rate of the underlying
- **Dividend-adjusted stock options**: $Se^{-\delta T}$ replaces $S$ in the stock component; bond component unchanged
- **Currency options**: Foreign rate = carry benefit; domestic rate = discount rate — don't confuse these
- **Exchange rate convention**: "X domestic per 1 foreign" → underlying is quoted in domestic units; domestic rate is $r$; foreign rate is $\gamma$
- **At-the-money currency option**: $S = X$ (in same currency units)
- **Volatility** for currency options = volatility of the log return of the **spot exchange rate** (not the rates themselves)
- **Total dollar cost** = BSM formula value × notional amount (quantity of foreign currency covered)
- **$\delta = 0$ in dividend formula → same as no-dividend BSM** — these are the same model