import Image from "next/image";
import Link from "next/link";
import { RiDownload2Fill } from "react-icons/ri";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full md:h-screen px-10 pt-10 flex items-center overflow-hidden"
    >
      <div className="max-w-[1440px] m-auto pt-14 flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="md:w-[50%] md:ml-20 w-[275px] text-animation">
          <p className="uppercase mt-8 text-sm tracking-widest">
            Let&apos;s build something amazing together.
          </p>
          <h1 className="py-2">
            Hi, I&apos;m <span className="text-tertiary-color dark:text-quaternary-color">Max.</span>
            <br />
            <span className="py-2">A Front-End Developer</span>
          </h1>
          <p className="max-w-[70%]">
            I specialize in building fast, responsive, and accessible websites.
          </p>
          <div className="flex justify-center md:justify-start max-w-[330px] py-8">
            <Link href="/#contact">
              <button className="mr-8">Hire me</button>
            </Link>
            <Link
              href="/assets/maxdewyntercv.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex gap-1">
                My CV <RiDownload2Fill size={20} />
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-[50%] img-animation">
          <Image
            className="rounded-xl"
            src="/assets/home.webp"
            alt="home character"
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
