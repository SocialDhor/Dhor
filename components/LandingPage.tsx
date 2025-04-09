"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "./Navbar";
import img1 from "../public/Group 65.png";
import img2 from "../public/Group 66.png";
import img3 from "../public/Group 67.png";

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/message/UL7JVZG4AL2PM1", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      {/* Main Content - 75% height */}
      <main className="flex-grow bg-[#FFFFFF] px-6 md:px-12 lg:px-24 py-12 md:pt-16 md:py-0 h-fit">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center h-full">
          {/* Left Content */}
          <div className="w-full z-10 md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-gray-600 text-xl md:text-2xl font-medium mb-2">
              Undergoing Maintenance
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              We will be back soon!
            </h1>
            <button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={` bg-gradient-to-b to-blue-400 cursor-pointer hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors ${
            isHovered ? "bg-blue-600" : "bg-blue-500"
            }`}
  >
    Get in touch
  </button>

          </div>

          {/* Image positioned on the right side */}
          {/* <div className="w-full md:w-1/2 flex justify-center translate-y-2/5 md:justify-end absolute"> */}

          {/* </div> */}
        </div>
      </main>
      <Image
        src={img1}
        alt="Maintenance Illustration"
        // width={'100vw'}
        height={500}
        className="z-0 max-w-full  w-screen h-3/4 absolute bottom-0 hidden lg:flex"
        priority
      />
      <Image
        src={img2}
        alt="Maintenance Illustration"
        // width={'100vw'}
        height={500}
        className="max-w-full w-screen h-auto  bottom-0 hidden md:flex lg:hidden "
        priority
      />
      <Image
        src={img3}
        alt="Maintenance Illustration"
        // width={'100vw'}
        height={500}
        className="max-w-full w-screen h-auto bottom-0 md:hidden"
        priority
      />
      {/* Lower div - 25% height */}
      {/*  */}
    </div>
  );
}
