---
layout: page
title: Valuing Risky Bonds in an Arbitrage-Free Framework
permalink: /study/06-fixed-income/04-credit-analysis-models/05-valuying-risky-bonds/
prev: /cfa/study/06-fixed-income/04-credit-analysis-models/04-structural-reduced-form-models/
next: /cfa/study/06-fixed-income/04-credit-analysis-models/06-interpreting-changes-credit-spread/
---
## Summary: Valuing Risky Bonds in an Arbitrage-Free Framework (CFA Level II — Fixed Income)

---

### Framework Overview

**Two-step approach** combining the arbitrage-free binomial interest rate tree with credit risk parameters:

$$\boxed{\text{Fair value} = VND - CVA}$$

Where:
- **VND** = Value assuming No Default (discounted at benchmark rates via the calibrated tree)
- **CVA** = Credit Valuation Adjustment (PV of expected credit losses)

**Why use the tree for VND?** The same tree that prices the VND also calculates **expected exposures** at each node — making the framework internally consistent.

---

### Benchmark Yield Curve Setup (Exhibit 9)

| Maturity | Par Rate | Spot Rate | Forward Rate |
|----------|----------|-----------|--------------|
| 1 | −0.25% | −0.25% | — |
| 2 | 0.75% | 0.7538% | 1.7677% |
| 3 | 1.50% | 1.5166% | 3.0596% |
| 4 | 2.25% | 2.2953% | 4.6674% |
| 5 | 2.75% | 2.8240% | 4.9664% |

**Key step**: Bootstrapping discount factors from the par curve, then deriving spot rates and forward rates — the standard arbitrage-free construction.

---

### The Binomial Tree Under Volatility

**Tree assumption**: 10% interest rate volatility (lognormal model)

**Key property**: Each date's node rates are spread around the implied forward rate, with adjacent rates satisfying $i_H = i_L \times e^{2\sigma}$.

**Probabilities**: Equal 50/50 up/down at each node → probabilities of reaching each node follow Pascal's Triangle (25%/50%/25% at Time 2, etc.)

**Verification**: Correctly calibrated tree prices the 2.75% 5-year government bond at exactly **100.0000** ✅

---

### Calculating Expected Exposure with Interest Rate Volatility

**Key difference from flat-rate model**: With a volatile rate environment, the exposure at each date is the **probability-weighted average** of bond values across all nodes + coupon payment:

$$\boxed{\text{Expected exposure}_t = \sum_j P_j \times V_j + \text{Coupon}_t}$$

Where $P_j$ = probability of node $j$, $V_j$ = bond value at node $j$

---

### Main Example — 5-Year, 3.50% Corporate Bond

**Parameters**: Annual POD hazard rate = 1.25%, Recovery = 40%, Volatility = 10%

#### Step 1: VND via Binomial Tree

$$VND = 103.5450$$

**Verification via spot rates** (faster for option-free bond):
$$VND = 3.50(DF_1) + 3.50(DF_2) + 3.50(DF_3) + 3.50(DF_4) + 103.50(DF_5) = \mathbf{103.5450}$$

#### Step 2: CVA Table

| Date | Expected Exposure | LGD (×0.60) | POD | DF | CVA/Year |
|------|-------------------|-------------|-----|-----|----------|
| 1 | 103.2862 | 61.9717 | 1.2500% | 1.002506 | 0.7766 |
| 2 | 101.5481 | 60.9289 | 1.2344% | 0.985093 | 0.7409 |
| 3 | 101.0433 | 60.6260 | 1.2189% | 0.955848 | 0.7064 |
| 4 | 102.0931 | 61.2559 | 1.2037% | 0.913225 | 0.6734 |
| 5 | 103.5000 | 62.1000 | 1.1887% | 0.870016 | 0.6422 |
| **Total** | | | 6.0957% | **CVA =** | **3.5394** |

**POD calculation example (Date 4)**:
$$POD_4 = 1.25\% \times (1-1.25\%)^3 = \mathbf{1.2037\%}$$

#### Final Result:
$$\text{Fair value} = 103.5450 - 3.5394 = \mathbf{100.0056}$$
$$YTM = 3.4988\% \implies \text{Credit spread} = 3.4988\% - 2.75\% = \mathbf{74.88 \text{ bps}}$$

---

### Effect of Volatility on CVA

**Key finding**: Changing volatility from 10% to 20% has **minimal impact** on CVA for option-free bonds:

| Volatility | CVA | Fair Value |
|------------|-----|-----------|
| 10% | 3.5394 | 100.0056 |
| 20% | 3.5390 | 100.0060 |

**Why the tiny difference?** Lognormal model creates **asymmetric** rate dispersion around the forward rate — the top of the tree rises more than the bottom falls → slightly **reduces expected exposure** (bond worth less at high-rate nodes, more at low-rate nodes, but high-rate nodes dominate because of lognormal asymmetry).

**Important principle**: For an option-free bond, VND is **unchanged by volatility** (the tree always reprices to par for benchmark bonds) — volatility only affects CVA (slightly) when credit risk is present.

---

### Floating-Rate Note Valuation

**Cash flow**: Coupon = benchmark rate + quoted margin (QM), paid **in arrears**

**VND calculation**: Same backward induction — but each node's cash flow varies with the rate at that node:
$$\text{Interest payment}_t = (\text{rate}_{t-1} + QM) \times \text{Par}$$

**Key property**: A floater paying benchmark rate flat (QM = 0) → all VND node values = 100.0000 exactly. Positive QM → VND > 100.

---

### Floating-Rate Note Example (Benchmark + 0.50%)

**Parameters**: 5-year floater, POD = 0.50% years 1-3 → 0.75% years 4-5, Recovery = 20% years 1-3 → 10% years 4-5

**VND** = 102.3633

**CVA** = 2.4586 → **Fair value** = 99.9047 (priced at discount to par)

**Discount Margin (DM)**: Rate spread that makes the tree produce the observed fair value
$$DM = 0.52046\% > QM = 0.50\%$$

> Since bond trades **below par**, DM > QM (extra return over and above the quoted spread)

---

### Discount Margin (DM) vs. Credit Spread

| Concept | Fixed-rate bond | Floating-rate note |
|---------|-----------------|-------------------|
| **Yield spread measure** | Credit spread (vs. govt bond YTM) | Discount margin (DM) |
| **Baseline** | Comparable-maturity government YTM | Benchmark floating rate |
| **How found** | From bond's YTM after CVA pricing | Trial-and-error: add DM to tree rates until model price = market price |

---

### Example 6 — 3-Year, 4% Bond (Lori Boller)

**Parameters**: POD = 2.25%, Recovery = 40%

| Date | Expected Exposure | LGD | POD | DF | CVA/Year |
|------|-------------------|-----|-----|-----|----------|
| 1 | 107.0902 | 64.2541 | 2.2500% | 1.002506 | 1.4493 |
| 2 | 104.9120 | 62.9472 | 2.1994% | 0.985093 | 1.3638 |
| 3 | 104.0000 | 62.4000 | 2.1499% | 0.955848 | 1.2823 |
| **CVA** | | | 6.5993% | | **4.0954** |

**VND** = 107.3586
**Fair value** = 107.3586 − 4.0954 = **103.2632**

**Bond trades at 104 > fair value 103.2632** → Bond is **overvalued** → **Do NOT buy**

---

### Example 7 — Distressed Floating-Rate Note (Omar Yassin)

**Setup**: 3-year floater, benchmark + 2.50%, priced at 84, POD: 30% (Year 1) then 10% (Years 2-3)

**VND** = 107.3586

| Recovery Assumption | CVA | Fair Value | vs. Price of 84 |
|---------------------|-----|-----------|------------------|
| **50% recovery** | 22.9608 | **84.3978** | Approximately fairly valued |
| **60% recovery** | 18.3686 | **88.9900** | **Significantly undervalued** |

**Cumulative POD** = 43.3%; Probability of no default = 56.7%

**Discount Margin** = 8.9148% >> QM of 2.50% (deep discount pricing)

**Recommendation**: **Buy** the floater — even at 50% recovery it is approximately fairly priced, and at 60% recovery it is significantly undervalued.

---

### Exam Tips

- **Fair value = VND − CVA** — this is the fundamental two-step formula for risky bond valuation
- **Use the tree for VND** (even for option-free bonds) because the same tree generates expected exposures for CVA
- **Expected exposure = probability-weighted bond values across nodes + coupon** at each date
- **Volatility has minimal impact on VND** for option-free, default-free bonds (always reprices to par in a calibrated tree)
- **Volatility slightly affects CVA** through lognormal asymmetry in expected exposures — the effect is small for option-free bonds
- **DM for floaters = analog of credit spread for fixed-rate bonds**: DM > QM when floater trades below par; DM < QM when above par
- **Changing credit risk parameters over time** is fully accommodated — just use different PODs and recovery rates for each period
- **Recovery and default probability are positively correlated** for a given observed price — always remember this when stress-testing assumptions
- **When both recovery rate assumptions suggest buying**: less ambiguous; when they straddle the market price, more judgment required