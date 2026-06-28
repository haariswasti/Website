import FadeIn from "./FadeIn";
import { GithubIcon } from "./SocialIcons";

const projects = [
  {
    name: "Subway Slug",
    description:
      "A real-time FPGA arcade game implemented in Verilog on the BASYS3 development board. Features a custom VGA controller running at 25MHz/60FPS, finite-state machines for game logic, and race-condition-safe frame synchronization between game and display logic.",
    tags: ["Verilog", "FPGA", "VGA", "BASYS3", "Digital Logic"],
    github: "https://github.com/haariswasti",
    highlight: true,
  },
  {
    name: "Inventory Monitoring Bot",
    description:
      "Python web scraper tracking Pokémon card stock in real-time across Target's website. Implemented auto-checkout prototype with browser automation and real-time notifications. Successfully used to purchase $200+ in products during high-demand restocks.",
    tags: ["Python", "Selenium", "Web Scraping", "Automation", "Discord API"],
    github: "https://github.com/haariswasti",
  },
  {
    name: "GitHub Classroom Analytics",
    description:
      "A React dashboard built for UCSC Blueprint that gives instructors visibility into student activity — commits, pull requests, and test coverage trends over time. Integrates with the GitHub API and Firebase for real-time data and persistent session management.",
    tags: ["React", "TypeScript", "Firebase", "GitHub API", "Chart.js"],
    github: "https://github.com/haariswasti",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="flex items-center gap-4 text-2xl sm:text-3xl font-bold text-white mb-12">
            <span className="font-mono text-sky-400 text-xl">03.</span>
            Projects
            <span className="flex-1 h-px bg-slate-800 ml-4" />
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.12}>
              <div
                className={`group relative flex flex-col h-full bg-[#041428] rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-900/20 ${
                  project.highlight
                    ? "border-sky-800/60 hover:border-sky-600/60"
                    : "border-slate-800/60 hover:border-sky-900/60"
                }`}
              >
                {project.highlight && (
                  <div className="absolute -top-px left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-900/40 flex items-center justify-center">
                      <span className="text-sky-400 text-lg">⬡</span>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-sky-400 transition-colors"
                        aria-label="GitHub"
                      >
                        <GithubIcon size={18} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-slate-400 px-2 py-0.5 bg-slate-800/60 rounded"
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
    </section>
  );
}
