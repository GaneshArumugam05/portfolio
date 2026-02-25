import { motion, useReducedMotion } from "framer-motion";
import { Download, Github, Linkedin, ArrowRight } from "lucide-react";
import profileImg from "../assets/my_Profile/GaneshPorfolioImg1.webp";
import resume from "../assets/Ganesh_A_resume_2026.pdf";

export default function Home() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="home"
      role="region"
      aria-label="Ganesh Arumugam homepage introduction"
      className="relative min-h-screen flex items-center pt-32 
      bg-background-light dark:bg-background-dark 
      transition-colors duration-500 overflow-hidden"
    >
      <div
        className="max-w-7xl mx-auto px-6 
        grid lg:grid-cols-2 gap-16 items-center 
        relative z-10"
      >

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
          className="space-y-6"
        >

          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 
            rounded-full glass text-primary 
            font-mono text-base sm:text-lg"
          >
            React Frontend Developer
          </motion.span>

          {/* MAIN H1 */}
          <motion.h1
            variants={fadeUp}
            className="text-2xl md:text-4xl font-extrabold leading-tight"
          >
            Ganesh Arumugam | React Frontend Developer
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted-light dark:text-muted-dark 
            max-w-xl text-lg leading-relaxed"
          >
            Hi, I’m <strong>Ganesh Arumugam</strong>, a professional React Frontend Developer 
            with 1.5+ years of experience building scalable, responsive, 
            and high-performance web applications using React.js, Tailwind CSS, 
            and modern JavaScript.
          </motion.p>

          {/* Hidden SEO Boost */}
          <p className="sr-only">
            Ganesh Arumugam is a React Frontend Developer specializing in 
            React.js, JavaScript, Tailwind CSS, and modern UI development.
          </p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 
              rounded-full bg-primary text-white shadow-lg 
              transition-all duration-300"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              href={resume}
              download
              className="inline-flex items-center gap-2 px-6 py-3 
              rounded-full glass shadow-md 
              transition-all duration-300"
            >
              <Download size={18} /> Download CV
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeUp}
            className="flex gap-5 pt-2"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://www.linkedin.com/in/ganesharumugam05/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ganesh Arumugam LinkedIn"
              className="p-3 rounded-full glass hover:text-primary 
              transition-colors duration-300"
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://github.com/ganesharumugam05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ganesh Arumugam GitHub"
              className="p-3 rounded-full glass hover:text-primary 
              transition-colors duration-300"
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <motion.img
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            src={profileImg}
            alt="Ganesh Arumugam React Frontend Developer portrait"
            width="420"
            height="520"
            loading="eager"
            className="relative z-10 max-w-sm rounded-3xl shadow-glow"
          />
        </motion.div>

      </div>
    </section>
  );
}