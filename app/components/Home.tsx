import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1440px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&apos;s build something amazing together.
          </p>
          <h1 className="py-4 text-gray-700">
            Hello, my name is <span className="text-[#5651e5]">Max.</span>
          </h1>
          <h1 className="py-2 text-gray-700">I&apos;m a Front-End Developer</h1>
          <p className="py-4 text-gray-500 max-w-[70%] m-auto">
            I specialize in building fast, responsive, and accessible websites.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              href="https://www.linkedin.com/in/maxime-dewynter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://github.com//maxlearns2code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link
              href="mailto:maxdevvynter@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
