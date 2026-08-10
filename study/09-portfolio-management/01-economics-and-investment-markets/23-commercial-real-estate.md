## Summary: 1.23 | Commercial Real Estate (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Describe the **economic factors affecting investment in commercial real estate**. *(New sub-topic — extends the pricing framework to a third asset class.)*

---

### Real Estate as a Hybrid Asset Class

**Three distinguishing characteristics** frame the entire section:
1. **Bond-like** regular cash flow (rents)
2. **Equity-like** uncertain terminal value (property resale/redevelopment)
3. **Illiquid** — unlike bonds/equities, hard to convert to cash quickly

---

### 1. The Bond-Like Component — Rental Income

**Mechanics**: Rents are collected **net of ownership costs**, on a fixed schedule, from tenants. Some markets impose **"upward only"** rent restrictions (rents can rise but never fall for existing tenants); rents may also be **indexed to CPI**.

$$\boxed{\text{Rental income is analogous to BOND COUPON income}}$$

**Credit quality parallel**: 
$$\boxed{\text{Credit quality of a property portfolio} \leftrightarrow \text{Credit quality of the underlying TENANTS} \quad \text{(just as bond portfolio quality} \leftrightarrow \text{issuer credit ratings)}}$$

---

### 2. The Equity-Like Component — Terminal Value Uncertainty

**Key difference from bonds**: When a bond matures, investors get **face value** back (known). When a **lease expires**, the landlord must decide: re-rent, sell, or redevelop — and the **property's value at that time is uncertain**.

**Two drivers of terminal property value**:
1. **Location** — has the area become more/less desirable?
2. **State of the underlying economy** — strong demand vs. weak demand for property

$$\boxed{\text{Uncertain, potentially positive OR negative terminal value} \implies \text{Adds an EQUITY-LIKE dimension to real estate}}$$

**Common framing**: Real estate cash flow is often thought of as **"part bond, part equity."**

---

### 3. The Illiquidity Component

$$\boxed{\text{Commercial real estate can take MONTHS to YEARS to exit, with high transaction costs} \implies \text{Highly ILLIQUID relative to government bonds, investment-grade corporate debt, or public equities}}$$

---

### Equation 17 — The Pricing Formula for Commercial Real Estate

$$\boxed{
P_{i,t} = \sum_{s=1}^{N} \frac{E_t(CF_{i,t+s})}{\left(1 + \text{[discount rate components]}\right)^s}
}$$

**Key acknowledgment**: Expected cash flow $E_t(CF_{i,t+s})$ is **uncertain** because tenants may **default** on the rental agreement (same idea as bond issuer default risk).

---

### Building the Discount Rate — Three Tenant Scenarios

| Tenant Type | Discount Rate | Bond Analogy |
|---|---|---|
| **(1) Developed-economy government, inflation-indexed rent** | $(1 + l_{t,s})$ *(cash flows in real terms)* | Real default-free government bond |
| **(2) Developed-economy government, fixed nominal rent** | $(1 + l_{t,s} + \theta_{t,s} + \pi_{t,s})$ | Nominal default-free government bond |
| **(3) Corporate tenant, fixed nominal rent** | $(1 + l_{t,s} + \theta_{t,s} + \pi_{t,s} + \gamma^c_{i,t,s})$ | Credit-risky nominal bond |

**Two ADDITIONAL premiums needed for ALL three scenarios** (beyond the bond-analogous components):

1. **Property-specific risk premium** ($\gamma^{RE}$-type term) — analogous to the **equity risk premium**, compensating for uncertainty about the property's value **at lease end**
2. **Liquidity risk premium** ($\lambda_{i,t,s}$) — compensates for illiquidity

**Illiquidity logic**:
$$\boxed{\text{Illiquidity} \implies \text{Investors may be UNABLE to liquidate in bad economic times} \implies \text{Reduces the asset's usefulness as a consumption hedge} \implies \text{Requires a LIQUIDITY risk premium}}$$

**Full discount rates for the three cases**:
$$(1) \quad l_{t,s} + \gamma^{RE} + \lambda_{i,t,s}$$
$$(2) \quad l_{t,s} + \theta_{t,s} + \pi_{t,s} + \gamma^{RE} + \lambda_{i,t,s}$$
$$(3) \quad l_{t,s} + \theta_{t,s} + \pi_{t,s} + \gamma^c_{i,t,s} + \gamma^{RE} + \lambda_{i,t,s}$$

**Important nuance**: The **relative size** of each component varies by **lease length, tenant quality, and property location**.

---

### Worked Example 17 — Real Estate Investment Decision

**Given inputs**:
- Real risk-free rate: $l_{t,s} = 1.25\%$
- Expected inflation: $\theta_{t,s} = 2.5\%$
- Inflation uncertainty premium: $\pi_{t,s} = 0.50\%$
- Supermarket plc 10-year bond yield: $5.75\%$ → implied **credit spread** $\gamma^c = 1.50\%$ ($5.75\% - 1.25\% - 2.5\% - 0.50\%$)

**Property deal terms**:
- Investor buys the site; **Supermarket plc leases it back**
- **$500,000 annual rent in arrears** (first payment at year 1, last regular payment at year 10)
- **Lease term**: 10 years (matches the bond's maturity)
- **Estimated resale value after 10 years**: $10,000,000 (net of transaction costs)

**Investor's required premiums**:
- Property-specific risk premium: **0.50%**
- Liquidity premium: **1.0%**

$$\boxed{\text{Required return} = 5.75\% + 0.50\% + 1.0\% = 7.25\%}$$

**Valuation table (discounted at 7.25%)**:

$$\boxed{
\begin{array}{c|c|c}
\text{Year} & \text{Cash Flow} & \text{PV} \\
\hline
1 & \$500,000 & \$466,200 \\
2 & \$500,000 & \$434,686 \\
3 & \$500,000 & \$405,301 \\
4 & \$500,000 & \$377,903 \\
5 & \$500,000 & \$352,357 \\
6 & \$500,000 & \$328,538 \\
7 & \$500,000 & \$306,330 \\
8 & \$500,000 & \$285,622 \\
9 & \$500,000 & \$266,314 \\
10 & \$10,500,000 & \$5,214,543 \\
\hline
\textbf{Implied property value} & & \boxed{\$8,437,796}
\end{array}
}$$

**Decision rule**:
$$\boxed{\text{Asking price} < \text{Implied value (\$8,437,796)} \implies \text{Return EXCEEDS hurdle rate} \implies \text{Attractive investment}}$$

**Given**: Asking price = **$8,200,000** < $8,437,796 → implied return **exceeds** the 7.25% hurdle rate.

$$\boxed{\text{Recommendation: PROCEED with the purchase}}$$

---

### Exam Tips

- **"Part bond, part equity, plus illiquid" is the core conceptual framework** for this entire section — expect a question asking you to **identify/classify** which real estate cash flow components map to which asset class analogy
- **Equation 17's discount rate construction is a strong candidate for a calculation question**: know how to build up the rate layer-by-layer (real rate → nominal → credit risk → property-specific risk → liquidity) depending on tenant type — this directly mirrors the pattern from Examples 11 (1.09) and 15 (1.16)
- **Worked Example 17 is a complete, testable DCF-style problem**: practice replicating this table structure (annuity cash flows + terminal value, discounted at the fully-loaded required return) — a very likely exam question format
- **Liquidity premium logic**: illiquidity reduces an asset's value as a **consumption hedge** (can't sell when you need cash most, i.e., in bad times) — this ties back to the hedging-value framework from 1.06/1.14, applying the **same underlying logic** to a new risk source
- **Credit spread back-out technique** (from the Supermarket plc bond yield) reuses the exact method from Example 15 (1.16) — recognize this as a **recurring calculation pattern** across the reading
- **Decision rule**: compare **implied value from DCF** vs. **asking/purchase price** — if asking price is below implied value, the investment return **exceeds** the required hurdle rate, making it attractive (classic NPV-positive logic)
- This section demonstrates the **general applicability** of the Equation 1 present value framework — a strong unifying theme for the module's conclusion; expect either a **Module 1 summary reading** next, or this may be the **final application example** before the module wraps up