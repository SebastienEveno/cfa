## Summary: Gordon Growth Model — Other Issues (CFA Level II)

---

### 1. Present Value of Growth Opportunities (PVGO)

**Core decomposition:**
$$\boxed{V_0 = \frac{E_1}{r} + PVGO}$$

| Component | Meaning |
|-----------|---------|
| $E_1/r$ | **No-growth value** = value if company paid 100% of earnings as dividends forever (perpetuity) |
| $PVGO$ | **Value of growth** = PV of all future profitable reinvestment opportunities |

**Solving for PVGO:**
$$PVGO = P_0 - \frac{E_1}{r}$$

**When is growth value-enhancing?**

| Condition | Effect on Shareholder Wealth |
|-----------|---------------------------|
| ROE > r (market-value basis) | ↑ Positive NPV projects → growth adds value |
| ROE = r | Growth is neutral → NPV = 0 |
| ROE < r | Growth destroys value → better to pay dividends |

> **Key insight**: Earnings growth alone doesn't create value. Only reinvestment **above the cost of equity** creates value. A no-growth company should pay 100% of earnings as dividends.

**PVGO Examples:**

| Company | PVGO | PVGO/Price | Interpretation |
|---------|------|-----------|----------------|
| Alphabet (GOOGL) | $657 | **53%** | High-growth tech; most value from future opportunities |
| McDonald's (MCD) | $39 | **20%** | Moderate growth; most value from assets in place |
| Macy's (M) | **Negative** | n.m. | Market expects profitability challenges; no-growth value overstated |

**Determinants of PVGO:**
1. Value of investment **opportunities** (profitable growth projects)
2. Value of **real options** (timing, scaling, abandonment flexibility)

---

### 2. P/E Decomposition Using PVGO

$$\boxed{\frac{P_0}{E_1} = \frac{1}{r} + \frac{PVGO}{E_1}}$$

| Term | Meaning |
|------|---------|
| $1/r$ | **No-growth P/E** — P/E if company has no growth opportunities |
| $PVGO/E_1$ | **Growth component** of P/E — attributable to future profitable reinvestment |

**MSEX example:**
- Actual P/E = $43.20/$1.52 = **28.4×**
- No-growth P/E = 1/0.068 = **14.7×**
- Growth component = $20.78/$1.52 = **13.7×**

---

### 3. Justified P/E from Gordon Growth Model

**Leading (forward) P/E:**
$$\boxed{\frac{P_0}{E_1} = \frac{1-b}{r-g}}$$

**Trailing P/E:**
$$\boxed{\frac{P_0}{E_0} = \frac{(1-b)(1+g)}{r-g}}$$

Where $b$ = retention rate, $(1-b)$ = dividend payout ratio.

**Key relationships** (all else equal):
- ↑ Growth rate $g$ → ↑ Justified P/E
- ↑ Required return $r$ → ↓ Justified P/E
- ↑ Payout ratio $(1-b)$ → ↑ Justified P/E

**Worked example (L'Oréal):**
- $r = 2\% + 0.72 \times 5\% = 5.6\%$
- Payout = $3.85/7.08 = 54\%$, $g = 4.25\%$

$$\text{Leading P/E} = \frac{0.54}{0.056 - 0.0425} = \frac{0.54}{0.0135} = 40.0\times$$

$$\text{Trailing P/E} = \frac{0.54 \times 1.0425}{0.0135} = 41.7\times$$

- Actual trailing P/E = $242.70/$7.08 = **34.3×**
- Justified trailing P/E = **42.0×**
- Actual < Justified → L'Oréal **appears undervalued**

---

### 4. Estimating Required Return Using Gordon Growth Model

Rearranging the Gordon growth model:

$$\boxed{r = \frac{D_1}{P_0} + g}$$

**Two components of required return:**
- **Dividend yield**: $D_1/P_0$
- **Capital gains yield**: $g$

**Worked example (NextEra Energy):**
- $D_1 = \$5.275$, $P_0 = \$169.83$, $g = 5.5\%$

$$r = \frac{5.275}{169.83} + 0.055 = 3.11\% + 5.50\% = \mathbf{8.61\%}$$

> This is technically an **IRR** — assumes price correctly reflects intrinsic value.

---

### 5. Gordon Growth Model — Concluding Summary

**Where it works best:**
- Stable, mature dividend-paying companies
- Broad equity market indexes in developed markets (used to estimate ERP)
- **Terminal stage** of multistage DDMs (when high-growth company matures)

**Key limitations:**
- Extremely sensitive to small changes in $r$ and $g$
- Requires $r > g$ (mathematically and economically)
- Single-stage → unsuitable for companies with variable growth phases

---

### Master Formula Summary

$$\boxed{V_0 = \frac{D_1}{r-g}} \qquad \boxed{PVGO = P_0 - \frac{E_1}{r}}$$

$$\boxed{\frac{P_0}{E_1} = \frac{1-b}{r-g}} \qquad \boxed{\frac{P_0}{E_0} = \frac{(1-b)(1+g)}{r-g}}$$

$$\boxed{r = \frac{D_1}{P_0} + g}$$

---

### Exam Tips

- **PVGO > 0**: growth adds value (ROE > r) — typical for tech/growth stocks
- **PVGO < 0**: growth destroys value or market expects profitability decline — red flag
- **No-growth P/E = 1/r** — memorize this
- **Justified P/E > actual P/E** → stock undervalued; **justified P/E < actual P/E** → overvalued
- **Required return from Gordon model** = dividend yield + capital gains yield — both components testable
- **Use leading P/E** ($E_1$) with leading payout; **trailing P/E** ($E_0$) requires multiplying by $(1+g)$
- **PVGO/Price ratio**: high = growth-driven value (Alphabet); low = asset-in-place driven value (Macy's)