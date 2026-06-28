---
title: "What 35 CSV Files Taught Me About Real-World Robotics"
date: "2025-10-18"
excerpt: "Processing FormulaSlug's electric race car data pipeline showed me the gap between textbook robotics and systems that have to work on a track at 60mph."
tags: ["Robotics", "Data Engineering", "FormulaSlug", "Python"]
---

## The Problem With Clean Data

Every robotics course I've taken at UCSC starts with the same assumption: your sensor data is clean, your timestamps are synchronized, and your coordinate frames are consistent. Then you join an actual engineering team.

When I came on to FormulaSlug's software team in September 2025, my first task was to make sense of 35+ CSV files collected from a single test day of our electric formula car. Each file came from a different sensor subsystem — battery management, motor controllers, wheel speed encoders, brake pressure transducers — logged at different sample rates, with different timestamp formats, and occasionally with gaps where a connector had rattled loose at 60mph.

This is the data you actually work with in the real world.

## Building the Pipeline

The goal was to produce visualizations the mechanical and electrical subteams could actually use: energy loss over a lap, brake efficiency as a function of deceleration rate, and regenerative braking capture across different corner profiles. None of that is technically hard. Getting the data into a state where you can compute it is.

```python
import pandas as pd
import numpy as np
from pathlib import Path

def load_and_align(data_dir: Path, target_hz: int = 100) -> pd.DataFrame:
    frames = []
    for csv_path in sorted(data_dir.glob("*.csv")):
        df = pd.read_csv(csv_path)
        df["timestamp"] = pd.to_datetime(df["timestamp_ms"], unit="ms")
        df = df.set_index("timestamp").sort_index()
        # Resample to common frequency
        df = df.resample(f"{1000 // target_hz}ms").mean()
        frames.append(df)
    
    # Outer join — NaN where sensor was silent
    merged = pd.concat(frames, axis=1, join="outer")
    return merged
```

The resampling step looks simple but hides a real decision: when you interpolate across a sensor gap, are you computing physics or making up data? For brake pressure, where we're trying to understand peak loads, interpolating over a 200ms gap fundamentally changes the analysis. I ended up flagging gap regions explicitly rather than filling them.

## Energy Isn't Where You Think It Goes

The most interesting result from the first clean dataset: we were losing more energy to regenerative braking inefficiency in low-speed hairpin corners than to aerodynamic drag at highway speed. This ran completely counter to the team's intuition, which had been focused on reducing drag.

The electrical team had configured the regen controller to kick in aggressively at low speeds, and the motor's efficiency curve tanks below 20% rated torque. The software fix — a torque floor below which regen is disabled and friction brakes take over — recovered several percentage points of per-lap energy without changing any hardware.

This is why telemetry matters. The physics was always there. We just hadn't looked.

## What This Has to Do With Robotics

The formula car is, at its core, a highly constrained robotic system: sensors, actuators, a control loop, and a finite energy budget. The engineering problems are identical to those in mobile robotics — state estimation under noise, energy-aware planning, fault-tolerant data pipelines.

The difference is that the car operates at a timescale and energy density that makes every inefficiency visible. A 2% energy loss in a robot's drivetrain might not matter over a 30-minute indoor demo. On a race circuit it's the difference between finishing and coasting to a stop.

I've started thinking about all robotic systems through this lens: if you had to minimize energy expenditure every single second, what would you change? Usually the answer is somewhere in the data you haven't looked at yet.

## On the Broader Question

Spending time this deep in sensor data has also made me think about the limits of purely mechanical approaches to complex system optimization. At some point, the behavioral complexity of the system — the driver, the track surface, the battery thermal state — exceeds what any fixed control strategy can handle. You need the system to learn.

That line of thinking is what's been pulling me toward more biological analogies for engineering problems. Living systems solved the energy-efficient adaptive sensing problem a long time ago. I'm increasingly curious about what it would look like to borrow more explicitly from that playbook. More on that in a future post.
