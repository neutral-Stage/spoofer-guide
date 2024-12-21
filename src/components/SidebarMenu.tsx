"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { type MenuItem } from "./Sidebar";
import SidebarSubmenu from "./SidebarSubmenu";

const SidebarMenu = ({ parent }: { parent: MenuItem }) => {
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
      <button
        type="button"
        onClick={toggleSubMenu}
        className={`w-full py-2 mb-2 rounded-md flex items-center justify-between transition-all duration-300 ease-in-out ${
          pathname.includes(parent.path)
            ? "text-gray-300 bg-primary"
            : "text-gray-200 hover:bg-primary"
        }
            `}
      >
        <span className="ml-2">{parent.title}</span>

        <ChevronRight
          className={`transition-all duration-300 ease-in-out ${
            subMenuOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out
              ${subMenuOpen ? "max-h-screen" : "max-h-0"}
            `}
      >
        {parent &&
          parent?.children?.map((child) => {
            if (child.children) {
              return <SidebarSubmenu key={child.path} parent={child} />;
            } else {
              return (
                <Link
                  key={child.path}
                  href={child.path}
                  className={`block py-2 pl-8 hover:text-primary ${
                    pathname === child.path ? "text-primary" : "text-gray-200"
                  }`}
                >
                  {child.title}
                </Link>
              );
            }
          })}
      </div>
    </div>
  );
};

export default SidebarMenu;
