---
layout: page
title: Credit Default Swaps — Market Features and Settlement
permalink: /study/06-fixed-income/05-credit-default-swaps/03-cds-market-features-and-settlement/
prev: /cfa/study/06-fixed-income/05-credit-default-swaps/02-basic-definitions/
next: /cfa/study/06-fixed-income/05-credit-default-swaps/04-cds-index-products-and-pricing/
---
## Summary: Credit Default Swaps — Market Features and Settlement (CFA Level II — Fixed Income)

---

### CDS Market Structure and Conventions

**ISDA governs the market:**

| Element | Detail |
|---|---|
| **ISDA** | International Swaps and Derivatives Association — the industry's (unofficial) governing body |
| **ISDA Master Agreement** | The legal document counterparties sign before trading; contracts conform to ISDA specifications |
| **Standard Europe Contract** | Standardized terms for European reference entities |
| **Standard North American Contract** | Standardized terms for US/Canadian reference entities |

Other standardized templates exist for Asia, Australia, Latin America, and select other jurisdictions.

**Contract parameters:**

| Parameter | Convention |
|---|---|
| **Notional** | Size of protection purchased; can exceed the reference entity's total debt outstanding (a protection buyer need not be an actual creditor) |
| **Maturity** | Typically 1–10 years; **5 years is the most common and most liquid tenor** |
| **Maturity dates** | Standardized to the **20th of March, June, September, or December** |
| **Most liquid dates** | **March and September** — these are the dates on which index CDS series **roll** |
| **Coupon** | Standardized at **100 bps (1%)** for investment-grade names/indexes or **500 bps (5%)** for high-yield names/indexes |

> **Key insight**: Standardizing the coupon (rather than setting it equal to the "fair" credit spread, as was done historically) made CDS contracts fungible and tradable at scale. Because the standardized coupon will rarely equal the true market credit spread, the difference is trued up with an **upfront payment** — the mechanics of which are covered in the next file.

---

### Credit and Succession Events

Recall the three primary credit events — **bankruptcy**, **failure to pay**, and **restructuring** — plus **moratorium/repudiation** for sovereign and municipal issuers. Two features of how the market operationalizes these definitions deserve closer attention: who decides, and how restructuring is treated differently from the other events.

**The ISDA Determinations Committee (DC)**

| Feature | Detail |
|---|---|
| **Composition** | 15 members per region: **10 sell-side (dealer) banks** + **5 buy-side (non-bank) end users** |
| **Vote required** | A **supermajority of 12 votes** is needed to declare that a credit event (or succession event) has occurred |
| **Role** | Provides a single, binding, market-wide determination — avoiding the disputes that would arise if each counterparty pair had to independently agree |

**Restructuring — the "soft" credit event**

Restructuring is treated differently from bankruptcy and failure to pay because it is far less binary:

- To qualify as a credit event, the restructuring must be **involuntary** (forced on the borrower by creditors) or **coercive** (forced on creditors by the borrower) — a voluntary, mutually agreed amendment does not count.
- **Restructuring is not a credit event in the United States** — US issuers generally restructure through the bankruptcy process, which is itself already a covered credit event.
- Restructuring **is** a credit event in many other jurisdictions where formal bankruptcy proceedings are less commonly used to reorganize debt (the Greek sovereign debt restructuring is a well-known example of a triggering restructuring event).

Because restructuring (where it is a covered event) creates an unusually wide range of potentially deliverable obligations — including very long-dated bonds unrelated to the actual restructuring — ISDA standard documentation offers several restructuring clauses that limit which obligations are deliverable:

| Convention | Abbreviation | Deliverable-obligation scope |
|---|---|---|
| **Full (Old) Restructuring** | CR | No maturity restriction — any qualifying obligation of the reference entity is deliverable |
| **Modified Restructuring** | MR | Deliverable obligations limited to those maturing within roughly 30 months of the restructuring maturity limitation date (US convention) |
| **Modified-Modified Restructuring** | MM | A looser limit than MR — roughly 60 months for the restructured obligation itself, 30 months for other obligations (European convention) |
| **No Restructuring** | XR | Restructuring is excluded from the contract entirely as a covered credit event |

> **Why this matters**: A wide-open (CR) restructuring clause increases the cheapest-to-deliver optionality for the protection buyer (more, and cheaper, bonds can be delivered), which makes protection more valuable — and more expensive — than a narrower (MR/MM/XR) clause on the same reference entity.

**Succession Events**

A **succession event** arises when a change in the reference entity's corporate structure — merger, divestiture, spinoff, or similar — makes it unclear who is now responsible for the underlying debt.

- If one company acquires 100% of another's shares, it ordinarily assumes the target's debt, and the CDS follows the surviving obligor.
- Partial acquisitions, spinoffs, and divestitures are murkier: responsibility for specific debt tranches may be split or ambiguous.
- The question is submitted to the **Determinations Committee**, whose ruling can **split a single CDS contract among multiple successor entities**, each covering a proportional share of the original notional.

---

### Settlement Protocols

Once the DC declares that a credit event has occurred, the two counterparties have the **right, but not the obligation, to settle** — settlement typically occurs about **30 days** after the DC's declaration.

**Two settlement methods:**

| Method | Mechanics |
|---|---|
| **Physical settlement** | Less common. Protection buyer **delivers the (cheapest-to-deliver) defaulted obligation** to the protection seller in exchange for a cash payment equal to the **full notional amount** |
| **Cash settlement** | Protection seller pays the protection buyer cash equal to the estimated **loss**, determined via the industry auction process described below |

**Recovery rate and loss given default:**

$$\boxed{\text{Loss given default (LGD)} = 1 - \text{Recovery rate (RR)}}$$

$$\boxed{\text{Payout amount} = LGD \times \text{Notional}}$$

The recovery rate is estimated using the price of the **cheapest-to-deliver obligation** — the qualifying bond that can be purchased and delivered at the lowest cost.

**The ISDA credit event auction**

Because actual recovery can take years to materialize (well beyond the CDS settlement date), the industry runs a formal **auction** to establish a single, market-wide recovery rate (and therefore LGD) that all cash-settling parties agree to accept — even though the eventual real-world recovery may differ:

```
Stage 1 — Initial Market Midpoint (IMM)
  Dealers submit two-way (bid/offer) markets on the cheapest-to-deliver obligation
  -> Outlying quotes are dropped; surviving quotes are averaged into the IMM
  Dealers simultaneously submit physical settlement requests (buy/sell orders)
  -> These are netted into the market's "net open interest" (net buyers vs. net sellers)

Stage 2 — Second-Round (Dutch) Auction  [only if net open interest exists]
  Dealers submit limit orders to buy or sell at prices better than the IMM
  -> Orders are matched against the net open interest, working outward from the IMM
  -> The final matching price becomes the single Final Price for the whole market
```

The **Final Price** from the auction is then used to cash-settle **every** CDS contract on that reference entity, whether or not the counterparty took part in the auction itself. This is what allows a fragmented OTC market to settle on one common, agreed-upon loss estimate.

**Worked example — settlement preference**

> Meridian Industrial Corp files for bankruptcy (a credit event). It has two senior unsecured bond issues outstanding: **Bond A** trades at **35% of par** (the cheapest-to-deliver obligation), and **Bond B** trades at **45% of par**. Castellan Capital holds $10 million of protection on Meridian.

- **Recovery rate** (both CDS contracts) = 35% (set by the cheapest-to-deliver obligation, Bond A)
- **Cash settlement payout** = $(1-35\%) \times \$10,000,000 = \$6,500,000$
- If Castellan **owns Bond A**: cash settlement (\$6.5m) + sale of Bond A (\$3.5m) = **\$10m total** — identical to physical settlement (deliver Bond A, receive \$10m notional). **Indifferent.**
- If Castellan **owns Bond B** instead: cash settlement still pays \$6.5m (based on the cheapest-to-deliver, not the bond actually held), but Bond B can be sold for \$4.5m → **\$11m total**, versus only \$10m from physical settlement (delivering Bond B for the full notional). **Strictly prefers cash settlement.**

---

### Question Set Answers

**Q1.** A reference entity's bond fails to make a scheduled interest payment after the grace period expires, but the company does not file for bankruptcy. Did a credit event occur?
**A.** **Yes.** Failure to pay is itself a covered credit event — a formal bankruptcy filing is not required. (Note: failure to pay on a *subordinated* obligation still triggers the CDS on a senior reference obligation; the credit event determination is not limited to the reference obligation itself.)

**Q2.** An analyst observes severe near-term financial stress at a reference entity and notes its credit curve is downward sloping. What does this imply?
**A.** A downward-sloping credit curve implies a **higher probability of default in the near term than in later years** — consistent with acute near-term stress. This is the less common shape; credit curves are more often upward sloping (see the next file).

**Q3.** A protection buyer holds a bond that is *not* the cheapest-to-deliver obligation on a reference entity that just defaulted. Should the buyer prefer cash or physical settlement?
**A.** **Cash settlement.** The CDS payout is fixed by the cheapest-to-deliver obligation's auction price regardless of which bond the buyer actually holds. If the buyer's own bond is worth more than the cheapest-to-deliver bond, cash-settling the CDS and separately selling the higher-value bond nets more total proceeds than physically delivering that higher-value bond for only the notional amount.

---

### Exam Tips

- **ISDA Master Agreement** must be signed before CDS trading begins — a common compliance-question answer
- **Determinations Committee**: 15 members (10 dealer + 5 buy-side), **12-vote supermajority** required
- **Restructuring is NOT a credit event in the US** (issuers use bankruptcy instead); it IS a credit event in many other jurisdictions
- Restructuring credit events must be **involuntary or coercive** — a mutually agreed amendment does not qualify
- **Full/Mod/Mod-Mod/No Restructuring (CR/MR/MM/XR)**: narrower clauses limit deliverable-obligation maturities, reducing the cheapest-to-deliver optionality and the cost of protection
- **Succession events** can split one CDS contract across multiple successor obligors, as determined by the DC
- **LGD = 1 − Recovery rate; Payout = LGD × Notional**
- **The auction (not the actual eventual recovery) determines the cash settlement payout** for the whole market — the two-stage process (IMM, then Dutch auction on net open interest) sets a single **Final Price**
- **Settlement preference**: if the bond held is worth more than the cheapest-to-deliver obligation, cash settlement dominates physical settlement; if the bond held IS the cheapest-to-deliver, the two are economically equivalent
