---
layout: page
title: Modeling & Valuation in Corporate Restructurings
permalink: /study/04-corporate-issuers/04-corporate-restructuring/04-modeling-and-valuation/
prev: /cfa/study/04-corporate-issuers/04-corporate-restructuring/03-evaluating-corporate-restructurings/
next: /cfa/study/04-corporate-issuers/04-corporate-restructuring/05-evaluating-investment-actions/
---

---

### Purpose of Pro Forma Financial Statements

Pro forma statements estimate the **combined entity's financials after the restructuring** — the key analytical output that drives equity and credit evaluation.

Key outputs derived from pro forma statements:
- **EPS** (equity valuation)
- **Net debt / EBITDA** (credit evaluation)
- **Free cash flow** (DCF valuation input)
- **WACC** (discount rate for DCF)

---

### Pro Forma Income Statement — Acquisition Build

| Line Item | Adjustments |
|-----------|------------|
| **Revenue** | Acquirer + Target ± Revenue synergies/dis-synergies |
| **Operating expenses** | Acquirer + Target − Cost synergies ± Dis-synergies |
| **D&A** | Acquirer + Target + **Amortization of acquired intangibles** |
| **Other income/expense** | Acquirer + Target |
| **Interest expense** | Acquirer existing + **New debt interest** |
| **Income taxes** | EBT-weighted average tax rate of acquirer and target |
| **Shares outstanding** | Acquirer existing + **New shares issued** |

> **Key additions vs. standalone**: Amortization of acquired intangibles (↑ D&A) and new interest expense (↑ financing cost) are the two main drags on pro forma EPS.

---

### Pro Forma WACC Adjustment

A restructuring changes **both** capital structure weights **and** costs of capital:

$$WACC = w_d r_d(1-t) + w_p r_p + w_e r_e$$

#### How Restructurings Change Capital Structure Weights:

| Transaction | Effect on Capital Structure |
|-------------|---------------------------|
| Cash acquisition financed with debt | ↑ $w_d$, ↓ $w_e$ |
| Sale of division → retire debt | ↓ $w_d$, ↑ $w_e$ |
| Share-financed acquisition | ↑ $w_e$, potentially ↓ $w_d$ |

#### How Restructurings Change Costs of Capital:

| Factor Changed | Effect on Cost of Capital |
|---------------|--------------------------|
| ↑ Leverage (↑ debt/EBITDA) | ↑ Cost of debt + equity |
| ↓ Profitability (↓ EBITDA margin) | ↑ Cost of capital |
| ↑ Revenue volatility | ↑ Cost of capital |
| ↓ Asset collateral quality | ↑ Cost of debt |

#### The Investment-Grade Cliff — Critical Exam Point:

| Credit Rating | Median WACC (US Large-Cap) |
|--------------|---------------------------|
| AAA/AA | ~4.0% |
| A | ~4.2% |
| BBB (last investment-grade notch) | ~4.5% |
| BB | ~5.5% |
| B | ~6.5% |

> Crossing from **BBB → BB** (investment-grade to speculative/high-yield) is associated with a **~100-200+ bps jump in WACC** — a critical threshold companies actively manage around.

**Key monitoring factors for WACC:**

| Factor | Primary Metric |
|--------|--------------|
| Profitability | EBITDA/Sales margin |
| Volatility | Std dev of revenue or EBITDA |
| Leverage | Net debt / EBITDA |
| Collateral quality | Asset specificity and liquidity |
| Market conditions | Reference rates + credit spreads |

---

### Case Study: CN vs. CP Competing Bids for Kansas City Southern

#### Deal Terms Comparison

| Feature | CP Offer | CN Offer |
|---------|---------|---------|
| Price per share | $274 (23% premium) | $325 (45% premium) |
| Cash per share | $90 | $200 |
| Stock per share | 0.489 CP shares | 1.129 CN shares |
| Total EV | $29B | $33.6B |
| New debt issued | $8.6B | $19B |
| Post-acq. debt/EBITDA | **4.0×** | **4.6×** |
| KCS shareholder ownership | 25% | 12.6% |

#### Key Analytical Conclusions

**CN Capital Structure Impact** (pre vs. post acquisition):

| | Pre-Acquisition | Post-Acquisition |
|--|----------------|-----------------|
| Debt | $10.2B (12%) | $33B (28%) |
| Equity | $74.9B (88%) | $85.7B (72%) |

→ CN's debt weight **more than doubles** — significant leverage increase

**Exam-style questions resolved:**

| Question | Answer | Rationale |
|---------|--------|----------|
| To increase KCS shareholder ownership % | ↑ Stock proportion | More CN shares issued → KCS holders get larger % of combined |
| CN's primary financing for higher cash | ↑ Debt issuance | $19B vs CP's $8.6B |
| Least attractive element of CN's offer for KCS shareholders | Higher combined leverage | 4.6× vs 4.0× → higher risk for KCS shareholders holding CN stock |
| If investment-grade rating threatened → how to fix | ↑ Stock proportion | Reduces new debt needed → lower leverage → protects rating |

#### Pro Forma EPS — CN Acquiring KCS

Key pro forma adjustments:
- Combined revenues: CN + KCS revenues
- Cost synergies: ramping $333M → $667M → $1,000M (Years 1–3)
- Additional D&A: $800M/year amortization of acquired intangibles
- New interest expense: $1,650M/year (on ~$19B new debt)
- New shares: +103M CN shares issued

**Resulting diluted EPS:**

| Year | EPS |
|------|-----|
| 2022F | $5.24 |
| 2023F | $5.89 |
| 2024F | $6.60 |

---

### Exam Tips

- **Pro forma income statement**: know the six line-item adjustments — especially **amortization of acquired intangibles** (often the largest non-cash drag)
- **Investment-grade cliff** (BBB → BB) = several hundred bps WACC jump — issuers actively manage to avoid crossing it
- **Post-acq. net debt/EBITDA** is the primary credit metric to monitor
- **More cash in consideration → more debt financing** → higher leverage → higher WACC risk
- **More stock in consideration → more share dilution** → lower EPS impact but lower leverage
- When credit rating is at risk → issuer should **issue more equity** (or sell assets) to reduce debt
- KCS shareholders **prefer** lower leverage in the combined entity — they hold combined stock