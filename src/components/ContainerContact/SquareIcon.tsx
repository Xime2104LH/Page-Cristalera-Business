import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

interface Props {
  bgColor: string
  color: string
  sizeSquare: number
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

export const SquareIcon = ({ bgColor, color, sizeSquare, Icon }: Props) => {
  console.log(bgColor, color)
  return (
    <div className={`${bgColor} ${color} w-${sizeSquare} h-${sizeSquare} rounded-xl flex justify-center items-center`}>
      <Icon className={`w-${(sizeSquare-5).toString()} h-${String(sizeSquare-5)}`}/>
    </div>
  )
}