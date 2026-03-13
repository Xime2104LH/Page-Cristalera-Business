
import { Shield, Award, Users, Clock } from "lucide-react"
import { HeaderSections } from "../General/HeaderSections";

const features = [
  {
    icon: Shield,
    title: "Calidad Garantizada",
    description: "Utilizamos los mejores materiales del mercado para asegurar durabilidad y resistencia en cada proyecto."
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Más de 15 años en el mercado nos respaldan, con cientos de proyectos exitosos realizados."
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Cada cliente recibe asesoría especializada para encontrar la solución perfecta a sus necesidades."
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Cumplimos con los tiempos de entrega acordados porque valoramos tu tiempo."
  },
]


const AboutSection = () => { 
  return (
    <div className="w-full bg-blue-primary/1 text-center pt-20">
      <div className="lg:px-80">
        <HeaderSections 
          wordKey="Sobre nosotros"
          title="Expertos en soluciones de vidrio y aluminio para tu hogar"
          description="En Cristalera Hernández nos dedicamos a transformar espacios con
            productos de la más alta calidad. Nuestro compromiso es brindarte
            soluciones que combinen funcionalidad, estética y durabilidad."
        />
      </div>
      <div className="p-6 py-15 lg:px-18 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-8 2xl:gap-16">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className=" bg-white border border-gray-200 p-8 md:mx-12 lg:mx-0 mb-8 rounded-2xl hover:border hover:border-blue-light hover:shadow-xl lg:w-100 lg:h-100 xl:h-80 2xl:w-150">
              <div className="w-18 h-18 bg-blue-primary/10 rounded-xl flex justify-center items-center">
                <Icon className="text-blue-primary"/>
              </div>
              <h3 className="font-bold text-2xl mt-5 mb-5">{item.title}</h3>
              <p className="text-gray-500 text-xl">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );  
};

export default AboutSection;