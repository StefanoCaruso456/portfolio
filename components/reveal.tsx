"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function Reveal({ children, className, delay = 0, id }: RevealProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={className}
      id={id}
      initial={{ opacity: 0, y: 24 }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ margin: "-12% 0px -12% 0px", once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
