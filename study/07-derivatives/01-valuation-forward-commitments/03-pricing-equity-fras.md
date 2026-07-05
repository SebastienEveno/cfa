## Summary: Pricing Equity Forwards, Futures, and Interest Rate FRAs (CFA Level II — Derivatives)

---

## Part 1: Equity Forwards and Futures

### Core Formula (with discrete dividends)

$$\boxed{F_0 = FV(S_0 - PV(D)) = (S_0 - PV(D))(1+r)^T}$$

**With continuous compounding and continuous dividend yield ($\delta_c$):**
$$\boxed{F_0 = S_0 e^{(r_c - \delta_c)T}}$$

**Forward value at time t:**
$$\boxed{V_t = PV[F_t - F_0] = S_t - PV(D^*) - PV(F_0)}$$

Where $PV(D^*)$ = PV of remaining dividends to be paid before expiration.

---

### Example 5 Answer — EURO STOXX 50 Futures (Continuous Compounding)

**Setup**: $S_0 = 3,500$, $r_c = 0.15\%$, $\delta_c = 3\%$, $T = 0.25$ (3 months)

$$F_0 = 3,500 \times e^{(0.0015 - 0.03)(0.25)} = 3,500 \times e^{-0.007125} = 3,500 \times 0.99290 = \mathbf{3,475.15}$$

→ **Answer: B. 3,475.15**

> Dividend yield > financing rate → $F_0 < S_0$ (forward priced below spot — high dividend benefit offsets financing cost)

---

### Example 6 Answer — Nestlé Single Stock Forward (Discrete Dividend)

**Setup**: $S_0 = CHF70$, $D = CHF2.20$ in 1 month, $r = 1.0\%$ annual, $T = 1/12$

$$PV(D) = \frac{2.20}{(1.01)^{1/12}} = 2.1982$$

$$F_0 = (70 - 2.1982)(1.01)^{1/12} = 67.8018 \times 1.000830 = \mathbf{CHF67.86}$$

→ **Answer: B. CHF67.86**

---

### Example 7 Answers — Equity Forward Valuation

**Setup**: $F_0 = 102$, $T-t = 0.25$ (3 months remaining), $S_t = 110$, $r = 5\%$

**Q1 — Forward value (no carry cash flows):**
$$F_t = 110(1.05)^{0.25} = 111.34$$
$$V_t = \frac{111.34 - 102}{(1.05)^{0.25}} = \frac{9.34}{1.01227} = \mathbf{9.24}$$

→ **Answer: B. 9.24**

**Q2 — Dividend announced between valuation and expiration:**
- Dividend → reduces $F_t$ (carry benefit increases → $F_t$ decreases)
- $V_t = PV[F_t - F_0]$ → if $F_t$ decreases, $V_t$ **decreases**
→ **Answer: A. Decrease**

**Q3 — Futures value after marking to market:**
- Futures contracts reset to zero after daily mark-to-market
- Gains/losses flow into the margin account
$$\boxed{v_t = 0 \text{ after daily settlement}}$$

→ **Answer: B. 0.00**

---

## Part 2: Forward Rate Agreements (FRAs)

### MRR Spot Market Basics

**MRR (Market Reference Rate)**: Replaces LIBOR (manipulation discovered 2008; replaced in 2021)
- **USD**: SOFR (Secured Overnight Financing Rate, Federal Reserve Bank of New York)
- **GBP**: SONIA (Sterling Overnight Index Average, Bank of England)
- **Convention**: ACT/360, add-on basis (interest added at end, not discounted upfront)

**Terminal amount formula:**
$$\boxed{TA = NA \times [1 + L_m t_m]} \quad \text{where } t_m = m/360$$

**Example**: $NA = \$50,000$, $L_{90} = 2\%$, $t_{90} = 90/360 = 0.25$
$$TA = 50,000 \times [1 + 0.02(0.25)] = \$50,250 \quad (\text{interest} = \$250)$$

---

### What Is an FRA?

**Forward Rate Agreement (FRA)**: OTC forward contract where the underlying is an **interest rate on a deposit**.

| Party | Role | Profits When |
|-------|------|-------------|
| **Long (fixed-rate payer)** | Pays fixed, receives floating | Floating rate **rises** (MRR ↑) |
| **Short (fixed-rate receiver)** | Receives fixed, pays floating | Floating rate **falls** (MRR ↓) |

**Notation: "X × Y" FRA**
- X = months until FRA **expires**
- Y − X = length of the **underlying deposit** (in months)
- Y = months until the **underlying deposit matures**

**Example**: 3×9 FRA → expires in 3 months, underlying = 6-month MRR, deposit matures in 9 months

---

### FRA Settlement Convention

**FRAs use: "Advanced set, advanced settled"**

| Feature | FRA | Interest Rate Swaps |
|---------|-----|---------------------|
| Rate set | At FRA expiration (Time h) | At beginning of period |
| Payment | At Time h (expiration = advanced) | At end of period (in arrears) |

**Settlement amounts at expiration (Time h):**

**Long (receive-floating) FRA payment:**
$$\boxed{\text{Settlement}_{\text{long}} = NA \times \frac{[L_m - FRA_0] \times t_m}{1 + D_m t_m}}$$

**Short (receive-fixed) FRA payment:**
$$\boxed{\text{Settlement}_{\text{short}} = NA \times \frac{[FRA_0 - L_m] \times t_m}{1 + D_m t_m}}$$

> **Why discounted?** The FRA settles at Time h, but the underlying loan interest isn't due until Time T (h+m). The discount factor $[1 + D_m t_m]$ reflects the early (advanced) payment.

---

### Pricing an FRA: The No-Arbitrage Forward Rate

**Two paths to Time T must have equal cost** (no-arbitrage):

$$[1 + L_h t_h][1 + FRA_0 \times t_m] = [1 + L_T t_T]$$

**Solving for FRA₀:**
$$\boxed{FRA_0 = \frac{\left[\frac{1 + L_T t_T}{1 + L_h t_h}\right] - 1}{t_m}}$$

Where:
- $L_h$ = spot MRR for the period from 0 to h (FRA expiration)
- $L_T$ = spot MRR for the period from 0 to T (deposit maturity)
- $t_h = h/360$, $t_T = T/360$, $t_m = m/360$

**Quick check approximation** (arithmetic average, slight upward bias):
$$FRA_0 \approx \frac{L_h \times t_h + L_{T} \times t_T}{t_m} \quad \text{(use as sanity check)}$$

**Numerical example**: 3×6 FRA, $L_{90} = 1.5\%$, $L_{180} = 2.0\%$

$$FRA_0 = \frac{\left[\frac{1+0.02(0.5)}{1+0.015(0.25)}\right]-1}{0.25} = \frac{1.01/1.00375 - 1}{0.25} = \mathbf{2.49\%}$$

---

### Example 8 Answers — FRA Settlement

**Setup**: UK company, $NA = £10,000,000$, 1×4 FRA (receive-fixed short), $FRA_0 = 2.60\%$ or $2.50\%$, $L_{90} = 2.55\%$, discount rate $D = 2.40\%$

**Q1 — Interest on bank deposit (at maturity):**
$$\text{Interest} = 10,000,000 \times 2.55\% \times \frac{90}{360} = \mathbf{£63,750}$$

→ **Answer: B. £63,750**

**Q2 — FRA settlement with $FRA_0 = 2.60\%$ (receive-fixed short):**
$$\text{Settlement}_{\text{short}} = 10,000,000 \times \frac{(2.60\% - 2.55\%) \times \frac{90}{360}}{1 + 2.40\% \times \frac{90}{360}}$$
$$= 10,000,000 \times \frac{0.000125}{1.006} = \mathbf{£1,242.54}$$

→ **Answer: B. £1,242.54** (positive for the short because fixed received > floating paid)

**Q3 — FRA settlement with $FRA_0 = 2.50\%$ (receive-fixed short):**
$$\text{Settlement}_{\text{short}} = 10,000,000 \times \frac{(2.50\% - 2.55\%) \times \frac{90}{360}}{1 + 2.40\% \times \frac{90}{360}}$$
$$= 10,000,000 \times \frac{-0.000125}{1.006} = \mathbf{-£1,242.54}$$

→ **Answer: A. −£1,242.54** (negative for the short because fixed < floating — short FRA loses when rates rise above the fixed rate)

---

### Example 9 Answers — FRA Fixed Rate

**Q1 — 6×9 C$ FRA** ($L_{180} = 1.5\%$, $L_{270} = 1.75\%$, 30/360)

$$FRA_0 = \frac{\left[\frac{1+0.0175(270/360)}{1+0.015(180/360)}\right]-1}{90/360}$$
$$= \frac{\left[\frac{1.013125}{1.0075}\right]-1}{0.25} = \frac{1.005572-1}{0.25} = \frac{0.005572}{0.25} = \mathbf{2.23\%}$$

→ **Answer: B. 2.23%**

**Q2 — How many FRA rates from 4 spot rates?**

With 4 spot rates (1M, 3M, 6M, 12M), you can form FRAs for every pair where the shorter rate is the FRA expiry and the longer rate determines the underlying:
- 1×3, 1×6, 1×12, 3×6, 3×12, 6×12 = **6 FRA rates**

→ **Answer: B. 6 FRA rates**

**Q3 — 1×3 FRA** ($L_{30} = 2.48\%$, $L_{90} = 2.58\%$, 30/360)

$$FRA_0 = \frac{\left[\frac{1+0.0258(90/360)}{1+0.0248(30/360)}\right]-1}{60/360}$$
$$= \frac{\left[\frac{1.00645}{1.002067}\right]-1}{\frac{60}{360}} = \frac{0.004374}{0.16\overline{6}} = \mathbf{2.62\%}$$

→ **Answer: C. 2.62%**

---

### Valuing an Existing FRA

**Strategy**: Enter an offsetting FRA at current market rate $FRA_g$; floating legs cancel.

**Net cash flow at T** = $(FRA_g - FRA_0) \times t_m \times NA$ — known with certainty at g.

**Long FRA value at time g:**
$$\boxed{V_g = NA \times \frac{[FRA_g - FRA_0] \times t_m}{1 + D_{T-g} \times t_{T-g}}}$$

**Short FRA value at time g** = negative of long value:
$$\boxed{-V_g = NA \times \frac{[FRA_0 - FRA_g] \times t_m}{1 + D_{T-g} \times t_{T-g}}}$$

---

### Example 10 Answer — FRA Valuation

**Setup**: Long 6×9 C$ FRA, $NA = C\$10,000,000$, $FRA_0 = 0.877\%$

After 90 days (now a 3×6 FRA):
- New 3-month rate: $L_{90} = 1.25\%$
- New 6-month rate: $L_{180} = 1.35\%$ (also = discount rate)

**Step 1**: Find new $FRA_g$ (now a 90-day FRA on 90-day MRR):
$$FRA_g = \frac{\left[\frac{1+0.0135(180/360)}{1+0.0125(90/360)}\right]-1}{90/360}$$
$$= \frac{\left[\frac{1.00675}{1.003125}\right]-1}{0.25} = \frac{0.003615}{0.25} = 1.446\%$$

**Step 2**: Value the long FRA:
$$V_g = 10,000,000 \times \frac{(1.446\% - 0.877\%) \times \frac{90}{360}}{1 + 1.35\% \times \frac{90}{360}}$$
$$= 10,000,000 \times \frac{0.001423}{1.003375} = \mathbf{C\$14,181 \approx C\$14,200}$$

→ **Answer: B. C$14,200**

---

### Key FRA Summary Table

| Feature | Description |
|---------|-------------|
| **Underlying** | Interest rate on an m-day deposit starting at time h |
| **Long FRA** | Fixed-rate payer; profits when MRR ↑ |
| **Short FRA** | Fixed-rate receiver; profits when MRR ↓ |
| **Pricing** | $FRA_0 = [(1+L_T t_T)/(1+L_h t_h)-1]/t_m$ |
| **Settlement** | Advanced set, advanced settled (at Time h) |
| **Payoff discounted** | Because payment is made in advance of loan maturity |
| **Valuation** | $V_g = NA \times (FRA_g - FRA_0) \times t_m / (1 + D_{T-g} t_{T-g})$ |

---

### Exam Tips

- **$F_0 < S_0$ for equity index** when dividend yield > financing rate (carry benefit exceeds carry cost)
- **Dividend timing**: earlier dividend → larger PV(D) → lower $F_0$; announced between now and expiry → reduces forward value of existing long position
- **Forward value after mark-to-market = 0** (futures only; forward value accumulates)
- **FRA "X×Y"**: X = expiry months, Y−X = underlying deposit length — always convert to days using 30-day/month convention
- **Long FRA profits when rates rise**; **Short FRA profits when rates fall**
- **Advanced settlement**: FRA payoff is discounted because payment at Time h is earlier than when loan interest would be due (Time T)
- **FRA pricing formula**: derived from the condition that two lending paths to T must have equal cost (no-arbitrage)
- **FRA valuation**: PV of difference between current FRA rate and original FRA rate — same concept as forward contract valuation