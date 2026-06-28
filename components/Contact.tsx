import FadeIn from "./FadeIn";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <p className="font-mono text-sky-400 text-sm mb-4 tracking-widest uppercase">
            05. What&apos;s Next?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            I&apos;m currently open to internship and co-op opportunities for
            2026. Whether you have a question, a project idea, or just want to
            say hi — my inbox is always open.
          </p>

          <a
            href="mailto:haaris.wasti@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-sky-500 text-sky-400 font-semibold text-lg hover:bg-sky-500/10 transition-all duration-200 mb-12"
          >
            <Mail size={20} />
            haaris.wasti@gmail.com
          </a>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/haariswasti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://linkedin.com/in/haaris-wasti/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="mailto:haaris.wasti@gmail.com"
              className="text-slate-500 hover:text-sky-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
