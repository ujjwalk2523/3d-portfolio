import { motion } from "motion/react";
import Link from "next/link";
import { blur, translate } from "../../anim";
import { Link as LinkType } from "@/types";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLenis } from "@/lib/lenis";
import FunnyThemeToggle from "@/components/theme/funny-theme-toggle";

import { openAboutModal } from "@/components/about-modal";

interface SelectedLink {
  isActive: boolean;
  index: number;
}

interface BodyProps {
  links: LinkType[];
  selectedLink: SelectedLink;
  setSelectedLink: (selectedLink: SelectedLink) => void;
  setIsActive: (isActive: boolean) => void;
}

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  setIsActive,
}: BodyProps) {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();
  const [currentHref, setCurrentHref] = useState("/");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const { pathname: path, hash } = window.location;
    setCurrentHref(path + hash);
  }, [pathname]);

  const getChars = (word: string) => {
    return word.split("").map((char, i) => (
      <motion.span
        className="pointer-events-none inline-block"
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={char + i}
      >
        {char}
      </motion.span>
    ));
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, title?: string) => {
    setIsActive(false);

    if (title?.toLowerCase() === "about" || href.endsWith("#about")) {
      e.preventDefault();
      setTimeout(() => {
        openAboutModal();
      }, 200);
      return;
    }

    // If it's a direct page link like "/blogs"
    if (!href.includes("#")) {
      return;
    }

    const hashIndex = href.indexOf("#");
    const targetId = href.substring(hashIndex + 1);
    const isHome = pathname === "/" || pathname === "";

    if (isHome) {
      e.preventDefault();
      window.history.pushState(null, "", href);
      setCurrentHref(href);

      // Perform smooth scroll after menu starts closing
      setTimeout(() => {
        if (targetId === "hero" || targetId === "home" || targetId === "") {
          if (lenis) {
            lenis.scrollTo(0, { duration: 1.2 });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          return;
        }

        const elem = document.getElementById(targetId);
        if (elem) {
          if (lenis) {
            lenis.scrollTo(elem, { offset: 0, duration: 1.2 });
          } else {
            elem.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, 50);
    } else {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-10 sm:gap-y-4 max-w-4xl pt-6 pb-8">
      <FunnyThemeToggle className="w-6 h-6 mr-6 flex md:hidden" />
      {links.map((link, index) => {
        const { title, href, target } = link;

        return (
          <Link
            key={`l_${index}`}
            href={href}
            target={target}
            onClick={(e) => handleLinkClick(e, href, title)}
            className="cursor-can-hover rounded-lg no-underline uppercase"
          >
            <motion.p
              className={cn(
                "font-display font-black tracking-tight uppercase text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight select-none transition-colors py-1",
                currentHref !== href
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-foreground underline decoration-2 underline-offset-8"
              )}
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index })}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index !== index
                  ? "open"
                  : "closed"
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
