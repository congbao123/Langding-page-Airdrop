
import { SupplyAnimated } from "./SupplyAnimated";

export const SupplySection = () => {
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
        {/* Heading — Server rendered, Google Bot read keyword */}
        <div className="text-center mb-16 md:mb-24">
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
            A fixed 1 billion supply designed to reward early participants and
            ensure long‑term sustainability within the WikaEX ecosystem.
          </p>
        </div>

        {/* Client component: animation cards */}
        <SupplyAnimated />
      </div>
    </section>
  );
};