import SectionCard from "../SectionCard";

const rows = [
  { label: "Token name",                value: "WikaEX" },
  { label: "Token symbol",              value: "WKX" },
  { label: "Blockchain",                value: "WikaEX Native Chain (PoW)" },
  { label: "Contract address",          value: "TBA" },
  { label: "Issue price",               value: "TBA" },
  { label: "Launch date",               value: "2026" },
  { label: "Initial supply",            value: "1,000,000,000" },
  { label: "Current circulating supply",value: "100,000,000" },
  { label: "Current total supply",      value: "1,000,000,000" },
];

export default function Overview() {
  return (
    <SectionCard number="1" title="Executive Summary">
      <p>
        WikaEX (WKX) is a native blockchain-based digital currency
        designed for scalability and transparency, with a{" "}
        <span className="text-cyan-600 font-semibold">
          fixed total supply of 1,000,000,000 WKX
        </span>.
      </p>

      {/* Token info table */}
      <div className="mt-6 rounded-2xl overflow-hidden border border-gray-200">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex flex-col sm:flex-row sm:items-center px-5 py-4 gap-1 sm:gap-6 ${
              i % 2 === 0 ? "bg-gray-50" : "bg-white"
            } border-b border-gray-100 last:border-b-0`}
          >
            <span className="text-gray-400 text-sm sm:w-56 shrink-0">
              {row.label}
            </span>
            <span className="text-gray-900 font-semibold text-sm break-all">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}