"use client";

import React from "react";
import {
  Globe,
  Smartphone,
  Code,
  Cloud,
  Database,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Building fast, scalable, and visually stunning websites tailored to your business needs.",
    icon: <Globe />,
  },
  {
    title: "Mobile App Development",
    description:
      "Creating high-performance Android and iOS apps with seamless user experiences.",
    icon: <Smartphone />,
  },
  {
    title: "Custom Software Development",
    description:
      "Designing and developing custom software solutions to solve complex business challenges.",
    icon: <Code />,
  },
  {
    title: "Cloud & DevOps Solutions",
    description:
      "Optimizing infrastructure with secure, scalable, and cost-efficient cloud solutions.",
    icon: <Cloud />,
  },
  {
    title: "Backend & Database Engineering",
    description:
      "Developing robust APIs and databases to ensure reliability, performance, and scalability.",
    icon: <Database />,
  },
  {
    title: "Security & Maintenance",
    description:
      "Ensuring application security, performance monitoring, and long-term maintenance.",
    icon: <ShieldCheck />,
  },
];

const DevService = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-2">
            Services
          </h3>
          <div className="flex justify-center mb-6">
            <span className="h-[3px] w-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Development Services Our <br className="hidden md:block" />
            Remote Experts Can Provide
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Our remote experts offer a range of specialized development services
            to help your business scale effectively.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl md:rounded-[2.5rem] p-8 md:p-10 
               shadow-sm transition-all duration-300 ease-in-out
               hover:shadow-2xl hover:shadow-orange-900/10 hover:-translate-y-2 hover:border-orange-100
               flex flex-col items-start text-left cursor-default"
            >
              {/* Icon Container - Updated to match Technologies/DevExpertise */}
              <div
                className="w-12 h-12 md:w-16 md:h-16 bg-[#ECE7D1] rounded-2xl flex items-center justify-center 
                  mb-6 md:mb-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden"
              >
                {/* Subtle Gradient Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-orange-500 to-pink-500 transition-opacity" />

                {/* Icon - Swapped white for dark gray/orange */}
                {React.cloneElement(service.icon, {
                  className:
                    "w-6 h-6 md:w-8 md:h-8 text-gray-800 group-hover:text-orange-600 transition-colors duration-300 relative z-10",
                })}
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug group-hover:text-orange-600 transition-colors duration-300 tracking-tight">
                  {service.title}
                </h4>
                <p className="text-sm md:text-base font-medium text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevService;
