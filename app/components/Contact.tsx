import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <section id="contact" className="w-full md:h-screen p-10 flex items-center">
      <div className="max-w-[1440px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-tertiary-color">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid lg:grid-cols-4 gap-8 shadow-md shadow-gray-400 rounded-xl p-4">
          <div className="col-span-3 lg:col-span-2 w-full h-full">
            <div className="lg:p-4 h-full flex justify-between ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300 m-auto"
                  src="/assets/contact.webp"
                  alt="character"
                  width={400}
                  height={300}
                  loading="lazy"
                  style={{ objectFit: "cover", width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2 w-full h-full">
            <div className="lg:p-4 h-full flex">
              <div className="flex flex-col py-4 justify-center ">
                <h2 className="py-2">
                  <span className="text-tertiary-color">Max</span> Dewynter
                </h2>
                <p>Front-End Developer</p>
                <p className="py-2">
                  I&apos;m available for freelance or full-time positions.
                  Contact me and let&apos;s talk.
                </p>
                <p className="uppercase py-2">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <Link
                    href="https://www.linkedin.com/in/maxime-dewynter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link
                    href="https://github.com//maxlearns2code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link
                    href="mailto:maxdevvynter@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-md shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-tertiary-color" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
