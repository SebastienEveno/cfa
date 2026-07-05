## Summary: The Term Structure of Credit Spreads (CFA Level II — Fixed Income)

---

### What Is the Credit Spread Term Structure?

**Credit curve**: Shows the spread over a benchmark security for a **single issuer** across maturities (short to long) — analogous to the government yield curve but for credit spreads.

**Uses**: Issuers, underwriters, and investors use it to:
- Price new debt issuances
- Inform secondary market trading decisions
- Determine fair value spreads (matrix pricing extension)
- Gauge risk/reward trade-offs across maturities
- Monitor policymaker impact on risky debt markets

---

### Four Key Drivers of the Credit Spread Term Structure

#### 1. Credit Quality

| Credit Tier | Credit Curve Shape | Why |
|------------|-------------------|-----|
| **Investment-grade (high quality)** | Flat or slightly upward-sloping | Spreads can only go in one direction (already near zero lower bound); short-term spread migration limited |
| **High-yield** | Steeper upward slope (normal); OR inverted | Greater sensitivity to credit cycle; higher default probability at longer maturities when conditions improve |
| **Distressed debt** | **Steeply inverted** | Bond converges to recovery rate regardless of maturity → longer maturities show *lower* spreads (price-based rather than spread-based trading) |

#### 2. Financial Conditions (Macroeconomic)

| Economic Environment | Benchmark Yields | Credit Spreads |
|---------------------|-----------------|----------------|
| **Stronger growth** | ↑ Higher | ↓ Lower (improved cash flows, lower default probability) |
| **Weaker growth/recession** | ↓ Lower | ↑ Higher (stress, higher default probability) |

> **Countercyclical relationship**: spreads and benchmark rates tend to move in **opposite directions** across the business cycle.

#### 3. Market Supply and Demand Dynamics

- **New/recently issued (on-the-run) bonds** drive most trading volume and spread volatility → heavily influence credit curve shape
- **Refinancing activity**: issuer replacing short-term debt with long-term debt can **steepen** the curve (more supply at long end → wider spreads there) — but may be offset by tighter bid-offer at liquid long maturities
- **Illiquid bonds**: wider bid-offer spreads can distort the term structure → check consistency of trade size and frequency across maturities
- **Anticipated supply** at a specific maturity → flattens the credit curve at that point

#### 4. Company-Specific (Microeconomic) Factors — Structural Models

**Traditional analysis**: Industry classification, leverage, cash flow, profitability vs. peers

**Forward-looking structural models** (e.g., Moody's KMV):
- Uses equity price, equity volatility, and balance sheet data
- Derives **implied default probability**

$$\text{↑ Equity volatility} \implies \text{↑ Implied default probability} \implies \text{Steeper credit spread curve}$$

**Bloomberg DRSK screen**: Combines company-value analysis with fundamental credit ratios → composite default probability assessment.

---

### Practical Considerations

#### Choice of Benchmark

| Benchmark | Advantage | When to Use |
|-----------|-----------|-------------|
| **On-the-run government bonds** | Lowest default risk; most liquid | When maturity closely matches corporate bond |
| **Swap curve (interbank)** | Greater liquidity for off-the-run maturities; continuous term structure | When corporate bond maturity doesn't match liquid government tenors |

> Interpolation between government yields is often required but may distort analysis for illiquid maturities → swap curve often preferred.

#### Bond Comparability Requirements

For term structure analysis to be valid, include **only**:
- Senior unsecured general obligations
- Same issuer
- No embedded options, first/second lien provisions, or unique features

> Note: Cross-default provisions mean **all bonds from the same issuer** are subject to recovery in bankruptcy — regardless of maturity.

---

### Quantifying Curve Shape — Changing Default Probability Over Time

**Impact of raising hazard rate from 1.25% to 1.50% (5-year zero-coupon bond):**

| Parameter | 1.25% POD | 1.50% POD |
|-----------|-----------|-----------|
| CVA | 3.1549 | 3.7670 |
| Fair value | 83.1060 | 82.4939 |
| YTM | 3.77% | 3.9240% |
| Credit spread | **77 bps** | **92 bps** |

---

### Building an Upward-Sloping Credit Curve (Exhibit 32)

**Setup**: Recovery = 40%, benchmark rate = 3% flat; POD varies by period:
- Years 1-3: POD = 1.00%
- Years 4-5: POD = 2.00%
- Years 6-10: POD = 3.00%

**Results across three bond maturities:**

| Maturity | CVA | Fair Value | YTM | Credit Spread |
|---------|-----|-----------|-----|--------------|
| 3-year | 1.6308 | 89.8833 | 3.6192% | **62 bps** |
| 5-year | 3.5259 | 82.7350 | 3.8633% | **86 bps** |
| 10-year | 8.9187 | 65.4907 | 4.3235% | **132 bps** |

→ **Upward-sloping credit curve** driven by increasing default probability expectations at longer horizons.

**Flat credit spread curve**: Stable default expectations across all maturities.

---

### Upward vs. Downward Sloping Credit Curves

#### Upward-Sloping (Most Common for Investment Grade)

**Characteristics of issuer:**
- High credit quality, strong competitive position, stable industry
- Low leverage, strong cash flows, high profit margin
- Low near-term credit spreads rising with maturity (greater macro/competitive uncertainty long-term)

#### Downward-Sloping (Inverted) — Two Scenarios

**Scenario 1 — High-yield/cyclical (constructive interpretation):**
- **LBO/PE acquisition**: high current leverage, but investors expect restructuring to improve efficiency → improving future cash flows → tighter long-term spreads
- **Industry at cycle trough**: current stress, but expected recovery → near-term spreads high, long-term spreads lower

**Scenario 2 — Distressed debt (optical phenomenon):**
- **Near-certain default**: bonds trade at price converging to **recovery rate** regardless of maturity
- Short-maturity bond: face value (100) → recovery (40) = large loss in short time → **very high spread**
- Long-maturity bond: face value (100) already deeply discounted to near recovery → **lower apparent spread**

**Numerical example (near-certain default, recovery = 40%):**

| Bond | VND | CVA | Fair Value | YTM | Credit Spread |
|------|-----|-----|-----------|-----|--------------|
| 5-year zero | 86.2609 | 46.2609 | **40** | 20.11% | **17.11%** |
| 10-year zero | 74.4094 | 34.4094 | **40** | 9.60% | **6.60%** |

→ **Steeply inverted credit curve** — but this is an **"optical" artifact**, not a true risk/reward signal. Both bonds are priced to the same recovery rate.

---

### Trading Strategies Based on Credit Curve Views

**Example**: Portfolio manager disagrees with market's expectation of **high near-term but declining default probability**:

| Action | Trade | Rationale |
|--------|-------|-----------|
| **Disagree (expect lower near-term default)** | **Sell short-term CDS protection** | Collect premium if issuer survives near term |
| **Hedge tail risk** | **Buy long-term CDS protection** | Protect against actual eventual default |

If issuer survives: retain premium on sold protection; can also profit from selling back long-term CDS if spreads narrow.

---

### Exam Tips

- **Investment-grade credit curves**: typically flat or upward-sloping (higher macro uncertainty at long horizons)
- **High-yield curves**: can be steeper upward or inverted (cyclical recovery expectations or distress)
- **Distressed debt**: inverted credit curve is an **optical phenomenon** — both short and long bonds trading near recovery rate, not a true relative risk signal
- **Countercyclical spread-rate relationship**: stronger economy → higher benchmark yields + tighter spreads (and vice versa)
- **Key drivers**: credit quality, macroeconomic conditions, supply/demand dynamics, company-specific factors (structural model implied POD)
- **Equity volatility → POD → credit spread**: use structural model logic — ↑ equity vol → ↑ steeper credit curve
- **Swap curve vs. government curve**: swap curve often preferred for corporate bond credit analysis due to better liquidity at off-the-run maturities
- **Cross-default provisions**: all bonds across the maturity spectrum of a single issuer face the same recovery in bankruptcy — important for term structure interpretation
- **Increasing hazard rate over time** → naturally produces an upward-sloping credit curve — key exam calculation concept