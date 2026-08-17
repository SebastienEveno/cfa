---
layout: page
title: "Penalized Regression, Support Vector Machine, and K-Nearest Neighbor"
permalink: /study/01-quantitative-methods/06-machine-learning/03-penalized-regression-svm-knn/
next: /cfa/study/01-quantitative-methods/06-machine-learning/04-cart-and-ensemble-learning/
prev: /cfa/study/01-quantitative-methods/06-machine-learning/02-overfitting-and-model-evaluation/
---
## Summary: Penalized Regression, Support Vector Machine, and K-Nearest Neighbor (CFA Level II — Quantitative Methods)

---

### Setup

Supervised ML models split into **regression** (continuous target) and **classification** (categorical/ordinal target). This file covers:

- **Penalized regression / LASSO** — regression
- **Support vector machine (SVM)** — classification (and regression/outlier detection)
- **K-nearest neighbor (KNN)** — classification (and sometimes regression)

(CART, covered next, can do either.)

---

### Penalized Regression (LASSO)

Penalized regression is a computationally efficient technique useful for reducing a large number of features to a manageable set and making good predictions in large datasets — **especially where features are correlated** (where classical OLS breaks down).

**Ordinary least squares (OLS)** chooses coefficients to minimize:

$$\sum_{i=1}^{n}(Y_i - \hat{Y}_i)^2$$

**Penalized regression** adds a **penalty term** that increases in size with the number of included features, so a feature must earn its place by improving fit enough to offset the penalty:

$$\boxed{\sum_{i=1}^{n}(Y_i - \hat{Y}_i)^2 + \lambda\sum_{k=1}^{K}|\hat{b}_k|}$$

This is the **LASSO** (least absolute shrinkage and selection operator) objective — the penalty term sums the **absolute values** of the coefficients (an L1 penalty).

| Element | Role |
|---|---|
| $\lambda$ (lambda) | Hyperparameter set by the researcher; controls the trade-off between fit and parsimony |
| $\lambda = 0$ | LASSO reduces to **OLS** (no regularization) |
| Larger $\lambda$ | Larger penalty → fewer/smaller coefficients retained |

> **Key insight**: LASSO performs a form of **automatic feature selection** — it can shrink unimportant coefficients all the way to zero, dropping those features from the model. The penalty term is used only while **fitting** the model; once built, the model is evaluated on the test set using the sum of squared residuals alone (no penalty).

**Applications**: forecasting default probabilities (reducing scores of collinear features to fewer than 10 variables given limited default observations); stabilizing covariance matrix / asset-weight estimation for large portfolios where returns are highly collinear (mean–variance optimization is notoriously unstable without regularization).

---

### Support Vector Machine (SVM)

SVM is a powerful **linear classifier** (also usable for regression and outlier detection) that finds the **hyperplane** that optimally separates observations into two classes.

**Key concepts:**

| Term | Definition |
|---|---|
| **Linearly separable** | Data can be divided into two regions by a linear boundary |
| **Hyperplane** | An $n$-dimensional space boundary (a line if $n=1$; a plane if $n=2$) |
| **Margin** | The strip separating the two classes; SVM chooses the boundary that maximizes this margin |
| **Support vectors** | The observations closest to the boundary that determine the margin |
| **Discriminant boundary** | The line in the middle of the maximum-margin strip |

$$\boxed{\text{SVM objective: choose the hyperplane that maximizes the margin between the two classes}}$$

> **Key insight**: Adding more training data **far** from the support vectors does not change the boundary; adding data **near** the hyperplane can shift the margin by changing the set of support vectors.

**Soft margin classification**: for real-world (non-perfectly-separable) data, SVM adds a **penalty** to the objective function for misclassified training observations, trading off a wider margin against a lower total error penalty. A **cost parameter** controls this trade-off — a large cost parameter forces a thin margin (fewer misclassifications tolerated); a smaller cost parameter widens the margin.

**Non-linear SVM**: uses more advanced, non-linear separation boundaries — can reduce misclassifications but is more complex and more prone to overfitting.

**Investment applications**: well suited to **small-to-medium, high-dimensional, complex datasets** (e.g., financial statement/bankruptcy data) — bankruptcy prediction (binary classification), text classification of news/company documents into sentiment categories. Resilient to outliers and correlated features.

---

### K-Nearest Neighbor (KNN)

KNN is a **non-parametric** supervised technique (makes no assumptions about the data's distribution) most often used for classification, sometimes regression. It classifies a new observation by finding the $k$ existing observations most **similar** ("nearest") to it, and assigns the **majority class** among those $k$ neighbors.

| $k$ | Rule |
|---|---|
| $k = 1$ | New observation takes the class of its single nearest neighbor |
| $k = 5$ | New observation takes the majority class among its 5 nearest neighbors |

**Design choices and pitfalls:**

- **Distance/similarity metric** is critical — an inappropriate measure yields poor models; for equities, correlation of historical returns is a natural similarity measure
- Sensitive to **irrelevant or correlated features** — manual feature selection often improves the distance measure
- Works better with a **small number of features**
- **Choosing $k$**: too small → high error rate, sensitive to local outliers; too large → dilutes the "nearest neighbor" concept by averaging too many observations; an **even** $k$ risks ties with no clear classification

**Investment applications**: bankruptcy prediction, stock price prediction, corporate bond credit-rating assignment (rating an unrated bond via similarity to rated bonds with similar issuer/issue characteristics), custom equity/bond index creation (identifying similar vs. dissimilar constituents).

---

### SVM vs. KNN — Quick Comparison

| Dimension | SVM | KNN |
|---|---|---|
| Type | Linear classifier (maximum margin) | Similarity/distance-based classifier |
| Key hyperparameter | Cost parameter (soft margin) | $k$ (number of neighbors) |
| Best suited for | High-dimensional, complex, small-to-medium datasets | Datasets where a natural similarity/distance measure exists; smaller feature sets |
| Weakness | Non-linear version prone to overfitting | Sensitive to irrelevant/correlated features and choice of $k$; distance measure often subjective |

---

### Question Set Answers

**Q1 (Rachel Lee, fixed-income) — Type of problem:**
Lee is addressing a **supervised learning classification problem** — determining whether Biotron's new bond issue should be classified as investment grade or non-investment grade.

**Q2 — Two suitable ML algorithms and how each applies:**
- **SVM**: a linear classifier that finds the hyperplane maximizing the margin between investment-grade and non-investment-grade bonds; Biotron's new bond is classified by which side of the margin it falls on.
- **KNN**: classifies the new bond by the majority rating among its $k$ nearest neighbors (most similar existing rated bonds); $k$ must be pre-specified.

**Q3 — Support for Watson's confidence in the rating:**
Because both algorithms — using different classification approaches — **agree** on the rating, the classification is more likely to be robust/correct than if they had disagreed (disagreement would suggest sensitivity to the choice of algorithm).

**Q4 (penalized regression, best description):**
Penalized regression is a **category of general linear models used when the number of features and overfitting are concerns** (not "unrelated to" linear regression; the penalty is added to the *objective function*, not to the predicted target).

---

### Exam Tips

- **LASSO objective** = SSR + $\lambda \sum|\hat{b}_k|$; know that $\lambda = 0 \Rightarrow$ OLS, and that the penalty must **increase** with features included (a "penalty that decreases with more features" is always wrong on the exam)
- **SVM** = maximum-margin linear classifier; support vectors are the closest points to the boundary; soft margin uses a **cost parameter** to trade off margin width vs. misclassification penalty
- **KNN** = classify by majority vote among $k$ nearest neighbors; $k$ and the distance metric are both critical, analyst-chosen inputs; avoid even $k$ (ties)
- Both SVM and KNN require **labeled data** and address **classification** (or sometimes regression) — they are supervised techniques
- SVM handles high-dimensional, complex data well; KNN is simpler/more intuitive but more sensitive to feature selection and the choice of $k$
