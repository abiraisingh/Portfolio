import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiNextdotjs
} from "react-icons/si";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-sky-500" /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Skills & Technologies
          </h2>

          <p className="text-gray-600 mt-3">
            Technologies I use to build modern web applications
          </p>

        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/70 backdrop-blur-lg border border-white/50 rounded-2xl p-6 shadow-md"
            >

              {/* Category Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="space-y-4">

                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 text-gray-700 hover:text-black transition"
                  >
                    <span className="text-xl">
                      {skill.icon}
                    </span>

                    <span className="font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SkillsSection;