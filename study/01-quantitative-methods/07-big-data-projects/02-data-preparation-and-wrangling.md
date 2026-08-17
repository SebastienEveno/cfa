---
layout: page
title: "Data Preparation and Wrangling"
permalink: /study/01-quantitative-methods/07-big-data-projects/02-data-preparation-and-wrangling/
next: /cfa/study/01-quantitative-methods/07-big-data-projects/03-data-exploration/
prev: /cfa/study/01-quantitative-methods/07-big-data-projects/01-big-data-and-the-ml-project-pipeline/
---
## Summary: Data Preparation and Wrangling (CFA Level II — Quantitative Methods)

---

### Overview

Data preparation and wrangling is the **foundation** of a big data project — most project time is spent here, and data quality directly drives model quality. It has two component tasks:

| Task | Definition |
|---|---|
| **Data cleansing (preparation)** | Examining, identifying, and mitigating errors in raw data |
| **Data wrangling (preprocessing)** | Transforming cleansed data (handling outliers, extracting variables, scaling) into a format ready for ML training |

Before collection even begins, the project needs conceptualization: stating the problem, defining objectives, identifying useful data points, and deciding supervised vs. unsupervised. Data can be sourced **internally** (databases, spreadsheets, "Readme" files) or **externally** (via API or vendor files) — external data saves time/cost but may mask the underlying trends ("alpha") that give an information edge.

---

### Structured Data: Cleansing (Data Preparation)

Six categories of raw-data errors:

| Error Type | Definition | Example | Fix |
|---|---|---|---|
| **Incompleteness** | Data are missing | Blank Gender, Salary, State fields | Investigate alternate sources; omit or impute (mean/median/mode/zero) |
| **Invalidity** | Data outside a meaningful range | Date of birth implies age > human lifespan | Verify against other administrative records |
| **Inaccuracy** | Data is not a true measure | "Don't Know" recorded for a Yes/No credit card field | Rectify with business records/administrators |
| **Inconsistency** | Data conflicts with other data points or reality | Name shows a female title but Gender = Male | Clarify against another source |
| **Non-uniformity** | Data not in an identical format | Dates in multiple formats; ambiguous currency symbols | Convert to a standard format |
| **Duplication** | Duplicate observations present | Same name + DOB appears in two rows | Remove duplicate entries |

> **Key insight**: The **business value of the project** dictates how much cleansing effort is warranted. In large datasets (10,000+ rows), dropping ~100 error-laden rows is usually immaterial; in small datasets (<1,000 rows), every row can matter, so errors must be resolved rather than dropped.

---

### Structured Data: Wrangling (Preprocessing)

Five common transformations applied to cleansed data:

| Transformation | Definition | Example |
|---|---|---|
| **Extraction** | Create a new variable from an existing one | "Age" extracted from "Date of Birth" |
| **Aggregation** | Combine two or more variables into one | "Total Income" = Salary + Other Income |
| **Filtration** | Remove rows not needed for the project | Drop non-US customers from a US-bank dataset |
| **Selection** | Remove columns not needed (≠ feature selection) | Drop "Name" once "ID" identifies the observation |
| **Conversion** | Convert variables to the correct type (nominal/ordinal/continuous/categorical) and units | Strip currency symbols; convert CAD to USD |

**Outlier detection**:

$$\boxed{\text{Outlier bounds (IQR method)} = [\,Q1 - 1.5 \times IQR,\; Q3 + 1.5 \times IQR\,]}$$

- **Standard deviation rule**: for normally distributed data, values beyond **3 standard deviations** from the mean are commonly flagged as outliers.
- **IQR rule**: works for any distribution; $IQR = Q3 - Q1$. Using a multiplier of **3.0** instead of 1.5 flags *extreme* values only.
- **Trimming (truncation)**: outliers are simply removed (e.g., a 5% trimmed dataset drops the top and bottom 5%).
- **Winsorization**: outliers are replaced with the nearest non-outlier maximum/minimum value rather than removed.

**Scaling** (perform only *after* outlier treatment):

$$\boxed{X_{i(\text{normalized})} = \frac{X_i - X_{min}}{X_{max} - X_{min}}}$$

$$\boxed{X_{i(\text{standardized})} = \frac{X_i - \mu}{\sigma}}$$

| Method | Range/Result | Sensitivity to Outliers | When to Use |
|---|---|---|---|
| **Normalization** | Rescales to [0, 1] | Sensitive — treat outliers first | Distribution unknown |
| **Standardization** | Mean 0, SD 1 | Less sensitive | Data is (or is assumed to be) normally distributed |

> Scaling matters most for distance-based methods such as **SVMs** and **ANNs**, which need homogeneous feature ranges to train well.

---

### Unstructured (Text) Data: Cleansing

Unstructured data (text, images, video, audio) make up roughly **80%** of all data and are not directly machine-readable. Converting text to structured data is called **text processing** (cleansing + preprocessing). Text **cleansing** removes non-useful elements, typically via **regular expressions (regex)**:

| Step | Action | Note |
|---|---|---|
| **Remove HTML tags** | Strip markup (e.g., `<h1>`, `<p>`) | Regex `<.*?>` matches any HTML tag |
| **Remove punctuation** | Strip most punctuation | Useful symbols (%, $, ?) are first substituted with annotations (`/percentSign/`, `/dollarSign/`, `/questionMark/`) to preserve meaning; sentence-ending periods → `/endSentence/`; hyphens/underscores may be kept to preserve compound words (e.g., "e-mail") |
| **Remove numbers** | Strip digits, substitute `/number/` | Preserves the signal "a number was here" without the (usually irrelevant) value; exception: information extraction tasks where the actual numeric value matters |
| **Remove white space** | Strip extra/leading/trailing spaces, tabs, line breaks | Often needed *after* the prior steps, which can introduce new white space |

> **Key insight**: **Order matters.** Removing punctuation before replacing numbers can merge digits (e.g., "1.2 million" → "12 million"), which is only harmless if numbers are subsequently replaced by a generic `/number/` tag anyway.

---

### Unstructured (Text) Data: Wrangling (Preprocessing)

**Tokenization**: a **token** ≈ a word; **tokenization** splits text into tokens (usually at the word level). A text is a collection of tokens.

**Normalization** steps:

| Step | Definition | Example |
|---|---|---|
| **Lowercasing** | Removes case distinctions | "The" and "the" → same token |
| **Removing stop words** | Drop common low-information words (the, is, a) | Reduces token count for training; custom stop words can be added (e.g., "exhibit" in financial filings) |
| **Stemming** | Rule-based reduction to a root **stem** (not necessarily a real word); Porter's algorithm is most common | "analyzed," "analyzing" → "analyz" |
| **Lemmatization** | Algorithmic reduction to the true morphological root (**lemma**), using language/grammar knowledge | "analyzed," "analyzing" → "analyze" |

| | Stemming | Lemmatization |
|---|---|---|
| **Approach** | Rule-based | Algorithmic, dictionary/grammar-aware |
| **Output** | May not be a real word | Always a valid word (the lemma) |
| **Cost** | Simple, fast | Computationally more expensive |
| **Prevalence in English** | More common | Less common |

> **Key insight**: Both stemming and lemmatization reduce **data sparseness** (many unique, low-frequency tokens) by collapsing word variants into one form, which helps train less complex ML models.

**Bag-of-words (BOW)**: the distinct set of tokens across all texts in the sample after normalization. BOW is memory-efficient but **ignores word order/position** — e.g., "no market" loses its negation once "no" is dropped as a stop word.

**Document Term Matrix (DTM)**: the structured output of text wrangling — rows = documents, columns = tokens (from the BOW), cells = a value (e.g., a count, or later TF/TF-IDF) for that token in that document. This is the point at which unstructured text becomes structured data usable for ML training.

**N-grams**: word-sequence representations that partially recover the ordering BOW discards.

| N-gram | Length | Example (from "The man went to the market") |
|---|---|---|
| **Unigram** | 1 word | "market" |
| **Bigram** | 2 words | "to_the," "the_market" |
| **Trigram** | 3 words | "to_the_market" |

> N-grams can be combined with unigrams into one BOW/DTM. They matter most for capturing **negation** and **multi-word context** (e.g., "not_good," "stock_market") that unigrams alone would lose.

---

### Question Set Answers

**Q1 (LendALot structured-data errors)**:
- Negative income → **invalidity error** (income cannot be negative).
- Missing loan type → **incompleteness error**.
- Implausible loan amount vs. known outcome → **inaccuracy error**.
- Repeated row for the same borrower → **duplication error**.

**Q2 (Removing "Name" once "ID" exists)** → **Data selection** (removing a column not needed for the project).

**Q3 (Creating "Loan Amount as % of Income")** → **Data extraction** (a new variable created from existing ones).

**Q4 (Output of text preparation and wrangling)** → A **document term matrix**, not a data table or confusion matrix — it is the structured representation built from the BOW.

**Q5 (Why annotate before removing punctuation?)** → Symbols like %, $, and ? can carry meaning useful for ML training, so they are substituted with annotations rather than simply deleted.

**Q6 (What does a DTM cell contain?)** → A **count of tokens** (of the kind named by the column) present in that row's document — not a token itself, and not a count of instances.

---
