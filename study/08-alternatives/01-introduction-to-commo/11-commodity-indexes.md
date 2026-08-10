## Summary: Commodity Indexes (CFA Level II — Alternative Investments)

---

### Three Roles of Commodity Indexes

1. **Benchmark**: Evaluate broader moves in commodity pricing
2. **Macroeconomic indicator**: Examine relationships between commodity movements and other macro variables
3. **Investment vehicle basis**: Foundation for ETFs, swaps, notes — record, monitor, evaluate price changes

---

### Five Key Differentiating Characteristics

| Characteristic | Impact |
|---------------|--------|
| **Breadth of coverage** | Number of commodities and sectors included |
| **Weighting methodology** | Production-based vs. liquidity-based vs. fixed weight |
| **Rolling methodology** | Which contract month is held; directly affects roll return |
| **Rebalancing frequency** | How often weights are reset; affects rebalance return opportunity |
| **Governance** | Rules-based vs. selection-based; independence of index provider |

---

### Five Major Commodity Indexes — Comparison (Exhibit 17)

| Element | S&P GSCI | BCOM | DBLCI | TR/CC CRB | RICI |
|---------|---------|------|-------|-----------|------|
| **Adoption** | 1991 | 1998 | 2003 | 2005 | 1998 |
| **# Commodities** | 24 | 23 | 14 | 19 | **38** |
| **Weighting** | **Production** | Production + Liquidity | Fixed | Fixed | Fixed |
| **Rolling** | Nearby (front month) | Front to next/2nd month | **Optimized** (maximize backwardation) | Front to next month | Front to next month |
| **Rebalancing** | Annually | Annually | Annually | **Monthly** | **Monthly** |

---

### Index-by-Index Deep Dive

#### S&P GSCI
- **Production value-weighted** (world physical trade value)
- **Crude oil = highest single weight; Energy = highest sector** (historically up to 80% weight!)
- Most like a market-cap-weighted equity index
- **Highly concentrated** in energy → very sensitive to oil price movements
- Rolling: Front contracts (highest liquidity; most sensitive to supply/demand shocks)

#### Bloomberg Commodity Index (BCOM)
- **Production + Liquidity weighted** (selection-based committee)
- **Caps and floors**: Max sector = 33%; Min individual commodity = 2%
- Much lower energy exposure (~30% vs. S&P GSCI's 80%)
- **Higher natural gas weight** (~9% vs. S&P GSCI's ~3%) → drag from natural gas' ~19% annual roll cost
- Rolling: Front contracts

#### Deutsche Bank Liquid Commodity Index (DBLCI)
- **Fixed-weight**; only 14 commodities; **no livestock exposure**
- **Unique rolling methodology**: Optimizes on **maximizing backwardation / minimizing contango** within the next 12 months
- Effectively takes an **active view on roll positioning** vs. passive front-month rolling
- Example: Prefers July copper (3% backwardation / 2 months = 1.5%/month) over June copper (1%/month backwardation)

#### TR/CC CRB Index
- **Fixed-weight** with tiered structure; 19 commodities
- Committee-determined weights (diversification, liquidity, economic importance)
- **Monthly rebalancing** → potentially benefits in mean-reverting commodity markets
- Oldest lineage (original CRB Index from 1957/1978)
- Rolling: Front or second front month (mechanical, no special calculation)

#### Rogers International Commodities Index (RICI)
- **Fixed-weight**; broadest coverage with **38 commodities**
- Includes exotic/illiquid commodities: lumber, oats, rubber, adzuki beans, palm oil
- Some components in **non-USD currencies** (rubber in JPY, cocoa in GBP) → foreign exchange exposure embedded
- Energy = largest weight but well-diversified within energy
- **Monthly rebalancing**
- Committee determines tier-based weights

---

### Weighting Methods — Key Distinctions

| Method | Used By | Key Characteristic |
|--------|---------|-------------------|
| **Production value** | S&P GSCI | Most valuable commodity (by physical trade) gets highest weight → energy dominates |
| **Production + Liquidity** | BCOM | Caps/floors prevent extreme concentration; sector max = 33% |
| **Fixed weight** | DBLCI, TR/CC CRB, RICI | Set by committee; doesn't automatically drift with market values |

> **Production value-weighted index vs. equally weighted**: Production-weighted is **MORE** sensitive to energy returns (not less, not equal).

---

### Rolling Methodology — Key Impact on Returns

**Most indexes**: Roll front-month (near-term, most liquid) contracts automatically.

**DBLCI** (unique): Optimizes roll to maximize backwardation return within the next 12 months — **actively positions for better roll return** rather than mechanically rolling front month.

**Roll return = direct consequence of rolling methodology + curve shape:**
- Backwardation curve + front-month rolling → **positive roll return**
- Contango curve + front-month rolling → **negative roll return**

---

### Rebalancing Frequency — Trade-offs

| Rebalancing Frequency | When It Outperforms | When It Underperforms |
|----------------------|--------------------|-----------------------|
| **Monthly** (TR/CC CRB, RICI) | Mean-reverting markets (frequently buy valleys, sell peaks) | Trending markets (sells winners that keep rising; buys losers that keep falling) |
| **Annual** (S&P GSCI, BCOM, DBLCI) | Trending markets (lets winners ride) | Mean-reverting markets (misses rebalancing opportunities) |

**Production/liquidity-weighted indexes** (S&P GSCI, BCOM): Post-rebalance weights naturally drift with current portfolio weights (futures prices follow physical prices) → **lower rebalancing costs** than fixed-weight indexes.

---

### Key Portfolio Insights

**Commodity index correlations:**
- **With each other**: **>70%** (highly correlated — global commodities move together)
- **With stocks and bonds**: **~0%** (very low — strong diversification benefit for traditional portfolios)

> Multiple exchanges globally = **little diversification** (all highly correlated) — geographic diversification ≠ risk diversification for commodities.

**Backwardation in index context**:
- Sectors/indexes in backwardation → **positive roll return** → improves index performance
- But positive roll return doesn't guarantee positive **total return** (price return can still be negative)

---

### Example Answers

**Example 23** (Production-weighted vs. equally-weighted):
→ **B. More sensitive to energy sector returns** — production value weighting gives energy (especially crude oil) the largest single weight (historically 80% of S&P GSCI). An equal-weight index would dilute this dramatically.

**Example 24** (Which statement is INCORRECT?):
→ **B. "Multiple futures exchanges provide high diversification"** — **INCORRECT** because global commodity exchanges are **highly correlated** with each other → geographic spread adds little diversification benefit.
- A correct: Backwardation → positive roll yield → typically improves index returns
- C correct: Commodity indexes have low (~0%) correlation with equities and bonds

---

### Exam Tips

- **S&P GSCI = production-weighted = energy dominated** (can reach 80% energy weight) → most volatile
- **BCOM = production + liquidity + committee selection** + 33% sector cap → better diversified
- **DBLCI = fixed-weight + optimized rolling** (unique) → actively seeks better roll return
- **TR/CC CRB and RICI = monthly rebalancing** (vs. annual for others)
- **RICI has the most commodities** (38) including exotic/illiquid ones + FX exposure
- **DBLCI has no livestock exposure** — only exception in the "big five"
- **Multiple global exchanges ≠ diversification** — all highly correlated
- **Production-weighted index = more energy sensitive** than equal-weight (energy is highest production value commodity)
- **Fixed-weight requires more rebalancing** than floating-weight (weights drift more away from targets)
- **Monthly rebalancing benefits mean-reversion markets; annual benefits trending markets**