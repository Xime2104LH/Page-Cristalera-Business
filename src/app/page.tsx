import AboutSection from "@/components/Landing/AboutSection";
import FooterSection from "@/components/Landing/FooterSection";
import HeaderSection from "@/components/Landing/HeaderSection";
import HeroSection from "@/components/Landing/HeroSection";
import HowWorkSection from "@/components/Landing/HowWorkSection";
import LocationContactSection from "@/components/Landing/LocationContactSection";
import ProductServicesSection from "@/components/Landing/ProductServicesSection";

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
