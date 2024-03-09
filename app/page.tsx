import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Icon from "./components/Icons";

export default function Main() {
  return (
    <>
      <div className="w-full h-screen text-center">
        <div className="max-w-[1440px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              Let&apos;s build something amazing together.
            </p>
            <h1 className="py-4 text-gray-700">
              Hello, my name is <span className="text-[#5651e5]">Max.</span>
            </h1>
            <h1 className="py-2 text-gray-700">I&apos;m Front-End Developer</h1>
            <p className="py-4 text-gray-500 max-w-[70%] m-auto">
              I specialize in building fast, responsive, and accessible
              websites.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsPersonLinesFill />
              </div>
            </div>
          </div>
        </div>
      </div>
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
              My career has seen a transformation from traditional finance and
              HR roles to the dynamic field of technology. Progressing from
              junior general accountant to leadership positions such as
              financial controller and Head of Finance and HR for a fashion
              company, I&apos;ve honed a robust skill set in financial
              management, strategic planning, and team leadership. These
              experiences have honed my ability to analyze complex data and
              communicate effectively with stakeholders.
            </p>
            <p className="py-2 text-gray-600">
              Motivated by a passion for technology and a drive for continuous
              growth, I have embraced a new challenge as a Front-End Developer.
              Through dedicated studies and immersive projects, I&apos;ve become
              proficient in HTML, CSS, JavaScript, and React, focusing on
              crafting intuitive and visually appealing user interfaces. This
              transition in my career reflects my commitment to learning and
              adapting to new challenges.
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
              height={400}
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:h-screen p-2">
        <div className="max-w-[1440px] mx-auto flex flex-col justify-center h-full">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Skills
          </p>
          <h2 className="py-4">What I can do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Icon name="html" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Icon name="css" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Icon name="sass" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Sass</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Icon name="tailwind" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Icon name="javascript" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Javascript</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Icon name="react" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Icon name="next" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>NextJS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Icon name="TS" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>TypeScript</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Icon name="figma" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Figma</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Icon name="redux" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Redux Toolkit</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Icon name="jest" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Jest</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Icon name="github" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>GitHub</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
