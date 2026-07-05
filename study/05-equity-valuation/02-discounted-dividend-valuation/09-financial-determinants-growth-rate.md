## Summary: Financial Determinants of Growth Rates (CFA Level II)

---

### The Sustainable Growth Rate

**Definition**: The rate of dividend (and earnings) growth that can be sustained given:
- A constant capital structure
- No new equity issuance
- Reinvestment of retained earnings at the going ROE

$$\boxed{g = b \times ROE}$$

Where:
- $b$ = earnings retention rate = $1 - \text{dividend payout ratio}$
- $ROE$ = return on equity

**Why it matters**: Used to estimate:
1. The stable growth rate in the **Gordon growth model**
2. The **mature/terminal growth rate** in multistage DDMs

---

### Mechanical Proof (Example 22)

- ROE = 25%, $b$ = 60% → $g = 0.60 \times 25\% = 15\%$
- Starting equity: $1,000,000
- Net income: $250,000 → retain 60% = $150,000
- New equity: $1,150,000
- Next year income: $1,150,000 × 25% = $287,500 (**+15% from $250,000** ✅)
- Dividends: $115,000 (**+15% from $100,000** ✅)

> **$g = b \times ROE$ holds exactly** when ROE is applied to beginning-of-period equity.

---

### Key Implications

| Factor | Direction | Effect on $g$ |
|--------|-----------|--------------|
| ↑ ROE | Higher investment returns | ↑ $g$ |
| ↑ Retention rate $b$ | Less dividends paid | ↑ $g$ |
| ↓ Payout ratio | More retained | ↑ $g$ |

**"Dividend displacement of earnings"**: Higher retention rate → higher growth but lower current dividends. Research cautions against assuming dividends displace earnings — companies with higher payouts sometimes show higher future growth (Arnott & Asness 2003).

**Why external equity is costly**: Investment banker fees, dilution effects → continuous new equity issuance is impractical → sustainable growth defined based on **internally generated funds only**.

---

### DuPont Decomposition of ROE

$$\boxed{ROE = \underbrace{\frac{\text{Net Income}}{\text{Sales}}}_{\text{Profit Margin}} \times \underbrace{\frac{\text{Sales}}{\text{Total Assets}}}_{\text{Asset Turnover}} \times \underbrace{\frac{\text{Total Assets}}{\text{Equity}}}_{\text{Equity Multiplier}}}$$

Three levers to increase ROE:
1. **↑ Profit margin** (pricing power, cost control)
2. **↑ Asset turnover** (operational efficiency)
3. **↑ Financial leverage** (more debt, assuming ROA > borrowing cost)

---

### The PRAT Model

Combining $g = b \times ROE$ with DuPont:

$$\boxed{g = \underbrace{b}_{\text{Retention}} \times \underbrace{\frac{\text{Net Income}}{\text{Sales}}}_{\text{Profit margin}} \times \underbrace{\frac{\text{Sales}}{\text{Assets}}}_{\text{Asset turnover}} \times \underbrace{\frac{\text{Assets}}{\text{Equity}}}_{\text{Leverage}}}$$

**PRAT** = **P**rofit margin × **R**etention rate × **A**sset turnover × **L**everage (T for "financial leverage")

| Driver | Type | Effect |
|--------|------|--------|
| **P** — Profit margin | Operating/competitive | ↑ P → ↑ g |
| **R** — Retention rate | Financial policy | ↑ R → ↑ g |
| **A** — Asset turnover | Operating efficiency | ↑ A → ↑ g |
| **T** — Leverage (equity multiplier) | Financial policy | ↑ T → ↑ g |

---

### Worked Examples

#### Example 23 — Two Companies

| Company | b | ROA | Leverage | g |
|---------|---|-----|---------|---|
| Baggai | 30% | 10% | 1.25 | **3.75%** |
| Mondale | 67% | 10% | 2.00 | **13.33%** |

Both have same ROA — Mondale grows faster purely due to **higher retention and higher leverage**.

#### Example 24 — IBM Mature Growth Estimation

IBM's issue: Historical ROE = 52–101%+ → entirely driven by **extreme financial leverage** (7–10×), not by margins or efficiency.

**DuPont decomposition shows:**
- IBM profit margin ≈ **benchmark** (10.5%)
- IBM asset turnover ≈ **benchmark** (0.62)
- IBM leverage >> benchmark (7× vs. 2×)

**Analyst's mature-phase assumptions** (debt retirement expected):
- Profit margin: 10.5% (benchmark)
- Asset turnover: 0.62 (benchmark)
- Leverage: **2.0** (converging to industry)
- Payout: 50% → retention $b$ = 50%

$$ROE_{mature} = 10.5\% \times 0.62 \times 2.0 = 13.0\%$$
$$g_{sustainable} = 0.50 \times 13.0\% = \mathbf{6.5\%}$$

> **Key lesson**: Always decompose ROE before using it in $g = b \times ROE$. A high ROE driven by leverage that will normalize gives a very different picture than a high ROE driven by genuine operational advantage.

---

### Cautions in Using Sustainable Growth Rate

| Risk | Explanation |
|------|------------|
| **Abnormally high ROE won't persist** | Competitive forces erode excess returns |
| **Historical ratios ≠ future ratios** | Technology, demand, competition can shift all components |
| **25% growth for 5 years ≠ 25% forever** | Use long-run sustainable rates for terminal value |
| **Transitory earnings** | Temporary earnings swings → actual dividends deviate from $g$ prediction |
| **Dividend policy changes** | Payout ratio shifts directly affect $b$ and therefore $g$ |

---

### Master Formula Summary

$$\boxed{g = b \times ROE}$$

$$\boxed{ROE = \text{Profit margin} \times \text{Asset turnover} \times \text{Equity multiplier}}$$

$$\boxed{g = b \times \text{Profit margin} \times \text{Asset turnover} \times \text{Equity multiplier}}$$

---

### Exam Tips

- **$g = b \times ROE$**: the foundational sustainable growth formula — know it cold
- **$b = 1 - \text{payout ratio}$** — straightforward but easy to mix up under pressure
- **DuPont is the key analytical tool** for decomposing ROE into actionable drivers
- **High ROE from leverage** → not sustainable if company plans to deleverage → adjust for mature-phase capital structure
- **PRAT** mnemonic: Profit margin × Retention × Asset turnover × leverage (T)
- **Bloomberg mature-phase assumption**: $b = 0.55$ (45% payout) for average mature US company
- **$ROE = r$ assumption**: in competitive equilibrium, companies earn only their cost of equity → $g = b \times r$ (no economic profit added by growth)