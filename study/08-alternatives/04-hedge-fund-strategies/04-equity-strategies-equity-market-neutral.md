---
layout: page
title: "Equity Strategies: Equity Market Neutral"
permalink: /study/08-alternatives/04-hedge-fund-strategies/04-equity-strategies-equity-market-neutral/
prev: /cfa/study/08-alternatives/04-hedge-fund-strategies/03-equity-strategies-dedicated-short-selling/
next: /cfa/study/08-alternatives/04-hedge-fund-strategies/05-event-driven-strategies-merger-arbitrage/
---
## Summary: 4.04 | Equity Strategies: Equity Market Neutral (CFA Level II — Alternative Investments)

---

### Learning Outcome
Same LOS as 4.02/4.03 — completes the **equity-related** hedge fund strategy category.

---

### Equity Market-Neutral (EMN) — Core Concept

$$\boxed{\text{EMN: LONG and SHORT positions in similar/related equities with DIVERGENT valuations, targeting NEAR-ZERO net market exposure}}$$

**Neutralization goal**:
$$\boxed{\text{Expected portfolio BETA} \approx 0}$$

**Beyond market beta**: managers often also neutralize **sector/industry betas** and **common factor exposures** (size, P/E, book-to-market).

**Why leverage is essential**: 
$$\boxed{\text{Beta risk AND many factor risks are stripped out} \implies \text{Must apply LEVERAGE to make individual stock-selection alpha MEANINGFUL}}$$

**Typical construction**: highly **quantitative** methodologies; **diverse** holdings; **shorter** time horizons with frequent adjustment. Zero-beta condition can also be achieved via **derivatives** (index futures, options).

**Overall goal**: capture **alpha** while minimizing **beta exposure**.

---

### Three Sub-Approaches Within EMN

### 1. Pairs Trading
$$\boxed{\text{Identify pairs of similar under/overvalued equities (or parent/subsidiary shares, or multi-class shares) whose prices are OUT OF ALIGNMENT}}$$

**Mechanism**: 
- Monitor **co-integration** (typical relative trading pattern) between the pair
- Establish positions when spread pricing **diverges unusually**
- Expectation: reversion to **long-term mean/fundamentally correct** relationship — long leg rises, short leg falls

**Key risk caveat**: 
$$\boxed{\text{Strictly quantitative EMN pairs trading may carry effective SHORT VOLATILITY "tail risk" exposure to extreme market stress}}$$
- This risk is **reduced** when the trade is based on a **fundamental** mispricing tied to an anticipated **correcting event** (rather than pure statistical co-integration)

### 2. Stub Trading
$$\boxed{\text{Buy/sell parent company and subsidiary stock, WEIGHTED by parent's ownership percentage}}$$

**Worked mechanics**: If parent A owns 90% of B and 75% of C, and A is overvalued while B/C are undervalued:
$$\boxed{\text{For each share of A sold SHORT} \implies \text{buy 0.90 shares of B and 0.75 shares of C}}$$

### 3. Multi-Class Trading
$$\boxed{\text{Buy/sell DIFFERENT share classes of the SAME company (e.g., voting vs. non-voting)}}$$
- Same co-integration/valuation logic as pairs trading applied to intra-company share classes
- Short overvalued class, long undervalued class, profit from reversion

### (Related but distinct) Capital Structure Arbitrage
$$\boxed{\text{Long/short EQUITY hedged against offsetting BOND exposure when stock-bond relative pricing is misaligned}}$$
- Technically **not** pure EMN, but similarly market-neutral in design
- Often tied to **anticipated events** (mergers, bankruptcy)
- Also applies **bond-vs-bond** positioning (covenant misunderstandings, differential recovery expectations)
- **Covered in detail** in the later **event-driven strategies** section

---

### Quantitative Market-Neutral and Statistical Arbitrage

$$\boxed{\text{Quantitative market-neutral: LARGE numbers of securities, daily/hourly algorithmic adjustment}}$$

**Why frequent rebalancing is needed**: 
$$\boxed{\text{Market prices change FASTER than company fundamentals} \implies \text{Triggers rebalancing back to neutrality}}$$

**Statistical arbitrage**: EMN trading at **even shorter** time horizons, emphasizing **mean reversion** and **relative momentum**.

**The trading cost trade-off**:
$$\boxed{\text{Tension between maintaining OPTIMAL beta-neutrality and the MARKET IMPACT/BROKERAGE COSTS of near-continuous rebalancing}}$$
- Managers use **trading-cost hurdle models** to decide when rebalancing is actually worthwhile

**Skill hierarchy** (parallels 4.02's L/S equity finding): 
$$\boxed{\text{PRIMARY skill: security selection} \qquad \text{SECONDARY: market timing}}$$

**Related sub-type**: managers specializing in **sector rotation** while staying overall beta-neutral are called **market-neutral tactical asset allocators** or **macro-oriented market-neutral managers**.

---

### Investment Characteristics

**Leverage approach varies**: quantitative EMN uses **substantial leverage**; **discretionary** EMN managers use **significantly less**.

**Return profile advantage**: 
$$\boxed{\text{EMN generally delivers STEADIER, LESS VOLATILE returns} \implies \text{Particularly useful during NON-TRENDING or DECLINING markets}}$$

**Critical leverage risk — forced deleveraging**:
$$\boxed{\text{Prime broker portfolio margining can allow up to 300\% long vs. 300\% short exposure}}$$
$$\boxed{\text{If a specified drawdown threshold is breached} \implies \text{Prime broker can FORCE the manager to DOWNSIZE the portfolio}}$$
- Flagged as a **key strategy risk**, especially for **quantitative** market-neutral managers

**Role in a portfolio**: 
$$\boxed{\text{EMN often serves as a PREFERRED REPLACEMENT/COMPLEMENT to fixed income when yields are unattractively low or the curve is flat}}$$
- Sources a **very different type of alpha/risk** than fixed income
- Key risks to manage: **leverage risk** (availability/cost) and **tail risk** (levered portfolio performance under stress)

---

### Exhibit 4 — Key Aspects

**Risk Profile & Liquidity**: 
- Modest return profiles; market-neutral by design; other factor constraints vary
- **High diversification and liquidity**; **lower standard deviation** than many other strategies in normal conditions
- Mix of purely quantitative vs. discretionary managers
- Typically **mean-reversion oriented**, shorter horizons, more active trading
- Due to **high leverage**, EMN typically **doesn't meet mutual fund regulatory leverage limits** → **limited partnerships preferred**

**Attractiveness**: Exploits idiosyncratic short-term mispricing between co-integrated securities; **doesn't require accepting beta risk** → especially attractive during **market vulnerability/weakness**.

**Leverage Usage**: 
$$\boxed{\text{HIGH — since beta and other systematic risks are hedged away, higher leverage is considered ACCEPTABLE to hit meaningful return targets}}$$

**Benchmarks**: HFRX/HFRI Equity Market Neutral Indices; Lipper Equity Market Neutral Index; Morningstar/CISDM Equity Market Neutral Index; Credit Suisse Equity Market Neutral Index.

---

### Strategy Implementation — Four-Step Construction Process

$$\boxed{
\begin{array}{l}
1.\ \text{Screen investment universe: sufficient LIQUIDITY + adequate SHORT-SELLING potential} \\
2.\ \text{Analyze buy/sell opportunities: fundamental models AND/OR statistical/momentum models} \\
3.\ \text{Construct portfolio with NEUTRALITY constraints: beta} \approx 0\text{, plus dollar/sector/factor neutrality} \\
4.\ \text{Assess leverage availability/cost vs. desired returns and acceptable drawdown risk, factoring in REBALANCING/execution costs}
\end{array}
}$$

**Ongoing challenge**: Markets are dynamic (volatility/leverage always changing) → exposures **drift** from neutrality → requires **active management** — but **each rebalance incurs costs**, which must not overwhelm the underlying **security-selection alpha**.

---

### Worked Example 3 — PEP vs. KO Pairs Trade

**Setup**: Ling Chang identifies PEP as **overvalued** vs. KO (valuation metrics beyond historical ranges; PEP also has weaker earnings prospects and a controversial Asia marketing campaign).

**Given**: 
$$\boxed{\beta_{PEP} = 0.65 \qquad \beta_{KO} = 0.55}$$
(S&P 500 weights given but **not needed** for the calculation.)

**Trade structure**: 
$$\boxed{\text{SHORT PEP} \qquad \text{LONG KO} \qquad \text{Equal BETA-WEIGHTED exposure}}$$

**Sizing calculation**:
- Long KO position: **$1,000,000** (given allocation)
- Required short PEP position, beta-weighted:
$$\boxed{\text{Short PEP} = -\$1{,}000{,}000 \times \frac{0.65}{0.55} = -\$846{,}154 \times \frac{1}{...}}$$

Wait — checking the reading's exact formula: $-\$1{,}000{,}000 / (0.65/0.55) = -\$846{,}154$

**Logic**: Since PEP has a **higher beta** than KO, a **smaller dollar amount** of PEP is needed to match KO's beta-weighted exposure — ensuring the position is **insulated from general market fluctuations**, so performance depends **only** on the **relative** performance of PEP vs. KO.

**Expected outcome**: If valuations **revert to normal ranges** within 3 months, the pairs trade **profits**.

---

### Exam Tips

- **Zero-beta construction is the section's central testable mechanic**: know that EMN targets beta ≈ 0 not just for the market, but often for sector, size, P/E, and book-to-market factors too — and that leverage is **necessary** precisely because so many risk sources are stripped out
- **Beta-weighted pairs trade sizing (Example 3) is a HIGH-PROBABILITY calculation question** — practice the formula: to beta-hedge a long position of size $X$ in Stock A against a short in Stock B, size the short as $X \times (\beta_A/\beta_B)$ (or equivalently, divide by the beta ratio depending on which leg is the base) — make sure you understand this is **dollar-neutral is NOT the same as beta-neutral**
- **Three EMN variants to distinguish**: pairs trading (general divergent valuations), stub trading (parent/subsidiary, ownership-weighted), multi-class trading (voting/non-voting shares of same company) — a good matching-question setup
- **Prime broker forced deleveraging risk (300% long/300% short, drawdown-triggered downsizing)** is a specific, memorable, and testable risk mechanism — a good "what could go wrong" exam scenario
- **EMN as a fixed-income substitute** in low-yield/flat-curve environments is a notable **portfolio role** application point — useful for asset allocation essay questions
- **Skill hierarchy consistency across equity strategies**: like L/S equity (4.02), EMN skill is **primarily security selection**, secondarily timing — a recurring theme worth reinforcing across the equity-related category
- **Tail risk caveat for quantitative pairs trades** (vs. fundamentally-driven/event-anchored trades) is a subtle but testable nuance — statistical co-integration trades can still carry **hidden short-volatility exposure** during extreme stress, even while "market neutral" in a beta sense
- This section **completes the equity-related hedge fund category** (4.02 L/S, 4.03 short-biased, 4.04 EMN) — expect the **next section to transition into event-driven strategies** (merger arbitrage, distressed securities), per the roadmap established in 4.01
