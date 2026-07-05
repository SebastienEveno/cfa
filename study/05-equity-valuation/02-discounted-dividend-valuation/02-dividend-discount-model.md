## Summary: The Dividend Discount Model (CFA Level II)

---

### Core DDM Expressions

#### Single Holding Period
$$\boxed{V_0 = \frac{D_1 + P_1}{1+r}}$$

Where $D_1$ = expected dividend at end of Year 1, $P_1$ = expected price at end of Year 1, $r$ = required return.

**Worked example (Carrefour):**
$$V_0 = \frac{0.46 + 23.00}{1.08} = €21.72$$

---

#### Multiple Holding Periods (n-period)
$$\boxed{V_0 = \sum_{t=1}^{n} \frac{D_t}{(1+r)^t} + \frac{P_n}{(1+r)^n}}$$

**Worked example (5-year horizon, r = 10%):**
- Dividends: $2.00, $2.10, $2.20, $3.50, $3.75
- Terminal price at Year 5: $40.00

$$V_0 = 1.818 + 1.736 + 1.653 + 2.391 + 2.328 + 24.837 = \mathbf{\$34.76}$$

- PV of dividends: $9.926
- PV of terminal price: $24.837

> **Typical pattern**: Terminal price dominates total value — quality of terminal price estimate is critical.

---

#### General Form (Infinite Horizon — Williams 1938)
$$\boxed{V_0 = \sum_{t=1}^{\infty} \frac{D_t}{(1+r)^t}}$$

The **general DDM**: value = PV of **all** future dividends into perpetuity.

**Key insight**: Even for a finite-horizon investor, stock value depends on ALL future dividends — directly (dividends received) and indirectly (dividends after sale determine the selling price).

---

### The Forecasting Problem

Forecasting infinite dividends individually is impractical — analysts use **two broad simplification approaches**:

#### Approach 1: Stylized Growth Patterns

| Pattern | Model |
|---------|-------|
| Constant growth forever | **Gordon Growth Model** |
| Two stages of growth | **Two-stage model or H-model** |
| Three stages of growth | **Three-stage model** |

#### Approach 2: Finite Forecast + Terminal Value

1. Forecast individual dividends for 3–10 years (pro forma financial analysis)
2. At the terminal point, either:
   - Assign remaining dividends to a **stylized growth pattern** (Gordon growth model applied to terminal dividends), or
   - Estimate a **terminal price** using a multiple (e.g., P/E × forecasted EPS, or P/B × forecasted BV)
3. Discount everything back to today

**Horizon selection**: depends on perceived **earnings visibility/predictability** of the company.

---

### Key Relationships

| As holding period extends | Effect |
|--------------------------|--------|
| +1 year → +1 dividend term | Mechanically adds one more PV of dividend |
| n → ∞ | $P_n$ term disappears; value = PV of all dividends |
| Short horizon | Terminal price dominates value |
| Long horizon | Dividends increasingly dominate |

---

### Practical Usage

- ~80% of CFA members use DCF approaches for equity analysis
- ~35% of DCF users apply DDM specifically
- **Spreadsheets**: particularly useful for implementing individual dividend forecasts

---

### Exam Tips

- **Single period**: $V_0 = (D_1 + P_1)/(1+r)$ — always discount both dividend AND price
- **Multi-period**: sum PV of each dividend + PV of terminal price
- **General DDM**: assumes dividends paid at end of each period
- **Terminal price often dominates** — small errors in terminal price assumption have large valuation impact
- **Two simplification paths**: stylized growth patterns (Gordon, two-stage, three-stage) OR individual forecast + terminal value
- The DDM's forecasting challenge is the reason simplified growth models exist — the exam will test all major variants