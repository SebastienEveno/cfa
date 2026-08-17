---
layout: page
title: Quantitative Methods
permalink: /study/01-quantitative-methods/
---

# Quantitative Methods — Module Overview

Multiple regression, model diagnostics, time-series analysis, machine learning, and big data techniques for investment analysis.

---

## Module 1: Basics of Multiple Regression and Underlying Assumptions

Formulating a multiple linear regression model, interpreting partial regression coefficients, and diagnosing violations of the five underlying assumptions using scatterplot matrices, residual plots, and normal Q-Q plots.

- **[Multiple Regression: Uses and the Regression Equation](/cfa/study/01-quantitative-methods/01-multiple-regression-basics/01-multiple-regression-basics/)** — Investment use cases, the regression process, and interpreting partial regression coefficients
- **[Regression Assumptions and Diagnostic Plots](/cfa/study/01-quantitative-methods/01-multiple-regression-basics/02-regression-assumptions/)** — The five assumptions, violation consequences, and the diagnostic-plot toolkit
- **[Formula Summary](/cfa/study/01-quantitative-methods/01-multiple-regression-basics/03-formula-summary/)** — All multiple regression basics formulas in one place

---

## Module 2: Evaluating Regression Model Fit and Interpreting Model Results

Evaluating how well a multiple regression model fits the data, testing joint hypotheses on subsets of coefficients, and using a fitted model to generate forecasts.

- **[Goodness of Fit: R², Adjusted R², AIC, and BIC](/cfa/study/01-quantitative-methods/02-regression-model-fit/01-goodness-of-fit/)** — R² vs. adjusted R², information criteria, and model-selection tradeoffs
- **[Testing Joint Hypotheses for Coefficients](/cfa/study/01-quantitative-methods/02-regression-model-fit/02-hypothesis-testing/)** — The restricted-vs-unrestricted and general linear F-tests
- **[Forecasting Using Multiple Regression](/cfa/study/01-quantitative-methods/02-regression-model-fit/03-forecasting/)** — Point forecasts, prediction intervals, and in-sample vs. out-of-sample error
- **[Formula Summary](/cfa/study/01-quantitative-methods/02-regression-model-fit/04-formula-summary/)** — All regression model fit formulas in one place

---

## Module 3: Model Misspecification

The sources of regression misspecification and the three classic violations of regression assumptions — heteroskedasticity, serial correlation, and multicollinearity — including detection and correction.

- **[Model Specification Errors](/cfa/study/01-quantitative-methods/03-model-misspecification/01-model-specification-errors/)** — Omitted variables, wrong functional form, bad scaling, and inappropriate pooling
- **[Heteroskedasticity](/cfa/study/01-quantitative-methods/03-model-misspecification/02-heteroskedasticity/)** — Consequences, the Breusch–Pagan test, and robust standard errors
- **[Serial Correlation](/cfa/study/01-quantitative-methods/03-model-misspecification/03-serial-correlation/)** — Consequences, Durbin–Watson/Breusch–Godfrey tests, and Newey–West correction
- **[Multicollinearity](/cfa/study/01-quantitative-methods/03-model-misspecification/04-multicollinearity/)** — Consequences, the VIF statistic, and correction approaches
- **[Formula Summary](/cfa/study/01-quantitative-methods/03-model-misspecification/05-formula-summary/)** — All model misspecification formulas in one place

---

## Module 4: Extensions of Multiple Regression

Detecting influential data points, incorporating qualitative independent variables via dummy variables, and modeling binary dependent variables with logistic regression.

- **[Influence Analysis](/cfa/study/01-quantitative-methods/04-regression-extensions/01-influence-analysis/)** — High-leverage points, outliers, and detecting influential observations
- **[Dummy Variables in Multiple Regression](/cfa/study/01-quantitative-methods/04-regression-extensions/02-dummy-variables/)** — Defining, coding, and testing the significance of dummy variables
- **[Logistic Regression and Qualitative Dependent Variables](/cfa/study/01-quantitative-methods/04-regression-extensions/03-qualitative-dependent-variables/)** — Log odds, maximum likelihood estimation, and the likelihood ratio test
- **[Formula Summary](/cfa/study/01-quantitative-methods/04-regression-extensions/04-formula-summary/)** — All regression extensions formulas in one place

---

## Module 5: Time-Series Analysis

Trend models, autoregressive and moving-average forecasting, random walks and unit roots, seasonality, ARCH models, and cointegration — culminating in the exam-critical model-selection decision framework.

- **[Trend Models](/cfa/study/01-quantitative-methods/05-time-series-analysis/01-trend-models/)** — Linear and log-linear trend models, and testing residuals for serial correlation
- **[AR Models and Stationarity](/cfa/study/01-quantitative-methods/05-time-series-analysis/02-ar-models-and-stationarity/)** — Covariance stationarity, mean reversion, and the chain rule of forecasting
- **[Comparing Forecast Models](/cfa/study/01-quantitative-methods/05-time-series-analysis/03-comparing-forecast-models/)** — In-sample vs. out-of-sample RMSE, and coefficient instability
- **[Random Walks and Unit Roots](/cfa/study/01-quantitative-methods/05-time-series-analysis/04-random-walks-and-unit-roots/)** — Random walks, the Dickey–Fuller test, and first-differencing
- **[Moving-Average Models and Seasonality](/cfa/study/01-quantitative-methods/05-time-series-analysis/05-moving-average-and-seasonality/)** — Smoothing, MA(q) forecasting, and detecting/correcting seasonality
- **[ARCH Models and Multiple Time Series](/cfa/study/01-quantitative-methods/05-time-series-analysis/06-arch-and-multiple-time-series/)** — Conditional heteroskedasticity, spurious regression, and cointegration
- **[Time-Series Model Selection Summary](/cfa/study/01-quantitative-methods/05-time-series-analysis/07-summary/)** — The full model-selection decision framework, formula summary, and exam tips

---

## Module 6: Machine Learning

The supervised/unsupervised/deep-learning taxonomy, core ML algorithms, and a decision framework for matching ML algorithms to investment problems — illustrated with three worked case studies.

- **[Introduction to Machine Learning](/cfa/study/01-quantitative-methods/06-machine-learning/01-introduction-to-machine-learning/)** — ML vs. statistical approaches, and the supervised/unsupervised/deep/reinforcement taxonomy
- **[Overfitting and Model Evaluation](/cfa/study/01-quantitative-methods/06-machine-learning/02-overfitting-and-model-evaluation/)** — Bias-variance tradeoff, generalization, cross-validation, and regularization
- **[Penalized Regression, Support Vector Machine, and K-Nearest Neighbor](/cfa/study/01-quantitative-methods/06-machine-learning/03-penalized-regression-svm-knn/)** — LASSO, maximum-margin classification, and similarity-based classification
- **[CART, Ensemble Learning, and Random Forest](/cfa/study/01-quantitative-methods/06-machine-learning/04-cart-and-ensemble-learning/)** — Decision trees, bagging, random forest, and a fund-classification case study
- **[Principal Components Analysis and Clustering](/cfa/study/01-quantitative-methods/06-machine-learning/05-pca-and-clustering/)** — PCA, K-means and hierarchical clustering, and a stock co-movement case study
- **[Neural Networks, Deep Learning, and Reinforcement Learning](/cfa/study/01-quantitative-methods/06-machine-learning/06-neural-networks-and-deep-learning/)** — Network structure/training, and a deep neural network equity factor model case study
- **[Choosing an Appropriate ML Algorithm](/cfa/study/01-quantitative-methods/06-machine-learning/07-choosing-an-ml-algorithm/)** — Decision framework, formula summary, and exam tips

---

## Module 7: Big Data Projects

The end-to-end data science workflow for building ML models on structured and unstructured (text) financial data, culminating in a full worked financial-news sentiment classification case study.

- **[Big Data and the ML Project Pipeline](/cfa/study/01-quantitative-methods/07-big-data-projects/01-big-data-and-the-ml-project-pipeline/)** — Big data characteristics, and the five-step ML model-building pipeline
- **[Data Preparation and Wrangling](/cfa/study/01-quantitative-methods/07-big-data-projects/02-data-preparation-and-wrangling/)** — Structured data cleansing/preprocessing, and text tokenization, stemming, and BOW
- **[Data Exploration](/cfa/study/01-quantitative-methods/07-big-data-projects/03-data-exploration/)** — EDA, feature selection, and feature engineering for structured and text data
- **[Model Training and Evaluation](/cfa/study/01-quantitative-methods/07-big-data-projects/04-model-training-and-evaluation/)** — Method selection, confusion-matrix metrics, ROC/AUC, and hyperparameter tuning
- **[Financial Forecasting Case Study](/cfa/study/01-quantitative-methods/07-big-data-projects/05-financial-forecasting-case-study/)** — End-to-end text-based sentiment classification walkthrough
- **[Formula and Process Summary](/cfa/study/01-quantitative-methods/07-big-data-projects/06-summary/)** — The ML project pipeline checklist, formula summary, and exam tips
