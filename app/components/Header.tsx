"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const SCROLL_THRESHOLD = 24;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-4 z-10 flex items-center justify-between mb-3 text-sm font-mono text-[#b3b3b3] transition-all duration-200 ease-out ${
        scrolled
          ? "-mx-5 px-5 py-3.5 rounded-lg border border-white/[0.08] bg-[#161616]"
          : "px-0 py-6 border border-transparent bg-transparent"
      }`}
    >
      {/* logo */}
      <a href="#top" className="inline-block">
        <motion.div
          className="text-2xl font-semibold tracking-tight text-[#f5f5f5]"
          whileHover={{
            scale: 1.04,
            transition: { duration: 0.18, ease: "easeOut" },
          }}
        >
          GZ
        </motion.div>
      </a>{" "}
      {/* nav links */}
      <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-6">
        <a
          href="mailto:g25zhang@uwaterloo.ca"
          className="text-[#b3b3b3] transition-colors hover:text-[#f5f5f5]"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/gzjiayi"
          target="_blank"
          className="text-[#b3b3b3] transition-colors hover:text-[#f5f5f5]"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/gzjiayi"
          target="_blank"
          className="text-[#b3b3b3] transition-colors hover:text-[#f5f5f5]"
        >
          Github
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center gap-1.5 rounded-md border border-[#6b9dc3]/60 px-3 py-1.5 text-[#f5f5f5] transition-colors hover:border-[#6b9dc3] hover:bg-[#6b9dc3]/10"
        >
          <FileText className="w-4 h-4 text-[#6b9dc3]" />
          Resume
        </a>
      </nav>
    </header>
  );
}
