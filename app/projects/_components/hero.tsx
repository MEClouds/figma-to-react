"use client"
// components/Hero.tsx

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-4xl font-bold mb-4">
        Figma to Web: Transforming Designs into Reality
      </h1>
      <p className="text-lg max-w-2xl mx-auto mb-8">
        A showcase of my projects where I converted Figma prototypes into live,
        responsive websites.
      </p>
      <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-200">
        Contact Me
      </Button>
    </section>
  )
}
