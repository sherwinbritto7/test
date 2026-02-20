"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "TECHNOLOGIES", href: "/technologies" },
    { name: "CONTACT US", href: "/contact" },
    { name: "ABOUT", href: "/about" },
  ];

  return (
    <>
      <nav
        className={`
          sticky top-0 z-50 flex items-center justify-between gap-4 px-6 py-3 md:px-12
          transition-all duration-300 border-no
          ${
            scrolled
              ? "bg-[#ECE7D1]/90 backdrop-blur-md shadow-sm border-b border-black/10"
              : "bg-[#ECE7D1]"
          }
        `}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 md:h-16 cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Nav links */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative group hover:text-orange-500 transition-colors duration-200"
              >
                {link.name}
                {/* Animated underline */}
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-200 group-hover:w-full rounded-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact">
          <button className="hidden md:block text-white bg-gradient-to-br from-pink-500 to-orange-400 rounded-full px-5 py-2.5 text-sm font-semibold hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-orange-200">
            Let&apos;s Talk!
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none p-1 rounded-md hover:bg-black/5 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 top-[64px] z-40 lg:hidden flex flex-col items-center pt-10 px-8 bg-[#ECE7D1] transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col items-center gap-2 text-lg font-semibold w-full mb-10">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-4 px-4 rounded-xl hover:text-orange-500 hover:bg-orange-50/50 transition-all duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <div className="w-full max-w-xs mx-auto">
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 rounded-full py-4 text-base font-bold shadow-xl shadow-orange-200/40 hover:opacity-90 active:scale-95 transition-all duration-200 uppercase tracking-widest">
              Let&apos;s Talk!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
