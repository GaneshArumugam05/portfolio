import { motion, useReducedMotion } from "framer-motion";
import { Download, Github, Linkedin, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import profileImg from "../assets/my_Profile/GaneshPorfolioImg1.webp";
import resume from "../assets/Ganesh_A_resume_2026.pdf";

export default function Home() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      role="region"
      aria-label="Ganesh Arumugam homepage introduction"
      className="relative min-h-screen flex items-center
      pt-24 sm:pt-28 lg:pt-32
      bg-background-light dark:bg-background-dark
      transition-colors duration-500 overflow-hidden"
    >
      <Helmet>
        <title>Ganesh Arumugam | React Frontend Developer</title>
        <meta
          name="description"
          content="Ganesh Arumugam — React Frontend Developer specializing in React.js, JavaScript, Tailwind CSS, and modern web applications."
        />
        <link
          rel="canonical"
          href="https://portfolio-ashen-rho-rixbfcfhss.vercel.app/"
        />
      </Helmet>

      <div
        className="max-w-7xl mx-auto
        px-5 sm:px-6 lg:px-8
        grid grid-cols-1 lg:grid-cols-2
        gap-12 lg:gap-16
        items-center relative z-10"
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
          className="space-y-6 text-center lg:text-left"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center justify-center lg:justify-start
            gap-2 px-4 py-2
            rounded-full glass text-primary
            font-mono text-sm sm:text-base"
          >
            React Frontend Developer
          </motion.span>

          {/* MAIN TITLE */}
          <motion.h1
            variants={fadeUp}
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-4xl
            xl:text-5xl
            font-extrabold leading-tight"
          >
            Ganesh Arumugam
            <span className="block text-primary">
              React Frontend Developer
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="
            text-muted-light dark:text-muted-dark
            max-w-xl mx-auto lg:mx-0
            text-base sm:text-lg
            leading-relaxed"
          >
            Hi, I’m <strong>Ganesh Arumugam</strong>, a professional React
            Frontend Developer with <strong>1.5+ years</strong> of experience
            building scalable, responsive, and high-performance web
            applications using React.js, Tailwind CSS, and modern JavaScript.
          </motion.p>

          {/* Hidden SEO */}
          <p className="sr-only">
            Ganesh Arumugam is a React Frontend Developer specializing in
            React.js, JavaScript, Tailwind CSS, and modern UI development.
          </p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              className="
              inline-flex items-center gap-2
              px-6 py-3
              rounded-full
              bg-primary text-white
              shadow-lg
              text-sm sm:text-base
              transition-all duration-300"
            >
              View Projects
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href={resume}
              download
              className="
              inline-flex items-center gap-2
              px-6 py-3
              rounded-full
              glass shadow-md
              text-sm sm:text-base
              transition-all duration-300"
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center lg:justify-start gap-5 pt-2"
          >
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://www.linkedin.com/in/ganesharumugam05/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ganesh Arumugam LinkedIn"
              className="
              p-3 rounded-full glass
              hover:text-primary
              transition-colors duration-300"
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://github.com/ganesharumugam05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ganesh Arumugam GitHub"
              className="
              p-3 rounded-full glass
              hover:text-primary
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
          className="relative flex justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            src={profileImg}
            alt="Ganesh Arumugam React Frontend Developer portrait"
            loading="eager"
            className="
            w-full
            max-w-[260px]
            sm:max-w-[320px]
            md:max-w-[360px]
            lg:max-w-[380px]
            xl:max-w-[420px]
            rounded-3xl
            shadow-glow
            object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}