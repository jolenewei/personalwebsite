import { Monitor } from "lucide-react";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Monitor className="w-16 h-16 mx-auto mb-6" strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Alex Johnson</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Computer Science Student passionate about building beautiful and functional web applications
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md transition-colors"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-border bg-background hover:bg-muted px-6 py-3 rounded-md transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
