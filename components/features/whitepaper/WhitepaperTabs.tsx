"use client";

import { useEffect, useRef, useState } from "react";
import Overview from "./content/Overview";
import MonetaryPolicy from "./content/MonetaryPolicy";
import Architecture from "./content/Architecture";
import Consensus from "./content/Consensus";
import Transactions from "./content/Transactions";
import Comparison from "./content/Comparison";
import Roadmap from "./content/Roadmap";

const tabs = [
  "Overview",
  "Monetary Policy",
  "Architecture",
  "Consensus",
  "Transactions",
  "Comparison",
  "Roadmap",
];

export default function WhitepaperTabs() {
  const [active, setActive] = useState("Overview");
  const [fade, setFade] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Simple fade animation when switching tabs
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFade(true);
    const t = setTimeout(() => setFade(false), 220);
    return () => clearTimeout(t);
  }, [active]);

  // scroll active tab into view on mobile
  useEffect(() => {
    const el = containerRef.current?.querySelector('[data-tab-active="true"]') as HTMLElement | null;
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [active]);

  function renderContent() {
    switch (active) {
      case "Overview":
        return <Overview />;
      case "Monetary Policy":
        return <MonetaryPolicy />;
      case "Architecture":
        return <Architecture />;
      case "Consensus":
        return <Consensus />;
      case "Transactions":
        return <Transactions />;
      case "Comparison":
        return <Comparison />;
      case "Roadmap":
        return <Roadmap />;
      default:
        return null;
    }
  }

  return (
    <>
      {/* Tabs: horizontally scrollable on small screens */}
      <div className="mb-6">
        <div
          ref={containerRef}
          className="bg-[#F9FAFB] rounded-2xl shadow-sm p-3 overflow-x-auto no-scrollbar flex gap-3 md:gap-4 whitespace-nowrap"
          role="tablist"
          aria-label="Whitepaper Sections"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              data-tab-active={active === tab}
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={`min-w-[8rem] cursor-pointer md:min-w-0 px-4 md:px-5 py-2 rounded-xl text-sm md:text-sm font-medium transition flex-shrink-0 text-center focus:outline-none focus:ring-2 
                ${
                  active === tab
                    ? "bg-cyan-600 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content with fade */}
      <div className={`transition-opacity duration-220 ${fade ? "opacity-30" : "opacity-100"}`}>
        {renderContent()}
      </div>
    </>
  );
}