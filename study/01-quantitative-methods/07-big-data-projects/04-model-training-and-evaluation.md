---
layout: page
title: "Model Training and Evaluation"
permalink: /study/01-quantitative-methods/07-big-data-projects/04-model-training-and-evaluation/
next: /cfa/study/01-quantitative-methods/07-big-data-projects/05-financial-forecasting-case-study/
prev: /cfa/study/01-quantitative-methods/07-big-data-projects/03-data-exploration/
---
## Summary: Model Training and Evaluation (CFA Level II — Quantitative Methods)

---

### Overview: Three Tasks of Model Training

| Task | Purpose |
|---|---|
| **Method selection** | Choose which ML method(s) to use, guided by the task, data type, and data size |
| **Performance evaluation** | Quantify how well the trained model performs, using complementary metrics |
| **Tuning** | Take actions to improve performance (often repeated through several iterations) |

Model training is the **same general process** for structured and unstructured data, because by this stage unstructured data has already been converted into a structured matrix (DTM) during preparation/wrangling.

**Model fit** describes how well an ML model generalizes to new (out-of-sample) data:

| Fit | Symptom | Cause |
|---|---|---|
| **Underfit** | High errors even on training data | Dataset too small, or too few features |
| **Overfit** | Near-zero training error, but poor out-of-sample performance | Dataset too small relative to complexity, or too many features |
| **Good fit** | Low, similar errors on training and CV data | Balanced dataset size / feature count |

> **Key insight**: **Feature engineering** tends to fix **underfitting** (adds explanatory power); **feature selection** tends to fix **overfitting** (removes noise/complexity).

---

### Method Selection

Three governing factors:

| Factor | Choices | Notes |
|---|---|---|
| **Supervised vs. unsupervised** | Supervised needs **ground truth** (labeled target variable); unsupervised has none | Supervised: regression, ensemble trees, SVM, NN (e.g., bond default prediction). Unsupervised: dimensionality reduction, clustering, anomaly detection (e.g., clustering financial institutions) |
| **Type of data** | Numerical, text, image, speech | Numerical → CART; Text → GLM, SVM; Image → NN/deep learning; Speech → deep learning |
| **Size of data** | # instances vs. # features | **SVM**: works well on "wide" data (10,000–100,000+ features, fewer instances). **NN**: works well on "long" data (instances ≫ features) |

**Data splitting (supervised learning)** — common **60:20:20** split, via random sampling (e.g., k-fold), balanced within levels of the target variable:

| Subset | Share | Purpose |
|---|---|---|
| **Training set** | ~60% | Train the model |
| **Cross-validation (CV) set** | ~20% | Tune and validate |
| **Test set** | ~20% | Final, out-of-sample evaluation |

> Unsupervised learning requires **no split** — there is no labeled target to validate against.

**Class imbalance**: when one class dominates, a naive model can achieve high accuracy while misclassifying every minority-class case (e.g., predicting "no default" for every high-yield bond issuer). Remedies:

| Technique | Action |
|---|---|
| **Undersampling** | Randomly reduce the majority ("0") class |
| **Oversampling** | Randomly duplicate/expand the minority ("1") class |
| **Synthetic data generation** | Create synthetic minority-class observations |

---

### Performance Evaluation: Error Analysis (Confusion Matrix)

|  | **Actual Class "1"** | **Actual Class "0"** |
|---|---|---|
| **Predicted Class "1"** | True Positive (TP) | False Positive (FP) — Type I error |
| **Predicted Class "0"** | False Negative (FN) — Type II error | True Negative (TN) |

$$\boxed{\text{Precision } (P) = \frac{TP}{TP + FP}}$$

$$\boxed{\text{Recall } (R) = \frac{TP}{TP + FN}}$$

$$\boxed{\text{Accuracy} = \frac{TP + TN}{TP + FP + TN + FN}}$$

$$\boxed{F_1 \text{ score} = \frac{2 \times P \times R}{P + R}}$$

| Metric | Use When... |
|---|---|
| **Precision** | Cost of a **false positive** (Type I) is high (e.g., scrapping a perfectly good product flagged "defective") |
| **Recall** | Cost of a **false negative** (Type II) is high (e.g., shipping a defective product flagged "good") |
| **Accuracy** | Overall correctness; most meaningful with a **balanced** class distribution |
| **F1 score** | Overall balance of precision/recall; preferred over accuracy with **unequal** class distribution |

**Worked mini-example** (TP=3, FP=1, FN=2, TN=4):

$$P = \frac{3}{3+1} = 0.75 \qquad R = \frac{3}{3+2} = 0.60$$

$$F_1 = \frac{2 \times 0.75 \times 0.60}{0.75+0.60} = 0.67 \qquad \text{Accuracy} = \frac{3+4}{3+1+4+2} = 0.70$$

> **Key insight**: F1 skews toward the **lower** of precision and recall (harmonic mean), giving a more honest "equilibrium" score than a simple average would.

---

### Performance Evaluation: ROC and AUC

$$\boxed{\text{False Positive Rate (FPR)} = \frac{FP}{TN+FP}}$$

$$\boxed{\text{True Positive Rate (TPR)} = \frac{TP}{TP+FN}} \quad (\text{same as Recall})$$

- The **ROC curve** plots TPR (y-axis) vs. FPR (x-axis) across cutoff/threshold values (e.g., predicted probability *p* from logistic regression).
- **AUC** (area under the curve): closer to **1.0** = near-perfect prediction; **0.5** = random guessing.
- A more **convex** curve (bulging toward the top-left) = better-performing model.

---

### Performance Evaluation: RMSE (Regression / Continuous Targets)

$$\boxed{RMSE = \sqrt{\frac{\sum_{i=1}^{n}(\text{Predicted}_i - \text{Actual}_i)^2}{n}}}$$

A single summary metric for continuous-outcome models (e.g., regression); a **smaller RMSE** indicates better fit.

---

### Tuning

| Concept | Definition | Examples |
|---|---|---|
| **Parameters** | Learned *from* the training data via optimization | Regression coefficients, NN weights, SVM support vectors |
| **Hyperparameters** | Set *manually* to estimate parameters; not learned from data | Regularization term (λ), # hidden layers/activation function (NN), # trees/tree depth (ensembles), *k* (kNN, k-means), p-threshold (logistic regression) |

**Bias–variance tradeoff**:

| Error Type | Associated With | Symptom |
|---|---|---|
| **Bias error** | Underfitting | Model is too simple; performs poorly on **both** training and CV data |
| **Variance error** | Overfitting | Model memorizes training data; $Error_{CV} \gg Error_{train}$ |

$$\boxed{\text{Total error} = \text{Bias error} + \text{Variance error} \; (\text{minimize the sum, not each individually})}$$

**Regularization (λ) and the fitting curve**:

| Regularization Level | Training Error | CV Error | Result |
|---|---|---|---|
| **Slight/none** | Small | Large | High **variance** → overfitting |
| **Large** | Large | Large | High **bias** → underfitting |
| **Optimum** | Small | Small (≈ training error) | Balanced fit |

- **Grid search**: systematically trains the model across combinations of hyperparameter values, cross-validating each, to find the combination with the best (and most *similar* train/CV) performance.
- **Ceiling analysis**: for models with sub-model components (e.g., a sentiment sub-model feeding a larger price-prediction model), evaluates each pipeline stage's contribution to identify which sub-model most needs tuning.

> **Response to high bias/variance**: high **variance** → add training instances or **reduce** features; high **bias** → **increase** features (or model complexity), then re-train/re-tune.

---

### Question Set Answers

**Q1 (Comparing confusion matrices at different thresholds, e.g., p = 0.60 vs. p = 0.75 vs. p = 0.45):**
- **Higher threshold (0.75)**: fewer FPs, higher precision — but more FNs, lower recall. Fewer TP/TN overall → lower accuracy/F1 than the balanced (0.60) model.
- **Lower threshold (0.45)**: fewer FNs, higher recall — but more FPs, lower precision. Same pattern: lower accuracy/F1 than the 0.60 model.
- **Trade-off**: Precision matters more when FP cost is high; recall matters more when FN cost is high. A threshold near the point that **maximizes accuracy and F1 jointly** balances the trade-off best.

**Q2 (Model shows AUC 99.1% on training vs. 89.4% on CV — what's happening, and what's the fix?)**
→ Large train/CV gap = **overfitting** (high variance). Fix: apply **regularization** (e.g., LASSO) and/or tighten feature selection to remove noisy tokens/features; re-check that regularized train/CV AUCs converge.

**Q3 (Small training error, large CV error under current hyperparameters — model is best described as?)**
→ **Overfitted / high variance**, not underfitted and not "having low variance."

---
