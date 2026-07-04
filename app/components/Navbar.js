"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-cyan-500/10 bg-[#020817]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">
            Sidhant Kamble
          </h1>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="relative text-slate-300 hover:text-cyan-400 transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          className="hidden md:block px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300"
        >
          Resume
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-400"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-[#07142b]/95 backdrop-blur-xl border-t border-cyan-500/10">
          <ul className="flex flex-col items-center py-8 gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-slate-300 hover:text-cyan-400 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold"
            >
              Resume
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;