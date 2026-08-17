---
layout: page
title: "Opportunistic Strategies: Managed Futures"
permalink: /study/08-alternatives/04-hedge-fund-strategies/10-opportunistic-strategies-managed-futures/
prev: /cfa/study/08-alternatives/04-hedge-fund-strategies/09-opportunistic-strategies-global-macro/
next: /cfa/study/08-alternatives/04-hedge-fund-strategies/11-specialist-strategies/
---
## Summary: 4.10 | Opportunistic Strategies: Managed Futures (CFA Level II — Alternative Investments)

---

### Learning Outcome
Same LOS as 4.09 — completes the **opportunistic** category with managed futures.

---

### Managed Futures — Core Concept

$$\boxed{\text{Managed futures: trades FUTURES, options on futures, sometimes forwards/swaps — on stock/FI indexes, commodities, currencies}}$$

**Academic origin**: first major academic backing from **John Lintner (1983)**.

**Expanding instrument universe**: as futures markets have grown (open interest, liquidity), managers now also trade **sector/industry index futures** and **exotic contracts** (weather futures — temperature, rainfall; carbon emissions derivatives).

---

### Investment Characteristics

### The Diversification Value Proposition

$$\boxed{\text{Managed futures: UNCORRELATED with stocks/bonds} \implies \text{Improves risk-adjusted portfolio profiles (efficient frontier benefit)}}$$

**Key historical validation — 2007–2009 GFC**:
$$\boxed{\text{Managers held SHORT equity futures + LONG fixed-income futures} \implies \text{profited as equities fell and FI rose}}$$

$$\boxed{\text{Managed futures exhibit natural POSITIVE SKEWNESS} \implies \text{Useful for balancing NEGATIVELY-skewed strategies elsewhere in a portfolio}}$$

### Cyclicality of Performance — The 2011–2018 Challenge

$$\boxed{\text{2011–2018: FX and fixed-income trendiness DETERIORATED, volatility DISSIPATED, acute stress periods vanished}}$$

**Effect**: markets became **range-bound/mean-reverting** (except some developed equity markets) → **hurt** managed futures performance.

**Diversification nuance**: trend-following **strong equity markets** provides **LESS diversification value** to a traditional portfolio than trend-following in **non-equity** markets (by definition — you're just amplifying correlated exposure).

### The Zero-Yield-Boundary Problem

$$\boxed{\text{As sovereign bonds approach ZERO yield, the correlation BENEFIT of managed futures changes}}$$

- Historically: trend-follow fixed income as yields **fall** (prices rise) → correlation benefit vs. equities
- **Going forward** (as rates "normalize"/rise): trend-following FI markets **lower** (i.e., higher rates, falling prices) may still generate positive returns, **but with DIFFERENT (less valuable) correlation behavior** vs. equities
- **Also**: upward-sloping yield curves mean **less natural "carry"** contribution when trend-following FI markets to the **downside** (rising rates)

---

### Liquidity and Leverage Characteristics

$$\boxed{\text{Managed futures: HIGHLY LIQUID, active across MANY asset classes, easy to go LONG or SHORT}}$$

**Liquidity evidence**: 
$$\boxed{\text{E-mini S\&P 500 futures: 3-4x the DAILY DOLLAR VOLUME of SPY (world's most traded equity ETF)}}$$

**24-hour global tradability**: futures provide liquid exposure across the globe, around the clock.

**Capital efficiency / leverage source**:
$$\boxed{\text{Futures margin requirements: 0.1\%–10\% of notional value} \quad \text{vs. standard US equity margin: 50\%}}$$

**Structural leverage mechanic**: 
$$\boxed{\text{Futures don't require OWNING assets — exposure comes from NOTIONAL value of contracts held}}$$
$$\boxed{\text{Typical account structure: 85\%–90\% in short-term government debt/liquid collateral; 10\%–15\% used to collateralize futures positions}}$$

---

### Strategy Implementation

**Core signal types**: **momentum/trend-driven** or **volatility-signal-based** pattern recognition, traded across **different time horizons**.

**Multi-horizon example**: 
- Long-term model → gold trending lower → short gold futures (triggered by e.g., short-term MA crossing below long-term MA)
- **Shorter-term model** → downside momentum fading, mean-reversion bounce likely
- **Combined**: models weighted together into a **net position**, typically with the **longer-term model weighted more heavily**

**Additional factors layered on**: **carry relationships** and **volatility factors** — useful especially for **position sizing**.

### Position Sizing Rules

$$\boxed{\text{HIGHER volatility of an asset} \implies \text{SMALLER position sizing}}$$
$$\boxed{\text{HIGHER correlation to other held futures} \implies \text{SMALLER position sizing}}$$

### Exit Methodologies (any combination)
1. **Price target** exit
2. **Momentum reversal** exit
3. **Time-based** exit
4. **Trailing stop-loss** exit

**Model integrity concerns**: 
$$\boxed{\text{Key success factor: CONSISTENT approach, avoiding OVERFITTING during backtesting} \implies \text{goal is robust OUT-OF-SAMPLE performance}}$$
$$\boxed{\text{Trading signals naturally DEGRADE over time as more managers adopt similar signals} \implies \text{constant search for NEW, differentiated signals (increasingly via "big data"/unstructured data)}}$$

---

### Two Core Momentum Approaches

### 1. Time-Series Momentum (TSM) — Most Common
$$\boxed{\text{TSM: trade based on an asset's OWN past returns — LONG assets rising in price, SHORT assets falling in price}}$$

**Key characteristic**: 
$$\boxed{\text{Traded on an ABSOLUTE basis} \implies \text{Manager can be NET LONG or NET SHORT overall, depending on the prevailing trend}}$$

**Works best when**: an asset's own past returns are a **good predictor** of its future returns.

### 2. Cross-Sectional Momentum (CSM) — Less Common
$$\boxed{\text{CSM: RELATIVE performance within an asset class — LONG best performers, SHORT worst performers}}$$

**Key characteristic**: 
$$\boxed{\text{Generally results in NET ZERO / market-neutral positioning}}$$

**Works best when**: relative out/underperformance vs. peers is a **reliable predictor** of future relative performance.

**Constraint**: may be limited by the **number of available futures contracts** within a given asset class cross-section.

---

### Exhibit 9 — Managed Futures vs. Global Macro Comparison

**Risk Profile & Liquidity**:
- Both **highly liquid**, but managed futures shows more **crowding/execution slippage** as AUM has grown; global macro's **heterogeneity** means **less** crowding effect
- **Managed futures**: more **SYSTEMATIC** implementation
- **Global macro**: more **DISCRETIONARY** implementation
- Both show **positive right-tail skewness** during market stress (useful diversification) — though global macro's stress-period diversification is **more heterogeneous** in outcome
- **Both** are cyclical and relatively **volatile** (volatility positively related to strategy time horizon); macro managers can be **early/overly anticipatory**

**Leverage Usage**: 
$$\boxed{\text{HIGH — up to 6x-7x notional exposure via 10\%-20\% margin-to-equity}}$$
- Global macro managers' **active options use** adds further leverage AND **positive convexity**

**Benchmarks**:
- **Managed futures**: HFRX/HFRI Macro Systematic Indices; CISDM CTA Equal-Weighted Index; Lipper Managed Futures Index; Credit Suisse Managed Futures Index
- **Global macro**: HFRX/HFRI Macro Discretionary Indices; CISDM Hedge Fund Global Macro Index; Lipper Global Macro Index; Credit Suisse Global Macro Index

---

### Worked Example 9 — CSM vs. TSM in Precious Metals

**Setup**: Two funds trading gold, silver, platinum, palladium futures using **trailing 6-month returns**, volatility-weighted positions — one CSM, one TSM.

**CSM strategy mechanics**:
$$\boxed{\text{Daily: LONG top 50\% performers (2 metals), SHORT bottom 50\% (2 metals), by trailing 6-month risk-adjusted returns}}$$
- **Important nuance**: top/bottom 50% classification is **relative** — a "top" metal could still have a **negative absolute return** in a bear market (and vice versa for "bottom" performers in a bull market)
- Positions act as a **quasi-hedge** relative to each other → **overall sector exposure is offset**
- **Result**: **LOWER volatility** return profile than TSM

**TSM strategy mechanics**:
$$\boxed{\text{Daily: LONG metals with POSITIVE trailing 6-month returns, SHORT metals with NEGATIVE trailing 6-month returns}}$$
- **Important nuance**: could end up **long ALL FOUR** metals (if all trending up) or **short ALL FOUR** (if all trending down) simultaneously — no built-in offsetting
- **Result**: **NET LONG or NET SHORT** depending on how many markets show positive/negative absolute returns

**Comparative conclusion**:
$$\boxed{\text{CSM: typically NET ZERO exposure (normal periods)} \qquad \text{TSM: can be NET LONG or NET SHORT}}$$
$$\boxed{\text{TSM return profile: MORE VOLATILE and MORE SENSITIVE to strong directional/trending periods in the sector}}$$

---

### Exam Tips

- **TSM vs. CSM distinction is THE core testable concept of this section**: TSM = absolute/own-past-returns basis, can be net long or net short overall; CSM = relative/cross-sectional basis, tends toward net-zero exposure — Example 9 is an excellent template for a direct comparative exam question
- **Margin requirement figures are highly specific and testable**: futures margin 0.1%–10% vs. equity margin 50% — this stark contrast is the core explanation for futures' inherent capital efficiency/leverage
- **85%–90% government debt / 10%–15% futures collateral** structure is a good specific detail on how managed futures accounts are actually built
- **Positive skewness / "crisis alpha" characteristic** is the section's central portfolio-role argument — ties directly to the 2007–09 GFC example (short equities, long fixed income) as the canonical illustration
- **2011–2018 as a "bad decade" for managed futures** (low volatility, deteriorating trendiness) is a good real-world case study of when this strategy **underperforms** — pairs well with the "opposite" case of 2007-09 outperformance for a complete cyclicality picture
- **Zero-yield-boundary nuance** is subtle but testable: the changing nature of fixed-income trend-following (as rates rise off historic lows) means managed futures' **future correlation behavior vs. equities may differ** from its historical pattern — a good forward-looking conceptual point
- **Managed futures (systematic) vs. Global macro (discretionary) is a clean comparative dimension** — Exhibit 9's side-by-side comparison is likely testable, especially the systematic/discretionary distinction and the different benchmark index families
- **Position sizing rules** (higher volatility → smaller size; higher correlation to others → smaller size) are simple, testable risk management principles
- This section **completes the opportunistic category** (global macro + managed futures, per 4.01's roadmap) — expect the **next section** to transition into **specialist strategies** (volatility strategies, reinsurance), continuing the module's systematic coverage
