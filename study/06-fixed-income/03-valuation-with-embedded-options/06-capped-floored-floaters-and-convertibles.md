---
layout: page
title: Capped/Floored Floaters and Convertible Bonds
permalink: /study/06-fixed-income/03-valuation-with-embedded-options/06-capped-floored-floaters-and-convertibles/
prev: /cfa/study/06-fixed-income/03-valuation-with-embedded-options/05-effective-duration-and-convexity/
next: /cfa/study/06-fixed-income/03-valuation-with-embedded-options/07-formula-summary/
---
## Summary: Capped/Floored Floaters and Convertible Bonds (CFA Level II — Fixed Income)

---

### Capped and Floored Floating-Rate Bonds

Options embedded in floating-rate bonds (floaters) are exercised **automatically** — if the reset coupon breaches the cap or floor, the provision applies mechanically, with no discretionary decision by either party. Valuation still uses the same arbitrage-free tree framework.

**Capped floater**: prevents the coupon from rising above a maximum rate — protects the **issuer** against rising rates, so it is an issuer option. The investor is long the bond but short the cap:

$$\boxed{V_{capped\ floater} = V_{straight\ floater} - V_{cap}}$$

**Floored floater**: prevents the coupon from falling below a minimum rate — protects the **investor** against falling rates, so it is an investor option. The investor is long both the bond and the floor:

$$\boxed{V_{floored\ floater} = V_{straight\ floater} + V_{floor}}$$

> **Key insight**: An uncapped, unfloored floater that resets exactly at the discount rate each period is always worth **100 (par)** at each reset — the coupon and discount rate move together by construction. Any deviation from par in a capped/floored floater comes entirely from the cap/floor provision.

---

### Worked Example — Meridian Grid Capped Floater

A 3-year floater pays the one-year reference rate **annually, set in arrears**, capped at **4.500%**. Reference curve = the same par curve used throughout (1yr = 2.500%, 2yr = 3.000%, 3yr = 3.500%), 10% volatility, same tree (nodes: 2.5000% / 3.8695%, 3.1681% / 5.5258%, 4.5242%, 3.7041%).

At each node, check whether the reset rate exceeds the 4.500% cap; if so, the coupon paid at the *next* period is capped at 4.500 (rather than the uncapped reset rate):

| Node (Year 2 rate) | Uncapped Coupon | Capped? | Cash Flow Paid |
|---|---|---|---|
| 5.5258% | 105.5258 | **Yes** | 104.5000 |
| 4.5242% | 104.5242 | **Yes** | 104.5000 |
| 3.7041% | 103.7041 | No | 103.7041 |

Backward-inducting through the tree with these capped cash flows produces a value of **99.761** at Year 0.

$$V_{cap} = 100 - 99.761 = \mathbf{0.239}$$

The capped floater is worth *less* than par because the coupon is prevented from rising as high as the reference rate would otherwise dictate in the higher-rate scenarios.

---

### Worked Example — Meridian Grid Floored Floater

Same bond and tree, now **floored at 3.500%** instead of capped. Check whether each reset rate falls below the 3.500% floor:

| Node | Reset Rate | Floored? | Coupon Paid |
|---|---|---|---|
| Year 0 | 2.5000% | **Yes** | 3.5000 |
| Year 1, lower | 3.1681% | **Yes** | 3.5000 |
| Year 1, upper | 3.8695% | No | 3.8695 |
| Year 2, all nodes | 3.7041%–5.5258% | No | Reference rate itself |

Backward induction produces a value of **101.133**.

$$V_{floor} = 101.133 - 100 = \mathbf{1.133}$$

The floored floater is worth *more* than par because the floor guarantees a minimum coupon above what the reference rate would otherwise pay in low-rate scenarios.

> **Sanity checks**: If the cap is set **above every node's rate** in the tree, it never binds and $V_{capped} = V_{straight} = 100$. If the floor is set **below every node's rate**, it never binds and $V_{floored} = V_{straight} = 100$.

---

### Question Set Answers

**Q1** — A 3-year floater, annual reference-rate coupon (set in arrears), capped at 5.600%, same reference curve/volatility as above. Value?
→ **100.000.** The 5.600% cap sits above every rate in the tree, so it never binds — the bond is economically identical to an uncapped floater priced at par.

**Q2** — Same floater, floored at 3.000% instead. Value?
→ **100.488.** The floor is low enough that it only occasionally binds (less often than the 3.500% floor case above, which added 1.133), so the added value is smaller but still positive.

**Q3** — A eurozone issuer sells a 3-year FRN at par based on 12-month Euribor + 320 bps, capped at 5.50%, 8% volatility. Given the constructed tree, the capped floater's value:
→ Computed via the same backward-induction procedure (checking the 5.50% cap against each node's reset-plus-spread rate and capping the affected cash flows) — the cap barely reduces value below par given how close the cap sits to the tree's node rates, producing a value only marginally below 100.

---

### Convertible Bonds

A **convertible bond** combines a straight bond with a **conversion option** — the bondholder's right to convert the bond into a predetermined number of the issuer's common shares. Investors typically accept a **lower coupon** in exchange for equity upside; the issuer benefits from cheaper financing and, upon conversion, no longer owes the principal.

**Defining features** (using a fictional issuer, Nimbus Social Inc., $1,000 par convertible bond):

| Term | Definition | Nimbus Example |
|------|------------|------------------|
| **Conversion ratio** | Shares received per bond converted | 17.5 shares per $1,000 par |
| **Conversion price** | Par value ÷ conversion ratio | $1,000 / 17.5 = $57.14 |
| **Conversion period** | Window during which conversion is allowed | Set in the offering circular |
| **Conversion value (parity value)** | Underlying share price × conversion ratio | Depends on current share price |

$$\boxed{\text{Conversion value} = \text{Underlying share price} \times \text{Conversion ratio}}$$

$$\boxed{\text{Conversion price} = \frac{\text{Par value}}{\text{Conversion ratio}}}$$

**Corporate actions and dividends**: stock splits, bonus issuances, and rights/warrants issuances trigger a proportional adjustment to the conversion price and ratio (e.g., a 2-for-1 split halves the conversion price and doubles the ratio). Dividend protection is typically partial — a **threshold dividend** is specified; only dividends *above* that threshold trigger a downward conversion-price adjustment.

**Change-of-control provisions**: convertible bondholders are often given a choice between (1) a **put option** for full par redemption, or (2) an **adjusted (lower) conversion price** that lets them participate in the acquisition as shareholders.

**Put and call features**: convertibles may carry investor **put options** ("hard puts" — cash redemption; "soft puts" — issuer's choice of cash, stock, or subordinated notes) exercisable at specified dates, and issuer **call options** (after a protection period, at a declining premium). A call exercised while the share price exceeds the conversion price forces bondholders to convert rather than accept redemption — this is **forced conversion**, which strengthens the issuer's capital structure and eliminates future dilution risk from further share appreciation.

---

### Minimum Value of a Convertible Bond

$$\boxed{\text{Minimum value} = \max(\text{Conversion value}, \text{Straight value})}$$

This is a **moving floor** — the straight value fluctuates with interest rates and credit spreads (rises when rates/spreads fall; falls when rates/spreads rise), so the floor itself is not fixed. If the convertible ever traded *below* this floor, arbitrage would force the price back up:

- If price < straight value → buy the bond (cheap relative to an otherwise-identical non-convertible bond) → demand pushes price up to the straight value.
- If price < conversion value → buy the bond, convert immediately, and sell the resulting shares at the market price → arbitrage profit equal to (conversion value − price) → demand pushes price up to the conversion value.

---

### Market Conversion Premium

$$\boxed{\text{Market conversion price} = \frac{\text{Convertible bond price}}{\text{Conversion ratio}}}$$

$$\boxed{\text{Market conversion premium per share} = \text{Market conversion price} - \text{Underlying share price}}$$

$$\boxed{\text{Market conversion premium ratio} = \frac{\text{Market conversion premium per share}}{\text{Underlying share price}}}$$

The market conversion price is the effective break-even price an investor pays for the shares by buying the convertible and converting. Once the share price exceeds this break-even, further share-price gains are captured (at least) 1-for-1 by the convertible bond's price.

**Downside-risk measure** (with a caveat):

$$\boxed{\text{Premium over straight value} = \frac{\text{Convertible bond price}}{\text{Straight value}} - 1}$$

> **Caveat**: A higher premium over straight value signals less downside protection, all else equal — but this measure is **flawed** because the straight value it's scaled by is itself not fixed; it moves with rates and credit spreads.

**Nimbus Social illustration** (fictionalized numbers consistent with a real 2018-vintage $1,000-par, 0.25% convertible): conversion ratio 17.5, conversion price $57.14, share price at issuance $40.10 (conversion value $701.75 < par $1,000, so minimum value = $1,000 at issuance). One year later: share price $35.14 (conversion value $614.95), straight value recomputed at a 2.5% flat curve with 5 years remaining = $894.86, so minimum value = max($614.95, $894.86) = **$894.86**. With the convertible trading at $915.25: market conversion price = $915.25/17.5 = $52.30; market conversion premium per share = $52.30 − $35.14 = $17.16; premium over straight value = $915.25/$894.86 − 1 ≈ 2.3%.

---

### Arbitrage-Free Valuation of a Convertible Bond

A convertible bond can be decomposed as a straight bond plus a call option on the issuer's stock:

$$\boxed{V_{convertible} = V_{straight} + V_{\text{call on stock}}}$$

If the bond is also **callable** by the issuer:

$$V_{callable\ convertible} = V_{straight} + V_{\text{call on stock}} - V_{\text{issuer call}}$$

If additionally **putable** by the investor:

$$V_{callable\ putable\ convertible} = V_{straight} + V_{\text{call on stock}} - V_{\text{issuer call}} + V_{\text{investor put}}$$

The valuation *procedure* is the same tree-based backward induction used throughout this module regardless of how many options are layered on — generate the tree, determine exercise at each node for each embedded option, and backward-induct.

---

### Comparison of Risk-Return Characteristics: Convertible vs. Straight Bond vs. Common Stock

| Regime | Share Price vs. Conversion Price | Convertible Behaves Like | Primary Driver |
|--------|-----------------------------------|------------------------------|--------------------|
| **Busted convertible** | Share price **well below** conversion price | The **straight bond** | Interest rates, credit spreads |
| **Hybrid / at-the-money** | Share price **near** conversion price | Neither purely — a blend | Both rates and share price movements, with rising equity sensitivity |
| **In-the-money convertible** | Share price **well above** conversion price | The **underlying common stock** | Share price movements |

- **Busted convertible**: the embedded call option (on the stock) is far out of the money and has little time value left as the conversion window approaches its end — the bond trades essentially like its non-convertible twin. As the share price falls toward zero, the convertible's value approaches the present value of the recovery rate in bankruptcy, just like a straight bond.
- **In-the-money convertible**: the call option is deep in the money, so the option's (and hence the convertible's) value tracks the share price almost 1-for-1; interest rate and credit-spread movements become secondary drivers. The convertible trades near its conversion (parity) value.
- **Why not convert immediately** when in the money? The conversion option may be European-style (exercisable only at specified dates), or even if American-style, it may be optimal to keep holding rather than exercise early (the same optionality-value logic as calls/puts generally) — or the investor may simply prefer to sell the convertible rather than convert and sell the shares.

> **Key insight**: A convertible bond gives investors **equity-like upside participation** (via the conversion option) combined with **bond-like downside protection** (via the straight-value floor) — but that floor is a *moving* floor, not a fixed one, and the protection is materially weaker once credit quality deteriorates (both the straight value and, often, the share price fall together in a credit event).

---

### Question Set Answers — Heavy Element Inc. Convertible Bond

Heavy Element Inc., $1,000 par, 3.75% annual coupon, conversion ratio 23.26. On a given date: convertible bond price = $1,230; share price = $52.

**Q1** — Conversion price?
→ $1,000 / 23.26 = **$43** per share.

**Q2** — Conversion value?
→ $52 × 23.26 = **$1,209**.

**Q3** — Market conversion premium per share?
→ ($1,230/23.26) − $52 = $52.88 − $52 = **$0.88**.

**Q4** — With the share price ($52) well above the conversion price ($43), the convertible's risk-return characteristics most resemble:
→ **Heavy Element's common stock** — this is an in-the-money convertible.

**Q5** — If credit spreads for the industry narrow (lower rates for such debt), all else equal, the convertible bond's price will:
→ **Not change significantly.** Since the option is deep in the money, the bond behaves like the stock — interest-rate/credit-spread moves are secondary.

**Q6** — If the convertible trades at $1,050 in the secondary market (below its $1,209 minimum value), the risk-free arbitrage is:
→ **Buy the convertible bond, convert it into 23.26 shares, and sell the shares** at $52 each ($1,209 total) — a $159 profit.

**Q7** — Later, adverse sector-wide news drops Heavy Element's share price to $28 (well below the $43 conversion price). The convertible now resembles:
→ **A (busted-convertible) bond** — mostly bond risk-return characteristics, since the conversion option is now far out of the money.

---

### Exam Tips

- **Capped floater = straight floater − cap value** (issuer benefit); **floored floater = straight floater + floor value** (investor benefit) — same sign convention as callable (−) / putable (+) bonds
- An **uncapped, unfloored floater resetting at the reference rate is always worth par** at each reset date — any premium/discount in a capped/floored floater comes entirely from the embedded option
- **Conversion value = share price × conversion ratio**; **conversion price = par ÷ conversion ratio** — these are inverses of each other via the conversion ratio
- **Minimum value of a convertible = max(conversion value, straight value)** — a *moving* floor because the straight value shifts with rates/credit
- **Market conversion price = convertible price ÷ conversion ratio** — the effective break-even purchase price for the shares via the convertible
- **Busted convertible** (share price << conversion price) → behaves like a **straight bond**, driven by rates/credit. **In-the-money convertible** (share price >> conversion price) → behaves like the **stock**, driven by equity price
- **Forced conversion**: issuer calls when share price > conversion price to eliminate future dilution risk and strengthen its capital structure, even absent a rate/credit-driven refinancing motive
- **Convertible = straight bond + call option on the stock** (minus any issuer call, plus any investor put) — same backward-induction tree machinery values every layer simultaneously
- Premium over straight value is a **flawed** downside-risk measure precisely because the straight value denominator is not fixed
