import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Play } from "lucide-react";

const projects = [
  {
    title: "chameleon",
    description: "Chrome extension that rewrites emails in Gmail using OpenAI with customizable tone and one-click replacement.",
    tags: ["Chrome APIs", "OpenAI API", "JavaScript", "Vite"],
    videoId: "-hqQRXeTL1s",
    githubLink: "https://github.com/jolenewei/chameleon",
  },
  {
    title: "typing test",
    description: "Full-stack typing test with real-time WPM and accuracy tracking, Google login, and saved performance history.",
    tags: ["React", "Express", "MongoDB", "Firebase Auth", "Chart.js"],
    videoId: "i20esF_XM9M",
    githubLink: "https://github.com/jolenewei/typing-test",
  },
  {
    title: "tetris game",
    description: "Playable Tetris clone with piece movement, rotation, line clearing, and live scoring.",
    tags: ["React", "JavaScript", "CSS"],
    videoId: "BfaDWTFXMZw",
    githubLink: "https://github.com/jolenewei/tetris",
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
  const [manualPlay, setManualPlay] = useState(false);
  const playing = isActive || manualPlay;
  const thumbnail = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
  const embed = `https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&mute=1&loop=1&playlist=${project.videoId}&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`;

  return (
    <div
      className={`project-card relative w-[460px] md:w-[680px] max-w-[88vw] ${
        isActive ? "active" : ""
      }`}
    >
      {/* Laptop */}
      <div className="flex flex-col items-center">
        {/* Lid / screen */}
        <div className="w-[92%] bg-black rounded-t-2xl border-[3px] border-neutral-800 border-b-0 px-3 pt-4 pb-3 shadow-2xl shadow-black/70">
          {/* Webcam */}
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 mx-auto mb-2.5" />
          <div className="rounded-lg overflow-hidden bg-black aspect-video relative">
            {playing ? (
              <>
                <iframe
                  src={embed}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={project.title}
                />
                {/* Blocks hover so YouTube's title/channel chrome stays hidden */}
                <div className="absolute inset-0 z-10" />
              </>
            ) : (
              <>
                <img
                  src={thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setManualPlay(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all">
                    <Play className="w-5 h-5 ml-0.5 text-white" fill="white" />
                  </div>
                </button>
              </>
            )}
            {/* Screen gloss */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          </div>
        </div>
        {/* Hinge / base */}
        <div className="relative w-full h-3.5 bg-gradient-to-b from-neutral-700 to-black rounded-b-xl shadow-lg shadow-black/60">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 rounded-b-lg bg-black/60" />
        </div>
      </div>

      {/* Info */}
      <div className="pt-7 text-center px-4">
        <h3 className="text-xl md:text-2xl font-bold mb-2.5">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-md mx-auto">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 justify-center mb-5">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="pill-btn text-[10px] px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 justify-center">
          <a
            href={`https://www.youtube.com/watch?v=${project.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white text-black hover:bg-white/85 shadow-lg shadow-white/5 transition-all"
          >
            <ExternalLink className="w-4 h-4" /> demo
          </a>
          {project.githubLink !== "#" && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/[0.07] border border-white/15 text-white hover:bg-white/15 transition-all"
            >
              <Github className="w-4 h-4" /> code
            </a>
          )}
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
        className="project-carousel flex gap-8 px-[calc(50vw-230px)] md:px-[calc(50vw-340px)] pb-4 fade-up fade-up-delay-1"
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
