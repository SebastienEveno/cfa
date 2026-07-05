---
layout: page
title: Pricing Fixed-Income Forward and Futures Contracts
permalink: /study/07-derivatives/01-valuation-forward-commitments/04-pricing-forward-futures-contracts/
prev: /cfa/study/07-derivatives/01-valuation-forward-commitments/03-pricing-equity-fras/
next: /cfa/study/07-derivatives/01-valuation-forward-commitments/05-pricing-valuing-swap-contracts/
---
## Summary: Pricing Fixed-Income Forward and Futures Contracts (CFA Level II — Derivatives)

---

### Three Unique Features of Fixed-Income Forwards/Futures

#### 1. Clean Price vs. Dirty Price (Full Price)

$$\boxed{S_0 = B_0 + AI_0} \quad \text{(Full/dirty price = quoted/clean price + accrued interest)}$$

**Accrued Interest Formula:**
$$\boxed{AI = \frac{NAD}{NTD} \times \frac{C}{n}}$$

Where:
- $NAD$ = number of accrued days since last coupon
- $NTD$ = total days in the coupon period (= 360/n)
- $C$ = annual coupon amount
- $n$ = coupon payments per year

**Example**: 3% semi-annual bond, par 1,000, after 60 days:
$$AI = \frac{60}{180} \times \frac{30}{2} = 5 \text{ (in currency units)}$$

---

#### 2. Conversion Factor (CF)

**Purpose**: Adjusts for the fact that fixed-income futures allow **multiple deliverable bonds** — different maturities and coupons trade at different prices.

> **CME definition**: CF = approximate decimal price at which $1 par of a security would trade **if it had a 6% yield-to-maturity**.

**Relationship between quoted futures price and adjusted futures price:**
$$\boxed{F_0 = Q_0 \times CF}$$

Where:
- $Q_0$ = **quoted futures price** (what you see in the market)
- $F_0$ = **adjusted futures price** (actual delivery price accounting for conversion factor)

---

#### 3. Cheapest-to-Deliver (CTD) Bond

Since the conversion factor adjustment is imprecise, the bond seller will choose to deliver the **least expensive bond** (adjusted for CF) among all eligible deliverables.

---

### Fixed-Income Forward/Futures Pricing Formula

**Key formula (adjusted futures price):**
$$\boxed{F_0 = FV[B_0 + AI_0 - PVCI] - AI_T}$$

**Equivalently for the quoted futures price:**
$$\boxed{Q_0 = \frac{1}{CF} \times \{FV[B_0 + AI_0] - AI_T - FVCI\}}$$

| Component | Symbol | Role |
|-----------|--------|------|
| Quoted bond price | $B_0$ | Clean price at initiation |
| Accrued interest at Time 0 | $AI_0$ | Added to get full price |
| PV of coupon interest | $PVCI$ | Carry **benefit** — reduces forward price |
| FV of coupon interest | $FVCI$ | Forward value of carry benefits |
| Accrued interest at expiration | $AI_T$ | Subtracted (futures quote excludes AI) |
| Conversion factor | $CF$ | Adjusts for multiple deliverable bonds |

**Intuition:**
- **Coupons are carry benefits** → reduce the forward price (like dividends in equity forwards)
- **Financing cost** (carrying the bond at the risk-free rate) → increases the forward price
- **Accrued interest** must be carefully tracked at both initiation and expiration

---

### Arbitrage Example — Illustrating Disequilibrium

**Setup (Exhibit 11)**:

| Item | Value |
|------|-------|
| $B_0$ (quoted) | 107.00 |
| $AI_0$ | 0.07 |
| $AI_T$ | 0.20 |
| $PVCI$ | 0 |
| $Q_0$ (quoted futures) | 135.00 |
| $CF$ | 0.80 |
| $F_0$ (adjusted = $Q_0 \times CF$) | 108.00 |
| $r$ | 0.20% |
| $T$ | 0.25 |

**Full spot price**: $S_0 = 107 + 0.07 = 107.07$

**Equilibrium adjusted futures price**:
$$F_0^* = FV[B_0 + AI_0 - PVCI] - AI_T = (107.07)(1.002)^{0.25} - 0.20 = 106.92$$

**Observed**: $F_0 = 108.00$ > equilibrium $106.92$ → **Futures overpriced by 1.08**

**Arbitrage strategy** (carry arbitrage):
1. **Sell** the overpriced futures at 108
2. **Borrow** funds at risk-free rate
3. **Buy** the cheapest deliverable bond at 107.07
4. At expiration: **deliver bond** to settle futures, **repay loan**

**Risk-free profit** = 1.08 at Time T (PV = 1.0795 at Time 0)

**Equilibrium quoted futures price**:
$$Q_0^* = \frac{1}{0.80} \times 106.92 = \mathbf{133.65}$$

(Any quoted price above 133.65 creates this arbitrage opportunity)

---

### Euro-Bund Example (Example 11)

**Setup**: $T = 1/12$, $CF = 0.729535$, $B_0 = 108$, $AI_0 = 0.083$, $AI_T = 0.25$, $FVCI = 0$, $r = 0.1\%$

**Step 1**: Full spot price
$$S_0 = 108 + 0.083 = 108.083$$

**Step 2**: Adjusted futures price
$$F_0 = (108.083)(1.001)^{1/12} - 0.25 = 108.092 - 0.25 = \mathbf{107.84}$$

**Step 3**: Quoted futures price
$$Q_0 = \frac{107.84}{0.729535} = \mathbf{€147.82}$$

→ **Answer: B. €147.82**

---

### Forward Value of Fixed-Income Forward Contract

**Same general approach as other forward contracts:**

$$\boxed{V_t = PV[F_t - F_0] = \frac{F_t - F_0}{(1+r)^{T-t}}}$$

Where $F_t$ and $F_0$ are the **adjusted** forward prices (or quoted prices if applying consistently).

**Numerical example**: $F_0 = 119.12$, $F_t = 119.92$, $T-t = 1/12$, $r = 0.5\%$:
$$V_t = \frac{119.92 - 119.12}{(1.005)^{1/12}} = \frac{0.80}{1.000417} = \mathbf{0.7997}$$

---

### Euro-Bund Forward Valuation Example (Example 12)

**Setup**: 5 contracts, $NA = €100,000$ each, $F_0 = 145$, $F_t = 148$, $T-t = 1/12$, $r = 0.1\%$

**Per €100 par value**:
$$V_t = \frac{148 - 145}{(1.001)^{1/12}} = 2.9997$$

**Total value** (5 contracts, €100,000 par each):
$$V_{\text{total}} = 0.029997 \times 100,000 \times 5 = \mathbf{€14,998.75}$$

→ **Answer: B. €14,998**

> Note: At low interest rates with short maturities, the PV discounting effect is minimal (~€1.25 in this example).

---

### Futures Contract Value (Daily Mark-to-Market)

For **futures** (unlike forwards):
- Daily marking-to-market captures gains/losses in the **margin account**
- Contract value **resets to zero** after each daily settlement

$$\boxed{v_t = 0 \quad \text{after daily mark-to-market}}$$

The profit/loss from a bond futures position (during the trading day, before mark-to-market):
$$v_T = B_T - F_0 \quad \text{(at expiration)}$$

---

### Summary — Forward vs. Futures

| Feature | Forward | Futures |
|---------|---------|---------|
| **Pricing** | $F_0 = FV(S_0 + CC_0 - CB_0)$ | Same formula |
| **Value at initiation** | $V_0 = 0$ | $v_0 = 0$ |
| **Value during life** | $V_t = PV[F_t - F_0]$ (accumulates) | $v_t = 0$ (resets daily) |
| **Value at expiration** | $V_T = F_T - F_0 = S_T - F_0$ | $v_T = 0$ (settled daily) |
| **Gains/losses** | Realized at expiration (or unwind) | Realized daily via margin account |

---

### Exam Tips

- **Always use full/dirty price** ($B_0 + AI_0$) as $S_0$ in the carry arbitrage formula
- **PVCI reduces forward price** (carry benefit, like dividends) — coupons received before expiry lower the burden of carrying the bond
- **$AI_T$ is subtracted** from the adjusted forward price because futures are quoted as clean prices (excluding accrued interest) at expiration
- **Conversion factor**: quoted futures price × CF = adjusted futures price; $Q_0 = F_0/CF$
- **Cheapest-to-deliver**: the bond seller will deliver the least expensive eligible bond (after CF adjustment)
- **Futures value = 0 after daily settlement** — daily mark-to-market is what distinguishes futures from forward valuation
- **Forward value = $PV[F_t - F_0]$** — same formula as for equity/currency forwards, just with bond-specific forward prices
- **Arbitrage with bond futures**: overpriced → sell futures + buy bond (carry arbitrage); underpriced → buy futures + short bond (reverse carry)
- **Accrued interest at expiration ($AI_T$)** is larger than $AI_0$ when the bond hasn't paid a coupon between initiation and expiry — track the accrual days carefully