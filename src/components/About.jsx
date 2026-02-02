import { motion, useReducedMotion } from "framer-motion";
import { User2, Lightbulb, PenTool, MapPin, Brain } from "lucide-react";

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-28 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            Get to know more about my background and passion
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="glass-strong rounded-3xl shadow-xl p-10 
          transition-transform hover:-translate-y-2"
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/20 rounded-full text-primary">
                  <User2 size={26} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Profile
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                I'm a passionate <strong>React Frontend Developer</strong> with{" "}
                <strong>1.5+ years</strong> of experience building scalable,
                modern web applications using React, Tailwind CSS, and modern
                JavaScript.
              </p>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                When I'm not coding, I enjoy exploring new technologies,
                contributing to open-source projects, and continuously improving
                my craft by learning industry best practices.
              </p>
            </div>

            {/* RIGHT HIGHLIGHTS */}
            <div className="space-y-6">
              {[
                {
                  icon: Lightbulb,
                  title: "Innovative",
                  desc: "Creative solutions for complex problems using modern technologies.",
                },
                {
                  icon: PenTool,
                  title: "Design Oriented",
                  desc: "Strong focus on clean UI, UX, and visual consistency.",
                },
                {
                  icon: MapPin,
                  title: "Clean Code",
                  desc: "Maintainable, scalable, and performance-focused codebases.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="flex items-start gap-4 p-4 
                  rounded-xl glass-strong shadow 
                  transition-transform hover:-translate-y-1"
                >
                  <item.icon
                    size={22}
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mt-16 max-w-4xl mx-auto 
            glass-strong p-12 rounded-3xl 
            bg-teal-600 text-white shadow-xl 
            transition-transform hover:-translate-y-2"
          >
            {!reduceMotion && (
              <Brain
                size={60}
                className="mx-auto mb-8 text-white drop-shadow-lg"
              />
            )}

            <h3 className="text-3xl font-bold mb-6">
              Ready to build something amazing together?
            </h3>
            <p className="text-lg md:text-xl">
              Let’s create digital experiences that users love and businesses
              grow from.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
