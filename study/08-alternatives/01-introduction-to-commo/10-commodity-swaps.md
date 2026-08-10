---
layout: page
title: "Commodity Swaps"
permalink: /study/08-alternatives/01-introduction-to-commo/10-commodity-swaps/
prev: /cfa/study/08-alternatives/01-introduction-to-commo/09-contango-backwardation-roll-return/
next: /cfa/study/08-alternatives/01-introduction-to-commo/11-commodity-indexes/
---
## Summary: Commodity Swaps (CFA Level II — Alternative Investments)

---

### What Is a Commodity Swap?

**Commodity swap**: A legal contract involving **exchange of payments** over multiple dates, determined by specified **reference prices or indexes** relating to commodities (often based on a series of futures contracts).

**Why use swaps instead of futures?**
- Avoid managing **multiple futures contracts**
- Achieve **customization** impossible with standardized futures
- Eliminate physical delivery complications while maintaining **price risk transfer**
- Benefit from **accounting treatment** that may be more favorable than futures

**Typical counterparty structure:**

```
Hedger/Investor ←──── Swap payments ────► Swap Dealer (bank/trading company)
                                                    ↓
                                    Dealer hedges via futures, another swap,
                                    or physical purchase contract
```

---

### Five Types of Commodity Swaps

#### 1. Excess Return Swap

**How it works**: Payments driven by **changes in price** of underlying futures contracts (price-only, no collateral return).

**Example — Oil refiner**:
- Refiner goes long a swap paying the amount exceeding $70/barrel each month-end
- Pays upfront premium ($25) for this protection → **effectively long a series of call options**
- Protection kicks in when oil price > $70/barrel; refiner absorbs losses below $70

**Cash flow example** (reference prices: $64, $70, $75, $71, $66, $65, $63, $66, $72, $78):
- Months when price > $70: Refiner receives the excess
- Months when price ≤ $70: Refiner receives nothing
- **Net to refiner**: −$9 (net loss → effectively increased oil cost by ~$1/barrel)
- **But**: Protected against catastrophic price spikes; predefined cost provides cash flow predictability

---

#### 2. Total Return Swap

**How it works**: Payments = **Excess return** (futures price changes) **+ Collateral return** (interest on cash posted).

$$\boxed{\text{Total return swap payment} = \text{Notional} \times \text{Index level change}}$$

**Who uses it**: Large institutional investors (pension plans, endowments) seeking:
- Broad **commodity index exposure**
- Low return **correlation with stocks/bonds**
- **Inflation hedge** for asset/liability management (ALM)

**Example** (£100M notional, 5% of £2B pension plan, CFCI index):
- Day 1: Index +1% → **Dealer pays manager £1M**
- Day 2: Index −5% → **Manager pays dealer £5M**
- Dealer typically hedges its short exposure with futures or physical investments
- Manager generally does NOT hedge (seeks the commodity risk/return exposure)

**Payment direction:**
$$\text{Index up} \rightarrow \text{Dealer pays long side} \qquad \text{Index down} \rightarrow \text{Long side pays dealer}$$

---

#### 3. Basis Swap

**How it works**: Exchange periodic payments based on the **difference between two related but imperfectly correlated reference prices**.

$$\boxed{\text{Payment} = \text{Price}_A - \text{Price}_B}$$

**Used to**: Adjust for the **basis** between a highly liquid futures contract and an illiquid but related commodity.

**Example**: Swap paying difference between **Brent crude** (very liquid) and **heavy Gulf of Mexico crude** (less liquid) — valuable for Gulf Coast refineries that process cheaper heavy crude from Mexico/Venezuela but need to hedge price risk.

**Basis definitions vary by commodity:**
- **Energy**: Brent vs. heavy crude price differential
- **Grains**: Futures contract price vs. physical soybeans available at Mississippi River

---

#### 4. Variance Swap

**How it works**: Payments based on **proportional difference between observed/actual variance** and a **fixed variance** agreed at outset.

| Party | Benefits when |
|-------|-------------|
| **Variance buyer** | Realized variance > fixed variance (higher actual variance) |
| **Variance seller** | Realized variance < fixed variance (lower actual variance) |

**Note**: Often **capped** to limit maximum upside and losses for both parties.

---

#### 5. Volatility Swap

**How it works**: Similar to variance swap, but payments based on **observed vs. expected volatility** (not variance).

$$\text{Variance} = \sigma^2 \qquad \text{Volatility} = \sigma$$

| Party | Benefits when |
|-------|-------------|
| **Volatility seller** | Realized volatility < expected volatility (less volatile than anticipated) |
| **Volatility buyer** | Realized volatility > expected volatility (more volatile than anticipated) |

**Key distinction**: Not speculating on **price direction or level** — speculating purely on **how volatile prices will be**.

---

### Commodity Swaps — Comparison Table

| Swap Type | Underlying | Payment Basis | Primary User |
|-----------|-----------|--------------|-------------|
| **Excess return** | Single commodity price | Futures price changes only | Commercial hedgers (refiners, producers) |
| **Total return** | Commodity index | Price changes + collateral return | Institutional investors (pensions) |
| **Basis** | Two related commodities | Price differential between them | Industry participants with basis risk |
| **Variance** | Price variance | Actual vs. fixed variance | Volatility-focused speculators/hedgers |
| **Volatility** | Price volatility | Actual vs. expected volatility | Volatility-focused speculators/hedgers |

---

### Example Answers

**Example 21 — Total return swap payments:**

**Setup**: $100M notional; Month 1: index +3%; Month 2: index −2%

$$\text{Month 1}: 100M \times 3\% = +\$3M \rightarrow \text{Dealer pays manager}$$
$$\text{Month 2}: 100M \times (-2\%) = -\$2M \rightarrow \text{Manager pays dealer}$$

→ **Answer: B. $3M from dealer to manager (Month 1), $2M from manager to dealer (Month 2)**
- A wrong: Payments are made **periodically** (not held until contract expiry)
- C wrong: Payment **directions reversed** from what is correct

**Example 22 — What volatility swap payments are based on:**

→ **Answer: C. Volatility for the price of a commodity**
- A wrong: Not based on price **direction** — no view on whether price goes up or down
- B wrong: Variance swap (not volatility swap) is based on price **variance** ($\sigma^2$); volatility swap uses $\sigma$ directly

---

### Exam Tips

- **Excess return swap**: price changes only (no interest component); often compared to a series of call options
- **Total return swap**: price changes + collateral return; used by institutional investors for broad commodity exposure
- **Basis swap**: two related-but-different commodity prices; hedges the price differential (basis risk) between them
- **Variance swap vs. volatility swap**: both speculate on realized vs. expected price fluctuation; variance = $\sigma^2$, volatility = $\sigma$
- **Total return swap payments**: Index up → dealer pays long; Index down → long pays dealer
- **Swaps are OTC (not exchange-traded)**: more customization, less standardization than futures
- **Swap dealers** typically hedge their own exposure with futures, other swaps, or physical contracts
- **Long commodity swap** = receive payments when commodity prices/index rises; make payments when it falls