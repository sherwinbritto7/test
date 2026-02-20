import React from "react";

const steps = [
  {
    number: 1,
    title: "We Will Gather Your Empty Listed Product",
    description:
      "Entrust us with managing your inventory of empty listed products, ensuring efficiency for your business operations.",
    image: "/process1.png",
  },
  {
    number: 2,
    title: "We Will Try To Make A New Business Model",
    description:
      "Collaborate with our experts to craft and implement a tailored business model that aligns with your goals and aspirations.",
    image: "/process2.png",
  },
  {
    number: 3,
    title: "We Will Help You About Marketing And SEO",
    description:
      "Gain insights from our adept marketing and SEO team, enhancing your online visibility and attracting more customers to your business.",
    image: "/process3.png",
  },
];

const Process = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header - Exact same styles as DevExpertise */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase text-gray-500">
            Process
          </h3>
          <div className="flex justify-center mt-3">
            <span className="h-[3px] w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Process after Hiring
          </h2>

          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Experience business growth by leveraging our proven strategies and
            expert guidance throughout your journey.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Centered with the icons */}
          <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-[1.5px] bg-gray-100 hidden sm:block" />

          <div className="flex flex-col gap-12 md:gap-20">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
              >
                {/* Number Circle & Text Group */}
                <div className="flex items-start gap-4 md:gap-8 w-full">
                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-orange-200">
                      {step.number}
                    </div>
                  </div>

                  {/* Text Content - Matches Card Headings in Expertise */}
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-800 tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Image Section - Smaller and Optimized */}
                <div className="w-full lg:w-auto flex justify-center lg:justify-end flex-shrink-0">
                  <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] flex-shrink-0">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
