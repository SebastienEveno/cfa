## Summary: Calibrating the Binomial Interest Rate Tree to the Term Structure (CFA Level II — Fixed Income)

---

### Why Calibrate?

**Purpose**: Choose tree interest rates such that discounting benchmark bonds through the tree **reproduces their known market prices** (par value). This ties the model to actual market reality and ensures the tree is **arbitrage-free**.

**Key constraint at each step**: The two (or more) forward rates at a given time step must:
1. Follow the lognormal relationship ($i_H = i_L \times e^{2\sigma}$)
2. Reproduce the **par price (100)** of the relevant benchmark bond when used to discount its cash flows

---

### The Calibration Process — Step by Step

```
Step 1: Time 0 rate = current 1-year par rate (known directly)
Step 2: Time 1 rates = solve iteratively using the 2-year benchmark bond
Step 3: Time 2 rates = solve iteratively using the 3-year benchmark bond
         (using already-calibrated Time 1 rates)
Step 4: Continue iteratively for each subsequent year
```

**Method**: Trial-and-error (or Excel Solver) — adjust the lower rate $i_{t,L}$ until the bond price from backward induction equals **par (100)**.

---

### Worked Example — Calibrating Time 1 Rates (2-Year, 1.20% Bond)

**Target**: 2-year bond, 1.20% coupon, must price to **100.0000**

**First trial**: $i_{1,L} = 1.2500\%$ → $i_{1,H} = 1.2500\% \times e^{2 \times 0.15} = 1.6873\%$

| Node | Calculation | Value |
|------|-------------|-------|
| Upper | $101.20/1.016873$ | 99.5208 |
| Lower | $101.20/1.012500$ | 99.9506 |

**Time 0 value** = 99.9363 ≠ 100.0000 → **rates too high**, need to lower

**Final calibrated rates** (after iteration):
$$i_{1,L} = 1.1943\% \qquad i_{1,H} = 1.1943\% \times e^{0.30} = 1.6121\%$$

**Verification:**
| Node | Calculation | Value |
|------|-------------|-------|
| Upper | $101.20/1.016121$ | 99.5944 |
| Lower | $101.20/1.011943$ | 100.0056 |

**Time 0 value**: 
$$\frac{0.5(99.5944+1.20)+0.5(100.0056+1.20)}{1.01} = \mathbf{100.0000} ✅$$

> **Note**: Average of calibrated forward rates (1.4032%) is **slightly above** the implied forward rate (1.4028%) from the spot curve — a consequence of the **lognormal assumption** (convexity effect).

---

### Worked Example — Calibrating Time 2 Rates (3-Year, 1.25% Bond)

**Known inputs**: Time 1 rates already calibrated (1.1943% / 1.6121%); target = 3-year, 1.25% bond priced at par

**Trial starting point**: Middle rate $i_{2,HL}$ = implied forward rate (1.3521%)
- Upper trial: $1.3521\% \times e^{0.30} = $ higher value
- Lower trial: $1.3521\%/e^{0.30}$ = lower value

**Final calibrated rates** (after iteration):

| Node | Rate |
|------|------|
| $i_{2,HH}$ | **1.7863%** |
| $i_{2,HL}$ | **1.3233%** |
| $i_{2,LL}$ | **0.9803%** |

---

### Effect of Volatility on Tree Spread

| Volatility ($\sigma$) | Effect on Tree |
|------------------------|----------------|
| **Higher** (e.g., 20%) | Rates spread **farther** from forward curve |
| **Lower** (e.g., 0.01%) | Rates **collapse** toward the implied forward curve |
| **σ = 0** | Tree = exactly the **implied forward curve** (no randomness) |

> This illustrates that the binomial tree is a **volatility-driven distribution** around the deterministic forward curve — as volatility → 0, the model degenerates to certainty equivalence.

---

### Second Worked Example (Example 4) — Full Three-Year Calibration

**Given**: Par rates 2%/3%/4% (1yr/2yr/3yr); spot rates 2%/3.015%/4.055%; forward rates 2%/4.040%/6.166%; $\sigma = 15\%$

#### Time 0
$Y_0 = S_0 = F_0 = \mathbf{2.000\%}$ (all three curves identical for the first period)

#### Time 1 — Calibrate using 2-yr, 3% bond

**First trial**: $i_{1,L}=3.500\%$ → $i_{1,H}=3.500\% \times e^{0.30}=4.725\%$ → Time-0 value = 99.936 (too high, lower the rates)

**Final calibrated rates:**

| Node | Rate | Bond Value |
|------|------|-----------|
| Upper | **4.646%** | $103/1.04646 = 98.427$ |
| Lower | **3.442%** | $103/1.03442 = 99.573$ |

Time 0 value = **100.000** ✅

#### Time 2 — Calibrate using 3-yr, 4% bond (using calibrated Time 1 rates)

**First trial**: $i_{2,HL} = 6.166\%$ (implied forward) → Upper = $8.323\%$, Lower = $4.568\%$ → Time-0 value = 99.898 (too high, lower the rates)

**Final calibrated rates:**

| Node | Rate | Bond Value (Time 3 cash flow = 104) |
|------|------|--------------------------------------|
| $i_{2,HH}$ | **8.167%** | $104/1.08167 = 96.148$ |
| $i_{2,HL}$ | **6.050%** | $104/1.06050 = 98.067$ |
| $i_{2,LL}$ | **4.482%** | $104/1.04482 = 99.538$ |

---

### Confirming the Tree is Arbitrage-Free

**Once calibrated**, the tree:
- Correctly prices **all** the underlying benchmark par bonds (1yr, 2yr, 3yr, ... bonds at par)
- Correctly prices **zero-coupon bonds** consistent with the bootstrapped spot curve
- Is now ready to value **bonds with embedded options** — the calibrated structure provides the foundation for option-adjusted valuation

> Calibration is the critical link between **theoretical interest rate modeling** and **actual market-observed prices** — without it, the tree wouldn't reflect real economic conditions.

---

### Key Process Summary

```
For each maturity T (starting from T=1):
  1. Take the T-year benchmark par bond as the calibration target
  2. Use already-calibrated rates from prior time steps (Time 0 to T-1)
  3. Choose trial rate for the lowest (or middle, if odd number of nodes) 
     unknown rate at Time T-1, derive others via e^(2σ) relationships
  4. Run backward induction through the tree using trial rates
  5. Compare resulting Time-0 bond value to par (100)
  6. Adjust trial rate(s) iteratively (or use Solver) until value = par exactly
  7. Move to next maturity, repeat with newly calibrated rates as inputs
```

---

### Exam Tips

- **Calibration target**: tree must reproduce **par value (100)** for each benchmark coupon bond
- **Process is sequential**: Time 1 rates calibrated first (using 2-yr bond), then Time 2 (using 3-yr bond, with Time 1 rates fixed), etc.
- **Trial rate convention**: choose the **lower** rate (or middle rate for odd number of nodes) as the starting trial; derive others via $e^{2\sigma}$ multiples
- **Average of calibrated forward rates ≠ exactly the implied forward rate** — slightly higher due to lognormal convexity
- **σ = 0** → tree collapses to the **deterministic implied forward curve**
- **Higher σ** → wider spread of rates around the forward curve; **lower σ** → narrower spread
- **Calibrated tree** = correctly prices ALL benchmark bonds AND zero-coupon bonds — this is what "arbitrage-free" means in this context
- Know that this calibrated tree becomes the **foundation** for valuing callable/putable bonds in later readings — option value = (option-free bond value via tree) − (embedded option bond value via tree)