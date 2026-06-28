import FadeIn from "./FadeIn";

const skills = [
  // Languages
  "Python", "C/C++", "HTML",
  // Frameworks & Libraries
  "React", "Node.js", "Flask", "NumPy", "PyTorch",
  // Dev Tools
  "Git", "GitHub", "Docker", "VS Code",
  // Domain
  "Liquid Handling Automation", "GMP / SOP", "FPGA / Verilog",
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
                (Class of 2027), passionate about intelligent systems and advanced
                manufacturing. My background spans FPGA control systems, AI-powered
                computer vision, and real-time data pipelines — and most recently,
                automating high-throughput laboratory workflows in pharmaceutical manufacturing.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate-300 leading-relaxed">
                My work and writing have increasingly converged on{" "}
                <span className="text-sky-400 font-medium">biotech and biosecurity</span> —
                the engineering infrastructure that makes biological manufacturing
                reliable, safe, and scalable. I&apos;m drawn to problems where control
                systems thinking meets the physical world.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-slate-300 leading-relaxed">
                Expected graduation:{" "}
                <span className="text-sky-400 font-medium">June 2027</span>.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="right" className="md:col-span-2 space-y-4">
            {/* Education card */}
            <div className="bg-[#041428] border border-slate-800/60 rounded-xl p-5">
              <p className="text-sky-400 font-mono text-xs mb-3 tracking-wide uppercase">
                Education
              </p>
              <p className="text-white font-semibold text-sm">UC Santa Cruz</p>
              <p className="text-slate-400 text-sm">B.S. Robotics Engineering</p>
              <p className="text-slate-500 text-xs font-mono mt-1">Sep 2023 – Jun 2027</p>
              <div className="mt-3 pt-3 border-t border-slate-800/60">
                <p className="text-slate-500 text-xs mb-1">Relevant Coursework</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Embedded Systems · Logic Design · Systems &amp; Signals · Data Structures
                </p>
              </div>
            </div>
            {/* Skills card */}
            <div className="bg-[#041428] border border-slate-800/60 rounded-xl p-5">
              <p className="text-sky-400 font-mono text-xs mb-3 tracking-wide uppercase">
                Technical Skills
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
