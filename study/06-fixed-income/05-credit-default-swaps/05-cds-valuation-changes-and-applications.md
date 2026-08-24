---
layout: page
title: Credit Default Swaps — Valuation Changes and Applications
permalink: /study/06-fixed-income/05-credit-default-swaps/05-cds-valuation-changes-and-applications/
prev: /cfa/study/06-fixed-income/05-credit-default-swaps/04-cds-index-products-and-pricing/
next: /cfa/study/06-fixed-income/05-credit-default-swaps/06-formula-summary/
---
## Summary: Credit Default Swaps — Valuation Changes and Applications (CFA Level II — Fixed Income)

---

### Valuation Changes in CDS during Their Lives

A CDS's market value is not static — as the market's assessment of the reference entity's credit quality shifts, the value of an existing position moves too, even absent an actual default.

**Direction of the effect:**

| Event | Protection buyer | Protection seller |
|---|---|---|
| **Credit spread widens** (credit quality deteriorates) | **Gains** — same fixed coupon now buys protection against a bigger risk | **Loses** |
| **Credit spread narrows** (credit quality improves) | **Loses** — locked into a coupon richer than the risk now justifies | **Gains** |

Intuitively: the protection buyer is paying a fixed coupon for coverage; if the "fair" cost of that coverage rises, the position she is locked into becomes more valuable (she could sell it to someone else for more than she's paying). The reverse holds for the seller, who is effectively long the reference entity's credit.

**The approximate mark-to-market formula:**

$$\boxed{\text{Profit/loss to protection buyer} \approx \text{Change in spread (bps)} \times \text{Duration} \times \text{Notional}}$$

Equivalently, as a percentage price change:

$$\boxed{\% \text{ change in CDS price} \approx \text{Change in spread (bps)} \times \text{Duration}}$$

This mirrors the standard bond relationship (% price change ≈ −ΔYield × modified duration): here, the change in *spread* plays the role of the change in yield, and CDS duration plays the role of modified duration — except the *protection buyer* gains from a *widening*, the opposite sign convention from a long bond position.

**Worked example — MTM gain to the protection buyer (Meridian Industrial Corp, continued):**

> Recall Castellan Capital bought $10 million of 5-year protection on Meridian at a 300 bps credit spread (see the prior file). Several months later, Meridian's credit spread widens to 380 bps (a shock tied to weaker earnings), and the CDS's remaining duration is now 4.0 years.

$$\text{Change in spread} = 380\text{bps} - 300\text{bps} = 80\text{bps}$$

$$\text{Profit to Castellan (buyer)} \approx 80\text{bps} \times 4.0 \times \$10{,}000{,}000 = 0.008 \times 4.0 \times \$10{,}000{,}000 = \$320{,}000$$

Castellan (protection buyer) has an unrealized **gain of approximately $320,000**; Northbridge (protection seller) has a symmetric **unrealized loss of approximately $320,000**. Neither cash flow has actually been paid — this is a mark-to-market value change, realized only if the position is closed out.

---

### Monetizing Gains and Losses

A party does not have to wait for default (or maturity) to capture a CDS gain or loss. **Monetizing** a position means locking in its current mark-to-market value. There are three mechanisms:

| Mechanism | Description |
|---|---|
| **Unwind with the original counterparty** | The two original parties agree to terminate the contract, with the gaining party receiving a cash payment equal to the position's current value |
| **Enter an offsetting position** | The party keeps the original contract in place but enters a new, opposite CDS (same reference entity, same remaining maturity) with a different counterparty — the original protection buyer becomes a protection seller (or vice versa) on the new contract, capturing the differential upfront premium |
| **Assign / novate the position** | The position is transferred (with the remaining counterparty's consent) to a third party, who steps into the original party's shoes — common where central clearing facilitates the transfer |

**Worked example — offsetting a position (Meridian, continued):**

> Continuing the example above: Castellan wants to lock in its gain by entering a new, offsetting 5-year CDS on Meridian.

- Castellan originally **bought protection** (paid the 8.4% upfront premium computed earlier, based on a 300 bps spread vs. the 100 bps coupon).
- To offset, Castellan now **sells protection** on a new contract at the current market terms. With the spread now at 380 bps against the same 100 bps coupon and roughly the same duration (4.0 years): new upfront $\approx (380 - 100) \times 4.0 = 1{,}120$ bps $= 11.2\%$.
- Castellan **receives** 11.2% upfront on the new (offsetting) contract, versus the 8.4% it **paid** on the original contract → net gain of **2.8% of notional**, broadly consistent with the $320,000 MTM estimate above (an 8.4% → 11.2% swing on $10m is $280,000–$320,000 depending on which duration snapshot is used — both are approximations of the same underlying gain).

If, instead, a CDS is simply held to maturity with no default, the protection seller keeps all premiums received and owes nothing further; the CDS spread converges toward zero as maturity approaches (much as a bond's price converges to par).

---

### Applications of CDS

**Managing Credit Exposures**

CDS let an investor add or shed credit risk **without transacting in the underlying bonds or loans**:

- **A lender wanting less exposure** buys protection — cheaper and faster than selling an illiquid loan or bond outright, and preserves the option to keep the relationship/asset.
- **A dealer or investor wanting more credit exposure** sells protection — this requires far less capital than buying the bond outright (no funding of principal) and can be more liquid than the cash bond.
- **Naked CDS** — buying (or selling) protection with **no underlying exposure** to the reference entity — is a pure directional bet on credit quality. It is controversial (banned for European sovereign debt) but defended on the grounds that it adds liquidity, similar to short selling or buying puts elsewhere in the market.

**Long/short and curve trades**

| Trade type | Construction | View expressed |
|---|---|---|
| **Long/short credit trade** | Buy protection on Entity A, sell protection on Entity B | A's credit will underperform B's (relative-value bet across two related or substitutable issuers) |
| **Curve trade (steepener)** | Buy protection long-tenor, sell protection short-tenor (same reference entity) | Long-term credit risk will rise **relative to** short-term risk (curve steepens) |
| **Curve trade (flattener)** | Buy protection short-tenor, sell protection long-tenor (same reference entity) | Near-term credit risk will rise relative to long-term risk (curve flattens) — often a bet on near-term distress that the entity is expected to survive |

**Worked example — curve trade (Meridian, continued):**

> Castellan grows concerned about Meridian's near-term liquidity (an upcoming debt maturity) but is not worried about Meridian's long-run prospects. Meridian's 2-year CDS trades at 250 bps and its 7-year CDS trades at 380 bps.

Castellan expects the curve to **flatten** (near-term spread rising toward, or past, the long-term spread) — the correct trade is to **buy** 2-year protection and **sell** 7-year protection. This costs less than an outright long-tenor purchase of protection (the premium received on the short leg offsets part of the premium paid on the long leg) but only pays off if Castellan's relative view — near-term risk rising faster than long-term risk — proves correct.

> **Key insight**: A curve trade is a bet on the **shape** of the credit curve (relative spreads across tenors), not on its overall **level** — it hedges out much of the risk that spreads simply move up or down together across all maturities.

---

### Valuation Differences and Basis Trading

**The CDS-bond basis:**

$$\boxed{\text{CDS-bond basis} = \text{CDS spread} - \text{Cash bond's credit spread}}$$

where the bond's credit spread = bond yield − market reference rate. In principle, both markets are pricing the same underlying credit risk, so the basis should be zero — but it persists because of technical factors, not just differing credit views:

| Factor | Effect on basis |
|---|---|
| **Search/transaction costs** in the bond market | Can widen bond spreads relative to CDS |
| **Restrictions on shorting cash bonds** | Investors bearish on credit must use CDS (buy protection) rather than short the bond, pushing CDS spreads up relative to bonds |
| **Cheapest-to-deliver option value** (embedded in the CDS) | Protection seller is short an option to the buyer (who chooses which bond to deliver) → adds value to CDS protection, tends to **widen** CDS spreads relative to bonds |
| **Counterparty risk** on the CDS itself | Makes protection less valuable than "pure" insurance would suggest → tends to **narrow** CDS spreads relative to bonds |
| **Funding costs / repo market conditions** | A cheap-to-fund bond (attractive repo rate) can trade at a tighter spread than the CDS; expensive funding does the opposite |

Because these effects can push in either direction, the basis can be **positive or negative**, and its sign is an empirical question, not a fixed rule.

**Basis trades:**

| Basis | Meaning | Trade | Construction |
|---|---|---|---|
| **Negative basis** (CDS spread < bond spread) | Credit protection looks "cheap" relative to the bond | **Negative basis trade** | **Buy the bond + buy protection** (CDS) |
| **Positive basis** (CDS spread > bond spread) | Credit protection looks "expensive" relative to the bond | **Positive basis trade** | **Short the bond + sell protection** (CDS) |

Both trades are built to be close to **credit-risk-neutral** (the bond's default risk is hedged by the offsetting CDS position) and profit **if/when the basis converges toward zero** — the residual profit is the basis itself, captured as the position is held or unwound.

**Worked example — negative basis trade (Meridian, continued):**

> Meridian's 5-year senior unsecured bond yields 6.4%; the market reference rate is 2.6%. A comparable 5-year Meridian CDS trades at a 320 bps credit spread.

$$\text{Bond credit spread} = 6.4\% - 2.6\% = 3.8\% = 380\text{bps}$$

$$\text{Basis} = 320\text{bps} - 380\text{bps} = -60\text{bps (negative basis)}$$

Credit protection (320 bps) is cheap relative to the bond's implied credit spread (380 bps). Castellan executes a **negative basis trade**: **buy the Meridian bond** (earning the 380 bps credit spread) and **buy CDS protection** (paying only 320 bps for that protection). If the basis converges to zero, the trade captures the **60 bp differential**, while the CDS leg hedges away Meridian's default risk on the bond position.

**Worked example — positive basis trade (a second reference entity):**

> A different reference entity, Vantage Retail Group, has a 5-year bond credit spread of 300 bps, while its 5-year CDS trades at 360 bps.

$$\text{Basis} = 360\text{bps} - 300\text{bps} = +60\text{bps (positive basis)}$$

Protection is expensive relative to the bond. The trade is a **positive basis trade**: **short the Vantage bond** and **sell CDS protection**. If the basis converges, the trade captures the 60 bp differential — though note that shorting corporate bonds is often costly or restricted in practice, which is itself one of the technical factors that can sustain a positive basis.

Basis trading logic extends beyond bonds vs. CDS: investors also compare CDS pricing to **equity and equity-linked instruments** on the same issuer (e.g., in an anticipated leveraged buyout, buying the stock — which should rise on a buyout premium — while also buying CDS protection, which should rise in value as the buyout increases leverage and default risk) and to **CDS index arbitrage** (trading the index against its underlying single-name constituents when the two are not priced consistently).

---

### Question Set Answers

**Q1.** An investor sold €6 million of 5-year CDS protection at a 150 bps spread (CDS duration 3.9 years). Six months later the spread narrows to 100 bps and the investor closes the position. What is the approximate gain or loss, and how is the position closed?
**A.** Change in spread = 150 − 100 = 50 bps narrowing. Approximate gain = $0.0050 \times 3.9 \times €6{,}000{,}000 = €117{,}000$. As the **protection seller**, the investor gains when spreads narrow; the position is closed by **buying** protection (an offsetting contract) at the new, lower 100 bps premium — paying less than was originally received.

**Q2.** A bond yields 7.0% when the market reference rate is 2.5%; a comparable CDS trades at a 425 bps spread. Is this a positive or negative basis, and what trade captures convergence?
**A.** Bond credit spread = 7.0% − 2.5% = 4.5% = 450 bps. Basis = CDS spread − bond spread = 425 − 450 = **−25 bps (negative basis)**. The trade is a **negative basis trade**: buy the bond and buy CDS protection, capturing the 25 bp differential on convergence.

**Q3.** A firm is expected to undergo a leveraged buyout (LBO), issuing substantial new debt to fund a share repurchase at a premium. What equity-versus-credit trade profits from this event, and why?
**A.** **Buy the stock and buy CDS protection.** The stock should rise on the buyout premium; the added leverage raises default probability, widening the CDS spread and increasing the value of the protection — both legs profit from the same anticipated event.

---

### Exam Tips

- **Protection buyer gains when spreads widen; protection seller gains when spreads narrow** — memorize this direction cold
- **Profit/loss to buyer ≈ ΔSpread (bps) × Duration × Notional**; as a % price change, **≈ ΔSpread (bps) × Duration**
- Three ways to **monetize**: unwind with original counterparty, enter an offsetting contract, or assign/novate to a third party — plus simply holding to maturity if no default occurs (spread → 0 as maturity nears)
- **Curve trade = bet on relative spreads across tenors**, not the overall level; steepener = buy long-tenor/sell short-tenor protection, flattener = buy short-tenor/sell long-tenor protection
- **CDS-bond basis = CDS spread − Bond credit spread**; can be positive or negative due to technical factors (shorting restrictions, cheapest-to-deliver optionality, counterparty risk, funding/repo costs) — not just differing credit views
- **Negative basis trade = buy bond + buy protection** (protection is "cheap"); **positive basis trade = short bond + sell protection** (protection is "expensive")
- Basis trades aim to be **credit-risk-neutral**, profiting from **convergence** of the basis toward zero, not from an outright credit view
- **Naked CDS** = protection with no underlying exposure — a pure directional bet, banned for European sovereign debt
- Equity-vs-credit trades (e.g., LBO plays) exploit the same event moving both legs (stock up, CDS spread up) in the trader's favor simultaneously
