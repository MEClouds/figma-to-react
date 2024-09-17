// components/TravelAgencyLandingPage.js

import { ChevronRight, MessageCircle, Settings } from "lucide-react"
import { Footer } from "./_components/footer"
import { Header } from "./_components/header"
import { HeroSection } from "./_components/hero"
import { ServicesSection } from "./_components/services-section"
import Image from "next/image"

// Import other sections like DestinationSection, TestimonialsSection

export default function TravelAgencyLandingPage() {
  return (
    //
    <div className="  md:relative font-sans">
      <Image
        alt="decore"
        width={600}
        height={700}
        src={"/travel-agency/Decore.png"}
        className="    md:absolute  right-0  -z-10 "
      />

      <Header />
      <main className="max-w-7xl mx-auto">
        <HeroSection />
        <ServicesSection />
        {/* Add other sections here */}

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-center text-3xl font-serif mb-12">
            Top Destinations
          </h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  image: "/travel-agency/rome.png",
                  title: "Rome, Italy",
                  price: "$5,42k",
                  duration: "10 days trip",
                },
                {
                  image: "/travel-agency/london.png",
                  title: "London, UK",
                  price: "$4.2k",
                  duration: "12 days trip",
                },
                {
                  image: "/travel-agency/europe.png",
                  title: "Full Europe",
                  price: "$15k",
                  duration: "28 days trip",
                },
              ].map((destination, index) => (
                <div
                  key={index}
                  className="rounded-3xl mx-2 overflow-hidden shadow-lg hover:scale-105 transition-all"
                >
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    width={400}
                    height={400}
                    className="w-full h-[400px] object-cover object-top bg-green-500 "
                  />
                  <div className="p-6 bg-white">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">
                        {destination.title}
                      </h3>
                      <span className="font-semibold">{destination.price}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
              <Image
                src={"/travel-agency/Decore2.png"}
                width={100}
                height={100}
                alt="decore"
                className=" object-right absolute -right-12 bottom-20 -z-10  "
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-3xl font-serif">
              Book Your Next Trip In 3 Easy Steps
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: "/destination-icon.svg",
                  title: "Choose Destination",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
                },
                {
                  icon: "/payment-icon.svg",
                  title: "Make Payment",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
                },
                {
                  icon: "/airport-icon.svg",
                  title: "Reach Airport on Selected Date",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-md bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 relative">
              <Image
                src="/greece.png"
                alt="Trip to Greece"
                width={400}
                height={400}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Trip To Greece</h3>
              <p className="text-gray-600 mb-4">
                14-29 June | by Robbin joseph
              </p>
              <div className="flex space-x-2 mb-4">
                {["leaf", "map", "send"].map((icon, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                  >
                    <Image
                      src={`/${icon}-icon.svg`}
                      alt={icon}
                      width={16}
                      height={16}
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">24 people going</span>
                </div>
                <ChevronRight className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="absolute -bottom-12 -right-6 bg-white rounded-2xl shadow-lg p-4 w-64">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/avatar.png"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-gray-600 text-sm">Ongoing</p>
                    <h4 className="font-semibold">Trip to rome</h4>
                    <p className="text-xs text-gray-500">
                      <span className="text-purple-600 font-semibold">40%</span>{" "}
                      completed
                    </p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                  <div className="bg-purple-600 h-1.5 rounded-full w-2/5"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-serif">What People Say About Us.</h2>
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i === 0 ? "bg-gray-800" : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 relative">
              <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md">
                <Image
                  src="/avatar2.png"
                  alt="Testimonial"
                  width={60}
                  height={60}
                  className="rounded-full mb-4"
                />
                <p className="text-gray-600 mb-4">
                  &quot;On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.&quot;
                </p>
                <h4 className="font-semibold">Mike taylor</h4>
                <p className="text-sm text-gray-500">Lahore, Pakistan</p>
              </div>
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2">
                <ChevronRight className="w-12 h-12 text-gray-300" />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center flex-wrap">
            {["axon", "jetstar", "expedia", "qantas", "alitalia"].map(
              (brand, index) => (
                <Image
                  key={index}
                  src={`/${brand}-logo.svg`}
                  alt={brand}
                  width={120}
                  height={50}
                  className="grayscale"
                />
              )
            )}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="bg-gray-100 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400 to-purple-500 opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">
                Subscribe to get information, latest news and other interesting
                offers about Jadoo
              </h2>
              <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="pl-12 pr-4 py-3 rounded-lg w-full md:w-80"
                  />
                  <MessageCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-200 rounded-full opacity-50"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200 rounded-full opacity-50"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
