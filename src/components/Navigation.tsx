import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-foreground">Abirai Singh</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center bg-card/80 backdrop-blur-md border border-border rounded-full px-2 py-2">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="nav"
              size="sm"
              className="rounded-full px-4"
              asChild
            >
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </div>

        {/* Search (Desktop Only) */}
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-48 bg-card/80 backdrop-blur-md border border-border rounded-full"
          />
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded-lg border border-border bg-card/80 backdrop-blur-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-card/90 backdrop-blur-md border border-border rounded-2xl p-4">
          <div className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary"
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
