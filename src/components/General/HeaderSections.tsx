interface Props {
  wordKey: string,
  title: string,
  description: string
}

export const HeaderSections = ({ wordKey, title, description }: Props) => {
  return (
    <div>
      <h3 className="text-blue-light text-2xl mb-6">{wordKey}</h3>
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-2xl text-gray-500">{description}</p>
    </div>
  )
}