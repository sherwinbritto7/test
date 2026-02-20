"use client";

import React from "react";
import Link from "next/link";
import {
  Scale,
  ShieldCheck,
  FileText,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const TermsAndCondition = () => {
  const sections = [
    {
      id: "acceptance",
      icon: <Scale className="w-6 h-6 text-orange-500" />,
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using the services provided by Destino Infotech, you agree to be bound by these Terms and Conditions. Our services are intended for users who are at least 18 years old. If you do not agree with all of these terms, you are expressly prohibited from using the site.",
    },
    {
      id: "services",
      icon: <FileText className="w-6 h-6 text-pink-500" />,
      title: "2. Services & Engagements",
      content:
        "We provide a curated platform to connect enterprise clients with remote development talent. While we vet all developers for technical proficiency, the specific scope of work, timelines, and deliverables are defined in individual Statement of Work (SOW) documents signed between the parties.",
    },
    {
      id: "ip",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
      title: "3. Intellectual Property Rights",
      content:
        "Unless otherwise indicated, the Site is our proprietary property. This includes source code, databases, functionality, software, website designs, audio, video, text, and graphics. You are granted a limited license to access the site for internal business purposes only.",
    },
    {
      id: "liability",
      icon: <HelpCircle className="w-6 h-6 text-emerald-500" />,
      title: "4. Limitation of Liability",
      content:
        "In no event will Destino Infotech, or our directors and employees, be liable to you or any third party for any direct, indirect, consequential, exemplary, or punitive damages arising from your use of our site or services.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Header - Consistent Cream Theme */}
      <section className="bg-[#ECE7D1] py-24 md:py-36 px-6 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-200/20 to-transparent rounded-l-full blur-3xl" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <h3 className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-gray-500">
              Legal Framework
            </h3>
            <div className="h-[3px] w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mt-3" />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Terms of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              Service.
            </span>
          </h1>
        </div>
      </section>

      {/* 2. Content Layout with Sidebar Navigation */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar - Quick Links */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 space-y-4">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">
                Table of Contents
              </h4>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all group"
                >
                  <span className="text-gray-600 group-hover:text-gray-900 font-medium">
                    {section.title.split(". ")[1]}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </aside>

          {/* Main Legal Text */}
          <div className="lg:col-span-8 space-y-16">
            <div className="prose prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Welcome to Destino Infotech. These Terms of Service constitute a
                legally binding agreement made between you, whether personally
                or on behalf of an entity, and Destino Infotech, concerning your
                access to and use of our platform.
              </p>

              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 border-b border-gray-100 pb-12 last:border-0"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gray-50 rounded-2xl">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed pl-2 md:pl-16">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Enhanced Call to Action */}
            <div className="bg-[#ECE7D1]/50 p-10 md:p-12 rounded-[3rem] border border-orange-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Scale className="w-32 h-32" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                Need a specialized agreement?
              </h3>
              <p className="text-gray-600 mb-8 max-w-md relative z-10">
                For enterprise clients requiring custom SLAs, NDAs, or master
                service agreements, please contact our legal counsel directly.
              </p>
              <Link href="/contact">
                <button className="relative z-10 text-white bg-gradient-to-br from-pink-500 to-orange-400 rounded-full px-12 py-4 text-sm font-bold shadow-xl hover:shadow-orange-500/20 active:scale-95 transition-all uppercase tracking-widest">
                  Talk to Legal Expert
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndCondition;
