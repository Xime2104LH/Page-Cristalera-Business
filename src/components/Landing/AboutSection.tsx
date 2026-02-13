
import { Shield, Award, Users, Clock } from "lucide-react"

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
    <div className="w-full bg-blue-primary/1">
      <div className=" max-h-screen text-center bg-muted/30 py-30 lg:px-50 ">
        <h3 className="text-2xl text-blue-secondary mb-6">Sobre nosotros</h3>
        <h1 className="text-4xl font-bold mb-6 px-10 lg:text-5xl">
          Expertos en soluciones de vidrio y aluminio para tu hogar
        </h1>
        <p className="text-2xl text-gray-500 px-6">
          En Cristalera Hernández nos dedicamos a transformar espacios con
          productos de la más alta calidad. Nuestro compromiso es brindarte
          soluciones que combinen funcionalidad, estética y durabilidad.
        </p>
      </div>
      <div className="p-6 pb-15 lg:px-18 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-8 2xl:gap-16">
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