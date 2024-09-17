// components/HeroSection.js
import Image from "next/image"
import { ChevronRight, Play } from "lucide-react"
import { Volkhov } from "next/font/google"
import { cn } from "@/lib/utils"

// Initialize the font
const volkhov = Volkhov({
  subsets: ["latin"], // Choose subsets as per your needs
  weight: "700", // Specify font weights if needed
})
export function HeroSection() {
  return (
    <section className=" container mx-auto px-4 py-12 md:py-2 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 space-y-8">
        <h2 className="uppercase text-[#DF6951] font-extrabold tracking-widest">
          Best Destinations around the world
        </h2>
        <h1
          className={cn(
            "text-5xl md:text-7xl font-serif text-gray-900 leading-tight",
            volkhov.className
          )}
        >
          Travel, enjoy <br />
          and live a new <br />
          and full life
        </h1>
        <p className="text-gray-600 max-w-md">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex items-center space-x-6">
          <button className="px-6 py-3 bg-yellow-500 shadow-lg shadow-yellow-500/30 text-white rounded-lg hover:bg-yellow-600 transition-colors">
            Find out more
          </button>
          <button className="flex items-center space-x-2 text-gray-700">
            <div className="w-12 h-12 bg-[#DF6951] shadow-lg shadow-[#df6951b1] rounded-full flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <span>Play Demo</span>
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-2">
        <Image
          src="/travel-agency/Image.png"
          alt="Traveler"
          width={700}
          height={690}
          className="w-full h-auto"
        />
      </div>
    </section>
  )
}
