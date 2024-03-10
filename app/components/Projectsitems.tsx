import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectsitemsProps {
  title: string;
  backgroungImg: StaticImageData;
  alt: string;
  description: string;
  projectUrl: string;
}

const Projectsitems: React.FC<ProjectsitemsProps> = ({title, backgroungImg, alt, description, projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroungImg}
        alt={alt}
        width={700}
        height={400}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-white text-2xl tracking-wider text-center">
          {title}
        </h3>
        <p className="text-white pb-4 pt-2 text-center">
          {description}
        </p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Projectsitems;
