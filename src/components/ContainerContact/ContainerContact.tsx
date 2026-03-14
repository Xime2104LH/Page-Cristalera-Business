import { MyMap } from "./Map/Map"
import { CardsSection } from "./CardsSection"

export const ContainerContact = () => {
  return (
    <div className="bg-white mt-10 border border-gray-100 shadow-xl rounded-2xl px-4 pb-5 lg:w-[770px] md:w-[500px]">
      <h2 className="text-2xl font-bold py-5 ">Información de Contacto</h2>
      <div className="lg:flex gap-8 items-center">
        <CardsSection />
        <MyMap />
      </div>
    </div>
  )
}