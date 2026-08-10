## Summary: 1.12 | The Default-Free Yield Curve and the Business Cycle (CFA Level II — Economics and Investment Markets)

---

### Learning Outcome
Same LOS as 1.08–1.10 — this section extends the framework to the **full yield curve shape** (level, slope, curvature) across the business cycle.

---

### Exhibit 8 — US Treasury and UK Gilt Curves: 2007 vs. 2011

**Observations, July 2007 → December 2011**:
$$\boxed{\text{US Treasury curve shifted DOWN 3–4 percentage points and became STEEPER}}$$

- **Short end** driven by Fed policy rate cuts: **5.25% → ~0%**
- **UK gilt curve** similarly saw short-end decline: BoE policy rate **5.75% → 0.50%**

**Curve shape comparison**:
- **US Treasury curve**: upward sloping on **all three** dates examined
- **UK gilt curve, July 2007**: **downward sloping** — UK government could borrow:
  - **1-year money at 6.25%**
  - **30-year money at 4.8%**
  - **50-year money at ~3.0%**
- By **end of 2011**, UK and US curves looked **similar** (both upward sloping)

---

### Decomposing Yield Curve Shifts — Real vs. Inflation Components

**Method**: Break down nominal yield curve shifts into (1) **break-even inflation (BEI)** component and (2) **real yield** component (using the BEI framework from 1.11).

**Findings, 2007–2011**:
$$\boxed{\text{US and UK BEI curves shifted DOWN by just under 1 percentage point across all maturities}}$$
$$\boxed{\text{US and UK NOMINAL curves shifted DOWN by MORE than 1 percentage point (US fell by up to 3 points)}}$$

**Interpretation**:
$$\boxed{\text{Nominal decline} > \text{BEI decline} \implies \text{Market participants saw the crisis as a bigger threat to GROWTH than to INFLATION}}$$

- By December 2011, US and UK BEI curves had both become **upward sloping**

**Important caveat**: This real/inflation decomposition analysis **implicitly assumes** the risk premium ($\pi_{t,s}$ from 1.11) is either **zero or constant over time** — an assumption the reading explicitly flags as **unrealistic**, since risk premiums are unlikely to be zero or stable.

---

### Example 12 — Level, Slope, and Curvature (Three Yield Curve Factors)

**Definitions** (first identified by Steeley 1990; Litterman and Scheinkman 1991):

| Factor | Meaning |
|---|---|
| **Level** | Whether rates are high or low **on average** |
| **Slope** | Steepness — how quickly/slowly rates change with maturity |
| **Curvature** | How much the curve deviates from a straight line |

**Principal Components Analysis (PCA) results** — US and UK curves, 3-month to 10-year maturities, Jan 1999–Jan 2014:

$$\boxed{
\begin{array}{l|c|c|c}
 & \text{Level} & \text{Slope} & \text{Curvature} \\
\hline
\text{United States} & 92.7\% & 6.9\% & 0.3\% \\
\text{United Kingdom} & 95.2\% & 4.5\% & 0.3\%
\end{array}
}$$

**Key takeaway**: The **level** factor (parallel up/down shifts) explains the **overwhelming majority** of yield curve movement — this pattern is described as **typical for developed-economy government bond yield curves**, not unique to the US/UK.

---

### What Drives Each Yield Curve Factor

**1. Level** — driven by:
- The level of **economic activity**
- Views of **future inflation** (since these are nominal bonds)

**2. Slope** — driven primarily by:
$$\boxed{\text{Magnitude of the risk premium (from Equation 5/6) between bond price and the inter-temporal rate of substitution}}$$
- A **positive slope** reflects this risk premium
- **NOT the only driver** — also shaped by **central bank policy** (Taylor-rule-like behavior):
  - **Recessions** → central banks lower policy rate → **short rates fall more** than long rates (since markets expect rates to normalize as recession recedes and growth/risk-free rates recover)
  - $\implies$ **Slope increases (steepens) during recessions**

**3. Curvature** — driven by:
- If investors expect **both** policy rates and short-term risk-free rates to **revert to normal** as recession recedes:
  - Curve becomes **steeper at the short end**
  - Curve becomes **flatter at the long end**
  - $\implies$ **Curvature increases** as a result of this differential expectation across maturities

---

### Practical Value

$$\boxed{\text{Yield curve shape (level, slope, curvature) provides valuable information to BOTH central banks and investors about business cycle conditions and expectations}}$$

---

### Exam Tips

- **Memorize the three yield curve factors and their PCA proportions**: Level dominates (~93–95%), slope is secondary (~5–7%), curvature is minor (~0.3%) — this hierarchy is **highly testable** and consistent across developed markets
- **Slope-recession relationship is a core testable mechanism**: recessions → central bank cuts short rates more than long rates → **curve steepens** — don't confuse this with the popular "inverted curve predicts recession" narrative; here the emphasis is on what happens **during/entering** a recession versus **before** one
- **Curvature logic**: driven by differential reversion expectations — short end reprices faster than long end as normalization is anticipated — a more nuanced, less commonly tested point but worth recognizing conceptually
- **Critical limitation to remember**: decomposing nominal yield shifts into "real vs. inflation" components (BEI framework) **assumes risk premium is zero/constant** — an assumption the reading explicitly calls unrealistic. This is a classic exam trap: don't over-interpret real/BEI decompositions without acknowledging this caveat
- **2007–2011 case study interpretation**: nominal yields fell **more** than BEI yields → market read the crisis as primarily a **growth shock**, not an inflation shock — a good template for interpreting any yield curve decomposition question
- **UK 2007 inverted curve example** (50-year at ~3.0% vs. 1-year at 6.25%) is a vivid, specific illustration of a **negatively sloped** curve — useful as a concrete exam reference point
- Ties together the entire Module 1 real/nominal/risk-premium framework (1.02–1.11) into its **practical application**: the shape of the observable yield curve