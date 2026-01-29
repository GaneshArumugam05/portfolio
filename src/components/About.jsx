import { motion } from "framer-motion";
import { User2, MapPin, Lightbulb, PenTool, Brain } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            Get to know more about my background and passion
          </p>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-transform transform hover:-translate-y-2"
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: Profile */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/20 dark:bg-primary/30 rounded-full text-primary">
                  <User2 size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Profile
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg md:text-base">
                I'm a passionate <strong>React Frontend Developer</strong> with 1.5+ years of experience building digital solutions for businesses. My journey started with simple websites and has evolved into creating scalable, modern web applications using React, Tailwind CSS, and other cutting-edge technologies.
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg md:text-base">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge through blogs and tutorials. Continuous learning and pushing the boundaries of what's possible on the web are my driving forces.
              </p>
            </div>

            {/* Right: Highlights */}
            <div className="space-y-6">
              {[
                {
                  icon: Lightbulb,
                  title: "Innovative",
                  desc: "I love creating unique solutions to complex problems with cutting-edge technologies.",
                  delay: 0,
                },
                {
                  icon: PenTool,
                  title: "Design Oriented",
                  desc: "Beautiful design and user experience are at the heart of everything I create.",
                  delay: 0.1,
                },
                {
                  icon: MapPin,
                  title: "Clean Code",
                  desc: "I write maintainable, efficient code following best practices and modern patterns.",
                  delay: 0.2,
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl glass-strong shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
                >
                  <item.icon size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <motion.div
            className="text-center glass-strong p-12 rounded-3xl shadow-xl hover:shadow-glow transition transform hover:-translate-y-2 mt-16 max-w-4xl mx-auto bg-teal-600 text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Brain size={64} className="mx-auto mb-8 text-white drop-shadow-lg" />
            <h3 className="text-3xl font-bold mb-6">
              Ready to build something amazing together?
            </h3>
            <p className="text-xl mb-8">
              Let's create digital experiences that users love and businesses grow from.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
