---
layout: page
title: "Constructing Optimal Portfolios"
permalink: /study/09-portfolio-management/02-analysis-of-active-management/04-constructing-optimal-portfolios/
prev: /cfa/study/09-portfolio-management/02-analysis-of-active-management/03-sharpe-ratio-and-information-ratio/
next: /cfa/study/09-portfolio-management/02-analysis-of-active-management/05-fundamental-law-of-active-management/
---
## Summary: Constructing Optimal Portfolios (CFA Level II — Portfolio Management)

---

### The Fundamental Law of Active Management

**Key relationship** — connects Sharpe ratio, benchmark performance, and information ratio:

$$\boxed{SR_P^2 = SR_B^2 + IR^2}$$

**Implication**: The active portfolio with the **highest information ratio** will also have the **highest Sharpe ratio**.

**Critical consequence**: 
$$\boxed{\text{Information ratio (IR) is the single best criterion for evaluating manager skill}}$$

**Important caveat**: Equation is **not useful for negative IR comparisons** — squaring loses the sign.

---

### Two-Fund Separation (Passive) vs. Active Management Analog

| Passive Theory | Active Theory |
|-----------------|-----------------|
| Combine risk-free asset + **highest Sharpe ratio** risky portfolio | Combine benchmark + **highest information ratio** active portfolio |
| Maximizes overall Sharpe ratio | Maximizes overall Sharpe ratio via IR |

---

### Optimal Level of Active Risk

$$\boxed{\sigma_A^* = \left(\frac{IR}{SR_B}\right) \times \sigma_B}$$

**Derivation logic** — from the mean-variance optimality condition:
$$\frac{E(R_A)}{\sigma_A^2} = \frac{E(R_B - R_F)}{\sigma_B^2}$$

**Note**: If the active portfolio's beta ≠ 1, multiply the right-hand side by that beta.

---

### Worked Numerical Example — Optimal Aggressiveness

**Given**: IR = 0.30, current active risk = 8.0%; Benchmark: excess return = 6.4%, σ = 16.0%, SR = 0.40

**Step 1 — Optimal active risk:**
$$\sigma_A^* = \frac{0.30}{0.40} \times 16.0\% = \mathbf{12.0\%}$$

**Step 2 — Resulting Sharpe ratio:**
$$SR_P = \sqrt{0.40^2 + 0.30^2} = \sqrt{0.16+0.09} = \sqrt{0.25} = \mathbf{0.50}$$

**Step 3 — Verification:**
$$\text{Expected active return} = 0.30 \times 12.0\% = 3.6\%$$
$$\text{Total excess return} = 6.4\% + 3.6\% = 10.0\%$$
$$\text{Total risk} = \sqrt{16.0^2 + 12.0^2} = \sqrt{256+144} = \sqrt{400} = 20.0\%$$
$$SR_P = \frac{10.0\%}{20.0\%} = 0.50 ✓$$

**How to achieve this**: Original active risk (8.0%) < optimal (12.0%) → need to be **more aggressive**:
$$\text{Scaling factor} = \frac{12.0}{8.0} = 1.5\times$$
→ Invest 1.5× in the actively managed fund, **short the benchmark by 0.5×** to fund the increase.

---

### Total Portfolio Risk Decomposition

$$\boxed{\sigma_P^2 = \sigma_B^2 + \sigma_A^2}$$

(Assumes active and benchmark risk components are independent/orthogonal.)

---

### Visual Framework (Exhibits 4 and 5)

**Exhibit 4 — Absolute Risk/Return Space:**
- Benchmark portfolio: Excess return = 5.0%, σ = 10.8% → **SR = 0.46**
- Optimal portfolio (mean-variance efficient): Excess return = 8.7%, σ = 14.2% → **SR = 0.61**
- Diversification improves benchmark's SR above individual assets, but benchmark is NOT the maximum-SR portfolio

**Exhibit 5 — Active Risk/Return Space:**
- Benchmark plots at **origin** (zero active return, zero active risk, by definition)
- Optimal portfolio: Active return = 3.8%, Active risk = 9.4% → **IR = 0.40**
- Optimal portfolio's IR = square root of sum of squared individual asset IRs (parallels Equation 7 structure)
- Some asset weights may be **negative** (short positions) for negative-IR assets

**Connecting the two exhibits:**
$$\sigma_A^* = \frac{0.40}{0.46} \times 10.8\% = 9.4\% \qquad SR_{optimal} = \sqrt{0.46^2+0.40^2} = 0.61 ✓$$

---

### Practical Reality — Long-Only Constraints

> In practice, **long-only constraints** limit the ability to short negative-IR assets → substantially **lower achievable information ratios** than theoretical unconstrained optimal portfolios.

**As IR → 0**: Optimal active risk (Equation 8) → 0 → **optimal portfolio becomes the passive benchmark**.

---

### Example 3 — Fund Selection Using Information Ratio

**Setup:**

| | S&P 500 | Fund I (Fidelity Magellan) | Fund II (Growth Fund of America) |
|--|---------|------------------------------|-----------------------------------|
| Return | 9.9% | 8.5% | 11.1% |
| σ | 14.4% | 16.5% | 15.7% |
| Sharpe ratio | 0.53 | 0.38 | 0.56 |
| Active return | — | −1.4% | 1.2% |
| Active risk | — | 5.1% | 6.2% |
| **IR** | — | **−0.27** | **0.20** |

**Q1 — Which fund is better combined with benchmark?**
→ **Fund II** — has positive IR (0.20) vs. Fund I's negative IR (−0.27)

**Q2 — Maximum possible Sharpe ratio using Fund II:**
$$SR_{combined} = \sqrt{0.53^2 + 0.20^2} = \sqrt{0.2809+0.04} = \sqrt{0.3209} = \mathbf{0.57}$$

> Improvement from 0.53 (passive S&P 500) to 0.57 — meaningful risk-adjusted improvement.

**Q3 — Increasing Fund I's active risk from 5.1% to 5.4% (qualitative):**
→ Investor needs to:
1. Be **more aggressive** in managing the portfolio (larger active weight deviations), OR
2. **Short the benchmark** and use proceeds to invest more in Fund I, OR
3. Simply **invest less** in the benchmark/another fund

**Q4 — Fund II's optimal benchmark weight to maximize Sharpe ratio:**

**Step 1 — Optimal active risk:**
$$\sigma_A^* = \frac{0.20}{0.53} \times 14.4\% = \mathbf{5.4\%}$$

**Step 2 — Benchmark weight needed** (to reduce Fund II's 6.2% active risk down to 5.4%):
$$\text{Benchmark weight} = 1 - \frac{5.4\%}{6.2\%} = \mathbf{13\%}$$

**Verification:**
- Expected active return at 5.4% risk: $0.20 \times 5.4\% = 1.1\%$
- Total excess return: $7.6\% + 1.1\% = 8.7\%$
- Total risk: $\sqrt{14.4^2+5.4^2} = \sqrt{207.36+29.16} = \sqrt{236.52} = 15.4\%$
- Sharpe ratio: $8.7\%/15.4\% = 0.57$ ✓ (matches Q2 answer)

---

### Key Formula Reference Card

| Formula | Expression |
|---------|-----------|
| **Fundamental law** | $SR_P^2 = SR_B^2 + IR^2$ |
| **Optimal active risk** | $\sigma_A^* = (IR/SR_B) \times \sigma_B$ |
| **Total portfolio risk** | $\sigma_P^2 = \sigma_B^2 + \sigma_A^2$ |
| **Benchmark weight to reduce active risk** | $1 - (\sigma_A^{target}/\sigma_A^{current})$ |

---

### Exam Tips

- **$SR_P^2 = SR_B^2 + IR^2$**: memorize this fundamental relationship
- **Negative IR funds should NOT be combined with the benchmark** — they reduce the combined Sharpe ratio below the pure benchmark
- **Optimal active risk formula**: $\sigma_A^* = (IR/SR_B) \times \sigma_B$ — scales active risk to maximize overall Sharpe ratio
- **To increase active risk**: be more aggressive OR short the benchmark and invest more in the active fund
- **To decrease active risk**: blend with (long) the benchmark — reduces active risk proportionally
- **As IR → 0**: optimal active risk → 0 → investor should hold the passive benchmark
- **Long-only constraints reduce achievable IR** in practice vs. theoretical unconstrained optimization
- **Information ratio is THE single best criterion** for both selecting managers (ex ante) and evaluating past performance (ex post) — this is the core takeaway of the Fundamental Law of Active Management
- **Total risk = √(Benchmark risk² + Active risk²)** — assumes independence between benchmark and active components