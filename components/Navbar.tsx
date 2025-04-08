import React from 'react'
import Image from "next/image"
import Link from "next/link"
import logo from '../public/Group 57.png'

 export const Navbar = () => {
  return (
    <div>
          <header className="bg-black text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="DHOR Logo"
            width={120}
            height={40}
            className="h-10 ml-5 w-auto"
          />
        </div>
        <Link href="https://wa.me/message/UL7JVZG4AL2PM1" className="text-white mr-5 hover:text-gray-300 transition-colors">
          Contact Us
        </Link>
      </header>
    </div>
    
  )
}

export default Navbar