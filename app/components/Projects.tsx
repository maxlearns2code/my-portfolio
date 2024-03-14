import Projectsitems from "./Projectsitems";
import bookiImg from "/public/assets/projects/booki.webp";
import ohmyfoodImg from "/public/assets/projects/ohmyfood.webp";
import sophiebluelImg from "/public/assets/projects/sophiebluel.webp";
import kasaImg from "/public/assets/projects/kasa.webp";
import eventsImg from "/public/assets/projects/724events.webp";
import argentbankImg from "/public/assets/projects/argentbank.webp";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1440px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Projectsitems
            title="Booki"
            backgroungImg={bookiImg}
            alt="representation of booki project"
            description=""
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
