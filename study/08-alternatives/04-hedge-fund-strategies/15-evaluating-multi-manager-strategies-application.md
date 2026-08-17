## Summary: 4.15 | Evaluating Multi-Manager Hedge Fund Strategies: Application (CFA Level II — Alternative Investments)

---

This section applies the conditional factor model to **multi-manager** strategies (FoF and multi-strategy funds) — completing the empirical application started in 4.14 for equity strategies.

---

### Exhibit 16 — Key Return Characteristics (2000–2016)

**Headline finding**:
$$\boxed{\text{Multi-strategy funds OUTPERFORM funds-of-funds: HIGHER mean returns (7.85\% TASS, 8.52\% CISDM) AND among the HIGHEST Sharpe/Sortino ratios}}$$

**Liquidity signal — Rho comparison**:
$$\boxed{\text{Multi-strategy Rho} > 20\% \quad (\text{HIGHER than FoF})}$$

**Why**: multi-strategy funds often **simultaneously run less-liquid strategies** (convertible arbitrage, fixed-income arbitrage, other relative value approaches) → higher serial autocorrelation (smoothed returns from illiquid marks).

**Direct consequence**: this is **precisely why** (per 4.12) multi-strategy funds more often impose **investor-level or fund-level redemption gates** — unlike FoFs.

---

### Exhibit 17 — Average Factor Exposures (Conditional Model)

**FoF strategies — equity exposure**:
$$\boxed{\text{ALL FoF strategies EXCEPT macro/systematic show significant POSITIVE equity exposure (0.14 to 0.33)}}$$

**Macro/systematic FoF exception**: consistent with 4.09/4.10's finding that **opportunistic strategies tend NOT to be exposed to equity risk in aggregate**.

**Multi-strategy funds — a striking database discrepancy**:
$$\boxed{\text{Multi-strategy: significant equity exposure, but OPPOSITE SIGNS — NEGATIVE (CISDM) vs. POSITIVE (TASS)}}$$

$$\boxed{\text{This highlights significant HETEROGENEITY between the two underlying databases' fund populations}}$$

---

### The Critical Finding — Multi-Manager Funds Don't Hedge Well in Crises

$$\boxed{\text{Multi-manager funds as a GROUP show NO significant hedging benefit (via diversification) during crisis periods}}$$

**Evidence**: if genuine crisis-period hedging existed, we would see **significant NEGATIVE DSNP500 exposures** — but this is **not observed** on average.

**Research consistency**: 
$$\boxed{\text{Consistent with research findings: in the 2007-09 GFC, diversification ACROSS hedge fund strategies did NOT decrease total portfolio risk}}$$

**Key implied lesson**:
$$\boxed{\text{Simple diversification is INSUFFICIENT during crises} \implies \text{Must focus on OTHER risks: LIQUIDITY, VOLATILITY, and CREDIT — especially since LEVERAGE can magnify these risks}}$$

---

### Exhibit 18 — Individual Fund Heterogeneity Tells a Different Story

**Equity exposure dispersion**: 
$$\boxed{\text{MAJORITY of multi-manager funds: significant POSITIVE equity exposure}}$$
$$\boxed{\text{~30\% of funds: MIXED incremental (DSNP500) exposures during crisis (both negative AND positive)}}$$

**Interpretation**: funds with **negative** crisis loadings likely **shielded investors** from major declines via deleveraging, pre-crisis equity selling, and/or short selling.

**CREDIT exposure**:
$$\boxed{\text{~40\% of ALL multi-manager funds: significant, MOSTLY NEGATIVE CREDIT exposure} \implies \text{generally NOT positioned to benefit from improving spreads}}$$

**Crisis-period CREDIT shift**: took on **additional (mostly negative)** CREDIT exposure during crisis.

**Specific protective example**: 
$$\boxed{\text{~50\% of FoF-Debt and FoF-Relative Value funds: incremental NEGATIVE CREDIT exposure during turbulence} \implies \text{Hedged them from deteriorating credit conditions}}$$

---

### USD and VIX — The Most Alarming Finding

**Full-period exposure**: 
$$\boxed{\text{MINIMAL USD and VIX exposure across multi-manager funds, on average}}$$

**Crisis-period transformation**:
$$\boxed{\text{These exposures INCREASE DRAMATICALLY, becoming SIGNIFICANTLY NEGATIVE during crises}}$$

**Concrete example**: 
$$\boxed{\text{Only 2\% of FoF-Equity funds show negative VIX exposure OVERALL, but 60\% show significant ADDITIONAL negative VIX exposure specifically DURING crisis periods}}$$

**Similar pattern observed for USD exposure.**

**Why this is problematic**: 
$$\boxed{\text{Negative VIX (short vol) and negative USD exposure are UNDESIRABLE precisely when volatility is SPIKING and USD is likely APPRECIATING (safe-haven flows) — i.e., during the crisis itself}}$$

**Possible explanation**: **natural embedded leverage** within these strategies may partially explain why these seemingly undesirable exposures emerge specifically during crisis periods (leverage can amplify latent short-vol/short-USD tilts that weren't visible in calm markets).

---

### Overarching Conclusion

$$\boxed{\text{Crisis periods GENERATE potentially UNEXPECTED exposures to systematic risks} \implies \text{Conditional factor models are ESSENTIAL for understanding true hedge fund strategy risks}}$$

This directly validates the **entire rationale** for building the conditional factor model in 4.13 — average, "normal-times" risk profiles can look benign while hiding **dangerous latent exposures** that only manifest under stress.

---

### Exam Tips

- **Multi-strategy > FoF on return/Sharpe/Sortino, but ALSO higher Rho (liquidity risk)** — this is the section's key return/risk trade-off, directly reinforcing 4.12's qualitative discussion (multi-strategy = better returns but more operational/liquidity risk) with **empirical evidence**
- **The CISDM vs. TASS sign discrepancy for multi-strategy equity beta is a striking, testable data point** — illustrates that **database choice materially affects conclusions**, a caution explicitly flagged at the start of 4.14 as well
- **THE central, most important finding of this section**: multi-manager diversification did **NOT** reduce portfolio risk during the 2007-09 GFC — this is a **counterintuitive but critical** result. Memorize the takeaway: **diversification across STRATEGIES is not the same as hedging against SYSTEMATIC crisis risk** — liquidity, volatility, and credit risk (especially leverage-magnified) matter more
- **The 2% → 60% VIX exposure jump (FoF-Equity)** is a dramatic, highly citable statistic illustrating how **crisis conditions can reveal previously invisible risk exposures** — a strong essay/case-study anchor
- **Negative USD/VIX exposure during crisis = "backwards" hedging** — a good conceptual test: know WHY this is undesirable (USD typically appreciates and volatility typically spikes in crises, so being short both means losing exactly when protection is needed most)
- **Embedded leverage as a partial explanation** for crisis-period exposure surprises is a recurring theme across this reading (also seen in 4.12's multi-strategy leverage discussion) — leverage doesn't just amplify *known* risks, it can also **surface latent exposures** that weren't apparent in normal-volatility regimes
- **FoF-Debt/FoF-Relative Value CREDIT hedging (50% negative incremental exposure)** is a good POSITIVE counter-example — showing that **some** multi-manager sub-categories DID successfully position defensively, contrasting with the disappointing VIX/USD findings
- This section, together with 4.13 and 4.14, **completes the factor-model application arc** for Module 4 (per 4.01's Section 13 and Section 16 roadmap) — this likely represents the **culmination of the Hedge Fund Strategies module**; expect either a **module summary** next or transition to a new Alternative Investments topic (worth checking the syllabus with Sébastien)