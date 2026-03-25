import { useState, useEffect } from "react";
import { Search, MousePointer2, ImageIcon, Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  const [typed, setTyped] = useState("");
  const fullText = "my portfolio";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-20">
      {/* Hero area */}
      <div className="relative">
        {/* Full-width hero image placeholder */}
        <div className="w-full h-[55vh] md:h-[70vh] bg-neutral-950 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <ImageIcon className="w-16 h-16 mx-auto mb-3 opacity-10" />
              <p className="text-sm opacity-10">horizontal hero photo</p>
            </div>
          </div>

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 z-10">
            {/* Top row - search bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 w-fit">
                <Search className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-sm cursor-blink">{typed}</span>
              </div>
            </div>

            {/* Bottom - name + description side by side */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="text-5xl md:text-8xl font-extrabold leading-[0.85] tracking-tight text-white drop-shadow-2xl">
                  jolene wei
                </h1>
                <p className="text-white/50 text-sm md:text-base mt-3 max-w-sm md:ml-6">
                  computer science student at uc santa cruz — i love building
                  things that make a difference. always open to new opportunities.
                </p>
              </div>

              {/* Social links */}
              <div className="flex gap-3 shrink-0">
                <a href="https://github.com/jolenewei" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-xs font-medium hover:bg-white hover:text-black transition-all">
                  <Github className="w-3.5 h-3.5" /> github
                </a>
                <a href="https://www.linkedin.com/in/jolene-wei" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-xs font-medium hover:bg-white hover:text-black transition-all">
                  <Linkedin className="w-3.5 h-3.5" /> linkedin
                </a>
                <a href="mailto:jwei57@ucsc.edu"
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-xs font-medium hover:bg-white hover:text-black transition-all">
                  <Mail className="w-3.5 h-3.5" /> email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Photo strip */}
        <div className="grid grid-cols-4 md:grid-cols-6 border-t border-white/15">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className={`h-[100px] md:h-[140px] bg-neutral-950 flex items-center justify-center border-r border-white/15 last:border-r-0 ${
                i > 4 ? "hidden md:flex" : ""
              }`}
            >
              <ImageIcon className="w-4 h-4 opacity-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
