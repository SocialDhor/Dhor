"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import logo from '../public/Group 57.png'
import img1 from '../public/sapiens (1) 1.png'
import Navbar from "./Navbar"

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
     
      <Navbar/>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-white to-gray-200 px-6 md:px-12 lg:px-24 py-12 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-gray-600 text-xl md:text-2xl font-medium mb-2">Undergoing Maintenance</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">We will be back soon!</h1>
            <Link href="https://wa.me/message/UL7JVZG4AL2PM1">
            <button 
              className={`bg-gradient-to-b to-blue-400 cursor-pointer  hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors ${
                  isHovered ? "bg-blue-600" : "bg-blue-500"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >
              Get in touch
            </button>
                </Link>
          </div>

          {/* Right Content - Illustration */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src= {img1}
              alt="Maintenance Illustration"
              width={500}
              height={400}
              className="max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </main>
      <div className="bg-gray-300 px-6 md:px-12 lg:px-24 py-12">
  <div className="max-w-7xl mx-auto text-center"> 
     
  </div>
</div>
    </div>
    
  )
}
