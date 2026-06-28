"use client";

import { motion } from "framer-motion";
import { Mail, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(to right, #0ea5e9 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sky-400 text-sm mb-4 tracking-widest uppercase"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3"
        >
          Haaris Wasti
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-400 mb-6"
        >
          Robotics Engineering{" "}
          <span className="text-sky-400">@ UC Santa Cruz</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I build intelligent systems at the intersection of software and hardware —
          from FPGA control systems and AI-powered vision to automating high-throughput
          laboratory workflows in pharmaceutical manufacturing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://github.com/haariswasti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 font-medium hover:border-sky-500 hover:text-sky-400 transition-all duration-200"
          >
            <GithubIcon size={18} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/haaris-wasti-206545227/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 font-medium hover:border-sky-500 hover:text-sky-400 transition-all duration-200"
          >
            <LinkedinIcon size={18} /> LinkedIn
          </a>
          <a
            href="mailto:haaris.wasti@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-500 text-white font-medium hover:bg-sky-400 transition-all duration-200"
          >
            <Mail size={18} /> Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-sky-400 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
