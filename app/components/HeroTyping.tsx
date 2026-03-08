"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CHAR_DELAY = 0.1;
const CHAR_DURATION = 0.1;

export default function HeroTyping() {
  const text = "Grace Zhang";
  const [typingComplete, setTypingComplete] = useState(false);
  const chars = text.split("");

  return (
    <div className="flex items-center text-4xl md:text-5xl tracking-tight text-white font-mono">
      {chars.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * CHAR_DELAY, duration: CHAR_DURATION }}
          onAnimationComplete={
            index === chars.length - 1
              ? () => setTypingComplete(true)
              : undefined
          }
          className={
            char === " "
              ? "inline-block w-[0.25em] shrink-0 overflow-hidden"
              : undefined
          }
          aria-hidden={char === " "}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      {typingComplete && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="ml-1 font-light text-gray-400"
        >
          _
        </motion.span>
      )}
    </div>
  );
}
