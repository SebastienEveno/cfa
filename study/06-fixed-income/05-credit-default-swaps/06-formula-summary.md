---
layout: page
title: "Formula Summary: Credit Default Swaps (CFA Level II — Fixed Income)"
permalink: /study/06-fixed-income/05-credit-default-swaps/06-formula-summary/
prev: /cfa/study/06-fixed-income/05-credit-default-swaps/05-cds-valuation-changes-and-applications/
---
## Formula Summary: Credit Default Swaps (CFA Level II — Fixed Income)

---

### 1. Settlement and Loss Measures

$$\boxed{\text{Loss given default (LGD)} = 1 - \text{Recovery rate (RR)}}$$

$$\boxed{\text{Payout amount} = LGD \times \text{Notional}}$$

> Recovery rate is set by the industry **auction** on the cheapest-to-deliver obligation — the same Final Price cash-settles the entire market.

---

### 2. Basic Pricing (One-Period Intuition)

$$\boxed{\text{CDS spread} \approx (1 - RR) \times POD}$$

**Cumulative probability of default over multiple periods** (from period survival probabilities):
$$\boxed{POD_{\text{cumulative}} = 1 - \prod_{t=1}^{n}(1 - h_t)}$$

where $h_t$ is the hazard rate (conditional probability of default) in period $t$. A constant hazard rate still compounds into a rising cumulative POD over longer horizons.

---

### 3. Upfront Premium

$$\boxed{\text{Upfront payment (\% of notional)} \approx (\text{Credit spread} - \text{Fixed coupon}) \times \text{Duration}}$$

$$\boxed{\text{Price of CDS (per 100 par)} = 100 - \text{Upfront premium (\%)}}$$

| Sign of (Spread − Coupon) | Who pays the upfront |
|---|---|
| **Positive** (spread > coupon) | **Protection buyer pays** protection seller |
| **Negative** (spread < coupon) | **Protection seller pays** protection buyer |

> Duration used is **effective duration** (premium-leg cash flows are contingent on survival).

---

### 4. Mark-to-Market Valuation Change

$$\boxed{\text{Profit/loss to protection buyer} \approx \text{Change in spread (bps)} \times \text{Duration} \times \text{Notional}}$$

$$\boxed{\% \text{ change in CDS price} \approx \text{Change in spread (bps)} \times \text{Duration}}$$

> **Protection buyer gains when spreads widen; protection seller gains when spreads narrow** — the opposite sign convention from a long bond position (where a yield increase hurts the holder).

---

### 5. CDS-Bond Basis and Basis Trades

$$\boxed{\text{CDS-bond basis} = \text{CDS spread} - \text{Cash bond's credit spread}}$$

$$\text{Bond credit spread} = \text{Bond yield} - \text{Market reference rate}$$

| Basis | Construction |
|---|---|
| **Negative** (CDS spread < bond spread) | **Buy bond + buy protection** |
| **Positive** (CDS spread > bond spread) | **Short bond + sell protection** |

---

### Quick Reference — All Formulas

| Measure | Formula |
|---|---|
| LGD | 1 − Recovery rate |
| Payout amount | LGD × Notional |
| CDS spread (one-period) | (1 − RR) × POD |
| Cumulative POD | $1 - \prod(1-h_t)$ |
| Upfront premium (%) | (Credit spread − Fixed coupon) × Duration |
| CDS price | 100 − Upfront premium (%) |
| MTM profit/loss to buyer | ΔSpread (bps) × Duration × Notional |
| % change in CDS price | ΔSpread (bps) × Duration |
| CDS-bond basis | CDS spread − Bond credit spread |
| Bond credit spread | Bond yield − Market reference rate |

---

### Exam Tips

- **Upfront premium sign convention** is the single most tested mechanic: spread > coupon → **buyer** pays upfront; spread < coupon → **seller** pays upfront. Get the direction right before computing magnitude.
- **MTM valuation change direction**: protection **buyer** benefits from spread **widening** (deteriorating credit); protection **seller** benefits from spread **narrowing** (improving credit) — this is true for single-name CDS. (Recall from the basic-definitions file: this flips for **index CDS positions**, where the *buyer* of the index is long credit exposure.)
- **Negative basis trade = buy bond + buy protection**; **positive basis trade = short bond + sell protection** — always construct the trade to be credit-risk-neutral, profiting from basis convergence rather than an outright credit call
- **Duration in all CDS formulas is effective duration** — coupon-leg cash flows are contingent on the reference entity surviving
- **Recovery rate / LGD** comes from the ISDA **auction's Final Price**, not the eventual real-world recovery — all cash-settling parties are bound by the auction outcome even if actual recovery later differs
- **Curve trades** bet on the **shape** of the credit curve (steepener: buy long-tenor/sell short-tenor protection; flattener: buy short-tenor/sell long-tenor protection) — distinguish this from an outright directional (long/short) credit trade on the overall spread level
- **Technical factors driving the basis**: shorting restrictions on cash bonds (push CDS spreads up relative to bonds), the cheapest-to-deliver option embedded in CDS (widens CDS spreads), CDS counterparty risk (narrows CDS spreads), and repo/funding costs (either direction) — the basis is not simply a mispricing signal, it reflects real structural frictions
- **Naked CDS**: protection bought/sold with no underlying exposure — banned for European sovereign debt, generally permitted elsewhere
- **Big Bang / Small Bang Protocols (2009)**: standardized coupon + upfront convention and hardwired auction settlement (Big Bang); extended auction settlement to restructuring events (Small Bang)
- On exam problems, always **check the sign of the change and who is long/short** before computing a dollar amount — most wrong-answer distractors in this topic come from flipping buyer/seller direction, not from arithmetic errors
