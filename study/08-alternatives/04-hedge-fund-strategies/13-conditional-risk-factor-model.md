## Summary: 4.13 | Analysis of Hedge Fund Strategies Using a Conditional Factor Risk Model (CFA Level II — Alternative Investments)

---

### Learning Outcome
Describe how factor models may be used to understand hedge fund risk exposures.

*(This is Section 13 from 4.01's roadmap — the unifying quantitative framework tying together all six strategy categories.)*

---

### Recap — Risk Exposure Patterns by Strategy Category

$$\boxed{
\begin{array}{l}
\text{L/S equity \& event-driven: natural EQUITY MARKET BETA exposure} \\
\text{Arbitrage strategies: CREDIT SPREAD risk + market VOLATILITY TAIL risk} \\
\text{Opportunistic: exposure to market TRENDINESS/directionality} \\
\text{Relative value: counts on MEAN REVERSION (not trendiness)}
\end{array}
}$$

**Key mechanism**: risk factor exposures arise simply from **holding financial instruments** whose prices are directly tied to those factors — long/short exposures across securities are rarely perfectly equal, creating **non-zero net exposure**.

---

### Why Use a CONDITIONAL Factor Model (Not Just a Static One)

$$\boxed{\text{Conditional model: allows analysis of risk exposures SPECIFIC to a market environment (normal vs. crisis)}}$$

**Key value**: reveals whether exposures **insignificant in calm periods** become **significant during turbulence** — critical because static (unconditional) models can mask crisis-specific vulnerabilities.

### The Empirical Case for Why This Matters — Hedge Fund Industry Dynamics

$$\boxed{2000\text{–}2007: \text{Global hedge fund AUM grew} > 25\% \text{ CAGR}}$$
$$\boxed{2007\text{–}2009 \text{ (GFC)}: \text{AUM DECLINED } 17\% \text{ CAGR, from a peak above \$2.6 trillion}}$$
$$\boxed{\text{AUM did not SURPASS the 2007 high until 2014}}$$

**Why this happened**: many managers were **caught off guard** by their funds' **actual risk exposures** during the crisis and its aftermath — thousands of funds were shuttered.

---

### The Conditional Linear Factor Model — Formula

$$\boxed{
(R_{HF_i})_t = \alpha_i + \sum_{k=1}^{K}\beta_{i,k}(\text{Factor }k)_t + \sum_{k=1}^{K} D_t\beta_{i,k}(\text{Factor }k)_t + \varepsilon_{i,t}
}$$

**Components**:
- $\beta_{i,k}(\text{Factor }k)_t$ = exposure to risk factor $k$ during **NORMAL** times
- $D_t\beta_{i,k}(\text{Factor }k)_t$ = **INCREMENTAL** exposure during **CRISIS** periods
- $D_t$ = dummy variable = **1** during financial crisis (defined as **June 2007 – February 2009**), **0** otherwise
- $\alpha_i$ = intercept (manager-specific alpha)
- $\varepsilon_{i,t}$ = random error, mean zero, std dev $\sigma_i$

**Interpretation of each beta**: expected change in HF returns for a **one-unit increase** in that factor, **holding all others constant**.

**What's NOT explained by the factors** — attributable to three sources:
$$\boxed{
1.\ \text{ALPHA (manager skill)} \qquad 2.\ \text{OMITTED factors} \qquad 3.\ \text{RANDOM error}
}$$

---

### The Six Candidate Risk Factors (Hasanhodzic and Lo, 2007)

| Factor | Ticker | Measure |
|---|---|---|
| **Equity risk** | SNP500 | S&P 500 monthly total return (incl. dividends) |
| **Interest rate risk** | BOND | Bloomberg Barclays Corporate AA Intermediate Bond Index return |
| **Currency risk** | USD | US Dollar Index monthly return |
| **Commodity risk** | CMDTY | Goldman Sachs Commodity Index (GSCI) total return |
| **Credit risk** | CREDIT | Baa − Aaa corporate bond yield spread (Moody's) |
| **Volatility risk** | VIX | First-difference of month-end CBOE VIX |

---

### Handling Multi-Collinearity — The Four-Step Stepwise Regression Process

$$\boxed{
\begin{array}{l}
1.\ \text{Identify potentially important risk factors} \\
2.\ \text{Calculate PAIRWISE correlations (across BOTH normal and crisis states)} \\
\qquad \text{— factors deemed "highly correlated" if correlation} > 60\% \\
3.\ \text{For a correlated pair (A, B): run regression WITHOUT A, then WITHOUT B} \\
\qquad \implies \text{KEEP whichever exclusion produces the HIGHER adjusted } R^2 \\
4.\ \text{Repeat Step 3 for all other correlated pairs} \implies \text{eliminate least useful factors}
\end{array}
}$$

**Result of applying this to the six candidate factors**: 
$$\boxed{\text{BOND and CMDTY factors were DROPPED} \implies \text{CREDIT and SNP500 retained (produced HIGHER adjusted } R^2\text{)}}$$

$$\boxed{\text{Final model uses FOUR factors: SNP500, CREDIT, USD, VIX}}$$

---

### The Two Databases Used — TASS and CISDM

**Coverage period**: 2000–2016.

**Fund groupings**: "live" (operating/open), "defunct" (shut down/closed/delisted), and "all" (live + defunct).

**Data filtering criteria** — funds EXCLUDED if they:
$$\boxed{
\begin{array}{l}
1.\ \text{Don't report NET-of-fee returns} \\
2.\ \text{Report in non-USD currencies} \\
3.\ \text{Report LESS frequently than monthly} \\
4.\ \text{Don't provide AUM/estimates} \\
5.\ \text{Have} < 36 \text{ months of return data}
\end{array}
}$$

**Database sizes**:
$$\boxed{\text{TASS: 6,352 total funds (82\% defunct, 18\% live)}}$$
$$\boxed{\text{CISDM: 7,756 total funds (80\% defunct, 20\% live)}}$$

**Why defunct rate is so high**: reflects the **relatively high attrition rate and short typical lifespan** of hedge funds.

### Why Including Defunct Funds Matters

$$\boxed{\text{Defunct fund history is useful for evaluating managers STARTING NEW funds} \implies \text{can assess WHY the prior fund closed (poor performance/redemptions vs. capacity constraints from initial success)}}$$

$$\boxed{\text{Including defunct funds CORRECTS for SURVIVORSHIP BIAS (recall Module 6, section 6.05!) — a direct callback to the earlier backtesting reading}}$$

---

### Exhibit 12 — Interpreting Factor Exposures by Market Period

**Normal period — typical desired hedge fund positioning**:

$$\boxed{
\begin{array}{l|c|c|c|l}
\text{Factor} & \text{Typical Trend} & \text{Desired Position} & \text{Desired Exposure} & \text{Rationale} \\
\hline
\text{SNP500} & \text{Equities rising} & \text{Long} & \text{Positive} & \text{Add risk, increase return} \\
\text{CREDIT} & \text{Spreads flat/narrowing} & \text{Long} & \text{Positive} & \text{Add risk, increase return} \\
\text{USD} & \text{USD flat/depreciating} & \text{Short} & \text{Negative} & \text{Sell USD to boost returns} \\
\text{VIX} & \text{Volatility falling} & \text{Short} & \text{Negative} & \text{Sell volatility to boost returns}
\end{array}
}$$

**Crisis period — typical desired hedge fund positioning (INCREMENTAL/dummy-interacted exposures)**:

$$\boxed{
\begin{array}{l|c|c|c|l}
\text{Factor} & \text{Typical Trend} & \text{Desired Position} & \text{Desired Exposure} & \text{Rationale} \\
\hline
\text{D·SNP500} & \text{Equities falling sharply} & \text{Short} & \text{Negative} & \text{Reduce risk} \\
\text{D·CREDIT} & \text{Spreads widening} & \text{Short} & \text{Negative} & \text{Reduce risk} \\
\text{D·USD} & \text{USD appreciating} & \text{Long} & \text{Positive} & \text{USD is a SAFE HAVEN in crises} \\
\text{D·VIX} & \text{Volatility rising} & \text{Long} & \text{Positive} & \text{Negative correlation with equities}
\end{array}
}$$

**Key pattern to internalize**: the **sign of the desired position flips** for SNP500, CREDIT, and USD between normal and crisis periods (well-managed funds should **reduce equity/credit risk and go long USD** heading into a crisis), while **VIX positioning direction is consistent** (short vol normally, but should flip to long vol/reduce short-vol exposure in crisis — its "desired" sign flips from negative to positive as well, reflecting a shift from selling volatility to benefiting from its rise).

---

### Exam Tips

- **The conditional dummy-variable structure is THE core testable mechanic**: understand that $D_t = 1$ during crisis (June 2007–Feb 2009) captures the **INCREMENTAL** change in factor exposure during stress — this is distinct from simply having a different intercept; the **betas themselves** shift
- **Four-step stepwise regression process** (identify → correlate → compare adjusted R² by exclusion → repeat) is a specific, testable methodology — expect a conceptual question on **why** this avoids multi-collinearity (keeping the factor that adds the MOST unique explanatory power, dropping the redundant one)
- **BOND and CMDTY were dropped, SNP500 and CREDIT retained** — a specific, citable modeling result; know that this happened because of **higher adjusted R²** when keeping the latter pair
- **Survivorship bias connection is a strong cross-reading link** — this directly reinforces the concept from Module 6 (Backtesting, section 6.05): including **defunct funds** in the database is essential to avoid inflated, biased performance conclusions — a good "connect the dots across readings" exam theme
- **Exhibit 12's sign-flipping pattern between normal and crisis periods is THE single most important exam takeaway from this section**: a **well-risk-managed** hedge fund should show **positive** SNP500/CREDIT exposure and **negative** USD/VIX exposure in normal times, but should **flip to defensive positioning** (negative equity/credit, positive USD/VIX) as a crisis unfolds — expect direct questions asking you to **interpret regression output** against this framework (e.g., "a manager showing POSITIVE crisis-period SNP500 beta is NOT adequately de-risking")
- **82%/80% defunct fund percentages (TASS/CISDM)** are citable statistics reinforcing how attrition-prone the hedge fund industry is
- **GFC AUM decline stats (25%+ CAGR growth 2000-07, -17% CAGR 2007-09, no recovery to 2007 peak until 2014)** are a good real-world anchor for essay questions on hedge fund industry cyclicality and risk management failures
- Per 4.01's roadmap, this section sets up **Section 16** (evaluating each strategy's actual contribution to a traditional portfolio's risk/return) — expect the **next section** to apply this **conditional factor framework** empirically across the six strategy categories, likely showing **actual regression results** (betas) for each category during normal vs. crisis periods