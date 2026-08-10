## Summary: Understanding ETFs — Costs, Tracking Error, and Trading (CFA Level II — Portfolio Management)

---

### Overview — Evaluating ETF Quality

**Key questions**: Does the fund deliver on its promise? Assessed via:
1. **Expense ratio**
2. **Index tracking/tracking error**
3. **Tax efficiency**
4. **Trading costs** (bid-ask spreads, premiums/discounts)

---

## Expense Ratios

**Why ETFs are cheaper than mutual funds:**
- No individual investor account-keeping (held via brokerages)
- No direct investor communication costs
- Index-based management avoids active research costs

**Typical fees (end of 2018, lowest-cost broad indexes):**
| Category | Expense Ratio |
|----------|----------------|
| US equities (cap-weighted) | 0.03% |
| Emerging market equities | 0.11% |
| US bonds | 0.04% |

> Average expense ratios by asset class are **skewed higher** by complex/leveraged funds — broad index ETFs are much cheaper than category averages suggest.

---

## Index Tracking and Tracking Error

**Tracking error**: Standard deviation of **daily** return differences between ETF and index, typically reported over 12 months.

$$\boxed{\text{Tracking error} = \sigma(\text{ETF return} - \text{Index return})}$$

**Key distinction**: Tracking error (variability) ≠ Tracking **difference** (directional under/overperformance) — both must be assessed together.

**Example — EEM (Emerging Markets ETF)**:
- Daily tracking error = 0.012%
- 12-month rolling median tracking difference = **0.79%** (underperformance)
- Expense ratio = **0.69%**
- Difference (0.10%) attributable to other tracking error sources beyond fees

---

### Seven Sources of Tracking Error

| Source | Mechanism |
|--------|-----------|
| **Fees and expenses** | Index assumes frictionless trading; fund fees create baseline underperformance |
| **Representative sampling/optimization** | Holding a subset (not full replication) of index constituents → deviation risk |
| **Depositary receipts/other ETFs** | ADRs/GDRs trade on different hours than local shares → valuation mismatches |
| **Index changes** | Fund trades rebalances at different times/prices than index methodology assumes |
| **Fund accounting practices** | Different currency-striking times (WM/Reuters 4pm GMT vs. local market close) |
| **Regulatory/tax requirements** | Foreign dividend withholding differs between fund's actual experience and index's assumed treatment |
| **Asset manager operations** | Securities lending income = "negative cost" (enhances performance vs. index) |

**Representative sampling deep dive (GMF example)**:
- GMF holds only 763 of 2,342 index constituents
- Median holding cap ($2.8B) vs. index median ($0.695B) → **systematically excludes small/mid-caps**
- Result: **4× wider tracking range** than fully-representative EEM (1.95% vs. 0.57%)

**Index change management**: ETF managers coordinate with APs to execute rebalances at **market-on-close** pricing to minimize this tracking source.

**Real-world example — Brazil tax**: Foreign investment tax charged to non-domestic ETF holders (but not reflected in index methodology) → caused **systematic fund underperformance** vs. index.

---

## Tax Issues

### Two Distinct Tax Considerations

1. **Capital gains distributions** (from fund holding activity)
2. **Taxes on sale** (when investor sells ETF shares)

---

### Why ETFs Are "Tax Fair"

**Mutual funds**: When one investor redeems, fund must **sell securities** → triggers capital gains → distributed to **ALL remaining shareholders** (even those who didn't sell).

**ETFs**: Investor sells to **another investor** in secondary market — **ETF manager isn't involved**, no portfolio trading required.

**In-kind AP redemptions**: Not a taxable event in most jurisdictions → **doesn't trigger capital gains realization** for the fund.

$$\boxed{\text{ETF investor selling shares does NOT create tax liability for OTHER shareholders}}$$

---

### Why ETFs Are "Tax Efficient"

**Mechanism**: Issuer selects **which tax lots** to deliver in redemption baskets.

**Strategy**: Deliver **lowest-cost-basis** (highest unrealized gain) securities → removes them from portfolio → **raises average cost basis** of remaining holdings → **minimizes embedded unrealized gains**.

---

### Taxes on Sale

- ETFs generally taxed **according to underlying holdings** (equity ETF → equity tax rules; bond ETF → bond tax rules)
- **Nuances exist**: e.g., US exchange-traded notes (commodity-linked) taxed differently than commodity futures-based ETFs

---

## ETF Trading Costs

### Trading Cost Components

**Bid-ask spread** ≈ sum of:
$$\text{± Creation/redemption fees} + \text{Underlying securities' bid-ask spread} + \text{Risk compensation to market makers} + \text{MM profit margin} - \text{Discount for likely offsetting order flow}$$

**Drivers of spread width:**
- Order flow (daily volume)
- Competition among market makers
- Underlying security liquidity/market structure
- Ease of hedging (futures availability)

---

### Bid-Ask Spreads by Category (Exhibit 8, Dec 2018)

| Category | Avg Spread | Median Spread |
|----------|-----------|-----------------|
| **US Equity** | **0.03%** | 0.16% |
| International Equity | 0.05% | 0.24% |
| **US Fixed Income** | **0.02%** | 0.14% |
| International Fixed Income | 0.06% | 0.24% |
| Commodities | 0.05% | 0.24% |
| **Leveraged** | **0.29%** | 0.32% |
| Inverse | 0.10% | 0.21% |
| Asset Allocation | 0.21% | 0.29% |
| Alternatives | 0.18% | 0.38% |

**Key patterns:**
- **US equity/fixed income** = tightest spreads (most liquid, hedgeable)
- **International** wider (time zone mismatches, market structure differences)
- **Leveraged/complex strategies** widest (complexity, less order flow)

---

### Case Study — Equity ETF Comparison (Exhibit 9)

| ETF | Median Volume | Avg Spread | Why |
|-----|---------------|------------|-----|
| **SPY** | $20.2B | 0.00% | Most liquid ETF globally; deep futures market for hedging |
| **IVV/VOO** | ~$0.7-1B | 0.01% | Same benchmark as SPY, still very liquid |
| **EUSA** | $0.94M | **0.12%** | Equal-weighted; NO futures hedging available; 600 constituents |
| **IWM** | $3.8B | 0.01% | Small-caps BUT active Russell 2000 futures market enables tight spreads |

> **Key insight**: Even small-cap ETFs (IWM) can have SPY-like tight spreads **IF** deep hedging instruments (futures) exist for the underlying index.

---

### Case Study — Fixed-Income ETF Comparison (Exhibit 10)

| ETF | Benchmark | Median Volume | Median Premium |
|-----|-----------|----------------|------------------|
| **TLT** | 20+ Year Treasury | $0.97B | 0.03% |
| **JNK** | High Yield | $0.41B | 0.10% |
| **HYG** | High Yield | $1.44B | **0.20%** |

**Key observation**: Bond ETFs show **larger maximum premium/discount ranges** than equity ETFs — because underlying bonds trade in OTC dealer markets (not continuously priced), the **ETF itself often provides better real-time price discovery** than the bond market.

---

## Premiums and Discounts to NAV

$$\boxed{\text{End-of-day premium/discount} = \frac{\text{ETF price} - \text{NAV}}{\text{NAV}}}$$

$$\boxed{\text{Intraday premium/discount} = \frac{\text{ETF price} - \text{iNAV}}{\text{iNAV}}}$$

**iNAV**: "Indicated NAV" — intraday fair value estimate published continuously based on the creation basket.

---

### Two Sources of Premium/Discount

#### 1. Timing Differences

**Cause**: Underlying securities close at **different times** than the ETF's exchange.

**Examples:**
- Foreign stocks: NAV based on **hours-old** closing prices from Asian/European markets
- Commodities: Futures stop trading (e.g., 3pm) but NAV struck at 4pm
- Bonds: No true "closing price" — pricing services estimate based on dealer bids

**Bond-specific issue**: Dealer bid prices (used for NAV) often reflect a **discount** for carrying risk → makes ETF appear to trade at a **premium** artificially. During market stress, stale bond pricing can cause the OPPOSITE — ETF appears at a discount when it's actually reflecting more current market information.

> **Key insight**: In these cases, the **liquid ETF price is often MORE accurate** than the "stale" NAV — the ETF functions as a **price discovery vehicle**.

#### 2. Stale Pricing

**Cause**: Infrequently-traded ETFs — last trade price may be **hours or days old** vs. current NAV.

**Effect**: If market moves significantly between last ETF trade and NAV calculation → apparent (but not real) premium/discount.

---

## Total Cost of Ownership — Framework

### Cost Factor Comparison

| Cost | Function of Holding Period? | Type | ETFs vs. Mutual Funds |
|------|------------------------------|------|--------------------------|
| Management fee | Yes | Explicit | ETFs often lower |
| Tracking error | Yes | Implicit | ETFs often lower than comparable index funds |
| Commissions | **No** | Explicit | Some free for ETFs |
| Bid-ask spread | **No** | Implicit | Unique to ETFs |
| Premium/discount | **No** | Implicit | Unique to ETFs |
| Portfolio turnover | Yes | Implicit | ETFs often lower |
| Taxable gains/losses | Yes | Explicit | ETFs often lower |
| Security lending | Yes | Implicit | ETFs often generate MORE (offsets costs) |

**Critical distinction**: 
- **One-time costs** (commission, spread, premium/discount) — impact **shrinks** with longer holding periods
- **Ongoing costs** (management fee, tracking error) — impact **grows** with longer holding periods

---

### Numerical Example — Trading Costs vs. Management Fees

**Setup**: $20,000 trade; commission = $10 (0.05% each way); bid-ask spread = 0.15%

**Round-trip trading cost:**
$$(0.05\% \times 2) + (0.5 \times 0.15\% \times 2) = 0.10\% + 0.15\% = \mathbf{0.25\%}$$

**Holding period cost analysis** (0.15% annual management fee):

| Holding Period | Trading Cost | Management Fee | **Total Cost** | Trading Cost % of Total |
|-----------------|---------------|-------------------|-----------------|----------------------------|
| **3 months** | 0.25% | 0.0375% | **0.29%** | **86%** |
| **12 months** | 0.25% | 0.15% | **0.40%** | **62.5%** |
| **3 years** | 0.25% | 0.45% | **0.70%** | **36%** |

> **Key insight**: For **short-term holds**, trading costs (commissions + spreads) **dominate** total cost. For **long-term holds**, the ongoing management fee becomes the **larger** component.

---

### Strategic Investor Implications

| Investor Type | Priority |
|----------------|----------|
| **Tactical/short-term traders** | Focus on **liquidity, tight spreads, low commissions** — may accept higher management fee for better trading characteristics |
| **Buy-and-hold/long-term investors** | Focus on **low management fee** — trading cost impact diminishes over time |

---

### Key Formula Reference Card

| Formula | Expression |
|---------|-----------|
| **Tracking error** | $\sigma(\text{ETF return} - \text{Index return})$ |
| **End-of-day premium/discount** | $(ETF_{price} - NAV)/NAV$ |
| **Intraday premium/discount** | $(ETF_{price} - iNAV)/iNAV$ |
| **Round-trip trading cost** | $2 \times \text{commission} + \text{bid-ask spread}$ |
| **Holding period cost** | Round-trip cost + (Holding period/12) × Annual mgmt fee |

---

### Exam Tips

- **Tracking error = standard deviation** of daily performance differences (variability measure); **tracking difference = mean/median** (directional bias)
- **Representative sampling/optimization increases tracking error range** vs. full replication — especially in market regime shifts
- **ETFs are "tax fair"**: selling investor's actions don't trigger tax liabilities for OTHER shareholders (unlike mutual funds)
- **ETFs are "tax efficient"**: in-kind redemptions allow issuers to strategically remove low-cost-basis shares, minimizing embedded gains
- **Trading costs dominate short holding periods; management fees dominate long holding periods** — critical distinction for cost analysis
- **Availability of futures/hedging instruments** dramatically tightens spreads even for otherwise illiquid underlying assets (IWM example)
- **Bond ETFs can show LARGER premium/discount swings** than equity ETFs because underlying bonds trade OTC without continuous pricing — the ETF often becomes the **price discovery vehicle**
- **Stale pricing** creates apparent premiums/discounts in infrequently-traded ETFs — not true mispricing, just timing lag
- **Security lending income** = negative cost (enhances ETF returns vs. index, since index doesn't include this benefit)