import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaHeart,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020817]">

      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[140px]"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">

        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Sidhant Kamble
        </h2>

        <p className="mt-4 text-slate-400 text-lg">
          Frontend Developer • React • Next.js
        </p>

        <p className="mt-8 max-w-2xl mx-auto text-slate-500 leading-8">
          Thanks for visiting my portfolio. I enjoy building modern,
          responsive and high-performance web applications with clean
          UI, scalable architecture and great user experiences.
        </p>

        <div className="flex justify-center gap-5 mt-12">

          <a
            href="https://github.com/sidhantkamble22"
            target="_blank"
            className="group w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            <FaGithub size={24} className="group-hover:rotate-12 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/sidhant-kamble-8b5149307/"
            target="_blank"
            className="group w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            <FaLinkedin size={24} className="group-hover:rotate-12 transition" />
          </a>

          <a
            href="mailto:sidhantkamble080@gmail.com"
            className="group w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            <MdEmail size={24} className="group-hover:rotate-12 transition" />
          </a>

          <a
            href="https://wa.me/917620099568"
            target="_blank"
            className="group w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            <FaWhatsapp size={24} className="group-hover:rotate-12 transition" />
          </a>

        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-14 text-slate-400">

          <Link
            href="/"
            className="hover:text-cyan-400 transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-cyan-400 transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="hover:text-cyan-400 transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
          >
            Projects
          </Link>

          <Link
            href="/skills"
            className="hover:text-cyan-400 transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
          >
            Skills
          </Link>

          <Link
            href="/contact"
            className="hover:text-cyan-400 transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
          >
            Contact
          </Link>

        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-sm">
            © 2026 <span className="text-cyan-400">Sidhant Kamble</span>. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-slate-500 text-sm">
            Built with
            <FaHeart className="text-red-500 animate-pulse" />
            React • Next.js • Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}