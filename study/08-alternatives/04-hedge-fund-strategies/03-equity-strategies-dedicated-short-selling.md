---
layout: page
title: "Equity Strategies: Dedicated Short Selling and Short-Biased"
permalink: /study/08-alternatives/04-hedge-fund-strategies/03-equity-strategies-dedicated-short-selling/
prev: /cfa/study/08-alternatives/04-hedge-fund-strategies/02-equity-strategies-long-short/
next: /cfa/study/08-alternatives/04-hedge-fund-strategies/04-equity-strategies-equity-market-neutral/
---
## Summary: 4.03 | Equity Strategies: Dedicated Short Selling and Short-Biased (CFA Level II — Alternative Investments)

---

### Learning Outcome
Same LOS as 4.02 — continues equity-related hedge fund strategy coverage.

---

### Two Sub-Strategies — Dedicated Short vs. Short-Biased

| Type | Approach |
|---|---|
| **Dedicated short-selling** | **Short-only** positions in overvalued equities with deteriorating fundamentals; may vary **cash levels** to moderate short beta, but no long positions |
| **Short-biased** | Less extreme version — searches for the same overvalued targets, but balances shorts with **modest long exposure** (value-oriented or index-oriented) → helps cope with bull markets |

**Shared goal**: Create an **uncorrelated or negatively correlated** return source by targeting failing business models, fraudulent accounting, mismanagement, or other factors souring market perception.

**Historical context**:
$$\boxed{\text{Secular equity market uptrend over decades} \implies \text{Very difficult to be a successful short seller} \implies \text{FEWER such managers exist today than in the 1990s}}$$

**Recent tailwind**: Post-COVID-19 market volatility and economic disruption **increased short-selling opportunities**.

---

### Activist Short Selling

$$\boxed{\text{Activist short selling: take a short position, THEN publicly release research supporting the short thesis}}$$

**Mechanism**: A reputable activist short seller's published research can trigger a **significant price plunge**, into which the manager may **cover part of the short**.

**US regulatory status**: **NOT** deemed market manipulation, **provided**:
1. Information published is **not erroneous**
2. Manager is **not charging** for the information (avoids conflicts of interest)
3. Manager acts **solely in LP investors' best interests**

---

### Investment Characteristics

**Focus**: Overvalued companies with deteriorating fundamentals **not yet perceived by the market**; aim to **maximize returns during market declines**.

### Mechanics and Risks of Short Selling

$$\boxed{\text{Short selling: BORROW securities} \rightarrow \text{SELL high} \rightarrow \text{BUY BACK low (after price decline)} \rightarrow \text{RETURN to lender}}$$

**Costs/requirements**:
- Must **post collateral** with the securities lender
- Must **pay interest** on the securities loan (can be **high** if shares are hard to locate)

**Key risk — recall risk**: 
$$\boxed{\text{Lender may recall securities at an INOPPORTUNE time — e.g., before the expected price decline materializes}}$$

**Asymmetric position sizing risk**:
$$\boxed{\text{Short positions GROW if prices rise AGAINST the short seller, and SHRINK if prices fall (favorably)} — \text{OPPOSITE of long-only investing, making risk management harder}}$$

**Additional operational challenge**: Managers known as active short sellers may find **management access blocked** for research purposes.

### Regulatory Constraints

**US "alternative uptick rule"**: 
$$\boxed{\text{If a stock falls} \geq 10\% \text{ from prior close, a short sale can ONLY execute at a price ABOVE the current best bid}}$$

**Emerging market context**: Some markets have **opened up** to short selling to boost liquidity (e.g., **Saudi Stock Exchange, 2016**) — but regulatory risk remains, since rules can tighten during stress (e.g., **2007–09 GFC**: US SEC **banned new short sales** on designated financial stocks temporarily).

### The "Attack and Retreat" Return Profile

$$\boxed{\text{Given the difficulty of shorting + secular equity uptrend, successful managers adopt a SHORT-TERM "attack and retreat" style}}$$

**Idealized return profile**: 
$$\boxed{\text{Increasingly POSITIVE returns as market DECLINES} \qquad \text{RISK-FREE-like return when market RISES}}$$
*(idealized version: short during downturns, hold government debt otherwise)*

**Realistic goal**: pick **specific short candidates** that can generate positive returns **even in an up-trending market** — via bottom-up, company-specific analysis (overvaluation, declining revenue/earnings, governance conflicts, accounting fraud, unsuccessful/non-repeatable single-product bets).

---

### Exhibit 3 — Key Aspects

**Risk Profile & Liquidity**:
$$\boxed{\text{Dedicated short sellers: typically 60\%–120\% SHORT at all times}}$$
$$\boxed{\text{Short-biased managers: typically 30\%–60\% NET SHORT}}$$
- Both focus on **single-stock picking** rather than index shorting
- **Return goals**: typically **lower** than most other hedge fund strategies, but with a **negative correlation benefit**
- **More volatile** than typical L/S equity funds (given short beta exposure)
- Best suited to **limited partnership** structures (given operational difficulty)

**Attractiveness**: Liquid, negatively correlated alpha, mark-to-market pricing — BUT **historic returns have been lumpy and generally disappointing**.

**Leverage Usage**: 
$$\boxed{\text{LOW — natural short-position volatility already sufficient; managers don't need much additional leverage}}$$

**Benchmarks**: Eurekahedge Equity Short Bias Hedge Fund Index; Lipper Dedicated Short-Bias Index; sometimes compared to the **inverse** of related stock indexes.

**Index construction challenge**: 
$$\boxed{\text{Fewer short-selling managers exist} \implies \text{Difficult to build a DIVERSE index (e.g., Lipper Dedicated Short-Bias Index includes just 4 managers)}}$$

---

### Strategy Implementation — Finding Short Candidates

**Approach**: Bottom-up scanning for companies with flawed business models, unsustainable leverage, poor governance, accounting gimmickry.

**Useful analytical tools**:
- **Single-name CDS spreads**
- **Corporate bond yield spreads**
- **Implied volatility of exchange-traded put options**
- **Technical analysis/pattern recognition** (for short-sale timing)
- **Altman Z-score** — bankruptcy potential
- **Beneish M-score** — fraudulent financial statement detection

**Market function**: Because successful short sellers do deep "forensic" due diligence, they **contribute to overall market pricing efficiency**.

---

### Worked Example 2 — Generic Inc. (GI) Case Study

**Company profile**: Former drug leader; declining R&D; expired patents; now competing in generic drugs; betting future on a new GI-disease drug funded by **debt (2x industry-average leverage)**; inconclusive early trials; final trial results due in **1 month**; market sentiment constructive but medical experts skeptical.

**Valuation comparison**:

$$\boxed{
\begin{array}{l|c|c}
 & \text{GI} & \text{Industry Avg} \\
\hline
\text{P/E} & 30\times & 20\times \ (+50\%) \\
\text{P/B} & 3.5\times & 2.5\times \ (+40\%) \\
\text{T12M EPS Growth} & 3\% & 18\%
\end{array}
}$$

**Additional data**: GI is **thinly traded**, high short-interest ratio (**60%**), expensive to borrow ("on special," **20%/year** borrowing cost), and options market shows a **positive** sentiment tilt.

**Q1. Should Stone short GI shares?**

$$\boxed{\text{Answer: NO — despite GI appearing substantially OVERVALUED fundamentally}}$$

**Reasoning**: 
- Valuation (high P/E, high P/B, weak EPS growth) supports a **negative fundamental view** — normally a short candidate
- **BUT**: High short interest + high borrow cost = **significant short-squeeze risk** if trial results turn out positive
- **Decision**: negative demand/supply dynamics (crowded short, expensive to borrow) → **decline to add to the portfolio**

**Q2. How might Stone express the negative view via options instead?**

**Four alternative approaches presented**:
1. **Buy put options** — simple negative exposure without share-borrow risk
2. **Long put calendar spread** — buy a put expiring *after* the trial results date, sell a shorter-tenor put expiring *before* results → premium received partially finances the longer put
3. **Buy shares + lend them at 20%** + hedge with **out-of-the-money puts** (protective put) — capture the attractive lending rate while limiting downside
4. **Short risk reversal**: sell expensive OTM calls (given positive sentiment) to **finance** buying OTM puts → creates **synthetic short exposure**

---

### Exam Tips

- **Dedicated short vs. short-biased distinction is directly testable**: dedicated = short-only (60–120% short); short-biased = net short with some long offset (30–60% net short) — know both the definitions and the typical exposure ranges
- **Activist short selling's three legal conditions** (accurate info, no fee charged for research, acting in LP interests) are a strong candidate for a "is this legal/permissible" scenario question
- **Asymmetric position growth risk** (shorts grow against you, shrink in your favor — opposite of long investing) is the section's key **conceptual risk insight** — a good "explain why short selling is harder to risk-manage" answer
- **Alternative uptick rule** (10% decline trigger, must execute above best bid) is a specific, testable US regulatory mechanic
- **Altman Z-score (bankruptcy) and Beneish M-score (fraud detection)** are specific named tools worth remembering — good candidates for "which tool would help identify X" questions
- **The GI case study (Example 2) is an excellent template for an exam-style scenario question**: it teaches that **fundamental overvaluation alone is NOT sufficient** to justify a short — you must also assess **short-squeeze risk** (short interest ratio, borrow cost/availability) before committing capital. This dual-lens (fundamentals + supply/demand technicals) is the key takeaway
- **Options-based alternatives to physical shorting** (puts, calendar spreads, covered lending + protective puts, risk reversals) demonstrate that short-biased managers have **multiple tools** beyond direct share shorting — useful if asked to compare execution methods for expressing a negative view
- Continues the module's **category-by-category structure** — expect the **next section** to cover **equity market-neutral** strategies, completing the equity-related hedge fund category before the reading moves to event-driven strategies
