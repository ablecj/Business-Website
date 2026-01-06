"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GetConsultBtn from "../common/GetConsultBtn";

const Navbar: React.FC = () => {
  // state management for hamburger menu
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  // tracking the scroll functions
  const [scrolled, setScrolled] = useState<boolean>(false);

  // useEffect for the tracking the navbar movement
  useEffect(() => {
    const onScroll = () => {
      const shouldBeScrolled = window.scrollY > 10;
      setScrolled((prev) =>
        prev !== shouldBeScrolled ? shouldBeScrolled : prev
      );
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
      w-full top-0 left-0 z-50 transition-all duration-300 
    ${scrolled ? "fixed bg-white/15 backdrop-blur-lg shadow-xl " : "absolute bg-transparent"}
  `}
    >
      <nav
        className=" flex my-3 items-center justify-between h-16 px-4 sm:px-6 md:px-8 lg:px-[112px]"
        aria-label="Main navigation"
      >
        {/* LEFT: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold text-gray-900">
            BrandLogo
          </Link>
        </div>

        {/* CENTER: Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact Us" },
          ].map((item) => (
            <li key={item.label} className="group relative pl-4">
              {/* Bullet */}
              <span
                className="
          absolute left-0 top-1/2
          h-1.5 w-1.5
          -translate-y-1/2
          rounded-full
          bg-black
          transition-all duration-200
          group-hover:opacity-0
          group-hover:scale-0

        "
              />

              {/* Link */}
              <Link
                href={item.href}
                className="text-black hover:text-[#3398DB] hover:underline transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT: CTA (Desktop) */}
        <div className="hidden md:flex">
          {/* <Link
            href="/contact"
            className="mx-auto
            flex items-center justify-center gap-[6px]
            p-4
            rounded-md
            bg-gradient-to-r from-[#151D26] to-[#2B3D4F]
            text-sm font-medium text-white
            transition-opacity duration-200
            hover:opacity-80"
          >
            Get Consultation
            <Image
              src="/assets/icons/consult_arrow.svg"
              alt="right arrow"
              width={16}
              height={16}
            />
          </Link> */}
          <GetConsultBtn />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-4 sm:px-6 md:px-8 lg:px-[112px] pb-4">
          <div className="flex flex-col gap-4 border-t pt-4">
            <ul className="flex flex-col gap-5 p-3">
              <li className="group relative pl-3">
                {/* Bullet */}
                <span
                  className="
              absolute left-0 top-1/2
              h-1.5 w-1.5
              -translate-y-1/2
              rounded-full
              bg-black
              transition-all
              duration-200
              ease-out
              group-hover:opacity-0
              group-hover:scale-0
            "
                ></span>

                <Link
                  href="/"
                  className="text-black hover:text-[#3398DB] hover:underline transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="group relative pl-3">
                {/* Bullet */}
                <span
                  className="
              absolute left-0 top-1/2
              h-1.5 w-1.5
              -translate-y-1/2
              rounded-full
              bg-black
              transition-all
              duration-200
              ease-out
              group-hover:opacity-0
              group-hover:scale-0
            "
                ></span>

                <Link
                  href="/about"
                  className="text-black hover:text-[#3398DB] hover:underline transition-colors"
                >
                  About
                </Link>
              </li>

              <li className="group relative pl-3">
                <span
                  className="
              absolute left-0 top-1/2
              h-1.5 w-1.5
              -translate-y-1/2
              rounded-full
              bg-black
              transition-all
              duration-200
              ease-out
              group-hover:opacity-0
              group-hover:scale-0
            "
                ></span>

                <Link
                  href="/services"
                  className="text-black hover:text-[#3398DB] hover:underline transition-colors"
                >
                  Services
                </Link>
              </li>

              <li className="group relative pl-3">
                <span
                  className="
              absolute left-0 top-1/2
              h-1.5 w-1.5
              -translate-y-1/2
              rounded-full
              bg-black
              transition-all
              duration-200
              ease-out
              group-hover:opacity-0
              group-hover:scale-0
            "
                ></span>

                <Link
                  href="/contact"
                  className="text-black hover:text-[#3398DB] hover:underline transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* <Link
              href="/contact"
              className="mx-auto
            flex items-center justify-center gap-[6px]
            p-4
            rounded-md
            bg-gradient-to-r from-[#151D26] to-[#2B3D4F]
            text-sm font-medium text-white
            transition-opacity duration-200
            hover:opacity-80"
            >
              Get Consultation
              <Image
              src="/assets/icons/consult_arrow.svg"
              alt="right arrow"
              width={12}
              height={12}
            />
            </Link> */}
            <GetConsultBtn />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
