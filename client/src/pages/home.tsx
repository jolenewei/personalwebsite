import { Monitor } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Monitor className="w-16 h-16 mx-auto mb-6" strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Alex Johnson</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Computer Science Student passionate about building beautiful and functional web applications
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3">
              View My Work
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="px-6 py-3">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
