---
layout: page
title: "Formula Summary: Economic Growth"
permalink: /study/02-economics/02-economic-growth/06-summary/
prev: /cfa/study/02-economics/02-economic-growth/05-endogenous-growth-and-convergence/
---
## Formula Summary: Economic Growth (CFA Level II — Economics)

---

### 1. Production Function and Growth Accounting

**Cobb–Douglas production function:**
$$\boxed{Y = A K^{\alpha} L^{1-\alpha}}$$

**Per-worker (intensive) form** ($y = Y/L$, $k = K/L$):
$$\boxed{y = A k^{\alpha}}$$

**Growth accounting equation:**
$$\boxed{\frac{\Delta Y}{Y} = \frac{\Delta A}{A} + \alpha\frac{\Delta K}{K} + (1-\alpha)\frac{\Delta L}{L}}$$

**Labor productivity method (potential GDP shortcut):**
$$\boxed{\text{Growth rate of potential GDP} = \text{Long-term labor force growth} + \text{Long-term labor productivity growth}}$$

> $\alpha$ = capital's income share = elasticity of output w.r.t. capital; $(1-\alpha)$ = labor's income share = elasticity of output w.r.t. labor. Both are estimated directly from national income accounts (capital's/labor's share of GDP).

---

### 2. Grinold–Kroner Equity Return Decomposition

$$\boxed{E(R_e) = dy + \%\Delta(P/E) + i + g - \Delta S}$$

Where $dy$ = dividend yield, $i$ = inflation, $g$ = real GDP growth, $\Delta S = nbb + rd$ (net buybacks + relative dynamism of non-listed growth).

> Long-run defensible forecast $\approx dy + i + g$ (nominal GDP growth + dividend yield), since $\%\Delta(P/E)$ cannot persistently drive returns.

---

### 3. Neoclassical (Solow) Steady-State Growth

**Steady-state growth rate of output per capita:**
$$\boxed{\frac{\Delta y}{y}\bigg|_{ss} = \frac{\theta}{1-\alpha}} \qquad \text{where } \theta = \frac{\Delta A}{A} \text{ (TFP growth)}$$

**Steady-state growth rate of total output:**
$$\boxed{\frac{\Delta Y}{Y}\bigg|_{ss} = \frac{\theta}{1-\alpha} + n} \qquad \text{where } n = \frac{\Delta L}{L} \text{ (labor force growth)}$$

**Equilibrium output-to-capital ratio:**
$$\boxed{\psi = \left(\frac{Y}{K}\right)^{*} = \frac{1}{s}\left[\frac{\theta}{1-\alpha} + \delta + n\right]}$$

**Savings/investment identity at steady state:**
$$\boxed{sy = \left[\delta + n + \frac{\theta}{1-\alpha}\right]k}$$

> A higher saving rate ($s$) raises the *level* of $k^{*}$ and $y^{*}$ but has **no permanent effect** on the growth rate — only TFP growth ($\theta$) permanently changes the steady-state per-capita growth rate.

---

### 4. Endogenous Growth Model

**Production function (linear, constant marginal product of capital):**
$$\boxed{y_e = c \cdot k_e}$$

**Growth rate of output per capita (permanent, not just transitory):**
$$\boxed{\frac{\Delta y_e}{y_e} = \frac{\Delta k_e}{k_e} = sc - \delta - n}$$

> Unlike the neoclassical case, a change in $s$ here changes the growth rate **permanently**, because there are no diminishing returns to (broadly defined) capital.

---

### Quick Reference — All Formulas

| Measure | Formula |
|---------|---------|
| Cobb–Douglas production function | $Y = AK^{\alpha}L^{1-\alpha}$ |
| Per-worker production function | $y = Ak^{\alpha}$ |
| Growth accounting equation | $\Delta Y/Y = \Delta A/A + \alpha(\Delta K/K) + (1-\alpha)(\Delta L/L)$ |
| TFP growth (residual) | $\Delta A/A = \Delta Y/Y - \alpha(\Delta K/K) - (1-\alpha)(\Delta L/L)$ |
| Potential GDP (labor productivity method) | Labor force growth + labor productivity growth |
| Grinold–Kroner equity return | $dy + \%\Delta(P/E) + i + g - \Delta S$ |
| Neoclassical steady-state per-capita growth | $\theta/(1-\alpha)$ |
| Neoclassical steady-state total output growth | $\theta/(1-\alpha) + n$ |
| Equilibrium output-to-capital ratio | $\psi = (1/s)[\theta/(1-\alpha) + \delta + n]$ |
| Savings/investment identity | $sy = [\delta + n + \theta/(1-\alpha)]k$ |
| Endogenous growth production function | $y_e = c \cdot k_e$ |
| Endogenous growth rate | $sc - \delta - n$ |

---

### Model Comparison at a Glance

| Model | Returns to capital | Long-run per-capita growth driver | Effect of ↑ saving rate | Convergence? |
|---|---|---|---|---|
| **Classical (Malthusian)** | Diminishing (to labor, fixed land) | None — reverts to subsistence | Not central | Not addressed |
| **Neoclassical (Solow)** | Diminishing | Exogenous TFP growth ($\theta/(1-\alpha)$) | Temporary only | Predicted (esp. conditional) |
| **Endogenous** | Constant/increasing (economy-wide) | Endogenous — driven by R&D/knowledge-capital investment | **Permanent** | Not implied |

| Convergence type | Condition | Best evidence |
|---|---|---|
| **Absolute** | None — all countries converge regardless of characteristics | Weak |
| **Conditional** | Same saving rate, population growth, production function | Moderate |
| **Club** | Countries adopting requisite institutional reforms converge; others fall behind | Strongest |

---

### Exam Tips

- **Growth accounting equation**: $\Delta Y/Y = \Delta A/A + \alpha \Delta K/K + (1-\alpha)\Delta L/L$ — practice solving for TFP as the residual; know that $\alpha$ = capital's income share = capital's output elasticity (same number, two interpretations).
- **Capital deepening = movement along** the per-worker production function curve; **TFP growth = parallel upward shift** of the entire curve. This distinction underlies nearly every qualitative question in the module.
- **Population growth raises total GDP growth but not per-capita GDP growth** — a frequently tested trap. Labor force participation, net migration, and hours-worked trends *do* move per-capita growth.
- **Natural resources are neither necessary nor sufficient for growth** — know the **resource curse** and **Dutch disease** (currency appreciation crowding out manufacturing) as the two standard explanations for underperformance despite resource abundance.
- **ICT capital differs from non-ICT capital**: ICT generates network externalities that feed into TFP, beyond ordinary capital deepening.
- **Neoclassical steady state**: $\Delta y/y\big|_{ss} = \theta/(1-\alpha)$; $\Delta Y/Y\big|_{ss} = \theta/(1-\alpha) + n$. A higher saving rate changes the **level**, not the **long-run growth rate**, of output per worker — only TFP growth changes the long-run growth rate.
- **Endogenous growth model**: no diminishing returns to (broadly defined) capital because of R&D/knowledge-capital externalities → a higher saving rate produces a **permanent** increase in growth (contrast sharply with neoclassical).
- Endogenous growth theory provides the standard **economic rationale for government subsidies to private R&D**: private firms underinvest in knowledge capital because they cannot capture the full social return (positive externality / market failure argument).
- **Convergence hypotheses**: absolute (weak support) < conditional (moderate, requires matching structural parameters) < club (strongest support, requires institutional reform to "join the club"); watch for scenarios describing a poor country that is *not* converging — this points to failure to join the convergence club, not failure of convergence theory generally.
- **Open economy — neoclassical**: capital flows from capital-rich to capital-poor countries accelerate convergence but do **not** raise the long-run steady-state growth rate; capital-poor (importing) countries run trade deficits, capital-rich (exporting) countries run trade surpluses, during the transition.
- **Open economy — endogenous growth**: permanent gains from trade via the **selection effect** (weak firms exit, efficient ones improve), **scale effect** (larger addressable market, favors small economies), and **backwardness effect** (catch-up via spillovers, favors less-developed economies/sectors).
- **Outward-oriented (export-led) policies** have strongly outperformed **inward-oriented (import-substitution) policies** empirically — a recurring vignette theme (East Asia vs. mid-20th-century Latin America/Africa).
- For equity/fixed-income implications: long-run **real earnings growth cannot exceed potential GDP growth**; the **output gap** (actual vs. potential GDP) is the key driver of near-term inflation and monetary policy expectations relevant to fixed income; **faster potential GDP growth → higher real interest rates and higher required real asset returns** (more saving needed to fund capital accumulation).
