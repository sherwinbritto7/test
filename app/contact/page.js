"use client";

import React, { useRef, useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, ChevronDown } from "lucide-react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Contact = () => {
  const formRef = useRef();
  const formSectionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [phoneValue, setPhoneValue] = useState();

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Manual check for PhoneInput since it's a custom component
    if (!phoneValue) {
      alert("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setLoading(false);
        setSuccess(true);
        formRef.current.reset();
        setPhoneValue("");
        setTimeout(() => setSuccess(false), 5000);
      },
      (error) => {
        setLoading(false);
        console.error("FAILED...", error.text);
        alert("Submission failed. Check console for details.");
      },
    );
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-[#ECE7D1] pt-12 pb-16 md:pt-20 md:pb-24 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block">
            <h3 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gray-500">
              Get In Touch
            </h3>
            <div className="h-[3px] w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mt-3" />
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Let’s Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              Great Together.
            </span>
          </h1>
          <p className="mt-8 text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-medium">
            Have a groundbreaking project in mind or looking to scale your
            existing digital presence? At{" "}
            <span className="text-gray-900 font-bold">Destino Infotech</span>,
            we blend technical expertise with creative strategy to build
            high-performance web solutions tailored to your business goals.
          </p>

          <div className="mt-12 flex justify-center">
            <button
              onClick={scrollToForm}
              aria-label="Scroll to contact form"
              className="animate-bounce p-3 bg-white/80 rounded-full cursor-pointer hover:bg-white transition-all shadow-md group border border-orange-100"
            >
              <ChevronDown className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section ref={formSectionRef} className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-10">
              <div>
                <h4 className="text-orange-600 font-bold text-lg mb-4">
                  Innovative 360° Digital Solutions
                </h4>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Feel Free To Send Us A Message <br /> About Your Website Needs
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  At Destino Infotech, we specialize in turning complex
                  challenges into seamless digital experiences. Whether you’re a
                  startup ready to launch or an enterprise seeking optimization,
                  our team is here to ensure your brand stays ahead.
                </p>
              </div>

              <div className="space-y-6 border-t border-gray-100 pt-10">
                <h5 className="text-xl font-bold text-gray-900">
                  Contact Details
                </h5>
                <div className="flex items-center gap-5 group">
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-[#ECE7D1] transition-colors">
                    <Phone className="w-6 h-6 text-gray-900" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    +91 2246065742
                  </span>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-[#ECE7D1] transition-colors">
                    <Mail className="w-6 h-6 text-gray-900" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    info@destinoinfotech.com
                  </span>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-[#ECE7D1] transition-colors">
                    <MapPin className="w-6 h-6 text-gray-900" />
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed">
                    05, Aditya Industrial Estate, Mindspace, <br /> Malad west,
                    Mumbai 400064.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-[2rem]">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Ready to start?{" "}
                  <span className="text-orange-500">Fill out the form.</span>
                </h3>
                <p className="text-gray-500 mt-2">
                  All fields are required. We'll get back to you within 24
                  hours.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="First Name"
                    className="w-full px-6 py-4 bg-[#ECE7D1]/30 border-none rounded-full focus:ring-2 focus:ring-orange-200 outline-none text-gray-800"
                  />
                  <input
                    type="text"
                    name="from_last_name"
                    required
                    placeholder="Last Name"
                    className="w-full px-6 py-4 bg-[#ECE7D1]/30 border-none rounded-full focus:ring-2 focus:ring-orange-200 outline-none text-gray-800"
                  />
                </div>

                <input
                  type="email"
                  name="reply_to"
                  required
                  placeholder="Your Email Address"
                  className="w-full px-6 py-4 bg-[#ECE7D1]/30 border-none rounded-full focus:ring-2 focus:ring-orange-200 outline-none text-gray-800"
                />

                <div className="relative phone-input-container">
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    placeholder="Phone Number"
                    value={phoneValue}
                    onChange={setPhoneValue}
                    name="phone_number"
                    required
                    className="w-full px-6 py-4 bg-[#ECE7D1]/30 border-none rounded-full focus-within:ring-2 focus-within:ring-orange-200 outline-none text-gray-800"
                  />
                </div>

                <input
                  type="text"
                  name="company_name"
                  placeholder="Company Name (Optional)"
                  className="w-full px-6 py-4 bg-[#ECE7D1]/30 border-none rounded-full focus:ring-2 focus:ring-orange-200 outline-none text-gray-800"
                />

                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-6 py-4 bg-[#ECE7D1]/30 border-none rounded-[1.5rem] focus:ring-2 focus:ring-orange-200 outline-none text-gray-800 resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full md:w-fit text-white rounded-full px-12 py-4 text-sm font-bold shadow-lg transition-all uppercase tracking-widest flex items-center justify-center gap-2 ${
                    success
                      ? "bg-green-500"
                      : "bg-gradient-to-r from-orange-500 to-pink-500 active:scale-95 hover:opacity-90"
                  }`}
                >
                  {loading ? (
                    "Sending..."
                  ) : success ? (
                    <>
                      Sent <CheckCircle className="w-4 h-4" />
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px] bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          title="Destino Infotech Location"
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1256333682!2d72.8344186759751!3d19.190807548737207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6e4e5080001%3A0x6b8720456181f08e!2sAditya%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1709123456789"
          allowFullScreen=""
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default Contact;
