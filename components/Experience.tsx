import FadeIn from "./FadeIn";

const experiences = [
  {
    company: "Amrixa Pharmaceuticals",
    role: "Process Engineer",
    period: "Jan 2026 – Jun 2026",
    location: "San Marcos, CA",
    highlight: true,
    bullets: [
      "Integrated liquid handling systems with laboratory instrumentation to automate multi-step experimental workflows, minimizing manual intervention and reducing human error in critical assay steps.",
      "Programmed and optimized automated liquid handling robots for high-throughput laboratory workflows, improving throughput by 25% while maintaining repeatable precision across runs.",
      "Developed and documented standard operating procedures (SOPs) for automated workflows, ensuring GMP-compliant process traceability and enabling seamless handoff between shifts.",
      "Performed root cause analysis on process deviations, applying systematic fault isolation to maintain process capability across high-volume production runs.",
    ],
    tags: ["Liquid Handling Automation", "GMP", "SOP Development", "Process Optimization", "High-Throughput Workflows", "Root Cause Analysis"],
  },
  {
    company: "Bay Smart Solutions",
    role: "Software Engineering Intern",
    period: "Jun 2025 – Sep 2025",
    location: "Pleasanton, CA",
    highlight: false,
    bullets: [
      "Developed an AI staging recommender in Python using PyTorch and ResNet-50, indexing 300+ staged room references via computer vision across 50–75 photos per home — reducing preparation time by 50%.",
      "Implemented a ResNet-50 feature extraction pipeline generating 2048-dimensional embeddings for similarity-based retrieval, achieving real-time recommendations with 50ms inference on CPU.",
      "Optimized staging preparation workflows by enabling rapid furniture selection and warehouse inventory tracking, cutting manual effort by 50%.",
    ],
    tags: ["PyTorch", "ResNet-50", "Python", "Computer Vision", "Process Optimization"],
  },
  {
    company: "UCSC Blueprint",
    role: "Developer",
    period: "Oct 2024 – Jun 2025",
    location: "Santa Cruz, CA",
    highlight: false,
    bullets: [
      "Engineered a React + Firebase inventory tracking platform for Loaves & Fishes nonprofit, reducing manual stock logging time by 30%.",
      "Implemented role-based access control via Firebase Authentication, reducing duplicate inventory entries by 75% and improving data accuracy.",
      "Built a GitHub Classroom analytics tool in React to track student development metrics (commits, PRs, test coverage), streamlining instructor code review.",
    ],
    tags: ["React", "Firebase", "TypeScript", "Node.js", "GitHub API"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-[#041428]/40">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="flex items-center gap-4 text-2xl sm:text-3xl font-bold text-white mb-12">
            <span className="font-mono text-sky-400 text-xl">02.</span>
            Experience
            <span className="flex-1 h-px bg-slate-800 ml-4" />
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-slate-800" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 0.15}>
                <div className="relative pl-12 md:pl-16">
                  {/* Timeline dot */}
                  <div className={`absolute left-2.5 md:left-4 top-1.5 border-2 border-[#020b18] rounded-full ${exp.highlight ? "w-4 h-4 bg-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.7)]" : "w-3 h-3 bg-sky-600 shadow-[0_0_8px_rgba(14,165,233,0.4)]"}`} />

                  <div className={`relative bg-[#041428] rounded-xl transition-colors ${exp.highlight ? "border border-sky-600/50 hover:border-sky-400/60 shadow-[0_0_40px_rgba(14,165,233,0.08)] p-7" : "border border-slate-800/60 hover:border-sky-900/60 p-6"}`}>
                    {exp.highlight && (
                      <>
                        <div className="absolute -top-px left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
                        <span className="absolute top-5 right-5 px-2.5 py-0.5 text-xs font-mono rounded-full bg-sky-400/15 text-sky-300 border border-sky-500/40 tracking-wide">
                          process engineer
                        </span>
                      </>
                    )}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className={`font-semibold text-white ${exp.highlight ? "text-xl" : "text-lg"}`}>
                          {exp.role}
                        </h3>
                        <p className="text-sky-400 font-medium text-sm mt-0.5">
                          {exp.company}
                          <span className="text-slate-600 font-normal ml-2">· {exp.location}</span>
                        </p>
                      </div>
                      <span className="font-mono text-slate-500 text-sm whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 text-slate-300 text-sm leading-relaxed"
                        >
                          <span className="text-sky-400 mt-1 flex-shrink-0">▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 text-xs font-mono border border-sky-900/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
