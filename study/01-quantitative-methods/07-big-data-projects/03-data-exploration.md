---
layout: page
title: "Data Exploration"
permalink: /study/01-quantitative-methods/07-big-data-projects/03-data-exploration/
next: /cfa/study/01-quantitative-methods/07-big-data-projects/04-model-training-and-evaluation/
prev: /cfa/study/01-quantitative-methods/07-big-data-projects/02-data-preparation-and-wrangling/
---
## Summary: Data Exploration (CFA Level II — Quantitative Methods)

---

### Overview

Data exploration follows data preparation and precedes model training. It comprises three tasks:

| Task | Purpose |
|---|---|
| **Exploratory data analysis (EDA)** | Summarize/visualize the data to understand properties, patterns, relationships, and plan modeling strategy |
| **Feature selection** | Select only pertinent features, reducing model complexity and training time |
| **Feature engineering** | Create new features by transforming/combining existing ones to improve model performance |

> **Key insight**: Data exploration performed **without domain knowledge** risks uncovering spurious relationships that mislead the analysis. Collaboration between analysts, model designers, and domain experts is essential.

---

### Structured Data: Exploratory Data Analysis

| Dimensionality | Summary Statistics | Visualizations |
|---|---|---|
| **One-dimensional** | Mean, median, quartiles, range, SD, skewness, kurtosis | Histograms, bar charts, box plots, density plots |
| **Multi-dimensional** | Correlation matrix | Scatterplots, line graphs, stacked bar/line charts, multiple box plots (one per feature) |

- **Histograms**: equal bins + frequencies, show overall distribution shape.
- **Bar charts**: frequencies of categorical variables.
- **Box plots**: median, quartiles, and outliers for (normally distributed) continuous data.
- **Density plots**: smoothed histograms, often overlaid on histograms.
- **Scatterplots**: visualize potential relationships between two continuous features; confirm with formal tests.
- For **high-dimensional** data, dimension reduction (e.g., **PCA**) can facilitate EDA.

**Statistical tests to confirm visually-suggested relationships**:

| Type | Tests |
|---|---|
| **Parametric** | ANOVA, t-test, Pearson correlation |
| **Non-parametric** | Chi-square, Spearman rank-order correlation |

---

### Structured Data: Feature Selection

Objective: identify significant features that retain the dataset's important patterns/complexity while using **fewer features overall** (computing power and processing time are not free).

| Method | Approach |
|---|---|
| **Statistical scoring (univariate)** | Chi-square test, correlation coefficients, information-gain measures (e.g., regression R²) — rank features individually, retain/eliminate |
| **Dimensionality reduction** (e.g., PCA) | Creates new, **uncorrelated combinations** of features rather than including/excluding original features |

> **Key distinction**: Feature selection **includes or excludes** existing features unaltered. Dimensionality reduction **creates new combined features**. Both shrink the feature set, but they are not the same technique. Feature selection must not be confused with the earlier data-preprocessing "selection" transformation (removing obviously unneeded columns) — feature selection is a statistically driven, iterative process performed *after* EDA.

---

### Structured Data: Feature Engineering

Feature engineering decomposes or combines existing features into more informative ones — success of ML training depends heavily on how data is presented to the model.

| Data Type | Technique | Example |
|---|---|---|
| **Continuous** | Transform (e.g., logarithm of a product of features) | log(feature1 × feature2) |
| **Continuous → categorical** | Bucket using domain knowledge | "income_above_100k" flag (0/1) from a raw income figure, reflecting tax-bracket effects |
| **Categorical (multi-class)** | **One hot encoding** — decompose into binary indicator features | Education level (5 classes) → 5 binary features (is_highSchool, is_doctorate, …) |
| **Date-time** | Decompose into components | "hour of day," "day of week" — useful for trading-algorithm modeling |

---

### Unstructured Data: Text Exploratory Data Analysis

Common text analytics applications:

| Application | Learning Type | Goal |
|---|---|---|
| **Text classification** | Supervised | Classify texts into predefined classes |
| **Topic modeling** | Unsupervised | Group texts into topic clusters |
| **Sentiment analysis** | Supervised or unsupervised | Predict positive/neutral/negative sentiment |

**Term frequency (TF)** at the collection level:

$$\boxed{TF_{\text{(collection)}} = \frac{\text{Total occurrences of a token in the corpus}}{\text{Total number of tokens in the corpus}}}$$

- Used in **topic modeling** to find informative words (words with very high TF are usually stop words and get eliminated).
- **Chi-square** measures word association with class labels (positive/negative sentences, document classes) — detailed under feature selection below.
- **Word clouds** are the signature visualization for text EDA — font size ∝ frequency; color can encode additional dimensions.

---

### Unstructured Data: Text Feature Selection

Goal: shrink the vocabulary/BOW by removing **noisy features** — tokens that don't help (or hurt) ML training. Noisy features sit at **both ends** of the frequency spectrum:

| Noise Type | Frequency | Effect on Model |
|---|---|---|
| **Too frequent** (stop words) | High TF, present across nearly all texts | Model **underfits** — can't find a decision boundary since the term is everywhere |
| **Too rare** (sparse terms) | Low TF, present in only a few texts | Model **overfits** — misleads classification toward the rare term's class |

**Feature selection methods for text**:

| Method | Definition |
|---|---|
| **Frequency measures (TF / DF pruning)** | Filter tokens with very high/low TF; **document frequency (DF)** = # documents containing the token ÷ total # documents — simplest method, performs well with many thousands of tokens |
| **Chi-square test** | Tests independence between token occurrence and class occurrence; tokens with the **highest** chi-square statistic have the most discriminatory power |
| **Mutual information (MI)** | Measures how much information a token contributes to a class; MI = 0 if the token's distribution is identical across classes; MI → 1 as the token concentrates in one class |

---

### Unstructured Data: Text Feature Engineering

| Technique | What It Does | Example |
|---|---|---|
| **Numbers → typed tokens** | Different-length numbers carry different meaning | 4-digit → `/number4/` (likely a year); 10-digit → `/number10/` (likely an ID) |
| **N-grams** | Keep discriminative multi-word patterns intact | "stock_market" (bigram) distinguishes finance text from generic uses of "market" |
| **Named entity recognition (NER)** | Tags tokens to an object class (PERSON, ORGANIZATION, LOCATION, MONEY, TIME, PERCENT) using dictionaries + surrounding context | "CFA Institute" → ORGANIZATION |
| **Parts of speech (POS)** | Tags tokens with grammatical role (noun, verb, adjective, proper noun) | "market" as verb (marketing context) vs. noun (stock market context) |

> **Key insight**: NER and POS make features **more discriminative** and can also flag tokens that should be *exempted* from generic operations like lowercasing/stemming (e.g., "Institute" in "CFA Institute" is a proper-noun component, not the common verb).

---

### Question Set Answers

**Q1 (Are histograms/box plots/scatterplots relevant to a mixed structured + text dataset?)**
→ Yes for the **structured** fields (income, loan amount, credit score) — both overall and split by outcome class (defaulted vs. not). They do not apply directly to the free-text fields.

**Q2 (Visualization for free-response text)** → A **word cloud**, to quickly surface the most frequent (TF-weighted) words.

**Q3 (Ranking method for a discrete target variable)** → Univariate methods such as **chi-square** and **information gain**, applicable to both structured features and word-count-derived text features (TF, DF).

**Q4 (Bigram example that could discriminate loan outcomes)** → "credit_score" or "worked_hard" — bigrams preserve context that unigrams lose.

**Q5 (Choosing textual feature representations for a credit model)** → **BOW** (general starting point), **n-grams** (adds context, e.g., distinguishing "have_worked_hard" in non-default texts from "had_worked_harder" in a defaulted text), and **POS tags** (reveal whether responses lean on action words/verbs vs. descriptors/adjectives). **NER** is less useful here since borrower free-text rarely references people/places/organizations explicitly.

---
