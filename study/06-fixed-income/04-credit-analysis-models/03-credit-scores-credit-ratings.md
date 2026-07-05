---
layout: page
title: Credit Scores and Credit Ratings
permalink: /study/06-fixed-income/04-credit-analysis-models/03-credit-scores-credit-ratings/
prev: /cfa/study/06-fixed-income/04-credit-analysis-models/02-modeling-credit-risk/
next: /cfa/study/06-fixed-income/04-credit-analysis-models/04-structural-reduced-form-models/
---
## Summary: Credit Scores and Credit Ratings (CFA Level II — Fixed Income)

---

### Credit Scores vs. Credit Ratings

| Feature | Credit Scores | Credit Ratings |
|---------|--------------|----------------|
| **Market** | Retail (individuals, small businesses) | Wholesale (corporate/sovereign bonds, ABS) |
| **Primary example** | FICO score (US) | Moody's, S&P, Fitch |
| **Focus** | Probability of default | Both POD + LGD (via notching) |
| **Scale** | 300–850 (FICO) | AAA → D (S&P/Fitch); Aaa → D (Moody's) |

---

### FICO Score — Five Components

| Factor | Weight | What It Measures |
|--------|--------|-----------------|
| **Payment history** | **35%** | Delinquencies, bankruptcies, judgments, repossessions |
| **Debt burden** | **30%** | Credit utilization ratios, total amount owed, number of accounts |
| **Length of credit history** | **15%** | Average age of accounts, age of oldest account |
| **Types of credit used** | **10%** | Mix of installment loans, mortgages, consumer finance |
| **Recent credit searches** | **10%** | "Hard" inquiries only (not soft inquiries like self-checks) |

**Not included**: Race, sex, age, salary, occupation, employment history, address.

**Score range**: 300 (lowest) to 850 (perfect). Average ~688–700 in data shown.

**Pro-cyclical behavior**: % of weak scores increased during the 2008–2009 financial crisis, declined afterward.

---

### Example 3 Answer — What Improved Tess's Score?

→ **B. Bank raised her credit limit from $1,000 to $2,500 while she maintained the same balance**

- This **lowers her credit utilization ratio** (debt/limit) → improves **Debt burden** factor (30%)
- **A** (aging one year) has no direct FICO effect — age is not a FICO factor
- **C** (new car loan application) actually **hurts** the score slightly (hard inquiry + new account lowers average account age)
- **D** (self-checking score) has **no effect** — soft inquiries are excluded

---

### Credit Ratings — Key Features

**Three major agencies**: Moody's, Standard & Poor's, Fitch

**Rating focus**: Ordinal rankings that capture **both POD and LGD** — this is why they're called "credit ratings" not just "default ratings."

**Notching**: Rating adjustment for specific debt issues within the same issuer:
- **Issuer rating** = senior unsecured debt (baseline)
- **Subordinated debt**: notched **down** 1–2 levels (lower priority claim → higher expected loss)

**Outlook**: Positive / Stable / Negative — signals potential future rating direction

**Watch**: Indicates imminent rating action under review

---

### The Transition Matrix

**Definition**: Shows the **probability of a rating moving to a different rating** over the next year.

**Key pattern**: Ratings are **stable** (most mass on the diagonal) but skewed toward **downgrades** rather than upgrades.

**Representative one-year transition matrix (selected rows):**

| From\To | AAA | AA | A | BBB | BB | B | CCC/CC/C | D |
|---------|-----|-----|-----|-----|-----|-----|---------|---|
| AAA | **90.00%** | 9.00% | 0.60% | 0.15% | 0.10% | 0.10% | 0.05% | 0.00% |
| A | 0.05% | 2.50% | **87.50%** | 8.40% | 0.75% | 0.60% | 0.12% | 0.08% |
| BB | 0.01% | 0.06% | 0.30% | 7.75% | **79.50%** | 8.75% | 2.38% | 1.25% |
| CCC/CC/C | 0.00% | 0.01% | 0.12% | 0.87% | 1.65% | 18.50% | **49.25%** | 29.60% |

**Representative credit spreads (10-year bonds):**

| Rating | AAA | AA | A | BBB | BB | B | CCC/CC/C |
|--------|-----|-----|-----|-----|-----|-----|---------|
| Spread | 0.60% | 0.90% | 1.10% | 1.50% | 3.40% | 6.50% | 9.50% |

---

### Expected Return with Credit Migration

**Key formula** (no default; uses modified duration):

$$\boxed{\text{\% Price change from rating migration} = -\text{ModDur} \times \Delta\text{Spread}}$$

$$\boxed{\text{Expected \% price change} = \sum_j P_{ij} \times (-\text{ModDur} \times \Delta\text{Spread}_j)}$$

**Then:**
$$\boxed{\text{Expected return} \approx YTM + \text{Expected \% price change}}$$

---

### Worked Example — A Rated Bond (ModDur = 7.2)

**Spread changes and price impacts:**

| Transition | Spread Change | Price Impact |
|-----------|--------------|-------------|
| A → AAA | 0.60% − 1.10% = −0.50% | −7.2 × (−0.50%) = **+3.60%** |
| A → AA | 0.90% − 1.10% = −0.20% | −7.2 × (−0.20%) = **+1.44%** |
| A → A | No change | **0%** |
| A → BBB | 1.50% − 1.10% = +0.40% | −7.2 × (+0.40%) = **−2.88%** |
| A → BB | 3.40% − 1.10% = +2.30% | −7.2 × (+2.30%) = **−16.56%** |
| A → B | 6.50% − 1.10% = +5.40% | −7.2 × (+5.40%) = **−38.88%** |
| A → CCC/CC/C | 9.50% − 1.10% = +8.40% | −7.2 × (+8.40%) = **−60.48%** |

**Expected % price change:**
$$(0.0005)(3.60\%) + (0.025)(1.44\%) + (0.875)(0\%) + (0.084)(-2.88\%) + (0.0075)(-16.56\%) + (0.006)(-38.88\%) + (0.0012)(-60.48\%) = \mathbf{-0.6342\%}$$

**Expected return ≈ YTM − 0.6342%**

---

### Why Credit Migration Reduces Expected Returns

**Two systematic reasons:**

| Reason | Explanation |
|--------|-------------|
| **Asymmetric transition probabilities** | Higher probability of downgrade than upgrade (transitions skewed downward in the matrix) |
| **Asymmetric spread changes** | Spread increases on downgrades are **much larger** than spread decreases on upgrades |

> **Net effect**: Expected return is consistently **below YTM** once migration risk is accounted for.

---

### Example 4 — AAA Bond (ModDur = 7.3)

**Price impacts from transitions:**

| Transition | Impact |
|-----------|--------|
| AAA → AA | −7.3 × (0.90%−0.60%) = **−2.19%** |
| AAA → A | −7.3 × (1.10%−0.60%) = **−3.65%** |
| AAA → BBB | −7.3 × (1.50%−0.60%) = **−6.57%** |
| AAA → BB | −7.3 × (3.40%−0.60%) = **−20.44%** |
| AAA → B | −7.3 × (6.50%−0.60%) = **−43.07%** |
| AAA → CCC/CC/C | −7.3 × (9.50%−0.60%) = **−64.97%** |

**Expected % price change:**
$$(0.90)(0\%) + (0.09)(-2.19\%) + (0.006)(-3.65\%) + (0.0015)(-6.57\%) + (0.001)(-20.44\%) + (0.001)(-43.07\%) + (0.0005)(-64.97\%) = \mathbf{-0.3249\%}$$

**Expected return ≈ YTM − 32.5 bps** ✅

---

### Exam Tips

- **FICO weights**: 35% payment history, 30% debt burden — these two dominate
- **Soft inquiries** (self-check, employment verification) do **NOT** affect FICO scores
- **Credit rating = POD + LGD** (via notching); credit score = POD only
- **Notching**: subordinated debt rated **lower** than senior unsecured (higher LGD)
- **Migration formula**: Price change = −ModDur × ΔSpread; weight by transition probabilities
- **Expected return < YTM**: migration risk is asymmetric — more likely to worsen than improve
- **RadioShack**: real-world example of ratings stability punctuated by accelerating decline (A− for 12 years, then rapid deterioration to D over a few years)
- **For investment-grade bonds**: default probability in the transition matrix is small but non-zero — can often be ignored for expected return calculation; for non-investment-grade bonds, must include D transition