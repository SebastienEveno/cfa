## Summary: 4.08 | Relative Value Strategies: Convertible Bond Arbitrage (CFA Level II — Alternative Investments)

---

### Learning Outcome
Same LOS as 4.07 — completes the **relative value** category with convertible bond arbitrage.

---

### Convertible Bonds — Core Structure

$$\boxed{\text{Convertible bond} = \text{Straight DEBT} + \text{Long EQUITY CALL OPTION}}$$

**Key definitions**:
$$\boxed{\text{Conversion ratio} = \text{Number of shares the bond can be exchanged for}}$$
$$\boxed{\text{Conversion value} = \text{Current stock price} \times \text{Conversion ratio}}$$
$$\boxed{\text{Conversion price} = \frac{\text{Current convertible bond price}}{\text{Conversion ratio}}}$$

**Moneyness behavior**:

| Condition | Call Status | Bond Behavior |
|---|---|---|
| Conversion value **<<** bond price (share price **<<** conversion price) | **OTM** | Behaves more like a **straight bond** |
| Conversion value **>>** bond price (share price **>>** conversion price) | **ITM** | Behaves more like the **underlying equity** |

---

### Investment Characteristics

**Complexity drivers**: interest rate levels, corporate credit spreads, coupon/principal cash flows, and embedded option value (itself driven by dividends, stock price, and equity volatility).

**Structural features**:
$$\boxed{\text{Convertibles: issued SPORADICALLY, in SMALL sizes} \implies \text{THINLY TRADED, mostly NON-RATED, FEWER covenants than straight bonds}}$$

**The core arbitrage opportunity**:
$$\boxed{\text{Embedded options in convertibles trade at RELATIVELY LOW IMPLIED volatility vs. the underlying stock's HISTORICAL volatility}}$$

**Cyclicality of opportunity**: 
$$\boxed{\text{HIGHER new convertible issuance} \implies \text{CHEAPER pricing} \implies \text{MORE attractive arbitrage opportunities}}$$

---

### The Core Challenge — Accessing Cheap Optionality Requires Managing Other Risks

$$\boxed{\text{To extract the cheap embedded option, the manager must accept OR hedge: interest rate risk, issuer CREDIT risk, and MARKET (equity) risk}}$$

**Hedging tools**: interest rate derivatives, CDS, delta-adjusted short stock sales (or protective puts as a substitute).

**Trade-off**: hedging away risks can **erode** the attractiveness of the targeted position.

### Three Manager Styles

| Style | Approach |
|---|---|
| **Credit-oriented** | Does NOT hedge issuer credit risk — takes the position primarily from a **credit risk** perspective |
| **Directional/long-biased** | Hedges credit, but **underhedges** equity exposure — takes a bullish stock view |
| **Volatility-oriented** | **OVERHEDGES** equity risk (bearish tilt) → focused exposure to **increased volatility** |

---

### Exhibit 8 — Key Aspects

**Risk Profile & Liquidity**: 
- Managers extract cheap implied volatility via **delta hedging and gamma trading** (short equity hedges against long convertible)
- Two liquidity concerns: (1) inherently **less liquid** securities (small issue size, complexity); (2) **availability/cost to borrow** underlying equity for shorting

**Attractiveness**: 
$$\boxed{\text{WORKS BEST: high convertible issuance + MODERATE volatility + reasonable liquidity}}$$
$$\boxed{\text{WORKS POORLY: acute credit weakness + general illiquidity}}$$

**Leverage Usage**: 
$$\boxed{\text{HIGH — multiple trade "legs" (short sale, CDS, rate hedge) needed to extract a MODEST gain}}$$
$$\boxed{\text{Typical positioning: 300\% LONG vs. 200\% SHORT (lower short reflects delta-adjusted hedge ratio, not full notional)}}$$

**Benchmarks**: HFRX/HFRI FI-Convertible Arbitrage Indices; Lipper Convertible Arbitrage Index; CISDM Convertible Arbitrage Index; Credit Suisse Convertible Arbitrage Index.

**Structural note**: convertible arb is a **core strategy within many multi-strategy hedge funds**, alongside L/S equity, merger arb, and distressed strategies.

---

### Strategy Implementation — Classic Delta-Neutral Structure

$$\boxed{\text{Classic trade: BUY undervalued convertible bond + SHORT overvalued underlying stock, sized to be DELTA NEUTRAL}}$$

**Delta behavior**:
$$\boxed{\text{Deep ITM convertible (low conversion price vs. stock price)} \implies \delta \approx 1}$$
$$\boxed{\text{Deep OTM convertible (high conversion price vs. stock price)} \implies \delta \approx 0}$$

### The Gamma Rebalancing Mechanism — Key Profit Source

$$\boxed{\text{Convertible bond has POSITIVE GAMMA/convexity; the STOCK has ZERO gamma}}$$

**Consequence as stock price moves**:
$$\boxed{\text{Stock price RISES} \implies \text{Arbitrageur becomes SYNTHETICALLY LONGER equity exposure} \implies \text{Sell MORE stock to rebalance}}$$
$$\boxed{\text{Stock price FALLS} \implies \text{Arbitrageur becomes synthetically LESS long} \implies \text{Buy BACK stock to rebalance}}$$

**Profit condition**:
$$\boxed{\text{Profitable IF: sufficiently large stock price swings + proper periodic rebalancing}}$$
$$\boxed{\text{Specifically: profit occurs when REALIZED equity volatility} > \text{IMPLIED volatility of the convertible's embedded option (net of hedging costs)}}$$

*(This is the classic "long gamma, short-selling-into-strength/buying-into-weakness" volatility arbitrage logic.)*

---

### Three Key Risks to the Strategy

$$\boxed{
\begin{array}{l}
1.\ \text{SHORT SQUEEZE risk: shares must be borrowed; lender may recall at INOPPORTUNE times (rallies, low supply/high demand)} \\
2.\ \text{CREDIT RISK mismatch: spread widening/narrowing creates VALUE MISMATCH between stock and bond legs (if not hedged)} \\
3.\ \text{TIME DECAY / VOLATILITY COMPRESSION: embedded call loses value during LOW realized volatility periods or general implied vol compression}
\end{array}
}$$

**Best/worst environment summary**:
$$\boxed{\text{BEST: high issuance + moderate volatility + ample liquidity}}$$
$$\boxed{\text{WORST: extreme volatility (heightened credit risk + illiquidity)}}$$

**Structural left-tail risk**: hedge funds act as the **natural market makers** for convertibles, but face **significant redemption pressure** during crises → compounds unattractive left-tail behavior exactly when liquidity is most needed.

---

### Worked Example 7 — QXR Corporation Convertible Arbitrage

**Given data**:
- Convertible bond: price = 120% of par, 5.0% coupon, 1-year maturity, conversion ratio = 50, S&P rating BBB
- QXR share price: €30; P/E 30x (vs. industry 20x), P/BV 2.25x (vs. 1.5x), P/CF 15x (vs. 10x) — **all 50% above industry average**
- Additional: €2/share borrowing cost (paid to lender) for the short, stock pays €1 dividend

**Q1. Basic trade setup**:

$$\boxed{\text{Convertible bond price} = €1{,}000 \times \frac{120}{100} = €1{,}200}$$
$$\boxed{\text{Conversion price} = \frac{€1{,}200}{50} = €24} \quad \text{vs. current share price} = €30$$

**Conclusion**: QXR shares are **overvalued** (all valuation metrics 50% above industry average) **and** the convertible is **undervalued** (conversion price €24 << share price €30).

$$\boxed{\text{Trade: BUY the convertible bond + SHORT SELL the shares}}$$

**Q2. Demonstrate profit is identical across three price scenarios (€24, €30, €36) — ignoring additional info**:

$$\boxed{
\begin{array}{c|c|c|c}
\text{QXR Price} & \text{Long Stock (via bond)} & \text{Short Stock} & \text{Total Profit} \\
\hline
€24 & €0 & €6 & \boxed{€6} \\
€30 & €6 & €0 & \boxed{€6} \\
€36 & €12 & -€6 & \boxed{€6}
\end{array}
}$$

**Logic**: Buying the bond at €1,200 (= €24/share equivalent via conversion) and shorting at €30 locks in a **€6/share** profit **regardless of outcome** — the arbitrage profit comes from the **initial mispricing gap** ($30 − $24 = $6), which is captured whether the stock rises, falls, or stays flat.

**Q3. Adjusting for real-world costs (borrowing cost + dividend + coupon)**:

$$\boxed{\text{Outflows: €2 borrowing cost + €1 dividend owed to lender} = €3/\text{share}}$$
$$\boxed{\text{Inflow: convertible's 5\% coupon} = €50/\text{bond} \div 50 \text{ shares} = €1/\text{share equivalent}}$$

$$\boxed{\text{Net cost adjustment} = €3 - €1 = €2/\text{share reduction}}$$

$$\boxed{\text{Final realized profit} = €6 - €2 = €4/\text{share}}$$

---

### Exam Tips

- **Conversion price/value/ratio formulas are core, must-know calculations** — Example 7's Q1 is a direct template: convert bond price to per-share equivalent via the conversion ratio, then compare to market share price
- **The "identical profit across scenarios" result (Q2) is a beautiful illustration of true arbitrage** — memorize the logic: locking in the spread at initiation via simultaneous long convertible/short stock guarantees the profit **regardless of subsequent price direction**, as long as positions are held to conversion/expiry without rebalancing
- **BUT don't confuse this static example with the DYNAMIC delta/gamma hedging described in "Strategy Implementation"** — the real-world version involves **continuous rebalancing** (sell into strength, buy into weakness) to capture volatility, which is a **different** profit mechanism than the simple static arbitrage shown in Example 7. The exam may test whether you understand these are two related but distinct mechanics
- **Gamma/convexity mechanism is the section's most conceptually important point**: convertible has positive gamma, stock has zero gamma → this asymmetry is **precisely why** delta-hedged convertible arbitrage can profit from volatility itself, independent of direction — a strong candidate for "explain why this strategy profits from volatility" essay questions
- **Profit condition to memorize**: realized volatility > implied volatility (embedded in the convertible), net of hedging costs — this is the fundamental "long volatility" logic underlying the entire strategy
- **Real-world cost adjustments (Q3)**: borrowing costs, dividends owed to the lender, and coupon income all matter — remember these are **not just theoretical friction** but can materially reduce the achievable arbitrage profit (€6 → €4 in this example, a 33% reduction)
- **300% long / 200% short leverage figures** are specific and testable — remember the asymmetry reflects **delta-adjusted** hedge sizing, not a directional bet
- **Three key risk categories** (short squeeze, credit mismatch, volatility compression/time decay) are a good checklist for "what could go wrong" scenario questions
- This section **completes the relative value category** (fixed-income arb + convertible bond arb, per 4.01's roadmap) — expect the **next section** to transition into **opportunistic strategies** (global macro and managed futures), continuing the module's systematic category-by-category coverage