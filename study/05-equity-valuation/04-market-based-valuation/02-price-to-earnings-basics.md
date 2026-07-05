---
layout: page
title: Price/Earnings — The Basics
permalink: /study/05-equity-valuation/04-market-based-valuation/02-price-to-earnings-basics/
prev: /cfa/study/05-equity-valuation/04-market-based-valuation/01-introduction/
next: /cfa/study/05-equity-valuation/04-market-based-valuation/04-using-pe-in-valuation/
---
## Summary: Price/Earnings — The Basics (CFA Level II)

---

### Why Use P/E?

**Rationales:**
- Earning power is the **primary driver of investment value**
- P/E is the **most widely recognized** valuation multiple (ranks #1 in surveys)
- Empirically, low P/E stocks have been associated with **higher long-run average returns**

**Drawbacks:**
- EPS can be **zero, negative, or insignificantly small** → P/E becomes meaningless
- Difficult to separate **recurring from nonrecurring** earnings components
- Accounting choices and estimates may **distort EPS** comparability across companies

---

### Trailing vs. Forward P/E

| | Trailing P/E | Forward P/E |
|--|-------------|------------|
| **Definition** | Price / TTM (last 12 months) EPS | Price / Next year's expected EPS |
| **Also called** | Current P/E | Leading or prospective P/E |
| **Direction** | Backward-looking | **Forward-looking (preferred for valuation)** |
| **Issue** | May include nonrecurring items | Requires EPS forecasts |

> **For rising earnings**: Forward P/E < Trailing P/E (larger denominator)
> **Always use the same definition** when comparing companies — otherwise P/Es are not comparable.

**NTM P/E** (Next 12-month P/E):
$$NTM\ EPS = \frac{n}{12} \times FY1E\ EPS + \frac{12-n}{12} \times FY2E\ EPS$$

Where $n$ = months remaining in current fiscal year. Useful for comparing companies with **different fiscal year ends**.

---

### Key EPS Adjustments

#### 1. Basic vs. Diluted EPS

| | Basic EPS | Diluted EPS |
|--|----------|------------|
| **Denominator** | Weighted avg. shares outstanding | Shares + all dilutive securities (options, warrants, convertibles) |
| **P/E** | Lower (smaller denominator) | **Higher** (larger denominator) |

> **Analysts prefer diluted EPS** for comparability when dilutive securities differ across companies.

#### 2. Nonrecurring Items — Underlying/Core Earnings

**Goal**: Estimate **underlying earnings** = persistent, recurring earnings only.

**Exclude**: restructuring charges, asset sale gains/losses, write-downs, goodwill impairment, legal provisions, accounting estimate changes.

**Key warnings:**
- Company-reported "core earnings" may not be comparable across companies — bases differ
- **Analyst must make independent judgment** — don't simply rely on company-supplied core EPS
- Nonrecurring items often appear **within continuing operations** — can't rely on income statement classification alone
- Items the company excludes (e.g., recurring restructuring charges) may actually be recurring → analyst should **not exclude them**

**Worked example (Evergreen PLC):**

| Basis | Trailing EPS | P/E |
|-------|-------------|-----|
| Reported IFRS | £4.52 | **11.1×** |
| Company core EPS | £6.01 | **8.3×** |
| Analyst-adjusted (legal only excluded) | £4.60 | **10.9×** |

#### 3. Normalizing EPS for Business Cycle — The Molodovsky Effect

**Problem**: For cyclical companies, trailing EPS is:
- **Depressed** at cycle bottom → artificially **high P/E**
- **Elevated** at cycle top → artificially **low P/E**

This **countercyclical behavior of P/E** is called the **Molodovsky effect**.

**Solution**: Normalize EPS to mid-cycle conditions.

**Two methods:**

| Method | Formula | Advantage/Limitation |
|--------|---------|---------------------|
| **Historical average EPS** | Average EPS over full cycle | Simple; doesn't reflect size changes |
| **Average ROE × Current BVPS** | $\overline{ROE} \times BVPS_{current}$ | **Preferred** — reflects current company size |

**Worked example (Zenlandia Chemical):**
- Average EPS (2014-2020) = **$0.79** → Normalized P/E = $18.21/$0.79 = **23.1×**
- Average ROE (2014-2020) = 22.6% × Current BVPS $4.82 = **$1.09** → Normalized P/E = $18.21/$1.09 = **16.7×**

> Average ROE method gives **lower, more conservative P/E** because it reflects company growth (BVPS grew 61% over the period).

#### 4. Accounting Comparability Adjustments

When comparing companies using different accounting methods (e.g., **LIFO vs. FIFO** inventory accounting), adjust EPS to a common basis before computing P/Es.

---

### Handling Negative/Zero/Extreme EPS — Earnings Yield (E/P)

**Problem**: Negative or zero EPS → P/E is undefined (zero) or not meaningful (negative).

**Solution**: Use **earnings yield** = $E/P$ (inverse of P/E)

$$\text{Earnings yield} = \frac{EPS}{Price} = \frac{1}{P/E}$$

**Advantages of E/P:**
- Consistent ranking: **higher E/P = cheaper** stock (more earnings per dollar invested)
- Price is **never negative** → avoids ranking issues
- Less susceptible to **outlier-induced skewness** in distributions

**Convention**: Report P/E as **"NM" (not meaningful)** when EPS is negative.

**Worked example (Automobile companies):**

| Company | P/E | E/P |
|---------|-----|-----|
| Fiat Chrysler | 6.0× | 16.71% (cheapest) |
| Honda | 8.3× | 12.06% |
| General Motors | 11.7× | 8.53% |
| Ford | 13.2× | 7.59% |
| Tesla | NM | –2.51% |

---

### Inverse Price Ratios Summary

| Price Ratio | Inverse | Common Use |
|-------------|---------|-----------|
| P/E | **E/P (Earnings yield)** | Both commonly used |
| P/B | B/P (Book to market) | B/P favored in research |
| P/S | S/P | Rarely used in practice |
| P/CF | **CF/P (Cash flow yield)** | Both used |
| P/D | **D/P (Dividend yield)** | Dividend yield far more common |

---

### Forward P/E Calculation Examples

**IBM (stable earnings):**
- FY1 forward P/E = $137.90/$13.91 = **9.9×**
- FY2 forward P/E = $137.90/$14.17 = **9.7×** (close — modest EPS growth)

**Selene Gaming (volatile earnings — 4 different answers!):**

| Definition | EPS | P/E |
|-----------|-----|-----|
| Next 4 quarters | $0.90 | **13.6×** |
| NTM | $0.67 | **18.2×** |
| FY2020 (current year) | –$0.50 | **NM** |
| FY2021 (next year) | $1.50 | **8.1×** |

> **Key lesson**: For volatile earnings, P/E depends dramatically on which EPS definition is used. Always specify which P/E definition is being used.

---

### Exam Tips

- **Diluted EPS always produces a higher P/E** than basic EPS (larger denominator)
- **Trailing P/E > Forward P/E** when earnings are growing
- **Molodovsky effect**: P/E is countercyclical for cyclical companies — high P/E at trough, low P/E at peak
- **Average ROE method preferred** over historical average EPS for normalization — captures company size changes
- **Earnings yield (E/P)**: always use when EPS is negative or near-zero
- **Core earnings**: always independently verify — company-disclosed adjustments may not be comparable
- **NTM P/E**: weighted blend of two fiscal years; useful for cross-company comparison with different fiscal year ends
- **NM**: report negative P/Es as "not meaningful" — never use them in rankings