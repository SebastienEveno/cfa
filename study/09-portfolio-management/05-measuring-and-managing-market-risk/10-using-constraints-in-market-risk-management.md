---
layout: page
title: "Risk Measures — Banks, Asset Managers, Pension Funds, and Comparative Overview"
permalink: /study/09-portfolio-management/05-measuring-and-managing-market-risk/10-using-constraints-in-market-risk-management/
prev: /cfa/study/09-portfolio-management/05-measuring-and-managing-market-risk/08-scenario-risk-measures/
next: /cfa/study/09-portfolio-management/05-measuring-and-managing-market-risk/12-pension-funds-and-insurers/
---
## Summary: Risk Measures — Banks, Asset Managers, Pension Funds, and Comparative Overview (CFA Level II — Portfolio Management)

---

## Banks

### Core Risk Concern — Solvency

$$\boxed{\text{Banks' primary risk focus: RISK OF INSOLVENCY} \implies \text{Regulatory capital requirements}}$$

**Two major risk categories:**
1. **Market risk** (trading book) — subject to capital requirements based on VaR/stress measures
2. **Credit risk** (loan book) — separate risk category, generally beyond this reading's scope

---

### Three Key Bank Risk Measures

| Measure | Description |
|---------|-------------|
| **Sensitivities** | Interest rate gap analysis (assets vs. liabilities by maturity bucket); FX and equity exposures |
| **VaR** | Regulatory-mandated (Basel framework); often expressed as **% of capital** |
| **Scenario analysis/Stress testing** | Regulatory stress tests (e.g., US Federal Reserve's CCAR); PASS/FAIL framework |

**Regulatory capital emphasis**: Banks must hold capital **sufficient to survive** stress scenarios — pass/fail nature reflects the **solvency-focused** mandate (unlike asset managers' benchmark-relative focus).

---

## Asset Managers (Recap and Extension)

### Long-Only Managers

**Distinguishing characteristics:**
- Risk expressed as **% of assets** AND **relative to benchmark**
- **Ex ante tracking error**: standard risk budgeting tool
- **VaR**: less commonly the PRIMARY tool (more common for hedge funds/leveraged strategies), but increasingly used **alongside** tracking error

### Hedge Funds — Key Contrast

| Feature | Long-Only Managers | Hedge Funds |
|---------|------------------------|----------------|
| **Benchmark** | Explicit, relative performance | **Absolute return** focus (less benchmark-dependent) |
| **Primary risk tool** | Tracking error | **VaR** (often supplemented with leverage-specific measures) |
| **Leverage** | Typically minimal/none | **Often significant** — leverage-specific risk measures critical |

---

## Comprehensive Comparison Table — All Market Participants

| Participant | Primary Risk Focus | Key Risk Measures | Risk Expression |
|-------------|------------------------|------------------------|----------------------|
| **Banks** | Solvency | Gap analysis, VaR, stress tests (pass/fail) | % of capital |
| **Long-only asset managers** | Benchmark-relative performance | Tracking error, scenario analysis | % of assets, relative to benchmark |
| **Hedge funds** | Absolute return / leverage | VaR, leverage measures | Absolute currency/% terms |
| **Pension funds (DB)** | Funding sufficiency | Surplus at risk, LDI | Funding ratio, currency |
| **P&C insurers** | Catastrophic loss / solvency | Economic capital, VaR, scenario analysis | Currency, capital-at-risk |
| **Life insurers** | Asset-liability matching | Sensitivities, scenario analysis (market + non-market) | Currency, gap analysis |

---

### Key Unifying Theme Across All Participants

$$\boxed{\text{Every participant type combines: (1) Sensitivity measures + (2) VaR-type measures + (3) Scenario analysis}}$$

**But the EMPHASIS and FRAMING differs based on:**
- **Regulatory environment** (banks, insurers — heavily prescribed; asset managers — more discretion)
- **Leverage usage** (banks, hedge funds — high leverage → solvency focus; long-only managers — low leverage → relative performance focus)
- **Liability structure** (pensions, insurers — liability-driven; banks, asset managers, hedge funds — asset-focused)
- **Benchmark relevance** (long-only managers — critical; others — secondary or absent)

---

### Final Synthesis — The Complete Risk Management Toolkit

```
FOUNDATION: VaR (parametric, historical simulation, Monte Carlo)
    ↓
EXTENSIONS: CVaR, Incremental VaR, Marginal VaR, Ex Ante Tracking Error
    ↓
SENSITIVITY MEASURES: Beta (equity), Duration/Convexity (fixed income), 
                        Delta/Gamma/Vega (options)
    ↓
SCENARIO MEASURES: Historical scenarios, Hypothetical scenarios, 
                     Reverse stress testing
    ↓
APPLICATION BY PARTICIPANT TYPE:
   Banks → Solvency-focused, pass/fail stress tests
   Long-only managers → Benchmark-relative tracking error
   Hedge funds → Absolute VaR + leverage measures
   Pension funds → Surplus at risk, LDI
   Insurers (P&C) → Economic capital, catastrophic scenario stress
   Insurers (Life) → Asset-liability gap stress (market + longevity)
```

---

### Exam Tips

- **Banks focus on SOLVENCY** — pass/fail regulatory stress tests, VaR as % of capital, gap analysis for interest rate risk
- **Hedge funds emphasize VaR and ABSOLUTE return**; **long-only managers emphasize tracking error and BENCHMARK-relative return** — this contrast is frequently tested
- **All participant types use the SAME underlying toolkit** (sensitivities, VaR, scenarios) but apply it with **different emphasis** based on regulatory environment, leverage, and liability structure
- **Regulatory stress tests for banks** (e.g., CCAR) are **PASS/FAIL** — distinct from the more flexible scenario analysis approach used by asset managers
- **Pension and insurance risk measures are LIABILITY-DRIVEN** — a key structural difference from banks/asset managers/hedge funds, which are primarily ASSET-focused
- Know **WHO uses WHAT measure and WHY** — the exam frequently tests matching risk measures to the appropriate market participant type based on their core objective (solvency vs. benchmark-relative vs. funding sufficiency)
- This section **completes the full Risk Management module** — expect integrative questions connecting VaR mechanics, sensitivity measures, scenario analysis, and participant-specific applications
