import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

import image from "@/assets/image.png";
import BootStrap from "@/assets/BootStrap.png";
import todo from "@/assets/todo.png";
import socially from "@/assets/socially.png";
import neoID from "@/assets/neoID.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "The Villagers App",
      date: "March 2026",
      description:
        "A platform that connects villagers with essential services and community resources through a simple and accessible interface.",
      image: image,
      tags: ["React", "Web App", "Community"],
      live: "https://the-villagers-app.vercel.app/",
      github: "https://github.com/abiraisingh/The-Villagers",
    },
    {
      title: "Responsive Educational Portal",
      date: "August 2024",
      description:
        "A responsive educational portal UI built with Bootstrap featuring course sections, hero banners and modern layouts.",
      image: BootStrap,
      tags: ["Bootstrap", "UI", "Frontend"],
      live: "https://abiraisingh.github.io/Bootstrap/",
      github: "https://github.com/abiraisingh/Bootstrap",
    },
    {
      title: "ToDo List App",
      date: "February 2026",
      description:
        "A simple task management web application that allows users to add, organize and track daily tasks. The app provides a clean and responsive interface to improve productivity and manage personal to-do lists efficiently.",
      image: todo,
      tags: ["React", "JavaScript", "Productivity"],
      live: "https://todo-list-app1-theta.vercel.app/",
      github: "https://github.com/abiraisingh/todo-list",
    },
    {
      title: "Socially - Social Media Platform",
      date: "January 2026",
      description:
        "A social networking web application that allows users to interact, share posts and connect with others through a simple community-based interface. The project demonstrates frontend UI design and modern web development practices.",
      image: socially,
      tags: ["React", "Social Media", "Web App"],
      live: "https://abiraisingh.github.io/Socially/",
      github: "https://github.com/abiraisingh/Socially",
    },
    {
      title: "NeoID – Digital Identity for the Homeless",
      date: "March 2026",
      description:
        "A social-impact web platform designed to provide digital identity cards for homeless individuals, enabling them to access essential government services such as healthcare, food assistance, and shelter programs.",
      image: neoID,
      tags: ["React", "Social Impact", "Web App"],
      live: "https://neo-id.vercel.app/",
      github: "https://github.com/abiraisingh/id-for-all-cards",
    },
  ];

  return (
    <section id="portfolio" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

      {/* Glow decorations */}
      <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] bg-purple-300/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-300/40 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured Projects
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A collection of projects that demonstrate my ability to design,
            build and deploy modern web applications.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white/70 backdrop-blur-lg border border-white/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-purple-100 text-purple-700 border border-purple-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                {/* Date */}
                <p className="text-sm text-gray-500">{project.date}</p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 pt-3">
                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90">
                      <ExternalLink size={16} />
                      Live
                    </Button>
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <FaGithub />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
