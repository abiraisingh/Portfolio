import catFriend from "@/assets/cat-friend.jpg";

const AboutSection = () => {
  const timeline = [
    {
      title: "Software engineering",
      subtitle: "Designing, developing and enhancing fullstack applications. Setting up databases and automating processes.",
      color: "skill-typescript"
    },
    {
      title: "Fullstack developer",
      subtitle: "Developing Fullstack applications using Raect, Node.js, Express, MongoDB, MySQL to level up my skills.",
      color: "skill-react"
    },
    {
      title: "Web development",
      subtitle: "Creating responsive and user-friendly websites using HTML, CSS, JavaScript, and modern frameworks.",
      color: "skill-html"
    },
    {
      title: "MVJ College of Engineering",
      subtitle: "Bachelor of Computer science and Engineering",
      period: "2022-2026*",
      color: "skill-node"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-20 scale-110"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-border/20">
                <div className="w-full h-full bg-gradient-card flex items-center justify-center">
                  <img
                    src={catFriend}
                    alt="Profile with cat friend"
                    className="w-48 h-48 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About me
            </h2>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center mt-1">
                    <div className={`w-4 h-4 rounded-full bg-${item.color} shadow-lg`}></div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-border to-transparent mt-2"></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;