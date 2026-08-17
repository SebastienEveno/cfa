---
layout: page
title: "Commodity Spot and Futures Pricing — Contango and Backwardation"
permalink: /study/08-alternatives/01-introduction-to-commo/06-commodity-spot-and-futures-prices/
prev: /cfa/study/08-alternatives/01-introduction-to-commo/05-commodities-futures-markets-participants/
next: /cfa/study/08-alternatives/01-introduction-to-commo/07-theories-of-futures-returns/
---
## Summary: Commodity Spot and Futures Pricing — Contango and Backwardation (CFA Level II — Alternative Investments)

---

### Key Definitions

**Spot price**: Current price to deliver or receive a physical commodity at a **specific location** right now.

**Futures price**: Price agreed today for delivery/receipt of a defined quantity and quality of a commodity at a **future date**.

**Basis**: The difference between spot and futures prices.
$$\boxed{\text{Basis} = \text{Spot price} - \text{Futures price}}$$

---

### Backwardation vs. Contango

| Condition | Definition | Basis Sign | Calendar Spread |
|-----------|-----------|------------|-----------------|
| **Backwardation** | Spot > near futures > far futures | Positive | **Positive** (near − far > 0) |
| **Contango** | Spot < near futures < far futures | Negative | **Negative** (near − far < 0) |

**Etymology**:
- **Contango**: From "continuation" — originally a fee paid by a **buyer** to defer settlement (near price < far price = buyer pays more later)
- **Backwardation**: The "backward" or reversed arrangement — near price > far price

---

### Calendar Spread

$$\boxed{\text{Calendar spread} = \text{Near-term futures price} - \text Far-term futures price}$$

**From the examples:**
- **Crude oil (backwardation)**: July $65.50 − December $64.00 = **+$1.50/barrel** (positive spread)
- **Lean hogs (contango)**: July $0.95 − August $0.96 = **−$1.0¢/pound** (negative spread)

> Calendar spreads can be **traded directly** as their own instrument with bid-ask prices and order books — each spread trade creates two contracts (one for each "leg").

---

### Economic Intuition for Each State

**Backwardation (common for many commodities):**
- Producers accept **lower future prices** than current spot for **price certainty**
- Buyers of futures (long) earn a **roll return** as futures prices converge upward to spot
- Often occurs when **current demand is strong** or supply is tight now
- Reflects a **convenience yield** — benefit of holding the physical commodity today

**Contango:**
- Common when **storage costs are significant** — longer futures cost more to account for carry
- Long futures holders **lose roll return** as futures prices converge downward to spot
- **Very costly for long futures investors** who roll contracts over time
- Reflects **ample current supply** with expected higher prices in the future

---

### Spot vs. Futures Prices — Key Distinctions

| Feature | Spot Prices | Futures Prices |
|---------|------------|----------------|
| **Geographic scope** | **Highly localized** — vary by region, quality, logistics | **Standardized** — regional/national/global benchmark |
| **Quality adjustments** | Reflect local quality differences directly | Premiums/discounts adjust for quality/origin |
| **Price discovery** | Private, location-dependent | Publicly available in real-time globally |
| **Liquidity** | Limited to local market participants | Broad — standardized contracts enable global trading |
| **Reference function** | Point-in-time physical transaction | Benchmark for forward contracts and hedging |

---

### Cash Settlement vs. Physical Delivery

| Feature | Cash Settlement | Physical Delivery |
|---------|----------------|-------------------|
| **Settlement** | Cash payment (price difference at expiration) | Transfer of actual commodity ownership |
| **Example** | Feeder cattle (CME) | WTI crude oil (to Cushing, Oklahoma) |
| **Convergence** | May not fully converge (trading costs) | **Ensures convergence** of spot and futures prices |
| **Participants** | Enabled broader speculator/arbitrageur participation | Required physical commodity access |
| **Complexity** | Simpler | More complex (quality, location, variety issues) |

**Physical delivery complications:**
- **Different varieties**: Robusta coffee ≠ deliverable for arabica coffee contracts
- **Processing stages**: Raw sugar (US) ≠ deliverable for white processed sugar (UK)
- **Location-specific**: WTI → Cushing, Oklahoma; Brent → North Sea (UK/Norway)

> Price divergences between WTI and Brent can occur despite similar quality due to **geographic supply/demand differences** at delivery locations.

---

### Futures Price Curve Flexibility

**Critical point**: Commodity futures curves are **dynamic** — can shift between contango and backwardation.

**What causes shifts:**
- Market stress events
- Fundamental structural changes
- Changing supply/demand expectations
- Weather, geopolitical risks, seasonal factors

$$\boxed{\text{Futures price curve} \neq \text{Static structure} \longrightarrow \text{Reflects both long-term factors AND dynamic market expectations}}$$

---

### Example Answers

**Example 9** (WTI: near = $65.00, 6-month = $60.75):
→ **B. Backwardation** — near price ($65.00) > far price ($60.75); positive spread of $4.25. Note: The $4.25 difference is NOT simply shipping cost — multiple factors (geopolitical, seasonal, supply) contribute.

**Example 10** (spot vs. futures distinction):
→ **C. Spot prices vary by region** (local supply/demand, logistics); futures are standardized. Futures CAN reflect quality premiums/discounts for physical delivery.

**Example 11** (calendar spreads: lean hogs −50¢, natural gas +$1.10):
→ **C. Lean hogs = contango** (negative spread); **Natural gas = backwardation** (positive spread). Both individual prices AND spreads can be traded independently.

**Example 12** (can backwardation persist?):
→ **B. Futures curves can fluctuate between contango and backwardation** — markets can shift rapidly during stress or structural change. Curves reflect BOTH industry structure AND dynamic supply/demand expectations (not one or the other).

---

### Exam Tips

- **Backwardation = positive calendar spread** (near > far); **Contango = negative calendar spread** (near < far)
- **Backwardation is beneficial for long futures holders**: futures prices rise toward spot (positive roll return)
- **Contango is costly for long futures holders**: futures prices fall toward spot as expiration approaches (negative roll return)
- **Spot prices are local and vary by region**; futures prices are standardized benchmarks
- **Physical delivery enforces convergence**; cash settlement doesn't guarantee it
- **WTI delivery = Cushing, Oklahoma; Brent delivery = North Sea** — geographic separation explains divergence
- **Futures curves are dynamic** — backwardation today doesn't mean backwardation tomorrow
- **Both spread trades AND individual contracts are tradable** in commodity futures markets
- **Price difference between near and far futures** = calendar spread; reflects storage costs, supply/demand outlook, convenience yield
