import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = [
    { label: "About me", href: "#about" },
    { label: "My skills", href: "#skills" },
    { label: "My side projects", href: "#portfolio" },
    { label: "Contact me", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-secondary py-12 px-6 border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-xl font-bold text-foreground">
            Abirai Singh
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Download CV Button */}
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
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-border/20 gap-4">
          <p className="text-muted-foreground text-sm">
            All rights reserved*
          </p>
          <p className="text-muted-foreground text-sm">
            abc@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;