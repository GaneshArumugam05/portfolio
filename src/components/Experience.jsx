import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "ThirdI Tech",
    location: "Chennai",
    period: "Jan 2025 – Present",
    points: [
      "Developed responsive web apps using React.js & Tailwind CSS with reusable components.",
      "Built role-based dashboards & authentication flows using React Router and Context API.",
      "Collaborated with UI/UX designers to implement Figma designs.",
      "Integrated REST APIs and handled dynamic data rendering.",
      "Improved app performance and UI consistency across devices.",
    ],
    current: true,
    technologies: ["React", "Tailwind CSS", "React Router", "Context API"],
  },
  {
    role: "Frontend Developer Intern",
    company: "ThirdI Tech",
    location: "Chennai",
    period: "May 2024 – Oct 2024",
    points: [
      "Assisted in building React components and maintaining existing modules.",
      "Improved responsiveness and accessibility across pages.",
      "Learned Git workflows, code reviews, and real-world dev practices.",
      "Collaborated with senior developers to optimize UI features.",
    ],
    current: false,
    technologies: ["React", "Tailwind CSS", "Git", "UI/UX Collaboration"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 relative overflow-hidden font-sans"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-center md:text-left">
          <span className="text-sm text-secondary-foreground font-medium tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-4 text-secondary-foreground leading-tight">
            My Experience{" "}
            <span className="font-serif italic font-normal">
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base max-w-2xl mx-auto md:mx-0">
            A timeline of my professional growth, from intern to frontend
            developer contributing to real-world projects.
          </p>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="glass p-6 sm:p-8 rounded-2xl border border-primary/30 hover:border-primary/50 hover:shadow-xl transition-all duration-500 mx-auto max-w-md relative">
                {exp.current && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full animate-ping shadow-md" />
                )}
                <span className="text-xs sm:text-sm text-primary font-bold tracking-wider inline-block px-3 py-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full backdrop-blur-sm border border-primary/40">
                  {exp.period}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold mt-3 text-secondary-foreground">
                  {exp.role}
                </h3>
                <p className="text-muted-foreground mt-1 font-medium text-sm">
                  {exp.company} · {exp.location}
                </p>

                <div className="mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {exp.points.map((point, i) => (
                    <p key={i}>{point}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-4 pt-2 border-t border-primary/20">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs sm:text-xs text-primary font-bold tracking-wider inline-block px-3 py-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full backdrop-blur-sm border border-primary/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-primary/90 via-primary/50 to-primary/20 -translate-x-1/2 z-0" />

          <div className="space-y-20">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  className="relative flex items-start justify-between"
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                >
                  {/* Dot */}
                  <div className="absolute left-1/2 top-6 w-6 h-6 bg-primary rounded-full shadow-md -translate-x-1/2 z-10 flex items-center justify-center">
                    {exp.current && (
                      <span className="w-2 h-2 bg-primary rounded-full animate-ping absolute opacity-70" />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`glass p-6 sm:p-8 rounded-2xl border border-primary/30 hover:border-primary/50 hover:shadow-xl transition-all duration-500 backdrop-blur-md max-w-lg w-[45%] ${
  isLeft ? "mr-auto text-left" : "ml-auto text-left"
}`}
                  >
                    <span className="text-xs sm:text-sm text-primary font-bold tracking-wider inline-block px-3 py-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full backdrop-blur-sm border border-primary/40">
                      {exp.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mt-3 mb-2 text-secondary-foreground leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground mb-4 font-medium text-sm opacity-90">
                      {exp.company} · {exp.location}
                    </p>

                    <div className="space-y-2 text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.points.map((point, i) => (
                        <p key={i}>{point}</p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-primary/20">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs sm:text-sm text-primary font-bold tracking-wider inline-block px-3 py-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full backdrop-blur-sm border border-primary/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
