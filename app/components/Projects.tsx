import Projectsitems from "./Projectsitems";
import bookiImg from "/public/assets/projects/booki.webp";
import ohmyfoodImg from "/public/assets/projects/ohmyfood.webp";
import sophiebluelImg from "/public/assets/projects/sophiebluel.webp";
import kasaImg from "/public/assets/projects/kasa.webp";
import eventImg from "/public/assets/projects/724events.webp";
import argentbankImg from "/public/assets/projects/argentbank.webp";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Projectsitems
            title="Booki"
            backgroungImg={bookiImg}
            alt="représentation du projet booki"
            description=""
            projectUrl="/"
          />
          <Projectsitems
            title="Ohmyfood"
            backgroungImg={ohmyfoodImg}
            alt="représentation du projet ohmyfood"
            description=""
            projectUrl="/"
          />
          <Projectsitems
            title="Sophie Bluel"
            backgroungImg={sophiebluelImg}
            alt="représentation du projet sophie bluel"
            description=""
            projectUrl="/"
          />
          <Projectsitems
            title="Kasa"
            backgroungImg={kasaImg}
            alt="représentation du projet kasa"
            description=""
            projectUrl="/"
          />
          <Projectsitems
            title="724 Events"
            backgroungImg={eventImg}
            alt="représentation du projet 724 Events"
            description=""
            projectUrl="/"
          />
          <Projectsitems
            title="Argent Bank"
            backgroungImg={argentbankImg}
            alt="représentation du projet Argent Bank"
            description=""
            projectUrl="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
