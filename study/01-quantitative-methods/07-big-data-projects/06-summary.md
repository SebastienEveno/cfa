---
layout: page
title: "Big Data Projects Formula and Process Summary"
permalink: /study/01-quantitative-methods/07-big-data-projects/06-summary/
prev: /cfa/study/01-quantitative-methods/07-big-data-projects/05-financial-forecasting-case-study/
---
## Summary: Big Data Projects Formula and Process Summary (CFA Level II — Quantitative Methods)

---

### The ML Project Pipeline — Structured vs. Text

| # | Structured Data Step | Text Data Step | Core Output |
|---|---|---|---|
| 1 | Conceptualization | Text problem formulation | Defined objective, inputs/outputs |
| 2 | Data collection | Data (text) curation | Raw data/text acquired (and labeled, if supervised) |
| 3 | Data preparation and wrangling | Text preparation and wrangling | Cleansed, structured data / DTM |
| 4 | Data exploration | Text exploration | EDA + selected/engineered features |
| 5 | Model training | Model training | Trained, evaluated, tuned model |

> **Key insight**: These five steps are **iterative**, not linear — findings at any stage can send the project back to conceptualization/problem formulation.

---

### Formula Summary

**Scaling (structured data):**

$$\boxed{X_{i(\text{normalized})} = \frac{X_i - X_{min}}{X_{max} - X_{min}}} \qquad \boxed{X_{i(\text{standardized})} = \frac{X_i - \mu}{\sigma}}$$

**Outlier bounds (IQR method):**

$$\boxed{[\,Q1 - 1.5 \times IQR,\; Q3 + 1.5 \times IQR\,]} \quad \text{(use } 3.0\times \text{ for extreme values)}$$

**Text frequency measures:**

$$\boxed{TF_{\text{collection}} = \frac{\text{Total occurrences of token in corpus}}{\text{Total tokens in corpus}}} \qquad \boxed{TF_{\text{sentence}} = \frac{\text{WordCountInSentence}}{\text{TotalWordsInSentence}}}$$

$$\boxed{DF = \frac{\text{\# documents containing token}}{\text{Total \# documents}}} \qquad \boxed{IDF = \log\left(\frac{1}{DF}\right)} \qquad \boxed{TF\text{-}IDF = TF_{\text{sentence}} \times IDF}$$

**Classification performance metrics:**

$$\boxed{\text{Precision} = \frac{TP}{TP+FP}} \qquad \boxed{\text{Recall (TPR)} = \frac{TP}{TP+FN}}$$

$$\boxed{\text{Accuracy} = \frac{TP+TN}{TP+FP+TN+FN}} \qquad \boxed{F_1 = \frac{2 \times P \times R}{P+R}}$$

$$\boxed{FPR = \frac{FP}{TN+FP}}$$

**Regression performance metric:**

$$\boxed{RMSE = \sqrt{\frac{\sum_{i=1}^{n}(\text{Predicted}_i - \text{Actual}_i)^2}{n}}}$$

---

### Quick Reference — All Formulas

| Measure | Formula |
|---|---|
| Normalization | $(X_i - X_{min})/(X_{max}-X_{min})$ |
| Standardization | $(X_i - \mu)/\sigma$ |
| Outlier bound (IQR) | $Q1 - 1.5 \times IQR$ to $Q3 + 1.5\times IQR$ |
| TF (collection level) | Token occurrences in corpus / total corpus tokens |
| TF (sentence level) | Token count in sentence / total words in sentence |
| DF | # documents with token / total # documents |
| IDF | $\log(1/DF)$ |
| TF-IDF | $TF_{\text{sentence}} \times IDF$ |
| Precision | $TP/(TP+FP)$ |
| Recall / TPR | $TP/(TP+FN)$ |
| FPR | $FP/(TN+FP)$ |
| Accuracy | $(TP+TN)/(TP+FP+TN+FN)$ |
| F1 score | $2PR/(P+R)$ |
| RMSE | $\sqrt{\sum(\text{Predicted}-\text{Actual})^2/n}$ |

---

### Question Set Answers

**Q1 (Steele's "second step" claim — structured second step = data collection, text second step = text preparation and wrangling; correct?)**
→ **Incorrect** for the text pipeline: the second text step is **data (text) curation**, not text preparation and wrangling (which is step 3). The claim that both pipelines share step 4 (exploration) is correct.

**Q2 (10%–15% of social media content is estimated to be fake — which "V" does this concern?)**
→ **Veracity** — the credibility/reliability of the data source, not volume or velocity.

**Q3 (Non-uniform date formats in a raw dataset column)** → **Non-uniformity error** (same underlying data, inconsistent format — not invalid or duplicated).

**Q4 (A row with positive interest expense but zero total debt)** → **Inconsistency error** — a firm with interest expense should logically carry debt; the two fields conflict.

**Q5 (Normalizing an Interest Expense value of 1.2, given min = 0.2, max = 12.2)**
→ $(1.2-0.2)/(12.2-0.2) = 1.0/12.0 = 0.083$.

**Q6 (Confusion matrix with TP=182, FP=52, FN=31, TN=96 — precision, F1, accuracy?)**
→ $P = 182/(182+52) = 0.778$ (78%); $R = 182/(182+31) = 0.855$; $F_1 = 2(0.778)(0.855)/(0.778+0.855) = 0.814$ (81%); Accuracy $= (182+96)/(182+52+96+31) = 0.770$ (77%).

**Q7 (Class imbalance where "failed" start-ups are the large majority class — how to help the model discriminate?)**
→ Randomly **oversample the minority (successful) class** or undersample the majority (failed) class — either rebalances the training data.

**Q8 (AUC 56.7%/57.3% at p=0.57 vs. 91.3%/89.7% at p=0.79 vs. 98.4%/87.1% at p=0.84 — which threshold gives the best-*fitting* model?)**
→ **p = 0.79** — its training and CV AUCs are both high **and close together** (small gap), unlike p = 0.84, which shows a large train/CV gap (overfitting), and p = 0.57, where both are weak (underfitting/poor discrimination).

**Q9 (Grid search shows small training error but a much larger CV error under current hyperparameters — how to fix?)**
→ This is **high variance (overfitting)**. Apply stronger regularization (e.g., LASSO), reduce the feature set via better feature selection, or add more training instances.

---

### Exam Tips

- **Know the two five-step pipelines cold** — this is the single most testable structure in the LM:
  1. **Conceptualization** (or **text problem formulation**) — define output, use, and business embedding
  2. **Data collection** (or **data/text curation**) — internal vs. external sourcing; for text, may require expert labeling/annotation
  3. **Data preparation and wrangling** (or **text preparation and wrangling**) — cleansing then preprocessing
  4. **Data exploration** (or **text exploration**) — EDA → feature selection → feature engineering
  5. **Model training** — method selection → performance evaluation → tuning
  - Remember: only the **first four** steps differ between structured and text pipelines; **model training is the same**.
  - The process is **iterative** — expect exam items testing "which step comes next" or "what step does this decision belong to."
- **Six structured-data error types**: incomplete, invalid, inaccurate, inconsistent, non-uniform, duplicate — know each definition and a one-line example (missing / out-of-range / wrong-but-plausible / contradicts other fields / different formats / repeated row).
- **Five structured preprocessing transformations**: extraction, aggregation, filtration, selection, conversion — "selection" here is a raw column drop, **not** the later statistical feature-selection step.
- **Normalize vs. standardize**: normalize → [0,1], sensitive to outliers, no distributional assumption; standardize → mean 0/SD 1, less outlier-sensitive, assumes normality. Always treat outliers **before** scaling.
- **Text cleansing order matters**: annotate meaningful punctuation (%, $, ?) *before* stripping the rest; replace numbers only after preserving magnitude words (million/billion) if magnitude context matters to the task.
- **Stemming vs. lemmatization**: stemming = rule-based, may produce non-words, more common in practice; lemmatization = dictionary/grammar-based, always a real word, more expensive.
- **BOW ignores order** (loses negation, e.g., "no market"); **n-grams** partially restore it — bigrams/trigrams are the standard fix tested on exams.
- **DTM**: rows = documents, columns = tokens, cells = a value (count, TF, or TF-IDF) — the bridge from unstructured to structured data.
- **Noisy text features sit at both frequency extremes**: very high TF (stop words) → **underfitting** risk; very low TF (sparse/rare terms) → **overfitting** risk. Chi-square and mutual information rank tokens by class-discriminating power; DF/TF simply prune by frequency.
- **Feature selection fixes overfitting; feature engineering fixes underfitting** — a frequently tested pairing.
- **Confusion matrix formulas**: memorize precision (FP-focused), recall (FN-focused), accuracy (needs balanced classes to be meaningful), and F1 (harmonic mean, favors the smaller of P/R) — and know which metric to prioritize given a stated Type I vs. Type II error cost.
- **ROC/AUC**: AUC → 1.0 is excellent, 0.5 is random guessing; a large gap between training AUC and CV AUC signals **overfitting**, prompting regularization (e.g., LASSO).
- **Parameters are learned; hyperparameters are set manually** and tuned via heuristics like **grid search**; the **fitting curve** plots training vs. CV error against a hyperparameter (e.g., λ) to visualize the bias–variance tradeoff.
- **60:20:20 split** (train:CV:test) is the default assumption unless stated otherwise; supervised learning needs the split, unsupervised does not.
- **Class imbalance**: oversample the minority or undersample the majority class (or generate synthetic minority observations) to prevent a naive high-accuracy/no-discrimination model.
- In the **financial forecasting case study**, remember the counterintuitive choices driven by the sentiment-prediction objective: stop words were *kept* initially (negation matters), and the *threshold* (not just the model) was tuned on the CV set (0.50 → 0.60) to jointly maximize accuracy and F1 — a classic tested numeric scenario.

---
