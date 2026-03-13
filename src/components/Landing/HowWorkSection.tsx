import { Step } from '../Stepper/Step';
import { Lines } from '@/components/Stepper/Lines'
import { HeaderSectionsWhite } from '../General/HeaderSectionsWhite';
import { CalendarCheck, ClipboardList, Ruler, Wrench, CircleCheckBig } from 'lucide-react'

const listSteps = [
  {
    Icon: CalendarCheck,
    step: '01',
    title: 'Agenda tu cita',
    description: 'Contáctanos por teléfono, WhatsApp o formulario para programar una visita.'
  },
  {
    Icon: ClipboardList,
    step: '02',
    title: 'Evaluación',
    description: 'Visitamos tu domicilio para evaluar el espacio y entender tus necesidades.'
  },
  {
    Icon: Ruler,
    step: '03',
    title: 'Cotización',
    description: 'Te presentamos una cotización detallada sin compromiso con opciones a tu medida.'
  },
  {
    Icon: Wrench,
    step: '04',
    title: 'Fabricación',
    description: 'Fabricamos tu proyecto con los más altos estándares de calidad.'
  },
  {
    Icon: CircleCheckBig,
    step: '05',
    title: 'Instalación',
    description: 'Instalamos profesionalmente y te entregamos tu proyecto terminado.'
  }
]

const HowWorkSection = () => { 
  return (
    <div className="text-center bg-blue-primary w-full py-32 px-8 lg:px-32">
      <HeaderSectionsWhite />
      <div className='flex flex-col items-center gap-8 md:flex-row md:justify-around md:items-stretch mt-20'>
        {
          listSteps.map(({Icon, step, title, description}) => (
            <Step key={step} Icon={Icon} step={step} title={title} description={description}/>
          ))
        }
      </div>
      <Lines />
    </div>
  ) 
};

export default HowWorkSection;