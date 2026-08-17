---
layout: page
title: "Measuring and Managing Market Risk — Introduction to VaR"
permalink: /study/09-portfolio-management/05-measuring-and-managing-market-risk/01-introduction/
next: /cfa/study/09-portfolio-management/05-measuring-and-managing-market-risk/02-estimating-var/
---
## Summary: Measuring and Managing Market Risk — Introduction to VaR (CFA Level II — Portfolio Management)

---

### Market Risk vs. Other Risks

**Market risk**: Risk arising from movements in **stock prices, interest rates, exchange rates, and commodity prices**.

**Distinguished from:**
- **Credit risk**: Risk of counterparty payment failure
- **Operational risk**: Breakdowns in organizational procedures

---

### Risk Management — Role of Models

$$\boxed{\text{Risk management} = \text{Identifying and measuring risk} + \text{Ensuring risks match desired levels}}$$

**Model**: A **simplified representation** of a real-world phenomenon.

**What risk models provide:**
- Sensitivity of portfolio value to risk factor changes
- Insight into expected gains/losses
- Frequency estimates of large losses

**Critical caveat**: Effective risk management requires **judgment and experience** beyond just applying models — knowing model strengths/limitations and when to supplement or substitute approaches.

**Why market risk is relatively easier to analyze**: Continuous market operation generates **abundant historical data** — but a key limitation remains: **potential future losses are estimated from PAST data**, not future outcomes.

---

## Value at Risk (VaR) — Core Concept

**Origin**: Developed late 1980s; became one of the most important global risk measures over the following decade.

### Formal Definition

$$\boxed{VaR = \text{The MINIMUM loss expected a certain \% of the time, over a certain period, under assumed market conditions}}$$

**Can be expressed in:**
- **Currency units** (e.g., €2.2 million)
- **Percentage of portfolio value** (e.g., 0.55%)

---

### Three Critical Components of a VaR Statement

**Example**: *"The 5% VaR of a portfolio is €2.2 million over a one-day period."*

| Component | Detail |
|-----------|--------|
| **1. Units** | Currency (€2.2M) or percentage (0.55% if portfolio = €400M) |
| **2. VaR is a MINIMUM loss** | NOT the maximum possible loss (which theoretically = entire portfolio value) |
| **3. Time horizon** | References a **specific period** (here, one day) |

---

### Critical Interpretation — Getting the Language Right

**CORRECT interpretations:**
- "€2.2 million is the **minimum** loss we would expect 5% of the time"
- "5% of the time, losses would be **at least** €2.2 million"
- "We would expect a loss of **no more than** €2.2 million 95% of the time"

**INCORRECT (common mistake):**
> "95% of the time we would expect to lose LESS than €2.2 million" — this is misleading because it implies losses occur 95% of the time (just smaller ones). In reality, **a large percentage of the time the portfolio makes money**.

---

### VaR ↔ Confidence Level Relationship

$$\boxed{5\% \text{ VaR} \iff 95\% \text{ confidence level}}$$

---

### VaR and the Normal Distribution — Standard Deviation Equivalents

| VaR Level | Confidence Level | Standard Deviations Below Mean |
|-----------|---------------------|-----------------------------------|
| **16% VaR** | 84% confidence | **1.00** |
| **5% VaR** | 95% confidence | **1.65** |
| **1% VaR** | 99% confidence | **2.33** |

**Derivation of 16% VaR** (one standard deviation logic):
- 68% of outcomes fall within ±1 SD of mean → 34% below mean (within 1 SD), 34% above mean (within 1 SD)
- 50% of all outcomes lie to the right of the mean
- $50\% + 34\% = 84\%$ of outcomes lie **above** the point that is 1 SD below the mean
- Therefore: $100\% - 84\% = \mathbf{16\%}$ of outcomes fall **below** that point

$$\boxed{\text{Higher confidence level} \implies \text{Higher VaR (more standard deviations from the mean)}}$$

---

### No Formal Rules — Judgment Required

**No mandated VaR threshold**: 5%, 1%, and 16% (one SD) are all commonly used — **the choice is a judgment call** by the risk manager/decision maker.

**No mandated time horizon**: VaR can be measured **daily, weekly, biweekly, monthly, quarterly, semiannually, or annually**.

> **Key theme**: VaR is **NOT a precise, single "correct" measure** — it involves considerable judgment in choosing both the confidence level and the time horizon.

---

### Expression Format — Returns vs. Currency

- **Easier to process/estimate**: VaR calculated in terms of **returns**
- **More commonly reported/communicated**: VaR expressed in terms of **profits/losses (currency)**

---

### Example 1 — Knowledge Check Answers

**Q1 (VaR = $12.5M at 5% for one month — correct interpretation):**

→ **C. "The minimum loss that would be expected to occur over one month 5% of the time is $12.5 million"**

- **A wrong**: VaR does NOT give the probability of losing a **specific** amount — it gives the minimum loss threshold at a given frequency
- **B wrong**: VaR is **NOT an expected loss** — it's a **minimum** loss threshold, a fundamentally different concept

**Q2 (Which statement is INCORRECT?):**

→ **A. "A 1% VaR implies a downward move of 1%"** — **INCORRECT**

- A 1% VaR (99% confidence) corresponds to **2.33 standard deviations** below the expected value — NOT literally a "1% move"
- B is correct: 16% VaR = one standard deviation move
- C is correct: 5% VaR = 1.65 standard deviations below expected value

> **Common exam trap**: The "X%" in "X% VaR" refers to the **probability/confidence threshold**, NOT a percentage price movement.

---

### Roadmap for the Rest of the Reading

```
1. Foundation of VaR (this section)
2. Three primary VaR estimation approaches
3. Advantages, limitations, and extensions of VaR
4. Sensitivity measures (equities, fixed income, options)
5. Historical and hypothetical scenario risk measures
6. Risk management constraints:
   - Risk budgeting
   - Position limits
   - Scenario limits
   - Stop-loss limits
   - Capital allocation
7. Applications and limitations across market participant types
```

---

### Key Formula/Concept Reference Card

| Concept | Value |
|---------|-------|
| **VaR definition** | Minimum loss expected X% of the time over a given period |
| **5% VaR** | 1.65 SD below mean (95% confidence) |
| **1% VaR** | 2.33 SD below mean (99% confidence) |
| **16% VaR** | 1.00 SD below mean (84% confidence) |
| **X% VaR** | Corresponds to (100-X)% confidence level |

---

### Exam Tips

- **VaR = MINIMUM loss**, not maximum loss, not expected loss — this distinction is THE most commonly tested concept
- **"X% VaR" ≠ "X% price move"** — X% refers to the probability/frequency, not the magnitude of the move
- **5% VaR = 1.65 SD; 1% VaR = 2.33 SD; 16% VaR = 1.00 SD** (assuming normal distribution) — memorize these three
- **No formal rule for VaR threshold or time horizon** — both require judgment; this is a defining characteristic of VaR (not a precise, mechanically-derived number)
- **Maximum possible loss** in an unleveraged portfolio = the entire portfolio value — VaR is NOT this
- **Higher confidence level → higher VaR** (moving further into the tail of the distribution)
- **VaR can be expressed as currency OR percentage** — always check which format a question uses
- **The complement relationship**: 5% VaR = 95% confidence — know this conversion cold
- Watch for the classic exam trap: **misinterpreting "95% of the time losses are less than VaR" as "95% of the time you lose money"** — the correct reading is that losses **exceeding** VaR happen only 5% of the time; most of the time, the portfolio actually gains value
