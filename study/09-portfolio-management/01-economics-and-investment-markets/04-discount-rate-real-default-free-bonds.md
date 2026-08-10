## Summary: 1.04 | The Discount Rate on Real Default-Free Bonds: Interest Rates (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Same as 1.02/1.03 — economic factors affect market values only via: default-free rates, cash flow timing/magnitude, or risk premiums. This section drills into the **first channel**: real default-free interest rates.

---

### The Core Idea — Interest Rates as Opportunity Cost

**Setup**: Buying any financial asset means **deferring current consumption**. The aggregation of all individual saving/consumption decisions determines $l_{t,s}$ — the **real default-free rate** in Equation 1.

**Thought experiment bond**: 
- Issued by a highly-rated developed-economy government (negligible default risk)
- **Inflation index-linked** (or assume a no-inflation world) → removes inflation concerns
- Pays $1 at maturity, $s$ periods from now

**Key question**: Why would investors require *any* return on a bond that's default-free and inflation-proof? Answer: **the opportunity cost of forgone consumption today**, not compensation for risk of loss.

---

### The Inter-Temporal Rate of Substitution (ITRS)

$$\boxed{\Psi_{t,t+s} = \frac{\text{Marginal utility of consumption at } t+s}{\text{Marginal utility of consumption at } t}}$$

**Behavioral logic**:
- **Good times** → current income/consumption high → marginal utility of **today's** consumption is **low**
- **Bad times** → current income/consumption low → marginal utility of **today's** consumption is **high**
- Investors get **more utility** from a payoff that arrives in **bad** times than in good times (diminishing marginal utility of wealth)
- $\Psi$ is a **random variable** — future circumstances (e.g., salary) are uncertain, so investors act on **expectations**, conditional on current information

---

### Pricing Equation for a Real Default-Free Zero-Coupon Bond

$$\boxed{P_{t,s} = E_t(\Psi_{t,t+s})}$$

The bond's price today = the investor's **expected** inter-temporal rate of substitution for trading consumption at $t$ vs. $t+s$.

---

### Worked Example 1 — Pricing with a Random Shock

**Setup**: $\Psi_{t,t+s} = f(z_{t+s})$, where $z_{t+s}$ is a **random shock** (mean zero) taking:
- A **negative** value (bad state), probability = **0.4**
- A **positive** value (good state), probability = **0.6**

**Results**:
$$\boxed{P_{\text{bad state}} = 0.954676 \qquad P_{\text{good state}} = 0.954379}$$
$$\boxed{P_{t,1} = E_t(\Psi) = 0.4(0.954676) + 0.6(0.954379) = 0.954498}$$

**Interpretation**:
- The bond's value in the **bad state is higher** ($0.954676 > 0.954379$) — consistent with investors valuing payoffs more when times are bad
- Investor is willing to pay **$0.954498 today for $1 in one year**
- These shock values are calibrated to be consistent with the **actual US yield curve, Jan 1999–Jan 2014** (derivation beyond scope)

---

### Equilibrium: How Individual Decisions Converge to a Market Price

**Mechanism** (arbitrage-like convergence process):

| Condition | Investor Response | Effect on $\Psi$ | Net Market Effect |
|---|---|---|---|
| Market price **< personal $\Psi$** (bond looks "cheap" to investor) | **Buy more** bonds | Current consumption ↓, marginal utility today ↑ → **expected $\Psi$ falls** | If widespread: demand ↑, price ↑ |
| Market price **> personal $\Psi$** (bond looks "expensive") | **Buy less** | Current consumption ↑, marginal utility today ↓ → **$\Psi$ rises** | If widespread: demand ↓, price ↓ |

$$\boxed{\text{Equilibrium: Market price} = \text{expectation of ITRS for EVERY participating investor}}$$

**Worked Example 2**: Market price = $9,540/$10,000; investor's own $\Psi$ implies $9,544.98$. Since the investor values the bond **above** market price, she **buys** — pushing the convergence process described above.

---

### From Price to Return — The Real Risk-Free Rate

$$\boxed{l_{t,s} = \frac{1 - P_{t,s}}{P_{t,s}}} \quad \text{(one-period case, Equation 4)}$$

**Key relationship**: 
$$\boxed{\text{Real risk-free rate} \text{ is \textbf{inversely related}\ to the inter-temporal rate of substitution}}$$

- **Lower bond price** → **higher return** required
- Higher required return → **current consumption matters more** (relatively) to the investor **vs.** future consumption

**Worked Example 3**: Using $P_{t,1} = 0.954498$:
$$\boxed{l_{t,1} = \frac{1 - 0.954498}{0.954498} = 0.047671 = 4.7671\%}$$

---

### Exam Tips

- **Non-testable calculus**: The reading explicitly notes Equations 3–6 and their derivations are **not directly testable** — focus on the **intuition**, not reproducing the exponential-form math
- **Core intuition to retain**: Real risk-free rates emerge from the **aggregate willingness of investors to defer consumption** — this is a **general equilibrium** story, not a "riskless asset = zero return" fallacy
- **Countercyclical payoff value**: An asset paying off in **bad economic times** is worth **more** to risk-averse investors (higher marginal utility) — this logic underpins risk premium concepts later in the reading
- **Convergence mechanism** is testable conceptually: mispriced bonds trigger buying/selling that shifts individual $\Psi$ expectations until they align with the market-clearing price
- **Sign convention**: Higher bond price ↔ lower yield ↔ lower real rate; this inverse price-return relationship is fundamental bond math dressed in the ITRS framework
- Keep straight: this section only covers the **real, default-free** component ($l_{t,s}$) — inflation ($\theta_{t,s}$) and risk premium ($\gamma_i$) are addressed in later sections, building back to the full Equation 1 discount rate