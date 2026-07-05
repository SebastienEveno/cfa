## Summary: Pricing and Valuing Equity Swap Contracts (CFA Level II — Derivatives)

---

### What Is an Equity Swap?

**Equity swap**: OTC derivative where one party pays returns based on an **equity/index** and the other pays either:
1. A **fixed rate** (receive-equity, pay-fixed)
2. A **floating rate** (receive-equity, pay-floating)
3. **Another equity return** (receive-equity, pay-equity)

**Key uses:**
- Convert equity returns into fixed/floating income (or vice versa)
- Gain equity exposure **without owning shares**
- Hedge equity risk for a defined period
- Tax/liquidity-efficient repositioning (avoid selling concentrated stock positions)

---

### Three Types of Equity Swaps

**Receive-equity, pay-fixed:**
$$NA \times (R_E - r_{FIX})$$

**Receive-equity, pay-floating:**
$$NA \times (R_E - r_{FLT})$$

**Receive-equity, pay-equity:**
$$NA \times (R_{E,a} - R_{E,b})$$

> **Equity-for-equity swap** = receive-equity-a + pay-fixed **PLUS** pay-equity-b + receive-fixed (fixed legs cancel → net equity-for-equity)

---

### Cash Flow Formulas

**Equity leg (per period):**
$$\boxed{S_i = NA_E \times R_E}$$

**Fixed leg (per period):**
$$\boxed{FS = NA_E \times AP_{FIX} \times r_{FIX}}$$

**Net payment (receive-equity, pay-fixed):**
$$\boxed{S_i - FS = NA_E \times AP \times (R_E - r_{FIX})}$$

**Key convention**: Equity return $R_E$ is a **periodic** (not annualized) return; fixed rate $r_{FIX}$ is **annualized** — must adjust by $AP$ for comparison.

---

### Example 17 — Equity Swap Cash Flows

**Setup**: Receive-equity index, pay-fixed swap; quarterly reset (30/360); $NA = €5,000,000$; fixed rate = 1.6% annualized (0.4%/quarter)

**Q1** ($R_E = +4.0\%$ for the quarter, not annualized):
$$CF = 5,000,000 \times \frac{90}{360} \times (0.160 - 0.016) = 5,000,000 \times (0.040 - 0.004) = \mathbf{€180,000}$$

→ **Answer: C. €180,000** (positive — equity returned 4% > 0.4% fixed quarterly payment)

**Q2** ($R_E = -6.0\%$ for the quarter):
$$CF = 5,000,000 \times (−0.060 - 0.004) = 5,000,000 \times (-0.064) = \mathbf{-€320,000}$$

→ **Answer: A. −€320,000** (negative — equity fell 6% AND must pay fixed 0.4% → large outflow for receive-equity party)

---

### Equity Swap as Portfolio of Equity + Bond

**Replication** (receive-fixed, pay-equity swap):
$$\text{Receive-fixed, pay-equity} \equiv \text{Long equity position} + \text{Short fixed-rate bond}$$

**Offsetting portfolio for arbitrage-free valuation:**

| Position | Time 0 | Time 1 to n-1 | Time n |
|---------|--------|----------------|--------|
| Swap (receive-fixed, pay-equity) | $-V_{EQ}$ | $+FS - S_i$ | $+FS - S_n$ |
| Buy equity ($NA_E$) | $-NA_E$ | $+S_i$ | $+S_n + NA_E$ |
| Short-sell fixed bond | $+V_{FIX}$ | $-FS$ | $-(FS + Par)$ |
| **Net** | $0$ | $0$ | $NA_E - Par$ |

**Equilibrium condition** (assuming $NA_E = Par$):
$$\boxed{V_{EQ} = V_{FIX} - NA_E}$$

---

### Pricing an Equity Swap

**Key insight**: Fixed swap rate on an equity swap = **identical to the fixed rate on a comparable interest rate swap**

$$\boxed{r_{FIX} = \frac{1 - PV_n(1)}{\sum_{i=1}^{n} PV_i(1)} \times \frac{1}{AP}}$$

**Why?** The fixed leg cash flows are identical in both swap types — only the other leg differs (floating MRR vs. equity return). The pricing condition forces $V_{FIX} = NA_E = 1$ (par) in both cases.

**Equity-for-floating swap**: No pricing needed — floating side automatically prices to par at each reset date.

**Equity-for-equity swap**: No pricing needed — view as two separate equity-for-fixed swaps where fixed rates cancel.

---

### Example 18 — Equity Swap Fixed Rate

**Using same PV factors from Example 13:**
$$r_{FIX} = \frac{1-0.937467}{4.822107} \times \frac{360}{360} = \mathbf{1.2968\%}$$

→ **Answer: C. 1.3%** — Same as the interest rate swap fixed rate from Example 13 — confirms the pricing identity.

---

### Valuing an Existing Equity Swap

**Equity swap valuation formula at time t:**

$$\boxed{V_{EQ,t} = V_{FIX}(C_0) - \frac{S_t}{S_{t-1}} \times NA_E - PV(Par - NA_E)}$$

**Where:**
- $V_{FIX}(C_0)$ = current value of the fixed-rate bond (coupon = original fixed swap rate $C_0$, discounted at new rates)
- $S_t/S_{t-1}$ = ratio of current equity price to equity price at last reset date = **equity appreciation factor**
- $PV(Par - NA_E)$ = present value adjustment if bond par ≠ equity notional (usually = 0 when $Par = NA_E$)

**Value direction:**
| Condition | Effect on Receive-Fixed, Pay-Equity Party |
|-----------|------------------------------------------|
| Equity rises ($S_t > S_{t-1}$) | $V_{EQ,t}$ decreases (paying more equity return) |
| Interest rates fall | $V_{FIX}$ increases → $V_{EQ,t}$ increases |

---

### Example 19 — Equity Swap Valuation

**Setup**: Receive-fixed, pay-equity, 5-year annual reset; $r_{FIX} = 1.5\%$; initial equity = 100; $NA_E = Par = 10,000,000$; 6 months later: rates flat at 1.2%, equity = 105

**Step 1**: Value the fixed-rate bond at new rates (flat 1.2%)

(5 remaining annual cash flows from half-year to 4.5 years):

| Date (Years) | PV Factor | CF | PV(CF) |
|-------------|-----------|-----|--------|
| 0.5 | 0.994036 | 150,000 | 149,105 |
| 1.5 | 0.982318 | 150,000 | 147,348 |
| 2.5 | 0.970874 | 150,000 | 145,631 |
| 3.5 | 0.959693 | 150,000 | 143,954 |
| 4.5 | 0.948767 | **10,150,000** | 9,629,981 |
| **Total** | | | **10,216,019** |

**PV factor formula (semi-annual periods, flat 1.2%):**
$$PV = \frac{1}{1 + n \times (0.012/2)} \quad \text{where } n = \text{number of half-years}$$

**Step 2**: Apply valuation formula:
$$V_{EQ,t} = 10,216,019 - \frac{105}{100} \times 10,000,000 - 0$$
$$= 10,216,019 - 10,500,000 = \mathbf{-283,981 \approx -€300,000}$$

→ **Answer Q1: A. −€300,000**

**Interpretation**: Negative value to the receive-fixed party because:
1. Equity rose from 100 to 105 (+5%) → pay-equity obligation increased
2. Interest rates fell (1.5% → 1.2%) → while this increased $V_{FIX}$, the equity gain was larger

**Q2 — Equity price for swap value = 0:**

$$0 = 10,216,019 - \frac{S_t}{100} \times 10,000,000$$

$$S_t = \frac{10,216,019}{10,000,000} \times 100 = \mathbf{102.16 \approx 102}$$

→ **Answer Q2: B. 102** — When equity exactly equals the fixed bond value, the swap is worth zero.

---

### Key Differences: Equity Swap vs. Interest Rate Swap

| Feature | Interest Rate Swap | Equity Swap |
|---------|-------------------|-------------|
| **Fixed rate pricing** | $r_{FIX} = (1-PV_n)/\sum PV_i \times (1/AP)$ | **Identical formula** |
| **Floating leg** | Floating bond at par at reset | Equity position at $NA_E$ at reset |
| **Mid-life valuation** | $V = V_{FIX} - V_{FLT}$ (floating adjusts for last set rate) | $V = V_{FIX} - (S_t/S_{t-1}) \times NA_E$ (equity adjusts by price ratio) |
| **Key risk** | Interest rate risk only | Equity risk + interest rate risk |

---

### Formula Reference Card

| Task | Formula |
|------|---------|
| **Equity swap net cash flow** | $NA_E \times AP \times (R_E - r_{FIX})$ |
| **Fixed swap rate (pricing)** | $r_{FIX} = (1-PV_n)/\sum PV_i \times (1/AP)$ |
| **Equity swap value** | $V_{FIX}(C_0) - (S_t/S_{t-1}) \times NA_E - PV(Par-NA_E)$ |

---

### Exam Tips

- **Equity swap fixed rate = interest rate swap fixed rate** (same formula, same PV factors) — identical pricing
- **Equity return is periodic (not annualized)**: A quarterly return of 4% is NOT 4%/4 = 1% — it is a full quarter's return
- **Fixed rate IS annualized**: Must multiply by $AP = 90/360$ to get quarterly equivalent
- **Mid-life valuation**: Replace floating bond value (interest rate swap) with $(S_t/S_{t-1}) \times NA_E$ (equity position adjusted by price ratio since last reset)
- **Receive-fixed, pay-equity**: benefits when rates fall AND equity falls; loses when equity rises or rates rise
- **Equity-for-equity swap** = two receive-fixed swaps (fixed legs cancel): simpler to view this way
- **No pricing needed** for receive-equity, pay-floating swaps (floating side always at par) or equity-for-equity swaps
- **Negative swap value**: means the party owes more on the paying leg than they receive on the receiving leg — position is a liability