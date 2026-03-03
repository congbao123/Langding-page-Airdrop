import SectionCard from "../SectionCard";
import CodeBlock from "../CodeBlock";

export default function Transactions() {
  return (
    <>
      <SectionCard number="5.1" title="Transaction Fields">
        <p>Each transaction includes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>from – sender address</li>
          <li>to – recipient address</li>
          <li>amount – Wikaex amount</li>
          <li>nonce – transaction sequence</li>
          <li>public_key – sender&apos;s public key</li>
          <li>signature – cryptographic signature</li>
        </ul>
      </SectionCard>

      <SectionCard number="5.2" title="Signature Verification">
        <p>Signature logic:</p>
        <CodeBlock code={`expected = sha256(sha256(public_key) + payload)`} />

        <p className="mt-4">Transactions are valid only if:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Address matches derived public key</li>
          <li>Signature matches expected hash</li>
          <li>Nonce is strictly increasing</li>
          <li>Sender balance is sufficient</li>
        </ul>

        <p className="mt-4">This protects against:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Replay attacks</li>
          <li>Double spending</li>
          <li>Signature forgery</li>
        </ul>
      </SectionCard>

      <SectionCard number="6" title="Wallet System">
        <p>Wallets are generated with:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>64-character hexadecimal private key</li>
          <li>Public key derived via SHA-256</li>
          <li>Address derived from public key hash (first 40 chars)</li>
        </ul>
        <p className="mt-2">
          Wallet generation is <strong>fully local and deterministic</strong>.
        </p>
      </SectionCard>

      <SectionCard number="8" title="Security Model">
        <p>Wikaex implements:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Hash-linked blocks</li>
          <li>Proof-of-work style difficulty</li>
          <li>Nonce-based transaction ordering</li>
          <li>Signature validation</li>
          <li>Rate limiting on API endpoints</li>
        </ul>

        <p className="mt-4 font-semibold">Rate limiting prevents abuse:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Default: 20 calls per 60 seconds per IP</li>
          <li>Mining: 5 calls per 60 seconds</li>
        </ul>
      </SectionCard>
    </>
  );
}