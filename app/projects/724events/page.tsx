import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import eventsImg from "/public/assets/projects/724events.webp";

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          className="absolute z-1"
          src={eventsImg}
          alt="/"
          loading="eager"
          priority={true}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <div className="absolute top-[70%] max-w-[1440px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">724 Events</h2>
          <h3>HTML / CSS / Sass / JavaScript / Jest</h3>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-tertiary-color">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve built</h2>
          <p>
            724 Events is a simple HTML / CSS / Sass / JavaScript / Jest project. It is a landing page for an event website. I used HTML, CSS, Sass, JavaScript and Jest to build it. It is a simple project but it helped me to improve my skills in HTML, CSS, Sass, JavaScript and Jest.
          </p>
          <button className="mt-4 mr-8">Demo</button>
          <button className="mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Sass
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Jest
              </p>
            </div>
          </div>
        </div>
        <Link className="underline cursor-pointer" href="/#projects">
          Back
        </Link>
      </div>
    </div>
  );
}
