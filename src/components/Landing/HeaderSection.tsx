import Image from "next/image";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { TextAlignJustify } from "lucide-react";

const HeaderSection = () => { 
  return (
    <div className="flex justify-between items-center w-full py-4 px-4 lg:px-12 xl:px-52 border-b border-b-gray-200">
      <div className="flex items-center">
        <div className="relative max-h-[60px] overflow-hidden ">
          <Image src="/LogoTaller.png" alt="Cristalera Hernández" width={80} height={80} priority className="object-contain" />
        </div>
        <h1 className="ml-2 text-xl font-bold text-blue-primary hidden md:block">Cristalera Hernández</h1>
      </div>

      <div className="hidden lg:flex items-center">
        <nav>
          <ul className="flex gap-4 text-gray-600">
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Productos</li>
            <li>Proceso</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </div>

      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger><TextAlignJustify width={20} height={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-screen mt-6 p-4 border-none rounded-none text-gray-600" >
            <DropdownMenuItem>Inicio</DropdownMenuItem>
            <DropdownMenuItem>Nosotros</DropdownMenuItem>
            <DropdownMenuItem>Productos</DropdownMenuItem>
            <DropdownMenuItem>Proceso</DropdownMenuItem>
            <DropdownMenuItem>Contacto</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button variant="default" size="lg" className="w-full focus:outline-none">Agendar cita</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button variant="default" size="lg" className="hidden lg:block">Agendar cita</Button>
    </div>
  ) 
};

export default HeaderSection;