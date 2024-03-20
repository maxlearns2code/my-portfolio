import Image from "next/image";
import Link from "next/link";
import { RiDownload2Fill } from "react-icons/ri";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full md:h-screen p-10 flex items-center overflow-hidden"
    >
      <div className="max-w-[1440px] m-auto flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="w-[50%] md:ml-20 text-animation">
          <p className="uppercase mt-8 text-sm tracking-widest text-gray-700 text-left">
            Let&apos;s build something amazing together.
          </p>
          <h1 className="py-2 text-secondary-color text-left">
            Hi, I&apos;m <span className="text-tertiary-color">Max.</span>
            <br />
            <span className="py-2 text-secondary-color">
              A Front-End Developer
            </span>
          </h1>
          <p className="text-gray-700 max-w-[70%] text-left">
            I specialize in building fast, responsive, and accessible websites.
          </p>
          <div className="flex max-w-[330px] py-8">
            <Link href="/#contact">
              <button className="mr-8">Hire me</button>
            </Link>
            <Link
              href="/assets/maxdewyntercv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex gap-1">My CV <RiDownload2Fill size={20}/></button>
            </Link>
          </div>
        </div>
        <div className="w-[50%] mt-10 md:mt-0 img-animation">
          <Image
            className="rounded-xl"
            src="/assets/home.webp"
            alt="character"
            width={705}
            height={565}
            loading="eager"
            style={{ objectFit: "cover", width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
