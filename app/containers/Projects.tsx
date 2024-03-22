import Projectsitems from "../components/Projectsitems";
import data from "../lib/data/data.json";

const Projects = () => {
  const projects = data.projects;
  return (
    <section id="projects" className="w-full px-5 md:px-10 pt-10">
      <div className="max-w-[1440px] mx-auto pt-14">
        <p className="uppercase text-xl tracking-widest text-tertiary-color dark:text-quaternary-color">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((el) => {
            return (
              <Projectsitems
                key={el.id}
                cover={el.cover}
                alt={el.alt}
                title={el.title}
                description={el.description}
                link={el.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
