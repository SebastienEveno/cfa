---
layout: page
title: "Applications of the Fundamental Law — Global Equity Strategy"
permalink: /study/09-portfolio-management/02-analysis-of-active-management/07-applications-of-fundamental-law/
prev: /cfa/study/09-portfolio-management/02-analysis-of-active-management/06-the-full-fundamental-law/
next: /cfa/study/09-portfolio-management/02-analysis-of-active-management/08-fixed-income-strategies/
---
## Summary: Applications of the Fundamental Law — Global Equity Strategy (CFA Level II — Portfolio Management)

---

### Overview

This section applies the fundamental law of active management ($IR = TC \times IC \times \sqrt{BR}$) to a real-world **global equity strategy** benchmarked to the MSCI ACWI, illustrating:
- How score-based active return forecasts translate to expected value added
- How constraints (long-only, position limits) erode the transfer coefficient
- How increasing active risk affects constrained vs. unconstrained portfolios differently

---

### Setup — Global Equity Strategy (Exhibit 7)

**Universe**: 24 MSCI market indexes (21 EAFE markets + US + Canada + Emerging Markets)

**Scoring system**: Five values representing manager forecasts:
| Score | Meaning |
|-------|---------|
| +2.0 | Strong outperformance |
| +1.0 | Weak outperformance |
| 0.0 | Neutral |
| −1.0 | Weak underperformance |
| −2.0 | Strong underperformance |

**Constraint on scores**: Sum to zero; cross-sectional standard deviation = 1

**Active return forecast (Grinold rule)**: $\mu_i = IC \times \sigma_i \times S_i$

**Example**: UK — Score = 2.0, $\sigma$ = 6.4%, assumed IC = 0.10:
$$\mu_{UK} = 0.10 \times 6.4\% \times 2.0 = \mathbf{1.3\%}$$

---

### Unconstrained Optimization Results (Exhibit 7)

**Optimizer objective**: Maximize expected active return subject to 2.00% active risk constraint (using Excel Solver, accounting for cross-market active return correlations from Exhibit 8).

**Key outputs at bottom of Exhibit 7:**

| Parameter | Value |
|-----------|-------|
| **Transfer Coefficient (TC)** | 0.995 (near-perfect — essentially unconstrained) |
| **Information Coefficient (IC)** | 0.099 (adjusted down from assumed 0.10 due to score assignment specifics) |
| **Breadth (BR)** | 24.5 (slightly above 24 due to non-zero active return correlations) |
| **Active Return** | 0.98% |
| **Active Risk** | 2.00% |
| **Information Ratio** | **0.49** |

**Verification via fundamental law:**
$$IR = TC \times IC \times \sqrt{BR} = 0.995 \times 0.099 \times \sqrt{24.5} = 0.995 \times 0.099 \times 4.95 = \mathbf{0.49} ✓$$

**Why breadth (24.5) ≠ number of assets (24)**: Active return correlations across markets (Exhibit 8) are mostly small but non-zero → creates a **fractional adjustment** to effective independent decisions.

**Why TC < 1.0 exactly**: The budget constraint that active weights **sum to zero** (no cash/leverage allowed) — if this were relaxed, TC would be exactly 1.0.

**Key property confirmed**: Increasing active risk to 3.00% proportionally increases active return to 1.47%, **IR remains 0.49** — confirms unconstrained IR is **invariant to aggressiveness**.

---

### Impact of Score Assignment on IC (Exhibit 9)

**Change**: Swap scores for Germany↔UK and Switzerland↔Australia (same total scores, different assignment)

**Result**: IC rises slightly to **0.105** (vs. 0.099) because the new assignment creates **more ambitious forecasts** relative to the underlying correlation structure — France and Germany are now forecast to move in **opposite directions** despite being **positively correlated** (0.30 correlation from Exhibit 8), which is a "riskier" but more differentiated bet.

**New outputs:**

| Parameter | Value |
|-----------|-------|
| TC | 0.997 |
| IC | 0.105 |
| BR | 24.5 (unchanged) |
| Active Return | 1.04% |
| Active Risk | 2.00% |
| **IR** | **0.52** |

**Verification:**
$$IR = 0.997 \times 0.105 \times \sqrt{24.5} = \mathbf{0.52} ✓$$

> **Key insight**: The SAME assumed IC input (0.10) can produce different **realized** fundamental law ICs depending on how forecasts interact with the underlying correlation structure of the assets.

---

### Impact of Constraints (Exhibit 10)

**Two constrained versions using the SAME forecasts as Exhibit 7:**

#### Version 1: Long-only + ±10% max active weight
| Parameter | Value |
|-----------|-------|
| TC | **0.694** (down from 0.995) |
| IC | 0.099 |
| BR | 24.5 |
| Active Return | 0.68% |
| Active Risk | 2.00% |
| **IR** | **0.34** |

**Impact**: 
$$IR = 0.694 \times 0.099 \times \sqrt{24.5} = \mathbf{0.34}$$

> **Expected active return and IR reduced by ~1/3** due to constraints alone (0.98%→0.68%; 0.49→0.34)

#### Version 2: Same constraints + increased active risk target (3.00%)
| Parameter | Value |
|-----------|-------|
| TC | **0.567** (further reduced!) |
| IC | 0.099 |
| BR | 24.5 |
| Active Return | 0.76% |
| Active Risk | 2.74% |
| **IR** | **0.28** |

**Why TC drops further**: Higher active risk target → optimizer wants **larger unconstrained active weights** → constraints (max ±10%) become **more binding** → TC falls further.

**Example**: New Zealand's active weight — 4.7% (Version 1, unconstrained enough) → **capped at 10.0%** (Version 2, now hitting the ceiling)

---

### Critical Distinction — Constrained vs. Unconstrained IR Behavior

| | Unconstrained Portfolio | Constrained Portfolio |
|--|--------------------------|--------------------------|
| **IR vs. active risk level** | **Invariant** (flat line, Exhibit 5) | **Decreases** as active risk increases |
| **Why** | Scaling active weights proportionally doesn't change IR | Higher aggressiveness makes position limits MORE binding → TC falls |

$$\boxed{\text{For constrained portfolios: IR curve bends DOWNWARD as aggressiveness increases}}$$

> **Practical implication**: The presence and tightness of constraints should directly inform **how aggressively** to size active bets — pushing risk higher doesn't help proportionally once constraints bind.

---

### Example 8 — Comparing Security Selection vs. Sector Selection Strategies

**Setup**: 
- **Stock selection**: 100 securities, IC = 0.05
- **Sector selection**: 9 sectors, IC = 0.15

**Q1 — Breadth (assuming uncorrelated, independent-year forecasts):**
$$BR_{stock} = 100 \qquad BR_{sector} = 9$$

**Q2 — Unconstrained Information Ratios:**
$$IR_{stock} = 0.05 \times \sqrt{100} = 0.05 \times 10 = \mathbf{0.50}$$
$$IR_{sector} = 0.15 \times \sqrt{9} = 0.15 \times 3 = \mathbf{0.45}$$

> **Key lesson**: Despite MUCH lower individual skill (IC=0.05 vs. 0.15), stock selection achieves a **HIGHER** IR due to greater breadth (100 vs. 9 decisions) — illustrating the **power of breadth** to compensate for lower individual forecasting skill.

**Q3 — Expected active return at 3.0% active risk target:**
$$E(R_A)_{stock} = 0.50 \times 3.0\% = \mathbf{1.50\%}$$
$$E(R_A)_{sector} = 0.45 \times 3.0\% = \mathbf{1.35\%}$$

**Q4 — Constrained stock selection (TC = 0.60):**
$$IR_{constrained} = 0.60 \times 0.50 = \mathbf{0.30}$$
$$E(R_A)_{constrained} = 0.30 \times 3.0\% = \mathbf{0.90\%}$$

**Q5 — Increasing aggressiveness (active risk 3.0%→4.0%) for constrained strategy:**

**Conceptual explanation**: More aggressive implementation → larger deviations between constrained and unconstrained weights → **TC likely falls further** (e.g., 0.60 → 0.50)

$$IR_{new} = 0.50 \times 0.50 = \mathbf{0.25}$$
$$E(R_A)_{new} = 0.25 \times 4.0\% = \mathbf{1.00\%}$$

> **Key finding**: Active return only rises from **0.9% → 1.0%** (a small gain) despite active risk rising from 3.0% → 4.0% (33% increase) — **NOT proportional** because TC deteriorates as constraints bind harder.

---

### Comprehensive Summary Table — Global Equity Examples

| Scenario | TC | IC | BR | Active Risk | Active Return | IR |
|----------|-----|-----|-----|--------------|-----------------|-----|
| Unconstrained (Exhibit 7) | 0.995 | 0.099 | 24.5 | 2.00% | 0.98% | **0.49** |
| Different scores (Exhibit 9) | 0.997 | 0.105 | 24.5 | 2.00% | 1.04% | **0.52** |
| Constrained (Exhibit 10, low risk) | 0.694 | 0.099 | 24.5 | 2.00% | 0.68% | **0.34** |
| Constrained (Exhibit 10, higher risk) | 0.567 | 0.099 | 24.5 | 2.74% | 0.76% | **0.28** |

---

### Key Formula Reference Card

| Formula | Expression |
|---------|-----------|
| **Grinold scaling rule** | $\mu_i = IC \times \sigma_i \times S_i$ |
| **Full fundamental law** | $E(R_A) = TC \times IC \times \sqrt{BR} \times \sigma_A$ |
| **Information ratio (constrained)** | $IR = TC \times IC \times \sqrt{BR}$ |
| **Unconstrained IR** | Invariant to active risk level |
| **Constrained IR** | Decreases as active risk (aggressiveness) increases |

---

### Exam Tips

- **Unconstrained IR is invariant to active risk**; **constrained IR decreases** as aggressiveness increases — this is THE key distinguishing concept
- **Long-only + max active weight constraints** substantially reduce TC (0.995 → 0.694 in the example) — a ~1/3 reduction in IR
- **Higher target active risk under constraints** makes limits MORE binding → TC falls FURTHER (0.694 → 0.567)
- **Breadth compensates for lower IC**: sector selection (fewer decisions, higher IC) can have LOWER IR than stock selection (many decisions, lower IC) — breadth often dominates
- **Score assignment matters**: even with the same nominal IC assumption, how scores interact with the correlation structure changes the REALIZED IC used in fundamental law accounting
- **Breadth ≠ number of assets** when active returns are correlated across assets — adjust based on correlation structure
- **"120/20 long-short"** terminology: describes a portfolio where longs sum to ~120% and shorts to ~-20% of capital
- **TC = 1.0 only if the sum-to-zero budget constraint is relaxed** (i.e., allowing cash/leverage) — otherwise slightly below 1.0 even without other constraints