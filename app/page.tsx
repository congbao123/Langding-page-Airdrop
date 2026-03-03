import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/features/hero";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { RoadmapSection } from "@/components/features/RoadmapSection";
import { ContactSection } from "@/components/features/ContactSection";
import WhitepaperSection from "@/components/features/whitepaper/WhitepaperSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RoadmapSection />        
        <WhitepaperSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
