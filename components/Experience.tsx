import FadeIn from "./FadeIn";

const experiences = [
  {
    company: "Bay Smart Solutions",
    role: "Software Engineering Intern",
    period: "Jun 2025 – Sep 2025",
    bullets: [
      "Built an AI staging recommender using PyTorch + ResNet-50, achieving 50ms CPU inference.",
      "Reduced property preparation time by 50% by automating furniture staging decisions.",
      "Deployed model in a FastAPI microservice integrated into the company's existing workflow.",
    ],
    tags: ["PyTorch", "ResNet-50", "FastAPI", "Python", "Computer Vision"],
  },
  {
    company: "UCSC Blueprint",
    role: "Developer",
    period: "Oct 2024 – Jun 2025",
    bullets: [
      "Built a React + Firebase inventory management platform for Loaves & Fishes nonprofit.",
      "Implemented role-based authentication with real-time database sync for 20+ volunteers.",
      "Developed a GitHub Classroom analytics dashboard tracking commits, PRs, and test coverage for instructors.",
    ],
    tags: ["React", "Firebase", "TypeScript", "Node.js", "GitHub API"],
  },
  {
    company: "FormulaSlug",
    role: "Software Team Member",
    period: "Sep 2025 – Jun 2026",
    bullets: [
      "Designed a Python telemetry pipeline processing 35+ data files from UCSC's electric race car.",
      "Built interactive visualizations for energy loss and brake efficiency analysis.",
      "Collaborated with mechanical and electrical subteams to validate sensor calibration.",
    ],
    tags: ["Python", "Pandas", "Matplotlib", "CAN Bus", "Data Pipeline"],
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
                  <div className="absolute left-2.5 md:left-4 top-1.5 w-3 h-3 rounded-full bg-sky-500 border-2 border-[#020b18] shadow-[0_0_10px_rgba(14,165,233,0.5)]" />

                  <div className="bg-[#041428] border border-slate-800/60 rounded-xl p-6 hover:border-sky-900/60 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sky-400 font-medium text-sm">
                          {exp.company}
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
