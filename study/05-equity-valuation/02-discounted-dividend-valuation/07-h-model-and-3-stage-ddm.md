## Summary: H-Model and Three-Stage Dividend Discount Models (CFA Level II)

---

### The H-Model

**Key difference from standard two-stage DDM**: Growth rate **declines linearly** (smoothly) from $g_S$ to $g_L$ over the high-growth period, rather than dropping abruptly.

$$\boxed{V_0 = \frac{D_0(1+g_L)}{r-g_L} + \frac{D_0 \cdot H \cdot (g_S - g_L)}{r-g_L}}$$

| Component | Meaning |
|-----------|---------|
| $\frac{D_0(1+g_L)}{r-g_L}$ | **Base value** — PV if company grew at $g_L$ forever |
| $\frac{D_0 \cdot H \cdot (g_S-g_L)}{r-g_L}$ | **Premium** — extra value from supernormal growth period |
| $H$ | **Half-life** of high-growth period (if period = 2H years, H = half that) |

**Intuition**: Average excess growth rate over supernormal period ≈ $(g_S - g_L)/2$. Over $2H$ periods, total excess dividends ≈ $D_0 \times H \times (g_S - g_L)$.

**Key relationships** (all else equal):
- Longer supernormal period (↑ H) → ↑ Value
- Larger excess growth (↑ $g_S - g_L$) → ↑ Value

**H-model is an approximation** — becomes less accurate for very long high-growth periods or very large growth rate differentials.

---

### H-Model Worked Example (Example 16)

- $D_0 = €1.77$, $g_S = 7\%$, $g_L = 4\%$, $r = 8\%$, High-growth period = 10 years → $H = 5$

$$V_0 = \frac{1.77(1.04)}{0.08-0.04} + \frac{1.77 \times 5 \times (0.07-0.04)}{0.08-0.04}$$

$$= \frac{1.8408}{0.04} + \frac{0.2655}{0.04} = €46.02 + €6.64 = \mathbf{€52.66}$$

- Market price: €41.70
- Intrinsic value: €52.66 → **stock appears ~26% undervalued**

---

### Two Versions of the Three-Stage DDM

#### Version 1: Three Distinct Constant Growth Stages

| Stage | Growth | Duration |
|-------|--------|---------|
| Stage 1 | High constant $g_1$ | First few years |
| Stage 2 | Medium constant $g_2$ | Middle years |
| Stage 3 | Mature constant $g_L$ | Perpetuity |

**Process:**
1. Calculate individual dividends for Stages 1 and 2
2. Apply Gordon growth model at end of Stage 2 for terminal value
3. Discount all back to $t = 0$

**Example (tech company, Example 17):**
- $D_0 = \$3.30$, $g_1 = 14\%$ (2 yrs), $g_2 = 12\%$ (5 yrs), $g_3 = 6.75\%$ (perpetuity), $r = 9\%$
- **Total value: $222.82** vs. market price $194.98 → **undervalued 14%**
- PV of terminal value = **88% of total**

---

#### Version 2: Three Stages with Linear Decline in Stage 2

| Stage | Growth | Duration |
|-------|--------|---------|
| Stage 1 | High constant $g_S$ | H years (explicit forecasts) |
| Stage 2 | Linearly declining from $g_S$ to $g_L$ | 2H years (H-model) |
| Stage 3 | Mature constant $g_L$ | Perpetuity |

**Process:**
1. Calculate Stage 1 dividends individually → sum their PVs
2. Apply H-model to Stages 2 and 3 at the beginning of Stage 2 → get $V_{H}$
3. Discount $V_H$ back to $t = 0$
4. Sum Stage 1 PVs + PV of $V_H$

**Example (Rhinestone Energy, Example 18):**
- $D_0 = \$0.56$, $g_S = 11\%$ (5 yrs), $g_L = 6.5\%$, Transition = 10 yrs → $H = 5$, $r = 8\%$

$$V_5 = \frac{D_5(1+g_L)}{r-g_L} + \frac{D_5 \times H \times (g_S-g_L)}{r-g_L} = \$81.15$$

$$V_0 = \text{PV(Stage 1)} + \frac{V_5}{(1.08)^5} = \$3.04 + \$55.23 = \mathbf{\$58.27}$$

- Stage 1 = **5.2%** of total value
- Stages 2+3 = **94.8%** of total value
- Market price: $56.18 → within analyst's ±20% fair value band → **fairly valued**

---

### Bloomberg DDM — Real-World Implementation

**Three-stage model with linear decline in Stage 2**, with growth classification system:

| Classification | Stage 1 (Growth) | Stage 2 (Transition) | Total |
|---------------|-----------------|---------------------|-------|
| Explosive growth | 3 years | 14 years | 17 years |
| High growth | 5 years | 12 years | 17 years |
| Average growth | 7 years | 10 years | 17 years |
| Slow/mature growth | 9 years | 8 years | 17 years |

> Higher-growth companies get **shorter** Stage 1 and **longer** transitions — faster reversion to maturity expected. Total horizon fixed at **17 years**.

---

### Model Selection Guide

| Model | Growth Pattern | Best For |
|-------|---------------|---------|
| **Gordon growth** | Constant forever | Mature, stable companies |
| **Two-stage DDM** | High then abrupt switch to stable | Temporary competitive advantage |
| **H-model** | High declining linearly to stable | Gradual maturation; smoother transition |
| **Three-stage (constant)** | High → medium → stable | Companies with distinct transition periods |
| **Three-stage (linear decline in Stage 2)** | High → gradually declining → stable | Most realistic for typical companies |

---

### Exam Formulas

$$\boxed{V_0^{H-model} = \frac{D_0(1+g_L)}{r-g_L} + \frac{D_0 \cdot H \cdot (g_S-g_L)}{r-g_L}}$$

$$\boxed{V_0^{3-stage} = \sum_{t=1}^{n} \frac{D_t}{(1+r)^t} + \frac{V_n^{H-model}}{(1+r)^n}}$$

---

### Exam Tips

- **H = half** the high-growth period — if period is 10 years, H = 5
- **H-model is an approximation** — works best when $H$ is small and $g_S - g_L$ is small
- **Terminal value dominates** in all multistage models (typically 85-95%)
- **Version 2 three-stage**: Stage 1 individual dividends + H-model for Stages 2+3
- **Fair value band** concept: analyst may define a range (e.g., ±20%) within which stock is considered fairly valued
- **Bloomberg DDM**: higher growth companies → shorter Stage 1 — counterintuitive but reflects faster expected reversion to maturity
- **All versions**: use Gordon growth model or H-model for the terminal value component