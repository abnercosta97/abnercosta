import Hero from "./sections/Hero/Hero";
import Navbar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Publications from "./sections/Publications/Publications";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Publications />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Home;
