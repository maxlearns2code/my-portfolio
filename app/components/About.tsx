import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1440px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I am a Front-End Developer, specializing in building exceptional
            websites, applications, and everything in between.
          </p>
          <p className="py-2 text-gray-600">
            My career has seen a transformation from traditional finance and HR
            roles to the dynamic field of technology. Progressing from junior
            general accountant to leadership positions such as financial
            controller and Head of Finance and HR for a fashion company,
            I&apos;ve honed a robust skill set in financial management,
            strategic planning, and team leadership. These experiences have
            honed my ability to analyze complex data and communicate effectively
            with stakeholders.
          </p>
          <p className="py-2 text-gray-600">
            Motivated by a passion for technology and a drive for continuous
            growth, I have embraced a new challenge as a Front-End Developer.
            Through dedicated studies and immersive projects, I&apos;ve become
            proficient in HTML, CSS, JavaScript, and React, focusing on crafting
            intuitive and visually appealing user interfaces. This transition in
            my career reflects my commitment to learning and adapting to new
            challenges.
          </p>
          <p className="py-2 text-gray-600">
            I am eager to bring my unique blend of skills and experience to a
            team that values collaboration, creativity, and innovation. I am
            excited to contribute to projects that push the boundaries of what
            is possible in web development.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out my work and get in touch if you&apos;d like to work
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-grtay-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease duration-300">
          <Image
            className="rounded-xl"
            src="/assets/character.webp"
            alt="character"
            width={400}
            height={300}
            style={{ objectFit: "cover", width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
