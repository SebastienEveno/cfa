---
layout: page
title: "Production Function and Growth Accounting"
permalink: /study/02-economics/02-economic-growth/02-production-function-and-growth-accounting/
next: /cfa/study/02-economics/02-economic-growth/03-growth-inputs-labor-and-resources/
prev: /cfa/study/02-economics/02-economic-growth/01-growth-fundamentals-and-investors/
---
## Summary: Production Function and Growth Accounting (CFA Level II — Economics)

---

### The Cobb–Douglas Production Function

A **production function** links inputs (capital, labor) and technology to output:

$$\boxed{Y = A \cdot F(K, L) = A K^{\alpha} L^{1-\alpha}}$$

Where:

| Symbol | Meaning |
|--------|---------|
| $Y$ | Aggregate output (real GDP) |
| $K$ | Capital services provided by the stock of equipment and structures |
| $L$ | Labor input (workers or hours worked) |
| $A$ | Total factor productivity (TFP) — a multiplicative scale factor capturing the general level of technology; a rise in $A$ raises output proportionately for *any* combination of inputs |
| $\alpha$ | Capital's share of output/income, $0 < \alpha < 1$ |
| $1-\alpha$ | Labor's share of output/income |

**Why $\alpha$ = capital's income share:** In a competitive economy, profit maximization sets each factor's marginal product equal to its price. The marginal product of capital (MPK) for the Cobb–Douglas function is $MPK = \alpha Y/K$. Setting $MPK$ equal to the rental price of capital $r$ and solving gives $\alpha = rK/Y$ — capital income as a share of GDP. By the same logic, $1-\alpha$ is labor's income share. This makes $\alpha$ easy to estimate directly from national income accounts (capital's share of income).

**Two key properties:**

| Property | Meaning |
|---|---|
| **Constant returns to scale** | If *all* inputs rise by the same percentage, output rises by that same percentage (exponents $\alpha + (1-\alpha) = 1$) |
| **Diminishing marginal productivity** (per input) | Holding one input fixed, each additional unit of the *other* input adds progressively less output. A low $\alpha$ means diminishing returns to capital set in quickly; $\alpha$ near 1 means they set in slowly |

**Per-worker (intensive) form** — divide by $L$, let $y = Y/L$ (labor productivity/output per worker) and $k = K/L$ (capital-to-labor ratio):

$$\boxed{y = A k^{\alpha}}$$

Labor productivity depends on the capital-to-labor ratio, TFP, and capital's income share. Note the two distinct productivity concepts: **labor productivity** ($y = Y/L$, an *observable ratio*) vs. **TFP** ($A$, a *scale factor* estimated as a residual).

---

### The Growth Accounting Equation

Writing the Cobb–Douglas function in growth-rate form decomposes output growth into its sources:

$$\boxed{\frac{\Delta Y}{Y} = \frac{\Delta A}{A} + \alpha\frac{\Delta K}{K} + (1-\alpha)\frac{\Delta L}{L}}$$

> Growth in output = growth in TFP + (capital's share × growth in capital) + (labor's share × growth in labor).

Because $\alpha$ and $1-\alpha$ are simultaneously **income shares** and **output elasticities**, a 1% increase in capital raises output by $\alpha$%, and a 1% increase in labor raises output by $(1-\alpha)$%. For the United States, $\alpha \approx 0.3$ and $1-\alpha \approx 0.7$ — an equal percentage increase in labor has roughly **double** the growth impact of the same percentage increase in capital.

**TFP is not directly observed** — it is backed out as a residual once output, capital, and labor growth (and $\alpha$) are known:

$$\frac{\Delta A}{A} = \frac{\Delta Y}{Y} - \alpha\frac{\Delta K}{K} - (1-\alpha)\frac{\Delta L}{L}$$

**Uses of the growth accounting equation:**
1. Estimate the historical contribution of TFP (Solow's original use).
2. Empirically decompose an economy's sources of growth (labor vs. capital vs. TFP) for cross-country comparison.
3. **Forecast potential GDP** — plug in trend estimates of labor and capital growth plus an estimated/forecast TFP growth rate.

**Alternative — the labor productivity growth accounting equation**, simpler because it avoids separately estimating capital and TFP:

$$\boxed{\text{Growth rate of potential GDP} = \text{Long-term growth rate of labor force} + \text{Long-term growth rate of labor productivity}}$$

This method's drawback: it bundles capital deepening and TFP progress into a single "labor productivity growth" term, making it harder to analyze or forecast the individual drivers.

---

### Extending the Production Function

The two-factor model can be expanded to include additional inputs, all subsumed into $A$ (TFP) in the basic model unless separated out explicitly:

$$Y = A\,F(N, L, H, K_{IT}, K_{NT}, K_P)$$

| Input | Symbol | Description |
|---|---|---|
| Natural resources | $N$ | Land, oil, water, and other raw materials |
| Labor quantity | $L$ | Number of workers |
| Human capital | $H$ | Education and skill level of the workforce |
| ICT capital | $K_{IT}$ | Computer hardware, software, communications equipment |
| Non-ICT capital | $K_{NT}$ | Transport equipment, machinery, non-residential structures |
| Public capital | $K_P$ | Government-provided infrastructure |
| Technological knowledge | $A$ | TFP — production methods converting inputs into output |

---

### Capital Deepening vs. Technological Progress

| Concept | Definition | Effect on the per-capita production function ($y$ vs. $k$ graph) |
|---|---|---|
| **Capital deepening** | A rising capital-to-labor ratio ($\Delta K/K > \Delta L/L$) | A **movement along** the curve — diminishing marginal returns mean each added unit of $k$ raises $y$ by progressively less |
| **Technological progress (↑TFP)** | A rise in $A$ | A **proportional upward shift** of the entire curve — more output per worker at *every* capital-to-labor ratio |

> **Key insight**: Once the capital-to-labor ratio is high (as in a mature developed economy), further capital deepening has little impact on output per worker because of diminishing marginal returns. Only **ongoing TFP progress** can sustain per-capita output growth indefinitely — this is the central logic behind the neoclassical steady state (see File 04).

**Implication for developed vs. developing economies:**
- **Low capital-to-labor ratio (developing economies)**: diminishing returns are minor, so an increase in investment produces a large boost to output per worker — both domestic and foreign capital inflows are highly effective.
- **High capital-to-labor ratio (developed economies)**: diminishing returns are severe, so further capital deepening adds little; growth must come mainly from **TFP** (R&D, innovation, better organization).
- An increase in spending that raises TFP (e.g., university research) shifts the curve upward and benefits **both** types of economies, offsetting diminishing returns.

---

### Worked Example — Growth Accounting for Meridia

**Setup**: Mara Voss at Northbridge Global Investors wants to decompose Meridia's recent GDP growth and forecast its potential GDP growth. She gathers 10-year average annual data:

| Variable | Value |
|---|---|
| Growth in capital stock, $\Delta K/K$ | 6.0% |
| Growth in hours worked (labor), $\Delta L/L$ | 1.5% |
| Labor's share of income, $(1-\alpha)$ | 0.65 (so $\alpha = 0.35$) |
| Growth in real GDP, $\Delta Y/Y$ (observed) | 5.4% |

**1. Estimate TFP growth as the growth-accounting residual.**

$$\frac{\Delta A}{A} = \frac{\Delta Y}{Y} - \alpha\frac{\Delta K}{K} - (1-\alpha)\frac{\Delta L}{L} = 5.4\% - (0.35)(6.0\%) - (0.65)(1.5\%)$$
$$= 5.4\% - 2.10\% - 0.975\% = 2.325\%$$

**2. Decompose the sources of GDP growth.**

| Source | Contribution |
|---|---|
| Capital ($\alpha \times \Delta K/K$) | 2.10% |
| Labor ($(1-\alpha) \times \Delta L/L$) | 0.975% |
| TFP (residual) | 2.325% |
| **Total GDP growth** | **5.40%** |

Capital contributes the most in percentage-point terms, but relative to the size of each input's growth rate, TFP growth (2.325%, on a base growth rate of essentially 100% of its own change) is also a substantial share of overall growth — roughly 43% of total GDP growth is attributable to TFP, consistent with capital deepening (not just TFP) still being a major, transitional driver of growth in a capital-scarce economy.

**3. Cross-check with the labor productivity method.**

Labor productivity growth $= \Delta Y/Y - \Delta L/L = 5.4\% - 1.5\% = 3.9\%$.
$$\text{Growth rate of potential GDP} = \text{Labor force growth} + \text{Labor productivity growth} = 1.5\% + 3.9\% = 5.4\%$$

Both methods reconcile to the same 5.4% by construction; the labor-productivity method is simpler but does not separately identify the capital-deepening vs. TFP split.

> **Key insight**: The difference between labor-productivity growth (3.9%) and TFP growth (2.325%) — here, 3.9% − 2.325% = 1.575% — is the contribution from **capital deepening** to labor productivity growth. The larger this gap, the more Meridia's productivity gains depend on rising capital-to-labor ratios rather than genuine technological progress, and (per the neoclassical logic in File 04) the less sustainable that portion of growth is once the capital-to-labor ratio matures.

---

### Question Set Answers

**Q1.** *An economy has $\Delta K/K = 4\%$, $\Delta L/L = 1\%$, $\alpha = 0.30$, and observed GDP growth of 3.5%. Estimate TFP growth.*
$\Delta A/A = 3.5\% - (0.30)(4\%) - (0.70)(1\%) = 3.5\% - 1.2\% - 0.7\% = 1.6\%$.

**Q2.** *Two countries have identical TFP growth and labor force growth, but Country X has a much lower capital-to-labor ratio than Country Y. Which country's growth rate benefits more from an equal percentage increase in investment, and why?*
Country X (lower capital-to-labor ratio) benefits more — diminishing marginal returns to capital are minor at a low capital-to-labor ratio, so additional capital produces a much larger boost to output per worker than in Country Y, where diminishing returns are already significant.

**Q3.** *In a production function graph of output per worker against capital per worker, how do you distinguish the effect of capital deepening from the effect of a TFP increase?*
Capital deepening is a **movement along** the existing curve (higher $k$, following the curve's shape/diminishing returns); a TFP increase is a **parallel upward shift of the entire curve**, raising output per worker at every level of capital per worker.

**Q4.** *Why is capital's income share ($\alpha$) also equal to the elasticity of output with respect to capital in the Cobb–Douglas function?*
Because profit-maximizing firms pay each factor its marginal product, and for the Cobb–Douglas form, the marginal product of capital normalized by average product ($MPK \times K/Y$) equals $\alpha$ exactly — so the *income share* and the *output elasticity* are mathematically the same parameter.

**Q5.** *An analyst has GDP, capital growth, and labor growth data but no reliable TFP estimate for a country. Which growth accounting approach should they use to estimate potential GDP, and what is its main limitation?*
The **labor productivity growth accounting equation** (labor force growth + labor productivity growth) — it avoids needing a capital stock estimate or TFP calculation, but it cannot separately identify how much of productivity growth comes from capital deepening vs. true technological progress.

---

### Exam Tips (Preview — Full List in File 06)

- Know the growth accounting equation **cold**: $\Delta Y/Y = \Delta A/A + \alpha \Delta K/K + (1-\alpha)\Delta L/L$, and be ready to solve for any single term as the "residual" (usually TFP).
- **Capital deepening = movement along the curve; TFP = shift of the curve.** This distinction drives nearly every qualitative question on capital vs. technology.
- The **labor-productivity method** (labor force growth + labor productivity growth) is the fast, low-data alternative to full growth accounting — know both and be able to reconcile them.
