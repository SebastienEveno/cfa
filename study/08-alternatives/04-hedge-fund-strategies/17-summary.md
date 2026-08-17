---
layout: page
title: "Summary — Module 4: Hedge Fund Strategies"
permalink: /study/08-alternatives/04-hedge-fund-strategies/17-summary/
prev: /cfa/study/08-alternatives/04-hedge-fund-strategies/16-portfolio-contribution-hedge-fund-strategies/
---
## Summary: 4.17 | Summary — Module 4: Hedge Fund Strategies (CFA Level II — Alternative Investments)

---

This is the **capstone summary page** for Module 4, consolidating everything covered from 4.01 through 4.16. Below is the consolidated recap.

---

### Seven Characteristics Distinguishing Hedge Funds from Traditional Investments

$$\boxed{
\begin{array}{l}
1.\ \text{LOWER legal/regulatory constraints} \\
2.\ \text{FLEXIBLE mandates (shorting, derivatives permitted)} \\
3.\ \text{LARGER investment universe} \\
4.\ \text{AGGRESSIVE styles — concentrated positions, credit/volatility/liquidity risk premium exposure} \\
5.\ \text{Relatively LIBERAL leverage use} \\
6.\ \text{LIQUIDITY constraints (lock-ups, gates)} \\
7.\ \text{Relatively HIGH fee structures (management + incentive fees)}
\end{array}
}$$

---

### Classification Framework

$$\boxed{\text{Classified by: instruments traded + trading philosophy + type of risk assumed}}$$

**Leading index providers**: HFR, Lipper TASS, Morningstar/CISDM, Eurekahedge, Credit Suisse — **heterogeneous** classifications; **no single index is all-encompassing**.

**This reading's six categories**: equity-related, event-driven, relative value, opportunistic, specialist, multi-manager.

---

### Category-by-Category Recap

**1. Equity L/S**: alpha via skillful global stock picking (value/growth, cap size, discretionary/quant, sector specialization). Liquid, generally **net long**, gross exposure **70%–90% long vs. 20%–50% short**. Target: **long-only-equivalent returns, ~50% lower standard deviation**. More quant/market-neutral → more leverage.

**2. Dedicated short / short-biased**: dedicated short = **60%–120% short** at all times; short-biased = **~30%–60% net short**. Single-stock focus, **little leverage**. Lower return goals, but **negative correlation benefit**; more volatile than L/S equity.

**3. Equity market-neutral (EMN)**: exploits idiosyncratic short-term mispricing; **no beta risk acceptance needed** → attractive in market weakness. Mostly **quantitative** managers. **High leverage** (since beta risks are hedged away). Modest returns, high diversification/liquidity, lower SD (mean-reversion oriented).

**4. Merger arbitrage**: liquid; idiosyncratic single-deal gains; occasional shocks on deal failure. **Cross-border** deals need two approvals; **vertical integration** faces antitrust scrutiny → wider spreads for both. Payoff profile: **insurance-like + short put**; high Sharpe, but **left-tail risk**. **Moderate-to-high leverage**.

**5. Distressed securities**: firms in/near bankruptcy or financial stress; managers seek mispriced securities pre/during/post-bankruptcy. **Liquidation**: sequential payout by priority (senior secured → junior secured → unsecured → convertible → preferred → common). **Reorganization**: capital structure renegotiated; debt may convert to new equity (existing shares canceled). Usually **long-biased**, **high illiquidity**, **moderate-to-low leverage**. Returns: **higher end** of event-driven, but **discrete and cyclical**.

**6. Fixed-income arbitrage**: attractiveness driven by security correlations, yield spread pickup, and market diversity/complexity. **US govt yield curve/carry trades**: very liquid, **fewest** mispricing opportunities; liquidity **worsens** in other sovereign, mortgage-related, and corporate debt markets. **High leverage**, but **availability diminishes with complexity**.

**7. Convertible bond arbitrage**: extracts underpriced implied volatility from long convertibles via **delta hedging + gamma trading** against short equity. Works best: **high issuance + moderate volatility + reasonable liquidity**. Liquidity issues from small issue sizes/complexity + equity borrow costs. Typical positioning: **300% long vs. 200% short** (short size reflects delta-adjusted hedge ratio).

**8. Global macro vs. Managed futures**: both trade across similar market sets but differently.
$$\boxed{\text{Managed futures: more SYSTEMATIC} \qquad \text{Global macro: more DISCRETIONARY}}$$
Both **highly liquid, high leverage**. Managed futures: **positive right-tail skewness** in stress. Global macro: similar stress-period diversification, but **more heterogeneous** outcomes.

**9. Specialist — Volatility trading**: captures relative timing/strike opportunities via **term structure, smile, and skew** changes; uses spreads (bull/bear, straddles, calendar spreads), exchange-listed/OTC options, **VIX futures, volatility swaps, variance swaps**.

**10. Specialist — Life settlements**: buys pools of life insurance policies via brokers, becomes beneficiary. Target policy traits: **(1) low surrender value offered, (2) low ongoing premiums, (3) high probability of EARLIER-than-predicted death**.

**11. Multi-manager (FoF vs. Multi-strategy)**: both offer steady, diversified, low-volatility returns.
$$\boxed{\text{Multi-strategy: OUTPERFORMS FoF, but with MORE variance (higher leverage)}}$$
$$\boxed{\text{Multi-strategy: FASTER tactical allocation + BETTER fee structure (netting risk partly absorbed by GP), but HIGHER operational risk}}$$
$$\boxed{\text{FoF: MORE diverse strategy mix, but LESS transparency, SLOWER reaction, and netting risk falls on the FoF INVESTOR}}$$

---

### Conditional Factor Model Recap

$$\boxed{\text{Conditional linear factor models uncover hedge fund risk exposures across NORMAL and CRISIS/STRESS periods}}$$

**Four factors used in this reading's final model**: **equity risk, credit risk, currency risk, volatility risk** (recall: BOND and CMDTY were dropped via stepwise regression for multi-collinearity, per 4.13).

---

### Portfolio Contribution Recap

$$\boxed{\text{Adding a 20\% hedge fund strategy allocation to a 60/40 portfolio (}\to\text{48/32/20)} \implies \text{TYPICALLY: } \downarrow \text{SD}, \uparrow \text{Sharpe}, \uparrow \text{Sortino}, \text{(often)} \downarrow \text{Max Drawdown}}$$

$$\boxed{\text{Conclusion: Hedge funds act as BOTH risk-adjusted RETURN ENHANCERS and DIVERSIFIERS for traditional stock/bond portfolios}}$$

---

### Exam Tips — Module 4 Consolidated Review

- **This summary page is your single best consolidated review tool for Module 4** — every strategy's key exposure range, leverage level, and return-profile characterization is independently testable, and cross-strategy comparison questions (e.g., "rank these strategies by typical leverage usage") are likely
- **Build yourself a comparison table across all strategies** on these dimensions: typical net exposure range, leverage level (low/moderate/high), primary risk driver, and typical liquidity — this table format captures nearly everything tested across 4.02–4.12
- **The conditional factor model's four final factors (equity, credit, currency, volatility)** and their normal-vs-crisis sign-flipping behavior (from 4.13's Exhibit 12) remain the most conceptually rich, testable material in the reading — revisit that framework specifically
- **Systematic futures, equity market-neutral, and global macro's consistent outperformance across ALL portfolio-contribution metrics** (4.16) is the module's key applied conclusion — expect this pattern to be directly tested in a portfolio construction/suitability scenario, similar to Example 15
- **FoF vs. multi-strategy trade-offs** (speed/transparency/fees vs. diversity/lower leverage) are tested repeatedly across 4.12, 4.15, and 4.16 — this comparison is clearly a **high-priority exam topic**
- **Leverage figures worth memorizing as a set**: L/S equity (variable, quant-driven), dedicated short (little), EMN (high), merger arb (3x-5x), distressed (1.2x-1.7x NAV), fixed-income arb (4x-5x, up to 12x-15x in multi-strategy), convertible arb (300%/200%), global macro/managed futures (6x-7x via 15-25%/10-20% margin)
- Given this is the **module summary**, expect the course to now transition to a **new module or reading** within Alternative Investments — worth checking the syllabus for what comes next in the CFA-26-11-LII-A sequence
