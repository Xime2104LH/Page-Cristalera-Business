import AboutSection from "@/components/Landing/AboutSection";
import FooterSection from "@/components/Landing/FooterSection";
import HeaderSection from "@/components/Landing/HeaderSection";
import HowWorkSection from "@/components/Landing/HowWorkSection";
import LocationContactSection from "@/components/Landing/LocationContactSection";
import ProductServicesSection from "@/components/Landing/ProductServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen border border-red-500">
      <HeaderSection />
      <AboutSection />
      <HowWorkSection />
      <ProductServicesSection />
      <LocationContactSection />
      <FooterSection />
    </div>
  );
}
