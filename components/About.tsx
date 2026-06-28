import FadeIn from "./FadeIn";

const skills = [
  "Python", "C/C++", "Verilog", "TypeScript", "React",
  "PyTorch", "OpenCV", "ROS2", "FPGA Design", "Firebase",
  "Next.js", "Linux", "Git", "Embedded Systems",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="flex items-center gap-4 text-2xl sm:text-3xl font-bold text-white mb-12">
            <span className="font-mono text-sky-400 text-xl">01.</span>
            About Me
            <span className="flex-1 h-px bg-slate-800 ml-4" />
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-4">
            <FadeIn delay={0.1}>
              <p className="text-slate-300 leading-relaxed">
                I&apos;m a Robotics Engineering student at{" "}
                <span className="text-sky-400 font-medium">UC Santa Cruz</span>{" "}
                (Class of 2027), passionate about the intersection of software
                and hardware. Whether it&apos;s building FPGA control systems in
                Verilog or training neural networks for computer vision, I love
                working across the full stack of intelligent machines.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate-300 leading-relaxed">
                My experience spans AI/ML engineering internships, nonprofit
                software development, and Formula SAE electric vehicle telemetry.
                I&apos;m drawn to problems where software meets the physical
                world — real-time control, sensor fusion, and systems that have
                to work the first time.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-slate-300 leading-relaxed">
                Outside of engineering, I enjoy exploring the California coast
                on a longboard and tracking down rare Pokémon cards (with a
                bot&apos;s help). Expected graduation:{" "}
                <span className="text-sky-400 font-medium">June 2027</span>.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="right" className="md:col-span-2">
            <div className="bg-[#041428] border border-slate-800/60 rounded-xl p-6">
              <p className="text-sky-400 font-mono text-sm mb-4 tracking-wide">
                {"// technologies I work with"}
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-slate-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
