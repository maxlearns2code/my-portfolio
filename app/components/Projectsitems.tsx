import Image from "next/image";
import Link from "next/link";

interface ProjectsitemsProps {
  title: string;
  cover: string;
  alt: string;
  description: string;
  link: string;
}

const Projectsitems: React.FC<ProjectsitemsProps> = ({
  title,
  cover,
  alt,
  description,
  link,
}) => {
  return (
    <article className="relative flex items-center justify-center h-auto w-full rounded-xl group shadow-md shadow-gray-400 hover:scale-105 ease-in duration-300">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={cover}
        alt={alt}
        width={700}
        height={400}
        loading="lazy"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <div className="hidden group-hover:block absolute">
        <h3 className="text-2xl tracking-wider text-center">{title}</h3>
        <p className="p-1 text-center">{description}</p>
        <Link
          className="flex items-center justify-center"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Code</button>
        </Link>
      </div>
    </article>
  );
};

export default Projectsitems;
