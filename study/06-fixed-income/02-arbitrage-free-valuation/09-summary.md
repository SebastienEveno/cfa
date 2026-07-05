## Summary: The Arbitrage-Free Valuation Framework — Module 2 Wrap-Up (CFA Level II — Fixed Income)

A closing summary consolidating the entire module for exam use.

---

### Core Valuation Principle

$$\boxed{\text{Value of any financial asset} = \text{PV of expected future cash flows}}$$

**Bonds as portfolios of zeros**: A coupon bond = package of zero-coupon bonds, each discounted at the **spot rate matching its own maturity** — not a single uniform YTM.

---

### Arbitrage and the Law of One Price

| Concept | Definition |
|---------|-----------|
| **No-arbitrage principle** | Prices adjust until no riskless, zero-investment profit opportunities remain |
| **Law of one price** | Identical assets must trade at the same price |
| **Value additivity** | Whole = sum of parts |
| **Dominance** | Risk-free assets must be consistently priced relative to one another |

**Key implication**: Two bonds with the **same maturity but different coupons** are valued as **different packages** of zero-coupon bonds — each cash flow gets its own spot-rate discount.

---

### Option-Free Bond Valuation

$$\boxed{\text{Arbitrage-free value} = \sum \frac{CF_t}{(1+z_t)^t}}$$

For option-free bonds, this is **all you need** — spot-rate discounting alone produces the correct, arbitrage-free value.

---

### The Binomial Interest Rate Tree Framework

**Purpose**: Required for bonds **with embedded options**, where future cash flows depend on the **path of interest rates** (e.g., call/put exercise probability).

**Key building blocks:**

| Element | Description |
|---------|-------------|
| **Lognormal random walk** | Underlying interest rate model |
| **Adjacent node relationship** | $i_H = i_L \times e^{2\sigma}$ |
| **Volatility input ($\sigma$)** | Determines dispersion of rates around the forward curve |
| **Calibration** | Tree fit to reproduce exact benchmark bond prices (par) |
| **Recombining structure** | Multiple paths converge to same node → computational efficiency |

**Three consistency requirements for valid tree rates:**
1. The assumed **interest rate model** (lognormal random walk)
2. The assumed **volatility level**
3. The **current benchmark yield curve**

---

### Backward Induction

```
Start at maturity (bond = par + final coupon)
   ↓
Work right to left through the tree
   ↓
At each node: Bond value = [0.5(V_H+C) + 0.5(V_L+C)] / (1+i)
   ↓
Arrive at Time 0 value
```

**Critical consistency check**: An option-free bond valued via the **calibrated tree** must equal its value from **direct spot-rate discounting** — if not, the tree is miscalibrated.

---

### Calibration Process

```
Time 0: rate = current 1-year par rate
Time 1: solve via trial-and-error (or Solver) using 2-year benchmark bond
Time 2: solve using 3-year benchmark bond (with Time 1 rates fixed)
... continue iteratively for each subsequent maturity
```

**Effect of volatility:**
- σ → 0: tree collapses to the **deterministic implied forward curve**
- σ → higher: rates spread **wider** around the forward curve

---

### Alternative Valuation Methods

| Method | Approach | Result vs. Backward Induction |
|--------|----------|-------------------------------|
| **Pathwise valuation** | Average PV across all distinct interest rate paths (Pascal's Triangle for path count) | **Identical** for option-free bonds |
| **Monte Carlo simulation** | Randomly generate many paths, drift-adjust to match market prices | **Identical** (statistically) for option-free bonds |

**Monte Carlo's special value**: Essential for **path-dependent** securities (e.g., MBS with prepayment behavior) where binomial trees' recombining structure cannot capture history-dependent cash flows.

---

### Term Structure Models

| Class | Fits Current Market? | Examples |
|-------|----------------------|----------|
| **Equilibrium models** | No — uses fundamental economic variables | CIR, Vasicek |
| **Arbitrage-free (no-arbitrage) models** | **Yes** — parameterized to match observed prices | Ho-Lee, KWF |

#### General One-Factor Model (Base Form)

$$\boxed{dr_t = \theta_t dt + \sigma_t dZ}$$

| Component | Meaning |
|-----------|---------|
| $\theta_t dt$ | Drift term (expected rate path) |
| $\sigma_t dZ$ | Stochastic/volatility term; $dZ$ = Wiener process |

#### Equilibrium Model Formulas

**Cox–Ingersoll–Ross (CIR):**
$$\boxed{dr_t = k(\theta - r_t)dt + \sigma\sqrt{r_t}\,dZ}$$

**Vasicek:**
$$\boxed{dr_t = k(\theta - r_t)dt + \sigma\,dZ}$$

> CIR and Vasicek share the **identical drift term** (mean reversion at speed $k$ toward long-run rate $\theta$); they differ only in the volatility term — CIR's volatility scales with $\sqrt{r_t}$ (shrinks near zero, preventing negative rates), while Vasicek's volatility is constant (allows negative rates).

#### Arbitrage-Free Model Formulas

**Ho–Lee:**
$$\boxed{dr_t = \theta_t\,dt + \sigma\,dZ}$$

**Kalotay–Williams–Fabozzi (KWF):**
$$\boxed{d\ln(r_t) = \theta_t\,dt + \sigma\,dZ}$$

> Ho-Lee and KWF share **time-dependent drift** $\theta_t$ (no mean reversion target) and constant volatility; KWF models the **log** of the short rate, making $r_t$ lognormally distributed and preventing negative rates, while Ho-Lee models $r_t$ directly (can go negative).

#### Consolidated Model Comparison

| Model | Formula | Mean Reversion | Volatility Term | Negative Rates? |
|-------|---------|----------------|------------------|-------------------|
| **CIR** | $dr_t = k(\theta-r_t)dt + \sigma\sqrt{r_t}\,dZ$ | ✅ Yes (speed $k$) | Varies with $\sqrt{r_t}$ | ❌ No |
| **Vasicek** | $dr_t = k(\theta-r_t)dt + \sigma\,dZ$ | ✅ Yes (speed $k$) | Constant | ✅ Yes |
| **Ho–Lee** | $dr_t = \theta_t\,dt + \sigma\,dZ$ | ❌ No | Constant | ✅ Yes |
| **KWF** | $d\ln(r_t) = \theta_t\,dt + \sigma\,dZ$ | ❌ No | Constant (on log scale) | ❌ No |

**Key pattern:**
$$\text{Mean reversion} \implies k(\theta - r_t) \text{ in the drift} \qquad \text{No mean reversion} \implies \theta_t \text{ (time-varying only)}$$
$$\text{Negative rates possible} \implies \text{constant } \sigma \text{ applied directly to } r_t \qquad \text{Negative rates prevented} \implies \sigma\sqrt{r_t} \text{ (CIR) or } \ln(r_t) \text{ (KWF)}$$

> **Arbitrage-free models are favored for valuing bonds with embedded options** because they're explicitly calibrated to match observed market prices of a reference instrument set — essential for consistent, market-anchored derivative pricing.

---

### One-Page Mental Model

```
Foundation: Value = PV(expected future cash flows)
            Bond = portfolio of zero-coupon bonds
            No arbitrage → prices converge to fair value

Option-free bonds:
   → Spot rate discounting alone is sufficient and exact

Option-embedded bonds:
   → Need interest rate tree (path-dependent cash flows)
   → Lognormal model: i_H = i_L × e^(2σ)
   → Calibrate tree to reproduce benchmark bond prices exactly
   → Backward induction: average two future values + coupon, discount

Verification: 
   Tree price = Spot-rate price (for option-free bonds)
   Pathwise valuation = Backward induction (same tree, same answer)
   Monte Carlo (drift-adjusted) = Pathwise/Backward induction

Path-dependent securities (e.g., MBS):
   → Need Monte Carlo (not binomial tree)
   → Drift adjustment ensures arbitrage-free calibration

Term structure models (underlying engine for tree/MC node values):
   General form: dr_t = θ_t dt + σ_t dZ

   Equilibrium (mean-reverting drift, doesn't fit market exactly):
     CIR:     dr_t = k(θ-r_t)dt + σ√r_t dZ   → no negative rates
     Vasicek: dr_t = k(θ-r_t)dt + σ dZ        → negative rates possible

   Arbitrage-free (time-dependent drift, calibrated to market):
     Ho-Lee:  dr_t = θ_t dt + σ dZ            → negative rates possible
     KWF:     d ln(r_t) = θ_t dt + σ dZ       → no negative rates
```

---

This completes **Module 2: The Arbitrage-Free Valuation Framework**. Combined with **Module 1: Term Structure and Interest Rate Dynamics**, you now have the full theoretical and practical toolkit for understanding spot/forward/swap curves, yield curve theories, factor models, and arbitrage-free bond valuation via binomial trees, pathwise valuation, and Monte Carlo simulation. This sets up the next modules on valuing bonds **with embedded options** (callable/putable bonds), where this framework gets directly applied.