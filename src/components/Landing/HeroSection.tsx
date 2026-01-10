import { Button } from "../ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full sm:min-h-40 md:min-h-120 lg:min-h-190 hero-section-background flex ">
      <div className="p-4 md:p-16 lg:w-1/2 lg:p-24">
        <div className="text-blue-primary text-sm bg-blue-light/20 py-1 px-4 rounded-full w-fit flex items-center gap-2">
          <span className=" inline-block size-2 rounded-full bg-blue-secondary animate-pulse"></span>
          Más de 20 años de experiencia
        </div>

        <h1 className="text-4xl lg:text-[56px] xl:text-7xl xl:leading-tight font-bold my-8">Transformamos tu espacio con <span className="text-blue-primary">vidrio y aluminio</span> de calidad</h1>
        <p className="text-gray-500 mb-8 xl:text-2xl">Somos especialistas en la elaboración de ventanas, closets, canceles de baño, ventanales y más. Diseños personalizados para cada necesidad</p>

        <div className="md:flex md:items-center md:gap-4">
          <Button variant="default" size="lg" className="w-full mb-4 font-normal md:w-auto">
            Ver Catálogo
            <ArrowRight className="size-4" />
          </Button>
          <Button variant="outline" size="lg" className="w-full mb-4 font-normal md:w-auto">
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
      <div className="hidden relative lg:flex lg:items-center lg:justify-center lg:pr-24 w-1/2">
        <div className="absolute top-[25%] left-18 flex flex-col bg-white rounded-2xl py-5 px-6">
          <span className="text-blue-primary text-xl">Ventanas</span>
          <span className="text-gray-500 text-sm">Diseño personalizado</span>
        </div>
        <div className="absolute top-[55%] right-50 xl:right-20 flex flex-col bg-white rounded-2xl py-5 px-6">
          <span className="text-blue-secondary text-xl">Closets</span>
          <span className="text-gray-500 text-sm">Máximo aprovechamiento</span>
        </div>
        <Image src="/trabajo-ventanas-proyecto-2.jpeg" alt="Trabajo de ventanas" width={550} height={700} className="rounded-[18px]" />
      </div>
    </div>
  )
}

export default HeroSection;