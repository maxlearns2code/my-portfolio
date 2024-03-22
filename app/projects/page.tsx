import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import bookiImg from "/public/assets/projects/ohmyfood.webp";

export default function Page() {
  return (
    <div className="w-full md:h-screen px-10 pt-10 flex flex-col items-center">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <Image
          className="absolute z-1"
          src={bookiImg}
          alt="/"
          loading="eager"
          priority={true}
          style={{ objectFit: "cover", objectPosition:"0px 0px", width: "100%", height: "100%" }}
        />
        
      </div>
      <div className="max-w-[1440px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-tertiary-color dark:text-quaternary-color">
            Projects
          </p>
          <h1 className="py-4">Booki</h1>
          <p>
            Is a landing page for a booking website. I used HTML and CSS to build it. It is a simple project but it helped me to improve my skills in HTML and CSS.
          </p>
          <button className="mt-4 mr-8">Demo</button>
          <button className="mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
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
