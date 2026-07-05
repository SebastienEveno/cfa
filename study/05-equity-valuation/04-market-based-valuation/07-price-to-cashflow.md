---
layout: page
title: Price/Cash Flow (P/CF)
permalink: /study/05-equity-valuation/04-market-based-valuation/07-price-to-cashflow/
prev: /cfa/study/05-equity-valuation/04-market-based-valuation/06-price-to-sales/
next: /cfa/study/05-equity-valuation/04-market-based-valuation/08-price-to-dividends/
---
## Summary: Price/Cash Flow (P/CF) (CFA Level II)

---

### Why Use Price to Cash Flow?

**Rationales:**
- Cash flow is **harder to manipulate** than earnings
- **More stable** than EPS → more stable multiples
- Addresses differences in **accounting conservatism** between companies
- Empirically linked to **long-run average return differences**

**Drawbacks:**
- EPS + noncash charges definition **ignores working capital changes** and non-cash revenues → misses aggressive revenue recognition
- **FCFE is theoretically superior** but more volatile and more frequently negative
- Companies can manipulate **operating cash flow** (securitizing receivables, outsourcing AP)
- **IFRS vs. US GAAP** comparability issues: IFRS allows interest/dividends to be classified in operating, investing, or financing; US GAAP requires all in operating

---

### Four Cash Flow Definitions

| Definition | Symbol | Description | Key Issue |
|-----------|--------|-------------|----------|
| **EPS + noncash charges** | CF | EPS + D&A + depletion | Simple approximation; ignores WC changes |
| **Cash flow from operations** | CFO | From statement of cash flows | Better but IFRS vs. GAAP classification issues |
| **Free cash flow to equity** | FCFE | CFO − CapEx ± net borrowing | Theoretically strongest; most volatile; often negative |
| **EBITDA** | EBITDA | Earnings + interest + taxes + D&A | Used in **EV/EBITDA** (not P/EBITDA) |

> **Important**: When someone says "price to cash flow," always clarify **which definition** is being used.

---

### The Depreciation Methods Illustration (Example 28)

Two identical companies, different depreciation methods:

| | Company A (Straight-Line) | Company B (Accelerated) |
|--|--------------------------|------------------------|
| EPS growth | Flat at $10 | **29% CAGR** ($7.50 → $12.50) |
| Cash flow/share | $15 (constant) | $15 (constant) |

**Key lesson**: Accelerated depreciation creates **artificial earnings momentum** — Company B looks like a growth company, but cash flow is identical. P/CF (or P/FCFE) would correctly show both as equivalent; P/E would misleadingly favor Company B.

---

### Calculating P/CF (Example 29 — Philips)

$$CF = EPS + D\&A\ \text{per share} = €1.41 + €1.17 = €2.58$$
$$P/CF = €36.31/€2.58 = \mathbf{14.1\times}$$

---

### Justified P/CF Based on Fundamentals

**Process:**
1. Estimate intrinsic value using appropriate DCF model (e.g., constant growth FCFE)
2. Divide intrinsic value by cash flow (per your chosen definition)

$$\text{Justified P/CF} = \frac{V_0}{CF_0} \qquad \text{Justified P/FCFE} = \frac{V_0}{FCFE_0}$$

**Worked example (Colgate-Palmolive):**
- FCFE = $2.66, CF = $3.26, $r = 7.4\%$, $g = 3.2\%$

$$V_0 = \frac{2.66 \times 1.032}{0.074 - 0.032} = \mathbf{\$65.36}$$

$$\text{Justified P/CF} = \frac{65.36}{3.26} = \mathbf{20.05\times}$$

$$\text{Justified P/FCFE} = \frac{65.36}{2.66} = \mathbf{24.57\times}$$

> **Direction**: Justified P/CF is **inversely related to $r$** and **positively related to growth**.

---

### EBITDA — Use EV/EBITDA, Not P/EBITDA

**Why**: EBITDA is a **pre-interest** measure → belongs to all capital providers (debt + equity)

→ Use **EV/EBITDA** (numerator includes debt value) — not P/EBITDA (equity only numerator)

---

### P/CF vs. P/FCFE — Ranking Differences

| Issue | P/CF or P/CFO | P/FCFE |
|-------|--------------|--------|
| **Capex timing** | Not affected | Sensitive — same total capex over 2 years but different timing → very different FCFE in each year |
| **Volatility** | Lower | Higher |
| **Negative values** | Rare | More common (when capex > CFO) |
| **Theoretical basis** | Approximate | Stronger (FCFE = actual equity cash flow) |

**Solution for timing issue**: Use **average FCFE** over multiple periods rather than single-year FCFE.

---

### Comparables Example (Company A vs. B)

| Metric | Company A | Company B |
|--------|----------|----------|
| P/CF | **9.8×** (lower) | 11.4× |
| P/FCFE | **62×** | NMF (negative FCFE) |
| 5-year CF growth forecast | **13.4%** (higher) | 10.6% |
| Beta | 1.50 | 1.50 |

**Conclusion**: Company A has **lower P/CF but higher growth** and **equal risk** → **appears relatively undervalued**.

Negative FCFE for Company B → needs **external financing** for growth → additional risk.

---

### Exam Tips

- **Always specify which cash flow definition** is being used — P/CF is ambiguous
- **EPS + D&A** = simplest approximation; ignores WC changes → can miss revenue manipulation
- **IFRS vs. GAAP**: IFRS classifies interest/dividends more flexibly → adjust before comparing
- **EV/EBITDA preferred over P/EBITDA** — EBITDA is pre-debt, so enterprise value is the right numerator
- **P/FCFE**: theoretically strongest but practically most volatile; NMF when FCFE is negative
- **Depreciation method differences**: P/CF adjusts for them automatically; P/E does not
- **Justified P/CF**: intrinsic value / CF per share — inversely related to $r$, positively to $g$
- **Negative FCFE** signals capital intensity / growth investment → company needs external funding