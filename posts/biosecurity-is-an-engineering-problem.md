---
title: "Biosecurity Is an Engineering Problem"
date: "2026-01-19"
excerpt: "The existential risks from synthetic biology aren't going to be solved by policy alone. They need hardware, software, and people who understand both."
tags: ["Biosecurity", "Biotech", "Engineering", "Policy"]
---

## The Policy Gap

Most public discussion of biosecurity focuses on policy: treaties, export controls, laboratory regulations, international monitoring agreements. These matter. But there's a gap in the conversation that becomes obvious when you look at biosecurity from an engineering perspective: the policy layer assumes a technical layer that doesn't yet fully exist.

You can mandate that DNA synthesis companies screen orders against pathogen databases. That only works if the screening algorithms are fast, accurate, and hard to evade — engineering problems. You can require biosafety level 3 containment for work on certain pathogens. That only works if the containment systems are reliable, well-monitored, and fail safely — engineering problems. You can build international early warning systems for novel outbreaks. That only works if the detection is sensitive, specific, and rapid enough to matter — engineering problems.

Biosecurity policy, at its implementation layer, is a collection of hard engineering problems that mostly remain unsolved.

## What the Field Actually Needs

I've been spending time reading biosecurity literature — particularly work coming out of the Johns Hopkins Center for Health Security, the Nuclear Threat Initiative's biosecurity program, and the Bipartisan Commission on Biodefense. A few technical gaps come up repeatedly:

**Rapid diagnostic platforms.** Current gold-standard pathogen identification (PCR, sequencing) is fast relative to pre-2010 baselines but still takes hours to days in most real-world settings. An unknown outbreak can spread internationally in less time than it takes to confirm what you're dealing with. Next-generation diagnostics — metagenomic sequencing from raw clinical samples, portable CRISPR-based detection, AI-assisted pattern recognition — are promising but not yet deployment-ready at the scale needed.

**Autonomous biosafety monitoring.** Most BSL-3 and BSL-4 labs rely heavily on procedural compliance for containment — humans following protocols correctly, every time. Sensor-based monitoring of airflow, aerosol particle counts, personnel movement, and environmental contamination exists but is primitive relative to what's technically possible. A modern semiconductor fab has more real-time process monitoring than most high-containment biological facilities.

**DNA synthesis screening.** The tools for screening DNA synthesis orders against known dangerous sequences are improving, but the screening is reactive — it flags known sequences. As AI-assisted protein design matures, it becomes possible to design novel dangerous sequences that don't match any database. Building screening that works against the unknown-unknowns is an open problem.

**Engineered biocontainment.** For synthetic organisms deployed in the environment (bioremediation, agricultural applications, gene drives), physical containment isn't possible after release. Genetic biocontainment — engineering organisms that can't survive outside their target environment, or that have genetic dependencies on synthetic compounds not found in nature — is an active research area. Making these systems robust against evolutionary pressure to revert is hard.

## The Semiconductor Parallel

I keep coming back to semiconductor manufacturing as an analogy for what mature biosecurity infrastructure should look like. Chip fabs are among the most tightly controlled manufacturing environments on Earth. Particle counts in the air are measured continuously. Every process step is logged. Equipment is instrumented with dozens of sensors per tool. Statistical process control flags anomalies before they produce defects.

The biological equivalent would be: every manipulation of a dangerous biological agent is logged and monitored. Environmental sensors provide continuous real-time data on contamination indicators. Process deviations are caught by automated systems, not human observation. Containment is verified continuously, not assumed.

Building that infrastructure requires process engineers, control systems engineers, sensing engineers, and software engineers — not just biologists. This is genuinely one of the more compelling arguments for why people with my background belong in this space.

## What I'm Thinking About for My Own Path

I'm a junior in robotics engineering. I'm not going to design a pathogen screening algorithm or build a next-gen diagnostic platform before I graduate. But I can develop the foundational skills that make me useful in this space:

- **Process engineering principles** applied to biological manufacturing — understanding what process control looks like when the product is cells or molecules rather than microchips
- **Sensing and instrumentation** at the edge of detection limits — the same physics that matters for a LiDAR sensor matters for a biosensor
- **Data pipeline engineering** for real-time monitoring applications — I did this for a race car, the architecture for a biosafety monitoring system is similar
- **Regulatory frameworks** around biological manufacturing (FDA's Process Analytical Technology guidance, GMP requirements) — the policy context matters for engineering decisions

The intersection of robotics and biosecurity is real, it's underserved, and it's where I want to spend the next decade. The grey goo scenario from my last post was a thought experiment. The biosecurity engineering gaps I've described here are not hypothetical.

## A Note on Dual Use

I want to be honest about something: the same skills that make you useful for biosecurity are the same skills that could, in principle, be misused. This is true of almost all engineering work — the person who understands how a bridge fails is the same person who can build a bridge that doesn't fail, and in principle could make one that does. But it's especially acute in biosecurity, where the stakes of misuse are catastrophic.

I don't think the right response is to stay away from the field. I think the right response is to be clear-eyed about the dual-use nature of the work, to support the institutional and policy infrastructure that governs it, and to build a culture of responsibility in the technical community. That requires people inside the field, not just critics outside it.

More practically: I find the problem genuinely interesting, the career trajectory is real, and the work matters. That's enough to commit to.
