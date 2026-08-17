---
layout: page
title: "Neural Networks, Deep Learning, and Reinforcement Learning"
permalink: /study/01-quantitative-methods/06-machine-learning/06-neural-networks-and-deep-learning/
next: /cfa/study/01-quantitative-methods/06-machine-learning/07-choosing-an-ml-algorithm/
prev: /cfa/study/01-quantitative-methods/06-machine-learning/05-pca-and-clustering/
---
## Summary: Neural Networks, Deep Learning, and Reinforcement Learning (CFA Level II — Quantitative Methods)

---

### Neural Networks (ANNs) — Structure

Neural networks (NNs / artificial neural networks, ANNs) are highly flexible ML algorithms suited to tasks with **non-linearities and complex feature interactions**. Used for classification and regression in supervised learning, and also central to reinforcement learning.

**Three layer types:**

| Layer | Role |
|---|---|
| **Input layer** | One node per feature |
| **Hidden layer(s)** | Where learning occurs; nodes ("neurons") transform inputs non-linearly |
| **Output layer** | Produces the final prediction(s); passes information outside the network |

**Each hidden-layer node ("neuron") has two functional parts:**

1. **Summation operator**: multiplies each incoming value by its link **weight** and sums them → "total net input"
2. **Activation function**: transforms the total net input into the node's output — characteristically **non-linear** (e.g., sigmoid/S-shaped, output range 0–1; or ReLU, $f(x)=\max(0,x)$)

> **Analogy**: the activation function works like a **light dimmer switch** — a negative/small total net input yields an output near 0 (node doesn't "trigger," nothing passed forward); a positive/large total net input yields an output near 1 (node "triggers").

**Regression vs. neural network comparison** — a network is conceptually a regression with **non-linearly transformed features**:

$$y = \omega_1 x_1 + \omega_2 x_2 + \omega_3 x_3 + \omega_4 x_4 + \varepsilon \quad \text{(linear regression)}$$

$$\boxed{y = \theta_1 \max(0, x_1+x_2+x_3) + \theta_2 \max(0, x_2+x_4) + \theta_3 \max(0, x_2+x_3+x_4) + \varepsilon} \quad \text{(neural net w/ ReLU)}$$

**Training process:**

- **Forward propagation**: inputs flow forward through the network (input → hidden → output) to produce a prediction
- **Backward propagation**: prediction error flows backward through the layers to adjust weights, reducing total error
- **Weight update rule** (informal):

$$\boxed{\text{New weight} = \text{Old weight} - (\text{Learning rate}) \times \left(\frac{\partial \, \text{Total error}}{\partial \, \text{Old weight}}\right)}$$

Where the partial derivative (gradient) measures how total error changes with the weight, and **learning rate** is a hyperparameter controlling the size of each adjustment. Feature inputs are typically **scaled/standardized** before training (e.g., to a 0–1 range).

> **Key insight**: More nodes and more hidden layers increase a network's ability to handle complexity — but also increase overfitting risk. Neural networks have shown superior explanatory/predictive power for equity returns vs. traditional statistical methods in some research, due to capturing dynamic, non-linear, interacting relationships — but at the cost of **interpretability (black box)** and **high data/computation requirements**.

---

### Deep Neural Networks (DNNs)

A network with just **one hidden layer** is a "shallow" neural network. A **deep neural network (DNN)** has **many hidden layers — at least 2, often more than 20**. DNNs are the foundation of deep learning.

**Mechanics**: inputs pass through successive layers of non-linear functions with weights $w_{ij}$ (neuron $i$, input $j$), each typically scaling output to $(0,1)$ or $(-1,1)$, until the final layer outputs a set of **probabilities** across target categories (one output node per category); the DNN assigns the category with the **highest probability**. Training minimizes a specified loss function over weights.

**Hyperparameters to decide**: number of hidden layers, nodes per hidden layer, connectivity/activation architecture — input/output layer sizes are typically fixed by the feature set and target. No simple closed-form solution exists; practitioners start with a "reasonable" guess (literature/experience) and tune incrementally, since DNNs are expensive to train and exhaustive hyperparameter search is often infeasible.

**Why DNNs succeeded**: (1) huge machine-readable datasets, (2) advances in fitting algorithms, (3) fast hardware (especially GPUs).

**Applications**: pattern/character/image recognition, credit card fraud detection, autonomous vehicle vision/control, NLP/machine translation. Example: Culkin and Das (2017) trained a DNN (6 inputs matching Black-Scholes-Merton parameters, 4 hidden layers × 100 neurons) to price options — out-of-sample predicted vs. actual option prices had $R^2 = 99.8\%$.

---

### Reinforcement Learning (RL)

RL involves an **agent** that performs actions to **maximize rewards over time**, subject to environmental constraints — famously, DeepMind's **AlphaGo** (2017) beat the world Go champion using RL.

| RL Component | Example (AlphaGo) | Example (trading) |
|---|---|---|
| Agent | Virtual gamer | Virtual trader |
| Actions | Console commands | Trading rules/decisions |
| Environment | Game screen/state | Financial market |
| Reward | Game score | Trading profit |

> **Key insight**: Unlike supervised learning, RL has **no labeled data** and **no instantaneous feedback** — the algorithm learns by testing actions (some suboptimal), observing outcomes, and refining behavior through **millions of trials and errors**, reusing prior experience. RL's success in navigating the complexities of financial markets remains an open research question.

---

### Case Study: Deep Neural Network–Based Equity Factor Model

**Setup**: An investment manager wants a non-linear fundamental factor model to predict stock returns, replacing standard cross-sectional regression (CSR): $r_t = B f_t + \varepsilon_t$, which is too simplistic to capture non-linear factor–return relationships. She uses a **feed-forward DNN** in place of OLS, with **LASSO penalization** added to the loss function to control overfitting (neural networks are especially prone to overfitting).

**Data**: 218 S&P 500 stocks (top 250 by market cap as of June 2010, less those with missing data), 101 monthly periods (June 2010–November 2018), 6 fundamental factors (enterprise value, EV/EBITDA, P/S, P/E, P/B, log market cap), output = next month's return.

**Architecture**: 6 input nodes, **2 hidden layers of 50 neurons each** (intentionally over-parameterized — more nodes than needed relative to 218 observations per period, deliberately pushing bias down/variance up), 1 output node.

**Validation method — time-series (walk-forward) cross-validation**: train on period $t$, test on period $t+1$; then roll forward — the old test set becomes the new training set, test on $t+2$; repeat through period 101. (This is the natural alternative to k-fold cross-validation for time-series data, as flagged in the overfitting discussion.)

**LASSO's role**: shrinks the number of **non-zero network weights** (i.e., prunes connections, not necessarily whole nodes — unless *all* weights into a node are zeroed).

| Effect of increasing LASSO regularization | In-sample MSE | Out-of-sample MSE |
|---|---|---|
| More bias introduced | **Rises** | |
| Less variance | | **Falls** |

**Results**:
- Out-of-sample MSE consistently exceeded in-sample MSE, but the **gap narrowed** as the walk-forward process repeated across 101 periods.
- Optimal LASSO regularization for the first iteration was found to be significant (~0.10, with typical values ranging 0.001–1.0); larger $\lambda$ penalizes loss more heavily.
- **Back-tested information ratios** (IR = alpha / nonsystematic risk) for a strategy selecting the top $n$ predicted-return stocks: in-sample IRs ranged **0.62–0.70** (portfolios of 10–25 stocks); out-of-sample IRs were substantially lower, **0.26–0.31** — still respectable (rule of thumb: 0.40–0.60 is "quite good"), but a reminder that in-sample performance overstates real-world results.

> **Key takeaway**: Out-of-sample performance is the realistic gauge of a strategy's likely future value — always evaluate DNN-based (or any ML-based) trading strategies out-of-sample, and expect a material degradation vs. in-sample metrics. A good MSE result doesn't guarantee a good *investment* strategy, since the DNN predicts only the **expected (mean) return**, not the full return distribution.

---

### Question Set Answers

**Q1 (defining a DNN):**
A neural network with **many hidden layers (at least 2, often more than 20)**.

**Q2 (style-drift detection for external managers) — Is a DNN appropriate?**
Yes — detecting patterns of style drift across ~100 managers' real-time trading data across many markets involves huge, complex, non-linear data — exactly the DNN's strength.

**Q3 — Roles of the three DNN layer groups:**
**Input layer** — receives features, one node per feature dimension. **Hidden layers** — nodes with a summation operator + activation function; this is where the model is actually learned. **Output layer** — produces probabilities across target categories (e.g., three style categories summing to 1); the DNN assigns the category with the highest probability.

**Q4 (Jane Hinton expands the equity factor model with 4 more factors + 11 sector dummies, 218 → 420 stocks):**
- New input layer size = $4 + 11 + 6 = 21$ nodes (output layer unchanged); collinearity among dummy variables, problematic for linear regression, is **not** an issue for a DNN.
- Training/test set size grows to 420 stocks × 101 periods; under walk-forward cross-validation, each period's test set becomes the next period's training set.
- Jane should re-optimize the LASSO hyperparameter via time-series cross-validation, potentially after first increasing hidden-layer neuron counts to find the new optimal bias–variance trade-off.
- Evaluate by generating out-of-sample forecasts each period, ranking/selecting top predicted performers, tracking realized portfolio returns across all periods, and computing the resulting **information ratio**.

**Q5 (summary check) — Is a hierarchical clustering description of "unsupervised grouping" correct?**
Yes — hierarchical clustering's grouping of observations is **unsupervised** (not: a pre-specified number $k$ of clusters — that describes k-means; not: classification by predetermined labels — that is supervised learning).

---

### Exam Tips

- Neural network layers: **input** (1 node/feature) → **hidden** (learning happens here: summation operator + non-linear activation function) → **output**
- Forward propagation = making a prediction; backward propagation = adjusting weights based on error, moving backward through the layers
- **DNN = at least 2 hidden layers** (often 20+) — a common wrong-answer trap is "at least 10 hidden layers"
- Neural nets/DNNs excel at **non-linear, high-interaction, large-dataset** problems (image/speech recognition, NLP) — NOT simple single-variable OLS-style problems
- Trade-off: neural nets/DNNs are powerful but are **black boxes** and require large data + heavy computation
- **Reinforcement learning** = agent + actions + environment + reward; no labeled data, no instant feedback, learns via trial and error over many iterations
- **Time-series cross-validation (walk-forward)** replaces k-fold cross-validation for time-series data — train on period $t$, test on $t+1$, roll forward
- Always evaluate ML trading strategies **out-of-sample** — in-sample metrics (MSE, IR) are optimistic and will not repeat out-of-sample
