import { Button } from "../ui/button";
import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full min-h-[700px] hero-section-background">
      <div className="p-4">

        <div className="text-blue-primary text-sm bg-blue-light/20 py-1 px-4 rounded-full w-fit flex items-center gap-2">
          <span className=" inline-block size-2 rounded-full bg-blue-secondary animate-pulse"></span>
          Más de 20 años de experiencia
        </div>
        <h1 className="text-4xl font-bold my-8">Transformamos tu espacio con <span className="text-blue-primary">vidrio y aluminio</span> de calidad</h1>
        <p className="text-gray-500">Somos especialistas en la elaboración de ventanas, closets, canceles de baño, ventanales y más. Diseños personalizados para cada necesidad</p>
        <Button variant="default" size="lg" className="mt-8 w-full font-normal"> 
          Ver Catálogo
          <ArrowRight className="size-4" />
        </Button>
        <Button variant="outline" size="lg" className="mt-4 w-full font-normal">
          <Phone className="size-4" />
          Llamar ahora
        </Button>

        <div className="flex gap-4 mt-12 ml-1">
          <div className="border-r border-r-gray-100 pr-7">
            <h3 className="text-2xl font-bold text-blue-primary">+500</h3>
            <h3 className="text-gray-500 text-sm">Proyectos completados</h3>
          </div>
          <div className="pl-3">
            <h3 className="text-2xl font-bold text-blue-secondary">100%</h3>
            <h3 className="text-gray-500 text-sm">Clientes satisfechos</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;