## Summary: Credit Analysis Models — Module 4 Wrap-Up (CFA Level II — Fixed Income)

A closing summary consolidating the entire module for exam use.

---

### Core Credit Risk Parameters

$$\boxed{\text{Fair value} = \text{Default-free value} - CVA}$$

**Three fundamental parameters:**

| Parameter | Definition | Key Relationship |
|-----------|-----------|-----------------|
| **Expected exposure** | Projected loss before recovery at each date | = Bond value (+ coupon) at each node, probability-weighted |
| **Recovery rate** | % of exposure recovered in default | Common baseline: 40% |
| **Loss given default (LGD)** | Actual loss if default occurs | $= \text{Exposure} \times (1 - \text{Recovery rate})$ |

---

### Credit Valuation Adjustment (CVA)

$$\boxed{CVA = \sum_{t=1}^{T} LGD_t \times POD_t \times DF_t}$$

**Where**:
- $POD_t$ = risk-neutral conditional probability of default at date $t$
- $DF_t$ = risk-free discount factor for date $t$
- Expected values computed using **risk-neutral probabilities**; discounted at **risk-free rates**

**CVA = compensation for bearing default risk**, expressible as:
- A **present value amount** (per 100 par)
- An equivalent **credit spread** (annual bps over benchmark)

---

### Probability of Default Concepts

$$\boxed{POD_t = \text{Hazard rate} \times POS_{t-1}} \qquad \boxed{POS_T = (1-\text{Hazard rate})^T}$$

| Type | Level | Why Difference |
|------|-------|----------------|
| **Actual (historical)** | Lower | Based on observed default data |
| **Risk-neutral** | Higher | Includes default risk premium, timing uncertainty, liquidity/tax factors |

---

### Credit Scores and Ratings

| Feature | Credit Scores (FICO) | Credit Ratings (Moody's, S&P, Fitch) |
|---------|---------------------|--------------------------------------|
| **Market** | Retail lending | Corporate/sovereign bonds, ABS |
| **Focus** | POD only | POD + LGD (via notching) |
| **Scale** | 300–850 | AAA → D |

**FICO weights**: Payment history (35%) > Debt burden (30%) > History length (15%) > Credit types (10%) > Recent searches (10%)

**Notching**: Subordinated debt rated 1–2 notches lower than senior unsecured (lower seniority → lower recovery → higher LGD)

---

### Credit Migration and Expected Return

$$\boxed{\% \Delta P \approx -\text{ModDur} \times \Delta\text{Spread}} \qquad \boxed{E(\text{Return}) \approx YTM + \sum_j P_{ij} \times (-\text{ModDur} \times \Delta\text{Spread}_j)}$$

**Key result**: Credit spread migration **typically reduces expected return** vs. YTM because:
1. Transition probabilities are **skewed toward downgrades**
2. Spread increases from downgrades are **larger** than spread decreases from upgrades

---

### Structural vs. Reduced-Form Models

| Feature | Structural | Reduced-Form |
|---------|-----------|--------------|
| **Origin** | 1970s (Black-Scholes-Merton) | 1990s (Jarrow-Turnbull; Duffie-Singleton) |
| **Default** | Endogenous (asset value < liabilities) | Exogenous (random Poisson arrival) |
| **Focus** | **Why** default occurs | **When** default occurs |
| **Inputs** | Company balance sheet (often unobservable) | Observable market variables |
| **Best use** | Internal risk management, credit ratings | Valuing risky debt, credit derivatives |

**Option interpretation (structural models):**
$$E(T) = \max[A(T)-K, 0] \qquad D(T) = A(T) - \max[A(T)-K, 0]$$
- Equity = **long call** on company assets (strike = debt face value K)
- Debt = assets owned by bondholders, **short call** written to shareholders
- Equivalent put interpretation: Limited liability = long put option for shareholders

---

### Arbitrage-Free Valuation with Credit Risk

**Full two-step process (with interest rate volatility):**

```
Step 1: Build calibrated binomial interest rate tree (benchmark rates, σ assumption)
Step 2: Calculate VND via backward induction through the tree
Step 3: Calculate expected exposures at each node (probability-weighted bond values + coupon)
Step 4: Build CVA table (Exposure → LGD → POD → Expected Loss → PV)
Step 5: Fair value = VND − CVA
Step 6: YTM from fair value → credit spread = YTM − benchmark par rate
```

**Effect of volatility on CVA** (for option-free bonds): Minimal — lognormal asymmetry slightly reduces expected exposures; VND unchanged.

---

### Floating-Rate Notes

$$\boxed{\text{Coupon}_t = (\text{Benchmark rate}_{t-1} + QM) \times \text{Par}} \quad \text{(paid in arrears)}$$

**Discount Margin (DM)** = floating-rate analog of credit spread for fixed-rate bonds:
- **DM > QM**: floater priced below par
- **DM < QM**: floater priced above par
- **DM = QM**: floater priced at par

Found via trial-and-error: add DM to tree rates until modeled price = observed fair value.

---

### Credit Spread Sensitivity

**Key comparison result:**
$$\text{Doubling POD} \implies \text{Larger spread impact than halving recovery rate}$$

Because POD multiplies LGD at **every date**, while recovery rate only proportionally scales LGD.

**Credit spread approximation:**
$$\boxed{\text{Credit spread} \approx \text{Annual POD} \times (1 - \text{Recovery rate})}$$

**POD and recovery rate are positively correlated** for a given observed price/spread.

---

### Term Structure of Credit Spreads

**Four drivers:**

| Driver | Effect |
|--------|--------|
| **Credit quality** | Investment-grade: flat/slightly upward; High-yield: steeper; Distressed: inverted (optical) |
| **Financial conditions (macro)** | Weak economy → steeper/wider spreads; Strong economy → flatter/tighter |
| **Supply/demand dynamics** | Most-traded securities drive curve shape; new issuance/refinancing affects slope |
| **Company-specific (micro)** | ↑ Equity volatility → ↑ implied POD → steeper credit curve |

**Credit curve shapes:**

| Shape | Implication |
|-------|------------|
| **Flat** | Stable default expectations across maturities |
| **Upward-sloping** | Increasing hazard rate at longer maturities (investment-grade norm) |
| **Inverted (constructive)** | LBO/PE restructuring improving future cash flows; cyclical industry at trough |
| **Inverted (distressed)** | Optical artifact — bonds trading near recovery value regardless of maturity |

---

### Securitized Debt Credit Analysis

**Two key dimensions:**

| Dimension | Description | Analysis Approach |
|-----------|------------|-------------------|
| **Granularity** | Number of underlying obligations | Granular → portfolio/statistical; Non-granular → loan-by-loan |
| **Homogeneity** | Similarity of underlying obligations | Homogeneous → general conclusions; Heterogeneous → individual scrutiny |

**Three critical analysis areas:**
1. **Asset pool quality** (FICO distribution, delinquency rates, vintage, LTV ratios)
2. **Originator/servicer quality** (track record, capabilities across credit cycle)
3. **Transaction structure** (bankruptcy remoteness, credit enhancements, triggers)

**Credit enhancements**: Bankruptcy remoteness (true sale to SPE), overcollateralization, credit tranching, excess spread, performance triggers.

**Covered bonds vs. ABS:**

| | ABS | Covered Bonds |
|-|-----|---------------|
| **Recourse** | Asset pool only | Dual: issuer + cover pool |
| **Pool** | Static (prepayment risk) | Dynamic (replaced assets — no prepayment risk) |
| **Rating vs. issuer** | Can be higher | Several notches above issuing bank |

---

### One-Page Mental Model

```
Credit risk = f(Expected exposure, Recovery rate, Loss given default)
CVA = Σ (LGD × POD × DF) for all periods
Fair value = Default-free price − CVA
Credit spread ≈ Annual POD × Loss severity

POD types:
  Actual (historical) < Risk-neutral (market-implied)
  Difference = risk premium + timing uncertainty + liquidity/tax

Credit scores (retail) → FICO: 35/30/15/10/10
Credit ratings (wholesale) → POD + LGD; transition matrix → expected return

Structural models: WHY default (asset value vs. debt barrier)
  Equity = long call; Debt = assets − short call
Reduced-form models: WHEN default (Poisson random arrival)
  Observable inputs; used for pricing risky bonds + derivatives

Arbitrage-free with credit:
  VND (binomial tree) − CVA (probability-weighted expected losses)
  Doubling POD > halving recovery in spread impact

Credit curve:
  Macro: countercyclical (growth → higher rates, tighter spreads)
  Micro: ↑ equity vol → ↑ POD → steeper curve
  Distressed: inverted = optical artifact (both bonds near recovery value)

ABS analysis:
  Granular + homogeneous → portfolio/statistical
  Non-granular + heterogeneous → loan-by-loan
  3 areas: pool quality + servicer quality + structure
  Covered bonds: dual recourse, dynamic pool, higher rating than issuer
```

---

This completes **Module 4: Credit Analysis Models** and the full **Fixed Income** curriculum covered in this study session. Combined with the prior modules on Term Structure (Module 1), Arbitrage-Free Valuation (Module 2), and Bonds with Embedded Options introduction (Module 3), you now have comprehensive coverage of CFA Level II Fixed Income. Let me know if you'd like a consolidated cross-module summary, practice questions, or to continue with another subject area.