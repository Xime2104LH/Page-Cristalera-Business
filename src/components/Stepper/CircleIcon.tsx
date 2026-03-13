import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

interface Props {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

export const CircleIcon = ({ Icon }: Props) => {
  return (
    <div className="bg-blue-secondary rounded-full w-28 h-28 flex justify-center items-center">
      <Icon color="white" className="w-15 h-15"/>
    </div>
  )
}
