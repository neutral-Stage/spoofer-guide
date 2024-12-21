"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { type MenuItem } from "./Sidebar";

const SidebarSubmenu = ({ parent }: { parent: MenuItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(
    pathname.includes(parent.path) ? true : false
  );
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  useEffect(() => {
    setSubMenuOpen(pathname.includes(parent.path));
  }, [parent.path, pathname]);
  return (
    <div>
      <Link
        href={parent.path}
        className={`w-full py-2 pl-8 flex items-center justify-between transition-all duration-300 ease-in-out ${
          pathname === parent.path
            ? "text-primary"
            : "text-gray-200 hover:border-primary"
        }
            `}
      >
        <span>{parent.title}</span>

        <button type="button" onClick={toggleSubMenu}>
          <ChevronRight
            className={`transition-all duration-300 ease-in-out rounded-full hover:bg-primary hover:text-gray-300 ${
              subMenuOpen ? "rotate-90" : ""
            }`}
          />
        </button>
      </Link>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out
              ${subMenuOpen ? "max-h-screen" : "max-h-0"}
            `}
      >
        {parent &&
          parent?.children?.map((child) => {
            return (
              <Link
                key={child.path}
                href={child.path}
                className={`py-1 h-6 my-1 transition-all duration-300 ease-in-out flex align-middle items-center ml-12 pl-2 border-l border-gray-300 text-gray-200 hover:border-primary hover:text-primary ${
                  pathname === child.path ? "text-primary border-primary" : ""
                }`}
              >
                {child.title}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default SidebarSubmenu;
