---
layout: page
title: "The Sharpe Ratio and The Information Ratio"
permalink: /study/09-portfolio-management/02-analysis-of-active-management/03-sharpe-ratio-and-information-ratio/
prev: /cfa/study/09-portfolio-management/02-analysis-of-active-management/02-active-management-and-value-added/
next: /cfa/study/09-portfolio-management/02-analysis-of-active-management/04-constructing-optimal-portfolios/
---
## Summary: The Sharpe Ratio and The Information Ratio (CFA Level II — Portfolio Management)

---

### Two Types of Risk-Return Measures

| Measure | Compares | Type |
|---------|----------|------|
| **Sharpe ratio** | Return vs. risk-free rate | **Absolute** measure |
| **Information ratio** | Return vs. benchmark | **Relative** measure |

---

## The Sharpe Ratio

$$\boxed{SR_P = \frac{R_P - R_F}{\sigma_P}}$$

**Ex ante version**: $[E(R_P) - R_F]/\text{forecast } \sigma$
**Ex post version**: $[\bar{R}_P - \bar{R}_F]/\text{sample } \sigma$

**Annualization convention** (from monthly data):
$$\text{Annualized return} = \text{Monthly return} \times 12$$
$$\text{Annualized } \sigma = \text{Monthly } \sigma \times \sqrt{12}$$

> **Caveat**: This simple scaling ignores compounding effects; technically correct only for **independent, continuously compounded (logarithmic)** returns. Consistency of method matters more than perfection when comparing portfolios.

---

### Historical Sharpe Ratios (1994–2018, $R_F = 2.3\%$)

**Benchmarks (Exhibit 1):**

| Index | Return | σ | Sharpe |
|-------|--------|---|--------|
| MSCI World | 7.9% | 14.5% | 0.38 |
| S&P 500 | 9.9% | 14.4% | **0.53** |
| Russell 2000 | 10.3% | 19.1% | 0.41 |
| MSCI EAFE | 6.3% | 15.8% | 0.25 |
| Bloomberg US Agg | 5.0% | 3.5% | **0.77** |

> **Long-term equity Sharpe ratios typically fall in the 0.20–0.60 range**. The bond index's unusually high 0.77 reflects the **secular decline in interest rates** over 1994–2018 boosting fixed-income returns.

**Active Funds (Exhibit 2):**

| Fund | Return | σ | Sharpe |
|------|--------|---|--------|
| Fidelity Magellan | 8.5% | 16.5% | 0.38 |
| Growth Fund of America | 11.1% | 15.7% | 0.56 |
| Templeton World | 7.9% | 15.2% | 0.37 |
| T. Rowe Price Small Cap | 11.6% | 16.7% | 0.56 |
| JPMorgan Bond | 5.2% | 3.6% | 0.80 |

> **Important**: Only compare Sharpe ratios calculated over the **same measurement period** — never compare across different time windows.

---

### Key Property: Sharpe Ratio Invariance to Cash/Leverage

**Combined portfolio** (weight $w_P$ risky asset + $(1-w_P)$ risk-free cash):
$$R_C = w_P R_P + (1-w_P)R_F \qquad \sigma_C = w_P \sigma_P$$

$$SR_C = \frac{w_P R_P + (1-w_P)R_F - R_F}{w_P \sigma_P} = \frac{w_P(R_P - R_F)}{w_P \sigma_P} = SR_P$$

$$\boxed{\text{Sharpe ratio is UNCHANGED by adding cash or leverage}}$$

> Applies even with **leverage** ($w_P > 1$, borrowing cash to invest more in risky asset).

---

### Two-Fund Separation

**Principle**: Regardless of preferences, investors should combine:
1. **The risk-free asset**
2. **The risky portfolio with the HIGHEST Sharpe ratio**

**Adjusting risk exposure**:
- **Too much volatility** → add cash, reduce risky weight
- **Too little volatility** → apply leverage, increase risky weight

**Numerical illustration**: Growth Fund of America (11.1% return, 15.7% σ) restricted to 10% volatility:
- Weight in fund: $10\%/15.7\% = 64\%$
- Weight in cash: 36%
- Combined return: $0.64(11.1\%) + 0.36(2.3\%) = 7.9\%$
- Combined σ: $0.64(15.7\%) = 10.0\%$
- **Sharpe ratio unchanged**: $(7.9\%-2.3\%)/10.0\% = 0.56$ ✓ (same as original fund)

---

### Example 2 — Large-Cap vs. Small-Cap Portfolio Blending

**Setup**: Large-cap (8.2% return, 14.6% σ, SR=0.40); Small-cap (10.3% return, 19.2% σ, SR=0.42)

**Q1 — Small-cap + cash to match large-cap risk (14.6%):**
$$\text{Small-cap weight} = \frac{14.6\%}{19.2\%} = 76\% \qquad \text{Cash weight} = 24\%$$

**Q2 — Sharpe ratio of blend:**
$$\boxed{\text{Unaffected by cash} = 0.42} \text{ (same as pure small-cap)}$$

**Q3 — Return comparison:**
$$\text{Blend return} = 0.76(10.3\%) + 0.24(2.3\%) = \mathbf{8.4\%}$$

> **8.4% vs. 8.2% large-cap** — small-cap+cash beats large-cap by **20 bps at the SAME risk level**, confirming the small-cap portfolio's higher Sharpe ratio (0.42 vs. 0.40) translates to superior risk-adjusted performance.

---

## The Information Ratio

$$\boxed{IR = \frac{R_A}{\sigma(R_A)} = \frac{R_P - R_B}{\sigma(R_P - R_B)}}$$

**Also called**: Active return / Active risk (or "tracking error")

**Ex ante**: $E(R_A)/\text{Expected active risk}$
**Ex post**: Realized average active return / Sample standard deviation of active return

**Key assumption**: Implicitly assumes **beta = 1.0** relative to benchmark (Grinold and Kahn's more precise "residual risk" relaxes this assumption).

---

### Sharpe Ratio vs. Information Ratio — Two Illustrative Cases

#### Case 1: "Closet Index Fund"
- Advertises as active but essentially mimics benchmark
- **Sharpe ratio**: Close to benchmark's Sharpe ratio
- **Active risk**: Small but positive (by definition)
- **Information ratio**: Near zero or **slightly negative** (fees erode any marginal value added)
- Detected via **"active share"**: Half the sum of absolute active weights (Cremers & Petajisto, 2009)

#### Case 2: Market-Neutral Long-Short Fund
- Beta = 0 relative to market
- If benchmark = risk-free rate: **Sharpe ratio = Information ratio** (excess return = active return; total risk = active risk)

---

### Historical Information Ratios (Exhibit 3, 2014–2018)

| Fund | Active Return | Active Risk | IR | Benchmark |
|------|---------------|-------------|-----|-----------|
| Fidelity Magellan | −1.4% | 5.1% | **−0.27** | S&P 500 |
| Growth Fund of America | 1.2% | 6.2% | **0.20** | S&P 500 |
| Templeton World | 0.0% | 5.0% | **0.00** | MSCI World |
| T. Rowe Price Small Cap | 1.4% | 4.7% | **0.29** | Russell 2000 |
| JPMorgan Bond | 0.2% | 1.0% | **0.19** | Bloomberg US Agg |

**Zero-sum property**: Under the zero-sum nature of active management, **average realized IR across funds sharing the same benchmark should be ≈ 0**. Historical range: roughly −0.30 to +0.30 (wider over shorter periods).

> **Important nuance**: Ranking by **active risk** (relative measure) ≠ ranking by **total risk** (absolute measure). Example: Fidelity Magellan has **slightly lower active risk** than Growth Fund of America but **slightly higher total risk** (Exhibit 2).

---

### Key Property: Information Ratio IS Affected by Cash/Leverage

**Unlike Sharpe ratio**, adding cash to a risky portfolio **shrinks** the information ratio (since it reduces active return and active risk proportionally to the risky-asset weight, but cash itself has zero active risk vs. benchmark differently than it interacts with the SR formula).

**BUT**: Information ratio IS **unaffected by scaling active weights** by a constant $c$:

$$\text{If } \Delta w_i \rightarrow c \cdot \Delta w_i \text{ for all } i$$
$$R_C = c \times R_A \qquad \sigma_C = c \times \sigma_A$$
$$IR_C = \frac{cR_A}{c\sigma_A} = \frac{R_A}{\sigma_A} = IR_{\text{original}}$$

$$\boxed{\text{Doubling all active weights doubles active return AND active risk} \implies IR \text{ unchanged}}$$

---

### Adjusting Active Risk in Practice

**Investor cannot directly change a fund's internal active weights**, but can achieve the same effect by:

**Blending with the benchmark** (reduces active risk proportionally):
$$\text{If fund has active risk} = 5.0\% \text{, blend } 80\% \text{ fund} + 20\% \text{ benchmark}:$$
$$\text{New active risk} = 0.80 \times 5.0\% = 4.0\%$$

**Shorting the benchmark and levering into the fund** (increases active risk):
- Same principle, opposite direction
- In practice: institutional investors often achieve this by simply **reducing benchmark holdings** rather than explicit short sales

---

### Key Formula Reference Card

| Concept | Formula |
|---------|---------|
| **Sharpe ratio** | $(R_P - R_F)/\sigma_P$ |
| **Information ratio** | $(R_P - R_B)/\sigma(R_P - R_B)$ |
| **Sharpe ratio (combined w/ cash)** | Unchanged from underlying risky portfolio |
| **Information ratio (scaled active weights)** | Unchanged by constant multiplier $c$ |
| **Active share** | $\frac{1}{2}\sum |\Delta w_i|$ |

---

### Exam Tips

- **Sharpe ratio unaffected by cash/leverage** — this is THE key distinguishing property vs. information ratio
- **Information ratio unaffected by SCALING active weights** (multiply all by constant $c$) — but IS affected by adding cash (unlike Sharpe)
- **Two-fund separation**: combine risk-free asset + highest-Sharpe-ratio risky portfolio, regardless of investor risk preference
- **Closet index fund**: low active risk, IR near zero or negative (fees), Sharpe close to benchmark
- **Market-neutral fund with risk-free benchmark**: Sharpe ratio = Information ratio
- **Zero-sum property applies to IR too**: average IR across funds with same benchmark should be ≈ 0
- **Active risk ranking ≠ total risk ranking**: relative and absolute risk measures can diverge
- **Only compare Sharpe/IR over the SAME time period** — never mix measurement windows
- **Blending fund with benchmark** reduces active risk proportionally (e.g., 80/20 mix → 80% of original active risk)