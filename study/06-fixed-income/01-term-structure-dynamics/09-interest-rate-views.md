## Summary: Developing Interest Rate Views Using Macroeconomic Variables (CFA Level II — Fixed Income)

---

### The Bond Risk Premium

$$\boxed{\text{Bond risk premium} = E(\text{Return on long-term bond}) - \text{Short-term risk-free rate}}$$

Also called: **term premium** or **duration premium**.

- Measured using **government bonds** (isolates default-free rate uncertainty)
- **Forward-looking** — must be estimated (not an observed historical return)
- Credit, liquidity, and other risks add additional premia for specific bonds

---

### Key Macroeconomic Drivers of Bond Yields

**Research summary**: Inflation, GDP, and monetary policy explain most bond yield variance.

| Yield Segment | Primary Driver (≈2/3) | Secondary (≈1/3) |
|--------------|----------------------|-----------------|
| **Short- and intermediate-term** | **Monetary policy** | Real economy growth + inflation (roughly equal) |
| **Long-term** | **Inflation** | Monetary policy |

---

### Monetary Policy and Yield Curve Shape

| Economic Phase | Central Bank Action | Yield Curve Effect | Name |
|---------------|--------------------|--------------------|------|
| **Expansion** | Raise benchmark rates | Short rates rise more than long rates → **flatter curve** | **Bearish flattening** |
| **Recession / anticipated recession** | Cut benchmark rates | Short rates fall more than long rates → **steeper curve** | **Bullish steepening** |

> Short-term rates are **procyclical** — rise with expansion, fall in recession.

**QE (large-scale asset purchases):**
- Fed purchases T-bonds and MBS → increases money supply
- Drives down **bond risk premium**
- Encourages capital allocation to higher-risk assets
- Impacts **term structure** by raising demand across multiple maturity segments → suppresses yields

---

### Other Key Drivers of Bond Prices/Yields

| Driver | Effect on Yields |
|--------|-----------------|
| **↑ Fiscal deficit (more borrowing)** | ↑ Bond supply → **↑ yields** (supply-side pressure) |
| **↓ Fiscal deficit / fiscal surplus** | ↓ Bond supply → **↓ yields** (e.g., US late 1990s: Treasury stopped issuing 30-yr bonds → long yields fell) |
| **Longer government debt maturity structure** | ↑ Supply of long-term bonds → **↑ long-term yields** (segmented market effect) |
| **↑ Domestic investor demand** (pension funds, insurers) | **↓ yields** / ↓ bond risk premium |
| **↑ Non-domestic investor demand** (reserve accumulation, FX management) | **↓ yields** / ↓ bond risk premium |
| **↑ Non-domestic flows out** | **↑ yields** / ↑ bond risk premium |
| **Flight to quality** (market stress) | **↓ long-term yields more than short** → **bullish flattening** |

---

### Flight to Quality

**Definition**: In uncertain markets, investors sell risky assets (equities, commodities) → buy default-risk-free government bonds.

**Yield curve effect**: Long-term rates fall more than short-term rates → **bullish flattening** (opposite of economic expansion pattern).

---

### Yield Curve Movement Summary

| Movement | Description | Typical Cause |
|---------|-------------|---------------|
| **Bearish flattening** | Short rates ↑ more than long rates | Central bank tightening (expansion) |
| **Bullish steepening** | Short rates ↓ more than long rates | Central bank easing (recession) |
| **Bullish flattening** | Long rates ↓ more than short rates | Flight to quality; QE at long end |
| **Bearish steepening** | Long rates ↑ more than short rates | Fiscal concerns; inflation expectations rising at long end |

---

### Trading Strategies Based on Rate Views

**Rate level views:**
| View | Action |
|------|--------|
| Rates will **fall** | **Extend portfolio duration** (benefit from rising bond prices) |
| Rates will **rise** | **Shorten portfolio duration** (reduce exposure to falling bond prices) |

**Curve shape views (often designed to be duration-neutral):**
| View | Trade |
|------|-------|
| Curve **steepens** (long rates rise relative to short) | **Short long-term bonds + buy short-term bonds** |
| Curve **flattens** (short rates rise relative to long) | **Buy long-term bonds + short short-term bonds** |

**Bullet vs. Barbell:**
| Portfolio Type | Description | Best For |
|---------------|-------------|---------|
| **Bullet** | Concentrated at single maturity | Steepening environment |
| **Barbell** | Combines short + long maturities (similar duration) | Flattening / curvature play |

> **Bullish flattening** → shift from bullet to **barbell** (benefit from long rates falling more than short rates).

---

### Forward Rates as Reference Points

> **Any interest rate view must be evaluated vs. the current forward curve** — the forward curve represents what's already priced in. Only deviations from the forward curve generate alpha.

---

### Example 11 — Knowledge Check Answers

**Q1 (Salaz expects economic recovery over coming year — which yield curve change is consistent?):**
- Economic growth → inflation expectations rise → monetary policy likely to tighten
- Short rates rise as Fed tightens; long rates also rise, but central focus is spread between long and short
- Recovery from flat recession curve → curve should **steepen** as growth expectations return (long-term rates pricing in higher future growth/inflation)
→ **C. Increase in the term spread of long-term rates over short-term rates** — recovering economy typically associated with rising long rates and steeper curve (bullish steepening transitioning to potential bearish steepening as growth builds).

**Q2 (Fed reduces QE asset purchases of long-term bonds during recovery):**
- Fed QE suppressed long-term yields
- Reducing QE → less demand for long-term bonds → long-term yields **rise more**
- This amplifies the natural steepening from economic recovery (both economic growth and reduced QE push long rates higher)
→ **A. Amplify the effect of increased economic activity on the term spread** — reduced QE removes downward pressure on long-term rates → term spread widens even more.

---

### Exam Tips

- **Short/intermediate yields**: primarily driven by **monetary policy**
- **Long-term yields**: primarily driven by **inflation uncertainty**
- **Bearish flattening**: expansion/tightening (short rates rise more) — common exam scenario
- **Bullish steepening**: recession/easing (short rates fall more) — classic cycle bottom
- **Bullish flattening**: flight to quality OR QE at long end (long rates fall more)
- **Bearish steepening**: fiscal/supply pressures or inflation concerns at long end (long rates rise more)
- **Duration-neutral curve trades**: short long, long short (steepening bet) or long long, short short (flattening bet) — eliminates level exposure
- **Bullet vs. barbell**: similar overall duration but different curvature/steepness exposure
- **Forward rates = baseline**: alpha only generated by correctly predicting deviations from what's already priced in the forward curve
- **QE**: suppresses long-term yields; tapering/ending QE has the opposite effect — raises long-term yields and widens term spread