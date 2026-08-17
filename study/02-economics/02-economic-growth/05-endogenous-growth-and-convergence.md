---
layout: page
title: "Endogenous Growth and Convergence"
permalink: /study/02-economics/02-economic-growth/05-endogenous-growth-and-convergence/
next: /cfa/study/02-economics/02-economic-growth/06-summary/
prev: /cfa/study/02-economics/02-economic-growth/04-classical-and-neoclassical-growth-models/
---
## Summary: Endogenous Growth and Convergence (CFA Level II — Economics)

---

### The Endogenous Growth Model

**Motivation**: The neoclassical model treats TFP as exogenous and unexplained. **Endogenous growth theory** (Romer, 1986) instead explains technological progress *within* the model, by broadening "capital" to include **human/knowledge capital and R&D**.

**Key mechanism — no diminishing returns to aggregate capital:**
- R&D spending produces *ideas* — a form of capital that, unlike physical capital, can be **copied and used by other firms** without being used up.
- This generates large **positive externalities (spillovers)**: one firm's R&D raises the productivity of *other* firms too, so the **social** return to R&D/knowledge capital exceeds the **private** return captured by the innovating firm.
- Because individual firms cannot capture the full (social) benefit of their innovation, there is **no natural tendency toward monopoly** even though returns to capital, broadly defined, are constant or increasing at the level of the whole economy — this reconciles constant private returns (no single firm dominates) with increasing social returns (aggregate output benefits more than proportionately).
- The upshot: capital (broadly defined to include knowledge) does **not** face diminishing marginal returns economy-wide.

**Production function** — a straight line (constant marginal product of capital, unlike the curved neoclassical form):

$$\boxed{y_e = c \cdot k_e}$$

where $c$ is the constant marginal (and average) product of capital in the aggregate economy, and the subscript $e$ denotes the endogenous growth model. Because the output-to-capital ratio is fixed at $c$, output per worker always grows at exactly the same rate as capital per worker.

**Growth rate of output per capita:**

$$\boxed{\frac{\Delta y_e}{y_e} = \frac{\Delta k_e}{k_e} = sc - \delta - n}$$

> **Key insight — the central result of endogenous growth theory**: Because every term on the right-hand side is constant, this is *both* the short-run *and* the long-run growth rate. A **higher saving rate ($s$) permanently raises the growth rate** — a sharp contrast with the neoclassical model, where a higher saving rate raises growth only *temporarily*.

**Policy implication — market failure and the case for government intervention:**
Because private companies under-invest in R&D/knowledge capital relative to the socially optimal level (they cannot capture all the spillover benefits), there is an economic rationale for **government intervention** — direct R&D spending, tax credits, subsidies for private R&D — to correct this market failure and push investment in knowledge capital closer to the socially optimal level, potentially raising the long-run growth rate.

**Implication for convergence**: Because there are no diminishing returns to (broadly defined) capital, endogenous growth theory gives **no reason to expect convergence** between developed and developing economies — a high-income country can, in principle, continue growing as fast as or faster than a low-income country if it maintains high investment in knowledge capital.

---

### Classical vs. Neoclassical vs. Endogenous Growth Models

| Dimension | Classical (Malthusian) | Neoclassical (Solow) | Endogenous |
|---|---|---|---|
| **Returns to capital** | N/A (labor/land focus) | **Diminishing** marginal returns to capital | **Constant** (or increasing) — no diminishing returns economy-wide |
| **Technology / TFP** | Absorbed into population growth, not living standards | **Exogenous** — unexplained residual | **Endogenous** — explained via R&D/knowledge-capital spillovers |
| **Long-run per-capita growth** | Zero (reverts to subsistence) | Positive, $= \theta/(1-\alpha)$ — depends only on (exogenous) TFP growth and labor growth | Positive and **permanently** sensitive to the saving/investment rate |
| **Effect of higher saving rate** | Not a central mechanism | **Temporary** growth boost; permanent effect only on the *level* of output | **Permanent** increase in the growth rate |
| **Convergence prediction** | Not addressed | **Predicts convergence** (capital-poor economies grow faster) | **No convergence implied** — high-income countries can sustain their lead via continued knowledge-capital investment |
| **Role of government** | Not addressed | Limited — no correction needed for an efficient market outcome | **Rationale for subsidy/support of R&D** — private underinvestment is a market failure |

---

### Worked Example — Neoclassical vs. Endogenous Growth in Meridia

**Setup**: Recall from File 04 that Meridia's per-capita income grows at a steady 3.38% with a 22% saving rate, $\delta = 8\%$, $n = 1.5\%$. Suppose the implied output-to-capital ratio is $c = 0.47$ (used here as the constant marginal product of capital in an endogenous growth framework), and the saving rate rises to 26%.

**1. Under the endogenous growth model, what is the new (permanent) growth rate of per capita income?**

$$\frac{\Delta y_e}{y_e} = sc - \delta - n = (0.26)(0.47) - 0.08 - 0.015 = 0.1222 - 0.095 = 0.0272,\ \text{or } 2.72\%$$

*(Using the original 22% saving rate for comparison: $(0.22)(0.47) - 0.095 = 0.0334$, or 3.34% — close to the neoclassical steady-state rate of 3.38% computed in File 04, as expected since both frameworks should broadly agree at the initial parameterization.)*

**2. How does this compare with the neoclassical prediction from File 04?**

In File 04's neoclassical analysis, raising the saving rate produced only a **temporary** acceleration in growth before decelerating back to the unchanged 3.38% steady-state rate. Here, under the endogenous growth model, the higher saving rate produces a **permanently lower or higher** growth rate (depending on the sign of the change) that *never reverts* — because there are no diminishing returns to capital pulling growth back to a fixed long-run rate.

**3. What would explain the *difference* in outcomes between the two models for the same policy change?**

The models disagree about whether capital (broadly defined) faces diminishing returns. If Meridia's incremental investment is mostly plain physical capital (machinery, buildings) — ordinary capital deepening — the neoclassical prediction (temporary effect) is more realistic. If the incremental investment is directed at R&D, education, and technology adoption with meaningful spillovers to the rest of the economy, the endogenous growth prediction (permanent effect) becomes more plausible. Voss should investigate *where* the incremental saving is being invested before deciding which model's forecast to weight more heavily.

---

### Convergence Hypotheses

**Convergence** means countries with low per capita income grow faster than countries with high per capita income, so that developing-country income levels converge toward developed-country levels over time. There are **three** types commonly discussed:

| Type | Definition | Model basis | Empirical support |
|---|---|---|---|
| **Absolute convergence** | *All* developing countries, regardless of individual characteristics, eventually catch up to developed-country per-capita output | Would require *identical* access to technology *and* identical saving rates, population growth rates, and production functions across all countries — the neoclassical model does **not** actually imply this | Weak — many poor countries are diverging, not converging |
| **Conditional convergence** | Convergence occurs **conditional on** countries sharing the same saving rate, population growth rate, and production function (i.e., the same steady state, $k^{*}$) | Directly implied by the **neoclassical model**: countries with different saving/population-growth parameters converge to *different* steady-state income *levels*, but a lower-$k$ country still grows *faster* while transitioning to its own steady state | Reasonably well supported once controlling for these structural differences |
| **Club convergence** | Only countries that are members of a "club" (having made the requisite institutional changes — property rights, education, open trade, sound legal systems) converge toward the income level of the world's richest countries; the poorest members of the club grow fastest; countries outside the club continue to fall behind | Consistent with observed data showing convergence among some developing/middle-income countries but persistent divergence for others | Best supported by the data — some poorer countries converge, others fall further behind depending on institutional reform |

> **Key insight**: A country can fall into a **non-convergence trap** if it fails to implement necessary institutional reforms, or if policies that helped growth initially (e.g., import substitution in 1950s–60s Latin America) are maintained too long and become growth-inhibiting later.

**Two channels through which convergence occurs:**
1. **Capital accumulation / capital deepening** — developing countries, starting from a low capital-to-labor ratio, experience much larger productivity gains per unit of new capital than developed countries already near their steady state (see File 02's capital-deepening-vs-TFP discussion).
2. **Technology transfer/imitation** — developing countries can adopt technology and management practices already proven in advanced economies, narrowing the gap faster than they could through indigenous innovation alone — but only if they invest the resources needed to master and apply the imported technology.

**Testing convergence**: If convergence holds, there should be an **inverse relationship between a country's initial level of per capita GDP and its subsequent growth rate** — poor countries should grow faster than rich countries over the following decades.

---

### Worked Example — Testing the Convergence Hypothesis

**Setup**: Voss compiles 1990 per-capita GDP and subsequent 1990–2020 average annual per-capita growth rates for four hypothetical economies:

| Economy | 1990 GDP per capita | 1990–2020 avg. annual growth |
|---|---|---|
| Solvane (rich, developed) | $32,000 | 1.6% |
| Meridia (developing, reforming) | $2,500 | 5.1% |
| Kestria (developing, closed/unreformed) | $2,800 | 0.9% |
| Ardenne (middle-income) | $9,500 | 3.2% |

**1. Does this evidence support convergence?**

Partially. Meridia (poorest starting point, $2,500) grew fastest (5.1%), and Ardenne (middle income) grew faster than rich Solvane — both consistent with convergence. But Kestria, despite starting from a similarly low income level as Meridia ($2,800), grew much more slowly (0.9%) — *slower* than rich Solvane. This is inconsistent with simple (absolute) convergence.

**2. How would you reconcile Kestria's result?**

Kestria's outcome is consistent with **club convergence**: Kestria has not made the institutional changes (open trade, secure property rights, developed financial markets — see File 01) needed to join the "convergence club," so it continues to fall behind despite its low starting income, while Meridia — which *has* pursued reform and openness — is converging rapidly. Kestria's result is also consistent with a country stuck in a **non-convergence trap**.

**3. Investment implication?**

If the institutional reform underlying Meridia's performance persists, Voss should expect Meridia's higher expected long-run earnings and GDP growth to translate into potentially higher long-run equity returns than Solvane's, subject to appropriately higher risk — but Kestria's low institutional quality argues against extrapolating "developing market = fast convergence" without confirming club membership.

---

### Growth in an Open Economy

The Solow model as presented in File 04 assumes a **closed economy** (domestic investment = domestic saving, no trade or capital flows). Opening the economy changes the growth dynamics through five broad channels:

1. Domestic investment need not be constrained by domestic saving — countries can **borrow/lend in global capital markets**.
2. Countries can shift resources toward industries of **comparative advantage**, raising overall productivity.
3. Firms gain access to **larger global markets**, better exploiting economies of scale.
4. Countries can **import technology**, raising the effective rate of technological progress.
5. Global trade **increases competition**, forcing domestic firms to innovate and control costs.

**Neoclassical model — dynamic adjustment in an open economy:**

| Step | Mechanism |
|---|---|
| 1 | Developing countries have less capital per worker → higher marginal product of capital → higher returns on investment |
| 2 | Global savers chase the higher returns → capital flows from capital-rich to capital-poor countries |
| 3 | Capital-poor countries' physical capital stock grows faster than domestic saving alone would allow → faster productivity growth → **convergence accelerates** |
| 4 | Capital flows are mirrored by trade flows: capital-poor (importing) countries run **trade deficits**; capital-rich (exporting) countries run **trade surpluses** |
| 5 | During transition, growth in the capital-poor country is temporarily **above** its steady-state rate; growth in the capital-exporting country is temporarily **below** |
| 6 | Over time, the capital-poor country's returns fall as its capital stock rises → investment and trade deficit shrink → growth decelerates back toward the steady state; if investment falls below domestic saving, the country can flip to a trade surplus (capital exporter) |
| 7 | Ultimately, **no permanent increase** in growth results from this reallocation — both developed and developing economies settle at their steady-state growth rates |

> A real-world wrinkle: China ran large **trade surpluses** rather than the neoclassical-predicted deficits, because of its exceptionally high domestic saving rate — even as it received substantial FDI inflows, illustrating that model predictions can be overridden by country-specific saving behavior.

**Endogenous growth model — open trade produces *permanent* gains** through three channels:

| Channel | Mechanism |
|---|---|
| **Selection effect** | Import competition forces less efficient domestic firms to exit and efficient ones to innovate, raising average economy-wide efficiency |
| **Scale effect** | Producers exploit economies of scale by selling into larger (global) markets — disproportionately benefits **smaller** economies |
| **Backwardness effect** | Less advanced countries/sectors catch up to more advanced ones via knowledge spillovers — disproportionately benefits **poorer, less developed** economies |

Open trade also raises R&D and human-capital spending (bigger addressable markets raise the payoff to innovation), increasing the return to and rate of investment — reinforcing permanently higher growth. That said, trade can occasionally *retard* growth in small, technologically lagging economies if firms conclude that even successful innovation will lose out to more efficient foreign competitors, discouraging domestic innovation effort.

**Two contrasting development strategies (empirically tested over decades):**

| Strategy | Description | Historical track record |
|---|---|---|
| **Inward-oriented / import substitution** | Restrict imports; build domestic industries to replace them, even at higher cost | Poor GDP growth, inefficient/low-quality domestic industries (much of Africa and Latin America, 1950s–1980s) |
| **Outward-oriented / export-led** | Integrate with the global economy through trade; make exports a key growth driver | High GDP growth and convergence with developed economies, reinforced by FDI inflows (East Asian economies such as Singapore, South Korea) |

> **Key insight**: The empirical evidence strongly favors outward-oriented, trade-open strategies — both the neoclassical and endogenous growth frameworks predict gains from openness, and observed growth outcomes (East Asia vs. inward-oriented Latin America/Africa in the same era) support this conclusion.

---

### Question Set Answers

**Q1.** *What feature of the endogenous growth model eliminates diminishing marginal returns to capital at the economy-wide level, and why doesn't this cause a single dominant monopoly firm to emerge?*
Positive externalities/spillovers from R&D and knowledge capital mean the *social* return to investment exceeds the *private* return captured by any one firm. Because individual firms face constant (not increasing) returns to the capital *they* control, there is no private advantage to being large — but the spillovers still generate increasing/constant returns for the economy as a whole.

**Q2.** *A government is deciding whether to subsidize (a) all private capital investment broadly or (b) R&D and new-technology investment specifically. Which is more likely to produce a permanent increase in the growth rate, and under which model?*
Subsidizing R&D/new technology (b) is more likely to produce a **permanent** growth increase, per the **endogenous growth model** — because it targets investment with spillover externalities that avoid diminishing returns. Broad-based capital subsidies (a) mostly produce ordinary capital deepening, which the **neoclassical model** predicts will only temporarily raise growth.

**Q3.** *Distinguish absolute, conditional, and club convergence in one sentence each.*
**Absolute**: all developing countries eventually catch up to developed-country income levels regardless of their characteristics. **Conditional**: convergence occurs only among countries sharing the same saving rate, population growth rate, and production function (same steady state). **Club**: only countries that adopt the requisite institutional reforms converge toward the richest countries' income level; others continue to fall behind.

**Q4.** *Why does the neoclassical model predict that opening an economy to trade and capital flows speeds up convergence but does not produce a permanent increase in the long-run growth rate?*
Open capital markets let capital flow to where its marginal product (return) is highest — capital-poor countries — accelerating the capital-to-labor-ratio convergence process. But because diminishing returns to capital still apply, once capital-to-labor ratios equalize, both economies settle back at their (unchanged) steady-state growth rates — the reallocation raises levels/speed of convergence, not the ultimate long-run growth rate.

**Q5.** *A small, technologically advanced economy and a small, technologically backward economy both open to free trade. Which is more likely to benefit from the "backwardness effect," and which from the "scale effect"?*
The technologically backward economy benefits more from the **backwardness effect** (catch-up via knowledge spillovers from more advanced trading partners); both small economies — but especially ones without a large domestic market — benefit from the **scale effect** (access to larger markets to exploit economies of scale), since scale effects disproportionately help smaller economies regardless of their technology level.

---

### Exam Tips (Preview — Full List in File 06)

- **Endogenous growth ⇒ permanently higher growth from a higher saving rate**; **neoclassical ⇒ only temporarily higher growth.** This contrast is one of the most frequently tested points in the module.
- Know the **three convergence types** by name and be able to identify which one a given scenario illustrates — club convergence (institutional-reform-dependent) is the best empirically supported.
- **Open trade**: neoclassical model → faster convergence, no permanent growth boost; endogenous model → permanent growth boost via selection, scale, and backwardness effects.
- **Outward-oriented (export-led)** development strategies have a much stronger empirical growth track record than **inward-oriented (import-substitution)** strategies.
