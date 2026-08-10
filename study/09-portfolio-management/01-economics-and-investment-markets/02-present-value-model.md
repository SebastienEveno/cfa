## Summary: 1.02 | The Present Value Model (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Explain how economic factors affect market values only through: (1) default-free interest rates across maturities, (2) timing/magnitude of expected cash flows, and (3) risk premiums.

---

### The Fundamental Present Value Formula

$$\boxed{
V_{i,t} = P_{i,t} = \sum_{s=1}^{N} \frac{E_t(CF_{i,t+s})}{(1 + l_{t,s} + \theta_{t,s} + \gamma_{i,t,s})^s}
}$$

**Where:**
- $V_{i,t}$ = value of asset $i$ at time $t$ (= market price today)
- $N$ = number of cash flows over the asset's life
- $E_t(CF_{i,t+s})$ = expected (uncertain, nominal) cash flow $s$ periods from now, conditional on info available today
- $l_{t,s}$ = yield to maturity on a **real default-free** investment paying 1 unit of currency $s$ periods forward
- $\theta_{t,s}$ = **expected inflation rate** between $t$ and $t+s$
- $\gamma_{i,t,s}$ = **risk premium** required for asset $i$'s cash-flow risk at $s$ periods forward

**Key takeaway**: This general formula applies to **any** financial instrument — zero-coupon bonds (single cash flow, $N=5$ for a 5-year bond with zeros in years 1–4), or equities (technically $N \to \infty$ given indefinite dividend streams).

---

### Transmission Mechanism — How Economics Affects Prices

$$\boxed{\text{Economic effects on asset prices flow through only 2 channels:}}$$
1. **Numerator** — changes to expected cash flows
2. **Denominator** — changes to the discount rate(s) applied to those cash flows

---

### The Three Components of the Discount Rate

$$\boxed{r_{i,t,s} = l_{t,s} + \theta_{t,s} + \gamma_{i,t,s}} \quad \text{(additive approximation of the exact multiplicative expression)}$$

| Component | Meaning | Example Analogy |
|-----------|---------|------------------|
| **$l_{t,s}$** | Real default-free rate — return required for a real, default-free FI security | Inflation-linked government bond (developed market) |
| **$\theta_{t,s}$** | Expected inflation compensation — extra return for accepting *nominal* (vs. real) payments | Compensates for erosion of purchasing power |
| **$\gamma_{i,t,s}$** | **Asset-specific risk premium** — compensation for cash-flow uncertainty | Varies by asset class; drives differentiation between asset classes |

---

### Nature of the Risk Premium ($\gamma_i$)

- **Not limited to default risk** — can also capture:
  - **Liquidity risk**: inability to convert an asset to cash quickly near fair value (e.g., commercial real estate, high-yield bonds/loans)
  - Notably, liquidity can **vanish precisely when needed most** — MBS during the 2008–09 GFC became illiquid just as investors' risk aversion spiked
- **Varies across time**: as perceptions of growth, inflation, and cash-flow risk shift
- **Rises in recessions**: investors become less willing/able to bear default risk → risk premiums widen, especially for non-default-free assets
- **Asset-specific** (superscript $i$): size and behavior of $\gamma_i$ differs by asset class — this is largely *why* asset classes are distinct from one another

---

### Certainty Spectrum of Cash Flows

- **Low uncertainty**: US Treasuries, German Bunds — low probability of missed payments despite rating actions (e.g., US losing AAA from S&P)
- **High uncertainty**: equities — dividend size/timing uncertain, plus possibility of zero dividends in bankruptcy

---

### Exam Tips

- **Core exam link**: Every economic-factor discussion in this reading traces back to this equation — always ask "does this factor hit cash flows (numerator) or the discount rate (denominator)?"
- **Memorize the 3-part discount rate decomposition**: $l_{t,s}$ (real rate) + $\theta_{t,s}$ (inflation) + $\gamma_{i,t,s}$ (risk premium) — this is the reading's central organizing framework
- $l_{t,s}$ and $\theta_{t,s}$ are **largely asset-independent** (driven by the macro environment); $\gamma_{i,t,s}$ is what makes returns **asset-specific**
- Remember: the risk premium $\gamma_i$ is **not just default risk** — liquidity risk is explicitly called out as a component, and it's testable that liquidity risk can spike during crises (correlated with, not independent of, other risk factors)
- The formula is described as an **additive approximation** of a true multiplicative relationship — don't be surprised if the exam notes this is a simplification
- Expect subsequent sections to **decompose $\gamma_i$ further** by asset class (equities vs. bonds vs. real estate, etc.) — this section sets up that framework