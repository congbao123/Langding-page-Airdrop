
import { HeroAnimated } from "./HeroAnimated";

export default function HeroSection() {
  return (
    <div className="relative">
      
      <h1
        className="sr-only"
        aria-label="WikaEX – On-Chain Master Crypto Exchange | Claim Free $WIKA Airdrop 2026"
      >
        WikaEX – On-Chain Master Crypto Exchange | Claim Free $WIKA Airdrop 2026
      </h1>

      {/* Client component: toàn bộ animation, image, buttons */}
      <HeroAnimated />
    </div>
  );
}