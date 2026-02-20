"use client";

import React from "react";
import { CheckCircle2, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#ECE7D1] pt-12 pb-16 md:pt-20 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:-mt-10">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-4">
                {" "}
                <h3 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gray-500">
                  Our Story
                </h3>
                <div className="h-[3px] w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mt-3" />
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                {" "}
                Innovative 360° <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
                  Digital Solutions.
                </span>
              </h1>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                At{" "}
                <span className="font-bold text-gray-900">
                  Destino Infotech
                </span>
                , we pave the way for innovation, specializing in crafting
                exceptional digital solutions. Our team is driven by a passion
                for excellence, delivering tailored expertise to transform your
                vision into reality.
              </p>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                With a focus on client success, we're dedicated to shaping the
                future of technology through collaborative effort and technical
                precision.
              </p>

              <button className="w-full sm:w-auto text-white bg-gradient-to-br from-pink-500 to-orange-400 rounded-full px-10 py-4 text-sm font-bold shadow-lg active:scale-95 transition-all uppercase tracking-wider">
                Get in Touch
              </button>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative flex justify-center lg:-mt-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-orange-300/20 rounded-full animate-pulse" />

              <div
                className="relative w-full max-w-[420px] aspect-square overflow-hidden bg-white shadow-2xl shadow-orange-900/10"
                style={{
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                }}
              >
                <img
                  src="/about.png"
                  alt="Digital Solutions Workspace"
                  className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section  */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Core Values
              </h4>
              <div className="h-[2px] w-1/2 bg-gradient-to-r from-pink-500 to-orange-400 mx-auto mt-2" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Partnering for Digital Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Expert Team",
                desc: "Highly skilled developers and designers committed to your project.",
                icon: <Users className="w-7 h-7 text-indigo-500" />,
              },
              {
                title: "On-Time Delivery",
                desc: "We value your time and ensure milestones are met with precision.",
                icon: <Target className="w-7 h-7 text-orange-500" />,
              },
              {
                title: "Scalable Tech",
                desc: "Solutions built to grow alongside your business demands.",
                icon: <Zap className="w-7 h-7 text-blue-500" />,
              },
              {
                title: "Proven Results",
                desc: "A track record of delivering success for global clients.",
                icon: <CheckCircle2 className="w-7 h-7 text-green-500" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-orange-900/5 transition-all duration-300 border border-transparent hover:border-orange-100 group"
              >
                <div className="mb-6 p-4 bg-white w-fit rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {item.title}
                </h5>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
