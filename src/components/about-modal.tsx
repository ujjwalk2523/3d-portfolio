"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "motion/react";
import {
  X,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  Target,
  Compass,
  Rocket,
  ArrowRight,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const openAboutModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-about-modal"));
  }
};

export const closeAboutModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("close-about-modal"));
  }
};

const cards = [
  {
    id: "01",
    label: "01 — WHO",
    icon: Sparkles,
    accent: "from-cyan-500/20 to-blue-500/5 hover:border-cyan-500/40 text-cyan-400",
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    gridClass: "col-span-1 md:col-span-2",
    title: "Ujjwal Kumar",
    body: "CSE student. Developer. Builder. Curious human.",
  },
  {
    id: "02",
    label: "02 — CURRENTLY",
    icon: Terminal,
    accent: "from-violet-500/20 to-purple-500/5 hover:border-violet-500/40 text-violet-400",
    badgeBg: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    gridClass: "col-span-1 md:col-span-2",
    title: "Learning → Building → Breaking → Rebuilding",
    isFlow: true,
    steps: ["Learning", "Building", "Breaking", "Rebuilding"],
    body: "Exploring the world of software one project at a time.",
  },
  {
    id: "03",
    label: "03 — I SPEAK",
    icon: Code2,
    accent: "from-amber-500/20 to-yellow-500/5 hover:border-amber-500/40 text-amber-400",
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    gridClass: "col-span-1 md:col-span-1",
    tags: ["Java", "JavaScript", "Python", "SQL"],
    body: "And apparently, fluent in debugging. 🐛",
  },
  {
    id: "04",
    label: "04 — I BUILD",
    icon: Cpu,
    accent: "from-emerald-500/20 to-teal-500/5 hover:border-emerald-500/40 text-emerald-400",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    gridClass: "col-span-1 md:col-span-2",
    tags: ["Full-Stack", "Backend", "AI", "Web3"],
    body: "Turning “what if?” into something that actually runs.",
  },
  {
    id: "05",
    label: "05 — I CHASE",
    icon: Target,
    accent: "from-rose-500/20 to-pink-500/5 hover:border-rose-500/40 text-rose-400",
    badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    gridClass: "col-span-1 md:col-span-1",
    title: "Better problems, not just bigger projects.",
    body: "I like ideas that solve something real.",
  },
  {
    id: "06",
    label: "06 — OFF THE SCREEN",
    icon: Compass,
    accent: "from-indigo-500/20 to-blue-500/5 hover:border-indigo-500/40 text-indigo-400",
    badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    gridClass: "col-span-1 md:col-span-2",
    tags: ["Sketching", "Exploring ideas", "Hackathons"],
    body: "And occasionally touching grass. 🌱",
  },
  {
    id: "07",
    label: "07 — CURRENT STATE",
    icon: Rocket,
    accent: "from-fuchsia-500/20 via-purple-500/10 to-cyan-500/20 hover:border-fuchsia-500/40 text-fuchsia-400",
    badgeBg: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20",
    gridClass: "col-span-1 md:col-span-3",
    title: "Still becoming.",
    body: "No final version yet. 🚀",
    isHero: true,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 24,
      stiffness: 300,
    },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function AboutModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    window.addEventListener("open-about-modal", handleOpen);
    window.addEventListener("close-about-modal", handleClose);

    // Check hash on load or hashchange
    const checkHash = () => {
      if (window.location.hash === "#about") {
        setIsOpen(true);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);

    // Escape key listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-about-modal", handleOpen);
      window.removeEventListener("close-about-modal", handleClose);
      window.removeEventListener("hashchange", checkHash);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-3 sm:p-5 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            className="relative w-full max-w-4xl max-h-[88vh] flex flex-col rounded-2xl border border-white/10 bg-zinc-950/95 shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="shrink-0 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  SYSTEM // PROFILE
                </span>
                <span className="hidden sm:inline-block text-white/20">|</span>
                <span className="hidden sm:inline-block font-mono text-xs text-foreground/80 font-bold">
                  ABOUT UJJWAL KUMAR
                </span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="group p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all duration-200 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6" data-lenis-prevent>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4"
              >
                {/* 📸 Feature Profile Card with Photo */}
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="col-span-1 md:row-span-2 relative rounded-xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/25 via-zinc-900/60 to-black/80 p-4 sm:p-5 flex flex-col justify-between overflow-hidden group shadow-lg"
                >
                  {/* Glowing background accent */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/25 transition-all duration-500" />

                  <div>
                    {/* Status badge */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider border bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        DEVELOPER
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 opacity-70" />
                    </div>

                    {/* Image Portrait Box */}
                    <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-inner group-hover:border-cyan-500/40 transition-all duration-300">
                      <Image
                        src="/assets/ujjwal-photo.jpg"
                        alt="Ujjwal Kumar"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500 ease-out"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-3 right-3 text-left">
                        <p className="text-sm font-bold text-white tracking-wide">Ujjwal Kumar</p>
                        <p className="text-[11px] font-mono text-cyan-300/90">Software Engineer</p>
                      </div>
                    </div>
                  </div>

                  {/* Profile info pills */}
                  <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5 font-mono text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>SRM Institute of Science & Tech</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Chennai, India</span>
                    </div>
                  </div>
                </motion.div>

                {/* Other 7 Cards */}
                {cards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.id}
                      variants={cardVariants}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className={cn(
                        "group relative rounded-xl border border-white/10 bg-gradient-to-br p-4 sm:p-5 transition-all duration-300 shadow-sm",
                        card.accent,
                        card.gridClass,
                        card.isHero && "p-6 sm:p-7 border-fuchsia-500/30"
                      )}
                    >
                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 rounded-xl bg-white/[0.01] group-hover:bg-white/[0.04] transition-colors pointer-events-none" />

                      {/* Card Header & Icon */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold tracking-wider border",
                            card.badgeBg
                          )}
                        >
                          {card.label}
                        </span>
                        <Icon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {/* Flow steps if present */}
                      {card.isFlow && card.steps && (
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 my-2 mb-3">
                          {card.steps.map((step, idx) => (
                            <React.Fragment key={step}>
                              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono font-medium text-foreground">
                                {step}
                              </span>
                              {idx < card.steps.length - 1 && (
                                <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      )}

                      {/* Title if present */}
                      {card.title && !card.isFlow && (
                        <h4
                          className={cn(
                            "font-bold text-foreground tracking-tight mb-1.5",
                            card.isHero ? "text-2xl sm:text-3xl font-display" : "text-base sm:text-lg"
                          )}
                        >
                          {card.title}
                        </h4>
                      )}

                      {/* Tags list if present */}
                      {card.tags && (
                        <div className="flex flex-wrap gap-1.5 my-2 mb-3">
                          {card.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono font-medium text-foreground group-hover:border-white/20 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Body Description */}
                      <p
                        className={cn(
                          "font-mono text-muted-foreground leading-relaxed",
                          card.isHero ? "text-sm sm:text-base text-foreground/90 font-medium mt-1" : "text-xs sm:text-sm"
                        )}
                      >
                        {card.body}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Footer bar */}
            <div className="shrink-0 flex items-center justify-between px-6 py-3 border-t border-white/10 bg-white/[0.02] text-xs font-mono text-muted-foreground">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-foreground font-mono">ESC</kbd> to close</span>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-foreground transition-colors underline underline-offset-4 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
