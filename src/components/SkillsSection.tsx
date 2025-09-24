const SkillsSection = () => {
  const skills = [
    { name: "TypeScript", color: "skill-typescript", icon: "TS" },
    { name: "Node.js", color: "skill-node", icon: "N" },
    { name: "React", color: "skill-react", icon: "⚛" },
    { name: "Next.js", color: "skill-foreground", icon: "N" },
    { name: "JavaScript", color: "skill-javascript", icon: "JS" },
    { name: "HTML5", color: "skill-html", icon: "H" },
    { name: "CSS3", color: "skill-css", icon: "C" },
    { name: "Tailwind CSS", color: "skill-tailwind", icon: "T" },
    { name: "Express.js", color: "skill-express", icon: "E" },
    { name: "MySQL", color: "skill-mysql", icon: "M" },
    { name: "MongoDB", color: "skill-node", icon: "M" },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          My skills
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative bg-gradient-card backdrop-blur-sm border-2 border-${skill.color}/50 rounded-2xl p-6 hover:border-${skill.color} transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${skill.color}/20`}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className={`w-12 h-12 bg-${skill.color}/20 rounded-xl flex items-center justify-center text-${skill.color} font-bold text-lg group-hover:bg-${skill.color}/30 transition-colors duration-300`}>
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;