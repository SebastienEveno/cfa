---
layout: page
title: Valuation of Contingent Claims — Introduction
permalink: /study/07-derivatives/02-contingent-claims/01-introduction/
next: /cfa/study/07-derivatives/02-contingent-claims/02-binomial-option-valuation-model/
---
## Summary: Valuation of Contingent Claims — Introduction (CFA Level II — Derivatives)

---

### What Is a Contingent Claim?

**Contingent claim**: A derivative that gives its owner a **right but not an obligation** to a payoff determined by an underlying asset, rate, or other derivative.

**Primary example**: **Options** — the focus of Module 2.

**Why it matters**: Many investments have **embedded options** (callable bonds, convertible bonds, warrants, mortgage prepayment options) — understanding option valuation is essential for investment management.

---

### The No-Arbitrage Approach to Option Valuation

**Same two fundamental rules as before:**
1. **Do not use your own money**
2. **Do not take any price risk**

**Law of one price:**
$$\boxed{\text{If two investments have identical future cash flows} \implies \text{They must have the same current price}}$$

**Core mechanism**: The arbitrageur builds portfolios using the **underlying instrument** to **synthetically replicate** the cash flows of an option → the option must price to match the replicating portfolio.

---

### Five Key Assumptions

| # | Assumption |
|---|------------|
| 1 | Replicating instruments are **identifiable and investable** |
| 2 | **No market frictions** (no transaction costs, taxes) |
| 3 | **Short selling** allowed with full use of proceeds |
| 4 | Underlying follows a **known statistical distribution** |
| 5 | **Borrowing and lending** available at a known risk-free rate |

---

### Two Option Valuation Models

| Model | Time Framework | Distribution Assumed |
|-------|---------------|---------------------|
| **Binomial model** | Discrete time | Binomial up/down moves per period |
| **Black–Scholes–Merton (BSM)** | Continuous time | **Geometric Brownian motion** → lognormal price distribution → normally distributed continuously compounded returns |

**Geometric Brownian motion**: Captures randomness of financial prices while incorporating a **pre-specified expected return and volatility** — the mathematical backbone of BSM.

---

### Module 2 Structure

| Section | Topic |
|---------|-------|
| **Section 2** | No-arbitrage principles for option valuation |
| **Section 3** | **Binomial option valuation model** (two-period, dynamic replicating portfolio) |
| **Section 4** | **Black–Scholes–Merton (BSM) model** (continuous time) |
| **Section 5** | **Black model** — variation of BSM for futures options, interest rate options, swaptions |
| **Section 6** | **The Greeks** (delta, gamma, theta, vega, rho) + **implied volatility** |

---

### Key Concepts Preview

**Dynamic replicating portfolio**: A portfolio whose **composition changes over time** to continuously replicate option payoffs — the fundamental mechanism behind both binomial and BSM models.

**The Greeks**: Sensitivities of option value to changes in inputs:

| Greek | Sensitivity to |
|-------|----------------|
| **Delta** | Underlying price |
| **Gamma** | Delta (rate of change of delta) |
| **Theta** | Time (time decay) |
| **Vega** | Volatility |
| **Rho** | Risk-free interest rate |

**Implied volatility**: The volatility **inferred from the observed market price** of an option (working backwards through the valuation model) — reflects what market participants **believe** the underlying's volatility will be.

**Carry benefits/costs**: Matter when valuing options on instruments that generate income (dividends, coupons) or incur storage costs — affects option pricing similar to how they affect forward pricing.

**Black model**: A variation of BSM applied to:
- Futures options
- Interest rate options (caps, floors)
- Swaptions

**Key difference**: Futures contracts have **no carry costs or benefits** — simplifies the Black model vs. BSM.

---

### Exam Tips

- **Options = contingent claims**: right but not obligation (unlike forward commitments which are obligations)
- **No-arbitrage is the foundation** for both binomial and BSM models — same principle as for forwards/futures/swaps
- **Binomial model** → discrete time; **BSM** → continuous time (geometric Brownian motion)
- **Lognormal distribution**: stock prices can't go negative; continuously compounded returns are normally distributed — key BSM assumption
- **Dynamic replication**: unlike static replication for forwards, option replication requires **continuous portfolio rebalancing**
- **Implied volatility**: the market's forward-looking volatility estimate; can differ across strikes (volatility smile/skew) — model-dependent
- **Black model**: the BSM variant for interest rate derivatives — watch for futures as underlying (no dividends, no carry)
- This introduction sets the stage for detailed valuation mechanics in the following sections