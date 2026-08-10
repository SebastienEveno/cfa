---
layout: page
title: "1.05 | The Discount Rate on Real Default-Free Bonds: Uncertainty and Risk Premiums"
permalink: /study/09-portfolio-management/01-economics-and-investment-markets/05-uncertainty-and-risk-premium/
prev: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/04-discount-rate-real-default-free-bonds/
next: /cfa/study/09-portfolio-management/01-economics-and-investment-markets/06-risk-premiums-on-risky-assets/
---
## Summary: 1.05 | The Discount Rate on Real Default-Free Bonds: Uncertainty and Risk Premiums (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Same LOS as 1.02/1.04 — economic factors affect market values via default-free rates, cash flow timing/magnitude, or risk premiums. This section examines **how uncertainty and wealth interact** to shape risk premiums.

---

### Core Principle #1 — Risk Aversion and the Risk Premium

$$\boxed{\uparrow \text{Uncertainty in payoff} \implies \downarrow \text{Expected marginal utility} \implies \text{Investor requires} \uparrow \text{expected return (risk premium)}}$$

**Why**: This follows from **decreasing marginal utility of wealth** — the utility **lost** from a decline in wealth is **larger** than the utility **gained** from an equivalent increase in wealth. This asymmetry is the definition of **risk aversion**.

**Link back to 1.04**: This is the same property observed in Example 1, where the ITRS was **lower in the good state** than the **bad state** — investors value payoffs more when times are bad, precisely because of this marginal utility asymmetry.

---

### Core Principle #2 — Decreasing Absolute Risk Aversion (DARA)

$$\boxed{\text{As wealth/income} \uparrow \implies \text{Absolute risk aversion} \downarrow \implies \text{Amount invested in risky assets} \uparrow}$$

**Key distinction** (testable):

| Concept | Relates To |
|---|---|
| **Absolute risk aversion** | The **amount** ($) held in risky assets at different wealth levels |
| **Relative risk aversion** | The **fraction** (%) of wealth held in risky assets at different wealth levels |

This reading assumes **decreasing absolute risk aversion** — wealthier investors hold **more dollars** in risky assets as wealth rises.

**Consequence for risk premiums**:
- Wealthier investors: smaller average loss of marginal utility from a given risk → **more willing** to take on risk → **demand a lower risk premium**
- Poorer investors: larger marginal utility loss from the same risk → **demand a higher risk premium**
- **Equilibrium**: wealthier investors buy more risky assets until their own marginal utility declines enough that **all investors converge** to the same willingness to invest (market clearing)

---

### Worked Example 4 — Increasing Wealth Shifts the ITRS

**Setup**: Take Example 1's shock $z_{t+s}$ and **add 0.1** to it in both states — this raises the investor's resources uniformly (a wealth increase unrelated to good/bad state).

**Result**:
$$\boxed{E_t(\Psi)_{\text{wealthier}} = 0.954350 \quad \text{vs.} \quad E_t(\Psi)_{\text{original}} = 0.954498}$$
$$\boxed{\text{Difference} = 0.954498 - 0.954350 = 0.000148 \text{ (lower for the wealthier investor)}}$$

**Interpretation chain**:
1. Wealthier investor's ITRS is **lower** in both good and bad states
2. She will only buy the safe bond at a **lower price** (i.e., requires a **higher return**/less willing to hold the safe asset at the old price)
3. If that lower price isn't the equilibrium price, she **substitutes toward risky assets**
4. Because of DARA and satisfied fundamental consumption needs, **wealthy investors demand a lower risk premium** for holding risky assets than poorer investors, all else equal

---

### Aggregate Market Effect — Rising Uncertainty → Higher Savings → Higher Returns

**Chain of logic** (testable narrative):

$$\boxed{
\begin{array}{l}
\text{If wealthy investors are a large share of the market} \\
\implies \text{they push down the price of \textbf{safe} assets} \\
\implies \text{equilibrium return on the safe asset \textbf{rises}} \\
\implies \text{poorer investors are incentivized to \textbf{save more}} \\
\text{(to partially self-insure against future bad states)} \\
\implies \text{Higher future resources} \implies \text{lower future marginal utility} \\
\implies \text{Equilibrium price (Eq. 3) falls further} \\
\implies \boxed{\text{Investors are compensated with a HIGHER expected return when income uncertainty rises}}
\end{array}
}$$

**Bottom line**: When uncertainty about future income increases **economy-wide**, **all investors increase savings**, which — through the equilibrium pricing mechanism — pushes safe-asset prices down and **required returns up**.

---

### Exam Tips

- **Absolute vs. relative risk aversion** is a classic multiple-choice discriminator — absolute = dollar amount in risky assets; relative = percentage/fraction of wealth in risky assets. This reading assumes **decreasing absolute** risk aversion (not necessarily decreasing relative)
- **Directionality to memorize**: Higher wealth → lower risk aversion (absolute) → smaller required risk premium → wealthy investors are natural buyers of risk during dislocations
- **Aggregate uncertainty ≠ individual uncertainty**: the reading's final point is a **macro/equilibrium** result — economy-wide increases in income uncertainty raise **everyone's** savings and thus raise the **equilibrium required return** on safe assets, not just affect individual risk premiums in isolation
- **Numerical calculations (Example 4) are illustrative, not independently testable** — per the reading's own framing in 1.04, focus on the **conceptual chain of causation**, not reproducing the arithmetic
- Ties directly back to Equation 1/2 from 1.02: this section is building out the **micro-foundations** for why $\gamma_i$ (risk premium) exists and how it varies with wealth and uncertainty — expect later sections to connect this to specific asset classes and business-cycle dynamics