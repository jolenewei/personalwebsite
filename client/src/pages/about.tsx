import { Monitor } from "lucide-react";

const About = () => {

  return (
    <section id="about" className="py-20 bg-muted min-h-screen pt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting to know me better - my journey, skills, and what drives my passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-background rounded-lg p-8 aspect-[4/3] flex items-center justify-center">
            <div className="text-center">
              <Monitor className="w-24 h-24 mx-auto mb-4 text-muted-foreground" strokeWidth={1} />
              <p className="text-muted-foreground">Clean coding workspace</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate Computer Science student at University College with a love for creating digital solutions that make a difference. My journey began with curiosity about how things work behind the screen, and it has evolved into a deep appreciation for clean code and user-centered design.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or enjoying a good cup of coffee while planning my next big project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
