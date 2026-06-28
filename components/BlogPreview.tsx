import FadeIn from "./FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "building-fpga-game-from-scratch",
    title: "Building an FPGA Game from Scratch",
    date: "2025-05-10",
    excerpt:
      "What I learned designing a real-time arcade game in Verilog — VGA controllers, finite-state machines, and why race conditions will ruin your weekend.",
    tags: ["FPGA", "Verilog", "Hardware"],
  },
  {
    slug: "what-i-learned-interning-proptech-startup",
    title: "What I Learned Interning at a PropTech Startup",
    date: "2025-09-20",
    excerpt:
      "Reflections on building production AI features with PyTorch during my internship at Bay Smart Solutions — from zero to 50ms inference.",
    tags: ["AI/ML", "Internship", "PyTorch"],
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
          <h2 className="flex items-center gap-4 text-2xl sm:text-3xl font-bold text-white mb-12">
            <span className="font-mono text-sky-400 text-xl">04.</span>
            Latest Writing
            <span className="flex-1 h-px bg-slate-800 ml-4" />
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-[#041428] border border-slate-800/60 rounded-xl p-6 hover:border-sky-900/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-slate-500">
                    {formatDate(post.date)}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-sky-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-sky-500/10 text-sky-300 border border-sky-900/40"
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
