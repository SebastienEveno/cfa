---
layout: page
title: "1.06 | The Discount Rate on Real Default-Free Bonds: Risk Premiums on Risky Assets"
permalink: /study/09-portfolio-management/01-economics-and-investment-markets/06-risk-premiums-on-risky-assets/
prev: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/05-uncertainty-and-risk-premium/
next: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/07-default-free-interest-rates-economic-growth/
---
## Summary: 1.06 | The Discount Rate on Real Default-Free Bonds: Risk Premiums on Risky Assets (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Same LOS as prior sections — this piece explains **where the risk premium ($\gamma_i$) comes from mechanically**, even for a "default-free" bond, once price uncertainty before maturity is introduced.

---

### Setup — Pricing a Multi-Period Bond (One-Period Holding)

For a default-free bond with maturity $s \geq 2$ periods, held for **only one period**, its Time $t+1$ value is the **uncertain future price** $P_{t+1,s-1}$ (not $1, since it hasn't matured yet).

$$\boxed{P_{t,s} = E_t\left[\Psi_{t,t+1} \times P_{t+1,s-1}\right]} \quad \text{(Equation 5)}$$

**Key distinction from the one-period bond**: the payoff ($P_{t+1,s-1}$) is now **random**, since the bond will be sold at the prevailing market price before maturity — unlike the one-period bond, which pays a **known** $1.

---

### Worked Example 5 — Pricing a Two-Period Bond

**Given** (building on Example 1's states):
$$P_{t+1,1}^{\text{bad}} = 0.839181 \ (p=0.4), \quad P_{t+1,1}^{\text{good}} = 0.954840 \ (p=0.6)$$

**Step 1 — Expected future price:**
$$E_t(P_{t+1,1}) = 0.4(0.839181) + 0.6(0.954840) = 0.908576$$

**Step 2 — "Risk-neutral" present value** (naive discounting at the risk-free rate $l_{t,1}=4.7671\%$):
$$\boxed{PV_{\text{risk-neutral}} = \frac{0.908576}{1.047671} = 0.867234}$$

**Step 3 — Actual market price (Equation 5):**
$$P_{t,s} = 0.4(0.839181)(0.954676) + 0.6(0.954840)(0.954379) = \boxed{0.867226}$$

**Result**: 
$$\boxed{\text{Risk-neutral PV} - \text{Actual price} = 0.867234 - 0.867226 = 0.000008}$$

The **actual price is lower** than the naive risk-free-discounted value → the bond holder earns a **risk premium**, *despite the bond being default-risk-free*. The uncertainty comes purely from **price volatility before maturity**.

---

### The Covariance Decomposition (Equation 6)

Using the statistical identity $E[XY] = E[X]E[Y] + \text{Cov}(X,Y)$:

$$\boxed{P_{t,s} = \underbrace{\frac{E_t(P_{t+1,s-1})}{1+l_{t,1}}}_{\text{"risk-neutral" PV}} + \underbrace{\text{Cov}_t\left(\Psi_{t,t+1},\ P_{t+1,s-1}\right)}_{\text{discount for risk}}}$$

**Two components**:
1. **Risk-neutral present value**: expected future price discounted at the risk-free rate (= $0.867234$ in Example 5) — value if investors required **no** risk compensation
2. **Covariance term**: the actual **discount/premium for risk**

**Why the covariance term is zero for a one-period bond**: its future price is a **known constant** ($1), and covariance of a random variable with a constant is always zero → Equation 6 collapses to Equation 3.

---

### Sign of the Covariance — Why It's Typically Negative for Risky Assets

$$\boxed{\text{Bad times} \implies \text{labor income} \downarrow \implies \text{marginal utility of future consumption (and } \Psi\text{)} \uparrow}$$
$$\boxed{\text{Bad times} \implies \text{risky asset payouts (earnings, dividends)} \downarrow \implies \text{asset prices} \downarrow}$$

$$\boxed{\implies \text{Cov}(\Psi_{t,t+1},\ P_{t+1,s-1}) < 0 \text{ typically}}$$

**Chain to risk premium**:
$$\text{Negative covariance} \implies \text{lower price today} \implies \text{higher return over time} \implies \boxed{\text{positive risk premium } \gamma_i}$$

**Magnitude relationship**: the **larger** (more negative) the covariance, the **higher** the required risk premium and the **lower** the current price.

---

### Worked Example 6 — Verifying via the Covariance Formula

$$\text{Cov} = 0.4(0.954676-0.954498)(0.839181-0.908576) + 0.6(0.954379-0.954498)(0.954840-0.908576)$$
$$\boxed{\text{Cov} = -0.000008}$$

**Interpretation**: 
- **Bad state**: $\Psi$ is **above** average (0.954676 > 0.954498), but bond price is **below** average (0.839181 < 0.908576) → opposite signs
- **Good state**: reverse pattern
- → **Negative covariance**, confirming the investor finds this bond **inferior** to one whose payoff is independent of her ITRS

**Risk premium calculation (Equations 7 & 8)**:
$$r_{t,s} = \frac{E_t(P_{t+1,s-1})}{P_{t,s}} - 1$$
$$\boxed{\gamma = r_{t,s} - l_{t,1} = 0.047681 - 0.047671 = 0.00001 \ (0.001\%)}$$

**Scale note**: The premium is tiny here because the risk between a 1- and 2-year US Treasury is minimal. **Riskier assets (e.g., equities) have much larger covariances → much larger risk premiums.**

---

### General Principle — What Determines the Sign and Size of $\gamma_i$

$$\boxed{
\begin{array}{l}
\text{Typical risky asset: high returns in good times (low marginal utility)} \\
\qquad\qquad\qquad\ \ \text{+ low returns in bad times (high marginal utility)} \\
\implies \text{POSITIVE risk premium}
\end{array}
}$$

$$\boxed{
\begin{array}{l}
\text{Hedge asset: high returns precisely when marginal utility is high (bad times)} \\
\implies \text{NEGATIVE risk premium, HIGH price, LOW required return}
\end{array}
}$$

---

### Exam Tips

- **Critical conceptual result**: risk premiums can exist **even on default-risk-free bonds** — the source is **price uncertainty prior to maturity**, not default risk. Don't conflate "default-free" with "risk-free" price behavior over a holding period shorter than maturity
- **Equation 6 is the key formula to understand conceptually**: Price = risk-neutral PV + covariance discount. Memorize that the covariance term is what "risk-adjusts" the naive PV
- **Sign logic is the testable core**: negative covariance between $\Psi$ (ITRS) and future price → positive risk premium (the normal case for equities/risky bonds); positive covariance → negative risk premium (hedge assets, valuable specifically because they pay off in bad times)
- **Longer maturity ⇒ greater price uncertainty before maturity ⇒ larger (more negative) covariance ⇒ larger risk premium**, all else equal — this is why 2-year bonds carry a (small) premium over 1-year bonds
- **Equities vs. Treasuries**: the reading explicitly flags that equities have a **much larger** covariance (and thus risk premium) than near-term government bonds — magnitude scales with the riskiness of the cash flow/price stream
- This section **completes the micro-foundation buildup** from 1.02–1.06: Equation 1 (general PV model) → 1.03 (expectations) → 1.04 (real risk-free rate via ITRS) → 1.05 (wealth & risk aversion) → 1.06 (risk premium via covariance). Expect subsequent readings to apply this framework to **specific** macro factors (inflation, growth, business cycle) and asset classes.