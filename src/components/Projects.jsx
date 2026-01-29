import { ExternalLink, Github } from "lucide-react";

// Local asset imports
import DashboardImg from "../assets/projects_logo/dashboard_thumbnail.png";
import FoodRecipeImg from "../assets/projects_logo/foodrecipe_thumbnail.png";
import EcommerceImg from "../assets/projects_logo/ropurifier_thumbnail.png";

const projects = [
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
                  <span className="absolute top-3 right-3 text-xs font-medium
                                   px-3 py-1 rounded-full
                                   bg-yellow-500/90 text-black">
                    In Progress
                  </span>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-light dark:text-muted-dark mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
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

              {/* Actions */}
              <div className="flex gap-4 mt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm
                             hover:text-primary transition"
                >
                  <Github size={16} />
                  Code
                </a>

                {project.live !== "#" ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm
                               hover:text-primary transition"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm
                                   text-muted-light cursor-not-allowed">
                    <ExternalLink size={16} />
                    Live Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
