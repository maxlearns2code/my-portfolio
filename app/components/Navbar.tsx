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
          ? "fixed w-full left-0 top-0 p-5 md:px-10 shadow-md shadow-gray-400 z-[10] bg-primary-color dark:bg-secondary-color"
          : "fixed w-full left-0 top-0 p-5 md:px-10 z-[10] bg-primary-color dark:bg-secondary-color"
      }
    >
      <div className="flex justify-between items-center w-full h-full">
        <div className="flex justify-between items-center">
          <p className="mr-2 mt-1 uppercase font-bold hover:border-b">
            <Link href="/">
              <span className="text-tertiary-color dark:text-quaternary-color">
                Max.
              </span>
              Dewynter
            </Link>
          </p>
          <ThemeSwitch />
        </div>
        <nav>
          <ul className="hidden md:flex mt-1 space-x-10">
            <li className="uppercase hover:border-b">
              <Link href="/#home">Home</Link>
            </li>
            <li className="uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="uppercase hover:border-b">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="uppercase hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          <button onClick={HandleNav} className="md:hidden px-2 pb-2">
            <AiOutlineMenu />
          </button>
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
              ? "md:hidden fixed left-0 top-0 w-[80%] h-screen bg-primary-color dark:bg-secondary-color py-5 px-10  ease-in duration-500"
              : "fixed left-[-100%] top-0 py-5 px-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <p className="mt-1 uppercase font-bold hover:border-b">
                <Link href="/">
                  <span className="text-tertiary-color dark:text-quaternary-color">
                    Max.
                  </span>
                  Dewynter
                </Link>
              </p>
              <button onClick={HandleNav} className="px-2 pb-2">
                <AiOutlineClose />
              </button>
            </div>
            <div className="border-b border-gray-300 mt-10">
              <p className=" w-[80%] py-5">
                Let&apos;s build something amazing together.
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <li className="py-4 uppercase">
                  <Link onClick={() => setNav(false)} href="/#home">
                    Home
                  </Link>
                </li>
                <li className="py-4 uppercase">
                  <Link onClick={() => setNav(false)} href="/#about">
                    About
                  </Link>
                </li>
                <li className="py-4 uppercase">
                  <Link onClick={() => setNav(false)} href="/#skills">
                    Skills
                  </Link>
                </li>
                <li className="py-4 uppercase">
                  <Link onClick={() => setNav(false)} href="/#projects">
                    Projects
                  </Link>
                </li>
                <li className="py-4 uppercase">
                  <Link onClick={() => setNav(false)} href="/#contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className=" py-20">
                <p className="mb-5 uppercase text-tertiary-color dark:text-quaternary-color">
                  Let&apos;s connect
                </p>
                <div className="flex items-center justify-between my-5 w-full">
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
