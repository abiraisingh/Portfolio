import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import image from "@/assets/image.png";
import BootStrap from "@/assets/BootStrap.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "NeoID for the homeless people",
      date: "August 2025",
      description: "A platform that provides a digital identity solution for homeless individuals, enabling them to access essential services and resources. Features include secure identity verification, service provider integration, and user-friendly interfaces. Built with React, Node.js, Express.js and MongoDB. Also added Blockchain for secure identity management.",
      image: image,
      tags: ["Design", "Web" , "Social"],
      gradient: "from-skill-typescript to-skill-react"
    },
    {
      title: "Responsive Educational Portal using Bootstrap",
      date: "August 2024", 
      description: "Developed a responsive Bootstrap-based educational portal UI, designed with sections for hero promotion, course .",
      image: BootStrap,
      tags: ["Education", "Tech"],
      gradient: "from-skill-figma to-skill-node"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center md:text-left">
          My projects
        </h2>
        
        <div className="space-y-12 mt-12">
          {projects.map((project, index) => (
            <div key={project.title} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-gradient-card rounded-2xl overflow-hidden border border-border/20 shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    // {project.date}
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <Button variant="gradient" className="rounded-full px-6">
                  See more
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;