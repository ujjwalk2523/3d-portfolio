"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import OnlineUsers from "../realtime/online-users";
import { GitHubStarsButton } from "../ui/shadcn-io/github-stars-button";

import { openAboutModal } from "@/components/about-modal";
import { links } from "./config";
import { useLenis } from "@/lib/lenis";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const isHome = usePathname() === "/";
  const lenis = useLenis();
  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1000]"
      )}
      style={{
        background: isActive ? "hsl(var(--background) / .8)" : "transparent",
      }}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className={cn(styles.bar, "flex items-center justify-between w-full")}>
        <Link href="/" className="flex items-center justify-center">
          <Button variant={"link"} className="text-md font-bold">
            {config.author}
          </Button>
        </Link>

        {/* Visible Desktop Menu Bar */}
        <nav className="hidden md:flex items-center gap-1 bg-secondary/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/50 shadow-sm mx-auto">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              onClick={(e) => {
                if (link.title.toLowerCase() === "about" || link.href.endsWith("#about")) {
                  e.preventDefault();
                  openAboutModal();
                  return;
                }
                if (link.href.includes("#")) {
                  const hashIndex = link.href.indexOf("#");
                  const targetId = link.href.substring(hashIndex + 1);
                  if (isHome) {
                    e.preventDefault();
                    window.history.pushState(null, "", link.href);
                    if (targetId === "hero" || targetId === "home" || targetId === "") {
                      if (lenis) lenis.scrollTo(0, { duration: 1.2 });
                      else window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      const elem = document.getElementById(targetId);
                      if (elem) {
                        if (lenis) lenis.scrollTo(elem, { offset: 0, duration: 1.2 });
                        else elem.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }
                  }
                }
              }}
              className="px-3.5 py-1 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary/80 rounded-full transition-all cursor-pointer"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <FunnyThemeToggle className="w-6 h-6 mr-2 hidden md:flex" />
          {isHome && process.env.NEXT_PUBLIC_WS_URL && <OnlineUsers />}
          {config.githubUsername && config.githubRepo && (
            <GitHubStarsButton
              username={config.githubUsername}
              repo={config.githubRepo}
              className="mr-2"
            />
          )}
          <Button
            variant={"ghost"}
            onClick={() => setIsActive(!isActive)}
            aria-label={isActive ? "Close menu" : "Open menu"}
            aria-expanded={isActive}
            className={cn(
              styles.el,
              "m-0 p-0 h-6 bg-transparent flex items-center justify-center"
            )}
          >
            <div className="relative hidden md:flex items-center">
              <motion.p
                variants={opacity}
                animate={!isActive ? "open" : "closed"}
              >
                Menu
              </motion.p>
              <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
                Close
              </motion.p>
            </div>
            <div
              className={`${styles.burger} ${isActive ? styles.burgerActive : ""
                }`}
            ></div>
          </Button>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        onClick={() => setIsActive(false)}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
