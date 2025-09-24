import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero px-6"
    >
      <div className="max-w-6xl w-full">
        <div className="bg-gradient-card backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-border/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
                  Abirai Singh
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-wider">
                  SOFTWARE ENGINEER | FULLSTACK DEVELOPER |FRESHER
                </p>
              </div>

              <p className="text-foreground/80 text-lg leading-relaxed">
                With impeccable experience got from building projects from
                concept to layout, I bring my ideas to life with clean code.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Download CV */}
                <a
                  href="/resume.pdf"
                  download="Abirai_Singh_Resume.pdf"
                  className="rounded-full px-8"
                >
                  <Button
                    variant="gradient"
                    size="lg"
                    className="rounded-full px-8"
                  >
                    Download CV
                  </Button>
                </a>

                {/* View CV */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-8"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8"
                  >
                    View CV
                  </Button>
                </a>
              </div>
            </div>

            {/* Portrait */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110"></div>
                <img
                  src={heroPortrait}
                  alt="Anton F. - Software Engineer"
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-border/20"
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
