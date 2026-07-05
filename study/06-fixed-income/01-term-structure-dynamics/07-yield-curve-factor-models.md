## Summary: Yield Curve Factor Models (CFA Level II — Fixed Income)

---

### Shaping Risk

**Shaping risk**: Sensitivity of a bond's price to **changes in the shape** of the yield curve (not just parallel shifts).

**Why it matters:**
- Yield curve shifts are **rarely parallel** in practice
- Affects active bond management (trade positioning)
- Affects hedging strategies using swaps
- Affects valuation of **embedded options** in fixed-income instruments

---

### The Three-Factor Model (Litterman & Scheinkman, 1991)

**Core insight**: Most yield curve movements can be described as a combination of **three independent movements** — level, steepness, and curvature.

These three factors are extracted from the **variance-covariance matrix** of historical interest rate movements using principal component analysis (PCA).

---

### The Three Factors

| Factor | Description | Type of Shift | Variance Explained |
|--------|-------------|---------------|--------------------|
| **Level** | Upward or downward **parallel** shift of the entire curve | All maturities move in the same direction by a similar magnitude | **Largest** — most of total variance |
| **Steepness** | **Non-parallel** shift — short rates move more than long rates (or vice versa) — changes the slope | Flattening or steepening of the curve | **Second largest** |
| **Curvature** | Short-term and long-term rates rise while medium-term rates fall (or vice versa) — "twist" | Humping or bowing of the curve | **Smallest** |

---

### Each Factor's Characteristics

**Level (Factor 1):**
- Most important factor — explains the majority of yield curve variance
- Approximates a **parallel shift** in yields (up or down across all maturities)
- Reflection of broad macroeconomic forces (e.g., inflation expectations, monetary policy stance)

**Steepness (Factor 2):**
- Addresses the **shape/slope** of the curve
- Short-term yields typically move more than long-term yields
- Changes take place **over time** → explains less variance than level
- Associated with **flattening or steepening** trades in active management

**Curvature (Factor 3):**
- Has **negative impact on intermediate yields** and **positive impact on short- and long-term yields** (or vice versa)
- Smallest impact of the three factors
- Describes the "twist" or "bow" in the curve
- Relevant for **butterfly trades** (long the wings, short the belly, or vice versa)

---

### Historical Context (Exhibits 9 & 10)

**US Swap Curve (2006-2020):**
- Highest yields: March 2006 (pre-financial crisis)
- Lowest yields: March 2020 (COVID-19 turmoil)
- Post-QE: yields partially rebounded before 2020 (tighter monetary policy)

**European Swap Curve (2006-2020):**
- Highest yields: March 2006
- Lowest/negative yields: Persisted near zero through 2019-2020 (continued accommodative ECB policy)
- Stark contrast vs. US reflects different policy trajectories

---

### Managing Yield Curve Risk with Factor Models

**Process:**
1. Decompose yield curve moves into level, steepness, and curvature factors
2. Measure each bond/portfolio's **exposure (sensitivity)** to each factor
3. Use these exposures to:
   - **Hedge**: offset sensitivities using swaps or other instruments
   - **Position**: express views on specific factors (e.g., bet on steepening without taking a duration bet)

**Key advantage**: Reduces complex multidimensional rate movements to just **three manageable risk exposures**.

---

### Exam Tips

- **Three factors**: Level (largest variance), Steepness (second), Curvature (smallest) — know the order
- **Level ≈ parallel shift**: all maturities move together; dominant source of interest rate risk
- **Steepness**: short rates move more than long rates typically — flattening/steepening
- **Curvature**: intermediate rates move opposite to short and long rates — "butterfly" risk
- **Shaping risk** ≠ duration risk — duration measures parallel shift sensitivity; shaping risk captures non-parallel moves
- **Yield curve shifts are rarely parallel** — this is the key motivation for multi-factor models
- **PCA**: the mathematical technique used to extract these factors from historical covariance data (not required to compute, but understand the concept)
- Factor models are essential for **active management** (positioning on expected curve shape) and **hedging** (immunizing against specific types of curve movement)