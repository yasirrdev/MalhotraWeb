"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LanguageSwitchProps {
  lang: "en" | "tr";
  onToggle: () => void;
}

export default function LanguageSwitch({ lang, onToggle }: LanguageSwitchProps) {
  const knobX = 40;

  return (
    <button
      onClick={onToggle}
      className="relative flex items-center h-8 w-20 bg-gray-200 rounded-full p-1 cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{ x: lang === "tr" ? knobX : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-1 left-1 h-6 w-8 bg-primary rounded-full"
      />
      <span
        className={cn(
          "relative z-10 flex-1 text-center text-xs font-semibold",
          lang === "en" ? "text-white" : "text-gray-700"
        )}
      >
        EN
      </span>
      <span
        className={cn(
          "relative z-10 flex-1 text-center text-xs font-semibold",
          lang === "tr" ? "text-white" : "text-gray-700"
        )}
      >
        TR
      </span>
    </button>
  );
}
