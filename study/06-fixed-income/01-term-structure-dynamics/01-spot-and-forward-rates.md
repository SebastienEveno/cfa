## Summary: Spot Rates, Forward Rates, and the Forward Rate Model (CFA Level II — Fixed Income)

---

### Core Definitions

**Discount factor** $DF_N$: price today of a risk-free single-unit payment received in $N$ periods.

**Spot rate** $z_N$: yield-to-maturity of a zero-coupon bond maturing in $N$ periods.

$$\boxed{DF_N = \frac{1}{(1+z_N)^N}}$$

> **Spot curve** = discount function = zero-coupon yield curve. Both representations contain the **same information**.

**Why spot rates matter**: No reinvestment risk — the stated yield **equals the realized return** if held to maturity. The zero-coupon yield is the **purest** representation of the T-year interest rate.

---

### Forward Rates and the Forward Pricing Model

**Forward rate** $f_{A,B-A}$: rate agreed **today** for a loan starting at time $A$, maturing at time $B$ (tenor = $B-A$).

**Forward pricing model** (no-arbitrage):
$$\boxed{DF_B = DF_A \times F_{A,B-A}}$$

**Intuition**: Two ways to get a payoff at time $B$ must cost the same today:
1. Buy a $B$-period zero directly (cost = $DF_B$)
2. Buy an $A$-period zero, then enter a forward contract to convert it into a $B$-period payoff (cost = $DF_A \times F_{A,B-A}$)

**Worked example (Example 1)**: $z_1=7\%$, $z_3=9\%$
- $DF_1 = 1/1.07 = 0.9346$
- $DF_3 = 1/1.09^3 = 0.7722$
- $F_{1,2} = DF_3/DF_1 = 0.7722/0.9346 = \mathbf{0.8262}$

---

### The Forward Rate Model (Rate Form)

$$\boxed{(1+z_B)^B = (1+z_A)^A \times (1+f_{A,B-A})^{B-A}}$$

**Two interpretations of a forward rate** (e.g., $f_{7,1} = 3\%$):
1. **Breakeven reinvestment rate** — the rate that makes investors indifferent between an 8-year zero vs. a 7-year zero + 1-year reinvestment
2. **Locked-in rate** — the 1-year rate that can be guaranteed today by extending maturity from 7 to 8 years

---

### Worked Example — Forward Rates from Spot Rates (Example 2)

Given: $z_1=9\%$, $z_2=10\%$, $z_3=11\%$ (upward-sloping)

| Forward Rate | Calculation | Result |
|--------------|-------------|--------|
| $f_{1,1}$ | $(1.10)^2/(1.09)^1 - 1$ | **11.01%** |
| $f_{2,1}$ | $(1.11)^3/(1.10)^2 - 1$ | **13.03%** |
| $f_{1,2}$ | $[(1.11)^3/(1.09)^1]^{1/2} - 1$ | **12.01%** |

> **Upward-sloping spot curve → upward-sloping forward curve** (each successive 1-year forward rate is higher: 9% → 11.01% → 13.03%)

---

### Spot Rate as Geometric Mean of Forward Rates

$$\boxed{(1+z_T)^T = (1+z_1)(1+f_{1,1})(1+f_{2,1})\cdots(1+f_{T-1,1})}$$

**Verification (Example 3)**:
$$z_2 = [(1.09)(1.1101)]^{1/2} - 1 = 10\% ✓$$
$$z_3 = [(1.09)(1.1101)(1.1303)]^{1/3} - 1 = 11\% ✓$$

> Long-term spot rates are **geometric averages** of the short rate and a series of implied forward rates.

---

### The Key Shape Relationships (Equation 7)

$$\boxed{(1+f_{A,B-A})^{B-A} = \frac{(1+z_B)^B}{(1+z_A)^A}}$$

| Yield Curve Shape | Relationship | Forward Rate Behavior |
|-------------------|--------------|------------------------|
| **Upward-sloping** ($z_B > z_A$) | $f_{A,B-A} > z_B$ | Forward rates **rise** with later start dates; forward curve **above** spot curve |
| **Downward-sloping** ($z_B < z_A$) | $f_{A,B-A} < z_B$ | Forward rates **fall** with later start dates; forward curve **below** spot curve |
| **Flat** ($z_B = z_A$) | $f_{A,B-A} = z_B = z_A$ | All forward rates equal the spot rate |

**Numerical check**: $z_1=2\%, z_5=3\%$ → $f_{1,4} = 3.25\% > z_5 = 3\%$ ✓ (upward-sloping case)

**Mathematical intuition**: When an average is rising, the marginal data point must exceed the average. The spot rate is an **average** over the whole period; the forward rate represents the **marginal** rate for the incremental period.

---

### Real-World Examples (Exhibits 2 & 3)

| Date | Spot Curve Shape | Forward Curve Position |
|------|-----------------|------------------------|
| **31 July 2013** | Upward-sloping (0.11% → 3.66%) | Forward curves **above** spot, increasingly steep for later dates |
| **31 December 2006** | Downward-sloping (4.90% → 4.31%) | Forward curves **below** spot, decreasingly steep for later dates |

**Important constraint**: Forward rates **cannot extend beyond** the longest maturity on today's curve. If today's curve goes to 30 years, a 3-year-forward curve only extends to 27 years; 4 years hence, the longest forward rate would be $f_{4,26}$.

---

### Forward Rates as Market Expectations

> Implied forward rates are the **best available, most accessible proxy** for market consensus expectations of future spot rates (though whether they're truly *unbiased* estimators remains debated).

**Active management implication**: If actual realized short-term rates **exceed** today's implied forward rates, an active strategy using short-term bonds will **outperform** a maturity-matched buy-and-hold strategy (assuming a stable yield curve).

---

### Par Curve and Bootstrapping

**Par curve**: YTMs on coupon-paying government bonds priced at **par**; constructed from liquid "on-the-run" issues.

**Bootstrapping**: Iterative process to derive the **zero-coupon (spot) curve** from the par curve, solving from shortest to longest maturity.

**Key insight**: A coupon bond = portfolio of zero-coupon bonds. The 1-year zero rate = 1-year par rate (single cash flow); longer maturities require solving sequentially.

**Worked example**:

| Par Rate | Bootstrapped Zero Rate |
|----------|------------------------|
| 1-yr: 5.00% | $z_1 = 5\%$ |
| 2-yr: 5.97% | $z_2 = 6\%$ |
| 3-yr: 6.91% | $z_3 = 7\%$ |
| 4-yr: 7.81% | $z_4 = 8\%$ |

**Bootstrapping equation for $z_2$:**
$$1 = \frac{0.0597}{1.05} + \frac{1.0597}{(1+z_2)^2} \implies z_2 = 6\%$$

> Each step uses the **previously solved** zero rates as known inputs to solve for the next.

---

### Yield Curve Shapes — Economic Interpretation

| Shape | Interpretation | Frequency |
|-------|----------------|-----------|
| **Upward-sloping** | Expectation of rising/stable inflation; risk premium for longer maturities; "flattens" at long end | **Most common** in developed markets |
| **Downward-sloping (inverted)** | Expectation of declining inflation; often precedes recessions | Less common |
| **Flat** | Transition phase between upward/downward sloping | Brief, transitional |
| **Humped** | Intermediate rates higher than both short and long rates | Rare |

---

### Exam Tips

- **Forward pricing model**: $DF_B = DF_A \times F_{A,B-A}$ — fundamental no-arbitrage relationship
- **Spot rate = geometric mean** of short rate + forward rates — critical for understanding curve shape
- **Upward sloping spot curve → forward curve lies above spot curve**, and gets steeper for later start dates
- **Downward sloping spot curve → forward curve lies below spot curve**
- **Forward rates cannot extend past today's longest spot maturity** — easy exam trap
- **Bootstrapping**: solve zero rates **sequentially** from shortest to longest, using previously-solved rates as inputs
- **1-year zero = 1-year par rate** (annual coupon bonds, single cash flow at year 1)
- **Forward rate interpretation**: breakeven reinvestment rate OR a rate that can be "locked in" by extending maturity
- **Inverted curve**: often a leading indicator before recessions — connects fixed income to macro views