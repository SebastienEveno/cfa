---
layout: page
title: Modeling Credit Risk and the Credit Valuation Adjustment
permalink: /study/06-fixed-income/04-credit-analysis-models/02-modeling-credit-risk/
next: /cfa/study/06-fixed-income/04-credit-analysis-models/03-credit-scores-credit-ratings/
---
## Summary: Modeling Credit Risk and the Credit Valuation Adjustment (CFA Level II — Fixed Income)

---

### Key Definitions

| Term | Definition |
|------|-----------|
| **Default risk** | Narrower: probability of a default event occurring |
| **Credit risk** | Broader: incorporates both default probability AND magnitude of loss if default occurs |
| **Credit spread (G-spread)** | YTM(corporate bond) − YTM(government bond, same maturity) |

> **Example**: High collateral value → high default risk but **low credit risk** (recovery offsets the loss)

---

### The Five Credit Risk Parameters

#### 1. Expected Exposure
$$\boxed{\text{Expected exposure} = \text{Projected amount investor could lose before factoring in recovery}}$$

- Simple case (no rate volatility): exposure = coupon + principal at each date
- With interest rate volatility: must use arbitrage-free binomial tree to determine expected bond value at each node

#### 2. Recovery Rate
- Percentage of the loss **recovered** from a defaulted bond
- Common baseline assumption: **40%**
- Varies by: industry, seniority, leverage, whether secured/collateralized

#### 3. Loss Given Default (LGD)
$$\boxed{LGD = \text{Exposure} \times (1 - \text{Recovery rate})}$$

$$\boxed{\text{Loss severity} = 1 - \text{Recovery rate} = 60\% \text{ (if recovery = 40\%)}}$$

**Example**: Exposure = 104, recovery rate = 40%
$$LGD = 104 \times (1 - 0.40) = 62.4$$

#### 4. Probability of Default (POD) — Hazard Rates

**Two types:**

| Type | Description | Relationship |
|------|-------------|-------------|
| **Actual (historical)** | Based on observed default data from rating agencies | Lower than risk-neutral |
| **Risk-neutral** | Implied from current market prices (like risk-neutral probabilities in option pricing) | Higher — includes default risk premium |

> **Why risk-neutral > actual**: Risk-neutral probability includes the **default risk premium** (uncertainty over timing) plus any liquidity/tax differences embedded in observed spreads.

**Conditional POD (hazard rate)**: Probability of default in a given period, **assuming no prior default**.

$$\boxed{POD_t = \text{Hazard rate} \times POS_{t-1}}$$
$$\boxed{POS_t = POS_{t-1} - POD_t}$$
$$\boxed{POS_T = (1 - \text{Annual hazard rate})^T}$$

**Solving for risk-neutral default probability** (P*):

For a one-year bond: solve $P^*$ in:
$$\frac{(1-P^*) \times CF_{no default} + P^* \times CF_{default}}{1+r_f} = \text{Market price}$$

#### 5. Expected Loss

$$\boxed{\text{Expected loss}_t = LGD_t \times POD_t}$$

---

### Credit Valuation Adjustment (CVA)

$$\boxed{CVA = \sum_{t=1}^{T} \text{Expected loss}_t \times DF_t = \sum_{t=1}^{T} (LGD_t \times POD_t \times DF_t)}$$

**Where**: $DF_t = 1/(1+r_f)^t$ (risk-free discount factors)

**Interpretation**: CVA = **present value of expected credit losses** — the total cost of credit risk expressed in current dollars per 100 of par.

$$\boxed{\text{Fair value (risky bond)} = \text{Value (default-free bond)} - CVA}$$

---

### Complete CVA Calculation — 5-Year Zero-Coupon Bond Example

**Setup**: 5-year zero-coupon corporate bond, recovery = 40%, hazard rate = 1.25%/year, risk-free rate = 3% (flat)

| Date | Exposure | Recovery (40%) | LGD | POD | POS | Expected Loss | DF (3%) | PV(Expected Loss) |
|------|----------|----------------|-----|-----|-----|---------------|---------|-------------------|
| 1 | 88.8487 | 35.5395 | 53.3092 | 1.2500% | 98.7500% | 0.6664 | 0.970874 | 0.6470 |
| 2 | 91.5142 | 36.6057 | 54.9085 | 1.2344% | 97.5156% | 0.6778 | 0.942596 | 0.6389 |
| 3 | 94.2596 | 37.7038 | 56.5558 | 1.2189% | 96.2967% | 0.6894 | 0.915142 | 0.6309 |
| 4 | 97.0874 | 38.8350 | 58.2524 | 1.2037% | 95.0930% | 0.7012 | 0.888487 | 0.6230 |
| 5 | 100.0000 | 40.0000 | 60.0000 | 1.1887% | 93.9043% | 0.7132 | 0.862609 | 0.6152 |
| **Total** | | | | **6.0957%** | | | **CVA =** | **3.1549** |

**Key calculations:**
- **Exposure at Date 1**: $100/(1.03)^4 = 88.8487$ (discounting the $100 face value back 4 more years)
- **Cumulative POD**: 6.0957% (sum of all annual PODs)
- **POS at maturity**: $(1-0.0125)^5 = 93.9043\%$ ✓
- **Default-free bond price**: $100 \times 0.862609 = 86.2609$
- **Fair value**: $86.2609 - 3.1549 = \mathbf{83.1060}$

---

### Credit Spread Calculation

$$\boxed{\text{Credit spread} \approx \text{Annual POD} \times (1 - \text{Recovery rate})}$$

**Exact**: Solve for YTM from fair value:
$$83.1060 = \frac{100}{(1+YTM)^5} \implies YTM = 3.77\%$$

**Credit spread** = 3.77% − 3.00% = **77 bps**

**Approximation**: $1.25\% \times (1-0.40) = 0.75\%$ (75 bps — close approximation)

---

### Projected Rates of Return by Default Timing

| Default Date | Annual Return | Direction |
|-------------|---------------|-----------|
| Date 1 | −57.24% | Catastrophic (full investment nearly lost) |
| Date 2 | −33.63% | Severe loss |
| Date 5 (maturity) | −13.61% | Some recovery of investment |
| **No default** | **+3.77%** (YTM) | **Most likely (93.9% probability)** |

> **Key insight**: Wide range of outcomes depending on **when** default occurs → this timing uncertainty is the source of the **default risk premium** embedded in credit spreads.

---

### CVA Summary Table (Example 2 — 3yr, 5% coupon, price 104)

**Setup**: Coupon-paying bond, recovery = 40%, hazard rate = 1.50%/year, risk-free = 2.50%

| Date | Exposure | LGD | POD | Expected Loss | PV(EL) |
|------|----------|-----|-----|---------------|--------|
| 1 | 109.8186 | 65.8911 | 1.5000% | 0.9884 | 0.9643 |
| 2 | 107.4390 | 64.4634 | 1.4775% | 0.9524 | 0.9066 |
| 3 | 105.0000 | 63.0000 | 1.4553% | 0.9169 | 0.8514 |
| **CVA** | | | | | **2.7222** |

**Note on coupon bond exposure**: Exposure = bond value assuming risk-free YTM + coupon at that date (the bond's full value to the investor if no default through that period).

$$\text{Fair value} = 107.1401 - 2.7222 = \mathbf{104.4178}$$

**Bond trades at 104.00 vs. fair value 104.42** → bond is **slightly undervalued** → potential **buy** signal.

---

### Model Flexibility and Inversions

**Given price + credit spread → solve for implied default probability (given recovery rate)**:
- Can solve for the hazard rate that makes the CVA table produce the observed market price via trial-and-error or Solver

**Relationship between recovery rate and default probability (for a given price/spread)**:
$$\text{Recovery rate} \uparrow \implies \text{Implied default probability} \uparrow \quad (\text{positively correlated})$$

A higher assumed recovery rate must be offset by a higher implied default probability to produce the same observed bond price.

---

### ESG Considerations in Credit Risk

| ESG Factor | Credit Risk Implication |
|-----------|------------------------|
| Environmental violations | Risk of regulatory fines, operational sanctions → ↑ POD |
| Poor labor practices | Reputational damage, boycotts, lawsuits → ↑ POD or LGD |
| Weak governance | Aggressive/fraudulent accounting → ↑ unexpected default risk |

**Specialty bonds with ESG/risk links:**
- **Green/climate bonds**: proceeds earmarked for environmental projects; may carry tax incentives
- **Catastrophe/pandemic bonds** (e.g., World Bank 2017): investors earn high coupons but risk losing capital if a catastrophic event triggers payout — essentially an **insurance product** embedded in a debt instrument

---

### Exam Tips

- **CVA formula**: $\sum (LGD_t \times POD_t \times DF_t)$ — know each component
- **Fair value** = default-free price − CVA
- **Credit spread approximation**: Annual default probability × (1 − recovery rate)
- **Hazard rate** = conditional POD (assuming no prior default)
- **Risk-neutral POD > actual POD** — market prices include a default risk premium and liquidity/tax adjustments
- **Recovery rate and default probability are positively correlated** (for a given observed price/spread)
- **Exposure for zero-coupon bond**: discount the par value back to each date at the risk-free rate
- **Exposure for coupon bond**: full bond value (price + coupon) at each date assuming risk-free rate
- **YTM on a risky bond = expected return only if no default occurs** — this is why investors demand a credit spread