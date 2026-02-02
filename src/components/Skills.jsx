import { motion, useReducedMotion } from "framer-motion";
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
  Ruler,
} from "lucide-react";

/* Skill icons */
const skillIcons = {
  "React.js": Code2,
  "JavaScript (ES6+)": Braces,
  HTML5: Code,
  CSS3: Paintbrush,
  "Tailwind CSS": Layout,
  "Framer Motion": Sparkles,
  "Responsive Design": Monitor,
  "Figma to Code": Palette,
  "Pixel Perfect UI": Ruler,
  "Reusable Component": Layers,
  "Dark / Light Theme": SunMoon,
  "Git & GitHub": GitBranch,
  Vite: Package,
  npm: Package,
  "VS Code": Code,
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
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="py-28 bg-background-light dark:bg-background-dark transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Skills
        </motion.h2>

        {/* GRID */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: reduceMotion ? 0 : index * 0.08,
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="glass-strong p-6 rounded-2xl shadow-lg 
              transition-transform hover:-translate-y-1"
            >
              {/* ICON + TITLE */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/20 rounded-full text-primary">
                  <group.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {group.title}
                </h3>
              </div>

              {/* SKILLS LIST */}
              <div className="flex flex-wrap gap-3 mt-3">
                {group.items.map((skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <span
                      key={skill}
                      className="flex items-center gap-2 px-3 py-1.5 
                      rounded-full bg-muted/30 text-foreground 
                      border border-border text-sm 
                      hover:bg-primary hover:text-white 
                      transition-colors duration-300"
                    >
                      {Icon && <Icon size={14} />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
