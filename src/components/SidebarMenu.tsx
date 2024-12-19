
'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type ParentMenuItem } from './Sidebar';



const SidebarMenu = ({ parent }: {parent: ParentMenuItem}) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(pathname.includes(parent.path) ? true : false);
    const toggleSubMenu = () => {
      setSubMenuOpen(!subMenuOpen);
    };
  return (
    <div>
          <button 
            type="button"
            onClick={toggleSubMenu}
            className={`w-full py-2 rounded-md flex items-center justify-between transition-all duration-300 ease-in-out ${pathname.includes(parent.path)
                ? 'text-gray-300 bg-primary' 
                : 'text-gray-200 hover:bg-primary'}
            `}
          >
            <span className='ml-2'>{parent.title}</span>
            
            <ChevronRight className={`transition-all duration-300 ease-in-out ${subMenuOpen ? 'rotate-90' : ''}`} />
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out
              ${subMenuOpen ? 'max-h-screen' : 'max-h-0'}
            `}
          >
            {parent.children.map((child) => (
              <Link
                key={child.path} 
                href={child.path}
                className={`
                  block p-3 pl-6 
                  ${pathname===child.path
                    ? 'text-primary' 
                    : 'text-gray-400 hover:text-primary'}
                `}
              >
                {child.title}
              </Link>
            ))}
          </div>
        </div>
  )
}

export default SidebarMenu