## Summary: YTM in Relation to Spot and Forward Rates (CFA Level II — Fixed Income)

---

### YTM as a Weighted Average of Spot Rates

**Key relationship**: YTM is a **weighted average** of the spot rates used to discount a bond's cash flows — weights determined by the size and timing of cash flows.

**For an upward-sloping yield curve** (most common):
$$z_1 < YTM < z_T$$

The YTM is **pulled toward** the spot rate corresponding to the **largest cash flow** (typically the final payment of principal + coupon).

---

### Worked Examples (Example 5)

**Given**: $z_1 = 9\%$, $z_2 = 10\%$, $z_3 = 11\%$ (upward-sloping)

**2-year bond (6% coupon, $1,000 face)**:
$$P = \frac{60}{1.09} + \frac{1,060}{(1.10)^2} = \$965.35$$

- YTM = **9.97%** → lies between $z_1=9\%$ and $z_2=10\%$
- **Closer to $z_2$** because the larger cash flow (principal + coupon) occurs in Year 2

**3-year bond (5% coupon, £100 face)**:
$$P = \frac{5}{1.09} + \frac{5}{(1.10)^2} + \frac{105}{(1.11)^3} = £87.00$$

- YTM = **10.93%** → lies between $z_1=9\%$ and $z_3=11\%$
- **Closest to $z_3$** because the largest cash flow occurs in Year 3

---

### When YTM = Expected Return? Almost Never.

**YTM equals realized return only under very restrictive assumptions:**
1. Bond held to **full maturity**
2. All coupons reinvested at the **original YTM**
3. **No default**

**YTM is a poor expected return estimate when:**

| Condition | Why YTM Fails |
|-----------|---------------|
| **High interest rate volatility** | Reinvestment rates will differ from YTM |
| **Sloped yield curve (up or down)** | Coupon reinvestment won't be at YTM |
| **Significant default risk** | Actual cash flows may differ from expected |
| **Embedded options** | Early redemption changes effective holding period |

---

### YTM vs. Expected Return — Numerical Illustration

**Setup**: $z_1=5\%, z_2=6\%, z_3=7\%, z_4=8\%, z_5=9\%$; 5-year annual coupon bond, 10% coupon, price = 105.43% of par

**Implied forward rates**: $f_{1,1}=7\%$, $f_{2,1}=9\%$, $f_{3,1}=11.1\%$, $f_{4,1}=13.1\%$

**YTM**: solved at **8.62%** (assuming reinvestment at 8.62%)

**If coupons reinvested at forward rates** (future spot rates = today's forwards):
$$FV = 10(1.07)(1.09)(1.111)(1.131) + \ldots + 110 \approx 162.22$$

**Expected annualized return**: $(1+x)^5 = 1.5387 \implies x = \mathbf{9.00\%}$

> **YTM (8.62%) ≠ Expected return (9.00%)** even under the "best-case" assumption that forward rates are realized.

**General rule**: YTM is only a realistic expected return estimate when the **yield curve is flat** (all spot rates equal → reinvestment at YTM is actually feasible).

---

### Example 6 — Knowledge Check Answers

**Q1 (When spot curve is upward-sloping, forward curve is):**
→ **A. Lies above the spot curve** — when an average is rising, the marginal data point exceeds the average.

**Q2 (Most accurate statement about YTM of default-risk-free bond):**
→ **B. Can be viewed as a weighted average of the spot rates applying to its cash flows** — this is always true; A is only true under very restrictive assumptions; C is wrong (upward-sloping spot curve makes reinvestment at YTM *less* likely).

**Q3 (When spot curve is downward-sloping, later initiation date means):**
→ **C. A greater distance below the spot curve** — with a downward-sloping spot curve, forward rates are below spot rates; later start dates result in increasingly lower forward curves.

---

### Forward Prices and Yield Curve Movement

**Key result**: The forward contract price **remains unchanged** as long as future spot rates evolve **exactly as predicted by today's forward curve**.

$$\boxed{\text{Price change} \iff \text{Spot curve deviates from today's forward curve forecast}}$$

**Trading implication:**
| Expectation | Action |
|-------------|--------|
| Future spot rate **< forward rate** implied today | **Buy** forward (expect forward price to rise) |
| Future spot rate **> forward rate** implied today | **Sell** forward (expect forward price to fall) |

---

### "Rolling Down the Yield Curve" — Numerical Example

**Setup**: Flat yield curve at 4%. Three-year bond rolls to two-year bond after one year.

**Year 0 discount factors (flat 4% curve):**
- $DF_1 = 0.9615$, $DF_2 = 0.9246$, $DF_3 = 0.8890$

**Year 1 (if curve unchanged = forward curve is realized):**
- $DF_1^{new} = 0.9615$, $DF_2^{new} = 0.9246$ (same as implied by today's forwards)
- One-year return on 3-year bond: $(0.9246 - 0.8890)/0.8890 = \mathbf{4\%}$ = spot rate ✓
- If another year passes: $(0.9615 - 0.9246)/0.9246 = \mathbf{4\%}$ = implied forward rate ✓

**Interpretation**: When yield curve is **unchanged**, each bond earns the current one-period spot rate as it "rolls down" the curve to shorter maturity — a core concept for **ride-the-yield-curve** strategies.

---

### Summary of Key Relationships

| Concept | Key Point |
|---------|-----------|
| YTM vs. Spot rates | YTM = weighted average of spot rates; closer to longest maturity spot when final payment dominates |
| YTM vs. Expected return | Equal only when curve is flat and coupons reinvested at YTM; upward-sloping curve → expected return > YTM |
| Forward price stability | Forward price unchanged iff future spot rates = today's forward rates |
| Deviation from forward | Any change in forward price = deviation of actual spot curve from forward-implied path |
| Roll-down return | When curve is stable, each bond earns successive forward rates as it rolls to shorter maturity |

---

### Exam Tips

- **YTM = weighted average of spot rates** — not equal to any single spot rate for coupon bonds
- **Upward-sloping curve**: $z_1 < YTM < z_T$; YTM pulled toward highest-weight cash flow's spot rate
- **YTM is NOT expected return** unless curve is flat and no reinvestment risk
- **Expected return > YTM** when spot curve is upward-sloping (reinvestment earns higher forward rates)
- **Forward price unchanged** when forward rates are realized exactly — any deviation = price change signal
- **"Roll-down"**: stable curve means bond earns successive one-period forward rates — basis for yield curve riding strategies
- **Flat yield curve**: the special case where everything converges — YTM = spot rate = forward rate = expected return