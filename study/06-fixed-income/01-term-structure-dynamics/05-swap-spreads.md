## Summary: Swap Spread and Spreads as Price Quotation Convention (CFA Level II — Fixed Income)

---

### Swap Spread — Definition

$$\boxed{\text{Swap spread} = \text{Swap rate} - \text{On-the-run government bond yield (same maturity)}}$$

**Example**: 5-year swap rate = 2.00%, 5-year Treasury yield = 1.70% → Swap spread = **30 bps**

**Economic interpretation**: Reflects the **credit premium** required for short-term bank lending rates (swap rates) relative to default-risk-free government rates.

**Typical behavior**: **Countercyclical** — widens during recessions, narrows during expansions (reflects market's perceived economy-wide credit risk).

**Benchmark government bonds by region:**
- **US**: Treasury bonds
- **Eurozone**: Bunds (German government bonds)
- **UK**: Gilts

---

### I-Spread (Interpolated Spread)

$$\boxed{I\text{-spread} = \text{Bond YTM} - \text{Swap rate (same maturity, interpolated)}}$$

**Measures**: A specific **bond's** credit and/or liquidity risk relative to the swap curve (not relative to government bonds).

**Note**: "Swap spread" has two related uses:
1. **Swap rate vs. government yield** (market-level measure)
2. **Bond yield vs. swap rate** = I-spread (bond-level measure)

---

### Using Swap Spreads in Bond Pricing

**Bond YTM formula (when i-spread = 0):**
$$YTM = \text{Government rate (interpolated)} + \text{Swap spread}$$

**GECC Note Example:**
- Maturity: 2.97 years remaining
- Interpolated Treasury rate: **0.586%**
- Swap spread: **0.918%**
- **YTM = 0.586% + 0.918% = 1.504%**
- Invoice price (with accrued interest): $1,003,954.12
- Accrued interest: $451.39
- **Clean price: $1,003,502.73**

---

### What Swap Spreads Tell Analysts

| Swap Spread Component | Indicates |
|----------------------|-----------|
| **High swap spread** | Higher credit and/or liquidity risk required by investors |
| **Bond is default-free** | Swap spread may indicate **liquidity premium** or market mispricing |
| **Swap spread = 0** | Risk-free bond fairly priced at government rates |
| **Negative swap spread** | Unusual — government bonds priced more expensively than swaps |

**Swap spread decomposes YTM into:**
- **Time value component** (government benchmark rate)
- **Credit + liquidity component** (swap spread)
- **Bond-specific component** (I-spread)

---

### Why Swap Rates May Differ from Treasury Rates

| Reason | Detail |
|--------|--------|
| **Default risk** | Swap counterparties have credit risk; Treasuries are default-free |
| **Liquidity differences** | Some maturities more liquid in swap vs. Treasury markets |
| **Imperfect arbitrage** | Cannot perfectly arbitrage between Treasury and swap markets |

---

### Historical Anomaly: Negative Swap Spreads (Post-2008)

**Normal**: Swap spreads should be **positive** (private entities pay more than governments).

**Post-2008 observation**: 30-year Treasury swap spread turned **negative** (hit −62 bps intramonth in November 2008) and has remained at or below zero in recent years.

**Causes:**
- Strong demand for long-duration assets
- Tighter liquidity
- Greater counterparty risk post-crisis
- **Increased regulatory capital requirements** for swap dealers (Federal Reserve Bank of NY study, 2018)

---

### Short-Term Spreads as Credit/Liquidity Barometers

#### 1. TED Spread

$$\boxed{TED = MRR\ (3\text{-month}) - \text{3-month T-bill yield}}$$

- **TED** = acronym from T-bill (T) + Eurodollar futures (ED)
- Measures perceived **short-term credit and liquidity risk** in the banking system
- ↑ TED spread → greater perceived risk (e.g., spiked during COVID-19 market turmoil, March 2020)

#### 2. MRR–OIS Spread (formerly LIBOR–OIS Spread)

$$\boxed{MRR\text{-}OIS = MRR - OIS\ \text{rate}}$$

- **OIS** (Overnight Indexed Swap): Swap where floating leg = geometric average of daily overnight unsecured lending rate (e.g., fed funds rate in USD; Eonia for euros)
- Measures credit/liquidity risk in **short-term interbank lending** vs. essentially risk-free overnight rate
- Widened dramatically during 2008 financial crisis

---

### LIBOR Transition and New Benchmarks

| Currency | Old Benchmark | New Benchmark | Nature |
|----------|--------------|---------------|--------|
| **USD** | LIBOR | **SOFR** (Secured Overnight Financing Rate) | Secured (Treasury repo-backed) |
| **EUR** | Eonia | **ESTR** (Euro Short-Term Rate) | Overnight transactions |
| **CAD** | CDOR | **CORRA** (Canadian Overnight Repo Rate Average) | Secured |

**SOFR characteristics**: Daily volume-weighted index of all qualified US Treasury repo transactions; reflects supply/demand in secured funding markets; secured (vs. LIBOR which was unsecured).

**Impact of MRR transition**: Swap rates will be more influenced by supply/demand in government debt markets (SOFR is Treasury-repo-backed).

---

### Z-Spread (Brief Mention)

**Z-spread** (Zero Volatility spread): Constant yield spread **over the entire spot curve** (not just one maturity point) that equates the present value of bond cash flows to its market price. A more precise measure than the I-spread.

---

### Quick Comparison of Key Spreads

| Spread | Formula | Measures |
|--------|---------|---------|
| **Swap spread** | Swap rate − Government yield | Market-level credit premium over risk-free rate |
| **I-spread** | Bond YTM − Swap rate (same maturity) | Bond-specific premium over swap curve |
| **TED spread** | 3M MRR − 3M T-bill | Short-term bank credit/liquidity risk |
| **MRR-OIS spread** | MRR − OIS rate | Overnight interbank credit risk premium |
| **Z-spread** | Constant spread over spot curve | Bond's total credit/liquidity premium |

---

### Exam Tips

- **Swap spread = swap rate − on-the-run government yield** (same maturity) — not bond yield minus swap rate
- **I-spread = bond YTM − interpolated swap rate** (same maturity) — bond-level measure
- **Negative swap spreads** are unusual but have persisted post-2008 — know the regulatory capital explanation
- **TED spread**: barometer of economy-wide banking credit/liquidity risk; ↑ → stress
- **MRR-OIS spread**: more precise interbank credit risk measure (OIS ≈ risk-free overnight; MRR has credit component)
- **SOFR** = primary USD replacement for LIBOR; secured (Treasury repo) vs. LIBOR (unsecured)
- **Swap spread components**: time value (government rate) + credit/liquidity (swap spread) + bond-specific (I-spread)
- **Convention**: 10-year swap spread = 10-year swap rate − **on-the-run** 10-year government bond (specific bond, not interpolated)