## Summary: Valuation Indicators — Issues in Practice (CFA Level II)

---

### Averaging Multiples — Harmonic Mean

**Problem with arithmetic mean**: Heavily influenced by large outliers (e.g., Charter at 70.67× inflates the mean).

**Three averaging methods for multiples:**

| Method | Formula | Characteristic |
|--------|---------|----------------|
| **Arithmetic mean** | $\bar{X} = \frac{\sum X_i}{n}$ | Most common; most affected by large outliers |
| **Harmonic mean** | $H = \frac{n}{\sum(1/X_i)}$ | Reciprocal of average of reciprocals; **gives less weight to large values** |
| **Weighted harmonic mean** | $WH = \frac{1}{\sum w_i/X_i}$ | Uses market value weights; used by **index vendors** |
| **Median** | Middle value | Not affected by outliers at either extreme |

**Key relationships** (unless all values are equal):
$$\text{Harmonic mean} < \text{Arithmetic mean}$$

**Portfolio P/E example:**
| Method | P/E |
|--------|-----|
| Arithmetic mean | **15.00** |
| Weighted mean | **14.50** |
| Harmonic mean | **13.33** |
| **Weighted harmonic mean** | **12.90** ← exact portfolio P/E |

> **Weighted harmonic mean** = exact portfolio P/E (ratio of total market cap to total earnings). Index fund vendors use this for average P/E of indexes.

**Telecom example (with Charter at 70.67×):**
| Method | With Charter | Without Charter |
|--------|-------------|----------------|
| Arithmetic mean | **25.30** | 16.43 |
| Median | **15.23** | 15.03 |
| Harmonic mean | **17.70** | 15.39 |

→ **Harmonic mean (17.70)** is much more representative than arithmetic mean (25.30).

**Harmonic mean properties:**
- **Mitigates large outliers** (same direction as median)
- **May aggravate small outliers** (near zero) — but bounded by zero on the downside
- Harmonic mean handles positive outliers; median handles both positive and negative outliers

---

### Using Multiple Valuation Indicators

**Why use multiple indicators?**
- No single indicator is consistently correct
- Each multiple provides a different "piece of the puzzle"
- Convergence of multiple indicators strengthens conviction

**BofA Merrill Lynch Survey (2012) — Most Used Factors:**

| Usage Level | Factors |
|------------|---------|
| **High (>50%)** | P/E, Beta, EV/EBITDA, ROE, Size, P/B |
| **Medium (30-50%)** | P/FCF, Earnings revision, Margins, Relative strength, EPS momentum, D/E, PEG, DDM/DCF, P/CF |
| **Low (<30%)** | Net Debt/EBITDA, EPS surprise, EV/Sales, ROA, etc. |

**Average factors used**: ~9.3 per investor (1989–2012 surveys)

---

### Look-Ahead Bias

**Definition**: Using information that was **not available** at the time of the investment decision being analyzed.

**Example**: Back-testing a strategy in early January 2019 using full-year 2018 EPS when those results weren't yet reported → look-ahead bias.

**Correct approach**: Use only data that was **actually available** at each decision point (i.e., the most recent four reported quarters, not unreported quarters).

---

### Stock Screening

**Definition**: Applying multiple criteria to reduce an investment universe to a smaller set of candidates.

**Advantages:**
- Efficient — quickly narrows large universes
- Systematic and reproducible

**Limitations:**
- **No control over input calculations** in commercial databases (EPS definitions, adjustments)
- **No qualitative factors** — accounting quality, management, competitive position
- May identify stocks with low multiples for good reason (low growth, high risk, poor profitability)
- Must account for **look-ahead bias** when back-testing

**Larsen's Screen Example:**

| Criterion | Stocks Passing |
|-----------|---------------|
| P/E < 20.0 | 2,096 |
| P/B < 2.0 | 1,384 |
| PEG < 1.0 | 89 |
| Dividend yield ≥ 3.0% | 23 |
| Market cap > $10B | **10** |

**Profile of Larsen's strategy**: **Large-cap value investor**
- All "less than" criteria for multiples → value orientation
- No explicit growth rate criteria, no momentum → not growth-oriented
- **Missing**: profitability criteria, risk measurements, qualitative factors, momentum indicators

---

### Sector Rotation

Multiples and momentum indicators applied to **industries and sectors** (not just individual stocks) → identify relatively undervalued/overvalued sectors → **overweight outperforming sectors**.

---

### Exam Tips

- **Weighted harmonic mean** = exact index P/E (market-cap weighted) — used by index vendors
- **Harmonic mean < Arithmetic mean** (always, unless all values are equal)
- **Harmonic mean** best for controlling large outliers; **median** controls both large and small outliers
- **Look-ahead bias**: use only information available at the time of decision — critical for back-testing
- **Screening limitations**: no qualitative factors, no control over input calculations, data-driven only
- **Multiple indicators**: no single right answer; convergence strengthens conviction
- **Sector rotation**: same principles applied at sector/industry level