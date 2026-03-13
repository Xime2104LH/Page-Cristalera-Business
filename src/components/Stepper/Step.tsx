import { ForwardRefExoticComponent, RefAttributes } from "react";
import { CircleIcon } from "../Stepper/CircleIcon";
import { LucideProps } from "lucide-react";

interface Props {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
  step: string
  title: string
  description: string
}


export const Step = ({ Icon, step, title, description }: Props) => {
  return(
    <div className="md:w-[200px] flex flex-col items-center gap-3 text-[14px]">
      <CircleIcon Icon={Icon}/>
      <h4 className="text-blue-400 font-extrabold">Paso {step}</h4>
      <h3 className="text-white text-2xl">{title}</h3>
      <h4 className="text-gray-300">{description}</h4>
    </div>
  )
}