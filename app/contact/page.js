"use client";

import React, { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [phoneValue, setPhoneValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <section className="bg-[#ECE7D1] py-20 md:py-36 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block">
            <h3 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gray-500">
              Get In Touch
            </h3>
            <div className="h-[3px] w-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mt-3" />
          </div>
          <h1 className="mt-8 text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Let’s Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              Great Together.
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Have a project in mind or need expert developers? Reach out to us
            today, and let's turn your digital vision into reality.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="bg-white py-16 md:py-24 px-6">
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
                  At{" "}
                  <span className="font-bold text-gray-900">
                    Destino Infotech
                  </span>
                  , we're dedicated to pioneering cutting-edge digital solutions
                  globally.
                </p>
              </div>

              <div className="space-y-6">
                <h5 className="text-xl font-bold text-gray-900">
                  Get in touch
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
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Name"
                    className="w-full px-6 py-4 bg-[#ECE7D1]/30 border-none rounded-full focus:ring-2 focus:ring-orange-200 outline-none text-gray-800"
                  />
                  <input
                    type="text"
                    name="from_last_name"
                    placeholder="Last Name"
                    className="w-full px-6 py-4 bg-[#ECE7D1]/30 border-none rounded-full focus:ring-2 focus:ring-orange-200 outline-none text-gray-800"
                  />
                </div>

                <input
                  type="email"
                  name="reply_to"
                  required
                  placeholder="Your Email"
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
                    className="w-full px-6 py-4 bg-[#ECE7D1]/30 border-none rounded-full focus-within:ring-2 focus-within:ring-orange-200 outline-none text-gray-800"
                  />
                </div>

                <input
                  type="text"
                  name="company_name"
                  placeholder="Company Name"
                  className="w-full px-6 py-4 bg-[#ECE7D1]/30 border-none rounded-full focus:ring-2 focus:ring-orange-200 outline-none text-gray-800"
                />

                <textarea
                  name="message"
                  required
                  placeholder="Message"
                  rows={4}
                  className="w-full px-6 py-4 bg-[#ECE7D1]/30 border-none rounded-[1.5rem] focus:ring-2 focus:ring-orange-200 outline-none text-gray-800 resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-fit text-white rounded-full px-12 py-4 text-sm font-bold shadow-lg transition-all uppercase tracking-widest flex items-center gap-2 ${success ? "bg-green-500" : "bg-gradient-to-r from-orange-500 to-pink-500 active:scale-95"}`}
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

      {/*  Map Section (Optional) */}
      <section className="w-full h-[400px] bg-gray-100 grayscale hover:grayscale-0 transition-all duration-500">
        <iframe
          title="Google Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1663.5484101305392!2d72.83460584792572!3d19.177907319048966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6f6b93aaaab%3A0xac51043d52a1aedb!2sDestino%20Infotech!5e1!3m2!1sen!2sin!4v1771575338098!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default Contact;
