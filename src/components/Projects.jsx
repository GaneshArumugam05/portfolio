import { ExternalLink, Github } from "lucide-react";

// Local asset imports
import DashboardImg from "../assets/projects_logo/dashboard_thumbnail.png";
import FoodRecipeImg from "../assets/projects_logo/foodrecipe_thumbnail.png";
import GymImg from "../assets/projects_logo/Gymlandingpage_thumbnail01.png";
import EcommerceImg from "../assets/projects_logo/ROpurifier_thumbnail.png";

const projects = [
  {
    title: "Food Recipe App",
    description:
      "Recipe application with search functionality, responsive layout, and interactive UI for discovering new recipes.",
    tech: ["React", "Tailwind CSS", "API Integration"],
    github: "https://github.com/GaneshArumugam05/food-recipe.git",
    live: "https://ganesharumugam05.github.io/food-recipe/",
    thumbnail: FoodRecipeImg,
    status: "completed",
  },

  {
    title: "Admin Dashboard Template",
    description:
      "A fully responsive admin dashboard with charts, KPIs, role-based navigation, and modern UI built using React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Recharts", "Vite"],
    github: "https://github.com/GaneshArumugam05/dashboard",
    live: "https://ganesharumugam05.github.io/dashboard/",
    thumbnail: DashboardImg,
    status: "completed",
  },

  {
    title: "Gym Landing Page",
    description:
      "Modern single-page gym website with smooth animations, responsive sections, and high-conversion UI. Built as a marketing-focused landing page with Framer Motion animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/GaneshArumugam05/gym-landing-page",
    live: "https://ganesharumugam05.github.io/gym-landing-page/",
    thumbnail: GymImg,
    status: "completed",
  },

  {
    title: "E-Commerce Website",
    description:
      "Frontend e-commerce application with product listing, cart UI, authentication screens, and responsive layout. Currently under active development.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/PTHARRISH/RO-Purifier.git",
    live: "#",
    thumbnail: EcommerceImg,
    status: "in-progress",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group glass p-6 flex flex-col justify-between
                         hover:shadow-glow transition-all duration-300 animate-fade"
            >
              {/* Thumbnail */}
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover
                             transition-transform duration-500
                             group-hover:scale-110"
                />

                {/* In Progress Badge */}
                {project.status === "in-progress" && (
                  <span
                    className="absolute top-3 right-3 text-xs font-medium
                                   px-3 py-1 rounded-full
                                   bg-yellow-500/90 text-black"
                  >
                    In Progress
                  </span>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-sm text-muted-light dark:text-muted-dark mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full
                                 bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BUTTON ACTIONS */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 
                             px-6 py-3 rounded-xl bg-slate-100 dark:text-black
                             hover:bg-slate-300 dark:hover:bg-slate-400  text-foreground
                             font-medium text-sm shadow-md hover:shadow-glow
                             transition-all duration-300"
                >
                  <Github size={16} />
                  View Code
                </a>

                {project.live !== "#" ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 
                               px-6 py-3 rounded-xl bg-primary/60 dark:bg-primary/60
                               hover:bg-primary dark:hover:bg-teal-500 hover:text-white text-foreground
                               font-medium text-sm shadow-md hover:shadow-glow
                               transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center gap-2 
                               px-6 py-3 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 
                               text-muted-light dark:text-muted-dark text-sm
                               font-medium cursor-not-allowed"
                  >
                    <ExternalLink size={16} />
                    Live Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
