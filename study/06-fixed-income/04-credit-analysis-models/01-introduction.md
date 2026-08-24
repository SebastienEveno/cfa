---
layout: page
title: Credit Analysis Models — Introduction
permalink: /study/06-fixed-income/04-credit-analysis-models/01-introduction/
next: /cfa/study/06-fixed-income/04-credit-analysis-models/02-modeling-credit-risk/
---
## Summary: Credit Analysis Models — Introduction (CFA Level II — Fixed Income)

---

### Why Credit Analysis Matters

Every corporate (and much sovereign/municipal) bond carries a risk that Module 2's default-free arbitrage-free framework doesn't touch: the issuer might not pay in full, on time. **Credit analysis** extends bond valuation to explicitly price that risk, using the same no-arbitrage machinery already built for embedded options — just with an added layer of default probability and loss severity.

> **Key insight**: This module doesn't discard the earlier binomial-tree toolkit — it **extends** it. A risky bond is valued on the same kind of interest rate tree as an option-free or callable bond, just discounted at rates that also compensate investors for credit risk.

---

### The Module's Roadmap

| Section | What It Covers |
|---------|-----------------|
| **Modeling Credit Risk and the CVA** | The building blocks — expected exposure, loss given default, probability of default — combined into the **credit valuation adjustment (CVA)**, a numerical example of pricing a corporate bond's credit spread |
| **Credit Scores and Credit Ratings** | Retail-market credit scoring vs. wholesale-market credit ratings; expected return given a rating transition |
| **Structural and Reduced-Form Models** | Two families of academic/practitioner models for estimating default risk — assumptions, strengths, and weaknesses of each (conceptual overview only; both are "highly mathematical and beyond the scope" of full derivation) |
| **Valuing Risky Bonds in an Arbitrage-Free Framework** | Applying the binomial tree (fixed- and floating-rate bonds) under different interest rate volatility assumptions, given credit risk parameters |
| **Interpreting Changes in Credit Spreads** | Decomposing a spread change into shifts in default probability, recovery rate, or exposure |
| **The Term Structure of Credit Spreads** | Why credit spread curves have their own shape, separate from the risk-free yield curve |
| **Credit Analysis for Securitized Debt** | How analyzing ABS/MBS/CDO credit risk differs from analyzing a single corporate issuer |

---

### Credit Risk vs. Interest Rate Risk — The Core Distinction

| | Interest Rate Risk (Modules 1–3) | Credit Risk (this module) |
|---|---|---|
| **Source of uncertainty** | Benchmark (risk-free) rate movements | Issuer's ability/willingness to pay |
| **Priced via** | The default-free spot/binomial rate tree | An added credit spread (or explicit default probability × loss severity) layered onto that tree |
| **Affects** | All bonds, regardless of issuer quality | Primarily non-government (and weaker sovereign/municipal) issuers |
| **Embedded options interaction** | Already covered (Module 3) | Both risks compound — a risky *callable* bond must be valued for interest rate risk, option exercise, **and** credit risk simultaneously |

---

### A Preview of the Core Vocabulary

The most commonly used measure of an issuer's credit risk is the **credit spread** (also called the **G-spread**): the difference between a corporate bond's yield to maturity and that of a government bond of the same maturity. It compensates investors for both (1) the probability the issuer fails to pay in full and on time, and (2) the magnitude of loss if that happens.

> The next file develops this into a full framework — separating **default risk** (a probability) from **credit risk** (probability *and* loss severity), and building up to the **credit valuation adjustment (CVA)**, the dollar/price discount a bond's arbitrage-free value takes to compensate for bearing that risk.

---

### Exam Tips

- This is an **introduction/roadmap file** — the quantitative content (CVA, expected exposure, loss given default) starts in the next section
- Keep the **credit risk ≠ interest rate risk** distinction sharp: a bond can have long duration/high rate sensitivity but low credit risk (e.g., a high-grade issuer), or the reverse
- Structural and reduced-form credit models are tested at the **conceptual/comparative** level (assumptions, strengths, weaknesses) — not full derivation
- Everything in this module ultimately plugs back into the **same binomial-tree valuation framework** from Module 2/3 — credit risk is layered on top, not a separate valuation system
