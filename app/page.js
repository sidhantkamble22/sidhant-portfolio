"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowUpRight, HiCodeBracket } from "react-icons/hi2";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const projects = [
    {
      title: "TrackWise AI",
      image: "/trackwise.jpg",
      description:
        "A full-stack AI-powered personal finance platform for tracking income, expenses, savings and budgets with intelligent financial insights.",
      tech: [
        "Next.js",
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Groq API",
      ],
      github: "https://github.com/sidhantkamble22/trackwise-ai",
      demo: "https://trackwise-ai-eta.vercel.app/",
    },
    {
      title: "Personal Portfolio",
      image: "/portfolio.jpg",
      description:
        "A modern responsive portfolio website built to showcase projects, technical skills, experience and professional work.",
      tech: [
        "Next.js",
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "AOS",
        "Responsive Design",
      ],
      github: "https://github.com/sidhantkamble22/sidhant-portfolio",
      demo: "https://sidhant-portfolio-tau.vercel.app/",
    },
    {
      title: "Blood Donation Camp",
      image: "/blood.jpg",
      description:
        "A web-based Blood Donation Camp Management System that simplifies donor registration, requests and administrative management.",
      tech: [
        "Next.js",
        "React.js",
        "JavaScript",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      github:
        "https://github.com/sidhantkamble22/blood-donation-management-system",
      demo: "https://blood-donation-management-system-iota-three.vercel.app/",
    },
    {
      title: "Complaint Management",
      image: "/rel.jpg",
      description:
        "A Vendor Complaint Management System that enables vendors to submit complaints, track progress and manage resolutions efficiently.",
      tech: [
        "React.js",
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Tailwind CSS",
      ],
      github: "https://github.com/sidhantkamble22/vendor-complaint-system",
      demo: "https://bajarang-enterprises-all-supplement.vercel.app/",
    },
    {
      title: "Gym Supplement",
      image: "/gym.jpg",
      description:
        "A responsive e-commerce website for Bajranga Enterprises showcasing gym supplements and fitness products with a clean shopping experience.",
      tech: ["React.js", "HTML", "CSS", "JavaScript"],
      github:
        "https://github.com/sidhantkamble22/bajarang-Enterprises-all-supplement-shop",
      demo: "https://bajarang-enterprises-all-supplement.vercel.app/",
    },
  ];

  const skills = [
    "JavaScript",
    "React.js",
    "Next.js",
    "Core Java",
    "Node.js",
    "Express.js",
    "HTML & CSS",
    "Tailwind CSS",
    "Bootstrap",
    "MongoDB",
    "MySQL",
  ];

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-white">
      <section className="relative flex min-h-screen items-center px-5 py-24 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(120,119,198,0.08),transparent_30%)]" />

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div data-aos="fade-right">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                Available for opportunities
              </div>

              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
                Web Developer · 2026
              </p>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                Sidhant
                <span className="block bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                  Kamble.
                </span>
              </h1>

              <div className="mt-7 h-10 text-xl font-medium text-zinc-400 sm:text-2xl">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    2000,
                    "Frontend Developer",
                    2000,
                    "React Developer",
                    2000,
                    "Next.js Developer",
                    2000,
                    "JavaScript Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
                I build modern, responsive web applications with React,
                Next.js and JavaScript, focusing on clean interfaces and
                practical real-world solutions.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                >
                  Explore Projects
                  <HiArrowUpRight className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.07]"
                >
                  View Resume
                </a>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="relative mx-auto w-full max-w-sm lg:ml-auto"
            >
              <div className="absolute -inset-10 rounded-full bg-white/[0.03] blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111113]">
                  <div className="relative aspect-square">
                    <Image
                      src="/SidhantProfile.jpeg"
                      alt="Sidhant Kamble"
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">
                          Sidhant Kamble
                        </p>
                        <p className="mt-1 text-sm text-zinc-500">
                          Web Developer
                        </p>
                      </div>

                      <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-400">
                        Open to work
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="mt-20 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {[
              ["Projects", "05+"],
              ["Technologies", "10+"],
              ["Frontend", "React"],
              ["Focus", "Web Apps"],
            ].map(([label, value]) => (
              <div key={label} className="px-2">
                <p className="text-2xl font-semibold text-white">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-[#0c0c0e] px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div data-aos="fade-up" className="mb-14 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600">
              Selected Work
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Things I&apos;ve built.
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-500 sm:text-lg">
              A collection of projects built while learning, experimenting
              and solving practical problems with modern web technologies.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <article
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111113] transition duration-500 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-md">
                    Featured Project
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <HiArrowUpRight className="shrink-0 text-xl text-zinc-600 transition group-hover:text-white" />
                  </div>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-500">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-2 border-t border-white/10 pt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              View all projects
              <HiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#09090b] px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div
            data-aos="fade-up"
            className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600">
                Tech Stack
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Tools I work with.
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-zinc-500">
                Technologies I&apos;ve used while building projects and
                learning modern web development.
              </p>

              <Link
                href="/skills"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white"
              >
                Explore skills
                <HiArrowUpRight />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <HiCodeBracket className="mb-6 text-xl text-zinc-600 transition group-hover:text-white" />
                  <p className="text-sm font-medium text-zinc-300">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}