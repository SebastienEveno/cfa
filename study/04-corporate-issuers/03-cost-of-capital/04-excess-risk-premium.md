## Summary: The Equity Risk Premium (ERP) (CFA Level II)

---

### What Is the ERP?

$$ERP = E(R_{equity}) - R_f$$

The **additional return investors demand** for holding risky equities over a risk-free asset. It feeds directly into CAPM:

$$r_e = R_f + \beta \times ERP$$

---

### Two Broad Approaches

| Approach | Based On | Also Called |
|----------|---------|------------|
| **Historical** | Past realized returns | Ex-post |
| **Forward-looking** | Current expectations | Ex-ante |

---

### Approach 1: Historical ERP

$$ERP_{historical} = \overline{R_{equity}} - \overline{R_f} \text{ (over sample period)}$$

#### Four Key Decisions

**1. Equity Index Selection**
- Use broad-based, **market-value-weighted** index
- Examples: S&P 500, Russell 3000, MSCI EAFE, Shanghai Composite

**2. Time Period**

| Period Length | Advantage | Disadvantage |
|--------------|-----------|-------------|
| **Longer** | Lower standard error; less noise | Distant past may not reflect current market |
| **Shorter** | More representative of current conditions | More noise; may capture only part of a cycle |

> In general, analysts **prefer longer periods** to reduce standard error — but beware of non-stationarity.

**3. Mean Type**

| Mean | Best For | Key Advantage | Key Disadvantage |
|------|---------|--------------|-----------------|
| **Arithmetic** | Single-period models (CAPM) | Easy; considers all observations | Sensitive to outliers; overestimates terminal wealth |
| **Geometric** | Multi-period / terminal wealth | Less sensitive to outliers; estimates terminal wealth | Generally preferred in practice |

**4. Risk-Free Rate Proxy**

| Proxy | Advantage | Disadvantage |
|-------|-----------|-------------|
| **Short-term T-bill** | Truly risk-free (zero-coupon, known return upfront) | Doesn't match duration of infinite-life equity |
| **Long-term government bond YTM** | Matches equity duration better | Not truly risk-free (coupon reinvestment rate unknown) |

> **Industry preference**: Long-term government bond YTM — despite reinvestment risk, better duration match to equity

#### Limitations of Historical Approach
- **Non-stationarity**: ERP may have permanently shifted; long historical averages may be misleading
- **Survivorship bias**: Failed/poor-performing companies removed from indexes → historical returns **overstated**

---

### Approach 2: Forward-Looking ERP

Three methods:

---

#### Method 1: Survey-Based Estimates
- Ask experts for their ERP expectations
- Developing markets show higher ERP than developed markets in surveys
- **Limitation**: Subject to **recency bias** (overweight recent returns) and **confirmation bias**

---

#### Method 2: Dividend Discount Model (Gordon Growth Model)

$$r_e = \frac{D_1}{P_0} + g$$

$$\boxed{ERP = \frac{D_1}{P_0} + g - r_f}$$

Where:
- $D_1/P_0$ = forward dividend yield of broad market index
- $g$ = expected long-term earnings growth rate
- $r_f$ = risk-free rate

**Worked example (FTSE 100):**
$$ERP = 1.94\% + 5.0\% - 1.63\% = 5.31\%$$

**Important nuances:**
- Assumes **constant P/E** — if P/E expected to expand/contract, adjustment needed
- Some analysts add **buyback yield** to dividend yield to reflect total payout
- For high-growth economies: use **multi-stage DDM** (fast growth → transition → mature)

**Limitation**: Constant P/E assumption may not hold

---

#### Method 3: Grinold-Kroner Macroeconomic Model

$$\boxed{ERP = [DY + \Delta(P/E) + i + g - \Delta S] - E(r_f)}$$

| Factor | Symbol | Common Proxy |
|--------|--------|-------------|
| Dividend yield | $DY$ | Broad market index dividend yield |
| P/E change | $\Delta(P/E)$ | Analyst judgment (often = 0) |
| Expected inflation | $i$ | Nominal yield − real yield (e.g., Treasury − TIPS) |
| Real earnings growth | $g$ | Real GDP growth |
| Shares outstanding change | $\Delta S$ | Market/period specific (dilution effect) |

**Estimating inflation:**
$$i \approx \frac{1 + \text{Nominal yield}}{1 + \text{Real yield}} - 1 \approx \text{Nominal} - \text{Real yield}$$

**Worked example (Scenario 1):**
$$ERP = \{2.2 + 0 + [1.6 + 3.0 - (-0.7)]\} - 2.5 = 5.0\%$$

**Key insight**: Higher inflation → **does not change ERP** (both $i$ and $r_f$ rise equally). Lower dividend yield → **decreases ERP**.

**Limitation**: Not appropriate for **developing markets** where equities represent a small share of the economy

---

### Limitations Comparison

| Method | Key Limitation |
|--------|---------------|
| **Historical** | Non-stationarity; survivorship bias |
| **Survey** | Recency bias; confirmation bias |
| **DDM** | Constant P/E assumption; needs adjustment for multiple expansion/contraction |
| **Grinold-Kroner** | Modeling errors; behavioral biases in forecasts; inappropriate for small/developing markets |

---

### Master Formula Summary

$$\boxed{ERP_{historical} = \overline{R_{market}} - \overline{R_f}}$$

$$\boxed{ERP_{DDM} = \frac{D_1}{P_0} + g - r_f}$$

$$\boxed{ERP_{GK} = [DY + \Delta(P/E) + i + g - \Delta S] - r_f}$$

---

### Exam Tips

- **Four historical ERP decisions**: index, time period, mean type, risk-free proxy — know all four cold
- **Geometric mean preferred** — less sensitive to outliers, better terminal wealth estimate
- **Arithmetic mean** = consistent with single-period CAPM models
- **Survivorship bias → inflates** historical ERP estimates
- **Grinold-Kroner**: inflation changes don't affect ERP; DY changes do
- If asked to compute ERP from both approaches for the same market, **results will differ** — both can be valid, just different assumptions
- **Long-term government bond** = industry standard risk-free proxy despite reinvestment risk