---
layout: page
title: "Classical and Neoclassical Growth Models"
permalink: /study/02-economics/02-economic-growth/04-classical-and-neoclassical-growth-models/
next: /cfa/study/02-economics/02-economic-growth/05-endogenous-growth-and-convergence/
prev: /cfa/study/02-economics/02-economic-growth/03-growth-inputs-labor-and-resources/
---
## Summary: Classical and Neoclassical Growth Models (CFA Level II — Economics)

---

### Classical (Malthusian) Growth Model

Developed by Thomas Malthus (*Essay on the Principle of Population*, 1798). The production function has **labor** as the variable input and **land** as a fixed factor, subject to diminishing marginal returns.

**Central mechanism:**
1. Technological progress or land expansion raises labor productivity and per capita income **above subsistence**.
2. Population growth *accelerates* whenever per capita income exceeds the subsistence level (the key Malthusian assumption).
3. Because land is fixed, the growing labor force runs into diminishing marginal returns — output per worker falls.
4. Population keeps growing until per capita income is driven **back down to the subsistence level**.

> **Prediction**: New technology produces a **larger but not richer** population — the standard of living is constant over time even with technological progress. There is no sustained growth in per-capita output. (Hence economics was dubbed the "dismal science.")

**Why the Malthusian prediction failed:**
1. The assumed link between rising income and accelerating population growth **broke down** empirically — as per capita income rose historically, population growth *slowed*, not accelerated (the "demographic transition").
2. Technological progress has been **rapid enough to outpace** diminishing marginal returns to labor, delivering sustained per-capita income growth instead of a reversion to subsistence.

---

### Neoclassical (Solow) Growth Model

Developed by Robert Solow (1957). Both capital **and** labor are variable inputs, each subject to diminishing marginal productivity. The model solves for the long-run ("steady-state" or "balanced") growth rate of output per capita as a function of the saving/investment rate, the rate of technological change, and population growth.

**Setup** — starting from the per-capita Cobb–Douglas form $y = Ak^{\alpha}$ (where $k = K/L$):

$$\frac{\Delta k}{k} = \frac{\Delta K}{K} - \frac{\Delta L}{L}, \qquad \frac{\Delta y}{y} = \theta + \alpha\frac{\Delta k}{k}$$

where $\theta \equiv \Delta A/A$ is TFP growth. The capital stock evolves as gross investment ($I = sY$, where $s$ is the saving rate) less depreciation ($\delta K$):

$$\Delta K = sY - \delta K \quad\Rightarrow\quad \frac{\Delta k}{k} = s\frac{Y}{K} - \delta - n$$

where $n \equiv \Delta L/L$ is labor force growth.

**Steady state**: capital per worker and output per worker grow at the *same* rate. Setting $\Delta k/k = \Delta y/y$ and solving:

$$\boxed{\text{Steady-state growth rate of output per capita} = \frac{\theta}{1-\alpha}}$$

$$\boxed{\text{Steady-state growth rate of total output} = \frac{\theta}{1-\alpha} + n}$$

> This is the **central result** of the neoclassical model: in the long run, growth depends *only* on the growth rate of TFP (scaled by labor's income share) and labor force growth — **not** on the saving/investment rate.

The corresponding **equilibrium output-to-capital ratio** ($\psi$) and the **savings/investment identity** describing the steady state:

$$\boxed{\psi = \left(\frac{Y}{K}\right)^{*} = \frac{1}{s}\left[\frac{\theta}{1-\alpha} + \delta + n\right]}$$

$$\boxed{sy = \left[\delta + n + \frac{\theta}{1-\alpha}\right]k}$$

> **Intuition**: In steady state, saving/investment per worker ($sy$) is exactly enough to (1) equip new workers entering the labor force at rate $n$, (2) replace depreciating capital at rate $\delta$, and (3) deepen the capital stock at the rate $\theta/(1-\alpha)$ needed to keep the marginal product of capital equal to its cost.

**Graphically** (required-investment line vs. actual saving/investment curve): the straight **required-investment line** has slope $[\delta + n + \theta/(1-\alpha)]$; the curved **actual saving/investment curve** $sf(k)$ bends because of diminishing returns to capital. Their intersection is the steady-state capital-to-labor ratio $k^{*}$.

---

### Comparative Statics — What Moves the Steady State

| Parameter increases... | Effect on steady-state $k^{*}$, $y^{*}$ (levels) | Effect on steady-state **growth rate** |
|---|---|---|
| **Saving rate** ($s$) ↑ | ↑ (higher investment at every $k$) | **No permanent effect** — growth rate is unchanged; only a *transitory* boost during the adjustment |
| **Labor force growth** ($n$) ↑ | ↓ (more capital must be spread across more new workers) | No effect on per-capita growth rate; raises growth rate of *total* output by $n$ |
| **Depreciation rate** ($\delta$) ↑ | ↓ (less net capital accumulation from a given saving rate) | No permanent effect on per-capita growth rate |
| **TFP growth** ($\theta$) ↑ | ↓ *(counterintuitive — see note below)* | **↑ Permanently** — the only parameter that permanently raises the per-capita growth rate |

> **Note on TFP and the level of $k^{*}$**: A permanently faster TFP growth rate steepens the required-investment line, which — for a *given* level of labor and TFP at a point in time — intersects the saving curve at a *lower* $k^{*}$ and $y^{*}$. This does not mean higher TFP growth makes the economy poorer: it means that, from a given base, the economy is now on a *steeper growth trajectory* (a higher future growth rate) even though the level of output per worker at *this instant* is lower than it would be with slower (but longer-accumulated) capital deepening.

**Transitional dynamics (off the steady state):** if the actual output-to-capital ratio $Y/K$ exceeds its equilibrium value $\psi$, both $k$ and $y$ grow **faster** than the steady-state rate — capital deepening is running ahead of trend (often the case for a capital-scarce, low-$k$ economy). Over time, because capital grows faster than output when $\alpha < 1$, $Y/K$ falls back toward $\psi$ and growth decelerates to the steady-state rate. The reverse holds if $Y/K < \psi$ (an unsustainably high capital-to-labor ratio): growth is *below* trend until $Y/K$ rises back to $\psi$.

---

### Implications of the Neoclassical Model

**1. Capital accumulation**
- Affects the *level* of output, not the long-run growth *rate*.
- Any economy, regardless of its starting capital-to-labor ratio or TFP level, converges to *a* steady-state growth path.
- In steady state, output growth $= n + \theta/(1-\alpha)$ — independent of the investment rate.

**2. Capital deepening vs. technology**
- Growth *above* the steady-state rate occurs early in the capital-accumulation process (low $k$); it *slows* as accumulation continues.
- Long-run growth **cannot rely solely on capital deepening** — pushing the capital-to-labor ratio up faster than labor productivity eventually makes capital less productive (diminishing returns), slowing rather than accelerating growth.
- More generally: increasing *any* single input too fast relative to the others triggers diminishing returns and cannot sustain growth.
- Because of diminishing returns to capital, **only technological change (TFP growth) can sustain per-capita output growth indefinitely.**

**3. Convergence**
- Developing economies (low $k$, high marginal product of capital) should grow **faster** than developed economies (high $k$), all else equal.
- This implies **convergence** of per capita incomes over time between developed and developing countries (developed further in File 05).

**4. Effect of saving on growth**
- A higher saving rate *temporarily* raises growth during the transition to a new (higher) steady-state level of $k$ and $y$ — but **not** the long-run growth rate.
- Once the new steady state is reached, the growth rate reverts to $\theta/(1-\alpha) + n$, unchanged from before.
- Countries with permanently higher saving rates will have a permanently **higher level** of $y$ and $k$ (not growth rate).

---

### Extension of the Neoclassical Model

Solow's original estimate: **over 80%** of US per-capita growth (1909–1949) was attributable to TFP; Denison's later work (1929–1982) found TFP explained roughly 70%. This is uncomfortable because the model provides **no explanation** for what drives TFP — it is purely exogenous, a residual.

**Two critiques and responses:**

| Critique | Response / research direction |
|---|---|
| TFP is unexplained (exogenous residual) | **Augmented Solow approach** (Jorgenson): stays in the neoclassical tradition (still assumes diminishing returns) but broadens the definition of capital to include human capital, R&D, and public infrastructure, shrinking the unexplained TFP residual through better input measurement |
| Model predicts saving rate has no effect on long-run growth | Mankiw (1995) showed saving rates and growth rates are **positively correlated** across countries empirically, casting some doubt on a strict reading of the prediction |
| Model predicts returns to capital should fall as capital-to-labor ratios rise | Evidence for advanced economies does **not** show declining returns to capital over time |

The second major response to these critiques is a wholly different framework: the **endogenous growth model** (File 05), which explains technological progress *within* the model.

---

### Classical vs. Neoclassical Model — Comparison

| Dimension | Classical (Malthusian) | Neoclassical (Solow) |
|---|---|---|
| **Variable input(s)** | Labor only (land fixed) | Capital and labor, both variable |
| **Long-run per capita growth** | **Zero** — reverts to subsistence income | Positive, equal to $\theta/(1-\alpha)$ — driven by TFP growth alone |
| **Role of technology** | Raises population, not living standards (population absorbs the gain) | Only sustainable driver of *per-capita* growth |
| **Role of saving/investment** | Not a central mechanism | Raises the *level* of output per worker, not the long-run growth *rate* |
| **Convergence prediction** | Not addressed | Predicts convergence between developed and developing economies |
| **Key flaw** | Assumed population growth accelerates with income (empirically false); underestimated the pace of technological progress | Treats TFP as exogenous/unexplained; no model of *what drives* technological progress |

---

### Worked Example — Steady-State Growth and a Saving-Rate Shock in Meridia

**Setup**: Meridia's estimated parameters: TFP growth $\theta = 2.2\%$, capital's income share $\alpha = 0.35$ (so labor's share $1-\alpha = 0.65$), labor force growth $n = 1.5\%$, depreciation rate $\delta = 8\%$, and an initial saving rate $s = 22\%$.

**1. Calculate Meridia's steady-state growth rate of output per capita and of total output.**

$$\frac{\Delta y}{y}\bigg|_{ss} = \frac{\theta}{1-\alpha} = \frac{2.2\%}{0.65} = 3.38\%$$
$$\frac{\Delta Y}{Y}\bigg|_{ss} = 3.38\% + n = 3.38\% + 1.5\% = 4.88\%$$

**2. Meridia's government raises the saving rate from 22% to 27%. What happens immediately, and in the long run?**

Immediately following the increase, actual investment temporarily exceeds the (unchanged) steady-state requirement, so both the capital-to-labor ratio and output per capita grow **faster than 3.38%** for a period — capital deepening accelerates. Over time, as the capital-to-labor ratio rises, diminishing returns pull the output-to-capital ratio back down toward its new equilibrium level $\psi$, and growth decelerates back to the **same 3.38%** steady-state rate as before (only the *level* of $y$ and $k$ is permanently higher, not the growth rate).

**3. From Meridia's growth-accounting result in File 02 (observed GDP growth of 5.4%, driven partly by rapid capital deepening), what does the steady-state estimate of 4.88% imply?**

Because Meridia's *observed* GDP growth (5.4%) is above its *estimated steady-state* growth rate (4.88%), Meridia is very likely **still in transition** toward its steady state — consistent with a capital-to-labor ratio still below its long-run equilibrium level (as expected for a developing economy with strong FDI inflows and rapid capital deepening; see File 02's decomposition). Voss should expect Meridia's growth rate to *gradually decelerate* toward roughly 4.9% as the capital stock matures, absent a pickup in TFP growth or labor force growth.

---

### Question Set Answers

**Q1.** *An economy has TFP growth of 1.5%, labor's income share of 0.60, and labor force growth of 0.8%. What is its neoclassical steady-state GDP growth rate?*
$\theta/(1-\alpha) + n = 1.5\%/0.60 + 0.8\% = 2.5\% + 0.8\% = 3.3\%$.

**Q2.** *A country permanently doubles its saving rate. According to the neoclassical model, what happens to its long-run per-capita growth rate?*
Nothing, in the long run — the steady-state growth rate depends only on TFP growth and labor force growth. The higher saving rate produces a permanently higher *level* of capital per worker and output per worker, and a *temporary* period of above-trend growth during the transition, but the long-run growth rate reverts to $\theta/(1-\alpha)$.

**Q3.** *Why does the classical (Malthusian) model predict no long-run per-capita growth, while the neoclassical model predicts positive long-run per-capita growth?*
The classical model assumes population growth accelerates whenever income rises above subsistence, so any productivity gain is absorbed by a larger population rather than higher living standards. The neoclassical model instead treats TFP growth as an ongoing, unmodeled (exogenous) process that continuously shifts the production function upward, generating sustained per-capita growth even as capital deepening runs into diminishing returns.

**Q4.** *What is the main criticism of the neoclassical growth model, and how does the "augmented Solow" approach respond to it?*
The model treats TFP as an unexplained exogenous residual. The augmented Solow approach stays within the diminishing-returns framework but broadens the definition of capital (human capital, R&D, public infrastructure) to shrink the unexplained residual and better attribute growth to measurable inputs.

**Q5.** *Two economies have identical saving rates, depreciation rates, and TFP growth rates, but Economy A currently has a lower capital-to-labor ratio than Economy B. What does the neoclassical model predict about their relative near-term growth rates?*
Economy A (lower $k$) should grow *faster* in the near term as it converges toward the (shared) steady state — this is the transitional-dynamics logic underlying the neoclassical convergence prediction.

---

### Exam Tips (Preview — Full List in File 06)

- Memorize: **steady-state growth of output per capita = $\theta/(1-\alpha)$**; **steady-state growth of total output = $\theta/(1-\alpha) + n$.**
- A higher saving rate raises the **level** of output per worker permanently but the **growth rate** only **temporarily** — this is the single most tested neoclassical implication.
- **Only TFP growth permanently raises the steady-state per-capita growth rate** — capital deepening (saving rate, labor growth, depreciation) affects levels, not the long-run growth rate.
- Classical model → per-capita growth reverts to **zero** (subsistence); neoclassical model → per-capita growth is positive and equals scaled TFP growth.
