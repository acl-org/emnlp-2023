---
title: Reproducibility Criteria
layout: single
permalink: /calls/papers/Reproducibility-Criteria
sidebar: 
    nav: "calls"
toc: false
---

Reviewers will be asked to assess the reproducibility of the work as part of their reviews.
The following are the criteria that reviews will take under consideration. 

For all reported experimental results:
 - A clear description of the mathematical setting, algorithm, and/or model
 - Submission of a zip file containing source code, with specification of all dependencies, including external libraries, or a link to such resources (while still anonymized)
Description of computing infrastructure used
 - The average runtime for each model or algorithm (e.g., training, inference, etc.), or estimated energy cost
 - Number of parameters in each model
 - Corresponding validation performance for each reported test result
 - Explanation of evaluation metrics used, with links to code

For all experiments with hyperparameter search:

 - The exact number of training and evaluation runs
 - Bounds for each hyperparameter
 - Hyperparameter configurations for best-performing models
 - Number of hyperparameter search trials
 - The method of choosing hyperparameter values (e.g., uniform sampling, manual tuning, etc.) and the criterion used to select among them (e.g., accuracy)
 - Summary statistics of the results (e.g., mean, variance, error bars, etc.)

For all datasets used:

 - Relevant details such as languages, and number of examples and label distributions
 - Details of train/validation/test splits
 - Explanation of any data that were excluded, and all pre-processing steps
 - A zip file containing data or link to a downloadable version of the data
 - For new data collected, a complete description of the data collection process, such as instructions to annotators and methods for quality control.

This list is based on Dodge et al, 2019 and Joelle Pineau's reproducibility checklist.
