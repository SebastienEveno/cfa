---
layout: page
title: "ETF Mechanics — Creation/Redemption Process"
permalink: /study/09-portfolio-management/03-ETFs/02-etf-mechanics/
next: /cfa/study/09-portfolio-management/03-ETFs/03-understanding-etfs/
---
## Summary: ETF Mechanics — Creation/Redemption Process (CFA Level II — Portfolio Management)

---

### ETFs vs. Mutual Funds — Key Structural Difference

| Feature | Mutual Funds | ETFs |
|---------|--------------|------|
| **Trading timing** | End of day only | **Intraday** (like a stock) |
| **Transaction type** | Cash-for-shares (with fund manager) | **In-kind** shares-for-shares swap |
| **Price** | Closing NAV | Market price (near NAV via arbitrage) |
| **Creation size** | Fixed via IPO/ongoing sales | **Continuous** creation/redemption |

---

### Two Interrelated Markets

| Market | Participants | Transaction Type |
|--------|--------------|-------------------|
| **Primary market** | **Authorized Participants (APs)** ↔ ETF issuer | In-kind creation/redemption |
| **Secondary market** | Regular investors on exchanges | Standard buy/sell like stocks |

> **Key insight**: Regular investors **only** interact with the secondary market — they never transact directly with the ETF issuer.

---

### Authorized Participants (APs) — The Key Players

**Who they are**: Large broker/dealers, typically market makers, **specially authorized** by the ETF issuer.

**Their unique role**: **Only** entities that can create or redeem ETF shares directly with the issuer.

---

### The Creation Process (Step-by-Step)

```
Step 1: ETF issuer publishes daily "creation basket"
         (list of required securities in specific quantities)
Step 2: AP acquires the securities in the creation basket
         (via public market purchases or existing inventory)
Step 3: AP delivers the basket to the ETF issuer
Step 4: Issuer delivers ETF shares in exchange (equal value, in-kind)
Step 5: Transaction settles after market close
```

**Key unit**: **Creation unit** — typically **50,000 ETF shares** (range: 10,000–600,000 depending on the fund).

**Critical feature**: Pricing is **irrelevant to the exchange itself** — it's a pure in-kind swap. If the AP delivers 100 shares of stock X, that's what matters, regardless of the price paid or the ETF's closing NAV.

---

### The Redemption Process (Reverse)

```
AP presents block of ETF shares to issuer
       ↓
Issuer delivers basket of underlying securities ("redemption basket")
       ↓
AP can sell these securities in the open market
```

**Note**: Redemption basket may **differ** from creation basket — issuers can strategically select which securities to deliver (tax, compliance, or investment reasons).

---

### Why APs Do This — The Arbitrage Incentive

$$\boxed{\text{ETF price} \neq \text{Fair value of underlying basket}} \implies \text{Arbitrage opportunity}$$

| Scenario | ETF Price vs. Fair Value | AP Action |
|----------|---------------------------|-----------|
| **ETF at PREMIUM** | ETF price > basket fair value | **Sell ETF shares** + Buy basket securities |
| **ETF at DISCOUNT** | ETF price < basket fair value | **Buy ETF shares** + Sell basket securities |

---

### Worked Example 1 — ETF Trading at Premium (Exhibit 1)

**Setup**: ETF market price = $25.10; Fair value (based on basket) = $25.00

**AP Action:**
1. Buy the basket of securities at $25.00
2. Simultaneously sell ETF shares at $25.10
3. **Profit = $0.10/share**

**Market impact**: 
- Selling ETF shares → **downward pressure** on ETF price
- Buying basket securities → **upward pressure** on underlying stock prices
- Process repeats **until arbitrage disappears** (prices converge)

---

### Worked Example 2 — ETF Trading at Discount (Exhibit 2)

**Setup**: ETF market price = $24.90; Fair value = $25.00

**AP Action:**
1. Buy ETF shares at $24.90
2. Simultaneously sell the underlying basket securities at $25.00
3. **Profit = $0.10/share**

**Market impact**: Opposite pressures push prices back toward convergence.

---

### The Arbitrage Gap

**Definition**: The price range around fair value where arbitrage becomes profitable enough for APs to act.

**Drivers of gap width:**
- **Cost of arbitrage** (transaction costs)
- **Risk premium** for volatility/liquidity risk

| ETF Type | Typical Arbitrage Gap |
|----------|------------------------|
| **Highly liquid** (e.g., S&P 500 ETF) | As small as **minimum tick size** (~$0.01) |
| **Illiquid underlying** (e.g., high-yield bonds) | Can exceed **1%** |

> **Real-world friction**: AP profit calculations above **exclude** actual trading costs, issuer fees, and settlement/currency risk — real arbitrage margins are thinner than the simple examples suggest.

**International complication**: If underlying securities are in a different time zone (e.g., US-listed ETF holding Japanese stocks), APs face **timing risk** while waiting for foreign markets to open — this widens the effective arbitrage gap needed before APs step in.

---

### Two Major Benefits of the Creation/Redemption Mechanism

#### 1. Cost Fairness — Transaction Cost Isolation

| Fund Type | Who Bears Trading Costs? |
|-----------|----------------------------|
| **Mutual funds** | **ALL shareholders** (fund manager trades affect everyone) |
| **ETFs** | **Only the AP** (passed through via bid-ask spread to active traders) |

> **Key advantage**: Buy-and-hold ETF investors are **shielded** from costs generated by other investors' trading activity — a structurally fairer system than mutual funds.

#### 2. Tax Efficiency — In-Kind Redemption Advantage

**Mechanism**: When redeeming, the issuer chooses **which tax lots** to deliver to the AP.

**Strategy**: Deliver **low-cost-basis** securities in redemptions → this **removes** low-basis (high unrealized gain) positions from the portfolio → **raises the average cost basis** of remaining holdings → **minimizes unrealized gains** embedded in the fund.

> This is a **key tax efficiency advantage** of ETFs over mutual funds (which must sell securities and realize gains for all shareholders when investors redeem).

---

### Issuer Control Over the Process

**Levers issuers can adjust:**

| Lever | Effect |
|-------|--------|
| **Basket size** | Larger basket (e.g., 200,000 vs. 50,000 shares) → less frequent AP arbitrage activity |
| **Basket composition** | Can customize to reduce costs for illiquid holdings |
| **Cash creation option** | For extremely illiquid assets, may allow cash-in-lieu of securities |
| **Creation/redemption fees** | Vary widely — e.g., $50 (VTIP) vs. $28,000 (VSS) — affects AP profit incentive |

---

### Creation/Redemption by Asset Class

| Asset Class | Typical Method | Why |
|-------------|-----------------|-----|
| **Equity ETFs** | In-kind | Liquid, standard mechanism |
| **Fixed-income ETFs** | Often **CASH** creation/redemption | Underlying bonds (e.g., high-yield munis) may trade infrequently; cash simplifies AP participation |
| **Leveraged/inverse ETFs** | Often **CASH** | Underlying is OTC swaps — difficult for APs to directly adjust swap positions |
| **Commodity ETFs** | Often **CASH** | Similar OTC/derivative-based structure issues |

**Trade-off for cash creation**: Easier for APs (more participation, tighter spreads) BUT causes **trading costs and tax impact** borne by the fund itself (issuer must trade to convert cash to holdings).

---

### Trading and Settlement

#### US Settlement Process

**National Securities Clearing Corporation (NSCC)**:
- Guarantees trades submitted at end of day
- Trade becomes "cleared" the evening of execution
- Buyer gains **beneficial ownership** as of execution time (protected even if seller later has issues, e.g., bankruptcy)

**Depository Trust Company (DTC)** (NSCC's parent):
- Holds the **book of accounts** at the **member firm level** (not individual investor level)
- Individual firms (e.g., Schwab) track their own customers' holdings

**Continuous Net Settlement example:**
```
E*TRADE owes Schwab 1,000 shares of SPY
Schwab owes BofA Merrill Lynch 1,000 shares of SPY
→ Schwab is "whole" (nets to zero)
→ E*TRADE's account debited 1,000 shares; BofA Merrill Lynch credited 1,000 shares
```

**Standard settlement**: **T+2** (trade date + 2 business days)

**Special treatment for market makers**: Up to **6 days** to settle (recognizing the time needed to create/borrow ETF shares while making continuous markets).

---

#### European Settlement Process

**Key differences from US:**
- **Institutional-dominated** ownership (vs. broader retail participation in US)
- **Fragmented market**: Multiple exchanges, jurisdictions, clearinghouses
- Most trading is **negotiated OTC** between large institutions (not visible as public quotes before execution)
- ETFs often **cross-listed** on multiple exchanges with different share classes (distribution treatment, currency hedging variations)
- Settlement clears through **one of 29 different Central Securities Depositories (CSDs)**

**Impact of fragmentation**: Greater complexity → **wider spreads** and **higher local trading costs** compared to the more unified US system.

---

### Key Formula/Concept Reference Card

| Concept | Key Point |
|---------|-----------|
| **Creation unit** | Typically 50,000 shares (range: 10,000–600,000) |
| **AP profit (premium)** | Sell ETF, buy basket |
| **AP profit (discount)** | Buy ETF, sell basket |
| **Standard settlement** | T+2 |
| **Market maker settlement** | Up to T+6 |
| **DTC tracking level** | Member firm (not individual investor) |

---

### Exam Tips

- **Only APs can create/redeem ETF shares directly with the issuer** — regular investors ONLY trade on the secondary market
- **Creation/redemption is IN-KIND** (shares-for-shares) for most equity ETFs — this is the core structural difference from mutual funds
- **ETF at premium** → AP sells ETF, buys basket; **ETF at discount** → AP buys ETF, sells basket — arbitrage drives convergence
- **Fixed-income, leveraged/inverse, and commodity ETFs often use CASH creation/redemption** due to underlying liquidity or derivative structure issues
- **Tax efficiency**: issuers select LOW-basis securities for redemption baskets → raises average cost basis → minimizes embedded unrealized gains
- **AP bears ALL trading costs** — passed to active traders via bid-ask spread; buy-and-hold investors are shielded (key ETF advantage over mutual funds)
- **US settlement = T+2**; **market makers get up to T+6** (special treatment for their continuous market-making role)
- **DTC tracks holdings at the member-firm level**, not individual investor level — individual brokerages track their own customers
- **European ETF market** is more fragmented (29 CSDs, multiple exchanges, mostly institutional/OTC) → generally wider spreads than US
- **Arbitrage gap width** depends on underlying liquidity — can be as tight as one tick (~$0.01) or exceed 1% for illiquid holdings