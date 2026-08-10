## Summary: Fundamental Factor Models — Empirical Comparison (CFA Level II — Portfolio Management)

---

### Overview — Connor (1995) Study

**Purpose**: Directly compare the **explanatory power** of macroeconomic factor models vs. fundamental factor models using the **same set of 779 large-cap US stocks**, monthly data 1985-1993.

---

## Macroeconomic Factor Model Results (Exhibit 7)

**Five factors tested**: Inflation, Term structure, Industrial production, Default premium, Unemployment

| Factor | Explanatory Power Alone | Marginal Contribution (added to all others) |
|--------|--------------------------|--------------------------------------------|
| Inflation | 1.3% | 0.0% |
| Term structure | 1.1% | **7.7%** |
| Industrial production | 0.5% | 0.3% |
| **Default premium** | 2.4% | **8.1%** |
| Unemployment | −0.3% | 0.1% |
| **All factors (total)** | | **10.9%** |

**Key finding**: Macroeconomic model explains only **~11%** of return variance.

**Explanatory power formula:**
$$\boxed{\text{Explanatory power} = 1 - \frac{\text{Average asset-specific variance}}{\text{Average total variance}}}$$

> Interpretation: Percentage of total return variance explained by the model for the average stock.

---

## Fundamental Factor Model Results (Exhibit 8 — BARRA US-E2 Model)

**67 variables total** (including 55 industry dummy variables)

| Factor | Explanatory Power Alone | Marginal Contribution |
|--------|--------------------------|--------------------------|
| **Industries** (55 dummies) | **16.3%** | **18.0%** |
| Variability in markets (volatility) | 4.3% | 0.9% |
| Success (price momentum) | 2.8% | 0.8% |
| Size | 1.4% | 0.6% |
| Trade activity | 1.4% | 0.5% |
| Growth | 3.0% | 0.4% |
| Earnings to price | 2.2% | 0.6% |
| Book to price | 1.5% | 0.6% |
| Earnings variability | 2.5% | 0.4% |
| Financial leverage | 0.9% | 0.5% |
| Foreign investment | 0.7% | 0.4% |
| Labor intensity | 2.2% | 0.5% |
| Dividend yield | 2.9% | 0.4% |
| **All factors (total)** | | **42.6%** |

**Key finding**: Fundamental model explains **~43%** of return variance — **nearly 4× the explanatory power** of the macroeconomic model.

**Most powerful single factor**: **"Industries"** (55 industry dummy variables) — by far the dominant contributor.

---

### Important Caveat on the Comparison

$$\boxed{\text{"Industries" must sum to the market} \implies \text{Fundamental model implicitly incorporates the market portfolio}}$$

**The macroeconomic model does NOT explicitly include a market factor** — this gives the fundamental model a **built-in structural advantage** in the comparison. The higher explanatory power isn't purely due to superior factor selection — it partly reflects this asymmetry in model construction.

**Additional limitation**: Connor's study does **not test statistical significance** of individual factors in either model — the results show explanatory power, not necessarily statistical robustness.

---

### Key Conceptual Finding — Macro Factors Add Nothing Beyond Fundamental Factors

$$\boxed{\text{Macroeconomic factor model} \rightarrow \text{ZERO marginal explanatory power when added to fundamental model}}$$

**Interpretation**: The **fundamental risk attributes already capture** all the risk characteristics that the macroeconomic factor betas represent.

> **Not surprising**: Fundamental factors provide such **detailed, granular** descriptions of a company's characteristics that they naturally subsume broader macro-level risk exposures.

---

### Systematic vs. Non-Systematic Risk — A Key Distinction

**Important caution**: **Statistical explanatory power ≠ evidence of systematic (undiversifiable) risk.**

| Model Type | Systematic Risk Status |
|------------|--------------------------|
| **Macroeconomic factors** | Individually **backed by statistical evidence** of representing true systematic (undiversifiable) risk |
| **Fundamental factors** | **Not necessarily** all representing systematic risk |

**Key example — Industry exposure**: 
> A portfolio manager can **easily construct a portfolio that excludes a particular industry** → this means exposure to any single industry is **NOT** truly systematic (undiversifiable) risk — it CAN be diversified away by choice.

$$\boxed{\text{High explanatory power} \neq \text{Confirmed systematic risk status}}$$

---

### Practical Implications — Different Uses for Each Model Type

| Model Type | Factor Count | Best For |
|------------|---------------|---------|
| **Macroeconomic** | **Parsimonious** (5 in this study) | Incorporating **economic views** into portfolio construction; adjusting macro exposures directly |
| **Fundamental** | **Large/complex** (67 in this study) | **Detailed risk decomposition** in terms directly related to company/security characteristics; **performance attribution** |

**Fundamental factor models — dominant industry use case:**
$$\boxed{\text{Portfolio performance attribution}}$$

> Fundamental models typically employ **far more factors** than macro models → more granular, detailed picture of sources of manager returns.

---

### Neither Model Type Is "Inherently Superior"

**Key conclusion**: The higher explanatory power of fundamental models does **NOT** mean they are inherently better — each model type serves **different analytical purposes**:

- **Macro models**: Cleaner theoretical link to systematic risk; better for macro-view implementation
- **Fundamental models**: More granular, practical for attribution; but individual factors may capture diversifiable (non-systematic) characteristics

---

### Key Formula Reference Card

| Concept | Formula/Value |
|---------|----------------|
| **Explanatory power** | $1 - (\text{Avg asset-specific variance}/\text{Avg total variance})$ |
| **Macro model total (Connor)** | ~10.9% |
| **Fundamental model total (Connor)** | ~42.6% |
| **Dominant fundamental factor** | Industries (16.3% alone; 18.0% marginal) |
| **Dominant macro factors** | Default premium (8.1% marginal), Term structure (7.7% marginal) |

---

### Exam Tips

- **Fundamental models explained ~43% vs. ~11%** for macro models in Connor's study — but this comparison has an **inherent bias** (industries sum to market; macro model lacks explicit market factor)
- **Industries is the single most powerful fundamental factor** — dominates due to the 55 dummy variables' collective explanatory power
- **Macroeconomic model had ZERO marginal explanatory power when added to fundamental model** — fundamental factors already capture macro risk information
- **Critical distinction**: Statistical explanatory power ≠ confirmation of TRUE systematic (undiversifiable) risk
- **Industry exposure is diversifiable** — a manager can construct portfolios excluding any specific industry, proving industry-specific exposure is NOT truly systematic
- **Macro models are parsimonious** (few factors) — best for expressing economic views directly in portfolio construction
- **Fundamental models are complex** (many factors) — best for detailed **performance attribution** and risk decomposition tied to security characteristics
- **Neither model type is universally superior** — they serve complementary purposes in portfolio management practice
- **BARRA models** (E2, later E4) are the industry-standard commercial fundamental factor model family referenced in this research