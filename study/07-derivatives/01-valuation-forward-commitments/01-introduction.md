---
layout: page
title: Pricing and Valuation of Forward Commitments — Introduction
permalink: /study/07-derivatives/01-valuation-forward-commitments/01-introduction/
next: /cfa/study/07-derivatives/01-valuation-forward-commitments/02-carry-arbitrage/
---
## Summary: Pricing and Valuation of Forward Commitments — Introduction (CFA Level II — Derivatives)

---

### Forward Commitments Overview

**Three types of forward commitments:**
- **Forwards**: Promise to buy/sell at a future date at a price set today
- **Futures**: Exchange-traded, standardized forward contracts
- **Swaps**: Multiple forward commitments at several future dates

**Key characteristic**: All have **linear payoff functions** — both upside and downside risk (unlike options which have asymmetric payoffs).

---

### The No-Arbitrage Framework

**Two rules of the arbitrageur:**
1. **Do not use your own money**
2. **Do not take any price risk**

**Foundation: Law of One Price**
$$\boxed{\text{If two investments have identical future cash flows} \implies \text{they must have the same current price}}$$

**Value additivity principle**: Value of a portfolio = sum of values of individual instruments held.

**Four key assumptions:**
1. Replicating instruments are identifiable and investable
2. No market frictions (no transaction costs, taxes)
3. Short selling allowed with full use of proceeds
4. Borrowing and lending available at a known risk-free rate

---

### Carry Arbitrage Model

**Core concept**: Forward contracts are priced by replicating their payoff using the underlying asset financed externally.

**Carry costs and benefits:**

| Component | Type | Examples |
|-----------|------|---------|
| **Financing costs** | Carry cost (+) | Interest on borrowed funds |
| **Storage/insurance** | Carry cost (+) | Physical commodities (gold, oil) |
| **Dividends** | Carry benefit (−) | Equity index forwards |
| **Coupons** | Carry benefit (−) | Fixed-income forwards |

> **Net carry cost** = Financing costs + Storage − Income received

---

### Forwards vs. Futures — Key Differences

| Feature | Futures | Forwards |
|---------|---------|---------|
| **Trading venue** | Exchange-traded (e.g., CME) | OTC, bilateral negotiation |
| **Standardization** | Standardized size, dates, deliverables | Fully customizable |
| **Counterparty risk** | Guaranteed by clearinghouse | Subject to counterparty credit risk |
| **Initial value** | 0 | 0 (at-market contracts) |
| **Settlement** | **Daily mark-to-market** (margin account) | Accumulates value until settlement date |
| **Margin** | Required; maintenance margin enforced | May be specified by counterparties |

---

### Key Notation

| Symbol | Meaning |
|--------|---------|
| $S_t$ | Spot price at time $t$ |
| $F_t$ | Forward price at time $t$ |
| $f_t$ | Futures price at time $t$ |
| $V_t$ | Value of a forward contract at time $t$ |
| $v_t$ | Value of a futures contract at time $t$ |
| $T$ | Expiration date |
| $N_f$ | Contract multiplier (standard contract size) |

---

### The Convergence Property

$$\boxed{F_T = f_T = S_T \quad \text{at expiration}}$$

**Why it must hold** (arbitrage enforcement):

| If... | Arbitrageur action | Result |
|-------|-------------------|--------|
| $F_T > S_T$ | Sell forward, borrow to buy spot, deliver at expiration | Forward price falls |
| $F_T < S_T$ | Short sell spot, invest proceeds, take delivery via long futures | Forward price rises |

**The basis** = Spot price − Futures price → **converges to zero** as expiration approaches.

**Before expiration**: Forward price may be above, below, or equal to spot price depending on net carry costs vs. benefits:
- **Carry costs > carry benefits** → $F_0 > S_0$ (forward price above spot; converges from above)
- **Carry benefits > carry costs** → $F_0 < S_0$ (forward price below spot; converges from below)

---

### Forward Contract Value

#### At Initiation (Time 0)
$$\boxed{V_0 = 0}$$

Forward price $F_0$ is set so that no money changes hands at initiation — both parties have zero value at inception.

#### At Expiration (Time T)

**Long forward position** (agreed to buy at $F_0$):
$$\boxed{V_T = S_T - F_0}$$

**Short forward position** (agreed to sell at $F_0$):
$$\boxed{-V_T = F_0 - S_T}$$

**Example**: Fund manager locks in bond sale at $F_0 = £10,000,000$; spot at expiration $S_T = £9,800,000$:
$$-V_T = £10,000,000 - £9,800,000 = \mathbf{£200,000 \text{ profit}}$$

The manager benefits — locked in a sale price above the eventual market price.

---

### Futures Contract Value (Intraday)

**For a long futures position (during trading day):**
$$\boxed{v_t = N_f \times (f_t - f_{t-1})}$$

Where $f_{t-1}$ = previous day's settlement price, $N_f$ = contract multiplier.

**After daily mark-to-market:**
$$\boxed{v_t = 0} \quad \text{(gains/losses transferred to margin account; contract reset)}$$

**Example**: Long 1 gold contract ($N_f = 100$ oz), previous settlement = $1,300/oz, current price = $1,310/oz:
$$v_t = 100 \times (1,310 - 1,300) = \mathbf{+\$1,000}$$

After marking-to-market, this gain enters the margin account and the contract resets to $v_t = 0$.

---

### Pricing vs. Valuation — Key Distinction

| Activity | Definition | When |
|----------|-----------|------|
| **Pricing** | Determining the appropriate forward price $F_0$ or rate | At contract initiation |
| **Valuation** | Determining the current value $V_t$ of an existing contract | After initiation (as market moves) |

---

### Practical Uses of Forward Commitments

| Instrument | Use Case |
|-----------|---------|
| **Equity index futures/swaps** | Hedge concentrated low-tax-basis equity positions |
| **Interest rate swaps** | Manage duration gap in pension plans |
| **Derivatives overlays** | Tactical asset allocation for endowments |
| **Interest rate swaps** | Convert floating-rate debt to fixed-rate (or vice versa) |
| **VIX futures** | Infer market volatility expectations |
| **Inflation swaps** | Infer inflation rate expectations |

---

### Exam Tips

- **Carry arbitrage model** is the fundamental pricing tool — forward price = spot price adjusted for net carry costs/benefits
- **Convergence property**: at expiration, $F_T = f_T = S_T$ — always enforced by arbitrage
- **Initial value = 0** for both forwards and futures — no money changes hands at initiation
- **Long forward payoff**: $V_T = S_T - F_0$; **Short forward payoff**: $-V_T = F_0 - S_T$
- **Futures marking-to-market**: daily settlement resets contract value to 0; gains/losses flow through margin account
- **Forward value accumulates** between settlements; **futures value resets daily**
- **Basis** = Spot − Futures → converges to zero at expiration
- **Assets with high carry benefits** (dividends, coupons) → futures price may be below spot
- **Assets with high carry costs** (storage, financing) → futures price above spot