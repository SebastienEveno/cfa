---
layout: page
title: "Choosing an Appropriate ML Algorithm"
permalink: /study/01-quantitative-methods/06-machine-learning/07-choosing-an-ml-algorithm/
prev: /cfa/study/01-quantitative-methods/06-machine-learning/06-neural-networks-and-deep-learning/
---
## Summary: Choosing an Appropriate ML Algorithm (CFA Level II — Quantitative Methods)

---

### Decision Framework

The choice of ML algorithm follows a sequence of questions about the data and the problem:

1. **Are the data complex, with many highly correlated features?** → Yes: consider **dimension reduction (PCA)** first, regardless of what comes next.
2. **Is the goal classification or numerical prediction (regression)?**
3. **If regression**: are the data non-linear? → Linear: **penalized regression/LASSO**. Non-linear: **CART, random forest, or neural networks**.
4. **If classification**: are the data labeled?
   - **Labeled**, linear: **KNN or SVM**. **Labeled**, non-linear: **CART, random forest, or neural networks (DNNs)**.
   - **Unlabeled** (i.e., really a clustering problem): non-linear data → **neural networks/DNNs**; linear data → **K-means** (number of categories known) or **hierarchical clustering** (number of categories unknown).

**Consolidated decision table:**

| Question | Answer | Algorithm(s) |
|---|---|---|
| Many correlated features, need to simplify? | Yes | **PCA** (dimension reduction) |
| Continuous target, linear relationships | — | **Penalized regression / LASSO** |
| Continuous target, non-linear relationships | — | **CART, random forest, neural networks** |
| Categorical target, labeled data, linear/simple boundary | — | **KNN or SVM** |
| Categorical target, labeled data, complex non-linear relationships | — | **CART, random forest, neural networks / DNNs** |
| No target (unlabeled), linear structure, $k$ known | — | **K-means** |
| No target (unlabeled), linear structure, $k$ unknown | — | **Hierarchical clustering** |
| No target (unlabeled), complex non-linear structure | — | **Neural networks / DNNs** |

---

### Investment-Problem-to-Algorithm Quick Map

| Investment problem | Best-suited algorithm(s) |
|---|---|
| Reduce a large correlated factor/feature set before modeling | PCA |
| Forecast a continuous variable (e.g., return, default probability) from many, possibly collinear, features | Penalized regression / LASSO |
| Binary classification with high-dimensional, complex data (e.g., bankruptcy prediction) | SVM |
| Estimate an unrated bond's implied credit rating from similar bonds | KNN |
| Build an interpretable, client-explainable decision rule (e.g., value trap vs. attractive stock) | CART |
| Improve robustness/accuracy of a classifier via combining models | Ensemble learning (voting classifier or bagging) |
| Classify winners/losers among a large universe of funds/securities, robust to noise | Random forest |
| Reduce dimensionality of a large factor/return dataset (e.g., covariance matrix estimation) | PCA |
| Derive data-driven "peer groups" for a large stock universe with a known desired number of groups | K-means |
| Explore natural groupings without knowing the number of clusters in advance (e.g., fund diversification review) | Hierarchical clustering |
| Diversify a portfolio by return co-movement | Hierarchical or k-means clustering on correlation/distance |
| Model highly non-linear equity factor relationships / fundamental factor models | Neural networks / DNNs (with LASSO regularization) |
| Image, speech, or natural language processing (e.g., ESG text mining, earnings-call NLP) | Neural networks / DNNs |
| Learn optimal trading/execution actions through trial and error against a market environment | Reinforcement learning |

---

### Formula Summary

**LASSO (penalized regression) objective:**

$$\boxed{\sum_{i=1}^{n}(Y_i - \hat{Y}_i)^2 + \lambda\sum_{k=1}^{K}|\hat{b}_k|}$$

$\lambda = 0 \Rightarrow$ OLS; larger $\lambda$ → stronger shrinkage / more features dropped.

**SVM — maximum margin objective:**

$$\boxed{\text{Choose the hyperplane that maximizes the margin between the two classes}}$$

Soft margin adds a misclassification penalty controlled by a **cost parameter** (large cost → thin margin; small cost → wide margin).

**KNN classification rule:** assign the majority class among the $k$ nearest neighbors (by chosen distance metric).

**CART node-splitting rule:** at each node, select the feature/cutoff that maximizes separation of labeled data (minimizes classification error / MSE).

**Neural network weight update:**

$$\boxed{\text{New weight} = \text{Old weight} - (\text{Learning rate}) \times \frac{\partial\, \text{Total error}}{\partial\, \text{Old weight}}}$$

**Total out-of-sample error decomposition:**

$$\boxed{E_{out} = \text{Bias error} + \text{Variance error} + \text{Base error}}$$

**Quick reference table:**

| Algorithm | Type | Target | Key hyperparameter(s) |
|---|---|---|---|
| LASSO (penalized regression) | Supervised, regression | Continuous | $\lambda$ |
| SVM | Supervised, classification | Categorical | Cost parameter |
| KNN | Supervised, classification (or regression) | Categorical (or continuous) | $k$ |
| CART | Supervised, classification or regression | Either | Max depth, min node size, max nodes |
| Random forest | Supervised (ensemble) | Either | # trees, # features per split ($m$), max depth |
| PCA | Unsupervised, dimension reduction | None | # components retained |
| K-means | Unsupervised, clustering | None | $k$ |
| Hierarchical clustering | Unsupervised, clustering | None | Linkage/distance method (no $k$ needed upfront) |
| Neural network | Supervised or unsupervised | Either | # hidden layers, # nodes/layer, learning rate, activation function |
| Reinforcement learning | Neither (reward-driven) | None | Reward function, environment definition |

---

### Question Set Answers (Alef Associates Practice Set)

*Context*: Alef Associates wants to overhaul its 100-stock, small-cap process using ML: (1) predict next-quarter returns to replace the 20 worst-forecast stocks; (2) cluster its ~10,000-stock universe into 20 groups to avoid concentration; (3) predict, within each group, the top acquisition-target candidates using labeled data; (4) analysts pick one high-conviction stock per assigned group.

**Q1 — ML technique for Step 1 (predicting next-quarter return):**
**Regression** — the target (quarterly return) is continuous.

**Q2 — Assuming regularization, which model choice is least appropriate?**
**LASSO with $\lambda = 0$** — this eliminates the penalty term entirely, equivalent to plain OLS with **no regularization**, defeating the stated goal of using regularization.

**Q3 — ML technique for Step 2 (dividing 10,000 stocks into 20 groups)?**
**K-Means Clustering** — an unsupervised technique that partitions observations into a **fixed, pre-specified** number of groups (not PCA, which reduces dimensionality rather than grouping observations; not CART, a supervised technique).

**Q4 — The hyperparameter in Step 2's model:**
**20**, the number of clusters — set by the researcher before the algorithm runs (100 and 10,000 are just dataset sizes, not hyperparameters).

**Q5 — Target variable type for Step 3 (predicting acquisition targets):**
**Categorical** — a binary label: "0" (not an acquisition target) or "1" (acquisition target).

**Q6 — CART vs. KNN advantages for Step 3:**
**All three statements are correct**: CART needs no pre-specified hyperparameter like $k$; CART needs no explicit similarity/distance measure; and CART's output (the tree) offers a **visual explanation** for each prediction — all genuine advantages over KNN.

**Q7 — Which choice is most likely to cause CART overfitting?**
Using a fitting curve to select a model with **low bias error and high variance error** — by definition, this describes an overfitted model (k-fold cross-validation and an overfitting/regularization penalty are both overfitting *remedies*, not causes).

**Q8 — How to improve on a single CART model for Step 3?**
**Ensemble learning** — combine CART's predictions with those of other models (logistic regression, SVM, KNN) rather than discarding CART for a single alternative model; ensembles typically outperform any single constituent model.

**Q9 — Tasks best suited to NNs/DL:**
**Statements 1 and 3** — image/speech recognition and NLP (Statement 1), and modeling non-linearities and complex feature interactions (Statement 3). NNs/DL are *not* well suited to simple single-variable OLS regression (Statement 2 is false).

**Q10 — Least accurate statement about NNs:**
"NNs must have **at least 10 hidden layers** to be considered deep learning nets" is **least accurate** — the correct threshold is **at least 2** hidden layers (often more than 20 in practice). The activation-function "dimmer switch" description and the summation-operator description are both accurate.

---

### Exam Tips

- Work the **decision tree top-down**: (1) many correlated features needing simplification → PCA; (2) regression vs. classification, driven by the target's nature; (3) linear vs. non-linear data; (4) labeled vs. unlabeled (classification → clustering).
- **"We don't know how many groups exist"** is the standard tell for **hierarchical clustering over k-means**; **"we know exactly how many groups we want"** signals **k-means**.
- **"Interpretability matters / need to explain to a client"** signals **CART** over SVM, random forest, or neural networks (all relative black boxes).
- **"High-dimensional, complex, small-to-medium dataset, binary outcome"** signals **SVM**; **"classify by similarity to known/rated cases"** signals **KNN**.
- **"Image/speech/text/NLP or highly complex non-linear interactions with huge data"** signals **neural networks / DNNs**.
- **"Learning by trial and error against an environment, no labeled data, reward-driven"** signals **reinforcement learning**.
- A regularization/overfitting penalty must always **increase** with model complexity/number of features — watch for reversed-logic distractors (e.g., LASSO with $\lambda = 0$ "achieving regularization" is always wrong).
- K-fold cross-validation cannot be used on time-series data — use **walk-forward (time-series) cross-validation** instead.
- Ensemble methods (voting classifiers, bagging, random forest) generally **outperform** their single-model constituents by averaging out noise — a recurring correct-answer pattern across the exam's ML questions.
- Know the terminology mapping cold: **features = X's**, **target = Y**, **training = fitting**, **hyperparameter = set before training begins** (e.g., $\lambda$, $k$, cost parameter, number of hidden layers/nodes, learning rate).
