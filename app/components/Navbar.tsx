"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const HandleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 100) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-md shadow-gray-400 z-[10] bg-primary-color dark:bg-secondary-color"
          : "fixed w-full h-20 z-[10] bg-primary-color dark:bg-secondary-color"
      }
    >
      <div className="flex justify-between items-center w-full h-full">
        <div className="flex">
          <Link href="/">
            <p className="ml-10 mr-2 mt-1 uppercase font-bold hover:border-b">
              <span className="text-tertiary-color dark:text-quaternary-color">
                Max.
              </span>
              Dewynter
            </p>
          </Link>
          <ThemeSwitch />
        </div>
        <nav>
          <ul className="hidden md:flex mt-1">
            <Link href="/#home">
              <li className="mr-10 uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="mr-10 uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="mr-10 uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="mr-10 uppercase hover:border-b">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="mr-10 uppercase hover:border-b">Contact</li>
            </Link>
          </ul>
          <div onClick={HandleNav} className="md:hidden mr-5">
            <AiOutlineMenu size={25} />
          </div>
        </nav>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-primary-color dark:bg-secondary-color p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <p className="text-1xl font-bold uppercase">
                  <span className="text-tertiary-color dark:text-quaternary-color">
                    Max.
                  </span>
                  Dewynter
                </p>
              </Link>
              <div
                onClick={HandleNav}
                className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className=" w-[85%] md:w-[90%] py-4">
                Let&apos;s build something amazing together.
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link onClick={() => setNav(false)} href="/#home">
                  <li className="py-4 uppercase">Home</li>
                </Link>
                <Link onClick={() => setNav(false)} href="/#about">
                  <li className="py-4 uppercase">About</li>
                </Link>
                <Link onClick={() => setNav(false)} href="/#skills">
                  <li className="py-4 uppercase">Skills</li>
                </Link>
                <Link onClick={() => setNav(false)} href="/#projects">
                  <li className="py-4 uppercase">Projects</li>
                </Link>
                <Link onClick={() => setNav(false)} href="/#contact">
                  <li className="py-4 uppercase">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className=" uppercase text-tertiary-color dark:text-quaternary-color">
                  Let&apos;s connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <Link
                    tabIndex={0}
                    aria-label="take a look at my linkedin profile"
                    href="https://www.linkedin.com/in/maxime-dewynter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
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
                    <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
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
                    <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <AiOutlineMail />
                      <span className="sr-only">Email link</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
