"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  Cpu,
  KeyRound,
  Box,
  Network,
} from "lucide-react";

const viewport = { once: true, margin: "0px" };

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative bg-[#0A0F1C] py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-12 left-1/3 w-[620px] h-[620px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[480px] h-[480px] bg-violet-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="text-cyan-400 text-sm tracking-[0.3em] uppercase font-medium"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Technology
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Built for Security & Scale
          </h2>

          <motion.div
            className="mt-6 h-0.5 w-28 mx-auto bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          />

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Production-grade blockchain architecture engineered for
            reliability, performance, and sovereignty.
          </p>
        </motion.div>

        {/* BIG FEATURE */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-[#111827] p-10 md:p-16 rounded-3xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-500 group">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <PremiumIcon size="large">
                <Blocks className="w-16 h-16" />
              </PremiumIcon>

              <div className="flex-1 pt-3">
                <motion.h3
                  className="text-3xl md:text-4xl font-semibold text-white mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.55, delay: 0.15 }}
                >
                  Native Blockchain Infrastructure
                </motion.h3>
                <motion.p
                  className="text-gray-400 leading-relaxed text-lg max-w-3xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.55, delay: 0.25 }}
                >
                  Independent mainnet architecture with custom node execution
                  layer. Full protocol ownership, deterministic validation,
                  and sovereign governance. Not a token — a complete chain.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <FeatureCard
            icon={<Cpu className="w-9 h-9" />}
            title="Lightweight PoW"
            desc="Efficient proof-of-work mechanism optimized for practical validation."
          />
          <FeatureCard
            icon={<KeyRound className="w-9 h-9" />}
            title="Nonce Protection"
            desc="Strict incremental nonce enforcement prevents replay and double-spending."
          />
          <FeatureCard
            icon={<Box className="w-9 h-9" />}
            title="JSON State Management"
            desc="Human-readable blockchain state with transparent balance persistence."
          />
          <FeatureCard
            icon={<Network className="w-9 h-9" />}
            title="RESTful API"
            desc="Full API access for wallets, explorers and third-party integrations."
          />
          <FeatureCard
            icon={<Blocks className="w-9 h-9" />}
            title="SHA-256 Security"
            desc="Industry-grade cryptographic hashing ensuring immutable block validation."
          />
        </motion.div>
      </div>
    </section>
  );
};

/* ========================= */
/* PREMIUM ICON COMPONENT    */
/* ========================= */
const PremiumIcon = ({
  children,
  size = "normal",
}: {
  children: React.ReactNode;
  size?: "normal" | "large";
}) => {
  const sizeClass = size === "large" ? "w-24 h-24" : "w-16 h-16";

  return (
    <div className="relative flex-shrink-0 group/icon">
      <div className="absolute -inset-6 bg-gradient-to-br from-cyan-400/30 via-violet-500/20 to-transparent rounded-[30px] blur-3xl transition-all duration-700 group-hover/icon:blur-[55px] group-hover/icon:opacity-80" />
      <div
        className={`relative ${sizeClass} rounded-3xl 
                    bg-gradient-to-br from-[#16213A] to-[#0F172A] 
                    border border-cyan-400/30 flex items-center justify-center 
                    overflow-hidden transition-all duration-500 
                    group-hover/icon:scale-110 group-hover/icon:-rotate-[8deg] 
                    group-hover/icon:border-cyan-400/70`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent rounded-3xl" />
        <div className="relative z-10 text-cyan-300 group-hover/icon:text-white transition-colors">
          {children}
        </div>
      </div>
    </div>
  );
};

/* ========================= */
/* REUSABLE FEATURE CARD     */
/* ========================= */
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group bg-[#111827] p-9 rounded-3xl border border-white/5 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/15 flex flex-col"
    >
      <PremiumIcon>{icon}</PremiumIcon>

      <h4 className="text-xl font-semibold text-white mt-8 mb-4 group-hover:text-cyan-300 transition-colors">
        {title}
      </h4>

      <p className="text-gray-400 text-[15px] leading-relaxed mt-auto">
        {desc}
      </p>
    </motion.div>
  );
};