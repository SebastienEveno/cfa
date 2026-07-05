## Summary: Market-Based Valuation — Module 4 Wrap-Up (CFA Level II)

A closing summary consolidating the entire module for exam use.

---

### Two Methods for Using Multiples

| Method | Economic Rationale | Output |
|--------|-------------------|--------|
| **Comparables** | Law of one price — similar assets should sell at similar prices | Relative valuation (over/under/fairly valued vs. benchmark) |
| **Forecasted fundamentals** | DCF models — multiples reflect expected cash flows | Justified multiple → absolute fair value estimate |

---

### Price Multiples — Master Reference

| Multiple | Key Rationale | Key Drawback | Justified by Fundamentals |
|---------|--------------|-------------|--------------------------|
| **P/E** | Earnings = primary value driver | EPS can be negative, volatile, manipulated | ↑ growth → ↑ P/E; ↑ r → ↓ P/E |
| **P/B** | Stable; works when EPS negative | Ignores off-balance-sheet assets; book value ≠ market value | ↑ ROE → ↑ P/B; ↑ r → ↓ P/B |
| **P/S** | Sales rarely negative; hard to manipulate | Ignores cost structure; revenue recognition risk | ↑ margin, ↑ g → ↑ P/S; ↑ r → ↓ P/S |
| **P/CF** | Less manipulable than earnings; more stable | Definition varies; some ignore WC changes | ↑ g → ↑ P/CF; ↑ r → ↓ P/CF |
| **D/P (yield)** | Component of total return; less risky than capital gains | Only one return component; dividend displacement | ↑ g → ↓ yield; ↑ r → ↑ yield |

---

### Enterprise Value Multiples

| Multiple | Advantage | Key Limitation |
|---------|-----------|---------------|
| **EV/EBITDA** | Capital structure neutral; EBITDA often positive | Ignores WC changes and capex; D&A must ≈ capex for EBITDA ≈ FCFF |
| **EV/Sales** | Better than P/S for different capital structures | Ignores cost structure |
| **EV/FCFF** | Strongest theoretical link | Most volatile; often negative |
| **EV/EBIT or EBITA** | Used when D&A not material | Less precise about capital investment |

**Justified EV/EBITDA**: ↑ FCFF growth, ↑ ROIC → higher; ↑ WACC → lower.

---

### Key Formulas

| Multiple | Justified Formula |
|---------|------------------|
| **Leading P/E** | $(1-b)/(r-g)$ |
| **Trailing P/E** | $(1-b)(1+g)/(r-g)$ |
| **P/B** | $(ROE-g)/(r-g)$ |
| **P/S** | $(PM \times (1-b)(1+g))/(r-g)$ |
| **Dividend yield** | $r-g$ |
| **PVGO** | $P_0 - E_1/r$ |

---

### EPS Normalization Methods

| Method | Formula | Best When |
|--------|---------|----------|
| Historical average EPS | Average EPS over full cycle | Simple; doesn't adjust for size |
| **Average ROE × Current BVPS** | $\overline{ROE} \times BVPS_{current}$ | **Preferred** — reflects current company size |

---

### Averaging Multiples

$$\text{Harmonic mean} < \text{Arithmetic mean}$$

| Method | Outlier Sensitivity | Best Use |
|--------|-------------------|---------|
| Arithmetic mean | Highly sensitive (both tails) | Simple average |
| Median | Insensitive to both tails | Peer group benchmarks |
| Harmonic mean | Reduces large outliers; may aggravate small | Simple average with outlier risk |
| **Weighted harmonic mean** | Same as harmonic but market-cap weighted | **Index P/E calculation** |

---

### Momentum Indicators

| Indicator | Formula | Interpretation |
|-----------|---------|---------------|
| **Earnings surprise** | $EPS_t - E(EPS_t)$ | Positive = above expectations |
| **Scaled surprise** | Surprise / σ(analyst forecasts) | Adjusts for analyst disagreement |
| **SUE** | Surprise / σ(historical surprises) | Adjusts for company-specific forecast accuracy |
| **Relative strength** | Asset/Index, scaled to 1.0 at base | >1 = outperformed; <1 = underperformed |

---

### International Considerations

- **Most comparable across borders**: P/CFO, P/FCFE (cash flows less affected by accounting)
- **Most distorted**: P/E, P/B, EV/EBITDA (start from accrual accounting)
- **Largest IFRS vs. GAAP adjustment**: Goodwill
- **Most frequent adjustment**: Pensions

---

### Practical Issues

| Issue | Solution |
|-------|---------|
| **Look-ahead bias** | Use only data available at time of decision |
| **Screening limitations** | No qualitative factors; no control over inputs |
| **Outlier P/Es** | Use median or harmonic mean |
| **Negative EPS** | Use earnings yield (E/P) or normalize EPS |
| **Cross-country comparison** | Adjust for accounting differences; prefer cash flow multiples |

---

### One-Page Mental Model

```
Two methods: Comparables (law of one price) | Fundamentals (DCF-derived)

Price multiples (equity-level):
P/E: earnings power | works except when EPS negative/volatile
P/B: balance sheet | works when EPS negative; ROE-driven
P/S: revenue | most manipulation-resistant; no cost info
P/CF: cash flow | less manipulation; multiple CF definitions

EV multiples (firm-level, capital structure neutral):
EV/EBITDA: most used; pre-interest; add D&A back
EV/Sales: P/S alternative for leveraged companies
EV/FCFF: theoretically strongest; most volatile

Normalization: use avg ROE × current BVPS (preferred)
Averaging: weighted harmonic mean for indexes; median for peer groups
Momentum: surprise/SUE (earnings-based) | relative strength (price-based)
Screening: efficient but lacks qualitative factors and input control
```