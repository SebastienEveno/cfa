---
layout: page
title: "Valuation — Net Asset Value (NAV) Approach for REITs"
permalink: /study/08-alternatives/03-publicly-traded-securities/03-valuation-net-asset-value-approach/
prev: /cfa/study/08-alternatives/03-publicly-traded-securities/02-types-of-publicly-traded-securities/
next: /cfa/study/08-alternatives/03-publicly-traded-securities/04-valuation-relative-value-approach/
---
## Summary: Valuation — Net Asset Value (NAV) Approach for REITs (CFA Level II — Alternative Investments)

---

### Three Equity Valuation Approaches

1. **Asset value estimates** (NAV) — focus of this section
2. **Price multiple comparisons**
3. **Discounted cash flow**

**Two measures of "value":**

| Measure | Basis |
|---------|-------|
| **BVPS** | Reported accounting values (historical cost) |
| **NAVPS** | **Market values** for assets — the primary REIT/REOC valuation tool |

> **Regional convention**: Price-to-NAV is the **primary metric in Europe and Asia**; US analysts more commonly use price multiples of gross cash flow (FFO/AFFO).

---

### What NAVPS Should Include

$$\boxed{NAVPS = \frac{\text{Market value of assets} - \text{Market value of liabilities}}{\text{Shares outstanding}}}$$

**Beyond real estate value, NAVPS incorporates:**
- Non-asset-based income streams (fee/management income)
- Non-real-estate assets (including cash)
- Net of contingent liabilities
- Value added by management

---

### Accounting Standards: IFRS vs. US GAAP

| Standard | Model | Impact |
|----------|-------|--------|
| **IFRS** | Cost model OR **Fair value model** (company choice, must be consistent) | Fair value model → accounting values may be directly relevant |
| **US GAAP** | **Historical cost** (mandatory) | Distorts economic value — understates appreciating assets, may overstate depreciation |

**IFRS Fair Value Model key rules:**
- Must reliably determine fair value on a **continuing basis**
- Once chosen, **must continue** using fair value model until disposal or change in use
- Applies **even if** comparable transactions become less frequent

---

### NOI — The Starting Point for NAV

$$\boxed{NOI = \text{Gross rental revenue} - \text{Vacancy/collection loss} - \text{Operating expenses}}$$

**NOI is analogous to EBIT** — before interest, taxes, depreciation, amortization.

---

### NAVPS Calculation — Step-by-Step Process (Exhibit 2 Example)

| Step | Line Item | Value ($000s) |
|------|-----------|--------------|
| 1 | Last-12-month real estate NOI | 270,432 |
| 2 | − Non-cash rent (straight-line adjustment) | (7,667) |
| 3 | + Full-year impact of mid-year acquisitions | +4,534 |
| 4 | = **Pro forma cash NOI** | **267,299** |
| 5 | + Next-12-month growth (1.5%) | +4,009 |
| 6 | = **Estimated next-12-month cash NOI** | **271,308** |
| 7 | ÷ Cap rate (7.00%) | — |
| 8 | = **Estimated value of operating real estate** | **3,875,829** |
| 9 | + Cash and equivalents | +65,554 |
| 10 | + Land held for development | +34,566 |
| 11 | + Accounts receivable | +45,667 |
| 12 | + Prepaid/other assets | +23,456 |
| 13 | = **Estimated gross asset value** | **4,045,072** |
| 14 | − Total debt | (1,010,988) |
| 15 | − Other liabilities | (119,886) |
| 16 | = **Net asset value** | **2,914,198** |
| 17 | ÷ Shares outstanding | 55,689 |
| **NAVPS** | | **$52.33** |

**Key adjustments explained:**

**Non-cash rent removal**: Accounting **"straight-lines"** rent from contractual step-up leases → reported revenue ≠ actual cash received. Early lease years: tenant pays LESS than reported; later years: tenant pays MORE. Analysts remove this accounting artifact to get true cash NOI.

**Full-year acquisition impact**: Properties acquired mid-year only contributed partial-year NOI in reported figures → gross up to reflect a **full year's** contribution.

**Growth adjustment**: Apply expected forward growth rate to get next-12-month NOI (forward-looking, not trailing).

**Cap rate**: Derived from **recent comparable market transactions** — not an accounting figure.

---

### What Gets Excluded from NAV

| Excluded Item | Reason |
|---------------|--------|
| **Goodwill** | Not a "hard" economic asset |
| **Deferred financing expenses** | Accounting artifact |
| **Deferred tax assets/liabilities** | Provisions, not economic liabilities |
| **Income/capital gains taxes on liquidation** | Cannot predict sale circumstances; company may remain a going concern |

> **Debt is adjusted to market value** if significantly different from face value (e.g., due to interest rate changes).

---

### NAVPS Application — Market Context

| Market | % of Commercial RE Held by Listed REITs/REOCs (2022) |
|--------|--------------------------------------------------------|
| **United States** | 12% |
| **Europe** | 4% |
| **Singapore** | **30%** |

---

### Three Methods to Calculate NAV

1. **Cap rate approach**: NOI ÷ Cap rate (most common)
2. **Value per square foot/unit**: Applied to comparable transactions
3. **Appraised values**: From company's financial statements (especially IFRS fair value reporters)

**Key caveat**: Cap rates and per-sq-ft values derive from **private market discount rate assumptions**, which may **differ** from the discount rates implied by public REIT share prices.

---

### Premium/Discount to NAV — Interpretation

**Historical range**: REITs/REOCs have traded from **+25% premium** to **−25% discount** to NAV over time.

**What drives premium/discount:**

| Factor | Effect |
|--------|--------|
| **Strong management track record** | Premium justified |
| **Growth pipeline / value-add opportunities** | Premium justified |
| **High leverage** | May cause discount |
| **Weak governance** | Discount |
| **Market/sector outlook** | Varies widely |

**Why premiums can be justified** (institutional view):
1. **Liquidity premium**: Public shares trade daily vs. illiquid private real estate → warrants **lower required return** (higher value) in public markets
2. **Superior management**: Competitive public markets attract better management teams → better operating performance

**Trading below NAV consequences**:
- Harder to raise capital for acquisitions/development
- Selling equity below NAV is **dilutive** to existing shareholders
- Can limit long-term growth potential

---

### Important Limitations of NAV-Based Valuation

1. **Going-concern mismatch**: NAV treats company as a **static asset pool** — ignores management's ability to buy/sell assets and add value over time
2. **Illiquid market subjectivity**: When few transactions occur, NAV estimates become highly subjective
3. **Large portfolio effects**: 
   - **Portfolio premium**: Strategic buyers may pay extra for acquiring many properties at once
   - **Portfolio discount**: Few buyers exist for large, specific-use portfolios
4. **Complex assets**: Undeveloped land, unique large properties, service businesses, joint ventures — all complicate accurate NAV estimation

---

### NAV as Relative Valuation Tool

**Practical application**: Since REITs collectively trade at premiums or discounts (not always at exact NAV), investors often use NAV **relatively**:
- If REITs trade **above** NAV → buy the one with the **smallest premium**
- If REITs trade **below** NAV → sell the one with the **smallest discount**

**Implied cap rate**: Work backward from current stock price through the NAV model to solve for the **market-implied cap rate**.

$$\boxed{\text{Implied cap rate} = \frac{NOI}{\text{Market-derived property value from current stock price}}}$$

> Comparing implied cap rates across similar REITs reveals whether the market is pricing comparable portfolios differently.

---

### Exam Tips

- **NAVPS = (Market value assets − Market value liabilities) / Shares outstanding** — memorize this
- **Cap rate approach**: NOI/Cap rate is the most common NAV calculation method
- **Non-cash rent adjustment**: Remove straight-line rent to get true cash NOI (critical exam calculation)
- **Full-year acquisition adjustment**: Gross up partial-year NOI contributions to full-year run-rate
- **Growth adjustment**: Apply forward growth rate to get next-12-month NOI (forward-looking basis)
- **Exclude soft items**: Goodwill, deferred tax assets/liabilities, deferred financing costs — NOT part of "hard" economic value
- **Premium to NAV**: justified by strong management, liquidity benefit, growth pipeline
- **Discount to NAV**: can signal governance concerns, weak management, or difficulty raising capital
- **Land is usually book value** (not market value) due to illiquidity and valuation difficulty
- **Implied cap rate**: reverse-engineer from stock price to compare relative REIT valuations
- **US GAAP = historical cost** (understates appreciating assets); **IFRS allows fair value** (more economically relevant if elected)