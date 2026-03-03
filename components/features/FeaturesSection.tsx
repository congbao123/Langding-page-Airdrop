import {
  Blocks,
  Cpu,
  KeyRound,
  Box,
  Network,
} from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative bg-[#0A0F1C] py-24 md:py-32 px-6 overflow-hidden">
      {/* Ambient glows - tạo chiều sâu Web3 */}
      <div className="absolute top-12 left-1/3 w-[620px] h-[620px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[480px] h-[480px] bg-violet-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase font-medium">
            Technology
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Built for Security & Scale
          </h2>

          <div className="mt-6 h-0.5 w-28 mx-auto bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Production-grade blockchain architecture engineered for
            reliability, performance, and sovereignty.
          </p>
        </div>

        {/* BIG FEATURE - Native Blockchain */}
        <div className="mb-16">
          <div className="bg-[#111827] p-10 md:p-16 rounded-3xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-500 group">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <PremiumIcon size="large">
                <Blocks className="w-16 h-16" />
              </PremiumIcon>

              <div className="flex-1 pt-3">
                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                  Native Blockchain Infrastructure
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">
                  Independent mainnet architecture with custom node execution
                  layer. Full protocol ownership, deterministic validation,
                  and sovereign governance. Not a token — a complete chain.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Feature Cards - Grid responsive đẹp trên mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
};

/* ========================= */
/* PREMIUM ICON COMPONENT  */
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
      {/* Layer 1: Outer neon glow (mờ dần khi hover) */}
      <div className="absolute -inset-6 bg-gradient-to-br from-cyan-400/30 via-violet-500/20 to-transparent rounded-[30px] blur-3xl transition-all duration-700 group-hover/icon:blur-[55px] group-hover/icon:opacity-80" />

      {/* Layer 2: Glass container + border neon */}
      <div
        className={`relative ${sizeClass} rounded-3xl 
                    bg-gradient-to-br from-[#16213A] to-[#0F172A] 
                    border border-cyan-400/30 flex items-center justify-center 
                    overflow-hidden transition-all duration-500 
                    group-hover/icon:scale-110 group-hover/icon:-rotate-[8deg] 
                    group-hover/icon:border-cyan-400/70`}
      >
        {/* Inner shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent rounded-3xl" />

        {/* Icon chính */}
        <div className="relative z-10 text-cyan-300 group-hover/icon:text-white transition-colors">
          {children}
        </div>
      </div>

      {/* Layer 3: Thin accent ring */}
      {/* <div className="absolute -inset-1 border border-cyan-400/15 rounded-[26px] scale-90 group-hover/icon:scale-100 transition-all duration-700" /> */}
    </div>
  );
};

/* ========================= */
/* REUSABLE FEATURE CARD */
/* ========================= */
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
    <div className="group bg-[#111827] p-9 rounded-3xl border border-white/5 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/15 flex flex-col">
      <PremiumIcon>{icon}</PremiumIcon>

      <h4 className="text-xl font-semibold text-white mt-8 mb-4 group-hover:text-cyan-300 transition-colors">
        {title}
      </h4>

      <p className="text-gray-400 text-[15px] leading-relaxed mt-auto">
        {desc}
      </p>
    </div>
  );
};