---
layout: page
title: Bonds with Embedded Options — Introduction
permalink: /study/06-fixed-income/03-valuation-with-embedded-options/01-introduction/
---
## Summary: Bonds with Embedded Options — Introduction (CFA Level II — Fixed Income)

---

### Why Embedded Options Complicate Valuation

**Option-free bond**: Future cash flows are **certain** — simply discount at appropriate spot rates.

**Bond with embedded options**: Future cash flows are **interest-rate dependent** — option exercise probability changes the timing/amount of cash flows → requires the binomial tree framework (Module 2) to value correctly.

> Market demands a **premium** (higher coupon/yield) for callable bonds relative to otherwise identical option-free bonds, compensating investors for **call risk**.

---

### What Is an Embedded Option?

**Definition**: A contingency provision in the bond's **indenture or offering circular** giving holders the right to act on interest rate movements.

**Key characteristic**: **Cannot be traded separately** from the bond — hence "embedded."

**Underlying bond** = the **straight bond** (option-free version with same issuer, maturity, coupon, etc.)

---

### Who Can Exercise the Option?

| Option Type | Exercised By | Benefits From |
|------------|--------------|----------------|
| **Call option** | **Issuer** | Falling interest rates (refinance cheaper) |
| **Put option** | **Bondholder** | Rising interest rates (reinvest at higher yield) |

---

## Call Options — Detailed Features

### Call Mechanics

- **Issuer's right** to redeem the bond before maturity
- Historically (pre-1990s): call price at premium above par, declining toward par as maturity approaches
- **Today**: most investment-grade corporates have **make-whole calls** — call price calculated at narrow spread to a benchmark (e.g., Treasuries) → economically "non-refundable" (investors fully compensated)

### Call Protection Period

- Window during which the bond **cannot** be called
- Example: 10-year bond with 3-year call protection → first call date = Year 3
- **High-yield bonds**: shorter call protection periods — investors more worried about **default risk** than call risk

### Call Style Variants

| Style | Exercise Timing |
|-------|------------------|
| **European** | Only on the **single** call date |
| **American** | **Continuously** callable from first call date onward |
| **Bermudan** | Callable on a **predetermined schedule** of specific dates |

### Sector-Specific Patterns

| Issuer Type | Typical Features |
|-------------|-------------------|
| **US GSEs** (Fannie Mae, Freddie Mac, FHLB) | Short maturity (5-10yr); short call protection (3mo-1yr); call price = 100% par; often Bermudan |
| **US municipal bonds ("munis")** | Almost always callable at par after Year 10; may allow advance refunding |
| **Global markets** | Callable bonds also found in Asia Pacific, Europe, Canada, Latin America — mostly USD/EUR denominated |

---

## Put Options and Extension Options

### Put Mechanics

- **Bondholder's right** to sell the bond back to the issuer (usually at par) before maturity
- Exercised when interest rates have **risen** (reinvest proceeds at higher yield)
- **No American-style putable bonds exist** — only European (and rarely Bermudan)

### Extension Options

**Extendible bond**: At maturity, holder may **extend** the bond's life (sometimes with a different coupon structure).

**Example**: Heathrow Funding Ltd. — 0.50% coupon, matures 17 May 2024, **extendible** to 7 May 2026 as a floater (12-month MRR + 4.00%)

> **Conceptually similar to a put option** — both give the holder control over continuation/termination of the investment.

---

## Complex Embedded Options

### Convertible Bonds

- **Conversion option**: bondholder's right to convert bonds into **issuer's common stock**
- Usually **also callable** by the issuer — call can be used to:
  - Take advantage of lower rates, OR
  - **Force conversion**

### Estate Put (Survivor's Option)

- Allows the **heir(s)** to put the bond at par upon the holder's **death**
- Value is contingent on holder's **life expectancy** — adds mortality risk dimension to valuation

### Sinking Fund Bonds (Sinkers)

**Structure**: Amortizing bond — issuer sets aside funds over time to retire the issue gradually, **reducing credit risk**.

**Example**: 30-year bond, level annual principal repayments starting Year 11 (5% of original principal per year)

**Three embedded provisions:**

| Provision | Mechanism | Benefits Issuer When |
|-----------|-----------|------------------------|
| **Standard call (above par, declining premium)** | Entire issue callable from Year 10 | Rates fall |
| **Acceleration ("triple up")** | Issuer can repurchase up to 3× mandatory sinking amount at **par** on scheduled dates | Rates fall (cheaper than calling at premium) |
| **Delivery option** | Issuer satisfies sinking payment by **buying bonds in the market** (if trading below par) instead of paying par | Rates **rise** (bonds trade below par) |

**Key insight — "Long straddle" analogy**:
> The combination of call option (benefits issuer when rates **fall**) + delivery option (benefits issuer when rates **rise**) resembles a **long straddle** from the issuer's perspective — benefits from **volatility in either direction**. This makes sinking fund bonds beneficial to the issuer regardless of which way rates move, and the **greater the volatility, the greater the benefit**.

> Valuing the combined effect of call + acceleration + delivery options is **significantly more complex** than simple callable/putable bonds.

---

### Example 1 — Knowledge Check Answers

**Q1 (Putable bond investors seek to take advantage of):**
→ **A. Higher interest rates** — putable bondholders exercise the put when rates rise, allowing reinvestment at the new, higher yield.

**Q2 (Conversion option in convertible bond — held by):**
→ **B. The bondholders** — conversion is an **investor option**, giving bondholders the right (not obligation) to convert into common stock.

---

### Quick Reference — Option Type Summary

| Option | Held By | Exercise Trigger | Style Options |
|--------|---------|-------------------|----------------|
| **Call** | Issuer | Rates fall / credit improves | European, American, Bermudan |
| **Put** | Bondholder | Rates rise | European, Bermudan (no American) |
| **Extension** | Bondholder | Similar to put logic | — |
| **Conversion** | Bondholder | Stock price appreciation | — |
| **Estate put** | Heir(s) | Bondholder's death | — |
| **Sinking fund provisions** | Issuer (multiple) | Rates fall (call/acceleration) OR rates rise (delivery) | — |

---

### Exam Tips

- **Call = issuer option** (benefits from falling rates); **Put = bondholder option** (benefits from rising rates) — never confuse these
- **No American-style putable bonds** — exam trap; calls can be American, puts cannot
- **Make-whole call**: modern feature designed so investors are never economically disadvantaged by a call — effectively eliminates refunding incentive
- **Call protection period ≠ no call risk after** — just delays the earliest call date
- **Sinking fund bonds = "long straddle" for issuer** — benefits from volatility in either direction (call + delivery option combination)
- **Convertible bonds**: conversion option (bondholder) + usually also callable (issuer) — two-sided optionality
- **Extension option** resembles a put — bondholder controls continuation
- This introduction sets up the next sections: valuing callable/putable bonds **without** volatility, then **with** volatility using the binomial tree framework from Module 2