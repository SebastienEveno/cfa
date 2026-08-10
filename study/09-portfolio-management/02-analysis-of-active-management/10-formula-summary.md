## Formula Summary: Analysis of Active Portfolio Management (CFA Level II — Portfolio Management)

---

### 1. Value Added

$$\boxed{R_A = R_P - R_B}$$

**Benchmark and portfolio returns:**
$$R_B = \sum_{i=1}^{N} w_{B,i} R_i \qquad R_P = \sum_{i=1}^{N} w_{P,i} R_i$$

**Active weight:**
$$\boxed{\Delta w_i = w_{P,i} - w_{B,i}}$$

**Value added as active weights × active returns:**
$$\boxed{R_A = \sum_{i=1}^{N} \Delta w_i \times R_{A,i}} \quad \text{where } R_{A,i} = R_i - R_B$$

**Decomposition — asset allocation + security selection (M asset classes):**
$$\boxed{R_A = \underbrace{\sum_{j=1}^{M} \Delta w_j R_{B,j}}_{\text{Asset allocation}} + \underbrace{\sum_{j=1}^{M} w_{P,j} R_{A,j}}_{\text{Security selection}}}$$

> Zero active weight → zero contribution to value added, regardless of the security's return. Active management is zero-sum (before costs) only when the benchmark equals the total market.

---

### 2. Sharpe Ratio and Information Ratio

**Sharpe ratio (absolute measure):**
$$\boxed{SR_P = \frac{R_P - R_F}{\sigma_P}}$$

**Information ratio (relative measure):**
$$\boxed{IR = \frac{R_A}{\sigma(R_A)} = \frac{R_P - R_B}{\sigma(R_P - R_B)}}$$

**Sharpe ratio is unaffected by adding cash/leverage:**
$$SR_C = \frac{w_P(R_P - R_F)}{w_P \sigma_P} = SR_P$$

**Information ratio is unaffected by scaling all active weights by a constant $c$:**
$$IR_C = \frac{cR_A}{c\sigma_A} = IR$$

**Active share:**
$$\boxed{\text{Active share} = \frac{1}{2}\sum_i |\Delta w_i|}$$

> Sharpe ratio IS changed by leverage on the underlying risky portfolio's composition, but not by blending with cash. Information ratio IS reduced by blending with cash (dilutes both active return and active risk), but unaffected by uniform scaling of active weights.

---

### 3. The Basic Fundamental Law

**Optimal Sharpe ratio combination (benchmark + active portfolio):**
$$\boxed{SR_P^2 = SR_B^2 + IR^2}$$

**Optimal active risk:**
$$\boxed{\sigma_A^* = \left(\frac{IR}{SR_B}\right) \times \sigma_B}$$

**Total portfolio risk decomposition:**
$$\boxed{\sigma_P^2 = \sigma_B^2 + \sigma_A^2}$$

**Benchmark weight needed to reduce active risk to a target level:**
$$\text{Benchmark weight} = 1 - \frac{\sigma_A^{target}}{\sigma_A^{current}}$$

> The active portfolio with the highest IR also produces the highest achievable Sharpe ratio when combined optimally with the benchmark. As IR → 0, optimal active risk → 0 (hold the passive benchmark).

---

### 4. Active Returns, IC, and Optimal Weights

**Active security return:**
$$\boxed{R_{Ai} = R_i - R_B}$$

**Grinold scaling rule (forecast from standardized score):**
$$\boxed{\mu_i = IC \times \sigma_i \times S_i}$$

**Information coefficient (signal quality):**
$$\boxed{IC = \rho(\mu_i, R_{Ai})}$$

**Optimal active weight (uncorrelated active returns):**
$$\boxed{\Delta w_i^* = \frac{IC \times S_i \times \sigma_A}{\sigma_i \times \sqrt{BR}}}$$

---

### 5. The Fundamental Law of Active Management

**Basic (unconstrained) fundamental law:**
$$\boxed{E(R_A)^* = IC \times \sqrt{BR} \times \sigma_A}$$

$$\boxed{IR^* = IC \times \sqrt{BR}}$$

> Value added = **Skill (IC) × Breadth (√BR) × Aggressiveness ($\sigma_A$)**. Unconstrained IR is invariant to the level of active risk (scaling active weights proportionally doesn't change IR).

---

### 6. The Full (Constrained) Fundamental Law

**Transfer coefficient (implementation quality):**
$$\boxed{TC = \rho\left(\frac{\mu_i}{\sigma_i}, \, \Delta w_i \sigma_i\right)}$$

**Expanded fundamental law:**
$$\boxed{E(R_A) = TC \times IC \times \sqrt{BR} \times \sigma_A}$$

$$\boxed{IR = TC \times IC \times \sqrt{BR}}$$

**Optimal active risk under constraints:**
$$\boxed{\sigma_A^* = TC \times \left(\frac{IR^*}{SR_B}\right) \times \sigma_B}$$

**Maximum achievable constrained Sharpe ratio:**
$$\boxed{SR_P^2 = SR_B^2 + TC^2 \times IR^{*2}}$$

> $TC = 1.0$ = unconstrained (no binding constraints); $TC = 0$ = constraints fully negate forecasting value → optimal active risk = 0. Constrained IR **decreases** as active risk (aggressiveness) increases, unlike the unconstrained case, because position limits become more binding.

---

### 7. Ex Post (Realized) Performance

**Conditional expected value added using realized IC:**
$$\boxed{E(R_A \mid IC_R) = TC \times IC_R \times \sqrt{BR} \times \sigma_A}$$

**Realized active return decomposition:**
$$\boxed{R_A = E(R_A \mid IC_R) + \text{Noise}}$$

**Variance decomposition — skill vs. constraint-induced noise:**
$$\boxed{\text{Proportion from IC variation} = TC^2 \qquad \text{Proportion from noise} = 1 - TC^2}$$

---

### 8. Breadth (BR)

**Breadth rule of thumb (uniform pairwise correlation $\rho$ across $N$ decisions):**
$$\boxed{BR \approx \frac{N}{1 + (N-1)\rho}}$$

**Time-series information coefficient (dichotomous correct/incorrect calls):**
$$\boxed{IC_{\text{time-series}} = \%\text{Correct} - \%\text{Incorrect}}$$

**Transfer coefficient via normal CDF (continuous scores, long-only constraint):**
$$TC = \Phi(S_{upper}) - \Phi(S_{lower})$$

> Positive correlation among decisions → $BR < N$ (fewer truly independent bets). Negative correlation → $BR > N$, potentially far above $N$ for near-arbitrage strategies. More frequent rebalancing raises breadth only if successive decisions are genuinely independent over time.

---

### 9. Practical Limitations — Skill Uncertainty

**Strategy risk decomposition (Qian and Hua):**
$$\boxed{\sigma_A = \sqrt{\sigma_{RM}^2 + \sigma_{IC}^2}}$$

Where $\sigma_{RM}$ = risk-model-predicted tracking risk, $\sigma_{IC}$ = additional strategy risk from uncertainty in the level of skill itself.

> Accounting for IC uncertainty always reduces expected value added: realized IRs for stock selection strategies are typically only **45%–91%** of naive fundamental law estimates.

---

### Quick Reference — All Formulas

| Measure | Formula |
|---------|---------|
| Value added | $R_P - R_B$ |
| Active weight | $w_{P,i} - w_{B,i}$ |
| Value added (decomposed) | $\sum \Delta w_i R_{A,i}$ |
| Asset allocation contribution | $\sum \Delta w_j R_{B,j}$ |
| Security selection contribution | $\sum w_{P,j} R_{A,j}$ |
| Sharpe ratio | $(R_P-R_F)/\sigma_P$ |
| Information ratio | $(R_P-R_B)/\sigma(R_P-R_B)$ |
| Active share | $\frac{1}{2}\sum \lvert \Delta w_i\rvert$ |
| Fundamental law (basic) | $SR_P^2 = SR_B^2 + IR^2$ |
| Optimal active risk | $\sigma_A^* = (IR/SR_B)\times \sigma_B$ |
| Total risk decomposition | $\sigma_P^2 = \sigma_B^2 + \sigma_A^2$ |
| Active return | $R_{Ai} = R_i - R_B$ |
| Grinold scaling rule | $\mu_i = IC \times \sigma_i \times S_i$ |
| Information coefficient | $\rho(\mu_i, R_{Ai})$ |
| Optimal active weight | $\Delta w_i^* = (IC \times S_i \times \sigma_A)/(\sigma_i\sqrt{BR})$ |
| Basic fundamental law | $E(R_A)^* = IC\times\sqrt{BR}\times\sigma_A$; $IR^*=IC\times\sqrt{BR}$ |
| Transfer coefficient | $\rho(\mu_i/\sigma_i,\, \Delta w_i\sigma_i)$ |
| Full fundamental law | $E(R_A)=TC\times IC\times\sqrt{BR}\times\sigma_A$; $IR=TC\times IC\times\sqrt{BR}$ |
| Optimal active risk (constrained) | $\sigma_A^*=TC\times(IR^*/SR_B)\times\sigma_B$ |
| Max constrained Sharpe ratio | $SR_P^2=SR_B^2+TC^2\times IR^{*2}$ |
| Ex post conditional value added | $TC\times IC_R\times\sqrt{BR}\times\sigma_A$ |
| Variance from skill vs. noise | $TC^2$ vs. $1-TC^2$ |
| Breadth rule of thumb | $BR \approx N/[1+(N-1)\rho]$ |
| Time-series IC | %Correct − %Incorrect |
| Strategy risk decomposition | $\sigma_A=\sqrt{\sigma_{RM}^2+\sigma_{IC}^2}$ |

---

### Exam Tips

- **$R_A = \sum \Delta w_i \times R_{A,i}$** — zero active weight contributes nothing, regardless of the security's own return
- **Sharpe ratio unaffected by cash/leverage**; **information ratio unaffected by uniformly scaling active weights** but IS diluted by blending with cash — the key distinguishing properties between the two ratios
- **$SR_P^2 = SR_B^2 + IR^2$** — the active portfolio with the highest IR produces the highest achievable combined Sharpe ratio; don't combine negative-IR funds with the benchmark
- **$IR = IC \times \sqrt{BR}$** is THE central equation: value added = skill × breadth × aggressiveness
- **Full fundamental law adds TC**: $IR = TC \times IC \times \sqrt{BR}$ — constraints (long-only, position limits, turnover) always reduce or leave unchanged the achievable IR
- **Unconstrained IR is invariant to active risk level; constrained IR decreases as aggressiveness increases** — position limits bind harder as target active risk rises
- **Breadth ≠ number of assets** when decisions are correlated: positive correlation → $BR<N$; negative correlation → $BR>N$ (near-arbitrage strategies can have $BR \gg N$ from just 2 assets)
- **More frequent rebalancing only raises breadth if decisions are truly independent over time** — a slowly-changing signal repeated monthly doesn't create new independent bets
- **Skill (IC) uncertainty always reduces realized IR below the naive fundamental law prediction** — typically to 45%–91% of the theoretical estimate
- **Ex ante IC must be positive** for active management to make sense; **ex post (realized) IC** can be positive or negative, decomposed into skill (TC²) vs. noise (1−TC²)
