"use client";

import { motion } from "framer-motion";
import WhitepaperTabs from "./WhitepaperTabs";

export default function WhitepaperSection() {
  return (
    <section id="whitepaper" className="py-28 bg-[#f5f6f8]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="px-4 py-1 text-xs tracking-widest rounded-full bg-cyan-100 text-cyan-600 font-medium"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            DOCUMENTATION
          </motion.span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-cyan-600">
            Whitepaper
          </h2>

          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Complete technical and economic specification
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <WhitepaperTabs />
        </motion.div>
      </div>
    </section>
  );
}