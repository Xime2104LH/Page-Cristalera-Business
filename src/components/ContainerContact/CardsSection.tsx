
import { SquareIcon } from "./SquareIcon";
import { MapPin, Phone, Mail, Clock4 } from "lucide-react";

const list = [
  {
    title: 'Ubicación',
    description: 'Calle Mariano C. López #2963,\n Rincón del Parque,\n Culiacán, Sinaloa.',
    iconProps: {
      bgColor: 'bg-blue-900/8',
      color: 'text-blue-800',
      sizeSquare: 15,
      icon: MapPin
    }
  },
  {
    title: 'Teléfonos',
    description: '667 198 5500\n667 136 1717\n667 253 3919',
    iconProps: {
      bgColor: 'bg-blue-900/8',
      color: 'text-blue-800',
      sizeSquare: 15,
      icon: Phone
    }
  },
  {
    title: 'Correo',
    description: 'cristalerahernandez0@gmail.com',
    iconProps: {
      bgColor: 'bg-blue-900/8',
      color: 'text-blue-800',
      sizeSquare: 15,
      icon: Mail
    }
  },
  {
    title: 'Horario',
    description: 'Lun - Vie: 8:00 AM - 6:00 PM\n Sáb: 8:00 AM - 2:00 PM',
    iconProps: {
      bgColor: 'bg-blue-900/8',
      color: 'text-blue-800',
      sizeSquare: 15,
      icon: Clock4
    }
  }
]

export const CardsSection = () => {
  return (
    <div className="space-y-4 mb-4 md:mb-0">
      {
        list.map(({title, description, iconProps}) => (
          <div key={title} className="rounded-xl bg-blue-primary/5 p-5 flex gap-4 items-center">
            <SquareIcon bgColor={iconProps.bgColor} color={iconProps.color} sizeSquare={iconProps.sizeSquare} Icon={iconProps.icon} />
            <div className="text-start">
              <h3 className="font-bold">{title}</h3>
              <p className="text-gray-500 whitespace-pre-line">{description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}