
import { RoadmapAnimated } from "./RoadmapAnimated";

export const RoadmapSection = () => {
  return (
    <section id="roadmap" className="relative bg-[#0A0F1C] py-32 md:py-44 px-6 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header — Server rendered, Google Bot read h2 & p */}
        <div className="text-center mb-24">
          <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase">
            Roadmap
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-6">
             Development Milestones
          </h2>
          <div className="flex justify-center mt-6">
            <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full" />
          </div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base">
            Structured execution plan for sustainable blockchain network growth and crypto ecosystem expansion.
          </p>
        </div>

        {/* Client component: animation timeline cards */}
        <RoadmapAnimated />
      </div>
    </section>
  );
};