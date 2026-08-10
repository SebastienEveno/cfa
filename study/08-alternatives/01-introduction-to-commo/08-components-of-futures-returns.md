## Summary: Components of Commodity Futures Returns (CFA Level II — Alternative Investments)

---

### Total Return Formula

$$\boxed{\text{Total return} = \text{Price return} + \text{Roll return} + \text{Collateral return}}$$

For an **index**, add a **rebalance return** component.

---

### Component 1: Price Return (Spot Yield)

$$\boxed{\text{Price return} = \frac{\text{Current price} - \text{Previous price}}{\text{Previous price}}}$$

- Measures change in **commodity futures prices** (typically front-month contract)
- NOT the same as the change in physical commodity price (physical markets lack standardization)
- **Highest correlation to total return** (Exhibit 12: 97% correlation, same 19.8% volatility)
- Represents the **commodity's inflation linkage** — connects to CPI/inflation tracking

---

### Component 2: Roll Return (Roll Yield)

**Definition**: The accounting return from **rolling expiring contracts forward** into the next contract.

$$\boxed{\text{Roll return} = \frac{F_{\text{near}} - F_{\text{far}}}{F_{\text{near}}} \times \% \text{ of position being rolled}}$$

**Key insight**: Roll return is **NOT an independently capturable return** — it's an accounting allocation within total return.

**Direction depends on curve shape:**

| Curve Shape | Near vs. Far Price | Roll Return | Roll Mechanics |
|------------|-------------------|-------------|----------------|
| **Backwardation** | Near > Far (downward slope) | **Positive** | Must **buy MORE** far contracts to maintain exposure (far = cheaper) |
| **Contango** | Near < Far (upward slope) | **Negative** | Must **buy FEWER** far contracts to maintain exposure (far = more expensive) |

---

### Roll Mechanics — Detailed Examples

#### Backwardation Example (Wheat):
- Current exposure: £110; Near contract = £10 → hold 11 contracts
- Far contract = £9 (cheaper because backwardation)
- To maintain £110 exposure: £110/£9 = 12.2 → need **12 contracts**
- **Must buy more** far contracts than near contracts sold

#### Contango Example (Gasoline):
- Current exposure: £108; Near contract = £9 → hold 12 contracts
- Far contract = £10 (more expensive because contango)
- To maintain £108 exposure: £108/£10 = 10.8 → need **11 contracts**
- **Must buy fewer** far contracts than near contracts sold

#### WTI Crude Oil Roll Calculation (7 Feb 2019):
- March (near): $52.64/barrel; April (far): $53.00/barrel → **Contango**
$$\text{Gross roll return} = \frac{52.64 - 53.00}{52.64} = -0.68\%$$
$$\text{Net roll return} = -0.68\% \times 20\% = \mathbf{-0.13\%}$$

(S&P GSCI rolls 20%/day over 5 days; negative because contango)

---

### Component 3: Collateral Return (Collateral Yield)

**Definition**: The **interest earned** on the cash/bonds posted as collateral for the futures position.

$$\boxed{\text{Collateral return} = \text{Risk-free rate} \times \text{Collateral amount}}$$

**For fully collateralized (no leverage) positions**: Collateral = 100% of notional value of futures.

**Choice of benchmark rate**:
- Short-term: Use T-bills (most commodity indexes like S&P GSCI use 90-day T-bills)
- Long-term forecast: Use the corresponding constant maturity government bond

---

### Historical Returns — S&P GSCI (January 1970–March 2019)

| Component | Return | Risk (σ) | Correlation to Total |
|-----------|--------|---------|----------------------|
| **Total return** | **6.8%** | 19.8% | — |
| **Spot/price return** | 3.0% | 19.8% | **0.97** (dominant driver) |
| **Roll return** | **−1.3%** | 4.2% | −0.11 |
| **Collateral return** | **5.0%** | 1.1% | −0.14 |

**Key observations:**
- **Collateral return** was the largest contributor (~73% of total) — driven by historically higher interest rates
- **Price return** contributed ~44% of total
- **Roll return was NEGATIVE** (−1.3%) — S&P GSCI was often in contango due to energy sector weighting
- Roll return and collateral return have **minimal correlation** to total monthly returns — spot price changes dominate

---

### Roll Return as Risk Premium? (Ilmanen, 2011)

**Ilmanen's argument**: Roll return ≈ risk premium (connects back to Keynes's normal backwardation).
- Positive roll return (backwardation) → positive long-run average returns
- Negative roll return (contango) → negative long-run average returns

**Challenge to the argument**: 40% of the commodities Ilmanen examined had **negative roll returns BUT positive total returns** — so backwardation is NOT required for positive overall returns.

> Roll return is informative but not the sole determinant of commodity investment returns.

---

### Example Answers

**Example 17 — Backwardation characteristics:**
→ **B. Must buy MORE contracts when rolling forward in backwardation**
- A wrong: Roll return is usually **positive** in backwardation (not negative)
- C wrong: Backwardation requires MORE contracts (not fewer) to maintain dollar exposure
- B correct: Far contracts are cheaper → need more units to replicate same dollar value

**Example 18 — Total return calculation:**
$$\text{Total return} = 5\% + 2.5\% + 2\% = \mathbf{9.5\%}$$
- Price return = 5%; Roll return = 2.5%; Collateral return = 2% × 100% collateral = 2%
→ **Answer: C. 9.5%**

**Example 19 — Rolling contracts in backwardation:**
- Near contracts ($4.00): Sell $10,000/$4.00 = **2,500 contracts**
- Far contracts ($2.50): Buy $10,000/$2.50 = **4,000 contracts**
→ **Answer: A. Sell 2,500 near + Buy 4,000 far** (far is cheaper → need more units)

---

### Quick Reference Table

| Feature | Backwardation | Contango |
|---------|--------------|---------|
| **Curve slope** | Downward (near > far) | Upward (near < far) |
| **Roll return sign** | **Positive** | **Negative** |
| **Roll action** | Buy **more** far contracts | Buy **fewer** far contracts |
| **Effect on long investors** | **Beneficial** (positive roll) | **Costly** (negative roll/erosion) |
| **Near − Far** | Positive | Negative |

---

### Exam Tips

- **Total return = Price + Roll + Collateral** — memorize the three components
- **Backwardation → positive roll return; Contango → negative roll return**
- **Backwardation → must buy MORE far contracts** (cheaper per unit; need more to equal same dollar value)
- **Contango → must buy FEWER far contracts** (more expensive per unit; need fewer to equal same dollar value)
- **Roll return formula**: (Near − Far)/Near × % rolled per period
- **Collateral return = risk-free rate** on cash posted as margin (for fully collateralized = 100% notional)
- **Roll return is NOT independently capturable** — it's an accounting allocation, not a tradable return component
- **S&P GSCI historical insight**: Roll return was NEGATIVE overall (energy sector often in contango); collateral return was the largest contributor historically