import AboutSection from "@/components/landing/AboutSection";
import FooterSection from "@/components/landing/FooterSection";
import HeaderSection from "@/components/landing/HeaderSection";
import HeroSection from "@/components/landing/HeroSection";
import HowWorkSection from "@/components/landing/HowWorkSection";
import LocationContactSection from "@/components/landing/LocationContactSection";
import ProductServicesSection from "@/components/landing/ProductServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <HowWorkSection />
      <ProductServicesSection />
      <LocationContactSection />
      <FooterSection />
    </div>
  );
}
