"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { HiCodeBracket } from "react-icons/hi2";



import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




export default function Home() {
  const projects = [
  {
  title: "TrackWise AI",
  image: "/trackwise.jpg",
  description:
  "TrackWise AI is a full-stack AI-powered personal finance management platform that enables users to track income, expenses, savings, and budgets with an intuitive dashboard. It features secure transaction management, financial analytics, and AI-generated insights powered by the Groq API, delivering a fast, responsive, and user-friendly experience.",
  tech: [
    "Next.js",
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
"Groq API"
  ],
  github: "https://github.com/sidhantkamble22/trackwise-ai",
  demo: "https://trackwise-ai-eta.vercel.app/",
},

{
  title: "Personal Portfolio",
  image: "/portfolio.jpg",
  description:
    "A modern and fully responsive personal portfolio website built to showcase my projects, technical skills, experience, and contact information. Designed with smooth animations, clean UI, SEO optimization, and a mobile-first approach to provide an engaging user experience.",
  tech: [
    "Next.js",
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "AOS",
    "Responsive Design"
  ],
  github: "https://github.com/sidhantkamble22/sidhant-portfolio",
  demo: "https://sidhant-portfolio-tau.vercel.app/"
},
    {
    title: "Blood donation camp",
    image: "/blood.jpg",
    description:
     
  "A web-based Blood Donation Camp Management System that simplifies donor registration,request donors, and administrative management through a responsive and user-friendly interface.",
    tech: ["Next.js", "React.js", "JavaScript", "Express.js","MongoDB", "Tailwind CSS"],
    github: "https://github.com/sidhantkamble22/blood-donation-management-system",
    demo: "https://blood-donation-management-system-iota-three.vercel.app/",
   
  },
  {
    title: "Complaient Manegement",
    image: "/rel.jpg",
    description:
      
  "A web-based Vendor Complaint Management System that enables vendors to submit complaints, track their progress, and receive updates,manage and resolve complaints efficiently.",
    tech: ["React.js", "HTML", "CSS", "JavaScript","MongoDB", "Tailwind CSS"],
    github: "https://github.com/sidhantkamble22/vendor-complaint-system",
    demo: "https://bajarang-enterprises-all-supplement.vercel.app/",
   
  },
  {
    title: "Gym Supplement",
    image: "/gym.jpg",
    description:
    
  "A responsive e-commerce website for Bajranga Enterprises that showcases gym supplements and fitness products with a clean UI, product categories, and an easy-to-use shopping experience.",
    tech: ["React.js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/sidhantkamble22/bajarang-Enterprises-all-supplement-shop",
    
    demo: "https://bajarang-enterprises-all-supplement.vercel.app/",
    
  },
];

useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
}, []);
  return (
    <>
      {/* Hero Section */}
    <section
  data-aos="fade-up"
  className="min-h-screen flex items-center justify-center bg-[#020817] px-5 pt-24 pb-16"
>
  <div className="relative w-full max-w-3xl rounded-3xl border border-cyan-500/20 bg-[#07142b]/90 backdrop-blur-xl p-8 md:p-10 overflow-hidden shadow-[0_0_50px_rgba(0,180,255,0.08)]">

    
    <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/20 blur-[120px] rounded-full"></div>
    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/20 blur-[120px] rounded-full"></div>

    
    <div
      data-aos="fade-down"
      className="relative z-10 flex items-center"
    >
     <div className="relative w-20 h-20">
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-spin [animation-duration:8s]"></div>

  <div className="absolute inset-[3px] rounded-full bg-[#07142b]"></div>

  <Image
    src="/Sidhantprofile.jpeg"
    alt="Sidhant Kamble"
    width={80}
  height={80}
    className="absolute inset-[6px] rounded-full object-cover border-2 border-[#07142b]"
    priority
  />
</div>

      <div className="ml-4">
        <span className="text-sky-400 font-bold tracking-widest text-sm">
          MY PORTFOLIO · 2026
        </span>

        <p className="text-green-400 text-sm mt-1 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
          Available for Opportunities
        </p>
      </div>
    </div>

    
    <h1
      data-aos="fade-right"
      data-aos-delay="100"
      className="relative z-10 mt-10 text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
    >
      Sidhant Kamble
    </h1>

    {/* Typing Animation */}
    <div
      data-aos="fade-left"
      data-aos-delay="200"
      className="mt-5 text-2xl md:text-3xl font-semibold text-white h-10"
    >
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
        className="text-slate-400"
      />
    </div>

    <hr className="border-cyan-500/20 my-8" />

    {/* About */}
    <p
      data-aos="fade-up"
      data-aos-delay="300"
      className="text-slate-400 leading-8 text-lg"
    >
      I'm a tech student with a strong interest in building practical,
      well-structured projects. I spend most of my time creating websites
      and web applications that help me sharpen my skills and understand
      how real-world systems work.
    </p>

    <p
      data-aos="fade-up"
      data-aos-delay="400"
      className="text-slate-400 leading-8 mt-5 text-lg"
    >
      Passionate about creating modern, responsive and high-performance
      web applications using React, Next.js and the latest web
      technologies.
    </p>

    {/* Skills */}
    <div
      data-aos="zoom-in"
      data-aos-delay="500"
      className="flex flex-wrap gap-3 mt-8"
    >
      {[
        "JavaScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ].map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          {skill}
        </span>
      ))}
    </div>

    
    <div
      data-aos="fade-up"
      data-aos-delay="600"
      className="flex flex-wrap gap-4 mt-10"
    >
      <Link
        href="/projects"
        className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
      >
        View Projects 
      </Link>

      <a
        href="/resume.pdf"
        target="_blank"
        className="px-7 py-3 rounded-xl border border-cyan-500 text-white hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
      >
        View Resume
      </a>
    </div>
  </div>
</section>

      
      <section className="relative bg-[#020817] py-28 overflow-hidden">
        
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block border border-cyan-500/30 rounded-full bg-cyan-500/5 px-6 py-2 text-sky-400 uppercase tracking-[4px] text-sm font-semibold">
            Selected Work
          </div>

          <h2 className="text-6xl font-bold text-white mt-8">
            Featured Projects
          </h2>

          <p className="max-w-3xl mx-auto text-slate-500 text-xl leading-10 mt-8">
            A handful of projects I've built while learning. Not perfect, but
            each one represents a real problem I tried to solve and a step
            forward in how I think and build.
          </p>
        </div>
        
      </section>
    <section className="bg-[#020817] pb-24">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {projects.slice(0, 3).map((project, index) => (
        <div
          key={project.title}
          data-aos="fade-up"
          data-aos-delay={index * 150}
          className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#081426] hover:border-cyan-400/40 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/20"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-44 object-cover transition duration-500 hover:scale-105"
          />

          <div className="p-6">

            <h2 className="text-xl font-bold text-white">
              {project.title}
            </h2>

            <p className="text-sm text-slate-400 leading-7 mt-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="px-3 py-1 text-xs rounded-full border border-sky-500/30 text-sky-400"
                >
                  {item}
                </span>
              ))}
            </div>

            <hr className="my-5 border-cyan-500/20" />

            <div className="flex gap-3">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-sky-500/20 py-2.5 text-sm text-white hover:bg-sky-500/10 transition"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-cyan-500 py-2.5 text-sm text-cyan-400 hover:bg-cyan-500/10 transition"
              >
                <FaExternalLinkAlt className="text-sm" />
                Live Demo
              </a>

            </div>

          </div>
        </div>
      ))}

    </div>
  </div>

    <div className="flex justify-center">
         <Link
  href="/projects"
  className="inline-block my-13 text-sky-400 font-semibold hover:text-cyan-300 transition duration-300 hover:translate-x-2"
>
  View Full Projects →
</Link>
         </div>
         <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
</section>
   
   <section  className="bg-[#020817]">
   <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block border border-cyan-500/30 rounded-full bg-cyan-500/5 px-6 py-2 text-sky-400 uppercase tracking-[4px] text-sm font-semibold">
            Tech Stack
          </div>

          <h2 className="text-6xl font-bold text-white mt-8">
           My Skills
          </h2>

          <p className="max-w-3xl mx-auto text-slate-500 text-xl leading-10 mt-8">
            The languages, frameworks, and tools that show up in my work. I've learned most of these by building real things, and I'm still getting better at all of them.
          </p>
        </div>


        <div className="max-w-6xl mx-auto px-4 py-10">

           <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "React.js",
              "Next.js",
              " Core Java",
              "Express.js",
              "HTML & CSS",
              "Node.js",
              "Tailwind CSS",
              "Bootstrap",
              "MongoDB",
              "MySQL"
            ].map((myskils) => (
              <span
                key={myskils}
                   className="px-5 py-2 border border-slate-700 rounded-full text-sm md:text-base font-medium text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              >
                {myskils}
              </span>
            ))}
          </div>
           
         

        </div>
        <div className="flex justify-center">
        <Link
  href="/skills"
  className="inline-block my-13 text-sky-400 font-semibold hover:text-cyan-300 transition duration-300 hover:translate-x-2"
>  View full skills page → </Link>
         </div>
         </section>

    </>
  );
}