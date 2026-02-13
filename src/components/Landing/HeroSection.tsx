import { Button } from "../ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full hero-section-background flex mt-[70px] 2xl:px-30">
      <div className="px-4 py-16 md:p-16 lg:w-1/2 lg:p-10 xl:p-20  2xl:py-20 2xl:w-2/3 ">
        <div className="text-blue-primary text-sm bg-blue-light/20 py-1 px-4 rounded-full w-fit flex items-center gap-2">
          <span className=" inline-block size-2 rounded-full bg-blue-secondary animate-pulse"></span>
          Más de 20 años de experiencia
        </div>

        <h1 className="text-4xl lg:text-[56px] xl:text-7xl xl:leading-tight font-bold my-8">Transformamos tu espacio con <span className="text-blue-primary">vidrio y aluminio</span> de calidad</h1>
        <p className="leading-9 text-gray-500 mb-8 text-2xl xl:text-2xl">Somos especialistas en la elaboración de ventanas, closets, canceles de baño, ventanales y más. Diseños personalizados para cada necesidad</p>

        <div className="md:flex md:items-center md:gap-4">
          <Button variant="default" size="lg" className="w-full mb-4 text-[12px] font-normal md:w-auto">
            Ver Catálogo
            <ArrowRight className="size-4" />
          </Button>
          <Button variant="outline" size="lg" className="w-full mb-4 text-[12px] font-normal md:w-auto">
            <Phone className="size-4" />
            Llamar ahora
          </Button>
        </div>

        <div className="flex gap-4 mt-8 ml-1">
          <div className="border-r border-r-[#E2E8F0] pr-7">
            <h3 className="text-2xl font-bold text-blue-primary">+500</h3>
            <h3 className="text-gray-500 text-sm">Proyectos completados</h3>
          </div>
          <div className="pl-3">
            <h3 className="text-2xl font-bold text-blue-secondary">100%</h3>
            <h3 className="text-gray-500 text-sm">Clientes satisfechos</h3>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:p-10 w-1/2 2xl:w-1/3">
        <div className="relative w-125 z-1">
          <div className="absolute top-21.5 -left-11.75 flex flex-col bg-white rounded-2xl p-4">
            <span className="text-blue-primary text-base">Ventanas</span>
            <span className="text-gray-500 text-sm">Diseño personalizado</span>
          </div>
          <div className="absolute flex flex-col p-4 bg-white rounded-2xl lg:-right-5 lg:bottom-20 xl:-right-20 xl:bottom-30.5">
            <span className="text-blue-secondary text-base">Closets</span>
            <span className="text-gray-500 text-sm">Máximo aprovechamiento</span>
          </div>
          <Image src="/trabajo-ventanas-proyecto-2.jpeg" alt="Trabajo de ventanas" width={550} height={700} className="rounded-[18px]" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection;