"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I hire a developer?",
    answer:
      "Our streamlined vetting process allows us to match you with a top-tier developer in as little as 48 hours. Once you approve the match, they can start immediately.",
  },
  {
    question: "How do you vet your remote experts?",
    answer:
      "We use a multi-stage vetting process including deep technical assessments, soft-skills evaluations, and previous project portfolio reviews. Only the top 3% of applicants make it through.",
  },
  {
    question: "What happens if the developer isn't a good fit?",
    answer:
      "We offer a risk-free trial period. If you're not satisfied with the performance or cultural fit within the first week, we'll find a replacement at no extra cost.",
  },
  {
    question: "Can I hire developers for short-term projects?",
    answer:
      "Yes! We provide flexible scaling. Whether you need a dedicated team for a year or a specialist for a 3-month sprint, we adapt to your project timeline.",
  },
  {
    question: "Do you handle the legal and payroll side?",
    answer:
      "Absolutely. Destino Infotech manages all contracts, international payroll, and compliance, so you can focus entirely on your product development.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 flex items-center gap-2 justify-center">
              <HelpCircle className="w-4 h-4 text-orange-500" /> FAQ
            </h3>
            <div className="h-[2px] w-full bg-gradient-to-r from-pink-500 to-orange-400 mt-2" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Common Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-[1.5rem] transition-all duration-300 ${
                openIndex === index
                  ? "border-orange-200 bg-orange-50/30 shadow-lg shadow-orange-900/5"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span
                  className={`text-lg md:text-xl font-bold transition-colors ${
                    openIndex === index ? "text-orange-600" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`p-2 rounded-full transition-transform duration-300 ${
                    openIndex === index
                      ? "bg-orange-500 text-white rotate-180"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 md:px-8 pb-8 text-gray-600 leading-relaxed text-base md:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Trigger */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-orange-600 font-bold hover:underline underline-offset-4"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
