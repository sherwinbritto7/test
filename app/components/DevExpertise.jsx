"use client";

import React from "react";

const techStack = [
  { name: "AWS", icon: "/aws.png" },
  { name: "Node.js", icon: "/nodejs.png" },
  { name: "Java", icon: "/java.png" },
  { name: "Flutter", icon: "/flutter.png" },
  { name: "JavaScript", icon: "/javascript.png" },
  { name: "Angular.js", icon: "/angularjs.png" },
  { name: "Google Cloud", icon: "/google-cloud.png" },
  { name: "Objective-C", icon: "/objective-c.png" },
  { name: "Swift", icon: "/swift.png" },
  { name: "TypeScript", icon: "/typescript.png" },
  { name: "Vue.js", icon: "/vue.png" },
  { name: "Kotlin", icon: "/kotlin.png" },
  { name: ".NET", icon: "/dotnet.png" },
  { name: "PHP", icon: "/php.png" },
  { name: "Python", icon: "/python.png" },
  { name: "React.js", icon: "/react.png" },
];

const DevExpertise = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h3 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gray-500">
            Developers
          </h3>
          <div className="flex justify-center mt-3">
            <span className="h-[3px] w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Our Remote Developer's Expertise
          </h2>

          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Discover a diverse pool of remote developers equipped with a
            spectrum of skills.
          </p>
        </div>

        {/* Themed Flex-Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className={`
                group border border-gray-100 rounded-3xl md:rounded-[2rem] 
                p-8 md:p-10 
                flex flex-col items-center justify-center text-center bg-white 
                transition-all duration-300 ease-in-out 
                hover:shadow-2xl hover:shadow-orange-900/10 hover:-translate-y-2 hover:border-orange-200
                
                /* BIG Mobile Width: Max 2 per row on mobile */
                w-[calc(50%-1rem)] 
                sm:w-[calc(33.33%-1.5rem)] 
                lg:w-[calc(16.66%-1.5rem)] 
                min-w-[160px] md:min-w-[200px]
              `}
            >
              {/* Icon Container - Increased significantly for mobile */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4 md:mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#ECE7D1] rounded-[2rem] scale-0 group-hover:scale-110 transition-transform duration-300 ease-out" />

                {/* Image - Set to w-16 (64px) for mobile impact */}
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="relative w-16 h-16 md:w-20 md:h-20 object-contain z-10 transition-all duration-300 group-hover:scale-110"
                />
              </div>

              {/* Text - Using text-base (16px) as the mobile minimum */}
              <p className="text-base md:text-lg font-black text-gray-800 tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevExpertise;
