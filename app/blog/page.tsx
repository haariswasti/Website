import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export const metadata = {
  title: "Blog — Haaris Wasti",
  description: "Writing on robotics, software, and engineering.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <main className="min-h-screen pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-400 transition-colors text-sm mb-10"
          >
            <ArrowLeft size={16} /> Back home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Writing
          </h1>
          <p className="text-slate-400 mb-12 text-lg">
            Thoughts on robotics, software engineering, and building things.
          </p>

          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-[#041428] border border-slate-800/60 rounded-xl p-6 hover:border-sky-900/60 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                    <Calendar size={13} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-2.5 py-0.5 text-xs font-mono rounded-full bg-sky-500/10 text-sky-300 border border-sky-900/40"
                      >
                        <Tag size={10} /> {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
