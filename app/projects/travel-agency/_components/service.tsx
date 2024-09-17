// components/Service.js
import Image from "next/image"

export function Service({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
      <Image src={icon} alt={title} width={100} height={100} className="mb-6" />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
