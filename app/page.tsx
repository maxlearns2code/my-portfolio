import About from "./containers/About";
import Contact from "./containers/Contact";
import Home from "./containers/Home";
import Projects from "./containers/Projects";
import Skills from "./containers/Skills";
import ChatBot from "./components/ChatBot";

export default function Main() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ChatBot />
    </>
  );
}

