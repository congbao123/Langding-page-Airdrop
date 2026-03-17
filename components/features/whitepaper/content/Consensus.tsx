import SectionCard from "../SectionCard";

export default function Consensus() {
  return (
    <SectionCard number="4" title="Consensus Mechanism">
      <p>Wikaex uses a lightweight Proof-of-Work inspired hashing validation.</p>

      <p className="mt-4 font-semibold">Parameters:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Hashing algorithm: SHA-256</li>
        <li>Difficulty: 4 leading zeros</li>
      </ul>

      <p className="mt-4 font-semibold">Block mining process:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Nonce incremented until hash satisfies difficulty</li>
        <li>Valid hash appended to chain</li>
        <li>Transactions included from mempool</li>
        <li>Miners collect transaction fees as a reward</li>
      </ol>

      <p className="mt-4 font-semibold">This provides:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Basic computational validation</li>
        <li>Chain integrity</li>
        <li>Block immutability via hash chaining</li>
      </ul>

      <p className="mt-4 italic text-sm">
        It is not designed to compete with Bitcoin&apos;s global PoW but instead
        to provide a secure and efficient network model.
      </p>
    </SectionCard>
  );
}