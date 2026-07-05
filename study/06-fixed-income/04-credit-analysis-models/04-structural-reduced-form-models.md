## Summary: Structural and Reduced-Form Credit Models (CFA Level II — Fixed Income)

---

### Two Categories of Credit Risk Models

| Feature | Structural Models | Reduced-Form Models |
|---------|------------------|---------------------|
| **Origin** | 1970s (Black, Scholes, Merton) | 1990s (Jarrow & Turnbull; Duffie & Singleton) |
| **Default treatment** | **Endogenous** — default is explained by asset value falling below debt liabilities | **Exogenous** — default arrives randomly as a surprise |
| **Focus** | **Why** default occurs | **When** default occurs |
| **Key variable** | Company asset value vs. default barrier | Default intensity (hazard rate) |
| **Inputs** | Company balance sheet (assets, liabilities, equity) | Observable market/financial variables |
| **Also called** | Company-value models | Intensity-based / stochastic default rate models |

---

### Structural Models — Core Concepts

**Fundamental insight** (Merton 1974): A company defaults when **asset value falls below total liabilities** — and the probability of this happening has the mathematical features of an **option**.

**Default probability increases with:**
- Higher **variance** of future asset value
- Longer **time horizon**
- Greater **financial leverage** (higher liabilities → higher default barrier)

**Less debt** → lower default barrier → lower default probability

---

### Structural Model — Balance Sheet Option Interpretation

**Setup**: Simplify debt as a single zero-coupon bond maturing at time T with face value K (= default barrier)

**Three key equations:**

$$\boxed{D(T) + E(T) = A(T)} \quad \text{(Balance sheet identity)}$$

$$\boxed{E(T) = \max[A(T) - K, 0]} \quad \text{(Equity = long call option on assets)}$$

$$\boxed{D(T) = A(T) - \max[A(T) - K, 0]} \quad \text{(Debt = assets minus call option)}$$

**Interpretation — Call option view:**

| Scenario | Equity E(T) | Debt D(T) |
|----------|------------|-----------|
| $A(T) > K$ (no default) | $A(T) - K$ (in the money) | $K$ (fully paid) |
| $A(T) < K$ (default) | $0$ (out of the money) | $A(T)$ (residual assets) |
| $A(T) = K$ | $0$ | $K$ |

**Standard interpretation:**
- **Shareholders**: own a **long call option** on company assets with strike = debt face value K
- **Debtholders**: own the assets and have **written** a call option to shareholders; call premium = priority of claim in default
- **Limited liability**: built into the model — equity cannot go negative (like an option)

---

### Equivalent Put Option Interpretation (Example 5)

**Alternative view** (Ms. Feely's "embedded put option"):
- **Shareholders**: own (A(T) − K) as residual net asset value, **plus** a long put option at strike K (limited liability protection)
- **Debtholders**: own a "risk-free" bond worth K, **short** the put option sold to shareholders

$$\boxed{E(T) = A(T) - K + \max[K - A(T), 0]}$$
$$\boxed{D(T) = K - \max[K - A(T), 0]}$$

**Verification:**

| Scenario | E(T) | D(T) |
|----------|------|------|
| $A(T) > K$ (put out of money) | $A(T) - K + 0 = A(T) - K$ ✅ | $K - 0 = K$ ✅ |
| $A(T) < K$ (put in money) | $A(T) - K + [K-A(T)] = 0$ ✅ | $K - [K-A(T)] = A(T)$ ✅ |

> **Both interpretations yield identical payoffs** — they're mathematically equivalent views of the same economic relationship.

**Economic meaning**: Limited liability = the **value of the put option** that shareholders "purchase" from debtholders (paying through higher required debt yield).

---

### Practical Implementation — Moody's KMV Model

Building on the Black–Scholes–Merton framework, Moody's KMV Corporation uses:
- **Historical equity price data** → estimate asset value volatility
- **Option pricing methodology** → estimate probability of default and LGD
- Applied by credit rating agencies and financial consultancies for real-world credit risk measurement

---

### Structural Models — Strengths and Weaknesses

| Strengths | Weaknesses |
|-----------|-----------|
| Provides **economic insight** into why default occurs | Requires knowledge of **company asset value and volatility** (often unobservable) |
| Links credit risk to **option pricing theory** | Company assets **do not trade** — violates Black-Scholes assumption |
| Useful for **internal risk management** and credit ratings | **Hidden debt** (Enron, WorldCom, Lehman) makes measuring the default barrier unreliable |
| Connects balance sheet structure to default probability | **Data limitations** reduce practical applicability |

---

### Reduced-Form Models — Strengths and Weaknesses

| Strengths | Weaknesses |
|-----------|-----------|
| Inputs are **observable market and financial variables** | Does **not explain** the economic reasons for default |
| Uses **regression analysis** on leverage, profitability, macroeconomic variables | Assumes default is a **complete surprise** — inconsistent with reality |
| **Reflects business cycle** directly in credit risk estimates | In practice, default is rarely a surprise — issuers typically downgraded multiple times first (e.g., RadioShack) |
| Avoids the need to measure unobservable asset values | |
| Good for **valuing risky debt securities and credit derivatives** | |

---

### Default in Reduced-Form Models

**Default time** is modeled using a **Poisson stochastic process**:
$$\text{Key parameter: Default intensity (hazard rate)} = \text{POD over the next time increment}$$

**Inputs for hazard rate estimation** (via regression):
- **Company-specific**: leverage ratio, net income/assets, cash/assets
- **Macroeconomic**: unemployment rate, GDP growth, stock market volatility

---

### Which Model to Use?

| Use Case | Preferred Model |
|----------|----------------|
| **Internal risk management** (company managers, commercial banks) | Structural — requires internal balance sheet knowledge |
| **Credit ratings** (rating agencies) | Structural — have access to detailed company information |
| **Valuing risky bonds and credit derivatives** | Reduced-form — uses publicly observable market data |

---

### Exam Tips

- **Structural models**: default is **endogenous** (asset value drops below barrier) — explains **why**
- **Reduced-form models**: default is **exogenous** (random arrival) — models **when** (Poisson process)
- **Equity = call option** on company assets (strike = debt face value K) — this is the core structural model insight
- **Debt = assets minus call option** = debtholders own assets + short a call to shareholders
- **Both call and put interpretations** give identical payoffs — know both for the exam
- **Limited liability** is implicit: equity ≥ 0 always (like an option)
- **Higher asset volatility** → higher option value → higher equity value BUT also higher default risk
- **Moody's KMV**: uses equity price history to estimate volatility for structural credit risk models
- **Structural model weakness**: hidden liabilities (Enron, Lehman) → can't accurately measure default barrier when you need it most
- **Reduced-form model weakness**: defaults rarely actually arrive as "surprises" — contradicts the model's assumption