---
layout: page
title: "Formula Summary: Pricing and Valuation of Forward Commitments (CFA Level II — Derivatives)"
permalink: /study/07-derivatives/01-valuation-forward-commitments/08-formula-summary/
prev: /cfa/study/07-derivatives/01-valuation-forward-commitments/07-pricing-valuing-equity-swap-contracts/
---
# Formula Summary: Pricing and Valuation of Forward Commitments (CFA Level II — Derivatives)

---

## 1. Forward Contract Basics

| Scenario | Formula |
|----------|---------|
| Value at initiation | $V_0 = 0$ |
| Long forward at expiration | $V_T = S_T - F_0$ |
| Short forward at expiration | $-V_T = F_0 - S_T$ |
| Convergence property | $F_T = f_T = S_T$ |
| Futures value (intraday, long) | $v_t = N_f \times (f_t - f_{t-1})$ |
| Futures value after mark-to-market | $v_t = 0$ |

---

## 2. Carry Arbitrage Model — Forward Pricing

### No Underlying Cash Flows

$$\boxed{F_0 = S_0(1+r)^T}$$

### With Carry Costs and Benefits (General)

$$\boxed{F_0 = FV(S_0 + CC_0 - CB_0)}$$

| Component | Effect on $F_0$ | Examples |
|-----------|-----------------|---------|
| Financing cost ($r$) | Increases | Always present |
| Storage / insurance ($CC_0$) | Increases | Commodities |
| Dividends / coupons ($CB_0$) | Decreases | Equities, bonds |

### Dividend-Paying Stock

$$\boxed{F_0 = FV(S_0 - PV(D)) = (S_0 - PV(D))(1+r)^T}$$

$$FV(D) = D(1+r)^{T-t_D} \quad (t_D = \text{dividend payment date})$$

### Continuous Compounding (Stock Index)

$$\boxed{F_0 = S_0 e^{(r_c - \delta_c)T}}$$

---

## 3. Forward Contract Valuation (During Life)

$$\boxed{V_t(\text{long}) = PV[F_t - F_0] = \frac{F_t - F_0}{(1+r)^{T-t}}}$$

$$\boxed{V_t(\text{long}) = S_t - \frac{F_0}{(1+r)^{T-t}}}$$

$$\boxed{-V_t(\text{short}) = \frac{F_0 - F_t}{(1+r)^{T-t}}}$$

### With Carry Costs/Benefits

$$F_t = FV(S_t + CC_t - CB_t) \qquad V_t = PV[F_t - F_0]$$

| Situation | Forward Price $F_0$ | Forward Value $V_t$ (Long) |
|-----------|---------------------|---------------------------|
| No cash flows | $S_0(1+r)^T$ | $S_t - F_0/(1+r)^{T-t}$ |
| Discrete dividends | $FV(S_0 - PV(D))$ | $PV[F_t - F_0]$ |
| Carry costs/benefits | $FV(S_0 + CC_0 - CB_0)$ | $PV[F_t - F_0]$ |
| Continuous compounding | $S_0 e^{(r_c-\delta_c)T}$ | $S_t e^{-\delta_c(T-t)} - F_0 e^{-r_c(T-t)}$ |

---

## 4. Fixed-Income Forward / Futures

### Full (Dirty) Price

$$\boxed{S_0 = B_0 + AI_0}$$

$$AI = \frac{NAD}{NTD} \times \frac{C}{n}$$

### Adjusted Futures Price (Carry Arbitrage)

$$\boxed{F_0 = FV[B_0 + AI_0 - PVCI] - AI_T}$$

### Quoted Futures Price

$$\boxed{Q_0 = \frac{1}{CF} \times \{FV[B_0 + AI_0] - AI_T - FVCI\}}$$

$$F_0 = Q_0 \times CF$$

### Forward Value

$$\boxed{V_t = \frac{F_t - F_0}{(1+r)^{T-t}}}$$

---

## 5. Forward Rate Agreements (FRAs)

### MRR Terminal Amount

$$\boxed{TA = NA \times [1 + L_m \cdot t_m]} \quad t_m = m/360$$

### FRA Pricing (No-Arbitrage Forward Rate)

$$\boxed{FRA_0 = \frac{\left[\dfrac{1 + L_T t_T}{1 + L_h t_h}\right] - 1}{t_m}}$$

Where $t_h = h/360$, $t_T = T/360$, $t_m = m/360$

### FRA Settlement (at expiration, advanced)

$$\boxed{\text{Settlement}_{\text{long}} = NA \times \frac{(L_m - FRA_0) \times t_m}{1 + D_m t_m}}$$

$$\boxed{\text{Settlement}_{\text{short}} = NA \times \frac{(FRA_0 - L_m) \times t_m}{1 + D_m t_m}}$$

### FRA Valuation (at time g)

$$\boxed{V_g(\text{long}) = NA \times \frac{(FRA_g - FRA_0) \times t_m}{1 + D_{T-g} \times t_{T-g}}}$$

$$\boxed{-V_g(\text{short}) = NA \times \frac{(FRA_0 - FRA_g) \times t_m}{1 + D_{T-g} \times t_{T-g}}}$$

| Feature | Formula |
|---------|---------|
| **Long FRA** | Fixed-rate payer; profits when MRR ↑ |
| **Short FRA** | Fixed-rate receiver; profits when MRR ↓ |
| **Pricing** | $FRA_0 = [(1+L_T t_T)/(1+L_h t_h)-1]/t_m$ |
| **Settlement** | Advanced set, advanced settled (at Time h) |

---

## 6. Interest Rate Swaps

### PV Factor

$$\boxed{PV_i(1) = \frac{1}{1 + R_{spot,i} \times t_i}}$$

### Fixed Swap Rate (Pricing)

$$\boxed{r_{FIX} = \frac{1 - PV_n(1)}{\displaystyle\sum_{i=1}^{n} PV_i(1)} \times \frac{1}{AP}}$$

### Cash Flow Formulas

$$\text{Floating leg: } S_i = AP_{FLT} \times r_{FLT,i}$$

$$\text{Fixed leg: } FS = AP_{FIX} \times r_{FIX}$$

$$\text{Net (receive-fixed): } FS - S_i = AP \times (r_{FIX} - r_{FLT,i})$$

$$\text{Net (pay-fixed): } S_i - FS = AP \times (r_{FLT,i} - r_{FIX})$$

### Swap Valuation (at time t)

$$\boxed{V_{swap,t}(\text{receive-fixed}) = NA \times (FS_0 - FS_t) \times \sum_{i=1}^{n} PV_i}$$

$$\boxed{-V_{swap,t}(\text{pay-fixed}) = NA \times (FS_t - FS_0) \times \sum_{i=1}^{n} PV_i}$$

### Replication via Bonds

| Swap Position | Replication |
|---------------|-------------|
| Receive-fixed | Long fixed bond + Short floating bond |
| Pay-fixed | Long floating bond + Short fixed bond |

| Task | Formula |
|------|---------|
| PV factor | $PV_i = 1/[1 + R_{spot,i} \times t_i]$ |
| Fixed swap rate | $r_{FIX} = [(1-PV_n)/\sum PV_i] \times (1/AP)$ |
| Receive-fixed value | $NA \times (FS_0 - FS_t) \times \sum PV_i$ |
| Pay-fixed value | $NA \times (FS_t - FS_0) \times \sum PV_i$ |
| Net payment (receive-fixed) | $AP \times (r_{FIX} - r_{FLT,i}) \times NA$ |
| Net payment (pay-fixed) | $AP \times (r_{FLT,i} - r_{FIX}) \times NA$ |

---

## 7. Currency Swaps

### Notional Amounts

$$\boxed{NA_a = S_0 \times NA_b}$$

### Fixed Swap Rates (one per currency)

$$\boxed{r_{FIX,a} = \frac{1 - PV_{n,a}(1)}{\displaystyle\sum_{i=1}^{n} PV_{i,a}(1)} \times \frac{1}{AP}}$$

$$\boxed{r_{FIX,b} = \frac{1 - PV_{n,b}(1)}{\displaystyle\sum_{i=1}^{n} PV_{i,b}(1)} \times \frac{1}{AP}}$$

### Periodic Fixed Payment

$$FS = NA \times AP \times r_{FIX}$$

### Swap Valuation (receive currency a)

$$\boxed{V_{CS} = NA_a \left[AP \cdot r_{FIX,a} \sum PV_{i,a} + PV_{n,a}\right] - S_t \cdot NA_b \left[AP \cdot r_{FIX,b} \sum PV_{i,b} + PV_{n,b}\right]}$$

$$V_{CS}(\text{receive currency b}) = -V_{CS}$$

| Task | Formula |
|------|---------|
| Notional relationship | $NA_a = S_0 \times NA_b$ |
| Fixed rate (each currency) | $r_{FIX} = [(1-PV_n)/\sum PV_i] \times (1/AP)$ |
| Periodic fixed payment | $FS = NA \times AP \times r_{FIX}$ |
| Swap value (receive ccy a) | $V_{CS} = NA_a[AP \cdot r_a \sum PV_i + PV_n] - S_t \cdot NA_b[AP \cdot r_b \sum PV_i + PV_n]$ |
| Swap value (receive ccy b) | $-V_{CS}$ |

---

## 8. Equity Swaps

### Cash Flow Formulas

$$\text{Equity leg: } S_i = NA_E \times R_E$$

$$\text{Fixed leg: } FS = NA_E \times AP_{FIX} \times r_{FIX}$$

$$\text{Net (receive-equity, pay-fixed): } NA_E \times AP \times (R_E - r_{FIX})$$

> $R_E$ is a **periodic** (not annualized) return; $r_{FIX}$ is **annualized** — multiply by $AP$ to compare.

### Fixed Swap Rate (Pricing)

$$\boxed{r_{FIX} = \frac{1 - PV_n(1)}{\displaystyle\sum_{i=1}^{n} PV_i(1)} \times \frac{1}{AP}}$$

(Identical to interest rate swap pricing formula)

### Equity Swap Valuation (receive-fixed, pay-equity)

$$\boxed{V_{EQ,t} = V_{FIX}(C_0) - \frac{S_t}{S_{t-1}} \times NA_E - PV(Par - NA_E)}$$

Where $S_t/S_{t-1}$ = equity appreciation factor since last reset date.

| Task | Formula |
|------|---------|
| Net cash flow | $NA_E \times AP \times (R_E - r_{FIX})$ |
| Fixed swap rate | $r_{FIX} = (1-PV_n)/\sum PV_i \times (1/AP)$ |
| Equity swap value | $V_{FIX}(C_0) - (S_t/S_{t-1}) \times NA_E - PV(Par-NA_E)$ |

| Position | Benefits when |
|----------|--------------|
| Receive-equity, pay-fixed | Equity rises OR rates fall |
| Receive-fixed, pay-equity | Equity falls OR rates rise |

---

## Quick Reference — All Pricing Formulas

| Instrument | Pricing Formula |
|------------|----------------|
| Forward (no cash flows) | $F_0 = S_0(1+r)^T$ |
| Forward (discrete dividends) | $F_0 = (S_0 - PV(D))(1+r)^T$ |
| Forward (general carry) | $F_0 = FV(S_0 + CC_0 - CB_0)$ |
| Forward (continuous compounding) | $F_0 = S_0 e^{(r_c - \delta_c)T}$ |
| Fixed-income forward (adjusted) | $F_0 = FV[B_0 + AI_0 - PVCI] - AI_T$ |
| Fixed-income forward (quoted) | $Q_0 = F_0 / CF$ |
| FRA | $FRA_0 = [(1+L_T t_T)/(1+L_h t_h)-1]/t_m$ |
| Interest rate swap fixed rate | $r_{FIX} = (1-PV_n)/\sum PV_i \times (1/AP)$ |
| Currency swap fixed rates | Same formula applied per currency |
| Equity swap fixed rate | Same as interest rate swap |

## Quick Reference — All Valuation Formulas

| Instrument | Valuation Formula |
|------------|-------------------|
| Forward contract (long) | $V_t = S_t - F_0/(1+r)^{T-t}$ |
| Forward contract (general) | $V_t = PV[F_t - F_0]$ |
| Futures contract | $v_t = 0$ (resets daily after MTM) |
| Fixed-income forward | $V_t = (F_t - F_0)/(1+r)^{T-t}$ |
| FRA (long, at time g) | $V_g = NA \times (FRA_g - FRA_0) \times t_m / (1 + D_{T-g} t_{T-g})$ |
| Interest rate swap (receive-fixed) | $V_t = NA \times (FS_0 - FS_t) \times \sum PV_i$ |
| Interest rate swap (pay-fixed) | $-V_t = NA \times (FS_t - FS_0) \times \sum PV_i$ |
| Currency swap (receive ccy a) | $V_{CS} = NA_a[\ldots] - S_t \cdot NA_b[\ldots]$ |
| Equity swap (receive-fixed) | $V_{EQ} = V_{FIX}(C_0) - (S_t/S_{t-1}) \times NA_E$ |