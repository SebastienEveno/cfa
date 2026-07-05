## Summary: Term Structure Models (CFA Level II — Fixed Income)

---

### Why Term Structure Models Matter

Term structure models provide the **statistical assumptions** that determine how rates evolve at each node of binomial trees and Monte Carlo simulations — they answer: *what determines the dispersion of rates and how the tree is "fit"?*

**Uses**: Scenario analysis, stress testing, valuation of complex fixed-income instruments and derivatives.

---

### General Stochastic Process Structure

$$\boxed{dr_t = \theta_t dt + \sigma_t dZ}$$

| Component | Meaning |
|-----------|---------|
| **Drift term** ($\theta_t dt$) | Expected (zero-volatility) path of the short rate — can be constant or mean-reverting |
| **Stochastic term** ($\sigma_t dZ$) | Adds randomness/volatility; $Z$ = Wiener process (normally distributed) |

> **Important**: Normal distribution symmetry means many models can produce **negative interest rates** — a key differentiator between models.

---

### Interest Rate Factors

| Model Type | What It Models |
|-----------|----------------|
| **One-factor** | Only the **short rate** drives the entire term structure (all rates move in same direction, not necessarily same magnitude) |
| **Multi-factor** | Additional factors (e.g., slope) — more complex but can capture curvature better |

> Empirically, **parallel shifts explain >90% of yield changes** — justifies the popularity of one-factor models despite their simplicity.

---

### Two Classes of Term Structure Models

| Class | Approach | Fits Current Market Prices? |
|-------|---------|------------------------------|
| **No-arbitrage (arbitrage-free) models** | Take current term structure as given; **parameterized** to match market prices exactly | **Yes** — by construction |
| **Equilibrium models** | Use fundamental economic variables; parameters reflect economic theory, not forced market fit | **No** — not necessarily |

**Trade-offs:**
- No-arbitrage models: more parameters → better current fit → favored for **static pricing/hedging**
- Equilibrium models: fewer parameters → capture broader economic dynamics → favored for **dynamic, longer-horizon applications**
- Technical distinction: equilibrium models use **real probabilities**; arbitrage-free models use **risk-neutral probabilities**

---

## Equilibrium Models

### Cox–Ingersoll–Ross (CIR) Model

**Key features:**
- **Mean-reverting** short rate
- **Variance varies with the level of rates** — volatility is a function of $r_t$
- At **low rates**, the volatility term shrinks → **prevents negative rates**

**Drift term**: distance of current rate from long-run mean $\theta$, scaled by reversion speed $k$
- If $r_t = \theta$ → drift = 0 (rate at equilibrium)

---

### Vasicek Model

**Key features:**
- Also **mean-reverting** (same drift structure as CIR)
- **Constant volatility** (does NOT vary with rate level — key difference from CIR)
- Single stochastic driver (one-factor)
- **Can produce negative rates** (no floor mechanism like CIR)

---

## Arbitrage-Free (No-Arbitrage) Models

### Ho–Lee Model

**Key features:**
- First arbitrage-free model (1986)
- **Time-dependent drift** ($\theta_t$) — critical feature allowing the model to match market prices at every point in time
- **Constant volatility**
- **Can produce negative rates** (normal distribution, constant volatility)
- Calibrated using a binomial lattice approach

---

### Kalotay–Williams–Fabozzi (KWF) Model

**Key features:**
- **No mean reversion**, **constant volatility** (similar to Ho-Lee)
- **Key difference**: models the **log of the short rate** (not the rate itself)
- Since $\ln(r_t)$ is normally distributed → $r_t$ itself is **lognormally distributed**
- **Prevents negative rates** (lognormal distribution can't go negative)
- Has pricing implications for option valuation (affects the tails of rate distributions)

---

### Model Comparison Table

| Model | Type | Drift Term | Volatility | Can Go Negative? |
|-------|------|-----------|-----------|-------------------|
| **CIR** | Equilibrium | Mean reversion (speed $k$) | **Varies** with rate level | **No** |
| **Vasicek** | Equilibrium | Mean reversion (speed $k$) | Constant | **Yes** |
| **Ho–Lee** | Arbitrage-free | Time-dependent | Constant | **Yes** |
| **KWF** | Arbitrage-free | Time-dependent | Constant (on log scale) | **No** |

---

### Modern Multi-Factor Models — Gauss+

**Structure**: Incorporates **short-, medium-, and long-term rate factors**

| Factor | Behavior |
|--------|---------|
| **Long-term** | Mean-reverting; reflects macroeconomic trends |
| **Medium-term** | Reverts to the long-run rate |
| **Short-term** | **No random component** — consistent with central bank control of short rates |

**Resulting shape**: **Hump-shaped volatility curve** — medium-term rates are **most volatile** (short end pinned by policy, long end anchored by macro mean reversion).

---

### Example 8 — Knowledge Check Answers

**Q1 (Most accurate modeling of the observed term structure):**
→ **B. Ho-Lee model** — arbitrage-free models are specifically **parameterized to match current market prices exactly**; equilibrium models (CIR, Vasicek) are not forced to fit observed term structure.

**Q2 (Vasicek model factor structure):**
→ **B. Single factor, the short rate** — both CIR and Vasicek are one-factor models driven solely by the short-term rate.

**Q3 (CIR model characteristic):**
→ **C. Assumes interest rate volatility increases with increases in the level of interest rates** — this is CIR's defining feature (volatility varies with rate level), distinguishing it from Vasicek's constant volatility.

---

### Exam Tips

- **No-arbitrage models fit current market prices exactly**; **equilibrium models do not** — this is the core distinguishing feature
- **CIR**: mean-reverting + volatility varies with rate level → **prevents negative rates**
- **Vasicek**: mean-reverting + constant volatility → **can go negative**
- **Ho-Lee**: time-dependent drift + constant volatility → arbitrage-free, **can go negative**
- **KWF**: models **log** of short rate → lognormal → **prevents negative rates**
- **One-factor models** dominate practice because parallel shifts explain >90% of yield curve variance
- **Gauss+**: modern multi-factor model with hump-shaped volatility (medium-term most volatile)
- Know the **mean reversion vs. no mean reversion** distinction: CIR/Vasicek revert; Ho-Lee/KWF do not
- Know which models can produce **negative rates**: Vasicek and Ho-Lee (normal distribution); CIR and KWF cannot