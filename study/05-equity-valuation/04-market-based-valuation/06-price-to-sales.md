---
layout: page
title: Price/Sales (P/S)
permalink: /study/05-equity-valuation/04-market-based-valuation/06-price-to-sales/
prev: /cfa/study/05-equity-valuation/04-market-based-valuation/05-price-to-book-value/
next: /cfa/study/05-equity-valuation/04-market-based-valuation/07-price-to-cashflow/
---
## Summary: Price/Sales (P/S) (CFA Level II)

---

### What Is P/S?

$$\boxed{P/S = \frac{\text{Price per share}}{\text{Net sales per share}}}$$

Where net sales = total sales − returns and customer discounts.

**Typical use**: Trailing sales; forward P/S also used when sales forecasts are available.

---

### Rationales for Using P/S

| Rationale | Detail |
|-----------|--------|
| **Hard to manipulate** | Revenue is the "top line" — before any expense adjustments |
| **Works when EPS is negative** | Sales are always positive for going concerns |
| **More stable than EPS** | Unaffected by operating/financial leverage volatility |
| **Appropriate for**: | Mature, cyclical, and zero-income companies |
| **Empirical return predictability** | Low P/S associated with higher long-run returns |

---

### Drawbacks of P/S

| Drawback | Detail |
|---------|--------|
| **High sales ≠ profitability** | A company can grow revenue while losing money |
| **Logical mismatch** | Price reflects leverage effects; sales doesn't → prefer **EV/Sales** |
| **No cost structure differences** | Two companies with same P/S may have very different margins |
| **Revenue recognition risk** | Can still be manipulated (bill-and-hold, barter transactions) |

---

### Key Relationship: P/S, P/E, and Profit Margin

$$\boxed{P/S = P/E \times \text{Net profit margin}}$$

$$\boxed{\text{Net profit margin} = \frac{P/S}{P/E}}$$

> For two stocks with the same P/E: **higher P/S = higher profit margin**.

---

### Justified P/S Based on Gordon Growth Model

$$\boxed{P_0/S_0 = \frac{(E_0/S_0)(1-b)(1+g)}{r-g}}$$

Or equivalently (using forward-looking):
$$\boxed{P_0/S_1 = \frac{(E_1/S_1)(1-b)}{r-g}}$$

**Key drivers of justified P/S:**
- ↑ Profit margin → ↑ Justified P/S (**directly** and **indirectly** through higher sustainable $g$)
- ↑ Growth rate $g$ → ↑ Justified P/S
- ↑ Required return $r$ → ↓ Justified P/S
- ↑ Dividend payout $(1-b)$ → ↑ Justified P/S

**Sustainable growth link:**
$$g = b \times ROE = b \times PM \times \text{Asset turnover} \times \text{Leverage}$$

Higher profit margin → higher sustainable growth → further boost to justified P/S.

---

### Worked Example (Getinge AB — Justified P/S)

**Inputs**: PM = 9%, payout = 35% → $b = 65\%$, $g = 7\%$, $r = 9\%$

$$P/S = \frac{0.09 \times (1-0.65) \times 1.07}{0.09 - 0.07} = \frac{0.09 \times 0.35 \times 1.07}{0.02} = \frac{0.03371}{0.02} = \mathbf{1.575\times}$$

**Intrinsic value**: $1.575 \times SEK94.3 = \mathbf{SEK\ 148.52}$

vs. market price SEK133.70 → **stock appears undervalued**

---

### Revenue Recognition Red Flags — Critical for P/S

| Practice | Issue |
|---------|-------|
| **Bill-and-hold** (Diebold) | Revenue recognized before delivery → overstated sales |
| **Barter transactions** (internet bubble) | Revenue inflated without cash exchange |
| **Gross vs. net revenue** (Groupon) | Reporting gross merchant sales rather than net commission → 50%+ overstatement |
| **Side buy-back agreements** | Revenue recognized on sales with guaranteed returns |

> **If revenue recognition is questionable** → assign a **higher risk premium** → lower justified P/S → or avoid the investment entirely.

---

### P/S Comparables — GETI vs. CMD vs. NEO

| Metric | GETI | CMD | NEO |
|--------|------|-----|-----|
| P/S (TTM) | **1.54** | 3.96 | 8.79 |
| Profit margin | −2.49% | 6.95% | **14.53%** |
| Revenue growth | 9.50% | 5.20% | 1.50% |
| Debt/Equity | 58.43% | 35.58% | 28.50% |
| EV/Revenue | 1.88 | 4.14 | 8.23 |

**Analysis:**
- GETI has lowest P/S → appears relatively undervalued on that basis alone
- But GETI has **negative profit margin** → low P/S is largely justified, not a bargain signal
- GETI is **more comparable to CMD** (similar EV/Revenue, similar leverage profile)
- NEO's high P/S is justified by its **14.5% profit margin**

---

### Exam Tips

- **P/S = P/E × Net profit margin** — know this relationship cold
- **Justified P/S**: driven by profit margin, growth, required return, payout
- **Higher margin** → **higher justified P/S** (both directly and through $g$)
- **EV/Sales preferred** over P/S when comparing companies with different capital structures
- **Revenue recognition** is the key quality issue for P/S — always check footnotes
- **Low P/S ≠ undervalued** if company has low/negative profit margins
- **Comparables**: adjust for profit margin differences before concluding relative value
- P/S is most useful for **mature, cyclical, or loss-making companies** where P/E is meaningless