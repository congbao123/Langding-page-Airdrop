import SectionCard from "../SectionCard";

export default function Comparison() {
  return (
    <>
    <SectionCard number="9" title="Economic Comparison">
          <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                  <thead className="bg-cyan-600 text-white">
                      <tr>
                          <th className="p-3">Feature</th>
                          <th className="p-3">Bitcoin</th>
                          <th className="p-3">Wikaex</th>
                      </tr>
                  </thead>
                  <tbody className="bg-gray-50">
                      <tr className="border-b">
                          <td className="p-3">Max Supply</td>
                          <td className="p-3">21,000,000</td>
                          <td className="p-3">1,000,000,000</td>
                      </tr>
                      <tr className="border-b">
                          <td className="p-3">Emission</td>
                          <td className="p-3">Gradual via mining</td>
                          <td className="p-3">Fully pre-defined</td>
                      </tr>
                      <tr className="border-b">
                          <td className="p-3">Halving</td>
                          <td className="p-3">Yes</td>
                          <td className="p-3">No</td>
                      </tr>
                      <tr className="border-b">
                          <td className="p-3">Inflation</td>
                          <td className="p-3">Decreasing</td>
                          <td className="p-3">None</td>
                      </tr>
                      <tr className="border-b">
                          <td className="p-3">Mining</td>
                          <td className="p-3">Global PoW</td>
                          <td className="p-3">Lightweight PoW</td>
                      </tr>
                      <tr>
                          <td className="p-3">Initial Distribution</td>
                          <td className="p-3">Block rewards</td>
                          <td className="p-3">Founder allocation</td>
                      </tr>
                  </tbody>
              </table>
          </div>

          <p className="mt-4">
              Wikaex emphasizes <strong>predictability and controlled distribution</strong>.
          </p>
      </SectionCard><SectionCard number="10" title="Use Case">
              <p>Wikaex is designed to serve as:</p>
              <ul className="list-disc pl-6 space-y-2">
                  <li>Native digital currency</li>
                  <li>Value transfer mechanism</li>
                  <li>Ecosystem governance asset</li>
                  <li>Foundation for future decentralized applications</li>
              </ul>
          </SectionCard><SectionCard number="11" title="Transparency">
              <p>Wikaex provides public endpoints:</p>
              <ul className="list-disc pl-6 space-y-2">
                  <li>/status - Network status</li>
                  <li>/blocks - Blockchain data</li>
                  <li>/balance/&lt;address&gt; - Address balance</li>
                  <li>/pool - Pool information</li>
              </ul>
              <p className="mt-2">
                  This allows <strong>full visibility</strong> of network activity.
              </p>
          </SectionCard>
          </>
  );
}