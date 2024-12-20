"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Intro = () => {
  const pathname = usePathname();
  return (
    <Link
      href="/"
      className={`w-full p-2 mb-2 rounded-md flex items-center justify-between transition-all duration-300 ease-in-out ${
        pathname === "/" ? "text-primary" : "text-gray-200 hover:bg-primary"
      }
            `}
    >
      Instructions Spoofer
    </Link>
  );
};
export default Intro;
