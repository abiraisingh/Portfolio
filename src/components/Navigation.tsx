import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "GitHub Activity", href: "#github", id: "github" },
    { label: "Projects", href: "#portfolio", id: "portfolio" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  // Scroll spy logic
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Abirai Singh
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center bg-white/70 backdrop-blur-lg border border-white/40 rounded-full px-2 py-2 shadow-sm">

          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              size="sm"
              className={`rounded-full px-4 transition ${
                activeSection === item.id
                  ? "bg-purple-500 text-white"
                  : "text-gray-700 hover:bg-white hover:text-black"
              }`}
              asChild
            >
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}

        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg bg-black/70 backdrop-blur-lg border border-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-5 shadow-lg">

          <div className="flex flex-col items-center gap-4">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition ${
                  activeSection === item.id
                    ? "text-purple-600 font-semibold"
                    : "text-gray-700 hover:text-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navigation;