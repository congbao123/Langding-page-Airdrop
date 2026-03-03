import SectionCard from "../SectionCard";
import CodeBlock from "../CodeBlock";

export default function Architecture() {
  return (
    <>
      <SectionCard number="3.1" title="Network Type">
        <ul className="list-disc pl-6 space-y-2">
          <li>Wikaex-mainnet</li>
          <li>Custom blockchain implementation</li>
          <li>JSON state persistence</li>
        </ul>
      </SectionCard>
      <SectionCard number="3.2" title="Block Structure">
        <CodeBlock
          code={`{
  index,
  timestamp,
  transactions,
  previous_hash,
  nonce,
  block_hash
}`}
        />
      </SectionCard>

      <SectionCard number="3.3" title="Genesis Block">
        <ul className="list-disc pl-6 space-y-2">
          <li>The network creates a genesis block if no chain exists</li>
          <li>
            <strong>Previous hash</strong>: 64 zeros
          </li>
          <li>
            <strong>Transactions</strong>: Empty
          </li>
          <li>
            <strong>Hash</strong>: Computed via SHA-256
          </li>
        </ul>
      </SectionCard>

      <SectionCard number="7" title="State Management">
        <p>Wikaex uses JSON-based persistence:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>state.json</strong> → balances</li>
          <li><strong>blockchain.json</strong> → chain</li>
          <li><strong>mempool.json</strong> → pending transactions</li>
          <li><strong>nonces.json</strong> → nonce tracking</li>
        </ul>

        <p className="mt-4">Total supply is calculated dynamically:</p>

        <CodeBlock code={`sum(all balances)`} />

        <p className="mt-4">This ensures <strong>mathematical consistency</strong> across the ledger.</p>
      </SectionCard>
      
      
    </>
  );
}