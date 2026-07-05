## Summary: Pricing and Valuing Currency Swap Contracts (CFA Level II — Derivatives)

---

### What Is a Currency Swap?

**Currency swap**: Agreement where two counterparties exchange interest payments (and typically principal) in **different currencies**.

**Three key differences from interest rate swaps:**

| Feature | Interest Rate Swap | Currency Swap |
|---------|-------------------|---------------|
| **Currency** | Single currency (netted payments) | Two different currencies |
| **Principal exchange** | No principal exchange | Exchange at **initiation AND maturity** |
| **Payments** | Netted (one payment per period) | **Not netted** (full payments in each currency) |
| **Variables to solve** | One fixed rate | **Two fixed rates + one notional amount** |

**Each leg** can be fixed or floating. Our focus: **fixed-for-fixed** currency swaps.

---

### Currency Swap as a Portfolio of Bonds

$$\boxed{V_{CS} = V_a - S_0 V_b}$$

Where:
- $V_a$ = value of bond in currency a (received)
- $V_b$ = value of bond in currency b (paid)
- $S_0$ = spot exchange rate (units of currency a per unit of currency b)

**At initiation**: $V_{CS} = 0$ (no arbitrage) → $V_a = S_0 V_b$

**Notional amount relationship:**
$$\boxed{NA_a = S_0 \times NA_b}$$

The notional in each currency is set so that the initial exchange of principal at the spot rate produces equal values — making the swap worth zero at inception.

---

### Pricing: Two Fixed Swap Rates

**Same formula as interest rate swap, applied separately in each currency:**

$$\boxed{r_{FIX,a} = \frac{1 - PV_{n,a}(1)}{\sum_{i=1}^{n} PV_{i,a}(1)} \times \frac{1}{AP}}$$

$$\boxed{r_{FIX,b} = \frac{1 - PV_{n,b}(1)}{\sum_{i=1}^{n} PV_{i,b}(1)} \times \frac{1}{AP}}$$

**Key advantage**: By viewing as a pair of bonds, **all FX considerations are moved to the initial exchange rate** — no need to forecast future exchange rates for pricing.

---

### Example 15 — Currency Swap Pricing (A$ / US$)

**Setup**: US company needs A$100M for 1 year; quarterly resets (30/360); $S_0 = A\$1.14/US\$1$

**Given PV factors:**

| Days | A$ Rate | PV(A$1) | US$ Rate | PV(US$1) |
|------|---------|---------|---------|---------|
| 90 | 2.50% | 0.993789 | 0.10% | 0.999750 |
| 180 | 2.60% | 0.987167 | 0.15% | 0.999251 |
| 270 | 2.70% | 0.980152 | 0.20% | 0.998502 |
| 360 | 2.80% | 0.972763 | 0.25% | 0.997506 |
| **Sum** | | **3.933870** | | **3.995009** |

**Q1 — Fixed swap rates** ($AP = 90/360 = 0.25$):

$$r_{A\$} = \frac{1-0.972763}{3.933870} \times \frac{360}{90} = \frac{0.027237}{3.933870} \times 4 = \mathbf{2.77\%}$$

$$r_{US\$} = \frac{1-0.997506}{3.995009} \times \frac{360}{90} = \frac{0.002494}{3.995009} \times 4 = \mathbf{0.25\%}$$

→ **Answer Q1: B. 2.77% and 0.25%**

**Q2 — Notional amount in US$:**
$$NA_b = \frac{NA_a}{S_0} = \frac{A\$100,000,000}{A\$1.14/US\$1} = \mathbf{US\$87,719,298 \approx US\$88M}$$

→ **Answer Q2: A. 88 (million)**

**Q3 — Quarterly fixed payments:**
$$FS_{A\$} = A\$100,000,000 \times \frac{90}{360} \times 0.027695 = \mathbf{A\$692,375}$$

$$FS_{US\$} = US\$87,719,298 \times \frac{90}{360} \times 0.002497 = \mathbf{US\$54,759}$$

→ **Answer Q3: A. A$692,000 and US$55,000**

---

### Valuing an Existing Currency Swap

**Two risk sources after initiation:**
1. Changes in **interest rates** (both currencies)
2. Changes in the **exchange rate**

**Valuation formula (value to party receiving currency a):**

$$\boxed{V_{CS} = NA_a \left[AP \times r_{FIX,a} \sum_{i=1}^{n} PV_i(1) + PV_n(1)\right] - S_t \cdot NA_b \left[AP \times r_{FIX,b} \sum_{i=1}^{n} PV_i(1) + PV_n(1)\right]}$$

**Interpretation:**
- **First term**: PV of incoming cash flows in currency a (long bond in currency a)
- **Second term**: PV of outgoing cash flows in currency b, **converted to currency a** at the current spot rate $S_t$
- $V_{CS}$ = value to the party **receiving** currency a
- $-V_{CS}$ = value to the party **paying** currency a (receiving currency b)

---

### Example 16 — Currency Swap Valuation (60 Days Later)

**Setup**: Same swap from Example 15; 60 days have passed; new spot rate $S_t = A\$1.13/US\$1$

**Remaining cash flows**: 3 quarterly payments + final notional (4 dates)

**Updated PV factors:**

| Days | PV(A$1) | PV(US$1) |
|------|---------|---------|
| 30 | 0.998336 | 0.999584 |
| 120 | 0.993707 | 0.998668 |
| 210 | 0.989609 | 0.998253 |
| 300 | 0.986031 | 0.998336 |
| **Sum** | **3.967683** | **3.994841** |

**Periodic swap rates** (already established at initiation):
- $AP \times r_{A\$} = 90/360 \times 2.7695\% = 0.00692375$
- $AP \times r_{US\$} = 90/360 \times 0.2497\% = 0.00062425$

**Q1 — Value to swap dealer (receives A$, pays US$):**

$$V_{CS} = A\$100,000,000 \times [0.00692375(3.967683) + 0.986031]$$
$$- 1.13 \times US\$87,719,298 \times [0.00062425(3.994841) + 0.998336]$$

**First term** (PV of A$ inflows):
$$= 100,000,000 \times [0.027463 + 0.986031] = 100,000,000 \times 1.013494 = A\$101,349,400$$

**Second term** (PV of US$ outflows, converted to A$):
$$= 1.13 \times 87,719,298 \times [0.002493 + 0.998336] = 1.13 \times 87,719,298 \times 1.000829$$

$$= 99,222,707 \times 1.000829 = A\$99,205,233$$

$$V_{CS} = A\$101,349,400 - A\$99,204,233 = \mathbf{A\$2,145,167}$$

→ **Answer Q1: C. A$2,145,200** (to the swap dealer receiving A$)

**Q2 — Value to US firm (pays A$, receives US$):**
$$-V_{CS} = -A\$2,145,167 \times \frac{US\$1}{A\$1.13} = \mathbf{-US\$1,898,378}$$

→ **Answer Q2: B. −$1,898,400**

**Why negative for the US firm?**
1. A$ **strengthened** (1.14 → 1.13 A$/US$) → each US$ buys fewer A$ → US firm's A$ outflows are now worth more in US$ terms
2. A$ interest rates **fell** → PV of A$ outflows increased (they locked in higher A$ rates)

---

### Identifying Currency a vs. Currency b

**Critical for correct sign:**
- Currency a is **in the numerator** of the exchange rate quote
- The party **receiving** currency a has $V_{CS} > 0$ when the swap is favorable to them
- The party **paying** currency a (receiving currency b) has value $= -V_{CS}$

**Example**: If exchange rate = A\$1.14/US\$1 → currency a = A\$, currency b = US\$

---

### Practical Application — Synthetic Bond Conversion

**Use case**: US firm wants A$ financing but issues US$ bonds (easier access).

**Strategy:**
1. Issue US$ bonds (US firm's comparative advantage)
2. Enter currency swap: **receive US$ (from swap dealer) + pay A$**
3. US$ received from dealer offsets US$ paid to bondholders
4. **Net effect**: US firm effectively has issued A$ debt

---

### Key Formula Summary

| Task | Formula |
|------|---------|
| **Notional relationship** | $NA_a = S_0 \times NA_b$ |
| **Fixed swap rate (each currency)** | $r_{FIX} = [(1-PV_n)/\sum PV_i] \times (1/AP)$ |
| **Periodic fixed payment** | $FS = NA \times AP \times r_{FIX}$ |
| **Swap value (receive currency a)** | $V_{CS} = NA_a[AP \times r_a \sum PV_i + PV_n] - S_t \cdot NA_b[AP \times r_b \sum PV_i + PV_n]$ |
| **Swap value (receive currency b)** | $-V_{CS}$ |

---

### Exam Tips

- **Currency swaps exchange principal** at initiation AND maturity (unlike interest rate swaps) — principal cancels FX risk at initiation when $NA_a = S_0 \times NA_b$
- **Payments are NOT netted** in currency swaps — both parties make full payments in their respective currencies
- **Two fixed rates** are solved for independently using each currency's term structure (same formula as interest rate swap pricing)
- **Notional amounts** are set by the spot exchange rate at initiation — not guessed or negotiated independently
- **Valuation after initiation**: two sources of risk — interest rates AND exchange rate; use $V_{CS} = V_a - S_t V_b$
- **Always identify currency a** from how the exchange rate is quoted (in numerator) — then the party receiving currency a has value = $V_{CS}$
- **A$ strengthening** (fewer A$ per US$) hurts the party paying A$ (in this case the US firm)
- **Fixed-for-floating currency swap** = fixed-for-fixed currency swap + fixed-for-floating interest rate swap in one currency — can build complex structures from these pieces