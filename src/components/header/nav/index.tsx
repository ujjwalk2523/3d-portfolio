import { useState } from "react";
import { motion } from "motion/react";
import styles from "./style.module.scss";
import { height } from "../anim";
import Body from "./body/body";
import Image from "./image/image";
import MotionToggle from "@/components/motion-toggle";

import { links } from "@/components/header/config";
import { cn } from "@/lib/utils";

interface IndexProps {
  setIsActive: (isActive: boolean) => void;
}

interface SelectedLinkState {
  isActive: boolean;
  index: number;
}

const Index: React.FC<IndexProps> = ({ setIsActive }) => {
  const [selectedLink, setSelectedLink] = useState<SelectedLinkState>({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      // Clicking the empty overlay area (anything that isn't a link/control)
      // closes the menu.
      onClick={() => setIsActive(false)}
      className={cn(styles.nav, "relative")}
    >
      <div className={cn(styles.wrapper, 'flex justify-end sm:justify-start')}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setIsActive={setIsActive}
          />
        </div>
        <Image
          src={links[selectedLink.index].thumbnail}
          isActive={selectedLink.isActive}
        />
      </div>
      {/* Subtle reduced-motion control, pinned into the bottom-right of the screen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="fixed bottom-6 right-6 z-[1010]"
      >
        <MotionToggle />
      </motion.div>
    </motion.div>
  );
};

export default Index;
