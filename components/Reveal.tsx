"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react"; // 1. Import ReactNode

// 2. Definisikan Interface untuk Props
interface RevealProps {
  children: ReactNode;
}

// 3. Pasangkan interface pada parameter children
export const Reveal = ({ children }: RevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
