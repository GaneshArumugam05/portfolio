import { motion, useReducedMotion } from "framer-motion";
import { Download, Github, Linkedin, ArrowRight } from "lucide-react";
import profileImg from "../assets/my_Profile/GaneshPorfolioImg1.webp";
import resume from "../assets/Ganesh_A_resume_2026.pdf";

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 
      bg-background-light dark:bg-background-dark 
      transition-colors duration-500 overflow-hidden"
    >
      {/* Background Glow (Optimized) */}
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/2 w-[480px] h-[480px] 
            bg-primary/10 rounded-full blur-3xl 
            -translate-x-1/2 -translate-y-1/2 z-0"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.1, opacity: 0.8 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/3 w-[380px] h-[380px] 
            bg-teal-300/10 rounded-full blur-3xl z-0"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.08, opacity: 0.7 }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
          />
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 
        grid lg:grid-cols-2 gap-16 items-center 
        relative z-10"
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="space-y-6"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-flex items-center gap-2 px-4 py-2 
            rounded-full glass text-primary 
            font-mono text-base sm:text-lg"
          >
            React Frontend Developer
          </motion.span>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-2xl md:text-4xl 
            font-extrabold leading-tight"
          >
            Hi, I’m{" "}
            <span className="text-primary">Ganesh Arumugam</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-muted-light dark:text-muted-dark 
            max-w-xl text-lg leading-relaxed"
          >
            Frontend Developer with <strong>1.5+ years</strong> of experience
            building scalable, responsive, and high-performance web applications
            using <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and
            modern JavaScript.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 
              rounded-full bg-primary text-white 
              shadow-lg hover:shadow-xl transition"
            >
              View Projects <ArrowRight size={18} />
            </a>

            <a
              href={resume}
              download
              className="inline-flex items-center gap-2 px-6 py-3 
              rounded-full glass shadow-md 
              hover:shadow-lg transition"
            >
              <Download size={18} /> Download CV
            </a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex gap-4 pt-2"
          >
            <a
              href="https://linkedin.com/in/ganesharumugam05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass 
              hover:text-primary transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/GaneshArumugam05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass 
              hover:text-primary transition"
            >
              <Github size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE (LCP OPTIMIZED) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center items-center"
        >
          {!reduceMotion && (
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 
              bg-primary/20 blur-3xl rounded-full"
            />
          )}

          <img
            src={profileImg}
            alt="Ganesh Arumugam - React Frontend Developer"
            width="420"
            height="520"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            className="relative z-10 max-w-sm 
            rounded-3xl shadow-glow"
          />
        </motion.div>
      </div>
    </section>
  );
}
