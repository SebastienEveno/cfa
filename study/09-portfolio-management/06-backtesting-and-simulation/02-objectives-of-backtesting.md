---
layout: page
title: "6.02 | The Objectives of Backtesting"
permalink: /study/09-portfolio-management/06-backtesting-and-simulation/02-objectives-of-backtesting/
prev: /cfa/study/09-portfolio-management/06-backtesting-and-simulation/01-introduction/
next: /cfa/study/09-portfolio-management/06-backtesting-and-simulation/03-the-backtesting-process/
---
## Summary: 6.02 | The Objectives of Backtesting (CFA Level II — Portfolio Management)

---

### What Backtesting Does

$$\boxed{\text{Backtesting} = \text{Using HISTORICAL data to assess whether a strategy WOULD HAVE produced desirable results}}$$

**Purpose**: Approximates the **real-life investment process**, offering investors **insight and rigor** in evaluating a strategy before committing capital to it.

---

### The Asymmetric Reality of Backtesting Results

$$\boxed{
\begin{array}{l}
\text{Strategy performs WELL in backtest} \implies \text{does NOT guarantee future excess returns} \\
\text{Strategy performs POORLY in backtest} \implies \text{COULD still deliver excess returns in the future}
\end{array}
}$$

**Practical consequence**: Despite this asymmetry, a strategy that **fails** a backtest is **unlikely to be accepted** by portfolio managers and investors — regardless of its true (unknowable) future potential.

$$\boxed{\text{Backtesting functions as an ACCEPTANCE or REJECTION criterion for investment strategies}}$$

---

### Who Uses Backtesting

**Widely used** across the investment community, historically:
- **Most natural fit**: quantitative and systematic investment styles
- **Also widely used**: fundamental managers — e.g., before adopting a stock-screening criterion (such as a valuation metric), a backtest can reveal whether that criterion **historically added incremental excess return**.

---

### The Core Implicit Assumption — And Its Limitation

$$\boxed{\text{Implicit assumption of backtesting: THE FUTURE WILL AT LEAST SOMEWHAT RESEMBLE HISTORY}}$$

**Reality check**: This assumption is acknowledged as **overly simplistic** — the future is more complicated than pure historical repetition.

**Solution flagged for later in the reading**: **Complementary techniques** (scenario analysis, simulation, sensitivity analysis — introduced in 6.01) are used to **account for the randomness of the future** that backtesting alone cannot capture.

---

### Exam Tips

- **Core testable asymmetry**: a **failed** backtest is a strong practical rejection criterion (low real-world adoption likelihood), even though a failed backtest **doesn't logically prove** the strategy can't work going forward — and conversely, a **successful** backtest doesn't guarantee future success. This nuance (backtesting as a *practical* gatekeeping tool vs. a *guarantee* of future performance) is a strong candidate for an exam question
- **Backtesting is NOT exclusive to quant strategies** — remember that **fundamental managers** use it too, typically to validate individual **screening criteria** (e.g., testing whether a valuation metric historically added value) rather than a full systematic strategy
- **Key limiting assumption to remember**: backtesting implicitly assumes **history is a reasonable guide to the future** — this is the same critique raised in 6.01 about why simulation is a necessary complement (the past represents only ONE realized path among many possible futures)
- This is a **short, conceptual framing section** — expect the **next sections (6.03+)** to dig into the **specific mechanics** of rolling-window backtesting (steps, calibration, rebalancing) as previewed in the Module 6 summary (6.09) you've already seen