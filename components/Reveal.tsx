"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  x = 0,
  y = 24,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.44, 0, 0.56, 1] }}
    >
      {children}
    </motion.div>
  );
}
