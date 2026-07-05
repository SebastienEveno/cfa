---
layout: page
title: The Swap Rate Curve
permalink: /study/06-fixed-income/01-term-structure-dynamics/04-swap-rate-curve/
prev: /cfa/study/06-fixed-income/01-term-structure-dynamics/03-active-bond-ptf-management/
next: /cfa/study/06-fixed-income/01-term-structure-dynamics/05-swap-spreads/
---
## Summary: The Swap Rate Curve (CFA Level II — Fixed Income)

---

### What Is the Swap Rate Curve?

**Interest rate swap**: Derivative contract exchanging **fixed-rate payments** for **floating-rate payments** on a notional principal amount over a specified maturity.

**Swap rate**: The fixed rate in an interest rate swap — analogous to YTM on a government bond, but based on **short-term lending rates** (historically LIBOR, now transitioning to transaction-based **Market Reference Rates (MRR)** based on secured overnight funding).

**Swap curve**: The yield curve of swap rates across maturities — a **par curve** (swap rates are set so that no money changes hands at initiation; PV fixed leg = PV floating leg).

---

### Why Is the Swap Curve Important?

| Reason | Detail |
|--------|--------|
| **Global liquidity** | Notional outstanding ~$350 trillion (BIS, June 2020) — one of the world's largest financial markets |
| **No credit risk transfer** | Unlike bonds, no borrowers/lenders — only counterparties exchanging cash flows → flexible and customizable |
| **Efficient hedge** | One of the most efficient tools for hedging interest rate risk |
| **Countries without liquid government bonds** | In many countries, the swap curve is the **primary benchmark** for the time value of money |
| **Relevance in large private sectors** | Where private sector >> public sector, swap rates better reflect the economy's cost of borrowing |

**Regional usage:**
- **Europe**: Swaps frequently used as the primary benchmark
- **Asia**: Swap markets and government bond markets have developed in parallel; both used
- **US**: Active Treasury + swap markets; choice depends on institution type

---

### Government Curve vs. Swap Curve — Who Uses Which?

| Institution Type | Preferred Benchmark | Why |
|-----------------|---------------------|-----|
| **Wholesale banks** | Swap curve | Hedge balance sheets using swaps → natural reference |
| **Retail banks** | Government spot curve | Little exposure to swap market |

---

### Practical Example — Bank Using Swaps to Manage Funding

**Scenario**: Bank raises $20M via two CDs:
- CD 1: $10M, 1.50%, 2-year
- CD 2: $10M, 1.70%, 3-year

**Bank enters two swaps:**
- Swap 1: **Receive** 1.50% fixed, **Pay** MRR − 10 bps (2-year, $10M)
- Swap 2: **Receive** 1.70% fixed, **Pay** MRR − 15 bps (3-year, $10M)

**Net result**: Fixed payments received from swaps exactly offset CD interest payments → **fixed-rate liabilities converted to floating-rate liabilities** at MRR − 12.5 bps (weighted average).

> The margins on the floating rates become the **standard for measuring total funding cost** — illustrating why swap curve is the natural benchmark for wholesale banks.

---

### Determining Swap Rates from Discount Factors

**Swap pricing equation** (no-arbitrage at origination):

$$\boxed{s_T \sum_{t=1}^{T} DF_t + DF_T = 1}$$

**Left side**: PV of fixed payments ($s_T$ each period) + PV of principal at maturity
**Right side**: PV of floating leg (always = 1 at origination by convention)

**Solving for swap rate:**
$$\boxed{s_T = \frac{1 - DF_T}{\sum_{t=1}^{T} DF_t}}$$

---

### Worked Example (Example 8)

**Given discount factors**:
- $DF_1 = 0.9524$, $DF_2 = 0.8900$, $DF_3 = 0.8163$, $DF_4 = 0.7350$

**Implied spot rates** (from $DF_N = 1/(1+z_N)^N$):
- $z_1 = 5\%$, $z_2 = 6\%$, $z_3 = 7\%$, $z_4 = 8\%$

**Swap rates calculated:**

| Maturity | Calculation | Swap Rate |
|---------|-------------|-----------|
| 1yr | $s_1 = (1-0.9524)/0.9524$ | **5.00%** |
| 2yr | $s_2 = (1-0.8900)/(0.9524+0.8900)$ | **5.97%** |
| 3yr | $s_3 = (1-0.8163)/(0.9524+0.8900+0.8163)$ | **6.91%** |
| 4yr | $s_4 = (1-0.7350)/(0.9524+0.8900+0.8163+0.7350)$ | **7.81%** |

> Note: These swap rates match the par rates shown in the bootstrapping example from Section 1.01 — confirming that **swap rates, spot rates (zero rates), and discount factors all contain the same information** and are mathematically equivalent.

---

### The Three Interconnected Curves

$$\text{Discount function} \iff \text{Spot (zero) curve} \iff \text{Swap (par) curve}$$

Knowing **any one** of the three allows derivation of the other two. They are different representations of the **same underlying time value of money information**.

---

### Exam Tips

- **Swap rate = par rate** — set so no money exchanges at initiation (PV fixed = PV floating = 1)
- **Swap curve ≠ government spot curve** — swap rates include a credit component (based on bank lending rates, not risk-free government bonds)
- **Swap spread** = swap rate − government benchmark rate → proxy for perceived credit risk above risk-free
- **Swap rate formula**: $s_T = (1-DF_T)/\sum_{t=1}^{T} DF_t$ — memorize this
- **All three representations** (discount factors, spot rates, par/swap rates) are mathematically equivalent — derive any from the others
- **Bootstrapping**: same process works for swap rates → spot rates, or spot rates → swap rates
- **Wholesale banks use swap curve** (hedge with swaps); **retail banks use government curve** (no swap exposure)
- **MRR transition**: swap floating leg historically referenced LIBOR, now transitioning to secured overnight rates (e.g., SOFR in USD) — know this context