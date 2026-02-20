"use client";

import React from "react";
import Link from "next/link";
import DevService from "../components/DevService";
import Process from "../components/Process";
import Features from "../components/Features";
import { ArrowRight, BarChart3, Users, Zap, Globe } from "lucide-react";
import FAQ from "../components/Faq";

const Services = () => {
  return (
    <div className="w-full bg-white">
      {/*Services Hero Section*/}
      <section className="bg-[#ECE7D1] py-20 md:py-36 px-6 relative overflow-hidden">
        {/* Abstract background*/}
        <div className="absolute top-0 -left-20 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block">
            <h3 className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-gray-500">
              Our Expertise
            </h3>
            <div className="h-[3px] w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mt-3" />
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
            Comprehensive Tech Solutions <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              Tailored for Growth.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Leverage our global talent pool to build, scale, and maintain
            high-performing digital products. We bridge the gap between vision
            and execution.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/contact">
              <button className="w-full sm:w-auto text-white bg-gradient-to-br from-pink-500 to-orange-400 rounded-full px-10 py-4 text-sm font-bold shadow-xl shadow-orange-500/20 active:scale-95 transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-[#ECE7D1] bg-gray-200 overflow-hidden"
                >
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Client" />
                </div>
              ))}
              <div className="pl-4 text-sm font-semibold text-gray-700">
                Trusted by 500+ Companies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <div className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Talent Vetted", val: "10k+", icon: <Users /> },
              { label: "Projects Delivered", val: "450+", icon: <Zap /> },
              { label: "Global Reach", val: "25+", icon: <Globe /> },
              { label: "Success Rate", val: "99%", icon: <BarChart3 /> },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-2xl md:text-3xl font-bold text-gray-900">
                  {stat.val}
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Services Grid */}
      <div className="relative">
        <DevService />
      </div>

      {/* Steps to Hire (Features)*/}
      <section className="bg-gray-50/80 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Features />
        </div>
      </section>

      {/* The Workflow Process */}
      <Process />

      {/* FAQS */}
      {/* <FAQ /> */}

      {/* Final Bottom CTA */}
      <section className="bg-white py-24 px-6 relative">
        <div className="max-w-5xl mx-auto relative">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-pink-100 blur-3xl opacity-30 -rotate-2 scale-110" />

          <div className="relative z-10 bg-white border border-orange-100 rounded-[3rem] p-10 md:p-20 shadow-2xl shadow-orange-900/10 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Ready to hire your <br /> next expert?
            </h2>
            <p className="text-gray-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Skip the lengthy recruitment process. Tell us your requirements
              and onboard a top-tier developer within{" "}
              <span className="text-orange-600 font-bold">48 hours</span>.
            </p>

            <Link href="/contact">
              <button className="group w-full sm:w-auto text-white bg-gray-900 rounded-full px-12 py-5 text-base font-bold shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto">
                Talk to our experts
                <div className="bg-orange-500 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </Link>

            <p className="mt-8 text-sm text-gray-400 font-medium">
              No upfront commitment required. Risk-free trial included.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
