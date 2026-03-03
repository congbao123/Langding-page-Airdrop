import { Rocket, Search, TrendingUp, Network, Layers } from "lucide-react";

const roadmapData = [
  {
    phase: "Phase 1",
    title: "Mainnet Deployment",
    desc: "Genesis block creation, node infrastructure deployment, and network stabilization for production-ready operation.",
    icon: <Rocket className="w-5 h-5 text-cyan-400" />,
  },
  {
    phase: "Phase 2",
    title: "Explorer Development",
    desc: "Blockchain explorer launch for transparent viewing of transactions, blocks, addresses, and network statistics.",
    icon: <Search className="w-5 h-5 text-cyan-400" />,
  },
  {
    phase: "Phase 3",
    title: "Exchange Listings",
    desc: "Strategic integration with CoinMarketCap, CoinGecko, and cryptocurrency exchanges for global liquidity.",
    icon: <TrendingUp className="w-5 h-5 text-cyan-400" />,
  },
  {
    phase: "Phase 4",
    title: "Validator Expansion",
    desc: "Network decentralization through onboarding of additional node operators and consensus participants.",
    icon: <Network className="w-5 h-5 text-cyan-400" />,
  },
  {
    phase: "Phase 5",
    title: "Ecosystem dApps",
    desc: "Decentralized application development, strategic partnerships, and real-world utility integration.",
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
  },
];

export const RoadmapSection = () => {
  return (
    <section id="roadmap" className="relative bg-[#0A0F1C] py-44 px-6 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase">
            Roadmap
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mt-6">
            Development Milestones
          </h2>

          <div className="mt-6 h-[2px] w-24 mx-auto bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full" />

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base">
            Structured execution plan for sustainable network growth and ecosystem expansion.
          </p>
        </div>

        {/* ================= DESKTOP TIMELINE ================= */}
        <div className="hidden md:block relative">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400/30 via-cyan-400/60 to-cyan-400/30" />

          <div className="grid md:grid-cols-5 gap-12 relative">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center ${
                  index % 2 === 0 ? "md:-translate-y-16" : "md:translate-y-16"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#111827] border border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.3)] z-10">
                  {item.icon}
                </div>

                <div className="mt-8 bg-[#111827] p-6 rounded-2xl border border-white/5 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,229,255,0.15)] text-center">
                  <p className="text-cyan-400 text-xs tracking-widest uppercase mb-2">
                    {item.phase}
                  </p>

                  <h3 className="text-white font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE TIMELINE ================= */}
        <div className="md:hidden relative">
          {/* vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/40 via-cyan-400/60 to-transparent" />

          <div className="space-y-12">
            {roadmapData.map((item, index) => (
              <div key={index} className="relative pl-14">
                {/* Icon node */}
                <div className="absolute left-0 w-10 h-10 rounded-full bg-[#111827] border border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                  {item.icon}
                </div>

                {/* Card */}
                <div className="bg-[#111827] p-6 rounded-2xl border border-white/5 hover:border-cyan-400/40 transition-all duration-300">
                  <p className="text-cyan-400 text-xs tracking-widest uppercase mb-2">
                    {item.phase}
                  </p>

                  <h3 className="text-white font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};