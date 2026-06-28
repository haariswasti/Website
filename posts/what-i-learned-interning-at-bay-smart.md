---
title: "What I Learned Building AI Tools at a Staging Company"
date: "2025-09-20"
excerpt: "Reflections on building a production computer vision pipeline at Bay Smart Solutions — from a 340ms baseline to 50ms inference, and what working in an operations-focused company actually teaches you."
tags: ["AI/ML", "Internship", "PyTorch", "Python"]
---

## The Brief

When I joined Bay Smart Solutions as a software engineering intern in the summer of 2025, my manager gave me a deceptively simple-sounding task: "Make the staging process faster with AI." Home staging — the practice of furnishing and decorating a property before listing it — is expensive and time-consuming. A skilled stager can take 3–5 hours just *deciding* what furniture goes where in a given room.

Bay Smart runs a full-service staging operation: they own warehouse inventory, coordinate furniture moves, and work with real estate agents on tight timelines. The bottleneck wasn't physical — it was the decision layer. Which furniture pieces go in this room? What style fits this space? How do you match 300+ warehouse items to an empty room you've never seen before?

The idea was to build a recommender that could look at a photo of an empty room and suggest appropriate staging furniture categories — and then match those categories against actual inventory. Feed it an image, get back specific pieces from the warehouse that fit the room. Simple to describe, surprisingly nuanced to build.

## Choosing the Architecture

My first instinct was to fine-tune a vision transformer — ViT-Base had looked impressive in a paper I'd read the previous semester. After two days of experimentation I abandoned that idea. ViTs need more data than we had (roughly 4,000 labeled room photos) and they're significantly slower on CPU, which was a hard constraint since Bay Smart's inference environment had no GPUs.

ResNet-50 turned out to be the right call. It's fast, well-understood, and transfers well from ImageNet to interior scenes because the low-level features (edges, textures, lighting) are genuinely relevant. I replaced the final classification head with a multi-label sigmoid output — a room can simultaneously need multiple furniture categories — and fine-tuned the last two residual blocks while keeping the earlier feature extraction layers frozen.

```python
model = torchvision.models.resnet50(weights="IMAGENET1K_V2")
# Freeze all but last 2 blocks
for name, param in model.named_parameters():
    if "layer4" not in name and "layer3" not in name:
        param.requires_grad = False

model.fc = nn.Sequential(
    nn.Linear(2048, 512),
    nn.ReLU(),
    nn.Dropout(0.3),
    nn.Linear(512, num_classes),
    nn.Sigmoid()
)
```

The multi-label framing was important. An early version output a single best-fit furniture style, which was wrong for almost every real room. Switching to sigmoid outputs with a threshold tuned on the validation set brought retrieval precision up substantially.

## Getting to 50ms on CPU

The initial model hit 340ms per image — way too slow for a tool stagers would actually use between photo uploads. I got it down to 50ms through three optimizations:

**1. ONNX export.** Converting from PyTorch to ONNX Runtime gave a near-free 2–3× speedup through graph-level optimizations: operator fusion, constant folding, memory layout improvements that PyTorch doesn't apply in eager mode.

**2. Input resolution.** Dropping from 224×224 to 192×192 pixels shaved another 30% off inference time with negligible accuracy impact — the model had enough redundancy in its learned features to handle the smaller input.

**3. Threading.** Setting `intra_op_num_threads=4` on a quad-core machine gets close to linear scaling for the convolution operations that dominate ResNet inference time.

The final system: 50ms median, 80ms at p99. Fast enough that suggestions appeared before the stager finished reviewing the uploaded photo.

## The Embedding Index

One piece worth detailing: for each of Bay Smart's 300+ warehouse furniture pieces, I ran the ResNet-50 feature extractor (before the classification head) and stored the resulting 2048-dimensional embedding. At inference time, after classifying a room's furniture categories, the system finds the nearest warehouse items in embedding space using cosine similarity.

This meant the output wasn't just "you need a sofa" — it was "you need a sofa, and here are the three pieces from your current inventory that best match the aesthetic of this room." That specificity is what made the tool genuinely useful rather than an interesting demo.

## What an Operations Company Actually Teaches You

Bay Smart is not a software company. Software is a tool they use to run a furniture business. That distinction matters more than it sounds.

Every engineering decision got evaluated on one question: does this save the operations team time, reliably, today? My ONNX optimizations were invisible to every non-engineer in the building. What they saw was: the tool loads fast enough to use on every job. The framing I learned — technical decisions in terms of operational outcomes — is something I carry forward regardless of what I'm building.
