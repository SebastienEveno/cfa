## Summary: Factor Models in Return Attribution (CFA Level II — Portfolio Management)

---

### Overview — Applications of Multifactor Models

Four primary applications:
1. **Return attribution** (this section)
2. Risk attribution
3. Portfolio construction
4. Strategic portfolio decisions (asset allocation)

**Trend**: Growing use of **factor-based asset allocation** — driven by (1) increasing availability of sophisticated factor models (BARRA, etc.) and (2) greater focus on multiple dimensions of risk.

---

### Why Fundamental Models Dominate Return Attribution

| Model Type | Attribution Strength |
|------------|-----------------------|
| **Fundamental factor models** | **Preferred** — commonly understood terms; thematically clear narratives for clients |
| **Statistical factor models** | Weak — difficult to interpret economically |
| **Macroeconomic factor models** | Less detailed — fundamental models express style/security characteristics more directly |

---

### Active Return — The Core Framework

$$\boxed{\text{Active return} = R_P - R_B}$$

**Active managers** deviate from benchmark weights because their expectations **differ from consensus** — either about common risk factors OR company-specific considerations.

**Key evaluation question**: Did the manager's insights translate into genuine value-add over a passive alternative?

---

### Decomposing Active Return — Two Components

$$\boxed{\text{Active return} = \text{Return from factor tilts} + \text{Security selection}}$$

$$\boxed{R_P - R_B = \sum_k(b_{p,k} - b_{B,k}) \times F_k + \text{Security selection}}$$

| Component | Definition |
|-----------|-----------|
| **Return from factor tilts** | Sum of (portfolio factor sensitivity − benchmark factor sensitivity) × realized factor return |
| **Security selection** | Manager's skill in picking individual outperformers/avoiding underperformers WITHIN factor exposures |

**Note**: Portfolio and benchmark sensitivities measured at the **BEGINNING** of the evaluation period.

---

### Example 7 — Four-Factor Active Return Decomposition (Carhart Model)

**Setup**: Equity manager, benchmark = 1,000 largest US stocks; self-described "stock picker"

**Given data (Exhibit 9):**

| Factor | Portfolio Sensitivity | Benchmark Sensitivity | Difference | Factor Return | Contribution |
|--------|--------------------------|---------------------------|------------|-----------------|--------------|
| **RMRF** | 0.95 | 1.00 | −0.05 | 5.52% | **−0.2760%** |
| **SMB** | −1.05 | −1.00 | −0.05 | −3.35% | **+0.1675%** |
| **HML** | 0.40 | 0.00 | **+0.40** | 5.10% | **+2.0400%** |
| **WML** | 0.05 | 0.03 | +0.02 | 9.63% | **+0.1926%** |
| **A. Return from Factor Tilts** | | | | | **2.1241%** |
| **B. Security Selection** | | | | | **−0.0500%** |
| **C. Total Active Return (A+B)** | | | | | **2.0741%** |

---

### Q1 — Determining Investment Mandate vs. Actual Style

**Benchmark sensitivities** confirm mandate: 
- RMRF ≈ 1.0 → **average market risk** (broad-based index)
- SMB ≈ −1.0 → **large-cap orientation**
- HML ≈ 0.0 → **no value/growth bias** in mandate
- WML ≈ 0.0 → **no momentum bias** in mandate

**Manager's ACTUAL positioning:**
- **Positive HML sensitivity (0.40)** → manager has a **value orientation** (high book-to-market tilt)
- **WML ≈ neutral (0.05)** → NOT a momentum investor, NOT a contrarian value investor

**Conclusion**: 
$$\boxed{\text{Manager mandate: large-cap, style-neutral} \implies \text{Actual style: large-cap VALUE orientation}}$$

> **Key insight**: The manager has drifted from a style-neutral mandate into an active value tilt — this is a style consistency issue worth investigating.

---

### Q2 — Sources of Active Return

**Dominant driver**: **HML factor tilt** contributed **~98%** of the total 2.07% active return.

**Breakdown by factor:**
| Factor | Contribution | Assessment |
|--------|---------------|-------------|
| RMRF | **−13.3%** of active return (unprofitable) | Small underweight to market beta hurt |
| SMB | **+8.1%** (profitable) | Small positive contribution |
| **HML** | **+98.4%** (dominant) | Large positive value bet paid off |
| WML | **+9.3%** (profitable) | Minor positive contribution |

> **Key takeaway**: Nearly the **ENTIRE** active return came from **ONE large factor bet** (value/HML), not from broad skill across multiple dimensions.

---

### Q3 — Concerns to Raise with the Manager

**The critical problem**: Manager claims to be a **"stock picker"** but:

$$\boxed{\text{Security selection contribution} = -0.05\% \text{ (NEGATIVE)}}$$

**What actually drove performance**: A **large, concentrated bet on the HML factor** happened to coincide with a strong period for value stocks (5.10% HML return).

**Risk exposed**: 
> If the market had favored **growth over value** during this period (without the manager improving actual stock selection), his performance would have been **UNSATISFACTORY** — the positive result was essentially a **factor timing bet** that paid off, NOT stock-picking skill.

**Recommended discussion topics for Service:**
1. Evidence the manager can **genuinely predict** HML factor return changes (factor timing skill)
2. The manager's **actual stock selection discipline** — since this component was negative, is the "stock picker" self-description accurate?

---

### Broader Lesson — Distinguishing Skill Sources

$$\boxed{\text{Factor tilts} \neq \text{Security selection skill}}$$

**Key exam insight**: A manager can show **strong positive active return** while having:
- **Poor security selection** (as in this example)
- **Simply a large, well-timed (or lucky) factor bet**

**This distinction matters because:**
- Factor tilts can be **replicated cheaply** via factor/smart-beta ETFs — doesn't justify high active management fees
- **True stock-picking skill** (security selection) is what justifies paying for discretionary active management
- Investors should scrutinize whether outperformance is **genuine alpha** or **disguised factor exposure**

---

### Practical Application — Interpreting Factor Sensitivity Differences

| Sensitivity Difference | Interpretation |
|--------------------------|-----------------|
| **Portfolio > Benchmark** | Manager is **overweight** that factor exposure |
| **Portfolio < Benchmark** | Manager is **underweight** that factor exposure |
| **Large difference** | Represents a **significant active bet** on that factor |
| **Small difference** | Represents a **minor tilt** — limited impact on active return |

---

### Key Formula Reference Card

| Formula | Expression |
|---------|-----------|
| **Active return** | $R_P - R_B$ |
| **Factor tilt contribution** | $\sum_k (b_{p,k} - b_{B,k}) \times F_k$ |
| **Full decomposition** | Active return = Factor tilts + Security selection |
| **Security selection (residual)** | Active return − Factor tilts contribution |

---

### Exam Tips

- **Active return = Return from factor tilts + Security selection** — the fundamental decomposition equation
- **Factor tilt contribution** = (Portfolio sensitivity − Benchmark sensitivity) × Realized factor return, summed across all factors
- **Security selection is the RESIDUAL** — what's left after accounting for factor tilts
- **Compare portfolio's ACTUAL factor exposures to the STATED mandate** — reveals style drift
- **A self-described "stock picker" with NEGATIVE security selection** is a major red flag — outperformance may be disguised factor timing, not genuine skill
- **Large single-factor contribution dominating active return** (like HML at 98% here) signals the manager is essentially a **factor bet**, not diversified alpha generation
- **HML positive sensitivity = value tilt**; **WML positive sensitivity = momentum tilt**; **SMB negative sensitivity = large-cap tilt**
- **Sensitivities measured at BEGINNING of period** — this is the standard convention for return attribution calculations
- Key skill: distinguishing **whether performance came from stock-picking OR from factor timing/tilts** — this determines whether active management fees are justified