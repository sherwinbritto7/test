"use client";

import React from "react";
import Link from "next/link";
import { Eye, Lock, Database, UserCheck, Mail, ArrowRight } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "collection",
      icon: <Database className="w-6 h-6 text-blue-500" />,
      title: "1. Data Collection",
      content:
        "We collect information that you provide directly to us, such as when you create an account, request a developer, or contact us for support. This may include your name, email address, company details, and project requirements.",
    },
    {
      id: "usage",
      icon: <Eye className="w-6 h-6 text-orange-500" />,
      title: "2. How We Use Information",
      content:
        "Your data allows us to provide, maintain, and improve our services. Specifically, we use it to match your business with the right remote talent, process transactions, and send technical notices or security alerts.",
    },
    {
      id: "protection",
      icon: <Lock className="w-6 h-6 text-pink-500" />,
      title: "3. Data Security",
      content:
        "We implement robust technical and organizational measures designed to protect your personal information from unauthorized access, loss, or alteration. This includes encryption of data at rest and in transit.",
    },
    {
      id: "rights",
      icon: <UserCheck className="w-6 h-6 text-indigo-500" />,
      title: "4. Your Privacy Rights",
      content:
        "Depending on your location, you may have the right to access, correct, or delete your personal data. You can also object to certain processing activities or request that we transfer your data to another service.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Header - Consistent Cream Theme */}
      <section className="bg-[#ECE7D1] py-24 md:py-36 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-pink-200/20 to-transparent rounded-r-full blur-3xl" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <h3 className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-gray-500">
              Trust & Transparency
            </h3>
            <div className="h-[3px] w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mt-3" />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              Policy.
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
                Privacy Navigation
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

          {/* Main Privacy Text */}
          <div className="lg:col-span-8 space-y-16">
            <div className="prose prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                At Destino Infotech, your privacy is our priority. This policy
                explains how we collect, use, and safeguard your data when you
                interact with our platform and hiring services.
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

            {/* Support Box */}
            <div className="bg-[#ECE7D1]/50 p-10 md:p-12 rounded-[3rem] border border-orange-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Mail className="w-32 h-32" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                Privacy Questions?
              </h3>
              <p className="text-gray-600 mb-8 max-w-md relative z-10">
                If you wish to exercise your data rights or have concerns about
                how your information is handled, our Data Protection Officer is
                here to help.
              </p>
              <Link href="/contact">
                <button className="relative z-10 text-white bg-gradient-to-br from-pink-500 to-orange-400 rounded-full px-12 py-4 text-sm font-bold shadow-xl active:scale-95 transition-all uppercase tracking-widest">
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
