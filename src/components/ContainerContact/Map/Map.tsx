import { Map, MapControls, MapMarker, MarkerContent, MarkerTooltip, MarkerPopup } from "@/components/ui/map";
import { MapPin } from "lucide-react"
import { Popup } from "./Popup";

export function MyMap() {
  return (
    <div className="h-[230px] md:h-[400px] w-full lg:w-150 p-0 overflow-hidden rounded-2xl">
      <Map 
        center={[-107.41222456252189, 24.794066579365623]} 
        zoom={12}
        styles={{ light: 'https://tiles.openfreemap.org/styles/bright', dark: 'https://tiles.openfreemap.org/styles/bright'}}
      >
        <MapMarker longitude={-107.41321159098537} latitude={24.780057143244253} >
          <MarkerContent className="">
            <MapPin className="size-8 fill-red-700 text-red-800 border-0.5 "/>
          </MarkerContent>
          <MarkerTooltip className="bg-gray-background-cards text-gray-600">Cristalera Hernández</MarkerTooltip>
          <MarkerPopup className="border border-gray-100 p-0 w-60 bg-gray-background-cards">
              <Popup/>
          </MarkerPopup>
        </MapMarker>
        <MapControls className="mb-5 text-gray-500"/>
      </Map>
    </div>
  );
}