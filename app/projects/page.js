import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Import your projects array


const Projects = () => {
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
  title: "Swamini Rental House",
  image: "/swamini.jpg",
  description:
    "A modern and responsive rental house website built for Swamini Rental House. The platform showcases outfits for pre-wedding, maternity, baby shoot, fashion shoot, traditional wear, and special events. Designed with a premium UI, smooth animations, and mobile-first responsiveness to provide an elegant browsing experience.",
  tech: [
    "Next.js",
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Responsive Design",
  ],
  github: "https://github.com/sidhantkamble22/swamini-rental-house",
  demo: "https://swanimi-renatl-house.vercel.app/",
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
  {
  title: "Accredian Enterprise Clone",
  image: "/accredian.jpg",
  description:
    "A modern and responsive enterprise learning platform built with Next.js and Tailwind CSS. The project features reusable React components, responsive design, Framer Motion animations, API integration for testimonials, and a lead capture form using Next.js API Routes, showcasing clean architecture and modern frontend development practices.",
  tech: [
    "Next.js",
    "React.js",
    "JavaScript",
    "Tailwind CSS",
   
    
    
  ],
  github: "https://github.com/sidhantkamble22/accredian-enterprise-clone",
  demo: "https://accredian-enterprise-clone-eight-nu.vercel.app/",
},

  {
    title: "BitLinks",
    image: "/bitlink.jpg",
    description:
     
  "A modern URL Shortener web application that converts long URLs into short, shareable links with a clean and responsive interface. Built to demonstrate full-stack development, API integration, backend routing, and efficient URL management.",
    tech: ["Next.js", "React.js", "JavaScript", "Express.js","MongoDB", "Tailwind CSS"],
    github: "https://github.com/sidhantkamble22/bitlinks",
    demo: "https://bitlinks-zu1n.vercel.app/",
   
  },
   {
    title: "iTaskManeger",
    image: "/todo.jpg",
    description:
     
  "iTaskManager is a responsive task management application built with React and Vite that enables users to create, edit, delete, and track daily tasks. It features Local Storage for persistent data, a clean user interface, and demonstrates React Hooks and efficient state management.",
    tech: [ "React.js", "JavaScript","Vite ","Local Storage", "Tailwind CSS"],
    github: "https://github.com/sidhantkamble22/todo-list-project",
    demo: "https://bitlinks-zu1n.vercel.app/",
   
  },
   {
    title: "PassManeger",
    image: "/password.jpg",
    description:
     
  "PassOP is a full-stack Password Manager application built to securely store and manage website credentials. It supports creating, updating, deleting, and copying passwords through an intuitive interface while using MongoDB for persistent storage. The project showcases CRUD operations, API integration, responsive UI design, and efficient state management.",
    tech: [, "React.js", "JavaScript", "Express.js","MongoDB", "Tailwind CSS"],
    github: "https://github.com/sidhantkamble22/password-manager",
    demo:null,
   
  },
   {
    title: "HopeBridge",
    image: "/hope.jpg",
    description:
     
  "HopeBridge is a responsive NGO and charity platform that connects donors, volunteers, and communities through donation campaigns, social initiatives, and an intuitive user-friendly interface.",
    tech: ["Next.js", "React.js", "JavaScript", "Express.js","MongoDB", "Tailwind CSS"],
    github: "https://github.com/sidhantkamble22/hopebridge-ngo",
    demo:"https://hopebridge-ngo.vercel.app/",
   
  },
];

const totalProjects = projects.length;

const liveDemos = projects.filter(
  (project) => project.demo && project.demo !== "#"
).length;

const technologies = new Set(
  projects.flatMap((project) => project.tech)
).size;
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#020817] pt-24 pb-24 overflow-hidden">

        <div
  data-aos="fade-up"
  className="relative z-10 max-w-5xl mx-auto px-6 text-center"
>
  <div className="inline-flex items-center gap-2 border border-cyan-500/30 rounded-full bg-cyan-500/5 px-6 py-2 text-cyan-400 uppercase tracking-[3px] text-sm font-semibold">
     Featured Work
  </div>

  <h2 className="mt-8 text-4xl md:text-6xl font-extrabold text-white leading-tight">
    Projects That Showcase
    <span className="block bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 bg-clip-text text-transparent">
      My Skills & Experience
    </span>
  </h2>

  <p className="max-w-3xl mx-auto mt-8 text-base md:text-lg text-slate-400 leading-8">
    Here are some of the projects I've developed using
    <span className="text-cyan-400 font-medium">
      {" "}React.js, Next.js, JavaScript, Node.js and MongoDB
    </span>.
    Each project reflects my focus on building responsive user interfaces,
    solving real-world problems, and writing clean, maintainable code.
  </p>
</div> 


<section className="bg-[#020817] py-14">
  <div className="max-w-5xl mx-auto px-6">

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-6 text-center">

      {/* Total Projects */}
      <div data-aos="fade-up">
        <h2 className="text-5xl md:text-6xl font-bold text-cyan-400">
          {totalProjects}
        </h2>

        <p className="mt-3 text-slate-500 uppercase tracking-[3px] font-semibold text-sm">
          Total Projects
        </p>
      </div>

      {/* Live Demos */}
      <div data-aos="fade-up" data-aos-delay="150">
        <h2 className="text-5xl md:text-6xl font-bold text-cyan-400">
          {liveDemos}
        </h2>

        <p className="mt-3 text-slate-500 uppercase tracking-[3px] font-semibold text-sm">
          Live Demos
        </p>
      </div>

      {/* Technologies */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="col-span-2 sm:col-span-1"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-cyan-400">
          {technologies}+
        </h2>

        <p className="mt-3 text-slate-500 uppercase tracking-[3px] font-semibold text-sm">
          Technologies
        </p>
      </div>

    </div>

  </div>
</section>


  <div className="max-w-6xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {projects.map((project, index) => (
        <div
          key={project.title}
          data-aos="fade-up"
          data-aos-delay={index * 150}
          className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#081426] hover:border-cyan-400/40 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/20"
        >
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-44 object-cover transition duration-500 hover:scale-105"
          />

          
          <div className="p-6">

           
            <h2 className="text-xl font-bold text-white">
              {project.title}
            </h2>

            
            <p className="text-slate-400 text-sm leading-7 mt-3">
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

            {/* Buttons */}
            <div className="flex gap-3">

              {project.private ? (
                <button className="flex-1 py-2.5 rounded-lg border border-gray-700 text-gray-500 text-sm">
                  🔒 Private
                </button>
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-sky-500/20 py-2.5 text-sm text-white hover:bg-sky-500/10 transition"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
              )}

              {project.demo ? (
  <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-cyan-500 py-2.5 text-sm text-cyan-400 hover:bg-cyan-500/10 transition"
  >
    <FaExternalLinkAlt />
    Live Demo
  </a>
) : (
  <button
    disabled
    className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-700 py-2.5 text-sm text-gray-500 cursor-not-allowed"
  >
    Private
  </button>
)}

            </div>

          </div>
        </div>
      ))}

    </div>
  </div>
</section>
    </>
  );
};

export default Projects;