---
layout: page
title: "Theories of Commodity Futures Returns"
permalink: /study/08-alternatives/01-introduction-to-commo/07-theories-of-futures-returns/
prev: /cfa/study/08-alternatives/01-introduction-to-commo/06-commodity-spot-and-futures-prices/
next: /cfa/study/08-alternatives/01-introduction-to-commo/08-components-of-futures-returns/
---
## Summary: Theories of Commodity Futures Returns (CFA Level II — Alternative Investments)

---

### Overview — Three Key Theories

| Theory | Origin | Core Explanation of Futures Curve | Predicted Shape |
|--------|--------|-----------------------------------|-----------------|
| **Insurance theory** | Keynes (1930) | Producers hedge by selling forward → discount futures | Backwardation ("normal") |
| **Hedging pressure hypothesis** | De Roon, Nijman, Veld (2000); Cootner (1960) | Relative balance of producer vs. consumer hedging demand | Flat / Backwardation / Contango |
| **Theory of storage** | Kaldor (1939) | Inventory levels and convenience yield vs. storage costs | Either (inventory-dependent) |

---

### Theory 1: Insurance Theory (Keynes, 1930)

**Core idea**: Commodity **producers** use futures markets as **insurance** by selling forward to lock in prices and make revenues predictable.

**Mechanism**:
- Producer is **long the physical commodity** → wants to **sell futures** (short futures)
- Persistent producer selling pushes **futures prices below spot prices**
- Speculators must receive a **discount** (risk premium) to buy futures and accept price risk
- As maturity approaches and futures converge to spot, speculators earn a **positive return**

**Also called**: "Normal backwardation"

**Numerical example** (Exhibit 8):
- Farmer sells cotton October futures at 74.50¢ (vs. spot 76.75¢)
- As October approaches, futures converge toward 76.75¢
- Speculator's profit = **2.25¢/pound = $1,125/contract** (50,000 lbs)

**Empirical evidence**: **Largely refuted** — Kolb (1992) studied 29 futures contracts and concluded "normal backwardation is not normal." Backwardation doesn't consistently generate positive risk-adjusted returns.

**Exam 13 Answer**: → **B** — Producers accept a lower future price in exchange for price certainty. Speculators need futures BELOW (not above) spot to earn a risk premium. Insurance theory implies BACKWARDATION, not contango.

---

### Theory 2: Hedging Pressure Hypothesis

**Core idea**: The **relative balance** between producer and consumer hedging demand determines futures curve shape.

**Three scenarios:**

| Scenario | Conditions | Curve Shape |
|---------|-----------|-------------|
| **Balanced** | Producer hedging = Consumer hedging | **Flat** (Exhibit 9: stable at 75¢) |
| **Producers dominate** (more sellers than buyers of futures) | More supply-side price insurance sought | **Backwardation** (Exhibit 10: falling curve) |
| **Consumers dominate** (more buyers than sellers of futures) | More demand-side price insurance sought → bid up futures prices | **Contango** (Exhibit 11: rising curve) |

**Backwardation** → producers are more motivated to hedge than consumers → speculators receive discount to take on risk.

**Contango** → consumers are more concerned about future availability → bid up futures prices → speculators receive premium to sell futures and absorb risk.

**Real-world complications** (why the theory is incomplete):
- **Producers are more concentrated**: Single companies (BP, BHP, Vale) with concentrated commodity exposure; producers hedge more systematically
- **Consumers are diffuse**: Individual consumers rarely hedge (no one hedges gasoline spending); corporate hedging is selective
- **Both parties often speculate unintentionally**: Treasury departments seek profits; farmers may not hedge consistently
- **Trading companies**: Profit from informational advantage, not production — blur the hedger/speculator distinction

**Defining failure**: Metallgesellschaft AG (Germany, 1993) — collapsed from a **poorly constructed gasoline/fuel oil/heating oil hedge** → flawed commercial hedging becoming unintended speculation.

**Limitation**: Difficult to **measure the asymmetry** in hedging pressure between buyers and sellers of a commodity at any given time.

**Exam 14 Answer**: → **B** — When buyer hedging exceeds seller hedging, excess demand for price insurance bids up futures prices → **contango**. Balanced hedging → flat; Seller dominance → backwardation.

---

### Theory 3: Theory of Storage

**Core idea**: **Inventory levels** and the **convenience yield** determine futures curve shape.

**Key formula:**

$$\boxed{F_0 = S_0 + \text{Direct storage costs} - \text{Convenience yield}}$$

**Components:**

| Term | Definition | Effect |
|------|-----------|--------|
| **Spot price ($S_0$)** | Current physical commodity price | Base |
| **Direct storage costs** | Rent, insurance, spoilage, inspection | ↑ Futures price (carry cost) |
| **Convenience yield** | Benefit of holding physical commodity as buffer against supply disruption | ↓ Futures price (carry benefit) |

**Convenience yield dynamics:**

| Inventory Level | Convenience Yield | Futures Curve |
|----------------|------------------|---------------|
| **Abundant supply** | **Low** (supply disruption unlikely) | Contango (storage costs dominate) |
| **Scarce supply** | **High** (supply disruption concern) | Backwardation (convenience yield offsets/exceeds storage costs) |

**Curve interpretation:**
- **Supply dominates**: Regular storage → storage costs push futures above spot → **contango**
- **Demand dominates**: Just-in-time consumption (minimal storage) → high convenience yield → **backwardation**

**Real-world example — Libya 2011**:
- Civil war disrupted high-quality Libyan crude oil
- **Near-term**: Spot price and near-term convenience yield spiked (scramble for replacement oil → backwardation in near months)
- **Far-term**: Muted reaction — traders expected replacement supplies would be available later → lower convenience yield in deferred contracts
- **Net result**: Crude oil traded in backwardation during 2011

**Limitations:**
- Storage costs are **proprietary information** (producers/consumers won't share)
- Convenience yield is **highly volatile and unobservable** — events (weather, war, technology) can change it rapidly
- Inventory definitions are **ambiguous** (e.g., corn suitable for feed ≠ corn suitable for human consumption)

**Exam 15 Answer**: → **C** — Convenience yield is **high when supply is scarce**. Low supply → high concern about disruption → high convenience yield. Not unaffected by supply (A) and not low when scarce (B).

**Exam 16 Answer**: → **A** — $F_0 = S_0 + \text{Storage costs} - \text{Convenience yield}$. Convenience yield is **subtracted** (it's a benefit that reduces the cost of carry). Storage costs are **added** (they increase the burden of holding the commodity).

---

### Key Relationships — All Three Theories

```
Insurance Theory:
  Producers sell forward persistently → Futures < Spot
  Speculators earn premium as futures converge up to spot
  → Predicts normal backwardation (empirically refuted as universal)

Hedging Pressure Hypothesis:
  Producer > Consumer hedging → Backwardation
  Producer = Consumer hedging → Flat curve
  Consumer > Producer hedging → Contango
  → More flexible; explains both shapes; hard to measure in practice

Theory of Storage:
  Futures = Spot + Storage costs − Convenience yield
  High inventory → Low convenience yield → Contango
  Low inventory → High convenience yield → Backwardation
  → Inventory-based; powerful for explaining curve shifts; hard to observe inputs
```

---

### Exam Tips

- **Insurance theory → backwardation** (producers sell forward; speculators receive discount)
- **Hedging pressure → producers dominate = backwardation; consumers dominate = contango**
- **Theory of storage formula**: $F = S + \text{Storage} - \text{Convenience yield}$ — know the signs
- **Convenience yield is HIGH when inventories are LOW** (scarce supply → high disruption risk)
- **Convenience yield is LOW when inventories are HIGH** (abundant supply → low disruption risk)
- **All three theories have limitations**: empirical evidence mixed; inputs unobservable or volatile
- **"Normal backwardation is not normal"** (Kolb, 1992) — backwardation does NOT reliably generate positive returns
- **Metallgesellschaft (1993)**: Classic example of hedging becoming unintentional speculation
- **Contango is costly for long futures holders** — futures converge DOWN to spot as expiration approaches → negative roll return