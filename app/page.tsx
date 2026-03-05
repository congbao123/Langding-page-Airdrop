import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import  HeroSection  from "@/components/features/hero";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { SupplySection } from "@/components/features/SupplySection";
import { RoadmapSection } from "@/components/features/RoadmapSection";
import { ContactSection } from "@/components/features/ContactSection";
import WhitepaperSection from "@/components/features/whitepaper/WhitepaperSection";
import { FadeInSection } from "@/components/ui/FadeInSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
          <FadeInSection direction="down" delay={0}>
           <HeroSection  />
        </FadeInSection>

        <FadeInSection direction="down" delay={0}>
          <SupplySection />
        </FadeInSection>

        <FadeInSection direction="up" delay={0}>
          <RoadmapSection />
        </FadeInSection>

        <FadeInSection direction="up" delay={0}>
          <WhitepaperSection />
        </FadeInSection>

        <FadeInSection direction="up" delay={0}>
          <FeaturesSection />
        </FadeInSection>

        <FadeInSection direction="up" delay={0}>
          <ContactSection />
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}
