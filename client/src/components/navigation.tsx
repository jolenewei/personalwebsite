import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { hash: "home", label: "home" },
  { hash: "about", label: "about" },
  { hash: "projects", label: "projects" },
  { hash: "skills", label: "skills" },
  { hash: "contact", label: "contact" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const element = document.getElementById(item.hash);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.hash);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="white-section px-2 py-2 flex items-center gap-1 shadow-2xl shadow-black/30">
          {navItems.map((item) => (
            <button
              key={item.hash}
              onClick={() => scrollToSection(item.hash)}
              className={`nav-pill ${activeSection === item.hash ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="white-section px-4 py-2.5 flex items-center gap-4 shadow-2xl shadow-black/30">
          <span className="text-sm font-semibold text-neutral-800">jolene</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-600"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="white-section mt-2 px-2 py-2 shadow-2xl shadow-black/30">
            {navItems.map((item) => (
              <button
                key={item.hash}
                onClick={() => scrollToSection(item.hash)}
                className={`block w-full text-left nav-pill ${
                  activeSection === item.hash ? "active" : ""
                }`}
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
