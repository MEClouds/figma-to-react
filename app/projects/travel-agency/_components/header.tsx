// components/Header.js
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className=" container max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
      <Image
        src="/travel-agency/Jadoo.png"
        alt="Jadoo"
        width={115}
        height={34}
      />
      <nav className="hidden md:flex space-x-12 items-center">
        {["Destinations", "Hotels", "Flights", "Bookings", "Login"].map(
          (item, index) => (
            <Link
              key={index}
              href="#"
              className="text-gray-700 hover:text-gray-900"
            >
              {item}
            </Link>
          )
        )}
        <Link
          href="#"
          className="px-4 py-2 border border-gray-700 rounded-md text-gray-700 hover:bg-gray-700 hover:text-white transition-colors"
        >
          Sign up
        </Link>
        <select className="bg-transparent border-none text-gray-700">
          <option>EN</option>
        </select>
      </nav>
    </header>
  )
}
