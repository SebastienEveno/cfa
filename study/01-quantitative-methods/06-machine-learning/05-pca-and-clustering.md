---
layout: page
title: "Principal Components Analysis and Clustering"
permalink: /study/01-quantitative-methods/06-machine-learning/05-pca-and-clustering/
next: /cfa/study/01-quantitative-methods/06-machine-learning/06-neural-networks-and-deep-learning/
prev: /cfa/study/01-quantitative-methods/06-machine-learning/04-cart-and-ensemble-learning/
---
## Summary: Principal Components Analysis and Clustering (CFA Level II — Quantitative Methods)

---

### Principal Components Analysis (PCA)

PCA is a long-established **dimension reduction** technique that summarizes/transforms many highly correlated features into a small number of main, **uncorrelated composite variables** — the **principal components**.

**Core mechanics** — PCA transforms the covariance matrix of the features using two concepts:

| Concept | Meaning |
|---|---|
| **Eigenvector** | Defines a new, mutually uncorrelated composite variable (a linear combination of original features); represents a direction |
| **Eigenvalue** | The proportion of total variance in the data explained by its associated eigenvector |

The algorithm orders eigenvectors from **highest to lowest eigenvalue**. The **first principal component (PC1)** is the eigenvector explaining the largest share of variance; **PC2** explains the largest share of the *remaining* variance (and is orthogonal/uncorrelated to PC1); and so on.

> **Key insight**: PC1 is the line that simultaneously **minimizes the sum of squared projection errors** (perpendicular distance from each data point to the line) and **maximizes the spread (variance)** of the data along the line.

**How many components to keep — scree plots**: a scree plot shows the proportion of total variance explained by each successive principal component. In practice, analysts retain the smallest number of components that explain a target proportion of total variance (often **85%–95%**), since there is a trade-off between a lower-dimensional, more manageable dataset and some information loss.

> **Worked example**: For hypothetical DLC 500 and VLC 30 equity indexes with 2,000+ correlated features, the first 3 of 20 principal components explained about 90% (DLC 500: PC1 43% + PC2 26% + PC3 21%) and 86% (VLC 30: PC1 55% + PC2 20% + PC3 11%) of total variance, respectively — additional components beyond ~5 added little.

**Drawback**: principal components are combinations of original features, so they typically **cannot be easily labeled or interpreted** — PCA is often perceived as a "black box."

**Benefits**: enables visualization in 2–3 dimensions; performed as part of exploratory data analysis before training another model; downstream models trained on lower-dimensional data are **quicker to train, less prone to overfitting** (avoiding the curse of dimensionality), and easier to interpret.

---

### Clustering — General Concepts

Clustering sorts observations into groups (**clusters**) such that observations in the same cluster are similar, and observations across clusters are dissimilar. Two evaluation properties:

| Property | Meaning |
|---|---|
| **Cohesion** | Observations *within* a cluster are close/similar to each other |
| **Separation** | Observations in *different* clusters are far apart/dissimilar |

A **distance measure** quantifies similarity — the most common is **Euclidean distance** (straight-line distance); **correlation** (average Euclidean distance between standardized points) is a closely related measure especially useful for portfolio diversification. Roughly a dozen distance measures are used in practice; the choice depends on the data type and business problem.

**Investment uses**: uncovering company similarities/differences not captured by standard industry/sector classifications; improving portfolio diversification.

---

### K-Means Clustering

K-means repeatedly partitions observations into a **fixed number, $k$**, of non-overlapping clusters, each characterized by its **centroid** (center). $k$ is a **hyperparameter** set in advance.

**Algorithm (iterative):**

1. Choose $k$ initial (random) centroids.
2. Assign each observation to its **nearest** centroid, forming initial clusters.
3. Recompute each cluster's centroid as the **average** of its assigned observations.
4. Reassign observations to the (new) nearest centroid.
5. Repeat steps 3–4 until **no observation changes cluster** (convergence).

The converged solution **minimizes intra-cluster distance** (maximizing cohesion) and **maximizes inter-cluster distance** (maximizing separation), subject to the chosen $k$.

| Strength | Limitation |
|---|---|
| Fast; scales to very large datasets (hundreds of millions of observations) | Final clusters depend on the **initial centroid locations** — run multiple times with different starting points and select the most useful/interpretable result |
| Simple to implement | $k$ must be **chosen in advance**; can run over a range of $k$ and pick based on cohesion/separation trade-off, but the "right" $k$ is often subjective — in practice chosen by **face validity** (do the clusters make sense?) |

**Investment application**: grouping the Russell 3000 into 10, 50, or more clusters by financial/operating characteristics to derive data-driven "peer groups" that may differ meaningfully from standard industry classification; also used for classifying funds/hedge funds and detecting trends/outliers.

---

### Hierarchical Clustering

Hierarchical clustering builds a **hierarchy of clusters** iteratively, creating intermediate rounds of clusters of increasing or decreasing size (unlike k-means, which has no defined relationship among clusters). More computationally intensive than k-means, but lets the analyst examine segmentations at multiple levels of granularity before choosing one.

| Type | Direction | Process |
|---|---|---|
| **Agglomerative (bottom-up)** | Small → large | Starts with every observation as its own cluster; iteratively merges the two **closest** clusters until all observations form one cluster |
| **Divisive (top-down)** | Large → small | Starts with all observations in one cluster; iteratively splits into smaller clusters until each observation is its own cluster |

| Method | Best suited for | Why |
|---|---|---|
| Agglomerative | **Small clusters**; large datasets (fast) | Makes decisions based on local patterns |
| Divisive | **Large clusters** | Starts from a holistic/global view of the data |

**Cluster-to-cluster distance** (needed to decide which clusters to merge/split) is commonly defined as the minimum, maximum, or average of the pairwise straight-line distances between observations in each cluster.

**Dendrograms**: a tree diagram visualizing hierarchical clustering.

| Element | Meaning |
|---|---|
| X-axis | Individual clusters/observations |
| Y-axis | Distance measure |
| **Arch** (horizontal line) | Connects two clusters being merged; its **height** = distance between them |
| **Dendrite** (vertical line) | Shorter = more similar / smaller distance |
| Horizontal dashed cut line | Shows how many clusters exist if the tree is "cut" at that distance level |

> **Key insight**: A dendrogram can be read bottom-up (agglomerative) or top-down (divisive), and lets the analyst choose the number of final clusters visually, by drawing a horizontal line at the desired height/number of intersected dendrites.

**Investment application**: portfolio diversification as a clustering problem — investing across clusters (maximum inter-cluster separation) helps ensure diversified risk; concentration within one cluster signals concentrated risk.

---

### K-Means vs. Hierarchical Clustering

| Dimension | K-Means | Hierarchical (Agglomerative/Divisive) |
|---|---|---|
| Number of clusters | Must pre-specify $k$ (hyperparameter) | Not required in advance — choose after seeing the dendrogram |
| Relationship among clusters | None | Explicit hierarchy |
| Speed | Fast, scales to huge datasets | More computationally intensive |
| Best for | Very large datasets; known/desired number of segments | Exploring multiple granularities; unknown number of natural groups |
| Reproducibility | Sensitive to initial centroid placement | Deterministic given the linkage method (though agglomerative ≠ divisive results generally) |

---

### Case Study: Clustering Stocks Based on Co-Movement Similarity

**Setup**: An endowment's Investment Committee wants three "buy" recommendations from a subset of eight S&P 500 stocks (AAPL, F, FB, GM, GS, GOOG, JPM, UBS), with **low correlation** between the recommended names for diversification. The analyst clusters the stocks by return co-movement (agglomerative hierarchical clustering, with divisive and k-means run for comparison).

**Method**: Collect daily adjusted closing prices (30 May 2017–24 May 2019, 501 observations) → compute daily log returns → build a pairwise **Euclidean distance matrix** on the return vectors → run agglomerative clustering with **average (centroid) linkage**: merge the closest pair, recompute distances from the new cluster's center to all remaining clusters, repeat until one cluster remains → cut the dendrogram at the height giving **3 clusters** (as requested).

**Key results**: JPM and GS merge first (distance 0.215); UBS joins them next (0.262) → a 3-stock **bank cluster**. AAPL and GOOG merge (0.307); GM and F merge (0.334). The bank cluster then merges with AAPL/GOOG (0.356). Cutting at 3 clusters yields: **{GS, JPM, UBS}**, **{F, GM}**, and **{FB}** alone (FB behaves as an outlier, decoupled from the other tech names).

**Comparison across algorithms** (Exhibit 27): all three methods (agglomerative, divisive, k-means) agree the **bank stocks** cluster together; agglomerative and k-means also agree the **auto stocks** cluster together; k-means clusters stocks precisely by industry sector, while both hierarchical methods isolate FB as its own cluster (an outlier by co-movement, not just by sector).

> **Recommendation**: buy FB; buy the more attractive of F or GM; buy the more attractive of GS, JPM, or UBS.

---

### Question Set Answers

**Q1 (Istvan Peranyi, fund diversification) — Which suggestion uses ML?**
**Suggestion 2** — identifying inherent groupings among holdings using numerical operating/financial measures is a clustering (ML) application. Suggestions 1 and 3 can be addressed with traditional aggregation/regression analysis, not ML.

**Q2 — Is specifying only the distance measure and $k$ sufficient?**
No — the **feature set** used to group holdings (e.g., the operating/financial characteristics) must also be specified, regardless of which clustering algorithm is chosen.

**Q3 — Why prefer hierarchical clustering over k-means here?**
Because the **hyperparameter $k$** (number of natural groups in the STOXX Europe 600) is unknown and would have to be guessed in advance for k-means; hierarchical clustering sorts observations into a hierarchy without requiring $k$ upfront.

**Q4 (six-stock variant, excluding auto stocks F and GM) — Resulting clusters:**
**{GS, JPM, UBS}** (banks), **{AAPL, GOOG}** (tech), and **{FB}** alone. Without the auto stocks acting as an intermediate "bridge," AAPL/GOOG no longer need to merge with the bank cluster to reach three total clusters.

---

### Exam Tips

- PCA = dimension reduction via **eigenvectors** (new composite variables/directions) and **eigenvalues** (variance explained); PC1 maximizes explained variance / minimizes projection error; use a **scree plot** to decide how many components to keep (commonly 85%–95% cumulative variance)
- PCA's main drawback: principal components are **not easily interpretable** (black box)
- Clustering seeks **cohesion** (within-cluster similarity) + **separation** (between-cluster dissimilarity)
- **K-means**: must specify $k$ in advance; fast; scales to huge datasets; sensitive to initial centroid placement (run multiple times)
- **Hierarchical**: no need to pre-specify number of clusters; agglomerative (bottom-up, fast, good for small clusters) vs. divisive (top-down, good for large/global clusters); visualize via **dendrogram** (arch height = distance/dissimilarity)
- On the exam, "we don't know how many groups exist in advance" is the classic tell for **hierarchical over k-means**
- Portfolio diversification = a clustering problem: spread holdings **across** clusters (maximize separation), avoid concentration **within** one cluster
