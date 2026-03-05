import { motion, useReducedMotion } from "framer-motion";
import { Download, Github, Linkedin, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import profileImg from "../assets/my_Profile/GaneshPorfolioImg1.webp";
import resume from "../assets/Ganesh_A_resume_2026.pdf";

export default function Home() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      role="region"
      aria-label="Ganesh Arumugam homepage introduction"
      className="min-h-screen flex flex-col items-center justify-center
      pt-16 sm:pt-20 lg:pt-24 xl:pt-28
      px-4 sm:px-6 lg:px-12
      bg-background-light dark:bg-background-dark
      transition-colors duration-500 py-12 lg:py-20"
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

      <div className="w-full max-w-7xl mx-auto">
        {/* MOBILE: Profile Image at TOP */}
        <div className="lg:hidden mb-8 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              src={profileImg}
              alt="Ganesh Arumugam"
              className="w-40 h-40 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full shadow-glow object-cover border-4 border-primary/20 ring-4 ring-background-light/50 dark:ring-background-dark/50"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 
             gap-12 lg:gap-20 xl:gap-24
             items-center justify-items-center lg:justify-items-center">
          
          {/* LEFT CONTENT - CENTERED EVERYWHERE */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            className="space-y-6 lg:space-y-8 xl:space-y-10 
             text-center lg:text-left w-full lg:w-auto max-w-lg mx-auto lg:mx-0"
          >
            {/* MAIN TITLE */}
            <motion.h1
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl
              font-black leading-tight tracking-tight"
            >
              Ganesh Arumugam
              <span className="block mt-3 lg:mt-4 text-primary font-bold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl">
                React Frontend Developer
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-muted-light dark:text-muted-dark
              text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl
              leading-relaxed max-w-md lg:max-w-lg mx-auto lg:mx-0"
            >
              Hi, I'm <strong className="text-foreground">Ganesh Arumugam</strong>, a professional React Frontend Developer with <strong className="text-primary font-bold">1.5+ years</strong> of experience building scalable, responsive web applications using React.js, Tailwind CSS & modern JavaScript.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 pt-4 lg:pt-6 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-white shadow-xl hover:shadow-2xl text-base sm:text-lg font-semibold transition-all duration-300 flex-1 sm:flex-none justify-center lg:justify-start min-h-[52px]"
              >
                View Projects
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href={resume}
                download
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass shadow-lg hover:shadow-xl border border-primary/20 hover:border-primary/40 text-base sm:text-lg font-semibold transition-all duration-300 flex-1 sm:flex-none justify-center lg:justify-start min-h-[52px]"
              >
                <Download size={20} />
                Download CV
              </motion.a>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center lg:justify-start gap-6 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://www.linkedin.com/in/ganesharumugam05/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ganesh Arumugam LinkedIn"
                className="p-3.5 rounded-xl glass hover:text-primary hover:bg-primary/10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://github.com/ganesharumugam05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ganesh Arumugam GitHub"
                className="p-3.5 rounded-xl glass hover:text-primary hover:bg-primary/10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Github size={22} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* DESKTOP: Profile Image - CENTERED */}
          <motion.div
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center items-center w-full"
          >
            <motion.div className="relative group">
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={profileImg}
                alt="Ganesh Arumugam"
                className="w-72 lg:w-80 xl:w-96 h-72 lg:h-80 xl:h-96 rounded-3xl shadow-glow object-cover ring-8 ring-background-light/30 dark:ring-background-dark/30 group-hover:ring-primary/20 transition-all duration-500 max-w-md mx-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
