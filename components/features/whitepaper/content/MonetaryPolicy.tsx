import SectionCard from "../SectionCard";

export default function MonetaryPolicy() {
  return (
    <>
      <SectionCard number="2.1" title="Total Supply">
        <ul className="list-disc pl-6 space-y-2">
          <li><b className="text-cyan-600">Maximum Supply:</b> 1,000,000,000 WKX</li>
          <li><b className="text-cyan-600">Circulating Supply:</b> Determined by balances stored in state.json</li>
          <li><b className="text-cyan-600">Supply Mechanism:</b> Fixed supply, pre-allocated to the Founder Wallet</li>
        </ul>
        <p>Wikaex <span className="text-cyan-600">does not implement inflationary minting after genesis.</span>The supply is fixed and cannot exceed 1 billion WKX. </p>
      </SectionCard>

      <SectionCard number="2.2" title="Distribution Model">
        <p>At network initialization:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The total supply is assigned to a Founder Wallet</li>
          <li>Distribution occurs via on-chain transactions</li>
          <li>No automatic block rewards are generated</li>
        </ul>
        <p className="text-cyan-600">This model ensures:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Stable value over time</li>
          <li>Prevents dilution of existing holdings</li>
          <li>Guarantees scarcity and long-term value preservation</li>
        </ul>
      </SectionCard>
    </>
  );
}