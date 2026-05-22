---
layout: page
title: Cost of Equity — Required Return on Equity
permalink: /study/04-corporate-issuers/03-cost-of-capital/05-cost-of-equity/
prev: /cfa/study/04-corporate-issuers/03-cost-of-capital/04-excess-risk-premium/
next: /cfa/study/04-corporate-issuers/03-cost-of-capital/06-mini-case-1/
---

---

### Overview of Methods

| Method | Best For | Key Input |
|--------|---------|----------|
| **DDM** | Public, dividend-paying companies | Dividend yield + growth rate |
| **Bond Yield + Risk Premium (BYPRP)** | Companies with traded debt | YTM on debt + equity risk premium |
| **CAPM** | Public companies | Beta + ERP |
| **Fama-French models** | Public companies (multi-factor) | Factor betas + factor premia |
| **Expanded CAPM** | Private companies | Peer beta + size/specific premia |
| **Build-up approach** | Private companies (no comparables) | rf + ERP + SP + IP + SCRP |

---

### Method 1: DDM

#### Constant Growth (Gordon Growth Model)
$$\boxed{r_e = \frac{D_1}{P_0} + g}$$

- Simple, intuitive
- **Requires**: publicly traded shares, stable and predictable dividends
- **DDM sensitivity** (holding all else constant):

| Change | Effect on $r_e$ |
|--------|----------------|
| ↑ Dividend | ↑ |
| ↑ Growth rate | ↑ |
| ↑ Share price | ↓ |
| ↓ Share price | ↑ |

#### Multi-Year DDM with Terminal Price
$$P_0 = \frac{D_1}{(1+r_e)} + \frac{D_2}{(1+r_e)^2} + \ldots + \frac{D_n + P_n}{(1+r_e)^n}$$

Solve for $r_e$ using IRR calculation — incorporates near-term dividend forecasts **and** a terminal price.

---

### Method 2: Bond Yield Plus Risk Premium (BYPRP)

$$\boxed{r_e = r_d + RP}$$

Where:
- $r_d$ = YTM on company's long-term debt
- $RP$ = historical mean excess return of equity over corporate bonds

| Advantages | Disadvantages |
|-----------|--------------|
| Debt yield provides a natural starting point | RP determination is relatively arbitrary |
| Simple and intuitive | Requires company to have traded debt |
| | Multiple debt issues → which yield to use? (use long-term bond) |

**Worked example**: $r_d = 4.3\%$, $RP = 6.1\%$ → $r_e = 10.4\%$

---

### Method 3: CAPM (Single-Factor)

$$\boxed{r_e = r_f + \beta \times ERP}$$

**Beta estimation** — market model regression:
$$(r_{i,t} - r_{f,t}) = b_0 + b_1(r_{m,t} - r_{f,t}) + \varepsilon_t$$

Key analyst decisions:
- Which equity market index to use
- What time period for beta estimation (balance robustness vs. relevance)
- Which risk-free rate proxy (short-term bill → lower $r_e$; long-term bond → higher $r_e$ if curve is steep)

**For private companies**: unlever a peer company's beta, then re-lever for the subject company's capital structure.

---

### Method 4: Fama-French Models

#### Three-Factor Model
$$\boxed{r_e - r_f = \alpha + \beta_m(ERP) + \beta_{SMB}(SMB) + \beta_{HML}(HML)}$$

| Factor | Premium | Captures |
|--------|---------|---------|
| Market ($ERP$) | Market risk premium | Systematic market risk |
| SMB (Small Minus Big) | Size premium | Small-cap outperformance |
| HML (High Minus Low) | Value premium | High book-to-market outperformance |

#### Five-Factor Model (adds):
| Factor | Premium | Captures |
|--------|---------|---------|
| RMW (Robust Minus Weak) | Profitability premium | High vs. low profitability |
| CMA (Conservative Minus Aggressive) | Investment premium | Conservative vs. aggressive investment |

$$r_e - r_f = \alpha + \beta_m(ERP) + \beta_{SMB}(SMB) + \beta_{HML}(HML) + \beta_{RMW}(RMW) + \beta_{CMA}(CMA)$$

**Worked example (five-factor)**:
$$r_e = 3.82\% + (1.2 \times 6.5\%) + (0.10 \times 1.8\%) + (-0.20 \times 4.0\%) + (0.5 \times 2.0\%) + (0.2 \times 1.0\%) = 12.2\%$$

> **Key note**: Market beta differs between CAPM and FF models because FF factors absorb some of the market factor's explanatory power.

---

### Private Company Cost of Equity

**Additional challenges:**
- No observable market prices or returns
- Smaller size → higher risk
- Less liquid → illiquidity discount (applied to **value**, not added to $r_e$)
- Less disclosure
- Owner-managed concentration risk

#### Expanded CAPM
$$\boxed{r_e = r_f + \beta_{peer} \times ERP + SP + SCRP}$$

Steps:
1. Estimate $\beta_{peer}$ from comparable public companies
2. Compute base CAPM return
3. Add **Size Premium (SP)** — inversely related to company size
4. Add **Specific Company Risk Premium (SCRP)** — for company-specific risks not captured above

**Company-specific risk factors:**

| Qualitative | Quantitative |
|------------|-------------|
| Industry, competitive position | Operating/financial leverage |
| Management experience | Cash flow volatility |
| Customer/supplier concentration | Earnings predictability |
| Geographic concentration | Pricing power |
| Governance model | |
| Asset tangibility | |

#### Build-Up Approach
$$\boxed{r_e = r_f + ERP + SP + IP + SCRP}$$

Where:
- $SP$ = size premium
- $IP$ = industry premium
- $SCRP$ = specific company risk premium
- ERP **not** beta-adjusted (implicit $\beta = 1.0$)

**Use when**: No comparable public companies available or comparability is questionable.

---

### International Considerations

#### Country Risk Premium (CRP) — Sovereign Yield Spread Method
$$CRP = \text{EM sovereign yield} - \text{Developed market sovereign yield}$$

**Damodaran refinement** (adjusts for equity vs. bond volatility):
$$CRP = \text{Sovereign yield spread} \times \frac{\sigma_{equity}}{\sigma_{bonds}}$$

**Company-level CRP** (adjusted for exposure $\lambda$):
$$\text{Company CRP} = \lambda \times CRP$$

**Worked example (Makinassi)**:
- Sovereign spread = 3.2% − 1.5% = 1.7%
- Damodaran CRP = 1.7% × (4.0%/2.5%) = 2.72%
- Company CRP = 40% exposure × 2.72% = **1.09%**

#### Global CAPM (GCAPM)
- Uses global market index as single factor
- Assumes no significant risk differences across countries
- May produce low/negative slopes in emerging markets

#### International CAPM (ICAPM)
$$r_e = r_f + \beta_{gm}(ERP_{global}) + \beta_c(r_c)$$

- Adds foreign currency index factor
- Better for companies with significant cross-border cash flow exposure

---

### Master Comparison Table

| Method | Formula | Public/Private | Key Limitation |
|--------|---------|---------------|---------------|
| DDM (constant growth) | $D_1/P_0 + g$ | Public, dividend-paying | Requires stable dividends |
| BYPRP | $r_d + RP$ | Public with traded debt | RP is arbitrary |
| CAPM | $r_f + \beta \times ERP$ | Both (with adjustments) | Single factor; beta estimation issues |
| FF Three-Factor | CAPM + SMB + HML | Public | More factors, more complexity |
| FF Five-Factor | + RMW + CMA | Public | Even more estimation required |
| Expanded CAPM | CAPM + SP + SCRP | Private | Peer comparability issues |
| Build-Up | $r_f + ERP + SP + IP + SCRP$ | Private | ERP not beta-adjusted ($\beta = 1$) |
| CRP/ICAPM | CAPM + CRP | International/EM | CRP estimation is imprecise |

---

### Exam Tips

- **DDM**: higher growth or higher dividend → higher $r_e$; higher price → lower $r_e$
- **BYPRP**: uses long-term debt YTM as starting point; RP is the main judgment call
- **CAPM vs FF**: FF market beta will differ from CAPM beta — additional factors absorb some market risk
- **Private companies**: use **expanded CAPM or build-up**; illiquidity → **discount to value**, not a premium to $r_e$
- **Build-up**: implicit $\beta = 1.0$ — no beta adjustment to ERP
- **Damodaran CRP** = sovereign spread × (equity vol / bond vol) × company exposure $\lambda$
- **GCAPM** appropriate for developed-market multinationals; **ICAPM** adds currency factor