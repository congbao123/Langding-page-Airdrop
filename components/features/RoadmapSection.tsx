"use client"

import { Rocket, Search, TrendingUp, Network, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInSection } from "../ui/FadeInSection";

const roadmapData = [
  {
    phase: "Phase 1",
    title: "Project Foundation",
    desc: "Establish the foundation of the exchange ecosystem, including tokenomics design, smart contract development, and the launch of the official website and community channels.",
    icon: <Rocket className="w-5 h-5 text-cyan-400" />,
  },
  {
    phase: "Phase 2",
    title: "Token Launch",
    desc: "Officially issue the exchange token and list it on the CEX platform. Integrate basic utilities such as trading fee discounts, staking rewards, and loyalty programs for users.",
    icon: <Search className="w-5 h-5 text-cyan-400" />,
  },
  {
    phase: "Phase 3",
    title: "Exchange Ecosystem Integration",
    desc: "Expand the token’s utility across the exchange platform, including Launchpad participation, trading incentives, and periodic token burn mechanisms to support long-term value.",
    icon: <TrendingUp className="w-5 h-5 text-cyan-400" />,
  },
  {
    phase: "Phase 4",
    title: "Platform Expansion",
    desc: "Introduce additional exchange services such as futures trading, copy trading, and institutional APIs while strengthening partnerships and ecosystem growth.",
    icon: <Network className="w-5 h-5 text-cyan-400" />,
  },
  {
    phase: "Phase 5",
    title: "Blockchain Development",
    desc: "Begin development of a dedicated blockchain network where the exchange token evolves into the native coin used for transaction fees, staking, and governance.",
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
  },
  {
    phase: "Phase 6",
    title: "Native Chain Ecosystem",
    desc: "Launch the blockchain mainnet and support decentralized applications, cross-chain services, and Web3 ecosystem growth around the native coin.",
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
} as const;  

const desktopItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
} as const;  

const mobileItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
} as const;  

export const RoadmapSection = () => {
  return (
    <section id="roadmap" className="relative bg-[#0A0F1C] py-32 md:py-44 px-6 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <FadeInSection delay={0.1} direction="up">
            <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase">
              Roadmap
            </span>
          </FadeInSection>

          <FadeInSection delay={0.2} direction="up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-6">
              Development Milestones
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.3} direction="up">
            <div className="flex justify-center mt-6">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 96 }} // 96px = w-24
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-0.5 bg-linear-to-r from-cyan-400 to-cyan-500 rounded-full"
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={0.4} direction="up">
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base">
              Structured execution plan for sustainable network growth and ecosystem expansion.
            </p>
          </FadeInSection>
        </div>

        {/* ================= DESKTOP TIMELINE ================= */}
        <div className="hidden md:block relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-cyan-400/30 via-cyan-400/60 to-cyan-400/30 origin-left"
          />

          <motion.div
            className="grid md:grid-cols-5 gap-12 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {roadmapData.map((item, index) => (
              <motion.div
                key={index}
                variants={desktopItemVariants}
                className={`relative flex flex-col items-center group cursor-pointer ${index % 2 === 0 ? "md:-translate-y-16" : "md:translate-y-16"
                  }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#111827] border border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.3)] z-10 relative group-hover:scale-110 transition-transform duration-300">
                  <motion.div
                    animate={{
                      boxShadow: ["0px 0px 0px rgba(0,229,255,0)", "0px 0px 20px rgba(0,229,255,0.6)", "0px 0px 0px rgba(0,229,255,0)"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="absolute inset-0 rounded-full"
                  />
                  {item.icon}
                </div>

                <div className="mt-8 bg-[#111827] p-6 rounded-2xl border border-white/5 group-hover:border-cyan-400/60 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(0,229,255,0.2)] text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-b from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <p className="text-cyan-400 text-xs tracking-widest uppercase mb-2 relative z-10 transition-colors duration-300">
                    {item.phase}
                  </p>

                  <h3 className="text-white font-semibold mb-3 relative z-10 group-hover:text-cyan-50 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= MOBILE TIMELINE ================= */}
        <div className="md:hidden relative">
          {/* vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-8.5 top-5 bottom-5 w-0.5 bg-linear-to-b from-cyan-400/40 via-cyan-400/60 to-transparent origin-top"
          />

          <motion.div
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {roadmapData.map((item, index) => (
              <motion.div key={index} variants={mobileItemVariants} className="relative pl-20 group cursor-pointer">
                {/* Icon node */}
                <div className="absolute left-4 top-4 w-10 h-10 rounded-full bg-[#111827] border border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.3)] z-10 group-hover:scale-110 transition-transform duration-300">
                  <motion.div
                    animate={{
                      boxShadow: ["0px 0px 0px rgba(0,229,255,0)", "0px 0px 15px rgba(0,229,255,0.6)", "0px 0px 0px rgba(0,229,255,0)"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="absolute inset-0 rounded-full"
                  />
                  {item.icon}
                </div>

                {/* Card */}
                <div className="bg-[#111827] p-6 rounded-2xl border border-white/5 group-hover:border-cyan-400/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <p className="text-cyan-400 text-xs tracking-widest uppercase mb-2 relative z-10">
                    {item.phase}
                  </p>

                  <h3 className="text-white font-semibold mb-3 relative z-10 group-hover:text-cyan-50 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};