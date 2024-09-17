import Image from "next/image"
import Link from "next/link"

type Props = {}
export const Footer = ({}: Props) => {
  return (
    <footer className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="space-y-4">
          <Image src="/logo.svg" alt="Jadoo" width={115} height={34} />
          <p className="text-gray-600">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Mobile
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Help/FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Press
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Affilates
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">More</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Airlinefees
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Airline
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Low fare tips
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Image
                src="/facebook-icon.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Image
                src="/instagram-icon.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Image
                src="/twitter-icon.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <p className="text-gray-600">Discover our app</p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2"
            >
              <Image
                src="/google-play-icon.svg"
                alt="Google Play"
                width={20}
                height={20}
              />
              <span>Google Play</span>
            </Link>
            <Link
              href="#"
              className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2"
            >
              <Image
                src="/apple-store-icon.svg"
                alt="Apple Store"
                width={20}
                height={20}
              />
              <span>Apple Store</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-600">
        <p>All rights reserved@jadoo.co</p>
      </div>
    </footer>
  )
}
