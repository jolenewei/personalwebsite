import { Monitor } from "lucide-react";

const About = () => {

  return (
    <section id="about" className="py-20 bg-muted min-h-screen pt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">about me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            here's a little about my journey and what i'm passionate about.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-background rounded-lg p-8 aspect-[4/3] flex items-center justify-center">
            <div className="text-center">
              <Monitor className="w-24 h-24 mx-auto mb-4 text-muted-foreground" strokeWidth={1} />
              <p className="text-muted-foreground">clean coding workspace</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">my journey</h3>
            <p className="text-muted-foreground mb-6">
              i'm a passionate computer science student who loves to work on new projects and meet like-minded people. my fascination on computer science started with my enjoyment for problem-solving and creativity, and i love how easy it is to make a positive impact with just a few lines of code. i aspire to work on projects that initate change and improve people's lives!
            </p>
            <p className="text-muted-foreground">
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
