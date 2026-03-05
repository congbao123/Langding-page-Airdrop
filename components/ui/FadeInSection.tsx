// components/ui/FadeInSection.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const FadeInSection = ({
  children,
  delay = 0,
  direction = "up",
}: FadeInSectionProps) => {
  const directionMap = {
    up:    { y: 40,  x: 0   },
    down:  { y: -40, x: 0   },
    left:  { y: 0,   x: 40  },
    right: { y: 0,   x: -40 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1], // expo out — cảm giác mượt
      }}
    >
      {children}
    </motion.div>
  );
};