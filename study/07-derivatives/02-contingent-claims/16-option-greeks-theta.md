## Summary: Option Greeks — Theta (CFA Level II — Derivatives)

---

### What Is Theta?

**Theta**: The change in an option's value for a given small change in **calendar time**, holding everything else constant.

$$\boxed{\Theta = \text{Change in option value per unit of time passing}}$$

**Alternative name**: **Time decay** — the rate at which option time value erodes as expiration approaches.

---

### Key Properties of Theta

| Property | Detail |
|---------|--------|
| **Sign** | Typically **negative** for options (value declines as time passes) |
| **Stock theta** | **Zero** (stocks have no expiration date) |
| **Adjustable with stock trades?** | **No** — like gamma, theta cannot be changed by buying/selling stock |
| **Largest decay** | **Near expiration** — rate of decay accelerates as expiration approaches |
| **ATM options** | Most sensitive to time decay |

---

### Theta vs. Delta and Gamma — A Key Distinction

| Feature | Delta / Gamma | Theta |
|---------|--------------|-------|
| **Source of change** | Stock price movement (uncertain) | Passage of calendar time (certain) |
| **Uncertainty** | Yes — stock can go up or down | **No** — time only moves forward |
| **Direction** | Either positive or negative | Almost always negative (value declines) |

> **Theta is unique**: It represents inevitable value erosion — there is zero probability that time moves backward. Option holders know with certainty they will experience theta-related losses over time.

---

### Time Decay Pattern (Exhibit 17)

**Key insight**: Time decay **accelerates as expiration approaches**.

```
Time to Expiration (Long)          Time to Expiration (Short)
       Far from expiry                    Near expiry
       ________________                  
      /                 \               /
     /    Slow decay     \             / Rapid decay
    /                     \___________/ 
```

**For ATM options** (Exhibit 17 setup: $S = X = 100$, $r = 5\%$, $\sigma = 30\%$, $\delta = 0$):
- With lots of time remaining → option has substantial time value → decays slowly
- As expiration approaches → time value evaporates **increasingly rapidly**
- At expiration → time value = 0 → option worth only intrinsic value (which for ATM = 0)

---

### Why Theta Matters for Portfolio Management

**For long option positions**:
- **Significant losses** can occur from pure time passage (even if stock price doesn't change)
- Holding ATM options overnight, over weekends, or through quiet periods costs value

**For short option positions**:
- **Positive theta**: Time decay benefits the option seller
- Theta works in the seller's favor — they collect premium and benefit from value erosion

**Investment managers monitor theta carefully** because:
- Large option portfolios can have significant daily P&L from time alone
- Options with high gamma (near expiry, ATM) also have the most rapid theta decay

---

### Theta-Gamma Relationship

**An important trade-off**:
- **Long options**: Positive gamma (benefits from large moves) + Negative theta (loses value over time)
- **Short options**: Negative gamma (hurt by large moves) + Positive theta (gains value over time)

$$\boxed{\text{Positive gamma} \leftrightarrow \text{Negative theta (usually)}}$$

> Holding options is essentially **paying** for the right to benefit from large moves (positive gamma) but **losing** value as time passes (negative theta). This trade-off is at the core of options trading strategy.

---

### Exam Tips

- **Theta is typically negative** for long options — value declines as calendar time passes
- **Time decay accelerates near expiration** — theta is NOT constant over the option's life
- **ATM options have the most time value to lose** — largest theta exposure
- **Cannot hedge theta with stock** — only other options or time-based strategies can address theta
- **Theta vs. delta**: delta depends on uncertain stock moves; theta depends on certain passage of time
- **Short option positions benefit from theta** (positive theta) — the option seller profits from time decay
- **Theta complements gamma**: long gamma (benefits from moves) typically comes with negative theta (costs time value) — this is the key risk/reward trade-off in option positions
- **Weekend theta**: option holders lose 3 days of theta over a weekend even though markets only close for 2 days — important practical consideration