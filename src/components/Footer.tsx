import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = [
    { label: "About me", href: "#about" },
    { label: "My skills", href: "#skills" },
    { label: "My projects", href: "#portfolio" },
    { label: "Contact me", href: "#contact" },
  ];

  return (
    <footer className="relative py-16 px-6 overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

      {/* decorative glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-purple-300/40 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Top Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Abirai Singh
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Download CV */}
          <a
            href="/resume.pdf"
            download="Abirai_Singh_Resume.pdf"
          >
            <Button
              className="rounded-full px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90"
            >
              Download CV
            </Button>
          </a>

        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-200"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Abirai Singh. All rights reserved.
          </p>

          <p>
            singhabirai75@gmail.com
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;