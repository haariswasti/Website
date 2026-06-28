---
title: "Notes on Process Engineering: From Chips to Cells"
date: "2026-03-30"
excerpt: "Semiconductor process engineering and bioprocess engineering look different on the surface. Underneath, they're running the same playbook. Here's what that means for someone trying to cross over."
tags: ["Process Engineering", "Biotech", "Semiconductor", "Manufacturing"]
---

## Two Industries, One Discipline

Semiconductor fabs and bioreactor suites look nothing alike. One is a temple of ultrapure silicon and photons — controlled to parts per trillion contamination, every surface polished to angstrom-level smoothness. The other is stainless steel, tubing, and glass vessels full of warm, messy cell culture medium. One makes transistors. The other makes molecules.

But spend time reading the process engineering literature for both, and a pattern emerges: the intellectual framework is identical.

Both disciplines are fundamentally about **maintaining a physical or chemical process within tight parameter bounds, consistently, at scale, with high yield, under constraints that make deviations expensive**. The specific parameters are different. The tools are different. The regulatory frameworks are different. The underlying engineering problem is the same.

## The Semiconductor Process Engineer's Playbook

In semiconductor manufacturing, a process engineer owns specific steps in the wafer fabrication flow — lithography, etch, deposition, chemical mechanical planarization, ion implantation. Their job is to:

1. **Characterize the process**: understand how output metrics (film thickness, critical dimension, surface roughness) respond to input parameters (temperature, pressure, gas flow, time)
2. **Establish control limits**: define what normal variation looks like and where deviations become unacceptable
3. **Monitor in production**: track the process in real time and detect drift before it produces defective wafers
4. **Investigate and correct**: when something goes wrong, do systematic root cause analysis — not guess, not trial-and-error, but structured fault isolation

The tools: statistical process control charts, design of experiments, FMEA (Failure Mode and Effects Analysis), fish-bone diagrams, Six Sigma methodology. The output metric is yield — what fraction of wafers become working chips.

## The Bioprocess Engineer's Playbook

In biological manufacturing — making cell therapies, monoclonal antibodies, mRNA vaccines — the process engineer owns the upstream and downstream manufacturing steps. They're responsible for:

1. **Process characterization**: understanding how cell culture outcomes (titer, cell viability, product quality attributes) respond to input parameters (temperature, pH, dissolved oxygen, feeding strategy, agitation rate)
2. **Design space definition**: FDA's PAT framework explicitly asks manufacturers to define a "design space" — the range of input parameters within which the process reliably produces quality product
3. **Real-time monitoring**: deploying in-line and at-line sensors to monitor critical quality attributes during the run, not just after it's finished
4. **Deviation management**: GMP regulations require that every deviation from the process as validated be documented, investigated, and closed — with root cause identified

If you read that list alongside the semiconductor version, they're the same list. Different nouns, same structure.

## Where the Analogy Breaks Down

The places where bioprocessing is genuinely harder than semiconductor manufacturing are worth naming honestly:

**The process is alive.** Cells are not passive reactants. They respond to their environment, they evolve under selection pressure, they can enter stress states that change their behavior in ways that aren't predictable from the physical parameters you're controlling. A transistor gate oxide behaves identically at 300K whether it was deposited on a Tuesday or a Thursday. A CHO cell culture run on a Tuesday might produce a different glycosylation profile than the same process run on Thursday because of subtle differences in the inoculum.

**The product is the process.** In semiconductor manufacturing, you can characterize the product after it leaves the process — measure the transistors, test the electrical performance. In biological manufacturing, the product (a protein, a cell therapy, a virus) is fragile, difficult to characterize in real time, and the specifications are defined in terms of biological activity that requires assays taking days to complete. You often don't know if a batch is good until after you've moved on.

**The regulatory framework is more complex.** FDA's GMP requirements for biological products are extensive and deeply intertwined with the process definition. Changing a process parameter that would be routine in semiconductor manufacturing (a recipe change, a new equipment supplier) can trigger a regulatory filing in biologics. Process engineers in biotech spend a significant fraction of their time managing change control.

**The scale is different.** Semiconductor wafers are manufactured in lots of 25, with high automation and tight tolerances. A single-use bioreactor batch might be 2000L, running for 14 days, with significant operator interaction. The physics of scale-up from a 2L development bioreactor to a 2000L production bioreactor is nontrivial and still involves empirical characterization.

## What Transfers Directly

Despite the differences, several competencies from semiconductor process engineering map directly:

- **Statistical thinking**: SPC, DOE, regression, multivariate methods — the math doesn't care whether the process variable is film stress or dissolved oxygen
- **Root cause analysis methodology**: systematic fault isolation, not guessing
- **Equipment ownership mindset**: understanding how the tool works, not just what parameters to set
- **Data systems fluency**: LIMS, ERP, process historians, SPC software — different implementations, same concepts
- **Documentation discipline**: the rigor required for semiconductor process documentation is excellent preparation for GMP documentation requirements

## Why I'm Writing This

I'm a junior in robotics engineering with hands-on experience in pharmaceutical process automation. Writing this post is partly thinking out loud about where my background fits and where it doesn't.

The fit is real. The gaps are learnable. The cross-disciplinary perspective — seeing bioprocessing through a semiconductor process engineer's eyes, and vice versa — is, I think, genuinely valuable rather than a liability.

The semiconductor industry showed that rigorous process engineering discipline applied to a complex physical-chemical system could enable devices of extraordinary complexity and reliability. The biopharmaceutical industry is at an earlier stage of that journey. The tools and methodologies exist. Applying them consistently at scale is the work.

That's the work I want to do.
