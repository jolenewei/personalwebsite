import { Code, Database, Layers, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "languages",
      skills: ["Python", "C++", "C", "Java", "JavaScript", "TypeScript", "SQL"],
    },
    {
      icon: Database,
      title: "frameworks & libraries",
      skills: ["React", "Angular", "Node.js", "Express", "FastAPI", "MongoDB", "Firebase", "Chart.js"],
    },
    {
      icon: Layers,
      title: "tools",
      skills: ["Git", "GitHub", "Docker", "Docker Compose", "PostgreSQL", "Vite", "Chrome Extension APIs", "Unix/Linux"],
    },
    {
      icon: Cpu,
      title: "ml / other",
      skills: ["OpenAI API", "LLM-based Evaluation", "Temporal", "Logfire", "scikit-learn", "NumPy"],
    },
  ];

  return (
    <section id="skills" className="px-6 py-20 md:py-32 relative">
      <div className="absolute top-32 right-10 w-[1px] h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
      <div className="absolute bottom-20 right-8 md:right-16 text-[10px] text-white/[0.04] font-mono rotate-90 hidden md:block">
        SKILLS — 03
      </div>

      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8 fade-up">
          03 / skills
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-12 leading-tight fade-up">
          tools &<span className="text-muted-foreground/40"> technologies</span>
        </h2>

        <div className="space-y-6 fade-up fade-up-delay-1">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index}>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                  <h3 className="text-sm font-bold">{category.title}</h3>
                  <div className="flex-1 h-px bg-border/30 ml-1" />
                </div>
                <div className="flex flex-wrap gap-1.5 pl-6">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full text-xs border border-white/12 text-muted-foreground hover:bg-white hover:text-black hover:border-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
