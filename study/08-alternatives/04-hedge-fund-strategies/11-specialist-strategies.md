## Summary: 4.11 | Specialist Strategies (CFA Level II — Alternative Investments)

---

### Learning Outcome
Discuss investment characteristics, strategy implementation, and role in a portfolio of **specialist** hedge fund strategies.

*(New category — two specialist strategies covered: volatility trading and reinsurance/life settlements.)*

---

## PART 1: Volatility Trading

$$\boxed{\text{Volatility trading has become an ASSET CLASS unto itself over recent decades}}$$

**Core goal of relative value volatility arbitrage**: 
$$\boxed{\text{BUY cheap volatility + SELL expensive volatility, netting out time decay, sometimes extracting value from ACTIVE GAMMA trading}}$$

**Why volatility mispricing occurs across regions**: Asian structured products with cheap embedded options (stripped/resold by banks) → **Asian implied volatility often cheaper** than North American/European markets, where OTM option buying for protection ("insurance") is common.

### Two Relative Value Examples

**1. Time-zone arbitrage**: Same underlying asset, different time zones — e.g., **Japanese yen options** consistently traded at **lower volatility** in Asian hours vs. London/New York/Chicago (1980s–90s).

**2. Cross-asset volatility trading**: Different underlyings — e.g., **Nikkei 225** implied volatility sourced cheaply in Asia vs. **S&P 500** implied volatility in New York, **even though** Nikkei's realized volatility is typically **higher** than the S&P's. Involves more **idiosyncratic, macro-oriented** risk.

### Outright Long Volatility Trading

$$\boxed{\text{Equity volatility is} \approx 80\% \text{ NEGATIVELY correlated with equity returns}}$$

**Implication**: volatility rises when equities fall → **long volatility = useful diversifier** for long equity portfolios (at the cost of premium paid).

$$\boxed{\text{Selling volatility captures the VOLATILITY RISK PREMIUM — compensation for providing "crisis insurance"}}$$

### VIX Futures — The Most Liquid US Volatility Instrument

$$\boxed{\text{VIX futures track 30-day implied volatility of S\&P 500 options (CBOE)}}$$

**Key behavioral property**: 
$$\boxed{\text{VIX futures are prone to MEAN REVERSION} \implies \text{prices SLIDE DOWN a positively-sloped implied vol curve as expiration approaches ("roll down")}}$$

**Because of this**: many practitioners prefer **exchange-traded options, OTC options, variance swaps, and volatility swaps** — mean reversion still affects these, but **less explicitly** than futures.

### Volatility Curve Concepts to Monitor

| Concept | Description |
|---|---|
| **Term structure** | Typically **upward sloping**, can **invert** during crises |
| **Volatility smile** | OTM options trade at **higher** implied vol than ATM |
| **Volatility skew** | OTM **puts** may trade at higher implied vol than OTM **calls** |

**Options maturity trade-off**:
$$\boxed{\text{Longer-dated options: MORE vega exposure (absolute volatility sensitivity)}}$$
$$\boxed{\text{Shorter-dated options: MORE gamma/delta sensitivity to price changes}}$$

### Four Implementation Paths

**1. Exchange-traded options** (~2-year max maturity): use spreads (bull/bear, straddles, calendar spreads); requires **delta hedging** of gamma to extract a pure long-vol view; poor gamma management can **cause missed gains** even with a correct volatility thesis.

**2. OTC options**: customizable tenor/strike, longer maturities possible — but adds **counterparty credit risk** and **illiquidity**.

**3. VIX futures/options on VIX futures**: expresses **pure volatility view** without needing constant delta hedging — but subject to strong **mean reversion** and **roll-down decay** (positive term structure slope → theta decay accelerates as time passes).

**4. OTC volatility/variance swaps**:
$$\boxed{\text{Volatility swap: forward contract on future REALIZED volatility}}$$
$$\boxed{\text{Variance swap: forward contract on future REALIZED VARIANCE (= volatility}^2\text{)}}$$
- Strike set so **fair value = 0** at inception ("fair volatility"/"fair variance")
- At expiry: floating-leg receiver paid **(realized − strike) × notional**
- Provide **"pure" volatility exposure** — unlike options, **no delta hedging needed** to isolate volatility
- Advantage: **longer-dated, tailored** maturities/strikes

### Long Volatility — Convexity and Payoff Character

$$\boxed{\text{Long volatility strategy is CONVEX — asymmetric, RIGHT-skewed payoff}}$$
- Options often structured with **small cost** but **payoffs many multiples** of premium paid

### Key Risks of Long Volatility (OTC-based) Strategies

- **Not exchange-traded** → must be **negotiated**, typically under **ISDA documentation** with **bilateral margin agreements** (ISDA Credit Support Annex)
- **Higher counterparty and liquidity risk** than exchange-traded instruments
- **AUM threshold barrier**: smaller funds may be **unable to access** ISDA-backed OTC derivatives until reaching **~$100 million AUM**
- **Persistent cost**: even with positive convexity, long volatility **almost always** involves **roll-down risk and premium expense**

---

### Exhibit 10 — Key Aspects of Volatility Trading

**Risk Profile & Liquidity**: 
- Long volatility = **positive convexity**, useful for hedging
- Short volatility (premium sellers) = **steadier returns** in normal markets
- Relative value volatility trading = **alpha source** across geographies/asset classes
- **Liquidity ranking**: VIX futures/options (very liquid) > exchange-traded index options (liquid, up to ~2yr, decreasing with tenor) > OTC contracts (customizable but less liquid/fungible)

**Leverage Usage**: natural **convexity** of volatility instruments → outsized gains possible with **little upfront risk**; notional appears levered but the **asymmetric payoff structure** is the attractive feature (not leverage per se).

**Benchmarking**: **Difficult** to benchmark (niche strategy). **CBOE Eurekahedge indexes**: Long Volatility Index (15 managers), Short Volatility Index (5 managers), Relative Value Volatility Index (11 managers), Tail Risk Index (11 managers).

---

### Worked Example 10 — Serena Ortiz's Long Volatility Trade

**Setup**: Mid-January, buys 1-year, 10% OTM puts on a stock index at **$100/contract**, implied vol = **12%**. Backdrop: rising consumer debt (subprime, credit cards, personal loans) at historic highs, but markets calm and rising.

**Mid-April update**: Index has risen **+20%** further; volatility low; Ortiz's puts now priced at only **$50/contract** (deeper OTM, cheaper — a **50% mark-to-market loss**).

**Mid-July crisis**: Unexpected crisis hits; index falls **25% below April level, 10% below original January level**; implied vol spikes to **30%**.

**Q1. Discuss the time/volatility/price impact by mid-July**:

$$\boxed{\text{Options moved from 10\% OTM to essentially AT-THE-MONEY (given the 10\% total decline from January)}}$$
$$\boxed{\text{Implied vol rose 2.5x (12\% \to 30\%)} \implies \text{Large POSITIVE price impact, especially since ATM options are MOST sensitive to vol changes}}$$

**Net result**: despite six months of **time decay**, Ortiz likely has a **substantial unrealized profit** by mid-July — the combination of moving toward ATM + the large vol spike **overwhelms** the time decay drag.

**Q2. What if the market then moves sideways from July to next January?**

$$\boxed{\text{ATM option premium SLOWLY ERODES via time decay}}$$
$$\boxed{\text{If puts remain ATM and vol dissipates} \implies \text{Ortiz could ultimately LOSE her entire \$100 initial investment per contract}}$$

**Mitigation**: **active delta hedging** (buying/selling index futures over time) could allow her to **capture offsetting profits** against the time/volatility decay.

---

## PART 2: Reinsurance / Life Settlements

$$\boxed{\text{Hedge funds have entered insurance/reinsurance/life settlements/catastrophe reinsurance — still a somewhat NASCENT area}}$$

**Insurance contract basics**: payout to policyholder/beneficiaries on a specified insured event, in exchange for **premium** payments. Contracts are **highly customized, illiquid**, difficult to trade after initiation.

**Secondary market growth**: policyholders no longer wanting/needing coverage can **surrender** to the original issuer — but third-party brokers increasingly offer **higher cash values** than surrender value, then **resell** these as investments to hedge funds.

**Value proposition for hedge funds**: 
$$\boxed{\text{Differentiated view on life expectancy} \implies \text{if correct, attractive UNCORRELATED returns}}$$

**Reinsurance market benefits**:
- **Insurers**: risk transfer, capital management, solvency management
- **Hedge funds**: source of **uncorrelated alpha**

---

### Life Settlements — Investment Characteristics and Implementation

$$\boxed{\text{Life settlement = sale of a life insurance contract to a THIRD PARTY (secondary market)}}$$

**Required expertise**: **biometric analysis** + **actuarial analysis** of the individual policyholder.

**Target policy characteristics** (what the hedge fund looks for):
1. **LOW** surrender value being offered to the insured
2. **LOW** ongoing premiums to keep policy active
3. **HIGH** probability the insured will die **sooner** than standard actuarial predictions

**Transaction mechanics**: 
$$\boxed{\text{Fund pays a LUMP SUM (via broker) to acquire policy rights} \implies \text{Fund makes ONGOING PREMIUM payments} \implies \text{Fund receives the DEATH BENEFIT at maturity}}$$

**Success condition**: 
$$\boxed{PV(\text{death benefit received}) > PV(\text{lump-sum purchase} + \text{ongoing premiums paid})}$$

**Key inputs**: (1) expected policy cash flows (purchase price, premiums, death benefit) and (2) **time to mortality**.

**Correlation profile**: 
$$\boxed{\text{Neither input relates to financial market behavior} \implies \text{STRATEGY IS UNCORRELATED with other hedge fund strategies}}$$

---

### Catastrophe Insurance/Reinsurance

$$\boxed{\text{Covers floods, hurricanes, earthquakes — highly IDIOSYNCRATIC, uncorrelated with financial markets}}$$

**Structure**: Insurers **reinsure** exposure above a threshold with reinsurance companies, who source capital from hedge funds.

**Three conditions for an attractive, uncorrelated return profile**:
1. **Sufficient policy diversity** (geography, insurance type)
2. **Sufficient buffer** (loan loss reserves) from the insurance company
3. **Enough premium income**

**Valuation approach**: sophisticated **geophysical/weather prediction models**; assess worst-case loss potential across reinsurance structures vs. premium income received.

**Diversification is the manager's key protection**: sufficient **geographic diversity** prevents a single catastrophic event from causing severe harm — and premiums typically **rise** after catastrophic events, benefiting ongoing exposure.

**Related instruments**: **catastrophe bonds** and **catastrophe risk futures** — organized markets continue developing; **seasonal** issuance/performance pattern (many cat bonds issued **before** the **May/June** North American hurricane season; perform well if the season is **benign**).

---

### Worked Example 11 — SingStar Life Settlements Case Study

**Setup**: Mikki Tan's SingStar (Singapore) evaluates a life settlement pool from broker **Warwick Direct**, heavily weighted with policies from **NextLife** (known for **weak underwriting** — low premiums for unhealthy policyholders, low surrender values).

**Key finding**: many policies were written on individuals who have since developed **early-onset Alzheimer's** and other debilitating diseases → require upfront cash for care. Early-onset Alzheimer's patients have life expectancy **~10 years shorter** than average.

**Q: How should Tan and SingStar proceed?**

**Required analytical steps**:
1. **Forecast cash flows**:
   - **Ongoing premiums** to NextLife (informed by NextLife's known **low premium** pricing + the pool's **shorter life expectancy**)
   - **Timing of death benefit** receipt (informed by the **early-onset Alzheimer's prevalence** and shorter average life expectancy)
2. **Select an appropriate risk-adjusted discount rate**
3. **Compute present value** of the net expected cash flows
4. **Compare PV to Warwick Direct's minimum bid price** + assess **competitive bidding dynamics** → set proposed purchase price

**Expected outcome**: If SingStar's biometric/actuarial/financial forecasts are **met or exceeded**, the investment should generate **attractive returns uncorrelated with financial markets**.

---

### Exam Tips

- **Volatility term structure, smile, and skew are three DISTINCT, commonly-confused concepts** — memorize each definition precisely: term structure = across maturities; smile = across strikes (both OTM sides elevated vs. ATM); skew = OTM puts vs. OTM calls asymmetry
- **VIX futures roll-down/mean-reversion mechanic** is a key, testable behavioral property — know **why** many practitioners prefer options/swaps over VIX futures (less explicit mean-reversion drag)
- **Volatility swap vs. variance swap**: variance = volatility², otherwise structurally identical (forward contract, fair value = 0 strike at inception, floating-leg payoff based on realized vs. strike) — a clean, testable pair of definitions
- **Example 10 (Ortiz) is an excellent template for understanding OPTION GREEKS INTERACTION over time**: moving toward ATM + large IV spike can overcome time decay even after a significant initial mark-to-market loss — teaches that path dependency matters enormously in long volatility strategies, and that the SAME position can show wildly different P&L at different points in its life
- **$100M AUM threshold for ISDA/OTC derivative access** is a specific, testable barrier-to-entry fact
- **Life settlement success condition** (PV of death benefit > PV of purchase price + premiums) is a straightforward but testable NPV-style framework — Example 11 is a good template for a qualitative "what would you analyze" essay question
- **Uncorrelated nature of BOTH specialist strategies is the section's central thematic thread**: life settlements depend on **mortality timing** (not markets); catastrophe reinsurance depends on **weather/geophysical events** (not markets) — this is precisely why hedge funds value these niches as portfolio diversifiers
- **Three conditions for attractive catastrophe reinsurance exposure** (diversity, loss reserve buffer, sufficient premium income) are a good checklist for a "what makes a good cat-re investment" question
- **Seasonal cat bond issuance pattern** (pre-hurricane season, benign-season outperformance) is a specific, memorable real-world detail
- This section **completes the specialist category** (volatility + reinsurance/life settlements, per 4.01's roadmap) — expect the **next section** to transition into **multi-manager strategies** (multi-strategy funds and funds-of-funds), the final category outlined in 4.01