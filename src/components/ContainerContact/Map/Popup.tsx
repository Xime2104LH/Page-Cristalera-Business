import { Star, Clock4, ExternalLink } from "lucide-react"
import Image from "next/image"

export const Popup = () => {
  return (
    <>
     <div className="relative h-32 hidden overflow-hidden rounded-t-md lg:block">
        <Image src={"/Taller.png"} alt="CristaleraHernandez" fill className="object-cover"/>
      </div>
      <div className="p-4 text-start">
        <p className="hidden md:block text-gray-600 text-sm">TALLER</p>
        <p className="font-medium text-gray-700">Cristalera Hernández</p>
        <div className=" hidden md:flex items-center gap-1 text-sm">
          <Star className="size-3.5 fill-amber-400 text-amber-400" />
          <p>5.0</p>
          <p>(3)</p>
        </div>
        <div className="text-gray-600 text-sm flex items-center gap-1 mt-1">
          <Clock4 className="size-3.5"/>
          <p>9:00AM - 6:00PM</p>
        </div>
        <button className="border-gray-100 bg-gray-200 w-full text-gray-700 flex gap-1 justify-center items-center rounded-[5px] px-3 mt-3">
          <p>Ir a google maps</p>
          <ExternalLink className="size-5" />
        </button>
      </div>
    </>
  )
}