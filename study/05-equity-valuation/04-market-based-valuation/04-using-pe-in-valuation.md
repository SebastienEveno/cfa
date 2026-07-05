## Summary: Using P/E in Valuation (CFA Level II)

---

### Method of Comparables — Four Steps

1. Select and calculate the price multiple
2. Identify comparison assets → calculate benchmark (median or mean)
3. Apply benchmark to fundamental → estimate value (adjust for differences in fundamentals)
4. Assess whether differences from benchmark are explained by fundamental differences

---

### Benchmark Choices for P/E (from closest to most distant match)

| Benchmark | Notes |
|-----------|-------|
| **Peer group (same industry/subindustry)** | Most common; most similar business mix |
| **Industry/sector median** | Broader; helps assess if peer group itself is mispriced |
| **Broad equity index (e.g., S&P 500)** | Widest context; use median (not mean) to avoid market-cap distortion |
| **Own historical P/E** | Assumes reversion to historical average; sensitive to structural changes |

> **Median preferred over mean** — avoids distortion from outliers (e.g., Charter at 70.67× in telecom example).

---

### Fundamental Adjustments to Benchmark P/E

All else equal:
- **Higher expected growth** → **justify higher P/E** than benchmark
- **Higher risk** → **justify lower P/E** than benchmark
- **Lower risk + superior profitability** → warrant upward adjustment to benchmark P/E

---

### PEG Ratio

$$\boxed{PEG = \frac{P/E}{\text{Expected EPS growth rate (\%)}}}$$

- **Lower PEG = more attractive** (paying less per unit of growth)
- PEG < 1 sometimes cited as undervaluation signal
- Compare PEG to **industry and market median**, not in isolation

**Three limitations of PEG:**
1. Assumes **linear** P/E–growth relationship (theory says non-linear)
2. **Ignores risk** — a higher-risk company deserves a lower P/E regardless of growth
3. **Ignores growth duration** — short-term forecast may not capture long-run differences

---

### Peer Group Example (Telecom)

**Verizon vs. peer group:**
- Peer median trailing P/E = **15.03×**
- Verizon trailing P/E = **15.03×** → **fairly valued** relative to peers

**Relatively undervalued candidates**: Stocks with P/E below median (AT&T at 13.20×, China Telecom at 13.14×, CenturyLink NM)

**After adding fundamentals (PEG, beta):**
- **CenturyLink**: highest 5-year growth (8.52%) + lowest PEG (1.04) → most attractive
- **AT&T/Verizon**: low growth + high PEG (4.78–5.11) → appear expensive on growth-adjusted basis
- **Charter**: very high P/E but justified by highest growth (45.3%); high beta reflects uncertainty

**AT&T intrinsic value (adjusted):**
- Peer median forward P/E = 11.99 → adjusted upward to **13.0** (lower risk, superior profitability)
- $13.0 × $3.63 (consensus EPS) = **$47.19** vs. market price $33.98 → **undervalued**

---

### Market-Level P/E Comparisons

**Historical P/E comparison** (Stock vs. S&P 500):
- Stock C historically traded at **premium** to S&P 500 but now trades at **discount** → **relatively undervalued**
- Stock A historically traded at **20% discount** to S&P 500 — its current discount is consistent with history → **fairly valued**
- **Key assumption**: stable underlying economic relationships (past is relevant for future)

---

### The Fed Model

$$\text{Market overvalued when:} \quad \frac{E_1}{P_0} < \text{10-year T-bond yield}$$

$$\text{Justified P/E} = \frac{1}{\text{10-year T-bond yield}}$$

**Intuition**: When risk-free bonds yield more than stocks, stocks are unattractive.

**Limitations:**
- Ignores the **equity risk premium**
- Ignores **expected earnings growth**
- Inadequately reflects **inflation effects**
- Not linear — breaks down at **very low interest rates**
- Empirically, simple P/E often outperforms Fed model in predicting returns

---

### The Yardeni Model (extension of Fed model)

$$CEY = CBY - b \times LTEG + \text{Residual}$$

$$\text{Justified P/E} = \frac{1}{CBY - b \times LTEG}$$

Where:
- $CEY$ = current earnings yield (E/P) on market index
- $CBY$ = Moody's A-rated corporate bond yield
- $LTEG$ = consensus 5-year EPS growth forecast
- $b$ = weight market places on 5-year growth (historically ~0.10)

**Improvement over Fed model**: Incorporates expected growth. Higher LTEG → higher justified P/E.

---

### Own Historical P/E

$$\text{Justified price} = \text{Historical average P/E} \times \text{Normalized EPS}$$

**Cautions:**
- Company's **business mix or leverage has changed** substantially → historical P/E not representative
- **Different inflation environments** → historical comparisons may be misleading
- **Interest rate environment changes** → structural shift in P/E levels

---

### P/E and Inflation — Cross-Country Analysis

$$\text{Justified P/E} = \frac{1}{\rho + (1-\lambda)I}$$

Where:
- $\rho$ = real required return
- $\lambda$ = cost pass-through rate (0 = no pass-through; 1 = full pass-through)
- $I$ = inflation rate

| Scenario | Effect on P/E |
|----------|--------------|
| $\lambda = 1$ (full pass-through) | P/E = $1/\rho$ — not affected by inflation |
| $\lambda < 1$ (partial pass-through) | **Higher inflation → lower justified P/E** |
| Equal inflation, $\lambda_A > \lambda_B$ | Company A has **higher justified P/E** |

---

### P/E as Terminal Value in Multistage DDM

**Two approaches:**

| Approach | Formula | Strength | Weakness |
|----------|---------|---------|---------|
| **Fundamentals-based** | Gordon growth model (trailing or leading P/E) | Theoretically grounded | Sensitive to assumptions ($r$, $b$, $g$) |
| **Comparables-based** | Industry/sector median P/E × $E_n$ | Market-grounded; less assumption-dependent | Inherits any mispricing in comparables |

$$V_n = \text{Terminal P/E} \times E_n \quad \text{(trailing)}$$
$$V_n = \text{Terminal P/E} \times E_{n+1} \quad \text{(leading)}$$

**Worked example (oil exploration company, Example 17):**
- Comparables terminal value: $14.3 \times \$3.00 = \mathbf{\$42.90}$
- Gordon growth model terminal value:
  - $g = 0.55 \times 13\% = 7.15\%$
  - $D_3 = \$3.00 \times 0.45 = \$1.35$
  - $V_3 = 1.35 \times 1.0715/(0.10 - 0.0715) = \mathbf{\$50.76}$
  - Gordon model gives **18.3% higher** terminal value than comparables

---

### Exam Tips

- **Median > mean** for peer group benchmarks — avoids outlier distortion
- **PEG**: lower = better; but ignores risk and growth duration — always test against industry median
- **NM**: report negative P/Es as "not meaningful" — never use in rankings
- **Fed model**: conceptually flawed — ignores ERP and growth; use as one indicator only
- **Yardeni model**: adds growth to Fed model; higher growth → higher justified P/E
- **Own historical P/E**: valid only if business/leverage/inflation environment is stable
- **Inflation and P/E**: less than full cost pass-through + higher inflation = **lower justified P/E**
- **Terminal P/E**: fundamentals-based or comparables-based — both valid, different trade-offs
- **AT&T example**: fundamental adjustment to benchmark P/E (upward for lower risk) is legitimate analytical judgment — but be able to justify the specific value chosen