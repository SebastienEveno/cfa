## Summary: 4.07 | Relative Value Strategies: Fixed-Income Arbitrage (CFA Level II — Alternative Investments)

---

### Learning Outcome
Discuss investment characteristics, strategy implementation, and role in a portfolio of **relative value** hedge fund strategies.

*(New category — transitions from event-driven to relative value strategies.)*

---

### Relative Value Strategies — Overview

**Recap link**: Equity market-neutral (4.04) was already introduced as **one type** of relative value strategy. This section covers **fixed-income focused** relative value approaches.

**Common cause of valuation differences**: changes in **credit quality, liquidity, and implied volatility** (for embedded-option securities).

$$\boxed{\text{Normal markets: relative value strategies earn CREDIT, LIQUIDITY, or VOLATILITY premiums over time}}$$
$$\boxed{\text{Crisis periods: excessive leverage + deteriorating credit + illiquidity + volatility spikes} \implies \text{LOSSES}}$$

**Most common relative value strategies**: fixed-income arbitrage and convertible bond arbitrage.

---

## Fixed-Income Arbitrage

$$\boxed{\text{Exploit pricing inefficiencies via LONG and SHORT positions across debt securities: sovereign/corporate bonds, bank loans, consumer debt (credit card, student loans, MBS)}}$$

**Sources of mispricing**: variations in **duration, credit quality, liquidity, and optionality**.

---

### Investment Characteristics

**Basic mechanics**: 
$$\boxed{\text{Buy relatively UNDERVALUED securities + short relatively OVERVALUED securities} \implies \text{expect MEAN REVERSION within the investment horizon}}$$

**Sources of valuation divergence**: credit quality (IG vs. non-IG), liquidity (on-the-run vs. off-the-run), volatility expectations (embedded options), issue size differences.

**Carry component**: strategies often also target **net positive relative carry**, sometimes exploiting **yield curve kinks** or expected curve shape shifts.

**Related but riskier variant**:
$$\boxed{\text{When positioning accepts RELATIVE CREDIT RISK across different issuers} \implies \text{morphs into L/S CREDIT trading — naturally MORE VOLATILE than pure sovereign-debt pricing exploitation}}$$

---

### Interest Rate Risk Management

$$\boxed{\text{Default approach: DURATION-NEUTRAL positioning (unless the trade specifically targets yield curve exposure)}}$$

**Limitation**: duration neutrality only hedges against **small** yield shifts.

**For large/non-parallel moves** (steepening/flattening): use **fixed-income derivatives** — futures, forwards, swaps, **swaptions** (options on a swap).

**Additional risk layers by security type**:
- **Government debt**: sovereign risk (+ potentially currency risk)
- **Asset-backed/mortgage-backed securities**: credit risk AND **prepayment risk**

---

### Leverage — Why So Much Is Used

$$\boxed{\text{Fixed-income mispricings are often SMALL, especially in developed markets} \implies \text{but correlations across securities are typically HIGH} \implies \text{substantial LEVERAGE is necessary/acceptable to exploit them}}$$

**Typical leverage ratios**:
$$\boxed{\text{Standalone fixed-income arbitrage: 4x to 5x (assets/equity)}}$$
$$\boxed{\text{Within multi-strategy funds (as a portion of total risk): can reach 12x to 15x}}$$

**Warning**: leverage **magnifies** all embedded risks, especially during market stress.

---

### Structured Products — An Added Layer of Complexity

$$\boxed{\text{Financial engineers create TRANCHED structured products (especially residential mortgage-related)} \implies \text{isolate specific credit/prepayment risk slices}}$$

**Example structures**: seniority-tranched credit; interest-only vs. principal-only payment splits.

**Key stress-period risks for mortgage-related relative value**:
1. **Negative convexity** of many MBS/structured products
2. **Default rates exceeding expectations** → high volatility
3. **Hedge fund balance sheet leverage**
4. **Investor redemption pressure**

---

### Liquidity Landscape

$$\boxed{\text{Fixed-income markets are LARGER in scale than equity markets, with MANY security types}}$$

**Liquidity gradient**:
$$\boxed{\text{On-the-run govt securities: HIGH liquidity} \implies \text{Other sovereign debt, mortgage-related, corporate debt: PROGRESSIVELY LOWER liquidity}}$$

**Off-the-run securities**: trade **only occasionally**, creating **price opacity** — this **creates** arbitrage opportunity but **also** positioning/liquidity risk. Municipal bond and corporate debt markets flagged as **particularly thin**.

---

### Exhibit 7 — Key Aspects

**Risk Profile & Liquidity**: 
- Risk/return derives from **high correlations** across securities, **yield spread pickup**, and the **sheer diversity** of debt instruments/markets
- Structured products add **mispricing opportunity** via complexity
- **US government yield curve/carry trades**: **very liquid** but **FEWEST** mispricing opportunities
- Liquidity **decreases** progressively: other sovereign markets → mortgage-related → corporate debt (worst)

**Attractiveness**: function of security correlations, available yield spread, and market diversity.

**Leverage Usage**: 
$$\boxed{\text{HIGH — but leverage AVAILABILITY diminishes with product COMPLEXITY}}$$
- Achieved via **collateralized repurchase agreements** (repos) with prime brokers
- **"Haircuts"**: prime broker's cushion against volatility/illiquidity if collateral must be liquidated

**Benchmarks**: HFRX/HFRI Fixed Income Relative Value Indices; Lipper Fixed Income Arbitrage Index; CISDM Debt Arbitrage Index; Credit Suisse Fixed Income Arbitrage Index (with more granular sub-indexes for sovereign, credit, and asset-backed trading available from HFRX/HFRI).

---

### Strategy Implementation — Two Main Trade Types

### 1. Yield Curve Trades (Calendar Spread Strategy)
$$\boxed{\text{Long and short positions at DIFFERENT points on the yield curve} \implies \text{profit from curve FLATTENING or STEEPENING}}$$

**Two variants**:
- **Same issuer**: credit/liquidity risk largely hedged → **interest rate risk** is the main concern
- **Different issuers** (same industry/sector): mispricing driven by **credit quality, liquidity, volatility, issue-specific** differences

**Profit mechanism**: mean reversion — longs rise, shorts fall, as mispricing corrects.

### 2. Carry Trades
$$\boxed{\text{LONG higher-yielding security + SHORT lower-yielding security} \implies \text{capture POSITIVE CARRY + profit as mispricing reverts}}$$

**Classic example**: 
$$\boxed{\text{BUY lower-liquidity, off-the-run government securities} + \text{SHORT higher-liquidity, duration-matched, on-the-run government securities}}$$
- Interest rate and credit risk **hedged** (same duration/credit exposure)
- **Key remaining risk: LIQUIDITY RISK**
- Normal pattern: on-the-run bonds get **more expensive** initially, then **cheapen** (converge toward off-the-run) as newer issues replace them as the current on-the-run

**Payoff profile**: 
$$\boxed{\text{Resembles a SHORT PUT OPTION — positive carry + spread-narrowing profit IF expected, but NEGATIVE payoff if spread unexpectedly WIDENS}}$$

**Leverage danger**: mispricings are typically small → **substantial leverage** used → a **temporary negative price shock** can trigger **margin calls**, forcing losses at the worst time.

---

### Worked Example 6 — Treasuries vs. TIPS + Inflation Swap Arbitrage

**Background setup**: 
- **TIPS**: pay real yield coupon + accrue inflation into principal (paid at maturity) → **inflation-protected**
- **Same-maturity TIPS and Treasuries** should trade at similar yields **after adjusting for inflation** (Fisher-type relationship)
- **OTC inflation swaps** can "lock in" the TIPS' inflation-linked component → effectively **synthesize a Treasury-like fixed payment stream**
- **Normal-period phenomenon**: inflation-hedged TIPS (TIPS + offsetting inflation swap) typically yield **25–35 bps MORE** than comparable Treasuries — attributed to investors' **distrust of inflation measurement**

**November 2XXX crisis scenario**: 
$$\boxed{\text{TIPS yields (inflation-adjusted) substantially HIGHER than Treasuries; inflation swaps priced as if OUTRIGHT DEFLATION was imminent}}$$

**Three-leg trade structure**:

$$\boxed{
\begin{array}{l|c|c|c}
\text{Leg} & \text{Fixed Rate} & \text{Inflation} & \text{Cost} \\
\hline
\text{Buy 5yr TIPS} & \text{Receive } 3.74\% & \text{Receive inflation} & -\$1{,}000{,}000 \\
\text{Short 5yr Treasuries} & \text{Pay } 2.56\% & — & +\$1{,}000{,}000 \\
\text{Inflation swap} & \text{Receive } 1.36\% & \text{Pay inflation} & 0 \\
\hline
\textbf{NET} & \textbf{Receive } 2.54\% & \text{— (offsets)} & \boxed{0}
\end{array}
}$$

**Q: Is this a risk-free arbitrage, and what execution risks remain?**

$$\boxed{\text{Answer: Near risk-free arbitrage IS possible during extreme market stress (flight-to-quality/deflation fear periods), but MEANINGFUL operational risks remain}}$$

**Key risks identified**:
1. **Repo market access needed** — must borrow Treasuries to short them via the **interbank repurchase market**
2. **Bank credit approval needed** — for the inflation swap market access
3. **Credit lines SHRINK during stress** — precisely when this opportunity appears, hedge fund credit access typically **contracts**, not expands (a cruel irony)
4. **"Losing the borrow" risk** — the Treasury lender could **recall** the securities, disrupting the short leg
5. **Speed matters**: such **extreme dislocations rarely persist long** — must act quickly to capture the 2.54% profit

---

### Exam Tips

- **Leverage ratio figures are highly specific and testable**: standalone fixed-income arb = 4x–5x; within multi-strategy funds = up to 12x–15x — know both figures and **why** multi-strategy contexts allow higher leverage (fixed-income arb is just **one risk source** among many, diversified within the larger fund)
- **The classic on-the-run/off-the-run carry trade is a canonical, must-know example**: duration and credit are **hedged** (matched), leaving **liquidity risk** as the sole residual risk — a strong template for "identify the residual risk in this hedged trade" questions
- **"Short put option" payoff analogy** parallels merger arbitrage's framing (4.05) — recognize this as a **recurring pattern across relative value AND event-driven strategies**: steady carry/premium collection punctuated by rare, sharp negative tail events
- **Structured product risks (negative convexity, default rate surprises, leverage, redemption pressure)** are a good checklist for MBS/ABS-related relative value risk questions — this connects to broader fixed-income curriculum content on MBS negative convexity
- **Example 6's TIPS/Treasury/inflation swap trade is an excellent, sophisticated calculation and conceptual template**: practice the **three-leg netting logic** (receive fixed − pay fixed + inflation pass-through cancels) to arrive at the clean 2.54% spread
- **Critical exam insight from Example 6**: "risk-free" arbitrage opportunities that appear during crises are **often NOT truly executable risk-free** due to **operational constraints** — specifically **shrinking credit lines exactly when the opportunity is most attractive**, and **borrow recall risk**. This is a nuanced, important real-world lesson distinguishing **theoretical** arbitrage from **practically executable** arbitrage
- **Liquidity gradient** (on-the-run govt > other sovereign > mortgage-related > corporate, with munis/corporates flagged as especially thin) is a good memorization checklist if asked to rank fixed-income market liquidity
- This section begins the **relative value category** (per 4.01's roadmap) — expect the **next section** to cover **convertible bond arbitrage**, the other named relative value strategy, completing this category before the reading moves to **opportunistic strategies** (global macro, managed futures)