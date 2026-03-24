import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

const Projects = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "tetris game",
      description: "A full-stack productivity application built with React and Node.js featuring real-time collaboration and intuitive task organization.",
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "typing test",
      description: "A responsive application with beautiful visualizations and real-time feedback using modern web APIs.",
      tags: ["JavaScript", "CSS3", "API"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "e-commerce platform",
      description: "A secure online shopping platform with payment integration, inventory management, and admin dashboard.",
      tags: ["Vue.js", "Python", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "code editor extension",
      description: "A VS Code extension with smart code suggestions and automated documentation generation.",
      tags: ["TypeScript", "VS Code API", "Node.js"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "fitness tracker",
      description: "A mobile-first fitness tracking application with workout logging, progress visualization, and social features.",
      tags: ["React Native", "Firebase", "Redux"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "data viz tool",
      description: "An interactive data visualization platform for analyzing and presenting complex datasets.",
      tags: ["D3.js", "Python", "Flask"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const containerWidth = carouselRef.current.offsetWidth;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const scrollPos = cardCenter - containerWidth / 2;
      carouselRef.current.scrollTo({ left: scrollPos, behavior: "smooth" });
    }
  };

  const scroll = (direction: "left" | "right") => {
    const newIndex = direction === "left"
      ? Math.max(0, activeIndex - 1)
      : Math.min(projects.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let closestDist = Infinity;

    Array.from(container.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const cardCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(containerCenter - cardCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    // Center first card on mount
    scrollToIndex(0);
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Decorative */}
      <div className="absolute top-24 left-8 md:left-16 text-[10px] text-white/[0.04] font-mono -rotate-90 hidden md:block">
        WORK — 02
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8 fade-up">
          02 / work
        </p>

        <div className="flex items-end justify-between mb-10 fade-up">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            my<span className="text-muted-foreground/40"> work</span>
          </h2>

          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-all shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-all shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-width carousel */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="project-carousel flex gap-5 px-[calc(50vw-180px)] md:px-[calc(50vw-220px)] pb-4 fade-up fade-up-delay-1"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card w-[340px] md:w-[420px] glass-card overflow-hidden ${
              index === activeIndex ? "active" : ""
            }`}
          >
            {/* Image area */}
            <div className="bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 h-[180px] md:h-[220px] flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <ImageIcon className="w-10 h-10 mx-auto mb-2 opacity-15" />
                <p className="text-xs opacity-15">screenshot</p>
              </div>

              <span className="font-mono text-5xl font-bold opacity-[0.06] absolute top-3 right-4">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Action buttons */}
              <div className="absolute bottom-3 right-3 flex gap-2">
                <a
                  href={project.demoLink}
                  className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-white hover:text-black transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={project.githubLink}
                  className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-white hover:text-black transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="pill-btn text-[10px] px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6 fade-up fade-up-delay-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => { setActiveIndex(i); scrollToIndex(i); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-white w-6" : "bg-white/20 w-1.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
