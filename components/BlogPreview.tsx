import FadeIn from "./FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "synthetic-biology-at-the-speed-of-software",
    title: "Synthetic Biology at the Speed of Software",
    date: "2026-05-04",
    excerpt:
      "DNA synthesis costs have collapsed the same way transistor costs did. We're entering the era of biology-as-code, and the engineering challenges ahead are unlike anything the field has seen.",
    tags: ["Synthetic Biology", "Biotech", "AI/ML"],
  },
  {
    slug: "notes-on-process-engineering-chips-to-cells",
    title: "Notes on Process Engineering: From Chips to Cells",
    date: "2026-03-30",
    excerpt:
      "Semiconductor process engineering and bioprocess engineering look different on the surface. Underneath, they're running the same playbook.",
    tags: ["Process Engineering", "Biotech", "Manufacturing"],
  },
  {
    slug: "grey-goo-and-the-limits-of-self-replication",
    title: "Grey Goo and the Limits of Self-Replication",
    date: "2025-12-14",
    excerpt:
      "The classic nanotechnology nightmare scenario is probably physically impossible. What it's pointing at — the risks of poorly-constrained self-replicating systems — is not.",
    tags: ["Biosecurity", "Nanotechnology", "Existential Risk"],
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 px-4 bg-[#041428]/40">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="flex items-center gap-4 text-2xl sm:text-3xl font-bold text-white mb-4">
            <span className="font-mono text-sky-400 text-xl">04.</span>
            Latest Writing
            <span className="flex-1 h-px bg-slate-800 ml-4" />
          </h2>
          <p className="text-slate-500 text-sm mb-10 ml-10 font-mono">
            Robotics → biotech → biosecurity. Following the thread.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-[#041428] border border-slate-800/60 rounded-xl p-5 hover:border-sky-900/60 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-mono text-xs text-slate-600 mb-3">
                  {formatDate(post.date)}
                </span>
                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-sky-400 transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono rounded-full bg-sky-500/10 text-sky-300 border border-sky-900/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sky-400 font-medium hover:gap-3 transition-all"
            >
              View all posts <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
