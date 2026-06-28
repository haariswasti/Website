---
title: "Why a Robotics Engineer Started Paying Attention to Biology"
date: "2025-11-22"
excerpt: "Somewhere between writing motor controllers and reading about synthetic biology, I started to notice that the most interesting engineering problems of the next decade aren't mechanical."
tags: ["Biotech", "Robotics", "Career", "Synthetic Biology"]
---

## A Confession

I didn't pay much attention to biology in high school. It felt like memorization — organelles, taxonomy, the Krebs cycle — compared to the clean logical satisfaction of physics and math. I chose robotics engineering partly because I wanted to build things I could see moving.

I'm not sure exactly when that changed, but I can point to the moment I noticed it had.

## The Moment

I was debugging a PID controller for a motor torque loop — very routine robotics work — and I had a control theory textbook open alongside a paper I'd stumbled onto about bacterial chemotaxis: how *E. coli* navigates chemical gradients using a two-component signaling system that is, structurally, a proportional-integral controller with adaptation. The bacterium doesn't have a brain. It has a molecular feedback loop that was optimized by 3.5 billion years of selection pressure, and it looks exactly like the thing I was writing in Python.

That parallel stopped me cold. Biology isn't separate from engineering. It *is* engineering — just implemented in a substrate we're only beginning to understand how to reprogram.

## What Lab Automation Actually Is

The biotech industry runs on robots. Liquid handling arms, automated incubators, robotic plate stackers, computer vision inspection systems — a modern cell therapy manufacturing line looks more like a semiconductor fab than a hospital. The humans are there to maintain the machines and handle exceptions.

What's missing in most of these facilities isn't more automation. It's smarter automation. The robots execute scripts faithfully. They don't adapt when a reagent lot behaves differently, when a cell line drifts, or when a sensor reading is anomalous but not obviously wrong. The gap between "automated" and "intelligent" in biotech manufacturing is roughly where robotics was in 2010.

That gap is where I want to work.

## The Process Engineering Angle

The role that keeps appearing at the intersection of these two worlds is process engineer. In semiconductor manufacturing, process engineers optimize the physical and chemical steps that turn raw silicon wafers into working chips — yield, throughput, defect rate. In biotech, the analogous role involves cell culture processes, purification steps, and bioreactor control. In both cases the job is: understand the physics and chemistry deeply enough to know which variables to control, then build systems that control them reliably at scale.

What's changed recently is that the complexity of biotech processes has outpaced what humans can intuitively optimize. The parameter space for a mRNA vaccine manufacturing process — temperature profiles, pH, lipid nanoparticle formulation ratios, mixing dynamics — is too high-dimensional for manual design of experiments. Machine learning-assisted process development is becoming standard. Robotics engineers who understand control systems and data pipelines are genuinely useful here.

## What I've Been Reading

A few things that have shaped this shift for me:

**Synthetic Biology at Stanford's SETR (2025):** Their annual review of emerging technologies has a clear-eyed section on where synthetic biology is heading — not just gene editing, but full-stack programmable cellular systems. The engineering framing resonates.

**The bioprocessing literature on PAT** (Process Analytical Technology): FDA-encouraged framework for real-time monitoring and control of pharmaceutical manufacturing. Reads like a control systems textbook applied to cell culture. Very transferable.

**Eric Topol on AI and medicine:** Less directly relevant to biotech manufacturing, but his argument that the bottleneck in medical progress is often measurement and data quality, not ideas, maps directly onto what I see in biotech process development.

## The Thing I Keep Coming Back To

Biology runs at the edge of what's physically possible for energy efficiency and information density. A mitochondrion converts chemical energy to ATP at around 40% efficiency — better than most combustion engines. A single cell processes environmental information and makes behavioral decisions using femtowatts of power. The genome stores roughly 725 MB in a space smaller than a micron.

We're at the early stages of being able to program that substrate instead of just studying it. That feels like the most consequential engineering frontier of the next few decades, and I want to be close to it.

I realize this is a significant pivot from building FPGA games and race car software. But the underlying skill — understanding complex systems well enough to control and optimize them — is the same. The substrate is just different.

Next up: I want to write about something that's been haunting the edges of this whole conversation — what happens when self-replicating biological (or nano) systems behave in ways their designers didn't intend. The optimistic version of that story is where I want to work. The pessimistic version is worth taking seriously.
