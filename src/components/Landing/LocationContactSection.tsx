import { HeaderSections } from "../General/HeaderSections";
import { ContainerContact } from "../ContainerContact/ContainerContact";

const LocationContactSection = () => { 
  return (
    <div className="p-8 py-32 text-center bg-blue-primary/1 w-full lg:px-24 flex flex-col items-center">
      <HeaderSections 
        wordKey="Contacto"
        title="¿Listo para transformar tu espacio?"
        description="Contáctanos hoy mismo. Estamos listos para ayudarte."
      />
      <ContainerContact />
    </div>
  ) 
};

export default LocationContactSection;