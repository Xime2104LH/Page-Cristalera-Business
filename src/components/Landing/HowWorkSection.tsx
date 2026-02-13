import ImageProduct from '@/components/General/imageProduct'

const products = [
  {
    imageUrl: "/trabajo-ventanas-proyecto-2.jpeg",
    title: "Ventanas",
    description: "Ventanas de aluminio corredizas, abatibles y proyectantes."
  }
]

const HowWorkSection = () => { 
  return (
    <div className="text-center p-8">
      <div>
        <h3 className="text-blue-light text-2xl mb-6">Nuestros productos</h3>
        <h1 className="text-4xl font-bold mb-6">Catálogo de productos y servicios</h1>
        <p className="text-2xl text-gray-500">Descubre nuestra amplia gama de productos diseñados para transformar y mejorar cada espacio de tu hogar.</p>
      </div>
      <div>
        {
          products.map(item => (
            <ImageProduct key={item.title} title={item.title} imageUrl={item.imageUrl} description={item.description} />
          ))
        }
      </div>
    </div>
  ) 
};

export default HowWorkSection;