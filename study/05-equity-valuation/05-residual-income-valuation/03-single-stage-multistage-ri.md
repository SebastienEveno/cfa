## Summary: Single-Stage and Multistage Residual Income Valuation (CFA Level II)

---

### Single-Stage (Constant-Growth) RI Model

$$\boxed{V_0 = B_0 + \frac{(ROE - r) \times B_0}{r - g}}$$

**Key relationships:**
- ROE > r → V₀ > B₀ (P/B > 1)
- ROE = r → V₀ = B₀ (P/B = 1)
- ROE < r → V₀ < B₀ (P/B < 1)

**Philips example (Example 6):**
- B₀ = €13.22, ROE = 12%, g = 6.75%, r = 8.5%
- V₀ = 13.22 + (0.12 − 0.085)(13.22)/(0.085 − 0.0675) = **€39.46**
- Market price = €35.40 → **undervalued**

**Implied growth rate (Example 7):**
Plug market price into model, solve for g:
- At P = €35.40 → implied g = **6.41%**

---

### Why Single-Stage RI Has Limitations

- Assumes **indefinitely persistent** excess ROE
- In reality, **ROE reverts to mean** over time due to competition
- High ROE → competitors enter → ROE declines
- Low ROE → firms exit → ROE rises
- More realistic: model ROE **fading** toward cost of equity

---

### Multistage RI Model — General Framework

$$\boxed{V_0 = B_0 + \sum_{t=1}^{T} \frac{RI_t}{(1+r)^t} + \frac{P_T - B_T}{(1+r)^T}}$$

Where $(P_T - B_T)$ = **continuing residual income terminal value** (premium over book value at horizon).

**Alternative (equivalent):**
$$V_0 = B_0 + \sum_{t=1}^{T} \frac{RI_t}{(1+r)^t} + TV_T$$

---

### Four Assumptions for Continuing Residual Income

| Assumption | Terminal Value | When to Use |
|-----------|---------------|------------|
| **1. Positive continuing RI (perpetuity)** | $TV = RI_T / r$ | ROE stays above r indefinitely |
| **2. Zero continuing RI** | $TV = 0$ | ROE converges to r; competitive equilibrium |
| **3. RI declines (persistence factor)** | $TV = \frac{RI_T}{1+r-\omega}$ | Gradual mean reversion |
| **4. ROE reverts to industry mean** | Explicit forecast until ROE = r | Industry data available |

---

### Key Contrast vs. DDM/DCF

| Feature | RI Model | DDM/DCF |
|---------|----------|---------|
| **Book value** | Large portion of value recognized **at t=0** | Not explicitly recognized |
| **Terminal value** | **Smaller** proportion of total value | **Dominates** (75%+ typical) |
| **Why?** | ROE fades → RI approaches zero | Terminal cash flows remain large |

---

### Zenlandia Chemical — Three Terminal Value Scenarios (Examples 8, 9, 10)

**Setup**: ROE = 25% (2022-2026) → 20% (2027-2039) → 12% after 2039, r = 12%

| Assumption | Terminal Value | Total Value | vs. Market (ZL$95.6) |
|-----------|--------------|------------|---------------------|
| TV = 0 (ROE → r in 2039) | ZL$0 | **ZL$86.41** | Overvalued |
| TV = RI₂₀₃₉/r (perpetuity) | ZL$198.9 (PV: ZL$20.6) | **ZL$107.03** | Undervalued |
| TV = persistence factor (ω = 0.60) | PV: ZL$5.33 | **ZL$89.26** | Slightly overvalued |

**Key insight**: Terminal value assumption **dramatically affects** the conclusion about over/undervaluation.

---

### Persistence Factor Model (Dechow, Hutton & Sloan)

$$\boxed{TV_T = \frac{RI_T(1+g)}{1+r-\omega}}$$

Where $\omega$ = persistence factor (0 to 1):
- $\omega = 1$: RI continues indefinitely (no fade)
- $\omega = 0$: RI ends immediately after forecast period
- **Empirical average**: $\omega = 0.62$ (implies ~38% annual decay rate)

**Higher persistence (lower decay) when:**
- Low dividend payout (reinvesting supports continued growth)
- High historical persistence in the industry

**Lower persistence (faster decay) when:**
- Extreme accounting ROE (more likely to revert)
- Extreme special items or accruals

---

### Two-Stage RI with P/B Terminal Value (Example 11 — URS Holdings)

**Setup**: B₀ = €15, ROE = 25% (NI = 25% of beginning BV), payout = 30%, r = 7.95%, terminal P/B = 1.8× at t=6

**Book value and RI schedule:**

| Year | Beg. BV | Net Income | Dividends | End BV | RI | PV(RI) |
|------|---------|-----------|----------|--------|----|----|
| 1 | 15.00 | 3.75 | 1.125 | 17.625 | 2.558 | 2.369 |
| 2 | 17.625 | 4.406 | 1.322 | 20.709 | 3.005 | 2.579 |
| ... | ... | ... | ... | ... | ... | ... |
| 6 | 33.595 | 8.399 | 2.520 | 39.475 | 5.728 | 3.620 |
| **Sum PV(RI)** | | | | | | **17.755** |

**Terminal value:**
$$P_T - B_T = (1.8 \times 39.475) - 39.475 = 0.8 \times 39.475 = 31.580$$
$$PV(TV) = 31.580/(1.0795)^6 = \mathbf{19.956}$$

**Total value:**
$$V_0 = 15.00 + 17.755 + 19.956 = \mathbf{€52.71}$$

✅ DDM gives same result: PV(dividends) + PV(terminal price) = €7.81 + €44.90 = **€52.71**

---

### RI Model Strengths and Weaknesses

| Strengths | Weaknesses |
|-----------|-----------|
| **Book value recognized immediately** — less sensitive to terminal value | Requires **clean surplus accounting** — OCI items may violate this |
| **Useful when dividends are zero or unpredictable** | Accounting manipulations distort RI |
| **Terminal value less critical** than in DDM/DCF | Requires detailed financial statement analysis |
| Based on **accounting data** (readily available) | ROE must be estimated carefully — mean reversion timing is subjective |
| Can value firms with **negative FCF** | Persistence factor is highly judgmental |
| Consistent with other models (same value as DDM with clean surplus) | |

---

### When to Use RI Model

✅ **Best for:**
- Non-dividend-paying companies (where DDM fails)
- Companies with **negative FCF** (where DCF is problematic)
- Companies where book value meaningfully reflects assets
- When accounting quality is high (clean surplus holds)

❌ **Less suitable for:**
- Companies with significant **OCI / dirty surplus** items
- Companies where book value poorly reflects asset values (e.g., intangible-heavy)
- Firms with significant **accounting distortions**

---

### Exam Tips

- **Single-stage RI**: $V_0 = B_0 + (ROE-r)B_0/(r-g)$ — same as justified P/B derivation
- **Implied growth**: plug market price into model, solve for g
- **Terminal value dominates less** in RI than in DDM/DCF — key exam distinction
- **Four terminal value approaches**: zero, perpetuity, persistence factor, mean reversion — know all four
- **Persistence factor**: higher ω → slower fade → higher valuation
- **P/B terminal value**: $TV = (P/B_{terminal} - 1) \times B_T$ — clean formula
- **RI = DDM** with consistent assumptions — always gives same value
- **Clean surplus assumption**: critical — OCI items bypassing income statement may require adjustment
- **Zenlandia**: same company, three different conclusions depending on terminal value assumption — highlights sensitivity