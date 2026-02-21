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
    <div className="w-full bg-white">
      {/*Services Hero Section*/}
      <section className="bg-[#ECE7D1] py-12 md:py-20 px-6 relative overflow-hidden">
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

      {/* Tech Stack Marquee */}
      <section className="py-12 bg-white overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-orange-500">
            Our Tech Ecosystem
          </p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-4">
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
                className="mx-8 text-3xl md:text-4xl font-black text-gray-200 hover:text-orange-400 cursor-default transition-colors"
              >
                {tech}
              </span>
            ))}
            {/* Exact duplicate for seamless looping */}
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
                className="mx-8 text-3xl md:text-4xl font-black text-gray-200 hover:text-orange-400 cursor-default transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 px-6 bg-[#FDFCF7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              How we <span className="text-orange-500">integrate</span> with
              you.
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Whether you need a full-scale team or a single expert, we offer
              flexible structures to match your project velocity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                className="group p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:bg-gray-900 transition-all duration-500 flex flex-col"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 transition-all duration-500 group-hover:rotate-6">
                  <Zap className="w-6 h-6 text-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">
                  {model.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 group-hover:text-gray-400 transition-colors">
                  {model.desc}
                </p>
                <div className="mt-auto space-y-4">
                  {model.feat.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm font-semibold text-gray-700 group-hover:text-gray-300"
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

      {/* Industry Focus - Use after DevService */}
      <section className="py-24 bg-[#FDFCF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-orange-500 mb-4">
                Market Expertise
              </h3>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                Solutions for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
                  Every Industry.
                </span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm text-lg font-medium leading-relaxed pb-2">
              We specialize in complex domains that require high security and
              peak performance.
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
                className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-orange-200 transition-all duration-500 group"
              >
                <span className="inline-block px-3 py-1 bg-[#ECE7D1] text-[10px] font-bold uppercase tracking-widest text-gray-700 rounded-full mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {item.tag}
                </span>
                <h4 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h4>
                <p className="text-sm font-medium text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Experts - Split Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#ECE7D1]/50 rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-40" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-8">
                  Our experts don't just write code. <br />
                  <span className="text-orange-600">They own the product.</span>
                </h2>
                <div className="space-y-6">
                  {[
                    "Vetted for senior-level problem solving",
                    "Direct communication with zero middle-men",
                    "Strategic focus on business ROI",
                    "Overlap with your timezone",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                        <ShieldCheck className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="font-bold text-gray-800">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-3xl shadow-xl shadow-orange-900/5">
                    <p className="text-3xl font-black text-orange-500 mb-1">
                      98%
                    </p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Client Retention
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-xl shadow-orange-900/5 translate-x-4">
                    <p className="text-3xl font-black text-gray-900 mb-1">
                      4.5+
                    </p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Avg. Years Exp.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white p-6 rounded-3xl shadow-xl shadow-orange-900/5">
                    <p className="text-3xl font-black text-gray-900 mb-1">
                      24h
                    </p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Response Time
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-xl shadow-orange-900/5 translate-x-4">
                    <p className="text-3xl font-black text-pink-500 mb-1">0%</p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Recruitment Fees
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
