
import Home from "./content/home";
import Contact from "./content/contact";
import Projects from "./content/projects";
import Services from "./content/services";
import Testimonials from "./content/testimonials";
import About from "./content/about";


export default function Landing() {
  return (
    <div className="">
      <Home />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}
