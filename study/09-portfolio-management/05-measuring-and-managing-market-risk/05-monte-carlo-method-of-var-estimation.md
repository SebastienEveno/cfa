---
layout: page
title: "The Monte Carlo Simulation Method of VaR Estimation"
permalink: /study/09-portfolio-management/05-measuring-and-managing-market-risk/05-monte-carlo-method-of-var-estimation/
prev: /cfa/study/09-portfolio-management/05-measuring-and-managing-market-risk/04-historical-simulation-method-of-var-estimation/
next: /cfa/study/09-portfolio-management/05-measuring-and-managing-market-risk/06-advantages-limitations-extensions-of-var/
---
## Summary: The Monte Carlo Simulation Method of VaR Estimation (CFA Level II — Portfolio Management)

---

### Core Concept

**Monte Carlo simulation**: User specifies **statistical characteristics** (distribution assumptions) and generates **random hypothetical outcomes** consistent with those characteristics.

**Origin of name**: Named after the casino city — analogous to **tossing dice/rolling roulette**, generating random outcomes.

**Broad applications**: Scientific phenomena, capital budgeting under uncertainty, complex option pricing (simulate underlying → determine payoffs → average and discount).

---

### Why Use Monte Carlo Over Parametric Method?

| Parametric Method Challenge | Monte Carlo Solution |
|-------------------------------|--------------------------|
| **Large number of assets** → parameters difficult to extract | Simulate directly without needing to solve for combined parameters analytically |
| **Complex interactions among risk factors** | Simulate the processes; tabulate results — no need to specify complex analytical relationships |
| **Constrained to normal distribution** | Can accommodate **virtually ANY distribution** |

---

### Methodology — Step by Step

```
Step 1: Decompose portfolio into risk factors (same as other methods)
Step 2: Specify statistical assumptions for each risk factor 
         (mean, volatility, distribution shape, AND correlation)
Step 3: Generate a LARGE number of random simulated return combinations
Step 4: Re-price portfolio exposures under each simulated scenario
Step 5: Sort simulated portfolio returns from WORST to BEST
Step 6: Select the value at the desired percentile (5th for 5% VaR, etc.)
```

> **Critical requirement**: Must **explicitly account for correlation** between risk factors when generating random values — cannot simulate independently unless assets truly are uncorrelated.

---

### Number of Simulations — No Industry Standard

$$\boxed{\text{More simulations} \implies \text{More reliable results, BUT more time-consuming}}$$

**No formal rule** for how many simulations to run — this is a **user/analyst judgment call**.

---

### Worked Example — SPY/SPLB Portfolio

**Setup**: Used **same parametric inputs** for consistency:
- SPY: 10.5% return, 20.0% volatility
- SPLB: 6.0% return, 8.5% volatility
- Correlation: −0.06
- Portfolio weights: 80/20
- **10,000 simulated returns** drawn from a **normal distribution**

**Resulting Monte Carlo VaR estimates:**

| VaR Level | Monte Carlo Result |
|-----------|------------------------|
| **1% VaR** | $3,541,035 |
| **5% VaR** | $2,517,702 |
| **16% VaR** | $1,524,735 |

---

### Comparison — Monte Carlo vs. Parametric

$$\boxed{\text{5% Monte Carlo VaR (\$2,517,702)} \approx \text{5% Parametric VaR (\$2,445,150)}}$$

**Why the small difference?**
> Monte Carlo **samples** from a population with certain parameters, while the parametric method **assumes** those parameters directly apply exactly. A finite sample (even 10,000 observations) will **not perfectly match** the true population parameters — only extremely large samples (much larger than 10,000) would converge more precisely.

---

### Distribution Shape Comparison

| Method | Resulting Distribution Shape |
|--------|-------------------------------|
| **Historical simulation** (Exhibit 6) | **Departs from normal** — reflects actual empirical data |
| **Monte Carlo** (Exhibit 7) | **Bell-shaped, closely resembles normal** |

**Why Monte Carlo looks more "normal"**: Because the analyst **explicitly assumed** a normal distribution when generating the simulated values — this is a **built-in assumption**, not an empirical finding.

---

### Key Advantage — Distributional Flexibility

$$\boxed{\text{Primary attraction of Monte Carlo} = \text{Ability to accommodate ANY distribution, not just normal}}$$

**Options and embedded-option bonds**: Both Monte Carlo AND historical simulation are **more capable** than the parametric method at accurately capturing option payoff characteristics (truncated, non-normal payoffs).

---

### Time Horizon Conversion

**Similar to historical simulation**: Can **scale daily returns to annual** and run a Monte Carlo simulation on the **annualized** return series to estimate annual VaR.

---

### Computational Considerations

**Historical challenge**: Monte Carlo was **historically slow**.

**Current reality**: With modern computing power, it is now **relatively easy and fast** to simulate extremely complex processes even for portfolios with **thousands of exposures**.

---

### Example 4 — Knowledge Check Answers

**Q1 — When does Monte Carlo produce virtually the SAME results as parametric method?**

→ **C. "When parameters and distribution used in parametric method match those used in Monte Carlo AND Monte Carlo uses a sufficiently large sample"**

- **A wrong**: Parametric method is NOT well-suited to non-normal distributions — using a non-normal Monte Carlo distribution would NOT converge with parametric results
- **B wrong**: Neither method inherently "focuses on historical outcomes" — that's the defining feature of historical simulation, not these two methods

**Q2 — Advantage of the Monte Carlo method:**

→ **B. "It is flexible enough to accommodate many types of distributions"**

- **A wrong**: Monte Carlo is **NOT** a simple formula — it requires simulation/computation, unlike the parametric method's direct formulaic approach
- **C wrong**: There is **NO industry-wide agreement** on the necessary number of simulations — this remains a judgment call

---

### Three-Method Comparison Summary

| Feature | Parametric | Historical Simulation | Monte Carlo |
|---------|------------|--------------------------|--------------|
| **Distribution assumption** | Normal (typically) | None (uses actual data) | **User-specified (flexible)** |
| **Data requirement** | Parameters only (data optional) | **Requires** historical data | Parameters only (data optional) |
| **Handles options well?** | **Poor** (truncated payoffs) | **Good** | **Good** |
| **Reflects true empirical shape?** | No (imposed normal) | **Yes** (actual data) | Only if simulated distribution is chosen accordingly |
| **Computational complexity** | Low | Moderate | **Higher** (but manageable with modern computing) |
| **Key limitation** | Poor fit for non-normal/options | "Past may not repeat" | No standard # of simulations; sampling variation |

---

### Key Formula/Concept Reference Card

| Concept | Detail |
|---------|--------|
| **Monte Carlo VaR extraction** | Sort simulated returns; select value at desired percentile (same logic as historical simulation) |
| **Correlation requirement** | MUST account for correlation between risk factors when generating random values |
| **Convergence with parametric** | Occurs when SAME distribution + parameters used AND sample size is sufficiently large |
| **# of simulations** | No industry standard; more = more reliable but more time-consuming |

---

### Exam Tips

- **Monte Carlo requires the user to SPECIFY the distribution** — this is the KEY distinguishing feature vs. parametric (assumes normal) and historical (uses actual empirical distribution)
- **Must explicitly incorporate correlation** between risk factors when generating simulated values — cannot treat assets as independent unless truly uncorrelated
- **No industry standard for number of simulations** — common exam trap (Q2's Answer C is wrong for this reason)
- **Monte Carlo converges to parametric results** ONLY when: (1) same distribution assumed, (2) same parameters used, AND (3) sample size is sufficiently large
- **Monte Carlo and historical simulation BOTH handle options better than parametric** — because they don't force a normal distribution on truncated option payoffs
- **Monte Carlo's greatest strength = distributional flexibility** — can model any shape, not just normal
- **A Monte Carlo simulation assuming normal distribution will produce a bell-shaped histogram BY CONSTRUCTION** — this is NOT evidence that returns are "actually" normal, just a reflection of the modeling assumption
- **Time horizon conversion works similarly to historical simulation** — scale daily to annual returns, then re-run simulation on annualized data
- **Modern computing power has largely eliminated the historical speed disadvantage** of Monte Carlo — now feasible even for portfolios with thousands of exposures
