import { Code, Database, Palette, Layers, Globe, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js"]
    },
    {
      icon: Database,
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "Python", "Flask", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
    },
    {
      icon: Layers,
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Linux", "VS Code", "Figma", "Postman", "NPM"]
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      skills: ["Responsive Design", "Material UI", "Bootstrap", "Wireframing", "Prototyping", "User Research"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["Progressive Web Apps", "WebSockets", "OAuth", "JWT", "CORS", "HTTP/HTTPS", "DNS"]
    },
    {
      icon: Cpu,
      title: "Programming Concepts",
      skills: ["Data Structures", "Algorithms", "OOP", "Design Patterns", "Testing", "Debugging", "Version Control"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-background hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon className="w-6 h-6 mr-3 text-primary" strokeWidth={2} />
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs py-1 px-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;