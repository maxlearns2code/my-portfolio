import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import Projects from "./containers/Projects";
import Skills from "./containers/Skills";

export default function Main() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
