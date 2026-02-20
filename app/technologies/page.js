"use client";

import React from "react";
import DevExpertise from "../components/DevExpertise";
import Link from "next/link";

const techDetails = [
  {
    name: "ReactJS",
    tagline: "High-Performance Frontend",
    description:
      "Our React experts build dynamic, component-based user interfaces that are fast, scalable, and easy to maintain.",
    icon: "/react.png",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "NodeJS",
    tagline: "Scalable Backend Solutions",
    description:
      "We leverage Node.js to build lightweight, event-driven backends capable of handling thousands of concurrent connections.",
    icon: "/nodejs.png",
    color: "from-green-500 to-emerald-700",
  },
  {
    name: "Python",
    tagline: "AI & Data-Driven Logic",
    description:
      "From automation scripts to complex AI/ML integrations, our Python developers write clean, efficient, and powerful code.",
    icon: "/python.png",
    color: "from-blue-600 to-yellow-500",
  },
  {
    name: "AngularJS",
    tagline: "Enterprise-Grade Apps",
    description:
      "Perfect for complex, data-heavy applications. We use Angular to create robust, structured, and secure web platforms.",
    icon: "/angularjs.png",
    color: "from-red-600 to-rose-400",
  },
  {
    name: "VueJS",
    tagline: "Elegant & Flexible UI",
    description:
      "Our Vue developers specialize in creating versatile and approachable interfaces with a focus on seamless integration.",
    icon: "/vue.png",
    color: "from-emerald-400 to-green-600",
  },
  {
    name: "Java",
    tagline: "Secure & Distributed Systems",
    description:
      "For high-security banking or enterprise systems, our Java experts ensure stability, security, and cross-platform compatibility.",
    icon: "/java.png",
    color: "from-orange-600 to-red-700",
  },
];

const Technologies = () => {
  return (
    <div className="w-full">
      {/* Header Section  */}
      <section className="bg-[#ECE7D1] py-20 md:py-36 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block">
            <h3 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gray-500">
              Our Stack
            </h3>
            <div className="h-[3px] w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mt-3" />
          </div>

          <h1 className="mt-8 text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            The Technologies We <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              Master & Deploy.
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We don't just use tools; we specialize in them. Our core focus on
            these 6 industry-leading technologies ensures your project is built
            on a future-proof foundation.
          </p>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techDetails.map((tech) => (
              <div
                key={tech.name}
                className="group p-8 border border-gray-100 rounded-3xl bg-white hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-900/5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${tech.color} transition-opacity`}
                  />
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 object-contain relative z-10"
                  />
                </div>

                <h4 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2">
                  {tech.tagline}
                </h4>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  {tech.name}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DevExpertise />

      {/* 3. Bottom CTA - "Standard Theme CTA" */}
      <section className="bg-[#ECE7D1] py-16 md:py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Need a specialist in one of these?
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-10">
            Our developers are vetted specifically for these frameworks to
            ensure top-tier performance and security for your codebase.
          </p>
          <Link href="/contact">
            <button className="w-full sm:w-auto text-white bg-gradient-to-br from-pink-500 to-orange-400 rounded-full px-10 py-4 text-sm font-bold shadow-lg active:scale-95 transition-all uppercase tracking-wider">
              Talk to our experts
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
