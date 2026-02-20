"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const Hero = () => {
  return (
    /* Removed min-h-screen to pull the bottom up; used py to control the exact height */
    <section className="bg-[#ECE7D1] w-full pt-12 pb-16 lg:pt-16 lg:pb-20 flex items-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Content Section */}
        {/* lg:-mt-8 pulls the text up slightly to tighten the top feel */}
        <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start z-10 lg:-mt-8">
          <h3 className="text-indigo-600 font-bold mb-2 text-sm tracking-widest uppercase">
            Welcome to Destino Infotech
          </h3>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            YOUR HUB FOR <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              REMOTE WEB DEVELOPERS.
            </span>
          </h1>

          <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg max-w-lg">
            Looking to boost your projects with top-tier remote web developers?
            At Destino Infotech, we connect you with skilled professionals.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/contact">
              <button className="w-full sm:w-auto text-white bg-gradient-to-br from-pink-500 to-orange-400 rounded-full px-10 py-4 text-sm font-bold shadow-lg active:scale-95 transition-all uppercase tracking-wider">
                Get Started
              </button>
            </Link>
            <Link href="/services">
              <button className="font-semibold text-sm underline underline-offset-8 hover:text-orange-600 transition-colors py-2">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Animation Container */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end flex-shrink-0 lg:-mt-8">
          <div className="w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[550px] aspect-square flex-shrink-0">
            <DotLottieReact
              src="https://lottie.host/cab71726-4a3e-4292-9976-47c5fb908b78/OpHVCXF1OM.lottie"
              loop
              autoplay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
