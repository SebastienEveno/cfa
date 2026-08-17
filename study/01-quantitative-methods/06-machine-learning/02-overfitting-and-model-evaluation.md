---
layout: page
title: "Overfitting and Model Evaluation"
permalink: /study/01-quantitative-methods/06-machine-learning/02-overfitting-and-model-evaluation/
next: /cfa/study/01-quantitative-methods/06-machine-learning/03-penalized-regression-svm-knn/
prev: /cfa/study/01-quantitative-methods/06-machine-learning/01-introduction-to-machine-learning/
---
## Summary: Overfitting and Model Evaluation (CFA Level II — Quantitative Methods)

---

### Generalization and the Overfitting Problem

ML's flexibility (non-parametric, non-linear models) comes at a price: models can become overly complex, hard to interpret, sensitive to noise, and can **fit the training data too well** — a problem called **overfitting**. An overfit model has absorbed noise/random fluctuations from the training data into its learned relationship, so it fails to **generalize** to new data.

> **Key insight**: Evaluation of any ML algorithm focuses on its **prediction error on new (out-of-sample) data**, not on its goodness of fit on the training data.

**The "custom suit" analogy:**

| Fit type | Analogy | Description |
|---|---|---|
| **Underfitting** | A baggy suit that fits no one | Model fails to capture the relationships in the data |
| **Overfitting** | A suit tailored to fit only one person | Model incorporates noise/spurious correlations; "memorized" rather than "learned" the data — perfect hindsight, no foresight |
| **Good/robust fit** | A universal suit fitting everyone of similar dimensions | Fits training data well AND generalizes well out-of-sample |

**Complexity** = number of features/terms/branches, and whether the model is linear or non-linear (non-linear = more complex). As complexity rises, overfitting risk rises.

---

### Dataset Partitioning

A dataset is typically split into three non-overlapping samples:

| Sample | Purpose | Classification |
|---|---|---|
| **Training sample** | Train the model (target Y known) | In-sample |
| **Validation sample** | Tune the model, compare structural choices, select hyperparameters | In-sample |
| **Test sample** | Confirm the trained/tuned model's predictive power on new data | Out-of-sample |

---

### Errors: Bias, Variance, and Base Error

Total **out-of-sample error ($E_{out}$)** decomposes into three sources:

| Error source | Description | Consequence |
|---|---|---|
| **Bias error** | Degree to which a model fits the training data; erroneous assumptions → poor approximation | High bias → **underfitting**, high in-sample error |
| **Variance error** | How much results change in response to new data (validation/test) | High variance → **overfitting**, high out-of-sample error |
| **Base error** | Randomness inherent in the data | Irreducible |

$$\boxed{E_{out} = \text{Bias error} + \text{Variance error} + \text{Base error}}$$

**Learning curves** plot accuracy (= 1 − error rate) in validation/test samples against training sample size:

| Scenario | Pattern |
|---|---|
| **High bias error (underfit)** | $E_{out}$ and $E_{in}$ converge, but to a level **below** the desired accuracy rate; more data does not help |
| **High variance error (overfit)** | Training and validation error rates **fail to converge** |
| **Good bias–variance tradeoff** | Both converge close to the desired accuracy rate |

**Fitting curve**: plots $E_{in}$ and $E_{out}$ (y-axis) against model complexity (x-axis). As complexity rises, $E_{in}$ (bias error) falls while $E_{out}$ (variance error) eventually rises. **Linear functions** are more prone to bias/underfitting; **non-linear functions** are more prone to variance/overfitting.

> **Key insight**: An **optimal complexity** point exists where total error ($E_{in}+E_{out}$ tradeoff) is minimized — just before total error starts rising due to increasing variance error. Finding this point is the core of managing overfitting risk.

---

### Preventing Overfitting

Two complementary strategies:

| Strategy | Principle | Mechanism |
|---|---|---|
| **1. Complexity reduction (regularization)** | Occam's razor — the simplest solution tends to be correct | Penalize algorithms that are too complex/flexible; constrain to parameters that reduce out-of-sample error |
| **2. Proper data sampling (cross-validation)** | Avoid sampling bias | Careful partitioning into training/validation/test; estimate out-of-sample error directly via validation samples |

**K-fold cross-validation**:

1. Shuffle the data (excluding the test sample) randomly.
2. Divide into $k$ equal sub-samples (typically $k = 5$ or $10$).
3. Use $k-1$ sub-samples for training and the remaining (kth) sub-sample for validation.
4. Repeat $k$ times so every data point is used in training $k-1$ times and in validation once.
5. Average the $k$ validation errors (mean $E_{val}$) as the estimate of $E_{out}$.

> **Limitation**: K-fold cross-validation **cannot** be used with time-series data, where only the most recent data can reasonably serve as the validation sample (walk-forward/time-series cross-validation is used instead — see the neural network case study later in this module).

**Regularization** more broadly describes methods that reduce statistical variability in high-dimensional estimation problems by shrinking coefficient estimates toward zero, avoiding complex models and overfitting risk. It can be applied to both linear and non-linear models (e.g., stabilizing covariance-matrix estimation for large portfolios, where asset returns exhibit strong multi-collinearity).

---

### Question Set Answers

**Q1 — Which statement about model generalization is most accurate?**
"The model retains its explanatory power when predicting using new data (out-of-sample)" is correct. A model with low in-sample explanatory power describes a poorly fitting (high-bias) model, not the concept of generalization itself; a model that loses power out-of-sample describes overfitting/poor generalization.

**Q2 — A model performs well in-sample but poorly out-of-sample. This indicates:**
**Overfitting and variance error.** High in-sample accuracy with poor new-data performance is the signature of overfitting (high variance error), not underfitting (which would show poor in-sample performance too).

**Q3 — How can the overfitting problem be addressed?**
Use **k-fold cross-validation** to estimate out-of-sample error directly, then adjust the model. (Not: a penalty that *decreases* with the number of features — a valid overfitting penalty must *increase* with feature count; not: switching to unsupervised learning, since the problem at hand uses labeled data for classification.)

---

### Exam Tips

- $E_{out} = \text{Bias} + \text{Variance} + \text{Base error}$ — know each source and which fitting failure it signals
- Underfitting → high bias error, high $E_{in}$; overfitting → high variance error, high $E_{out}$ with low $E_{in}$
- Training + validation = in-sample; test = out-of-sample
- Two overfitting remedies: (1) **regularization/complexity penalty** (must *increase* with number of features — LASSO $\lambda=0$ means NO regularization), and (2) **cross-validation** (k-fold, typically k = 5 or 10)
- K-fold cross-validation does **not** work on time-series data — use walk-forward (time-series) cross-validation instead
- Optimal model complexity sits where the bias and variance error curves cross on the fitting curve — before variance error dominates
