"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* LEFT: Logo & Info */}
          <div className="max-w-md">
            <Link href="/">
              <img
                src="/footer.png"
                alt="Destino Infotech"
                className="h-20 md:h-24 w-auto mb-6 cursor-pointer"
              />
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed">
              Destino, an innovative marketing agency, offers comprehensive
              360-degree solutions for hiring remote developers. Access a
              curated pool of skilled professionals vetted for excellence across
              diverse technologies.
            </p>

            {/* Social Icons - Themed with Brand Hover */}
            <div className="flex gap-4 mt-8">
              {[
                {
                  Icon: FaFacebookF,
                  label: "Facebook",
                  href: "https://www.facebook.com/destinoinfotech2022",
                },
                {
                  Icon: FaXTwitter,
                  label: "Twitter",
                  href: "https://x.com/destinoinfotec1",
                },
                {
                  Icon: FaLinkedinIn,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/destino-infotech/",
                },
                {
                  Icon: FaInstagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/destino_infotech2021/",
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-full border border-gray-200 text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:border-transparent transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Links */}
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            {/* Pages Section */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">
                Pages
              </h4>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technologies"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Technologies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Utility Section */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">
                Utility
              </h4>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-orange-500 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-gray-500">
          <p className="text-center md:text-left">
            © 2011–2026{" "}
            <span className="font-semibold text-gray-700">
              Destino Infotech Pvt. Ltd.
            </span>{" "}
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="hover:text-gray-900 transition-colors"
            >
              Terms & Conditions
            </Link>
            <div className="w-[1px] h-3 bg-gray-300 hidden md:block" />
            <Link
              href="/privacy"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
