import Skillsitems from "../components/Skillsitems";
import data from "../lib/data/data.json";

const Skills = () => {
  const skills = data.skills;
  return (
    <section id="skills" className="w-full lg:h-screen px-5 md:px-10 pt-10">
      <div className="max-w-[1440px] m-auto pt-14 lg:pt-0 w-full flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-tertiary-color dark:text-quaternary-color">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((el) => {
            return <Skillsitems key={el.id} name={el.name} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
