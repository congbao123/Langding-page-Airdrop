"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const containerRef = useRef<HTMLDivElement | null>(null);

  // scroll active tab into view on mobile
  useEffect(() => {
    const container = containerRef.current as HTMLDivElement | null;
    const el = container?.querySelector('[data-tab-active="true"]') as HTMLElement | null;
    if (container && el) {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const offset =
        elRect.left - containerRect.left - container.clientWidth / 2 + el.clientWidth / 2;
      container.scrollTo({ left: container.scrollLeft + offset, behavior: "smooth" });
    }
  }, [active]);

  function renderContent() {
    switch (active) {
      case "Overview": return <Overview />;
      case "Monetary Policy": return <MonetaryPolicy />;
      case "Architecture": return <Architecture />;
      case "Consensus": return <Consensus />;
      case "Transactions": return <Transactions />;
      case "Comparison": return <Comparison />;
      case "Roadmap": return <Roadmap />;
      default: return null;
    }
  }

  return (
    <>
      {/* Tabs */}
      <div className="mb-6">
        <div
          ref={containerRef}
          className="bg-[#F9FAFB] rounded-2xl shadow-sm p-3 overflow-x-auto no-scrollbar flex gap-3 md:gap-4 whitespace-nowrap relative"
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
              className={`relative min-w-[8rem] cursor-pointer md:min-w-0 px-4 md:px-5 py-2 rounded-xl text-sm font-medium flex-shrink-0 text-center focus:outline-none focus:ring-2 transition-colors duration-200
                ${active === tab ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {/* Animated active pill behind text */}
              {active === tab && (
                <motion.span
                  layoutId="active-tab-pill"
                  className="absolute inset-0 rounded-xl bg-cyan-600 shadow"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.45 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content with AnimatePresence for smooth tab switch */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </>
  );
}