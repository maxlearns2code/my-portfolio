import Projectsitems from "../components/Projectsitems";
import eventsImg from "/public/assets/projects/724events.webp";
import argentbankImg from "/public/assets/projects/argentbank.webp";
import bookiImg from "/public/assets/projects/booki.webp";
import kasaImg from "/public/assets/projects/kasa.webp";
import myportfolioImg from "/public/assets/projects/myportfolio.webp";
import ninacarducciImg from "/public/assets/projects/ninacarducci.webp";
import ohmyfoodImg from "/public/assets/projects/ohmyfood.webp";
import sophiebluelImg from "/public/assets/projects/sophiebluel.webp";

const Projects = () => {
  return (
    <section id="projects" className="w-full px-10 pt-10">
      <div className="max-w-[1440px] mx-auto pt-14">
        <p className="uppercase text-xl tracking-widest text-tertiary-color dark:text-quaternary-color">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Projectsitems
            title="Booki"
            backgroungImg={bookiImg}
            alt="representation of booki project"
            description="Booki is a landing page for a
            booking website, I used HTML and CSS to build it."
            projectUrl="/projects/booki"
          />
          <Projectsitems
            title="Ohmyfood"
            backgroungImg={ohmyfoodImg}
            alt="representation of ohmyfood project"
            description=""
            projectUrl="/projects/ohmyfood"
          />
          <Projectsitems
            title="Sophie Bluel"
            backgroungImg={sophiebluelImg}
            alt="representation of sophie bluel project"
            description=""
            projectUrl="/projects/sophiebluel"
          />
          <Projectsitems
            title="Kasa"
            backgroungImg={kasaImg}
            alt="representation of kasa project"
            description=""
            projectUrl="/projects/kasa"
          />
          <Projectsitems
            title="Nina Carducci"
            backgroungImg={ninacarducciImg}
            alt="representation of Nina Carducci project"
            description=""
            projectUrl="/projects/ninacarducci"
          />
          <Projectsitems
            title="724 Events"
            backgroungImg={eventsImg}
            alt="representation of 724 Events project"
            description=""
            projectUrl="/projects/724events"
          />
          <Projectsitems
            title="Argent Bank"
            backgroungImg={argentbankImg}
            alt="representation of Argent Bank project"
            description=""
            projectUrl="/projects/argentbank"
          />
          <Projectsitems
            title="My portfolio"
            backgroungImg={myportfolioImg}
            alt="representation of My portfolio project"
            description=""
            projectUrl="/projects/myportfolio"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
