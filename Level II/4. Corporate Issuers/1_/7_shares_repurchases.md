## Summary: Share Repurchases (CFA Level II)

---

### What Is a Share Repurchase?

A buyback is when a company purchases its own shares using **corporate cash** — making it a true alternative to cash dividends (unlike stock splits/dividends which use no cash).

Repurchased shares become either:
- **Treasury stock** — can be reissued
- **Canceled shares** — retired permanently

Either way, they are **excluded** from dividends, voting rights, and EPS calculations.

---

### 4 Repurchase Methods

| Method | Speed | Flexibility | Cost | Key Feature |
|--------|-------|------------|------|-------------|
| **Open market** | Slow | ✅ Maximum | Low | Most common globally; no legal obligation to complete |
| **Fixed price tender** | Fast | ❌ Low | Higher (premium) | Company offers fixed price above market; pro-rata if oversubscribed |
| **Dutch auction** | Fast | ❌ Low | Moderate | Company sets price *range*; market discovers minimum clearing price |
| **Direct negotiation** | Variable | ❌ Low | Variable | Negotiated with major shareholder; can be at premium *or* discount |

> **Exam tip**: Outside the US and Canada, almost **all repurchases are open market**. Dutch auctions and fixed price tenders are faster but less flexible. "Greenmail" = buying back a hostile shareholder's stake at a premium — generally **harmful to remaining shareholders**.

---

### Financial Statement Effects

**Balance sheet (always):**
- ↓ Assets (cash used)
- ↓ Shareholders' equity
- → **Leverage ratios increase** (debt-to-equity rises)
- Effect is even larger if repurchase is **debt-financed**

---

### EPS Effects — The Key Mechanics

#### Case 1: Repurchase Funded with Surplus Cash

- Net income **unchanged** (assuming near-zero yield on cash foregone)
- Fewer shares outstanding → **EPS increases**

**Rule**: EPS rises when the cash used earns **less than its cost of capital** (i.e., idle cash)

#### Case 2: Repurchase Funded with Debt

Net income **decreases** (interest expense added). The EPS effect depends on the comparison between:

$$\text{Earnings yield} = \frac{EPS}{P} \quad \text{vs.} \quad \text{After-tax cost of debt}$$

| Relationship | EPS Effect |
|-------------|-----------|
| Earnings yield **>** after-tax cost of debt | EPS **increases** |
| Earnings yield **=** after-tax cost of debt | EPS **unchanged** |
| Earnings yield **<** after-tax cost of debt | EPS **decreases** |

> **Critical exam warning**: An EPS increase from a buyback does **not** necessarily mean shareholder wealth increased. The same cash could have been paid as a dividend — the EPS gain may just offset a lost dividend yield. Don't confuse EPS accretion with value creation.

---

### Book Value per Share (BVPS) Effects

The direction of the BVPS change depends on whether the repurchase price is **above or below** current BVPS:

| Market Price vs. BVPS | Effect on BVPS after repurchase |
|----------------------|-------------------------------|
| Market price **>** BVPS | BVPS **decreases** |
| Market price **<** BVPS | BVPS **increases** |
| Market price **=** BVPS | BVPS **unchanged** |

**Intuition**: If you buy shares at $20 but book value is only $10/share, you're paying more than book — diluting the remaining book value per share. Conversely, buying below book value concentrates book value across fewer shares.

**Worked example:**
- Company A: BVPS = $10, market = $20 → repurchase at premium to book → BVPS falls from $10 to $9.74
- Company B: BVPS = $30, market = $20 → repurchase below book → BVPS rises from $30 to $30.26

---

### Repurchases vs. Cash Dividends — Key Contrasts

| Feature | Cash Dividend | Share Repurchase |
|---------|--------------|-----------------|
| Commitment | **Binding** once declared | **Not binding** (open market programs can be abandoned) |
| Cash distribution | Pro-rata to **all** shareholders | Only to **selling** shareholders |
| EPS effect | None directly | Reduces share count → potential EPS ↑ |
| Leverage effect | ↑ (reduces equity) | ↑ (reduces equity, more so if debt-financed) |
| Flexibility | Low | High |
| Signal | Strong commitment | More ambiguous |
| Tax (in some jurisdictions) | Taxed as income | Taxed as capital gain (potentially favorable) |

---

### Master Formula Summary

$$\boxed{\text{EPS after repurchase} = \frac{\text{Net income} - \text{After-tax interest cost}}{\text{Shares outstanding after repurchase}}}$$

$$\boxed{\text{BVPS after repurchase} = \frac{\text{Book equity} - \text{Repurchase cost}}{\text{Shares outstanding after repurchase}}}$$