"use client";

import WhitepaperTabs from "./WhitepaperTabs";

export default function WhitepaperSection() {
  return (
    <section id="whitepaper" className="py-28 bg-[#f5f6f8]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-1 text-xs tracking-widest rounded-full bg-cyan-100 text-cyan-600 font-medium">
            DOCUMENTATION
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-cyan-600">
            Whitepaper
          </h2>

          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Complete technical and economic specification
          </p>
        </div>

        <WhitepaperTabs />
      </div>
    </section>
  );
}