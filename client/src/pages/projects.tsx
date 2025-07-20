import { Globe, Cloud, ShoppingBag, Terminal, Smartphone, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      icon: Globe,
      title: "tetris game",
      description: "A full-stack productivity application built with React and Node.js featuring real-time collaboration and intuitive task organization.",
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      icon: Cloud,
      title: "typing test",
      description: "A responsive weather application with beautiful visualizations and location-based forecasts using modern web APIs.",
      tags: ["JavaScript", "CSS3", "API"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Platform",
      description: "A secure online shopping platform with payment integration, inventory management, and admin dashboard functionality.",
      tags: ["Vue.js", "Python", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      icon: Terminal,
      title: "Code Editor Extension",
      description: "A VS Code extension that enhances developer productivity with smart code suggestions and automated documentation generation.",
      tags: ["TypeScript", "VS Code API", "Node.js"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      icon: Smartphone,
      title: "Fitness Tracker App",
      description: "A mobile-first fitness tracking application with workout logging, progress visualization, and social features.",
      tags: ["React Native", "Firebase", "Redux"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      icon: BarChart3,
      title: "Data Visualization Tool",
      description: "An interactive data visualization platform for analyzing and presenting complex datasets with beautiful charts and graphs.",
      tags: ["D3.js", "Python", "Flask"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 min-h-screen pt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">my projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            check out what i'm currently working on and what i've built in the past!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="bg-muted group hover:shadow-lg transition-shadow duration-300">
                <div className="bg-background p-8 aspect-[4/3] flex items-center justify-center">
                  <Icon className="w-16 h-16 text-muted-foreground" strokeWidth={1} />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Icon className="w-5 h-5 mr-2" strokeWidth={2} />
                    <h3 className="font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="default" className="bg-primary text-primary-foreground text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.demoLink} className="text-sm hover:underline">
                      View Demo
                    </a>
                    <a href={project.githubLink} className="text-sm hover:underline">
                      GitHub
                    </a>
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

export default Projects;
