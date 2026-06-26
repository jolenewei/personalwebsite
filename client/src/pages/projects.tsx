import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Play } from "lucide-react";

const projects = [
  {
    title: "chameleon",
    description: "Chrome extension that rewrites emails in Gmail using OpenAI with customizable tone and one-click replacement.",
    tags: ["Chrome APIs", "OpenAI API", "JavaScript", "Vite"],
    videoId: "-hqQRXeTL1s",
    githubLink: "#",
  },
  {
    title: "typing test",
    description: "Full-stack typing test with real-time WPM and accuracy tracking, Google login, and saved performance history.",
    tags: ["React", "Express", "MongoDB", "Firebase Auth", "Chart.js"],
    videoId: "i20esF_XM9M",
    githubLink: "#",
  },
  {
    title: "tetris game",
    description: "Playable Tetris clone with piece movement, rotation, line clearing, and live scoring.",
    tags: ["React", "JavaScript", "CSS"],
    videoId: "BfaDWTFXMZw",
    githubLink: "#",
  },
  {
    title: "compass goals",
    description: "Goal-setting web app for students with quarterly goal creation, hashtag recommendations, and weekly tracking.",
    tags: ["Angular", "Firebase", "TypeScript"],
    videoId: "TKna7SfswVg",
    githubLink: "#",
  },
];

const ProjectCard = ({ project, index, isActive }: { project: typeof projects[0]; index: number; isActive: boolean }) => {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;

  return (
    <div
      className={`project-card w-[340px] md:w-[420px] glass-card overflow-hidden ${
        isActive ? "active" : ""
      }`}
    >
      {/* Video / Thumbnail area */}
      <div className="bg-neutral-900 h-[180px] md:h-[220px] relative overflow-hidden">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1&rel=0`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={project.title}
          />
        ) : (
          <>
            <img
              src={thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Play button overlay */}
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all">
                <Play className="w-5 h-5 ml-0.5 text-white" fill="white" />
              </div>
            </button>
          </>
        )}

        <span className="font-mono text-5xl font-bold opacity-[0.06] absolute top-3 right-4 pointer-events-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Action buttons */}
        <div className="absolute bottom-3 right-3 flex gap-2 z-10">
          <a
            href={`https://www.youtube.com/watch?v=${project.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
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
  );
};

const Projects = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    scrollToIndex(0);
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Decorative */}
      <div className="absolute top-24 left-8 md:left-16 text-[10px] text-white/[0.04] font-mono -rotate-90 hidden md:block">
        PROJECTS — 01
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8 fade-up">
          01 / projects
        </p>

        <div className="flex items-end justify-between mb-10 fade-up">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              my<span className="text-muted-foreground/40"> projects</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-3">what i've worked on</p>
          </div>

          <div className="hidden md:flex gap-3">
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
          <ProjectCard
            key={index}
            project={project}
            index={index}
            isActive={index === activeIndex}
          />
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
