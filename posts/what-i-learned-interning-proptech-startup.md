---
title: "What I Learned Interning at a PropTech Startup"
date: "2025-09-20"
excerpt: "Reflections on building production AI features with PyTorch during my internship at Bay Smart Solutions — from zero to 50ms inference."
tags: ["AI/ML", "Internship", "PyTorch", "Python"]
---

## The Brief

When I joined Bay Smart Solutions as a software engineering intern in the summer of 2025, my manager gave me a deceptively simple-sounding task: "Make the staging process faster with AI." Home staging — the practice of furnishing and decorating a property before listing it — is expensive and time-consuming. A skilled stager can take 3–5 hours just *deciding* what furniture goes where in a given room.

The idea was to build a recommender that could look at a photo of an empty room and suggest appropriate staging furniture categories. Feed it an image, get back "mid-century sofa + floor lamp + abstract art" in under a second. Simple to describe, surprisingly nuanced to build.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor urna sed velit commodo, id sagittis lorem varius. Donec laoreet tortor eget leo commodo, in molestie orci efficitur. Sed posuere orci sit amet tempor hendrerit. Fusce ut nisi sit amet nulla porta pellentesque quis eget mauris.

## Choosing the Architecture

My first instinct was to fine-tune a vision transformer — ViT-Base had looked impressive in a paper I'd read the previous semester. After two days of experimentation I abandoned that idea. ViTs need more data than we had (roughly 4,000 labeled room photos) and they're significantly slower to run on CPU, which was a hard requirement since Bay Smart's inference environment had no GPUs.

ResNet-50 turned out to be the right call. It's fast, well-understood, and transfers well from ImageNet to interior scenes because the low-level features (edges, textures, lighting) are genuinely relevant. I replaced the final classification head with a multi-label sigmoid output — a room can simultaneously suggest multiple furniture categories — and fine-tuned the last two residual blocks.

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

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat neque vitae lorem bibendum, at luctus orci vehicula. Praesent luctus augue quis lorem convallis tincidunt. Duis facilisis diam et justo laoreet posuere. Nulla at nisi nec tortor mattis finibus. Phasellus tincidunt ex nec sapien tincidunt, eu vulputate enim molestie.

## Getting to 50ms on CPU

The initial model hit 340ms per image on a standard laptop CPU — way too slow for a near-real-time web tool. I got it down to 50ms through three optimizations:

**1. ONNX export.** Converting the PyTorch model to ONNX and running it with the ONNX Runtime is a near-free 2–3× speedup. The runtime performs graph-level optimizations (operator fusion, constant folding) that PyTorch doesn't apply during eager-mode inference.

**2. Input resolution.** Dropping from 224×224 to 192×192 pixels — well within the model's robustness range after fine-tuning — shaved another 30% off inference time with negligible accuracy impact.

**3. Threading.** ONNX Runtime has first-class support for multi-threading. Setting `intra_op_num_threads=4` on a quad-core machine gets you close to linear scaling for the convolution operations.

The final system: 50ms median inference, 80ms at p99. Good enough that the frontend could show results while the user was still looking at the uploaded photo.

## What Startups Actually Teach You

The technical work was genuinely interesting, but the most valuable thing I learned had nothing to do with PyTorch. At a small startup, every engineer touches the full stack — I was doing data labeling one morning and writing a FastAPI route the next afternoon. You learn to ship fast, to be comfortable with "good enough for now," and to communicate technical constraints clearly to non-technical stakeholders.

My manager didn't care that I'd used ONNX Runtime. She cared that the stager tool was going to save her team three hours per property. Learning to frame technical decisions in terms of business outcomes is a skill I'll carry for the rest of my career.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur fringilla lorem a turpis dictum, ut consectetur arcu cursus. Integer fringilla orci nec sapien ornare, ut rhoncus ex commodo. Duis nec nisi at quam fermentum tempus a at arcu.
