---
layout: page
title: "Financial Forecasting Case Study"
permalink: /study/01-quantitative-methods/07-big-data-projects/05-financial-forecasting-case-study/
next: /cfa/study/01-quantitative-methods/07-big-data-projects/06-summary/
prev: /cfa/study/01-quantitative-methods/07-big-data-projects/04-model-training-and-evaluation/
---
## Summary: Financial Forecasting Case Study (CFA Level II — Quantitative Methods)

---

### Setup

**Goal**: classify English financial-news sentences (from LexisNexis, covering NASDAQ OMX Helsinki companies) as expressing **positive** or **negative** sentiment about the underlying stock — a supervised, binary text-classification task. This is a "**robo-reader**" application: automated analysis of large text volumes to assess sentiment **polarity** toward a **target** (e.g., "XYZ Corp is doing terrific things" = positive polarity, target = XYZ Corp).

- Source: **Financial Phrase Bank** (Researchgate.net), cross-sectional data.
- Sentiment already hand-labeled positive/neutral/negative by the source.
- This project uses only the "AllAgree" and "75%Agree" positive/negative sentences: **2,180 total** (1,457 positive, 723 negative).

---

### Text Curation, Preparation, and Wrangling

**Curation**: raw sentences + sentiment label parsed from a `sentence@sentiment` format into a two-column **corpus** (data table): Sentence | Sentiment.

**Cleansing** (no HTML present, so that step is skipped):

| Step | Action | Rationale |
|---|---|---|
| **Punctuation** | % and $ substituted with word annotations (`percentSign`, `dollarSign`) before removing sentence punctuation (periods, commas, semicolons) and stray symbols (+, °) | Preserves financial meaning |
| **Numbers** | All numeric values removed | Sentiment here depends on **words** ("boosted," "fell"), not the magnitude of numbers — but magnitude *words* like "million"/"mln"/"mn" are first expanded to the full word so that context ("EUR million") survives |
| **White space** | Extra spaces from prior steps stripped | Keeps text intact |

**Wrangling (normalization)**:

| Step | Applied? | Why |
|---|---|---|
| **Lowercasing** | Yes | Consolidates case variants |
| **Stop word removal** | **No** (at this stage) | Words like "not," "more," "very," "few" carry sentiment-relevant meaning; premature removal risks losing negation. Revisited later via **custom** stop words identified through frequency analysis |
| **Stemming** | Yes | Simple and appropriate for sentiment prediction (e.g., "decreased" → "decreas") |
| **Currency consolidation** | Yes | EUR, USD, and the earlier `dollarSign` substitution are unified into a single token `currencysign` — removes redundant-but-different tokens while preserving meaning |

Result: **2,673 unique tokens** form the preliminary unigram BOW, ready to build a DTM — but the **final** DTM waits until after data exploration removes uninformative tokens.

> **Key insight**: Notice the deliberate departures from the "generic" text-cleansing steps in the Data Preparation module — stop words are *kept* initially, and numeric substitution is more aggressive (numbers fully removed, not just tagged) — because this project's domain (sentiment prediction) makes context words more valuable than magnitude data. **Text preprocessing choices should always be driven by the end-use of the model.**

---

### Data Exploration

**EDA findings**:
- Most frequent tokens overall ("the," "million," "currencysign," "in," "to," "of," "from," "a," "profit," "for," "it," "net," "year," "oper") are essentially **identical between the positive and negative sentiment classes** — meaning they carry no discriminating power and are strong candidates for removal.
- Sentence-length histogram (26–273 characters, mean ≈120) showed no unusual outlier sentences requiring removal.
- **Word clouds** split by sentiment class showed intuitively sensible discriminating stems: "decreas," "down" cluster in negative; "increas," "rose" cluster in positive.

**Feature selection — Term Frequency (TF), Document Frequency (DF), and TF-IDF**:

$$\boxed{TF_{\text{collection}} = \frac{\text{TotalWordCount (occurrences in whole corpus)}}{\text{Total words in corpus}}}$$

$$\boxed{TF_{\text{sentence}} = \frac{\text{WordCountInSentence}}{\text{TotalWordsInSentence}}}$$

$$\boxed{DF = \frac{\text{SentenceCountWithWord}}{\text{Total number of sentences}}}$$

$$\boxed{IDF = \log\left(\frac{1}{DF}\right)}$$

$$\boxed{TF\text{-}IDF = TF_{\text{sentence}} \times IDF}$$

| Quantity | Meaning of a High Value | Meaning of a Low Value |
|---|---|---|
| **TF (collection level)** | Very common word (often a stop word) | Rare/proper noun |
| **DF** | Present in most sentences → not discriminating | Present in few sentences → potentially discriminating |
| **IDF** | Term is *rare* across the corpus (low DF) | Term is *common* across the corpus (high DF) |
| **TF-IDF** | Frequent **within** a sentence but rare **across** the corpus → important, unique term | Common everywhere → not discriminating |

With **44,151** total (non-unique) tokens across 2,180 sentences, TF at the collection level ranged from ~2.3e-05 to ~5.4e-02 (word "the"). The team removed:
- **14 words** with TF > 99.5th percentile (custom stop words: "the," "million," "currencysign," "in," "to," "of," "from," "and," "not," "year," "a," "profit," "for," "it")
- **714 words** with TF < 30th percentile (sparse/rare terms, mostly proper nouns)
- Single-character tokens

**Feature engineering**: both **unigrams and bigrams** were retained in the final BOW. Bigrams matter for sentiment because they preserve **negation** and short causal phrases otherwise lost when stop words are stripped in isolation (e.g., "loss_prior," "tax_loss," "sale_increas," "oper_rose").

---

### Model Training

Labels recoded: positive = 1, negative = 0. Split **60:20:20** (training:CV:test) via random sampling within sentiment levels:

| Split | Sentences | DTM Dimensions | Purpose |
|---|---|---|---|
| **Master** | 2,180 | 2,180 × 11,501 | — |
| **Training** | 1,309 (60%) | 1,309 × 9,188 | Fit the model; defines the final BOW (columns) used across all splits |
| **CV** | 435 (20%) | 435 × 9,188 | Tune the threshold and validate |
| **Test** | 436 (20%) | 436 × 9,188 | Final out-of-sample evaluation |

> The **columns** of all three DTMs are identical (the training-set BOW); only the **rows** (sentences) and their TF values differ, since each split's TF values are computed from its own sentences.

**Method selection**: SVM, decision trees, and logistic regression were all viable (supervised, text data, wide feature set). SVM and **logistic regression** outperformed decision trees; the case study proceeds with **logistic regression**, which handles sparse DTMs well — coefficients shrink toward zero for tokens absent from most sentences, effectively letting the model ignore low-value features (reinforced by regularization).

Logistic regression produces a probability $p$ that a sentence is positive (y = 1); a **threshold** on $p$ converts probability into a class prediction.

---

### Performance Evaluation and Tuning

**Before regularization**: AUC = **96.5%** (training) vs. **86.2%** (CV) → large gap signals **overfitting**.

**LASSO regularization** applied (penalizes/zeroes out uninformative coefficients):

| Model | Training AUC | CV AUC | Interpretation |
|---|---|---|---|
| No regularization, all tokens (incl. stop words, sparse terms) | 99.1% | 89.4% | Overfit |
| Unregularized (curated features) | 96.5% | 86.2% | Overfit |
| **LASSO-regularized (curated features)** | 95.7% | 94.8% | **Good fit** — small, similar train/CV gap |

**Threshold tuning** (via the CV set, sweeping *p* from 0.01 to 0.99, tracking accuracy and F1):

| Threshold *p* | Precision | Recall | F1 | Accuracy |
|---|---|---|---|---|
| 0.50 (default) | 0.88 | 0.98 | 0.93 | 0.90 |
| **0.60 (selected)** | **0.90** | **0.98** | **0.94** | **0.91** |

$$\boxed{\text{Confusion Matrix (CV, } p=0.60\text{)}: TP=284,\ FP=30,\ FN=7,\ TN=114}$$

The threshold of **0.60** maximized accuracy and F1 jointly on the CV data — the standard tuning objective when false positives and false negatives are judged equally costly.

---

### Results and Interpretation

Applying the final model (logistic regression + LASSO, threshold *p* = 0.60) to the **held-out test set** (436 sentences, never used in training or tuning):

$$\boxed{\text{Confusion Matrix (Test)}: TP=284,\ FP=35,\ FN=7,\ TN=110}$$

$$P = \frac{284}{284+35} = 0.89 \qquad R = \frac{284}{284+7} = 0.98$$

$$F_1 = \frac{2 \times 0.89 \times 0.98}{0.89+0.98} = 0.93 \qquad \text{Accuracy} = \frac{284+110}{284+35+110+7} = 0.90$$

> **Key insight**: Performance on training (95.7% AUC), CV (94.8% AUC, 91% accuracy), and test (90% accuracy, 93% F1) is **consistent across all three datasets** — this is the signature of a well-generalizing, non-overfit model, and confirms it is ready to score **new** sentences (news wires, earnings-call transcripts, quarterly reports) after applying the *identical* cleansing/wrangling pipeline used on the training data.

The final model is simply the set of penalized logistic-regression coefficients on the training BOW's unigram/bigram tokens; scoring new text means re-running the same cleansing → tokenization → DTM-construction pipeline (using the *training* BOW's columns) and applying the fitted coefficients plus the 0.60 threshold.

---

### Question Set Answers

**Q1 (TF at collection and sentence level for token "a" in a 34-word sentence where "a" appears 6 times and occurs 873 times / 44,151 total corpus words; vs. token "great" appearing 4 times corpus-wide, once in a 9-word sentence):**
- TF(collection, "a") = 873/44,151 = **1.977%**; TF(collection, "great") = 4/44,151 = **0.009%**.
- TF(sentence, "a") = 6/34 = **17.6%**; TF(sentence, "great") = 1/9 = **11.1%**.
- High collection-level TF ("a") → likely a stop word; low collection-level TF ("great") → likely rare/proper noun *or*, at intermediate frequency, a genuinely useful discriminator.

**Q2 (TF-IDF for the same two tokens, given DF("a") = 687/2,180 = 31.5%, DF("great") = 4/2,180 = 0.18%):**
- IDF("a") = log(1/0.315) = **1.155**; IDF("great") = log(1/0.0018) = **6.301**.
- TF-IDF("a") = 0.176 × 1.155 = **0.204**; TF-IDF("great") = 0.111 × 6.301 = **0.700**.
- "great" scores far higher — it is comparatively rare corpus-wide but meaningfully present where it occurs, i.e., a discriminating term; "a" scores low — ubiquitous and non-discriminating.

**Q3 (Comparing CV confusion matrices at thresholds 0.60 [TP 284, FP 30, FN 7, TN 114], 0.75 [TP 281, FP 28, FN 17, TN 110], and 0.45 [TP 281, FP 41, FN 4, TN 110]):**
- **0.75** vs. **0.60**: slightly better precision (0.91 vs. 0.90, fewer FPs) but materially worse recall (0.94 vs. 0.98, many more FNs) → lower accuracy/F1 than 0.60.
- **0.45** vs. **0.60**: slightly better recall (0.99 vs. 0.98, fewer FNs) but worse precision (0.87 vs. 0.90, many more FPs) → lower accuracy/F1 than 0.60.
- **Conclusion**: 0.60 remains superior on the joint (F1/accuracy) criterion; 0.75 favors precision-sensitive contexts (e.g., avoid buying on a false "positive" sentiment signal), while 0.45 favors recall-sensitive contexts (e.g., avoid missing/shorting on a false "negative" signal).

---
