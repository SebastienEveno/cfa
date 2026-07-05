---
layout: page
title: Credit Default Swaps — Basic Definitions and Concepts
permalink: /study/06-fixed-income/05-credit-default-swaps/02-basic-definitions/
---
## Summary: Credit Default Swaps — Basic Definitions and Concepts (CFA Level II — Fixed Income)

---

### What Is a Credit Derivative?

**Credit derivative**: A derivative where the **underlying is a measure of a borrower's credit quality**.

**Four types of credit derivatives:**
1. Total return swaps
2. Credit spread options
3. Credit-linked notes
4. **Credit default swaps (CDS)** ← most liquid; primary exam focus

---

### Credit Default Swap — Core Definition

> A derivative contract between a **credit protection buyer** and a **credit protection seller** in which the buyer makes periodic cash payments and receives compensation if a **credit event** occurs on a specified underlying.

**Payment structure:**

```
Protection Buyer ──── Periodic premium payments ────► Protection Seller
(Short risk)                                           (Long risk)
Protection Buyer ◄─── Compensation if credit event ── Protection Seller
```

**Key mechanics:**
- Periodic payments fixed at **contract initiation**
- Payments by buyer **terminate** if a credit event occurs
- Seller pays compensation = **par (notional) − recovery value**

---

### Credit Events Covered

| Credit Event | Description |
|-------------|-------------|
| **Bankruptcy** | Formal insolvency filing |
| **Failure to pay** | Missed scheduled payment |
| **Restructuring** | Alteration of debt terms (maturity, coupon, principal) |
| **Moratorium / Repudiation** | Government declares payment suspension or challenges debt validity (sovereign/municipal) |

> Industry bodies (ISDA — International Swaps and Derivatives Association) provide detailed Credit Derivatives Definitions, but disputes about coverage do occasionally arise.

---

### CDS vs. Put Option — Analogy

| Feature | Put Option | CDS |
|---------|-----------|-----|
| **Triggered by** | Underlying price falling below strike | Credit event on reference entity |
| **Payoff** | Exercise price − market price | Par − recovery value |
| **Value before trigger** | Increases as underlying deteriorates | Increases as perceived default risk rises |
| **Settlement if no trigger** | Option expires worthless | Periodic premiums paid throughout; unwind to capture MTM gains |

---

### Why Use CDS?

| Purpose | Explanation |
|---------|------------|
| **Hedge credit risk** | Protection buyer offsets default exposure on bond holdings |
| **Leverage portfolios** | Gain credit exposure without funding the full bond purchase |
| **Access specific maturities** | Obtain credit exposure at maturities not available in the cash bond market |
| **Isolate credit risk** | Express credit views with minimal interest rate risk (unlike buying/selling bonds) |
| **Improve liquidity** | CDS market remains more liquid than corporate bond market during stress events |
| **Price discovery** | CDS spreads provide real-time credit risk signals; more transparent than bond spreads |

---

### Important Limitations of CDS

| Limitation | Detail |
|-----------|--------|
| **Credit risk not eliminated** | Protection buyer takes on **counterparty risk** with the protection seller |
| **Definition mismatch** | CDS contract definition of "default" may not perfectly align with traditional default |
| **Counterparty default** | Protection seller can itself default (as seen with large financial institutions in 2007–2009 crisis) |

> Most protection sellers are **high-quality borrowers** (by necessity — low-quality entities cannot credibly sell protection).

---

### Three Types of CDS

#### 1. Single-Name CDS

- Written on the debt of **one specific borrower** (reference entity)
- Specifies a **reference obligation** (typically senior unsecured debt of the borrower)
- **Coverage extends** to all obligations of equal or higher seniority to the reference obligation
- Payoff determined by the **cheapest-to-deliver obligation**:

$$\boxed{\text{Cheapest-to-deliver} = \text{Debt of equal or higher seniority that can be purchased and delivered at lowest cost}}$$

**Example 1 — Cheapest-to-Deliver Answer:**

Given a bankruptcy with reference = 5-year senior unsecured bond:
- Subordinated unsecured bond at 20% of par → **NOT eligible** (lower seniority)
- 5-year senior unsecured at 50% of par → eligible
- 2-year senior unsecured at **45% of par** → eligible AND cheaper

→ **Answer: C** — The 2-year senior unsecured bond at 45% of par is the cheapest-to-deliver (costs less to purchase and deliver than the 5-year at 50%, while having equal seniority).

---

#### 2. Index CDS

- Written on a **portfolio of single-name CDS** — analogous to equity index funds/ETFs
- Allows taking positions on credit risk of **multiple companies simultaneously**
- **Two major index families:**
  - **CDX**: North American indexes
  - **iTraxx**: European, Asian, and Australian indexes

**Key concept — Credit correlation:**
$$\text{↑ Default correlation} \implies \text{↑ Cost of index CDS protection}$$
$$\text{↓ Default correlation (diverse issuers)} \implies \text{↓ Cost of index CDS protection}$$

> Higher correlation means defaults tend to cluster → worse-case scenarios more likely → more expensive protection.

---

#### 3. Tranche CDS

- Written on a **combination of borrowers** but covers only **losses up to pre-specified levels**
- Structured similarly to ABS tranches (each covers a specific loss layer)
- Beyond exam scope for this reading

---

### CDS Underlying — Scope

| Underlying | Description |
|-----------|-------------|
| **Corporate debt** | Primary focus — most CDS written here |
| **Sovereign debt** | CDS on government bonds |
| **Sub-sovereign debt** | State/local government bonds |
| **Portfolios** | Loans, mortgages, debt securities (index/tranche CDS) |

---

### Exam Tips

- **CDS = insurance-like derivative**: buyer pays premium, receives compensation on credit event
- **Protection buyer = short credit risk** (benefits if credit quality deteriorates); **Protection seller = long credit risk** (benefits if no default)
- **Credit events**: bankruptcy, failure to pay, restructuring — know all three; also moratorium/repudiation for sovereigns
- **Cheapest-to-deliver**: the lowest-cost bond of equal or higher seniority to the reference obligation — this determines the CDS payout
- **Subordinated debt cannot be cheapest-to-deliver** (must be equal or higher seniority to reference obligation)
- **Index CDS**: portfolio of single-name CDS; CDX (North America), iTraxx (Europe/Asia/Australia)
- **Credit correlation is key for index CDS**: higher correlation → more expensive protection
- **CDS does NOT eliminate credit risk**: counterparty risk with the protection seller remains
- **ISDA Credit Derivatives Definitions**: the industry standard governing what constitutes a credit event