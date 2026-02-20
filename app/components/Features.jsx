"use client";
import Link from "next/link";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const featureSteps = [
  {
    title: "Tell Us The Skill you Need",
    description:
      "Specify the skills you need and access a comprehensive sales dashboard for insights.",
    image: (
      <DotLottieReact
        src="https://lottie.host/5d90ad9e-4b0d-4dd1-8280-a6ac85f7908a/UGRE9kbiJJ.lottie"
        loop
        autoplay
        //object-contain so that does not stretch
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "We Find the best Talent for you",
    description: "Keeping you updated on customer and project activities.",
    image: (
      <DotLottieReact
        src="https://lottie.host/3256a316-484f-4ec4-bb93-125ceeba849a/MjED5uWMT9.lottie"
        loop
        autoplay
        //object-contain so that does not stretch
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    title: "Interview, Hire",
    description:
      "make informed decisions, and hire seamlessly, regardless of your location.",
    image: (
      <DotLottieReact
        src="https://lottie.host/23af36a8-15eb-4b28-889d-d676f2fd872d/5eOt18Iy5a.lottie"
        loop
        autoplay
        //object-contain so that does not stretch
        className="w-full h-full object-contain"
      />
    ),
  },
];

const Features = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section - Matches DevExpertise.jsx */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase text-gray-500">
            Features
          </h3>
          <div className="flex justify-center mt-3">
            <span className="h-[3px] w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Steps To Hire Our Remote Developers?
          </h2>

          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Empower your business with our platform's features, ensuring
            streamlined processes, heightened productivity, and goal attainment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {featureSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Image Container  */}
              <div className="w-full max-w-[260px] md:max-w-full aspect-square flex items-center justify-center mb-6 md:mb-8 flex-shrink-0">
                {/* <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                /> */}
                {step.image}
              </div>

              {/* Text Content - Matches DevExpertise card text style */}
              <div className="max-w-[280px] md:max-w-full">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-800 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <Link href="/contact">
            <button className="w-full sm:w-auto text-white bg-gradient-to-br from-pink-500 to-orange-400 rounded-full px-10 py-4 text-sm font-bold shadow-lg active:scale-95 transition-all uppercase tracking-wider">
              Talk to our experts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
