import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="w-full md:h-screen p-10 flex items-center">
      <div className="max-w-[1440px] m-auto md:grid grid-cols-4 gap-8 items-center">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-tertiary-color dark:text-quaternary-color">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2">
            I am a Front-End Developer, specializing in building exceptional
            websites, applications, and everything in between.
          </p>
          <p className="py-2">
            My career has seen a transformation from traditional finance and HR
            roles to the dynamic field of technology. Progressing from junior
            general accountant to leadership positions such as financial
            controller and Head of Finance and HR for a fashion company,
            I&apos;ve honed a robust skill set in financial management,
            strategic planning, and team leadership. These experiences have
            honed my ability to analyze complex data and communicate effectively
            with stakeholders.
          </p>
          <p className="py-2">
            Motivated by a passion for technology and a drive for continuous
            growth, I have embraced a new challenge as a Front-End Developer.
            Through dedicated studies and immersive projects, I&apos;ve become
            proficient in HTML, CSS, JavaScript, and React, focusing on crafting
            intuitive and visually appealing user interfaces. This transition in
            my career reflects my commitment to learning and adapting to new
            challenges.
          </p>
          <p className="py-2">
            I am eager to bring my unique blend of skills and experience to a
            team that values collaboration, creativity, and innovation. I am
            excited to contribute to projects that push the boundaries of what
            is possible in web development.
          </p>
          <Link href="/#projects">
            <p className="py-2 italic cursor-pointer">
              Check out some of my latest projects.
            </p>
            <span className="sr-only">Go to my projects</span>
          </Link>
        </div>
        <div className="col-span-2">
          <Image
            className="rounded-xl m-auto"
            src="/assets/about.webp"
            alt="about character"
            width={400}
            height={500}
            loading="lazy"
            style={{ objectFit: "cover", width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
