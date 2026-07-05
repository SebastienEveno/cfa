---
layout: page
title: Arbitrage-Free Valuation for an Option-Free Bond
permalink: /study/06-fixed-income/02-arbitrage-free-valuation/02-arbitrage-free-valuation/
prev: /cfa/study/06-fixed-income/02-arbitrage-free-valuation/01-introduction/
next: /cfa/study/06-fixed-income/02-arbitrage-free-valuation/03-binomial-interest-rate/
---
## Summary: Arbitrage-Free Valuation for an Option-Free Bond (CFA Level II — Fixed Income)

---

### Core Method for Option-Free Bonds

**Arbitrage-free value** = present value of cash flows, **each discounted at its maturity-matched spot rate**.

**Benchmark securities** = liquid, "risk-free" reference yields:

| Currency/Country | Benchmark |
|------------------|-----------|
| US | On-the-run Treasuries |
| UK | Gilts |
| Eurozone | German Bunds |
| Illiquid sovereign markets | **Swap curve** (alternative) |

> Model is calibrated to **exactly reproduce** benchmark bond prices (assumed correctly priced by the market).

---

### Spot Rate Bootstrapping Formula

$$\boxed{100 = \sum_{t=1}^{N-1}\frac{PMT}{(1+z_t)^t} + \frac{PMT+100}{(1+z_N)^N}}$$

(Using par rate as $PMT$, solve iteratively for each $z_t$ — same bootstrapping process from Module 1.)

---

### Worked Example — Mispriced Bond (Example 2)

**Given**: Par rates — 1yr=2%, 2yr=3%, 3yr=4%; a 3-year, 5% coupon bond trades at **102.7751** (implied YTM = 4%)

**Step 1 — Bootstrap spot rates:**

| Maturity | Spot Rate |
|----------|-----------|
| $z_1$ | 2.000% |
| $z_2$ | 3.015% |
| $z_3$ | 4.055% |

**Step 2 — Correct arbitrage-free price:**
$$P_0 = \frac{5}{1.02} + \frac{5}{(1.03015)^2} + \frac{105}{(1.04055)^3} = \mathbf{102.8102}$$

**Conclusion**: Market price (102.7751) ≠ correct arbitrage-free price (102.8102) → bond is **mispriced by 0.0351 per 100 par**.

> **Why discounting at YTM is wrong**: With an upward-sloping curve, using a single YTM **overstates** the discount rate applied to early cash flows (since later spot rates > YTM > early spot rates) → understates true value.

---

### Why Option-Free vs. Option-Embedded Bonds Need Different Approaches

| Bond Type | Cash Flow Behavior | Valuation Method |
|-----------|---------------------|-------------------|
| **Option-free** | Cash flows **fixed**, independent of rate changes | Discount at spot rates — simple, direct |
| **Embedded options** (callable, putable) | Cash flows **depend on future rate paths** (exercise probability) | Need to model **interest rate paths** — binomial tree |

> Because option exercise depends on future rates, we need an **interest rate tree** that captures how rates might evolve — this becomes essential for bonds with embedded options (covered in later readings).

---

### Interest Rate Models — Key Concepts

**Interest rate model**: Specifies the **stochastic process** governing how rates evolve over time.

| Model Type | What It Models |
|-----------|----------------|
| **One-factor model** | Only the **short-term rate** evolves |
| **Two-factor model** | Short rate **and** long rate evolve |

**Binomial lattice model**: The short rate can take **one of two possible values** each period, consistent with:
1. The chosen interest rate model
2. Assumed interest rate volatility
3. Current benchmark yield curve

---

### Building the Benchmark Curves (Numerical Example)

**Par curve (given):**

| Maturity | Par Rate |
|----------|----------|
| 1 | 1.00% |
| 2 | 1.20% |
| 3 | 1.25% |
| 4 | 1.40% |
| 5 | 1.80% |

**Bootstrapped spot curve:**

| Maturity | Spot Rate |
|----------|-----------|
| 1 | 1.0000% |
| 2 | 1.2012% |
| 3 | 1.2515% |
| 4 | 1.4045% |
| 5 | 1.8194% |

**Implied forward curve:**

| Forward | Rate |
|---------|------|
| Current 1-yr | 1.0000% |
| 1-yr, 1-yr forward | 1.4028% |
| 1-yr, 2-yr forward | 1.3521% |
| 1-yr, 3-yr forward | 1.8647% |
| 1-yr, 4-yr forward | 3.4965% |

> **All three curves (par, spot, forward) contain the same information** — they're identical **only** when the yield curve is flat. Knowing any one allows derivation of the other two.

---

### The Binomial Interest Rate Tree

**Lognormal random walk model**: Used to generate the tree — ensures:
1. **Non-negativity** of interest rates
2. **Higher volatility at higher rate levels**

**Key relationship between adjacent nodes (Time 1):**
$$\boxed{i_{1,H} = i_{1,L} \times e^{2\sigma}}$$

Where $\sigma$ = assumed annual volatility of the one-year rate.

**Interpretation**: The implied one-year forward rate is the "center" (geometric mean) of the two possible outcomes; $i_L$ is one standard deviation below, $i_H$ is one standard deviation above.

---

### Multi-Period Tree Structure

**Time 2 — three possible rates:**

$$i_{2,HH} = i_{2,LL} \times e^{4\sigma} \qquad i_{2,HL} = i_{2,LL} \times e^{2\sigma}$$

**Recombining tree**: $i_{2,HL}$ can be reached via "up-then-down" OR "down-then-up" — **two paths converge to the same middle rate**.

> **Why recombining matters**: Computational efficiency — number of nodes grows **linearly**, not exponentially, with each time step.

**Time 3 — four possible rates:**
$$i_{3,HHH} = i_{3,LLL} \times e^{6\sigma}$$
$$i_{3,HHL} = i_{3,LLL} \times e^{4\sigma}$$
$$i_{3,LLH} = i_{3,LLL} \times e^{2\sigma}$$

**General rule**: All forward rates in the tree are **multiples of the lowest rate** for that time period, with each "step up" multiplying by $e^{2\sigma}$.

---

### Numerical Example — Tree Construction

**Time 1**: Given $i_{1,L} = 1.194\%$, $\sigma = 15\%$:
$$i_{1,H} = 1.194\% \times e^{2 \times 0.15} = \mathbf{1.612\%}$$

**Time 2**: Given $i_{2,LL} = 0.980\%$, $\sigma = 15\%$:
$$i_{2,HL} = 0.980\% \times e^{0.30} = \mathbf{1.323\%}$$
$$i_{2,HH} = 0.980\% \times e^{0.60} = \mathbf{1.786\%}$$

---

### Key Notation Summary

| Element | Meaning |
|---------|---------|
| **Root node** | Current one-year rate at Time 0 |
| **Time step** | Interval between nodes (matches cash flow frequency) |
| **$\sigma$** | Assumed annual interest rate volatility |
| **Adjacent rates** | Always 2σ apart (multiplicatively, via $e^{2\sigma}$) |

---

### Exam Tips

- **Discounting at YTM (flat-rate assumption) systematically misprices bonds** when the yield curve is not flat — overstates discount for early cash flows when curve is upward-sloping
- **Arbitrage-free price = sum of PV(cash flow at its own spot rate)** — always discount each cash flow by the spot rate matching its timing
- **Three curves (par, spot, forward) are mathematically equivalent** — interchangeable via bootstrapping/no-arbitrage relationships
- **Option-free bonds**: spot-rate discounting alone is sufficient — no tree needed
- **Option-embedded bonds**: require an interest rate tree because cash flows are **path-dependent**
- **Lognormal model properties**: ensures non-negative rates + higher absolute volatility at higher rate levels
- **$i_H = i_L \times e^{2\sigma}$**: the fundamental multiplicative relationship between adjacent nodes
- **Recombining tree**: paths "up-then-down" and "down-then-up" converge to the same node — critical for computational tractability
- **Tree is calibrated to reproduce exactly the benchmark bond prices** — this calibration process is covered in detail in the next section