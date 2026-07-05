---
layout: page
title: Price/Book Value (P/B)
permalink: /study/05-equity-valuation/04-market-based-valuation/05-price-to-book-value/
prev: /cfa/study/05-equity-valuation/04-market-based-valuation/04-using-pe-in-valuation/
next: /cfa/study/05-equity-valuation/04-market-based-valuation/06-price-to-sales/
---
## Summary: Price/Book Value (P/B) (CFA Level II)

---

### What Is P/B?

$$\boxed{P/B = \frac{\text{Market price per share}}{\text{Book value per share}}}$$

$$\text{Book value per share} = \frac{\text{Common shareholders' equity}}{\text{Shares outstanding}}$$

$$\text{Common shareholders' equity} = \text{Total equity} - \text{Preferred stock value}$$

---

### Rationales for Using P/B

| Rationale | Detail |
|-----------|--------|
| **Works when EPS is negative** | Book value is rarely negative; P/E breaks down when EPS ≤ 0 |
| **More stable than EPS** | Useful when earnings are abnormally high/low or highly variable |
| **Asset-intensive companies** | Banks, insurance, investment firms — book value approximates asset value |
| **Non-going concern** | Liquidation value analysis |
| **Empirical return predictability** | Low P/B historically associated with higher long-run returns (value premium) |

---

### Drawbacks of P/B

| Drawback | Example |
|---------|---------|
| **Off-balance-sheet assets ignored** | Human capital, internally generated brands, R&D not on balance sheet |
| **Business model differences** | Distorts comparisons (e.g., asset-light vs. asset-heavy) |
| **Intangibles not capitalized** | IFRS/GAAP expense advertising → brand value invisible; R&D expenses → patent value invisible |
| **Historical cost vs. fair value** | PP&E at net historical cost ≠ market value; inflation widens gap over time |
| **Share repurchases distort** | Buybacks above book value → ↓ book value → ↑ P/B artificially |
| **Different asset ages** | Older assets → more depreciated → lower book value → higher P/B |

**Colgate-Palmolive example**: P/E widened 5.5% over 5 years; P/B widened **125.9%** — almost entirely due to share repurchases reducing book equity.

---

### Computing Book Value per Share

$$BVPS = \frac{\text{Total equity} - \text{Preferred equity} - \text{Treasury shares (preferred)}}{\text{Common shares outstanding (net of treasury)}}$$

**TD Bank (2018):**
$$BVPS = \frac{80,040 - 5,000}{1,830.4} = \mathbf{CAD\ 41.00}$$
$$P/B = \frac{73.03}{41.00} = \mathbf{1.78\times}$$

---

### Book Value Adjustments

| Adjustment | Purpose |
|-----------|---------|
| **Subtract goodwill** → Tangible book value | Goodwill may reflect overpayment; not separable/saleable |
| **Subtract all intangibles** → Tangible book value | Remove assets not independently saleable |
| **Adjust to fair value** | More relevant for financial firms; use footnote data |
| **LIFO → FIFO restatement** | Enhance comparability (LIFO understates inventory in inflation) |
| **Off-balance-sheet items** | Add back OBS assets; subtract OBS liabilities |

**Barclays example (adjusted P/B):**

| Basis | BVPS | P/B |
|-------|------|-----|
| Reported (total equity) | £4.99 | **0.49×** |
| Tangible (minus goodwill) | £4.36 | **0.56×** |
| Fair value adjusted | £3.02 | **0.80×** |

→ Wide range of P/Bs depending on adjustments — always examine footnotes!

---

### Justified P/B Based on Fundamentals (Gordon Growth Model)

$$\boxed{\frac{P_0}{B_0} = \frac{ROE - g}{r - g}}$$

**Key relationships:**
- **ROE > r** → Justified P/B > 1 (company earns above cost of equity → value-creating)
- **ROE = r** → Justified P/B = 1 (earns exactly cost of equity → no economic profit)
- **ROE < r** → Justified P/B < 1 (destroys value)
- **Higher ROE** → **Higher justified P/B** (all else equal)

**No-growth case simplification:**
$$P_0/B_0 = ROE/r$$

**Worked example:**
- ROE = 12%, r = 10%, g = 7%
$$P/B = \frac{0.12 - 0.07}{0.10 - 0.07} = \frac{0.05}{0.03} = \mathbf{1.67\times}$$

---

### Justified P/B Based on Residual Income

$$\boxed{\frac{P_0}{B_0} = 1 + \frac{PV(\text{future residual earnings})}{B_0}}$$

| Scenario | Justified P/B |
|---------|--------------|
| PV(residual income) = 0 (ROE = r) | **= 1.0×** |
| PV(residual income) > 0 (ROE > r) | **> 1.0×** |
| PV(residual income) < 0 (ROE < r) | **< 1.0×** |

---

### Key Analytical Insight

> **A low P/B is not necessarily cheap without knowing ROE.**

- Two stocks with same P/B: the one with **higher ROE is relatively undervalued**
- Cannot assess P/B without comparing it to the company's profitability (ROE vs. r)

---

### P/B Comparables — Fundamental Adjustments

When comparing P/Bs across companies, adjust for differences in:
- **ROE** (primary driver of justified P/B)
- **Risk** (higher risk → lower justified P/B)
- **Expected growth** (higher growth → higher justified P/B, if ROE > r)

**E*TRADE vs. Schwab vs. TD Ameritrade:**
- ETFC trades at <30% of peer P/Bs AND <60% of its own historical average
- Explanation: **lower growth forecasts + higher beta** → lower justified P/B
- Not necessarily a buying opportunity — low P/B reflects lower quality/higher risk

---

### Exam Tips

- **P/B formula**: $(ROE - g)/(r - g)$ — memorize; same structure as Gordon growth model
- **P/B = 1**: company earns exactly its cost of equity (ROE = r)
- **P/B < 1** doesn't always mean undervalued — may reflect low ROE or negative residual income
- **Share repurchases above book value → ↑ P/B** over time (distorts historical comparisons)
- **Tangible book value** = book value minus all intangibles — useful for financial firms
- **Fair value adjustments** from footnotes can significantly change P/B — always check
- **LIFO companies**: adjust to FIFO for comparability in inflationary environments
- **Human capital-intensive firms** (consulting, tech services): P/B less meaningful — assets not on balance sheet