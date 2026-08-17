## Summary: 4.01 | Introduction and Classification of Hedge Fund Strategies (CFA Level II — Alternative Investments)

---

### Learning Outcome
Discuss how hedge fund strategies may be classified.

*(Note: this is a new module — Module 4: Hedge Fund Strategies, within Alternative Investments, distinct from the Portfolio Management modules covered so far.)*

---

### The Central Industry Debate — Are Hedge Fund Fees Worth It?

$$\boxed{\text{Core tradeoff: Do high hedge fund FEES generate sufficient ADDITIONAL ALPHA and DIVERSIFICATION to justify the cost?}}$$

**Arguments FOR hedge funds**:
- Access to **top investment talent** navigating a wider opportunity set
- Alpha in **down markets** is hard to source elsewhere

**Arguments AGAINST hedge funds**:
- High fees
- Complex offering memorandum documentation
- Lack of full transparency/attribution
- Higher structural/maintenance costs
- Longer commitment periods with **limited redemption**

---

### Strategy-Specific Risk Trade-offs

| Strategy Type | Key Trade-off |
|---|---|
| **Arbitrage-oriented** | Needs significant **leverage** → dangerous during market stress |
| **Long/short equity & event-driven** | Lower beta than long-only, but fees make it an **expensive embedded beta** |
| **Managed futures / global macro** | Diversification benefits, but **higher volatility** |
| **Relative value volatility / long volatility** | Manages tail risk, but **return drag** in normal markets |

$$\boxed{\text{Key distinction: some hedge fund strategies are true PORTFOLIO DIVERSIFIERS; others are simply RETURN ENHANCERS}}$$

**Leverage theme**: many strategies use margin, levered derivatives, and other tools to **amplify** asset base and returns.

---

### Liquid Alternatives ("Liquid Alts")

$$\boxed{\text{Liquid alts} = \text{mutual fund / closed-end fund / ETF vehicles offering hedge-fund-LIKE strategies with DAILY liquidity, transparency, and LOWER fees}}$$

**Key empirical finding**:
$$\boxed{\text{Liquid alts SIGNIFICANTLY UNDERPERFORM comparable-strategy traditional hedge funds}}$$

**Interpretation**: Suggests traditional hedge funds benefit from an **illiquidity premium** that **cannot be easily replicated** in a liquid, regulated fund structure. Liquid alts' regulatory constraints also **restrict** use of the riskiest/most illiquid strategies.

**Quantified underperformance** (stated later in the reading): traditional hedge funds outperform similar-strategy liquid alts by approximately **100–200 bps per year**, on average.

---

### Reading Roadmap

- **Section 1** (this section): regulatory/classification overview
- **Sections 2–12**: detailed coverage of each strategy category (equity, event-driven, relative value, opportunistic, specialist, multi-manager)
- **Section 13**: conditional factor model — unifying risk framework
- **Section 16**: contribution of each strategy to a traditional stock/bond portfolio's risk/return
- Concludes with a summary

---

### Key Regulatory/Structural Characteristics of Hedge Funds

**1. Legal/Regulatory Overview**:
- Typically limited to **sophisticated investors** (minimum income/net worth requirements)
- US: offered as **private placements**; registration requirement depends on **AUM**, but **all** US hedge funds face anti-fraud oversight regardless of size
- Offshore locales common: Cayman Islands, British Virgin Islands, Bermuda (tax-neutral, standalone corporate entities)
- **Liquid alts** represent the **biggest regulatory shift** in the past decade — mutual fund structures (US) / **UCITS** format (Europe/Asia), marketable to **retail investors**, offering **daily redemption**, and **prohibited from charging incentive fees** in most countries

**2. Flexible Mandates**: Low regulatory constraints → hedge funds face few limits on asset classes, risk exposures, collateral (governed instead by the fund's **offering memorandum**).

**3. Large Investment Universe**: Access to private securities, non-investment-grade debt, distressed securities, derivatives, and esoteric assets (e.g., life insurance contracts, music/film royalties).

**4. Aggressive Investment Styles**: Significant shorting and/or concentrated positions; exposure to credit, volatility, and liquidity risk premiums.

**5. Relatively Liberal Use of Leverage**: 
- Implemented via **prime broker security borrowing** or **derivatives-implied leverage**
- Sometimes leverage is **necessary** to make a strategy's returns meaningful
- Sometimes derivatives create high "**notional leverage**" while actually **reducing** portfolio risk (hedging)
- **Quant long/short equity**: typically **market neutral** but uses **high leverage** to make small statistical valuation edges meaningful

**6. Hedge Fund Liquidity Constraints**: Lock-up periods, liquidity gates, exit windows — gives managers **greater ability to hold positions** vs. vehicles allowing at-will withdrawal.
$$\boxed{\text{Empirical finding: privately-placed hedge funds outperform comparable liquid alts by} \sim 100\text{–}200 \text{ bps/year}}$$

**7. Relatively High Fee Structures**:
$$\boxed{\text{Traditional structure: Management fee} \geq 1\% \text{ AUM} + \text{Incentive fee} = 10\%\text{–}20\% \text{ of annual returns}}$$
- Incentive fee is designed to **align manager and investor interests**

---

### Fund Structure Classification

**Single-manager fund**: One PM/team invests in one strategy/style.

**Multi-manager fund** — two types:
1. **Multi-strategy fund**: Teams trade **multiple different strategies within the SAME fund**
2. **Fund-of-funds (FoF)**: FoF manager allocates capital to **separate underlying hedge funds** (which may themselves be single- or multi-manager)

---

### Strategy Classification Criteria

**General taxonomy dimensions**:
1. **Instruments traded** (equities, commodities, FX, convertible bonds)
2. **Trading philosophy** (systematic vs. discretionary)
3. **Type of risk assumed** (directional, event-driven, relative value)

### Major Data Vendor Classification Schemes

| Vendor | # Categories | Notable Categories |
|---|---|---|
| **HFR** | 7 main groupings | equity hedge, event driven, fund-of-funds, macro, relative value, risk parity, Blockchain |
| **Refinitiv Lipper** | 10 categories | dedicated short bias, equity market neutral, long/short equity hedge, event driven, convertible arbitrage, fixed-income arbitrage, global macro, managed futures, fund-of-funds, multi-strategy |
| **Morningstar CISDM** | Finer sub-categories | merger arbitrage, systematic futures, + FoF sub-splits (debt, equity, event driven, macro/systematic, multi-strategy, relative value) |
| **Eurekahedge** | 9 categories | arbitrage, CTA/managed futures, distressed debt, event driven, fixed income, long/short equities, macro, multi-strategy, relative value |
| **Credit Suisse** | 9 sub-indexes | convertible arbitrage, emerging markets, equity market neutral, event driven, fixed income, global macro, long/short equity, managed futures, multi-strategy |

### Index Methodology Nuances

**HFR's two index series**:
$$\boxed{\text{HFRX} = \text{equally weighted, includes OPEN and CLOSED funds}}$$
$$\boxed{\text{HFRI} = \text{tracks ONLY funds open to new investment}}$$

**Key finding**: HFRX **outperforms** HFRI, because **closed funds tend to be superior managers** (limited capacity closes the fund to new money) — but HFRX is **not replicable in real-time** by an actual investor, limiting its practical usefulness.

**Credit Suisse Hedge Fund Index**: 
$$\boxed{\text{Asset-WEIGHTED index} (\text{minimum \$50M AUM, 12-month track record, audited financials}) \implies \text{performance reflects LARGER funds (e.g., multi-strategy managers)}}$$

**Critical data limitation**:
$$\boxed{\text{LESS THAN 1\% of hedge fund managers self-report to ALL index providers} \implies \text{NO single index is all-encompassing}}$$

---

### This Reading's Chosen Classification — Six Categories

$$\boxed{
\begin{array}{l}
1.\ \text{EQUITY-related} — \text{long/short equity, dedicated short bias, equity market neutral} \\
2.\ \text{EVENT-DRIVEN} — \text{merger arbitrage, distressed securities} \\
3.\ \text{RELATIVE VALUE} — \text{fixed-income arbitrage, convertible bond arbitrage} \\
4.\ \text{OPPORTUNISTIC} — \text{global macro, managed futures} \\
5.\ \text{SPECIALIST} — \text{volatility strategies (options), reinsurance} \\
6.\ \text{MULTI-MANAGER} — \text{multi-strategy funds, funds-of-funds}
\end{array}
}$$

**Primary risk driver by category**:

| Category | Primary Risk Type |
|---|---|
| **Equity** | Equity-oriented risk |
| **Event-driven** | **Event risk** — unexpected corporate events (failed mergers, downgrades, bankruptcy) |
| **Relative value** | **Credit and liquidity risk** (valuation gaps often stem from credit/liquidity differences) |
| **Opportunistic** | Varies by opportunity set — top-down, multi-asset, macro-oriented |
| **Specialist** | Unique risks from niche sectors/esoteric instruments |
| **Multi-manager** | Diversified across combined strategies, dynamically reallocated |

---

### Exam Tips

- **The core fee-vs-alpha tradeoff debate** is a good conceptual anchor for essay questions on hedge fund suitability — know **both sides** (talent access/downside alpha vs. fees/illiquidity/complexity)
- **Liquid alts underperformance (~100–200 bps/year) is a specific, testable data point** — and the **illiquidity premium explanation** is the key conceptual takeaway: hedge fund returns partly compensate for illiquidity that liquid alts structurally cannot replicate
- **HFRX vs. HFRI distinction is a classic, testable nuance**: HFRX (equal-weighted, includes closed funds) outperforms HFRI (open-only) — but HFRX is **not investable in real time**. This index-construction subtlety is a strong candidate for a "which index best represents realistic investor returns" question
- **Six-category classification framework used by THIS reading** (equity, event-driven, relative value, opportunistic, specialist, multi-manager) is the **organizing structure for the rest of the module** — memorize this list along with each category's **primary risk driver**, since subsequent sections (4.02+) will dive into each one
- **Multi-strategy fund vs. fund-of-funds distinction**: multi-strategy = one fund, multiple strategies, one manager/team; FoF = capital allocated across **separate, independently-managed** underlying funds — a clean, testable structural distinction
- **Less than 1% cross-reporting across index providers** is a memorable, citable statistic if asked about hedge fund index/data limitations
- Given this starts a **brand new module** (Hedge Fund Strategies within Alternative Investments), expect **4.02+ to work through each of the six strategy categories in detail**, likely following the same category order listed in Exhibit 1