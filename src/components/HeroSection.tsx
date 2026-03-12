import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import heroPortrait from "@/assets/hero-portrait.jpg";

import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-32 pb-16 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

      {/* Glow blobs */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-300/40 rounded-full blur-[140px] animate-pulse"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-blue-300/40 rounded-full blur-[140px] animate-pulse"></div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-8 md:p-12">

          <div className="grid md:grid-cols-2 gap-10 items-center min-h-[70vh]">

            {/* LEFT SIDE */}
            <div className="space-y-6">

              <p className="text-sm uppercase tracking-widest text-purple-600">
                Hello, I'm
              </p>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Abirai{" "}
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Singh
                </span>
              </h1>

              {/* Typing Animation */}
              <div className="text-xl md:text-2xl font-semibold text-gray-700">
                <TypeAnimation
                  sequence={[
                    "Software Engineer",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "React Developer",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                I build modern web applications with scalable architecture,
                clean code, and intuitive UI. Passionate about turning ideas
                into powerful digital experiences.
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3 pt-2">

                <span className="flex items-center gap-2 bg-black/70 backdrop-blur px-3 py-1 rounded-full text-sm border border-gray-200 hover:scale-105 transition">
                  <FaReact className="text-sky-500" />
                  React
                </span>

                <span className="flex items-center gap-2 bg-black/70 backdrop-blur px-3 py-1 rounded-full text-sm border border-gray-200 hover:scale-105 transition">
                  <FaNodeJs className="text-green-600" />
                  Node.js
                </span>

                <span className="flex items-center gap-2 bg-black/70 backdrop-blur px-3 py-1 rounded-full text-sm border border-gray-200 hover:scale-105 transition">
                  <SiMongodb className="text-green-500" />
                  MongoDB
                </span>

                <span className="flex items-center gap-2 bg-black/70 backdrop-blur px-3 py-1 rounded-full text-sm border border-gray-200 hover:scale-105 transition">
                  <SiTypescript className="text-blue-500" />
                  TypeScript
                </span>

                <span className="flex items-center gap-2 bg-black/70 backdrop-blur px-3 py-1 rounded-full text-sm border border-gray-200 hover:scale-105 transition">
                  <SiTailwindcss className="text-cyan-500" />
                  Tailwind
                </span>

              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 pt-4">

                {/* Download CV */}
                <a href="/resume.pdf" download="Abirai_Singh_Resume.pdf">
                  <Button className="rounded-full px-6 flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90">
                    <Download size={18} />
                    Download CV
                  </Button>
                </a>

                {/* View CV */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="rounded-full px-6 flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    View CV
                  </Button>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/abiraisingh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="rounded-full px-6 flex items-center gap-2"
                  >
                    <FaGithub />
                    GitHub
                  </Button>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/abirai-singh-330832297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="rounded-full px-6 flex items-center gap-2"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </Button>
                </a>

              </div>

            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-center md:justify-end">

              <div className="relative group">

                {/* Animated glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 blur-3xl opacity-40 group-hover:opacity-60 transition duration-500"></div>

                <img
                  src={heroPortrait}
                  alt="Abirai Singh"
                  className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border border-white shadow-lg group-hover:scale-105 transition duration-500"
                />

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;