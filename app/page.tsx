import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import  HeroSection  from "@/components/features/Hero";
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
        
           <HeroSection  />
             <SupplySection />
          <RoadmapSection />
    
          <WhitepaperSection />
    
        <FadeInSection direction="up" delay={0}>
          <ContactSection />
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
}
