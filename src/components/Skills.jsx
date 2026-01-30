import { motion } from "framer-motion";
import {
  Code,
  Code2,
  Palette,
  Wrench,
  Layers,
  Braces,
  Layout,
  Paintbrush,
  SunMoon,
  Sparkles,
  GitBranch,
  Package,
  Monitor,
  ShieldCheck,
  Gauge,
  LayoutDashboard,
  Plug,
  Ruler, // Pixel Perfect
} from "lucide-react";

/* Skill icons - ALL WORKING */
const skillIcons = {
  // Frontend Development
  "React.js": Code2,
  "JavaScript (ES6+)": Braces,
  HTML5: Code,
  CSS3: Paintbrush,
  "Tailwind CSS": Layout,
  "Framer Motion": Sparkles,

  // UI Implementation
  "Responsive Design": Monitor,
  "Figma to Code": Palette,
  "Pixel Perfect UI": Ruler,
  "Reusable Component": Layers,
  "Dark / Light Theme": SunMoon,
  "Micro Animations": Sparkles,

  // Tools & Workflow
  "Git & GitHub": GitBranch,
  Vite: Package,
  npm: Package,
  "VS Code": Code,

  // Engineering Practices
  "API Integration": Plug,
  "Role Based Access": ShieldCheck,
  "Dashboard UI": LayoutDashboard,
  "Performance Optimization": Gauge,
};

/* Skills data */
const skills = [
  {
    title: "Frontend Development",
    icon: Code,
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "UI Implementation",
    icon: Palette,
    items: [
      "Responsive Design",
      "Figma to Code",
      "Pixel Perfect UI",
      "Reusable Component",
      "Dark / Light Theme",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    items: ["Git & GitHub", "Vite", "npm", "VS Code"],
  },
  {
    title: "Engineering Practices",
    icon: Layers,
    items: [
      "API Integration",
      "Role Based Access",
      "Dashboard UI",
      "Performance Optimization",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-background-light dark:bg-background-dark transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-strong p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/20 rounded-full text-primary">
                  <group.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {group.title}
                </h3>
              </div>

              {/* Skills list */}
              <motion.div
                className="flex flex-wrap gap-3 mt-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {group.items.map((skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/30 text-foreground border border-border hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                      variants={{
                        hidden: { opacity: 0, y: 20, scale: 0.9 },
                        visible: { opacity: 1, y: 0, scale: 1 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                    >
                      {Icon && <Icon size={14} />}
                      {skill}
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
