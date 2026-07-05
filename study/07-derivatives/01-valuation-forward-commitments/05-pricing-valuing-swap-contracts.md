---
layout: page
title: Pricing and Valuing Interest Rate Swap Contracts
permalink: /study/07-derivatives/01-valuation-forward-commitments/05-pricing-valuing-swap-contracts/
prev: /cfa/study/07-derivatives/01-valuation-forward-commitments/04-pricing-forward-futures-contracts/
next: /cfa/study/07-derivatives/01-valuation-forward-commitments/06-pricing-valuing-currency-swaps/
---
## Summary: Pricing and Valuing Interest Rate Swap Contracts (CFA Level II — Derivatives)

---

### What Is an Interest Rate Swap?

**Swap contract**: Agreement to exchange a series of cash flows at periodic dates.

**Key analogy**: An interest rate swap = **a series of FRAs** — it hedges **multiperiod** interest rate risk, whereas a single FRA hedges only one period.

**Plain vanilla swap** (fixed-for-floating):
- **Fixed-rate payer** (pay-fixed, receive-floating): profits when rates **rise**
- **Fixed-rate receiver** (receive-fixed, pay-floating): profits when rates **fall**

---

### Swap as a Portfolio of Bonds

**Core replication principle**: A swap can be replicated using a pair of bonds.

**Receive-fixed, pay-floating swap** ≡:
$$\boxed{\text{Long fixed-rate bond} + \text{Short floating-rate bond}}$$

**Pay-fixed, receive-floating swap** ≡:
$$\boxed{\text{Long floating-rate bond} + \text{Short fixed-rate bond}}$$

**Why bonds?** At initiation both bonds priced at par → initial cash flows = 0; par values cancel at maturity → initial swap value = 0.

---

### Swap Cash Flow Formulas

**Floating leg cash flow (per unit NA):**
$$\boxed{S_i = AP_{FLT} \times r_{FLT,i} = \frac{NAD_{FLT}}{NTD_{FLT}} \times r_{FLT,i}}$$

**Fixed leg cash flow (per unit NA):**
$$\boxed{FS = AP_{FIX} \times r_{FIX} = \frac{NAD_{FIX}}{NTD_{FIX}} \times r_{FIX}}$$

**Net payment (receive-fixed, pay-floating):**
$$\boxed{FS - S_i = AP \times (r_{FIX} - r_{FLT,i})}$$

**Net payment (pay-fixed, receive-floating):**
$$\boxed{S_i - FS = AP \times (r_{FLT,i} - r_{FIX})}$$

**Convention**: Floating rate set at **beginning of period** (advanced set), paid at **end of period** (settled in arrears).

---

### Numerical Net Payment Example

**Setup**: $r_{FIX} = 5\%$, $r_{FLT} = 5.2\%$, $AP = 30/360$, $NA = £100M$

**For receive-fixed party:**
$$FS - S_i = \frac{30}{360} \times (0.05 - 0.052) = -0.000167 \text{ per notional of 1}$$

**Net payment** = $-0.000167 \times £100,000,000 = -\mathbf{£16,700}$

(Negative → receive-fixed party **pays** this amount; floating rate exceeded fixed rate)

---

### Pricing a Swap — Finding the Fixed Swap Rate

**Objective**: Find $r_{FIX}$ such that $V_{swap} = 0$ at initiation.

**Condition**: $V_{FIX} = V_{FLT}$

**Key insight**: At initiation (reset date), floating-rate bond always trades at **par** ($V_{FLT} = 1$).

**Fixed-rate bond value:**
$$\boxed{V_{FIX} = FS \times \sum_{i=1}^{n} PV_i(1) + PV_n(1)}$$

**Where PV factors** use spot rates:
$$PV_i(1) = \frac{1}{1 + R_{spot,i} \times t_i}$$

**Setting $V_{FIX} = 1$ (= $V_{FLT}$) and solving for $r_{FIX}$:**

$$\boxed{r_{FIX} = \frac{1 - PV_n(1)}{\sum_{i=1}^{n} PV_i(1)} \times \frac{1}{AP}}$$

**Intuition**: Fixed swap rate = (1 minus the final discount factor) divided by the sum of all discount factors, scaled by the accrual period.

---

### Example 13 Answer — 5-Year Annual Swap

**Given PV factors:**

| Year | PV Factor |
|------|-----------|
| 1 | 0.990099 |
| 2 | 0.977876 |
| 3 | 0.965136 |
| 4 | 0.951529 |
| 5 | 0.937467 |
| **Sum** | **4.822107** |

**Solving for $r_{FIX}$ ($AP = 1$ for annual):**
$$r_{FIX} = \frac{1 - 0.937467}{4.822107} \times \frac{360}{360} = \frac{0.062533}{4.822107} = \mathbf{1.30\%}$$

→ **Answer: B. 1.3%**

---

### Computing PV Factors from Spot Rates

**Formula (add-on convention, MRR-based):**
$$\boxed{PV_i(1) = \frac{1}{1 + R_{spot,i} \times (days_i/360)}}$$

**Example (Exhibit 16 — USD term structure):**

| Days | Spot Rate | PV Factor |
|------|-----------|-----------|
| 90 | 2.10% | $1/[1+0.021(90/360)] = 0.994777$ |
| 180 | 2.25% | 0.988875 |
| 270 | 2.40% | 0.982318 |
| 360 | 2.54% | $1/[1+0.0254(360/360)] = 0.975229$ |
| **Sum** | | **3.941199** |

---

### Valuing an Existing Swap

**Key insight**: Value the swap by entering an **offsetting swap** at the current market rate.

- Long old swap (receive $FS_0$) + Short new swap (pay $FS_t$) → floating legs cancel
- Net fixed cash flow = $(FS_0 - FS_t)$ per period — known with certainty

**Value of receive-fixed swap at Time t:**
$$\boxed{V_{swap,t} = NA \times (FS_0 - FS_t) \times \sum_{i=1}^{n} PV_i}$$

**Value of pay-fixed swap at Time t:**
$$\boxed{-V_{swap,t} = NA \times (FS_t - FS_0) \times \sum_{i=1}^{n} PV_i}$$

**Direction logic:**
| Position | Benefits when | Sign of value |
|----------|--------------|---------------|
| **Receive-fixed** (long fixed bond) | $FS_0 > FS_t$ (rates fell since initiation) | Positive |
| **Pay-fixed** (short fixed bond) | $FS_t > FS_0$ (rates rose since initiation) | Positive |

---

### Example 14 Answer — Receive-Fixed Swap Valuation

**Setup**: 7-year swap entered 2 years ago (5 years remaining), $r_{FIX,0} = 2.0\%$, current $r_{FIX,t} = 1.3\%$, $NA = €100,000,000$, $AP = 1$ (annual resets)

**PV factors** (same as Example 13):
$$\sum PV_i = 4.822107$$

**Fixed swap cash flows**:
$$FS_0 = 2.0\% \times 1 = 0.020 \quad FS_t = 1.3\% \times 1 = 0.013$$

**Receive-fixed swap value (Q1):**
$$V_{swap,t} = €100,000,000 \times (0.020 - 0.013) \times 4.822107 = €100,000,000 \times 0.007 \times 4.822107 = \mathbf{€3,375,000}$$

→ **Answer Q1: B. €3,375,000** (positive — rates fell, so receiving the higher original fixed rate is valuable)

**Pay-fixed swap value (Q2):**
$$-V_{swap,t} = €100,000,000 \times (0.013 - 0.020) \times 4.822107 = \mathbf{-€3,375,000}$$

→ **Answer Q2: B. −€3,375,000** (negative — fixed-rate payer is locked into paying above market rate)

---

### Replicating and Offsetting Portfolio Summary (Exhibit 17)

| | Receive-Fixed | Pay-Fixed |
|-|---------------|-----------|
| **Replicating (at initiation)** | Long fixed bond + Short floating bond | Long floating bond + Short fixed bond |
| **Offsetting (at time t for valuation)** | Short fixed bond + Long floating bond | Short floating bond + Long fixed bond |
| **Valuation rate difference** | $r_{FIX,0} - r_{FIX,t}$ | $r_{FIX,t} - r_{FIX,0}$ |

---

### Practical Application: Synthetic Floating-Rate Bond

**Use case**: Company REB issues **fixed-rate bonds** but wants **floating-rate liability**.

**Strategy**: Issue fixed-rate bonds + Enter **receive-fixed, pay-floating swap**

$$\text{Fixed payments to bondholders} \xrightarrow{\text{offset}} \text{Fixed receipts from swap} = \text{Net: floating payments only}$$

**Result**: Synthetic floating-rate bond — REB effectively pays floating (MRR-based) even though it issued fixed-rate debt.

---

### Key Formula Reference Card

| Task | Formula |
|------|---------|
| **PV factor** | $PV_i = 1/[1 + R_{spot,i} \times t_i]$ |
| **Fixed swap rate (pricing)** | $r_{FIX} = [(1-PV_n)/\sum PV_i] \times (1/AP)$ |
| **Receive-fixed swap value** | $NA \times (FS_0 - FS_t) \times \sum PV_i$ |
| **Pay-fixed swap value** | $NA \times (FS_t - FS_0) \times \sum PV_i$ |
| **Net payment (receive-fixed)** | $AP \times (r_{FIX} - r_{FLT,i}) \times NA$ |
| **Net payment (pay-fixed)** | $AP \times (r_{FLT,i} - r_{FIX}) \times NA$ |

---

### Exam Tips

- **Swap pricing formula**: $r_{FIX} = (1-PV_n)/\sum PV_i \times (1/AP)$ — memorize this
- **At initiation**: swap value = 0; floating bond always = par at reset dates
- **Swap = portfolio of bonds**: receive-fixed = long fixed bond + short floating bond
- **Swap valuation**: $(FS_0 - FS_t) \times \sum PV_i \times NA$ for receive-fixed; negate for pay-fixed
- **Receive-fixed gains when rates fall** ($FS_t < FS_0$); **pay-fixed gains when rates rise** ($FS_t > FS_0$)
- **Floating leg always cancels** in the offsetting portfolio — only the fixed rate difference matters for valuation
- **Always use REMAINING cash flow dates** and associated PV factors in valuation (not the original number of periods)
- **$AP = 1$ for annual resets**, $AP = 90/360$ for quarterly, etc. — don't forget to adjust
- **Swap vs. FRA**: swap = multiperiod FRA; same pricing logic but extended across n periods with multiple reset dates