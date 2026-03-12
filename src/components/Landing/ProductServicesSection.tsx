import ImageProduct from '@/components/General/ImageProduct'

const products = [
  {
    imageUrl: "/trabajo-ventanas-proyecto-2.jpeg",
    title: "Ventanas",
    description: "Ventanas de aluminio corredizas, abatibles y proyectantes."
  },
  {
    imageUrl: "/trabajo-ventanas-proyecto-2.jpeg",
    title: "Closets",
    description: "Closets de aluminio con puertas corredizas o abatibles, diseñados a la medida de tu espacio."
  },
  {
    imageUrl: "/trabajo-ventanas-proyecto-2.jpeg",
    title: "Interiores de closets",
    description: "Sistemas de organización interior con repisas, cajones y barras para máximo aprovechamiento."
  },
  {
    imageUrl: "/trabajo-ventanas-proyecto-2.jpeg",
    title: "Canceles de Baño",
    description: "Canceles de vidrio templado para baño, elegantes y seguros con diversos acabados."
  },
  {
    imageUrl: "/trabajo-ventanas-proyecto-2.jpeg",
    title: "Ventanales",
    description: "Grandes superficies acristaladas para máxima iluminación natural y vistas panorámicas."
  },
  {
    imageUrl: "/trabajo-ventanas-proyecto-2.jpeg",
    title: "Números para Casa",
    description: "Números de fachada en diversos materiales y estilos para darle personalidad a tu hogar."
  },
  {
    imageUrl: "/trabajo-ventanas-proyecto-2.jpeg",
    title: "Espejos",
    description: "Espejemos con un diseño moderno, de todas las medidas y formas."
  },
]

const ProductServicesSection = () => { 
  return (
    <div className="text-center p-8 lg:px-28">
      <div>
        <h3 className="text-blue-light text-2xl mb-6">Nuestros productos</h3>
        <h1 className="text-4xl font-bold mb-6">Catálogo de productos y servicios</h1>
        <p className="text-2xl text-gray-500">Descubre nuestra amplia gama de productos diseñados para transformar y mejorar cada espacio de tu hogar.</p>
      </div>
      <div className="mt-12 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 2xl:w-[2000px]">
        {
          products.map(item => (
            <ImageProduct key={item.title} title={item.title} imageUrl={item.imageUrl} description={item.description} />
          ))
        }
      </div>
  </div>
  ) 
};

export default ProductServicesSection;