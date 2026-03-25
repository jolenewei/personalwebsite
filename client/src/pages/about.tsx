import { useState, useRef } from "react";
import { Trophy, Camera, Music, Palette, Tv, Coffee, ChevronLeft, ChevronRight, Play, ImageIcon } from "lucide-react";
import VinylPlayer from "@/components/vinyl-player";

const About = () => {
  const hobbies = [
    { icon: Music, name: "listening to music" },
    { icon: Palette, name: "design" },
    { icon: Camera, name: "making vlogs" },
    { icon: Tv, name: "watching shows" },
    { icon: Coffee, name: "exploring new cafes" },
    { icon: Trophy, name: "playing tennis" },
  ];

  const vlogs = [
    { title: "vlog title", description: "a short description of this vlog" },
    { title: "vlog title", description: "a short description of this vlog" },
    { title: "vlog title", description: "a short description of this vlog" },
    { title: "vlog title", description: "a short description of this vlog" },
    { title: "vlog title", description: "a short description of this vlog" },
  ];

  const vlogRef = useRef<HTMLDivElement>(null);
  const [activeVlog, setActiveVlog] = useState(0);

  const scrollVlogs = (dir: "left" | "right") => {
    const newIndex = dir === "left"
      ? Math.max(0, activeVlog - 1)
      : Math.min(vlogs.length - 1, activeVlog + 1);
    setActiveVlog(newIndex);
    if (!vlogRef.current) return;
    const cards = vlogRef.current.children;
    if (cards[newIndex]) {
      const card = cards[newIndex] as HTMLElement;
      const containerWidth = vlogRef.current.offsetWidth;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      vlogRef.current.scrollTo({ left: cardCenter - containerWidth / 2, behavior: "smooth" });
    }
  };

  const handleVlogScroll = () => {
    if (!vlogRef.current) return;
    const container = vlogRef.current;
    const center = container.scrollLeft + container.offsetWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(container.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (dist < closestDist) { closestDist = dist; closest = i; }
    });
    setActiveVlog(closest);
  };

  return (
    <section id="about" className="px-6 py-20 md:py-32 relative">
      {/* Decorative elements */}
      <div className="absolute top-32 right-8 md:right-16 text-[10px] text-white/[0.04] font-mono rotate-90 hidden md:block">
        ABOUT — 01
      </div>
      <div className="absolute bottom-40 left-6 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

      {/* Decorative music icons */}
      <Music className="absolute top-20 right-[15%] w-5 h-5 text-white/[0.06] rotate-12 hidden md:block" />
      <Music className="absolute bottom-[30%] left-[8%] w-4 h-4 text-white/[0.06] -rotate-[20deg] hidden md:block" />

      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8 fade-up">
          01 / about
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-12 leading-tight fade-up">
          a little about
          <span className="text-muted-foreground/40"> me</span>
        </h2>

        {/* Main content with photobooth image */}
        <div className="relative mb-16">
          <div className="max-w-xl fade-up fade-up-delay-1">
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              i'm a passionate computer science student who loves to work on new projects and
              meet like-minded people. my fascination with computer science started with my
              enjoyment for problem-solving and creativity.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              i aspire to work on projects that initiate change and improve people's lives.
              always learning, always building.
            </p>
          </div>

          {/* Photobooth strip - hidden on mobile */}
          <div className="hidden md:block md:absolute md:top-[-110px] md:right-0 fade-up fade-up-delay-2">
            <div className="relative">
              <div className="w-[300px] rotate-[6deg] origin-top-left">
                <img
                  src="../../assets/photobooth.png"
                  alt="photobooth with friends"
                  className="w-full h-auto rounded-sm drop-shadow-2xl"
                />
              </div>
              <span className="absolute -bottom-10 right-2 text-xs text-white/30 rotate-[3deg]" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 300, fontStyle: "italic" }}>
                i love hanging out with friends &lt;3
              </span>
            </div>
          </div>
        </div>

        {/* Hobbies - full width */}
        <div className="mb-6 fade-up fade-up-delay-2">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            hobbies & interests
          </p>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby, i) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={i}
                  className="glass-card px-4 py-3 rounded-2xl flex items-center gap-2.5 hover:bg-white/10 transition-all cursor-default"
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{hobby.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Matcha + Vlogs layered area */}
        <div className="relative mb-20 fade-up fade-up-delay-3">
          {/* Matcha photo - hidden on mobile */}
          <div className="hidden md:block absolute -left-14 top-4 z-10">
            <div className="relative inline-block rotate-[-6deg]">
              <div className="w-[220px] rounded-2xl overflow-hidden">
                <img src="../../assets/matcha.png" alt="matcha" className="w-full h-auto" />
              </div>
              <svg
                className="absolute -bottom-8 left-2"
                width="140"
                height="45"
                viewBox="0 0 140 45"
              >
                <defs>
                  <path id="matcha-curve" d="M 5 10 Q 70 45 135 10" fill="none" />
                </defs>
                <text fill="rgba(255,255,255,0.35)" fontSize="11" fontStyle="italic" fontWeight="300" fontFamily="'Outfit', sans-serif">
                  <textPath href="#matcha-curve">
                    i love matcha !
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Vlogs section - sits to the right / behind matcha on desktop */}
          <div className="md:ml-[200px] pt-2">
            <div className="flex items-end justify-between mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold">vlogs</h3>
                <p className="text-xs text-muted-foreground mt-1">get a glimpse into my life...</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollVlogs("left")}
                  className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-all shadow-lg"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollVlogs("right")}
                  className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-all shadow-lg"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div
              ref={vlogRef}
              onScroll={handleVlogScroll}
              className="flex gap-3 overflow-x-auto pb-4"
              style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
            >
              {vlogs.map((vlog, i) => (
                <div
                  key={i}
                  className={`shrink-0 glass-card overflow-hidden group transition-all duration-400 ${
                    i === activeVlog
                      ? "w-[220px] md:w-[260px] opacity-100 scale-100"
                      : "w-[180px] md:w-[210px] opacity-50 scale-[0.92]"
                  }`}
                  style={{ scrollSnapAlign: "center" }}
                >
                  <div className={`${i === activeVlog ? "h-[130px] md:h-[150px]" : "h-[100px] md:h-[120px]"} bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 flex items-center justify-center relative transition-all duration-400`}>
                    <ImageIcon className="w-6 h-6 opacity-15" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-4 h-4 ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-semibold truncate">{vlog.title}</p>
                    <p className="text-[10px] text-muted-foreground truncate mt-0.5">{vlog.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex gap-1.5 mt-3">
              {vlogs.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === activeVlog ? "bg-white w-4" : "bg-white/20 w-1.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Music section with vinyl */}
        <div className="fade-up fade-up-delay-3">
          <div className="flex items-center gap-2 mb-8">
            <Music className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              what i've been listening to
            </p>
          </div>
          <VinylPlayer />
        </div>
      </div>
    </section>
  );
};

export default About;
