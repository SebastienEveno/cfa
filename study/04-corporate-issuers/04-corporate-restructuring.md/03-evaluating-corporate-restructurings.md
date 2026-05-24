---
layout: page
title: Evaluating Corporate Restructurings
permalink: /study/04-corporate-issuers/04-corporate-restructuring/03-evaluating-corporate-restructurings/
prev: /cfa/study/04-corporate-issuers/04-corporate-restructuring/02-corporate-evolution/
next: /cfa/study/04-corporate-issuers/04-corporate-restructuring/04-modeling-and-valuation/
---

---

### The Three-Step Evaluation Process

```
Step 1: Initial Evaluation
      ↓
Step 2: Preliminary Valuation
      ↓
Step 3: Modeling & Valuation → Update Investment Thesis
```

---

### Step 1: Initial Evaluation — Four Questions

| Question | Key Considerations |
|----------|-------------------|
| **What is happening?** | Read press release, filings, conference call transcripts, third-party research |
| **Why is it happening?** | Interpret management's stated rationale with **professional skepticism** — management always frames restructurings positively |
| **Is it material?** | Assessed on two dimensions: **size** and **fit** |
| **When is it happening?** | Timeline from announcement to close; regulatory/shareholder approval delays |

#### Materiality — Size

| Restructuring Type | Size Metric |
|-------------------|------------|
| Transaction (acquisition) | Transaction value / acquirer's EV (>10% = "large") |
| Non-transaction (cost restructuring) | Cost reduction as % of revenue or OpEx |

> **Rule of thumb**: Transaction value > 10% of acquirer's EV = material. In practice, >95% of acquisitions are under $1B and >80% of targets are private → **most acquisitions by large-cap companies are immaterial**.

#### Materiality — Fit
- Even a small transaction can be material if it signals a **strategy change**
- Example: Farfetch acquiring New Guards Group (only ~8% of EV) → shares fell 45% because it signaled a shift from asset-lite marketplace to inventory-holding retailer — **strategy conflict**

#### Announcement Day Returns — Use with Caution
- Positive price reaction → presumed value creation; negative → value destruction
- **But**: Research shows **no correlation** between announcement-day returns and long-term shareholder value
- More than half of companies with initial negative reactions generated positive excess returns over time

#### Timing Considerations
- Small cost restructuring: months to implement
- Large acquisition or spin-off: **12+ months** from announcement to close (plus pre-announcement planning)
- Key uncertainty: **regulatory, creditor, and shareholder approvals**
- Market **immediately discounts** expected impact (including probability of closing) on announcement day

---

### Step 2: Preliminary Valuation

Three methods used — often in combination:

---

#### Method 1: Comparable Company Analysis

**How it works:**
1. Identify a set of similar listed companies
2. Calculate valuation multiples (mean, median, range)
3. Apply multiples to target to estimate value

**Common multiples:**

| Multiple | Notes |
|----------|-------|
| EV/EBITDA | Most common; capital structure neutral |
| EV/Sales | Useful for early-stage or low-margin companies |
| P/E | Sensitive to capital structure differences |
| EV/FCF | Less common |
| Sector-specific (EV/subscribers, EV/reserves, EV/FFO) | For tech, oil & gas, real estate |

**Best used for:** Spin-offs (no control premium involved)
**Not ideal for:** Acquisitions/sales (trading multiples don't include takeover premium)

| Advantages | Disadvantages |
|-----------|--------------|
| Data readily available | Hard to find true comparables for unique companies |
| Market-derived values | Sensitive to market mispricing |
| No need for many assumptions | Yields trading value, not takeover value (must add premium separately) |

---

#### Method 2: Comparable Transaction Analysis

**How it works:** Same as comparable company analysis, but uses **historical acquisition multiples** instead of current trading multiples.

**Key difference**: Takeover premium is **already embedded** in transaction multiples — no need to add separately.

**Worked example (Medical Services, Inc.):**

| Multiple | Mean (comparable transactions) | Estimated value |
|---------|-------------------------------|----------------|
| P/E (20%) | 18.3× | $47.95 → weighted $9.59 |
| P/CF (40%) | 10.2× | $44.17 → weighted $17.67 |
| P/BV (20%) | 3.7× | $46.81 → weighted $9.36 |
| P/S (20%) | 2.4× | $55.15 → weighted $11.03 |
| **Weighted avg** | | **$47.65** |

Actual deal price: $55.00 → analyst concludes acquirer **overpaid by ~13%**

| Advantages | Disadvantages |
|-----------|--------------|
| Based on actual transaction prices | Few comparable transactions may exist (illiquid market) |
| Takeover premium embedded | Historical multiples reflect past macro conditions (rates, cycle, tax) |
| | Past acquirers may have over/underpaid |

---

#### Method 3: Premium Paid Analysis

**How it works:** Estimate fair takeover price by applying historical control premiums to the target's unaffected share price.

$$\boxed{PRM = \frac{DP - SP}{SP}}$$

Where:
- $PRM$ = takeover premium (%)
- $DP$ = deal price per share
- $SP$ = **unaffected** share price (typically 1 week prior to announcement)

> **Critical**: Use the **unaffected price** — exclude any pre-announcement run-up from rumors or speculation. Use 1-week prior price or volume-weighted average.

**Historical benchmarks:**
- Median annual premium (1990–2018): **just over 30%**
- Typical range: **20%–40%**
- Varies by target growth outlook and risk profile

---

### Valuation Method Comparison

| Method | Includes Control Premium? | Best For | Key Limitation |
|--------|--------------------------|---------|---------------|
| Comparable company | ❌ No | Spin-offs | No premium; market mispricing risk |
| Comparable transaction | ✅ Yes (embedded) | Acquisitions/sales | Few comparables; historical conditions differ |
| Premium paid | ✅ Yes (explicit) | All transaction types | Requires clean unaffected price |
| DCF (Step 3) | N/A | All (intrinsic value) | Many assumptions required |

---

### Spin-Off Valuation Case (Wang / Media Segment)

**Current consolidated EV/EBITDA** = 96,380 / 9,638 = **10×**

**Peer multiples:**
- Connectivity peers: **13×** → Connectivity value = 7,638 × 13 = **€99,294M**
- Media peers: **6×** → Media value = 2,000 × 6 = **€12,000M**
- **Sum of parts = €111,294M vs. current EV of €96,380M**

→ **Spin-off has potential to increase stakeholder value** (conglomerate discount present)

**Key adjustments to consider:**
- Corporate HQ cost allocation: Media's share = (8,000/28,100) × €250M = **€71M** → adjusted EBITDA = **€1,929M**
- Capital structure of spun-off entity (but EV multiples are capital structure neutral — use enterprise value, not equity value)

---

### Exam Tips

- **Initial evaluation**: 4 questions — what, why, material, when — apply skepticism to management framing
- **Materiality**: >10% of acquirer EV = large; also assess strategic fit, not just size
- **Announcement returns**: not reliable predictors of long-term value — don't overweight them
- **Comparable company**: best for spin-offs; **comparable transaction**: best for acquisitions (premium embedded)
- **Premium paid**: always use **unaffected** price (1 week prior); historical median ~30%
- **EV multiples** preferred over equity multiples: capital structure neutral
- **Sum of parts > current EV** = conglomerate discount = spin-off opportunity