---
layout: page
title: Valuation Discounts and Premiums
permalink: /study/05-equity-valuation/06-private-company-valuation/06-valuation-discounts-and-premiums/
prev: /cfa/study/05-equity-valuation/06-private-company-valuation/05-private-company-discount-rates/
next: /cfa/study/05-equity-valuation/06-private-company-valuation/07-private-company-valuation-approaches/
---
## Summary: Valuation Discounts and Premiums (CFA Level II)

---

### The Control Spectrum

From highest to lowest value:

```
Strategic buyer (synergies) → highest value
        ↓ control premium
Financial buyer (control, no synergies) → high value  
        ↓ control premium
Comparable public company (non-controlling, marketable) → baseline
        ↓ DLOC
Non-controlling minority interest (private, illiquid) → lower value
        ↓ DLOM
Non-controlling, non-marketable minority interest → lowest value
```

---

### 1. Discount for Lack of Control (DLOC)

**Definition**: Deduction from pro-rata value to reflect the **absence of control powers**.

**Why control matters**: Without control, investor cannot:
- Select directors, officers, management
- Distribute cash/dividends
- Buy/sell assets or obtain financing
- Influence other value-affecting decisions

**Formula:**
$$\boxed{DLOC = 1 - \frac{1}{1 + \text{Control premium}}}$$

**Worked example (Everfloat, 15% control premium):**
$$DLOC = 1 - \frac{1}{1.15} = \mathbf{13.0\%}$$
$$\text{Adjusted value} = £1.65B \times (1 - 0.13) = \mathbf{£1.4355B}$$

**When to apply DLOC:**
- DCF using **controlling interest** cash flows and optimal capital structure → value is on controlling basis → apply DLOC for minority interest
- DCF not using control cash flows / non-optimal capital structure → value already reflects minority → **no DLOC needed**

**Data source**: Control premium data from **public company acquisitions** (limited data; interpretations vary).

---

### 2. Discount for Lack of Marketability (DLOM)

**Definition**: Deduction from value to reflect **absence of a liquid market** for private company shares.

**Key variables affecting DLOM size:**
- Prospects for liquidity (IPO, sale)
- Restrictions on transferability
- Limited pool of potential buyers
- Ownership concentration
- Time horizon to liquidity event

**Three methods to estimate DLOM:**

| Method | How | Advantage | Limitation |
|--------|-----|-----------|-----------|
| **Restricted stock** | Discount on restricted vs. freely traded shares | Actual transactions | Shares will soon be freely tradable → not exact |
| **Pre-IPO transactions** | Discount on private sales before IPO | Captures real liquidity discount | Value change approaching IPO complicates measurement |
| **Put option pricing** | At-the-money put premium / share price | Directly captures price risk via volatility | Doesn't provide actual liquidity; holder still benefits from upside |

**Put option DLOM formula:**
$$DLOM = \frac{\text{At-the-money put premium}}{\text{Share price}}$$

**Everfloat example:**
- Shipline PLC price = £50; 6-month put premium = £8.40
$$DLOM = 8.40/50 = \mathbf{16.8\%}$$

---

### 3. Combined Discount — Multiplicative, Not Additive

$$\boxed{\text{Total discount} = 1 - (1 - DLOC) \times (1 - DLOM)}$$

**Everfloat total discount:**
$$= 1 - (1 - 0.13)(1 - 0.168) = 1 - (0.87)(0.832) = \mathbf{27.6\%}$$

> **Critical**: Applied **sequentially** — first control, then marketability. Total is always **less than** the simple sum (13% + 16.8% = 29.8% > 27.6%).

---

### Other Possible Discounts

- **Key person discount**: Value depends heavily on one individual
- **Portfolio discount**: Non-homogeneous assets reduce value
- **Non-voting shares discount**: Inferior rights relative to voting shares

---

### Knowledge Check Answers

**Q1 (Starbeam selling minority stake while management retains control):**
→ **C. DLOC and DLOM** — The stake is non-controlling (DLOC applies) and private shares are illiquid (DLOM applies). The base valuation assumed 100% controlling ownership.

**Q2 (Well-known investor buying controlling stake, keeps management):**
→ **A. Yes, financial control premium** — This investor buys control but cannot identify/exploit synergies (they keep existing management → operational role stays same). Therefore it's a financial (not strategic/synergistic) control premium.

**Q3 (Total discount: CP = 30%, DLOM = 20%):**
$$DLOC = 1 - 1/1.30 = 1 - 0.7692 = 23.1\%$$
$$\text{Total discount} = 1 - (1-0.231)(1-0.20) = 1 - (0.769)(0.80) = 1 - 0.615 = \mathbf{38.5\%}$$
→ **C. 38.5%**

---

### Exam Tips

- **DLOC formula**: $1 - 1/(1 + \text{control premium})$ — not equal to the control premium itself
- **Total discount**: **multiplicative**, not additive — $1 - (1-DLOC)(1-DLOM)$
- **Sequence matters**: control adjustment first, then marketability
- **Strategic > financial control premium** — synergies justify paying more
- **DLOM is largest** when: no dividend, no IPO prospect, many transfer restrictions
- **DLOM is smallest** when: IPO imminent, active buyer market, few restrictions
- **Put option DLOM**: volatility is the key input; advantage = directly models price risk
- **Restricted stock discount** ≠ private company DLOM exactly — shares will soon trade freely