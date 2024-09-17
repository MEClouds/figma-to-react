"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function ProjectCard({
  title,
  description,
  link,
  image,
  figma,
}: {
  title: string
  description: string
  link: string
  image: string
  figma: string
}) {
  const router = useRouter()
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-200 hover:shadow-xl"
    >
      {/* Image that fills the top of the card */}
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt="project-image"
          fill
          className="object-top object-scale-down bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>

      {/* Content below the image */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <Button
          variant={"default"}
          onClick={() => router.push(link)}
          className="text-blue-200  mr-4 hover:scale-110 transition-all ease-in-out duration-250"
        >
          View Project
        </Button>
        <Button
          variant={"secondary"}
          onClick={() => router.push(figma)}
          className="text-violet-800  hover:scale-110 transition-all ease-in-out duration-250"
        >
          Figma Link
        </Button>
      </div>
    </motion.div>
  )
}
