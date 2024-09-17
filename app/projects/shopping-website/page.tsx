"use client"

import Image from "next/image"
import {
  ShoppingCart,
  ChevronRight,
  Facebook,
  FacebookIcon,
  LucideFacebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react"

const ShoppingPage = () => {
  return (
    <div className="min-h-screen  bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">▼ FASHION</div>
        <nav className="hidden md:flex md:ml-auto space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">
            CATALOGUE
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            FASHION
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            FAVOURITE
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            LIFESTYLE
          </a>
        </nav>
        <button className="bg-black ml-6 text-white px-4 py-2 rounded">
          SIGN UP
        </button>
      </header>

      {/* Hero Section */}
      <div className="p-4">
        <section className="container mx-auto px-4 pt-12 md:pt-24 flex flex-col md:flex-row   items-start bg-[#F4F6F5] rounded-3xl ">
          <div className="md:w-1/2 ps-12 md:pb-24 mb-8 md:mb-0">
            <div className="text-5xl md:text-6xl font-bold leading-loose mb-4">
              <p className="  leading-snug">
                <span className=" before:block before:absolute before:-skew-y-3  before:bg-[#ffff]  before:-inset-1 relative">
                  <span className=" relative p-0 font-bold">LET&apos;S</span>
                </span>
                {/* LET'S */}
                <br className="mt-2" />
                EXPLORE
                <br className="mt-2" />
                <span className=" before:block before:absolute before:-skew-y-3  before:bg-[#EBD96B]  before:-inset-1 relative">
                  <span className=" relative p-0 font-bold">
                    UNIQUE {"   "}
                  </span>
                </span>
                <br className="mt-2" />
                CLOTHES.
              </p>
            </div>
            <p className="text-black mb-6">
              Live for Influential and Innovative fashion!
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-sm flex items-center">
              Shop Now <ShoppingCart className="ml-2" />
            </button>
          </div>
          <div className="md:w-1/2 h-full ">
            <Image
              src="/incendiary-fantastically-beautiful-girl-coat-eco-fur-moves-fun-picture-lovely-lady-pink-clothes-removebg-preview 1.png"
              alt="Fashion model"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
        </section>
      </div>
      {/* Brand Logos */}
      <div className="bg-[#EBD96B] py-12 sm:flex">
        <div className="container mx-auto px-12 grid grid-cols-6 gap-4 justify-between items-center">
          <Image
            src="/shopping-website/Rectangle 36.png"
            alt="H&M"
            width={100}
            height={50}
          />
          <Image
            src="/shopping-website/Rectangle 44.png"
            alt="Obey"
            width={150}
            height={50}
          />
          <Image
            src="/shopping-website/Rectangle 41.png"
            alt="Shopify"
            width={120}
            height={50}
          />
          <Image
            src="/shopping-website/Rectangle 43.png"
            alt="Lacoste"
            width={120}
            height={60}
          />
          <Image
            src="/shopping-website/Rectangle 38.png"
            alt="Levis"
            width={100}
            height={50}
          />
          <Image
            src="/shopping-website/Rectangle 45.png"
            alt="Amazon"
            width={100}
            height={60}
          />
        </div>
      </div>

      {/* New Arrivals */}
      <div>
        <section className="container mx-auto px-12 py-16">
          <div className="">
            <h2 className="  text-3xl font-bold mb-8">
              <span className="z-20  relative">
                NEW ARRIVALS
                <span>
                  <svg
                    className=" absolute -bottom-1  -right-1 -z-10"
                    width="120"
                    height="35"
                    viewBox="0 0 186 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M84 3.97549C65.3333 8.30883 22.4 19.9755 0 31.9755C56.6667 37.3088 173.2 39.1755 186 3.97549C168 0.975492 122.4 -3.22451 84 3.97549Z"
                      fill="#EBD96B"
                    />
                  </svg>
                </span>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
            {["Hoodies & Sweatshirt", "Coats & Parkas", "Tees & T-Shirt"].map(
              (category, index) => (
                <div
                  key={index}
                  className="group mx-auto hover:scale-105 hover:text-yellow-500 transition-all ease-in-out cursor-pointer"
                >
                  <Image
                    src={`/shopping-website/Rectangle ${index + 20}.png`}
                    alt={category}
                    width={400}
                    height={400}
                    className="rounded-2xl mb-4 group-hover:border-yellow-500 group-hover:border-2 "
                  />
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <a
                    href="#"
                    className="text-gray-600 group-hover:text-black flex items-center"
                  >
                    Explore Now <ChevronRight className="ml-2" />
                  </a>
                </div>
              )
            )}
          </div>
        </section>
      </div>

      {/* Payday Sale */}
      <section className="bg-green-300 ">
        <div className=" mx-auto flex flex-col  md:grid md:grid-cols-2 md: ">
          <div className=" ">
            <Image
              src="/shopping-website/image 12.png"
              alt="Payday sale"
              width={600}
              height={600}
              className="w-full"
            />
          </div>
          <div className=" w-full md:my-auto flex items-center h-full bg-gradient-to-tr from-[#E0C340] to-[#F9DF56] ">
            <div className="ps-2 sm:mx-auto sm:py-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                PAYDAY
                <br />
                SALE NOW
              </h2>
              <p className="mb-6">
                Spend minimal $100 get 30% off
                <br />
                voucher code for your next purchase
              </p>
              <p className="font-semibold mb-4">1 June - 10 June 2021</p>
              <p className="mb-6">*Terms & Conditions apply</p>
              <button className="bg-black text-white px-6 py-3 rounded-full">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Young's Favourite */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="  text-3xl font-bold mb-8">
          <span className="z-20  relative">
            Young&apos;s Favourite&apos;
            <span>
              <svg
                className=" absolute -bottom-2  -right-1 -z-10"
                width="120"
                height="35"
                viewBox="0 0 186 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M84 3.97549C65.3333 8.30883 22.4 19.9755 0 31.9755C56.6667 37.3088 173.2 39.1755 186 3.97549C168 0.975492 122.4 -3.22451 84 3.97549Z"
                  fill="#EBD96B"
                />
              </svg>
            </span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {["Trending on Instagram", "All Under $40"].map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <Image
                src={`/shopping-website/Rectangle ${index + 49}.png`}
                alt={category}
                width={800}
                height={400}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{category}</h3>
              <a
                href="#"
                className="text-gray-600 group-hover:text-black flex items-center"
              >
                Explore Now <ChevronRight className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* App Download */}
      <section className="container mx-auto px-4 py-16 flex flex-col  md:flex-row  items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 flex items-center justify-center">
          <div className=" ">
            <h2 className="text-3xl font-bold mb-4">
              DOWNLOAD APP &<br />
              GET THE VOUCHER!
            </h2>
            <p className="mb-6">
              Get 30% off for first transaction using
              <br />
              Rondovision mobile app for now.
            </p>
            <div className="flex space-x-4">
              <Image
                src="/shopping-website/Rectangle 55.png"
                alt="App Store"
                width={120}
                height={40}
                className=" cursor-pointer"
              />
              <Image
                src="/shopping-website/Rectangle 18.png"
                alt="Google Play"
                width={120}
                height={40}
                className=" cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/shopping-website/Vouchers.png"
            alt="Mobile app"
            width={400}
            height={600}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#E5C643] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            JOIN SHOPPING COMMUNITY TO
            <br />
            GET MONTHLY PROMO
          </h2>
          <p className="mb-6">
            Type your email down below and be young wild generation
          </p>
          <div className="flex items-center max-w-md mx-auto relative ">
            <input
              type="email"
              onChange={(e) => e.target.value}
              placeholder="Add your email here"
              className="flex-grow px-4 py-3 rounded-md focus:outline-none"
            />
            <button className="bg-black text-white text-lg px-6 py-1 rounded-md absolute  right-1">
              SEND
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-5  gap-8 ">
            <div className="md:col-span-2 ">
              <h3 className="text-2xl font-bold mb-4">FASHION</h3>
              <p>
                Complete your style with awesome
                <br />
                clothes from us.
              </p>
              <div className="flex space-x-4 mt-4">
                <div className="bg-yellow-400 p-2 rounded-lg">
                  <a href="#" className="text-black hover:text-gray-600">
                    <LucideFacebook className="w-4 h-4" />
                  </a>
                </div>
                <div className="bg-yellow-400 p-2 rounded-lg">
                  <a href="#" className="text-black hover:text-gray-600">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
                <div className="bg-yellow-400 p-2 rounded-lg">
                  <a href="#" className="text-black hover:text-gray-600">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
                <div className="bg-yellow-400 p-2 rounded-lg">
                  <a href="#" className="text-black hover:text-gray-600">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Link</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Share Location
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Orders Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Terms & conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-300">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ShoppingPage
