import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Home />
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;