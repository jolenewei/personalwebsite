import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Experience from "@/pages/experience";
import Skills from "@/pages/skills";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen flex flex-col relative bg-black">
          <Navigation />
          <main className="flex-1 relative z-10">
            <Home />
            <div className="w-full h-[1.5px] bg-white/15" />
            <Projects />
            <div className="w-full h-[1.5px] bg-white/15" />
            <Experience />
            <div className="w-full h-[1.5px] bg-white/15" />
            <Skills />
            <div className="w-full h-[1.5px] bg-white/15" />
            <About />
            <div className="w-full h-[1.5px] bg-white/15" />
            <Contact />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
