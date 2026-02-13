import Image from 'next/image'

interface props {
  imageUrl: string,
  title: string,
  description: string,
}

const ImageProduct = ({ imageUrl, title, description}: props) => {
  return (
    <div className='border border-gray-100 rounded-xl py-8'>
      <Image src={imageUrl} alt="title" width={280}  height={50} className='m-auto'/>
      <div className='px-8'>
        <h3 className='text-2xl font-bold my-6'>{title}</h3>
        <p className='text-xl text-gray-500'>{description}</p>
      </div>
    </div>
  )

}

export default ImageProduct;

