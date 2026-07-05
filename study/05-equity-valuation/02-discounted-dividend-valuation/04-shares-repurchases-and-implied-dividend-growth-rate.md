## Summary: Share Repurchases & Implied Dividend Growth Rate (CFA Level II)

---

### Share Repurchases in the DDM Context

Key characteristics distinguishing repurchases from cash dividends:

| Feature | Cash Dividends | Share Repurchases |
|---------|---------------|------------------|
| **Predictability** | High — established schedule | Low — opportunistic timing |
| **Commitment** | Strong — companies reluctant to cut | Weak — no commitment to maintain level |
| **Wealth effect** | Pro-rata to all shareholders | Neutral at market price for ongoing shareholders |
| **Share count** | Unchanged | ↓ Reduces shares outstanding |
| **Relative ownership** | Selling shareholders unchanged | Non-selling shareholders' % ownership ↑ |

**How to handle repurchases in DDM:**
- Account for repurchases' effect on **per-share dividend growth rates**
- When correctly applied, DDM remains valid even when company repurchases shares
- Repurchases → fewer shares → higher EPS and DPS growth → higher implied $g$

---

### The Implied Dividend Growth Rate

**Reverse-engineering the Gordon Growth Model:**

Starting from:
$$V_0 = \frac{D_1}{r - g}$$

Solve for $g$:
$$\boxed{g = r - \frac{D_1}{P_0}}$$

Where $P_0$ = current market price (used as proxy for $V_0$).

**Analytical use**: Compare implied $g$ to analyst's own growth forecast → assess whether stock is fairly valued, over, or undervalued.

---

### Worked Example (Example 10)

**Given:**
- $\beta = 1.1$, $r_f = 5.6\%$, $ERP = 6\%$
- $D_0 = \$2.00$, $g = 5\%$, $P_0 = \$40$

**Step 1: Required return**
$$r = 5.6\% + 1.1 \times 6\% = 12.2\%$$

**Step 2: Gordon growth model value**
$$V_0 = \frac{2.00 \times 1.05}{0.122 - 0.05} = \frac{2.10}{0.072} = \mathbf{\$29.17}$$

→ Model value ($29.17) < Market price ($40.00) → **stock appears overvalued** at 5% growth assumption

**Step 3: Implied growth rate to justify $40**
$$g = r - \frac{D_1}{P_0} = 0.122 - \frac{2.10}{40} = 0.122 - 0.0525 = \mathbf{6.86\%}$$

→ Market is implying **6.86% perpetual growth** vs. analyst's 5% forecast

**Interpretation:**
- If analyst believes 6.86% is **unreasonably high** → stock is **overvalued**
- If analyst believes 6.86% is **achievable** → stock is **fairly valued**

---

### Exam Tips

- **Implied growth rate formula**: $g = r - D_1/P_0$ — derive from rearranging Gordon growth model
- **DDM remains valid with share repurchases** — repurchases boost per-share dividend growth rate
- **Implied g > analyst's g forecast** → stock appears **overvalued** (market too optimistic)
- **Implied g < analyst's g forecast** → stock appears **undervalued** (market too pessimistic)
- **Implied g is an alternative valuation perspective** — use it to cross-check point estimates
- Always use $D_1$ (forward dividend) not $D_0$ when solving for implied growth