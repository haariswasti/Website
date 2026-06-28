---
title: "Building an FPGA Game from Scratch"
date: "2025-05-10"
excerpt: "What I learned designing a real-time arcade game in Verilog — VGA controllers, finite-state machines, and why race conditions will ruin your weekend."
tags: ["FPGA", "Verilog", "Hardware", "Digital Design"]
---

## Why FPGA?

When my digital design professor first handed us a BASYS3 board and said "build something fun," I immediately thought: game. Not a simulation, not a calculator — an actual playable game rendered on a real monitor at 60 frames per second. What followed was three weeks of the most satisfying (and occasionally infuriating) hardware design work I've done as a student.

FPGA development is fundamentally different from software. You're not writing instructions for a CPU to execute sequentially — you're *describing hardware* that all operates in parallel. Every `always @(posedge clk)` block you write becomes logic gates switching in unison. That mental shift took me a while to internalize, and Subway Slug was where it finally clicked.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel nunc vitae metus volutpat auctor. Nunc dignissim, tortor vitae blandit venenatis, enim quam accumsan est, at placerat mi turpis vel nibh. Proin efficitur bibendum sapien, sed viverra libero congue id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

## Designing the VGA Controller

The first major challenge was generating a valid VGA signal. A 640×480 display at 60Hz requires a pixel clock of exactly 25.175 MHz — close enough to 25 MHz that the BASYS3's built-in oscillator works fine. The controller has to count through horizontal and vertical sync pulses with precise timing, and output a blanking signal when the beam is off-screen.

Getting the sync polarity wrong means your monitor shows nothing. Getting the pixel timing off by a single cycle means horizontal shearing. I spent an embarrassing amount of time debugging a one-line arithmetic error in my horizontal counter reset before discovering that FPGA toolchains will happily synthesize logically incorrect code with zero warnings.

```verilog
always @(posedge clk_25MHz) begin
  if (h_count == H_TOTAL - 1)
    h_count <= 0;
  else
    h_count <= h_count + 1;
end
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique arcu eu leo tincidunt, at viverra mi varius. Nullam dictum diam nec augue laoreet, in congue libero fringilla. Sed vel nunc ut lorem fermentum vehicula. Morbi posuere, velit et volutpat tincidunt, dolor mauris suscipit lectus, ut sodales augue ex vel augue.

## The Race Condition That Cost Me a Weekend

The nastiest bug I hit was a race condition between the game logic FSM and the VGA display module. Both were reading from the same frame buffer — the game writing sprite positions, the VGA controller reading pixel values — without any synchronization mechanism.

The result: occasional screen tearing, corrupted sprite data, and a player character that would flicker out of existence mid-game. The fix was a double-buffer architecture: one buffer the game writes to, one the VGA controller reads from, swapped atomically at the vertical blanking interval. Classic technique, humbling that I had to rediscover it myself.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula est a leo lacinia, id pretium enim dapibus. Phasellus sit amet arcu sed nisi feugiat blandit in a tortor. Aliquam erat volutpat. Cras condimentum nisl a diam dapibus, et aliquet lorem pretium. Nam molestie felis leo, eu tristique nulla posuere vel.

## What I'd Do Differently

If I were starting over, I'd draw the complete state diagram on paper before writing a single line of Verilog. I refactored the main game FSM three times because I hadn't thought through all the state transitions upfront. On FPGAs, refactoring is expensive — every change requires a full synthesis-and-place-route cycle that takes minutes.

I'd also set up a testbench earlier. Simulation in ModelSim would have caught that race condition in twenty minutes. Instead I spent a weekend toggling a logic analyzer and staring at oscilloscope traces.

Still, there's something deeply satisfying about playing a game that runs entirely on logic gates you described from scratch. No operating system. No runtime. Just hardware doing exactly what you told it to do — once you finally told it the right thing.
