import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full md:h-screen px-5 md:px-10 pt-10 flex"
    >
      <div className="max-w-[1440px] m-auto pt-14 lg:pt-0 w-full flex flex-col justify-center">
        <p className="uppercase text-xl tracking-widest text-tertiary-color dark:text-quaternary-color">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="flex flex-col md:flex-row items-center justify-center shadow-md shadow-gray-400 rounded-xl p-4">
          <div className="w-full h-full">
            <div className="lg:p-4 h-full flex justify-between ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300 m-auto"
                  src="/assets/contact.webp"
                  alt="contact character"
                  width={710}
                  height={568}
                  loading="lazy"
                  style={{ objectFit: "cover", width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="flex flex-col py-4 items-center justify-center text-center md:text-start ">
              <h2 className="py-2 text-center">
                <span className="text-tertiary-color dark:text-quaternary-color">
                  Max
                </span>{" "}
                Dewynter
              </h2>
              <p>Front-End Developer</p>
              <p className="py-2 text-center">
                I&apos;m available for freelance or full-time positions.
                <br />
                Contact me and let&apos;s talk.
              </p>
              <p>Connect with me</p>
              <div className="flex items-center justify-center md:justify-start gap-10 py-4">
                <Link
                  tabIndex={0}
                  aria-label="take a look at my linkedin profile"
                  href="https://www.linkedin.com/in/maxime-dewynter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                    <span className="sr-only">Linkedin link</span>
                  </div>
                </Link>
                <Link
                  tabIndex={0}
                  aria-label="take a look at my github profile"
                  href="https://github.com//maxlearns2code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                    <span className="sr-only">Github link</span>
                  </div>
                </Link>
                <Link
                  tabIndex={0}
                  aria-label="send me an email"
                  href="mailto:maxdevvynter@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                    <span className="sr-only">Email link</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="text-tertiary-color dark:text-quaternary-color"
                size={25}
              />
              <span className="sr-only">Back to Home</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
