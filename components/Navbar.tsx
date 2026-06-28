"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname !== "/") return;
      const sections = ["about", "experience", "projects", "blog", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020b18]/90 backdrop-blur-md border-b border-slate-800/60 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-white hover:text-sky-400 transition-colors"
        >
          <span className="text-sky-400">HW</span>
          <span className="hidden sm:inline text-slate-400 ml-2 font-mono text-sm">/</span>
          <span className="hidden sm:inline text-slate-400 font-mono text-sm"> haaris</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href }) => {
            const sectionId = href.replace("/#", "");
            const isActive =
              pathname === "/blog" && href === "/blog"
                ? true
                : activeSection === sectionId;
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-sky-400"
                      : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href="mailto:haaris.wasti@gmail.com"
              className="ml-2 px-4 py-1.5 rounded border border-sky-500 text-sky-400 text-sm font-medium hover:bg-sky-500/10 transition-colors"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#041428]/95 backdrop-blur-md border-b border-slate-800/60 px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="block py-2 text-slate-300 hover:text-sky-400 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="mailto:haaris.wasti@gmail.com"
                className="block py-2 text-sky-400 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                haaris.wasti@gmail.com
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
