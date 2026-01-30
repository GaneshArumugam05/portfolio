import { motion } from "framer-motion";
import { Download, Github, Linkedin, ArrowRight } from "lucide-react";
import profileImg from "../assets/my_Profile/GaneshPorfolioImg1.png";
import resume from "../assets/Ganesh_A_resume_2026.pdf";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 bg-background-light dark:bg-background-dark transition-colors duration-500 overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-teal-300/10 rounded-full blur-3xl -translate-x-1/2 z-0"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-6"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass 
              text-lg lg:text-xl xl:text-2xl text-primary font-mono"
          >
            React Frontend Developer
          </motion.span>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-2xl md:text-4xl font-extrabold leading-tight"
          >
            Hi, I’m <span className="text-primary">Ganesh Arumugam</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-muted-light dark:text-muted-dark max-w-xl text-lg sm:text-xl leading-relaxed"
          >
            Frontend Developer with <strong>1.5 years</strong> of experience
            building scalable, responsive, and high-performance web applications
            using <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and
            modern JavaScript.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resume}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass shadow-md hover:shadow-lg transition"
            >
              <Download size={18} /> Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex gap-4 mt-4"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com/in/ganesharumugam05"
              target="_blank"
              className="p-3 rounded-full glass hover:text-primary transition"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/GaneshArumugam05"
              target="_blank"
              className="p-3 rounded-full glass hover:text-primary transition"
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"
          />
          <img
            src={profileImg}
            alt="Ganesh Arumugam"
            className="relative z-10 max-w-sm rounded-3xl shadow-glow hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
