---
layout: page
title: "Scenario Risk Measures"
permalink: /study/09-portfolio-management/05-measuring-and-managing-market-risk/08-scenario-risk-measures/
prev: /cfa/study/09-portfolio-management/05-measuring-and-managing-market-risk/07-other-key-risk-measures/
next: /cfa/study/09-portfolio-management/05-measuring-and-managing-market-risk/10-using-constraints-in-market-risk-management/
---
## Summary: Scenario Risk Measures (CFA Level II — Portfolio Management)

---

### Core Concept

**Scenario risk measure**: Estimates portfolio return under a **hypothetical** OR **historical** repeat market event.

**Two key differences from sensitivity measures:**

| Feature | Sensitivity Measures | Scenario Measures |
|---------|------------------------|----------------------|
| **Number of factors** | **Single** factor movement | **Multiple** factor movements simultaneously |
| **Size of movement** | Small/incremental | **Larger, extreme** movements |

**Relationship to VaR**: Both focus on extreme outcomes, but scenarios are **NOT constrained** by recent historical events or distributional/parameter assumptions.

**Stress tests**: Closely related — apply **extreme negative** stress to a specific exposure. Scenario analysis is broader (can examine positive OR negative outcomes), though negative applications dominate in practice.

---

## Historical Scenarios

**Definition**: Model portfolio performance as if a **specific past period** were to repeat.

**Common historical scenarios used**: 1997-98 currency crisis, LTCM failure, October 1987 crash, 2001 tech bubble burst, 2008-09 financial crisis.

---

### Methodology — Full Repricing Approach

```
Step 1: Enter current portfolio holdings into appropriate valuation models
Step 2: Re-price ALL positions using conditions that prevailed during the historical scenario period
         (rates, spreads, implied vol, underlying asset prices)
Step 3: Record value BEFORE and AFTER → calculate gain/loss
Step 4: Assume the ENTIRE price move happens INSTANTANEOUSLY (no rebalancing)
```

**Critical insight — Why price history alone is insufficient for fixed income/derivatives:**

> A bond's OWN historical price series may be **misleading** because the instrument's characteristics have changed (e.g., a bond that was 10-year maturity 5 years ago is now a 1-year bond with different volatility characteristics).

$$\boxed{\text{Better approach}: \text{Use historical YIELDS, SPREADS, and VOLATILITY LEVELS} \implies \text{Re-price current instrument characteristics under those conditions}}$$

---

### Outputs of Historical Scenario Analysis

| Output | For |
|--------|-----|
| Total portfolio return | All investors |
| Total return **relative to benchmark** | Long-only asset managers |
| Total return **relative to liability changes** | Pensions, insurers |
| **Collateral/cash requirements** driven by scenario | Leveraged participants |

---

### Multi-Day Variant — Controversial Approach

**Alternative method**: Spread the shock over **multiple days**, allowing manager actions (selling, rebalancing) during the period.

**Why many risk managers are SKEPTICAL:**
$$\boxed{\text{Multi-day approach} \implies \text{Smaller (by design) potential loss estimates} \implies \text{Doesn't answer: "What if action is impossible?"}}$$

**Preferred approach**: Single instantaneous shock — tests whether the portfolio **survives** the initial impact before any remedial action, avoiding overconfidence about liquidity/hedging ability during real crises.

---

### Practical Complications in Historical Scenario Construction

**1. Currency decomposition**: Foreign equities must separate **FX exposure** from **equity exposure**
- **Explicit currency approach**: Direct measurement of currency exposure
- **Implicit approach**: Accounts for companies with foreign earnings/hedging even if domestically registered

**2. Full repricing vs. sensitivity-based approximation:**

| Approach | Accuracy |
|----------|---------|
| **Full revaluation** (reprice securities directly) | **Highly accurate** |
| **Apply scenario to sensitivities** (delta/gamma, duration/convexity) | Simpler but **INADEQUATE for options/option-embedded securities** |

$$\boxed{\text{Delta/Gamma and Duration/Convexity are designed for SMALL moves} \implies \text{Unsuitable for the LARGE moves used in scenario analysis}}$$

**3. Sector/curve mapping precision**: Even for simple fixed-income (no options), duration sensitivities must be **mapped to relevant sectors, credit curves, and yield curve segments** — mapping too broadly misses meaningful scenario-driven differences.

**4. Securities that didn't exist during the historical period:**
- Post-1987 IPOs need to be **mapped to a relevant index** or **decomposed via factor model** (growth, value, volatility, momentum) for a 1987 crash scenario
- **CDS** (widespread only from 2002) require special adaptation for pre-2002 historical scenarios

---

## Hypothetical Scenarios

### Why Use Hypothetical (Not Just Historical) Scenarios?

**Historical scenario advantages**: "Uncontroversial" — no one can claim these events are impossible since they DID happen.

**Historical scenario limitations:**
1. **Probability assignment problem** — unlikely the EXACT same scenario repeats
2. **Recency bias risk** — managers who "fight the last war" (protecting against the last crisis) may become **more vulnerable** to a DIFFERENT, not-yet-experienced crisis

$$\boxed{\text{Hypothetical scenarios test market movements/co-movements that have NOT necessarily occurred before}}$$

---

### Reverse Stress Testing

**Definition**: Process of identifying a portfolio's **most significant exposures** first, THEN designing scenarios that specifically target them.

**Key questions asked:**
- What are the top 10 exposures/risk drivers?
- What would make them risky?
- What are the top 10 benchmark-relative exposures?
- Under what scenario would hedges **NOT** hedge?
- Under what scenario would "safe" activities (e.g., securities lending) become risky?

**Particularly useful for**: Estimating losses when **multiple significant exposures** are hit simultaneously — common in real crises when investors "crowd" into the same trades, or seemingly unrelated markets stress together.

---

### Designing Hypothetical Geopolitical/Macro Scenarios

```
Step 1: Posit an event (e.g., earthquake, invasion, banking collapse)
Step 2: Identify markets most likely affected (primary + secondary effects)
Step 3: Establish potential range of movement for affected markets
Step 4: Apply to current portfolio
```

**Standard for scenario design**: "**Rare, but not impossible**"

**Value even if inaccurate**: Helps identify **unexpected vulnerabilities** and prompts thinking through counterparty/operational risks that could amplify the scenario.

---

### Key Benefit — Stressing Correlations

$$\boxed{\text{Hypothetical scenarios are NOT constrained by historical co-movement patterns}}$$

**Application 1**: Simulate correlations **rising during stress** — apply similar movements to normally uncorrelated markets.

**Application 2**: Simulate hedges **breaking down** — e.g., a bond and its hedging CDS normally move together but can **decouple** during a "flight to quality" (swap rate falls on credit strength perception while bond yield rises on credit risk perception).

---

### What to Do After Scenario Analysis — Action Steps

**If portfolio is within normal limits but fails a stress scenario:**
- Trim positions that look "comfortable" under normal conditions but perform badly under stress
- Adjust benchmark-relative risk (for constrained asset managers)
- Disclose concerns to clients
- Modify counterparty/operational procedures

---

### Important Caution — Don't Over-Optimize Against Stress

$$\boxed{\text{Zero sensitivity to ANY stress event} \implies \text{Portfolio likely earns only the risk-free rate (or fails to beat benchmark)}}$$

**Correct philosophy**: Stress tests should be used to **UNDERSTAND** risk exposures, **NOT eliminate them entirely**.

**Best practice**: Set a **tolerance range** that reflects HIGHER loss potential than normally acceptable; only act if the scenario **exceeds** this elevated threshold. Periodically refresh scenarios — remove those no longer meaningful, add new emerging threats.

---

### Scenario Analysis's Role in the Risk Management Hierarchy

$$\boxed{\text{Scenario/stress tests} = \text{FINAL screen}, \text{ NOT the primary/initial screen}}$$

**Correct hierarchy**: Position size limits → Exposure limits → VaR/tracking error limits → **Scenario analysis (final check)**

---

### Single-Factor vs. Multi-Factor — By Participant Type

| Participant Type | Preferred Approach | Why |
|-------------------|------------------------|-----|
| **Banks, hedge funds (leveraged)** | **Single-factor stress tests** (pass/fail) | Directly test whether capital could be impaired → margin calls, financing withdrawal risk |
| **Long-only asset managers** | Multi-factor scenario analysis | No leverage → insolvency less relevant; focus is benchmark-relative underperformance risk |

---

### Example 8 — Knowledge Check Answers

**Q1 — Example of a reverse stress test:**
→ **A. "Identify top 10 exposures, then generate a hypothetical stress affecting ALL 10 simultaneously"**
- B wrong: This is a **historical scenario** search (worst single day in past 5 years), NOT reverse stress testing
- C wrong: This describes reversing 2008 GFC returns to model an unusually STRONG market — not a reverse stress test targeting specific vulnerabilities

**Q2 — Least likely to use scenario analysis as a pass/fail stress test:**
→ **B. "Long-only asset manager"**
- A and C wrong: Banks and leveraged hedge funds ARE the primary users of pass/fail single-factor stress tests (capital impairment concern)
- Long-only managers don't typically use leverage → insolvency risk less relevant → pass/fail framing less applicable

**Q3 — Most accurate approach to scenario analysis for options portfolios:**
→ **C. "Fully reprice the options using the market returns specified under the scenario"**
- A and B wrong: Delta and Delta+Gamma are designed for **SMALL** moves — using them for the **LARGE** movements typical in scenario analysis will **misestimate** actual results
- Full repricing is the ONLY accurate method for capturing option behavior under extreme scenarios

---

### Key Formula/Concept Reference Card

| Concept | Key Point |
|---------|-----------|
| **Scenario vs. sensitivity** | Multiple factors + larger movements vs. single factor + small movement |
| **Historical scenario limitation** | Instrument's own price history may misrepresent CURRENT risk profile |
| **Preferred inputs for FI/derivatives** | Historical yields/spreads/implied vol > raw historical PRICES |
| **Options in scenarios** | MUST fully reprice — delta/gamma are inadequate for large moves |
| **Risk hierarchy** | Position limits → Exposure limits → VaR → Scenario analysis (FINAL check) |

---

### Exam Tips

- **Scenario measures use MULTIPLE, LARGER factor movements**; sensitivity measures use SINGLE, SMALL movements — this is the core distinguishing feature
- **Historical scenarios**: use current instrument yields/spreads/volatility (NOT raw historical prices) when the instrument's characteristics have changed
- **Instantaneous shock (single-day) approach is generally PREFERRED** over multi-day — tests true crisis survivability without assuming rebalancing ability
- **Options MUST be fully repriced** for scenario analysis — delta/gamma approximations fail for the large moves scenarios test
- **Reverse stress testing**: START from the portfolio's KEY vulnerabilities, THEN design a scenario targeting them — opposite direction from typical "pick an event, see what happens"
- **Hypothetical scenarios uniquely allow stressing CORRELATIONS** — can simulate rising correlation in crisis or hedge decoupling ("flight to quality")
- **Banks/hedge funds (leveraged) → single-factor pass/fail tests**; **Long-only managers → multi-factor scenario analysis** (no insolvency concern)
- **Scenario analysis is the FINAL risk screen**, layered on top of position limits, exposure limits, and VaR/tracking error constraints — NOT a standalone primary tool
- **Zero stress sensitivity is a warning sign, not a goal** — a portfolio immune to all stress likely can't outperform the risk-free rate/benchmark
- **Post-scenario-period securities** (IPOs, new instrument types like CDS) require mapping/decomposition via factor models when applying older historical scenarios
