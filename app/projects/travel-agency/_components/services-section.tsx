// components/ServicesSection.js
import { Volkhov } from "next/font/google"
import { cn } from "@/lib/utils"

// Initialize the font
const volkhov = Volkhov({
  subsets: ["latin"], // Choose subsets as per your needs
  weight: "700", // Specify font weights if needed
})
import { Service } from "./service"

export function ServicesSection() {
  const services = [
    {
      icon: "/travel-agency/Group 48.png",
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      icon: "/travel-agency/Group 51.png",
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      icon: "/travel-agency/Group 49.png",
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    },
    {
      icon: "/travel-agency/Group 50.png",
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-center text-muted-foreground text-lg mb-4">
        CATEGORY
      </h2>
      <h2 className={cn("text-center text-3xl mb-4", volkhov.className)}>
        We Offer Best Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
        {services.map((service, index) => (
          <Service
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}
