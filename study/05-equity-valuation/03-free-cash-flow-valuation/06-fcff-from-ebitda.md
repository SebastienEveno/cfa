## Summary: Finding FCFF and FCFE from EBIT or EBITDA (CFA Level II)

---

### Deriving the EBIT-Based FCFF Formula

Starting from the NI-based formula (assuming depreciation is the only NCC):
$$FCFF = NI + Dep + Int(1-t) - FCInv - WCInv$$

Since $NI = EBIT(1-t) - Int(1-t)$, substituting and simplifying:

$$\boxed{FCFF = EBIT(1-t) + Dep - FCInv - WCInv}$$

**Key insight**: The $Int(1-t)$ terms **cancel out** — starting from EBIT (pre-interest), there's no need to add back interest separately.

---

### Deriving the EBITDA-Based FCFF Formula

Since $NI = EBITDA(1-t) - Dep(1-t) - Int(1-t)$, substituting:

$$\boxed{FCFF = EBITDA(1-t) + Dep(t) - FCInv - WCInv}$$

**Key difference vs. EBIT formula**: Depreciation is added back as $Dep \times t$ (the **tax savings from depreciation**), not the full depreciation amount — because depreciation hasn't been deducted yet at the EBITDA level.

---

### Why the Different Treatment of Depreciation?

| Starting Point | Depreciation Treatment | Why |
|----------------|------------------------|-----|
| **EBIT** | Add back **full** depreciation ($Dep$) | EBIT is *after* depreciation → must fully reverse it |
| **EBITDA** | Add back **only the tax shield** ($Dep \times t$) | EBITDA is *before* depreciation → depreciation hasn't reduced this figure; only its tax effect matters |

> **General rule**: Whether/how to adjust for a noncash charge depends on **where in the income statement** it was already deducted, and whether it's **tax-deductible**.

---

### FCFE from EBIT/EBITDA

Same final adjustment regardless of starting point:
$$\boxed{FCFE = FCFF - Int(1-t) + \text{Net borrowing}}$$

---

### Worked Example — Pitts Corporation (Example 6)

**Given**: EBIT = $500M, EBITDA = $800M, tax rate = 40%, Dep = $300M, FCInv = $400M, WCInv = $45M, Net borrowing = $75M

#### From EBIT:

| Component | Amount ($M) |
|-----------|------------|
| $EBIT(1-t) = 500 \times 0.60$ | $300 |
| + Depreciation (full) | $300 |
| − FCInv | ($400) |
| − WCInv | ($45) |
| **= FCFF** | **$155** |

#### From EBITDA:

| Component | Amount ($M) |
|-----------|------------|
| $EBITDA(1-t) = 800 \times 0.60$ | $480 |
| + $Dep \times t = 300 \times 0.40$ | $120 |
| − FCInv | ($400) |
| − WCInv | ($45) |
| **= FCFF** | **$155** |

✅ Both give the **same FCFF = $155M** (matches earlier NI-based and CFO-based calculations).

#### FCFE (either starting point):
$$FCFE = 155 - 60 + 75 = \mathbf{\$170M}$$

---

### Quick Reference — Complete Formula Set

| Starting Point | FCFF Formula |
|----------------|--------------|
| Net Income | $NI + NCC + Int(1-t) - FCInv - WCInv$ |
| CFO | $CFO + Int(1-t) - FCInv$ |
| **EBIT** | $EBIT(1-t) + Dep - FCInv - WCInv$ |
| **EBITDA** | $EBITDA(1-t) + Dep(t) - FCInv - WCInv$ |

All four formulas, applied to the same company, give the **identical FCFF**.

---

### Exam Tips

- **EBIT formula**: add back **full depreciation** (Int terms cancel out)
- **EBITDA formula**: add back **only $Dep \times t$** (the tax shield) — common error is adding full depreciation here
- **All four starting points (NI, CFO, EBIT, EBITDA) must give the same FCFF** — useful for verification on exam problems
- **FCFE adjustment is always the same**: $-Int(1-t) + \text{Net borrowing}$, regardless of starting point
- When a question gives you EBIT or EBITDA directly (rather than NI), you don't need to separately handle interest — it's already excluded
- Memorize the **derivation logic**, not just the formulas — exam may test understanding of *why* depreciation is treated differently between EBIT and EBITDA approaches