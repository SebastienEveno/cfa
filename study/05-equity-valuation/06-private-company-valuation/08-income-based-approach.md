## Summary: Private Company Valuation — Income-Based Approach (CFA Level II)

---

### Five-Step Income Approach Process

```
Step 1: Estimate WACC (using comparables + expanded CAPM or build-up)
Step 2: Estimate base-year FCFF (normalize earnings first)
Step 3: Forecast FCFF + terminal value → solve for EV
Step 4: Subtract debt → equity value
Step 5: Apply control premium / DLOC / DLOM as appropriate
```

---

### FCFF Calculation for Private Companies

$$\boxed{FCFF = EBIT(1-t) + D\&A(t) - \Delta LT\ Assets - \Delta Working\ Capital}$$

**Note**: This is equivalent to $NOPAT + D\&A - CapEx - \Delta WC$

---

### FLI Full Valuation Walkthrough (Example 12)

#### Step 1 — WACC Estimation

| Method | Required Return on Equity |
|--------|--------------------------|
| CAPM | 9.3% |
| Expanded CAPM | 13.3% |
| Build-up | 12.8% |
| **Selected** (average) | **13.0%** |

Khan averages differing capital structure assumptions → **WACC = 12.55%**

#### Step 2 — Base-Year FCFF (from normalized EBIT)

| Item | SGD |
|------|-----|
| Normalized EBIT | 15,400,000 |
| × (1 − 17% tax) | 12,782,000 |
| + D&A × tax rate (900K × 17%) | 153,000 |
| − CapEx | (1,200,000) |
| − ΔWorking capital | (500,000) |
| **= Base FCFF** | **11,982,000** |

#### Step 3 — EV from Scenarios

| Scenario | FCFF Growth | Terminal Growth | EV | Equity Value |
|---------|------------|----------------|-----|-------------|
| Downside | 2% | 3% | SGD 124.0M | SGD 121.5M |
| Base | 5% | 3% | SGD 140.2M | SGD 137.7M |
| Optimistic | 8% | 3% | SGD 158.2M | SGD 155.7M |

**Debt deducted**: SGD 2.5M in each scenario (book value acceptable given small, stable debt)

Terminal value formula:
$$TV = \frac{FCFF_5 \times (1+g)}{WACC - g}$$

#### Step 4 — Apply DLOM (Non-Controlling Minority Perspective)

- **DLOM = 18%** (option-based approach)
- **DLOC = 0%** (no rationale for control premium deduction here)

| Scenario | Equity Value | After 18% DLOM |
|---------|-------------|----------------|
| Downside | SGD 121.5M | **SGD 99.7M** |
| Base | SGD 137.7M | **SGD 112.9M** |
| Optimistic | SGD 155.7M | **SGD 127.6M** |

---

### Key Practical Points from FLI Case

**WACC selection**: Analyst averages multiple model outputs rather than relying on a single estimate — reflects judgment in the process.

**Scenario analysis**: Three growth scenarios (downside/base/optimistic) → range of values rather than single point estimate.

**Debt valuation**: For small, stable private company debt → **book value acceptable** as proxy for market value.

**Discount application**: DLOM applies here (private, illiquid shares); DLOC does NOT apply (Xin holds controlling interest — valuation already on controlling basis).

---

### Knowledge Check Answers

**Q1 (Selling partner's above-market compensation — how to normalize FCFF):**
→ **A. EBIT normalized lower** — The selling partner (COO) received **above-market** compensation → company **overstated expenses** → to normalize, deduct market-rate salary and add back excess... wait:

Actually: if compensation is **above-market** → EBIT is **understated** (too high costs) → normalize by reducing compensation to market rate → EBIT **increases**... 

Re-reading: "above-market compensation" reduces reported EBIT → removing it → EBIT goes **up** → but answer A says EBIT goes lower.

**Correct**: Above-market compensation = excess expense → remove excess → EBIT goes **higher** than reported → **Answer B** — normalize such that EBIT is **higher** than reported financial statements.

→ **B. Normalize higher** — Remove above-market compensation expense → increases EBIT to normalized level.

**Q2 (Build-up method addresses lack of comparable beta):**
→ **A. The build-up method uses a standard equity risk premium without adjusting by beta** — It applies ERP directly with implicit β = 1, plus industry premium instead, so no public company beta is needed.

**Q3 (CCM advantage over EEM):**
→ **C. CCM uses only one discount rate (WACC) while EEM requires multiple** — EEM requires separate discount rates for working capital, fixed assets, and intangibles (three separate rates), which are difficult to estimate objectively. CCM needs only WACC.

---

### Exam Tips

- **FCFF for private companies**: $EBIT(1-t) + D\&A(t) - CapEx - \Delta WC$ — normalize EBIT first
- **Always normalize before calculating FCFF** — earnings adjustments come before discount rate
- **Three scenarios**: always consider downside/base/optimistic range for private companies
- **DLOM applies** to non-controlling or minority interests; **DLOC** depends on whether DCF used controlling-interest cash flows
- **Build-up method**: no beta needed → appropriate when no comparable public companies available
- **CCM advantage**: only one discount rate vs. EEM's three → simpler, less subjective
- **EEM advantage**: explicitly values intangible assets → useful for IP-heavy companies
- **Debt book value**: acceptable proxy for market value when debt is small and operations stable