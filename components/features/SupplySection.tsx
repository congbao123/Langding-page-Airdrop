"use client";

import { motion } from "framer-motion";

export const SupplySection = () => {
  const distribution = [
    {
      label: "Airdrop & Community",
      value: "50%",
      percent: 50,
      color: "#22d3ee",
      glow: "rgba(34,211,238,0.35)",
      icon: "◈",
      desc: "Allocated to reward early adopters and incentivize community participation.",
    },
    {
      label: "Development & Operations",
      value: "20%",
      percent: 20,
      color: "#818cf8",
      glow: "rgba(129,140,248,0.35)",
      icon: "⬡",
      desc: "Reserved for ongoing platform development, security audits, and infrastructure operations.",
    },
    {
      label: "Ecosystem Incentives",
      value: "15%",
      percent: 15,
      color: "#34d399",
      glow: "rgba(52,211,153,0.35)",
      icon: "◇",
      desc: "Used to bootstrap liquidity, staking rewards, and strategic ecosystem partnerships.",
    },
    {
      label: "Team & Advisors",
      value: "10%",
      percent: 10,
      color: "#f472b6",
      glow: "rgba(244,114,182,0.35)",
      icon: "△",
      desc: "Vested over a multi-year period to align long-term incentives with project success.",
    },
    {
      label: "Liquidity Provider",
      value: "5%",
      percent: 5,
      color: "#fb923c",
      glow: "rgba(251,146,60,0.35)",
      icon: "○",
      desc: "Initial and ongoing DEX/CEX liquidity to ensure smooth trading conditions.",
    },
  ];

  
  const viewportConfig = { once: true, margin: "0px" };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 0.7,
      },
    },
  };

  return (
    <section
      id="supply"
      className="relative bg-[#0A0F1C] py-24 px-6 overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/*  margin viewport heading fix "0px" */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ type: "spring", bounce: 0.4, duration: 0.9 }}
        >
          <span
            className="text-cyan-400 text-sm tracking-[0.3em] uppercase font-medium"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Tokenomics
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            Token Supply
          </h2>
          <div className="mt-8 h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
          <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            A fixed, finite supply designed to reward early participants and
            ensure long‑term sustainability within the ecosystem.
          </p>
        </motion.div>

        {/* main layout */}
        <motion.div
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* LEFT — total supply card */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 w-full lg:w-1/3 flex flex-col justify-center"
          >
            <div
              className="rounded-[2rem] px-8 py-12 text-center relative group overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-slate-900/80 to-[#0A0F1C]/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
            >
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <p
                  className="text-slate-400 text-sm tracking-[0.2em] uppercase mb-4"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  Total Supply
                </p>

                <p
                  className="text-white font-bold text-4xl sm:text-5xl mb-2 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  1,000,000,000
                </p>
                <p className="text-cyan-400 font-bold text-xl drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                  $WIKA
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — allocation cards grid */}
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {distribution.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative rounded-2xl p-6 overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(10, 15, 28, 0.8) 100%)",
                  borderColor: `${item.color}22`,
                  // fix boxShadow mờ vì gây lag GPU trên mobile, thêm lại bằng CSS class thay thế
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)", // add -webkit- prefix cho iOS Safari
                }}
              >
                {/* Glow overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${item.glow}40, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                          style={{
                            background: `linear-gradient(135deg, ${item.color}22, ${item.color}05)`,
                            color: item.color,
                            border: `1px solid ${item.color}50`,
                            textShadow: `0 0 10px ${item.glow}`,
                          }}
                        >
                          {item.icon}
                        </div>
                        <span className="text-white font-semibold text-base">
                          {item.label}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-end mb-2 mt-4">
                      <span className="text-slate-500 text-xs tracking-wider uppercase">
                        Allocation
                      </span>
                      <span
                        className="text-2xl font-bold drop-shadow-md"
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          color: item.color,
                        }}
                      >
                        {item.value}
                      </span>
                    </div>

                    {/*  margin viewport bar fix "0px" */}
                    <div
                      className="h-2 rounded-full overflow-hidden relative"
                      style={{ background: `${item.color}15` }}
                    >
                      <motion.div
                        className="absolute top-0 left-0 h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${item.color}88, ${item.color})`,
                          boxShadow: `0 0 12px ${item.glow}`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        viewport={{ once: true, margin: "0px" }} // ✅ key fix
                        transition={{
                          duration: 1.4,
                          delay: 0.1 + idx * 0.08,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};