import { GraduationCap, Code, Briefcase, Server, Brain, FlaskConical, Sparkles } from "lucide-react";

const experiences = [
  {
    title: "UCSD Computer Science B.S.",
    org: "University of California, San Diego",
    date: "2026 — Expected 2028",
    description: "",
    icon: GraduationCap,
    tags: ["Computer Science"],
  },
  {
    title: "UCSC Computer Science B.S.",
    org: "University of California, Santa Cruz",
    date: "2024 — 2026",
    description: "Completed two years of my computer science degree before transferring. Coursework included data structures & algorithms, computer architecture, computer systems & C programming, and machine learning.",
    icon: GraduationCap,
    tags: ["Computer Science"],
  },
  {
    title: "Software Engineering Intern",
    org: "Argos",
    date: "March 2026 — Present",
    description: "Built a daily AI evaluation pipeline with Temporal, Logfire, and LLM-based judges to automatically assess model responses and post quality reports to Slack. Built end-to-end custom-field management for legal matters with FastAPI endpoints and a React/TypeScript settings interface.",
    icon: Sparkles,
    tags: ["Temporal", "FastAPI", "React", "LLM"],
  },
  {
    title: "Frontend Web Developer",
    org: "Tech4Good Lab",
    date: "March 2025 — Present",
    description: "Built the onboarding flow for Compass Goals, a goal-setting app used by 300+ students. Developed features for Timely, a meeting-scheduler app, using Angular and Firebase.",
    icon: Code,
    tags: ["Angular", "Firebase", "TypeScript"],
  },
  {
    title: "Backend Developer Intern",
    org: "SkipQ",
    date: "September — December 2025",
    description: "Built backend features in Node.js/TypeScript for a travel-retail platform, improving auth reliability and reducing failed logins by ~30%. Optimized PostgreSQL schemas, cutting duplicate-record issues by 50%.",
    icon: Server,
    tags: ["Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Research Assistant — Logic-LM",
    org: "AIEA Research Lab",
    date: "February 2026 — June 2026",
    description: "Developing Hybrid Note, a note-taking platform that uses vision-language models to process handwritten notes and integrate them with digital documents.",
    icon: Brain,
    tags: ["VLM", "NLP", "Research"],
  },
  {
    title: "Student Researcher",
    org: "ASDRP Research Program",
    date: "June — August 2022",
    description: "Built a Python pipeline to analyze brain-wave recordings (EEG data) for early autism spectrum disorder detection, including signal cleaning, feature extraction, and model training.",
    icon: FlaskConical,
    tags: ["Python", "scikit-learn", "NumPy", "EEG"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-20 md:py-32 relative">
      <div className="absolute top-32 left-8 md:left-16 text-[10px] text-white/[0.04] font-mono -rotate-90 hidden md:block">
        EXPERIENCE — 02
      </div>
      <div className="absolute bottom-40 right-6 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8 fade-up">
          02 / experience
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-16 leading-tight fade-up">
          my<span className="text-muted-foreground/40"> journey</span>
        </h2>

        {/* Timeline */}
        <div className="relative fade-up fade-up-delay-1">
          <div className="space-y-12 md:space-y-10">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              const isEven = i % 2 === 0;

              return (
                <div key={i} className="relative">
                  <div className={`md:w-[calc(60%)] ${isEven ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"}`}>
                    <div className="glass-card px-6 py-4 rounded-2xl">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-1">
                            {exp.date}
                          </p>
                          <h3 className="text-lg font-bold mb-0.5">{exp.title}</h3>
                          <p className="text-xs text-muted-foreground mb-3">{exp.org}</p>
                          {exp.description && (
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                              {exp.description}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-1.5">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-full text-[10px] border border-white/12 text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* End marker */}
          <div className="relative mt-12 md:flex md:justify-center">
            <div className="glass-card px-5 py-2.5 rounded-full flex items-center gap-2 w-fit">
              <Briefcase className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">more to come...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
