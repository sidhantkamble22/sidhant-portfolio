"use client";

import { FaCode, FaReact, FaTools, FaUsers } from "react-icons/fa";

const skills = [
  {
    title: "Programming Languages",
    icon: <FaCode className="text-cyan-400 text-xl" />,
    description:
      "Core programming languages I use to build scalable, efficient and maintainable applications.",
    items: ["JavaScript", "Java", "HTML", "CSS", "PHP"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <FaReact className="text-cyan-400 text-xl" />,
    description:
      "Modern frameworks and libraries that I use for developing responsive web applications.",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Express.js",
      "Node.js",
    ],
  },
  {
    title: "Database & Tools",
    icon: <FaTools className="text-cyan-400 text-xl" />,
    description:
      "Development tools and databases that help me build complete full-stack applications.",
    items: ["MongoDB", "MySQL", "Git", "GitHub", "VS Code"],
  },
  {
    title: "Soft Skills",
    icon: <FaUsers className="text-cyan-400 text-xl" />,
    description:
      "Professional habits and interpersonal strengths I bring to every project.",
    items: [
      "Problem Solving",
      "Teamwork",
      "Time Management",
      "Communication",
    ],
  },
];

export default function Skills() {
  return (
    <>
      <section className="relative bg-[#020817] pt-36 pb-20 overflow-hidden">
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
            Technical Skills
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-8">
            My Skills
          </h1>

          <p className="mt-8 text-slate-400 text-lg leading-8 max-w-3xl mx-auto">
            My technical skills span frontend development, backend technologies,
            databases, and modern development tools. I continuously improve
            these skills by building practical real-world projects.
          </p>
        </div>
      </section>

      <section className="bg-[#020817] pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {skills.map((skill, index) => (
              <div
                key={skill.title}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="rounded-2xl border border-cyan-500/20 bg-[#081426] p-6 shadow-[0_0_20px_rgba(0,150,255,.10)] hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,150,255,.18)] transition-all duration-500"
              >
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl border border-cyan-500/30 bg-cyan-500/5 flex items-center justify-center">
                    {skill.icon}
                  </div>

                  <h2 className="text-xl font-semibold text-white">
                    {skill.title}
                  </h2>

                </div>

                <p className="mt-5 text-[15px] leading-7 text-slate-400">
                  {skill.description}
                </p>

                <div className="h-px bg-gradient-to-r from-cyan-500/40 via-slate-700 to-transparent my-6"></div>

                <div className="flex flex-wrap gap-2.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/40 text-slate-300 text-sm hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="bg-[#020817] pb-28">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <div className="inline-flex items-center gap-2 border border-cyan-500/30 rounded-full bg-cyan-500/5 px-6 py-2 text-cyan-400 uppercase tracking-[3px] text-sm font-semibold">
        ● Currently Learning
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mt-8">
        Growing Every Day
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-slate-400 text-lg leading-8">
        Technologies and concepts I'm actively learning to become a better
        Full Stack Developer and build more scalable applications.
      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <div
        data-aos="fade-up"
        data-aos-delay="0"
        className="rounded-3xl border border-cyan-500/20 bg-[#081426] p-7 border-l-[5px] border-l-sky-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(56,189,248,.2)] transition-all duration-500"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold tracking-wider">
          IN PROGRESS
        </span>

        <h3 className="text-2xl font-bold text-white mt-6">
          TypeScript
        </h3>

        <p className="text-slate-400 leading-8 mt-5">
          Learning TypeScript to write scalable, type-safe React and Next.js
          applications with improved maintainability.
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="rounded-3xl border border-cyan-500/20 bg-[#081426] p-7 border-l-[5px] border-l-violet-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,.2)] transition-all duration-500"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold tracking-wider">
          EXPLORING
        </span>

        <h3 className="text-2xl font-bold text-white mt-6">
          REST APIs & Backend
        </h3>

        <p className="text-slate-400 leading-8 mt-5">
          Building secure REST APIs with Express.js, authentication,
          middleware, and backend best practices.
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="rounded-3xl border border-cyan-500/20 bg-[#081426] p-7 border-l-[5px] border-l-emerald-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(52,211,153,.2)] transition-all duration-500"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider">
          LEARNING
        </span>

        <h3 className="text-2xl font-bold text-white mt-6">
          UI/UX Design
        </h3>

        <p className="text-slate-400 leading-8 mt-5">
          Improving design thinking by learning modern UI principles,
          accessibility and user experience patterns.
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="450"
        className="rounded-3xl border border-cyan-500/20 bg-[#081426] p-7 border-l-[5px] border-l-amber-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(251,191,36,.2)] transition-all duration-500"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wider">
          CURIOUS
        </span>

        <h3 className="text-2xl font-bold text-white mt-6">
          AI Integration
        </h3>

        <p className="text-slate-400 leading-8 mt-5">
          Exploring AI APIs and integrating intelligent features into web
          applications using modern AI tools.
        </p>
      </div>

    </div>
  </div>
</section>
    </>
  );
}