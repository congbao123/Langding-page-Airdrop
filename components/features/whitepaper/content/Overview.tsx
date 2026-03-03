import SectionCard from "../SectionCard";

export default function Overview() {
  return (
    <SectionCard number="1" title="Executive Summary">
      <p>
        Wikaex (WKX) is a native blockchain-based digital currency
        designed for scalability and transparency.
      </p>

      <p>
        Wikaex has a{" "}
        <span className="text-cyan-600 font-semibold">
          fixed total supply of 1,000,000,000 WKX
        </span>.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Simplicity of infrastructure</li>
        <li>Controlled distribution</li>
        <li>Lightweight validation</li>
        <li>Secure transaction model</li>
      </ul>
    </SectionCard>
  );
}