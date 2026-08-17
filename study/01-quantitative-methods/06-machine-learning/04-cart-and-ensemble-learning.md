---
layout: page
title: "CART, Ensemble Learning, and Random Forest"
permalink: /study/01-quantitative-methods/06-machine-learning/04-cart-and-ensemble-learning/
next: /cfa/study/01-quantitative-methods/06-machine-learning/05-pca-and-clustering/
prev: /cfa/study/01-quantitative-methods/06-machine-learning/03-penalized-regression-svm-knn/
---
## Summary: CART, Ensemble Learning, and Random Forest (CFA Level II — Quantitative Methods)

---

### Classification and Regression Tree (CART)

CART predicts either a **categorical** target (classification tree) or a **continuous** target (regression tree), and is commonly applied to **binary** problems. It is a binary tree made of:

| Node type | Role |
|---|---|
| **Root node** | The starting point; represents one feature and a cutoff value |
| **Decision node** | Represents another feature/cutoff; splits data into smaller subgroups |
| **Terminal node (leaf)** | Contains the predicted label (classification) or predicted value (regression) — no further splits |

**How the algorithm builds the tree**: at each node, CART chooses the **feature and cutoff value** that generates the **widest separation** of labeled data, minimizing classification error (e.g., via a criterion like mean-squared error, or Gini impurity/information gain for classification). The feature space is partitioned into progressively smaller rectangles; observations within each partition have progressively lower within-group error. Splitting stops (a terminal node is formed) once further splits do not meaningfully reduce error — the majority class at that node becomes the prediction (classification), or the **mean of the labeled values** becomes the prediction (regression).

> **Key insight**: The **same feature can appear multiple times** in a tree, and some features are only relevant conditional on other splits already made (e.g., "high profitability" only matters as a discriminator *if* the stock is already cheap, highly levered, and growing sales — a non-linear, conditional relationship that multiple linear regression cannot capture).

**Preventing overfitting** (CART left unconstrained can perfectly memorize training data):

| Method | Mechanism |
|---|---|
| **Regularization parameters** | Constrain maximum tree depth, minimum population per node, or maximum number of decision nodes; stop growing once the criterion is reached |
| **Pruning** | Grow the full tree first, then remove (prune) sections that provide little additional classifying power |

**Strengths**: no distributional assumptions; uncovers complex, conditional, non-linear dependencies; results are **visual and easy to interpret** — a major advantage over "black box" algorithms, useful for building expert/decision systems and explaining recommendations to clients.

**Investment applications**: fraud detection in financial statements, consistent decision processes for equity/fixed-income selection, communicating investment strategy logic to clients (e.g., a value-trap-vs.-attractive-investment decision tree using P/E, leverage, sales growth, and profitability cutoffs).

---

### Ensemble Learning

Rather than relying on one model's noisy prediction, **ensemble learning** combines predictions from a collection ("ensemble") of models — the average tends to converge toward a more accurate prediction as noise cancels out. Ensemble methods typically produce **more accurate and more stable** predictions than the single best model, and often win machine learning competitions.

| Category | Description |
|---|---|
| **Heterogeneous learners** | Different algorithm types combined via a **voting classifier** |
| **Homogeneous learners** | The same algorithm trained on different data samples, e.g., via **bagging** |

**Voting classifier**: assigns the label with the most "votes" across the trained models (e.g., if SVM and KNN predict "outperformance" and CART predicts "underperformance," majority vote picks "outperformance"). More diverse, independent models generally improve accuracy — up to a point beyond which adding more models risks overfitting.

**Bootstrap aggregating (bagging)**: the original training set is used to generate $n$ new training datasets ("bags") via **random sampling with replacement**. The same algorithm is trained independently on each bag, producing $n$ models; predictions are aggregated by majority vote (classification) or averaging (regression). Bagging improves prediction **stability** and protects against overfitting.

---

### Random Forest

A **random forest** classifier is a large collection of decision trees trained via bagging (e.g., CART trained on each of the $n$ bagged datasets). Extra diversity is added by **randomly restricting the feature subset** ($m < n$ features) considered at each decision node.

**Key hyperparameters**: number of features per split ($m$), number of trees, minimum node population, maximum tree depth.

**Prediction**: each tree "votes"; the forest predicts by **majority vote** — a machine-learning "wisdom of crowds."

| Advantage | Drawback |
|---|---|
| Reduces variance / protects against overfitting | Lacks the interpretability of a single tree — considered a **relative black box** |
| Reduces noise-to-signal ratio (errors cancel across trees) | More computationally intensive than a single CART |
| Handles complex non-linear relationships that linear models miss | |

> **Example**: credit card fraud detection on a highly imbalanced dataset (492 fraud cases out of 284,807 transactions, 0.17%) — random forest with oversampling achieved **precision of 89%** and **recall of 82%**.

**Investment applications**: factor-based asset allocation/security selection, predicting IPO success (oversubscription, first-day price pop) from offering/issuer attributes, fundamental factor modeling (see the deep neural network case study in a later file for a related, more advanced example).

---

### ESG Data, NLP, and Supervised ML

Machine learning — particularly **natural language processing (NLP)**, itself built on supervised algorithms like logistic regression, SVM, CART, random forest, and neural networks — is increasingly used to convert unstructured, inconsistent **ESG data** into structured, usable investment signals (e.g., counting mentions of "human capital" or "flexible working" in earnings calls as an "S"-pillar signal). "E" factors matter more for miners/utilities; "S" factors matter more for clothing manufacturers — ML/AI helps apply only the relevant factors by company/sector. Data scientists work alongside fundamental analysts, who contribute domain knowledge to identify relevant raw data, guide model design, and interpret outputs.

---

### Case Study: Classification of Winning and Losing Funds

**Setup**: A fund-of-funds analyst wants to classify ETFs and mutual funds (MFs) as **winners (+1)**, **average (0)**, or **losers (−1)**, based on one-month return relative to the cross-sectional mean ± one standard deviation. Data: 1,594 ETFs and 6,085 MFs, up to 21 features (fund type/size, asset class composition, valuation multiples, 11 sector weights).

**Method**: Four classifiers trained and compared on identical 70%/30% train/test splits (no separate validation set, default hyperparameters): **CART** (max depth 5), **SVM** (cost = 1.0), **KNN** ($k=4$), **random forest** (100 trees, max depth 20). Evaluated via **accuracy** and **F1 score** (weighted average of precision and recall — more appropriate than accuracy under **class imbalance**, since most funds are labeled "0").

**Results:**

| Dataset | Best model | Accuracy | F1 |
|---|---|---|---|
| ETF (n=1,594) | Random forest | 0.812 | 0.770 (≈ tied with CART) |
| MF (n=6,085) | Random forest | 0.969 | 0.969 (outperforms all others) |

- **Random forest** was the top performer on both datasets; SVM and KNN were dominated by CART and random forest, especially on the larger MF dataset (more data → better performance generally).
- **Feature importance** (via information gain, a non-linear analog of correlation): price-to-sales and price-to-earnings ratios were consistently important; **fund size category (cat_size)** was the single most important feature for the MF dataset but not the ETF dataset; **net assets** was relatively important for ETFs but least important for MFs.

> **Key takeaway**: Ensemble methods (random forest) generalize at least as well as, and typically better than, their single-model counterparts, and are especially valuable in the presence of class imbalance and noisy features.

---

### Question Set Answers

**Q1 (Laurie Kim, high-yield bonds) — Problem type:**
A **classification** problem (default vs. no default).

**Q2 — Dimensionality:**
19 fundamental + 5 technical = **24 features** (dimensions).

**Q3 — Is CART appropriate?**
Yes — CART handles complex, non-linear relationships well, and its visual/interpretable output helps explain recommendations to the investment committee and clients.

**Q4 — How does CART operate at each node?**
It selects the feature and cutoff value that generate the **widest separation** of labeled data, minimizing classification error.

**Q5 — How to avoid overfitting in CART?**
Add regularization (max tree depth, minimum node population, max number of decision nodes) or apply **pruning** after the fact.

**Q6 — How could ensemble learning improve predictions further?**
Combine predictions from multiple models — via a **voting classifier** (heterogeneous learners) or **bagging** (homogeneous learners, e.g., a random forest) — to reduce noise and improve accuracy/stability versus any single model.

**Q7 (CART-based ETF decision tree, P/S=2.29, P/E=7.20, P/B=1.41) — Predicted class and probability:**
Following the decision path (P/S ≤ 7.93 → True; P/E ≤ 12.08 → True; P/S ≤ 1.32 → False; P/B ≤ 1.275 → False) leads to a terminal node with values [13 winners, 4 average, 4 losers]. The ETF is predicted a **winner**, with probability $13/21 ≈ 62\%$ (19% average, 19% loser).

**Q8 — Why be cautious relying solely on this tree?**
Max depth was capped at 5 (for visualization, sacrificing nuance); only a subset of important features (valuation ratios) was used, omitting others (net assets, sector weights) shown to matter; the terminal node had only 21 observations out of 1,067 — too few for a statistically robust conclusion. A **random forest** (ensemble) would likely generalize better out-of-sample than a single shallow CART.

---

### Exam Tips

- CART splits on the feature/cutoff that **maximizes separation** (minimizes classification/MSE error) at each node; regularization = max depth / min node population / max nodes, or post-hoc **pruning**
- CART's biggest selling point on the exam: **visual, interpretable** output — contrast with SVM/KNN/random forest/neural nets as relative "black boxes"
- Bagging = same algorithm, different **bootstrapped** (sampled with replacement) training sets; random forest = bagged CART trees **plus** random feature subsetting at each split
- Random forest reduces variance/overfitting and improves noise-to-signal ratio but **sacrifices interpretability** vs. a single CART
- **F1 score > accuracy** as an evaluation metric whenever there is **class imbalance**
- Ensemble learning ≥ best single model, almost always, because averaging independent predictions reduces noise (law of large numbers intuition) — but there is a point beyond which adding more models risks overfitting
