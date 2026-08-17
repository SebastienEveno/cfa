---
layout: page
title: "Introduction to Machine Learning"
permalink: /study/01-quantitative-methods/06-machine-learning/01-introduction-to-machine-learning/
next: /cfa/study/01-quantitative-methods/06-machine-learning/02-overfitting-and-model-evaluation/
---
## Summary: Introduction to Machine Learning (CFA Level II — Quantitative Methods)

---

### Machine Learning vs. Statistical Approaches

**Statistical approaches** rely on foundational assumptions and explicit models of structure — e.g., observed samples assumed drawn from a specified probability distribution. These a priori assumptions can fail in reality.

**Machine learning (ML)** seeks to extract knowledge from large amounts of data with fewer such restrictions. The goal is to automate decision-making by **generalizing** ("learning") from known examples to determine an underlying structure in the data — without human help.

> **Key insight**: An elementary way to think of ML algorithms is "find the pattern, apply the pattern." ML is particularly good at handling **high dimensionality** (many variables) and **high non-linearity**, and at detecting regime changes, better than traditional linear approaches.

Machine learning is broadly divided into **three classes**: supervised learning, unsupervised learning, and deep learning/reinforcement learning.

---

### Supervised Learning

Supervised learning infers patterns between a set of **inputs (X's)** and a **desired output (Y)** using a **labeled dataset** — one with matched observed inputs and associated outputs. Applying the algorithm to infer the pattern is called **training**; the trained model then predicts Y for new inputs.

**Regression vs. ML terminology:**

| Regression term | ML term |
|---|---|
| Y (dependent variable) | Target |
| $X_k$ (independent variables) | Features |
| Fitting the model | Training the algorithm |
| In-sample data | Training dataset |
| Out-of-sample data | Test dataset |

**Process**: Labeled (training) data → train the supervised ML algorithm → infer a pattern-based prediction rule → apply the rule to test data (inputs only) → compare $Y_{Predict}$ to $Y_{Actual}$ to evaluate fit.

**Supervised learning splits into two problem types**, determined by the nature of the target (Y):

| Target (Y) type | Problem type | Example |
|---|---|---|
| **Continuous** | Regression | Forecasting stock returns; forecasting bond default probability from financial ratios |
| **Categorical or ordinal** | Classification | Credit card fraud detection (binary); bond credit-rating assignment (ordinal, multi-category) |

> **Nuance**: If the target variable is continuous, the task is "regression" even if the ML technique used is not literally a "regression" algorithm (e.g., a regression tree).

In classification, the model relating features to a categorical target is called a **classifier**. Logistic regression is a familiar example. Classifiers can be **binary** (fraud/no fraud) or **multi-category** (credit rating buckets, where the target is **ordinal** — ranked categories intermediate between purely categorical and continuous scales).

---

### Unsupervised Learning

Unsupervised learning does **not** use labeled data — there is no target (Y), only inputs (X's). The algorithm must discover structure within the data itself. It is especially useful for **exploring new, large, or complex datasets**.

Two important unsupervised problem types:

| Type | Goal |
|---|---|
| **Dimension reduction** | Reduce the number of features while retaining the variation (information) across observations |
| **Clustering** | Sort observations into groups such that observations in the same cluster are more similar to each other than to observations in other clusters |

Clustering has been used to sort companies into data-driven groupings (e.g., by financial statement data) rather than conventional groupings (e.g., sector or country).

---

### Deep Learning and Reinforcement Learning

| Type | Description |
|---|---|
| **Deep learning** | Sophisticated algorithms addressing complex tasks (image classification, face/speech recognition, NLP), based on **neural networks (NNs / ANNs)** — highly flexible algorithms suited to large datasets, non-linearities, and feature interactions; used in both supervised and unsupervised settings |
| **Reinforcement learning (RL)** | A computer (agent) learns by interacting with itself or self-generated data, rather than from labeled examples |

---

### Guide to ML Algorithms (by Type and Variable)

| Variables | Supervised (target variable exists) | Unsupervised (no target variable) |
|---|---|---|
| **Continuous** — Regression | Linear; Penalized Regression/LASSO; Logistic; CART; Random Forest | Dimension Reduction — PCA |
| **Categorical/Continuous** — Classification | Logistic; SVM; KNN; CART | Clustering — K-Means; Hierarchical |
| **Any** | Neural Networks; Deep Learning; Reinforcement Learning | Neural Networks; Deep Learning; Reinforcement Learning |

> Linear and logistic regression are covered elsewhere (quantitative methods readings on regression). This module covers their ML **extensions** — penalized regression/LASSO — plus SVM, KNN, CART, ensemble methods/random forest, PCA, K-means, hierarchical clustering, and neural networks/deep learning/reinforcement learning.

---

### Machine Learning in Investment Management

ML is used across the investment value chain:

- **Client-facing**: robo-advising, chatbots that learn from client interactions
- **Alpha generation**: non-linear forecasts from a single time series, forecasts derived from a suite of predefined factors, or selection of input signals from new/existing data (e.g., textual analysis of 10-K/10-Q filings — negative changes in MD&A/risk sections can strongly predict equity returns)
- **Portfolio construction**: computing target weights incorporating client constraints, dynamically weighted to maximize Sharpe ratio; ML solutions have been shown to outperform mean–variance optimization in some studies
- **Risk management**: better covariance matrix estimation via PCA (reduces the number of variables needed to explain data variation)
- **Trading**: non-linear order-flow/trading algorithms that reduce implementation costs

---

### Question Set Answers

**Q1 — What best describes machine learning?**
Machine learning is a set of algorithmic approaches aimed at generating structure or predictions from data without human intervention, by finding a pattern and then applying it. (Not limited to linear regression; not limited to linear, labeled datasets.)

**Q2 — Discovering groupings with no target (Y) variable uses:**
An **unsupervised** ML algorithm. Labeled training data implies a target (Y) is provided (supervised); unsupervised learning has no target to predict.

**Q3 — What distinguishes supervised from unsupervised learning?**
Supervised learning trains on **labeled** data to infer a pattern-based prediction rule. Unsupervised learning uses unlabeled data and discovers structure within the data themselves.

**Q4 — Dimension reduction is best described as:**
Focusing on reducing the number of features in a dataset while **retaining variation** across observations, to preserve the information in that variation (not classification with labeled data, not clustering).

---

### Exam Tips

- "Find the pattern, apply the pattern" — the one-line definition of ML to keep in mind
- Regression (continuous target) vs. classification (categorical/ordinal target) — the split is determined by the **target variable's nature**, not the algorithm's name
- Supervised = labeled data (has a target Y); unsupervised = unlabeled data (no target); features = X's, target = Y
- Two unsupervised problem types: **dimension reduction** (PCA) and **clustering** (K-means, hierarchical)
- Deep learning is built on neural networks; reinforcement learning has no labeled data and no instantaneous feedback — it learns via trial and error against an environment
