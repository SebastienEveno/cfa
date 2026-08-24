---
layout: page
title: "CAMELS: Management, Earnings, Liquidity, Sensitivity"
permalink: /study/03-financial-statement-analysis/04-analysis-of-financial-institutions/03-camels-management-earnings-liquidity-sensitivity/
next: /cfa/study/03-financial-statement-analysis/04-analysis-of-financial-institutions/04-non-camels-factors-and-worked-example/
prev: /cfa/study/03-financial-statement-analysis/04-analysis-of-financial-institutions/02-camels-capital-and-asset-quality/
---
## Summary: CAMELS: Management, Earnings, Liquidity, Sensitivity (CFA Level II — Financial Statement Analysis)

---

### Management Capabilities

Much of what signals effective management is the same as for any company: successfully identifying and exploiting profit opportunities while managing risk, compliance with laws/regulations, a strong independent board avoiding excessive compensation/self-dealing, sound internal controls, transparent communication, and reporting quality.

**Bank-specific emphasis**: the ability to identify and control **credit, market, operating, and legal risk**. Directors set risk-exposure guidance and oversee management; senior managers implement procedures for measuring/monitoring risk consistent with that guidance.

> **Key insight**: External investors can only observe *circumstantial* evidence of management quality (board independence, separate CEO/Chair, frequency of risk-committee meetings, unqualified internal-controls audit opinion, related-party transaction disclosures). None of this is direct proof of competence — it merely indicates an environment where good management is *permitted* to flourish. Ultimately, **overall performance is the most reliable indicator** of management effectiveness, which is why the Management rating is often informed by the other five CAMELS components.

---

### Earnings

High-quality earnings are **sustainable** — not dependent on discretionary estimate fine-tuning, non-recurring items, or volatile revenue sources.

**Composition of bank earnings (three sources):**

| Source | Sustainability |
|---|---|
| **Net interest income** (interest earned on loans − interest paid on deposits) | Most sustainable; low volatility is desirable — high volatility suggests excess interest rate risk exposure |
| **Service/fee income** | Generally sustainable |
| **Trading income** | **Most volatile** — a growing proportion of trading income signals declining earnings quality |

**Key discretionary driver**: the **provision for loan losses** can swing pretax income substantially — a multi-year decline in provisions that accounts for most of the *growth* in pretax income is a earnings-quality red flag (the bank isn't growing its core business, it's just provisioning less).

**Net interest margin (NIM)** — the central profitability metric for a bank's core lending/funding spread:

$$\boxed{NIM = \frac{\text{Net interest income}}{\text{Average interest-earning assets}}}$$

Banks create value through **maturity transformation**: borrowing short-term (deposits) and lending long-term (loans), which is profitable in a normal (upward-sloping) yield-curve environment but exposes the bank to risk if short-term funding markets seize up or the curve inverts.

**Fair value hierarchy** (relevant to earnings quality because Level 2/3 valuations embed management judgment):

| Level | Inputs |
|---|---|
| **Level 1** | Quoted prices for *identical* instruments in active markets — no judgment required |
| **Level 2** | Observable but not identical-instrument quotes (similar instruments, inactive markets, or market-observable inputs like yield curves, credit spreads) |
| **Level 3** | Unobservable inputs — model-based (e.g., option pricing with subjective volatility, or DCF with unobservable cash flows/discount rate) — highest degree of management discretion |

> **Key insight**: A rising share of Level 3 assets/liabilities is a caution flag for earnings quality — more of the balance sheet's valuation rests on unverifiable management assumptions.

---

### Liquidity Position

Adequate liquidity matters for any entity, but a bank's systemic importance and deposit-funded balance sheet make it critical. Basel III introduced **two minimum liquidity standards**:

$$\boxed{LCR = \frac{\text{High-quality liquid assets (HQLA)}}{\text{Total net cash outflows over 30 days (stress scenario)}} \geq 100\%}$$

$$\boxed{NSFR = \frac{\text{Available stable funding (ASF)}}{\text{Required stable funding (RSF)}} \geq 100\%}$$

| Ratio | Time horizon | Question answered |
|---|---|---|
| **Liquidity Coverage Ratio (LCR)** | 30-day stress scenario | Can the bank survive a short, sharp liquidity shock? |
| **Net Stable Funding Ratio (NSFR)** | 1-year horizon | Is the bank's *funding profile* (not just its liquid-asset buffer) stable enough to support its longer-term, less-liquid assets? |

**NSFR mechanics**: available stable funding is built by assigning capital/liabilities to ASF-factor categories — long-dated capital and retail/stable deposits receive **higher** ASF factors (more "stable") than short-term wholesale/interbank funding, which receives **lower** factors.

**Two supplementary liquidity-monitoring concepts:**

| Concept | Definition | Risk if excessive |
|---|---|---|
| **Concentration of funding** | Proportion of funding from a single source | A single source's withdrawal could destabilize funding |
| **Contractual maturity mismatch** | Gap between asset and liability maturity dates | Borrowing short/lending long boosts NIM but creates liquidity risk if deposits must be repaid before loans are repaid |

---

### Worked Example — Meridian National Bank: Liquidity

**Setup** ($ millions): HQLA = $1,200; Net cash outflows (30-day stress) = $1,000; Available stable funding = $9,500; Required stable funding = $8,300.

$$LCR = \frac{1{,}200}{1{,}000} = 120\%$$
$$NSFR = \frac{9{,}500}{8{,}300} = 114.5\%$$

**Interpretation**: Both ratios comfortably clear the 100% Basel III minimums. A 120% LCR means Meridian can cover 30 stress-days' worth of outflows for roughly 36 days (120% × 30 days) without remedial management action — supporting a strong (rating of 1–2) Liquidity assessment.

---

### Sensitivity to Market Risk

Nearly every entity has *some* market risk exposure, but banks' balance sheet structure (maturity/repricing/currency mismatches between loans and deposits, plus off-balance-sheet derivatives and guarantees) makes this a first-order concern.

**Two principal disclosure-based tools:**

| Tool | What it shows | Key limitation |
|---|---|---|
| **Interest rate sensitivity table** | Estimated NII impact of a parallel shift (e.g., ±25bp/quarter) in rates | Static — assumes the current asset/liability structure and no management response |
| **Value at Risk (VaR)** | Estimated potential loss (e.g., 99% confidence, 1-day holding period) under normal market conditions | Useful for very short-term shocks only; not comparable across companies (differing model assumptions), though useful for tracking *trends within* one company |

> **Key insight**: A bank with assets that reprice faster/more often than its liabilities is **asset-sensitive** — NII rises when rates rise and falls when rates fall. This is the typical structural posture of large commercial banks, since loans generally have more assets than liabilities and often reprice faster than customer deposits.

---

### Worked Example — Meridian National Bank: Sensitivity

**Setup**: Meridian discloses the estimated impact of a 100bp parallel rate shift on next-twelve-months NII: **+100bp → +$45m**; **−100bp → −$60m**.

**Interpretation**: Meridian is asset-sensitive (NII rises with rates), consistent with a bank whose assets reprice faster than its liabilities. The asymmetry (larger downside than upside) suggests some liabilities have limited room to reprice lower (e.g., already-low deposit rates), which is common late in an easing cycle. An analyst would flag this as manageable but worth monitoring if the base rate outlook turns downward.

---

### Overall CAMELS Assessment

After rating each of the six components 1 (best) to 5 (worst):

$$\boxed{\text{Unweighted composite} = \frac{\text{Sum of six component ratings}}{6}}$$

$$\boxed{\text{Weighted composite} = \frac{\sum (\text{Rating}_i \times \text{Weight}_i)}{\sum \text{Weight}_i}}$$

The unweighted approach is an equal-weighted arithmetic mean; the weighted approach lets the analyst reflect which components matter most for their purpose (e.g., an equity analyst weighting Asset quality and Earnings more heavily than Capital, Management, Liquidity, or Sensitivity).

#### Worked Example — Meridian National Bank: Overall CAMELS Score

Component ratings from the worked examples above and management assessment: Capital adequacy = 2, Asset quality = 2, Management = 2, Earnings = 3, Liquidity = 1, Sensitivity = 2.

An equity analyst weights Asset quality and Earnings 2x the other components:

| Component | Rating | Weight | Weighted Rating |
|---|---|---|---|
| Capital adequacy | 2.0 | 1 | 2.00 |
| Asset quality | 2.0 | 2 | 4.00 |
| Management | 2.0 | 1 | 2.00 |
| Earnings | 3.0 | 2 | 6.00 |
| Liquidity | 1.0 | 1 | 1.00 |
| Sensitivity | 2.0 | 1 | 2.00 |
| **Total** | **12.0** | **8** | **17.00** |

$$\text{Unweighted composite} = \frac{12.0}{6} = 2.00$$
$$\text{Weighted composite} = \frac{17.00}{8} = 2.13$$

**Interpretation**: Both scores land near "2" — a generally sound bank with above-average, but not top-tier, risk management and performance. The weighted score is slightly worse than the unweighted score because Earnings (the weakest component) was double-weighted, pulling the composite down.

> **Key insight**: If every component receives the *same* rating, weighting is irrelevant — the weighted and unweighted composites are identical. Weighting only matters when component ratings diverge, and it can meaningfully shift the conclusion, as shown above.

---

### Question Set Answers

**Q1. A bank's trading income has grown from 8% to 16% of total revenue over five years, while net interest income's share has fallen. What does this imply for the Earnings CAMELS rating?**
Declining earnings quality — trading income is the least sustainable, most volatile revenue source, so a growing reliance on it (at the expense of net interest income) would likely support a *worse* (higher-numbered) Earnings rating, even if reported profit is stable or growing.

**Q2. Why is NSFR described as a kind of "inverted" LCR?**
LCR asks whether liquid *assets* can cover a 30-day stress outflow (short horizon, asset-focused). NSFR asks whether *funding sources* are stable enough, over a full year, to support the bank's less-liquid assets (longer horizon, funding-focused) — the two together provide short- and long-term liquidity coverage.

**Q3. Two banks report identical VaR figures. Can you conclude they have identical market-risk exposure?**
No — VaR calculation assumptions (confidence level, holding period, historical lookback window, simulation method) vary by company, so VaR is useful for tracking risk-taking *trends within* a single bank over time but is not directly comparable *across* different banks.
