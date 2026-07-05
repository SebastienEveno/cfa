---
layout: page
title: Price/Dividends and Dividend Yield
permalink: /study/05-equity-valuation/04-market-based-valuation/08-price-to-dividends/
prev: /cfa/study/05-equity-valuation/04-market-based-valuation/07-price-to-cashflow/
next: /cfa/study/05-equity-valuation/04-market-based-valuation/09-entreprise-value-to-ebitda/
---
## Summary: Price/Dividends and Dividend Yield (CFA Level II)

---

### Core Concept

**Total return = Dividend yield + Capital appreciation**

Dividend yield is used as both a **return component** and a **valuation indicator**.

$$\boxed{\text{Trailing dividend yield} = \frac{\text{Dividend rate}}{P_0}}$$

$$\boxed{\text{Leading dividend yield} = \frac{D_1 \text{ (forecasted)}}{P_0}}$$

---

### Calculating the Dividend Rate

| Company Type | Dividend Rate |
|-------------|--------------|
| **Quarterly dividends** | Most recent quarterly dividend × 4 |
| **Semiannual dividends** (interim ≠ final) | Most recent full year's total dividend |

**Note**: P/D is undefined when dividends = 0. Since many companies don't pay dividends, **dividend yield (D/P) is preferred** over P/D — it equals zero for non-dividend-paying stocks (defined, not undefined).

**Worked examples:**
- BCE (quarterly, $0.58 most recent): Rate = $0.58 × 4 = $2.32 → Yield = $2.32/$39.53 = **5.87%**
- BT ADR (semiannual, varies): Rate = most recent full year total = $0.976 → Yield = $0.976/$15.20 = **6.42%**

---

### Rationales for Using Dividend Yield

| Rationale | Detail |
|-----------|--------|
| **Component of total return** | Direct contribution to investor return |
| **Less risky than capital appreciation** | Dividends more certain than price appreciation |

---

### Drawbacks

| Drawback | Detail |
|---------|--------|
| **Only one component of return** | Ignores capital appreciation → suboptimal use of information |
| **Dividend displacement of earnings** | High payout → lower retained earnings → potentially lower future growth (though empirical evidence is mixed) |
| **Risk argument is debatable** | Assumes markets systematically misprice relative risk of return components |

---

### Justified Dividend Yield — Gordon Growth Model

$$\boxed{D_1/P_0 = r - g}$$

**Key relationships:**
- **Higher growth** → **Lower dividend yield** (growth stocks have low yields)
- **Higher required return** → **Higher dividend yield**

> **Implication**: High dividend yield stocks are associated with **value** (not growth) investment style.

---

### Using Dividend Yield in Comparables

**Key fundamentals to consider:**
1. **Expected earnings growth** — explains differences in yield (lower yield = higher growth expected)
2. **Dividend safety** — assess probability dividend will be cut/eliminated:
   - **Payout ratio**: high payout relative to peers → less secure dividend
   - **Interest coverage ratio**: ability to service debt
   - **Net debt/EBITDA**: balance sheet strength

---

### Comparables Example (US Electric Utilities)

| Company | Growth | Beta | Dividend Yield | Payout |
|---------|--------|------|---------------|--------|
| Duke Energy | 7.20% | 0.18 | 4.24% | **89%** (high risk) |
| NiSource | 4.63% | 0.22 | 2.70% | NMF (negative EPS) |
| Portland General | 5.20% | 0.24 | **2.76%** | 59% |
| PPL Corp. | **0.60%** | 0.55 | **5.37%** | 63% |

**Analysis:**
- All low beta → similar market risk
- **Duke**: highest yield but 89% payout → dividend at risk
- **NiSource**: NMF payout → negative EPS → dividend sustainability questionable
- **PPL**: highest yield (5.37%) with manageable payout (63%) BUT very low growth (0.60%) and highest beta
- **Portland General**: estimated total return ≈ 2.76% + 5.20% = **7.96%** → attractive with no obvious negatives → selected for further analysis

---

### Exam Tips

- **Dividend rate for quarterly payers**: most recent quarterly × 4
- **Dividend rate for semiannual payers** (with interim ≠ final): use full-year actual
- **D/P = 0** for non-dividend-paying stocks — defined (not NM like P/D)
- **High dividend yield = value style** (from Gordon model: $D_1/P_0 = r - g$; low $g$ → high yield)
- **Payout ratio** is the primary metric for assessing **dividend safety**
- **Total return estimate** = dividend yield + expected earnings growth — useful quick screen
- **High payout relative to peers** → dividend less secure → investigate balance sheet metrics
- Dividend yield alone is insufficient — always consider growth prospects and payout sustainability