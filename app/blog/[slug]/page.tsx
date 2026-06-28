import { getPostBySlug, getAllPosts } from "@/lib/posts";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const post = await getPostBySlug(params.slug);
    return {
      title: `${post.title} — Haaris Wasti`,
      description: post.excerpt,
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  let post;
  try {
    post = await getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen pt-28 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-400 transition-colors text-sm mb-10"
          >
            <ArrowLeft size={16} /> All posts
          </Link>

          <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
            <Calendar size={13} />
            <span>{formatDate(post.date)}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2.5 py-0.5 text-xs font-mono rounded-full bg-sky-500/10 text-sky-300 border border-sky-900/40"
              >
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>

          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
