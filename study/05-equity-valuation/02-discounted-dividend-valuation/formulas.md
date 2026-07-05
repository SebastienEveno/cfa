# Formulas: Discounted Dividend Valuation (CFA Level II)

---

## 1. General DCF Framework

$$V_0 = \sum_{t=1}^{\infty} \frac{CF_t}{(1+r)^t}$$

### Free Cash Flow Definitions

$$FCFF = CFO - CapEx$$

$$FCFE = FCFF - \text{Net debt payments}$$

### Residual Income

$$RI_t = E_t - r \times BV_{t-1}$$

$$V_0 = BV_0 + \sum_{t=1}^{\infty} \frac{RI_t}{(1+r)^t}$$

**Clean surplus relation:**

$$BV_t = BV_{t-1} + E_t - D_t$$

---

## 2. Dividend Discount Model (DDM)

### Single Holding Period

$$V_0 = \frac{D_1 + P_1}{1+r}$$

$$r = \frac{D_1 + P_1}{P_0} - 1$$

### Multi-Period (n-period)

$$V_0 = \sum_{t=1}^{n} \frac{D_t}{(1+r)^t} + \frac{P_n}{(1+r)^n}$$

### General DDM (infinite horizon)

$$V_0 = \sum_{t=1}^{\infty} \frac{D_t}{(1+r)^t}$$

---

## 3. Gordon Growth Model (Constant Growth DDM)

$$V_0 = \frac{D_1}{r - g} = \frac{D_0(1+g)}{r-g}$$

**Requirements:** $r > g$; constant, perpetual growth rate.

### Perpetual Preferred Stock ($g = 0$)

$$V_0 = \frac{D}{r}$$

### Required Return

$$r = \frac{D_1}{P_0} + g$$

| Component | Meaning |
|-----------|---------|
| $D_1/P_0$ | Dividend yield |
| $g$ | Capital gains yield |

### Implied Growth Rate

$$g = r - \frac{D_1}{P_0}$$

### Nominal GDP Growth (benchmark for $g$)

$$\text{Nominal GDP growth} \approx \text{Real GDP growth} + \text{Inflation}$$

---

## 4. PVGO and P/E Decomposition

### Present Value of Growth Opportunities

$$V_0 = \frac{E_1}{r} + PVGO$$

$$PVGO = P_0 - \frac{E_1}{r}$$

| Term | Meaning |
|------|---------|
| $E_1/r$ | No-growth value (100% payout perpetuity) |
| $PVGO$ | Value of future profitable reinvestment |

### P/E Decomposition

$$\frac{P_0}{E_1} = \frac{1}{r} + \frac{PVGO}{E_1}$$

- No-growth P/E $= 1/r$

### Justified Leading P/E

$$\frac{P_0}{E_1} = \frac{1-b}{r-g}$$

### Justified Trailing P/E

$$\frac{P_0}{E_0} = \frac{(1-b)(1+g)}{r-g}$$

---

## 5. Two-Stage DDM

$$V_0 = \sum_{t=1}^{n} \frac{D_0(1+g_S)^t}{(1+r)^t} + \frac{V_n}{(1+r)^n}$$

$$V_n = \frac{D_0(1+g_S)^n(1+g_L)}{r - g_L}$$

### Non-Dividend-Paying Company (dividends start at $t = n+1$)

$$V_0 = \frac{D_{n+1}}{(r-g)(1+r)^n}$$

### Terminal Value via P/E Multiple

$$V_n = \text{Trailing P/E} \times EPS_n \qquad \text{where } EPS_n = \frac{D_n}{\text{payout ratio}}$$

---

## 6. H-Model

Growth declines **linearly** from $g_S$ to $g_L$ over $2H$ years.

$$V_0 = \frac{D_0(1+g_L)}{r-g_L} + \frac{D_0 \cdot H \cdot (g_S-g_L)}{r-g_L}$$

| Component | Meaning |
|-----------|---------|
| $\dfrac{D_0(1+g_L)}{r-g_L}$ | Base value — as if growing at $g_L$ forever |
| $\dfrac{D_0 \cdot H \cdot (g_S-g_L)}{r-g_L}$ | Premium from supernormal growth period |
| $H$ | Half-life: high-growth period $= 2H$ years |

### Required Return from H-Model

$$r = \frac{D_0}{P_0}\left[(1+g_L) + H(g_S-g_L)\right] + g_L$$

Reduces to Gordon growth model when $g_S = g_L$.

---

## 7. Three-Stage DDM (Version 2 — Linear Decline in Stage 2)

$$V_0 = \sum_{t=1}^{n} \frac{D_t}{(1+r)^t} + \frac{V_n^{H\text{-model}}}{(1+r)^n}$$

Where $V_n^{H\text{-model}}$ applies the H-model at the start of the transition stage.

---

## 8. Sustainable Growth Rate

$$g = b \times ROE$$

Where $b = 1 - \text{dividend payout ratio}$ (earnings retention rate).

### DuPont Decomposition of ROE

$$ROE = \underbrace{\frac{Net\ Income}{Sales}}_{\text{Profit margin}} \times \underbrace{\frac{Sales}{Total\ Assets}}_{\text{Asset turnover}} \times \underbrace{\frac{Total\ Assets}{Equity}}_{\text{Equity multiplier}}$$

### PRAT Model

$$g = b \times \underbrace{PM}_{\text{Profit margin}} \times \underbrace{AT}_{\text{Asset turnover}} \times \underbrace{Lev}_{\text{Leverage}}$$

| Driver | Type |
|--------|------|
| $b$ — Retention rate | Financial policy |
| $PM$ — Profit margin | Operating/competitive |
| $AT$ — Asset turnover | Operating efficiency |
| $Lev$ — Equity multiplier | Financial policy |