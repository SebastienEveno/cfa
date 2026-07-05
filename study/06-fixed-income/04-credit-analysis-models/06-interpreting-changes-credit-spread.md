---
layout: page
title: Interpreting Changes in Credit Spreads
permalink: /study/06-fixed-income/04-credit-analysis-models/06-interpreting-changes-credit-spread/
prev: /cfa/study/06-fixed-income/04-credit-analysis-models/05-valuying-risky-bonds/
next: /cfa/study/06-fixed-income/04-credit-analysis-models/07-term-structure-credit-spreads/
---
## Summary: Interpreting Changes in Credit Spreads (CFA Level II — Fixed Income)

---

### Components of a Corporate Bond Yield

$$\boxed{\text{Corporate bond yield} = \text{Benchmark yield} + \text{Credit spread}}$$

**Benchmark yield captures macroeconomic factors:**
- Expected inflation rate
- Expected real rate of return
- Compensation for uncertainty about these variables

**Credit spread (over benchmark) captures microeconomic factors:**

| Component | Description |
|-----------|-------------|
| **Credit risk** | Expected loss due to default (primary component) |
| **Liquidity premium** | Corporate bonds less liquid than government bonds |
| **Tax differences** | US corporate bonds taxable at state level; government bonds exempt |
| **Risk premium** | Compensation for uncertainty about credit, liquidity, and tax factors |

> These factors are **difficult to separate** — less liquid bonds are often those with uncertain credit quality, and uncertain tax treatment also reduces liquidity.

---

### XVA — Valuation Adjustments Framework

Modern derivative/bond valuation extends beyond CVA to a suite of adjustments collectively called **XVA**:

| Adjustment | Description |
|-----------|-------------|
| **CVA** | Credit Valuation Adjustment — most developed and widely used |
| **FVA** | Funding Valuation Adjustment |
| **LVA** | Liquidity Valuation Adjustment |
| **TVA** | Taxation Valuation Adjustment |

**Starting point**: OIS (Overnight Indexed Swap) discount factors — equivalent to the VND in our framework, representing the risk-free baseline value before adjustments.

> **For exam purposes**: Focus only on CVA as the credit risk component of the spread.

---

### Credit Spread ↔ Default Probability Relationship

**Finding the implied default probability for a given credit spread:**
1. Set VND (same tree, no default)
2. Use trial-and-error to find the hazard rate that produces a CVA → fair value → YTM consistent with the observed spread

**Assuming 40% recovery rate and the 5-year, 3.50% corporate bond:**

| Credit Rating | Credit Spread | Annual POD | Cumulative POD (5yr) |
|--------------|--------------|-----------|----------------------|
| AAA | 0.60% | 1.01% | 4.95% |
| AA | 0.90% | 1.49% | 7.23% |
| A | 1.10% | 1.83% | 8.82% |
| BBB | 1.50% | 2.48% | 11.80% |
| BB | 3.40% | 5.64% | 25.19% |
| B | 6.50% | 10.97% | 44.07% |
| CCC/CC/C | 9.50% | 16.50% | 59.41% |

---

### Why Risk-Neutral POD > Actual POD

Observed credit spreads imply risk-neutral default probabilities that are **much higher** than historical default rates (e.g., no AAA company has defaulted since 1995, yet the model implies ~1% annual POD):

**Three reasons:**
1. **Timing uncertainty premium**: Risk-neutral POD includes compensation for uncertainty about *when* default might occur
2. **Credit spread widening risk**: Investors holding bonds to maturity are still exposed to mark-to-market losses from spread widening even without actual default (rating migration)
3. **Liquidity and tax differences**: Observed spreads include non-credit components → inflates implied default probabilities above true credit-only levels

---

### Recovery Rate ↔ Credit Spread Relationship

**Holding constant the annual POD at 1.83%, varying recovery rate:**

| Recovery Rate | LGD | CVA | Fair Value | YTM | Credit Spread |
|--------------|-----|-----|-----------|-----|--------------|
| **40%** | Lower | 3.7019 | ~100.84 | 3.35% | **1.10%** |
| **30%** | Higher | 5.9781 | 97.5670 | 4.05% | **1.30%** |

**Reducing recovery rate from 40% → 30%** increases the credit spread by ~20 bps — illustrating how notching works:
- Senior unsecured rated A with 40% recovery → credit spread 1.10%
- Subordinated debt with same issuer, lower 30% recovery → lower rating (A− or BBB+) → credit spread ~1.30%

> **Notching logic**: Same issuer, lower seniority → lower recovery rate assumption → higher LGD → higher CVA → lower fair value → higher credit spread → lower credit rating.

---

### Comparing Impact: Doubling POD vs. Halving Recovery Rate

**Base case**: 3-year, 3% coupon bond, POD = 1.50%, Recovery = 40%, Spread = **0.90%**

| Scenario | CVA | Fair Value | YTM | Credit Spread | Spread Change |
|---------|-----|-----------|-----|--------------|---------------|
| **Base** | 2.6984 | 101.7168 | 2.40% | 0.90% | — |
| **POD doubles (3.00%, 40% recovery)** | 5.3174 | 99.0978 | 3.32% | **1.82%** | **+92 bps** |
| **Recovery halves (1.50%, 20% recovery)** | 3.5978 | 100.8173 | 2.71% | **1.21%** | **+31 bps** |

**Conclusion**: **Doubling POD has a much larger impact** on credit spread (+92 bps) than halving the recovery rate (+31 bps).

**Why?**
- Doubling POD affects the **Expected Loss = LGD × POD** multiplicatively through POD for **every date**
- Halving recovery rate only affects the LGD component
- POD is the more powerful multiplier because it operates on all expected exposures (which include both coupon and principal), while recovery rate only changes the percentage retained from a large but uncertain loss

---

### Key Formula Relationships

$$\boxed{\text{Credit spread} \approx POD \times (1 - \text{Recovery rate}) = POD \times \text{Loss severity}}$$

**From the credit risk model:**
$$\boxed{\text{Credit spread} = YTM_{\text{risky}} - YTM_{\text{benchmark}}}$$

$$\boxed{YTM_{\text{risky}} \text{ derived from: Fair value} = VND - CVA}$$

**Positive correlations (for a given observed spread):**
$$\uparrow \text{Recovery} \iff \uparrow POD \quad \text{(offsetting effects on fair value)}$$

---

### Exam Tips

- **Corporate bond yield = benchmark yield (macro) + credit spread (micro)** — know both components
- **Risk-neutral POD >> historical POD** — three reasons: timing uncertainty, spread widening risk, liquidity/tax factors in observed spreads
- **POD and recovery rate are positively correlated** for a given observed credit spread (higher recovery → must assume higher POD to produce same spread)
- **Doubling POD has larger spread impact than halving recovery rate** — intuition: POD multiplies LGD at every date; recovery only scales LGD proportionally
- **Notching = lower seniority → lower recovery assumption → higher LGD → wider credit spread → lower rating**
- **Credit spread = CVA expressed as annual yield** — two equivalent ways to measure credit risk (CVA in currency vs. spread in bps)
- **XVA**: CVA is the most developed; others (FVA, LVA, TVA) also adjust for non-credit factors but are beyond exam scope
- **OIS discount factors**: the starting point for derivative/bond valuation in modern frameworks (equivalent to risk-free benchmark curve in our CVA framework)