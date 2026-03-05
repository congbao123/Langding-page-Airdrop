import Image from "next/image";
import heroCharacter from "@/public/hero/BetterImage.png";
import heroCharacter1 from "@/public/hero/BetterImage_1772607124998 1.png";
import heroCharacter4 from "@/public/hero/BetterImage_1772607124998 4.png";
import heroCharacter5 from "@/public/hero/BetterImage_1772607124998 5.png";
import vector1 from "@/public/hero/vector1.png";
import vector2 from "@/public/hero/vector2.png";
import { ArrowRight, Send } from "lucide-react";

// ─── Title shadow layer ────────────────────────────────────────────────────────
function HeroTitleShadow() {
  return (
    <span
      aria-hidden
      className="absolute inset-0 pointer-events-none select-none"
      style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 800,
        fontSize: "clamp(22px, 7vw, 115px)",
        lineHeight: 1.05,
        letterSpacing: "1.2px",
        color: "#006f7b",
        opacity: 0.55,
        whiteSpace: "nowrap",
        transform: "translate(3px, 5px)",
      }}
    >
      ON-CHAIN MASTER
    </span>
  );
}

// ─── Title foreground gradient layer ──────────────────────────────────────────
function HeroTitleForeground() {
  return (
    <span
      className="relative pointer-events-none select-none"
      style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 800,
        fontSize: "clamp(22px, 7vw, 115px)",
        lineHeight: 1.05,
        letterSpacing: "1.2px",
        background: "linear-gradient(to right, #ffffff 40%, #a3e7ed 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        filter: "drop-shadow(0px 4px 8px #0ca8b9)",
        whiteSpace: "nowrap",
        display: "block",
      }}
    >
      ON-CHAIN MASTER
    </span>
  );
}

// ─── Composed title block ──────────────────────────────────────────────────────
function HeroTitle() {
  return (
    <div className="relative inline-block" style={{ lineHeight: 1.05 }}>
      <HeroTitleShadow />
      <HeroTitleForeground />
    </div>
  );
}

// ─── Main Hero Section ─────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0f] flex items-center">

      {/* Background vectors */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={vector1}
          alt=""
          className="absolute top-0 left-0 w-[250px] md:w-[300px] lg:w-[350px] opacity-100"
        />
        <Image
          src={vector2}
          alt=""
          className="absolute bottom-0 right-0 w-[250px] md:w-[500px] lg:w-[1000px] opacity-80"
        />
      </div>

      {/*
        Wrapper: max-w-[1280px] + mx-auto ensures that on screens wider than 1280px
        the content stays centered and locked to the 1280px layout.
        w-[92%] keeps the same side padding as before on smaller screens.
      */}
      <div className="relative z-10 mx-auto w-[92%] max-w-[1280px]">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">

          {/* LEFT */}
          <div className="relative mt-20 md:mt-24 lg:mt-30 w-full lg:w-1/2 flex justify-center lg:justify-start">

            <div className="absolute top-0 left-8 lg:left-15">
              <HeroTitle />
            </div>

            <Image
              src={heroCharacter}
              alt="On-Chain Master Character"
              className="z-30 mt-12 md:mt-16 lg:mt-16 w-[60vw] max-w-[500px] md:max-w-[600px] lg:max-w-[620px] min-w-[280px] h-auto md:h-[480px] lg:h-[550px]"
              style={{
                /* On screens >= 1280px, 60vw would exceed the capped container.
                   We clamp the width so it never grows beyond what it was at 1280px. */
                maxWidth: "min(620px, calc(1280px * 0.5 - 2rem))",
              }}
              priority
            />
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 mb-16 md:mb-10 lg:mt-70 text-center lg:text-left">
            <p className="text-[#c8dde0] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              Don&apos;t miss our exclusive airdrop! Be part of the On-Chain Master launch and receive free tokens – the easiest way to join our blockchain ecosystem and start earning from day one.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-[15px] justify-center lg:justify-start">

              {/* START NOW */}
              <button
                className="
                  w-full sm:w-[270px] h-[54px] sm:h-[58px]
                  flex items-center justify-center gap-[15px]
                  rounded-[29.469px]
                  bg-[#0CA8B9]
                  text-black
                  text-[18px] sm:text-[23px]
                  font-semibold
                  transition
                  hover:brightness-110
                  active:brightness-95
                "
              >
                <span>Start Now</span>
                <ArrowRight className="hidden sm:inline" size={26} strokeWidth={2.5} />
                <ArrowRight className="inline sm:hidden" size={22} strokeWidth={2.5} />
              </button>

              {/* JOIN TELEGRAM */}
              <button
                className="
                  w-full sm:w-[270px] h-[54px] sm:h-[58px]
                  flex items-center justify-center gap-[15px]
                  rounded-[29.469px]
                  border border-[#0CA8B9]
                  text-white
                  text-[18px] sm:text-[23px]
                  font-semibold
                  transition
                  hover:bg-[#0CA8B9]/10
                  active:bg-[#0CA8B9]/20
                "
              >
                <span>Join Telegram</span>
                <Send className="hidden sm:inline" size={24} strokeWidth={2.5} />
                <Send className="inline sm:hidden" size={22} strokeWidth={2.5} />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}