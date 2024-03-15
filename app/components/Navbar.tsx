"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [navColor, setNavColor] = useState("#1f2937");

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${searchParams}`;
    if (
      url === "/projects/booki" ||
      url === "/projects/ohmyfood" ||
      url === "/projects/sophiebluel" ||
      url === "/projects/kasa" ||
      url === "/projects/724events" ||
      url === "/projects/argentbank"
    ) {
      setNavBg("transparent");
      setNavColor("#f8f8f8");
    } else {
      setNavBg("#ecf0f3");
      setNavColor("#1f2937");
    }
  }, [pathname, searchParams]);

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
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <p className="ml-10 font-bold text-sm uppercase text-[#5651e5] hover:border-b">
            Max.<span className="text-gray-700">Dewynter</span>
          </p>
        </Link>
        <div>
          <ul style={{ color: `${navColor}` }} className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={HandleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <p className="text-1xl uppercase text-[#5651e5]">
                  Max.<span className="text-gray-700">Dewynter</span>
                </p>
              </Link>
              <div
                onClick={HandleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
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
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link onClick={() => setNav(false)} href="/#about">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link onClick={() => setNav(false)} href="/#skills">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link onClick={() => setNav(false)} href="/#projects">
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link onClick={() => setNav(false)} href="/#contact">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className=" uppercase tracking-widest text-[#5651e5]">
                  Let&apos;s connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <Link
                    href="https://www.linkedin.com/in/maxime-dewynter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link
                    href="https://github.com//maxlearns2code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link
                    href="mailto:maxdevvynter@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <AiOutlineMail />
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
