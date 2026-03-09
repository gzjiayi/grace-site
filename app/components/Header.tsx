"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const SCROLL_ON_THRESHOLD = 32;
const SCROLL_OFF_THRESHOLD = 16;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      setScrolled((prev) => {
        if (!prev && y > SCROLL_ON_THRESHOLD) return true;
        if (prev && y < SCROLL_OFF_THRESHOLD) return false;
        return prev;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`relative sm:sticky sm:top-4 z-10 mb-3 flex flex-col items-start gap-3 text-sm font-mono text-[#b3b3b3] sm:flex-row sm:items-center sm:justify-between transition-all duration-200 ease-out ${
        scrolled
          ? "px-0 py-4 border border-transparent bg-transparent sm:-mx-5 sm:px-5 sm:py-3.5 sm:rounded-md sm:border sm:border-white/[0.08] sm:bg-[#161616]"
          : "px-0 py-4 sm:py-3.5 border border-transparent bg-transparent"
      }`}
    >
      {/* logo */}
      <a href="#top" className="inline-block">
        <motion.div
          className="text-2xl font-medium tracking-tight text-[#f5f5f5]"
          whileHover={{
            scale: 1.04,
            transition: { duration: 0.18, ease: "easeOut" },
          }}
        >
          GZ
        </motion.div>
      </a>
      {/* nav links */}
      <nav className="flex w-full flex-wrap items-center gap-x-4 gap-y-2 sm:w-auto md:gap-x-6">
        <a
          href="mailto:g25zhang@uwaterloo.ca"
          className="text-[#b3b3b3] transition-colors hover:text-[#f5f5f5]"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/gzjiayi"
          target="_blank"
          rel="noreferrer"
          className="text-[#b3b3b3] transition-colors hover:text-[#f5f5f5]"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/gzjiayi"
          target="_blank"
          rel="noreferrer"
          className="text-[#b3b3b3] transition-colors hover:text-[#f5f5f5]"
        >
          GitHub
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 rounded-md border border-[#6b9dc3]/50 px-2.5 py-1 text-[13px] text-[#f5f5f5] transition-colors hover:border-[#6b9dc3] hover:bg-[#6b9dc3]/10 sm:px-3 sm:py-1.5 sm:text-sm"
        >
          <FileText className="w-4 h-4 text-[#6b9dc3]" />
          Resume
        </a>
      </nav>
    </header>
  );
}
