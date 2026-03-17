// components/ui/FadeInSection.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const FadeInSection = ({
  children,
  delay = 0.5,
  direction = "up",
}: FadeInSectionProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      initial={isMounted ? { opacity: 0, ...directionMap[direction] } : false}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1], // expo out
      }}
    >
      {children}
    </motion.div>
  );
};