---
layout: page
title: "Backtesting and Simulation — Introduction"
permalink: /study/09-portfolio-management/06-backtesting-and-simulation/01-introduction/
---
## Summary: Backtesting and Simulation — Introduction (CFA Level II — Portfolio Management)

---

### Setting — The SWF Fund Case Study

**Sarah Koh** heads quantitative research at Newton Research Pte. Her client, **SWF Fund**, wants her to independently evaluate:
1. A **"value" equity strategy** — does owning cheap stocks / shorting expensive stocks add alpha?
2. **Two multifactor fundamental strategies** — value combined with other factors

**Purpose**: Findings will inform SWF Fund's **Investment Committee** decision on whether to adopt these strategies. This case study threads through the entire reading.

---

### Four Techniques for Evaluating Investment Strategies

| Technique | Core Question | Environment Used |
|-----------|----------------|-------------------|
| **1. Backtesting** | "How would this strategy have performed if implemented in the past?" | **Historical**, usually long periods |
| **2. Historical scenario analysis** (= historical stress testing) | How does the strategy perform in **specific** historical episodes? | Discrete historical periods (recessions, high inflation, etc.) |
| **3. Simulation** | How would the strategy perform under a **hypothetical**, user-specified environment? | **Hypothetical** (not limited to what actually happened) |
| **4. Sensitivity analysis** | What's the impact of changing **key assumptions**? | Often **combined with simulation** |

---

### Why Simulation Complements Backtesting

$$\boxed{\text{The past may not recur} \implies \text{History represents only a LIMITED sample of all possible future outcomes}}$$

**Key variables where this matters**: Interest rates, return correlations, economic growth — history shows only ONE realized path among many possible ones.

**Simulation's value-add**: Explores scenarios **beyond** what has historically occurred, filling gaps that pure historical analysis (backtesting, historical scenario analysis) cannot address.

---

### Growing Accessibility — But Rising Importance of Understanding Fundamentals

**Trend**: Powerful **off-the-shelf software** has moved these techniques from **specialist-only** territory to **generalist-accessible** tools.

**CFA Institute survey finding**: Among ~250 analysts, portfolio managers, and private wealth managers surveyed:
$$\boxed{50\% \text{ had performed backtesting analysis on an investment strategy within the past 12 months}}$$

> **Key implication**: Even though the **technical barriers** to running these analyses have fallen, understanding the following remains **increasingly important**:
> - Steps and procedures
> - Implicit assumptions
> - Pitfalls
> - Interpretation of results

**Why this matters more, not less**: As tools become more accessible to non-specialists, the risk of **misapplication or misinterpretation** grows — making conceptual understanding a critical professional competency.

---

### Reading Roadmap

```
This reading = starting point for building core competency in:
   1. Backtesting mechanics and objectives
   2. Historical scenario analysis / stress testing
   3. Simulation methodology
   4. Sensitivity analysis (combined with simulation)

Case study (SWF Fund / value strategy evaluation) will illustrate
concepts throughout subsequent sections.
```

---

### Exam Tips

- **Four techniques to distinguish**: Backtesting (historical, long period) vs. Historical scenario analysis (discrete historical episodes) vs. Simulation (hypothetical environment) vs. Sensitivity analysis (assumption-impact testing, usually paired with simulation)
- **Backtesting answers**: "How would this strategy have performed in the past?" — a **full historical period** approach
- **Historical scenario analysis** narrows the focus to **specific stress periods** (recessions, inflation spikes) — same historical data source as backtesting, but different scope/purpose
- **Simulation is NOT constrained to historical data** — it generates hypothetical outcomes, addressing the limitation that "the past may not recur"
- **Sensitivity analysis** is typically **paired with simulation** to test how results change when key assumptions are varied
- **50% of practitioners** (per CFA Institute survey) have used backtesting in the past year — reflects how mainstream this has become
- **Core exam theme**: As software makes these techniques easier to RUN, understanding their **assumptions and limitations** becomes MORE important for correct interpretation — don't just apply tools mechanically
- This is an **introductory/framing reading** — expect the detailed mechanics, formulas, and worked examples for each technique in subsequent sections of Module 6