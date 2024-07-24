import Image from "next/image";
import Link from "next/link";
import { RiDownload2Fill } from "react-icons/ri";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full md:h-screen px-5 md:px-10 pt-10 flex items-center text-center md:text-left overflow-hidden"
    >
      <div className="max-w-[1440px] m-auto pt-14 md:pt-0 flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="md:w-[50%] text-animation md:pl-20">
          <p className="mt-8 mb-3 text:sm md:text-lg tracking-widest">
            Let&apos;s build something amazing together.
          </p>
          <h1 className="py-2">
            Hi, I&apos;m <span className="text-tertiary-color dark:text-quaternary-color">Max.</span>
            <br />
            <span className="py-2">A Front-End Developer</span>
          </h1>
          <p className="text:sm md:text-lg tracking-widest">
            I specialize in building fast, responsive, and accessible websites.
          </p>
          <div className="flex items-center justify-center md:justify-start md:max-w-[330px] py-8">
            <Link href="/#contact">
              <button className="mr-8">Hire me</button>
            </Link>
            <Link
              href="/assets/CVMaximeDewynter.pdf"
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
            src="/assets/home.webp"
            alt="home character"
            width={710}
            height={568}
            loading="eager"
            style={{ objectFit: "cover", width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
