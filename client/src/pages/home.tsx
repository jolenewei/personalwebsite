import { useState, useEffect } from "react";
import { Search, Github, Linkedin, Mail, Star, Heart } from "lucide-react";
import FloatingComputer from "@/components/floating-computer";

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
      <div className="relative">
        <div className="w-full h-[55vh] md:h-[70vh] bg-black relative overflow-hidden">

          {/* Code text floating out from the computer area */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
            {/* Right cluster - near computer */}
            <div className="absolute bottom-[18%] right-[30%] text-[13px] font-mono code-float" style={{ animationDelay: "0s", color: "rgba(100,180,255,0.35)" }}>
              {"const portfolio = {"}
            </div>
            <div className="absolute bottom-[26%] right-[24%] text-[13px] font-mono code-float" style={{ animationDelay: "0.6s", color: "rgba(150,210,255,0.3)" }}>
              {"  name: 'jolene',"}
            </div>
            <div className="absolute bottom-[34%] right-[32%] text-[13px] font-mono code-float" style={{ animationDelay: "1.2s", color: "rgba(80,160,240,0.28)" }}>
              {"  passion: 'building',"}
            </div>
            <div className="absolute bottom-[42%] right-[22%] text-[12px] font-mono code-float" style={{ animationDelay: "1.8s", color: "rgba(120,195,255,0.25)" }}>
              {"  skills: ['react', 'ts'],"}
            </div>
            <div className="absolute bottom-[50%] right-[28%] text-[12px] font-mono code-float" style={{ animationDelay: "2.4s", color: "rgba(70,145,230,0.22)" }}>
              {"  open: true,"}
            </div>
            <div className="absolute bottom-[58%] right-[25%] text-[12px] font-mono code-float" style={{ animationDelay: "3s", color: "rgba(100,175,255,0.18)" }}>
              {"};"}
            </div>

            {/* Middle area */}
            <div className="absolute bottom-[22%] right-[42%] text-[13px] font-mono code-float" style={{ animationDelay: "0.3s", color: "rgba(80,170,255,0.3)" }}>
              {"import React from 'react'"}
            </div>
            <div className="absolute bottom-[38%] right-[38%] text-[14px] font-mono code-float" style={{ animationDelay: "1.5s", color: "rgba(140,210,255,0.25)" }}>
              {"<App />"}
            </div>
            <div className="absolute bottom-[52%] right-[40%] text-[12px] font-mono code-float" style={{ animationDelay: "2.1s", color: "rgba(100,180,245,0.2)" }}>
              {"export default Home"}
            </div>
            <div className="absolute bottom-[30%] right-[18%] text-[12px] font-mono code-float" style={{ animationDelay: "0.9s", color: "rgba(120,195,255,0.28)" }}>
              {"// hello world"}
            </div>

            {/* Center-left spread */}
            <div className="absolute bottom-[45%] right-[48%] text-[13px] font-mono code-float" style={{ animationDelay: "0.4s", color: "rgba(90,175,255,0.22)" }}>
              {"function build() {"}
            </div>
            <div className="absolute bottom-[55%] right-[44%] text-[12px] font-mono code-float" style={{ animationDelay: "1.1s", color: "rgba(130,200,255,0.18)" }}>
              {"  return <Design />;"}
            </div>
            <div className="absolute bottom-[63%] right-[50%] text-[11px] font-mono code-float" style={{ animationDelay: "2.7s", color: "rgba(70,155,240,0.15)" }}>
              {"}"}
            </div>
            <div className="absolute bottom-[35%] right-[52%] text-[12px] font-mono code-float" style={{ animationDelay: "1.8s", color: "rgba(110,190,255,0.2)" }}>
              {"await deploy()"}
            </div>
            <div className="absolute bottom-[48%] right-[55%] text-[11px] font-mono code-float" style={{ animationDelay: "2.3s", color: "rgba(80,165,245,0.16)" }}>
              {"npm run dev"}
            </div>
            <div className="absolute bottom-[60%] right-[35%] text-[11px] font-mono code-float" style={{ animationDelay: "3.2s", color: "rgba(100,180,255,0.14)" }}>
              {"git push origin main"}
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 z-10">
            {/* Top row - search bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 w-fit">
                <Search className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-sm cursor-blink">{typed}</span>
              </div>
            </div>

            {/* Floating pop-up bubbles */}
            <div className="absolute top-24 right-12 md:right-28 hidden md:block popup-float" style={{ animationDelay: "0.8s" }}>
              <div className="glass-card rounded-[18px] px-4 py-3 max-w-[200px]">
                <p className="text-[11px] text-white/50 leading-relaxed">
                  always building, always learning
                </p>
                <div className="flex gap-1 mt-2">
                  <Star className="w-3 h-3 text-white/20" />
                  <Star className="w-3 h-3 text-white/20" />
                  <Star className="w-3 h-3 text-white/20" />
                </div>
              </div>
            </div>

            <div className="absolute top-16 left-[55%] hidden md:block popup-float" style={{ animationDelay: "1.2s" }}>
              <div className="glass-card rounded-[18px] px-4 py-2.5 flex items-center gap-2">
                <Heart className="w-3 h-3 text-white/30" />
                <span className="text-[11px] text-white/50">open to opportunities</span>
              </div>
            </div>

            {/* 3D Computer that follows cursor */}
            <div className="absolute bottom-[4%] right-[3%] md:right-[5%] hidden md:block popup-float" style={{ animationDelay: "0.5s" }}>
              <FloatingComputer />
            </div>

            {/* Center area - name + description */}
            <div className="flex-1 flex flex-col justify-end pb-8">
              <div className="md:ml-[8%]">
                <h1 className="text-5xl md:text-8xl font-bold leading-[0.85] tracking-tight text-white drop-shadow-2xl">
                  jolene wei
                </h1>
                <p className="text-white/50 text-sm md:text-base mt-3 max-w-sm md:ml-10">
                  computer science student at uc santa cruz — i love building
                  things that make a difference. always open to new opportunities.
                </p>

                {/* Social links */}
                <div className="flex gap-3 mt-6 md:ml-10">
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
        </div>
      </div>
    </section>
  );
};

export default Home;
