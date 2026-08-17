## Summary: 4.05 | Event-Driven Strategies: Merger Arbitrage (CFA Level II — Alternative Investments)

---

### Learning Outcome
Discuss investment characteristics, strategy implementation, and role in a portfolio of **event-driven** hedge fund strategies.

*(New category — transitions from equity-related to event-driven strategies.)*

---

### Event-Driven (ED) Strategies — Overview

$$\boxed{\text{ED strategies profit from corporate EVENT outcomes: M\&A, bankruptcy, share issuance/buybacks, restructuring, reorganization, accounting changes}}$$

**Analytical focus**: financial statements, regulatory filings, corporate governance (management, board, proxy voting), strategic objectives, competitive position.

**Two timing approaches**:

| Approach | Description | Risk Level |
|---|---|---|
| **Soft-catalyst** | Invest **proactively** in anticipation of an event not yet occurred | Higher volatility/risk |
| **Hard-catalyst** | Invest **reactively** after an event is announced, prices not yet fully converged | Lower volatility/risk |

**Most common ED strategies**: merger arbitrage and distressed securities.

---

## Merger Arbitrage

### Two Deal Structures

**Cash-for-stock**: Acquirer (A) offers a **cash price/share** for target (T).
- Example: T trades at $30, A offers $40 → **33% premium**

**Stock-for-stock**: A offers a specific **number of its own shares** per T share.
- Example: A at $20/share, offers 2 A shares per T share → T holders receive $40/share value (assuming A's price holds)

**Why acquirers choose cash vs. stock**: 
$$\boxed{\text{High cash surpluses} \implies \text{favor CASH deals}}$$
$$\boxed{\text{Richly-valued acquirer shares} \implies \text{favor STOCK deals (using "expensive" stock as currency)}}$$

---

### Investment Characteristics — Positioning

**Cash-for-stock deal**: manager may simply **buy T**, expecting appreciation toward the offer price.

**Stock-for-stock deal**: manager typically **buys T, shorts A** in the offer ratio → captures the **spread** on successful completion.

**Contrarian view (less common)**: if manager believes the deal will **fail** (e.g., anti-competition/regulatory concerns) → **sell T, buy A**.

**Typical price reaction at announcement**:
$$\boxed{\text{Target (T) price RISES toward offer price} \qquad \text{Acquirer (A) price FALLS (dilution concerns or cash-use concerns)}}$$

**Why deals can still fail** (during the lag between announcement and closing): lack of financing, regulatory hurdles, failed due diligence.

**Friendly vs. hostile deals**: 
$$\boxed{\text{Hostile takeovers (target management NOT yet agreed)} \implies \text{LESS likely to complete successfully than FRIENDLY deals}}$$

---

### Success Rates and Return Profile

$$\boxed{\text{~70\%–90\% of announced US mergers eventually close successfully}}$$

**Typical spread and returns**:
$$\boxed{\text{Deal spread: 3\%–7\% (wider for riskier deals)}}$$
$$\boxed{\text{Average deal completion time: 3–4 months} \implies \text{Capital recycled multiple times/year}}$$
$$\boxed{\text{With leverage applied: net annualized returns} \approx 7\%\text{–}12\%, \text{ with LOW correlation to non-deal-specific factors}}$$

**Diversification benefit**: spreading across many mergers/deals/industries hedges single-deal failure risk → generally a **good uncorrelated alpha source**.

---

### Left-Tail Risk — When Deals Fail

$$\boxed{\text{Failed deal} \implies \text{Target/acquirer prices REVERSE toward pre-announcement levels}}$$

$$\boxed{\text{Arbitrageurs entering AFTER announcement face potential losses of} -20\% \text{ to } -40\% \text{ on the position}}$$

---

### The Options-Like Payoff Structure (Key Conceptual Framework)

$$\boxed{\text{Merger arbitrage} \approx \text{Selling INSURANCE on the acquisition}}$$

| Outcome | Payoff Analogy |
|---|---|
| **Deal succeeds** | Manager collects the **spread** (like an insurance premium) |
| **Deal fails** | Manager suffers losses (like an insurer **paying out** a claim) |

$$\boxed{\text{Overall payoff profile} \approx \text{RISKLESS BOND} + \text{SHORT PUT OPTION}}$$

**Additional upside optionality**: 
$$\boxed{\text{Manager effectively also holds an implicit CALL OPTION} \implies \text{value increases if a "White Knight" makes a HIGHER competing bid}}$$

---

### Exhibit 5 — Key Aspects

**Risk Profile & Liquidity**: 
- Relatively **liquid**; defined gains from idiosyncratic single-security situations, but **occasional downside shocks** on unexpected deal failure
- **Market sensitivity/left-tail risk**: deals more likely to fail during **market stress** periods → return profile like **bond + short put**
- **Cross-border M&A**: requires **two sets** of government approvals → higher risk, wider spreads
- **Vertical integration deals**: face **antitrust scrutiny** → higher risk, wider spreads
- Managers split between **friendly-deal-only** (tighter spreads) vs. **hostile-deal-embracing** (wider spreads, White Knight potential)
- Preferred vehicle: **limited partnership** (due to leverage use); though some **low-leverage liquid alts** versions exist

**Attractiveness**: Relatively **high Sharpe ratios**, low double-digit returns, mid-single-digit standard deviation — **but** left-tail risk embedded in an otherwise steady profile.

**Leverage Usage**:
$$\boxed{\text{MODERATE TO HIGH — managers typically apply 3x to 5x LEVERAGE}}$$

**Benchmarks**: HFRX/HFRI Merger Arbitrage Index; CISDM Hedge Fund Merger Arbitrage Index; Credit Suisse Merger Arbitrage Index.

---

### Strategy Implementation — Instruments and Hedging Techniques

**Primary instrument**: common equities; but also preferred stock, senior/junior debt, convertibles, options, other derivatives.

**Short-selling constraints**: shorting the acquirer (A) can be **difficult** due to liquidity issues, especially in **emerging markets** → derivatives can help overcome this:
- Buy **OTM puts on T** and/or **OTM calls on A** (to cover the short)

**Convertible bonds**: provide **asymmetric payoff** — convertible value rises with T's shares on deal success, but the **bond floor cushions** downside if the deal fails.

**Credit default swaps (CDS)** — used when acquirer credit > target credit:
$$\boxed{\text{SELL protection (short the CDS) on T} \implies \text{profits as T's credit improves and CDS price falls (upon successful merger)}}$$
$$\boxed{\text{BUY protection (long the CDS) on T} \implies \text{partial HEDGE against deal failure, if cheap enough}}$$

**Market-level hedging**: short equity index ETFs/futures or long index puts, to hedge broad market risk that could disrupt deal completion.

**Core takeaway on alpha source**: 
$$\boxed{\text{TRUE alpha source: the INITIAL DECISION of which deals to embrace vs. avoid} — \text{execution method is secondary}}$$

---

### Worked Example 4 — Merger Arbitrage Payoff Calculation

**Setup**: Stock-for-stock deal, offer ratio = **1 share A per 2 shares T**.
- Pre-announcement: A = $45/share (unchanged... wait, given post-announcement A = $42), T = $15/share
- Post-announcement: T rises to **$19**, A falls to **$42**
- Manager: **buys 20,000 shares T**, **shorts 10,000 shares A** (matching the 2:1 offer ratio)

**Cost/proceeds at current prices**:
$$\boxed{\text{Cost of 20,000 T shares} = 20{,}000 \times \$19 = \$380{,}000}$$
$$\boxed{\text{Proceeds from shorting 10,000 A shares} = 10{,}000 \times \$42 = \$420{,}000}$$

$$\boxed{\text{Net spread captured (IF deal succeeds)} = \$420{,}000 - \$380{,}000 = \$40{,}000}$$

**If the deal FAILS** — prices revert to pre-announcement levels (A = $45, T = $15):
- Cover short: buy back 10,000 A shares at $45 = **$450,000** (loss of $30,000 on the short: $420,000 − $450,000)
- Long T position falls: 20,000 shares × $15 = **$300,000** (loss of $80,000 on the long: $300,000 − $380,000)

$$\boxed{\text{Total loss if deal fails} = (\$420{,}000 - \$450{,}000) + (-\$380{,}000 + \$300{,}000) = -\$30{,}000 - \$80{,}000 = -\$110{,}000}$$

**Interpretation**: 
$$\boxed{\text{Strategy} \equiv \text{Riskless bond, face value \$40,000 (success payoff)} + \text{Short BINARY PUT (expires worthless on success, pays out \$110,000 loss on failure)}}$$

---

### Exam Tips

- **Cash-for-stock vs. stock-for-stock trade construction is a core, highly testable calculation**: cash-for-stock = buy T only; stock-for-stock = buy T, short A in the **offer ratio** — Example 4 is a strong template for a direct exam calculation question, practice replicating the spread-capture and failure-scenario math
- **The "bond + short put" payoff analogy is THE central conceptual framework** for this entire section — memorize this framing cold, as it explains both the steady income profile (premium/spread collection) AND the left-tail risk (binary loss on failure)
- **70%–90% success rate and 3%–7% spread / 7%–12% net annualized return figures** are specific, citable statistics likely to appear in exam questions or as answer-choice distractors
- **3x–5x leverage** is the standard range to memorize for merger arb — moderate-to-high leverage usage
- **White Knight optionality** (implicit call option value from competing bids) is a distinct, testable nuance layered on top of the base bond+put framework
- **Friendly vs. hostile deal risk differential** and **cross-border/antitrust complexity** (both widening spreads) are good "explain why this deal offers a wider spread" exam scenario elements
- **CDS usage nuance**: selling protection (short CDS) on the target when acquirer credit > target credit is a specific, somewhat advanced technique — worth remembering the **direction** (short CDS = bet on credit improvement/deal success)
- **Left-tail risk magnitude (−20% to −40%)** on deal failure is a good concrete figure for risk discussion questions
- This section begins the **event-driven category** (per 4.01's roadmap) — expect the **next section** to cover **distressed securities**, the other major event-driven strategy explicitly flagged for detailed coverage