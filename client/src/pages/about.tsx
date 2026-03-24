import { Heart, Camera, Gamepad2, Music, Palette, BookOpen, Plane, Coffee, ImageIcon } from "lucide-react";
import VinylPlayer from "@/components/vinyl-player";

const About = () => {
  const hobbies = [
    { icon: Music, name: "music" },
    { icon: Palette, name: "design" },
    { icon: Gamepad2, name: "gaming" },
    { icon: BookOpen, name: "reading" },
    { icon: Plane, name: "travel" },
    { icon: Coffee, name: "coffee" },
    { icon: Camera, name: "photography" },
    { icon: Heart, name: "volunteering" },
  ];

  return (
    <section id="about" className="px-6 py-20 md:py-32 relative">
      {/* Decorative elements */}
      <div className="absolute top-32 right-8 md:right-16 text-[10px] text-white/[0.04] font-mono rotate-90 hidden md:block">
        ABOUT — 01
      </div>
      <div className="absolute bottom-40 left-6 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8 fade-up">
          01 / about
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-12 leading-tight fade-up">
          a little about
          <span className="text-muted-foreground/40"> me</span>
        </h2>

        {/* Main content with polaroids */}
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

          {/* Polaroid photos - proper size, sharp corners */}
          <div className="mt-10 md:mt-0 md:absolute md:top-[-30px] md:right-0 flex gap-6 fade-up fade-up-delay-2">
            <div className="polaroid relative" style={{ '--rotate': '-5deg' } as React.CSSProperties}>
              <div className="polaroid-inner w-[160px] md:w-[200px] bg-neutral-200">
                <ImageIcon className="w-8 h-8 text-neutral-400" />
              </div>
              <p className="absolute bottom-3 left-0 right-0 text-[11px] text-neutral-400 text-center font-mono">
                photo 01
              </p>
            </div>
            <div className="polaroid relative mt-8" style={{ '--rotate': '4deg' } as React.CSSProperties}>
              <div className="polaroid-inner w-[160px] md:w-[200px] bg-neutral-200">
                <ImageIcon className="w-8 h-8 text-neutral-400" />
              </div>
              <p className="absolute bottom-3 left-0 right-0 text-[11px] text-neutral-400 text-center font-mono">
                photo 02
              </p>
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div className="mb-16 fade-up fade-up-delay-2">
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

        {/* Hobby polaroid strip */}
        <div className="mb-20 flex gap-5 overflow-x-auto pb-4 fade-up fade-up-delay-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="polaroid relative shrink-0"
              style={{ '--rotate': `${(i % 2 === 0 ? 1 : -1) * (2 + i)}deg` } as React.CSSProperties}
            >
              <div className="polaroid-inner w-[140px] md:w-[170px] bg-neutral-200">
                <ImageIcon className="w-6 h-6 text-neutral-400" />
              </div>
              <p className="absolute bottom-3 left-0 right-0 text-[10px] text-neutral-400 text-center font-mono">
                {["hobby pic", "with friends", "fav place", "adventure"][i - 1]}
              </p>
            </div>
          ))}
        </div>

        {/* Music section with vinyl */}
        <div className="fade-up fade-up-delay-3">
          <div className="flex items-center gap-2 mb-8">
            <Music className="w-4 h-4 text-muted-foreground" />
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
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
