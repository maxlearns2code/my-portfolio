import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full md:h-screen px-5 md:px-10 pt-10 flex flex-col items-center justify-center text-center md:text-left overflow-hidden">
      <h2 className="text-tertiary-color dark:text-quaternary-color text-8xl">404</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}