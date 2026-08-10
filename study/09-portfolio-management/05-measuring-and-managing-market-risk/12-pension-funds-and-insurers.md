## Summary: Risk Measures — Pension Funds and Insurers (CFA Level II — Portfolio Management)

---

## Pension Funds — Defined Benefit Plans

### Defined Benefit vs. Defined Contribution

| Plan Type | Sponsor Obligation |
|-----------|---------------------|
| **Defined Benefit (DB)** | Guarantee future payments (typically based on final salary) — **significant market risk responsibility** |
| **Defined Contribution (DC)** | Only contribute currently — NOT responsible for ensuring future growth |

> **This section focuses exclusively on Defined Benefit pension plans.**

---

### Core Risk Management Goal

$$\boxed{\text{Ensure the plan is SUFFICIENTLY FUNDED to meet future pensioner payments}}$$

**Funding Ratio:**
$$\boxed{\text{Funding Ratio} = \frac{\text{Assets}}{\text{PV of Liabilities}}}$$

| Status | Funding Ratio |
|--------|----------------|
| **Overfunded** | > 100% |
| **Underfunded** | < 100% |

**Curing overfunding**: Sponsor simply doesn't need to make regular contributions (as employee base/salaries grow)

**Curing underfunding**: Sponsor makes additional contributions (unless cured by asset growth over regulatory timeframe)

**Note**: Regulatory frameworks vary by country — discount rate rules, contribution requirements, and surplus withdrawal taxes all differ jurisdictionally.

---

### Three Key Pension Risk Measures

#### 1. Interest Rate and Curve Risk

**Process**: 
1. Analyze **expected future payments** to pensioners
2. **Group by maturity** (and by currency, for international pensions)
3. Express liability cash flows as a **SHORT position** at relevant curve points, using the jurisdiction-mandated discount instrument:

| Jurisdiction | Mandated Discount Instrument |
|--------------|-------------------------------|
| **United States** | Corporate bonds |
| **United Kingdom** | Inflation-linked gilts |
| **Netherlands** | Government bonds |

---

#### 2. Surplus at Risk — VaR Applied to Pension Funding

$$\boxed{\text{Surplus at Risk} = VaR(\text{Assets [long]} - \text{Liabilities [short fixed-income]})}$$

**What it measures**: How much assets might **underperform liabilities**, typically over **one year**, at a chosen confidence level (84%, 95%, 99% — varies by sponsor).

**Theoretical zero-risk case**: If assets were invested **exactly matching** the liability cash flows (same instruments, same amounts) → **surplus at risk = 0**.

**Real-world driver of higher surplus at risk:**
$$\boxed{\text{Higher volatility} + \text{Lower correlation with liabilities} \implies \text{Higher surplus at risk}}$$

> In practice, pensions can't perfectly invest in the exact fixed-income instruments matching liabilities → must use **equities, real assets**, etc., creating a mismatch.

**Management approach**: When surplus at risk exceeds a set **threshold/limit**, pension staff **adjust asset allocation** to better match liabilities.

$$\boxed{\text{This liability-focused approach} = \text{"Liability Driven Investing" (LDI)}}$$

---

#### 3. Liability-Hedging vs. Return-Generating Exposures

**Portfolio split**:
| Portion | Purpose |
|---------|---------|
| **Liability-hedging** | Match the pension liability cash flows |
| **Return-generating** | Earn excess returns; hedge against **longevity risk** and **wage growth** exceeding forecasts |

> Since exact liability-matching instruments aren't always investable, a **separate return-seeking portion** helps minimize the chance of significant over/underfunding beyond the pension's risk tolerance.

---

## Insurers

**Regulatory context**: Heavily regulated regarding reserves, liability reflection, and product pricing.

**Common practice**: Aggregate risk from underlying business units → **firm-wide risk view**.

---

### Property and Casualty (P&C) Insurance

**Products**: Home, auto, corporate liability, health insurance.

**Key characteristic**: **NOT highly correlated** with financial asset markets.

**Three P&C Risk Measures:**

| Measure | Description |
|---------|-------------|
| **Sensitivities and exposures** | Monitor asset allocation vs. target ranges |
| **Economic capital and VaR** | Focus on **capital at risk** — estimate catastrophic loss potential at a given probability level |
| **Scenario analysis** | Used like banks/hedge funds; scenarios may **combine market AND insurance risk stresses** |

**Key structural fact**: 
$$\boxed{\text{P\&C insurers do NOT match assets to liabilities}}$$

**Why**: Premium income (not investment portfolio) primarily funds claim payouts. Investment portfolios instead aim for **good absolute return** within regulatory reserve constraints.

**Reserve treatment**: **Riskier assets are DISCOUNTED** relative to safer fixed-income assets when calculating required reserves.

---

### Life Insurance and Annuities

**Key distinction from P&C**: **Stronger ties** to financial markets, though still retains distinct **mortality-based** risk characteristics.

**Unique features:**
- **Very long liabilities** (long duration)
- Required reserves **highly dependent on discount rate assumptions**
- **Non-financial inputs matter**: mortality assumptions, policyholder behavior (adding coverage options, cancellation/lapse rates)
- **Annuities**: returns based on financial assets + embedded life insurance optionality

**Three Life Insurance Risk Measures:**

| Measure | Description |
|---------|-------------|
| **Sensitivities** | Monitor investment portfolio AND annuity liability exposures |
| **Asset and liability matching** | **MORE closely matched** than P&C (though not perfect) |
| **Scenario analysis** | Focus on stress losses from asset-liability GAPS; must stress **both market AND non-market factors** (e.g., longevity changes) |

---

### P&C vs. Life Insurance — Comparison Table

| Feature | Property & Casualty | Life & Annuities |
|---------|----------------------|---------------------|
| **Market correlation** | Low | **High** |
| **Asset-liability matching** | **None** (premium income funds claims) | **Partial matching** |
| **Liability duration** | Short-term | **Very long-term** |
| **Non-financial risk factors** | Catastrophic event probability | **Mortality, lapse behavior** |
| **Key risk focus** | Economic capital, catastrophic loss VaR | Asset-liability GAP stress |

---

### Example 11 — Knowledge Check Answers

**Q1 — Which market participant MOST likely expresses risk as % of assets AND relative to benchmark?**

→ **C. Long-only asset managers**

- **A wrong**: Banks typically use **currency units**, sometimes % of balance sheet (economic capital), but NOT consistently relative to a benchmark
- **B wrong**: Corporations measure risk in **absolute currency terms**, not benchmark-relative
- **C correct**: Long-only asset managers' standard practice is **percentage terms AND benchmark-relative** framing (consistent with earlier active management/tracking error concepts)

---

**Q2 — Difference between ex ante and ex post tracking error:**

→ **C. "Ex ante tracking error uses CURRENT portfolio holdings exposed to HISTORICAL market variability, whereas ex post tracking error measures HISTORICAL portfolio holdings in HISTORICAL markets"**

| Type | Portfolio Holdings Used | Market Data Used |
|------|---------------------------|----------------------|
| **Ex ante** | **CURRENT** holdings | **Historical** variability (as a proxy for future) |
| **Ex post** | **HISTORICAL** (actual past) holdings | **Historical** actual markets |

- **A wrong**: Both CAN account for options — but ex ante using parametric method may actually **MISESTIMATE** option risk (truncated payoff issue from earlier sections)
- **B wrong**: Ex post tracking error is **NOT** trying to forecast anything — it's purely a **backward-looking measurement** of what actually happened

---

### Key Formula/Concept Reference Card

| Concept | Formula/Definition |
|---------|----------------------|
| **Funding ratio** | Assets / PV(Liabilities) |
| **Surplus at risk** | VaR(Assets long − Liabilities short) |
| **Liability Driven Investing (LDI)** | Adjusting asset allocation to reduce surplus-at-risk / better match liabilities |
| **Ex ante tracking error** | Current holdings × historical market variability |
| **Ex post tracking error** | Historical holdings × historical realized markets |

---

### Exam Tips

- **Defined Benefit plans bear market risk**; Defined Contribution plans do NOT (sponsor obligation ends at contribution)
- **Funding ratio = Assets/PV(Liabilities)**; >100% = overfunded, <100% = underfunded
- **Surplus at risk = VaR applied to (Assets − Liabilities)** — pension-specific VaR variant
- **Liability Driven Investing (LDI)**: adjusting allocation to REDUCE surplus-at-risk when it exceeds a threshold
- **P&C insurers do NOT match assets to liabilities** — premium income funds claims; investments seek absolute return within reserve constraints
- **Life insurers DO more closely match** assets to liabilities (though not perfectly) — much stronger market correlation than P&C
- **Riskier assets discounted in P&C reserve calculations** — regulatory conservatism
- **Life insurance scenario analysis must stress BOTH market AND non-market factors** (especially longevity/mortality changes) — unique dual-stress requirement
- **Long-only asset managers**: risk expressed in % terms AND relative to benchmark — distinguishing characteristic vs. banks/corporations (absolute currency terms)
- **Ex ante vs. ex post tracking error**: distinguish by WHICH holdings (current vs. historical) are combined with WHICH market data (always historical, but different purposes) — ex ante uses current holdings as a forward-looking proxy; ex post is a pure historical measurement