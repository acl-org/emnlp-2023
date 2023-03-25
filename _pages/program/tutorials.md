---
title: Tutorials
layout: single
excerpt: "NAACL 2021 Tutorials."
permalink: /program/tutorials/
toc: true
toc_sticky: true
toc_icon: "cog" 
sidebar: 
    nav: program
---

## Tutorial Schedule

**Date:** Wednesday 7 Dec 2022, Thursday 8 December 2022

<!-- **Morning Session (08:00–12:00)**
* [T1](#t1): Pretrained Transformers for Text Ranking: BERT and Beyond
* [T2](#t2): Fine-grained Interpretation and Causation Analysis in Deep NLP Models
* [T3](#t3): Deep Learning on Graphs for Natural Language Processing
* [T4](#t4): A Tutorial on Evaluation Metrics used in Natural Language Generation
* [T5](#t5): Beyond Paragraphs: NLP for Long Sequences

**Evening Session (16:00–20:00)**
* [T6](#t6): Crowdsourcing Natural Language Data at Scale: A Hands-On Tutorial -->


## T1 (Wednesday 7 Dec, Morning & Afternoon): Meaning Representations for Natural Languages: Design, Models and Applications
{: #t1}

Jeffrey Flanigan, Ishan Jindal, Yunyao Li, Tim O'Gorman, Martha Palmer

## T2 (Wednesday 7 Dec, Morning): Arabic Natural Language Processing
{: #t2}

Nizar Habash

## T3 (Wednesday 7 Dec, Afternoon): Emergent Language-Based Coordination In Deep Multi-Agent Systems  
{: #t3}

Marco Baroni, Roberto Dessi, Angeliki Lazaridou

## T4 (Thursday 8 December, Morning): Tutorial on Causal Inference for Natural Language Processing
{: #t4}

Zhijing Jin, Amir Feder, Kun Zhang

## T5 (Thursday 8 December, Morning): Modular and Parameter-Efficient Fine-Tuning for NLP Models
{: #t5}

Sebastian Ruder, Jonas Pfeiffer, Ivan Vulic

## T6 Thursday 8 December, Afternoon): Non-Autoregressive Models for Fast Sequence Generation  
{: #t6}

Yang Feng, Chenze Shao



<!-- ## T1 (Morning, 8-12): Pretrained Transformers for Text Ranking: BERT and Beyond
{: #t1}

<a href="mailto:ayates@mpi-inf.mpg.de">Andrew Yates</a>,
 <a href="mailto:rodrigo.nogueira@uwaterloo.ca">Rodrigo Nogueira</a> and
 <a href="mailto:jimmylin@uwaterloo.ca">Jimmy Lin</a>

**LIVE**

The goal of text ranking is to generate an ordered list of texts retrieved from a corpus in response to a query. Although the most common formulation of text ranking is search, instances of the task can also be found in many natural language processing applications. This tutorial, based on a forthcoming book, provides an overview of text ranking with neural network architectures known as transformers, of which BERT is the best-known example. The combination of transformers and self-supervised pretraining has, without exaggeration, revolutionized the fields of natural language processing (NLP), information retrieval (IR), and beyond. We provide a synthesis of existing work as a single point of entry for both researchers and practitioners. Our coverage is grouped into two categories: transformer models that perform reranking in multi-stage ranking architectures and learned dense representations that perform ranking directly. Two themes pervade our treatment: techniques for handling long documents, and techniques for addressing the tradeoff between effectiveness (result quality) and efficiency (query latency). Although transformer architectures and pretraining techniques are recent innovations, many aspects of their application are well understood. Nevertheless, there remain many open research questions, and thus in addition to laying out the foundations of pretrained transformers for text ranking, we also attempt to prognosticate the future.


## T2 (Morning, 8-12): Fine-grained Interpretation and Causation Analysis in Deep NLP Models
{: #t2}

<a href="mailto:hsajjad@hbku.edu.qa">Hassan Sajjad</a>,
 <a href="mailto:narine@fb.com">Narine Kokhlikyan</a>,
 <a href="mailto:faimaduddin@hbku.edu.qa">Fahim Dalvi</a> and
 <a href="mailto:ndurrani@hbku.edu.qa">Nadir Durrani</a>

**Pre-recorded video played during session w/Q&A**

Deep neural networks have constantly pushed the state-of-the-art performance in natural language processing and are considered as the de-facto modeling approach in solving complex NLP tasks such as machine translation, summarization and question-answering. Despite the proven efficacy of deep neural networks at-large, their opaqueness is a major cause of concern.

In this tutorial, we will present research work on interpreting fine-grained components of a neural network model from two perspectives, i) intrinsic analysis, and  ii) causation analysis. The former is a class of methods to analyze neurons with respect to a desired language concept or a task. The latter studies the role of neurons and input features in explaining the decisions made by the model. We will also discuss how interpretation methods and causation analysis can connect towards better interpretability of model prediction. Finally, we will walk you through various toolkits that facilitate fine-grained interpretation and causation analysis of neural models.


## T3 (Morning, 8-12): Deep Learning on Graphs for Natural Language Processing
{: #t3}

<a href="mailto:lwu@email.wm.edu">Lingfei Wu</a>,
 <a href="mailto:hugochan2013@gmail.com">Yu Chen</a>,
 <a href="mailto:hengji@illinois.edu">Heng Ji</a> and
 <a href="mailto:yunyaoli@us.ibm.com">Yunyao Li</a>

**LIVE**

Due to its great power in modeling non-Euclidean data like graphs or manifolds, deep learning on graph techniques (i.e., Graph Neural Networks (GNNs)) have opened a new door to solving challenging graph-related NLP problems. There has seen a surge of interests in applying deep learning on graph techniques to NLP, and has achieved considerable success in many NLP tasks, ranging from classification tasks like sentence classification, semantic role labeling and relation extraction, to generation tasks like machine translation, question generation and summarization. Despite these successes, deep learning on graphs for NLP still face many challenges, including automatically transforming original text sequence data into highly graph-structured data, and effectively modeling complex data that involves mapping between graph-based inputs and other highly structured output data such as sequences, trees, and graph data with multi-types in both nodes and edges.

This tutorial will cover relevant and interesting topics on applying deep learning on graph techniques to NLP, including automatic graph construction for NLP, graph representation learning for NLP, advanced GNN based models (e.g., graph2seq, graph2tree, and graph2graph) for NLP, and the applications of GNNs in various NLP tasks (e.g., machine translation, natural language generation, information extraction and semantic parsing). In addition, hands-on demonstration sessions will be included to help the audience gain practical experience on applying GNNs to solve challenging NLP problems using our recently developed open source library -- Graph4NLP, the first library for researchers and practitioners for easy use of GNNs for various NLP tasks.


## T4 (Morning, 8-12): A Tutorial on Evaluation Metrics used in Natural Language Generation
{: #t4}

<a href="mailto:miteshk@cse.iitm.ac.in">Mitesh M. Khapra</a> and
 <a href="mailto:ananya@cse.iitm.ac.in">Ananya B. Sai</a>

**Pre-recorded video played during session w/Q&A**

The advent of Deep Learning and the availability of large scale datasets has accelerated research on Natural Language Generation with a focus on newer tasks and better models. With such rapid progress, it is vital to assess the extent of scientific progress made and identify the areas/components that need improvement. To accomplish this in an automatic and reliable manner, the NLP community has actively pursued the development of automatic evaluation metrics. Especially in the last few years, there has been an increasing focus on evaluation metrics, with several criticisms of existing metrics and proposals for several new metrics.

This tutorial presents the evolution of automatic evaluation metrics to their current state along with the emerging trends in this field by specifically addressing the following questions:
- What makes NLG evaluation challenging?
- Why do we need automatic evaluation metrics?
- What are the existing automatic evaluation metrics and how can they be organised in a coherent taxonomy?
- What are the criticisms and shortcomings of existing metrics?
- What are the possible future directions of research?


## T5 (Morning, 8-12): Beyond Paragraphs: NLP for Long Sequences
{: #t5}

<a href="mailto:beltagy@allenai.org">Iz Beltagy</a>,
 <a href="mailto:armanc@allenai.org">Arman Cohan</a>,
 <a href="mailto:hannaneh@washington.edu">Hannaneh Hajishirzi</a> and
 <a href="mailto:matthewp@allenai.org">Matthew E. Peters</a>
 <a href="mailto:sewon@cs.washington.edu">Sewon Min</a>

**Pre-recorded video played during session w/Q&A**

A significant subset of natural language data includes documents that span thousands of tokens. The ability to process such long sequences is critical for many NLP tasks including document classification, summarization, multi-hop, and open domain question answering, and document-level or multi-document relationship extraction and coreference resolution. Yet, scaling state-of-the-art models to long sequences is challenging as many models are designed for shorter sequences. One notable example is Transformer models that have quadratic computational cost in the sequence length, making them prohibitively expensive for long sequence tasks. This is reflected in many widely-used models such as RoBERTa and BERT where the sequence length is limited to only 512 tokens. In this tutorial, we will bring interested NLP researchers up to speed about the recent and ongoing techniques for document-level representation learning. Additionally, we will discuss new research opportunities to address existing challenges in this domain. We will first provide an overview of established long sequence NLP techniques, including hierarchical, graph-based, and retrieval-based methods. We will then focus on the recent long-sequence transformer methods, how they compare to each other, and how they can be applied to NLP tasks (see Tay et al. (2020) for a recent survey). We will also discuss various memory-saving methods that are key to processing long sequences. Throughout the tutorial, we will use classification, question answering, and information extraction as motivating tasks.  We will also have a hands-on coding exercise focused on summarization.


## T6 (Afternoon, 4-8): Crowdsourcing Natural Language Data at Scale: A Hands-On Tutorial
{: #t6}

<a href="mailto:adrutsa@yandex-team.ru">Alexey Drutsa</a>,
 <a href="mailto:dustalov@yandex-team.ru">Dmitry Ustalov</a>,
 <a href="mailto:valya17@yandex-team.ru">Valentina Fedorova</a>,
 <a href="mailto:omegorskaya@yandex-team.ru">Olga Megorskaya</a> and
 <a href="mailto:dbaidakova@yandex-team.ru">Daria Baidakova</a>

**LIVE**

In this introductory tutorial, we present a portion of our six-year-long unique industry experience in efficient natural language data annotation via Crowdsourcing. We will make an introduction to data labeling via public crowdsourcing marketplaces, and will present the key components of efficient label collection that includes task design and decomposition, quality control, and annotator selection. This will be followed by a practical session, where participants address a real-world language resource production task, experiment with selecting settings for the labeling process, and launch their label collection project on one of the largest crowdsourcing marketplaces. The projects will be run on real crowds within the tutorial session. We will present useful mathematical foundations, quality control techniques and tricks, and provide the attendees with an opportunity to discuss their own annotation ideas.
 -->
