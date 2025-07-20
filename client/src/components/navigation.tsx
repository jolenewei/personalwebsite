import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavItem = {
  href: string;
  label: string;
  external?: boolean;
}

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#home", label: "home" },
    { href: "#about", label: "about" },
    { href: "#skills", label: "skills" },
    { href: "#projects", label: "projects" },
    { href: "#contact", label: "contact" },
    { href: "https://www.linkedin.com/in/jolene-wei", label: "linkedin", external: true },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    return activeSection === href.replace('#', '');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('#home')} 
            className="text-xl font-bold cursor-pointer"
          >
            jolene wei
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => 
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  {item.label}
                </a>
              ) : (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`nav-link ${isActive(item.href) ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => 
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 nav-link w-full text-left"
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block py-2 nav-link ${isActive(item.href) ? "active" : ""} w-full text-left`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
