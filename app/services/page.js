"use client";

import React from "react";
import Link from "next/link";
import DevService from "../components/DevService";
import Process from "../components/Process";
import Features from "../components/Features";
import {
  ArrowRight,
  BarChart3,
  Users,
  Zap,
  Globe,
  ShieldCheck,
} from "lucide-react";
import FAQ from "../components/Faq";

const Services = () => {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* Services Hero Section */}
      <section className="bg-[#ECE7D1] py-16 md:py-24 px-5 relative overflow-hidden">
        <div className="absolute top-0 -left-20 w-48 h-48 md:w-64 md:h-64 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-64 h-64 md:w-96 md:h-96 bg-pink-200/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block">
            <h3 className="text-[10px] md:text-sm font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-gray-500">
              Our Expertise
            </h3>
            <div className="h-[3px] w-10 md:w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mt-2" />
          </div>

          <h1 className="mt-6 md:mt-8 text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.15] md:leading-[1.1]">
            Comprehensive Tech Solutions <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              Tailored for Growth.
            </span>
          </h1>

          <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-2">
            Leverage our global talent pool to build, scale, and maintain
            high-performing digital products. We bridge the gap between vision
            and execution.
          </p>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 rounded-full px-8 md:px-10 py-4 text-sm font-bold shadow-xl shadow-orange-500/20 active:scale-95 transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <div className="flex flex-col items-center sm:flex-row sm:space-x-0 -space-y-2 sm:space-y-0">
              <div className="flex -space-x-3 mb-2 sm:mb-0">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-[#ECE7D1] bg-gray-200 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?u=${i}`}
                      alt="Client"
                    />
                  </div>
                ))}
              </div>
              <div className="sm:pl-4 text-xs md:text-sm font-semibold text-gray-700">
                Trusted by 500+ Companies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <div className="bg-white py-8 md:py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4">
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
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <section className="py-10 md:py-12 bg-white overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 mb-6 md:mb-8">
          <p className="text-center text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-orange-500">
            Our Tech Ecosystem
          </p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-2">
            {[
              "React",
              "Node.js",
              "Python",
              "AWS",
              "Flutter",
              "Kubernetes",
              "TypeScript",
              "Next.js",
              "Go",
              "Docker",
            ].map((tech, idx) => (
              <span
                key={idx}
                className="mx-4 md:mx-8 text-2xl md:text-4xl font-black text-gray-200 hover:text-orange-400 cursor-default transition-colors"
              >
                {tech}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              "React",
              "Node.js",
              "Python",
              "AWS",
              "Flutter",
              "Kubernetes",
              "TypeScript",
              "Next.js",
              "Go",
              "Docker",
            ].map((tech, idx) => (
              <span
                key={`dup-${idx}`}
                className="mx-4 md:mx-8 text-2xl md:text-4xl font-black text-gray-200 hover:text-orange-400 cursor-default transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 md:py-24 px-6 bg-[#FDFCF7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              How we <span className="text-orange-500">integrate</span> with
              you.
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Flexible structures to match your project velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Staff Augmentation",
                desc: "Scale your existing team quickly with vetted developers who integrate directly into your workflow.",
                feat: [
                  "48-hour onboarding",
                  "Direct management",
                  "Daily standups",
                ],
              },
              {
                title: "Dedicated Squads",
                desc: "A fully managed, autonomous team including PMs and QA focused solely on your product roadmap.",
                feat: [
                  "End-to-end delivery",
                  "Agile leadership",
                  "Fixed monthly cost",
                ],
              },
              {
                title: "Project Based",
                desc: "Perfect for defined MVPs or specific feature launches with a clear start and end date.",
                feat: [
                  "Defined deliverables",
                  "Milestone payments",
                  "Rapid prototyping",
                ],
              },
            ].map((model, idx) => (
              <div
                key={idx}
                className="group p-8 md:p-10 bg-white border border-gray-100 rounded-[2rem] md:rounded-[2.5rem] hover:bg-gray-900 transition-all duration-500 flex flex-col"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-orange-500 transition-all duration-500 group-hover:rotate-6">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-white transition-colors">
                  {model.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 md:mb-8 group-hover:text-gray-400 transition-colors">
                  {model.desc}
                </p>
                <div className="mt-auto space-y-3 md:space-y-4">
                  {model.feat.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center text-xs md:text-sm font-semibold text-gray-700 group-hover:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-3" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-16 md:py-24 bg-[#FDFCF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-xl">
              <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-orange-500 mb-3 md:mb-4">
                Market Expertise
              </h3>
              <h2 className="text-3xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                Solutions for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
                  Every Industry.
                </span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm text-base md:text-lg font-medium leading-relaxed">
              We specialize in complex domains that require high security.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Fintech",
                desc: "Secure payment gateways & trading platforms.",
                tag: "Security First",
              },
              {
                name: "Healthcare",
                desc: "HIPAA-compliant patient portals & CRM.",
                tag: "Compliance",
              },
              {
                name: "E-commerce",
                desc: "High-traffic stores with headless architecture.",
                tag: "Performance",
              },
              {
                name: "Logistics",
                desc: "Real-time tracking and inventory management.",
                tag: "Scalability",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 hover:border-orange-200 transition-all duration-500 group"
              >
                <span className="inline-block px-3 py-1 bg-[#ECE7D1] text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-700 rounded-full mb-4 md:mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {item.tag}
                </span>
                <h4 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2 md:mb-3 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs md:text-sm font-medium text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Experts */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-[#ECE7D1]/50 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-40" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6 md:mb-8">
                  Our experts don't just write code. <br />
                  <span className="text-orange-600">They own the product.</span>
                </h2>
                <div className="space-y-4 md:space-y-6">
                  {[
                    "Vetted for senior-level problem solving",
                    "Direct communication",
                    "Strategic focus on ROI",
                    "Timezone overlap",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3 md:gap-4">
                      <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                        <ShieldCheck className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" />
                      </div>
                      <span className="font-bold text-sm md:text-base text-gray-800">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-3 md:space-y-4">
                  <div className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-xl shadow-orange-900/5">
                    <p className="text-2xl md:text-3xl font-black text-orange-500">
                      98%
                    </p>
                    <p className="text-[9px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Retention
                    </p>
                  </div>
                  <div className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-xl shadow-orange-900/5 translate-x-2 md:translate-x-4">
                    <p className="text-2xl md:text-3xl font-black text-gray-900">
                      4.5+
                    </p>
                    <p className="text-[9px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Avg. Exp
                    </p>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                  <div className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-xl shadow-orange-900/5">
                    <p className="text-2xl md:text-3xl font-black text-gray-900">
                      24h
                    </p>
                    <p className="text-[9px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Response
                    </p>
                  </div>
                  <div className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-xl shadow-orange-900/5 translate-x-2 md:translate-x-4">
                    <p className="text-2xl md:text-3xl font-black text-pink-500">
                      0%
                    </p>
                    <p className="text-[9px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Fees
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Bottom CTA */}
      <section className="bg-white py-16 md:py-24 px-5 relative">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-pink-100 blur-3xl opacity-30 -rotate-2 scale-110" />

          <div className="relative z-10 bg-white border border-orange-100 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 shadow-2xl shadow-orange-900/10 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Ready to hire your <br className="hidden md:block" /> next expert?
            </h2>
            <p className="text-gray-500 text-base md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Onboard a top-tier developer within{" "}
              <span className="text-orange-600 font-bold">48 hours</span>.
            </p>

            <Link href="/contact">
              <button className="group w-full sm:w-auto text-white bg-gray-900 rounded-full px-8 md:px-12 py-4 md:py-5 text-sm md:text-base font-bold shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto">
                Talk to our experts
                <div className="bg-orange-500 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
              </button>
            </Link>

            <p className="mt-8 text-[10px] md:text-sm text-gray-400 font-medium uppercase tracking-widest">
              Risk-free trial included.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
