"use client";

import {
  FaReact,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

export default function About() {
  return (
    <>
      <section className="relative bg-[#020817] pt-36 pb-28 overflow-hidden">

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div
            data-aos="fade-up"
            className="max-w-4xl"
          >

            <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
              About Me
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 leading-tight">
              Building modern
              <br />
              <span className="text-cyan-400">
                web experiences.
              </span>
            </h1>

            <p className="text-slate-400 text-lg leading-9 mt-10 max-w-3xl">
              Hi, I'm <span className="text-white font-semibold">Sidhant Kamble</span>,
              a passionate Frontend Developer from India. I enjoy
              transforming ideas into fast, responsive and beautiful web
              applications using modern technologies like React.js,
              Next.js and Tailwind CSS.
            </p>

          </div>

          <div className="grid lg:grid-cols-12 gap-20 mt-28">

            <div
              data-aos="fade-right"
              className="lg:col-span-7"
            >

              <h2 className="text-3xl font-bold text-white mb-10">
                My Story
              </h2>

              <p className="text-slate-400 leading-9 mb-8">
                My journey into web development started with curiosity about
                how websites work. That curiosity quickly turned into a
                passion for building responsive and interactive user
                interfaces.
              </p>

              <p className="text-slate-400 leading-9 mb-8">
                Since then, I've built multiple real-world projects
                including Blood Donation Management System, Vendor
                Complaint Management, BitLinks, PassOP, HopeBridge and
                several other applications that helped me strengthen my
                frontend and backend skills.
              </p>

              <p className="text-slate-400 leading-9">
                I'm continuously learning new technologies and currently
                focusing on becoming a Full Stack Developer while looking
                for opportunities where I can contribute, learn and grow
                with experienced teams.
              </p>

            </div>

            <div
              data-aos="fade-left"
              className="lg:col-span-5"
            >

              <h2 className="text-3xl font-bold text-white mb-10">
                Journey
              </h2>

              <div className="relative border-l border-cyan-500/30 pl-8 space-y-12">

                <div className="relative">

                  <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-cyan-400"></div>

                  <div className="flex items-center gap-3 mb-2">

                    <FaCode className="text-cyan-400 text-xl" />

                    <h3 className="text-white text-xl font-semibold">
                      Started Programming
                    </h3>

                  </div>

                  <p className="text-slate-400">
                    Learned Java, HTML and CSS while exploring software
                    development fundamentals.
                  </p>

                </div>

                <div className="relative">

                  <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-cyan-400"></div>

                  <div className="flex items-center gap-3 mb-2">

                    <FaReact className="text-cyan-400 text-xl" />

                    <h3 className="text-white text-xl font-semibold">
                      React Journey
                    </h3>

                  </div>

                  <p className="text-slate-400">
                    Built responsive websites using React.js,
                    JavaScript and Tailwind CSS.
                  </p>

                </div>

                <div className="relative">

                  <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-cyan-400"></div>

                  <div className="flex items-center gap-3 mb-2">

                    <FaGraduationCap className="text-cyan-400 text-xl" />

                    <h3 className="text-white text-xl font-semibold">
                      BCS Graduate
                    </h3>

                  </div>

                  <p className="text-slate-400">
                    Completed Bachelor of Computer Science and
                    continued learning Full Stack Development.
                  </p>

                </div>

                <div className="relative">

                  <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-cyan-400 animate-pulse"></div>

                  <div className="flex items-center gap-3 mb-2">

                    <FaLaptopCode className="text-cyan-400 text-xl" />

                    <h3 className="text-white text-xl font-semibold">
                      Today
                    </h3>

                  </div>

                  <p className="text-slate-400">
                    Building modern projects and actively looking for
                    Frontend Developer opportunities.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
         <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
      </section>
      

      <section className="bg-[#020817] pb-28">

  <div className="max-w-7xl mx-auto px-6">

    <div
      data-aos="fade-up"
      className="text-center mb-20"
    >

      <span className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
        What I Do
      </span>

      

      <p className="max-w-3xl mx-auto mt-6 text-slate-400 leading-9">
        I enjoy designing and developing modern web applications that are
        responsive, fast and provide a great user experience.
      </p>

    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

      <div
        data-aos="fade-up"
        className="group"
      >

        

        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition">
          Frontend Development
        </h3>

        <p className="text-slate-400 mt-5 leading-8">
          Building responsive, accessible and modern user interfaces
          using React.js, Next.js, JavaScript and Tailwind CSS.
        </p>

      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="group"
      >

        

        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition">
          Backend Learning
        </h3>

        <p className="text-slate-400 mt-5 leading-8">
          Expanding my knowledge with Node.js, Express.js and MongoDB
          to build complete Full Stack applications.
        </p>

      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="group"
      >

       

        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition">
          Real Projects
        </h3>

        <p className="text-slate-400 mt-5 leading-8">
          Creating practical projects that solve real-world problems
          while improving my development skills every day.
        </p>

      </div>

    </div>

  

    

  

  </div>

</section>


    </>
  );
}