import SectionCard from "../SectionCard";

export default function Roadmap() {
  return (
    <>
    <SectionCard number="12" title="Development Roadmap">
          <ul className="space-y-4">
              <li>
                  <b>Phase 1 – Mainnet Deployment</b>
                  <p className="text-gray-500 text-sm">
                      Genesis block creation and stabilization.
                  </p>
              </li>

              <li>
                  <b>Phase 2 – Explorer Development</b>
                  <p className="text-gray-500 text-sm">
                      Blockchain explorer launch.
                  </p>
              </li>

              <li>
                  <b>Phase 3 – Exchange Listings</b>
                  <p className="text-gray-500 text-sm">
                      Integration with CoinMarketCap, CoinGecko, and trading platforms.
                  </p>
              </li>

              <li>
                  <b>Phase 4 – Validator Expansion</b>
                  <p className="text-gray-500 text-sm">
                      Network decentralization through additional node operators.
                  </p>
              </li>

              <li>
                  <b>Phase 5 – Ecosystem dApps</b>
                  <p className="text-gray-500 text-sm">
                      Decentralized applications built on Wikaex infrastructure.
                  </p>
              </li>
          </ul>
      </SectionCard><SectionCard number="13" title="Conclusion">
              <p>
                  Wikaex represents a <strong>controlled, fixed-supply, native blockchain asset</strong> designed for scalability and transparency. With a total supply of 1 billion Wikaex and a secure transaction validation mechanism, Wikaex offers a predictable digital asset model suitable for ecosystem expansion and exchange integration.
              </p>
          </SectionCard>
          </>
    
  );
}