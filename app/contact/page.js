"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const whatsappMessage = `*📩 New Portfolio Message*

👤 Name: ${name}

📧 Email: ${email}

📝 Subject: ${subject}

💬 Message:
${message}`;

    window.open(
      `https://wa.me/917620099568?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    e.target.reset();
  };

  return (
    <>
      <section className="relative bg-[#020817] pt-36 pb-24 overflow-hidden">
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

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-3 border border-cyan-500/30 bg-cyan-500/5 rounded-full px-6 py-3"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

            <span className="uppercase tracking-[4px] text-cyan-400 text-sm font-semibold">
              Get In Touch
            </span>
          </div>

          <h1
            data-aos="fade-up"
            className="mt-10 text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Contact Me
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="max-w-3xl mx-auto mt-10 text-slate-400 text-lg leading-9"
          >
            I'm based in Maharashtra, India and currently open to Frontend
            Developer opportunities, internships and freelance work. Feel free
            to reach out — I usually respond within 24 hours.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <div className="px-6 py-3 rounded-full border border-slate-700 bg-[#081426] text-slate-300">
              📍 Maharashtra, India
            </div>

            <div className="px-6 py-3 rounded-full border border-slate-700 bg-[#081426] text-slate-300">
              ⚡ Responds within 24 Hours
            </div>

            <div className="px-6 py-3 rounded-full border border-slate-700 bg-[#081426] text-slate-300">
              💼 Open to Work
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#020817] pb-28">
        <div
          data-aos="fade-up"
          className="max-w-3xl mx-auto px-6"
        >
          <div className="rounded-3xl border border-cyan-500/20 bg-[#081426] p-8 shadow-[0_0_30px_rgba(0,150,255,.12)]">

            <h3 className="text-cyan-400 uppercase tracking-[3px] text-sm font-semibold mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl bg-[#111827] border border-slate-700 px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl bg-[#111827] border border-slate-700 px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl bg-[#111827] border border-slate-700 px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                className="w-full rounded-xl bg-[#111827] border border-slate-700 px-5 py-4 text-white outline-none resize-none focus:border-cyan-400"
              />

              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-white font-semibold hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>

            <div className="mt-10 border-t border-slate-800 pt-8">
              <p className="text-center text-slate-500 text-sm mb-6 uppercase tracking-[3px]">
                Or Connect Directly
              </p>

              <div className="flex flex-wrap justify-center gap-4">

                <a
                  href="https://www.linkedin.com/in/sidhant-kamble-8b5149307/"
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/sidhantkamble22"
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="mailto:sidhantkamble080@gmail.com"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  <MdEmail />
                  Email
                </a>

                <a
                  href="https://wa.me/917620099568"
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}