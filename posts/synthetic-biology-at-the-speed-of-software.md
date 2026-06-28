---
title: "Synthetic Biology at the Speed of Software"
date: "2026-05-04"
excerpt: "DNA synthesis costs have collapsed the same way transistor costs did. We're entering the era of biology-as-code, and the engineering challenges ahead are unlike anything the field has seen."
tags: ["Synthetic Biology", "Biotech", "AI/ML", "Biosecurity"]
---

## Moore's Law Happened to DNA

In 1990, sequencing the first human genome took 13 years and cost roughly $3 billion. In 2026, you can sequence a human genome in a day for under $200. The cost curve followed something close to Moore's Law — roughly halving every 18 months for three decades.

DNA *synthesis* (writing DNA, not reading it) has followed a similar curve, with a lag. In 2003, synthesizing a gene cost around $4 per base pair. Today it's under a cent per base pair and falling. The first synthetic cell — a bacterium running entirely on a computer-designed genome — was demonstrated by Craig Venter's team in 2010. AI-designed proteins are now being synthesized routinely in research labs.

The implication: biology is becoming programmable at a pace that resembles software, not traditional wet lab science. The design-build-test cycle that used to take months is compressing toward days.

## What "Biology as Code" Actually Means

The software analogy is imperfect but useful. In software, you write code, compile it, and run it — the gap between writing and executing is milliseconds. The equivalent in synthetic biology is: design a genetic sequence using computational tools, order a synthesized DNA construct, transform it into cells, and observe the behavior. The gap is still days to weeks, not milliseconds. But it used to be years.

What's changed recently:

**AI-assisted protein design.** AlphaFold changed the landscape of protein structure prediction. Models like RFdiffusion and ProteinMPNN can now design novel protein sequences with target functions — a capability that previously required Nobel Prize-winning insights and years of experimental work. The proteins designed by these systems are increasingly functional in real cells.

**Cell-free synthesis.** You don't always need a living cell to test a genetic design. Cell-free expression systems — purified transcription and translation machinery in a tube — let you go from DNA sequence to protein in a few hours, enabling rapid iteration on designs without the overhead of cell culture.

**Automated foundries.** The Biodesign Research Institute and similar facilities operate biological "foundries" — automated, high-throughput labs running robotic liquid handlers, automated sequencing, and machine learning-assisted data analysis in closed loops. Design, build, test, analyze, redesign — thousands of variants per week.

## The Engineering Challenges This Creates

Rapid design-build-test cycles are great for research velocity. They also introduce engineering challenges the field is only beginning to grapple with.

**Version control for biology.** In software, git tracks every change to every file. In a synthetic biology project with hundreds of genetic constructs being tested in parallel, maintaining clear provenance — which design produced which behavior — is non-trivial. The SBOL (Synthetic Biology Open Language) standard exists but hasn't achieved the adoption that something like git has in software.

**Debugging biological systems.** When code behaves unexpectedly, you can add print statements, attach a debugger, inspect memory. When a cell behaves unexpectedly, your "debug output" is whatever you can measure — RNA expression, protein levels, metabolite concentrations — and the measurement changes the system. Troubleshooting why an engineered genetic circuit produces the wrong output in a cell is fundamentally harder than debugging software.

**Containment at scale.** The faster you can design and build biological systems, the faster you can accidentally (or intentionally) build ones that shouldn't be released. The infrastructure for biosafety and biosecurity hasn't kept pace with the acceleration in design capabilities. This is the part that keeps biosecurity researchers up at night.

## The Governance Question

There's an ongoing debate in the synthetic biology community about whether the field is moving too fast for governance to keep up. The counterargument is that governance always lags technology and the field has managed to develop broadly without catastrophes so far.

I find myself somewhere in between. The argument that "nothing bad has happened yet" is not reassuring when the tail risks involve novel pathogens or ecosystems disrupted by engineered organisms. The argument that "governance will stifle beneficial innovation" ignores that governance can be designed intelligently to impose costs on dangerous applications while leaving room for beneficial ones.

The dual-use dilemma in synthetic biology isn't going away. The tools that let you design a protein to fight cancer are the same tools that let you design a protein to cause harm. The sequencing technology that enables rapid outbreak detection is the same technology that enables reading out a pathogen genome. You can't cleave the beneficial from the dangerous at the level of the tools.

What you can do is invest in the detection, containment, and response infrastructure proportional to the capabilities being deployed. That's the engineering work.

## Where I Land on This

I'm genuinely excited about what's happening in synthetic biology. The ability to design biological systems rationally, rather than waiting for evolution to produce them, is one of the most consequential capabilities humanity has developed. The near-term applications — better drugs, more efficient biomanufacturing, materials that don't require petroleum — are real and important.

I'm also genuinely concerned about the governance gap. Not in a "we should stop" way, but in a "we need more people working on the safety infrastructure" way. That framing is part of why I'm drawn to process engineering in this space: process engineers in biotech are, among other things, the people responsible for ensuring that what's built in a facility stays in that facility and meets quality specifications. That's biosafety at the implementation layer.

The field needs people who find both the opportunities and the risks interesting. I do.

---

*Next: I'm wrapping up a post on what the job search in this space actually looks like as an undergrad — the specific roles, what companies are looking for, and what I'm learning from applications and conversations. Coming soon.*
