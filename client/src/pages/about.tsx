import { useState, useRef } from "react";
import { Trophy, Camera, Music, Palette, Tv, Coffee, ChevronLeft, ChevronRight, Play, Guitar } from "lucide-react";
import VinylPlayer from "@/components/vinyl-player";

const About = () => {
  const hobbies = [
    { icon: Palette, name: "design" },
    { icon: Guitar, name: "playing guitar" },
    { icon: Camera, name: "making vlogs" },
    { icon: Tv, name: "watching shows" },
    { icon: Coffee, name: "exploring new cafes" },
    { icon: Trophy, name: "playing tennis" },
  ];

  const vlogs = [
    { title: "3/22/2026", description: "santa cruz day trip", videoId: "B8po3Dg_SFw" },
    { title: "2/26 – 3/01/2026", description: "friend birthday weekend", videoId: "9yHF7p1eyWM" },
    { title: "4/18 – 4/23/2025", description: "hawaii", videoId: "yuyL1xrT4HI" },
  ];

  const vlogRef = useRef<HTMLDivElement>(null);
  const [activeVlog, setActiveVlog] = useState(0);
  const [playingVlogs, setPlayingVlogs] = useState<boolean[]>(vlogs.map(() => false));

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
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8 fade-up md:-ml-16">
          01 / about
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-12 leading-tight fade-up md:-ml-16">
          a little about
          <span className="text-muted-foreground/40"> me</span>
        </h2>

        {/* Main content with photobooth image */}
        <div className="relative mb-20">
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
                  src="/assets/photobooth.png"
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
        <div className="mb-10 fade-up fade-up-delay-2">
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

        {/* Matcha + Camera + Vlogs layered area */}
        <div className="relative mb-24 fade-up fade-up-delay-3">
          {/* Matcha photo - hidden on mobile */}
          <div className="hidden md:block absolute -left-10 top-4 z-20">
            <div className="relative inline-block rotate-[-6deg]">
              <div className="w-[160px] rounded-2xl overflow-hidden">
                <img src="/assets/matcha.png" alt="matcha" className="w-full h-auto" />
              </div>
              <svg
                className="absolute -bottom-1 left-[-70px]"
                width="120"
                height="45"
                viewBox="0 0 120 45"
              >
                <defs>
                  <path id="matcha-curve" d="M 5 30 Q 60 0 115 30" fill="none" />
                </defs>
                <text fill="rgba(255,255,255,0.35)" fontSize="10" fontStyle="italic" fontWeight="300" fontFamily="'Outfit', sans-serif">
                  <textPath href="#matcha-curve">
                    matcha matcha matcha!!
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Camera friends photo - overlapping below-left of matcha */}
          <div className="hidden md:block absolute -left-32 top-[110px] z-10">
            <div className="relative inline-block rotate-[4deg]">
              <div className="w-[190px] rounded-lg overflow-hidden drop-shadow-2xl">
                <img src="/assets/camera-friends.png" alt="friends" className="w-full h-auto" />
              </div>
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
              {vlogs.map((vlog, i) => {
                const isActive = i === activeVlog;
                return (
                  <div
                    key={i}
                    className={`shrink-0 glass-card overflow-hidden group transition-all duration-400 ${
                      isActive
                        ? "w-[220px] md:w-[260px] opacity-100 scale-100"
                        : "w-[180px] md:w-[210px] opacity-50 scale-[0.92]"
                    }`}
                    style={{ scrollSnapAlign: "center" }}
                  >
                    <div className={`${isActive ? "h-[130px] md:h-[150px]" : "h-[100px] md:h-[120px]"} relative overflow-hidden transition-all duration-400`}>
                      {playingVlogs[i] ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${vlog.videoId}?autoplay=1&mute=1&rel=0`}
                          className="absolute inset-0 w-full h-full"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          title={vlog.description}
                        />
                      ) : (
                        <>
                          <img
                            src={`https://img.youtube.com/vi/${vlog.videoId}/hqdefault.jpg`}
                            alt={vlog.description}
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => {
                              const updated = [...playingVlogs];
                              updated[i] = true;
                              setPlayingVlogs(updated);
                            }}
                            className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <Play className="w-4 h-4 ml-0.5 text-white" fill="white" />
                            </div>
                          </button>
                        </>
                      )}
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-semibold truncate">{vlog.title}</p>
                      <p className="text-[10px] text-muted-foreground truncate mt-0.5">{vlog.description}</p>
                    </div>
                  </div>
                );
              })}
              {/* More to come */}
              <div
                className="shrink-0 glass-card overflow-hidden flex items-center justify-center w-[140px] md:w-[160px] opacity-50"
                style={{ scrollSnapAlign: "center" }}
              >
                <p className="text-xs text-muted-foreground text-center px-4">more to come!!</p>
              </div>
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

        <div className="-mx-6 md:-mx-[calc((100vw-64rem)/2+1.5rem)] h-[1.5px] bg-white/15 mb-20" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }} />

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
