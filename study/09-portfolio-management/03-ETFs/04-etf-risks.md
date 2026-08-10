---
layout: page
title: "ETF Risks"
permalink: /study/09-portfolio-management/03-ETFs/04-etf-risks/
prev: /cfa/study/09-portfolio-management/03-ETFs/03-understanding-etfs/
next: /cfa/study/09-portfolio-management/03-ETFs/05-etfs-in-portfolio-management/
---
## Summary: ETF Risks (CFA Level II — Portfolio Management)

---

### Overview — Unique ETF Risk Categories

1. **Counterparty risk** (ETNs, swap-based funds, currency deposits)
2. **Fund closure risk**
3. **Investor-related risk** (misunderstanding complex exposures — especially leveraged/inverse ETFs)

---

## Counterparty Risk

### Exchange-Traded Notes (ETNs) — Highest Risk Category

**Key structural difference**: ETNs are **NOT** true funds — they hold **no underlying securities**.

**What they actually are**: **Unsecured debt obligations** of the issuing institution — a promise to pay returns based on an index minus fees.

**Regulatory classification (US)**: Registered under the **Securities Act of 1933** as general obligation debt securities of a bank (not managed investment products).

$$\boxed{\text{ETN counterparty risk} = 100\% \text{ in event of instantaneous issuer default}}$$

**Real-world precedent**: **2008 Lehman Brothers ETNs** — three Lehman-backed ETNs became **worthless** upon Lehman's bankruptcy. This is the only instance since ETN inception.

**Mitigating factor**: Daily/frequent NAV-based redemption ability means only a **rapid, catastrophic failure** would catch investors by surprise (as Lehman's collapse was).

---

### Currency Deposit-Based Funds

Some US funds gaining non-USD currency exposure use **offshore bank deposits** → bear **default risk on the deposit-holding bank**.

**Monitoring tool**: Both ETNs and deposit-based funds' default risk can be tracked via the issuing bank's **Credit Default Swap (CDS)** pricing.

**CDS interpretation**: 
- CDS spread = annual cost (in bps) to insure debt
- Example: 30 bps CDS spread → ~$3,000/year to insure $1M in bonds
- **Rule of thumb**: CDS rate **above 5%** signals **significant default risk concern**

---

### Settlement Risk (OTC Derivatives/Swaps)

**Affected fund types**: European swap-based ("synthetic") ETFs, leveraged/geared funds, some currency funds, some active strategies.

**Nature of risk**: Mark-to-market **unrealized gains** are exposed to counterparty default risk.

**Mitigation**:
- **Frequent settlement** (daily/weekly) — limits exposure window between settlements
- **Collateral** held in low-risk instruments (e.g., US T-bills) at custodian bank

**Transparency**: ETF swap holdings disclosed **daily** by provider — though full counterparty/term details may not be fully disclosed.

> **Note**: Swap risk is not unique to ETFs — many mutual funds also use derivatives; ETFs are actually MORE transparent due to daily disclosure requirements.

---

### Security Lending — A "Negative" Risk (Actually Beneficial)

**Mechanism**: ETF issuers lend underlying securities to short sellers → generate additional income.

**Risk mitigation**:
- Loans **overcollateralized**: 102% (domestic) or 105% (international)
- Cash collateral reinvested in **extremely short-term, low-risk fixed-income** instruments

**Track record**: **Zero instances** of shareholder loss from security lending since ETF inception (early 1990s).

**Benefit**: Well-run programs can **entirely offset** fund operating expenses — profits typically credited back to shareholders (though disclosure varies by issuer).

---

## Fund Closure Risk

**Mechanism**: Issuer sells underlying positions, returns cash to investors → **triggers capital gains events** for holders + forces investors to find replacement investments.

### Four Primary Closure Triggers

| Trigger | Example |
|---------|---------|
| **Regulation** | Israeli regulator banned ETN structure (2018) — forced 700+ products to close/convert to ETFs |
| **Competition** | Low-AUM funds fail to attract assets → issuer shuts down |
| **Corporate actions** | M&A between ETF providers → new owners close underperforming funds |
| **Creation/redemption halts** | Issuer stops accepting new creations (e.g., UBS's MORL ETN, Sept 2018) |

---

### Creation/Redemption Halts — A Special Case

**UBS MORL Example (2018)**: ETN issuer halted sales/creations because it didn't want to add more balance sheet debt tied to the underlying index.

**Consequence**: Arbitrage mechanism **breaks down** → ETN traded at a **>5% premium** to fair value.

> **More common in ETNs than ETFs** because ETNs represent direct issuer debt obligations — issuer has direct incentive/ability to limit new issuance.

---

### "Soft Closures" — Change in Investment Strategy

**Mechanism**: Rather than closing a low-asset fund, issuers **repurpose** it by changing the tracked index.

**Range of impact**: 
- Minor: small portfolio adjustments
- Major: complete overhaul (different countries, industries, or even **asset classes**)

---

## Investor-Related Risk — Understanding Complex Exposures

**Core issue**: Investors must understand the **underlying exposure mechanics**, especially for complex products like **leveraged and inverse ETFs**.

---

### Leveraged/Inverse ETF Mechanics — Daily Reset Requirement

**Key feature**: These funds target a **multiple of DAILY index return** — NOT a multiple of cumulative/holding-period return.

**Daily rebalancing requirement**: Fund must adjust notional exposure **every day** to maintain the target multiple for the NEXT day.

---

### Worked Example — 3× Leveraged Fund (Exhibit 14)

**Setup**: NAV = £100; Notional swap exposure = £300 (3× leverage)

**Day 2**: FTSE 100 rises 5%

$$\text{New NAV} = 100 \times (1 + 3 \times 5\%) = \mathbf{£115}$$

**Required Day 3 exposure** (for 3× again): $115 \times 3 = £345$

**Current exposure after gains**: £300 × 1.05 = £315

**Rebalancing needed**: £345 − £315 = **£30 increase** in notional swap exposure

---

### The Compounding Problem — Levered/Inverse Funds Over Multiple Days (Exhibit 15)

**Setup**: −2× S&P 500 ETF, starting NAV = $100

| Day | Index Level | Daily Index Return | −2× ETF NAV | Daily ETF Return |
|-----|-------------|----------------------|--------------|---------------------|
| 1 | 100 | — | 100 | — |
| 2 | 110 | +10% | **80** | **−20%** |
| 3 | 99 | −10% | **96** | **+20%** |

**Cumulative comparison:**
$$\text{Index 3-day return} = \frac{99-100}{100} = \mathbf{-1\%}$$

**Naive expectation**: $-2 \times (-1\%) = +2\%$

**Actual fund return:**
$$\frac{96-100}{100} = \mathbf{-4\%}$$

> **The naive expectation is WRONG by 6 percentage points** (+2% expected vs. −4% actual) — this is the **compounding/volatility decay effect** inherent in daily-reset leveraged products.

---

### Why This Happens — The Core Mechanism

- Each day's return multiplier applies to that day's **starting** NAV, not the original investment
- Volatility (up-then-down or down-then-up movements) creates **compounding drag**
- The **more volatile** the underlying index, the **greater the divergence** from naive expectations over multi-day periods

$$\boxed{\text{Leveraged/inverse ETF returns} \neq \text{Multiple} \times \text{Index holding period return, EXCEPT for single-day holds}}$$

---

### Practical Implication

**These funds are NOT intended for buy-and-hold beyond ~1 month.**

**If longer-term holding is desired**: Investors must **periodically rebalance** to maintain the desired net exposure — the fund's own daily rebalancing does NOT translate into a stable multi-period exposure for the investor.

---

### Exam Tips

- **ETNs have the HIGHEST counterparty risk** among exchange-traded products — they hold NO underlying assets, just issuer debt obligations
- **ETN default = 100% loss risk** (theoretically); Lehman 2008 is the only historical precedent
- **CDS spreads monitor issuer default risk**; >5% is a red flag
- **Settlement risk** (swap-based funds): mitigated by frequent settlement + collateralization, but NOT eliminated
- **Security lending has ZERO historical shareholder losses** — generally viewed as a benign, income-generating activity for ETFs
- **Creation/redemption halts** are MORE common in ETNs than ETFs — breaks the arbitrage mechanism, causing large premiums (MORL example: >5% premium)
- **Leveraged/inverse ETFs target DAILY returns**, not cumulative period returns — this is THE critical exam concept
- **Compounding effect**: over multi-day holding periods, actual leveraged ETF returns diverge from "naive" multiple × index return — especially in volatile, choppy markets
- **Leveraged/inverse ETFs are NOT buy-and-hold products** — recommended holding period is generally under 1 month
- **Fund closures trigger capital gains events** for investors — an underappreciated but real risk of ETF ownership
- Know the **four closure triggers**: regulation, competition, corporate actions (M&A), and creation/redemption halts